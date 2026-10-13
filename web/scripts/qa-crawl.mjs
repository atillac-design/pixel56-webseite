/**
 * Qualitätsprüfung ohne Abhängigkeiten: crawlt alle intern verlinkten Seiten
 * eines laufenden Builds (`npm run build && npm run start`) und meldet
 * defekte Links, zu lange Titel/Beschreibungen, fehlende H1, Bilder ohne
 * Alt-Text und fehlende Canonicals.
 *
 *   npm run qa:crawl                      → gegen http://127.0.0.1:3000
 *   node scripts/qa-crawl.mjs https://…   → gegen eine andere Adresse
 *   zweites Argument: Pfad für einen JSON-Bericht (optional)
 */
const base = (process.argv[2] && process.argv[2].startsWith("http") ? process.argv[2] : "http://127.0.0.1:3000").replace(/\/$/, "");
const reportPath = process.argv[2] && process.argv[2].startsWith("http") ? process.argv[3] : process.argv[2];
const seen = new Map(); const queue = ["/"];
const broken = []; const report = [];
const skip = /^(mailto:|tel:|https?:|#|javascript:)/;
function norm(href) { let h = href.split("#")[0].split("?")[0]; if (!h) return null; if (skip.test(href)) return null; if (!h.startsWith("/")) return null; if (h.length > 1 && h.endsWith("/")) h = h.slice(0, -1); return h; }
while (queue.length) {
  const path = queue.shift(); if (seen.has(path)) continue;
  let res; try { res = await fetch(base + path, { redirect: "manual" }); } catch (e) { seen.set(path, "ERR"); broken.push([path, "ERR"]); continue; }
  seen.set(path, res.status);
  if (res.status >= 300 && res.status < 400) { const loc = res.headers.get("location") || ""; const n = norm(loc.replace(base, "")); report.push({ path, status: res.status, redirect: loc }); if (n && !seen.has(n)) queue.push(n); continue; }
  if (res.status !== 200) { broken.push([path, res.status]); continue; }
  const ct = res.headers.get("content-type") || ""; if (!ct.includes("text/html")) continue;
  const html = await res.text();
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || "";
  const robots = (html.match(/<meta name="robots" content="([^"]*)"/) || [])[1] || "";
  const imgsNoAlt = (html.match(/<img(?![^>]*\balt=)[^>]*>/g) || []).length;
  report.push({ path, status: 200, title, titleLen: title.length, descLen: desc.length, h1s, canonical, robots, imgsNoAlt });
  for (const m of html.matchAll(/href="([^"]+)"/g)) { const n = norm(m[1]); if (n && !seen.has(n) && !queue.includes(n)) { if (n.startsWith("/_next") || n.startsWith("/bilder") || n.startsWith("/api")) continue; queue.push(n); } }
}
if (reportPath) { const fs = await import("node:fs"); fs.writeFileSync(reportPath, JSON.stringify({ broken, report }, null, 1)); }
console.log("pages:", report.length, "broken:", broken.length);
for (const b of broken) console.log("BROKEN", b.join(" "));
const long = report.filter(r => r.status === 200 && r.titleLen > 60); console.log("titles > 60 chars:", long.length);
const longD = report.filter(r => r.status === 200 && r.descLen > 160); console.log("descriptions > 160 chars:", longD.length);
const noH1 = report.filter(r => r.status === 200 && r.h1s !== 1); console.log("pages with h1 count != 1:", noH1.length, noH1.slice(0, 15).map(r => r.path + ":" + r.h1s).join(", "));
const noAlt = report.filter(r => r.status === 200 && r.imgsNoAlt > 0); console.log("pages with img without alt:", noAlt.length, noAlt.slice(0, 10).map(r => r.path + ":" + r.imgsNoAlt).join(", "));
const noCanon = report.filter(r => r.status === 200 && !r.canonical); console.log("pages without canonical:", noCanon.length, noCanon.slice(0, 10).map(r => r.path).join(", "));
const redirects = report.filter(r => r.status !== 200); console.log("redirects followed:", redirects.length);

if (broken.length) process.exit(1);
