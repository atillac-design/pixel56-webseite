import { readFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const strict = process.argv.includes("--strict");
const manifest = JSON.parse(readFileSync(resolve(root, "data/legacy-urls.json"), "utf8"));
const routesSource = readFileSync(resolve(root, "lib/routes.ts"), "utf8");
const configSource = readFileSync(resolve(root, "next.config.ts"), "utf8");
const blogSource = readFileSync(resolve(root, "lib/blog.ts"), "utf8");
const locationSource = readFileSync(resolve(root, "lib/standorte.ts"), "utf8");
const legacyBlogPath = resolve(root, "data/legacy-blog.json");
const legacyLocationsPath = resolve(root, "data/legacy-locations.json");

const errors = [];
const warnings = [];

const coreFiles = new Map([
  ["/", "app/page.tsx"],
  ["/blog", "app/blog/page.tsx"],
  ["/datenschutz", "app/datenschutz/page.tsx"],
  ["/dienstleistung", "app/dienstleistung/page.tsx"],
  ["/impressum", "app/impressum/page.tsx"],
  ["/karriere", "app/karriere/page.tsx"],
  ["/kontakt", "app/kontakt/page.tsx"],
  ["/standorte", "app/standorte/page.tsx"],
  ["/team/atilla-ciftcioglu", "app/team/atilla-ciftcioglu/page.tsx"],
  [
    "/stellenangebote/pixel56-marketing-agentur-in-koblenz-sucht-vertriebsprofi-in",
    "app/stellenangebote/pixel56-marketing-agentur-in-koblenz-sucht-vertriebsprofi-in/page.tsx",
  ],
  ["/category/digitale-produkte", "app/category/digitale-produkte/page.tsx"],
  ["/product/tagesplaner-to-do-liste-set", "app/product/tagesplaner-to-do-liste-set/page.tsx"],
]);

for (const [path, file] of coreFiles) {
  if (!existsSync(resolve(root, file))) errors.push(`${path}: ${file} fehlt`);
}

const canonicalCoreViaRewrite = [
  "/uber-uns",
  "/webdesign",
  "/suchmaschinenoptimierung",
  "/facebook-meta-ads",
  "/social-media-content",
  "/kundenprojekte",
  "/checkliste-seo",
  "/checkliste-ki-agenten",
  "/kostenloser-tagesplaner-to-do-liste-als-pdf-vorlage",
];

for (const path of canonicalCoreViaRewrite) {
  if (!configSource.includes(`source: "${path}"`)) errors.push(`${path}: Rewrite fehlt`);
}

const gscDiscoveredRedirects = new Map([
  ["/stellenangebote/remote-freelancer-videograph-reels-experte-fur-pixel56", "/karriere"],
  [
    "/stellenangebote/ixel56-marketing-agentur-in-koblenz-sucht-vertriebsprofi-in",
    "/stellenangebote/pixel56-marketing-agentur-in-koblenz-sucht-vertriebsprofi-in",
  ],
]);

for (const [source, destination] of gscDiscoveredRedirects) {
  if (!configSource.includes(`source: "${source}"`) || !configSource.includes(`destination: "${destination}"`)) {
    errors.push(`${source}: GSC-Redirect auf ${destination} fehlt`);
  }
}

const portfolio = manifest.routes.filter((route) => route.type === "portfolio");
for (const route of portfolio) {
  const slug = route.sourcePath.replace("/portfolio/", "");
  if (!routesSource.includes(`"${slug}"`)) errors.push(`${route.sourcePath}: Einzelmapping fehlt`);
}

const categorySource = readFileSync(resolve(root, "app/blog-kategorien/[slug]/page.tsx"), "utf8");
for (const route of manifest.routes.filter((route) => route.type === "blog-category")) {
  const slug = route.sourcePath.replace("/blog-kategorien/", "");
  if (!categorySource.includes(`"${slug}"`) && !categorySource.includes(`${slug}:`)) {
    errors.push(`${route.sourcePath}: Kategorie fehlt`);
  }
}

if (/source:\s*["']\/portfolio\/:slug\*["'][\s\S]{0,160}destination:\s*["']\/projekte["']/.test(configSource)) {
  errors.push("Verbotener Portfolio-Sammelredirect auf /projekte gefunden");
}
if (/source:\s*["']\/locations\/:slug\*["'][\s\S]{0,160}destination:\s*["']\/standorte["']/.test(configSource)) {
  errors.push("Verbotener Standort-Sammelredirect auf /standorte gefunden");
}

const sourceSlugs = (source) => new Set([...source.matchAll(/\bslug:\s*"([^"]+)"/g)].map((match) => match[1]));
const staticBlogSlugs = sourceSlugs(blogSource);
if (existsSync(legacyBlogPath)) {
  for (const article of JSON.parse(readFileSync(legacyBlogPath, "utf8"))) {
    staticBlogSlugs.add(article.slug);
  }
}
const legacyBlogSlugs = manifest.routes
  .filter((route) => route.type === "blog")
  .map((route) => route.sourcePath.replace("/blog/", ""));
const missingBlogs = legacyBlogSlugs.filter((slug) => !staticBlogSlugs.has(slug));
if (missingBlogs.length) warnings.push(`${missingBlogs.length} Bestands-Blogartikel müssen noch aus Webflow/Sanity migriert werden`);

// Standortseiten: alle alten URLs bleiben 1:1 erreichbar (data/legacy-locations.json),
// indexierbar sind nur die Städte aus lib/standorte.ts (regionStaedte).
const legacyLocationItems = existsSync(legacyLocationsPath) ? JSON.parse(readFileSync(legacyLocationsPath, "utf8")) : [];
const staticLocationSlugs = new Set(legacyLocationItems.map((location) => location.slug));
const legacyLocationSlugs = manifest.routes
  .filter((route) => route.type === "location")
  .map((route) => route.sourcePath.replace("/locations/", ""));
const unresolvedLocations = legacyLocationSlugs.filter((slug) => !staticLocationSlugs.has(slug));
if (unresolvedLocations.length) errors.push(`${unresolvedLocations.length} Standort-URLs aus dem Manifest fehlen in data/legacy-locations.json`);
const regionCities = new Set([...locationSource.matchAll(/stadt:\s*"([^"]+)"/g)].map((match) => match[1]));
if (!regionCities.size) errors.push("lib/standorte.ts enthält keine Region-Städte (regionStaedte)");
const indexableLocationCount = legacyLocationItems.filter((location) => regionCities.has(location.stadt)).length;
const noindexLocationCount = legacyLocationItems.length - indexableLocationCount;

const unresolved = manifest.routes.filter((route) => route.action === "review" && route.type !== "location");
if (unresolved.length) warnings.push(`${unresolved.length} URLs stehen im Manifest auf review`);
const legacyLocationPageSource = readFileSync(resolve(root, "app/standorte/[slug]/page.tsx"), "utf8");
const sitemapSource = readFileSync(resolve(root, "app/sitemap.ts"), "utf8");
if (!legacyLocationPageSource.includes("legacyLocations.map((location) => ({ slug: location.slug }))")) {
  errors.push("Nicht alle alten Standortseiten werden als Routen erzeugt");
}
if (!legacyLocationPageSource.includes("robots: { index: false, follow: true }")) {
  errors.push("Standortseiten außerhalb des Einzugsgebiets müssen noindex,follow ausliefern");
}
if (!sitemapSource.includes("indexableLocations.map(")) {
  errors.push("Sitemap muss genau die indexierbaren Standortseiten enthalten");
}
if (sitemapSource.includes("legacyLocations")) {
  errors.push("Sitemap darf keine noindex-Standortseiten enthalten");
}
if (configSource.includes("locationConsolidationRedirects")) {
  errors.push("Standort-Sammelredirects gefährden die zugesagte 1:1-URL-Übernahme");
}

console.log(`SEO-Migration: ${manifest.total} Bestands-URLs inventarisiert`);
console.log(`Kernseiten geprüft: ${coreFiles.size + canonicalCoreViaRewrite.length}`);
console.log(`Portfolio-Einzelmappings geprüft: ${portfolio.length}`);
console.log(`Zusätzliche GSC-Redirects geprüft: ${gscDiscoveredRedirects.size}`);
console.log(`Standortseiten geprüft: ${legacyLocationSlugs.length} alte URLs bleiben direkt erreichbar, ${indexableLocationCount} indexierbar (${regionCities.size} Städte im Einzugsgebiet), ${noindexLocationCount} noindex,follow`);
for (const warning of warnings) console.warn(`WARN: ${warning}`);
for (const error of errors) console.error(`FEHLER: ${error}`);

if (errors.length || (strict && warnings.length)) process.exit(1);
