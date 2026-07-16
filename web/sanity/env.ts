/**
 * Sanity-Konfiguration aus Umgebungsvariablen. Solange kein Projekt
 * angelegt ist (sanityConfigured === false), laufen alle Inhalte über die
 * statischen Fallbacks in lib/ — die Seiten funktionieren ohne CMS.
 */

// Die Projekt-ID ist öffentlich (landet ohnehin im Client-Bundle) und darf
// daher als Standardwert im Code stehen. Projekt: pixel56 / atillac-design.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "an8mgmdx";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2026-07-01";

export const sanityConfigured = projectId.length > 0;
