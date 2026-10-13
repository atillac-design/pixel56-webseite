import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, CloseCta, ContactStrip } from "@/components/ui";
import { aehnlicheArtikel, artikel, coverKlasse, getArtikel, kategorieVonArtikel, relativeLinks, type Artikel, type Block } from "@/lib/blog";
import { getBlogBeitrag } from "@/lib/sanity";
import { site } from "@/lib/site";
import { resourceRoutes, routes } from "@/lib/routes";
import atillaImage from "@/public/bilder/team-atilla-quadrat.webp";

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

/** Seitentitel: bei langen Überschriften den Teil vor Doppelpunkt oder Gedankenstrich nehmen, sonst an der Wortgrenze kürzen. */
function seoTitel(titel: string, maxLength: number): string {
  if (titel.length <= maxLength) return titel;
  const trenner = [": ", " – ", " — ", " | ", "? "];
  for (const t of trenner) {
    const idx = titel.indexOf(t);
    if (idx > 15 && idx + (t === "? " ? 1 : 0) <= maxLength) return titel.slice(0, idx + (t === "? " ? 1 : 0));
  }
  return truncateSeoText(titel, maxLength);
}

function datumLesbar(iso: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });
}

function abschnittId(index: number): string {
  return `abschnitt-${index + 1}`;
}

export function generateStaticParams() {
  return artikel.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = await resolveArtikel(slug);
  if (!a) return {};
  const seoTitle = a.seoTitel ?? seoTitel(a.titel, 50);
  const seoDescription = truncateSeoText(a.teaser, 155);
  return {
    title: seoTitle,
    description: seoDescription,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.titel,
      description: seoDescription,
      url: `/blog/${a.slug}`,
      ...(a.datum ? { publishedTime: a.datum } : {}),
      authors: [`${site.url}/team/atilla-ciftcioglu`],
    },
  };
}

export default async function ArtikelPage({ params }: Props) {
  const { slug } = await params;
  const a = await resolveArtikel(slug);
  if (!a) notFound();
  const kategorie = kategorieVonArtikel(a);
  const weitere = aehnlicheArtikel(a, 3);
  const abschnitte = a.body.map((b, i) => (b.typ === "h2" ? { id: abschnittId(i), text: b.text } : null)).filter((x): x is { id: string; text: string } => Boolean(x));
  const wortzahl = [a.intro, ...a.body.map((b) => (b.typ === "ul" ? b.items.join(" ") : b.text))].join(" ").split(/\s+/).length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${site.url}/blog/${a.slug}#artikel`,
    headline: a.titel,
    description: a.teaser,
    articleSection: kategorie.label,
    wordCount: wortzahl,
    inLanguage: "de-DE",
    ...(a.datum ? { datePublished: a.datum, dateModified: a.datum } : {}),
    author: {
      "@type": "Person",
      name: "Atilla Ciftcioglu",
      url: `${site.url}/team/atilla-ciftcioglu`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/bilder/logo-pixel56.webp` },
    },
    mainEntityOfPage: `${site.url}/blog/${a.slug}`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${site.url}${routes.blog}` },
      { "@type": "ListItem", position: 2, name: kategorie.label, item: `${site.url}/blog-kategorien/${kategorie.slug}` },
      { "@type": "ListItem", position: 3, name: a.titel, item: `${site.url}/blog/${a.slug}` },
    ],
  };

  return (
    <main className="service-premium article-premium">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c") }} />
      <div className="sheet">
        <SiteNav crumb={{ section: "Blog", page: kategorie.label }} />
      </div>

      <div className="editorial-shell article-editorial">
        <div className="sheet">
      <article className="band" style={{ paddingTop: 82 }}>
        <div className="article-hero">
          <Link className="article-back" href={`/blog-kategorien/${kategorie.slug}`}>
            ← Alle Artikel zu {kategorie.label}
          </Link>
          <span className="band-tag">{kategorie.label}</span>
          <h1 className="band-title" style={{ maxWidth: "20ch" }}>
            {a.titel}
          </h1>
          <p className="article-teaser">{a.teaser}</p>
          <div className="article-meta">
            <span>Von Atilla Ciftcioglu</span>
            <span>{a.lesezeit} Min. Lesezeit</span>
            {a.datum && <span>{datumLesbar(a.datum)}</span>}
          </div>
        </div>

        <div className={`article-cover blog-cover ${a.cover} kat-${kategorie.slug}`} data-tag={kategorie.label} aria-hidden="true" />

        <div className="article-body">
          <p className="lead-intro">{a.intro}</p>
          {abschnitte.length >= 3 ? (
            <nav className="article-toc" aria-label="Inhalt des Artikels">
              <span>Inhalt</span>
              <ol className={abschnitte.some((s) => /^\d+\.\s/.test(s.text)) ? "plain" : undefined}>
                {abschnitte.map((s) => (
                  <li key={s.id}><a href={`#${s.id}`}>{s.text}</a></li>
                ))}
              </ol>
            </nav>
          ) : null}
          {a.body.map((b, i) => {
            if (b.typ === "h2") return <h2 key={i} id={abschnittId(i)}>{b.text}</h2>;
            if (b.typ === "ul")
              return (
                <ul key={i}>
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              );
            return b.html ? (
              <p key={i} dangerouslySetInnerHTML={{ __html: relativeLinks(b.html) }} />
            ) : (
              <p key={i}>{b.text}</p>
            );
          })}

          <aside className="article-author">
            <Image src={atillaImage} alt="Atilla Ciftcioglu" width={72} height={72} />
            <div>
              <b>Atilla Ciftcioglu</b>
              <span>Gründer von Pixel56, Bendorf bei Koblenz. Schreibt über das, was im Erstgespräch mit Handwerkern, Dienstleistern und Vereinen täglich zur Sprache kommt.</span>
              <Link href="/team/atilla-ciftcioglu">Mehr über Atilla <ArrowIcon /></Link>
            </div>
          </aside>

          <aside className="article-cta">
            <span>Passend zum Thema</span>
            <b>{kategorie.leistung.label} von Pixel56</b>
            <p>{kategorie.leistung.text}</p>
            <div className="article-cta-actions">
              <Link className="btn-primary" href={kategorie.leistung.href}>{kategorie.leistung.label} ansehen <ArrowIcon /></Link>
              <a className="btn-text" href={site.calendly} target="_blank" rel="noopener noreferrer">Kostenloses Erstgespräch →</a>
            </div>
          </aside>
        </div>
      </article>

      <section className="band theme-light" id="weitere" style={{ paddingTop: 0 }}>
        <div className="band-head reveal">
          <div>
            <span className="band-tag">Weiterlesen</span>
            <h2 className="band-title">
              Mehr zu <em>{kategorie.label}</em>
            </h2>
          </div>
          <p className="band-note">
            <Link className="voice-link" href={`/blog-kategorien/${kategorie.slug}`}>
              Alle Artikel zu {kategorie.label} <ArrowIcon />
            </Link>
          </p>
        </div>
        <div className="blog-grid reveal">
          {weitere.map((w) => (
            <Link className="blog-card" href={`/blog/${w.slug}`} key={w.slug}>
              <div className={`blog-cover ${w.cover} ${coverKlasse(w.kategorie)}`} data-tag={w.kategorie} />
              <h3>{w.titel}</h3>
              <p>{w.teaser}</p>
              <span className="bc-meta">{w.kategorie} · {w.lesezeit} Min. Lesezeit</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="band theme-light" id="ressourcen">
        <div className="split2">
          <div className="reveal">
            <span className="band-tag">Kostenlos zum Mitnehmen</span>
            <h2 className="band-title">
              Lieber selbst <em>prüfen?</em>
            </h2>
            <p className="lead">
              Unsere Checklisten fassen zusammen, was wir bei jedem Kundenprojekt
              durchgehen. Kostenlos als PDF, ohne Vorkenntnisse nutzbar.
            </p>
          </div>
          <div className="mini-grid reveal">
            <div><b>SEO-Checkliste</b><small>30 Prüfpunkte für Technik, lokale Sichtbarkeit und Inhalte.</small><Link className="body-link" href={resourceRoutes["seo-checkliste"]}>Herunterladen <ArrowIcon /></Link></div>
            <div><b>KI-Agenten-Checkliste</b><small>Wo KI im Betrieb wirklich Zeit spart und wo nicht.</small><Link className="body-link" href={resourceRoutes["ki-agenten-checkliste"]}>Herunterladen <ArrowIcon /></Link></div>
          </div>
        </div>
      </section>

        </div>
      </div>

      <div className="sheet service-ending">
        <ContactStrip />
        <CloseCta>
          Lieber direkt <em>fragen?</em>
        </CloseCta>
        <SiteFooter />
      </div>
    </main>
  );
}
