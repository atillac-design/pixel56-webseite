import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, sanityConfigured } from "@/sanity/env";

export const sanityClient = sanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

export type BlogBeitrag = {
  titel: string;
  slug: string;
  teaser: string;
  kategorie: string;
  coverFarbe: string;
  lesezeit: number;
};

export type Stelle = {
  titel: string;
  pensum: string;
};

/**
 * Führt eine GROQ-Abfrage aus; null bei fehlender Konfiguration ODER wenn
 * die Sanity-API nicht erreichbar ist — die Seiten fallen dann auf ihre
 * statischen Inhalte zurück, statt Build oder Seite zu brechen.
 */
async function safeFetch<T>(query: string): Promise<T | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<T>(query);
  } catch (err) {
    console.warn("Sanity nicht erreichbar, nutze statische Inhalte:", (err as Error).message);
    return null;
  }
}

/** Blog-Beiträge aus Sanity; null, wenn kein CMS verfügbar ist. */
export function getBlogBeitraege(): Promise<BlogBeitrag[] | null> {
  return safeFetch<BlogBeitrag[]>(
    `*[_type == "beitrag"] | order(veroeffentlichtAm desc) {
      titel, "slug": slug.current, teaser, kategorie, coverFarbe, lesezeit
    }`
  );
}

/** Aktive Stellen aus Sanity; null, wenn kein CMS verfügbar ist. */
export function getStellen(): Promise<Stelle[] | null> {
  return safeFetch<Stelle[]>(
    `*[_type == "stelle" && aktiv == true] | order(reihenfolge asc) { titel, pensum }`
  );
}
