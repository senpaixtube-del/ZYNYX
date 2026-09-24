import { pyKw, runPython, type PyVal } from "./python";
import { activeObject, useStudio } from "./store";
import {
  asTriple,
  defaultMaterial,
  MATERIAL_PRESETS,
  type EnvPreset,
  type LightType,
  type Material,
  type ModifierType,
  type Primitive,
  type Triple,
} from "./types";

function kwNum(kw: Record<string, unknown>, key: string, fallback: number) {
  const v = kw[key];
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n : fallback;
}

function locOf(kw: Record<string, unknown>, fallback: Triple = [0, 0.5, 0]): Triple {
  return asTriple(kw.location ?? kw.loc, fallback);
}

class Vec {
  constructor(
    public _get: () => Triple,
    public _set: (t: Triple) => void,
  ) {}
  get x() {
    return this._get()[0];
  }
  set x(v: number) {
    const t = this._get();
    this._set([Number(v), t[1], t[2]]);
  }
  get y() {
    return this._get()[1];
  }
  set y(v: number) {
    const t = this._get();
    this._set([t[0], Number(v), t[2]]);
  }
  get z() {
    return this._get()[2];
  }
  set z(v: number) {
    const t = this._get();
    this._set([t[0], t[1], Number(v)]);
  }
  toArray() {
    return this._get();
  }
  [Symbol.iterator]() {
    return this._get()[Symbol.iterator]();
  }
}

function wrapMat(id: string) {
  const get = () => useStudio.getState().objects.find((o) => o.id === id)?.material;
  const set = (patch: Partial<Material>) => useStudio.getState().patchMaterial(id, patch);
  return {
    get name() {
      return get()?.name ?? "Material";
    },
    set name(v: string) {
      set({ name: String(v) });
    },
    get base_color() {
      return get()?.color ?? "#c5c6ca";
    },
    set base_color(v: unknown) {
      if (typeof v === "string") set({ color: v });
      else {
        const t = asTriple(v, [0.8, 0.8, 0.8]);
        const hex =
          "#" +
          [t[0], t[1], t[2]]
            .map((c) =>
              Math.max(0, Math.min(255, Math.round(c * 255)))
                .toString(16)
                .padStart(2, "0"),
            )
            .join("");
        set({ color: hex });
      }
    },
    get color() {
      return this.base_color;
    },
    set color(v: unknown) {
      this.base_color = v;
    },
    get metallic() {
      return get()?.metalness ?? 0;
    },
    set metallic(v: number) {
      set({ metalness: Number(v) });
    },
    get metalness() {
      return get()?.metalness ?? 0;
    },
    set metalness(v: number) {
      set({ metalness: Number(v) });
    },
    get roughness() {
      return get()?.roughness ?? 0.5;
    },
    set roughness(v: number) {
      set({ roughness: Number(v) });
    },
    get transmission() {
      return get()?.transmission ?? 0;
    },
    set transmission(v: number) {
      set({ transmission: Number(v) });
    },
    get clearcoat() {
      return get()?.clearcoat ?? 0;
    },
    set clearcoat(v: number) {
      set({ clearcoat: Number(v) });
    },
    get ior() {
      return get()?.ior ?? 1.5;
    },
    set ior(v: number) {
      set({ ior: Number(v) });
    },
    get emission_strength() {
      return get()?.emissiveIntensity ?? 0;
    },
    set emission_strength(v: number) {
      set({ emissiveIntensity: Number(v) });
    },
  };
}

function wrapObj(id: string) {
  const st = () => useStudio.getState();
  const get = () => st().objects.find((o) => o.id === id);
  return {
    get name() {
      return get()?.name ?? "";
    },
    set name(v: string) {
      st().updateObject(id, { name: String(v) });
    },
    get location() {
      return new Vec(
        () => get()?.position ?? [0, 0, 0],
        (t) => st().updateObject(id, { position: t }),
      );
    },
    set location(v: unknown) {
      st().updateObject(id, { position: asTriple(v) });
    },
    get rotation_euler() {
      return new Vec(
        () => get()?.rotation ?? [0, 0, 0],
        (t) => st().updateObject(id, { rotation: t }),
      );
    },
    set rotation_euler(v: unknown) {
      st().updateObject(id, { rotation: asTriple(v) });
    },
    get rotation() {
      return this.rotation_euler;
    },
    set rotation(v: unknown) {
      this.rotation_euler = v;
    },
    get scale() {
      return new Vec(
        () => get()?.scale ?? [1, 1, 1],
        (t) => st().updateObject(id, { scale: t }),
      );
    },
    set scale(v: unknown) {
      st().updateObject(id, { scale: asTriple(v, [1, 1, 1]) });
    },
    get material() {
      return wrapMat(id);
    },
    set material(v: unknown) {
      if (v && typeof v === "object") {
        const m = v as Partial<Material> & { name?: string };
        st().patchMaterial(id, {
          ...defaultMaterial(m.name ?? "Material"),
          ...(v as Partial<Material>),
        });
      }
    },
    get visible() {
      return get()?.visible ?? true;
    },
    set visible(v: boolean) {
      st().updateObject(id, { visible: !!v });
    },
    get type() {
      return get()?.kind;
    },
    modifier_add: (...args: unknown[]) => {
      const { kw } = pyKw(args);
      const type = String(kw.type ?? args[0] ?? "subdiv").toLowerCase();
      const map: Record<string, ModifierType> = {
        subsurf: "subdiv",
        subdiv: "subdiv",
        mirror: "mirror",
        array: "array",
        solidify: "solidify",
        bevel: "bevel",
        displace: "displace",
      };
      st().addModifier(id, map[type] ?? "subdiv");
    },
    keyframe_insert: (...args: unknown[]) => {
      const { kw } = pyKw(args);
      st().insertKeyframe(id, kw.frame != null ? Number(kw.frame) : undefined);
    },
  };
}

function addPrim(primitive: Primitive, args: unknown[]) {
  const { kw } = pyKw(args);
  const params: Record<string, number | string> = {};
  for (const [k, v] of Object.entries(kw)) {
    if (k === "location" || k === "rotation" || k === "scale" || k === "name") continue;
    if (typeof v === "number" || typeof v === "string") params[k] = v;
  }
  const id = useStudio.getState().addMesh(primitive, {
    name: kw.name ? String(kw.name) : undefined,
    position: kw.location ? asTriple(kw.location) : undefined,
    rotation: kw.rotation ? asTriple(kw.rotation) : undefined,
    scale: kw.scale ? asTriple(kw.scale, [1, 1, 1]) : undefined,
    params,
  });
  return wrapObj(id);
}

function fn(handler: (pos: unknown[], kw: Record<string, unknown>) => unknown) {
  return (...args: unknown[]) => {
    const { pos, kw } = pyKw(args);
    return handler(pos, kw);
  };
}

export function createBpy(print: (s: string) => void, extras: { render?: () => void } = {}) {
  const ops = {
    mesh: {
      primitive_cube_add: (...a: unknown[]) => addPrim("cube", a),
      primitive_uv_sphere_add: (...a: unknown[]) => addPrim("sphere", a),
      primitive_ico_sphere_add: (...a: unknown[]) => addPrim("ico", a),
      primitive_cylinder_add: (...a: unknown[]) => addPrim("cylinder", a),
      primitive_cone_add: (...a: unknown[]) => addPrim("cone", a),
      primitive_torus_add: (...a: unknown[]) => addPrim("torus", a),
      primitive_plane_add: (...a: unknown[]) => addPrim("plane", a),
      primitive_capsule_add: (...a: unknown[]) => addPrim("capsule", a),
      primitive_torusknot_add: (...a: unknown[]) => addPrim("knot", a),
      primitive_gear_add: (...a: unknown[]) => addPrim("gear", a),
      primitive_stairs_add: (...a: unknown[]) => addPrim("stairs", a),
      primitive_helix_add: (...a: unknown[]) => addPrim("helix", a),
      primitive_column_add: (...a: unknown[]) => addPrim("column", a),
      primitive_tree_add: (...a: unknown[]) => addPrim("tree", a),
      primitive_rock_add: (...a: unknown[]) => addPrim("rock", a),
      primitive_vase_add: (...a: unknown[]) => addPrim("vase", a),
      primitive_dna_add: (...a: unknown[]) => addPrim("dna", a),
      primitive_rounded_cube_add: (...a: unknown[]) => addPrim("rounded", a),
    },
    object: {
      delete: fn(() => useStudio.getState().removeSelected()),
      duplicate: fn(() => useStudio.getState().duplicateSelected()),
      shade_smooth: fn(() => {
        const id = useStudio.getState().activeId;
        if (id) useStudio.getState().patchMaterial(id, { flat: false });
      }),
      shade_flat: fn(() => {
        const id = useStudio.getState().activeId;
        if (id) useStudio.getState().patchMaterial(id, { flat: true });
      }),
      modifier_add: fn((_p, kw) => {
        const id = useStudio.getState().activeId;
        if (!id) return;
        const type = String(kw.type ?? "SUBSURF").toLowerCase();
        const map: Record<string, ModifierType> = {
          subsurf: "subdiv",
          subdiv: "subdiv",
          mirror: "mirror",
          array: "array",
          solidify: "solidify",
          bevel: "bevel",
          displace: "displace",
        };
        useStudio.getState().addModifier(id, map[type] ?? "subdiv");
      }),
      camera_add: fn((_p, kw) => wrapObj(useStudio.getState().addCamera(locOf(kw, [4, 3, 5])))),
      light_add: fn((_p, kw) => {
        const type = String(kw.type ?? "POINT").toLowerCase() as LightType;
        const t: LightType = ["sun", "point", "spot", "area"].includes(type) ? type : "point";
        return wrapObj(useStudio.getState().addLight(t, locOf(kw)));
      }),
      select_all: fn(() => {
        const s = useStudio.getState();
        s.select(null);
      }),
      hide_view_set: fn(() => useStudio.getState().hideSelected()),
    },
    lighting: {
      three_point: fn(() => useStudio.getState().threePointLights()),
      studio: fn((_p, kw) => {
        useStudio.getState().setEnv((kw.preset as EnvPreset) || "studio", kwNum(kw, "intensity", 1));
      }),
    },
    scene: {
      clear: fn(() => useStudio.getState().loadEmpty()),
      lookdev_setup: fn(() => useStudio.getState().loadLookdev()),
      arch_setup: fn(() => useStudio.getState().loadArch()),
    },
    anim: {
      keyframe_insert: fn((_p, kw) => useStudio.getState().insertKeyframe(undefined, kw.frame != null ? Number(kw.frame) : undefined)),
      turntable: fn(() => useStudio.getState().insertTurntable()),
    },
    render: {
      render: fn(() => extras.render?.()),
    },
  };

  const data = {
    objects: {
      __getitem__(name: string) {
        const o = useStudio.getState().objects.find((x) => x.name === String(name));
        if (!o) throw new Error(`KeyError: bpy.data.objects['${name}']`);
        return wrapObj(o.id);
      },
      get(name: string) {
        const o = useStudio.getState().objects.find((x) => x.name === String(name));
        return o ? wrapObj(o.id) : null;
      },
    },
    materials: {
      new: fn((_p, kw) => {
        const name = String(kw.name ?? "Material");
        const preset = MATERIAL_PRESETS[name] ?? {};
        return { ...defaultMaterial(name), ...preset, name };
      }),
    },
  };

  const context = {
    get object() {
      const o = activeObject();
      return o ? wrapObj(o.id) : null;
    },
    get active_object() {
      return this.object;
    },
    get selected_objects() {
      const s = useStudio.getState();
      return s.objects.filter((o) => s.selectedIds.includes(o.id)).map((o) => wrapObj(o.id));
    },
    scene: {
      get frame_current() {
        return useStudio.getState().frame;
      },
      set frame_current(v: number) {
        useStudio.getState().setFrame(Number(v));
      },
    },
  };

  return { ops, data, context, print };
}

export function Vector(x: unknown = 0, y = 0, z = 0) {
  if (Array.isArray(x)) return asTriple(x);
  return asTriple([x, y, z]);
}

export function executePython(code: string, extras: { render?: () => void } = {}) {
  const out: string[] = [];
  const print = (...args: unknown[]) => {
    const line = args
      .map((a) => {
        if (a && typeof a === "object" && (a as { __kw?: unknown }).__kw) return "";
        try {
          return typeof a === "string" ? a : JSON.stringify(a);
        } catch {
          return String(a);
        }
      })
      .filter(Boolean)
      .join(" ");
    out.push(line);
    useStudio.getState().log({ kind: "out", text: line || " " });
  };
  const bpy = createBpy((s) => print(s), extras);
  const math = {
    pi: Math.PI,
    tau: Math.PI * 2,
    e: Math.E,
    sin: Math.sin,
    cos: Math.cos,
    tan: Math.tan,
    asin: Math.asin,
    acos: Math.acos,
    atan: Math.atan,
    atan2: Math.atan2,
    sqrt: Math.sqrt,
    floor: Math.floor,
    ceil: Math.ceil,
    abs: Math.abs,
    min: Math.min,
    max: Math.max,
    pow: Math.pow,
    radians: (d: number) => (d * Math.PI) / 180,
    degrees: (r: number) => (r * 180) / Math.PI,
  };
  const globals: Record<string, PyVal> = {
    bpy,
    print,
    Vector,
    range: (...args: unknown[]) => {
      const { pos } = pyKw(args);
      const nums = pos.map(Number);
      let start = 0;
      let end = 0;
      let step = 1;
      if (nums.length === 1) end = nums[0]!;
      else if (nums.length >= 2) {
        start = nums[0]!;
        end = nums[1]!;
        if (nums[2]) step = nums[2];
      }
      const arr: number[] = [];
      if (step === 0) return arr;
      if (step > 0) for (let i = start; i < end; i += step) arr.push(i);
      else for (let i = start; i > end; i += step) arr.push(i);
      return arr;
    },
    len: (x: unknown) => (Array.isArray(x) || typeof x === "string" ? x.length : 0),
    int: (x: unknown) => parseInt(String(x), 10) || 0,
    float: (x: unknown) => Number(x) || 0,
    str: (x: unknown) => String(x),
    abs: Math.abs,
    min: Math.min,
    max: Math.max,
    round: Math.round,
    enumerate: (x: unknown) => (Array.isArray(x) ? x.map((v, i) => [i, v]) : []),
    math,
    pi: Math.PI,
    sum: (xs: unknown) => (Array.isArray(xs) ? xs.reduce((a: number, b) => a + Number(b), 0) : 0),
    any: (xs: unknown) => (Array.isArray(xs) ? xs.some(Boolean) : false),
    all: (xs: unknown) => (Array.isArray(xs) ? xs.every(Boolean) : false),
    zip: (...args: unknown[]) => {
      const { pos } = pyKw(args);
      const lists = pos.filter(Array.isArray) as unknown[][];
      const n = Math.min(...lists.map((l) => l.length), 0) || Math.min(...lists.map((l) => l.length));
      const out: unknown[][] = [];
      const len = lists.length ? Math.min(...lists.map((l) => l.length)) : 0;
      for (let i = 0; i < len; i++) out.push(lists.map((l) => l[i]));
      return out;
      void n;
    },
    sorted: (xs: unknown) => (Array.isArray(xs) ? [...xs].sort((a, b) => Number(a) - Number(b)) : []),
    reversed: (xs: unknown) => (Array.isArray(xs) ? [...xs].reverse() : []),
    list: (xs: unknown) => (Array.isArray(xs) ? [...xs] : xs == null ? [] : [xs]),
    dict: (xs: unknown) => (xs && typeof xs === "object" ? { ...(xs as object) } : {}),
    bool: (x: unknown) => !!x,
    type: (x: unknown) => (x === null ? "NoneType" : Array.isArray(x) ? "list" : typeof x),
    Exception: (msg: unknown) => String(msg ?? "Exception"),
  };
  let seed = 1;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const random = {
    random: rnd,
    seed: (s: number) => {
      seed = Math.max(1, Number(s) || 1);
      return null;
    },
    randint: (a: number, b: number) => Math.floor(rnd() * (Number(b) - Number(a) + 1)) + Number(a),
    uniform: (a: number, b: number) => Number(a) + rnd() * (Number(b) - Number(a)),
    choice: (xs: unknown) => (Array.isArray(xs) && xs.length ? xs[Math.floor(rnd() * xs.length)] : null),
  };
  const modules = {
    bpy,
    math,
    mathutils: { Vector },
    random,
  };
  try {
    useStudio.getState().log({ kind: "in", text: ">>> run" });
    const result = runPython(code, globals, modules, (s) => print(s));
    if (result != null && result !== undefined) {
      const text = typeof result === "string" ? result : JSON.stringify(result);
      if (text && text !== "null") useStudio.getState().log({ kind: "out", text });
    }
    return { ok: true as const, output: out };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    useStudio.getState().log({ kind: "err", text: msg });
    return { ok: false as const, output: out, error: msg };
  }
}
