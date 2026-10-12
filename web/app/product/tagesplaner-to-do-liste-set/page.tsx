import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, CloseCta, PulseField } from "@/components/ui";
import { resourceRoutes } from "@/lib/routes";
import { site } from "@/lib/site";

const canonical = "/product/tagesplaner-to-do-liste-set";

export const metadata: Metadata = {
  title: "Produktivitäts-Set – Tagesplaner & To-do-Liste",
  description:
    "Zwei editierbare Canva-Vorlagen für deinen Alltag: Tagesplaner und To-do-Liste. Druckbar, digital nutzbar und sofort einsatzbereit.",
  alternates: { canonical },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Produktivitäts-Set – Tagesplaner & To-do-Liste",
  description: "Zwei editierbare und druckbare Canva-Vorlagen für mehr Struktur im Alltag.",
  brand: { "@type": "Brand", name: site.name },
  offers: {
    "@type": "Offer",
    price: "3.90",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
    url: `${site.url}${canonical}`,
  },
};

export default function ProduktivitaetsSetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="sheet">
        <SiteNav crumb={{ section: "Digitale Produkte", page: "Produktivitäts-Set" }} />
        <header className="hero" style={{ minHeight: "62vh" }}>
          <PulseField label1="// 2 CANVA-VORLAGEN" label2="// EDITIERBAR & DRUCKBAR" />
          <div className="hero-eyebrow">DIGITALES PRODUKT · 3,90 €</div>
          <h1>
            <span className="in"><span>Tagesplaner &</span></span>
            <span className="in"><span>To-do-Liste.</span></span>
          </h1>
          <p className="hero-sub">Zwei Canva-Vorlagen für deinen Alltag: editierbar, druckbar und sofort einsatzbereit.</p>
          <div className="hero-actions">
            <a className="btn-primary" href={`mailto:${site.email}?subject=Produktivitäts-Set%20bestellen`}>
              Set anfragen <ArrowIcon />
            </a>
            <Link className="btn-text" href={resourceRoutes.tagesplaner}>Kostenlose PDF-Version →</Link>
          </div>
        </header>

        <section className="band tint-amber">
          <div className="band-head">
            <div>
              <span className="band-tag">Im Set enthalten</span>
              <h2 className="band-title">Struktur, <em>ohne Tool-Overhead</em></h2>
            </div>
          </div>
          <ul className="lines">
            <li>Canva-Vorlagen – vollständig individualisierbar.</li>
            <li>Übersicht für Termine, Aufgaben und Prioritäten.</li>
            <li>Minimalistisches, modernes Design.</li>
            <li>Auf Desktop und Tablet nutzbar oder direkt druckbar.</li>
          </ul>
        </section>

        <CloseCta>Mehr Fokus für <em>jeden Tag.</em></CloseCta>
        <SiteFooter />
      </div>
    </>
  );
}
