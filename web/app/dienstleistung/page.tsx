import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, CloseCta, PulseField } from "@/components/ui";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dienstleistungen für digitale Sichtbarkeit",
  description:
    "Webdesign, SEO, Google Ads, Meta Ads, Landingpages, Content und Mitarbeitergewinnung aus einer Hand – für KMUs und Handwerksbetriebe.",
  alternates: { canonical: "/dienstleistung" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Dienstleistungen von Pixel56",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `${site.url}${service.href}`,
  })),
};

export default function DienstleistungenPage() {
  return (
    <main className="service-premium service-suite page-suite page-suite-services">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="sheet">
        <SiteNav crumb={{ section: "Pixel56", page: "Dienstleistungen" }} />
        <header className="hero service-suite-hero" style={{ minHeight: "62vh" }}>
          <PulseField label1="// STRATEGIE BIS UMSETZUNG" label2="// ALLES AUS EINER HAND" />
          <div className="hero-eyebrow">DIENSTLEISTUNGEN · PIXEL56</div>
          <h1>
            <span className="in"><span>Digitale Leistungen,</span></span>
            <span className="in"><span>die gemeinsam</span></span>
            <span className="in"><span>mehr bewirken.</span></span>
          </h1>
          <p className="hero-sub">
            Von der schnellen Website bis zur laufenden Kampagne: Wir verbinden
            Strategie, Technik und Content zu einem System, das Anfragen gewinnt.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener">
              Kostenloses Erstgespräch <ArrowIcon />
            </a>
            <Link className="btn-text" href="#leistungen">Leistungen ansehen ↓</Link>
          </div>
        </header>

      </div>

      <div className="editorial-shell service-editorial">
        <div className="sheet">
        <section className="band" id="leistungen" style={{ paddingTop: 96 }}>
          <div className="band-head reveal">
            <div>
              <span className="band-tag">Leistungsbereiche</span>
              <h2 className="band-title">Ein Ansprechpartner, <em>sieben Hebel</em></h2>
            </div>
            <p className="band-note">Jede Leistung funktioniert einzeln – am stärksten wird sie im passenden Zusammenspiel.</p>
          </div>
          <div className="svc-grid reveal">
            {services.map((service) => (
              <Link className="svc-card" href={service.href} key={service.slug}>
                <span className="sl">{service.nr}</span>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <span className="arrow">→</span>
              </Link>
            ))}
          </div>
        </section>

        </div>
      </div>

      <div className="sheet service-ending">
        <CloseCta>Welche Leistung bringt dich <em>jetzt am weitesten?</em></CloseCta>
        <SiteFooter />
      </div>
    </main>
  );
}
