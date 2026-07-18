import type { MetadataRoute } from "next";
import { site, indexable } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Solange die Seite noch nicht live ist (Test-/Staging-Deployment),
  // komplett für Suchmaschinen sperren — keine Sitemap ausliefern.
  if (!indexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
