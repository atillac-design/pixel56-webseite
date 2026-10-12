import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, CloseCta, PulseField } from "@/components/ui";
import type { LegacyLocation } from "@/lib/legacy-locations";
import { locationPath } from "@/lib/routes";
import { site } from "@/lib/site";

export default function LegacyLocationPage({ location }: { location: LegacyLocation }) {
  const canonical = locationPath(location.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${location.leistung} in ${location.stadt}`,
    serviceType: location.leistung,
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: location.stadt,
    url: `${site.url}${canonical}`,
  };

  return (
    <main className="service-premium service-suite page-suite location-suite legacy-location-suite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="sheet">
        <SiteNav crumb={{ section: "Standort", page: `${location.leistung} in ${location.stadt}` }} />
        <header className="hero service-suite-hero" style={{ minHeight: "62vh" }}>
          <PulseField label1={`// ${location.stadt.toUpperCase()}`} label2="// DIGITALE SICHTBARKEIT" />
          <div className="hero-eyebrow">STANDORT · {location.stadt.toUpperCase()}</div>
          <h1>
            <span className="in"><span>{location.leistung}</span></span>
            <span className="in"><span>in {location.stadt}.</span></span>
          </h1>
          <p className="hero-sub">{location.heroLead}</p>
          <div className="hero-actions">
            <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener">
              Kostenloses Erstgespräch <ArrowIcon />
            </a>
          </div>
        </header>

      </div>

      <div className="editorial-shell article-editorial">
        <div className="sheet">
        <article className="band article-body" style={{ paddingTop: 82 }}>
          {location.body.map((block, index) =>
            block.typ === "h2" ? (
              <h2 key={`${block.text}-${index}`}>{block.text}</h2>
            ) : (
              <p key={`${block.text}-${index}`}>{block.text}</p>
            ),
          )}
        </article>
        </div>
      </div>

      <div className="sheet service-ending">
        <CloseCta>Mehr Sichtbarkeit in <em>{location.stadt}</em>.</CloseCta>
        <SiteFooter />
      </div>
    </main>
  );
}
