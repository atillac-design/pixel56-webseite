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

/** Blog-Beiträge aus Sanity; null, wenn kein CMS konfiguriert ist. */
export async function getBlogBeitraege(): Promise<BlogBeitrag[] | null> {
  if (!sanityClient) return null;
  return sanityClient.fetch(
    `*[_type == "beitrag"] | order(veroeffentlichtAm desc) {
      titel, "slug": slug.current, teaser, kategorie, coverFarbe, lesezeit
    }`
  );
}

/** Aktive Stellen aus Sanity; null, wenn kein CMS konfiguriert ist. */
export async function getStellen(): Promise<Stelle[] | null> {
  if (!sanityClient) return null;
  return sanityClient.fetch(
    `*[_type == "stelle" && aktiv == true] | order(reihenfolge asc) { titel, pensum }`
  );
}
