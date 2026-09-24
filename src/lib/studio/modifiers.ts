import * as THREE from "three";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";
import { noise3 } from "./noise";

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

function ek(a: number, b: number) {
  return a < b ? `${a}_${b}` : `${b}_${a}`;
}

function toIndexedTriangles(geo: THREE.BufferGeometry): THREE.BufferGeometry {
  let g = geo.index ? geo.clone() : geo.clone();
  if (!g.index) {
    const n = g.getAttribute("position").count;
    g.setIndex(Array.from({ length: n }, (_, i) => i));
  }
  g = BufferGeometryUtils.mergeVertices(g, 1e-6);
  const idx = g.index!;
  const tris: number[] = [];
  for (let i = 0; i < idx.count; i += 3) {
    tris.push(idx.getX(i), idx.getX(i + 1), idx.getX(i + 2));
  }
  g.setIndex(tris);
  return g;
}

function loopOnce(geo: THREE.BufferGeometry): THREE.BufferGeometry {
  const merged = toIndexedTriangles(geo);
  const index = Array.from(merged.index!.array as ArrayLike<number>);
  const pos = merged.getAttribute("position") as THREE.BufferAttribute;
  const nV = pos.count;
  const nF = Math.floor(index.length / 3);
  const adj: number[][] = Array.from({ length: nV }, () => []);
  const edges = new Map<string, { a: number; b: number; faces: number[] }>();
  const faces: [number, number, number][] = [];

  for (let f = 0; f < nF; f++) {
    const a = index[f * 3]!;
    const b = index[f * 3 + 1]!;
    const c = index[f * 3 + 2]!;
    faces.push([a, b, c]);
    for (const [u, v] of [
      [a, b],
      [b, c],
      [c, a],
    ] as [number, number][]) {
      const k = ek(u, v);
      let e = edges.get(k);
      if (!e) {
        e = { a: u, b: v, faces: [] };
        edges.set(k, e);
      }
      e.faces.push(f);
      if (!adj[u]!.includes(v)) adj[u]!.push(v);
      if (!adj[v]!.includes(u)) adj[v]!.push(u);
    }
  }

  const oldPos: THREE.Vector3[] = [];
  for (let i = 0; i < nV; i++) oldPos.push(new THREE.Vector3().fromBufferAttribute(pos, i));

  const outVerts: THREE.Vector3[] = [];
  for (let i = 0; i < nV; i++) {
    const nb = adj[i]!;
    const n = nb.length;
    if (!n) {
      outVerts.push(oldPos[i]!.clone());
      continue;
    }
    const isBoundary = nb.some((j) => (edges.get(ek(i, j))?.faces.length ?? 0) < 2);
    if (isBoundary) {
      const bnb = nb.filter((j) => (edges.get(ek(i, j))?.faces.length ?? 0) < 2);
      const p = oldPos[i]!.clone().multiplyScalar(0.75);
      if (bnb.length >= 2) {
        p.addScaledVector(oldPos[bnb[0]!]!, 0.125);
        p.addScaledVector(oldPos[bnb[1]!]!, 0.125);
      } else {
        p.copy(oldPos[i]!);
      }
      outVerts.push(p);
    } else {
      const beta =
        n === 3 ? 3 / 16 : (1 / n) * (5 / 8 - (3 / 8 + 0.25 * Math.cos((2 * Math.PI) / n)) ** 2);
      const p = oldPos[i]!.clone().multiplyScalar(1 - n * beta);
      for (const j of nb) p.addScaledVector(oldPos[j]!, beta);
      outVerts.push(p);
    }
  }

  const edgePointIndex = new Map<string, number>();
  for (const [k, e] of edges) {
    const pa = oldPos[e.a]!;
    const pb = oldPos[e.b]!;
    let ep: THREE.Vector3;
    if (e.faces.length === 2) {
      const opposites: THREE.Vector3[] = [];
      for (const fi of e.faces) {
        const face = faces[fi]!;
        const other = face.find((v) => v !== e.a && v !== e.b)!;
        opposites.push(oldPos[other]!);
      }
      ep = pa.clone().add(pb).multiplyScalar(3 / 8);
      ep.addScaledVector(opposites[0]!, 1 / 8);
      ep.addScaledVector(opposites[1]!, 1 / 8);
    } else {
      ep = pa.clone().add(pb).multiplyScalar(0.5);
    }
    edgePointIndex.set(k, outVerts.length);
    outVerts.push(ep);
  }

  const newFaces: number[] = [];
  for (const [a, b, c] of faces) {
    const ab = edgePointIndex.get(ek(a, b))!;
    const bc = edgePointIndex.get(ek(b, c))!;
    const ca = edgePointIndex.get(ek(c, a))!;
    newFaces.push(a, ab, ca, b, bc, ab, c, ca, bc, ab, bc, ca);
  }

  const out = new THREE.BufferGeometry();
  const arr = new Float32Array(outVerts.length * 3);
  outVerts.forEach((v, i) => {
    arr[i * 3] = v.x;
    arr[i * 3 + 1] = v.y;
    arr[i * 3 + 2] = v.z;
  });
  out.setAttribute("position", new THREE.BufferAttribute(arr, 3));
  out.setIndex(newFaces);
  const uv = merged.getAttribute("uv");
  if (uv) {
    /* skip interpolating uv for compactness — recompute */
  }
  out.computeVertexNormals();
  merged.dispose();
  return out;
}

export function loopSubdivide(geo: THREE.BufferGeometry, levels: number): THREE.BufferGeometry {
  let g = geo;
  const n = Math.max(0, Math.min(3, Math.floor(levels)));
  for (let i = 0; i < n; i++) {
    const count = g.getAttribute("position")?.count ?? 0;
    if (count > 60000) break;
    const next = loopOnce(g);
    if (g !== geo) g.dispose();
    g = next;
  }
  return g;
}

export function applySolidifyShell(geo: THREE.BufferGeometry, thickness: number): THREE.BufferGeometry {
  const src = BufferGeometryUtils.mergeVertices(geo.clone(), 1e-6);
  src.computeVertexNormals();
  const nrm = src.getAttribute("normal") as THREE.BufferAttribute;
  const outer = src.clone();
  const inner = src.clone();
  const ip = inner.getAttribute("position") as THREE.BufferAttribute;
  const t = thickness;
  for (let i = 0; i < ip.count; i++) {
    ip.setXYZ(i, ip.getX(i) - nrm.getX(i) * t, ip.getY(i) - nrm.getY(i) * t, ip.getZ(i) - nrm.getZ(i) * t);
  }
  const ii = inner.index;
  if (ii) {
    for (let i = 0; i < ii.count; i += 3) {
      const a = ii.getX(i + 1);
      ii.setX(i + 1, ii.getX(i + 2));
      ii.setX(i + 2, a);
    }
  }
  const edgeCount = new Map<string, { a: number; b: number; count: number }>();
  const idx = src.index;
  if (idx) {
    for (let i = 0; i < idx.count; i += 3) {
      const a = idx.getX(i);
      const b = idx.getX(i + 1);
      const c = idx.getX(i + 2);
      for (const [u, v] of [
        [a, b],
        [b, c],
        [c, a],
      ] as [number, number][]) {
        const k = ek(u, v);
        const e = edgeCount.get(k) ?? { a: u, b: v, count: 0 };
        e.count++;
        edgeCount.set(k, e);
      }
    }
  }
  const outerPos = outer.getAttribute("position") as THREE.BufferAttribute;
  const rim: number[] = [];
  for (const e of edgeCount.values()) {
    if (e.count !== 1) continue;
    const ax = outerPos.getX(e.a);
    const ay = outerPos.getY(e.a);
    const az = outerPos.getZ(e.a);
    const bx = outerPos.getX(e.b);
    const by = outerPos.getY(e.b);
    const bz = outerPos.getZ(e.b);
    const aix = ip.getX(e.a);
    const aiy = ip.getY(e.a);
    const aiz = ip.getZ(e.a);
    const bix = ip.getX(e.b);
    const biy = ip.getY(e.b);
    const biz = ip.getZ(e.b);
    rim.push(ax, ay, az, bx, by, bz, bix, biy, biz, ax, ay, az, bix, biy, biz, aix, aiy, aiz);
  }
  inner.computeVertexNormals();
  const parts = [outer, inner];
  if (rim.length) {
    const rg = new THREE.BufferGeometry();
    rg.setAttribute("position", new THREE.Float32BufferAttribute(rim, 3));
    rg.computeVertexNormals();
    parts.push(rg);
  }
  src.dispose();
  return merge(parts);
}

/** Face-inset chamfer that works on any triangle mesh, not just cubes. */
export function applyBevelMesh(geo: THREE.BufferGeometry, width: number, segments = 1): THREE.BufferGeometry {
  const src = geo.toNonIndexed();
  const pos = src.getAttribute("position") as THREE.BufferAttribute;
  const faceCount = Math.floor(pos.count / 3);
  const w = Math.max(0.001, width);
  const segs = Math.max(1, Math.min(4, Math.floor(segments)));
  const positions: number[] = [];
  const va = new THREE.Vector3();
  const vb = new THREE.Vector3();
  const vc = new THREE.Vector3();
  const n = new THREE.Vector3();
  const c = new THREE.Vector3();
  const ab = new THREE.Vector3();
  const ac = new THREE.Vector3();

  const insetOf = (v: THREE.Vector3, centroid: THREE.Vector3, t: number) =>
    v.clone().lerp(centroid, Math.min(0.48, t));

  for (let f = 0; f < faceCount; f++) {
    va.fromBufferAttribute(pos, f * 3);
    vb.fromBufferAttribute(pos, f * 3 + 1);
    vc.fromBufferAttribute(pos, f * 3 + 2);
    ab.subVectors(vb, va);
    ac.subVectors(vc, va);
    n.crossVectors(ab, ac);
    if (n.lengthSq() < 1e-12) continue;
    n.normalize();
    c.copy(va).add(vb).add(vc).multiplyScalar(1 / 3);
    const da = Math.max(0.02, va.distanceTo(c));
    const t0 = Math.min(0.45, w / da);
    let innerA = [va.clone(), vb.clone(), vc.clone()];
    for (let s = 1; s <= segs; s++) {
      const t = t0 * (s / segs);
      const next = [insetOf(va, c, t), insetOf(vb, c, t), insetOf(vc, c, t)];
      const ring: THREE.Vector3[] = innerA;
      const inn = next;
      // chamfer strip (3 quads)
      for (let k = 0; k < 3; k++) {
        const a0 = ring[k]!;
        const a1 = ring[(k + 1) % 3]!;
        const b0 = inn[k]!;
        const b1 = inn[(k + 1) % 3]!;
        pushTri(positions, a0, a1, b1);
        pushTri(positions, a0, b1, b0);
      }
      innerA = next;
    }
    pushTri(positions, innerA[0]!, innerA[1]!, innerA[2]!);
  }
  src.dispose();
  const out = new THREE.BufferGeometry();
  out.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  out.computeVertexNormals();
  return out;
}

function pushTri(buf: number[], a: THREE.Vector3, b: THREE.Vector3, c: THREE.Vector3) {
  buf.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z);
}

function fbm(x: number, y: number, z: number) {
  let a = 0;
  let amp = 1;
  let f = 1;
  for (let i = 0; i < 5; i++) {
    a += (noise3(x * f, y * f, z * f) * 2 - 1) * amp;
    amp *= 0.5;
    f *= 2;
  }
  return a;
}

function ridged(x: number, y: number, z: number) {
  return 1 - Math.abs(fbm(x, y, z));
}

function worley(x: number, y: number, z: number) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const iz = Math.floor(z);
  let d = 99;
  for (let oz = -1; oz <= 1; oz++) {
    for (let oy = -1; oy <= 1; oy++) {
      for (let ox = -1; ox <= 1; ox++) {
        const cx = ix + ox + noise3(ix + ox, iy + oy, iz + oz);
        const cy = iy + oy + noise3(ix + ox + 17, iy + oy, iz + oz);
        const cz = iz + oz + noise3(ix + ox, iy + oy + 9, iz + oz);
        const dx = x - cx;
        const dy = y - cy;
        const dz = z - cz;
        d = Math.min(d, dx * dx + dy * dy + dz * dz);
      }
    }
  }
  return Math.sqrt(d) * 2 - 1;
}

export function applyDisplaceTextured(
  geo: THREE.BufferGeometry,
  amount: number,
  scale: number,
  texture = 0,
) {
  const pos = geo.getAttribute("position") as THREE.BufferAttribute;
  if (!geo.getAttribute("normal")) geo.computeVertexNormals();
  const nor = geo.getAttribute("normal") as THREE.BufferAttribute;
  const v = new THREE.Vector3();
  const n = new THREE.Vector3();
  const s = Math.max(0.05, scale);
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    n.fromBufferAttribute(nor, i);
    const nx = v.x * s;
    const ny = v.y * s;
    const nz = v.z * s;
    let h = 0;
    if (texture <= 0.5) h = noise3(nx, ny, nz) * 2 - 1;
    else if (texture <= 1.5) h = fbm(nx, ny, nz);
    else if (texture <= 2.5) h = ridged(nx, ny, nz) * 2 - 1;
    else h = worley(nx, ny, nz);
    v.addScaledVector(n, h * amount);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
}

export function geometryToPydata(geo: THREE.BufferGeometry): { verts: [number, number, number][]; faces: number[][] } {
  const g = geo.index ? geo : geo;
  const pos = g.getAttribute("position") as THREE.BufferAttribute;
  const verts: [number, number, number][] = [];
  const cap = Math.min(pos.count, 24000);
  for (let i = 0; i < cap; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    verts.push([x, -z, y]);
  }
  const faces: number[][] = [];
  if (g.index) {
    const idx = g.index;
    for (let i = 0; i < idx.count && faces.length < 32000; i += 3) {
      const a = idx.getX(i);
      const b = idx.getX(i + 1);
      const c = idx.getX(i + 2);
      if (a < cap && b < cap && c < cap) faces.push([a, b, c]);
    }
  } else {
    for (let i = 0; i + 2 < cap; i += 3) faces.push([i, i + 1, i + 2]);
  }
  return { verts, faces };
}
