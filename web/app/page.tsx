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
} from "@/components/ui";
import { site } from "@/lib/site";
import { artikel } from "@/lib/blog";
import { getFallstudie } from "@/lib/projekte";
import { verifiedReviews } from "@/lib/verified-reviews";
import GoogleBewertungen from "@/components/GoogleBewertungen";
import { googleAuswahl, holeGoogleStand } from "@/lib/google-bewertungen";
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
    "Pixel56 aus Koblenz: Websites, Meta Ads, Reels und KI-Prozesse für Handwerk, Bau und Dienstleister. Mehr Anfragen, mehr Bewerber. Seit 2018.",
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
        "Digitalagentur für Handwerks-, Bau- und Dienstleistungsbetriebe: Webdesign, Meta Ads, Google Ads, Reels und KI-Prozesse. Region Koblenz, deutschlandweit im Einsatz.",
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
    text: "Eine Website, die Besucher zur Anfrage führt. Klar aufgebaut, schnell geladen, bei Google gefunden. Beim Relaunch nehmen wir deine Rankings mit.",
    tags: ["Strategie", "UX & Design", "Entwicklung", "SEO-Basis"],
    outcome: "Aus Besuchern werden Anfragen.",
  },
  {
    nr: "02",
    code: "ADS",
    title: "Meta Ads",
    href: serviceRoutes["meta-ads"],
    text: "Anzeigen auf Facebook und Instagram, die Kunden oder Bewerber bringen. Mit eigener Zielseite und Tracking, damit du siehst, was wirkt.",
    tags: ["Zielgruppen", "Creatives", "Tracking", "Optimierung"],
    outcome: "Aus Reichweite wird Nachfrage.",
  },
  {
    nr: "03",
    code: "REC",
    title: "Social Content & Reels",
    href: serviceRoutes["content-produktion"],
    text: "Wir drehen bei dir im Betrieb oder schneiden dein Material. Reels, die zeigen, wie ihr arbeitet, in einem festen Rhythmus, der ohne dich läuft.",
    tags: ["Videoschnitt", "Reels", "Vor-Ort-Dreh", "Redaktionsplan"],
    outcome: "Aus Betriebsalltag wird Content.",
  },
  {
    nr: "04",
    code: "AI",
    title: "KI-Prozesse & Automatisierung",
    href: serviceRoutes["ki-automatisierung"],
    text: "Anfragen vorsortieren, Angebote vorbereiten, Berichte schreiben: Routine, die bei dir jeden Tag anfällt, übernimmt ein KI-Prozess. Zuverlässig, ohne Spielerei.",
    tags: ["Prozessanalyse", "KI-Assistenten", "Workflows", "Anbindung"],
    outcome: "Aus Routine wird Zeit.",
  },
];

const frictions = [
  {
    problem: "Unsere Kunden kommen alle über Empfehlung.",
    answer: "Gut. Nur nicht planbar. Wir sorgen dafür, dass dich auch die finden, die dich noch nicht kennen.",
  },
  {
    problem: "Die Website ist da, bringt aber nichts.",
    answer: "Weil sie vorzeigt statt verkauft. Wir bauen sie vom Ziel her: Anruf, Anfrage, Bewerbung.",
  },
  {
    problem: "Auf die Stellenanzeige kam niemand Passendes.",
    answer: "Gute Leute suchen nicht, sie werden gefunden. Mit Reels und Anzeigen dort, wo sie abends scrollen.",
  },
  {
    problem: "Für Marketing habe ich keine Zeit.",
    answer: "Musst du auch nicht. Du gibst uns ein Erstgespräch und Freigaben per WhatsApp, den Rest übernehmen wir.",
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
    title: "Branding, Website und Buchung mit Online-Zahlung",
    tags: "BRANDING · WEBDESIGN · BUCHUNGSSYSTEM",
    href: projectPath("curlyann"),
    image: curlyAnnImage,
    className: "work-card-tall",
  },
  {
    customer: "Van den Berg Gruppe",
    title: "Meta Ads für Baggerfahrer, Abbruchhelfer und Bürokräfte",
    tags: "META ADS · RECRUITING · TRACKING",
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
    text: "15 Minuten am Telefon. Du sagst, was du brauchst: Kunden, Bewerber oder beides. Wir sagen offen, ob wir helfen können.",
    gets: "Du bekommst: eine ehrliche Einschätzung",
  },
  {
    nr: "02",
    title: "Plan & Angebot",
    text: "Wir schauen uns an, was schon da ist, und sagen dir, welcher Baustein zuerst den größten Hebel hat. Mit Umfang und Preis.",
    gets: "Du bekommst: ein Angebot ohne Kleingedrucktes",
  },
  {
    nr: "03",
    title: "Umsetzung & Betreuung",
    text: "Website, Anzeigen, Reels oder Workflow entstehen in kurzen Schritten, die du prüfen kannst. Danach bleiben wir dran: auswerten, optimieren, pflegen.",
    gets: "Du bekommst: einen festen Ansprechpartner",
  },
];

const passt = [
  "Du führst einen Handwerks-, Bau- oder Dienstleistungsbetrieb.",
  "Du willst Anfragen und Bewerber, nicht nur Likes.",
  "Du willst einen Ansprechpartner statt fünf Agenturen.",
  "Du bist bereit, in Sichtbarkeit zu investieren, mit einem Budget, das zum Ziel passt.",
];

const passtNicht = [
  "Du suchst die billigste Website aus dem Baukasten.",
  "Du erwartest Ergebnisse in einer Woche ohne Werbebudget.",
  "Marketing soll bei dir ein neues Logo bleiben, ohne Ziel dahinter.",
  "Du brauchst eine Agentur für Ausschreibungen mit zwölf Entscheidern.",
];

const kiExamples = [
  { title: "Anfragen vorsortieren", text: "Mails und Formulare nach Anliegen einordnen, Antwortentwurf liegt bereit." },
  { title: "Angebote vorbereiten", text: "Aus Vorlage und Projektnotizen entsteht der erste Entwurf, du prüfst nur noch." },
  { title: "Wissen durchsuchbar machen", text: "Preislisten, Abläufe, alte Projekte: ein Assistent, der Fragen aus dem Betrieb beantwortet." },
  { title: "Social-Media-Rohtexte", text: "Aus Baustellenfotos und Stichworten werden Beitragsentwürfe im Ton deiner Marke." },
  { title: "Bewerbungen strukturieren", text: "Unterlagen zusammenfassen und nach deinen Kriterien vergleichbar machen." },
  { title: "Wochenbericht", text: "Zahlen aus Kampagnen und Website als lesbarer Bericht, ohne Copy-and-paste." },
];

const resources = [
  {
    tag: "Checkliste · PDF",
    title: "SEO-Checkliste",
    text: "30 Prüfpunkte, die wir bei jedem Kundenprojekt durchgehen. Technik, lokale Sichtbarkeit, Inhalte.",
    href: resourceRoutes["seo-checkliste"],
    image: seoFreebieImage,
  },
  {
    tag: "Checkliste · PDF",
    title: "KI-Agenten-Checkliste",
    text: "Wo KI im Betrieb wirklich Zeit spart und wo sie Spielerei bleibt. Mit Beispielen für kleine Unternehmen.",
    href: resourceRoutes["ki-agenten-checkliste"],
    image: kiFreebieImage,
  },
  {
    tag: "Vorlage · PDF",
    title: "Tagesplaner",
    text: "Die Planungsvorlage, mit der wir selbst arbeiten: Prioritäten, Zeitblöcke, To-do-Liste.",
    href: resourceRoutes.tagesplaner,
  },
];

const faqs = [
  {
    q: "Muss ich alle Bausteine zusammen buchen?",
    a: "Nein. Du kannst mit einem starten, zum Beispiel einer neuen Website oder einer Meta-Ads-Kampagne. Wenn ein zweiter Baustein den ersten stärkt, sagen wir dir das. Ein Paket, das du nicht brauchst, bekommst du nicht.",
  },
  {
    q: "Was kostet das?",
    a: "Das hängt von Ziel und Umfang ab. Vor dem Start bekommst du ein Angebot, in dem jede Leistung benannt ist. Werbebudget und laufende Betreuung stehen separat drin, damit du genau weißt, wofür du zahlst.",
  },
  {
    q: "Arbeitet ihr nur in der Region Koblenz?",
    a: "Nein. Für Dreh und Fotos kommen wir in der Region zu dir in den Betrieb. Alles andere läuft per Video-Call, Telefon und WhatsApp, mit Kunden in ganz Deutschland.",
  },
  {
    q: "Ich habe kein Videomaterial. Geht Content trotzdem?",
    a: "Ja. Entweder du schickst uns Handyaufnahmen von der Baustelle und wir schneiden daraus Reels, oder wir drehen einen Tag bei dir vor Ort und produzieren Material für mehrere Wochen.",
  },
  {
    q: "Was heißt KI-Prozesse konkret?",
    a: "Abläufe, die bei dir jeden Tag gleich laufen und heute jemand von Hand macht: Anfragen sortieren, Angebote vorbereiten, Berichte schreiben. Wir starten beim Prozess, nicht beim Tool.",
  },
  {
    q: "Wie schnell sehe ich Ergebnisse?",
    a: "Anzeigen liefern nach wenigen Tagen erste Zahlen, eine Website braucht je nach Umfang einige Wochen, Content wirkt über Monate. Wir sagen dir im Erstgespräch, was realistisch ist, und versprechen nichts, was wir nicht halten können.",
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
              <div className="premium-kicker">FÜR HANDWERK, BAU &amp; DIENSTLEISTER · KOBLENZ · DEUTSCHLANDWEIT</div>
              <h1>
                <span>Neue Kunden.</span>
                <span>Neue Mitarbeiter.</span>
                <span className="premium-accent">Planbar statt Zufall.</span>
                <span>Aus einer Hand.</span>
              </h1>
              <p>
                Du machst gute Arbeit. Aber Anfragen kommen nur über Empfehlung,
                und auf Stellenanzeigen meldet sich kaum jemand. Pixel56 baut dir
                das System, das beides ändert: Website, Meta Ads, Reels und
                KI-Prozesse, die zusammenarbeiten.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Kostenloses Erstgespräch <ArrowIcon />
                </a>
                <Link className="btn-text" href="#system">
                  So funktioniert es ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="Pixel56 auf einen Blick">
                <span>{googleStand.bewertung.toLocaleString("de-DE", { minimumFractionDigits: 1 })} Sterne bei Google · {googleStand.anzahl} Bewertungen</span>
                <span>Seit 2018</span>
                <span>Ein Ansprechpartner</span>
                <span>Koblenz · deutschlandweit</span>
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
            <span className="band-tag">01 — Kennst du das?</span>
            <p>
              Die Arbeit stimmt. Nur <em>online weiß das keiner.</em>
            </p>
          </section>

          <section className="band theme-light" id="engpaesse">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">02 — Was wir jede Woche hören</span>
                <h2 className="band-title">
                  Vier Sätze. <em>Und was wir dagegen tun.</em>
                </h2>
              </div>
              <p className="band-note">
                Wenn du dich in einem wiedererkennst, lohnt sich das Gespräch.
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

          <section className="band theme-light light-services" id="leistungen">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">03 — Die Lösung</span>
                <h2 className="band-title">
                  Kein Einzelteil. <em>Ein System.</em>
                </h2>
              </div>
              <p className="band-note">
                Website, Anzeigen, Content und Automatisierung greifen
                ineinander. Jeder Baustein hat genau eine Aufgabe.
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
                <span className="band-tag">04 — So greift es ineinander</span>
                <h2 className="band-title">
                  Tippe auf einen Baustein. <em>Sieh, was er auslöst.</em>
                </h2>
              </div>
              <p className="band-note">
                Eine Website ohne Besucher bleibt leer. Anzeigen ohne Zielseite
                verbrennen Budget. Zusammen wird daraus ein Kreislauf, der
                Anfragen bringt.
              </p>
            </div>
            <div className="reveal">
              <SystemSzene konfig={startseiteSzene} />
            </div>
          </section>

          <section className="band theme-light light-work" id="arbeiten">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">05 — Betriebe, die es gemacht haben</span>
                <h2 className="band-title">
                  Echte Projekte. <em>Keine Vorlagen.</em>
                </h2>
              </div>
              <p className="band-note">
                Dachdecker, Abbruch, Transporte, Bildung, Gastronomie: Auftritte,
                die zum Betrieb passen.
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

          <section className="band theme-light light-reviews" id="bewertungen">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">06 — Das sagen Kunden</span>
                <h2 className="band-title">
                  5,0 Sterne. <em>Wörtlich übernommen.</em>
                </h2>
              </div>
              <p className="band-note">
                Echte Google-Bewertungen mit Link zum Original. Nichts erfunden,
                nichts geschönt.
              </p>
            </div>
            <GoogleBewertungen stand={googleStand} bewertungen={googleAuswahl} />
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

          <section className="band dark-stage dark-process" id="ablauf">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">08 — So läuft es</span>
                <h2 className="band-title">
                  Drei Schritte <em>bis das System läuft.</em>
                </h2>
              </div>
              <p className="band-note">
                Du weißt jederzeit, wo das Projekt steht und was als Nächstes
                passiert.
              </p>
            </div>
            <div className="premium-process premium-process-drei reveal">
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

          <section className="band theme-light" id="passt">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">09 — Passt das?</span>
                <h2 className="band-title">
                  Für wen Pixel56 <em>die richtige Wahl ist.</em>
                </h2>
              </div>
              <p className="band-note">
                Wir arbeiten lieber mit wenigen Betrieben richtig als mit vielen
                halb. Deshalb sagen wir vorher, wann es passt.
              </p>
            </div>
            <div className="audience-grid fit-grid reveal">
              <article className="audience-card">
                <span>Passt, wenn</span>
                <ul className="premium-list">
                  {passt.map((punkt) => <li key={punkt}>{punkt}</li>)}
                </ul>
              </article>
              <article className="audience-card fit-nein">
                <span>Passt nicht, wenn</span>
                <ul className="premium-list">
                  {passtNicht.map((punkt) => <li key={punkt}>{punkt}</li>)}
                </ul>
              </article>
            </div>
          </section>

          <section className="band founder-section theme-light light-founder" id="atilla">
            <div className="founder-visual reveal">
              <div className="founder-frame">
                <Image src={atillaImage} alt="Atilla Ciftcioglu, Gründer von Pixel56" sizes="(max-width: 900px) 100vw, 42vw" />
              </div>
              <span>// ATILLA CIFTCIOGLU · GRÜNDER · STRATEGIE &amp; UMSETZUNG</span>
            </div>
            <div className="founder-copy reveal">
              <span className="band-tag">10 — Dein Ansprechpartner</span>
              <h2 className="band-title">
                Ein Name. <em>Keine Hotline.</em>
              </h2>
              <p className="lead">
                Du sprichst mit Atilla Ciftcioglu, der dein Projekt selbst plant
                und umsetzt. Für Dreh, Schnitt oder Entwicklung holt er feste
                Partner dazu. Kein Vertrieb, kein wechselnder Projektmanager.
              </p>
              <ul className="premium-list">
                <li>Ehrliche Einschätzung, auch wenn sie „brauchst du nicht“ lautet</li>
                <li>Kurze Wege per WhatsApp, Telefon oder E-Mail</li>
                <li>Betreuung auch nach dem Start, nicht nur bis zur Rechnung</li>
              </ul>
              <Link className="body-link" href={routes.about}>
                Pixel56 kennenlernen <ArrowIcon />
              </Link>
            </div>
          </section>

          <section className="band theme-light" id="ki">
            <div className="split2">
              <div className="reveal">
                <span className="band-tag">11 — KI im Betrieb</span>
                <h2 className="band-title">
                  KI, die Arbeit abnimmt. <em>Nicht Zeit frisst.</em>
                </h2>
                <p className="lead">
                  Wir suchen die Stellen, an denen bei dir jeden Tag dasselbe
                  passiert, und lassen genau das einen KI-Prozess übernehmen.
                  Wie sich das anfühlt, probierst du auf der KI-Seite in der
                  Beispiel-Zentrale selbst aus.
                </p>
                <Link className="body-link" href={`${serviceRoutes["ki-automatisierung"]}#zentrale-demo`}>
                  Beispiel-Zentrale ausprobieren <ArrowIcon />
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
                <span className="band-tag">12 — Region</span>
                <h2 className="band-title">
                  Aus Koblenz. <em>Für ganz Deutschland.</em>
                </h2>
                <p className="lead">
                  Für Dreh und Fotos kommen wir in der Region Koblenz, Neuwied
                  und Westerwald zu dir in den Betrieb. Alles andere läuft per
                  Video-Call, Telefon und WhatsApp, genauso verbindlich.
                </p>
                <ul className="lines">
                  <li>Vor-Ort-Dreh für Reels und Fotos in Koblenz, Neuwied, Montabaur und Umgebung</li>
                  <li>Betriebe aus der Region kennen wir aus eigener Arbeit, nicht aus Statistiken</li>
                  <li>
                    <Link href={routes.locations}>Webdesign, Ads und SEO in deiner Stadt</Link>
                  </li>
                </ul>
              </div>
              <div className="region-visual reveal">
                <Image src={koblenzImage} alt="Koblenz am Rhein, Heimat von Pixel56" fill sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
            </div>
          </section>

          <section className="band theme-light" id="ressourcen">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">13 — Zum Selbermachen</span>
                <h2 className="band-title">
                  Drei Vorlagen <em>aus unserer eigenen Arbeit.</em>
                </h2>
              </div>
              <p className="band-note">Kostenlos als PDF, ohne Haken.</p>
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
                  Wissen, das <em>Entscheidungen leichter macht.</em>
                </h2>
              </div>
              <p className="band-note">
                Was Websites kosten, was das Google-Profil bringt, worauf es bei
                Anzeigen ankommt.
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
                  Was Betriebe <em>vor dem Start fragen.</em>
                </h2>
              </div>
            </div>
            <FaqList items={faqs} />
          </section>

          </div>
        </div>

        <div className="sheet home-ending">
          <CloseCta ctaLabel="Kostenloses Erstgespräch buchen">
            15 Minuten. Dann weißt du, <em>wo dein größter Hebel liegt.</em>
          </CloseCta>

          <ContactStrip />

          <SiteFooter />
        </div>
      </main>
    </>
  );
}
