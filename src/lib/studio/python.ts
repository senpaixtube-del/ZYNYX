/* Lumina Python — indent-based subset for bpy-style DCC scripts */

export type PyVal = unknown;

type Tok =
  | { t: "num"; v: number }
  | { t: "str"; v: string }
  | { t: "name"; v: string }
  | { t: "op"; v: string }
  | { t: "nl" }
  | { t: "indent" }
  | { t: "dedent" }
  | { t: "eof" };

const KW = new Set([
  "if",
  "elif",
  "else",
  "for",
  "while",
  "def",
  "class",
  "return",
  "pass",
  "in",
  "not",
  "and",
  "or",
  "True",
  "False",
  "None",
  "import",
  "from",
  "as",
  "break",
  "continue",
  "lambda",
  "try",
  "except",
  "finally",
  "raise",
  "is",
  "with",
  "yield",
  "global",
  "nonlocal",
]);

function tokenize(src: string): Tok[] {
  const tokens: Tok[] = [];
  const lines = src.replace(/\t/g, "    ").replace(/\r/g, "").split("\n");
  const stack = [0];
  for (let li = 0; li < lines.length; li++) {
    let line = lines[li] ?? "";
    const hash = line.indexOf("#");
    if (hash >= 0) {
      const before = line.slice(0, hash);
      const quotes = (before.match(/["']/g) ?? []).length;
      if (quotes % 2 === 0) line = before;
    }
    if (line.trim() === "") continue;
    const indent = line.match(/^ */)?.[0].length ?? 0;
    if (indent > stack[stack.length - 1]!) {
      stack.push(indent);
      tokens.push({ t: "indent" });
    } else {
      while (indent < stack[stack.length - 1]!) {
        stack.pop();
        tokens.push({ t: "dedent" });
      }
    }
    let i = indent;
    const s = line;
    while (i < s.length) {
      const c = s[i]!;
      if (c === " ") {
        i++;
        continue;
      }
      if (c === '"' || c === "'") {
        const q = c;
        i++;
        let out = "";
        while (i < s.length && s[i] !== q) {
          if (s[i] === "\\" && i + 1 < s.length) {
            const n = s[i + 1];
            out += n === "n" ? "\n" : n === "t" ? "\t" : n;
            i += 2;
          } else {
            out += s[i];
            i++;
          }
        }
        i++;
        tokens.push({ t: "str", v: out });
        continue;
      }
      if (/[0-9]/.test(c) || (c === "." && /[0-9]/.test(s[i + 1] ?? ""))) {
        const m = s.slice(i).match(/^[0-9]*\.?[0-9]+([eE][+-]?[0-9]+)?/);
        tokens.push({ t: "num", v: parseFloat(m![0]) });
        i += m![0].length;
        continue;
      }
      if (/[A-Za-z_\u00c0-\uffff]/.test(c)) {
        const m = s.slice(i).match(/^[A-Za-z_\u00c0-\uffff][A-Za-z0-9_]*/);
        tokens.push({ t: "name", v: m![0] });
        i += m![0].length;
        continue;
      }
      const two = s.slice(i, i + 2);
      if (["**", "//", "==", "!=", "<=", ">=", "+=", "-=", "*=", "/="].includes(two)) {
        tokens.push({ t: "op", v: two });
        i += 2;
        continue;
      }
      tokens.push({ t: "op", v: c });
      i++;
    }
    tokens.push({ t: "nl" });
  }
  while (stack.length > 1) {
    stack.pop();
    tokens.push({ t: "dedent" });
  }
  tokens.push({ t: "eof" });
  return tokens;
}

type Expr =
  | { k: "num"; v: number }
  | { k: "str"; v: string }
  | { k: "name"; v: string }
  | { k: "list"; xs: Expr[] }
  | { k: "tuple"; xs: Expr[] }
  | { k: "dict"; xs: [Expr, Expr][] }
  | { k: "listcomp"; elt: Expr; name: string; iter: Expr; cond?: Expr }
  | { k: "dictcomp"; key: Expr; val: Expr; name: string; iter: Expr; cond?: Expr }
  | { k: "unary"; op: string; x: Expr }
  | { k: "bin"; op: string; a: Expr; b: Expr }
  | { k: "attr"; x: Expr; name: string }
  | { k: "idx"; x: Expr; i: Expr }
  | { k: "slice"; x: Expr; a: Expr | null; b: Expr | null; c: Expr | null }
  | { k: "call"; x: Expr; args: Expr[]; kw: [string, Expr][] }
  | { k: "ifexp"; t: Expr; a: Expr; b: Expr }
  | { k: "lambda"; params: { name: string; def?: Expr }[]; body: Expr };

type Stmt =
  | { k: "assign"; target: Expr; value: Expr; op?: string }
  | { k: "expr"; x: Expr }
  | { k: "return"; x: Expr | null }
  | { k: "pass" }
  | { k: "break" }
  | { k: "continue" }
  | { k: "raise"; x: Expr | null }
  | { k: "if"; arms: { test: Expr; body: Stmt[] }[]; els: Stmt[] }
  | { k: "for"; name: string; iter: Expr; body: Stmt[] }
  | { k: "while"; test: Expr; body: Stmt[] }
  | { k: "def"; name: string; params: { name: string; def?: Expr }[]; body: Stmt[] }
  | { k: "class"; name: string; bases: Expr[]; body: Stmt[] }
  | { k: "try"; body: Stmt[]; handlers: { type: Expr | null; name?: string; body: Stmt[] }[]; fin: Stmt[] }
  | { k: "import"; name: string; as?: string }
  | { k: "from"; mod: string; names: string[] | "*" };

class Parser {
  i = 0;
  toks: Tok[];
  constructor(toks: Tok[]) {
    this.toks = toks;
  }
  cur(): Tok {
    return this.toks[this.i] ?? { t: "eof" };
  }
  eat(t?: Tok["t"], v?: string): Tok {
    const c = this.cur();
    if (t && c.t !== t) throw new SyntaxError(`expected ${t}, got ${c.t}`);
    if (v && (c.t === "op" || c.t === "name") && (c as { v: string }).v !== v) {
      throw new SyntaxError(`expected ${v}`);
    }
    this.i++;
    return c;
  }
  skipNl() {
    while (this.cur().t === "nl") this.i++;
  }
  isOp(v: string) {
    const c = this.cur();
    return c.t === "op" && c.v === v;
  }
  isName(v: string) {
    const c = this.cur();
    return c.t === "name" && c.v === v;
  }
  file(): Stmt[] {
    const body: Stmt[] = [];
    this.skipNl();
    while (this.cur().t !== "eof") {
      body.push(this.stmt());
      this.skipNl();
    }
    return body;
  }
  stmt(): Stmt {
    if (this.isName("if")) return this.ifStmt();
    if (this.isName("for")) return this.forStmt();
    if (this.isName("while")) return this.whileStmt();
    if (this.isName("def")) return this.defStmt();
    if (this.isName("class")) return this.classStmt();
    if (this.isName("try")) return this.tryStmt();
    if (this.isName("raise")) {
      this.eat("name");
      if (this.cur().t === "nl" || this.cur().t === "dedent" || this.isOp(";")) return { k: "raise", x: null };
      return { k: "raise", x: this.expr() };
    }
    if (this.isName("return")) {
      this.eat("name");
      if (this.cur().t === "nl" || this.cur().t === "dedent" || this.isOp(";")) return { k: "return", x: null };
      return { k: "return", x: this.expr() };
    }
    if (this.isName("pass")) {
      this.eat("name");
      return { k: "pass" };
    }
    if (this.isName("break")) {
      this.eat("name");
      return { k: "break" };
    }
    if (this.isName("continue")) {
      this.eat("name");
      return { k: "continue" };
    }
    if (this.isName("import")) {
      this.eat("name");
      const n = (this.eat("name") as { v: string }).v;
      let asName: string | undefined;
      if (this.isName("as")) {
        this.eat("name");
        asName = (this.eat("name") as { v: string }).v;
      }
      return { k: "import", name: n, as: asName };
    }
    if (this.isName("from")) {
      this.eat("name");
      const parts = [(this.eat("name") as { v: string }).v];
      while (this.isOp(".")) {
        this.eat("op");
        parts.push((this.eat("name") as { v: string }).v);
      }
      const mod = parts.join(".");
      if (!this.isName("import")) throw new SyntaxError("from ... import");
      this.eat("name");
      if (this.isOp("*")) {
        this.eat("op");
        return { k: "from", mod, names: "*" };
      }
      const names: string[] = [(this.eat("name") as { v: string }).v];
      while (this.isOp(",")) {
        this.eat("op");
        names.push((this.eat("name") as { v: string }).v);
      }
      return { k: "from", mod, names };
    }
    const x = this.expr();
    if (this.isOp(",")) {
      const xs = [x];
      while (this.isOp(",")) {
        this.eat("op");
        if (this.isOp("=") || this.cur().t === "nl" || this.cur().t === "dedent") break;
        xs.push(this.expr());
      }
      const target: Expr = { k: "tuple", xs };
      if (this.isOp("=") || this.isOp("+=") || this.isOp("-=") || this.isOp("*=") || this.isOp("/=")) {
        const op = (this.eat("op") as { v: string }).v;
        return { k: "assign", target, value: this.tupleOrExpr(), op: op === "=" ? undefined : op[0] };
      }
      return { k: "expr", x: target };
    }
    const c = this.cur();
    if (c.t === "op" && ["=", "+=", "-=", "*=", "/="].includes(c.v)) {
      const op = c.v;
      this.eat("op");
      const value = this.tupleOrExpr();
      return { k: "assign", target: x, value, op: op === "=" ? undefined : op[0] };
    }
    return { k: "expr", x };
  }
  tupleOrExpr(): Expr {
    const first = this.expr();
    if (!this.isOp(",")) return first;
    const xs = [first];
    while (this.isOp(",")) {
      this.eat("op");
      if (this.cur().t === "nl" || this.cur().t === "dedent" || this.cur().t === "eof") break;
      xs.push(this.expr());
    }
    return { k: "tuple", xs };
  }
  suite(): Stmt[] {
    if (this.isOp(":")) this.eat("op");
    this.skipNl();
    if (this.cur().t !== "indent") {
      return [this.stmt()];
    }
    this.eat("indent");
    const body: Stmt[] = [];
    while (this.cur().t !== "dedent" && this.cur().t !== "eof") {
      this.skipNl();
      if (this.cur().t === "dedent" || this.cur().t === "eof") break;
      body.push(this.stmt());
      this.skipNl();
    }
    if (this.cur().t === "dedent") this.eat("dedent");
    return body;
  }
  ifStmt(): Stmt {
    const arms: { test: Expr; body: Stmt[] }[] = [];
    this.eat("name");
    const test = this.expr();
    arms.push({ test, body: this.suite() });
    this.skipNl();
    while (this.isName("elif")) {
      this.eat("name");
      const t2 = this.expr();
      arms.push({ test: t2, body: this.suite() });
      this.skipNl();
    }
    let els: Stmt[] = [];
    if (this.isName("else")) {
      this.eat("name");
      els = this.suite();
    }
    return { k: "if", arms, els };
  }
  forStmt(): Stmt {
    this.eat("name");
    const name = (this.eat("name") as { v: string }).v;
    if (!this.isName("in")) throw new SyntaxError("for x in");
    this.eat("name");
    const iter = this.expr();
    return { k: "for", name, iter, body: this.suite() };
  }
  whileStmt(): Stmt {
    this.eat("name");
    const test = this.expr();
    return { k: "while", test, body: this.suite() };
  }
  defStmt(): Stmt {
    this.eat("name");
    const name = (this.eat("name") as { v: string }).v;
    this.eat("op", "(");
    const params = this.paramList();
    this.eat("op", ")");
    return { k: "def", name, params, body: this.suite() };
  }
  classStmt(): Stmt {
    this.eat("name");
    const name = (this.eat("name") as { v: string }).v;
    const bases: Expr[] = [];
    if (this.isOp("(")) {
      this.eat("op");
      while (!this.isOp(")")) {
        bases.push(this.expr());
        if (this.isOp(",")) this.eat("op");
        else break;
      }
      this.eat("op", ")");
    }
    return { k: "class", name, bases, body: this.suite() };
  }
  tryStmt(): Stmt {
    this.eat("name");
    const body = this.suite();
    this.skipNl();
    const handlers: { type: Expr | null; name?: string; body: Stmt[] }[] = [];
    while (this.isName("except")) {
      this.eat("name");
      let type: Expr | null = null;
      let name: string | undefined;
      if (!this.isOp(":")) {
        type = this.expr();
        if (this.isName("as")) {
          this.eat("name");
          name = (this.eat("name") as { v: string }).v;
        }
      }
      handlers.push({ type, name, body: this.suite() });
      this.skipNl();
    }
    let fin: Stmt[] = [];
    if (this.isName("finally")) {
      this.eat("name");
      fin = this.suite();
    }
    if (!handlers.length && !fin.length) throw new SyntaxError("try without except/finally");
    return { k: "try", body, handlers, fin };
  }
  paramList(): { name: string; def?: Expr }[] {
    const params: { name: string; def?: Expr }[] = [];
    while (!this.isOp(")")) {
      const n = (this.eat("name") as { v: string }).v;
      let d: Expr | undefined;
      if (this.isOp("=")) {
        this.eat("op");
        d = this.expr();
      }
      params.push({ name: n, def: d });
      if (this.isOp(",")) this.eat("op");
      else break;
    }
    return params;
  }
  expr(): Expr {
    if (this.isName("lambda")) return this.lambdaExpr();
    const a = this.orx();
    if (this.isName("if")) {
      this.eat("name");
      const t = this.orx();
      if (!this.isName("else")) throw new SyntaxError("expected else in ternary");
      this.eat("name");
      const b = this.expr();
      return { k: "ifexp", t, a, b };
    }
    return a;
  }
  lambdaExpr(): Expr {
    this.eat("name");
    const params: { name: string; def?: Expr }[] = [];
    while (!this.isOp(":")) {
      const n = (this.eat("name") as { v: string }).v;
      let d: Expr | undefined;
      if (this.isOp("=")) {
        this.eat("op");
        d = this.expr();
      }
      params.push({ name: n, def: d });
      if (this.isOp(",")) this.eat("op");
      else break;
    }
    this.eat("op", ":");
    return { k: "lambda", params, body: this.expr() };
  }
  orx(): Expr {
    let a = this.andx();
    while (this.isName("or")) {
      this.eat("name");
      a = { k: "bin", op: "or", a, b: this.andx() };
    }
    return a;
  }
  andx(): Expr {
    let a = this.notx();
    while (this.isName("and")) {
      this.eat("name");
      a = { k: "bin", op: "and", a, b: this.notx() };
    }
    return a;
  }
  notx(): Expr {
    if (this.isName("not")) {
      this.eat("name");
      return { k: "unary", op: "not", x: this.notx() };
    }
    return this.cmp();
  }
  cmp(): Expr {
    let a = this.arith();
    for (;;) {
      if (this.isName("in")) {
        this.eat("name");
        a = { k: "bin", op: "in", a, b: this.arith() };
        continue;
      }
      if (this.isName("is")) {
        this.eat("name");
        if (this.isName("not")) {
          this.eat("name");
          a = { k: "bin", op: "isnot", a, b: this.arith() };
        } else {
          a = { k: "bin", op: "is", a, b: this.arith() };
        }
        continue;
      }
      if (this.isName("not") && this.toks[this.i + 1]?.t === "name" && (this.toks[this.i + 1] as { v: string }).v === "in") {
        this.eat("name");
        this.eat("name");
        a = { k: "bin", op: "notin", a, b: this.arith() };
        continue;
      }
      const c = this.cur();
      if (c.t === "op" && ["==", "!=", "<", ">", "<=", ">="].includes(c.v)) {
        this.eat("op");
        a = { k: "bin", op: c.v, a, b: this.arith() };
        continue;
      }
      break;
    }
    return a;
  }
  arith(): Expr {
    let a = this.term();
    while (this.isOp("+") || this.isOp("-")) {
      const op = (this.eat("op") as { v: string }).v;
      a = { k: "bin", op, a, b: this.term() };
    }
    return a;
  }
  term(): Expr {
    let a = this.power();
    while (this.isOp("*") || this.isOp("/") || this.isOp("%") || this.isOp("//")) {
      const op = (this.eat("op") as { v: string }).v;
      a = { k: "bin", op, a, b: this.power() };
    }
    return a;
  }
  power(): Expr {
    const a = this.unary();
    if (this.isOp("**")) {
      this.eat("op");
      return { k: "bin", op: "**", a, b: this.power() };
    }
    return a;
  }
  unary(): Expr {
    if (this.isOp("+") || this.isOp("-")) {
      const op = (this.eat("op") as { v: string }).v;
      return { k: "unary", op, x: this.unary() };
    }
    return this.postfix();
  }
  postfix(): Expr {
    let x = this.atom();
    for (;;) {
      if (this.isOp(".")) {
        this.eat("op");
        const name = (this.eat("name") as { v: string }).v;
        x = { k: "attr", x, name };
        continue;
      }
      if (this.isOp("[")) {
        this.eat("op");
        let a: Expr | null = null;
        let b: Expr | null = null;
        let c: Expr | null = null;
        let isSlice = false;
        if (!this.isOp(":") && !this.isOp("]")) a = this.expr();
        if (this.isOp(":")) {
          isSlice = true;
          this.eat("op");
          if (!this.isOp(":") && !this.isOp("]")) b = this.expr();
          if (this.isOp(":")) {
            this.eat("op");
            if (!this.isOp("]")) c = this.expr();
          }
        }
        this.eat("op", "]");
        x = isSlice ? { k: "slice", x, a, b, c } : { k: "idx", x, i: a! };
        continue;
      }
      if (this.isOp("(")) {
        this.eat("op");
        const args: Expr[] = [];
        const kw: [string, Expr][] = [];
        while (!this.isOp(")")) {
          if (this.cur().t === "name" && this.toks[this.i + 1]?.t === "op" && (this.toks[this.i + 1] as { v: string }).v === "=") {
            const n = (this.eat("name") as { v: string }).v;
            this.eat("op");
            kw.push([n, this.expr()]);
          } else {
            args.push(this.expr());
          }
          if (this.isOp(",")) this.eat("op");
          else break;
        }
        this.eat("op", ")");
        x = { k: "call", x, args, kw };
        continue;
      }
      break;
    }
    return x;
  }
  compTail(): { name: string; iter: Expr; cond?: Expr } | null {
    if (!this.isName("for")) return null;
    this.eat("name");
    const name = (this.eat("name") as { v: string }).v;
    if (!this.isName("in")) throw new SyntaxError("comprehension for x in");
    this.eat("name");
    const iter = this.orx();
    let cond: Expr | undefined;
    if (this.isName("if")) {
      this.eat("name");
      cond = this.orx();
    }
    return { name, iter, cond };
  }
  atom(): Expr {
    const c = this.cur();
    if (c.t === "num") {
      this.eat("num");
      return { k: "num", v: c.v };
    }
    if (c.t === "str") {
      this.eat("str");
      let v = c.v;
      while (this.cur().t === "str") v += (this.eat("str") as { v: string }).v;
      return { k: "str", v };
    }
    if (c.t === "name") {
      this.eat("name");
      return { k: "name", v: c.v };
    }
    if (this.isOp("[")) {
      this.eat("op");
      if (this.isOp("]")) {
        this.eat("op");
        return { k: "list", xs: [] };
      }
      const first = this.expr();
      const tail = this.compTail();
      if (tail) {
        this.eat("op", "]");
        return { k: "listcomp", elt: first, ...tail };
      }
      const xs = [first];
      while (this.isOp(",")) {
        this.eat("op");
        if (this.isOp("]")) break;
        xs.push(this.expr());
      }
      this.eat("op", "]");
      return { k: "list", xs };
    }
    if (this.isOp("{")) {
      this.eat("op");
      if (this.isOp("}")) {
        this.eat("op");
        return { k: "dict", xs: [] };
      }
      const k = this.expr();
      this.eat("op", ":");
      const v = this.expr();
      const tail = this.compTail();
      if (tail) {
        this.eat("op", "}");
        return { k: "dictcomp", key: k, val: v, ...tail };
      }
      const xs: [Expr, Expr][] = [[k, v]];
      while (this.isOp(",")) {
        this.eat("op");
        if (this.isOp("}")) break;
        const kk = this.expr();
        this.eat("op", ":");
        const vv = this.expr();
        xs.push([kk, vv]);
      }
      this.eat("op", "}");
      return { k: "dict", xs };
    }
    if (this.isOp("(")) {
      this.eat("op");
      if (this.isOp(")")) {
        this.eat("op");
        return { k: "tuple", xs: [] };
      }
      const first = this.expr();
      if (this.isOp(",")) {
        const xs = [first];
        while (this.isOp(",")) {
          this.eat("op");
          if (this.isOp(")")) break;
          xs.push(this.expr());
        }
        this.eat("op", ")");
        return { k: "tuple", xs };
      }
      this.eat("op", ")");
      return first;
    }
    throw new SyntaxError(`unexpected token ${c.t}`);
  }
}

class ReturnSignal {
  value: PyVal;
  constructor(value: PyVal) {
    this.value = value;
  }
}
class BreakSignal {}
class ContinueSignal {}
class PyException {
  value: PyVal;
  constructor(value: PyVal) {
    this.value = value;
  }
}

function truthy(v: PyVal): boolean {
  if (v == null || v === false) return false;
  if (v === 0 || v === "") return false;
  if (Array.isArray(v) && v.length === 0) return false;
  if (v && typeof v === "object" && (v as { __len__?: () => number }).__len__) {
    return (v as { __len__: () => number }).__len__() !== 0;
  }
  return true;
}

function pyEq(a: PyVal, b: PyVal): boolean {
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((x, i) => pyEq(x, b[i]));
  }
  return a === b;
}

function markPyFn<T extends Function>(fn: T): T {
  (fn as { __pyfn?: boolean }).__pyfn = true;
  return fn;
}

function iterate(it: PyVal): PyVal[] {
  if (Array.isArray(it)) return it;
  if (typeof it === "string") return [...it];
  if (it && typeof it === "object" && typeof (it as { [Symbol.iterator]?: unknown })[Symbol.iterator] === "function") {
    return [...(it as Iterable<PyVal>)];
  }
  return [];
}

function pySlice(o: PyVal, start: PyVal, end: PyVal, step: PyVal): PyVal {
  const seq = typeof o === "string" ? [...o] : Array.isArray(o) ? o : null;
  if (!seq) return [];
  const n = seq.length;
  let st = start == null ? null : Number(start);
  let en = end == null ? null : Number(end);
  const sp = step == null ? 1 : Number(step) || 1;
  if (st == null) st = sp > 0 ? 0 : n - 1;
  if (en == null) en = sp > 0 ? n : -n - 1;
  if (st < 0) st += n;
  if (en < 0) en += n;
  const out: PyVal[] = [];
  if (sp > 0) {
    for (let i = st; i < en && i < n; i += sp) if (i >= 0) out.push(seq[i]);
  } else {
    for (let i = st; i > en && i >= 0; i += sp) if (i < n) out.push(seq[i]);
  }
  return typeof o === "string" ? out.join("") : out;
}

function pyGet(o: PyVal, name: string): PyVal {
  if (o == null) throw new Error(`AttributeError: None has no attribute ${name}`);
  if (Array.isArray(o)) {
    if (name === "append") return (x: PyVal) => {
      o.push(x);
      return null;
    };
    if (name === "pop") return (i?: number) => (i == null ? o.pop() : o.splice(Number(i), 1)[0]);
    if (name === "extend") return (xs: PyVal) => {
      o.push(...iterate(xs));
      return null;
    };
    if (name === "insert")
      return (i: number, x: PyVal) => {
        o.splice(Number(i), 0, x);
        return null;
      };
    if (name === "index") return (x: PyVal) => o.findIndex((v) => pyEq(v, x));
    if (name === "count") return (x: PyVal) => o.filter((v) => pyEq(v, x)).length;
    if (name === "reverse")
      return () => {
        o.reverse();
        return null;
      };
    if (name === "sort")
      return () => {
        o.sort((a, b) => (a as number) - (b as number));
        return null;
      };
    if (name === "copy") return () => [...o];
  }
  if (typeof o === "string") {
    if (name === "upper") return () => o.toUpperCase();
    if (name === "lower") return () => o.toLowerCase();
    if (name === "split") return (sep?: string) => o.split(sep ?? " ");
    if (name === "join") return (xs: PyVal) => iterate(xs).map(String).join(o);
    if (name === "strip") return () => o.trim();
    if (name === "replace") return (a: string, b: string) => o.split(String(a)).join(String(b));
    if (name === "startswith") return (s: string) => o.startsWith(String(s));
    if (name === "endswith") return (s: string) => o.endsWith(String(s));
    if (name === "find") return (s: string) => o.indexOf(String(s));
    if (name === "format")
      return (...args: PyVal[]) => {
        let i = 0;
        return o.replace(/\{(\d*)\}/g, (_, n) => String(n === "" ? args[i++] : args[Number(n)]));
      };
  }
  if (o && typeof o === "object") {
    const rec = o as Record<string, PyVal>;
    if (name in rec || Object.prototype.hasOwnProperty.call(rec, name)) {
      const v = rec[name];
      if (typeof v === "function") {
        if ((v as { __pyfn?: boolean }).__pyfn) {
          return (...args: PyVal[]) => (v as Function)(o, ...args);
        }
        return (v as Function).bind(o);
      }
      return v;
    }
  }
  throw new Error(`AttributeError: object has no attribute '${name}'`);
}

export interface PyModules {
  [name: string]: Record<string, PyVal>;
}

export function runPython(
  source: string,
  globals: Record<string, PyVal>,
  modules: PyModules,
  print: (s: string) => void,
): PyVal {
  const toks = tokenize(source);
  const ast = new Parser(toks).file();
  let steps = 0;
  const MAX = 250000;

  const evalExpr = (x: Expr, scope: Record<string, PyVal>): PyVal => {
    switch (x.k) {
      case "num":
        return x.v;
      case "str":
        return x.v;
      case "name":
        if (x.v === "True") return true;
        if (x.v === "False") return false;
        if (x.v === "None") return null;
        if (Object.prototype.hasOwnProperty.call(scope, x.v)) return scope[x.v];
        if (x.v in scope) return scope[x.v];
        if (Object.prototype.hasOwnProperty.call(globals, x.v)) return globals[x.v];
        throw new Error(`NameError: name '${x.v}' is not defined`);
      case "list":
        return x.xs.map((e) => evalExpr(e, scope));
      case "tuple":
        return x.xs.map((e) => evalExpr(e, scope));
      case "dict": {
        const d: Record<string, PyVal> = {};
        for (const [k, v] of x.xs) d[String(evalExpr(k, scope))] = evalExpr(v, scope);
        return d;
      }
      case "listcomp": {
        const out: PyVal[] = [];
        const local = Object.create(scope) as Record<string, PyVal>;
        for (const item of iterate(evalExpr(x.iter, scope))) {
          local[x.name] = item;
          if (x.cond && !truthy(evalExpr(x.cond, local))) continue;
          out.push(evalExpr(x.elt, local));
        }
        return out;
      }
      case "dictcomp": {
        const d: Record<string, PyVal> = {};
        const local = Object.create(scope) as Record<string, PyVal>;
        for (const item of iterate(evalExpr(x.iter, scope))) {
          local[x.name] = item;
          if (x.cond && !truthy(evalExpr(x.cond, local))) continue;
          d[String(evalExpr(x.key, local))] = evalExpr(x.val, local);
        }
        return d;
      }
      case "lambda": {
        const capturing = scope;
        return markPyFn((...args: PyVal[]) => {
          const local: Record<string, PyVal> = Object.create(capturing);
          const kw =
            args.length && args[args.length - 1] && typeof args[args.length - 1] === "object" && (args[args.length - 1] as { __kw?: unknown }).__kw
              ? (args.pop() as { __kw: Record<string, PyVal> }).__kw
              : {};
          x.params.forEach((p, i) => {
            if (i < args.length) local[p.name] = args[i];
            else if (p.name in kw) local[p.name] = kw[p.name];
            else if (p.def) local[p.name] = evalExpr(p.def, capturing);
            else local[p.name] = null;
          });
          return evalExpr(x.body, local);
        });
      }
      case "unary": {
        const v = evalExpr(x.x, scope);
        if (x.op === "not") return !truthy(v);
        if (x.op === "-") return -(v as number);
        return v;
      }
      case "bin": {
        if (x.op === "or") {
          const a = evalExpr(x.a, scope);
          return truthy(a) ? a : evalExpr(x.b, scope);
        }
        if (x.op === "and") {
          const a = evalExpr(x.a, scope);
          return truthy(a) ? evalExpr(x.b, scope) : a;
        }
        const a = evalExpr(x.a, scope);
        const b = evalExpr(x.b, scope);
        switch (x.op) {
          case "+":
            if (Array.isArray(a) && Array.isArray(b)) return [...a, ...b];
            if (typeof a === "string" || typeof b === "string") return String(a) + String(b);
            return (a as number) + (b as number);
          case "-":
            return (a as number) - (b as number);
          case "*":
            if (typeof a === "string") return a.repeat(Number(b));
            if (typeof b === "string") return b.repeat(Number(a));
            if (Array.isArray(a)) return Array.from({ length: Number(b) }, () => a).flat();
            return (a as number) * (b as number);
          case "/":
            return (a as number) / (b as number);
          case "//":
            return Math.floor((a as number) / (b as number));
          case "%":
            return (a as number) % (b as number);
          case "**":
            return (a as number) ** (b as number);
          case "==":
            return pyEq(a, b);
          case "!=":
            return !pyEq(a, b);
          case "<":
            return (a as number) < (b as number);
          case ">":
            return (a as number) > (b as number);
          case "<=":
            return (a as number) <= (b as number);
          case ">=":
            return (a as number) >= (b as number);
          case "is":
            return a === b;
          case "isnot":
            return a !== b;
          case "in":
            if (typeof b === "string") return b.includes(String(a));
            if (Array.isArray(b)) return b.some((x) => pyEq(x, a));
            if (b && typeof b === "object") return String(a) in (b as object);
            return false;
          case "notin":
            if (typeof b === "string") return !b.includes(String(a));
            if (Array.isArray(b)) return !b.some((x) => pyEq(x, a));
            return true;
        }
        return null;
      }
      case "attr":
        return pyGet(evalExpr(x.x, scope), x.name);
      case "idx": {
        const o = evalExpr(x.x, scope);
        const i = evalExpr(x.i, scope);
        if (o && typeof o === "object" && typeof (o as { __getitem__?: Function }).__getitem__ === "function") {
          return (o as { __getitem__: Function }).__getitem__(i);
        }
        if (Array.isArray(o)) {
          let n = Number(i);
          if (n < 0) n += o.length;
          return o[n];
        }
        if (typeof o === "string") {
          let n = Number(i);
          if (n < 0) n += o.length;
          return o[n];
        }
        return (o as Record<string, PyVal>)[String(i)];
      }
      case "slice":
        return pySlice(evalExpr(x.x, scope), x.a ? evalExpr(x.a, scope) : null, x.b ? evalExpr(x.b, scope) : null, x.c ? evalExpr(x.c, scope) : null);
      case "call": {
        const fn = evalExpr(x.x, scope);
        if (typeof fn !== "function") throw new Error(`TypeError: object is not callable`);
        const args = x.args.map((a) => evalExpr(a, scope));
        if (x.kw.length) {
          const kw: Record<string, PyVal> = {};
          for (const [n, e] of x.kw) kw[n] = evalExpr(e, scope);
          return (fn as Function)(...args, { __kw: kw });
        }
        return (fn as Function)(...args);
      }
      case "ifexp":
        return truthy(evalExpr(x.t, scope)) ? evalExpr(x.a, scope) : evalExpr(x.b, scope);
    }
  };

  const assignTarget = (target: Expr, value: PyVal, scope: Record<string, PyVal>, op?: string) => {
    const applyOp = (cur: PyVal) => {
      if (!op) return value;
      const n = Number(cur);
      const m = Number(value);
      if (op === "+") return n + m;
      if (op === "-") return n - m;
      if (op === "*") return n * m;
      if (op === "/") return n / m;
      return value;
    };
    if (target.k === "tuple" || target.k === "list") {
      const arr = iterate(value);
      target.xs.forEach((t, i) => assignTarget(t, arr[i], scope, op));
      return;
    }
    if (target.k === "name") {
      const cur = Object.prototype.hasOwnProperty.call(scope, target.v) ? scope[target.v] : globals[target.v];
      const next = applyOp(cur);
      if (Object.prototype.hasOwnProperty.call(scope, target.v) || !(target.v in globals) || scope === globals) {
        scope[target.v] = next;
      } else globals[target.v] = next;
      return;
    }
    if (target.k === "attr") {
      const o = evalExpr(target.x, scope) as Record<string, PyVal>;
      o[target.name] = applyOp(o[target.name]);
      return;
    }
    if (target.k === "idx") {
      const o = evalExpr(target.x, scope);
      const i = evalExpr(target.i, scope);
      if (o && typeof o === "object" && typeof (o as { __setitem__?: Function }).__setitem__ === "function") {
        (o as { __setitem__: Function }).__setitem__(i, applyOp(undefined));
        return;
      }
      if (Array.isArray(o)) o[Number(i)] = applyOp(o[Number(i)]);
      else (o as Record<string, PyVal>)[String(i)] = applyOp((o as Record<string, PyVal>)[String(i)]);
    }
  };

  const makeFn = (
    params: { name: string; def?: Expr }[],
    body: Stmt[],
    defining: Record<string, PyVal>,
  ) =>
    markPyFn((...args: PyVal[]) => {
      const local: Record<string, PyVal> = Object.create(defining);
      const kw =
        args.length && args[args.length - 1] && typeof args[args.length - 1] === "object" && (args[args.length - 1] as { __kw?: unknown }).__kw
          ? (args.pop() as { __kw: Record<string, PyVal> }).__kw
          : {};
      params.forEach((p, i) => {
        if (i < args.length) local[p.name] = args[i];
        else if (p.name in kw) local[p.name] = kw[p.name];
        else if (p.def) local[p.name] = evalExpr(p.def, defining);
        else local[p.name] = null;
      });
      try {
        return runBlock(body, local);
      } catch (e) {
        if (e instanceof ReturnSignal) return e.value;
        throw e;
      }
    });

  const runBlock = (body: Stmt[], scope: Record<string, PyVal>): PyVal => {
    let last: PyVal = null;
    for (const st of body) {
      if (++steps > MAX) throw new Error("RuntimeError: script exceeded step limit");
      last = runStmt(st, scope);
    }
    return last;
  };

  const runStmt = (st: Stmt, scope: Record<string, PyVal>): PyVal => {
    switch (st.k) {
      case "pass":
        return null;
      case "break":
        throw new BreakSignal();
      case "continue":
        throw new ContinueSignal();
      case "return":
        throw new ReturnSignal(st.x ? evalExpr(st.x, scope) : null);
      case "raise":
        throw new PyException(st.x ? evalExpr(st.x, scope) : "Exception");
      case "expr":
        return evalExpr(st.x, scope);
      case "assign":
        assignTarget(st.target, evalExpr(st.value, scope), scope, st.op);
        return null;
      case "if": {
        for (const arm of st.arms) {
          if (truthy(evalExpr(arm.test, scope))) return runBlock(arm.body, scope);
        }
        return runBlock(st.els, scope);
      }
      case "for": {
        const arr = iterate(evalExpr(st.iter, scope));
        for (const item of arr) {
          scope[st.name] = item;
          try {
            runBlock(st.body, scope);
          } catch (e) {
            if (e instanceof BreakSignal) break;
            if (e instanceof ContinueSignal) continue;
            throw e;
          }
        }
        return null;
      }
      case "while": {
        let n = 0;
        while (truthy(evalExpr(st.test, scope))) {
          if (++n > 20000) throw new Error("RuntimeError: while loop too long");
          try {
            runBlock(st.body, scope);
          } catch (e) {
            if (e instanceof BreakSignal) break;
            if (e instanceof ContinueSignal) continue;
            throw e;
          }
        }
        return null;
      }
      case "def": {
        const fn = makeFn(st.params, st.body, scope);
        scope[st.name] = fn;
        if (scope === globals) globals[st.name] = fn;
        return fn;
      }
      case "class": {
        const proto: Record<string, PyVal> = Object.create(null);
        const ns: Record<string, PyVal> = Object.create(scope);
        runBlock(st.body, ns);
        for (const k of Object.keys(ns)) proto[k] = ns[k];
        const cls = markPyFn((...args: PyVal[]) => {
          const inst = Object.create(proto) as Record<string, PyVal>;
          inst.__class__ = cls;
          const init = proto.__init__;
          if (typeof init === "function") {
            const kw =
              args.length && args[args.length - 1] && typeof args[args.length - 1] === "object" && (args[args.length - 1] as { __kw?: unknown }).__kw
                ? (args.pop() as { __kw: Record<string, PyVal> }).__kw
                : {};
            if ((init as { __pyfn?: boolean }).__pyfn) {
              (init as Function)(inst, ...args, Object.keys(kw).length ? { __kw: kw } : undefined);
            } else (init as Function)(...args);
          }
          return inst;
        });
        (cls as { __name__?: string }).__name__ = st.name;
        Object.assign(cls, proto);
        scope[st.name] = cls;
        if (scope === globals) globals[st.name] = cls;
        return cls;
      }
      case "try": {
        let result: PyVal = null;
        try {
          result = runBlock(st.body, scope);
        } catch (e) {
          if (e instanceof ReturnSignal || e instanceof BreakSignal || e instanceof ContinueSignal) {
            if (st.fin.length) runBlock(st.fin, scope);
            throw e;
          }
          const val = e instanceof PyException ? e.value : e instanceof Error ? e.message : e;
          const h = st.handlers[0];
          if (h?.name) scope[h.name] = val;
          try {
            result = h ? runBlock(h.body, scope) : null;
          } catch (e2) {
            if (st.fin.length) runBlock(st.fin, scope);
            throw e2;
          }
        }
        if (st.fin.length) runBlock(st.fin, scope);
        return result;
      }
      case "import": {
        const mod = modules[st.name];
        if (!mod) throw new Error(`ImportError: no module named '${st.name}'`);
        const bind = st.as ?? st.name;
        scope[bind] = mod;
        if (scope === globals) globals[bind] = mod;
        return mod;
      }
      case "from": {
        const mod = modules[st.mod] ?? modules[st.mod.split(".")[0]!];
        if (!mod) throw new Error(`ImportError: no module named '${st.mod}'`);
        if (st.names === "*") {
          Object.assign(scope, mod);
          if (scope === globals) Object.assign(globals, mod);
        } else {
          for (const n of st.names) {
            scope[n] = (mod as Record<string, PyVal>)[n];
            if (scope === globals) globals[n] = (mod as Record<string, PyVal>)[n];
          }
        }
        return null;
      }
    }
  };

  void KW;
  void print;
  try {
    const result = runBlock(ast, globals);
    return result;
  } catch (e) {
    if (e instanceof ReturnSignal) return e.value;
    if (e instanceof PyException) throw new Error(String(e.value));
    throw e;
  }
}

export function pyKw(args: unknown[]): { pos: unknown[]; kw: Record<string, unknown> } {
  const pos: unknown[] = [];
  let kw: Record<string, unknown> = {};
  for (const a of args) {
    if (a && typeof a === "object" && (a as { __kw?: unknown }).__kw) {
      kw = { ...kw, ...(a as { __kw: Record<string, unknown> }).__kw };
    } else pos.push(a);
  }
  return { pos, kw };
}
