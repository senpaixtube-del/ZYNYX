import assert from "node:assert/strict";
import { test } from "node:test";
import { runPython, type PyVal } from "./python.ts";

function run(src: string): PyVal {
  const out: string[] = [];
  const math = {
    pi: Math.PI,
    sin: Math.sin,
    cos: Math.cos,
    sqrt: Math.sqrt,
    floor: Math.floor,
  };
  const globals: Record<string, PyVal> = {
    print: (...a: unknown[]) => {
      out.push(a.map(String).join(" "));
      return null;
    },
    range: (n: number) => Array.from({ length: n }, (_, i) => i),
    len: (x: unknown) => (Array.isArray(x) || typeof x === "string" ? x.length : 0),
    abs: Math.abs,
    min: Math.min,
    max: Math.max,
    int: (x: unknown) => parseInt(String(x), 10) || 0,
    str: (x: unknown) => String(x),
    math,
    pi: Math.PI,
  };
  const result = runPython(src, globals, { math }, () => {});
  return result;
}

test("nested loops and list comprehension", () => {
  const r = run(`
xs = []
for i in range(3):
    for j in range(2):
        xs.append(i * 10 + j)
ys = [n * 2 for n in xs if n % 2 == 0]
ys
`);
  assert.deepEqual(r, [0, 20, 40]);
});

test("functions close over outer scope", () => {
  const r = run(`
def make(n):
    def add(x):
        return x + n
    return add
f = make(10)
f(3)
`);
  assert.equal(r, 13);
});

test("class with methods and init", () => {
  const r = run(`
class Vec:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def mag2(self):
        return self.x * self.x + self.y * self.y
v = Vec(3, 4)
v.mag2()
`);
  assert.equal(r, 25);
});

test("try/except/finally and raise", () => {
  const r = run(`
flag = 0
try:
    raise "boom"
except Exception as e:
    flag = 1
finally:
    flag = flag + 10
flag
`);
  assert.equal(r, 11);
});

test("dict comprehension and ternary", () => {
  const r = run(`
d = {i: i * i if i % 2 == 0 else -i for i in range(4)}
d["2"]
`);
  assert.equal(r, 4);
});

test("lambda and slice", () => {
  const r = run(`
xs = [1, 2, 3, 4, 5]
dbl = lambda n: n * 2
dbl(xs[1:4][0])
`);
  assert.equal(r, 4);
});

test("tuple unpack and import", () => {
  const r = run(`
from math import pi
a, b = 1, 2
a + b + int(pi)
`);
  assert.equal(r, 6);
});
