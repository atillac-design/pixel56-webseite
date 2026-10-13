/**
 * Gemeinsame Helfer für die Standort-Inhalte in data/legacy-locations.json.
 * Genutzt von sync-legacy-locations.mjs (Scrape der Live-Seiten) und
 * merge-cms-locations.mjs (Aufbau aus dem Webflow-CMS-Export).
 */

/** Whitespace wie beim Scrape normalisieren. */
export function normalizeText(value = "") {
  return String(value)
    .replace(/[​-‍﻿]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Entfernt zwei Artefakte der Webflow-Vorlage, die beim Scrape als Inhalt
 * mitgenommen wurden und auf der neuen Seite sichtbar wären:
 * - eine Überschrift, die nur den URL-Slug enthält (z. B. "aachen"),
 * - die Einstreuung "<slug> <leistung>" in einem Fließtext-Absatz
 *   (z. B. "… Beratungsgespräch aachen Webdesign Entdecke …").
 */
export function cleanLocationBlocks(blocks, slug, leistung) {
  const marker = ` ${slug} ${leistung} `;
  return blocks
    .filter((block) => !(block.typ === "h2" && block.text === slug))
    .map((block) =>
      block.typ === "p" && block.text.includes(marker)
        ? { ...block, text: block.text.split(marker).join(" ") }
        : block,
    );
}

export function cleanLocation(location) {
  return { ...location, body: cleanLocationBlocks(location.body, location.slug, location.leistung) };
}

export function sortLocations(locations) {
  return [...locations].sort((a, b) => a.slug.localeCompare(b.slug, "de"));
}
