// CHANGE #21 (NEW FILE): `npm run check` - tells you if you meet the assignment
// requirements: 1000+ words, 400+ word Discovery write-up, 5+ images, resume
// file present, and lists any [placeholders] you haven't replaced yet.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const content = await import(pathToFileURL(path.join(root, "src/data/content.js")).href);

const SKIP_KEYS = new Set(["icon", "id", "alt", "imageAlt", "headshotAlt", "demoUrl", "githubUrl", "url", "linkedin", "github", "email", "video", "inProgress"]);
const FILE_KEYS = new Set(["src", "image", "headshot", "resumeFile"]);

const placeholders = [];
const files = new Set();

const strip = (s) => s.replace(/\[[^\]]*\]/g, " ");
const words = (s) => (strip(s).match(/[A-Za-z0-9][A-Za-z0-9'’.-]*/g) || []).length;

function walk(node, trail, acc) {
  if (typeof node === "string") {
    if (/\[[^\]]*\]/.test(node)) placeholders.push(trail);
    if (acc) acc.n += words(node);
    return;
  }
  if (Array.isArray(node)) return node.forEach((v, i) => walk(v, `${trail}[${i}]`, acc));
  if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) {
      if (FILE_KEYS.has(k) && typeof v === "string") { files.add(v); continue; }
      if (k === "tags") { walk(v, `${trail}.${k}`, null); continue; }
      if (SKIP_KEYS.has(k)) { if (typeof v === "string" && /\[[^\]]*\]/.test(v)) placeholders.push(`${trail}.${k}`); continue; }
      walk(v, `${trail}.${k}`, acc);
    }
  }
}

const total = { n: 0 };
for (const [name, value] of Object.entries(content)) walk(value, name, total);

const d = content.discovery;
const disc = { n: 0 };
for (const part of [d.subtitle, d.problem, d.process, d.outcome]) walk(part, "d", disc);

const exists = (f) => fs.existsSync(path.join(root, "public", f));
const imageFiles = [...files].filter((f) => /\.(png|jpe?g|webp|gif|svg)$/i.test(f));
const imgOk = imageFiles.filter(exists);
const resumeOk = exists(content.profile.resumeFile);

const mark = (ok) => (ok ? "PASS" : "TODO");
console.log("\nePortfolio requirement check\n----------------------------");
console.log(`${mark(total.n >= 1000)}  Total words (your own text, placeholders excluded): ${total.n} / 1000`);
console.log(`${mark(disc.n >= 400)}  Discovery Project write-up: ${disc.n} / 400 words`);
console.log(`${mark(imgOk.length >= 5)}  Images found in /public: ${imgOk.length} / 5`);
imageFiles.filter((f) => !exists(f)).forEach((f) => console.log(`        missing: public/${f}`));
console.log(`${mark(resumeOk)}  Resume file: public/${content.profile.resumeFile}`);
const uniq = [...new Set(placeholders)];
console.log(`${mark(uniq.length === 0)}  Placeholders left to replace: ${uniq.length}`);
uniq.slice(0, 40).forEach((p) => console.log(`        ${p}`));
if (uniq.length > 40) console.log(`        ...and ${uniq.length - 40} more`);
console.log("\nNote: counts only text in src/data/content.js. Menu labels and headings are not counted.");
console.log("Also edit the <title> and description in index.html.\n");
