import type { MetadataRoute } from "next";
import { site, services } from "@/lib/site";
import { standorte } from "@/lib/standorte";
import { ressourcen } from "@/lib/ressourcen";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const statisch = ["", "/ueber-uns", "/projekte", "/blog", "/karriere"].map(
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

  return [...statisch, ...leistungen, ...orte, ...freebies];
}
