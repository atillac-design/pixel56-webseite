import { createClient } from "@sanity/client";
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
  veroeffentlichtAm?: string;
};

type SanityTextBlock = {
  _type: "block";
  style?: string;
  listItem?: string;
  children?: { text?: string }[];
};

export type BlogBeitragDetail = BlogBeitrag & {
  veroeffentlichtAm?: string;
  inhalt?: SanityTextBlock[];
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
async function safeFetch<T>(query: string, params: Record<string, string> = {}): Promise<T | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<T>(query, params, { signal: AbortSignal.timeout(2500) });
  } catch (err) {
    console.warn("Sanity nicht erreichbar, nutze statische Inhalte:", (err as Error).message);
    return null;
  }
}

/** Blog-Beiträge aus Sanity; null, wenn kein CMS verfügbar ist. */
export function getBlogBeitraege(): Promise<BlogBeitrag[] | null> {
  return safeFetch<BlogBeitrag[]>(
    `*[_type == "beitrag" && defined(slug.current) && count(inhalt) > 0] | order(veroeffentlichtAm desc) {
      titel, "slug": slug.current, teaser, kategorie, coverFarbe, lesezeit, veroeffentlichtAm
    }`
  );
}

export function getBlogBeitrag(slug: string): Promise<BlogBeitragDetail | null> {
  return safeFetch<BlogBeitragDetail>(
    `*[_type == "beitrag" && slug.current == $slug && count(inhalt) > 0][0] {
      titel, "slug": slug.current, teaser, kategorie, coverFarbe, lesezeit,
      veroeffentlichtAm, inhalt
    }`,
    { slug },
  );
}

/** Aktive Stellen aus Sanity; null, wenn kein CMS verfügbar ist. */
export function getStellen(): Promise<Stelle[] | null> {
  return safeFetch<Stelle[]>(
    `*[_type == "stelle" && aktiv == true] | order(reihenfolge asc) { titel, pensum }`
  );
}
