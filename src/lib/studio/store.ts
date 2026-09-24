import { create } from "zustand";
import {
  asTriple,
  defaultMaterial,
  MATERIAL_PRESETS,
  type EnvPreset,
  type Lang,
  type LayoutId,
  type LightType,
  type Material,
  type Modifier,
  type ModifierType,
  type Primitive,
  type SculptBrush,
  type Shading,
  type StudioObject,
  type TransformMode,
  type Triple,
  uid,
} from "./types";
import { PRIMITIVE_DEFAULTS, evaluateGeometry } from "./geometry";

export interface ConsoleLine {
  kind: "in" | "out" | "err" | "info";
  text: string;
}

interface Snapshot {
  objects: StudioObject[];
  selectedIds: string[];
  activeId: string | null;
}

export interface StudioState {
  lang: Lang;
  layout: LayoutId;
  mode: "object" | "sculpt";
  transformMode: TransformMode;
  shading: Shading;
  showGrid: boolean;
  showGizmo: boolean;
  snap: boolean;
  bloom: boolean;
  envPreset: EnvPreset;
  envIntensity: number;
  objects: StudioObject[];
  selectedIds: string[];
  activeId: string | null;
  frame: number;
  fps: number;
  frameStart: number;
  frameEnd: number;
  playing: boolean;
  autoKey: boolean;
  sculpt: { brush: SculptBrush; radius: number; strength: number };
  consoleLines: ConsoleLine[];
  pythonCode: string;
  renderDataUrl: string | null;
  renderWidth: number;
  renderHeight: number;
  renderSamples: number;
  ssao: boolean;
  viewCameraId: string | null;
  showWelcome: boolean;
  showKeys: boolean;
  hydrated: boolean;
  past: Snapshot[];
  future: Snapshot[];
  mobileTab: "view" | "scene" | "props" | "py";
  transformDragging: boolean;

  setLang: (lang: Lang) => void;
  setLayout: (layout: LayoutId) => void;
  setMode: (mode: "object" | "sculpt") => void;
  setTransformMode: (m: TransformMode) => void;
  setShading: (s: Shading) => void;
  setShowGrid: (v: boolean) => void;
  setShowGizmo: (v: boolean) => void;
  setSnap: (v: boolean) => void;
  setBloom: (v: boolean) => void;
  setEnv: (preset: EnvPreset, intensity?: number) => void;
  setFrame: (f: number) => void;
  setPlaying: (v: boolean) => void;
  setAutoKey: (v: boolean) => void;
  setSculpt: (p: Partial<StudioState["sculpt"]>) => void;
  setPythonCode: (c: string) => void;
  setRenderDataUrl: (u: string | null) => void;
  setRenderSize: (w: number, h: number) => void;
  setRenderSamples: (n: number) => void;
  setSsao: (v: boolean) => void;
  setViewCamera: (id: string | null) => void;
  setShowWelcome: (v: boolean) => void;
  setShowKeys: (v: boolean) => void;
  setMobileTab: (t: StudioState["mobileTab"]) => void;
  setHydrated: (v: boolean) => void;
  setTransformDragging: (v: boolean) => void;

  pushHistory: () => void;
  undo: () => void;
  redo: () => void;

  select: (id: string | null, additive?: boolean) => void;
  clearSelection: () => void;
  updateObject: (id: string, patch: Partial<StudioObject>) => void;
  patchMaterial: (id: string, patch: Partial<Material>) => void;
  addMesh: (
    primitive: Primitive,
    opts?: {
      name?: string;
      position?: Triple;
      rotation?: Triple;
      scale?: Triple;
      params?: Record<string, number | string>;
      material?: Partial<Material>;
    },
  ) => string;
  addLight: (type: LightType, position?: Triple) => string;
  addCamera: (position?: Triple) => string;
  addEmpty: (position?: Triple) => string;
  removeSelected: () => void;
  duplicateSelected: () => void;
  hideSelected: () => void;
  applyPreset: (id: string, preset: string) => void;
  addModifier: (id: string, type: ModifierType) => void;
  updateModifier: (id: string, modId: string, params: Record<string, number>, enabled?: boolean) => void;
  removeModifier: (id: string, modId: string) => void;
  insertKeyframe: (id?: string, frame?: number) => void;
  deleteKeyframe: (id: string, frame: number) => void;
  insertTurntable: (id?: string) => void;
  setFrameRange: (start: number, end: number) => void;
  bakeObject: (id?: string) => void;
  replaceScene: (objects: StudioObject[], selectId?: string | null) => void;
  loadLookdev: () => void;
  loadEmpty: () => void;
  loadArch: () => void;
  threePointLights: () => void;
  log: (line: ConsoleLine) => void;
  clearConsole: () => void;
  hydrate: (data: Partial<Pick<StudioState, "objects" | "lang" | "envPreset" | "pythonCode" | "shading">>) => void;
}

function nameFor(kind: string, objects: StudioObject[]) {
  const n = objects.filter((o) => o.name.toLowerCase().startsWith(kind.toLowerCase())).length + 1;
  return `${kind} ${n}`;
}

function meshDefaults(primitive: Primitive, objects: StudioObject[], opts?: Parameters<StudioState["addMesh"]>[1]): StudioObject {
  const def = PRIMITIVE_DEFAULTS[primitive];
  return {
    id: uid("ob"),
    name: opts?.name ?? nameFor(def.label.en, objects),
    kind: "mesh",
    visible: true,
    position: opts?.position ?? [0, primitive === "plane" ? 0 : 0.5, 0],
    rotation: opts?.rotation ?? [0, 0, 0],
    scale: opts?.scale ?? [1, 1, 1],
    primitive,
    params: { ...def.params, ...(opts?.params ?? {}) },
    material: { ...defaultMaterial(), ...(opts?.material ?? {}) },
    cameraFov: 45,
    modifiers: [],
    keyframes: [],
  };
}

function lightObj(type: LightType, objects: StudioObject[], position?: Triple): StudioObject {
  const defaults: Record<LightType, { intensity: number; color: string; pos: Triple }> = {
    sun: { intensity: 2.4, color: "#fff4e5", pos: [4, 8, 3] },
    point: { intensity: 18, color: "#b9d4ff", pos: [-3, 2.5, 2] },
    spot: { intensity: 24, color: "#ffe6c9", pos: [2, 4, -3] },
    area: { intensity: 8, color: "#ffffff", pos: [0, 4, 0] },
  };
  const d = defaults[type];
  return {
    id: uid("lg"),
    name: nameFor(type, objects),
    kind: "light",
    visible: true,
    position: position ?? d.pos,
    rotation: type === "spot" || type === "sun" ? [-0.7, 0.4, 0] : [0, 0, 0],
    scale: [1, 1, 1],
    primitive: "cube",
    params: {},
    material: defaultMaterial(),
    cameraFov: 45,
    modifiers: [],
    keyframes: [],
    light: {
      type,
      color: d.color,
      intensity: d.intensity,
      distance: type === "sun" ? 0 : 18,
      angle: 0.45,
      width: 2.4,
      height: 1.4,
      castShadow: type === "sun" || type === "spot",
    },
  };
}

export function lookdevScene(): StudioObject[] {
  const objects: StudioObject[] = [];
  const floor = meshDefaults("plane", objects, {
    name: "Floor",
    position: [0, 0, 0],
    material: { ...MATERIAL_PRESETS.Concrete, name: "Concrete" },
    params: { size: 14 },
  });
  objects.push(floor);
  const knot = meshDefaults("knot", objects, {
    name: "HeroKnot",
    position: [0, 1.15, 0],
    material: { ...MATERIAL_PRESETS.Gold, name: "Gold" },
  });
  objects.push(knot);
  const glass = meshDefaults("ico", objects, {
    name: "Glass",
    position: [-2.15, 0.85, 0.55],
    material: { ...MATERIAL_PRESETS.Glass, name: "Glass" },
    params: { radius: 0.72, subdiv: 2 },
  });
  objects.push(glass);
  const chrome = meshDefaults("rounded", objects, {
    name: "Chrome",
    position: [2.15, 0.55, 0.45],
    material: { ...MATERIAL_PRESETS.Chrome, name: "Chrome" },
  });
  objects.push(chrome);
  objects.push(lightObj("sun", objects, [5, 9, 4]));
  objects.push(lightObj("point", objects, [-4.2, 2.6, 2.4]));
  const rim = lightObj("spot", objects, [3.2, 3.8, -4]);
  if (rim.light) rim.light.color = "#9eb7ff";
  objects.push(rim);
  const cam: StudioObject = {
    id: uid("cam"),
    name: "Camera",
    kind: "camera",
    visible: true,
    position: [5.6, 3.2, 6.4],
    rotation: [-0.35, 0.65, 0],
    scale: [1, 1, 1],
    primitive: "cube",
    params: {},
    material: defaultMaterial(),
    cameraFov: 40,
    modifiers: [],
    keyframes: [],
  };
  objects.push(cam);
  return objects;
}

export function emptyScene(): StudioObject[] {
  const objects: StudioObject[] = [];
  objects.push(
    meshDefaults("plane", objects, {
      name: "Floor",
      position: [0, 0, 0],
      material: { ...MATERIAL_PRESETS.Concrete, name: "Concrete" },
    }),
  );
  objects.push(lightObj("sun", objects));
  return objects;
}

export function archScene(): StudioObject[] {
  const objects: StudioObject[] = [];
  objects.push(
    meshDefaults("plane", objects, {
      name: "Ground",
      position: [0, 0, 0],
      params: { size: 18 },
      material: { ...MATERIAL_PRESETS.Concrete, name: "Stone" },
    }),
  );
  objects.push(
    meshDefaults("column", objects, {
      name: "Column.L",
      position: [-1.6, 1.5, 0],
      material: { ...MATERIAL_PRESETS.Ceramic, name: "Marble" },
    }),
  );
  objects.push(
    meshDefaults("column", objects, {
      name: "Column.R",
      position: [1.6, 1.5, 0],
      material: { ...MATERIAL_PRESETS.Ceramic, name: "Marble" },
    }),
  );
  objects.push(
    meshDefaults("stairs", objects, {
      name: "Stairs",
      position: [0, 0, 2.2],
      material: { ...MATERIAL_PRESETS.Concrete, color: "#9a958c" },
    }),
  );
  objects.push(
    meshDefaults("vase", objects, {
      name: "Urn",
      position: [0, 0.85, -1.1],
      material: { ...MATERIAL_PRESETS.Copper, name: "Copper" },
    }),
  );
  objects.push(lightObj("sun", objects, [6, 10, 5]));
  objects.push(lightObj("area", objects, [0, 5.5, 2]));
  return objects;
}

const DEFAULT_CODE = `# Lumina Python — bpy-compatible
import bpy
from math import pi, sin, cos

# bpy.ops.mesh.primitive_gear_add(teeth=18, radius=1.1)
# bpy.context.object.material.metallic = 1.0
print("Lumina ready. Run a recipe or type bpy.ops...")
`;

function snapOf(s: Pick<StudioState, "objects" | "selectedIds" | "activeId">): Snapshot {
  return {
    objects: JSON.parse(JSON.stringify(s.objects)) as StudioObject[],
    selectedIds: [...s.selectedIds],
    activeId: s.activeId,
  };
}

export const useStudio = create<StudioState>((set, get) => ({
  lang: "fa",
  layout: "lookdev",
  mode: "object",
  transformMode: "translate",
  shading: "material",
  showGrid: true,
  showGizmo: true,
  snap: false,
  bloom: true,
  envPreset: "studio",
  envIntensity: 1,
  objects: lookdevScene(),
  selectedIds: [],
  activeId: null,
  frame: 1,
  fps: 24,
  frameStart: 1,
  frameEnd: 120,
  playing: false,
  autoKey: false,
  sculpt: { brush: "draw", radius: 0.35, strength: 0.35 },
  consoleLines: [{ kind: "info", text: "Lumina Python 3 — import bpy" }],
  pythonCode: DEFAULT_CODE,
  renderDataUrl: null,
  renderWidth: 1920,
  renderHeight: 1080,
  renderSamples: 2,
  ssao: true,
  viewCameraId: null,
  showWelcome: true,
  showKeys: false,
  hydrated: false,
  past: [],
  future: [],
  mobileTab: "view",
  transformDragging: false,

  setLang: (lang) => set({ lang }),
  setLayout: (layout) => set({ layout }),
  setMode: (mode) => set({ mode }),
  setTransformMode: (transformMode) => set({ transformMode }),
  setShading: (shading) => set({ shading }),
  setShowGrid: (showGrid) => set({ showGrid }),
  setShowGizmo: (showGizmo) => set({ showGizmo }),
  setSnap: (snap) => set({ snap }),
  setBloom: (bloom) => set({ bloom }),
  setEnv: (envPreset, envIntensity) =>
    set({ envPreset, envIntensity: envIntensity ?? get().envIntensity }),
  setFrame: (frame) => set({ frame }),
  setPlaying: (playing) => set({ playing }),
  setAutoKey: (autoKey) => set({ autoKey }),
  setSculpt: (p) => set({ sculpt: { ...get().sculpt, ...p } }),
  setPythonCode: (pythonCode) => set({ pythonCode }),
  setRenderDataUrl: (renderDataUrl) => set({ renderDataUrl }),
  setRenderSize: (renderWidth, renderHeight) => set({ renderWidth, renderHeight }),
  setRenderSamples: (renderSamples) => set({ renderSamples: Math.max(1, Math.min(8, Math.floor(renderSamples))) }),
  setSsao: (ssao) => set({ ssao }),
  setViewCamera: (viewCameraId) => set({ viewCameraId }),
  setShowWelcome: (showWelcome) => set({ showWelcome }),
  setShowKeys: (showKeys) => set({ showKeys }),
  setMobileTab: (mobileTab) => set({ mobileTab }),
  setHydrated: (hydrated) => set({ hydrated }),
  setTransformDragging: (transformDragging) => set({ transformDragging }),

  pushHistory: () => {
    const s = get();
    set({ past: [...s.past.slice(-48), snapOf(s)], future: [] });
  },
  undo: () => {
    const s = get();
    const prev = s.past[s.past.length - 1];
    if (!prev) return;
    set({
      past: s.past.slice(0, -1),
      future: [snapOf(s), ...s.future].slice(0, 48),
      objects: prev.objects,
      selectedIds: prev.selectedIds,
      activeId: prev.activeId,
    });
  },
  redo: () => {
    const s = get();
    const next = s.future[0];
    if (!next) return;
    set({
      future: s.future.slice(1),
      past: [...s.past, snapOf(s)].slice(-48),
      objects: next.objects,
      selectedIds: next.selectedIds,
      activeId: next.activeId,
    });
  },

  select: (id, additive) => {
    if (!id) {
      set({ selectedIds: [], activeId: null });
      return;
    }
    if (additive) {
      const has = get().selectedIds.includes(id);
      const selectedIds = has ? get().selectedIds.filter((x) => x !== id) : [...get().selectedIds, id];
      set({ selectedIds, activeId: selectedIds[selectedIds.length - 1] ?? null });
    } else {
      set({ selectedIds: [id], activeId: id });
    }
  },
  clearSelection: () => set({ selectedIds: [], activeId: null }),
  updateObject: (id, patch) =>
    set({
      objects: get().objects.map((o) => (o.id === id ? { ...o, ...patch } : o)),
    }),
  patchMaterial: (id, patch) =>
    set({
      objects: get().objects.map((o) =>
        o.id === id ? { ...o, material: { ...o.material, ...patch } } : o,
      ),
    }),
  addMesh: (primitive, opts) => {
    get().pushHistory();
    const obj = meshDefaults(primitive, get().objects, opts);
    set({
      objects: [...get().objects, obj],
      selectedIds: [obj.id],
      activeId: obj.id,
    });
    return obj.id;
  },
  addLight: (type, position) => {
    get().pushHistory();
    const obj = lightObj(type, get().objects, position);
    set({
      objects: [...get().objects, obj],
      selectedIds: [obj.id],
      activeId: obj.id,
    });
    return obj.id;
  },
  addCamera: (position) => {
    get().pushHistory();
    const obj: StudioObject = {
      id: uid("cam"),
      name: nameFor("Camera", get().objects),
      kind: "camera",
      visible: true,
      position: position ?? [4, 3, 5],
      rotation: [-0.4, 0.6, 0],
      scale: [1, 1, 1],
      primitive: "cube",
      params: {},
      material: defaultMaterial(),
      cameraFov: 45,
      modifiers: [],
      keyframes: [],
    };
    set({ objects: [...get().objects, obj], selectedIds: [obj.id], activeId: obj.id });
    return obj.id;
  },
  addEmpty: (position) => {
    get().pushHistory();
    const obj: StudioObject = {
      id: uid("em"),
      name: nameFor("Empty", get().objects),
      kind: "empty",
      visible: true,
      position: position ?? [0, 1, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      primitive: "cube",
      params: {},
      material: defaultMaterial(),
      cameraFov: 45,
      modifiers: [],
      keyframes: [],
    };
    set({ objects: [...get().objects, obj], selectedIds: [obj.id], activeId: obj.id });
    return obj.id;
  },
  removeSelected: () => {
    const ids = new Set(get().selectedIds);
    if (!ids.size) return;
    get().pushHistory();
    set({
      objects: get().objects.filter((o) => !ids.has(o.id)),
      selectedIds: [],
      activeId: null,
    });
  },
  duplicateSelected: () => {
    const s = get();
    const src = s.objects.filter((o) => s.selectedIds.includes(o.id));
    if (!src.length) return;
    s.pushHistory();
    const copies = src.map((o) => ({
      ...JSON.parse(JSON.stringify(o)) as StudioObject,
      id: uid("ob"),
      name: `${o.name}.copy`,
      position: asTriple([o.position[0] + 0.6, o.position[1], o.position[2]]),
    }));
    set({
      objects: [...s.objects, ...copies],
      selectedIds: copies.map((c) => c.id),
      activeId: copies[copies.length - 1]?.id ?? null,
    });
  },
  hideSelected: () => {
    const ids = new Set(get().selectedIds);
    set({
      objects: get().objects.map((o) => (ids.has(o.id) ? { ...o, visible: !o.visible } : o)),
    });
  },
  applyPreset: (id, preset) => {
    const p = MATERIAL_PRESETS[preset];
    if (!p) return;
    get().patchMaterial(id, { ...p, name: p.name ?? preset });
  },
  addModifier: (id, type) => {
    get().pushHistory();
    const defaults: Record<ModifierType, Record<string, number>> = {
      subdiv: { levels: 1 },
      mirror: { axis: 0 },
      array: { count: 3, offsetX: 1.25, offsetY: 0, offsetZ: 0 },
      solidify: { thickness: 0.06 },
      bevel: { width: 0.08, segments: 1 },
      displace: { amount: 0.12, scale: 2.4, texture: 1 },
    };
    const mod: Modifier = { id: uid("md"), type, enabled: true, params: defaults[type] };
    set({
      objects: get().objects.map((o) =>
        o.id === id ? { ...o, modifiers: [...o.modifiers, mod] } : o,
      ),
    });
  },
  updateModifier: (id, modId, params, enabled) =>
    set({
      objects: get().objects.map((o) =>
        o.id !== id
          ? o
          : {
              ...o,
              modifiers: o.modifiers.map((m) =>
                m.id === modId
                  ? { ...m, params: { ...m.params, ...params }, enabled: enabled ?? m.enabled }
                  : m,
              ),
            },
      ),
    }),
  removeModifier: (id, modId) =>
    set({
      objects: get().objects.map((o) =>
        o.id === id ? { ...o, modifiers: o.modifiers.filter((m) => m.id !== modId) } : o,
      ),
    }),
  insertKeyframe: (id, frame) => {
    const s = get();
    const fid = id ?? s.activeId;
    if (!fid) return;
    const obj = s.objects.find((o) => o.id === fid);
    if (!obj) return;
    const f = frame ?? s.frame;
    const keys = obj.keyframes.filter((k) => k.frame !== f);
    keys.push({
      frame: f,
      position: [...obj.position],
      rotation: [...obj.rotation],
      scale: [...obj.scale],
    });
    keys.sort((a, b) => a.frame - b.frame);
    s.updateObject(fid, { keyframes: keys });
  },
  deleteKeyframe: (id, frame) => {
    const obj = get().objects.find((o) => o.id === id);
    if (!obj) return;
    get().pushHistory();
    get().updateObject(id, { keyframes: obj.keyframes.filter((k) => k.frame !== frame) });
  },
  setFrameRange: (start, end) => set({ frameStart: start, frameEnd: Math.max(start + 1, end) }),
  bakeObject: (id) => {
    const fid = id ?? get().activeId;
    if (!fid) return;
    const obj = get().objects.find((o) => o.id === fid);
    if (!obj || obj.kind !== "mesh") return;
    get().pushHistory();
    const geo = evaluateGeometry(obj);
    const pos = geo.getAttribute("position");
    const nrm = geo.getAttribute("normal");
    const uv = geo.getAttribute("uv");
    get().updateObject(fid, {
      primitive: "baked",
      modifiers: [],
      baked: {
        position: Array.from(pos.array as Float32Array),
        normal: nrm ? Array.from(nrm.array as Float32Array) : undefined,
        index: geo.index ? (Array.from(geo.index.array as ArrayLike<number>) as number[]) : undefined,
        uv: uv ? Array.from(uv.array as Float32Array) : undefined,
      },
    });
    geo.dispose();
  },
  insertTurntable: (id) => {
    const s = get();
    const fid = id ?? s.activeId;
    if (!fid) return;
    const obj = s.objects.find((o) => o.id === fid);
    if (!obj) return;
    s.pushHistory();
    s.updateObject(fid, {
      keyframes: [
        { frame: s.frameStart, position: [...obj.position], rotation: [obj.rotation[0], 0, obj.rotation[2]], scale: [...obj.scale] },
        {
          frame: s.frameEnd,
          position: [...obj.position],
          rotation: [obj.rotation[0], Math.PI * 2, obj.rotation[2]],
          scale: [...obj.scale],
        },
      ],
    });
    set({ playing: true, frame: s.frameStart });
  },
  replaceScene: (objects, selectId) => {
    get().pushHistory();
    set({
      objects,
      selectedIds: selectId ? [selectId] : [],
      activeId: selectId ?? null,
      playing: false,
      frame: 1,
    });
  },
  loadLookdev: () => {
    const objects = lookdevScene();
    get().replaceScene(objects, objects.find((o) => o.name === "HeroKnot")?.id ?? null);
    set({ showWelcome: false, shading: "material", envPreset: "studio", layout: "lookdev" });
  },
  loadEmpty: () => {
    get().replaceScene(emptyScene(), null);
    set({ showWelcome: false, layout: "model" });
  },
  loadArch: () => {
    const objects = archScene();
    get().replaceScene(objects, objects.find((o) => o.name === "Column.L")?.id ?? null);
    set({ showWelcome: false, layout: "lookdev", envPreset: "warehouse" });
  },
  threePointLights: () => {
    get().pushHistory();
    const existing = get().objects.filter((o) => o.kind !== "light");
    const lights: StudioObject[] = [];
    lights.push(lightObj("sun", lights, [5, 8, 4]));
    lights.push(lightObj("point", lights, [-4, 2.4, 2]));
    lights.push(lightObj("spot", lights, [2.5, 3.5, -4]));
    set({ objects: [...existing, ...lights] });
  },
  log: (line) => set({ consoleLines: [...get().consoleLines.slice(-200), line] }),
  clearConsole: () => set({ consoleLines: [] }),
  hydrate: (data) =>
    set({
      ...data,
      objects: data.objects ?? get().objects,
      showWelcome: data.objects?.length ? false : get().showWelcome,
      hydrated: true,
    }),
}));

export function activeObject(): StudioObject | undefined {
  const s = useStudio.getState();
  return s.objects.find((o) => o.id === s.activeId);
}

export function evalObjectAtFrame(obj: StudioObject, frame: number): Pick<StudioObject, "position" | "rotation" | "scale"> {
  const keys = obj.keyframes;
  if (!keys.length) {
    return { position: obj.position, rotation: obj.rotation, scale: obj.scale };
  }
  if (frame <= keys[0].frame) {
    const k = keys[0];
    return {
      position: k.position ?? obj.position,
      rotation: k.rotation ?? obj.rotation,
      scale: k.scale ?? obj.scale,
    };
  }
  const last = keys[keys.length - 1];
  if (frame >= last.frame) {
    return {
      position: last.position ?? obj.position,
      rotation: last.rotation ?? obj.rotation,
      scale: last.scale ?? obj.scale,
    };
  }
  let i = 0;
  while (i < keys.length - 1 && keys[i + 1].frame < frame) i++;
  const a = keys[i];
  const b = keys[i + 1];
  const t = (frame - a.frame) / Math.max(0.0001, b.frame - a.frame);
  const s = t * t * (3 - 2 * t);
  const mix = (pa: Triple | undefined, pb: Triple | undefined, fb: Triple): Triple => {
    const x = pa ?? fb;
    const y = pb ?? fb;
    return [x[0] + (y[0] - x[0]) * s, x[1] + (y[1] - x[1]) * s, x[2] + (y[2] - x[2]) * s];
  };
  return {
    position: mix(a.position, b.position, obj.position),
    rotation: mix(a.rotation, b.rotation, obj.rotation),
    scale: mix(a.scale, b.scale, obj.scale),
  };
}
