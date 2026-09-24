import {
  Box,
  Camera,
  Copy,
  Cylinder,
  Eye,
  EyeOff,
  Lightbulb,
  Plus,
  Trash2,
} from "lucide-react";
import { PRIMITIVE_DEFAULTS } from "@/lib/studio/geometry";
import { t } from "@/lib/studio/i18n";
import { activeObject, useStudio } from "@/lib/studio/store";
import { MATERIAL_PRESETS, type Primitive } from "@/lib/studio/types";
import { cn } from "@/lib/utils";

function NumField({
  label,
  value,
  onChange,
  min,
  max,
  step = 0.01,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <label className="grid grid-cols-[1fr_52px] items-center gap-2 text-2xs text-muted">
      <span className="flex items-center gap-2">
        <span className="w-10 shrink-0 truncate text-subtle">{label}</span>
        <input
          className="dcc-range w-full"
          type="range"
          min={min ?? -10}
          max={max ?? 10}
          step={step}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </span>
      <input
        className="h-7 rounded-xs border border-border bg-bg-input px-1 text-right font-mono text-2xs text-fg tabular-nums"
        type="number"
        step={step}
        value={Number(value.toFixed(3))}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}

export function Outliner() {
  const lang = useStudio((s) => s.lang);
  const objects = useStudio((s) => s.objects);
  const selected = useStudio((s) => s.selectedIds);
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-border px-3 py-2">
        <h2 className="text-2xs font-medium tracking-wide text-muted uppercase">{t(lang, "outliner")}</h2>
        <span className="font-mono text-2xs text-subtle tabular-nums">{objects.length}</span>
      </div>
      <ul className="dcc-scroll flex-1 overflow-auto py-1">
        {objects.map((o) => {
          const on = selected.includes(o.id);
          const Icon = o.kind === "light" ? Lightbulb : o.kind === "camera" ? Camera : o.kind === "empty" ? Box : Cylinder;
          return (
            <li key={o.id}>
              <button
                type="button"
                onClick={(e) => useStudio.getState().select(o.id, e.shiftKey)}
                className={cn(
                  "flex w-full items-center gap-2 px-3 py-1.5 text-start text-xs",
                  on ? "bg-accent/15 text-fg" : "text-muted hover:bg-bg-hover hover:text-fg",
                )}
              >
                <Icon className="size-3.5 shrink-0" strokeWidth={1.75} />
                <span className="min-w-0 flex-1 truncate">{o.name}</span>
                <button
                  type="button"
                  className="text-subtle hover:text-fg"
                  onClick={(e) => {
                    e.stopPropagation();
                    useStudio.getState().updateObject(o.id, { visible: !o.visible });
                  }}
                  aria-label={t(lang, "visible")}
                >
                  {o.visible ? <Eye className="size-3.5" /> : <EyeOff className="size-3.5" />}
                </button>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function AddShelf() {
  const lang = useStudio((s) => s.lang);
  const prims = (Object.keys(PRIMITIVE_DEFAULTS) as Primitive[]).filter((k) => k !== "baked");
  const gens: Primitive[] = ["gear", "stairs", "helix", "column", "tree", "rock", "vase", "dna", "text", "knot"];
  const basics = prims.filter((p) => !gens.includes(p));
  const add = (p: Primitive) => useStudio.getState().addMesh(p);
  return (
    <div className="dcc-scroll flex-1 overflow-auto p-2">
      <p className="px-1 pb-1 text-2xs font-medium text-subtle uppercase">{t(lang, "primitives")}</p>
      <div className="grid grid-cols-2 gap-1">
        {basics.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => add(p)}
            className="rounded-sm border border-border bg-bg-elevated px-2 py-2 text-2xs text-fg hover:border-border-strong hover:bg-bg-hover"
          >
            {PRIMITIVE_DEFAULTS[p].label[lang]}
          </button>
        ))}
      </div>
      <p className="mt-3 px-1 pb-1 text-2xs font-medium text-subtle uppercase">{t(lang, "generators")}</p>
      <div className="grid grid-cols-2 gap-1">
        {gens.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => add(p)}
            className="rounded-sm border border-border bg-bg-elevated px-2 py-2 text-2xs text-fg hover:border-border-strong hover:bg-bg-hover"
          >
            {PRIMITIVE_DEFAULTS[p].label[lang]}
          </button>
        ))}
      </div>
      <p className="mt-3 px-1 pb-1 text-2xs font-medium text-subtle uppercase">{t(lang, "lights")}</p>
      <div className="grid grid-cols-2 gap-1">
        {(["sun", "point", "spot", "area"] as const).map((L) => (
          <button
            key={L}
            type="button"
            onClick={() => useStudio.getState().addLight(L)}
            className="rounded-sm border border-border bg-bg-elevated px-2 py-2 text-2xs text-fg hover:bg-bg-hover"
          >
            {L}
          </button>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-1">
        <button
          type="button"
          onClick={() => useStudio.getState().addCamera()}
          className="rounded-sm border border-border bg-bg-elevated px-2 py-2 text-2xs text-fg hover:bg-bg-hover"
        >
          {t(lang, "cameras")}
        </button>
        <button
          type="button"
          onClick={() => useStudio.getState().addEmpty()}
          className="rounded-sm border border-border bg-bg-elevated px-2 py-2 text-2xs text-fg hover:bg-bg-hover"
        >
          Empty
        </button>
      </div>
    </div>
  );
}

export function Properties() {
  const lang = useStudio((s) => s.lang);
  const activeId = useStudio((s) => s.activeId);
  const obj = useStudio((s) => s.objects.find((o) => o.id === s.activeId));
  if (!obj || !activeId) {
    return <p className="px-3 py-6 text-center text-xs text-subtle">{t(lang, "nothing")}</p>;
  }
  const u = (p: Partial<typeof obj>) => useStudio.getState().updateObject(obj.id, p);
  const m = obj.material;
  return (
    <div className="dcc-scroll h-full overflow-auto p-3 space-y-4">
      <div className="space-y-2">
        <h3 className="text-2xs font-medium text-subtle uppercase">{t(lang, "object")}</h3>
        <label className="block text-2xs text-muted">
          {t(lang, "name")}
          <input
            className="mt-1 h-8 w-full rounded-sm border border-border bg-bg-input px-2 text-xs text-fg"
            value={obj.name}
            onChange={(e) => u({ name: e.target.value })}
          />
        </label>
      </div>
      <div className="space-y-2">
        <h3 className="text-2xs font-medium text-subtle uppercase">{t(lang, "transform")}</h3>
        {(["position", "rotation", "scale"] as const).map((key) => (
          <div key={key} className="space-y-1">
            <p className="text-2xs text-subtle">{t(lang, key === "position" ? "location" : key)}</p>
            {(["x", "y", "z"] as const).map((axis, i) => (
              <NumField
                key={axis}
                label={axis.toUpperCase()}
                value={obj[key][i]!}
                min={key === "scale" ? 0.01 : -20}
                max={key === "scale" ? 8 : 20}
                step={key === "rotation" ? 0.05 : 0.05}
                onChange={(v) => {
                  const next: [number, number, number] = [...obj[key]];
                  next[i] = v;
                  u({ [key]: next });
                }}
              />
            ))}
          </div>
        ))}
      </div>
      {obj.kind === "mesh" && (
        <>
          <div className="space-y-2">
            <h3 className="text-2xs font-medium text-subtle uppercase">{t(lang, "material")}</h3>
            <div className="flex flex-wrap gap-1">
              {Object.keys(MATERIAL_PRESETS).map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => useStudio.getState().applyPreset(obj.id, name)}
                  className="rounded-xs border border-border px-1.5 py-0.5 text-2xs text-muted hover:text-fg"
                >
                  {name}
                </button>
              ))}
            </div>
            <label className="flex items-center gap-2 text-2xs text-muted">
              {t(lang, "color")}
              <input
                type="color"
                className="h-7 w-10 cursor-pointer rounded-xs border border-border bg-transparent"
                value={m.color}
                onChange={(e) => useStudio.getState().patchMaterial(obj.id, { color: e.target.value })}
              />
            </label>
            <NumField label={t(lang, "metalness")} value={m.metalness} min={0} max={1} step={0.01} onChange={(v) => useStudio.getState().patchMaterial(obj.id, { metalness: v })} />
            <NumField label={t(lang, "roughness")} value={m.roughness} min={0} max={1} step={0.01} onChange={(v) => useStudio.getState().patchMaterial(obj.id, { roughness: v })} />
            <NumField label={t(lang, "transmission")} value={m.transmission} min={0} max={1} step={0.01} onChange={(v) => useStudio.getState().patchMaterial(obj.id, { transmission: v })} />
            <NumField label={t(lang, "clearcoat")} value={m.clearcoat} min={0} max={1} step={0.01} onChange={(v) => useStudio.getState().patchMaterial(obj.id, { clearcoat: v })} />
            <NumField
              label="IOR"
              value={m.ior}
              min={1}
              max={2.5}
              step={0.01}
              onChange={(v) => useStudio.getState().patchMaterial(obj.id, { ior: v })}
            />
            <NumField
              label="Emit"
              value={m.emissiveIntensity}
              min={0}
              max={8}
              step={0.05}
              onChange={(v) => useStudio.getState().patchMaterial(obj.id, { emissiveIntensity: v })}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-2xs font-medium text-subtle uppercase">{t(lang, "modifiers")}</h3>
              <div className="flex gap-1">
                {(["subdiv", "mirror", "array", "bevel", "displace", "solidify"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    title={type}
                    onClick={() => useStudio.getState().addModifier(obj.id, type)}
                    className="rounded-xs border border-border px-1 py-0.5 text-2xs text-muted hover:text-fg"
                  >
                    <Plus className="size-3" />
                    <span className="sr-only">{type}</span>
                  </button>
                ))}
              </div>
            </div>
            {obj.modifiers.map((mod) => (
              <div key={mod.id} className="rounded-sm border border-border bg-bg-elevated p-2 space-y-1">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-2xs text-fg">
                    <input
                      type="checkbox"
                      checked={mod.enabled}
                      onChange={(e) => useStudio.getState().updateModifier(obj.id, mod.id, {}, e.target.checked)}
                    />
                    {mod.type}
                  </label>
                  <button type="button" onClick={() => useStudio.getState().removeModifier(obj.id, mod.id)}>
                    <Trash2 className="size-3 text-subtle" />
                  </button>
                </div>
                {Object.entries(mod.params).map(([k, v]) => (
                  <NumField
                    key={k}
                    label={k}
                    value={v}
                    min={k.includes("count") || k === "levels" ? 1 : -5}
                    max={k.includes("count") || k === "levels" ? 12 : 5}
                    step={0.05}
                    onChange={(nv) => useStudio.getState().updateModifier(obj.id, mod.id, { [k]: nv })}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <h3 className="text-2xs font-medium text-subtle uppercase">{t(lang, "mesh")}</h3>
            {Object.entries(obj.params).map(([k, v]) =>
              typeof v === "number" ? (
                <NumField
                  key={k}
                  label={k}
                  value={v}
                  min={0}
                  max={k === "teeth" || k === "steps" || k === "segments" ? 64 : 8}
                  step={k === "teeth" || k === "steps" || k === "segments" ? 1 : 0.05}
                  onChange={(nv) => u({ params: { ...obj.params, [k]: nv } })}
                />
              ) : (
                <label key={k} className="block text-2xs text-muted">
                  {k}
                  <input
                    className="mt-1 h-8 w-full rounded-sm border border-border bg-bg-input px-2 text-xs text-fg"
                    value={String(v)}
                    onChange={(e) => u({ params: { ...obj.params, [k]: e.target.value } })}
                  />
                </label>
              ),
            )}
          </div>
        </>
      )}
      {obj.kind === "light" && obj.light && (
        <div className="space-y-2">
          <h3 className="text-2xs font-medium text-subtle uppercase">{t(lang, "lighting")}</h3>
          <label className="flex items-center gap-2 text-2xs text-muted">
            {t(lang, "color")}
            <input
              type="color"
              className="h-7 w-10 rounded-xs border border-border"
              value={obj.light.color}
              onChange={(e) => u({ light: { ...obj.light!, color: e.target.value } })}
            />
          </label>
          <NumField
            label={t(lang, "intensity")}
            value={obj.light.intensity}
            min={0}
            max={60}
            step={0.1}
            onChange={(v) => u({ light: { ...obj.light!, intensity: v } })}
          />
        </div>
      )}
      <div className="flex gap-1">
        <button
          type="button"
          onClick={() => useStudio.getState().duplicateSelected()}
          className="flex flex-1 items-center justify-center gap-1 rounded-sm border border-border py-2 text-2xs text-muted hover:text-fg"
        >
          <Copy className="size-3.5" /> {t(lang, "duplicate")}
        </button>
        <button
          type="button"
          onClick={() => useStudio.getState().removeSelected()}
          className="flex flex-1 items-center justify-center gap-1 rounded-sm border border-border py-2 text-2xs text-danger"
        >
          <Trash2 className="size-3.5" /> {t(lang, "delete")}
        </button>
      </div>
    </div>
  );
}

export function Timeline() {
  const lang = useStudio((s) => s.lang);
  const frame = useStudio((s) => s.frame);
  const start = useStudio((s) => s.frameStart);
  const end = useStudio((s) => s.frameEnd);
  const playing = useStudio((s) => s.playing);
  const autoKey = useStudio((s) => s.autoKey);
  return (
    <div className="flex h-11 items-center gap-2 border-t border-border bg-bg-elevated px-2">
      <button
        type="button"
        onClick={() => useStudio.getState().setPlaying(!playing)}
        className="rounded-sm bg-accent px-3 py-1.5 text-2xs font-medium text-accent-fg"
      >
        {playing ? "■" : "▶"} {t(lang, "play")}
      </button>
      <button
        type="button"
        onClick={() => useStudio.getState().insertKeyframe()}
        className="rounded-sm border border-border px-2 py-1.5 text-2xs text-muted hover:text-fg"
      >
        {t(lang, "keyframe")}
      </button>
      <button
        type="button"
        onClick={() => useStudio.getState().insertTurntable()}
        className="hidden rounded-sm border border-border px-2 py-1.5 text-2xs text-muted hover:text-fg sm:inline"
      >
        {t(lang, "turntable")}
      </button>
      <label className="flex items-center gap-1 text-2xs text-muted">
        <input type="checkbox" checked={autoKey} onChange={(e) => useStudio.getState().setAutoKey(e.target.checked)} />
        {t(lang, "autoKey")}
      </label>
      <input
        className="dcc-range min-w-0 flex-1"
        type="range"
        min={start}
        max={end}
        value={frame}
        onChange={(e) => {
          useStudio.getState().setPlaying(false);
          useStudio.getState().setFrame(Number(e.target.value));
        }}
      />
      <span className="w-14 text-end font-mono text-2xs text-fg tabular-nums">
        {frame}/{end}
      </span>
    </div>
  );
}

export { activeObject };
