import * as THREE from "three";
import { GLTFExporter } from "three/addons/exporters/GLTFExporter.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { evaluateGeometry } from "./geometry";
import { useStudio } from "./store";
import { defaultMaterial, hexToRgb, uid, type BakedGeom, type StudioObject } from "./types";

function downloadBlob(filename: string, blob: Blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function downloadDataUrl(filename: string, dataUrl: string) {
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = filename;
  a.click();
}

export function downloadText(filename: string, text: string, mime = "text/plain") {
  downloadBlob(filename, new Blob([text], { type: mime }));
}

function meshFromObject(obj: StudioObject): THREE.Object3D | null {
  if (obj.kind === "mesh") {
    const geo = evaluateGeometry(obj);
    const mat = new THREE.MeshStandardMaterial({
      color: obj.material.color,
      metalness: obj.material.metalness,
      roughness: obj.material.roughness,
      emissive: obj.material.emissive,
      emissiveIntensity: obj.material.emissiveIntensity,
      opacity: obj.material.opacity,
      transparent: obj.material.opacity < 0.999,
      flatShading: obj.material.flat,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.name = obj.name;
    mesh.position.set(...obj.position);
    mesh.rotation.set(...obj.rotation);
    mesh.scale.set(...obj.scale);
    return mesh;
  }
  if (obj.kind === "light" && obj.light) {
    const g = new THREE.Group();
    g.name = obj.name;
    g.position.set(...obj.position);
    g.rotation.set(...obj.rotation);
    return g;
  }
  if (obj.kind === "camera") {
    const cam = new THREE.PerspectiveCamera(obj.cameraFov, 16 / 9, 0.1, 200);
    cam.name = obj.name;
    cam.position.set(...obj.position);
    cam.rotation.set(...obj.rotation);
    return cam;
  }
  return null;
}

export function exportSceneGlb(filename = "lumina.glb") {
  const root = new THREE.Group();
  root.name = "Lumina";
  for (const obj of useStudio.getState().objects) {
    if (!obj.visible) continue;
    const node = meshFromObject(obj);
    if (node) root.add(node);
  }
  const exporter = new GLTFExporter();
  exporter.parse(
    root,
    (res) => {
      if (res instanceof ArrayBuffer) {
        downloadBlob(filename, new Blob([res], { type: "model/gltf-binary" }));
      } else {
        downloadText(filename.replace(/\.glb$/, ".gltf"), JSON.stringify(res, null, 2), "model/gltf+json");
      }
    },
    (err) => {
      useStudio.getState().log({ kind: "err", text: String(err) });
    },
    { binary: true },
  );
}

function rgbTuple(hex: string) {
  const [r, g, b] = hexToRgb(hex);
  return `(${r.toFixed(4)}, ${g.toFixed(4)}, ${b.toFixed(4)}, 1)`;
}

export function exportBlenderPython(): string {
  const s = useStudio.getState();
  const lines: string[] = [
    "# Lumina → Blender 4.x",
    "# Y-up (Lumina) is converted to Z-up (Blender).",
    "import bpy",
    "from mathutils import Euler",
    "",
    "bpy.ops.object.select_all(action='SELECT')",
    "bpy.ops.object.delete(use_global=False)",
    "",
  ];
  const primMap: Record<string, string> = {
    cube: "bpy.ops.mesh.primitive_cube_add(size={size})",
    sphere: "bpy.ops.mesh.primitive_uv_sphere_add(radius={radius}, segments={segments}, ring_count={rings})",
    ico: "bpy.ops.mesh.primitive_ico_sphere_add(radius={radius}, subdivisions={subdiv})",
    cylinder: "bpy.ops.mesh.primitive_cylinder_add(radius={radius}, depth={depth})",
    cone: "bpy.ops.mesh.primitive_cone_add(radius1={radius}, depth={depth})",
    torus: "bpy.ops.mesh.primitive_torus_add(major_radius={radius}, minor_radius={tube})",
    plane: "bpy.ops.mesh.primitive_plane_add(size={size})",
    capsule: "bpy.ops.mesh.primitive_cylinder_add(radius={radius}, depth={depth})",
  };
  for (const obj of s.objects) {
    const [x, y, z] = obj.position;
    const loc = `(${x.toFixed(4)}, ${(-z).toFixed(4)}, ${y.toFixed(4)})`;
    const rot = `(${obj.rotation[0].toFixed(4)}, ${obj.rotation[2].toFixed(4)}, ${obj.rotation[1].toFixed(4)})`;
    if (obj.kind === "mesh") {
      const tmpl = primMap[obj.primitive];
      if (tmpl) {
        let call = tmpl;
        for (const [k, v] of Object.entries(obj.params)) call = call.replaceAll(`{${k}}`, String(v));
        call = call.replace(/\{[a-zA-Z]+\}/g, "1");
        lines.push(`${call.split("(")[0]}(${call.split("(")[1]?.replace(/\)$/, "")}, location=${loc})`.replace(", ,", ","));
        lines.push(`obj = bpy.context.object`);
      } else {
        lines.push(`bpy.ops.mesh.primitive_cube_add(location=${loc})`);
        lines.push(`obj = bpy.context.object`);
        lines.push(`# generator: ${obj.primitive} — refine in Lumina or replace with Geometry Nodes`);
      }
      lines.push(`obj.name = ${JSON.stringify(obj.name)}`);
      lines.push(`obj.rotation_euler = Euler(${rot}, 'XYZ')`);
      lines.push(`obj.scale = (${obj.scale.join(", ")})`);
      lines.push(`mat = bpy.data.materials.new(${JSON.stringify(obj.material.name)})`);
      lines.push(`mat.use_nodes = True`);
      lines.push(`bsdf = mat.node_tree.nodes.get('Principled BSDF')`);
      lines.push(`if bsdf:`);
      lines.push(`    bsdf.inputs['Base Color'].default_value = ${rgbTuple(obj.material.color)}`);
      lines.push(`    bsdf.inputs['Metallic'].default_value = ${obj.material.metalness}`);
      lines.push(`    bsdf.inputs['Roughness'].default_value = ${obj.material.roughness}`);
      if (obj.material.transmission > 0.01) {
        lines.push(`    bsdf.inputs['Transmission Weight'].default_value = ${obj.material.transmission}`);
      }
      lines.push(`obj.data.materials.append(mat)`);
      for (const m of obj.modifiers) {
        if (!m.enabled) continue;
        if (m.type === "subdiv") lines.push(`bpy.ops.object.modifier_add(type='SUBSURF')`);
        if (m.type === "mirror") lines.push(`bpy.ops.object.modifier_add(type='MIRROR')`);
        if (m.type === "array") lines.push(`bpy.ops.object.modifier_add(type='ARRAY')`);
        if (m.type === "solidify") lines.push(`bpy.ops.object.modifier_add(type='SOLIDIFY')`);
        if (m.type === "bevel") lines.push(`bpy.ops.object.modifier_add(type='BEVEL')`);
        if (m.type === "displace") lines.push(`bpy.ops.object.modifier_add(type='DISPLACE')`);
      }
      lines.push("");
    } else if (obj.kind === "light" && obj.light) {
      const map: Record<string, string> = { sun: "SUN", point: "POINT", spot: "SPOT", area: "AREA" };
      lines.push(`bpy.ops.object.light_add(type='${map[obj.light.type]}', location=${loc})`);
      lines.push(`lamp = bpy.context.object`);
      lines.push(`lamp.name = ${JSON.stringify(obj.name)}`);
      lines.push(`lamp.data.energy = ${obj.light.intensity * (obj.light.type === "sun" ? 40 : 80)}`);
      lines.push("");
    } else if (obj.kind === "camera") {
      lines.push(`bpy.ops.object.camera_add(location=${loc})`);
      lines.push(`cam = bpy.context.object`);
      lines.push(`cam.name = ${JSON.stringify(obj.name)}`);
      lines.push(`bpy.context.scene.camera = cam`);
      lines.push("");
    }
  }
  lines.push(`print("Lumina scene imported:", ${s.objects.length}, "objects")`);
  return lines.join("\n");
}

export async function importGltfFile(file: File) {
  const buf = await file.arrayBuffer();
  const loader = new GLTFLoader();
  const gltf = await loader.parseAsync(buf, "");
  const added: StudioObject[] = [];
  gltf.scene.updateMatrixWorld(true);
  gltf.scene.traverse((node) => {
    const mesh = node as THREE.Mesh;
    if (!mesh.isMesh) return;
    const geo = (mesh.geometry as THREE.BufferGeometry).clone();
    geo.applyMatrix4(mesh.matrixWorld);
    geo.center();
    const pos = geo.getAttribute("position");
    const nrm = geo.getAttribute("normal");
    const uv = geo.getAttribute("uv");
    const baked: BakedGeom = {
      position: Array.from(pos.array as Float32Array),
      normal: nrm ? Array.from(nrm.array as Float32Array) : undefined,
      index: geo.index ? Array.from(geo.index.array as Uint16Array | Uint32Array) : undefined,
      uv: uv ? Array.from(uv.array as Float32Array) : undefined,
    };
    const world = new THREE.Vector3();
    mesh.getWorldPosition(world);
    const color =
      mesh.material && !Array.isArray(mesh.material) && "color" in mesh.material
        ? "#" + (mesh.material as THREE.MeshStandardMaterial).color.getHexString()
        : "#c5c6ca";
    added.push({
      id: uid("im"),
      name: mesh.name || file.name.replace(/\.(gltf|glb)$/i, ""),
      kind: "mesh",
      visible: true,
      position: [world.x, world.y, world.z],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      primitive: "baked",
      params: {},
      material: { ...defaultMaterial(mesh.name || "Imported", color) },
      cameraFov: 45,
      modifiers: [],
      keyframes: [],
      baked,
    });
  });
  if (!added.length) throw new Error("No meshes in file");
  const st = useStudio.getState();
  st.pushHistory();
  st.replaceScene([...st.objects, ...added], added[0]?.id ?? null);
}

export function captureRender(
  gl: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
  width = 1920,
  height = 1080,
) {
  const canvas = gl.domElement;
  const prevW = canvas.width;
  const prevH = canvas.height;
  const dpr = gl.getPixelRatio();
  gl.setPixelRatio(1);
  gl.setSize(width, height, false);
  gl.render(scene, camera);
  const url = canvas.toDataURL("image/png");
  gl.setPixelRatio(dpr);
  gl.setSize(prevW / dpr, prevH / dpr, false);
  return url;
}
