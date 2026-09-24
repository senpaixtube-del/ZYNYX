import * as THREE from "three";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { noise3 } from "./noise";
import { applyBevelMesh, applyDisplaceTextured, applySolidifyShell, loopSubdivide } from "./modifiers";
import type { Primitive, StudioObject, Triple } from "./types";

export { noise3 };

function num(params: Record<string, number | string>, key: string, fallback: number): number {
  const v = params[key];
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n : fallback;
}

function str(params: Record<string, number | string>, key: string, fallback: string): string {
  const v = params[key];
  return typeof v === "string" && v.length ? v : fallback;
}

function xform(
  geo: THREE.BufferGeometry,
  pos: Triple = [0, 0, 0],
  rot: Triple = [0, 0, 0],
  scale: Triple = [1, 1, 1],
) {
  const m = new THREE.Matrix4().compose(
    new THREE.Vector3(...pos),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(...rot)),
    new THREE.Vector3(...scale),
  );
  geo.applyMatrix4(m);
  return geo;
}

function merge(geos: THREE.BufferGeometry[]) {
  const ok = geos.filter((g) => g.getAttribute("position"));
  if (!ok.length) return new THREE.BoxGeometry(0.2, 0.2, 0.2);
  for (const g of ok) {
    if (!g.index) g.setIndex([...Array(g.getAttribute("position").count).keys()]);
    if (!g.getAttribute("normal")) g.computeVertexNormals();
    if (!g.getAttribute("uv")) {
      const n = g.getAttribute("position").count;
      g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(n * 2), 2));
    }
  }
  const merged = BufferGeometryUtils.mergeGeometries(ok, false);
  ok.forEach((g) => g.dispose());
  return merged ?? new THREE.BoxGeometry(0.2, 0.2, 0.2);
}

function gearGeo(teeth: number, radius: number, depth: number, hole: number) {
  const t = Math.max(6, Math.floor(teeth));
  const shape = new THREE.Shape();
  const tooth = radius * 0.16;
  for (let i = 0; i < t; i++) {
    const a0 = (i / t) * Math.PI * 2;
    const a1 = ((i + 0.28) / t) * Math.PI * 2;
    const a2 = ((i + 0.42) / t) * Math.PI * 2;
    const a3 = ((i + 0.58) / t) * Math.PI * 2;
    const a4 = ((i + 0.72) / t) * Math.PI * 2;
    const fn = i === 0 ? "moveTo" : "lineTo";
    const pts: [number, number, number][] = [
      [Math.cos(a0) * radius, Math.sin(a0) * radius, 0],
      [Math.cos(a1) * radius, Math.sin(a1) * radius, 0],
      [Math.cos(a2) * (radius + tooth), Math.sin(a2) * (radius + tooth), 0],
      [Math.cos(a3) * (radius + tooth), Math.sin(a3) * (radius + tooth), 0],
      [Math.cos(a4) * radius, Math.sin(a4) * radius, 0],
    ];
    if (fn === "moveTo") shape.moveTo(pts[0][0], pts[0][1]);
    else shape.lineTo(pts[0][0], pts[0][1]);
    shape.lineTo(pts[1][0], pts[1][1]);
    shape.lineTo(pts[2][0], pts[2][1]);
    shape.lineTo(pts[3][0], pts[3][1]);
    shape.lineTo(pts[4][0], pts[4][1]);
  }
  shape.closePath();
  const holeR = Math.max(0.05, hole);
  const holePath = new THREE.Path();
  holePath.absellipse(0, 0, holeR, holeR, 0, Math.PI * 2, false);
  shape.holes.push(holePath);
  const g = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.03,
    bevelSegments: 2,
    curveSegments: 2,
  });
  g.center();
  g.rotateX(-Math.PI / 2);
  return g;
}

function stairsGeo(steps: number, width: number, rise: number, run: number) {
  const n = Math.max(2, Math.floor(steps));
  const geos: THREE.BufferGeometry[] = [];
  for (let i = 0; i < n; i++) {
    const h = rise;
    const box = new THREE.BoxGeometry(width, h, run);
    geos.push(xform(box, [0, i * rise + h / 2, i * run + run / 2]));
  }
  return merge(geos);
}

function helixCurve(turns: number, radius: number, height: number) {
  const pts: THREE.Vector3[] = [];
  const n = Math.max(24, Math.floor(turns * 28));
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const a = t * turns * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(a) * radius, t * height - height / 2, Math.sin(a) * radius));
  }
  return new THREE.CatmullRomCurve3(pts, false, "centripetal");
}

function columnGeo(height: number, radius: number) {
  const shaft = xform(new THREE.CylinderGeometry(radius, radius * 1.05, height * 0.72, 24), [
    0,
    0,
    0,
  ]);
  const base = xform(new THREE.CylinderGeometry(radius * 1.45, radius * 1.55, height * 0.08, 24), [
    0,
    -height * 0.4,
    0,
  ]);
  const plinth = xform(new THREE.BoxGeometry(radius * 3.1, height * 0.06, radius * 3.1), [
    0,
    -height * 0.47,
    0,
  ]);
  const cap = xform(new THREE.CylinderGeometry(radius * 1.55, radius * 1.35, height * 0.08, 24), [
    0,
    height * 0.4,
    0,
  ]);
  const abacus = xform(new THREE.BoxGeometry(radius * 3.2, height * 0.05, radius * 3.2), [
    0,
    height * 0.47,
    0,
  ]);
  return merge([shaft, base, plinth, cap, abacus]);
}

function treeGeo(seed: number, height: number) {
  const trunk = xform(new THREE.CylinderGeometry(0.08, 0.14, height * 0.45, 8), [
    0,
    height * 0.2,
    0,
  ]);
  const foliage: THREE.BufferGeometry[] = [trunk];
  const layers = 4;
  for (let i = 0; i < layers; i++) {
    const t = i / (layers - 1);
    const y = height * (0.38 + t * 0.42);
    const r = (1 - t) * 0.85 + 0.18;
    const cone = new THREE.ConeGeometry(r, height * 0.28, 8);
    foliage.push(xform(cone, [0, y, 0]));
  }
  const n = noise3(seed, 2, 9);
  foliage.push(xform(new THREE.SphereGeometry(0.12 + n * 0.08, 6, 6), [0.2, height * 0.55, 0.1]));
  return merge(foliage);
}

function rockGeo(radius: number, seed: number) {
  const g = new THREE.IcosahedronGeometry(radius, 2);
  const pos = g.getAttribute("position");
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const n = noise3(v.x * 2.2 + seed, v.y * 2.2, v.z * 2.2);
    v.multiplyScalar(0.72 + n * 0.55);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}

function vaseGeo(height: number, radius: number) {
  const pts: THREE.Vector2[] = [];
  for (let i = 0; i < 18; i++) {
    const t = i / 17;
    const r =
      radius *
      (0.35 + Math.sin(t * Math.PI) * 0.55 + (t > 0.82 ? (t - 0.82) * 1.6 : 0) + (t < 0.12 ? 0.2 : 0));
    pts.push(new THREE.Vector2(Math.max(0.04, r), t * height - height / 2));
  }
  return new THREE.LatheGeometry(pts, 32);
}

function dnaGeo(turns: number, radius: number, height: number) {
  const tube1 = new THREE.TubeGeometry(helixCurve(turns, radius, height), 80, 0.045, 8, false);
  const tube2 = new THREE.TubeGeometry(helixCurve(turns, radius, height), 80, 0.045, 8, false);
  const p = tube2.getAttribute("position");
  for (let i = 0; i < p.count; i++) {
    p.setXYZ(i, -p.getX(i), p.getY(i), -p.getZ(i));
  }
  tube2.computeVertexNormals();
  const rungs: THREE.BufferGeometry[] = [tube1, tube2];
  const count = Math.max(8, Math.floor(turns * 8));
  for (let i = 0; i < count; i++) {
    const t = (i + 0.5) / count;
    const a = t * turns * Math.PI * 2;
    const y = t * height - height / 2;
    const x = Math.cos(a) * radius;
    const z = Math.sin(a) * radius;
    const rung = new THREE.CylinderGeometry(0.025, 0.025, radius * 2, 6);
    rung.rotateZ(Math.PI / 2);
    rungs.push(xform(rung, [0, y, 0], [0, -a, 0]));
    void x;
    void z;
  }
  return merge(rungs);
}

function textFallback(size: number) {
  const s = new THREE.Shape();
  const w = size * 2.4;
  const h = size;
  s.moveTo(-w / 2, -h / 2);
  s.lineTo(w / 2, -h / 2);
  s.lineTo(w / 2, h / 2);
  s.lineTo(-w / 2, h / 2);
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: size * 0.22, bevelEnabled: false });
  g.center();
  return g;
}

function bakedGeo(obj: StudioObject) {
  const b = obj.baked;
  if (!b) return new THREE.BoxGeometry(1, 1, 1);
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(b.position, 3));
  if (b.normal && b.normal.length) g.setAttribute("normal", new THREE.Float32BufferAttribute(b.normal, 3));
  if (b.uv && b.uv.length) g.setAttribute("uv", new THREE.Float32BufferAttribute(b.uv, 2));
  if (b.index && b.index.length) g.setIndex(b.index);
  if (!b.normal?.length) g.computeVertexNormals();
  return g;
}

export function primitiveGeometry(type: Primitive, params: Record<string, number | string>, obj?: StudioObject) {
  const subdivBoost = 1;
  switch (type) {
    case "cube": {
      const s = num(params, "size", 1);
      return new THREE.BoxGeometry(s, s, s);
    }
    case "rounded": {
      const s = num(params, "size", 1);
      const r = num(params, "radius", 0.12);
      return new RoundedBoxGeometry(s, s, s, 4, r);
    }
    case "sphere":
      return new THREE.SphereGeometry(
        num(params, "radius", 0.75),
        Math.max(8, Math.floor(num(params, "segments", 32) * subdivBoost)),
        Math.max(6, Math.floor(num(params, "rings", 24) * subdivBoost)),
      );
    case "ico":
      return new THREE.IcosahedronGeometry(num(params, "radius", 0.75), Math.max(0, Math.floor(num(params, "subdiv", 1))));
    case "cylinder":
      return new THREE.CylinderGeometry(
        num(params, "radiusTop", num(params, "radius", 0.5)),
        num(params, "radiusBottom", num(params, "radius", 0.5)),
        num(params, "depth", 1.4),
        Math.max(6, Math.floor(num(params, "segments", 24))),
      );
    case "cone":
      return new THREE.ConeGeometry(
        num(params, "radius", 0.6),
        num(params, "depth", 1.4),
        Math.max(6, Math.floor(num(params, "segments", 24))),
      );
    case "torus":
      return new THREE.TorusGeometry(
        num(params, "radius", 0.7),
        num(params, "tube", 0.22),
        Math.max(8, Math.floor(num(params, "radial", 16))),
        Math.max(12, Math.floor(num(params, "tubular", 48))),
      );
    case "plane":
      return new THREE.PlaneGeometry(num(params, "size", 8), num(params, "size", 8), 1, 1).rotateX(-Math.PI / 2);
    case "capsule":
      return new THREE.CapsuleGeometry(num(params, "radius", 0.35), num(params, "depth", 0.9), 6, 16);
    case "knot":
      return new THREE.TorusKnotGeometry(
        num(params, "radius", 0.7),
        num(params, "tube", 0.22),
        Math.max(32, Math.floor(num(params, "tubular", 96))),
        Math.max(6, Math.floor(num(params, "radial", 16))),
        Math.max(1, Math.floor(num(params, "p", 2))),
        Math.max(1, Math.floor(num(params, "q", 3))),
      );
    case "gear":
      return gearGeo(num(params, "teeth", 16), num(params, "radius", 1), num(params, "depth", 0.22), num(params, "hole", 0.22));
    case "stairs":
      return stairsGeo(num(params, "steps", 8), num(params, "width", 1.6), num(params, "rise", 0.18), num(params, "run", 0.32));
    case "helix":
      return new THREE.TubeGeometry(
        helixCurve(num(params, "turns", 5), num(params, "radius", 0.55), num(params, "height", 2.2)),
        100,
        num(params, "tube", 0.08),
        8,
        false,
      );
    case "column":
      return columnGeo(num(params, "height", 3), num(params, "radius", 0.28));
    case "tree":
      return treeGeo(num(params, "seed", 3), num(params, "height", 2.4));
    case "rock":
      return rockGeo(num(params, "radius", 0.7), num(params, "seed", 4));
    case "vase":
      return vaseGeo(num(params, "height", 1.6), num(params, "radius", 0.45));
    case "dna":
      return dnaGeo(num(params, "turns", 4), num(params, "radius", 0.4), num(params, "height", 2.4));
    case "text":
      return textFallback(num(params, "size", 0.6));
    case "baked":
      return bakedGeo(obj ?? { baked: undefined } as StudioObject);
    default:
      return new THREE.BoxGeometry(1, 1, 1);
  }
}

function applyMirror(geo: THREE.BufferGeometry, axis: number) {
  const other = geo.clone();
  const s: Triple = [1, 1, 1];
  s[axis] = -1;
  xform(other, [0, 0, 0], [0, 0, 0], s);
  return merge([geo.clone(), other]);
}

function applyArray(geo: THREE.BufferGeometry, count: number, offset: Triple) {
  const n = Math.max(1, Math.floor(count));
  const parts: THREE.BufferGeometry[] = [];
  for (let i = 0; i < n; i++) {
    parts.push(xform(geo.clone(), [offset[0] * i, offset[1] * i, offset[2] * i]));
  }
  return merge(parts);
}

export function evaluateGeometry(obj: StudioObject): THREE.BufferGeometry {
  if (obj.kind !== "mesh") return new THREE.BufferGeometry();
  let geo =
    obj.primitive === "baked" || obj.baked
      ? bakedGeo(obj)
      : primitiveGeometry(obj.primitive, obj.params, obj);

  for (const mod of obj.modifiers) {
    if (!mod.enabled) continue;
    if (mod.type === "subdiv") {
      const next = loopSubdivide(geo, mod.params.levels ?? 1);
      if (next !== geo) {
        if (geo !== undefined) {
          /* previous geo may be replaced */
        }
        geo = next;
      }
    } else if (mod.type === "displace") {
      applyDisplaceTextured(geo, mod.params.amount ?? 0.15, mod.params.scale ?? 2.2, mod.params.texture ?? 0);
    } else if (mod.type === "solidify") {
      geo = applySolidifyShell(geo, mod.params.thickness ?? 0.06);
    } else if (mod.type === "mirror") {
      geo = applyMirror(geo, Math.max(0, Math.min(2, Math.floor(mod.params.axis ?? 0))));
    } else if (mod.type === "array") {
      geo = applyArray(geo, mod.params.count ?? 3, [
        mod.params.offsetX ?? 1.2,
        mod.params.offsetY ?? 0,
        mod.params.offsetZ ?? 0,
      ]);
    } else if (mod.type === "bevel") {
      geo = applyBevelMesh(geo, mod.params.width ?? 0.08, mod.params.segments ?? 1);
    }
  }
  geo.computeVertexNormals();
  return geo;
}

export function geometrySignature(obj: StudioObject): string {
  return JSON.stringify({
    p: obj.primitive,
    pa: obj.params,
    m: obj.modifiers,
    b: obj.baked ? obj.baked.position.length : 0,
  });
}

export const PRIMITIVE_DEFAULTS: Record<
  Primitive,
  { params: Record<string, number | string>; label: { fa: string; en: string } }
> = {
  cube: { params: { size: 1 }, label: { fa: "مکعب", en: "Cube" } },
  rounded: { params: { size: 1, radius: 0.12 }, label: { fa: "مکعب گرد", en: "Rounded cube" } },
  sphere: { params: { radius: 0.75, segments: 32, rings: 24 }, label: { fa: "کره", en: "UV Sphere" } },
  ico: { params: { radius: 0.75, subdiv: 1 }, label: { fa: "آیکوسفر", en: "Ico sphere" } },
  cylinder: { params: { radius: 0.5, depth: 1.4, segments: 24 }, label: { fa: "استوانه", en: "Cylinder" } },
  cone: { params: { radius: 0.6, depth: 1.4, segments: 24 }, label: { fa: "مخروط", en: "Cone" } },
  torus: { params: { radius: 0.7, tube: 0.22, radial: 16, tubular: 48 }, label: { fa: "توروس", en: "Torus" } },
  plane: { params: { size: 8 }, label: { fa: "صفحه", en: "Plane" } },
  capsule: { params: { radius: 0.35, depth: 0.9 }, label: { fa: "کپسول", en: "Capsule" } },
  knot: { params: { radius: 0.7, tube: 0.22, tubular: 96, radial: 16, p: 2, q: 3 }, label: { fa: "گره", en: "Torus knot" } },
  gear: { params: { teeth: 16, radius: 1, depth: 0.22, hole: 0.22 }, label: { fa: "چرخ‌دنده", en: "Gear" } },
  stairs: { params: { steps: 8, width: 1.6, rise: 0.18, run: 0.32 }, label: { fa: "پله", en: "Stairs" } },
  helix: { params: { turns: 5, radius: 0.55, height: 2.2, tube: 0.08 }, label: { fa: "مارپیچ", en: "Helix" } },
  column: { params: { height: 3, radius: 0.28 }, label: { fa: "ستون", en: "Column" } },
  tree: { params: { height: 2.4, seed: 3 }, label: { fa: "درخت", en: "Tree" } },
  rock: { params: { radius: 0.7, seed: 4 }, label: { fa: "صخره", en: "Rock" } },
  vase: { params: { height: 1.6, radius: 0.45 }, label: { fa: "گلدان", en: "Vase" } },
  text: { params: { size: 0.55, text: "LUMINA" }, label: { fa: "متن سه‌بعدی", en: "3D text" } },
  dna: { params: { turns: 4, radius: 0.4, height: 2.4 }, label: { fa: "دی‌ان‌ای", en: "DNA" } },
  baked: { params: {}, label: { fa: "مش واردشده", en: "Imported mesh" } },
};

void str;
