import { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  Download,
  FileCode,
  Grid3x3,
  Image as ImageIcon,
  Keyboard,
  Move,
  Redo2,
  RotateCw,
  Scaling,
  Undo2,
  X,
} from "lucide-react";
import { Toaster, toast } from "sonner";
import { executePython } from "@/lib/studio/bpy";
import { exportBlenderPython, exportSceneGlb, importGltfFile, downloadText, downloadDataUrl } from "@/lib/studio/export";
import { t } from "@/lib/studio/i18n";
import { loadProject, subscribePersist } from "@/lib/studio/persist";
import { useStudio } from "@/lib/studio/store";
import { ENV_PRESETS, type EnvPreset, type LayoutId, type Shading } from "@/lib/studio/types";
import { captureStill } from "@/lib/studio/viewport-api";
import { cn } from "@/lib/utils";
import { AddShelf, Outliner, Properties, Timeline } from "./Panels";
import { PythonPanel } from "./PythonPanel";

const Viewport = lazy(() => import("./Viewport").then((m) => ({ default: m.Viewport })));

function isTypingTarget(el: EventTarget | null) {
  if (!(el instanceof HTMLElement)) return false;
  const tag = el.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || el.isContentEditable;
}

function Menu({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        className={cn("rounded-xs px-2 py-1 text-xs text-muted hover:bg-bg-hover hover:text-fg", open && "bg-bg-hover text-fg")}
      >
        {label}
      </button>
      {open && (
        <div className="absolute top-full start-0 z-40 min-w-52 rounded-md border border-border bg-bg-elevated py-1 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
          {children}
        </div>
      )}
    </div>
  );
}

function Item({ onClick, children, kbd }: { onClick: () => void; children: React.ReactNode; kbd?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between gap-6 px-3 py-1.5 text-start text-xs text-fg hover:bg-bg-hover"
    >
      <span>{children}</span>
      {kbd && <span className="font-mono text-2xs text-subtle">{kbd}</span>}
    </button>
  );
}

export function StudioApp() {
  const lang = useStudio((s) => s.lang);
  const layout = useStudio((s) => s.layout);
  const shading = useStudio((s) => s.shading);
  const mode = useStudio((s) => s.mode);
  const transformMode = useStudio((s) => s.transformMode);
  const showWelcome = useStudio((s) => s.showWelcome);
  const showKeys = useStudio((s) => s.showKeys);
  const renderUrl = useStudio((s) => s.renderDataUrl);
  const mobileTab = useStudio((s) => s.mobileTab);
  const sculpt = useStudio((s) => s.sculpt);
  const objectCount = useStudio((s) => s.objects.length);
  const fileRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = loadProject();
    if (saved?.objects?.length) {
      useStudio.getState().hydrate({
        objects: saved.objects,
        lang: saved.lang,
        pythonCode: saved.pythonCode,
        envPreset: saved.envPreset as EnvPreset,
        shading: saved.shading as Shading,
      });
    } else {
      useStudio.getState().setHydrated(true);
    }
    const unsub = subscribePersist();
    return () => unsub();
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isTypingTarget(e.target)) {
        if ((e.metaKey || e.ctrlKey) && e.key === "Enter") return;
        return;
      }
      const s = useStudio.getState();
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "z") {
        e.preventDefault();
        if (e.shiftKey) s.redo();
        else s.undo();
        return;
      }
      if (e.key === "?" || (e.shiftKey && e.key === "/")) {
        s.setShowKeys(!s.showKeys);
        return;
      }
      if (e.key === " ") {
        e.preventDefault();
        s.setPlaying(!s.playing);
        return;
      }
      if (e.key.toLowerCase() === "g") s.setTransformMode("translate");
      if (e.key.toLowerCase() === "r" && !e.ctrlKey) s.setTransformMode("rotate");
      if (e.key.toLowerCase() === "s" && !e.ctrlKey) s.setTransformMode("scale");
      if (e.key.toLowerCase() === "x" || e.key === "Delete") s.removeSelected();
      if (e.key.toLowerCase() === "h") s.hideSelected();
      if (e.key.toLowerCase() === "z" && !e.ctrlKey && !e.metaKey) {
        const order: Shading[] = ["wire", "solid", "material", "rendered"];
        const i = order.indexOf(s.shading);
        s.setShading(order[(i + 1) % order.length]!);
      }
      if (e.key === "Tab") {
        e.preventDefault();
        s.setMode(s.mode === "object" ? "sculpt" : "object");
      }
      if (e.key === "F12") {
        e.preventDefault();
        const url = captureStill();
        if (url) toast(lang === "fa" ? "رندر آماده است" : "Render ready");
      }
      if (e.shiftKey && e.key.toLowerCase() === "d") {
        e.preventDefault();
        s.duplicateSelected();
      }
      if (e.shiftKey && e.key.toLowerCase() === "a") {
        e.preventDefault();
        s.setMobileTab("scene");
        s.setLayout("model");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lang]);

  const renderStill = () => {
    const url = captureStill();
    if (url) toast(lang === "fa" ? "رندر فریم گرفته شد" : "Still captured");
  };

  const layouts: { id: LayoutId; label: ReturnType<typeof t> }[] = [
    { id: "model", label: t(lang, "layoutModel") },
    { id: "lookdev", label: t(lang, "layoutLookdev") },
    { id: "anim", label: t(lang, "layoutAnim") },
    { id: "script", label: t(lang, "layoutScript") },
    { id: "render", label: t(lang, "layoutRender") },
  ];

  const showTimeline = layout === "anim" || layout === "lookdev" || layout === "render";

  return (
    <div className="flex h-dvh min-h-0 flex-col overflow-hidden bg-bg text-fg">
      <Toaster theme="dark" position="bottom-center" />
      <header className="flex h-10 shrink-0 items-center gap-1 border-b border-border bg-bg-elevated px-2">
        <div className="me-2 flex items-center gap-2 px-1">
          <span className="size-2 rounded-full bg-accent" />
          <span className="text-sm font-medium tracking-tight">Lumina</span>
        </div>
        <nav className="hidden items-center md:flex">
          <Menu label={t(lang, "file")}>
            <Item onClick={() => useStudio.getState().loadEmpty()}>{t(lang, "newScene")}</Item>
            <Item onClick={() => useStudio.getState().loadLookdev()}>{t(lang, "lookdev")}</Item>
            <Item onClick={() => useStudio.getState().loadArch()}>{t(lang, "startArch")}</Item>
            <Item onClick={() => fileRef.current?.click()}>{t(lang, "importGltf")}</Item>
            <Item onClick={() => exportSceneGlb()}>{t(lang, "exportGltf")}</Item>
            <Item
              onClick={() => {
                downloadText("lumina_scene.py", exportBlenderPython(), "text/x-python");
                toast(lang === "fa" ? "اسکریپت بلندر دانلود شد" : "Blender script downloaded");
              }}
            >
              {t(lang, "exportPy")}
            </Item>
            <Item onClick={renderStill}>{t(lang, "exportPng")}</Item>
          </Menu>
          <Menu label={t(lang, "edit")}>
            <Item kbd="⌘Z" onClick={() => useStudio.getState().undo()}>
              {t(lang, "undo")}
            </Item>
            <Item kbd="⇧⌘Z" onClick={() => useStudio.getState().redo()}>
              {t(lang, "redo")}
            </Item>
            <Item kbd="⇧D" onClick={() => useStudio.getState().duplicateSelected()}>
              {t(lang, "duplicate")}
            </Item>
            <Item kbd="X" onClick={() => useStudio.getState().removeSelected()}>
              {t(lang, "delete")}
            </Item>
          </Menu>
          <Menu label={t(lang, "add")}>
            <Item onClick={() => useStudio.getState().addMesh("cube")}>Cube</Item>
            <Item onClick={() => useStudio.getState().addMesh("sphere")}>UV Sphere</Item>
            <Item onClick={() => useStudio.getState().addMesh("gear")}>Gear</Item>
            <Item onClick={() => useStudio.getState().addMesh("column")}>Column</Item>
            <Item onClick={() => useStudio.getState().addLight("sun")}>Sun</Item>
          </Menu>
          <Menu label={t(lang, "lighting")}>
            <Item onClick={() => useStudio.getState().threePointLights()}>{t(lang, "threePoint")}</Item>
            {ENV_PRESETS.map((p) => (
              <Item key={p} onClick={() => useStudio.getState().setEnv(p)}>
                HDRI {p}
              </Item>
            ))}
          </Menu>
          <Menu label={t(lang, "render")}>
            <Item kbd="F12" onClick={renderStill}>
              {t(lang, "renderStill")}
            </Item>
            <Item onClick={() => useStudio.getState().setShading("rendered")}>{t(lang, "rendered")}</Item>
          </Menu>
          <Menu label={t(lang, "help")}>
            <Item kbd="?" onClick={() => useStudio.getState().setShowKeys(true)}>
              {t(lang, "shortcuts")}
            </Item>
          </Menu>
        </nav>
        <div className="ms-auto flex items-center gap-1">
          <div className="hidden overflow-hidden rounded-sm border border-border sm:flex">
            {layouts.map((L) => (
              <button
                key={L.id}
                type="button"
                onClick={() => useStudio.getState().setLayout(L.id)}
                className={cn(
                  "px-2 py-1 text-2xs",
                  layout === L.id ? "bg-bg-hover text-fg" : "text-muted hover:text-fg",
                )}
              >
                {L.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => useStudio.getState().setLang(lang === "fa" ? "en" : "fa")}
            className="rounded-sm border border-border px-2 py-1 text-2xs text-muted hover:text-fg"
          >
            {lang === "fa" ? "EN" : "فا"}
          </button>
        </div>
      </header>

      <div className="flex h-9 shrink-0 items-center gap-1 border-b border-border bg-bg-panel px-2">
        {(
          [
            ["translate", Move],
            ["rotate", RotateCw],
            ["scale", Scaling],
          ] as const
        ).map(([m, Icon]) => (
          <button
            key={m}
            type="button"
            onClick={() => useStudio.getState().setTransformMode(m)}
            className={cn(
              "rounded-xs p-1.5",
              transformMode === m ? "bg-accent text-accent-fg" : "text-muted hover:bg-bg-hover hover:text-fg",
            )}
            aria-label={m}
          >
            <Icon className="size-4" strokeWidth={1.75} />
          </button>
        ))}
        <span className="mx-1 h-4 w-px bg-border" />
        <button
          type="button"
          onClick={() => useStudio.getState().setMode(mode === "object" ? "sculpt" : "object")}
          className={cn(
            "rounded-xs px-2 py-1 text-2xs",
            mode === "sculpt" ? "bg-accent text-accent-fg" : "text-muted hover:text-fg",
          )}
        >
          {mode === "sculpt" ? t(lang, "sculpt") : t(lang, "objectMode")}
        </button>
        <span className="mx-1 h-4 w-px bg-border" />
        {(["wire", "solid", "material", "rendered"] as const).map((sh) => (
          <button
            key={sh}
            type="button"
            onClick={() => useStudio.getState().setShading(sh)}
            className={cn("rounded-xs px-2 py-1 text-2xs", shading === sh ? "text-fg" : "text-subtle hover:text-fg")}
          >
            {t(lang, sh === "wire" ? "wire" : sh === "solid" ? "solid" : sh === "rendered" ? "rendered" : "material")}
          </button>
        ))}
        <button
          type="button"
          onClick={() => useStudio.getState().setShowGrid(!useStudio.getState().showGrid)}
          className="ms-1 rounded-xs p-1.5 text-muted hover:text-fg"
          aria-label="grid"
        >
          <Grid3x3 className="size-4" />
        </button>
        <button type="button" onClick={() => useStudio.getState().undo()} className="rounded-xs p-1.5 text-muted hover:text-fg">
          <Undo2 className="size-4" />
        </button>
        <button type="button" onClick={() => useStudio.getState().redo()} className="rounded-xs p-1.5 text-muted hover:text-fg">
          <Redo2 className="size-4" />
        </button>
        <div className="ms-auto flex items-center gap-1">
          {mode === "sculpt" && (
            <span className="hidden items-center gap-2 text-2xs text-muted sm:flex">
              {t(lang, "radius")}
              <input
                className="dcc-range w-20"
                type="range"
                min={0.05}
                max={1.4}
                step={0.01}
                value={sculpt.radius}
                onChange={(e) => useStudio.getState().setSculpt({ radius: Number(e.target.value) })}
              />
            </span>
          )}
          <button
            type="button"
            onClick={renderStill}
            className="inline-flex items-center gap-1 rounded-sm bg-accent px-2.5 py-1 text-2xs font-medium text-accent-fg"
          >
            <ImageIcon className="size-3.5" />
            {t(lang, "renderStill")}
          </button>
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        <aside
          className={cn(
            "w-[220px] shrink-0 border-e border-border bg-bg-panel",
            mobileTab === "scene" ? "flex" : "hidden md:flex",
            "flex-col",
          )}
        >
          <div className="flex h-1/2 min-h-0 flex-col border-b border-border">
            <Outliner />
          </div>
          <div className="flex min-h-0 flex-1 flex-col">
            <AddShelf />
          </div>
        </aside>

        <div className={cn("relative min-w-0 flex-1 flex-col", mobileTab === "view" || mobileTab === "py" ? "flex" : "hidden md:flex")}>
          <div className="relative min-h-0 flex-1 bg-viewport">
            {mounted ? (
              <Suspense
                fallback={
                  <div className="flex h-full items-center justify-center text-sm text-muted">{t(lang, "studio")}…</div>
                }
              >
                <Viewport />
              </Suspense>
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-muted">{t(lang, "studio")}…</div>
            )}
            {showWelcome && <Welcome />}
          </div>
          {showTimeline && <Timeline />}
          {layout === "script" && (
            <div className="hidden h-[280px] border-t border-border md:block">
              <PythonPanel />
            </div>
          )}
        </div>

        <aside
          className={cn(
            "w-[280px] shrink-0 border-s border-border bg-bg-panel",
            mobileTab === "props" ? "flex" : "hidden lg:flex",
            "flex-col",
          )}
        >
          <Properties />
        </aside>
      </div>

      <div className={cn("h-[240px] shrink-0 border-t border-border md:hidden", mobileTab === "py" ? "block" : "hidden")}>
        <PythonPanel />
      </div>

      <footer className="flex h-7 shrink-0 items-center justify-between border-t border-border bg-bg-elevated px-3 text-2xs text-subtle">
        <span>
          {objectCount} {t(lang, "objects")} · Y-up · bpy
        </span>
        <span className="hidden sm:inline">G/R/S · X · ⇧D · Tab · Z · F12 · ?</span>
        <button type="button" onClick={() => useStudio.getState().setShowKeys(true)} className="text-muted hover:text-fg">
          <Keyboard className="size-3.5" />
        </button>
      </footer>

      <nav className="flex h-12 shrink-0 border-t border-border bg-bg-elevated md:hidden">
        {(
          [
            ["view", t(lang, "studio")],
            ["scene", t(lang, "scene")],
            ["props", t(lang, "properties")],
            ["py", t(lang, "script")],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => useStudio.getState().setMobileTab(id)}
            className={cn("flex-1 text-2xs", mobileTab === id ? "text-fg" : "text-muted")}
          >
            {label}
          </button>
        ))}
      </nav>

      <input
        ref={fileRef}
        type="file"
        accept=".glb,.gltf"
        className="hidden"
        onChange={async (e) => {
          const f = e.target.files?.[0];
          if (!f) return;
          try {
            await importGltfFile(f);
            toast(lang === "fa" ? "مدل وارد شد" : "Imported");
          } catch (err) {
            toast(String(err));
          }
        }}
      />

      {renderUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 p-4">
          <div className="w-full max-w-4xl rounded-xl border border-border bg-bg-elevated p-3">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-sm font-medium">{t(lang, "render")}</h2>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => downloadDataUrl("lumina.png", renderUrl)}
                  className="inline-flex items-center gap-1 rounded-sm bg-accent px-2 py-1 text-2xs text-accent-fg"
                >
                  <Download className="size-3.5" /> {t(lang, "download")}
                </button>
                <button type="button" onClick={() => useStudio.getState().setRenderDataUrl(null)}>
                  <X className="size-4 text-muted" />
                </button>
              </div>
            </div>
            <img src={renderUrl} alt="render" className="max-h-[70vh] w-full rounded-md object-contain" />
          </div>
        </div>
      )}

      {showKeys && <KeysHelp />}
    </div>
  );
}

function Welcome() {
  const lang = useStudio((s) => s.lang);
  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-end p-4 sm:items-center sm:p-8">
      <div className="pointer-events-auto w-full max-w-md rounded-xl border border-border bg-bg-elevated/95 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
        <p className="text-2xs font-medium tracking-[0.18em] text-accent uppercase">Lumina</p>
        <h1 className="mt-2 text-2xl font-medium tracking-tight text-fg">{t(lang, "welcomeTitle")}</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">{t(lang, "welcomeBody")}</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => useStudio.getState().loadLookdev()}
            className="rounded-md bg-accent px-3 py-2.5 text-xs font-medium text-accent-fg"
          >
            {t(lang, "startLookdev")}
          </button>
          <button
            type="button"
            onClick={() => useStudio.getState().loadArch()}
            className="rounded-md border border-border px-3 py-2.5 text-xs text-fg hover:bg-bg-hover"
          >
            {t(lang, "startArch")}
          </button>
          <button
            type="button"
            onClick={() => useStudio.getState().loadEmpty()}
            className="rounded-md border border-border px-3 py-2.5 text-xs text-fg hover:bg-bg-hover"
          >
            {t(lang, "startEmpty")}
          </button>
          <button
            type="button"
            onClick={() => {
              useStudio.getState().setShowWelcome(false);
              useStudio.getState().setLayout("script");
              executePython(useStudio.getState().pythonCode);
            }}
            className="inline-flex items-center justify-center gap-1 rounded-md border border-border px-3 py-2.5 text-xs text-fg hover:bg-bg-hover"
          >
            <FileCode className="size-3.5" /> {t(lang, "startScript")}
          </button>
        </div>
      </div>
    </div>
  );
}

function KeysHelp() {
  const lang = useStudio((s) => s.lang);
  const rows =
    lang === "fa"
      ? [
          ["G / R / S", "جابه‌جایی، چرخش، مقیاس"],
          ["X / Del", "حذف"],
          ["⇧ D", "تکثیر"],
          ["H", "پنهان"],
          ["Tab", "اسکالپت / آبجکت"],
          ["Z", "حالت سایه‌زنی"],
          ["Space", "پخش انیمیشن"],
          ["F12", "رندر فریم"],
          ["Ctrl+Z", "بازگردانی"],
          ["Ctrl+Enter", "اجرای پایتون"],
        ]
      : [
          ["G / R / S", "Move, rotate, scale"],
          ["X / Del", "Delete"],
          ["⇧ D", "Duplicate"],
          ["H", "Hide"],
          ["Tab", "Sculpt / object"],
          ["Z", "Cycle shading"],
          ["Space", "Play"],
          ["F12", "Render still"],
          ["Ctrl+Z", "Undo"],
          ["Ctrl+Enter", "Run Python"],
        ];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg/70 p-4">
      <div className="w-full max-w-md rounded-xl border border-border bg-bg-elevated p-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-medium">{t(lang, "shortcuts")}</h2>
          <button type="button" onClick={() => useStudio.getState().setShowKeys(false)}>
            <X className="size-4 text-muted" />
          </button>
        </div>
        <ul className="space-y-1.5">
          {rows.map(([k, v]) => (
            <li key={k} className="flex items-center justify-between text-xs">
              <span className="font-mono text-muted">{k}</span>
              <span className="text-fg">{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
