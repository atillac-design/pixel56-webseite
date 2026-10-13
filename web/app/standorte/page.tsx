import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, ClientMarquee, CloseCta, ContactStrip, FaqList, Reviews } from "@/components/ui";
import { site } from "@/lib/site";
import { regionStaedte, locationsOfCity } from "@/lib/standorte";
import Standortkarte, { type KartenOrt } from "@/components/Standortkarte";
import { getStandortLeistung } from "@/lib/standort-inhalte";
import { verifiedReviews } from "@/lib/verified-reviews";
import { locationPath, routes, serviceRoutes } from "@/lib/routes";
import koblenzImage from "@/public/bilder/koblenz-rhein.webp";

/** Ungefähre Koordinaten (Breite, Länge) nur für die schematische Karte. */
const koordinaten: Record<string, [number, number]> = {
  Bendorf: [50.4297, 7.5706],
  Koblenz: [50.3569, 7.589],
  Vallendar: [50.3985, 7.6153],
  Neuwied: [50.4286, 7.4604],
  Andernach: [50.4397, 7.4028],
  "Höhr-Grenzhausen": [50.436, 7.669],
  "Ransbach-Baumbach": [50.4537, 7.7281],
  Montabaur: [50.437, 7.8256],
  Lahnstein: [50.3, 7.6056],
  "Mülheim-Kärlich": [50.3878, 7.4956],
  Weissenthurm: [50.4164, 7.4556],
  Mayen: [50.3283, 7.2222],
  Limburg: [50.3856, 8.062],
};

export const metadata: Metadata = {
  title: "Standorte: Pixel56 rund um Koblenz",
  description:
    "Pixel56 aus Bendorf bei Koblenz: vor Ort in Koblenz, Neuwied, Andernach, Montabaur, Mayen und Limburg, per Video-Call in ganz Deutschland.",
  alternates: { canonical: routes.locations },
  openGraph: {
    title: "Pixel56 in deiner Stadt: Region Koblenz und deutschlandweit",
    description: "Webdesign, Google Ads, Meta Ads, SEO und Social Media für Betriebe im Einzugsgebiet von Bendorf bei Koblenz.",
    url: routes.locations,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${site.url}${routes.locations}#list`,
  name: "Standorte von Pixel56",
  itemListElement: regionStaedte.map((region, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: region.anzeige ?? region.stadt,
    url: `${site.url}${locationPath(locationsOfCity(region.stadt).find((l) => l.leistung === "Webdesign")?.slug ?? region.stadt.toLowerCase())}`,
  })),
};

const faqs = [
  { q: "Arbeitet ihr nur in der Region Koblenz?", a: "Nein. Der Sitz ist in Bendorf bei Koblenz, und im Einzugsgebiet kommen wir für Kennenlernen, Fotos und Drehs vorbei. Alles andere läuft per Video-Call, Telefon und WhatsApp, auch mit Kunden in anderen Bundesländern." },
  { q: "Meine Stadt steht nicht in der Liste. Was nun?", a: "Dann arbeiten wir ortsunabhängig zusammen. Die Liste zeigt nur die Städte, in denen wir regelmäßig vor Ort sind. Für Betriebe außerhalb ändert sich an Leistung und Ablauf nichts." },
  { q: "Kommt ihr für einen Drehtag in den Betrieb?", a: "Im Einzugsgebiet um Koblenz ohne Reisekosten. Weiter entfernt planen wir Drehtage nach Aufwand oder arbeiten mit Material, das du selbst aufnimmst." },
  { q: "Treffen wir uns persönlich?", a: "Gern, bei dir im Betrieb: zum Kennenlernen, für Fotos oder einen Dreh. Alles andere läuft per WhatsApp, E-Mail, Telefon oder Video-Call, so bleibt es für beide Seiten schnell. Ein Ladenlokal mit Wartezimmer haben wir nicht. Für ein erstes Kennenlernen ist der Termin über Calendly der einfachste Weg." },
];

export default function StandorteUebersicht() {
  const staedte = [...regionStaedte].sort((a, b) => a.entfernungKm - b.entfernungKm);
  const kartenOrte: KartenOrt[] = staedte.map((region) => {
    const koordinate = koordinaten[region.stadt];
    const seite = locationsOfCity(region.stadt).find((l) => l.leistung === "Webdesign") ?? locationsOfCity(region.stadt)[0];
    return {
      name: region.anzeige ?? region.stadt,
      lat: koordinate?.[0] ?? 50.43,
      lon: koordinate?.[1] ?? 7.57,
      km: region.entfernungKm,
      min: region.fahrzeitMin,
      href: seite ? locationPath(seite.slug) : "#region",
      sitz: region.entfernungKm === 0,
    };
  });
  const leistungen = ["Webdesign", "Google Ads", "Meta Ads", "SEO", "Social-Media Betreuung"];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="service-premium location-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Pixel56", page: "Standorte" }} />

          <header className="service-premium-hero about-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">STANDORTE · REGION KOBLENZ · DEUTSCHLANDWEIT</div>
              <h1>
                <span>Vor Ort in der Region.</span>
                <span className="service-hero-accent">Per Video-Call überall.</span>
                <span>Ein Ansprechpartner.</span>
              </h1>
              <p>
                Pixel56 sitzt in Bendorf, direkt vor den Toren von Koblenz. In
                der Region kommen wir für Kennenlernen, Fotos und Drehs zu dir
                in den Betrieb. Für alle anderen Städte läuft die Zusammenarbeit
                per Video-Call, Telefon und WhatsApp, genauso verbindlich.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Kostenloses Erstgespräch <ArrowIcon />
                </a>
                <Link className="btn-text" href="#region">
                  Städte in der Region ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="Einzugsgebiet">
                <span>{staedte.length} Städte im Einzugsgebiet</span>
                <span>Vor-Ort-Drehs ohne Reisekosten</span>
                <span>Deutschlandweit per Video-Call</span>
              </div>
            </div>

            <div className="founder-visual about-hero-visual projects-hero-visual reveal">
              <div className="founder-frame">
                <Image src={koblenzImage} alt="Koblenz am Rhein, wenige Minuten von Bendorf, der Heimat von Pixel56" priority sizes="(max-width: 1080px) 92vw, 520px" />
              </div>
              <span>// KOBLENZ · DEUTSCHES ECK · 10 KM VON BENDORF</span>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="Standorte auf einen Blick">
          <div>
            <span>Sitz</span>
            <strong>Bendorf bei Koblenz</strong>
          </div>
          <div>
            <span>Einzugsgebiet</span>
            <strong>Koblenz, Neuwied, Westerwald, Rhein-Lahn, Eifelrand</strong>
          </div>
          <div>
            <span>Leistungen vor Ort</span>
            <strong>Webdesign, Google Ads, Meta Ads, SEO, Social Media</strong>
          </div>
          <div>
            <span>Darüber hinaus</span>
            <strong>Deutschlandweit per Video-Call</strong>
          </div>
        </section>

        <section className="band theme-light" id="region">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">01 — Städte im Einzugsgebiet</span>
              <h2 className="band-title">
                {staedte.length} Städte, <em>in denen wir vor Ort sind</em>
              </h2>
            </div>
            <p className="band-note">
              Sortiert nach Entfernung von Bendorf. Jede Stadt hat eigene Seiten
              für Webdesign, Google Ads, Meta Ads, SEO und Social Media.
            </p>
          </div>
          <div className="reveal">
            <Standortkarte orte={kartenOrte} />
          </div>
          <div className="audience-grid reveal">
            {staedte.map((region) => {
              const seiten = locationsOfCity(region.stadt);
              const name = region.anzeige ?? region.stadt;
              return (
                <article className="audience-card" key={region.stadt}>
                  <span>{region.entfernungKm === 0 ? "Unser Sitz" : `Rund ${region.entfernungKm} km · ${region.fahrzeitMin} Min.`}</span>
                  <h3>{name}</h3>
                  <p>{region.kontext}</p>
                  <small>
                    {leistungen.map((key, index) => {
                      const seite = seiten.find((s) => s.leistung === key);
                      if (!seite) return null;
                      return (
                        <span key={seite.slug}>
                          {index > 0 ? " · " : ""}
                          <Link href={locationPath(seite.slug)}>{getStandortLeistung(key).kurz}</Link>
                        </span>
                      );
                    })}
                  </small>
                </article>
              );
            })}
          </div>
        </section>

        <section className="band theme-light" id="sitz">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">02 — Der Sitz</span>
              <h2 className="band-title">
                Zuhause in Bendorf. <em>Unterwegs in der Region.</em>
              </h2>
              <p className="lead">
                Pixel56 arbeitet aus Bendorf bei Koblenz, ohne Ladenlokal:
                Kennenlernen per Video-Call oder bei dir im Betrieb. Koblenz liegt
                wenige Minuten entfernt, Neuwied, Montabaur und der Westerwald
                sind schnell erreicht.
              </p>
              <ul className="lines">
                <li>Vor-Ort-Dreh für Reels und Fotos im Einzugsgebiet ohne Reisekosten</li>
                <li>Kennenlernen per Video-Call oder bei dir im Betrieb, wie es dir besser passt</li>
                <li>Lokale Betriebe aus der Region Koblenz sind uns besonders vertraut</li>
                <li>
                  <Link href={routes.about}>Mehr über Pixel56</Link>
                </li>
              </ul>
            </div>
            <div className="mini-grid reveal" aria-label="Kontaktwege">
              <div><b>Telefon</b><small>{site.phone}, Mo bis Fr, direkt mit Atilla</small></div>
              <div><b>WhatsApp</b><small>Kurze Frage, schnelle Antwort, auch für Terminabsprachen</small></div>
              <div><b>Video-Call</b><small>Für Kennenlernen und Abstimmungen, egal wo du sitzt</small></div>
              <div><b>Vor Ort</b><small>Nach Terminabsprache in Bendorf oder bei dir im Betrieb</small></div>
            </div>
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="ueberall">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">03 — Außerhalb der Region</span>
              <h2 className="band-title">
                Deine Stadt steht nicht dabei? <em>Kein Problem.</em>
              </h2>
              <p className="lead">
                Viele unserer Kunden sitzen nicht in der Region Koblenz, sondern
                in anderen Bundesländern. Websites, Kampagnen, Content und
                KI-Prozesse entstehen ortsunabhängig, mit denselben festen
                Terminen und demselben Ansprechpartner.
              </p>
              <ul className="lines">
                <li>Erstgespräch und Abstimmungen per Video-Call oder Telefon</li>
                <li>Zwischenstände als Link, Feedback per WhatsApp oder E-Mail</li>
                <li>Drehtage und Workshops vor Ort nach Absprache und Aufwand</li>
              </ul>
            </div>
            <div className="reveal">
              <ul className="lines">
                <li><Link href={serviceRoutes.webdesign}>Webdesign für Unternehmen deutschlandweit</Link></li>
                <li><Link href={serviceRoutes["meta-ads"]}>Meta Ads für Kunden- und Mitarbeitergewinnung</Link></li>
                <li><Link href={serviceRoutes["google-ads"]}>Google Ads im Moment der Suche</Link></li>
                <li><Link href={serviceRoutes.seo}>SEO-Grundlagen und Sichtbarkeit</Link></li>
                <li><Link href={serviceRoutes["content-produktion"]}>Social Content und Reels</Link></li>
                <li><Link href={serviceRoutes["ki-automatisierung"]}>KI-Prozesse und Automatisierung</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="band theme-light light-reviews" id="stimmen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Kundenstimmen</span>
              <h2 className="band-title">
                Was Kunden <em>über die Zusammenarbeit sagen</em>
              </h2>
            </div>
            <p className="band-note">
              Wir zeigen nur Aussagen, die unsere Kunden so veröffentlicht haben.
            </p>
          </div>
          <Reviews reviews={verifiedReviews} items={verifiedReviews} />
        </section>

        <section className="band theme-light" id="faq">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">05 — Häufige Fragen</span>
              <h2 className="band-title">
                Fragen <em>zum Standort</em>
              </h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>

          </div>
        </div>

        <div className="sheet service-ending">
          <ContactStrip />
          <CloseCta>
            Lass uns über deine <em>Sichtbarkeit</em> sprechen.
          </CloseCta>
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
