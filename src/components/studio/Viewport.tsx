import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls,
  TransformControls,
  Text,
} from "@react-three/drei";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { RectAreaLightUniformsLib } from "three/addons/lights/RectAreaLightUniformsLib.js";
import { evaluateGeometry, geometrySignature } from "@/lib/studio/geometry";
import { evalObjectAtFrame, useStudio } from "@/lib/studio/store";
import { captureRender } from "@/lib/studio/export";
import { registerCapture } from "@/lib/studio/viewport-api";
import type { StudioObject } from "@/lib/studio/types";

RectAreaLightUniformsLib.init();

function useLive(obj: StudioObject) {
  const frame = useStudio((s) => s.frame);
  const live = evalObjectAtFrame(obj, frame);
  const dragging = useStudio((s) => s.transformDragging && s.activeId === obj.id);
  if (dragging) {
    return {
      position: undefined as unknown as [number, number, number],
      rotation: undefined as unknown as [number, number, number],
      scale: undefined as unknown as [number, number, number],
      skip: true,
    };
  }
  return { ...live, skip: false };
}

function StudioMesh({ obj, selected }: { obj: StudioObject; selected: boolean }) {
  const shading = useStudio((s) => s.shading);
  const sig = geometrySignature(obj);
  const geo = useMemo(() => evaluateGeometry(obj), [obj, sig]);
  useEffect(() => () => geo.dispose(), [geo]);
  const live = useLive(obj);
  const mat = obj.material;
  const common = {
    color: mat.color,
    roughness: mat.roughness,
    metalness: mat.metalness,
    emissive: mat.emissive,
    emissiveIntensity: mat.emissiveIntensity,
    wireframe: shading === "wire" || mat.wireframe,
    flatShading: mat.flat,
    transparent: mat.opacity < 0.999 || mat.transmission > 0.01,
    opacity: mat.opacity,
    side: THREE.DoubleSide,
  } as const;

  const material =
    shading === "wire" ? (
      <meshBasicMaterial color={selected ? "#e07820" : "#9aa0a8"} wireframe />
    ) : shading === "solid" ? (
      <meshLambertMaterial color={mat.color} wireframe={mat.wireframe} flatShading={mat.flat} />
    ) : (
      <meshPhysicalMaterial
        {...common}
        transmission={mat.transmission}
        thickness={mat.thickness}
        ior={mat.ior}
        clearcoat={mat.clearcoat}
        clearcoatRoughness={mat.clearcoatRoughness}
        envMapIntensity={mat.envMapIntensity}
        iridescence={mat.iridescence}
        sheen={mat.sheen}
        sheenRoughness={0.4}
      />
    );

  const isText = obj.primitive === "text";
  return (
    <group
      name={obj.id}
      position={live.skip ? undefined : live.position}
      rotation={live.skip ? undefined : live.rotation}
      scale={live.skip ? undefined : live.scale}
      visible={obj.visible}
      userData={{ id: obj.id }}
      onClick={(e) => {
        e.stopPropagation();
        useStudio.getState().select(obj.id, e.shiftKey);
      }}
    >
      {isText ? (
        <Text
          fontSize={Number(obj.params.size) || 0.55}
          color={mat.color}
          anchorX="center"
          anchorY="middle"
          depthOffset={-1}
        >
          {String(obj.params.text || "LUMINA")}
        </Text>
      ) : (
        <mesh geometry={geo} castShadow receiveShadow>
          {material}
        </mesh>
      )}
      {selected && shading !== "wire" && (
        <mesh geometry={geo}>
          <meshBasicMaterial color="#e07820" wireframe transparent opacity={0.35} />
        </mesh>
      )}
    </group>
  );
}

function LightNode({ obj, selected }: { obj: StudioObject; selected: boolean }) {
  const live = useLive(obj);
  const L = obj.light;
  if (!L) return null;
  const color = L.color;
  return (
    <group
      name={obj.id}
      position={live.skip ? undefined : live.position}
      rotation={live.skip ? undefined : live.rotation}
      visible={obj.visible}
      userData={{ id: obj.id }}
      onClick={(e) => {
        e.stopPropagation();
        useStudio.getState().select(obj.id, e.shiftKey);
      }}
    >
      {L.type === "sun" && (
        <directionalLight
          color={color}
          intensity={L.intensity}
          castShadow={L.castShadow}
          shadow-mapSize={[2048, 2048]}
          shadow-bias={-0.0002}
        />
      )}
      {L.type === "point" && (
        <pointLight color={color} intensity={L.intensity} distance={L.distance} castShadow={L.castShadow} />
      )}
      {L.type === "spot" && (
        <spotLight
          color={color}
          intensity={L.intensity}
          angle={L.angle}
          penumbra={0.35}
          distance={L.distance}
          castShadow={L.castShadow}
        />
      )}
      {L.type === "area" && (
        <rectAreaLight color={color} intensity={L.intensity} width={L.width} height={L.height} />
      )}
      <mesh>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshBasicMaterial color={selected ? "#e07820" : color} />
      </mesh>
    </group>
  );
}

function CameraNode({ obj, selected }: { obj: StudioObject; selected: boolean }) {
  const live = useLive(obj);
  return (
    <group
      name={obj.id}
      position={live.skip ? undefined : live.position}
      rotation={live.skip ? undefined : live.rotation}
      visible={obj.visible}
      userData={{ id: obj.id }}
      onClick={(e) => {
        e.stopPropagation();
        useStudio.getState().select(obj.id, e.shiftKey);
      }}
    >
      <mesh>
        <boxGeometry args={[0.28, 0.2, 0.4]} />
        <meshStandardMaterial color={selected ? "#e07820" : "#3a3c44"} metalness={0.4} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0, -0.28]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.14, 0.22, 12]} />
        <meshStandardMaterial color="#222" />
      </mesh>
    </group>
  );
}

function EmptyNode({ obj, selected }: { obj: StudioObject; selected: boolean }) {
  const live = useLive(obj);
  return (
    <group
      name={obj.id}
      position={live.skip ? undefined : live.position}
      rotation={live.skip ? undefined : live.rotation}
      scale={live.skip ? undefined : live.scale}
      visible={obj.visible}
      userData={{ id: obj.id }}
      onClick={(e) => {
        e.stopPropagation();
        useStudio.getState().select(obj.id, e.shiftKey);
      }}
    >
      <axesHelper args={[0.6]} />
      {selected && (
        <mesh>
          <octahedronGeometry args={[0.1, 0]} />
          <meshBasicMaterial color="#e07820" />
        </mesh>
      )}
    </group>
  );
}

function Nodes() {
  const objects = useStudio((s) => s.objects);
  const selected = useStudio((s) => s.selectedIds);
  return (
    <>
      {objects.map((obj) => {
        const sel = selected.includes(obj.id);
        if (obj.kind === "mesh") return <StudioMesh key={obj.id} obj={obj} selected={sel} />;
        if (obj.kind === "light") return <LightNode key={obj.id} obj={obj} selected={sel} />;
        if (obj.kind === "camera") return <CameraNode key={obj.id} obj={obj} selected={sel} />;
        return <EmptyNode key={obj.id} obj={obj} selected={sel} />;
      })}
    </>
  );
}

function Gizmo() {
  const show = useStudio((s) => s.showGizmo);
  const mode = useStudio((s) => s.transformMode);
  const activeId = useStudio((s) => s.activeId);
  const appMode = useStudio((s) => s.mode);
  const objectsLen = useStudio((s) => s.objects.length);
  const { scene } = useThree();
  const [target, setTarget] = useState<THREE.Object3D | null>(null);

  useEffect(() => {
    if (!activeId) {
      setTarget(null);
      return;
    }
    const obj = scene.getObjectByName(activeId) ?? null;
    setTarget(obj);
  }, [activeId, scene, objectsLen]);

  if (!show || appMode === "sculpt" || !target) return null;
  return (
    <TransformControls
      object={target}
      mode={mode}
      onMouseDown={() => {
        useStudio.getState().setTransformDragging(true);
        useStudio.getState().pushHistory();
      }}
      onMouseUp={() => {
        useStudio.getState().setTransformDragging(false);
        const id = target.name;
        useStudio.getState().updateObject(id, {
          position: [target.position.x, target.position.y, target.position.z],
          rotation: [target.rotation.x, target.rotation.y, target.rotation.z],
          scale: [target.scale.x, target.scale.y, target.scale.z],
        });
        if (useStudio.getState().autoKey) useStudio.getState().insertKeyframe(id);
      }}
    />
  );
}

function SculptLayer() {
  const mode = useStudio((s) => s.mode);
  const sculpt = useStudio((s) => s.sculpt);
  const activeId = useStudio((s) => s.activeId);
  const { camera, gl, scene } = useThree();
  const painting = useRef(false);
  const ray = useMemo(() => new THREE.Raycaster(), []);
  const pointer = useMemo(() => new THREE.Vector2(), []);

  useEffect(() => {
    if (mode !== "sculpt") return;
    const el = gl.domElement;
    const ndc = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      pointer.y = -((e.clientY - r.top) / r.height) * 2 + 1;
    };
    const apply = () => {
      if (!activeId) return;
      const group = scene.getObjectByName(activeId);
      const mesh = group?.getObjectByProperty("type", "Mesh") as THREE.Mesh | undefined;
      if (!mesh?.geometry) return;
      ray.setFromCamera(pointer, camera);
      const hits = ray.intersectObject(mesh, true);
      if (!hits[0]) return;
      const geo = mesh.geometry as THREE.BufferGeometry;
      const pos = geo.getAttribute("position") as THREE.BufferAttribute;
      const local = mesh.worldToLocal(hits[0].point.clone());
      const radius = sculpt.radius;
      const strength = sculpt.strength * 0.22;
      const v = new THREE.Vector3();
      const n = new THREE.Vector3();
      const nor = geo.getAttribute("normal");
      for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i);
        const d = v.distanceTo(local);
        if (d > radius) continue;
        const w = 1 - d / radius;
        const fall = w * w * (3 - 2 * w);
        if (nor) n.fromBufferAttribute(nor as THREE.BufferAttribute, i);
        else n.copy(v).normalize();
        if (sculpt.brush === "smooth") v.lerp(local, strength * fall * 0.2);
        else v.addScaledVector(n, strength * fall * (sculpt.brush === "inflate" ? 1.4 : 1));
        pos.setXYZ(i, v.x, v.y, v.z);
      }
      pos.needsUpdate = true;
      geo.computeVertexNormals();
    };
    const down = (e: PointerEvent) => {
      if (e.button !== 0) return;
      painting.current = true;
      ndc(e);
      apply();
    };
    const move = (e: PointerEvent) => {
      if (!painting.current) return;
      ndc(e);
      apply();
    };
    const up = () => {
      if (!painting.current) return;
      painting.current = false;
      if (!activeId) return;
      const group = scene.getObjectByName(activeId);
      const mesh = group?.getObjectByProperty("type", "Mesh") as THREE.Mesh | undefined;
      if (!mesh) return;
      const geo = mesh.geometry as THREE.BufferGeometry;
      const pos = geo.getAttribute("position");
      const nrm = geo.getAttribute("normal");
      useStudio.getState().updateObject(activeId, {
        primitive: "baked",
        baked: {
          position: Array.from(pos.array as Float32Array),
          normal: nrm ? Array.from(nrm.array as Float32Array) : undefined,
          index: geo.index ? Array.from(geo.index.array as ArrayLike<number>) as number[] : undefined,
        },
      });
    };
    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [mode, sculpt, activeId, camera, gl, scene, pointer, ray]);
  return null;
}

function Animator() {
  const acc = useRef(0);
  useFrame((_, dt) => {
    const s = useStudio.getState();
    if (!s.playing) return;
    acc.current += Math.min(dt, 0.1);
    const spf = 1 / Math.max(1, s.fps);
    while (acc.current >= spf) {
      acc.current -= spf;
      let f = s.frame + 1;
      if (f > s.frameEnd) f = s.frameStart;
      s.setFrame(f);
    }
  });
  return null;
}

function CaptureBinder() {
  const { gl, scene, camera } = useThree();
  useEffect(() => {
    registerCapture(() => {
      const url = captureRender(gl, scene, camera, 1920, 1080);
      useStudio.getState().setRenderDataUrl(url);
      return url;
    });
  }, [gl, scene, camera]);
  return null;
}

function LightsFill() {
  const shading = useStudio((s) => s.shading);
  if (shading === "rendered") return null;
  return (
    <>
      <hemisphereLight args={["#d7dce4", "#2a2c32", 0.55]} />
      <ambientLight intensity={0.22} />
    </>
  );
}

function WorldFx() {
  const shading = useStudio((s) => s.shading);
  const env = useStudio((s) => s.envPreset);
  const intensity = useStudio((s) => s.envIntensity);
  const bloom = useStudio((s) => s.bloom);
  const showGrid = useStudio((s) => s.showGrid);
  return (
    <>
      {(shading === "material" || shading === "rendered") && (
        <Environment preset={env} background={shading === "rendered"} environmentIntensity={intensity} />
      )}
      {showGrid && (
        <Grid
          infiniteGrid
          fadeDistance={40}
          fadeStrength={1}
          sectionColor="#3e4048"
          cellColor="#2a2c32"
          sectionSize={2}
          cellSize={0.5}
          position={[0, 0.001, 0]}
        />
      )}
      {shading !== "wire" && <ContactShadows position={[0, 0.0, 0]} opacity={0.45} scale={18} blur={2.2} far={8} />}
      {shading === "rendered" && bloom && (
        <EffectComposer>
          <Bloom luminanceThreshold={1.05} intensity={0.45} mipmapBlur />
          <Vignette darkness={0.45} offset={0.25} />
        </EffectComposer>
      )}
    </>
  );
}

export function Viewport() {
  const mode = useStudio((s) => s.mode);
  const shading = useStudio((s) => s.shading);
  return (
    <Canvas
      className="h-full w-full touch-none bg-viewport"
      shadows
      dpr={[1, 1.75]}
      gl={{
        preserveDrawingBuffer: true,
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.05,
      }}
      camera={{ position: [6.6, 4.1, 7.4], fov: 40, near: 0.05, far: 250 }}
      onPointerMissed={() => useStudio.getState().clearSelection()}
    >
      <color attach="background" args={[shading === "rendered" ? "#0e0f12" : "#1a1b1f"]} />
      {shading !== "rendered" && <fog attach="fog" args={["#1a1b1f", 22, 60]} />}
      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.12}
        enableRotate={mode !== "sculpt"}
        minDistance={1}
        maxDistance={80}
        maxPolarAngle={Math.PI * 0.49}
      />
      <LightsFill />
      <Nodes />
      <WorldFx />
      <Gizmo />
      <SculptLayer />
      <Animator />
      <CaptureBinder />
      <GizmoHelper alignment="bottom-right" margin={[56, 56]}>
        <GizmoViewport axisColors={["#c45c4a", "#6aa56f", "#5b7cbc"]} labelColor="#e8e8ea" />
      </GizmoHelper>
    </Canvas>
  );
}
