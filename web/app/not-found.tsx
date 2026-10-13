import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, ContactStrip } from "@/components/ui";
import { routes, serviceRoutes } from "@/lib/routes";
import { site } from "@/lib/site";

const einstiege = [
  { href: routes.home, b: "Startseite", small: "Was Pixel56 macht und für wen" },
  { href: "/dienstleistung", b: "Leistungen", small: "Webdesign, Ads, Content, KI" },
  { href: routes.projects, b: "Kundenprojekte", small: "Echte Arbeit mit Ausgangslage und Umsetzung" },
  { href: routes.blog, b: "Blog", small: "Antworten auf Fragen aus dem Erstgespräch" },
  { href: routes.locations, b: "Standorte", small: "Region Koblenz und deutschlandweit" },
  { href: routes.contact, b: "Kontakt", small: "Kostenloses Erstgespräch" },
];

export default function NotFound() {
  return (
    <main className="service-premium notfound-premium">
      <div className="sheet">
        <SiteNav crumb={{ section: "Fehler", page: "404" }} />
        <header className="service-premium-hero about-hero">
          <div className="service-premium-glow" aria-hidden="true" />
          <div className="service-premium-copy">
            <div className="premium-kicker">FEHLER 404 · SEITE NICHT GEFUNDEN</div>
            <h1>
              <span>Diese Seite</span>
              <span className="service-hero-accent">ist unsichtbar.</span>
              <span>Deine muss es nicht sein.</span>
            </h1>
            <p>
              Die angeforderte Adresse existiert nicht oder wurde verschoben.
              Vielleicht ein Tippfehler, vielleicht ein alter Link. Hier geht
              es weiter.
            </p>
            <div className="premium-actions">
              <Link className="btn-primary" href={routes.home}>
                Zur Startseite <ArrowIcon />
              </Link>
              <a className="btn-text" href={site.calendly} target="_blank" rel="noopener noreferrer">
                Oder direkt Erstgespräch buchen →
              </a>
            </div>
          </div>
          <div className="web-experience-board" aria-label="Wichtige Seiten">
            <div className="web-board-top">
              <span>PIXEL56 · ORIENTIERUNG</span>
              <i>404</i>
            </div>
            <div className="system-flow">
              {einstiege.slice(0, 4).map((e, index) => (
                <Link href={e.href} key={e.href} style={{ textDecoration: "none", color: "inherit" }}>
                  <span>{String(index + 1).padStart(2, "0")}</span><b>{e.b}</b><small>{e.small}</small>
                </Link>
              ))}
            </div>
            <div className="web-board-signals">
              <Link href={serviceRoutes.webdesign} style={{ textDecoration: "none", color: "inherit" }}><span>01</span><b>Webdesign</b><small>Websites</small></Link>
              <Link href={serviceRoutes["meta-ads"]} style={{ textDecoration: "none", color: "inherit" }}><span>02</span><b>Meta Ads</b><small>Kampagnen</small></Link>
              <Link href={routes.locations} style={{ textDecoration: "none", color: "inherit" }}><span>03</span><b>Standorte</b><small>Region</small></Link>
              <Link href={routes.contact} style={{ textDecoration: "none", color: "inherit" }}><span>04</span><b>Kontakt</b><small>Erstgespräch</small></Link>
            </div>
          </div>
        </header>
      </div>
      <div className="sheet service-ending">
        <ContactStrip />
        <SiteFooter />
      </div>
    </main>
  );
}
