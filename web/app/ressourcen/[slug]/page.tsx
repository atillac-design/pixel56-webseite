import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, FaqList } from "@/components/ui";
import FreebieForm from "@/components/FreebieForm";
import { ressourcen, getRessource } from "@/lib/ressourcen";
import { site } from "@/lib/site";
import { resourcePath } from "@/lib/routes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ressourcen.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const res = getRessource(slug);
  if (!res) return {};
  return {
    title: `${res.docTitle} kostenlos als PDF`,
    description: res.heroSub.length > 155 ? `${res.heroSub.slice(0, 152).replace(/\s+\S*$/, "")}…` : res.heroSub,
    alternates: { canonical: resourcePath(res.slug) },
    openGraph: { title: `${res.docTitle} von Pixel56, kostenlos als PDF`, description: res.heroSub, url: resourcePath(res.slug) },
  };
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2v9M4 7l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function RessourcePage({ params }: Props) {
  const { slug } = await params;
  const res = getRessource(slug);
  if (!res) notFound();
  const weitere = ressourcen.filter((r) => r.slug !== res.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    "@id": `${site.url}${resourcePath(res.slug)}#dokument`,
    name: res.docTitle,
    description: res.heroSub,
    url: `${site.url}${resourcePath(res.slug)}`,
    encodingFormat: "application/pdf",
    isAccessibleForFree: true,
    inLanguage: "de-DE",
    publisher: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="service-premium page-suite resource-premium">
        <div className="sheet">
          <nav className="site-nav">
            <Link className="mark" href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bilder/logo-pixel56-360.webp" alt="Pixel56" width={360} height={155} />
            </Link>
            <span className="nav-note">Kostenlose Ressource</span>
          </nav>

          <header className="hero-grab contact-premium-hero">
            <div>
              <div className="hero-eyebrow">{res.eyebrow}</div>
              <h1>
                {res.titleStart}
                <em>{res.titleEm}</em>
              </h1>
              <p className="hero-sub">{res.heroSub}</p>
              <ul className="hero-points">
                {res.heroPoints.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="grab-card reveal in" id="download">
              {res.mockupBild ? (
                <div className="grab-mockup">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={res.mockupBild} alt={`${res.docTitle}: Vorschau`} width={1200} height={800} />
                </div>
              ) : (
                <div className="doc-mock">
                  <span className="doc-pages">{res.docPages}</span>
                  <span className="dm-tag">{res.docTag}</span>
                  <h3>{res.docTitle}</h3>
                  {res.docRows.map((row) => (
                    <div className="doc-row" key={row.text}>
                      <span className="box">{row.checked ? "✓" : ""}</span>
                      {row.text}
                    </div>
                  ))}
                </div>
              )}
              <FreebieForm
                quelle={res.slug}
                label={res.docTag === "Vorlage" ? "die Vorlage" : "die Checkliste"}
              />
            </div>
          </header>
        </div>

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label={`${res.docTitle} auf einen Blick`}>
          <div>
            <span>Format</span>
            <strong>{res.docPages}</strong>
          </div>
          <div>
            <span>Preis</span>
            <strong>Kostenlos, gegen E-Mail</strong>
          </div>
          <div>
            <span>Vorkenntnisse</span>
            <strong>Keine nötig</strong>
          </div>
          <div>
            <span>Von</span>
            <strong>Pixel56, Bendorf bei Koblenz</strong>
          </div>
        </section>

        <section className="band theme-light" id="inhalt">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">{res.inhaltTag}</span>
              <h2 className="band-title">
                {res.inhaltTitle}
                <em>{res.inhaltTitleEm}</em>
              </h2>
            </div>
            <p className="band-note">{res.inhaltNote}</p>
          </div>
          <div className="mini-grid cols-3 reveal">
            {res.teile.map((t) => (
              <div key={t.fl}>
                <b>{t.fl}: {t.title}</b>
                <small>{t.text}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="fuer-wen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Für wen</span>
              <h2 className="band-title">
                Drei Situationen, <em>in denen sie hilft</em>
              </h2>
            </div>
            <p className="band-note">
              Geschrieben für Inhaber, die selbst Hand anlegen wollen, nicht
              für Agenturen.
            </p>
          </div>
          <div className="audience-grid cols-3 reveal">
            {res.fuerWen.map((item) => (
              <article className="audience-card" key={item.tag}>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="so-gehts">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — So nutzt du sie</span>
              <h2 className="band-title">
                Drei Schritte, <em>dann läuft es</em>
              </h2>
            </div>
            <p className="band-note">
              Kein Kurs, keine Anmeldung bei einem Werkzeug. Herunterladen und
              anfangen.
            </p>
          </div>
          <div className="premium-process cols-3 reveal">
            {res.schritte.map((step) => (
              <article key={step.nr}>
                <span>{step.nr}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="weiter">
          <div className="split2 align-top">
            <div className="reveal">
              <span className="band-tag">04 — Wenn du Unterstützung willst</span>
              <h2 className="band-title">
                {res.leistung.label} <em>von Pixel56</em>
              </h2>
              <p className="lead">{res.leistung.text}</p>
              <p className="lead">
                Das Erstgespräch ist kostenlos und unverbindlich. Du bekommst
                eine ehrliche Einschätzung, kein Verkaufsgespräch.
              </p>
              <div className="premium-actions" style={{ marginTop: 24 }}>
                <Link className="btn-primary" href={res.leistung.href}>{res.leistung.label} ansehen <ArrowIcon /></Link>
                <a className="btn-text" href={site.calendly} target="_blank" rel="noopener noreferrer">Kostenloses Erstgespräch →</a>
              </div>
            </div>
            <div className="mini-grid reveal" aria-label="Weitere Ressourcen">
              {weitere.map((r) => (
                <div key={r.slug}>
                  <b>{r.docTitle}</b>
                  <small>{r.heroSub}</small>
                  <Link className="body-link" href={resourcePath(r.slug)}>Kostenlos laden <ArrowIcon /></Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="faq">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">05 — Häufige Fragen</span>
              <h2 className="band-title">
                Bevor du <em>lädst</em>
              </h2>
            </div>
          </div>
          <FaqList items={res.faqs} />
        </section>

          </div>
        </div>

        <div className="sheet service-ending">
          <section className="close-cta reveal">
            <div className="close-glow" />
            <h2>{res.ctaStart}<em>{res.ctaEm}</em></h2>
            <a className="btn-primary" href="#download">Kostenlos herunterladen <DownloadIcon /></a>
          </section>
          <footer className="footer-slim">
            <div>© {new Date().getFullYear()} Pixel56 · {site.address}</div>
            <div>
              <Link href="/">Startseite</Link>
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
