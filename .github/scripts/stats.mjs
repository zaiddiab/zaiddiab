// Generates assets/stats-{dark,light}.svg from the GitHub GraphQL API.
// Counts private work when STATS_TOKEN can read private repositories.
// Never renders repository names. Node 22+, no dependencies.
import { readFileSync, writeFileSync } from "node:fs";

const token = process.env.STATS_TOKEN;
if (!token) {
  console.error("STATS_TOKEN is not set. Add a read-only fine-grained token as a repo secret.");
  process.exit(1);
}

const query = `query {
  viewer {
    login
    contributionsCollection {
      contributionCalendar { totalContributions weeks { contributionDays { contributionCount date } } }
    }
    repositories(ownerAffiliations: OWNER, isFork: false, first: 100) {
      totalCount
      nodes { languages(first: 10, orderBy: {field: SIZE, direction: DESC}) { edges { size node { name } } } }
    }
  }
}`;

const res = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json", "User-Agent": "profile-stats" },
  body: JSON.stringify({ query }),
});
const json = await res.json();
if (!res.ok || json.errors) {
  console.error("GraphQL error:", JSON.stringify(json.errors ?? json).slice(0, 500));
  process.exit(1);
}
const v = json.data.viewer;
const c = v.contributionsCollection;
// The calendar total already includes private work when "Private contributions"
// is enabled on the profile, so it is used as-is (no double counting).
const contributions = c.contributionCalendar.totalContributions;
const days = c.contributionCalendar.weeks.flatMap((w) => w.contributionDays);
const activeDays = days.filter((d) => d.contributionCount > 0).length;
let longest = 0, run = 0;
for (const d of days) { run = d.contributionCount > 0 ? run + 1 : 0; longest = Math.max(longest, run); }

const IGNORE = new Set(["HTML", "CSS", "SCSS", "Jupyter Notebook", "Dockerfile", "Makefile", "Batchfile", "Shell", "PowerShell", "Procfile", "Mako", "Jinja"]);
const langs = new Map();
for (const repo of v.repositories.nodes) {
  for (const e of repo.languages.edges) {
    if (IGNORE.has(e.node.name)) continue;
    langs.set(e.node.name, (langs.get(e.node.name) ?? 0) + e.size);
  }
}
const total = [...langs.values()].reduce((a, b) => a + b, 0) || 1;
const top = [...langs.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5)
  .map(([name, size]) => ({ name, pct: (size / total) * 100 }));

const stats = [
  [contributions, "CONTRIBUTIONS"],
  [activeDays, "ACTIVE DAYS"],
  [longest, "LONGEST STREAK"],
  [v.repositories.totalCount, "REPOSITORIES"],
];

// Reuse the subset fonts already embedded in the banner (no font files in the repo).
const banner = readFileSync(new URL("../../assets/banner-dark.svg", import.meta.url), "utf8");
const faces = banner.match(/@font-face\{[^}]+\}/g)?.join("") ?? "";

const THEMES = {
  dark: { bg: "#000000", border: "#1C1C1C", head: "#FFFFFF", muted: "#6E6E6E", tones: ["#F5F5F5", "#BDBDBD", "#8A8A8A", "#5E5E5E", "#3A3A3A"], track: "#151515" },
  light: { bg: "#F9F9F7", border: "#E4E4DF", head: "#0A0A0A", muted: "#7A7A76", tones: ["#0A0A0A", "#3D3D3D", "#6B6B6B", "#9A9A9A", "#C8C8C4"], track: "#ECECE8" },
};
const W = 1200, H = 236;
const fmt = (n) => n.toLocaleString("en-US");
const date = new Date().toISOString().slice(0, 10);

for (const [name, t] of Object.entries(THEMES)) {
  const cells = stats.map(([n, label], i) => {
    const x = 72 + i * 158;
    return `<g class="in" style="animation-delay:${(0.1 + i * 0.12).toFixed(2)}s"><text x="${x}" y="128" class="num">${fmt(n)}</text><text x="${x}" y="156" class="cap">${label}</text></g>`;
  }).join("");
  const bx = 720, bw = 408;
  let acc = 0;
  const bars = top.map((l, i) => {
    const w = Math.max(2, (bw * l.pct) / 100);
    const seg = `<rect x="${(bx + acc).toFixed(1)}" y="98" width="${w.toFixed(1)}" height="8" fill="${t.tones[i]}"/>`;
    acc += w;
    return seg;
  }).join("");
  const legend = top.map((l, i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const x = bx + col * 140, y = 140 + row * 24;
    return `<rect x="${x}" y="${y - 8}" width="8" height="8" rx="2" fill="${t.tones[i]}"/><text x="${x + 16}" y="${y}" class="cap">${l.name.toUpperCase()} ${l.pct.toFixed(0)}%</text>`;
  }).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="GitHub activity for ${v.login}: ${fmt(contributions)} contributions in the last 12 months including private work">
<defs><style>${faces}
.num{font-family:"IS","Instrument Serif",Georgia,serif;font-size:52px;fill:${t.head}}
.cap{font-family:"JBM","JetBrains Mono",ui-monospace,Menlo,Consolas,monospace;font-size:10.5px;letter-spacing:2px;fill:${t.muted}}
.in{opacity:0;animation:in .9s cubic-bezier(.2,.7,.2,1) forwards}
@keyframes in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.bar{transform-origin:${bx}px 0;transform:scaleX(0);animation:grow 1.4s .4s cubic-bezier(.2,.7,.2,1) forwards}
@keyframes grow{to{transform:scaleX(1)}}
@media (prefers-reduced-motion: reduce){.in{animation:none;opacity:1}.bar{animation:none;transform:none}}
</style><clipPath id="bc"><rect x="${bx}" y="98" width="${bw}" height="8" rx="4"/></clipPath></defs>
<rect x=".5" y=".5" width="${W - 1}" height="${H - 1}" rx="17.5" fill="${t.bg}" stroke="${t.border}"/>
<text x="72" y="58" class="cap">// ACTIVITY · LAST 12 MONTHS · INCLUDES PRIVATE WORK</text>
<text x="${W - 72}" y="58" class="cap" text-anchor="end">UPDATED ${date}</text>
${cells}
<text x="${bx}" y="80" class="cap">LANGUAGES · BY CODE SIZE</text>
<rect x="${bx}" y="98" width="${bw}" height="8" rx="4" fill="${t.track}"/>
<g clip-path="url(#bc)"><g class="bar">${bars}</g></g>
<g class="in" style="animation-delay:.9s">${legend}</g>
<line x1="72" y1="196" x2="${W - 72}" y2="196" stroke="${t.border}"/>
<text x="72" y="216" class="cap">MOST OF MY WORK LIVES IN PRIVATE REPOSITORIES · CASE STUDIES AT ZAIDDIAB.COM</text>
</svg>`;
  writeFileSync(new URL(`../../assets/stats-${name}.svg`, import.meta.url), svg);
}
console.log(`ok: ${contributions} contributions, ${v.repositories.totalCount} repos, top langs ${top.map((l) => l.name).join(", ")}`);
