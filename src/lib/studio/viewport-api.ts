type RenderFn = () => string | null;

let capture: RenderFn = () => null;

export function registerCapture(fn: RenderFn) {
  capture = fn;
}

export function captureStill() {
  return capture();
}
