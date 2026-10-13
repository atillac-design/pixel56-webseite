import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, ClientMarquee, CloseCta, ContactStrip } from "@/components/ui";
import { artikelInKategorie, blogKategorien, getBlogKategorie } from "@/lib/blog";
import { site } from "@/lib/site";
import { routes } from "@/lib/routes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogKategorien.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const kategorie = getBlogKategorie(slug);
  if (!kategorie) return {};
  const anzahl = artikelInKategorie(slug).length;
  return {
    title: `${kategorie.label}: Wissen für KMU`,
    description: `${anzahl} Artikel zu ${kategorie.label}: ${kategorie.beschreibung}`.slice(0, 155),
    alternates: { canonical: `/blog-kategorien/${slug}` },
  };
}

function datumLesbar(iso: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function BlogKategoriePage({ params }: Props) {
  const { slug } = await params;
  const kategorie = getBlogKategorie(slug);
  if (!kategorie) notFound();
  const beitraege = artikelInKategorie(slug);
  const andere = blogKategorien.filter((k) => k.slug !== slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.url}/blog-kategorien/${slug}#thema`,
    url: `${site.url}/blog-kategorien/${slug}`,
    name: `${kategorie.label}: Artikel von Pixel56`,
    description: kategorie.beschreibung,
    isPartOf: { "@type": "Blog", "@id": `${site.url}${routes.blog}#blog` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: beitraege.map((b, index) => ({ "@type": "ListItem", position: index + 1, name: b.titel, url: `${site.url}/blog/${b.slug}` })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <main className="service-premium page-suite blog-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Blog", page: kategorie.label }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">BLOG · THEMA · {kategorie.label.toUpperCase()}</div>
              <h1>
                <span className="service-hero-accent">{kategorie.label}.</span>
                <span>{beitraege.length === 1 ? "Ein Artikel," : `${beitraege.length} Artikel,`}</span>
                <span>ohne Floskeln.</span>
              </h1>
              <p>{kategorie.beschreibung} Geschrieben aus der Praxis mit Handwerkern, Dienstleistern und Vereinen, nicht aus der Theorie.</p>
              <div className="premium-actions">
                <Link className="btn-primary" href="#artikel">
                  Artikel lesen <ArrowIcon />
                </Link>
                <Link className="btn-text" href={kategorie.leistung.href}>
                  {kategorie.leistung.label} bei Pixel56 →
                </Link>
              </div>
              <div className="premium-proof" aria-label="Thema auf einen Blick">
                <span>{beitraege.length} Artikel</span>
                <span>Von Atilla Ciftcioglu</span>
                <span>Für KMU und Handwerk</span>
              </div>
            </div>

            {beitraege[0] ? (
              <Link className="web-experience-board blog-featured" href={`/blog/${beitraege[0].slug}`} aria-label={`Neuester Artikel: ${beitraege[0].titel}`}>
                <div className="web-board-top">
                  <span>NEUESTER ARTIKEL · {kategorie.label.toUpperCase()}</span>
                  <i>{beitraege[0].lesezeit} MIN.</i>
                </div>
                <div className={`blog-cover ${beitraege[0].cover} kat-${kategorie.slug}`} data-tag={kategorie.label} aria-hidden="true" />
                <strong className="bf-title">{beitraege[0].titel}</strong>
                <p className="bf-text">{beitraege[0].teaser}</p>
                <span className="bf-meta">{datumLesbar(beitraege[0].datum)} · Artikel lesen <ArrowIcon /></span>
              </Link>
            ) : null}
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="band theme-light" id="artikel" style={{ paddingTop: 72 }}>
          <div className="band-head reveal">
            <div>
              <span className="band-tag">01 — Artikel zu {kategorie.label}</span>
              <h2 className="band-title">
                Fragen, die uns <em>dazu erreichen</em>
              </h2>
            </div>
            <p className="band-note">
              Nach Datum sortiert. Jeder Artikel beantwortet eine Frage, die so
              oder ähnlich im Erstgespräch gestellt wurde.
            </p>
          </div>
          <div className="blog-grid reveal">
            {beitraege.map((beitrag) => (
              <Link className="blog-card" href={`/blog/${beitrag.slug}`} key={beitrag.slug}>
                <div className={`blog-cover ${beitrag.cover} kat-${kategorie.slug}`} data-tag={kategorie.label} />
                <h3>{beitrag.titel}</h3>
                <p>{beitrag.teaser}</p>
                <span className="bc-meta">{beitrag.lesezeit} Min. Lesezeit{beitrag.datum ? ` · ${datumLesbar(beitrag.datum)}` : ""}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="leistung">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">02 — Vom Lesen zum Machen</span>
              <h2 className="band-title">
                {kategorie.leistung.label} <em>bei Pixel56</em>
              </h2>
              <p className="lead">{kategorie.leistung.text}</p>
              <p className="lead">
                Wenn du beim Lesen merkst, dass du das lieber abgeben willst:
                Das Erstgespräch ist kostenlos, dauert 15 bis 30 Minuten und
                endet mit einer ehrlichen Einschätzung.
              </p>
              <Link className="body-link" href={kategorie.leistung.href}>
                {kategorie.leistung.label} ansehen <ArrowIcon />
              </Link>
            </div>
            <div className="reveal">
              <ul className="lines">
                <li>Ein fester Ansprechpartner von der Analyse bis zur Betreuung</li>
                <li>Angebot nach dem Erstgespräch, mit Umfang, Ablauf und Preis</li>
                <li>Website, Konten und Daten laufen auf deinen Namen</li>
                <li>Aus Bendorf bei Koblenz, für Kunden in ganz Deutschland</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="band theme-light" id="themen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Weitere Themen</span>
              <h2 className="band-title">
                Mehr <em>aus dem Blog</em>
              </h2>
            </div>
            <p className="band-note">
              <Link className="voice-link" href={routes.blog}>Alle Artikel <ArrowIcon /></Link>
            </p>
          </div>
          <div className="audience-grid cols-4 reveal">
            {andere.map((k) => {
              const anzahl = artikelInKategorie(k.slug).length;
              return (
                <Link className="audience-card" href={`/blog-kategorien/${k.slug}`} key={k.slug}>
                  <span>{anzahl} Artikel</span>
                  <h3>{k.label}</h3>
                  <p>{k.beschreibung}</p>
                  <small>Thema öffnen →</small>
                </Link>
              );
            })}
          </div>
        </section>

          </div>
        </div>

        <div className="sheet service-ending">
          <ContactStrip />
          <CloseCta>Lieber direkt <em>fragen?</em></CloseCta>
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
