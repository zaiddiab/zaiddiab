// Builds assets/stack-{dark,light}.svg from Simple Icons (CC0).
// Usage: node scripts/build-stack.mjs <simple-icons package dir> [mono.woff2]
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [siDir, fontPath] = process.argv.slice(2);
if (!siDir) throw new Error("usage: build-stack.mjs <simple-icons dir> [mono.woff2]");

const STACK = [
  ["python", "Python"], ["rust", "Rust"], ["typescript", "TypeScript"], ["cplusplus", "C++"],
  ["fastapi", "FastAPI"], ["langgraph", "LangGraph"], ["ollama", "Ollama"], ["nextdotjs", "Next.js"],
  ["docker", "Docker"], ["linux", "Linux"], ["githubactions", "Actions"], ["cloudflare", "Cloudflare"],
  ["sqlite", "SQLite"], ["postgresql", "Postgres"],
];

const THEMES = {
  dark: { bg: "#000000", border: "#1C1C1C", icon: "#EDEDED", label: "#7A7A7A" },
  light: { bg: "#F9F9F7", border: "#E4E4DF", icon: "#111111", label: "#7A7A76" },
};

const W = 1200, H = 132, CELL = 80, ICON = 30;
const x0 = (W - CELL * STACK.length) / 2;
const font = fontPath
  ? `@font-face{font-family:"JBM";src:url(data:font/woff2;base64,${readFileSync(fontPath).toString("base64")}) format("woff2");}`
  : "";

const path = (slug) => {
  const svg = readFileSync(join(siDir, "icons", `${slug}.svg`), "utf8");
  const d = svg.match(/<path d="([^"]+)"/);
  if (!d) throw new Error(`no path for ${slug}`);
  return d[1];
};

for (const [name, t] of Object.entries(THEMES)) {
  const cells = STACK.map(([slug, label], i) => {
    const cx = x0 + CELL * i + CELL / 2;
    const s = ICON / 24;
    return `<g class="c" style="animation-delay:${(i * 0.06).toFixed(2)}s">
<title>${label}</title>
<path transform="translate(${(cx - ICON / 2).toFixed(1)} 34) scale(${s})" d="${path(slug)}" fill="${t.icon}"/>
<text x="${cx.toFixed(1)}" y="96" text-anchor="middle" class="l">${label.toUpperCase()}</text></g>`;
  }).join("\n");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Stack: ${STACK.map((s) => s[1]).join(", ")}">
<defs><style>${font}
.l{font-family:"JBM","JetBrains Mono",ui-monospace,Menlo,Consolas,monospace;font-size:10px;letter-spacing:1.6px;fill:${t.label}}
.c{opacity:0;animation:in .8s cubic-bezier(.2,.7,.2,1) forwards}
@keyframes in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion: reduce){.c{animation:none;opacity:1}}
</style></defs>
<rect x=".5" y=".5" width="${W - 1}" height="${H - 1}" rx="17.5" fill="${t.bg}" stroke="${t.border}"/>
${cells}
</svg>`;
  writeFileSync(new URL(`../assets/stack-${name}.svg`, import.meta.url), svg);
}
console.log("ok");
