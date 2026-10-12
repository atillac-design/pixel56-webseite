import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const inputPath = resolve(process.argv[2] ?? "/tmp/pixel56-current-sitemap.xml");
const outputPath = resolve(
  process.argv[3] ?? new URL("../data/legacy-urls.json", import.meta.url).pathname,
);

const xml = readFileSync(inputPath, "utf8");
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

if (urls.length === 0) {
  throw new Error(`Keine URLs in ${inputPath} gefunden.`);
}

const preservedCorePaths = new Set([
  "/",
  "/blog",
  "/category/digitale-produkte",
  "/datenschutz",
  "/dienstleistung",
  "/impressum",
  "/karriere",
  "/kontakt",
  "/kundenprojekte",
  "/standorte",
  "/uber-uns",
  "/webdesign",
  "/suchmaschinenoptimierung",
  "/facebook-meta-ads",
  "/social-media-content",
  "/checkliste-seo",
  "/checkliste-ki-agenten",
  "/kostenloser-tagesplaner-to-do-liste-als-pdf-vorlage",
  "/product/tagesplaner-to-do-liste-set",
]);

const approvedRedirects = new Map([
  ["/dein-kostenloses-beratungsgesprach", "/kontakt"],
]);

const excludedSystemPaths = new Set([
  "/checkout",
  "/order-confirmation",
  "/paypal-checkout",
]);

function classify(pathname) {
  if (preservedCorePaths.has(pathname)) {
    return {
      type: "core",
      action: "preserve",
      targetPath: pathname,
      note: "URL und Inhalt beim Relaunch unter demselben Pfad ausliefern.",
    };
  }

  if (approvedRedirects.has(pathname)) {
    return {
      type: "core",
      action: "redirect",
      targetPath: approvedRedirects.get(pathname),
      note: "Semantisch passendes, vorab geprüftes Weiterleitungsziel.",
    };
  }

  if (excludedSystemPaths.has(pathname)) {
    return {
      type: "system",
      action: "exclude",
      targetPath: null,
      note: "Nicht in die neue Sitemap aufnehmen; nicht indexierbar ausliefern oder entfernen.",
    };
  }

  if (pathname.startsWith("/blog/")) {
    return {
      type: "blog",
      action: "preserve",
      targetPath: pathname,
      note: "Bestehenden Artikel und Slug migrieren; erst nach GSC-Prüfung zusammenführen.",
    };
  }

  if (pathname.startsWith("/portfolio/")) {
    return {
      type: "portfolio",
      action: "preserve",
      targetPath: pathname,
      note: "Bestehende Projekt-URL erhalten und auf die neue Fallstudien-Komponente abbilden.",
    };
  }

  if (pathname.startsWith("/locations/")) {
    return {
      type: "location",
      action: "review",
      targetPath: pathname,
      note: "Vor Livegang GSC, Backlinks und lokale Einzigartigkeit prüfen; nicht pauschal umleiten.",
    };
  }

  if (pathname.startsWith("/blog-kategorien/")) {
    return {
      type: "blog-category",
      action: "preserve",
      targetPath: pathname,
      note: "Bestehende Kategorie-URL als echte Themenübersicht erhalten.",
    };
  }

  if (pathname.startsWith("/team/")) {
    return {
      type: "team",
      action: "preserve",
      targetPath: pathname,
      note: "E-E-A-T-Profil unter dem bestehenden Pfad erhalten.",
    };
  }

  if (pathname.startsWith("/stellenangebote/")) {
    return {
      type: "job",
      action: "preserve",
      targetPath: pathname,
      note: "Aktive Stellenanzeige unter dem bestehenden Pfad erhalten.",
    };
  }

  return {
    type: "other",
    action: "review",
    targetPath: pathname,
    note: "Vor Livegang anhand Search Console und Inhalt einzeln entscheiden.",
  };
}

const routes = urls.map((url) => {
  const pathname = new URL(url).pathname || "/";
  return {
    sourceUrl: url,
    sourcePath: pathname,
    ...classify(pathname),
  };
});

const counts = routes.reduce(
  (summary, route) => {
    summary.byType[route.type] = (summary.byType[route.type] ?? 0) + 1;
    summary.byAction[route.action] = (summary.byAction[route.action] ?? 0) + 1;
    return summary;
  },
  { byType: {}, byAction: {} },
);

const manifest = {
  source: "https://www.pixel56.de/sitemap.xml",
  generatedAt: new Date().toISOString(),
  total: routes.length,
  counts,
  routes,
};

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Legacy-Manifest geschrieben: ${outputPath} (${routes.length} URLs)`);
