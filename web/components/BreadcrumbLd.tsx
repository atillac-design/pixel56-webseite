import { site } from "@/lib/site";

export type BreadcrumbItem = { name: string; href: string };

/** BreadcrumbList-Schema für Suchmaschinen; die sichtbare Navigation bleibt die Brotkrume im SiteNav. */
export default function BreadcrumbLd({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Start", href: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.href === "/" ? "" : item.href}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />;
}
