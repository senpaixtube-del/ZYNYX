import { useStudio } from "./store";
import type { StudioObject } from "./types";

const KEY = "lumina.project.v1";

export interface Persisted {
  objects: StudioObject[];
  lang: "fa" | "en";
  envPreset: string;
  pythonCode: string;
  shading: string;
}

export function loadProject(): Persisted | null {
  if (typeof localStorage === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Persisted;
  } catch {
    return null;
  }
}

export function saveProject() {
  if (typeof localStorage === "undefined") return;
  const s = useStudio.getState();
  const data: Persisted = {
    objects: s.objects,
    lang: s.lang,
    envPreset: s.envPreset,
    pythonCode: s.pythonCode,
    shading: s.shading,
  };
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    /* quota */
  }
}

export function subscribePersist() {
  let t: ReturnType<typeof setTimeout> | undefined;
  return useStudio.subscribe(() => {
    if (t) clearTimeout(t);
    t = setTimeout(saveProject, 450);
  });
}
