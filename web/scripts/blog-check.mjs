// Qualitätsprüfung für Blogartikel auf dem gebauten Stand (.next/server/app/blog/*.html).
// Aufruf: node scripts/blog-check.mjs [slug ...]   (ohne Slug: alle Artikel)
// Vorher: npm run build. Jede Prüfung gibt einen Punkt, 10 Punkte = veröffentlichungsreif.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(root, ".next", "server", "app", "blog");
if (!fs.existsSync(dir)) { console.error("Kein Build gefunden. Erst `npm run build`."); process.exit(1); }

const leistungen = ["/webdesign", "/ki-automatisierung", "/suchmaschinenoptimierung", "/google-ads", "/facebook-meta-ads", "/landingpages-funnels", "/social-media-content", "/mitarbeitergewinnung", "/website-check", "/kontakt"];
const freebies = ["/checkliste-seo", "/checkliste-ki-agenten", "/ressourcen/ki-suche", "/kostenloser-tagesplaner-to-do-liste-als-pdf-vorlage"];

const gewuenscht = process.argv.slice(2);
const dateien = fs.readdirSync(dir).filter((f) => f.endsWith(".html")).map((f) => f.replace(/\.html$/, ""))
  .filter((slug) => !gewuenscht.length || gewuenscht.includes(slug));

const strip = (html) => html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/g, " ").replace(/\s+/g, " ").trim();
const zwischen = (html, start, ende) => { const i = html.indexOf(start); if (i < 0) return ""; const j = html.indexOf(ende, i); return j < 0 ? html.slice(i) : html.slice(i, j); };

let gesamt = 0;
const bericht = [];
for (const slug of dateien) {
  const html = fs.readFileSync(path.join(dir, `${slug}.html`), "utf8");
  const title = (html.match(/<title>([^<]*)<\/title>/) ?? [])[1] ?? "";
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) ?? [])[1] ?? "";
  const body = zwischen(html, 'class="article-body"', 'class="article-author"');
  const bodyText = strip(body);
  const woerter = bodyText.split(" ").filter(Boolean).length;
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  const h2 = (body.match(/<h2[\s>]/g) ?? []).length;
  const links = [...body.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  const leistungsLinks = links.filter((h) => leistungen.some((l) => h === l || h.startsWith(l + "#") || h.startsWith(l + "?")));
  const freebieLinks = links.filter((h) => freebies.some((l) => h === l || h.startsWith(l + "#")));
  const bilder = [...body.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  const grafiken = (body.match(/class="article-figure article-grafik"/g) ?? []).length;
  const ohneAlt = bilder.filter((b) => !/alt="[^"]+"/.test(b)).length;
  const sieForm = (bodyText.match(/\b(Sie|Ihre|Ihren|Ihrer|Ihrem|Ihnen)\b/g) ?? []).length;
  const zahlen = (bodyText.match(/\d+\s?%|\d{3,}/g) ?? []).length;

  const pruefungen = [
    ["Titel 20–60 Zeichen", title.length >= 20 && title.length <= 60, `${title.length}`],
    ["Beschreibung 70–160 Zeichen", desc.length >= 70 && desc.length <= 160, `${desc.length}`],
    ["Genau eine H1, mindestens drei H2", h1 === 1 && h2 >= 3, `h1 ${h1}, h2 ${h2}`],
    ["Mindestens 900 Wörter im Text", woerter >= 900, `${woerter}`],
    ["Häufige Fragen mit FAQ-Schema", html.includes('"@type":"FAQPage"') && body.includes("article-faq"), ""],
    ["Mindestens ein Bild oder eine Grafik", bilder.length + grafiken >= 1, `${bilder.length} Bilder, ${grafiken} Grafiken`],
    ["Alle Bilder mit Alt-Text", ohneAlt === 0, `${ohneAlt} ohne`],
    ["Links: 2× Leistung, 1× Freebie", leistungsLinks.length >= 2 && freebieLinks.length >= 1, `${leistungsLinks.length} Leistung, ${freebieLinks.length} Freebie`],
    ["Zwischen-CTA im Text", body.includes("article-inline-cta"), ""],
    ["Du-Form, Quellen bei Zahlen", sieForm <= 2 && (zahlen === 0 || html.includes("article-quellen")), `Sie-Treffer ${sieForm}, Zahlen ${zahlen}`],
  ];
  const punkte = pruefungen.filter((p) => p[1]).length;
  gesamt += punkte;
  bericht.push({ slug, punkte, pruefungen });
}

bericht.sort((a, b) => b.punkte - a.punkte);
for (const b of bericht) {
  console.log(`\n${b.punkte}/10  ${b.slug}`);
  for (const [name, ok, info] of b.pruefungen) if (!ok || gewuenscht.length) console.log(`   ${ok ? "✓" : "✗"} ${name}${info ? ` (${info})` : ""}`);
}
console.log(`\n${bericht.length} Artikel, Durchschnitt ${(gesamt / Math.max(bericht.length, 1)).toFixed(1)}/10`);
const schwach = bericht.filter((b) => gewuenscht.includes(b.slug) && b.punkte < 10);
if (schwach.length) { console.error(`\nNicht veröffentlichungsreif: ${schwach.map((b) => b.slug).join(", ")}`); process.exit(2); }
