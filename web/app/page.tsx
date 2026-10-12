import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowIcon,
  ClientMarquee,
  CloseCta,
  FaqList,
  Reviews,
} from "@/components/ui";
import { site } from "@/lib/site";
import { projectPath, routes, serviceRoutes } from "@/lib/routes";
import starkImage from "@/public/bilder/projekt-stark-ins-neue.webp";
import vanDenBergImage from "@/public/bilder/projekt-van-den-berg.webp";
import curlyAnnImage from "@/public/bilder/projekt-curlyann-1.webp";
import maTransporteImage from "@/public/bilder/projekt-ma-transporte.webp";
import gmDachdeckerImage from "@/public/bilder/projekt-gm-dachdecker.webp";
import oktayCoemertlerImage from "@/public/bilder/projekt-oktay-coemertler.webp";
import colakImage from "@/public/bilder/projekt-colak.webp";
import atillaImage from "@/public/bilder/team-atilla.webp";

export const metadata: Metadata = {
  title: {
    absolute: "Digitalagentur Koblenz: Webdesign, Ads, Content & KI | Pixel56",
  },
  description:
    "Pixel56 verbindet hochwertiges Webdesign, Meta Ads, Social Content, Reels und KI-Prozesse für Unternehmen — aus Koblenz, deutschlandweit im Einsatz.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#organization`,
      name: site.name,
      description:
        "Digitalagentur für Webdesign, Meta Ads, Social-Media-Content, Reels und KI-gestützte Prozesse.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hüttenstraße 100",
        postalCode: "56170",
        addressLocality: "Bendorf",
        addressRegion: "Rheinland-Pfalz",
        addressCountry: "DE",
      },
      telephone: site.phoneIntl,
      email: site.email,
      areaServed: [
        { "@type": "City", name: "Koblenz" },
        { "@type": "Country", name: "Deutschland" },
      ],
      url: site.url,
      logo: `${site.url}/bilder/logo-pixel56.webp`,
      knowsAbout: [
        "Webdesign",
        "Meta Ads",
        "Social-Media-Content",
        "Reels",
        "Video-Produktion",
        "KI-Automatisierung",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "de-DE",
    },
  ],
};

const coreServices = [
  {
    nr: "01",
    code: "WEB",
    title: "Webdesign",
    href: serviceRoutes.webdesign,
    text: "Individuelle Websites und Relaunches, die hochwertig aussehen, schnell laden und Besucher klar zur Anfrage führen.",
    tags: ["Strategie", "UX & Design", "Entwicklung", "SEO-Basis"],
    outcome: "Aus Besuchern wird Vertrauen.",
  },
  {
    nr: "02",
    code: "ADS",
    title: "Meta Ads",
    href: serviceRoutes["meta-ads"],
    text: "Facebook- und Instagram-Kampagnen für neue Kunden oder Bewerber — mit Creatives, Zielseite und sauberer Auswertung.",
    tags: ["Strategie", "Creatives", "Tracking", "Optimierung"],
    outcome: "Aus Aufmerksamkeit wird Nachfrage.",
  },
  {
    nr: "03",
    code: "REC",
    title: "Social Content & Reels",
    href: serviceRoutes["content-produktion"],
    text: "Du schickst uns Rohmaterial und wir schneiden es — oder wir drehen bei dir vor Ort und liefern fertige Reels, Fotos und Social Content.",
    tags: ["Videoschnitt", "Reels", "Vor-Ort-Dreh", "Social Assets"],
    outcome: "Aus Alltag wird markenstarker Content.",
  },
  {
    nr: "04",
    code: "AI",
    title: "KI-Prozesse & Automatisierung",
    href: serviceRoutes["ki-automatisierung"],
    text: "Wir finden wiederkehrende Arbeit, strukturieren Wissen und bauen sinnvolle KI-Workflows, die zu deinem Unternehmen passen.",
    tags: ["Prozessanalyse", "KI-Assistenten", "Workflows", "Integration"],
    outcome: "Aus Routine wird Zeitgewinn.",
  },
];

type CaseItem = {
  customer: string;
  title: string;
  tags: string;
  href: string;
  image: StaticImageData;
  className?: string;
};

const cases: CaseItem[] = [
  {
    customer: "Stark ins Neue gGmbH",
    title: "Website, Landingpage und Kampagnen als zusammenhängendes System",
    tags: "WEBDESIGN · META ADS · LANDINGPAGE",
    href: projectPath("stark-ins-neue"),
    image: starkImage,
    className: "work-card-wide",
  },
  {
    customer: "CurlyAnn Atelier",
    title: "Ein digitaler Auftritt mit eigener visueller Handschrift",
    tags: "STRATEGIE · WEBDESIGN · BUCHUNG",
    href: projectPath("curlyann"),
    image: curlyAnnImage,
    className: "work-card-tall",
  },
  {
    customer: "Van den Berg Gruppe",
    title: "Laufende Meta-Ads-Betreuung statt kurzfristigem Kampagnenfeuer",
    tags: "META ADS · TRACKING · OPTIMIERUNG",
    href: projectPath("van-den-berg"),
    image: vanDenBergImage,
  },
  {
    customer: "M&A Transporte",
    title: "Website und Social Media seit Jahren aus einer Hand",
    tags: "WEBDESIGN · SOCIAL CONTENT · BETREUUNG",
    href: projectPath("ma-transporte"),
    image: maTransporteImage,
  },
  {
    customer: "GM-Dachdecker Meisterbetrieb",
    title: "Ein klarer digitaler Auftritt für das Dachdeckerhandwerk",
    tags: "WEBDESIGN · HANDWERK · SICHTBARKEIT",
    href: projectPath("gm-dachdecker"),
    image: gmDachdeckerImage,
    className: "work-card-compact",
  },
  {
    customer: "Oktay Cömertler",
    title: "Eine starke Marke für Abbruch, Tief- und Kanalbau",
    tags: "BRANDING · WEBDESIGN · BAU",
    href: projectPath("oktay-coemertler"),
    image: oktayCoemertlerImage,
    className: "work-card-compact",
  },
  {
    customer: "Colak GmbH",
    title: "Digitale Präsenz mit Charakter und Wiedererkennung",
    tags: "WEBDESIGN · MARKENAUFTRITT",
    href: projectPath("colak-gmbh"),
    image: colakImage,
    className: "work-card-compact",
  },
];

const processSteps = [
  { nr: "01", title: "Zuhören", text: "Wir klären Ziel, Engpass, Zielgruppe und was heute bereits vorhanden ist." },
  { nr: "02", title: "Schärfen", text: "Angebot, Botschaft, Kanäle und ein realistischer Umfang werden eindeutig." },
  { nr: "03", title: "Umsetzen", text: "Design, Content, Kampagne oder Workflow entstehen in kurzen, sichtbaren Etappen." },
  { nr: "04", title: "Verbessern", text: "Nach dem Start lernen wir aus echten Reaktionen und entwickeln gezielt weiter." },
];

const reviews = [
  {
    text: "Endlich zeigen sich unsere Kurse auch online. Die Zusammenarbeit ist unkompliziert und auf Augenhöhe — man merkt, dass hier jemand mitdenkt.",
    who: "Margarita Wolf · Stark ins Neue",
    img: "/bilder/person-margarita-wolf.webp",
  },
  {
    text: "Seit Jahren derselbe Ansprechpartner, immer erreichbar, alles aus einer Hand — Website, Content, Kampagnen. Das findet man selten.",
    who: "Mithat Akgün · M&A Transporte",
    img: "/bilder/person-mithat-akguen.webp",
  },
  {
    text: "Wir haben nicht mehr Budget verbrannt. Wir haben konstant gearbeitet — und das hat gereicht.",
    who: "Van den Berg Gruppe",
  },
];

const faqs = [
  {
    q: "Muss ich alle Leistungen zusammen buchen?",
    a: "Nein. Du kannst mit einer einzelnen Leistung starten — zum Beispiel einer neuen Website, dem Schnitt vorhandener Videos oder einer Meta-Ads-Kampagne. Wenn mehrere Bausteine sinnvoll zusammenarbeiten, zeigen wir dir den Zusammenhang, ohne daraus ein unnötig großes Paket zu machen.",
  },
  {
    q: "Könnt ihr Reels nur aus vorhandenem Videomaterial schneiden?",
    a: "Ja. Du kannst uns dein Rohmaterial schicken und wir übernehmen Auswahl, Schnitt, Untertitel, Musik und Formatierung. Wenn dir eigenes Material fehlt, planen wir alternativ einen Vor-Ort-Termin und produzieren die Aufnahmen bei dir im Unternehmen.",
  },
  {
    q: "Kommt ihr für Content-Produktionen auch vor Ort?",
    a: "Ja. In der Region Koblenz und nach Absprache auch darüber hinaus produzieren wir Fotos, Interviews, Reels und weiteres Material direkt im Betrieb. Anfahrt und Produktionsumfang werden vorab transparent im Angebot festgehalten.",
  },
  {
    q: "Was versteht ihr unter KI-Prozessen?",
    a: "Gemeint sind konkrete Abläufe, bei denen KI sinnvoll Zeit spart: Informationen strukturieren, Entwürfe vorbereiten, Anfragen vorsortieren, interne Wissensassistenten aufbauen oder wiederkehrende Schritte miteinander verbinden. Wir beginnen beim Prozess, nicht bei einem beliebigen KI-Tool.",
  },
  {
    q: "Macht Pixel56 auch SEO?",
    a: "Ja, vor allem als Fundament einer neuen Website: saubere Technik, Struktur, Metadaten, interne Links, Inhalte und eine sichere URL-Migration. Laufende SEO-Betreuung bieten wir gezielt an, sie ist aber nicht die Hauptleistung von Pixel56.",
  },
  {
    q: "Wie startet eine Zusammenarbeit?",
    a: "Mit einem kurzen, kostenlosen Gespräch. Danach bekommst du eine klare Empfehlung, welche Leistung zuerst den größten Hebel hat, welchen Umfang sie braucht und was sie kostet. Erst dann entscheidest du.",
  },
  {
    q: "Wer liefert Texte, Bilder und Videos für eine neue Website?",
    a: "Wir sichten zuerst, was bereits vorhanden ist. Fehlende Texte und Motive planen wir gemeinsam; Content-Produktion oder Schnitt können wir übernehmen. Echte Projektbilder setzen wir nur mit passenden Nutzungsrechten ein.",
  },
  {
    q: "Könnt ihr meine bisherigen Webseiten-Links erhalten?",
    a: "Ja. Vor einem Relaunch erfassen wir bestehende URLs und erhalten sie nach Möglichkeit. Wenn sich ein Pfad ändern muss, planen wir eine passende dauerhafte Weiterleitung und kontrollieren sie nach dem Start.",
  },
  {
    q: "Gibt es feste Pakete oder eine individuelle Lösung?",
    a: "Der Umfang richtet sich nach deinem Ziel und dem vorhandenen Material. Du bekommst vor der Umsetzung ein Angebot mit klaren Leistungen; Werbebudget und laufende Betreuung werden separat ausgewiesen.",
  },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="home-premium">
        <div className="sheet">
          <SiteNav />

          <header className="premium-hero">
            <div className="premium-hero-glow" aria-hidden="true" />
            <div className="premium-hero-copy">
              <div className="premium-kicker">DIGITALAGENTUR · KOBLENZ · DEUTSCHLANDWEIT</div>
              <h1>
                <span>Websites.</span>
                <span>Kampagnen.</span>
                <span className="premium-accent">Content. KI.</span>
                <span>Als System.</span>
              </h1>
              <p>
                Pixel56 verbindet hochwertiges Webdesign, Meta Ads, Reels,
                Social Content und KI-Prozesse zu einem digitalen Auftritt,
                der Vertrauen aufbaut und neue Möglichkeiten schafft.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Projekt kostenlos besprechen <ArrowIcon />
                </a>
                <Link className="btn-text" href="#arbeiten">
                  Ausgewählte Arbeiten ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="Pixel56 auf einen Blick">
                <span>Seit 2018</span>
                <span>Bendorf bei Koblenz</span>
                <span>Persönlich geführt</span>
              </div>
            </div>

            <div className="capability-board" aria-label="Kernleistungen von Pixel56">
              <div className="capability-grid" aria-hidden="true" />
              <div className="capability-core" aria-hidden="true">
                <Image src="/bilder/logo-pixel56.webp" alt="" width={104} height={45} />
              </div>
              {coreServices.map((service, index) => (
                <Link
                  className={`capability-chip capability-chip-${index + 1}`}
                  href={service.href}
                  key={service.code}
                >
                  <span>{service.code}</span>
                  <strong>{service.title}</strong>
                  <small>{service.outcome}</small>
                </Link>
              ))}
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell" id="editorial">
          <div className="sheet">
          <section className="premium-statement band reveal theme-light light-opening">
            <span className="band-tag">01 — Die Idee hinter Pixel56</span>
            <p>
              Dein Unternehmen braucht nicht noch mehr einzelne Tools oder
              Dienstleister. Es braucht einen digitalen Auftritt, bei dem
              <em> Gestaltung, Reichweite, Content und Prozesse </em>
              zusammenarbeiten.
            </p>
          </section>

          <section className="band theme-light light-services" id="leistungen">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">02 — Kernleistungen</span>
                <h2 className="band-title">
                  Vier Disziplinen. <em>Ein hoher Anspruch.</em>
                </h2>
              </div>
              <p className="band-note">
                Jede Leistung funktioniert eigenständig. Richtig stark wird sie,
                wenn Botschaft, Gestaltung und Ausspielung zusammenpassen.
              </p>
            </div>

            <div className="premium-services reveal">
              {coreServices.map((service) => (
                <Link className="premium-service-card" href={service.href} key={service.code}>
                  <div className="premium-service-top">
                    <span>{service.nr}</span>
                    <i>{service.code}</i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul aria-label={`Bausteine von ${service.title}`}>
                    {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <div className="premium-service-outcome">
                    {service.outcome} <ArrowIcon />
                  </div>
                </Link>
              ))}
            </div>

            <div className="supporting-services reveal">
              <span>Je nach Ziel ergänzen wir:</span>
              <Link href={serviceRoutes["landingpages-funnels"]}>Landingpages &amp; Funnels</Link>
              <Link href={serviceRoutes.mitarbeitergewinnung}>Mitarbeitergewinnung</Link>
              <Link href={serviceRoutes["google-ads"]}>Google Ads</Link>
              <Link href={serviceRoutes.seo}>SEO-Grundlagen</Link>
            </div>
          </section>

          <section className="band system-section dark-stage" id="system">
            <div className="split2">
              <div className="reveal">
                <span className="band-tag">03 — Nicht nur Einzelmaßnahmen</span>
                <h2 className="band-title">
                  Ein System, das <em>miteinander arbeitet</em>
                </h2>
                <p className="lead">
                  Eine starke Website ohne Besucher bleibt unsichtbar. Werbung
                  ohne gute Zielseite verbrennt Potenzial. Content ohne klare
                  Marke bleibt beliebig. Und ein voller Posteingang ohne Prozess
                  kostet Zeit.
                </p>
                <p className="lead">
                  Deshalb denken wir vom Ergebnis rückwärts und verbinden nur
                  die Bausteine, die dein Unternehmen tatsächlich braucht.
                </p>
              </div>
              <div className="system-flow reveal" aria-label="Zusammenspiel der Leistungen">
                <div><span>01</span><b>Klarer Auftritt</b><small>Webdesign &amp; Positionierung</small></div>
                <div><span>02</span><b>Relevanter Content</b><small>Reels, Fotos &amp; Creatives</small></div>
                <div><span>03</span><b>Gezielte Reichweite</b><small>Meta Ads &amp; Kampagnen</small></div>
                <div><span>04</span><b>Smarte Abläufe</b><small>KI-Prozesse &amp; Automatisierung</small></div>
              </div>
            </div>
          </section>

          <section className="band theme-light light-work" id="arbeiten">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">04 — Ausgewählte Arbeiten</span>
                <h2 className="band-title">
                  Die Qualität zeigt sich <em>im echten Projekt</em>
                </h2>
              </div>
              <p className="band-note">
                Unterschiedliche Branchen, unterschiedliche Aufgaben — aber
                immer ein Auftritt, der zum Unternehmen passt.
              </p>
            </div>

            <div className="premium-work-grid reveal">
              {cases.map((item) => (
                <Link className={`premium-work-card ${item.className ?? ""}`} href={item.href} key={item.customer}>
                  <div className="premium-work-image">
                    <Image src={item.image} alt={`${item.customer}: ${item.title}`} fill sizes="(max-width: 800px) 100vw, 50vw" />
                  </div>
                  <div className="premium-work-copy">
                    <span>{item.tags}</span>
                    <h3>{item.title}</h3>
                    <p>{item.customer}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="section-link-row reveal">
              <Link className="body-link" href={routes.projects}>
                Alle Kundenprojekte ansehen <ArrowIcon />
              </Link>
            </div>
          </section>

          <section className="band founder-section theme-light light-founder">
            <div className="founder-visual reveal">
              <div className="founder-frame">
                <Image src={atillaImage} alt="Atilla Ciftcioglu, Gründer von Pixel56" sizes="(max-width: 900px) 100vw, 42vw" />
              </div>
              <span>// GRÜNDER · STRATEGIE · UMSETZUNG</span>
            </div>
            <div className="founder-copy reveal">
              <span className="band-tag">05 — Persönlich geführt</span>
              <h2 className="band-title">
                Kleine Struktur. <em>Hoher Anspruch.</em>
              </h2>
              <p className="lead">
                Pixel56 ist bewusst persönlich aufgebaut. Du sprichst nicht mit
                einem Vertriebsteam, das dein Projekt anschließend weiterreicht,
                sondern direkt mit den Menschen, die Strategie und Umsetzung
                verantworten.
              </p>
              <ul className="premium-list">
                <li>Direkte Kommunikation und kurze Entscheidungen</li>
                <li>Ein einheitlicher Qualitätsanspruch über alle Leistungen</li>
                <li>Ein Netzwerk aus Spezialisten, wenn ein Projekt es braucht</li>
                <li>Betreuung auch nach Veröffentlichung oder Kampagnenstart</li>
              </ul>
              <Link className="body-link" href={routes.about}>
                Pixel56 kennenlernen <ArrowIcon />
              </Link>
            </div>
          </section>

          <section className="band dark-stage dark-process" id="ablauf">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">06 — Zusammenarbeit</span>
                <h2 className="band-title">
                  Klarer Prozess. <em>Keine Blackbox.</em>
                </h2>
              </div>
            </div>
            <div className="premium-process reveal">
              {processSteps.map((step) => (
                <article key={step.nr}>
                  <span>{step.nr}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="band theme-light light-reviews" id="bewertungen">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">07 — Kundenstimmen</span>
                <h2 className="band-title">
                  Vertrauen entsteht durch <em>Zusammenarbeit</em>
                </h2>
              </div>
            </div>
            <Reviews reviews={reviews} />
          </section>

          <section className="band theme-light light-faq">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">08 — Häufige Fragen</span>
                <h2 className="band-title">
                  Was vor dem Start <em>wichtig ist</em>
                </h2>
              </div>
            </div>
            <FaqList items={faqs} />
          </section>

          </div>
        </div>

        <div className="sheet home-ending">
          <CloseCta ctaLabel="Projekt kostenlos besprechen">
            Lass uns etwas bauen, das <em>nach vorne aussieht.</em>
          </CloseCta>

          <SiteFooter />
        </div>
      </main>
    </>
  );
}
