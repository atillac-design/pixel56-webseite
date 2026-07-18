import type { MetadataRoute } from "next";
import { site, services } from "@/lib/site";
import { standorte } from "@/lib/standorte";
import { ressourcen } from "@/lib/ressourcen";
import { fallstudien } from "@/lib/projekte";
import { artikel } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const statisch = ["", "/ueber-uns", "/projekte", "/blog", "/karriere", "/kontakt", "/standorte"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified,
      priority: path === "" ? 1 : 0.7,
    })
  );

  const leistungen = services.map((s) => ({
    url: `${site.url}/leistungen/${s.slug}`,
    lastModified,
    priority: 0.9,
  }));

  const orte = standorte.map((s) => ({
    url: `${site.url}/standorte/${s.slug}`,
    lastModified,
    priority: 0.6,
  }));

  const freebies = ressourcen.map((r) => ({
    url: `${site.url}/ressourcen/${r.slug}`,
    lastModified,
    priority: 0.5,
  }));

  const projekte = fallstudien.map((f) => ({
    url: `${site.url}/projekte/${f.slug}`,
    lastModified,
    priority: 0.6,
  }));

  const beitraege = artikel.map((a) => ({
    url: `${site.url}/blog/${a.slug}`,
    lastModified: new Date(a.datum),
    priority: 0.5,
  }));

  return [...statisch, ...leistungen, ...orte, ...freebies, ...projekte, ...beitraege];
}
