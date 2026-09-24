export type Triple = [number, number, number];

export type Primitive =
  | "cube"
  | "sphere"
  | "ico"
  | "cylinder"
  | "cone"
  | "torus"
  | "plane"
  | "capsule"
  | "knot"
  | "gear"
  | "stairs"
  | "helix"
  | "column"
  | "tree"
  | "rock"
  | "vase"
  | "text"
  | "dna"
  | "rounded"
  | "baked";

export type LightType = "sun" | "point" | "spot" | "area";
export type ObjectKind = "mesh" | "light" | "camera" | "empty";
export type ModifierType =
  | "subdiv"
  | "mirror"
  | "array"
  | "solidify"
  | "bevel"
  | "displace";
export type Shading = "wire" | "solid" | "material" | "rendered";
export type TransformMode = "translate" | "rotate" | "scale";
export type SculptBrush = "draw" | "smooth" | "inflate" | "grab";
export type Lang = "fa" | "en";
export type LayoutId = "model" | "lookdev" | "anim" | "script" | "render";
export type EnvPreset =
  | "studio"
  | "sunset"
  | "night"
  | "warehouse"
  | "city"
  | "dawn"
  | "lobby"
  | "apartment"
  | "forest"
  | "park";

export interface Material {
  name: string;
  color: string;
  metalness: number;
  roughness: number;
  emissive: string;
  emissiveIntensity: number;
  transmission: number;
  thickness: number;
  ior: number;
  clearcoat: number;
  clearcoatRoughness: number;
  opacity: number;
  envMapIntensity: number;
  iridescence: number;
  sheen: number;
  wireframe: boolean;
  flat: boolean;
}

export interface Modifier {
  id: string;
  type: ModifierType;
  enabled: boolean;
  params: Record<string, number>;
}

export interface Keyframe {
  frame: number;
  position?: Triple;
  rotation?: Triple;
  scale?: Triple;
}

export interface LightSettings {
  type: LightType;
  color: string;
  intensity: number;
  distance: number;
  angle: number;
  width: number;
  height: number;
  castShadow: boolean;
}

export interface BakedGeom {
  position: number[];
  normal?: number[];
  index?: number[];
  uv?: number[];
}

export interface StudioObject {
  id: string;
  name: string;
  kind: ObjectKind;
  visible: boolean;
  position: Triple;
  rotation: Triple;
  scale: Triple;
  primitive: Primitive;
  params: Record<string, number | string>;
  material: Material;
  light?: LightSettings;
  cameraFov: number;
  modifiers: Modifier[];
  keyframes: Keyframe[];
  baked?: BakedGeom;
}

export const ENV_PRESETS: EnvPreset[] = [
  "studio",
  "sunset",
  "night",
  "warehouse",
  "city",
  "dawn",
  "lobby",
  "apartment",
  "forest",
  "park",
];

export function defaultMaterial(name = "Material", color = "#c5c6ca"): Material {
  return {
    name,
    color,
    metalness: 0,
    roughness: 0.42,
    emissive: "#000000",
    emissiveIntensity: 0,
    transmission: 0,
    thickness: 0.6,
    ior: 1.5,
    clearcoat: 0,
    clearcoatRoughness: 0.1,
    opacity: 1,
    envMapIntensity: 1,
    iridescence: 0,
    sheen: 0,
    wireframe: false,
    flat: false,
  };
}

export const MATERIAL_PRESETS: Record<string, Partial<Material>> = {
  Default: { color: "#c5c6ca", metalness: 0, roughness: 0.42, transmission: 0 },
  Gold: {
    name: "Gold",
    color: "#d4a017",
    metalness: 1,
    roughness: 0.22,
    clearcoat: 0.15,
  },
  Copper: { name: "Copper", color: "#b87333", metalness: 1, roughness: 0.28 },
  Chrome: { name: "Chrome", color: "#dfe3ea", metalness: 1, roughness: 0.08 },
  Rubber: { name: "Rubber", color: "#2a2a2c", metalness: 0, roughness: 0.86 },
  Plastic: { name: "Plastic", color: "#c23b2e", metalness: 0, roughness: 0.35, clearcoat: 0.55 },
  Glass: {
    name: "Glass",
    color: "#e8f2ff",
    metalness: 0,
    roughness: 0.04,
    transmission: 0.95,
    thickness: 1.2,
    ior: 1.5,
    opacity: 1,
  },
  Ceramic: { name: "Ceramic", color: "#efe6d8", metalness: 0, roughness: 0.28, clearcoat: 0.4 },
  Concrete: { name: "Concrete", color: "#8a8680", metalness: 0, roughness: 0.92 },
  Carbon: { name: "Carbon", color: "#1a1a1c", metalness: 0.7, roughness: 0.38 },
  Neon: {
    name: "Neon",
    color: "#111111",
    emissive: "#e07820",
    emissiveIntensity: 3.2,
    roughness: 0.3,
  },
  Pearl: {
    name: "Pearl",
    color: "#f0e6dc",
    metalness: 0.15,
    roughness: 0.18,
    iridescence: 0.85,
    clearcoat: 0.4,
  },
  Skin: { name: "Skin", color: "#c99578", metalness: 0, roughness: 0.52, sheen: 0.4 },
  Wood: { name: "Wood", color: "#6b4423", metalness: 0, roughness: 0.72 },
};

export function uid(prefix = "ob"): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 8)}${Date.now().toString(36).slice(-4)}`;
}

export function triple(x = 0, y = 0, z = 0): Triple {
  return [x, y, z];
}

export function asTriple(v: unknown, fallback: Triple = [0, 0, 0]): Triple {
  if (Array.isArray(v) && v.length >= 3) {
    return [Number(v[0]) || 0, Number(v[1]) || 0, Number(v[2]) || 0];
  }
  if (v && typeof v === "object") {
    const o = v as { x?: number; y?: number; z?: number };
    if (o.x !== undefined || o.y !== undefined || o.z !== undefined) {
      return [Number(o.x) || 0, Number(o.y) || 0, Number(o.z) || 0];
    }
  }
  if (typeof v === "number") return [v, v, v];
  return fallback;
}

export function lerpTriple(a: Triple, b: Triple, t: number): Triple {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ];
}

export function hexToRgb(hex: string): Triple {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  if (Number.isNaN(n)) return [0.8, 0.8, 0.8];
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}
