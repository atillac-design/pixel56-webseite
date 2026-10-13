import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, CloseCta, ContactStrip, FaqList } from "@/components/ui";
import { resourceRoutes } from "@/lib/routes";
import { site } from "@/lib/site";

const canonical = "/product/tagesplaner-to-do-liste-set";

export const metadata: Metadata = {
  title: "Produktivitäts-Set: Tagesplaner und To-do-Liste",
  description:
    "Zwei editierbare Canva-Vorlagen für deinen Alltag: Tagesplaner und To-do-Liste. Druckbar, digital nutzbar und sofort einsatzbereit.",
  alternates: { canonical },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Produktivitäts-Set: Tagesplaner und To-do-Liste",
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

const inhalt = [
  { b: "Tagesplaner", small: "Drei Prioritäten, Zeitblöcke, Termine, Notizen und Übertrag auf morgen." },
  { b: "To-do-Liste", small: "Aufgaben sammeln, priorisieren, abhaken. Passend zum Tagesplaner gestaltet." },
  { b: "Canva-Vorlagen", small: "Vollständig anpassbar: Farben, Schrift, Felder, Logo." },
  { b: "Druck und Tablet", small: "Als PDF ausdrucken oder digital ausfüllen." },
];

const faqs = [
  { q: "Wie bekomme ich das Set?", a: "Schreib uns eine E-Mail mit dem Betreff „Produktivitäts-Set“. Wir melden uns mit den Details zu Zugang und Bezahlung, der Preis liegt bei 3,90 Euro." },
  { q: "Brauche ich einen Canva-Account?", a: "Zum Bearbeiten ja, ein kostenloser Canva-Account reicht. Zum reinen Ausdrucken bekommst du auch ein PDF." },
  { q: "Gibt es eine kostenlose Variante?", a: "Ja. Der Tagesplaner als festes PDF ist kostenlos auf unserer Ressourcen-Seite erhältlich." },
];

export default function ProduktivitaetsSetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="service-premium page-suite products-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Digitale Produkte", page: "Produktivitäts-Set" }} />
          <header className="service-premium-hero about-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">DIGITALES PRODUKT · 2 CANVA-VORLAGEN · 3,90 €</div>
              <h1>
                <span>Tagesplaner und</span>
                <span className="service-hero-accent">To-do-Liste.</span>
                <span>Editierbar, druckbar.</span>
              </h1>
              <p>
                Zwei Canva-Vorlagen für deinen Alltag: ein Blatt pro Tag mit
                Prioritäten und Zeitblöcken, dazu eine To-do-Liste. Anpassbar
                an deinen Betrieb, druckbar oder digital nutzbar.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={`mailto:${site.email}?subject=Produktivitäts-Set%20bestellen`}>
                  Set anfragen <ArrowIcon />
                </a>
                <Link className="btn-text" href={resourceRoutes.tagesplaner}>Kostenlose PDF-Version →</Link>
              </div>
              <div className="premium-proof" aria-label="Auf einen Blick">
                <span>3,90 € einmalig</span>
                <span>Canva, editierbar</span>
                <span>Druck und Tablet</span>
              </div>
            </div>
            <div className="web-experience-board" aria-label="Inhalt des Sets">
              <div className="web-board-top">
                <span>PIXEL56 · PRODUKTIVITÄTS-SET</span>
                <i>CANVA</i>
              </div>
              <div className="system-flow">
                {inhalt.map((item, index) => (
                  <div key={item.b}><span>{String(index + 1).padStart(2, "0")}</span><b>{item.b}</b><small>{item.small}</small></div>
                ))}
              </div>
            </div>
          </header>
        </div>

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="band theme-light" id="inhalt" style={{ paddingTop: 72 }}>
          <div className="split2 align-top">
            <div className="reveal">
              <span className="band-tag">01 — Im Set enthalten</span>
              <h2 className="band-title">
                Struktur, <em>ohne Tool-Overhead</em>
              </h2>
              <p className="lead">
                Kein Produktivitäts-System zum Studieren, sondern zwei Blätter,
                die morgens in zwei Minuten ausgefüllt sind. Dieselbe Logik wie
                unser kostenloser Tagesplaner, nur anpassbar.
              </p>
            </div>
            <div className="mini-grid reveal">
              {inhalt.map((item) => (
                <div key={item.b}><b>{item.b}</b><small>{item.small}</small></div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="faq">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Häufige Fragen</span>
              <h2 className="band-title">
                Bevor du <em>bestellst</em>
              </h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>
          </div>
        </div>

        <div className="sheet service-ending">
          <ContactStrip />
          <CloseCta>Mehr Fokus für <em>jeden Tag.</em></CloseCta>
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
