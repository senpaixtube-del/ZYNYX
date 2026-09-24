import { Play, Trash2 } from "lucide-react";
import { executePython } from "@/lib/studio/bpy";
import { t } from "@/lib/studio/i18n";
import { RECIPES } from "@/lib/studio/recipes";
import { useStudio } from "@/lib/studio/store";
import { captureStill } from "@/lib/studio/viewport-api";
import { cn } from "@/lib/utils";

export function PythonPanel() {
  const lang = useStudio((s) => s.lang);
  const code = useStudio((s) => s.pythonCode);
  const lines = useStudio((s) => s.consoleLines);
  const run = () => {
    executePython(code, { render: () => captureStill() });
  };
  return (
    <div className="flex h-full min-h-0 flex-col bg-bg-panel" dir="ltr">
      <div className="flex items-center justify-between border-b border-border px-3 py-2" dir={lang === "fa" ? "rtl" : "ltr"}>
        <h2 className="text-2xs font-medium tracking-wide text-muted uppercase">{t(lang, "script")}</h2>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => useStudio.getState().clearConsole()}
            className="rounded-xs p-1 text-subtle hover:text-fg"
            aria-label="clear"
          >
            <Trash2 className="size-3.5" />
          </button>
          <button
            type="button"
            onClick={run}
            className="inline-flex items-center gap-1 rounded-sm bg-accent px-2 py-1 text-2xs font-medium text-accent-fg"
          >
            <Play className="size-3" />
            {t(lang, "runScript")}
          </button>
        </div>
      </div>
      <div className="dcc-scroll max-h-28 overflow-auto border-b border-border">
        <p className="px-3 py-1.5 text-2xs font-medium text-subtle uppercase" dir={lang === "fa" ? "rtl" : "ltr"}>
          {t(lang, "recipes")}
        </p>
        <div className="flex flex-wrap gap-1 px-2 pb-2">
          {RECIPES.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => {
                useStudio.getState().setPythonCode(r.code);
                executePython(r.code, { render: () => captureStill() });
              }}
              className="rounded-sm border border-border bg-bg-elevated px-2 py-1 text-2xs text-muted hover:text-fg"
              title={r.blurb[lang]}
            >
              {r.title[lang]}
            </button>
          ))}
        </div>
      </div>
      <textarea
        className="min-h-[120px] flex-1 resize-none bg-bg-input px-3 py-2 font-mono text-xs leading-relaxed text-fg outline-none"
        spellCheck={false}
        value={code}
        onChange={(e) => useStudio.getState().setPythonCode(e.target.value)}
        onKeyDown={(e) => {
          if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
            e.preventDefault();
            run();
          }
        }}
      />
      <div className="dcc-scroll h-28 overflow-auto border-t border-border bg-bg px-3 py-2 font-mono text-2xs leading-5">
        {lines.map((ln, i) => (
          <div
            key={i}
            className={cn(
              ln.kind === "err" && "text-danger",
              ln.kind === "in" && "text-subtle",
              ln.kind === "info" && "text-muted",
              ln.kind === "out" && "text-fg",
            )}
          >
            {ln.text}
          </div>
        ))}
      </div>
    </div>
  );
}
