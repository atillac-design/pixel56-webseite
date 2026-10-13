/**
 * Ergänzt das Migrationsmanifest (data/legacy-urls.json) und die Standort-
 * Inhalte (data/legacy-locations.json) um Einträge aus einem Export der
 * Webflow-CMS-Collection „Locations“ (ID 681d2e9713ad40017667e637).
 *
 * Hintergrund: Webflow schreibt sitemap.xml nur beim Publish der gesamten
 * Site. Einzeln publizierte CMS-Einträge fehlen deshalb in der Sitemap, aus
 * der sync-legacy-urls.mjs das Manifest baut, sind aber live erreichbar.
 * Dieses Skript schließt die Lücke, ohne in Webflow etwas zu publizieren.
 *
 * Aufruf:  node scripts/merge-cms-locations.mjs <export.json>
 *
 * <export.json> ist ein JSON-Array der Collection-Items (Webflow Data API v2,
 * GET /v2/collections/681d2e9713ad40017667e637/items, alle Seiten zusammen-
 * geführt) oder eine rohe API-/MCP-Antwort, die irgendwo `items` enthält.
 * Der Export selbst wird nicht ins Repo übernommen (wie die Sitemap-Datei
 * für sync-legacy-urls.mjs).
 *
 * Es werden nur veröffentlichte Items (kein Entwurf, nicht archiviert,
 * lastPublished gesetzt) berücksichtigt. Neue Einträge erhalten im Manifest
 * action "review" wie alle anderen Standort-URLs. Die Inhalte entstehen aus
 * den CMS-Feldern plus der für alle Standorte identischen Seitenvorlage, die
 * aus einem vorhandenen Eintrag abgeleitet wird. Idempotent: bereits
 * bekannte Slugs werden nicht verändert, lediglich die Artefakt-Bereinigung
 * aus legacy-location-blocks.mjs wird auf alle Einträge angewendet.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { cleanLocation, normalizeText, sortLocations } from "./legacy-location-blocks.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const exportPath = process.argv[2];
if (!exportPath) {
  console.error("Aufruf: node scripts/merge-cms-locations.mjs <export.json>");
  process.exit(2);
}

const manifestPath = resolve(root, "data/legacy-urls.json");
const locationsPath = resolve(root, "data/legacy-locations.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const existing = JSON.parse(readFileSync(locationsPath, "utf8"));

function collectItems(node, out = []) {
  if (Array.isArray(node)) {
    if (node.length && node.every((x) => x && typeof x === "object" && x.fieldData)) out.push(...node);
    else for (const child of node) collectItems(child, out);
  } else if (node && typeof node === "object") {
    if (Array.isArray(node.items)) collectItems(node.items, out);
    for (const [key, value] of Object.entries(node)) if (key !== "items") collectItems(value, out);
  }
  return out;
}

const items = collectItems(JSON.parse(readFileSync(exportPath, "utf8")));
const published = items.filter((item) => !item.isDraft && !item.isArchived && item.lastPublished);
const bySlug = new Map(published.map((item) => [item.fieldData.slug, item]));
if (!bySlug.size) throw new Error("Export enthält keine veröffentlichten Items");
console.log(`Export: ${items.length} Items, davon veröffentlicht ${published.length}`);

const requiredFields = [
  "ort", "keyword", "seo-titel", "seo-beschreibung", "lokaler-content",
  "warum-titel-1", "warum-text-1", "warum-titel-2", "warum-text-2", "warum-titel-3", "warum-text-3",
];
for (const item of published) {
  if (!/^[a-z0-9-]+$/.test(item.fieldData.slug)) throw new Error(`Ungültiger Slug: ${item.fieldData.slug}`);
  for (const field of requiredFields) {
    if (!normalizeText(item.fieldData[field])) throw new Error(`${item.fieldData.slug}: Feld ${field} leer`);
  }
}

// 1) Manifest ergänzen
const locationRoutes = manifest.routes.filter((route) => route.type === "location");
const knownSlugs = new Set(locationRoutes.map((route) => route.sourcePath.replace("/locations/", "")));
const today = new Date().toISOString().slice(0, 10);
const newRoutes = sortLocations(
  published
    .filter((item) => !knownSlugs.has(item.fieldData.slug))
    .map((item) => ({ slug: item.fieldData.slug, lastPublished: item.lastPublished })),
).map(({ slug, lastPublished }) => ({
  sourceUrl: `https://www.pixel56.de/locations/${slug}`,
  sourcePath: `/locations/${slug}`,
  type: "location",
  action: "review",
  targetPath: `/locations/${slug}`,
  note:
    `Einzeln in Webflow publiziert (${lastPublished.slice(0, 10)}) und daher nicht in der Sitemap, ` +
    `aus der das Manifest stammt; am ${today} aus dem CMS-Export ergänzt. ` +
    "Vor Livegang GSC, Backlinks und lokale Einzigartigkeit prüfen; nicht pauschal umleiten.",
}));

if (newRoutes.length) {
  const lastLocationIndex = manifest.routes.map((route) => route.type).lastIndexOf("location");
  manifest.routes.splice(lastLocationIndex + 1, 0, ...newRoutes);
  manifest.total = manifest.routes.length;
  manifest.counts = manifest.routes.reduce(
    (summary, route) => {
      summary.byType[route.type] = (summary.byType[route.type] ?? 0) + 1;
      summary.byAction[route.action] = (summary.byAction[route.action] ?? 0) + 1;
      return summary;
    },
    { byType: {}, byAction: {} },
  );
  manifest.supplements = [
    ...(manifest.supplements ?? []),
    {
      source: "Webflow CMS, Collection „Locations“ (681d2e9713ad40017667e637)",
      mergedAt: new Date().toISOString(),
      addedRoutes: newRoutes.length,
      reason:
        "Einzeln publizierte CMS-Einträge fehlen in der Webflow-Sitemap, bis die gesamte Site erneut " +
        "publiziert wird. Ergänzt ohne Publish aus dem CMS-Export.",
    },
  ];
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
}
console.log(`Manifest: ${newRoutes.length} Standort-URLs ergänzt, jetzt ${manifest.routes.filter((r) => r.type === "location").length} Standorte / ${manifest.total} URLs`);

// 2) Inhalte aufbauen: Vorlage aus einem vorhandenen Eintrag ableiten
const referenceRaw = existing.find((location) => bySlug.has(location.slug));
if (!referenceRaw) throw new Error("Kein vorhandener Standort-Eintrag im Export gefunden; Vorlage nicht ableitbar");
const reference = cleanLocation(referenceRaw);
const referenceFields = bySlug.get(reference.slug).fieldData;
const ownBlock3Suffix = `${normalizeText(referenceFields["warum-titel-1"])} ${normalizeText(referenceFields["warum-text-1"])}`;
if (!reference.body[3]?.text.endsWith(ownBlock3Suffix)) {
  throw new Error(`Vorlage ${reference.slug}: Block 3 endet nicht mit „Warum Titel 1 + Text 1“`);
}
const block3Prefix = reference.body[3].text.slice(0, -ownBlock3Suffix.length);
const expected = {
  2: normalizeText(referenceFields["lokaler-content"]),
  4: normalizeText(referenceFields["warum-titel-2"]),
  5: normalizeText(referenceFields["warum-text-2"]),
  6: normalizeText(referenceFields["warum-titel-3"]),
  7: normalizeText(referenceFields["warum-text-3"]),
};
for (const [index, text] of Object.entries(expected)) {
  if (reference.body[index]?.text !== text) throw new Error(`Vorlage ${reference.slug}: Block ${index} passt nicht zum CMS-Feld`);
}

function buildLocation(item) {
  const fd = item.fieldData;
  const f = (key) => normalizeText(fd[key]);
  const body = reference.body.map((block) => ({ ...block }));
  body[2] = { typ: "p", text: f("lokaler-content") };
  body[3] = { typ: "p", text: `${block3Prefix}${f("warum-titel-1")} ${f("warum-text-1")}` };
  body[4] = { typ: "h2", text: f("warum-titel-2") };
  body[5] = { typ: "p", text: f("warum-text-2") };
  body[6] = { typ: "h2", text: f("warum-titel-3") };
  body[7] = { typ: "p", text: f("warum-text-3") };
  return {
    slug: fd.slug,
    stadt: f("ort"),
    leistung: f("keyword"),
    titel: f("seo-titel"),
    beschreibung: f("seo-beschreibung"),
    heroLead: reference.heroLead,
    body,
  };
}

const haveContent = new Set(existing.map((location) => location.slug));
const manifestLocationSlugs = manifest.routes
  .filter((route) => route.type === "location")
  .map((route) => route.sourcePath.replace("/locations/", ""));
const toBuild = manifestLocationSlugs.filter((slug) => !haveContent.has(slug));
const unbuildable = toBuild.filter((slug) => !bySlug.has(slug));
if (unbuildable.length) throw new Error(`Ohne CMS-Daten, Inhalte fehlen: ${unbuildable.join(", ")}`);

const built = toBuild.map((slug) => buildLocation(bySlug.get(slug)));
const merged = sortLocations([...existing.map(cleanLocation), ...built]);
writeFileSync(locationsPath, `${JSON.stringify(merged, null, 2)}\n`);
console.log(`Inhalte: ${built.length} Standorte aus CMS-Feldern aufgebaut, ${existing.length} vorhandene bereinigt, gesamt ${merged.length}`);
