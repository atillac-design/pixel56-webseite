import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import DetailReihe, { weitereDetails } from "@/components/DetailReihe";
import BudgetPlaner from "@/components/BudgetPlaner";
import { metaBranchen, metaQuellen } from "@/lib/meta-ads-branchen";
import BreadcrumbLd from "@/components/BreadcrumbLd";
import RegionLinks from "@/components/RegionLinks";
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
import { FeedMock, ReelMock } from "@/components/mocks";
import { site } from "@/lib/site";
import { getFallstudie } from "@/lib/projekte";
import { verifiedReviews } from "@/lib/verified-reviews";
import { projectPath, routes, serviceRoutes } from "@/lib/routes";
import vanDenBergImage from "@/public/bilder/projekt-van-den-berg.webp";
import LeistungsAnfrage from "@/components/LeistungsAnfrage";
import { frageboegen } from "@/lib/fragebogen";
import { googleAnzahlLautProfil, googleBewertungLautProfil } from "@/lib/google-bewertungen";

export const metadata: Metadata = {
  title: "Meta Ads Agentur: Werbung, die Anfragen bringt",
  description:
    "Meta Ads für Handwerk, Mittelstand und Dienstleister: Facebook- und Instagram-Kampagnen mit Tracking, Zielseite und Betreuung. Pixel56 bei Koblenz.",
  alternates: { canonical: serviceRoutes["meta-ads"] },
  openGraph: {
    title: "Meta Ads Agentur: Facebook & Instagram Werbung, die Anfragen bringt | Pixel56",
    description:
      "Meta Ads für kleine und mittelständische Unternehmen: Kampagnen für Kunden und Bewerber mit Tracking, Zielseite und laufender Optimierung. Pixel56, DACH-weit.",
    url: serviceRoutes["meta-ads"],
  },
};

const serviceUrl = `${site.url}${serviceRoutes["meta-ads"]}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: "Meta Ads: Facebook- und Instagram-Werbung",
      serviceType: "Social-Media-Werbung",
      description:
        "Planung, Aufbau und laufende Betreuung von Facebook- und Instagram-Kampagnen für Kunden- und Mitarbeitergewinnung, inklusive Conversion-Tracking, Creatives und Abstimmung mit der Zielseite.",
      url: serviceUrl,
      provider: { "@type": "ProfessionalService", "@id": `${site.url}/#organization`, name: site.name, url: site.url },
      areaServed: [
        { "@type": "City", name: "Koblenz" },
        { "@type": "Country", name: "Deutschland" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Meta-Ads-Leistungen",
        itemListElement: [
          "Zieldefinition und Angebotsschärfung",
          "Conversion-Tracking und Einwilligung",
          "Zielgruppen und Kampagnenstruktur",
          "Creatives: Bild, Video, Text",
          "Landingpage-Abstimmung",
          "Laufende Optimierung und Reporting",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: site.url },
        { "@type": "ListItem", position: 2, name: "Leistungen", item: `${site.url}/dienstleistung` },
        { "@type": "ListItem", position: 3, name: "Meta Ads", item: serviceUrl },
      ],
    },
  ],
};

const statusRows = [
  { label: "Budget läuft, niemand weiß wofür", tag: "Tracking" },
  { label: "Richtige Anzeige, falsche Zielgruppe", tag: "Targeting" },
  { label: "Anzeige führt auf die Startseite", tag: "Zielseite" },
  { label: "Immer dasselbe Motiv seit Monaten", tag: "Creative" },
  { label: "Mal viel Budget, mal gar nichts", tag: "Konstanz" },
  { label: "Einmal probiert, abgeschrieben", tag: "Setup" },
];

const useCases = [
  {
    tag: "Kundengewinnung",
    title: "Anfragen für Dienstleistung und Handwerk",
    text: "Dein Angebot erscheint, bevor jemand bei Google sucht. Für Betriebe, die nicht nur auf Empfehlungen warten wollen.",
    refs: "Van den Berg Gruppe · M&A Transporte",
  },
  {
    tag: "Mitarbeitergewinnung",
    title: "Bewerber erreichen, die nicht suchen",
    text: "Die besten Fachkräfte lesen keine Stellenbörsen. Im Feed erreichst du sie trotzdem, mit Einblick in den Betrieb und Bewerbung in zwei Minuten.",
    refs: "GM-Dachdecker",
  },
  {
    tag: "Anmeldungen",
    title: "Kurse, Termine und Veranstaltungen",
    text: "Kampagnen, die direkt zur Anmeldung führen. Für Bildungsangebote, Events und alles mit festem Termin.",
    refs: "Stark ins Neue · Sportler für Kinderherzen",
  },
  {
    tag: "Regionale Bekanntheit",
    title: "Die Marke, die man schon kennt",
    text: "Wer dich dreimal im Feed gesehen hat, ruft eher an. Reichweite im Umkreis baut Vertrauen auf, bevor der Bedarf entsteht.",
    refs: "Oktay Cömertler",
  },
  {
    tag: "Retargeting",
    title: "Besucher zurückholen",
    text: "Die meisten fragen nicht beim ersten Besuch an. Wer auf deiner Website war, sieht danach die passende Anzeige.",
    refs: "Baustein in laufenden Kampagnen",
  },
  {
    tag: "Produkte & Shops",
    title: "Verkaufen über den Feed",
    text: "Produktanzeigen mit Katalog und Bewegtbild, direkt in den Shop. Ob sich das rechnet, prüfen wir vorher ehrlich.",
    refs: "Nach Prüfung im Erstgespräch",
  },
];

const scope = [
  { nr: "01", title: "Ziel & Angebot", text: "Welche Aktion zählt, was ist eine Anfrage wert? Daraus entsteht ein Angebot, das in einer Anzeige verständlich ist." },
  { nr: "02", title: "Tracking-Fundament", text: "Pixel, Conversions API, Einwilligung. Erst wenn Anfragen messbar sind, geht die Kampagne live." },
  { nr: "03", title: "Zielgruppen & Struktur", text: "Eine Struktur, die der Algorithmus lernen kann. Nicht zehn Kampagnen, die sich gegenseitig das Budget wegnehmen." },
  { nr: "04", title: "Creatives", text: "Bilder, kurze Videos und Texte, die im Feed stoppen. Aus deinem Material oder von uns produziert, regelmäßig gewechselt." },
  { nr: "05", title: "Zielseite", text: "Jede Kampagne bekommt eine Seite, die das Versprechen der Anzeige einlöst. Wenn nötig bauen wir sie." },
  { nr: "06", title: "Optimierung & Reporting", text: "Wöchentlich ausgewertet, Budget wandert dahin, wo es wirkt. Verständliche Zahlen statt Screenshots." },
];

const mistakes = [
  { problem: "Kampagne an, Kampagne aus, je nach Kontostand.", answer: "Konstant schlägt Ausschlag. Der Algorithmus braucht Daten, und die entstehen nur im laufenden Betrieb." },
  { problem: "Die Anzeige führt auf die Startseite.", answer: "Wer auf ein Angebot klickt, erwartet genau dieses Angebot. Eine Landingpage pro Kampagne, ein Ziel." },
  { problem: "„Beitrag bewerben“ statt Kampagne.", answer: "Bequem und teuer. Ziele, Zielgruppen und Messung gibt es nur im Werbeanzeigenmanager." },
  { problem: "Es läuft, aber niemand weiß, ob Anfragen daraus kommen.", answer: "Ohne Tracking ist jede Entscheidung Bauchgefühl. Wir messen die Aktion, die zählt." },
  { problem: "Dasselbe Motiv seit einem halben Jahr.", answer: "Creatives nutzen sich ab. Wir planen den Wechsel ein, bevor die Kosten pro Anfrage steigen." },
  { problem: "Zielgruppe so eng, dass niemand übrig bleibt. Oder so breit, dass alle gemeint sind.", answer: "Klare Hypothese, dann lernen lassen und nach Daten eingrenzen, nicht nach Gefühl." },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Analyse & Ziel", text: "Angebot, Zielgruppe, bisherige Kampagnen. Wir legen fest, welche Aktion zählt." },
  { nr: "02", tag: "Phase 2", title: "Tracking", text: "Pixel, Conversions API, Einwilligung, Messpunkte. Getestet, bevor ein Euro fließt." },
  { nr: "03", tag: "Phase 3", title: "Aufbau", text: "Struktur, Zielgruppen, Creatives, Texte. Du siehst alle Anzeigen vor dem Start." },
  { nr: "04", tag: "Phase 4", title: "Laufende Optimierung", text: "Wöchentlich Budget, Zielgruppen und Motive anhand echter Daten anpassen." },
  { nr: "05", tag: "Phase 5", title: "Reporting & Kurs", text: "Verständlich, was das Budget bringt. Gemeinsam entscheiden, wie es weitergeht." },
];

const weeklyChecks = [
  { title: "Ausgaben gegen Ziel", text: "Läuft das Budget dort, wo die Anfragen entstehen, oder in Anzeigen, die nur Reichweite bringen?" },
  { title: "Kosten pro Anfrage", text: "Steigen sie, finden wir die Ursache: Creative, Zielgruppe oder Zielseite. Bevor es teuer wird." },
  { title: "Frequenz", text: "Wie oft hat dieselbe Person die Anzeige gesehen? Ab einem gewissen Punkt braucht es ein neues Motiv." },
  { title: "Zielseite", text: "Kommen Besucher an und tun sie, was sie sollen? Absprünge auf der Seite sind oft kein Anzeigenproblem." },
  { title: "Überschneidungen", text: "Konkurrieren Zielgruppen miteinander und treiben die Preise hoch? Dann wird die Struktur bereinigt." },
  { title: "Qualität der Anfragen", text: "Welche Anfragen brauchbar waren, fließt zurück in die Steuerung. Zahlen allein reichen nicht." },
];


const referenzen: RefItem[] = [
  { variant: "ic-3", barWidth: 60, img: "/bilder/projekt-van-den-berg.webp", href: projectPath("van-den-berg"), cat: "Van den Berg Gruppe", title: "Meta Ads mit konstanter Betreuung", text: "Kampagnenstruktur neu aufgebaut, Tracking eingerichtet, Anzeigen auf fokussierte Zielseiten geführt. Konstantes Budget und regelmäßige Auswertung bis 2024.", tag: "Meta Ads · Landingpage · bis 2024" },
  { variant: "ic-1", barWidth: 50, img: "/bilder/projekt-gm-dachdecker.webp", href: projectPath("gm-dachdecker"), cat: "GM-Dachdecker Meisterbetrieb", title: "Kampagnen für die Mitarbeitergewinnung", text: "Meta Ads sprechen Kandidaten an, die nicht aktiv suchen, und führen auf ein Karriereportal mit Direkt-Upload.", tag: "Meta Ads · Recruiting · 2023" },
];

const faqs = [
  { q: "Wie viel Budget brauche ich für den Einstieg?", a: "Wichtiger als die Höhe ist Konstanz: Ein moderates, dauerhaftes Budget bringt mehr als kurze Ausschläge. Den Rahmen für dein Angebot und deine Region klären wir im Erstgespräch." },
  { q: "Wie setzt sich die Zusammenarbeit zusammen?", a: "Das Werbebudget geht direkt an Meta und bleibt in deinem Werbekonto. Die Betreuung durch Pixel56 ist ein fester Monatsbetrag, getrennt ausgewiesen. Creatives oder eine Zielseite kommen nur dazu, wenn du sie brauchst. Prozente vom Werbebudget nehmen wir nicht." },
  { q: "Facebook oder Instagram?", a: "Beide laufen über dieselbe Kampagnenstruktur. Wir starten meist auf beiden und verteilen das Budget nach Daten." },
  { q: "Brauche ich professionelle Fotos oder Videos?", a: "Hilfreich, kein Muss. Echte Aufnahmen aus dem Betrieb wirken auf Meta oft besser als aufwendig produziertes Material. Fehlt Material, schneiden wir aus Vorhandenem oder drehen bei dir." },
  { q: "Wem gehört das Werbekonto?", a: "Dir. Budget, Daten und Kampagnen bleiben jederzeit nachvollziehbar, auch wenn die Zusammenarbeit irgendwann endet." },
  { q: "Wie lange sollte eine Kampagne laufen?", a: "Wir legen vorab einen Testzeitraum fest, meist einige Wochen, und bewerten danach gemeinsam, ob und wie es weitergeht. Pausen kosten Lerneffekt, ein kleineres konstantes Budget ist besser als ein Stopp." },
];

const metaVoices = [verifiedReviews[2], verifiedReviews[0], verifiedReviews[1]];
const spotlight = getFallstudie("van-den-berg");
const spotlightVoice = verifiedReviews[2];

export default function MetaAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbLd items={[{ name: "Leistungen", href: "/dienstleistung" }, { name: "Meta Ads", href: serviceRoutes["meta-ads"] }]} />

      <main className="service-premium meta-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Leistungen", page: "Meta Ads" }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">META ADS FÜR KLEINE UND MITTELSTÄNDISCHE UNTERNEHMEN · FACEBOOK &amp; INSTAGRAM</div>
              <h1>
                <span>Anzeigen, die</span>
                <span className="service-hero-accent">Kunden bringen.</span>
                <span>Oder Bewerber.</span>
              </h1>
              <p>
                Deine nächsten Kunden und Mitarbeiter scrollen abends durch
                Instagram. Wir schalten die Anzeigen, die sie dort erreichen,
                mit Zielseite und Tracking, damit du siehst, was jeder Euro
                bringt.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Meta-Ads-Potenzial besprechen <ArrowIcon />
                </a>
                <Link className="btn-text" href="#fehler">
                  Sechs typische Fehler ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="Meta Ads auf einen Blick">
                <span>Tracking vor dem Start</span>
                <span>Eigenes Werbekonto</span>
                <span>Konstanz statt Stop-and-go</span>
                <span>Ein Ansprechpartner</span>
              </div>
            </div>

            <div className="web-experience-board" aria-label="Beispiel einer Meta-Anzeige im Feed">
              <div className="web-board-top">
                <span>PIXEL56 · META ADS</span>
                <i>LIVE</i>
              </div>
              <FeedMock imgSrc="/bilder/ads-meta-beispiel.webp" />
              <div className="web-board-signals">
                <div><span>01</span><b>Zielgruppe</b><small>passend</small></div>
                <div><span>02</span><b>Creative</b><small>auffällig</small></div>
                <div><span>03</span><b>Zielseite</b><small>fokussiert</small></div>
                <div><span>04</span><b>Tracking</b><small>messbar</small></div>
              </div>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="Meta Ads auf einen Blick">
          <div><span>Ziel</span><strong>Planbare, qualifizierte Anfragen</strong></div>
          <div><span>Kanäle</span><strong>Instagram &amp; Facebook</strong></div>
          <div><span>Hebel</span><strong>Angebot, Creative, Zielseite</strong></div>
          <div><span>Steuerung</span><strong>Tracking &amp; wöchentliche Optimierung</strong></div>
        </section>

        <section className="band dark-stage service-dark-stage" id="status">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">01 — Der Status quo</span>
              <h2 className="band-title">
                Sechs Zeichen, dass Budget <em>verpufft statt wirkt</em>
              </h2>
              <p className="lead">
                Anzeigen schalten ist einfach. Anzeigen, die Anfragen bringen,
                sind etwas anderes. Den meisten Konten fehlt nicht Budget,
                sondern Struktur.
              </p>
              <p className="lead">
                Fast immer fehlt eines von drei Dingen: ein messbares Ziel, eine
                passende Zielseite oder die Geduld, den Algorithmus lernen zu
                lassen.
              </p>
            </div>
            <div className="reveal">
              <StatusPanel head="Typische Warnsignale im Werbekonto" rows={statusRows} />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="warum">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">02 — Warum Meta Ads</span>
              <h2 className="band-title">
                Bekannt werden, <em>bevor gesucht wird</em>
              </h2>
              <p className="lead">
                Google holt Nachfrage ab: Jemand sucht, du erscheinst. Meta
                weckt sie: Dein Angebot erreicht Menschen, die noch nicht
                wissen, dass sie dich brauchen.
              </p>
              <p className="lead">
                Welcher Kanal bei dir zuerst sinnvoll ist, sagen wir dir ehrlich.
              </p>
              <ul className="lines">
                <li>Ohne Anzeigen erreichst du auf Social Media nur, wer dir schon folgt.</li>
                <li>Ein konstantes Budget baut Reichweite auf, die bleibt.</li>
                <li>Retargeting holt Besucher zurück, die beim ersten Mal nicht angefragt haben.</li>
                <li>
                  Für aktive Suchanfragen: <Link href={serviceRoutes["google-ads"]}>Google Ads</Link>
                </li>
              </ul>
            </div>
            <div className="mini-grid reveal" aria-label="Google Ads und Meta Ads im Vergleich">
              <div>
                <b>Google Ads: Nachfrage abholen</b>
                <small>Jemand sucht „Dachdecker Koblenz“ und findet dich. Stark, wenn Suchvolumen da ist. Begrenzt, wenn niemand nach deiner Leistung sucht.</small>
              </div>
              <div>
                <b>Meta Ads: Nachfrage wecken</b>
                <small>Dein Angebot erscheint im Feed der passenden Menschen im Umkreis. Stark für Bekanntheit, Bewerber und Angebote, die man erst sehen muss.</small>
              </div>
              <div>
                <b>Beides zusammen</b>
                <small>Meta macht bekannt, Google fängt die Suche danach ab. Gemeinsam mit einer guten Zielseite entsteht ein System statt zwei Einzelmaßnahmen.</small>
              </div>
              <div>
                <b>Was wir nicht tun</b>
                <small>Budget auf Kanäle verteilen, nur weil es geht. Wenn Meta für dein Angebot nicht passt, sagen wir das im Erstgespräch.</small>
              </div>
            </div>
          </div>
        </section>

        <section className="band theme-light" id="einsatz">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Wofür Meta Ads arbeiten</span>
              <h2 className="band-title">
                Sechs Einsatzfelder, <em>ein Prinzip</em>
              </h2>
            </div>
            <p className="band-note">
              Ein Ziel pro Kampagne, eine Seite, die es einlöst. Alles andere ist Reichweite ohne Ergebnis.
            </p>
          </div>
          <div className="audience-grid reveal">
            {useCases.map((item) => (
              <article className="audience-card" key={item.tag}>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <small>{item.refs.startsWith("Baustein") || item.refs.startsWith("Nach") ? item.refs : `Referenzen: ${item.refs}`}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="leistungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Was wir liefern</span>
              <h2 className="band-title">
                Vom Angebot bis zur <em>wöchentlichen Auswertung</em>
              </h2>
            </div>
            <p className="band-note">
              Wer einen Baustein weglässt, zahlt es über die Kosten pro Anfrage.
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

        <section className="band theme-light" id="creatives" aria-labelledby="meta-creatives-title">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">05 — Echte Kampagnenmotive</span>
              <h2 className="band-title" id="meta-creatives-title">
                Creatives aus <em>echter Kundenarbeit</em>
              </h2>
            </div>
            <p className="band-note">
              Motive aus Kampagnen und Formatvorlagen von Pixel56, jeweils auf das Angebot abgestimmt.
            </p>
          </div>
          <div className="work-gallery work-gallery-social reveal">
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bilder/ads-meta-beispiel.webp" alt="Instagram- und Facebook-Anzeigen für Mitarbeitergewinnung" loading="lazy" decoding="async" />
              <figcaption><b>Anzeigenformate</b><span>Feed · Story · Recruiting</span></figcaption>
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bilder/ads-fb-beispiele.webp" alt="Meta-Anzeige für einen Abbruch- und Tiefbaubetrieb" loading="lazy" decoding="async" />
              <figcaption><b>Van den Berg Gruppe</b><span>Recruiting-Creative · Abbruch &amp; Tiefbau</span></figcaption>
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bilder/projekt-stark-ins-neue-3.webp" alt="Social-Media-Anzeige für Stark ins Neue" loading="lazy" decoding="async" />
              <figcaption><b>Stark ins Neue</b><span>Meta Ads · Kursanmeldung</span></figcaption>
            </figure>
          </div>
        </section>

        {spotlight && (
          <section className="band theme-light" id="fallstudie">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">06 — Ein Projekt im Detail</span>
                <h2 className="band-title">
                  {spotlight.kunde}: <em>{spotlight.loesung.titel}</em>
                </h2>
              </div>
              <p className="band-note">{spotlight.branche} · {spotlight.tags.join(" · ")} · {spotlight.jahr}</p>
            </div>
            <div className="case-spotlight reveal">
              <div>
                <figure className="case-spotlight-visual" style={{ margin: 0 }}>
                  <Image src={vanDenBergImage} alt={`${spotlight.kunde}: ${spotlight.titel}`} fill sizes="(max-width: 980px) 100vw, 50vw" />
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
                      <h3>Laufende Betreuung statt Einmal-Setup</h3>
                      <p>{spotlight.ergebnis.text}</p>
                    </div>
                  )}
                </div>
                <Link className="body-link" href={projectPath(spotlight.slug)}>
                  Zur vollständigen Fallstudie <ArrowIcon />
                </Link>
              </div>
            </div>
            <DetailReihe eintraege={weitereDetails(["van-den-berg"], ["stark-ins-neue"], ["Meta Ads"])} />
          </section>
        )}

        <section className="band theme-light" id="fehler">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">07 — Typische Fehler</span>
              <h2 className="band-title">
                Sechs Fehler, <em>die Budget kosten</em>
              </h2>
            </div>
            <p className="band-note">
              In fast jedem Werbekonto, das wir übernehmen. Keiner ist peinlich, jeder ist vermeidbar.
            </p>
          </div>
          <div className="friction-list reveal">
            {mistakes.map((item, index) => (
              <div className="friction-row" key={item.problem}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>„{item.problem}“</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="prozess">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">08 — So läuft es</span>
              <h2 className="band-title">
                Fünf Phasen, <em>laufend optimiert</em>
              </h2>
            </div>
            <p className="band-note">
              Du weißt jederzeit, was gerade passiert und warum.
            </p>
          </div>
          <Stepper steps={steps} />
        </section>

        <section className="band dark-stage service-dark-stage" id="optimierung">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">09 — Laufende Betreuung</span>
              <h2 className="band-title">
                Was wir <em>jede Woche prüfen</em>
              </h2>
              <p className="lead">
                Eine Kampagne ist nie fertig. Zielgruppen sättigen sich, Motive
                nutzen sich ab, Wettbewerber ändern ihre Gebote. Deshalb kein
                Autopilot, sondern ein fester Rhythmus.
              </p>
              <p className="lead">
                Du bekommst eine Einordnung statt Screenshots: Was lief, was
                ändern wir, was brauchen wir von dir.
              </p>
            </div>
            <div className="mini-grid reveal" aria-label="Wöchentliche Prüfpunkte">
              {weeklyChecks.map((item) => (
                <div key={item.title}>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="branchen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">10 — Worauf es je Branche ankommt</span>
              <h2 className="band-title">
                Was in deiner Branche <em>unbedingt nötig ist</em>
              </h2>
            </div>
            <p className="band-note">
              Die Richtwerte je Anfrage stammen aus veröffentlichten Benchmarks, nicht aus unseren Kampagnen, und schwanken je nach Quelle stark.
            </p>
          </div>
          <div className="audience-grid audience-grid-cols-3 reveal">
            {metaBranchen.map((b) => (
              <article className="audience-card branchen-karte" key={b.id}>
                <span>{b.zielTyp === "Bewerbung" ? "Ziel: Bewerbungen" : "Ziel: Anfragen"}</span>
                <h3>{b.name}</h3>
                <span className="bk-label">Darauf kommt es an</span>
                <ul>
                  {b.darauf.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <span className="bk-label">Unbedingt nötig</span>
                <ul>
                  {b.noetig.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <div className="bk-richtwert">
                  <b>Veröffentlichte Richtwerte: etwa {b.spanneVon} bis {b.spanneBis} € je {b.zielTyp}</b>
                  {b.einordnung}
                </div>
              </article>
            ))}
          </div>
          <p className="branchen-quellen reveal">
            Quellen der Richtwerte, Stand Oktober 2026, jeweils ohne offengelegte Stichprobe:{" "}
            {metaQuellen.map((q, i) => (
              <span key={q.url}>
                {i > 0 ? " · " : ""}
                <a href={q.url} target="_blank" rel="noopener nofollow">{q.name}</a> ({q.region}, {q.jahr})
              </span>
            ))}
            . US-Werte in Dollar, hier gerundet übernommen. Was eine Anfrage bei dir kostet, zeigt erst dein eigenes Werbekonto nach den ersten Wochen.
          </p>
        </section>

        <section className="band theme-light" id="content">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">11 — Creatives &amp; Reels</span>
              <h2 className="band-title">
                Anzeigen, die <em>im Feed stoppen</em>
              </h2>
              <p className="lead">
                Die beste Zielgruppe nützt nichts, wenn das Motiv weitergescrollt
                wird. Kurze Videos aus dem echten Betrieb und ein Satz, der das
                Angebot trifft, entscheiden über die Kosten pro Anfrage.
              </p>
              <ul className="lines">
                <li>Schnitt aus deinem vorhandenen Material, mit Untertiteln und Musik.</li>
                <li>Dreh bei dir im Betrieb, wenn Material fehlt.</li>
                <li>Mehrere Varianten pro Kampagne, damit wir testen statt raten.</li>
                <li>
                  Mehr dazu unter <Link href={serviceRoutes["content-produktion"]}>Social Content &amp; Reels</Link>
                </li>
              </ul>
            </div>
            <div className="reveal">
              <ReelMock videoSrc="/videos/reel-handwerker-tipps.mp4" caption="Beispiel-Reel aus der Content-Produktion" />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="referenzen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">12 — Referenzen</span>
              <h2 className="band-title">
                Aus der <em>echten Arbeit</em>
              </h2>
            </div>
            <p className="band-note">
              Zwei Ziele, neue Kunden und neue Mitarbeiter. Beide mit Tracking, Zielseite und laufender Betreuung.
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

        <section className="band dark-stage service-dark-stage" id="zusammenarbeit">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">13 — Zusammenarbeit</span>
              <h2 className="band-title">
                Deine Kampagne. <em>Direkter Draht.</em>
              </h2>
              <p className="lead">
                Kein Ticketsystem, kein Zwischenmanager. Du schreibst per WhatsApp mit dem, der die Kampagne selbst steuert.
              </p>
              <ul className="lines">
                <li>Dein Werbekonto, dein Zugriff, deine Daten.</li>
                <li>Alle Anzeigen vor dem Start zur Freigabe.</li>
                <li>Regelmäßige Auswertung in verständlicher Sprache.</li>
              </ul>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 — Dein Ansprechpartner"
                messages={[
                  { from: "in", text: "Sollen wir das Creative für die neue Kampagne tauschen?" },
                  { from: "out", text: "Ja, drei neue Varianten sind hochgeladen. Ich schicke dir die Vorschau." },
                  { from: "in", text: "Super, schau ich mir gleich an." },
                ]}
                footer="Beispielhafter Ablauf einer Abstimmung während der Betreuung"
              />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="bewertungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">14 — Das sagen Kunden</span>
              <h2 className="band-title">
                Wörtlich so <em>veröffentlicht.</em>
              </h2>
            </div>
            <p className="band-note">Nichts erfunden, nichts geschönt.</p>
          </div>
          <Reviews reviews={metaVoices} items={metaVoices} />
        </section>

        <RegionLinks leistung="Meta Ads" kurz="Meta Ads" />

        <section className="band theme-light" id="faq">
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

        <section className="band theme-light" id="anfrage">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">16 — In fünf Klicks zur Einschätzung</span>
              <h2 className="band-title">
                Sag uns kurz, <em>was die Anzeigen bringen sollen.</em>
              </h2>
            </div>
            <p className="band-note">{frageboegen["meta-ads"].einleitung}</p>
          </div>
          <div className="reveal">
            <LeistungsAnfrage bogen={frageboegen["meta-ads"]} google={{ bewertung: googleBewertungLautProfil, anzahl: googleAnzahlLautProfil }} />
          </div>
        </section>

          </div>
        </div>

        <div className="sheet service-ending">
          <CloseCta ctaLabel="Meta-Ads-Potenzial besprechen">
            Lass uns über deine <em>Meta-Ads-Kampagne</em> sprechen.
          </CloseCta>

          <ContactStrip />

          <SiteFooter />
        </div>
      </main>
    </>
  );
}
