/**
 * Sanity-Konfiguration aus Umgebungsvariablen. Solange kein Projekt
 * angelegt ist (sanityConfigured === false), laufen alle Inhalte über die
 * statischen Fallbacks in lib/ — die Seiten funktionieren ohne CMS.
 */

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2026-07-01";

export const sanityConfigured = projectId.length > 0;
