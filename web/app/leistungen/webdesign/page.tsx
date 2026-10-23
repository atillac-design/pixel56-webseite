import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import DetailReihe, { weitereDetails } from "@/components/DetailReihe";
import BreadcrumbLd from "@/components/BreadcrumbLd";
import RegionLinks from "@/components/RegionLinks";
import WebsiteCheck from "@/components/WebsiteCheck";
import {
  ArrowIcon,
  ClientMarquee,
  CloseCta,
  ContactStrip,
  FaqList,
  RefCard,
  Reviews,
  StatusPanel,
  Stepper,
  WaMock,
  type RefItem,
} from "@/components/ui";
import { site } from "@/lib/site";
import { getFallstudie } from "@/lib/projekte";
import { verifiedProjectVoices, verifiedReviews } from "@/lib/verified-reviews";
import { projectPath, routes, serviceRoutes } from "@/lib/routes";
import gmDachdeckerImage from "@/public/bilder/projekt-gm-dachdecker.webp";
import LeistungsAnfrage from "@/components/LeistungsAnfrage";
import { frageboegen } from "@/lib/fragebogen";
import { googleAnzahlLautProfil, googleBewertungLautProfil } from "@/lib/google-bewertungen";

export const metadata: Metadata = {
  title: "Webdesign Koblenz: Websites, die Anfragen bringen",
  description:
    "Individuelle Websites für Unternehmen in Koblenz und deutschlandweit: klare Struktur, Texte mit Suchintention, schnelle Technik, Relaunch ohne Verlust.",
  alternates: { canonical: serviceRoutes.webdesign },
  openGraph: {
    title: "Webdesign Agentur Koblenz: Websites, die Anfragen bringen | Pixel56",
    description:
      "Websites für kleine und mittelständische Unternehmen, die Vertrauen aufbauen und Aufträge bringen. Pixel56 aus Koblenz, deutschlandweit und in der DACH-Region.",
    url: serviceRoutes.webdesign,
  },
};

const serviceUrl = `${site.url}${serviceRoutes.webdesign}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: "Webdesign für Unternehmen und Selbstständige",
      serviceType: "Webdesign, Website-Relaunch und Landingpages",
      description:
        "Strategisches Webdesign für Unternehmen und Selbstständige: Konzeption, Texte, individuelles Design, technische Entwicklung, SEO-Grundlagen, sichere URL-Migration und Betreuung.",
      url: serviceUrl,
      provider: {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        telephone: site.phoneIntl,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Hüttenstraße 100",
          postalCode: "56170",
          addressLocality: "Bendorf",
          addressRegion: "Rheinland-Pfalz",
          addressCountry: "DE",
        },
      },
      areaServed: [
        { "@type": "City", name: "Koblenz" },
        { "@type": "AdministrativeArea", name: "Rheinland-Pfalz" },
        { "@type": "Country", name: "Deutschland" },
      ],
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Unternehmen aller Branchen und Selbstständige",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Webdesign-Leistungen",
        itemListElement: [
          "Strategie und Seitenstruktur",
          "Texte mit Suchintention",
          "Individuelles Webdesign",
          "Responsive Entwicklung",
          "Technisches SEO und Performance",
          "Relaunch mit URL-Migration",
          "Wartung und Betreuung",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: site.url },
        { "@type": "ListItem", position: 2, name: "Leistungen", item: `${site.url}/dienstleistung` },
        { "@type": "ListItem", position: 3, name: "Webdesign", item: serviceUrl },
      ],
    },
  ],
};

const statusRows = [
  { label: "Viele Besucher, kaum Anfragen", tag: "Conversion" },
  { label: "Bei Google nicht sichtbar", tag: "SEO" },
  { label: "Auf dem Handy mühsam", tag: "Mobil" },
  { label: "Austauschbare Baukasten-Optik", tag: "Marke" },
  { label: "Leistungen bleiben unklar", tag: "Inhalt" },
  { label: "Änderungen dauern Wochen", tag: "Betreuung" },
];

const projectTypes = [
  {
    tag: "Unternehmenswebsite",
    title: "Der komplette Auftritt",
    text: "Startseite, Leistungen, Über uns, Referenzen, Kontakt. Für Betriebe, die online so professionell wirken wollen, wie sie arbeiten.",
    refs: "M&A Transporte · Colak GmbH · MDU Bedachungen",
  },
  {
    tag: "Relaunch",
    title: "Bestehende Website erneuern",
    text: "Was funktioniert, bleibt. Der Rest wird neu. Adressen und Rankings nehmen wir mit, damit der Neustart keine Sichtbarkeit kostet.",
    refs: "Stark ins Neue · Lernforum Obertshausen",
  },
  {
    tag: "Landingpage",
    title: "Eine Seite, ein Ziel",
    text: "Eine Seite, ein Angebot, ein nächster Schritt. Für Kampagnen bei Google oder Meta, die nicht auf der Startseite verpuffen sollen.",
    refs: "Stark ins Neue · Van den Berg Gruppe",
  },
  {
    tag: "Karriereseite",
    title: "Bewerber gewinnen",
    text: "Einblick in den Betrieb und Bewerbung in zwei Minuten vom Handy, mit Upload statt E-Mail.",
    refs: "GM-Dachdecker",
  },
  {
    tag: "Onlineshop",
    title: "Produkte verkaufen",
    text: "Klare Produktdarstellung, schneller Checkout, Anbindung an Zahlung, Versand und Bestand.",
    refs: "Cavar Home",
  },
  {
    tag: "Marke & Website",
    title: "Auftritt von Grund auf",
    text: "Logo, Farben, Bildsprache und Website entstehen zusammen, damit nichts zusammengestückelt wirkt.",
    refs: "Oktay Cömertler · DEMA Bedachungen",
  },
];

const scope = [
  {
    nr: "01",
    title: "Strategie & Seitenstruktur",
    text: "Erst Zielgruppen, Leistungen und Suchabsichten. Dann eine Struktur, in der jede Seite eine Aufgabe hat.",
  },
  {
    nr: "02",
    title: "Texte mit Suchintention",
    text: "Antworten auf echte Kundenfragen. Verständlich für Menschen, eindeutig für Google.",
  },
  {
    nr: "03",
    title: "Individuelles Webdesign",
    text: "Ein Auftritt, der zu dir passt und nicht bei fünf anderen genauso aussieht.",
  },
  {
    nr: "04",
    title: "Schnelle, saubere Technik",
    text: "Kurze Ladezeiten, sauber auf jedem Gerät. Formulare, Buchung und Upload funktionieren zuverlässig.",
  },
  {
    nr: "05",
    title: "SEO-Basis & Relaunch-Sicherung",
    text: "Metadaten, Links, strukturierte Daten. Beim Relaunch ein vollständiges URL-Inventar mit Weiterleitungen.",
  },
  {
    nr: "06",
    title: "Messung & Betreuung",
    text: "Du siehst, was ankommt. Nach dem Start bleiben wir erreichbar für Änderungen und Pflege.",
  },
];


const relaunchSteps = [
  { title: "URL-Inventar", text: "Alle bestehenden Adressen, auch die, die nur Google noch kennt." },
  { title: "Bewertung nach Daten", text: "Welche Seiten bringen Klicks, welche sind Ballast? Die Search Console entscheidet, nicht das Bauchgefühl." },
  { title: "Pfade erhalten", text: "Alte Adresse bleibt neue Adresse. Wo nicht, gibt es eine dauerhafte Weiterleitung." },
  { title: "Kontrolle nach dem Launch", text: "Indexierung, Weiterleitungen, Sitemap und Fehlerseiten werden geprüft. Erst dann ist der Relaunch fertig." },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Analyse", text: "Was leistet die heutige Seite, wo verliert sie Anfragen? Ziele, Zielgruppen, Daten." },
  { nr: "02", tag: "Phase 2", title: "Struktur & Text", text: "Du siehst die Texte, bevor das Design entsteht. Jede Seite bekommt eine Aufgabe." },
  { nr: "03", tag: "Phase 3", title: "Design", text: "Entwürfe früh, Feedback direkt. Die Marke wird wiedererkennbar." },
  { nr: "04", tag: "Phase 4", title: "Technik & SEO", text: "Entwicklung, Ladezeit, Tracking und URL-Migration, getestet auf echten Geräten." },
  { nr: "05", tag: "Phase 5", title: "Launch & Betreuung", text: "Live nach dem Qualitätscheck. Danach messen und gezielt weiterentwickeln." },
];

const afterLaunch = [
  { title: "Einweisung", text: "Ein Redaktionssystem für Texte, Bilder und Referenzen, plus kurze Einweisung." },
  { title: "Pflege & Updates", text: "Oder wir übernehmen alles. Ohne Ticketsystem, per WhatsApp oder Mail." },
  { title: "Messung", text: "Anfragen und Sichtbarkeit nachvollziehbar, DSGVO-konform." },
  { title: "Weiterentwicklung", text: "Neue Leistung, Landingpage, Karriereseite: Die Website wächst mit, statt nach zwei Jahren von vorn zu starten." },
];

const referenzen: RefItem[] = [
  { variant: "ic-4", barWidth: 55, img: "/bilder/projekt-gm-dachdecker.webp", href: projectPath("gm-dachdecker"), cat: "GM-Dachdecker Meisterbetrieb", title: "Website und Karriereportal für das Handwerk", text: "Neue Website inklusive Karriereportal: Bewerber laden ihre Unterlagen direkt hoch, ohne E-Mail und ohne Umweg.", tag: "Webdesign · Karriereportal · 2023" },
  { variant: "ic-3", barWidth: 60, img: "/bilder/projekt-stark-ins-neue-2.webp", href: projectPath("stark-ins-neue"), cat: "Stark ins Neue gGmbH", title: "Landingpage, die zur Kursanmeldung führt", text: "Fokussierte Anmeldestrecke für eine Bildungsinitiative, abgestimmt auf die begleitenden Meta-Ads-Kampagnen.", tag: "Webdesign · Landingpage · 2025" },
  { variant: "ic-1", barWidth: 48, img: "/bilder/projekt-oktay-coemertler.webp", href: projectPath("oktay-coemertler"), cat: "Oktay Cömertler", title: "Marke und Website aus einem Guss", text: "Branding und Webdesign für Abbruch, Tief- und Kanalbau auf Basis einer Markt- und Unternehmensanalyse.", tag: "Branding · Webdesign · 2018–2023" },
  { variant: "ic-2", barWidth: 70, img: "/bilder/projekt-ma-transporte.webp", href: projectPath("ma-transporte"), cat: "M&A Transporte", title: "Spezialleistungen verständlich gemacht", text: "Eine klar strukturierte Leistungswebsite, die seit 2019 gemeinsam mit Social-Media-Content gepflegt wird.", tag: "Webdesign · Social Media · seit 2019" },
];

const faqs = [
  { q: "Was kostet eine Website bei Pixel56?", a: "Das hängt von Umfang, Texten, Funktionen und Material ab. Eine Landingpage ist der günstigste Einstieg, eine Unternehmenswebsite liegt in der Mitte, Auftritte mit Karriereportal oder Shop darüber. Nach dem Erstgespräch bekommst du ein Angebot mit klar abgegrenztem Umfang, keine offene Stundenabrechnung." },
  { q: "Wie lange dauert es?", a: "Eine Unternehmenswebsite ist meist in vier bis zehn Wochen online. Viele Inhalte, Schnittstellen oder lange Freigaben verlängern das. Du bekommst zu Beginn einen Plan mit Terminen für deine Entscheidungen." },
  { q: "Was brauche ich, um zu starten?", a: "Ein Ziel und 15 Minuten. Logo, Texte und Bilder helfen, sind aber keine Voraussetzung. Fehlendes Material planen wir gemeinsam, Fotos und Videos drehen wir bei dir im Betrieb." },
  { q: "Verliere ich beim Relaunch meine Google-Rankings?", a: "Nicht, wenn er sauber vorbereitet ist. Wir erfassen alle Adressen, übernehmen sie möglichst unverändert und leiten geänderte Pfade dauerhaft weiter. Nach dem Start prüfen wir Indexierung, Sitemap und Fehlerseiten." },
  { q: "Kann ich Inhalte später selbst ändern?", a: "Ja. Du bekommst ein Redaktionssystem und eine Einweisung. Wenn du die Pflege lieber abgibst, übernehmen wir Updates und Betreuung." },
  { q: "Ist eine individuelle Website besser als ein Baukasten?", a: "Nicht automatisch. Für sehr einfache Anforderungen reicht ein Baukasten. Individuell lohnt sich, wenn Positionierung, mehrere Leistungen, Sichtbarkeit bei Google oder messbare Anfragen wichtig sind. Im Erstgespräch sagen wir dir ehrlich, was bei dir passt." },
];

const webVoices = [
  verifiedProjectVoices["gm-dachdecker"],
  verifiedProjectVoices["cass-schulungen"],
  verifiedReviews[1],
];

const spotlight = getFallstudie("gm-dachdecker");
const spotlightVoice = verifiedProjectVoices["gm-dachdecker"];

export default function WebdesignPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbLd items={[{ name: "Leistungen", href: "/dienstleistung" }, { name: "Webdesign", href: serviceRoutes.webdesign }]} />

      <main className="service-premium webdesign-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Leistungen", page: "Webdesign" }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">WEBDESIGN FÜR KLEINE UND MITTELSTÄNDISCHE UNTERNEHMEN · DEUTSCHLANDWEIT · DACH-REGION</div>
              <h1>
                <span>Eine Website, die</span>
                <span className="service-hero-accent">Aufträge bringt.</span>
                <span>Nicht nur gefällt.</span>
              </h1>
              <p>
                Deine Kunden googeln dich, bevor sie anrufen. Wir bauen die
                Seite, die diesen Moment gewinnt: klare Struktur, Texte, die
                gefunden werden, schnelle Technik. Beim Relaunch nehmen wir
                deine Rankings mit.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Website-Projekt besprechen <ArrowIcon />
                </a>
                <Link className="btn-text" href="#referenzen">
                  Ausgewählte Websites ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="Webdesign-Leistungen auf einen Blick">
                <span>Individuelles Design</span>
                <span>Technik, die schnell lädt</span>
                <span>Relaunch ohne Rankingverlust</span>
                <span>Ein Ansprechpartner</span>
              </div>
            </div>

            <div className="web-experience-board" aria-label="Darstellung eines klaren, anfrageorientierten Webauftritts">
              <div className="web-board-top">
                <span>PIXEL56 · WEB EXPERIENCE</span>
                <i>LIVE</i>
              </div>
              <div className="web-browser-stage">
                <div className="web-browser-bar" aria-hidden="true">
                  <span /><span /><span />
                  <b>deine-marke.de</b>
                </div>
                <div className="web-browser-content">
                  <small>KLARER AUFTRITT · KLARER NÄCHSTER SCHRITT</small>
                  <strong>Deine Leistung.<br />Auf den Punkt.</strong>
                  <div className="web-browser-lines" aria-hidden="true"><i /><i /><i /></div>
                  <em>Projekt anfragen →</em>
                </div>
              </div>
              <div className="web-board-signals">
                <div><span>01</span><b>Marke</b><small>eigenständig</small></div>
                <div><span>02</span><b>Technik</b><small>schnell</small></div>
                <div><span>03</span><b>SEO</b><small>sauber</small></div>
                <div><span>04</span><b>Anfragen</b><small>messbar</small></div>
              </div>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="Webdesign auf einen Blick">
          <div>
            <span>Für wen</span>
            <strong>Kleine und mittelständische Unternehmen</strong>
          </div>
          <div>
            <span>Region</span>
            <strong>Deutschlandweit · DACH</strong>
          </div>
          <div>
            <span>Geeignet für</span>
            <strong>Neue Websites, Relaunches, Landingpages</strong>
          </div>
          <div>
            <span>Ziel</span>
            <strong>Mehr passende Anfragen</strong>
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="status">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">01 — Ausgangslage</span>
              <h2 className="band-title">
                Wenn die Website gut aussieht, aber <em>nicht verkauft</em>
              </h2>
              <p className="lead">
                Deine Kunden googeln dich, bevor sie anrufen. In drei Sekunden
                entscheiden sie, ob du der Richtige bist. Fehlt die Klarheit,
                klicken sie weiter, auch wenn deine Arbeit besser ist.
              </p>
              <p className="lead">
                Die wenigsten Websites scheitern am Design. Sie scheitern daran,
                dass niemand entschieden hat, was die Seite erreichen soll.
              </p>
            </div>
            <div className="reveal">
              <StatusPanel head="Typische Bremsen im Webauftritt" rows={statusRows} />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="projekttypen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Welche Website brauchst du?</span>
              <h2 className="band-title">
                Sechs Projektarten, <em>ein Ziel: Anfragen.</em>
              </h2>
            </div>
            <p className="band-note">
              Im Erstgespräch klären wir, welche bei dir den größten Hebel hat.
              Dort starten wir.
            </p>
          </div>
          <div className="audience-grid reveal">
            {projectTypes.map((type) => (
              <article className="audience-card" key={type.tag}>
                <span>{type.tag}</span>
                <h3>{type.title}</h3>
                <p>{type.text}</p>
                <small>Referenzen: {type.refs}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="leistungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Was du bekommst</span>
              <h2 className="band-title">
                Sechs Bausteine, <em>eine Verantwortung.</em>
              </h2>
            </div>
            <p className="band-note">
              Kein Weiterreichen zwischen Texter, Designer und Entwickler. Alles
              aus einer Hand, von Anfang an zusammen geplant.
            </p>
          </div>
          <div className="scope-grid reveal">
            {scope.map((item) => (
              <article className="scope-card" key={item.nr}>
                <span>{item.nr}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="relaunch">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">04 — Relaunch ohne Rankingverlust</span>
              <h2 className="band-title">
                Neue Website, <em>alte Sichtbarkeit bleibt</em>
              </h2>
              <p className="lead">
                Der häufigste Fehler beim Relaunch: Die neue Seite geht live,
                alte Adressen verschwinden, Google findet Fehlerseiten. Rankings
                aus Jahren sind in Wochen weg.
              </p>
              <p className="lead">
                Deshalb ist die URL-Migration bei uns ein eigener Arbeitsschritt:
                Inventar, Bewertung, Weiterleitungen, Kontrolle. Genau so haben
                wir auch diese Website umgezogen.
              </p>
              <Link className="body-link" href={serviceRoutes.seo}>
                SEO-Grundlagen &amp; Sichtbarkeit <ArrowIcon />
              </Link>
            </div>
            <div className="mini-grid reveal" aria-label="Schritte der URL-Migration">
              {relaunchSteps.map((step) => (
                <div key={step.title}>
                  <b>{step.title}</b>
                  <small>{step.text}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="koblenz">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">05 — Webdesign Agentur Koblenz</span>
              <h2 className="band-title">
                Aus Koblenz. <em>Deutschlandweit und DACH.</em>
              </h2>
              <p className="lead">
                Für Betriebe aus der Region heißt das: Kennenlernen bei dir im
                Betrieb, Fotos und Videos vor Ort. Für alle anderen laufen
                Projekte per Video-Call genauso verbindlich.
              </p>
              <ul className="lines">
                <li>Ein Ansprechpartner statt Agenturstruktur mit Übergaben.</li>
                <li>Erfahrung mit Handwerk, Bildung, Logistik, Immobilien, Gastronomie und Coaching.</li>
                <li>Webdesign und <Link href={serviceRoutes.seo}>Suchmaschinenoptimierung</Link> greifen ineinander.</li>
              </ul>
              <Link className="body-link" href={routes.contact}>
                Projekt besprechen <ArrowIcon />
              </Link>
            </div>
            <div className="reveal">
              <div className="web-project-collage" aria-label="Ausgewählte Webdesign-Projekte von Pixel56">
                <figure className="web-project-collage-main">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/bilder/projekt-gm-dachdecker.webp"
                    alt="Responsive Website des GM Dachdecker Meisterbetriebs auf Desktop, Tablet und Smartphone"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption><span>GM Dachdecker</span><b>Website &amp; Karriereportal</b></figcaption>
                </figure>
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/bilder/projekt-webdesign-detail-1.webp"
                    alt="Website-Referenz Schlüsselfertig Immobilien"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption><span>Immobilien</span><b>Markenauftritt</b></figcaption>
                </figure>
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/bilder/projekt-webdesign-detail-2.webp"
                    alt="Website-Referenz M und A Transporte"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption><span>Logistik</span><b>Leistungswebsite</b></figcaption>
                </figure>
              </div>
              <address className="local-address">
                <span>// PIXEL56</span>
                <strong>Koblenz</strong>
                <span>Region Koblenz · Rheinland-Pfalz</span>
              </address>
            </div>
          </div>
        </section>

        <section className="band theme-light" id="referenzen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">06 — Websites, die wir gebaut haben</span>
              <h2 className="band-title">
                Echte Projekte. <em>Keine Vorlagen.</em>
              </h2>
            </div>
            <p className="band-note">
              Vier Unternehmen, vier Aufgaben, jeweils mit eigener Lösung.
            </p>
          </div>
          <div className="ref-grid-2 reveal">
            {referenzen.map((reference) => (
              <RefCard item={reference} key={reference.cat} />
            ))}
          </div>
          <div className="section-link-row reveal">
            <Link className="body-link" href={routes.projects}>
              Alle Kundenprojekte ansehen <ArrowIcon />
            </Link>
          </div>
        </section>

        {spotlight && (
          <section className="band theme-light" id="fallstudie">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">07 — Ein Projekt im Detail</span>
                <h2 className="band-title">
                  {spotlight.kunde}: <em>{spotlight.loesung.titel}</em>
                </h2>
              </div>
              <p className="band-note">{spotlight.branche} · {spotlight.tags.join(" · ")} · {spotlight.jahr}</p>
            </div>
            <div className="case-spotlight reveal">
              <div>
                <figure className="case-spotlight-visual" style={{ margin: 0 }}>
                  <Image src={gmDachdeckerImage} alt={`${spotlight.kunde}: ${spotlight.titel}`} fill sizes="(max-width: 980px) 100vw, 50vw" />
                  <figcaption>{spotlight.kunde.toUpperCase()}</figcaption>
                </figure>
                {spotlightVoice && (
                  <blockquote className="case-quote">
                    „{spotlightVoice.text}“
                    <cite>{spotlightVoice.who}</cite>
                  </blockquote>
                )}
              </div>
              <div>
                <p className="lead" style={{ margin: 0 }}>{spotlight.teaser}</p>
                <div className="case-steps">
                  <div className="case-step">
                    <span>Ausgangslage</span>
                    <h3>{spotlight.problem.titel}</h3>
                    <p>{spotlight.problem.text}</p>
                    <ul>
                      {spotlight.problem.punkte.map((punkt) => <li key={punkt}>{punkt}</li>)}
                    </ul>
                  </div>
                  <div className="case-step">
                    <span>Lösung</span>
                    <h3>{spotlight.loesung.titel}</h3>
                    <p>{spotlight.loesung.text}</p>
                    <ul>
                      {spotlight.loesung.punkte.map((punkt) => <li key={punkt}>{punkt}</li>)}
                    </ul>
                  </div>
                  {spotlight.ergebnis && (
                    <div className="case-step">
                      <span>Stand heute</span>
                      <h3>Website und Bewerbungsweg aus einem Guss</h3>
                      <p>{spotlight.ergebnis.text}</p>
                    </div>
                  )}
                </div>
                <Link className="body-link" href={projectPath(spotlight.slug)}>
                  Zur vollständigen Fallstudie <ArrowIcon />
                </Link>
              </div>
            </div>
            <DetailReihe eintraege={weitereDetails(["gm-dachdecker"], ["curlyann"], ["Webdesign"])} />
          </section>
        )}

        <section className="band theme-light" id="prozess">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">08 — So läuft es</span>
              <h2 className="band-title">
                Fünf Phasen. <em>Keine Überraschungen.</em>
              </h2>
            </div>
            <p className="band-note">
              Du weißt jederzeit, was als Nächstes passiert und welche
              Entscheidung von dir gebraucht wird.
            </p>
          </div>
          <Stepper steps={steps} />
        </section>

        <section className="band theme-light" id="danach">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">09 — Nach dem Launch</span>
              <h2 className="band-title">
                Live ist der Anfang, <em>nicht das Ende</em>
              </h2>
              <p className="lead">
                Eine Website, die niemand mehr anfasst, verliert: Inhalte
                veralten, Technik bleibt stehen, Anfragen bleiben aus. Deshalb
                endet unsere Arbeit nicht mit der Freischaltung.
              </p>
              <p className="lead">
                Du entscheidest: selbst pflegen oder komplett abgeben. Beides
                ist in Ordnung.
              </p>
            </div>
            <div className="mini-grid reveal" aria-label="Betreuung nach dem Launch">
              {afterLaunch.map((item) => (
                <div key={item.title}>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="warum">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">10 — Warum Pixel56</span>
              <h2 className="band-title">
                Kein Baukasten. <em>Kein Projekt auf Autopilot.</em>
              </h2>
              <p className="lead">
                Gestaltung, Marketing und Technik aus einer Hand. So wird die
                Website kein Deko-Objekt, sondern ein Vertriebskanal, der über
                Jahre mitwächst.
              </p>
              <ul className="lines">
                <li>Eigene Strategie statt Branchenvorlage.</li>
                <li>Klare Aussagen statt Fachjargon.</li>
                <li>Technik, SEO und Datenschutz von Anfang an mitgedacht.</li>
                <li>Ein Ansprechpartner, der das Projekt selbst umsetzt.</li>
              </ul>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 — Dein Ansprechpartner"
                messages={[
                  { from: "in", text: "Können wir die neue Leistung heute ergänzen?" },
                  { from: "out", text: "Ja. Schick mir die Eckdaten, wir kümmern uns um Text, Aufbau und Veröffentlichung." },
                  { from: "in", text: "Perfekt, genau so hatten wir uns die Betreuung vorgestellt." },
                ]}
                footer="Beispielhafter Ablauf einer Abstimmung während der Betreuung"
              />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="bewertungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">11 — Das sagen Kunden</span>
              <h2 className="band-title">
                Wörtlich so <em>veröffentlicht.</em>
              </h2>
            </div>
            <p className="band-note">Nichts erfunden, nichts geschönt.</p>
          </div>
          <Reviews reviews={webVoices} items={webVoices} />
        </section>

        <section className="band theme-light" id="website-check">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">Kostenlos · Website-Check</span>
              <h2 className="band-title">
                Wie steht deine Website <em>heute da?</em>
              </h2>
              <p className="lead">
                Adresse eingeben, und in Sekunden siehst du, ob die Grundlagen stimmen:
                Verschlüsselung, Antwortzeit, Titel, Mobilansicht, Impressum und mehr. Ohne
                Anmeldung, ohne Speicherung. Zu jedem Punkt gibt es einen Tipp.
              </p>
              <Link className="btn-text" href="/website-check">
                Mehr zum Website-Check →
              </Link>
            </div>
            <div className="reveal">
              <WebsiteCheck kompakt />
            </div>
          </div>
        </section>

        <RegionLinks leistung="Webdesign" kurz="Webdesign" />

        <section className="band theme-light" id="faq">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">12 — Häufige Fragen</span>
              <h2 className="band-title">
                Was Betriebe <em>vor dem Start fragen.</em>
              </h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>

        <section className="band theme-light" id="anfrage">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">13 — In sechs Klicks zur Einschätzung</span>
              <h2 className="band-title">
                Sag uns kurz, <em>wo deine Website steht.</em>
              </h2>
            </div>
            <p className="band-note">{frageboegen["webdesign"].einleitung}</p>
          </div>
          <div className="reveal">
            <LeistungsAnfrage bogen={frageboegen["webdesign"]} google={{ bewertung: googleBewertungLautProfil, anzahl: googleAnzahlLautProfil }} />
          </div>
        </section>

          </div>
        </div>

        <div className="sheet service-ending">
          <CloseCta ctaLabel="Website-Projekt kostenlos besprechen">
            Soll deine Website endlich <em>Kunden gewinnen?</em>
          </CloseCta>

          <ContactStrip />

          <SiteFooter />
        </div>
      </main>
    </>
  );
}
