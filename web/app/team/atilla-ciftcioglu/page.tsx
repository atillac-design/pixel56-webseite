import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, CloseCta } from "@/components/ui";
import { routes } from "@/lib/routes";
import { site } from "@/lib/site";

const canonical = "/team/atilla-ciftcioglu";

export const metadata: Metadata = {
  title: "Atilla Ciftcioglu – Gründer von Pixel56",
  description:
    "Atilla Ciftcioglu ist Gründer und fester Ansprechpartner bei Pixel56 für Webdesign, SEO, Kampagnen und digitale Sichtbarkeit.",
  alternates: { canonical },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Atilla Ciftcioglu",
  jobTitle: "Gründer von Pixel56",
  worksFor: { "@type": "Organization", name: site.name, url: site.url },
  url: `${site.url}${canonical}`,
};

export default function AtillaCiftciogluPage() {
  return (
    <main className="service-premium service-suite page-suite page-suite-about team-premium">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="sheet">
        <SiteNav crumb={{ section: "Team", page: "Atilla Ciftcioglu" }} />
        <header className="hero hero-case service-suite-hero" style={{ minHeight: "62vh" }}>
          <div className="hero-portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/bilder/team-atilla-quadrat.webp" alt="Atilla Ciftcioglu, Gründer von Pixel56" />
            <span className="hp-tag">Gründer · Fester Ansprechpartner</span>
          </div>
          <div className="hero-eyebrow">TEAM · PIXEL56</div>
          <h1><span className="in"><span>Atilla Ciftcioglu.</span></span></h1>
          <p className="hero-sub">
            Strategie, Webdesign und Marketing ohne stille Post: Von der ersten
            Analyse bis zur laufenden Betreuung hast du einen festen Ansprechpartner.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener">
              Persönlich kennenlernen <ArrowIcon />
            </a>
            <Link className="btn-text" href={routes.about}>Mehr über Pixel56 →</Link>
          </div>
        </header>
      </div>

      <div className="editorial-shell service-editorial">
        <div className="sheet">
          <section className="service-summary service-summary-premium reveal" aria-label="Atilla Ciftcioglu auf einen Blick">
            <div><span>Rolle</span><strong>Gründer &amp; Ansprechpartner</strong></div>
            <div><span>Standort</span><strong>Bendorf bei Koblenz</strong></div>
            <div><span>Fokus</span><strong>Web, Kampagnen &amp; Systeme</strong></div>
            <div><span>Arbeitsweise</span><strong>Direkt, ehrlich, umsetzungsnah</strong></div>
          </section>

          <section className="band" style={{ paddingTop: 82 }}>
            <div className="split2">
              <div className="reveal">
                <span className="band-tag">Persönliche Zusammenarbeit</span>
                <h2 className="band-title">Kein Umweg zwischen <em>Idee und Umsetzung</em></h2>
              </div>
              <div className="reveal">
                <p className="lead">
                  Atilla verbindet Gestaltung, Technik und Marketing zu einem
                  klaren System. Du sprichst nicht mit einem Vertrieb, der dein
                  Projekt später weiterreicht, sondern direkt mit dem Menschen,
                  der Entscheidungen einordnet und die Umsetzung begleitet.
                </p>
                <ul className="lines">
                  <li>Ein fester Ansprechpartner über das gesamte Projekt.</li>
                  <li>Empfehlungen passend zum Ziel statt unnötiger Einzelleistungen.</li>
                  <li>Kurze Abstimmung per Telefon, Video-Call oder WhatsApp.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="sheet service-ending">
        <CloseCta>Lass uns über deine <em>Ziele</em> sprechen.</CloseCta>
        <SiteFooter />
      </div>
    </main>
  );
}
