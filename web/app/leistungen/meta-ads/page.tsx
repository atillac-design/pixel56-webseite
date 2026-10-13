import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
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

export const metadata: Metadata = {
  title: "Meta Ads Agentur: Facebook & Instagram Werbung, die Anfragen bringt",
  description:
    "Meta Ads für Handwerk, Mittelstand und Dienstleister: Facebook- und Instagram-Kampagnen mit sauberem Tracking, passender Zielseite und laufender Betreuung. Pixel56 aus Bendorf bei Koblenz.",
  alternates: { canonical: serviceRoutes["meta-ads"] },
  openGraph: {
    title: "Meta Ads Agentur: Facebook & Instagram Werbung, die Anfragen bringt | Pixel56",
    description:
      "Kampagnen für Kunden- und Mitarbeitergewinnung mit Tracking, Zielseite und laufender Optimierung. Aus Bendorf bei Koblenz, deutschlandweit.",
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
    text: "Menschen in deinem Einzugsgebiet sehen dein Angebot, bevor sie bei Google suchen. Für Betriebe, die planbar neue Aufträge brauchen und nicht nur auf Empfehlungen warten wollen.",
    refs: "Van den Berg Gruppe · M&A Transporte",
  },
  {
    tag: "Mitarbeitergewinnung",
    title: "Bewerber erreichen, die nicht suchen",
    text: "Die besten Fachkräfte lesen keine Stellenbörsen. Auf Instagram und Facebook erreichst du sie trotzdem, mit Einblicken in den Betrieb und einem Bewerbungsweg, der in zwei Minuten erledigt ist.",
    refs: "GM-Dachdecker",
  },
  {
    tag: "Anmeldungen",
    title: "Kurse, Termine und Veranstaltungen",
    text: "Kampagnen, die auf eine Anmeldestrecke führen statt auf eine allgemeine Seite. Für Bildungsangebote, Events und alles, was einen festen Termin hat.",
    refs: "Stark ins Neue · Sportler für Kinderherzen",
  },
  {
    tag: "Regionale Bekanntheit",
    title: "Die Marke, die man schon kennt",
    text: "Wer dich schon dreimal im Feed gesehen hat, ruft eher an. Reichweitenkampagnen im Umkreis bauen Vertrauen auf, bevor der Bedarf entsteht.",
    refs: "Oktay Cömertler",
  },
  {
    tag: "Retargeting",
    title: "Besucher zurückholen",
    text: "Die meisten fragen nicht beim ersten Besuch an. Wer auf deiner Website war, sieht danach die passende Anzeige, mit Angebot, Referenz oder Erinnerung.",
    refs: "Baustein in laufenden Kampagnen",
  },
  {
    tag: "Produkte & Shops",
    title: "Verkaufen über den Feed",
    text: "Produktanzeigen mit Katalog, Bewegtbild und direktem Weg in den Shop. Sinnvoll, wenn Marge und Warenkorb die Anzeigenkosten tragen; das prüfen wir vorher ehrlich.",
    refs: "Nach Prüfung im Erstgespräch",
  },
];

const scope = [
  { nr: "01", title: "Ziel & Angebot", text: "Bevor Budget fließt, klären wir, welche Aktion zählt und was eine Anfrage wert ist. Daraus entsteht ein Angebot, das in einer Anzeige verständlich ist." },
  { nr: "02", title: "Tracking-Fundament", text: "Pixel, Conversions API und Einwilligung werden sauber eingerichtet, DSGVO-konform. Erst wenn Anfragen messbar sind, geht die Kampagne live." },
  { nr: "03", title: "Zielgruppen & Struktur", text: "Umkreis, Interessen, Lookalikes und Retargeting in einer Struktur, die der Algorithmus lernen kann. Nicht zehn Kampagnen, die sich gegenseitig das Budget wegnehmen." },
  { nr: "04", title: "Creatives", text: "Bilder, kurze Videos und Texte, die im Feed stoppen und zum Angebot passen. Aus deinem Material oder von uns produziert, mit regelmäßigem Wechsel gegen Abnutzung." },
  { nr: "05", title: "Zielseite", text: "Jede Kampagne bekommt eine Seite, die das Versprechen der Anzeige einlöst. Wenn nötig bauen wir sie, sonst passen wir die bestehende an." },
  { nr: "06", title: "Optimierung & Reporting", text: "Wöchentliche Auswertung, Budget wandert dahin, wo es wirkt. Du bekommst verständliche Zahlen statt Screenshots aus dem Werbeanzeigenmanager." },
];

const mistakes = [
  { problem: "Kampagne an, Kampagne aus, je nach Kontostand.", answer: "Ein moderates, konstantes Budget schlägt kurze Ausschläge fast immer. Der Algorithmus braucht Daten, und die entstehen nur im laufenden Betrieb." },
  { problem: "Die Anzeige führt auf die Startseite.", answer: "Wer auf ein konkretes Angebot klickt, erwartet genau dieses Angebot. Eine Landingpage pro Kampagne, mit einem Ziel und ohne Ablenkung." },
  { problem: "„Beitrag bewerben“ statt Kampagne.", answer: "Der Boost-Button ist bequem und teuer. Ziele, Zielgruppen und Conversion-Messung gibt es nur im Werbeanzeigenmanager." },
  { problem: "Es läuft, aber niemand weiß, ob Anfragen daraus kommen.", answer: "Ohne Tracking ist jede Entscheidung Bauchgefühl. Wir messen die Aktion, die zählt, und besprechen offen, was wegen Einwilligung nicht messbar ist." },
  { problem: "Dasselbe Motiv seit einem halben Jahr.", answer: "Creatives nutzen sich ab. Wir planen den Wechsel von Anfang an ein und testen Varianten, statt zu warten, bis die Kosten pro Anfrage steigen." },
  { problem: "Zielgruppe so eng, dass niemand übrig bleibt. Oder so breit, dass alle gemeint sind.", answer: "Wir starten mit klaren Hypothesen, lassen den Algorithmus innerhalb sinnvoller Grenzen lernen und engen nach Daten ein, nicht nach Gefühl." },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Analyse & Ziel", text: "Angebot, Zielgruppe, bisherige Kampagnen und Website. Wir legen fest, welche Aktion zählt und was sie wert sein darf." },
  { nr: "02", tag: "Phase 2", title: "Tracking", text: "Pixel, Conversions API, Einwilligung und Messpunkte auf der Zielseite. Getestet, bevor ein Euro fließt." },
  { nr: "03", tag: "Phase 3", title: "Aufbau", text: "Kampagnenstruktur, Zielgruppen, Creatives und Texte. Du siehst alle Anzeigen vor dem Start." },
  { nr: "04", tag: "Phase 4", title: "Laufende Optimierung", text: "Wöchentliche Auswertung, Anpassung von Budget, Zielgruppen und Motiven anhand echter Daten." },
  { nr: "05", tag: "Phase 5", title: "Reporting & Kurs", text: "Verständliche Auswertung, was das Budget bringt, und gemeinsame Entscheidung, wie es weitergeht." },
];

const weeklyChecks = [
  { title: "Ausgaben gegen Ziel", text: "Läuft das Budget dort, wo die Anfragen entstehen, oder in Anzeigen, die nur Reichweite bringen?" },
  { title: "Kosten pro Anfrage", text: "Steigen sie, finden wir die Ursache: Creative, Zielgruppe oder Zielseite. Bevor es teuer wird, nicht danach." },
  { title: "Frequenz", text: "Wie oft hat dieselbe Person die Anzeige gesehen? Ab einem gewissen Punkt braucht es ein neues Motiv." },
  { title: "Zielseite", text: "Kommen Besucher an und tun sie, was sie sollen? Absprünge auf der Seite sind oft kein Anzeigenproblem." },
  { title: "Überschneidungen", text: "Konkurrieren Zielgruppen miteinander und treiben die Preise hoch? Dann wird die Struktur bereinigt." },
  { title: "Qualität der Anfragen", text: "Deine Rückmeldung, welche Anfragen brauchbar waren, fließt zurück in die Steuerung. Zahlen allein reichen nicht." },
];

const costParts = [
  { title: "Werbebudget", text: "Geht direkt an Meta und bleibt in deinem Werbekonto nachvollziehbar. Wir empfehlen einen Rahmen, der zu Angebot und Region passt." },
  { title: "Betreuung", text: "Strategie, Aufbau, Optimierung und Reporting durch Pixel56, als monatlicher Festbetrag, getrennt vom Werbebudget ausgewiesen." },
  { title: "Creatives", text: "Anzeigenmotive aus deinem Material oder produziert vor Ort. Nach Aufwand angeboten, nie versteckt im Betreuungspreis." },
  { title: "Zielseite", text: "Falls keine passende Seite existiert, bauen wir eine Landingpage. Einmalig, danach gehört sie dir und trägt jede weitere Kampagne." },
];

const referenzen: RefItem[] = [
  { variant: "ic-3", barWidth: 60, img: "/bilder/projekt-van-den-berg.webp", href: projectPath("van-den-berg"), cat: "Van den Berg Gruppe", title: "Meta Ads mit laufender Betreuung", text: "Kampagnenstruktur neu aufgebaut, Tracking eingerichtet, Anzeigen auf fokussierte Zielseiten geführt. Seitdem konstantes Budget und laufende Auswertung.", tag: "Meta Ads · Landingpage · laufend" },
  { variant: "ic-1", barWidth: 50, img: "/bilder/projekt-gm-dachdecker.webp", href: projectPath("gm-dachdecker"), cat: "GM-Dachdecker Meisterbetrieb", title: "Kampagnen für die Mitarbeitergewinnung", text: "Meta Ads sprechen Kandidaten an, die nicht aktiv suchen, und führen auf ein Karriereportal mit Direkt-Upload.", tag: "Meta Ads · Recruiting · 2023" },
];

const faqs = [
  { q: "Wie viel Budget brauche ich für den Einstieg?", a: "Wichtiger als die Höhe ist Konstanz: Ein moderates, dauerhaftes Budget bringt mehr als kurze, hohe Ausschläge. Welcher Rahmen für dein Angebot und deine Region sinnvoll ist, klären wir im Erstgespräch anhand deiner Ziele, nicht pauschal." },
  { q: "Facebook oder Instagram, was ist besser?", a: "Beide laufen über dieselbe Kampagnenstruktur bei Meta und lassen sich kombinieren. Welche Plattform mehr bringt, hängt von Zielgruppe und Angebot ab; wir starten meist auf beiden und verteilen das Budget nach Daten." },
  { q: "Brauche ich professionelle Fotos oder Videos für die Anzeigen?", a: "Hilfreich, aber kein Muss von Anfang an. Echte Aufnahmen aus dem Betrieb wirken auf Meta oft besser als aufwendig produziertes Material. Wenn Material fehlt, schneiden wir aus Vorhandenem oder drehen bei dir vor Ort." },
  { q: "Was, wenn ich das Budget mal pausieren muss?", a: "Möglich, aber der Lerneffekt geht dabei meist verloren: Nach einer Pause muss der Algorithmus neu lernen. Besser ist ein kleineres, konstantes Budget als ein Stopp." },
  { q: "Was kostet die Betreuung, getrennt vom Werbebudget?", a: "Das Werbebudget geht direkt an Meta. Die Betreuung deckt Strategie, Aufbau, Optimierung und Reporting ab und wird als monatlicher Festbetrag separat ausgewiesen. Den passenden Umfang klären wir im kostenlosen Erstgespräch." },
  { q: "Wem gehört das Werbekonto?", a: "Dir. Wir arbeiten in einem Werbekonto, auf das dein Unternehmen vollen Zugriff hat, damit Budget, Daten und Kampagnen jederzeit nachvollziehbar bleiben, auch wenn die Zusammenarbeit irgendwann endet." },
  { q: "Könnt ihr Creatives und Reels für die Anzeigen erstellen?", a: "Ja. Wir schneiden aus deinem Material Anzeigenmotive und kurze Videos oder planen Aufnahmen vor Ort. Beides wird getrennt nach Aufwand angeboten." },
  { q: "Wie messt ihr, ob Anfragen aus den Anzeigen kommen?", a: "Wir definieren zuerst, welche Aktion zählt, etwa eine Anfrage, ein Anruf oder eine Terminbuchung. Dann richten wir Pixel, Conversions API und Messpunkte ein und besprechen offen, welche Daten wegen Einwilligung und Plattformgrenzen tatsächlich verfügbar sind." },
  { q: "Bekomme ich Einblick in die Kampagnenergebnisse?", a: "Ja. Ausgaben, Reichweite, Klicks und messbare Anfragen besprechen wir regelmäßig in verständlicher Form. Außerdem hast du jederzeit Zugriff auf dein Werbekonto." },
  { q: "Wie lange sollte eine Kampagne laufen?", a: "Das hängt von Ziel, Budget und Datenmenge ab. Wir legen vorab einen Testzeitraum fest, meist einige Wochen, und bewerten danach gemeinsam, ob und wie es weitergeht." },
  { q: "Bleibst du auch danach erreichbar?", a: "Ja. Per WhatsApp, Telefon oder E-Mail über einen festen Ansprechpartner. Betreuung ist Teil der Zusammenarbeit, kein Zusatzverkauf." },
];

const metaVoices = [verifiedReviews[2], verifiedReviews[0], verifiedReviews[1]];
const spotlight = getFallstudie("van-den-berg");
const spotlightVoice = verifiedReviews[2];

export default function MetaAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="service-premium meta-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Leistungen", page: "Meta Ads" }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">META ADS AGENTUR · FACEBOOK &amp; INSTAGRAM · DEUTSCHLANDWEIT</div>
              <h1>
                <span>Meta Ads, die</span>
                <span className="service-hero-accent">Anfragen bringen.</span>
                <span>Nicht nur Reichweite.</span>
              </h1>
              <p>
                Facebook und Instagram erreichen Menschen, bevor sie bei Google
                suchen. Wir bauen Kampagnen für Kunden- und Mitarbeitergewinnung
                mit sauberem Tracking, einer Zielseite, die das Versprechen der
                Anzeige einlöst, und laufender Betreuung statt einmaligem Setup.
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
                Eine Kampagne laufen zu lassen ist einfach. Eine Kampagne laufen
                zu lassen, die tatsächlich Anfragen bringt, ist etwas anderes.
                Die meisten Konten, die wir übernehmen, haben nicht zu wenig
                Budget, sondern keine Struktur.
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
                Bei Google Ads muss die Absicht schon da sein: Jemand sucht, du
                erscheinst. Facebook und Instagram arbeiten davor. Sie zeigen
                dein Angebot Menschen, die zur Zielgruppe passen, aber noch nicht
                wissen, dass sie dich brauchen.
              </p>
              <p className="lead">
                Deshalb ergänzen sich beide Kanäle: Google holt Nachfrage ab,
                Meta weckt sie. Welcher zuerst sinnvoll ist, hängt von deinem
                Angebot ab, und das sagen wir dir ehrlich.
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
              Jede Kampagne hat genau ein Ziel und eine Seite, die dieses Ziel
              einlöst. Alles andere ist Reichweite ohne Ergebnis.
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
              Sechs Bausteine, die zusammengehören. Wer einen weglässt, zahlt
              es über die Kosten pro Anfrage.
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
              Die Motive stammen aus Kampagnen und Formatvorlagen von Pixel56.
              Kampagnenaufbau, Zielgruppe und Zielseite wurden jeweils auf das
              Angebot abgestimmt.
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
              <figcaption><b>Abbruch &amp; Tiefbau</b><span>Ad Creative · Bewerberansprache</span></figcaption>
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
              Wir sehen sie in fast jedem Werbekonto, das wir übernehmen. Keiner
              davon ist peinlich, jeder ist vermeidbar.
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
              <span className="band-tag">08 — Der Weg dahin</span>
              <h2 className="band-title">
                Fünf Phasen, <em>laufend optimiert</em>
              </h2>
            </div>
            <p className="band-note">
              Vom ersten Gespräch bis zur laufenden Betreuung. Du weißt
              jederzeit, was gerade passiert und warum.
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
                nutzen sich ab, Wettbewerber ändern ihre Gebote. Deshalb gibt es
                bei uns keinen Autopilot, sondern einen festen Rhythmus.
              </p>
              <p className="lead">
                Du bekommst keine Screenshots aus dem Werbeanzeigenmanager,
                sondern eine Einordnung: Was lief, was ändern wir, was brauchen
                wir von dir.
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

        <section className="band theme-light" id="kosten">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">10 — Budget &amp; Kosten</span>
              <h2 className="band-title">
                Woraus sich die Kosten <em>zusammensetzen</em>
              </h2>
              <p className="lead">
                Vier Posten, klar getrennt. Das Werbebudget bleibt immer in
                deinem Werbekonto, die Betreuung ist ein fester Betrag, und
                Creatives oder Zielseite werden nur angeboten, wenn du sie
                brauchst.
              </p>
              <p className="lead">
                Konkrete Zahlen nennen wir im Erstgespräch, weil sie von
                Angebot, Region und Ziel abhängen. Was wir nicht tun: Prozente
                vom Werbebudget nehmen. Das belohnt hohes Budget, nicht gute
                Arbeit.
              </p>
            </div>
            <div className="mini-grid reveal" aria-label="Kostenbestandteile">
              {costParts.map((item) => (
                <div key={item.title}>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </div>
              ))}
            </div>
          </div>
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
                wird. Kurze Videos aus dem echten Betrieb, klare Bildsprache und
                ein Satz, der das Angebot trifft, entscheiden über die Kosten pro
                Anfrage.
              </p>
              <ul className="lines">
                <li>Schnitt aus deinem vorhandenen Material, mit Untertiteln und Musik.</li>
                <li>Dreh vor Ort in der Region Koblenz, wenn Material fehlt.</li>
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
              Zwei Projekte mit unterschiedlichem Ziel: neue Kunden und neue
              Mitarbeiter. Beide mit Tracking, Zielseite und laufender Betreuung.
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
                Kein Ticketsystem, kein Zwischenmanager. Neue Creatives,
                Zielgruppen oder Budgetfragen klärst du direkt per WhatsApp mit
                deinem festen Ansprechpartner, der die Kampagne selbst steuert.
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
              <span className="band-tag">14 — Kundenstimmen</span>
              <h2 className="band-title">
                Das sagen <em>Kunden über uns</em>
              </h2>
            </div>
            <p className="band-note">
              Nur Aussagen, die unsere Kunden so veröffentlicht haben. Keine
              erfundenen Bewertungen, keine geschönten Zahlen.
            </p>
          </div>
          <Reviews reviews={metaVoices} items={metaVoices} />
        </section>

        <section className="band theme-light" id="faq">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">15 — Häufige Fragen</span>
              <h2 className="band-title">
                Was du vorher <em>wissen willst</em>
              </h2>
            </div>
          </div>
          <FaqList items={faqs} />
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
