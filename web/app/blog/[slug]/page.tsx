import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { CloseCta } from "@/components/ui";
import { artikel, getArtikel } from "@/lib/blog";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return artikel.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArtikel(slug);
  if (!a) return {};
  return {
    title: a.titel,
    description: a.teaser,
    openGraph: { type: "article", title: a.titel, description: a.teaser },
  };
}

export default async function ArtikelPage({ params }: Props) {
  const { slug } = await params;
  const a = getArtikel(slug);
  if (!a) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.titel,
    description: a.teaser,
    datePublished: a.datum,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${a.slug}`,
  };

  return (
    <div className="sheet">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteNav crumb={{ section: "Blog", page: a.kategorie }} />

      <article className="band" style={{ paddingTop: 40 }}>
        <div className="article-hero">
          <Link className="article-back" href="/blog">
            ← Alle Artikel
          </Link>
          <span className="band-tag">{a.kategorie}</span>
          <h1 className="band-title" style={{ maxWidth: "20ch" }}>
            {a.titel}
          </h1>
          <div className="article-meta">
            <span>{a.kategorie}</span>
            <span>{a.lesezeit} Min. Lesezeit</span>
            <span>
              {new Date(a.datum).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        <div className={`article-cover blog-cover ${a.cover}`} aria-hidden="true" />

        <div className="article-body">
          <p className="lead-intro">{a.intro}</p>
          {a.body.map((b, i) => {
            if (b.typ === "h2") return <h2 key={i}>{b.text}</h2>;
            if (b.typ === "ul")
              return (
                <ul key={i}>
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              );
            return <p key={i}>{b.text}</p>;
          })}
        </div>
      </article>

      <CloseCta>
        Lieber direkt <em>fragen?</em>
      </CloseCta>

      <SiteFooter />
    </div>
  );
}
