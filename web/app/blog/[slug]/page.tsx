import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { CloseCta } from "@/components/ui";
import { artikel, getArtikel, type Artikel, type Block } from "@/lib/blog";
import { getBlogBeitrag } from "@/lib/sanity";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 300;

const resolveArtikel = cache(async (slug: string): Promise<Artikel | undefined> => {
  const bestehend = getArtikel(slug);
  if (bestehend) return bestehend;
  const cms = await getBlogBeitrag(slug);
  if (!cms) return undefined;

  const body: Block[] = [];
  for (const block of cms.inhalt ?? []) {
    if (block._type !== "block") continue;
    const text = (block.children ?? []).map((child) => child.text ?? "").join("").trim();
    if (!text) continue;
    if (block.listItem) {
      const previous = body[body.length - 1];
      if (previous?.typ === "ul") previous.items.push(text);
      else body.push({ typ: "ul", items: [text] });
    } else if (block.style === "h2" || block.style === "h3") {
      body.push({ typ: "h2", text });
    } else {
      body.push({ typ: "p", text });
    }
  }
  if (!body.length) return undefined;
  const first = body[0];
  const intro = first.typ === "p" ? first.text : cms.teaser;
  if (first.typ === "p") body.shift();

  return {
    slug: cms.slug,
    cover: cms.coverFarbe || "c1",
    kategorie: cms.kategorie,
    titel: cms.titel,
    teaser: cms.teaser,
    lesezeit: cms.lesezeit || 5,
    datum: cms.veroeffentlichtAm?.slice(0, 10) || "",
    intro,
    body,
  };
});

function truncateSeoText(value: string, maxLength: number): string {
  if (value.length <= maxLength) return value;
  const shortened = value.slice(0, maxLength - 1);
  const lastSpace = shortened.lastIndexOf(" ");
  return `${shortened.slice(0, lastSpace > maxLength * 0.65 ? lastSpace : maxLength - 1)}…`;
}

export function generateStaticParams() {
  return artikel.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = await resolveArtikel(slug);
  if (!a) return {};
  const seoTitle = truncateSeoText(a.titel, 50);
  const seoDescription = truncateSeoText(a.teaser, 155);
  return {
    title: seoTitle,
    description: seoDescription,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: { type: "article", title: a.titel, description: seoDescription },
  };
}

export default async function ArtikelPage({ params }: Props) {
  const { slug } = await params;
  const a = await resolveArtikel(slug);
  if (!a) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.titel,
    description: a.teaser,
    datePublished: a.datum || undefined,
    dateModified: a.datum || undefined,
    author: {
      "@type": "Person",
      name: "Atilla Ciftcioglu",
      url: `${site.url}/team/atilla-ciftcioglu`,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/bilder/logo-pixel56.webp` },
    },
    mainEntityOfPage: `${site.url}/blog/${a.slug}`,
  };

  return (
    <main className="service-premium article-premium">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <div className="sheet">
        <SiteNav crumb={{ section: "Blog", page: a.kategorie }} />
      </div>

      <div className="editorial-shell article-editorial">
        <div className="sheet">
      <article className="band" style={{ paddingTop: 82 }}>
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
            {a.datum && <span>
              {new Date(a.datum).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>}
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
            return b.html ? (
              <p key={i} dangerouslySetInnerHTML={{ __html: b.html }} />
            ) : (
              <p key={i}>{b.text}</p>
            );
          })}
        </div>
      </article>

        </div>
      </div>

      <div className="sheet service-ending">
        <CloseCta>
          Lieber direkt <em>fragen?</em>
        </CloseCta>
        <SiteFooter />
      </div>
    </main>
  );
}
