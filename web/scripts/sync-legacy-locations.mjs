import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(resolve(root, "data/legacy-urls.json"), "utf8"));
const outputPath = resolve(root, "data/legacy-locations.json");

const entityMap = {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  nbsp: " ",
  quot: '"',
  ndash: "–",
  mdash: "—",
  hellip: "…",
};

function decodeEntities(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, number) => String.fromCodePoint(Number(number)))
    .replace(/&([a-z]+);/gi, (entity, name) => entityMap[name.toLowerCase()] ?? entity);
}

function text(value = "") {
  return decodeEntities(
    value
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/[\u200b-\u200d\ufeff]/g, "")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function capture(html, pattern, fallback = "") {
  return text(html.match(pattern)?.[1] ?? fallback);
}

function contentBlocks(html) {
  const start = html.indexOf('class="f-section-large-7"');
  const footer = html.indexOf("<footer", start);
  const content = html.slice(Math.max(0, start), footer > start ? footer : html.length);
  const blocks = [];
  const seen = new Set();

  for (const match of content.matchAll(/<(h2|h3|p)[^>]*>([\s\S]*?)<\/\1>/gi)) {
    const value = text(match[2]);
    if (!value || seen.has(value)) continue;
    const isHeading = match[1].toLowerCase() !== "p";
    if (!isHeading && value.length < 45) continue;
    if (isHeading && (value.length < 4 || value.length > 140)) continue;
    seen.add(value);
    blocks.push({ typ: isHeading ? "h2" : "p", text: value });
  }
  return blocks;
}

async function migrate(route) {
  const response = await fetch(route.sourceUrl, {
    headers: { "user-agent": "Pixel56 migration audit" },
  });
  if (!response.ok) throw new Error(`${route.sourcePath}: HTTP ${response.status}`);
  const html = await response.text();
  const service = capture(html, /<h1[^>]*class="heading-5"[^>]*>([\s\S]*?)<\/h1>/i, "Webdesign");
  const city = capture(html, /<h2[^>]*class="heading-4"[^>]*>([\s\S]*?)<\/h2>/i);
  const title = capture(html, /<title>([\s\S]*?)<\/title>/i, `${service} in ${city}`);
  const description = capture(html, /<meta content="([^"]*)" name="description"/i);
  const heroLead = capture(html, /<p[^>]*class="f-paragraph-large-7"[^>]*>([\s\S]*?)<\/p>/i, description);
  const body = contentBlocks(html).filter((block) => block.text !== city && block.text !== service);

  if (!city || !title || !description || body.length < 3) {
    throw new Error(`${route.sourcePath}: Standortstruktur unvollständig`);
  }

  return {
    slug: route.sourcePath.replace("/locations/", ""),
    stadt: city,
    leistung: service,
    titel: title,
    beschreibung: description,
    heroLead,
    body,
  };
}

async function migrateAll(routes, concurrency = 8) {
  const results = new Array(routes.length);
  let cursor = 0;

  async function worker() {
    while (cursor < routes.length) {
      const index = cursor++;
      results[index] = await migrate(routes[index]);
    }
  }

  await Promise.all(Array.from({ length: concurrency }, worker));
  return results;
}

const routes = manifest.routes.filter((route) => route.type === "location");
const locations = await migrateAll(routes);
locations.sort((a, b) => a.slug.localeCompare(b.slug, "de"));
writeFileSync(outputPath, `${JSON.stringify(locations, null, 2)}\n`);
console.log(`${locations.length} Standortseiten nach ${outputPath} migriert.`);
