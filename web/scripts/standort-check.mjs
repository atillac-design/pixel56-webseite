// Prüft die individuellen Standorttexte (lib/standort-texte/*.ts):
// Titel höchstens 50 Zeichen, Meta höchstens 155, Pflichtfelder vorhanden,
// und wie viele Sätze zwei Seiten gemeinsam haben (Dubletten). Liest die
// TypeScript-Dateien als Text, braucht keinen Build.
// Aufruf: node scripts/standort-check.mjs [stadt-datei ...]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(root, "lib", "standort-texte");
const nur = process.argv.slice(2);
const dateien = fs.readdirSync(dir).filter((f) => f.endsWith(".ts") && !["index.ts", "typen.ts"].includes(f)).filter((f) => !nur.length || nur.includes(f.replace(/\.ts$/, "")));

const seiten = [];
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".ts") && !["index.ts", "typen.ts"].includes(f))) {
  const src = fs.readFileSync(path.join(dir, f), "utf8");
  // Seiten-Blöcke: beginnen mit `  slug: {` oder `  "slug": {` auf Einrückung 2
  const re = /^  "?([a-z0-9-]+)"?: \{\n([\s\S]*?)\n  \},?\n/gm;
  let m;
  while ((m = re.exec(src))) {
    const slug = m[1];
    const body = m[2];
    const title = (body.match(/^\s*title:\s*"([^"]*)"/m) ?? [])[1] ?? "";
    const meta = (body.match(/^\s*meta:\s*"([^"]*)"/m) ?? [])[1] ?? "";
    const texte = [...body.matchAll(/"([^"\n]{40,})"/g)].map((x) => x[1]);
    const saetze = new Set();
    for (const t of texte) for (const s of t.split(/(?<=[.!?])\s+/)) if (s.trim().length > 40) saetze.add(s.trim());
    seiten.push({ datei: f, slug, title, meta, saetze });
  }
}

let fehler = 0;
for (const s of seiten.filter((s) => dateien.includes(s.datei))) {
  const probleme = [];
  if (!s.title) probleme.push("kein Titel");
  else if (s.title.length > 50) probleme.push(`Titel ${s.title.length} Zeichen`);
  if (!s.meta) probleme.push("keine Meta");
  else if (s.meta.length > 155) probleme.push(`Meta ${s.meta.length} Zeichen`);
  if (/\.\./.test(s.meta)) probleme.push("Meta endet mit „..“");
  // Dubletten gegen alle anderen Seiten
  let max = 0, maxSlug = "";
  for (const o of seiten) {
    if (o.slug === s.slug) continue;
    let gleich = 0;
    for (const satz of s.saetze) if (o.saetze.has(satz)) gleich++;
    const anteil = gleich / Math.max(s.saetze.size, 1);
    if (anteil > max) { max = anteil; maxSlug = o.slug; }
  }
  if (max > 0.1) probleme.push(`${Math.round(max * 100)} % Sätze identisch mit ${maxSlug}`);
  const ok = probleme.length === 0;
  if (!ok) fehler++;
  console.log(`${ok ? "✓" : "✗"} ${s.slug.padEnd(26)} Titel ${String(s.title.length).padStart(2)}  Meta ${String(s.meta.length).padStart(3)}  Dubletten max ${Math.round(max * 100)} % (${maxSlug})${probleme.length ? "  ← " + probleme.join(", ") : ""}`);
}
console.log(`\n${seiten.filter((s) => dateien.includes(s.datei)).length} Seiten geprüft, ${fehler} mit Befund`);
process.exit(fehler ? 2 : 0);
