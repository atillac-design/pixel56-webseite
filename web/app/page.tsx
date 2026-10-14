import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import DetailReihe, { weitereDetails } from "@/components/DetailReihe";
import {
  ArrowIcon,
  ClientMarquee,
  CloseCta,
  ContactStrip,
  FaqList,
  Reviews,
} from "@/components/ui";
import { site } from "@/lib/site";
import { artikel } from "@/lib/blog";
import { getFallstudie } from "@/lib/projekte";
import { verifiedReviews } from "@/lib/verified-reviews";
import GoogleBewertungen from "@/components/GoogleBewertungen";
import { holeGoogleStand } from "@/lib/google-bewertungen";
import { projectPath, resourceRoutes, routes, serviceRoutes } from "@/lib/routes";
import starkImage from "@/public/bilder/projekt-stark-ins-neue.webp";
import starkDetailImage from "@/public/bilder/projekt-stark-ins-neue-2.webp";
import vanDenBergImage from "@/public/bilder/projekt-van-den-berg.webp";
import curlyAnnImage from "@/public/bilder/projekt-curlyann-1.webp";
import maTransporteImage from "@/public/bilder/projekt-ma-transporte.webp";
import gmDachdeckerImage from "@/public/bilder/projekt-gm-dachdecker.webp";
import oktayCoemertlerImage from "@/public/bilder/projekt-oktay-coemertler.webp";
import colakImage from "@/public/bilder/projekt-colak.webp";
import atillaImage from "@/public/bilder/team-atilla.webp";
import koblenzImage from "@/public/bilder/koblenz-rhein.webp";
import seoFreebieImage from "@/public/bilder/freebie-seo-ebook-transparent.webp";
import kiFreebieImage from "@/public/bilder/freebie-ki-ebook.webp";
import SystemSzene from "@/components/SystemSzene";
import { startseiteSzene } from "@/lib/system-szene";

export const metadata: Metadata = {
  title: {
    absolute: "Digitalagentur Koblenz: Webdesign, Ads & KI | Pixel56",
  },
  description:
    "Pixel56 aus Bendorf bei Koblenz: Websites, die Anfragen bringen, Meta- und Google-Ads mit Tracking, Reels vor Ort und KI-Prozesse. Seit 2018.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#organization`,
      foundingDate: "2018",
      name: site.name,
      description:
        "Digitalagentur für Webdesign, Meta Ads, Google Ads, Social-Media-Content, Reels und KI-gestützte Prozesse. Inhabergeführt in Bendorf bei Koblenz, deutschlandweit im Einsatz.",
      founder: { "@type": "Person", name: "Atilla Ciftcioglu" },
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
      geo: { "@type": "GeoCoordinates", latitude: 50.4297, longitude: 7.5703 },
      areaServed: [
        { "@type": "City", name: "Koblenz" },
        { "@type": "City", name: "Neuwied" },
        { "@type": "City", name: "Bendorf" },
        { "@type": "Country", name: "Deutschland" },
      ],
      url: site.url,
      logo: `${site.url}/bilder/logo-pixel56.webp`,
      knowsAbout: [
        "Webdesign",
        "Meta Ads",
        "Google Ads",
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
    text: "Websites, die nicht nur gut aussehen, sondern Besucher zur Anfrage führen: klare Struktur, schnelle Technik, saubere SEO-Basis. Beim Relaunch nehmen wir bestehende Rankings und Adressen mit, statt sie zu verlieren.",
    tags: ["Strategie", "UX & Design", "Entwicklung", "SEO-Basis"],
    outcome: "Aus Besuchern werden Anfragen.",
  },
  {
    nr: "02",
    code: "ADS",
    title: "Meta Ads",
    href: serviceRoutes["meta-ads"],
    text: "Facebook- und Instagram-Kampagnen für neue Kunden oder Bewerber. Mit Creatives, die im Feed auffallen, einer Zielseite, die das Versprechen der Anzeige einlöst, und Tracking, das zeigt, was wirklich funktioniert.",
    tags: ["Zielgruppen", "Creatives", "Tracking", "Optimierung"],
    outcome: "Aus Reichweite wird Nachfrage.",
  },
  {
    nr: "03",
    code: "REC",
    title: "Social Content & Reels",
    href: serviceRoutes["content-produktion"],
    text: "Du schickst uns Rohmaterial, wir schneiden es. Oder wir drehen bei dir im Betrieb und liefern fertige Reels, Fotos und Beiträge, die zeigen, wie ihr wirklich arbeitet. Mit einem festen Rhythmus, der auch ohne dich läuft.",
    tags: ["Videoschnitt", "Reels", "Vor-Ort-Dreh", "Redaktionsplan"],
    outcome: "Aus Betriebsalltag wird Content.",
  },
  {
    nr: "04",
    code: "AI",
    title: "KI-Prozesse & Automatisierung",
    href: serviceRoutes["ki-automatisierung"],
    text: "Wir suchen die Stellen, an denen in deinem Betrieb jeden Tag dieselbe Arbeit anfällt, und bauen dafür KI-Workflows, die zuverlässig laufen. Prozess zuerst, Werkzeug danach. Keine Spielerei, die nach zwei Wochen niemand mehr öffnet.",
    tags: ["Prozessanalyse", "KI-Assistenten", "Workflows", "Anbindung"],
    outcome: "Aus Routine wird Zeit.",
  },
];

const audiences = [
  {
    tag: "Handwerk & Bau",
    title: "Volle Auftragsbücher, online unsichtbar",
    text: "Dachdecker, Abbruch, Tiefbau, Trocknung: Betriebe, deren Arbeit vor Ort überzeugt, die aber online kaum gefunden werden oder keine Bewerber erreichen. Wir machen das Handwerk digital so sichtbar, wie es auf der Baustelle längst ist.",
    refs: "GM-Dachdecker · MDU Bedachungen · Oktay Cömertler",
  },
  {
    tag: "Transport & Logistik",
    title: "Leistungen, die man erklären muss",
    text: "Spezialtransporte und Logistikleistungen versteht niemand aus einem Logo. Website, Content und Kampagnen übernehmen genau diese Erklärung, bevor jemand zum Hörer greift.",
    refs: "M&A Transporte",
  },
  {
    tag: "Bildung & Soziales",
    title: "Vertrauen vor der Anmeldung",
    text: "Kurse, Schulungen und gemeinnützige Angebote entscheiden sich daran, ob die Anmeldung ohne Umwege gelingt und der Auftritt seriös wirkt. Dafür bauen wir klare Strecken statt verschachtelter Seiten.",
    refs: "Stark ins Neue · CASS Schulungen · Lernforum Obertshausen",
  },
  {
    tag: "Immobilien & Modulbau",
    title: "Große Entscheidungen, hoher Anspruch",
    text: "Wer eine Immobilie oder ein Gebäude in Auftrag gibt, prüft vorher sehr genau. Der Auftritt muss diese Prüfung bestehen, noch bevor das erste Gespräch stattfindet.",
    refs: "Schlüsselfertig-Immobilien · DiscountHaus Holding",
  },
  {
    tag: "Dienstleistung & Technik",
    title: "Werbebudget mit klarer Linie",
    text: "Laufende Kampagnen mit konstanter Betreuung und sauberer Auswertung, damit Budget nicht verpufft, sondern planbar Anfragen bringt. Produkte und Leistungen so erklärt, dass Kunden sie verstehen.",
    refs: "Van den Berg Gruppe · Colak GmbH",
  },
  {
    tag: "Gastronomie, Handel & Kreativ",
    title: "Marken, die von Bildern leben",
    text: "Restaurants, Shops und Ateliers gewinnen über Stimmung, Bilder und Bewegtbild. Reels, Social Content und Shops, die Lust machen und direkt zur Buchung oder zum Kauf führen.",
    refs: "Burgerfabriq · Cavar Home · CurlyAnn Soulcare & Art",
  },
];

const frictions = [
  {
    problem: "Die Website sieht gut aus, aber niemand findet den Weg zur Anfrage.",
    answer: "Wir bauen jede Seite vom Ziel her: Was soll der Besucher als Nächstes tun? Struktur, Texte und Buttons folgen dieser einen Frage, nicht dem Geschmack des Tages.",
  },
  {
    problem: "Anzeigen laufen, führen aber auf die Startseite statt auf ein konkretes Angebot.",
    answer: "Jede Kampagne bekommt eine Zielseite, die das Versprechen der Anzeige einlöst. Alles andere verbrennt Budget, egal wie gut die Anzeige ist.",
  },
  {
    problem: "Content entsteht nur, wenn gerade Zeit ist. Also selten.",
    answer: "Wir drehen bei dir vor Ort oder schneiden dein vorhandenes Material und liefern einen festen Rhythmus, der ohne dein tägliches Zutun läuft.",
  },
  {
    problem: "Bewerber landen auf einer Karriereseite, die wie ein Aushang wirkt.",
    answer: "Karriereseiten mit direktem Upload und Kampagnen, die passende Menschen erreichen, bevor sie aktiv suchen. So haben wir es etwa für GM-Dachdecker umgesetzt.",
  },
  {
    problem: "Entscheidungen laufen nach Gefühl, weil niemand weiß, was die Werbung bringt.",
    answer: "Wir richten Messung sauber und DSGVO-konform ein und sagen dir ehrlich, was die Zahlen hergeben und was nicht.",
  },
  {
    problem: "Jede Anfrage wird von Hand sortiert, beantwortet und abgelegt.",
    answer: "KI-Prozesse übernehmen Vorsortierung, Antwortentwürfe und Ablage. Du triffst die Entscheidungen, die Routine erledigt sich im Hintergrund.",
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
    title: "Landingpage und Meta Ads, die zur Kursanmeldung führen",
    tags: "WEBDESIGN · META ADS · LANDINGPAGE",
    href: projectPath("stark-ins-neue"),
    image: starkImage,
    className: "work-card-wide",
  },
  {
    customer: "CurlyAnn Soulcare & Art",
    title: "Ein Auftritt mit eigener Handschrift und direkter Buchung",
    tags: "WEBDESIGN · BUCHUNG · ONLINE-ZAHLUNG",
    href: projectPath("curlyann"),
    image: curlyAnnImage,
    className: "work-card-tall",
  },
  {
    customer: "Van den Berg Gruppe",
    title: "Meta Ads mit konstanter Betreuung statt kurzem Kampagnenfeuer",
    tags: "META ADS · TRACKING · OPTIMIERUNG",
    href: projectPath("van-den-berg"),
    image: vanDenBergImage,
  },
  {
    customer: "M&A Transporte",
    title: "Website und Social Media seit 2019 aus einer Hand",
    tags: "WEBDESIGN · SOCIAL CONTENT · BETREUUNG",
    href: projectPath("ma-transporte"),
    image: maTransporteImage,
  },
  {
    customer: "GM-Dachdecker Meisterbetrieb",
    title: "Website und Karriereportal für das Dachdeckerhandwerk",
    tags: "WEBDESIGN · KARRIEREPORTAL · RECRUITING",
    href: projectPath("gm-dachdecker"),
    image: gmDachdeckerImage,
    className: "work-card-compact",
  },
  {
    customer: "Oktay Cömertler",
    title: "Eine eigene Marke für Abbruch, Tief- und Kanalbau",
    tags: "BRANDING · WEBDESIGN · BAU",
    href: projectPath("oktay-coemertler"),
    image: oktayCoemertlerImage,
    className: "work-card-compact",
  },
  {
    customer: "Colak GmbH",
    title: "Trocknungstechnik verständlich erklärt und sichtbar gemacht",
    tags: "WEBDESIGN · PRODUKTKOMMUNIKATION",
    href: projectPath("colak-gmbh"),
    image: colakImage,
    className: "work-card-compact",
  },
];

const processSteps = [
  {
    nr: "01",
    title: "Erstgespräch",
    text: "15 Minuten, kostenlos. Du schilderst Ziel und Engpass, wir sagen offen, ob und wie wir helfen können. Ohne Verkaufsdruck.",
    gets: "Du bekommst: eine ehrliche Ersteinschätzung",
  },
  {
    nr: "02",
    title: "Analyse & Empfehlung",
    text: "Wir sehen uns an, was schon da ist: Website, Anzeigenkonto, Material, Abläufe. Daraus entsteht eine klare Empfehlung, welcher Baustein zuerst den größten Hebel hat.",
    gets: "Du bekommst: Angebot mit Umfang und Preis",
  },
  {
    nr: "03",
    title: "Umsetzung in Etappen",
    text: "Design, Content, Kampagne oder Workflow entstehen in kurzen, sichtbaren Schritten. Du siehst früh Ergebnisse und kannst eingreifen, nicht erst am Ende.",
    gets: "Du bekommst: Zwischenstände, die du prüfen kannst",
  },
  {
    nr: "04",
    title: "Betreuung",
    text: "Nach dem Start bleiben wir erreichbar: Auswertung, Optimierung, Pflege. Per WhatsApp, Telefon oder bei dir im Betrieb, je nachdem, was gerade schneller ist.",
    gets: "Du bekommst: einen festen Ansprechpartner",
  },
];

const kiExamples = [
  { title: "Anfragen vorsortieren", text: "Eingehende Mails und Formulare nach Anliegen einordnen und passende Antwortentwürfe vorbereiten." },
  { title: "Angebote vorbereiten", text: "Aus Vorlagen und Projektnotizen entsteht ein erster Angebotsentwurf, den du nur noch prüfst und anpasst." },
  { title: "Wissen durchsuchbar machen", text: "Preislisten, Abläufe, alte Projekte: ein interner Assistent, der Fragen aus deinem Betrieb beantwortet." },
  { title: "Social-Media-Rohtexte", text: "Aus Baustellenfotos und Stichworten werden Beitragsentwürfe im Ton deiner Marke, bereit zur Freigabe." },
  { title: "Bewerbungen strukturieren", text: "Eingehende Unterlagen zusammenfassen und nach deinen Kriterien vergleichbar machen." },
  { title: "Wiederkehrende Berichte", text: "Zahlen aus Kampagnen und Website in einen lesbaren Wochenbericht übersetzen, ohne Copy-and-paste." },
];

const resources = [
  {
    tag: "Checkliste · PDF",
    title: "SEO-Checkliste",
    text: "30 Prüfpunkte in drei Bereichen, dieselben, die wir bei jedem Kundenprojekt durchgehen. Technik, lokale Sichtbarkeit, Inhalte. Zum Selbst-Abhaken, ohne Vorkenntnisse.",
    href: resourceRoutes["seo-checkliste"],
    image: seoFreebieImage,
  },
  {
    tag: "Checkliste · PDF",
    title: "KI-Agenten-Checkliste",
    text: "Wo KI im Betriebsalltag tatsächlich Zeit spart und wo sie nur Spielerei ist. Ehrlich eingeordnet, mit konkreten Beispielen für kleine Unternehmen.",
    href: resourceRoutes["ki-agenten-checkliste"],
    image: kiFreebieImage,
  },
  {
    tag: "Vorlage · PDF",
    title: "Tagesplaner",
    text: "Die Planungsvorlage, mit der wir selbst arbeiten: Prioritäten, Zeitblöcke, To-do-Liste. Für fokussierte Tage statt Zettelwirtschaft.",
    href: resourceRoutes.tagesplaner,
  },
];

const faqs = [
  {
    q: "Muss ich alle Leistungen zusammen buchen?",
    a: "Nein. Du kannst mit einer einzelnen Leistung starten, zum Beispiel einer neuen Website, dem Schnitt vorhandener Videos oder einer Meta-Ads-Kampagne. Wenn mehrere Bausteine sinnvoll zusammenarbeiten, zeigen wir dir den Zusammenhang, ohne daraus ein unnötig großes Paket zu machen.",
  },
  {
    q: "Arbeitet ihr nur in der Region Koblenz?",
    a: "Nein. Pixel56 sitzt in Bendorf bei Koblenz und betreut Unternehmen in ganz Deutschland. Vor-Ort-Termine, etwa für Content-Produktionen, bieten wir in der Region an; alles andere läuft per Video-Call, Telefon und WhatsApp genauso verbindlich.",
  },
  {
    q: "Könnt ihr Reels nur aus vorhandenem Videomaterial schneiden?",
    a: "Ja. Du kannst uns dein Rohmaterial schicken, und wir übernehmen Auswahl, Schnitt, Untertitel, Musik und Formatierung. Wenn dir eigenes Material fehlt, planen wir alternativ einen Vor-Ort-Termin und produzieren die Aufnahmen bei dir im Unternehmen.",
  },
  {
    q: "Was versteht ihr unter KI-Prozessen?",
    a: "Konkrete Abläufe, bei denen KI messbar Zeit spart: Informationen strukturieren, Entwürfe vorbereiten, Anfragen vorsortieren, internes Wissen durchsuchbar machen oder wiederkehrende Schritte miteinander verbinden. Wir beginnen beim Prozess, nicht bei einem beliebigen Tool.",
  },
  {
    q: "Macht Pixel56 auch SEO?",
    a: "Ja, vor allem als Fundament einer neuen Website: saubere Technik, Struktur, Metadaten, interne Verlinkung, Inhalte und eine sichere URL-Migration beim Relaunch. Laufende SEO-Betreuung bieten wir gezielt an, sie ist aber nicht die Hauptleistung von Pixel56.",
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
    a: "Ja. Vor einem Relaunch erfassen wir alle bestehenden Adressen und erhalten sie nach Möglichkeit. Wenn sich ein Pfad ändern muss, richten wir eine passende dauerhafte Weiterleitung ein und kontrollieren sie nach dem Start.",
  },
  {
    q: "Gibt es feste Pakete oder eine individuelle Lösung?",
    a: "Der Umfang richtet sich nach deinem Ziel und dem vorhandenen Material. Du bekommst vor der Umsetzung ein Angebot mit klar benannten Leistungen; Werbebudget und laufende Betreuung werden separat ausgewiesen.",
  },
];

const spotlight = getFallstudie("stark-ins-neue");
const spotlightVoice = verifiedReviews[0];
const latestArticles = [...artikel]
  .sort((a, b) => b.datum.localeCompare(a.datum))
  .slice(0, 3);

export default async function HomePage() {
  const googleStand = await holeGoogleStand();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="home-premium">
        <div className="sheet">
          <SiteNav />

          <header className="premium-hero">
            <div className="premium-hero-glow" aria-hidden="true" />
            <div className="premium-hero-copy">
              <div className="premium-kicker">DIGITALAGENTUR · BENDORF BEI KOBLENZ · DEUTSCHLANDWEIT</div>
              <h1>
                <span>Websites, Ads,</span>
                <span>Content, KI.</span>
                <span className="premium-accent">Mehr Anfragen.</span>
                <span>Aus einer Hand.</span>
              </h1>
              <p>
                Pixel56 baut Websites mit klarer Nutzerführung, schaltet Meta- und
                Google-Ads mit sauberem Tracking, produziert Reels direkt in deinem
                Betrieb und richtet KI-Prozesse ein, die wiederkehrende Arbeit
                abnehmen. Ein Ansprechpartner, von der ersten Idee bis zur
                Betreuung nach dem Start.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Kostenloses Erstgespräch <ArrowIcon />
                </a>
                <Link className="btn-text" href="#arbeiten">
                  Projekte ansehen ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="Pixel56 auf einen Blick">
                <span>Seit 2018</span>
                <span>Inhabergeführt</span>
                <span>Bendorf bei Koblenz</span>
                <span>Ein fester Ansprechpartner</span>
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
            <span className="band-tag">01 — Woran es meistens liegt</span>
            <p>
              Die meisten Unternehmen haben kein Marketing-Problem. Sie haben
              <em> Einzelteile, die nicht zusammenspielen.</em>
            </p>
          </section>

          <section className="band theme-light" id="fuer-wen">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">02 — Für wen wir arbeiten</span>
                <h2 className="band-title">
                  Gemacht für Betriebe, <em>die Anfragen brauchen.</em>
                </h2>
              </div>
              <p className="band-note">
                Kein Konzern-Marketing. Wir arbeiten für Unternehmen, bei denen am
                Ende das Telefon klingeln, eine Buchung eingehen oder sich jemand
                bewerben soll.
              </p>
            </div>
            <div className="audience-grid reveal">
              {audiences.map((audience) => (
                <article className="audience-card" key={audience.tag}>
                  <span>{audience.tag}</span>
                  <h3>{audience.title}</h3>
                  <p>{audience.text}</p>
                  <small>Referenzen: {audience.refs}</small>
                </article>
              ))}
            </div>
          </section>

          <section className="band theme-light light-services" id="leistungen">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">03 — Kernleistungen</span>
                <h2 className="band-title">
                  Vier Disziplinen. <em>Ein Anspruch.</em>
                </h2>
              </div>
              <p className="band-note">
                Jede Leistung funktioniert für sich. Richtig stark wird sie, wenn
                Botschaft, Gestaltung und Ausspielung aus einer Hand kommen und
                zusammenpassen.
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
              <Link href="/dienstleistung">Alle Leistungen im Überblick</Link>
            </div>
          </section>

          <section className="band system-section dark-stage" id="system">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">04 — Nicht nur Einzelmaßnahmen</span>
                <h2 className="band-title">
                  Ein System, das <em>miteinander arbeitet</em>
                </h2>
              </div>
              <p className="band-note">
                Eine starke Website ohne Besucher bleibt unsichtbar. Anzeigen ohne
                passende Zielseite verbrennen Budget. Content ohne klare Marke
                bleibt beliebig. Deshalb verbinden wir nur die Bausteine, die dein
                Unternehmen braucht. Tippe auf einen Baustein und sieh, was er im
                Zusammenspiel leistet.
              </p>
            </div>
            <div className="reveal">
              <SystemSzene konfig={startseiteSzene} />
            </div>
          </section>

          <section className="band theme-light" id="engpaesse">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">05 — Typische Engpässe</span>
                <h2 className="band-title">
                  Sechs Sätze, die wir <em>im Erstgespräch oft hören</em>
                </h2>
              </div>
              <p className="band-note">
                Und was wir jeweils dagegen tun. Wenn du dich in einem davon
                wiedererkennst, lohnt sich das Gespräch.
              </p>
            </div>
            <div className="friction-list reveal">
              {frictions.map((item, index) => (
                <div className="friction-row" key={item.problem}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>„{item.problem}“</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="band theme-light light-work" id="arbeiten">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">06 — Ausgewählte Arbeiten</span>
                <h2 className="band-title">
                  Qualität zeigt sich <em>im echten Projekt</em>
                </h2>
              </div>
              <p className="band-note">
                Unterschiedliche Branchen, unterschiedliche Aufgaben. Gemeinsam
                ist ihnen ein Auftritt, der zum Unternehmen passt und nicht zur
                Vorlage.
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
                    <Image src={starkDetailImage} alt={`${spotlight.kunde}: ${spotlight.titel}`} fill sizes="(max-width: 980px) 100vw, 50vw" />
                    <figcaption>{spotlight.kunde.toUpperCase()}</figcaption>
                  </figure>
                  <blockquote className="case-quote">
                    „{spotlightVoice.text}“
                    <cite>{spotlightVoice.who}</cite>
                  </blockquote>
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
                        <h3>Ein Auftritt, der zusammenhängt</h3>
                        <p>{spotlight.ergebnis.text}</p>
                      </div>
                    )}
                  </div>
                  <Link className="body-link" href={projectPath(spotlight.slug)}>
                    Zur vollständigen Fallstudie <ArrowIcon />
                  </Link>
                </div>
              </div>
              <DetailReihe eintraege={weitereDetails(["stark-ins-neue"], ["curlyann", "burgerfabrik"], [])} />
            </section>
          )}

          <section className="band founder-section theme-light light-founder" id="atilla">
            <div className="founder-visual reveal">
              <div className="founder-frame">
                <Image src={atillaImage} alt="Atilla Ciftcioglu, Gründer von Pixel56" sizes="(max-width: 900px) 100vw, 42vw" />
              </div>
              <span>// ATILLA CIFTCIOGLU · GRÜNDER · STRATEGIE &amp; UMSETZUNG</span>
            </div>
            <div className="founder-copy reveal">
              <span className="band-tag">08 — Persönlich geführt</span>
              <h2 className="band-title">
                Kleine Struktur. <em>Hoher Anspruch.</em>
              </h2>
              <p className="lead">
                Pixel56 ist bewusst klein aufgebaut. Du sprichst nicht mit einem
                Vertrieb, der dein Projekt anschließend weiterreicht, sondern mit
                Atilla Ciftcioglu, der Strategie und Umsetzung selbst verantwortet.
                Wenn ein Projekt Spezialisten braucht, etwa für Dreh, Schnitt oder
                Entwicklung, holen wir sie aus einem festen Netzwerk dazu.
              </p>
              <ul className="premium-list">
                <li>Ein Ansprechpartner über das gesamte Projekt, keine wechselnden Projektmanager</li>
                <li>Ehrliche Einschätzungen, auch wenn die Antwort mal „brauchst du nicht“ lautet</li>
                <li>Kurze Wege per WhatsApp, Telefon oder E-Mail</li>
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
                <span className="band-tag">09 — So läuft die Zusammenarbeit</span>
                <h2 className="band-title">
                  Klarer Prozess. <em>Keine Blackbox.</em>
                </h2>
              </div>
              <p className="band-note">
                Vier Schritte, bei denen du jederzeit weißt, wo das Projekt steht
                und was als Nächstes passiert.
              </p>
            </div>
            <div className="premium-process reveal">
              {processSteps.map((step) => (
                <article key={step.nr}>
                  <span>{step.nr}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <small>{step.gets}</small>
                </article>
              ))}
            </div>
          </section>

          <section className="band theme-light" id="ki">
            <div className="split2">
              <div className="reveal">
                <span className="band-tag">10 — KI im Betrieb, konkret</span>
                <h2 className="band-title">
                  Was KI dir abnehmen kann, <em>ohne dass du zum Tech-Unternehmen wirst</em>
                </h2>
                <p className="lead">
                  Die interessanten KI-Anwendungen für kleine und mittlere
                  Unternehmen sind unspektakulär: Sie erledigen Arbeit, die heute
                  jemand von Hand macht, obwohl sie jeden Tag gleich abläuft.
                </p>
                <p className="lead">
                  Wir starten mit deinem Prozess, nicht mit einem Tool. Erst wenn
                  klar ist, wo Zeit verloren geht, wählen wir die passende Technik
                  und binden sie an das an, was du ohnehin nutzt.
                </p>
                <Link className="body-link" href={serviceRoutes["ki-automatisierung"]}>
                  KI-Prozesse &amp; Automatisierung <ArrowIcon />
                </Link>
              </div>
              <div className="ki-examples reveal" aria-label="Beispiele für KI-Prozesse">
                {kiExamples.map((example) => (
                  <div key={example.title}>
                    <b>{example.title}</b>
                    <small>{example.text}</small>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="band theme-light" id="region">
            <div className="split2 reverse">
              <div className="reveal">
                <span className="band-tag">11 — Standort</span>
                <h2 className="band-title">
                  Aus Bendorf bei Koblenz. <em>Vor Ort und überall.</em>
                </h2>
                <p className="lead">
                  Pixel56 sitzt in Bendorf, direkt vor den Toren von Koblenz. Für
                  Content-Produktionen kommen wir in der Region zu dir in den
                  Betrieb. Alles andere läuft per Video-Call, Telefon und WhatsApp
                  genauso verbindlich, mit Kunden in ganz Deutschland.
                </p>
                <ul className="lines">
                  <li>Vor-Ort-Dreh für Reels und Fotos in Koblenz, Neuwied, Montabaur und Umgebung</li>
                  <li>Kennenlernen in Bendorf oder per Video-Call, wie es dir besser passt</li>
                  <li>Lokale Betriebe aus der Region Koblenz sind uns besonders vertraut</li>
                  <li>
                    <Link href={routes.locations}>Webdesign, Ads und SEO in deiner Stadt</Link>
                  </li>
                </ul>
              </div>
              <div className="region-visual reveal">
                <Image src={koblenzImage} alt="Koblenz am Rhein, wenige Minuten von Bendorf, der Heimat von Pixel56" fill sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
            </div>
          </section>

          <section className="band theme-light light-reviews" id="bewertungen">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">12 — Kundenstimmen</span>
                <h2 className="band-title">
                  Vertrauen entsteht <em>in der Zusammenarbeit</em>
                </h2>
              </div>
              <p className="band-note">
                Echte Google-Bewertungen, wörtlich übernommen, mit Link zum
                Original. Keine erfundenen Bewertungen, keine geschönten Zahlen.
              </p>
            </div>
            <GoogleBewertungen stand={googleStand} anzahl={6} />
          </section>

          <section className="band theme-light" id="ressourcen">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">13 — Kostenlose Ressourcen</span>
                <h2 className="band-title">
                  Zum Selbermachen, <em>bevor du uns brauchst</em>
                </h2>
              </div>
              <p className="band-note">
                Drei Vorlagen aus unserer eigenen Arbeit. Kostenlos als PDF, ohne
                Haken.
              </p>
            </div>
            <div className="resource-grid reveal">
              {resources.map((resource) => (
                <Link className="resource-card" href={resource.href} key={resource.title}>
                  {resource.image ? (
                    <div className="resource-mockup">
                      <Image src={resource.image} alt="" fill sizes="(max-width: 720px) 100vw, 33vw" />
                    </div>
                  ) : (
                    <div className="resource-mockup resource-mockup-placeholder" aria-hidden="true"><i /></div>
                  )}
                  <span>{resource.tag}</span>
                  <h3>{resource.title}</h3>
                  <p>{resource.text}</p>
                  <em>Kostenlos herunterladen <ArrowIcon /></em>
                </Link>
              ))}
            </div>
          </section>

          <section className="band theme-light" id="wissen">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">14 — Aus dem Blog</span>
                <h2 className="band-title">
                  Wissen, das <em>Entscheidungen leichter macht</em>
                </h2>
              </div>
              <p className="band-note">
                Was Websites kosten, warum das Google-Unternehmensprofil
                unterschätzt wird und worauf es bei Anzeigen wirklich ankommt.
              </p>
            </div>
            <div className="blog-grid reveal">
              {latestArticles.map((article) => (
                <Link className="blog-card" href={`/blog/${article.slug}`} key={article.slug}>
                  <div className={`blog-cover ${article.cover}`} data-tag={article.kategorie} />
                  <h3>{article.titel}</h3>
                  <p>{article.teaser}</p>
                  <span className="bc-meta">{article.kategorie} · {article.lesezeit} Min. Lesezeit</span>
                </Link>
              ))}
            </div>
            <div className="section-link-row reveal">
              <Link className="body-link" href={routes.blog}>
                Alle Artikel lesen <ArrowIcon />
              </Link>
            </div>
          </section>

          <section className="band theme-light light-faq" id="faq">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">15 — Häufige Fragen</span>
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
          <CloseCta ctaLabel="Kostenloses Erstgespräch buchen">
            Lass uns über <em>dein Projekt</em> sprechen.
          </CloseCta>

          <ContactStrip />

          <SiteFooter />
        </div>
      </main>
    </>
  );
}
