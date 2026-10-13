import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, ClientMarquee, CloseCta, ContactStrip } from "@/components/ui";
import { getBlogBeitraege } from "@/lib/sanity";
import { artikel as fallbackArtikel, artikelInKategorie, blogKategorien } from "@/lib/blog";
import { site } from "@/lib/site";
import { resourceRoutes, routes } from "@/lib/routes";
import seoFreebieImage from "@/public/bilder/freebie-seo-ebook-transparent.webp";
import kiFreebieImage from "@/public/bilder/freebie-ki-ebook.webp";

// CMS-Inhalte spätestens nach 5 Minuten übernehmen, ohne Neu-Deployment.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Blog: Marketing-Wissen für KMU und Handwerk",
  description:
    "Praxisnahe Tipps zu Webdesign, SEO, Google und Meta Ads und Social Media für KMU, Handwerker und Selbstständige. Der Pixel56-Blog.",
  alternates: { canonical: routes.blog },
  openGraph: {
    title: "Pixel56-Blog: Wissen, das Entscheidungen leichter macht",
    description: "Antworten auf die Fragen, die Kunden uns tatsächlich stellen. Ehrlich, konkret, für den Betriebsalltag geschrieben.",
    url: routes.blog,
  },
};

type Karte = { cover: string; tag: string; title: string; text: string; meta: string; slug: string; datum: string };

const resources = [
  { tag: "Checkliste · PDF", title: "SEO-Checkliste", text: "30 Prüfpunkte in drei Bereichen, dieselben, die wir bei jedem Kundenprojekt durchgehen. Zum Selbst-Abhaken, ohne Vorkenntnisse.", href: resourceRoutes["seo-checkliste"], image: seoFreebieImage },
  { tag: "Checkliste · PDF", title: "KI-Agenten-Checkliste", text: "Wo KI im Betriebsalltag wirklich Zeit spart und wo sie nur Spielerei ist. Ehrlich eingeordnet, mit konkreten Einsatzfällen.", href: resourceRoutes["ki-agenten-checkliste"], image: kiFreebieImage },
  { tag: "Vorlage · PDF", title: "Tagesplaner", text: "Ein Blatt pro Tag, drei Prioritäten, feste Zeitblöcke. Die Vorlage, mit der wir selbst arbeiten.", href: resourceRoutes.tagesplaner, image: null },
];

function datumLesbar(iso: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function BlogPage() {
  const beitraege = await getBlogBeitraege();
  const cmsArtikel: Karte[] = (beitraege ?? []).map((b) => ({
    cover: b.coverFarbe || "c1",
    tag: b.kategorie,
    title: b.titel,
    text: b.teaser,
    meta: `${b.kategorie} · ${b.lesezeit} Min. Lesezeit`,
    slug: b.slug,
    datum: b.veroeffentlichtAm?.slice(0, 10) || "",
  }));
  const cmsSlugs = new Set(cmsArtikel.map((a) => a.slug));
  const statisch: Karte[] = fallbackArtikel
    .filter((a) => !cmsSlugs.has(a.slug))
    .map((a) => ({ cover: a.cover, tag: a.kategorie, title: a.titel, text: a.teaser, meta: `${a.kategorie} · ${a.lesezeit} Min. Lesezeit`, slug: a.slug, datum: a.datum }));
  const alle = [...cmsArtikel, ...statisch].sort((a, b) => b.datum.localeCompare(a.datum));
  const [neuester, ...uebrige] = alle;
  const neueste = uebrige.slice(0, 5);
  const archiv = uebrige.slice(5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${site.url}${routes.blog}#blog`,
    url: `${site.url}${routes.blog}`,
    name: "Pixel56-Blog",
    description: "Marketing-Wissen für kleine und mittlere Unternehmen, Handwerker und Selbstständige.",
    publisher: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
    blogPost: alle.slice(0, 10).map((a) => ({ "@type": "BlogPosting", headline: a.title, url: `${site.url}/blog/${a.slug}`, ...(a.datum ? { datePublished: a.datum } : {}) })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <main className="service-premium page-suite blog-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Unternehmen", page: "Blog" }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">BLOG · WISSEN FÜR KMU UND HANDWERK</div>
              <h1>
                <span>Wissen, das</span>
                <span className="service-hero-accent">Entscheidungen</span>
                <span>leichter macht.</span>
              </h1>
              <p>
                Keine Marketing-Floskeln, sondern Antworten auf die Fragen, die
                Kunden uns im Erstgespräch tatsächlich stellen: Was kostet eine
                Website, wie lange dauert SEO, wie viel Budget brauchen Anzeigen,
                wo hilft KI wirklich. Ehrlich, konkret, für den Betriebsalltag
                geschrieben.
              </p>
              <div className="premium-actions">
                <Link className="btn-primary" href="#neueste">
                  Neueste Artikel <ArrowIcon />
                </Link>
                <Link className="btn-text" href="#themen">
                  Nach Thema stöbern ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="Blog auf einen Blick">
                <span>{alle.length} Artikel</span>
                <span>{blogKategorien.length} Themen</span>
                <span>Von Atilla Ciftcioglu</span>
                <span>Ohne Floskeln</span>
              </div>
            </div>

            {neuester ? (
              <Link className="web-experience-board blog-featured" href={`/blog/${neuester.slug}`} aria-label={`Neuester Artikel: ${neuester.title}`}>
                <div className="web-board-top">
                  <span>NEUESTER ARTIKEL · {neuester.tag.toUpperCase()}</span>
                  <i>{neuester.meta.split(" · ")[1] ?? "LESEN"}</i>
                </div>
                <div className={`blog-cover ${neuester.cover}`} data-tag={neuester.tag} aria-hidden="true" />
                <strong className="bf-title">{neuester.title}</strong>
                <p className="bf-text">{neuester.text}</p>
                <span className="bf-meta">{datumLesbar(neuester.datum)} · Artikel lesen <ArrowIcon /></span>
              </Link>
            ) : null}
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="Blog auf einen Blick">
          <div>
            <span>Artikel</span>
            <strong>{alle.length} Beiträge</strong>
          </div>
          <div>
            <span>Themen</span>
            <strong>Website, SEO, Ads, Social Media, KI</strong>
          </div>
          <div>
            <span>Autor</span>
            <strong>Atilla Ciftcioglu, Gründer</strong>
          </div>
          <div>
            <span>Anspruch</span>
            <strong>Praxiswissen statt Theorie</strong>
          </div>
        </section>

        <section className="band theme-light" id="neueste">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">01 — Neueste Artikel</span>
              <h2 className="band-title">
                Fragen, die uns <em>gerade oft erreichen</em>
              </h2>
            </div>
            <p className="band-note">
              Die fünf jüngsten Beiträge. Jeder beantwortet eine Frage, die
              uns so oder ähnlich im Erstgespräch gestellt wurde.
            </p>
          </div>
          <div className="blog-grid reveal">
            {neueste.map((a) => (
              <Link className="blog-card" href={`/blog/${a.slug}`} key={a.slug}>
                <div className={`blog-cover ${a.cover}`} data-tag={a.tag} />
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <span className="bc-meta">{a.meta}{a.datum ? ` · ${datumLesbar(a.datum)}` : ""}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="themen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Nach Thema</span>
              <h2 className="band-title">
                {blogKategorien.length} Themen, <em>ein roter Faden</em>
              </h2>
            </div>
            <p className="band-note">
              Alles dreht sich um dieselbe Frage: Wie bekommt ein Betrieb online
              mehr von dem, was er braucht, mit vertretbarem Aufwand?
            </p>
          </div>
          <div className="audience-grid cols-4 reveal">
            {blogKategorien.map((k) => {
              const anzahl = artikelInKategorie(k.slug).length;
              return (
                <Link className="audience-card" href={`/blog-kategorien/${k.slug}`} key={k.slug}>
                  <span>{anzahl} {anzahl === 1 ? "Artikel" : "Artikel"}</span>
                  <h3>{k.label}</h3>
                  <p>{k.beschreibung}</p>
                  <small>Thema öffnen →</small>
                </Link>
              );
            })}
          </div>
        </section>

        {archiv.length ? (
          <section className="band theme-light" id="alle">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">03 — Alle weiteren Artikel</span>
                <h2 className="band-title">
                  Das <em>ganze Archiv</em>
                </h2>
              </div>
              <p className="band-note">
                Nach Datum sortiert. Ältere Beiträge halten wir aktuell, wenn
                sich an der Sache etwas ändert.
              </p>
            </div>
            <div className="blog-grid reveal">
              {archiv.map((a) => (
                <Link className="blog-card" href={`/blog/${a.slug}`} key={a.slug}>
                  <div className={`blog-cover ${a.cover}`} data-tag={a.tag} />
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                  <span className="bc-meta">{a.meta}{a.datum ? ` · ${datumLesbar(a.datum)}` : ""}</span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="band theme-light" id="ressourcen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Kostenlose Ressourcen</span>
              <h2 className="band-title">
                Zum Mitnehmen, <em>ohne Haken</em>
              </h2>
            </div>
            <p className="band-note">
              Drei Vorlagen aus unserer eigenen Arbeit. Kostenlos als PDF.
            </p>
          </div>
          <div className="resource-grid reveal">
            {resources.map((resource) => (
              <Link className="resource-card" href={resource.href} key={resource.title}>
                {resource.image ? (
                  <div className="resource-mockup">
                    <Image src={resource.image} alt="" fill sizes="(max-width: 720px) 100vw, 33vw" />
                  </div>
                ) : (
                  <div className="resource-mockup resource-mockup-placeholder" aria-hidden="true"><i /></div>
                )}
                <span>{resource.tag}</span>
                <h3>{resource.title}</h3>
                <p>{resource.text}</p>
                <em>Kostenlos herunterladen <ArrowIcon /></em>
              </Link>
            ))}
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
    </>
  );
}
