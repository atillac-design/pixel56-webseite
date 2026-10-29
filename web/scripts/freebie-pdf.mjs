// Baut aus web/freebies/<name>/index.html ein PDF (A4) und ein Vorschaubild
// der Titelseite. Aufruf: node scripts/freebie-pdf.mjs ki-agenten-checkliste
// Playwright wird global aus der Sandbox geladen (siehe CLAUDE.md); lokal
// reicht ein `npm i -D playwright` und das Entfernen des executablePath.
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

const require = createRequire(import.meta.url);
const playwright = (() => { try { return require("/opt/node22/lib/node_modules/playwright"); } catch { return require("playwright"); } })();
const chromePath = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";

const name = process.argv[2];
if (!name) { console.error("Name des Freebies angeben, z. B. ki-agenten-checkliste"); process.exit(1); }
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const html = path.join(root, "freebies", name, "index.html");
const pdf = path.join(root, "freebies", `${name}.pdf`);
const cover = path.join(root, "freebies", `${name}-titel.png`);

const browser = await playwright.chromium.launch(fs.existsSync(chromePath) ? { executablePath: chromePath } : {});
const page = await browser.newPage({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 2 });
await page.goto(`file://${html}`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);

// Überlauf-Prüfung: Jede Seite muss in 297 mm passen.
const ueberlauf = await page.evaluate(() => [...document.querySelectorAll(".page")].map((p, i) => ({ seite: i + 1, frei: Math.round(p.clientHeight - p.scrollHeight) })).filter((s) => s.frei < 0));
if (ueberlauf.length) { console.error("Überlauf:", ueberlauf); }

await page.pdf({ path: pdf, format: "A4", printBackground: true, preferCSSPageSize: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
const erste = await page.$(".page");
await erste.screenshot({ path: cover });
await browser.close();
console.log("PDF:", pdf, Math.round(fs.statSync(pdf).size / 1024), "KiB");
console.log("Titelbild:", cover);
