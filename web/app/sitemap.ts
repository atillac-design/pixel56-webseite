import type { MetadataRoute } from "next";
import { site, services } from "@/lib/site";
import { indexableLocations } from "@/lib/standorte";
import { ressourcen } from "@/lib/ressourcen";
import { fallstudien } from "@/lib/projekte";
import { artikel } from "@/lib/blog";
import { locationPath, projectPath, resourcePath, routes } from "@/lib/routes";
import { getBlogBeitraege } from "@/lib/sanity";

export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const statisch = [
    routes.home,
    routes.about,
    routes.projects,
    routes.blog,
    routes.careers,
    routes.contact,
    routes.locations,
    "/dienstleistung",
    "/team/atilla-ciftcioglu",
    "/stellenangebote/pixel56-marketing-agentur-in-koblenz-sucht-vertriebsprofi-in",
    "/category/digitale-produkte",
    "/product/tagesplaner-to-do-liste-set",
    ...[
      "kunstliche-intelligenz",
      "marketing-tools",
      "meta-ads",
      "seo",
      "soziale-medien",
      "wachstum",
      "webdesign",
      "webseite",
    ].map((slug) => `/blog-kategorien/${slug}`),
  ].map(
    (path) => ({
      url: path === routes.home ? site.url : `${site.url}${path}`,
      priority: path === routes.home ? 1 : 0.7,
    })
  );

  const leistungen = services.map((s) => ({
    url: `${site.url}${s.href}`,
    priority: 0.9,
  }));

  // Nur Standortseiten aus dem Einzugsgebiet; alle anderen sind noindex
  // und gehören deshalb nicht in die Sitemap (siehe lib/standorte.ts).
  const orte = indexableLocations.map((location) => ({
    url: `${site.url}${locationPath(location.slug)}`,
    priority: 0.6,
  }));

  const freebies = ressourcen.map((r) => ({
    url: `${site.url}${resourcePath(r.slug)}`,
    priority: 0.5,
  }));

  const projekte = fallstudien.map((f) => ({
    url: `${site.url}${projectPath(f.slug)}`,
    priority: 0.6,
  }));

  const beitraege = artikel.map((a) => ({
    url: `${site.url}/blog/${a.slug}`,
    lastModified: new Date(a.datum),
    priority: 0.5,
  }));

  const cmsBeitraege = await getBlogBeitraege();
  const lokaleBlogSlugs = new Set(artikel.map((a) => a.slug));
  const neueCmsBeitraege = (cmsBeitraege ?? [])
    .filter((a) => !lokaleBlogSlugs.has(a.slug))
    .map((a) => ({ url: `${site.url}/blog/${a.slug}`, priority: 0.5 }));

  return [...statisch, ...leistungen, ...orte, ...freebies, ...projekte, ...beitraege, ...neueCmsBeitraege];
}
