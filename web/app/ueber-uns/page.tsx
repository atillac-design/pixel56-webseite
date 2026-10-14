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
  Reviews,
  WaMock,
} from "@/components/ui";
import { services, site } from "@/lib/site";
import { getFallstudie } from "@/lib/projekte";
import GoogleBewertungen from "@/components/GoogleBewertungen";
import { googleAuswahl, holeGoogleStand } from "@/lib/google-bewertungen";
import { projectPath, routes } from "@/lib/routes";
import atillaImage from "@/public/bilder/team-atilla.webp";
import maTransporteImage from "@/public/bilder/projekt-ma-transporte.webp";
import koblenzImage from "@/public/bilder/koblenz-rhein.webp";

export const metadata: Metadata = {
  title: "Über uns: Digitalagentur in Bendorf bei Koblenz",
  description:
    "Gründergeführte Digitalagentur in Bendorf bei Koblenz: Websites, Meta Ads, Content und KI aus einer Hand, mit einem festen Ansprechpartner.",
  alternates: { canonical: routes.about },
  openGraph: {
    title: "Über Pixel56: ein Ansprechpartner, alles aus einer Hand",
    description:
      "Wer hinter Pixel56 steht, wie wir arbeiten und warum du bei uns immer mit der Person sprichst, die dein Projekt umsetzt.",
    url: routes.about,
  },
};

const aboutUrl = `${site.url}${routes.about}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${aboutUrl}#about`,
  url: aboutUrl,
  name: "Über Pixel56",
  mainEntity: {
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    telephone: site.phoneIntl,
    email: site.email,
    foundingDate: "2018",
    founder: { "@type": "Person", name: "Atilla Ciftcioglu", url: `${site.url}/team/atilla-ciftcioglu` },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hüttenstraße 100",
      postalCode: "56170",
      addressLocality: "Bendorf",
      addressRegion: "Rheinland-Pfalz",
      addressCountry: "DE",
    },
  },
};

const steckbrief = [
  { title: "Rolle", text: "Atilla Ciftcioglu, Gründer. Verantwortet Strategie, Konzeption und Umsetzung selbst." },
  { title: "Schwerpunkte", text: "Websites, Meta Ads, Social Content und KI-Prozesse für kleine und mittlere Unternehmen." },
  { title: "Netzwerk", text: "Für Dreh, Schnitt oder Entwicklung kommen feste Partner dazu. Die Verantwortung bleibt bei Pixel56." },
  { title: "Erreichbar", text: "Telefon, WhatsApp, Video-Call oder bei dir im Betrieb. Du kennst den Namen, du kennst die Nummer." },
];

const agenturProbleme = [
  {
    problem: "Das Verkaufsgespräch führt jemand anderes als die Umsetzung.",
    answer: "Bei uns ist es dieselbe Person. Was im Erstgespräch besprochen wird, landet ohne Übersetzungsverlust in der Umsetzung, weil niemand dazwischensitzt.",
  },
  {
    problem: "Website, Anzeigen und Content kommen von drei Anbietern, die sich nicht abstimmen.",
    answer: "Wir planen die Bausteine zusammen. Die Website nimmt auf, was die Anzeige verspricht, und der Content zeigt, was die Website behauptet.",
  },
  {
    problem: "Nach dem Launch wird es still.",
    answer: "Betreuung gehört zur Zusammenarbeit. Wir schauen, was ankommt, und passen an, statt zu warten, bis sich jemand beschwert.",
  },
  {
    problem: "Berichte voller Kennzahlen, aber ohne Aussage.",
    answer: "Du bekommst eine Einordnung in ganzen Sätzen: Was hat funktioniert, was nicht, und was machen wir als Nächstes. Die Zahlen bleiben jederzeit einsehbar.",
  },
  {
    problem: "Pakete von der Stange, egal was der Betrieb eigentlich braucht.",
    answer: "Wir starten bei deinem Ziel. Wer nur eine Website braucht, bekommt eine Website. Wer nur Anzeigen braucht, bekommt Anzeigen.",
  },
];

const prinzipien = [
  {
    tag: "Prinzip 01",
    title: "Ehrlichkeit vor Verkauf",
    text: "Das Erstgespräch ist kostenlos und ergebnisoffen. Wenn eine Leistung dir nichts bringt, sagen wir das vorher. Lieber ein Projekt weniger als ein Kunde, der nach drei Monaten enttäuscht ist.",
    note: "Im Alltag heißt das: Auch ein „Das brauchst du nicht“ ist eine Antwort.",
  },
  {
    tag: "Prinzip 02",
    title: "Wirkung vor Ästhetik",
    text: "Eine Website muss gut aussehen, das ist Pflicht. Entscheidend ist, ob sie Anfragen bringt, ob Bewerber sich melden, ob die Anzeige zum Angebot passt. Daran messen wir unsere Arbeit.",
    note: "Im Alltag heißt das: Schön allein reicht nicht als Abnahmekriterium.",
  },
  {
    tag: "Prinzip 03",
    title: "Dranbleiben vor Abliefern",
    text: "Der Livegang ist ein Anfang. Rankings, Kampagnen und Inhalte brauchen Pflege, sonst verlieren sie an Wert. Deshalb ist Betreuung Teil unserer Zusammenarbeit und kein Zusatzverkauf.",
    note: "Im Alltag heißt das: Wir melden uns, bevor du fragen musst.",
  },
];

const zielgruppen = [
  {
    tag: "Handwerk & Bau",
    title: "Betriebe mit vollen Auftragsbüchern und leerer Bewerbermappe",
    text: "Dachdecker, Abbruch, Tiefbau, Trocknungstechnik. Hier geht es um Vertrauen, Erreichbarkeit und darum, die richtigen Leute zu finden.",
    refs: "GM-Dachdecker, MDU Bedachungen, DEMA Bedachungen, Oktay Cömertler, Colak GmbH",
  },
  {
    tag: "Transport, Technik & Dienstleistung",
    title: "Unternehmen, deren Leistung online nicht sichtbar war",
    text: "Spezialisierte Anbieter, die über Empfehlungen wachsen und online nachholen wollen, was sie im Betrieb längst können.",
    refs: "M&A Transporte, Van den Berg Gruppe, CASS Schulungen, Schlüsselfertig-Immobilien",
  },
  {
    tag: "Bildung, Soziales & Vereine",
    title: "Initiativen, die mit kleinem Budget viel erreichen müssen",
    text: "Gemeinnützige Träger und Vereine, bei denen jede Anmeldung und jede Spende zählt und die Website das zentrale Werkzeug ist.",
    refs: "Stark ins Neue, Lernforum Obertshausen, Sportler für Kinderherzen",
  },
  {
    tag: "Lokale Marken & Handel",
    title: "Geschäfte, die eine erkennbare Marke brauchen",
    text: "Vom Atelier bis zur Gastronomie: ein Auftritt, der zum Laden passt, und Content, der regelmäßig neue Kunden bringt.",
    refs: "CurlyAnn Soulcare & Art, Cavar Home, DiscountHaus Holding, Burgerfabriq",
  },
];

const ablauf = [
  { nr: "01", title: "Erstgespräch", text: "Kostenlos, unverbindlich, meist 15 bis 30 Minuten. Du beschreibst, wo du stehst und was du erreichen willst. Wir hören zu und fragen nach.", gets: "Du bekommst: eine ehrliche erste Einschätzung" },
  { nr: "02", title: "Einschätzung & Angebot", text: "Wir sagen, welcher Baustein den größten Hebel hat, und beschreiben den Weg dorthin. Das Angebot ist konkret, mit Umfang, Ablauf und Preis.", gets: "Du bekommst: ein Angebot, das zum Ziel passt" },
  { nr: "03", title: "Umsetzung", text: "Feste Abstimmungstermine, Zwischenstände zum Anschauen, Feedback direkt an die Person, die umsetzt. Keine Überraschungen am Ende.", gets: "Du bekommst: Zwischenstände, die du prüfen kannst" },
  { nr: "04", title: "Betreuung", text: "Nach dem Livegang oder Kampagnenstart beobachten wir, was passiert, und passen an. Du entscheidest, wie eng die Betreuung läuft.", gets: "Du bekommst: Einordnung statt Zahlenfriedhof" },
];

const nichtMachen = [
  { title: "Keine Rankingversprechen", text: "Niemand kann Platz 1 bei Google garantieren. Wir versprechen saubere Arbeit und zeigen, was sich daraus entwickelt." },
  { title: "Keine erfundenen Bewertungen", text: "Auf dieser Website stehen nur Aussagen, die unsere Kunden so veröffentlicht haben. Keine geschönten Zahlen, keine Fantasie-Statistiken." },
  { title: "Keine Abhängigkeit", text: "Website, Werbekonten, Domains und Daten laufen auf deinen Namen. Wenn du gehen willst, nimmst du alles mit." },
  { title: "Keine Standardpakete", text: "Jedes Angebot entsteht aus dem Erstgespräch. Was du nicht brauchst, steht auch nicht drin." },
];

const faqs = [
  { q: "Wer ist mein Ansprechpartner während des Projekts?", a: "Atilla Ciftcioglu, von der ersten Anfrage bis zur laufenden Betreuung. Keine wechselnden Projektmanager, kein Neu-Erklären. Wenn Partner für Dreh, Schnitt oder Entwicklung dazukommen, bleibt die Verantwortung bei Pixel56." },
  { q: "Wie groß ist Pixel56?", a: "Bewusst klein. Pixel56 ist gründergeführt und arbeitet mit einem festen Netzwerk aus Spezialisten, die je nach Projekt dazukommen. Dadurch bleiben die Wege kurz und die Preise nachvollziehbar." },
  { q: "Arbeitet ihr nur in Bendorf und Koblenz?", a: "Der Sitz ist in Bendorf, und lokale Betriebe aus der Region sind uns besonders vertraut. Die Zusammenarbeit läuft aber ortsunabhängig per Video-Call, Telefon und WhatsApp. Wir betreuen Kunden in ganz Deutschland." },
  { q: "Treffen wir uns persönlich?", a: "Gern, bei dir im Betrieb: zum Kennenlernen, für Fotos oder einen Dreh. Alles andere läuft per WhatsApp, E-Mail, Telefon oder Video-Call, so bleibt es für beide Seiten schnell. Ein Ladenlokal mit Wartezimmer haben wir nicht." },
  { q: "Übernehmt ihr auch nur Teilleistungen?", a: "Ja. Alles aus einer Hand ist ein Angebot, kein Zwang. Wer nur eine Website, nur Anzeigen oder nur Content braucht, bekommt genau das." },
  { q: "Was kostet das Erstgespräch?", a: "Nichts. Es dient dazu, deine Situation ehrlich einzuschätzen. Erst danach gibt es ein konkretes, auf dich zugeschnittenes Angebot." },
];

export default async function UeberUnsPage() {
  const googleStand = await holeGoogleStand();
  const spotlight = getFallstudie("ma-transporte");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="service-premium about-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Unternehmen", page: "Über uns" }} />

          <header className="service-premium-hero about-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">ÜBER PIXEL56 · BENDORF BEI KOBLENZ</div>
              <h1>
                <span>Eine Agentur,</span>
                <span className="service-hero-accent">ein Ansprechpartner.</span>
                <span>Kein Callcenter.</span>
              </h1>
              <p>
                Pixel56 ist eine gründergeführte Digitalagentur aus Bendorf bei
                Koblenz. Wer hier anruft, spricht mit der Person, die das Projekt
                plant und umsetzt: Websites, Meta Ads, Social Content und
                KI-Prozesse für Unternehmen, die online Anfragen und Bewerber
                gewinnen wollen.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Kostenloses Erstgespräch <ArrowIcon />
                </a>
                <Link className="btn-text" href="#wer">
                  Wer dahinter steht ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="Pixel56 auf einen Blick">
                <span>Gründergeführt seit 2018</span>
                <span>Bendorf bei Koblenz</span>
                <span>Web, Ads, Content, KI</span>
                <span>Betreuung nach dem Launch</span>
              </div>
            </div>

            <div className="founder-visual about-hero-visual reveal">
              <div className="founder-frame">
                <Image src={atillaImage} alt="Atilla Ciftcioglu, Gründer von Pixel56" priority sizes="(max-width: 1080px) 92vw, 520px" />
              </div>
              <span>// ATILLA CIFTCIOGLU · GRÜNDER · STRATEGIE &amp; UMSETZUNG</span>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="Pixel56 auf einen Blick">
          <div>
            <span>Gründer</span>
            <strong>Atilla Ciftcioglu, seit 2018</strong>
          </div>
          <div>
            <span>Region</span>
            <strong>Bendorf bei Koblenz, deutschlandweit</strong>
          </div>
          <div>
            <span>Arbeitsweise</span>
            <strong>Ein Ansprechpartner, alles aus einer Hand</strong>
          </div>
          <div>
            <span>Kunden</span>
            <strong>Handwerk, Mittelstand, Vereine, Selbstständige</strong>
          </div>
        </section>

        <section className="band theme-light" id="wer">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">01 — Wer dahinter steht</span>
              <h2 className="band-title">
                Du sprichst mit dem, <em>der es auch macht</em>
              </h2>
              <p className="lead">
                Pixel56 ist bewusst klein aufgebaut. Atilla Ciftcioglu hat die
                Agentur gegründet, weil kleine und mittlere Unternehmen dieselbe
                Qualität verdienen wie Konzerne, nur ohne die Abteilungen
                dazwischen. Er verantwortet Strategie, Konzeption und Umsetzung
                selbst.
              </p>
              <p className="lead">
                Wenn ein Projekt Spezialisten braucht, etwa für Dreh, Schnitt
                oder Entwicklung, kommen sie aus einem festen Netzwerk dazu. Dein
                Ansprechpartner bleibt derselbe, und die Verantwortung für das
                Ergebnis liegt bei Pixel56.
              </p>
              <Link className="body-link" href="/team/atilla-ciftcioglu">
                Mehr über Atilla Ciftcioglu <ArrowIcon />
              </Link>
            </div>
            <div className="mini-grid reveal" aria-label="Steckbrief Pixel56">
              {steckbrief.map((item) => (
                <div key={item.title}>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="warum">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Warum es Pixel56 gibt</span>
              <h2 className="band-title">
                Fünf Dinge, die bei Agenturen <em>oft schiefgehen</em>
              </h2>
            </div>
            <p className="band-note">
              Die meisten unserer Kunden hatten vorher schon eine Agentur. Die
              Erfahrungen ähneln sich, und aus ihnen ist unsere Arbeitsweise
              entstanden.
            </p>
          </div>
          <div className="friction-list reveal">
            {agenturProbleme.map((item, index) => (
              <div className="friction-row" key={item.problem}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.problem}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="prinzipien">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Woran wir uns halten</span>
              <h2 className="band-title">
                Drei Prinzipien, <em>keine Poster-Werte</em>
              </h2>
            </div>
            <p className="band-note">
              Keine Leitsätze fürs Büro, sondern Regeln, an denen du jede
              Zusammenarbeit mit uns messen kannst.
            </p>
          </div>
          <div className="audience-grid cols-3 reveal">
            {prinzipien.map((item) => (
              <article className="audience-card" key={item.tag}>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <small>{item.note}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="leistungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Leistungen aus einer Hand</span>
              <h2 className="band-title">
                Acht Bausteine, <em>die zusammenpassen</em>
              </h2>
            </div>
            <p className="band-note">
              Jeder Baustein funktioniert für sich. Seine Wirkung entfaltet er
              aber erst im Zusammenspiel: Die Anzeige führt auf die Website, die
              Website zeigt den Content, und KI nimmt dir die Routine ab.
            </p>
          </div>
          <div className="scope-grid scope-grid-4 reveal">
            {services.map((service) => (
              <Link className="scope-card" href={service.href} key={service.slug}>
                <span>{service.nr}</span>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="kunden">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">05 — Für wen wir arbeiten</span>
              <h2 className="band-title">
                Betriebe, die <em>etwas zu zeigen haben</em>
              </h2>
            </div>
            <p className="band-note">
              Unsere Kunden sind keine Konzerne. Es sind Unternehmen, bei denen
              der Inhaber selbst entscheidet und jede Anfrage einen Unterschied
              macht.
            </p>
          </div>
          <div className="audience-grid cols-4 reveal">
            {zielgruppen.map((item) => (
              <article className="audience-card" key={item.tag}>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <small>Referenzen: {item.refs}</small>
              </article>
            ))}
          </div>
          <div className="section-link-row reveal">
            <Link className="body-link" href={routes.projects}>
              Alle Kundenprojekte ansehen <ArrowIcon />
            </Link>
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="ablauf">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">06 — So läuft die Zusammenarbeit</span>
              <h2 className="band-title">
                Vier Schritte, <em>keine Blackbox</em>
              </h2>
            </div>
            <p className="band-note">
              Du weißt jederzeit, wo das Projekt steht, was als Nächstes passiert
              und was es kostet.
            </p>
          </div>
          <div className="premium-process reveal">
            {ablauf.map((step) => (
              <article key={step.nr}>
                <span>{step.nr}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <small>{step.gets}</small>
              </article>
            ))}
          </div>
        </section>

        {spotlight ? (
          <section className="band theme-light" id="zusammenarbeit">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">07 — Aus der Praxis</span>
                <h2 className="band-title">
                  Eine Zusammenarbeit, <em>die seit 2019 läuft</em>
                </h2>
              </div>
              <p className="band-note">
                Wie sich „alles aus einer Hand“ über Jahre anfühlt, zeigt das
                Beispiel {spotlight.kunde}: Website, Content und Kampagnen
                aufeinander abgestimmt, mit demselben Ansprechpartner.
              </p>
            </div>
            <div className="case-spotlight reveal">
              <div>
                <figure className="case-spotlight-visual" style={{ margin: 0 }}>
                  <Image src={maTransporteImage} alt={`Website von ${spotlight.kunde}`} fill sizes="(max-width: 980px) 100vw, 46vw" />
                  <figcaption>{spotlight.kunde} · {spotlight.branche}</figcaption>
                </figure>
              </div>
              <div>
                <div className="case-steps">
                  <div className="case-step">
                    <span>Ausgangslage</span>
                    <h3>{spotlight.problem.titel}</h3>
                    <p>{spotlight.problem.text}</p>
                  </div>
                  <div className="case-step">
                    <span>Umsetzung</span>
                    <h3>{spotlight.loesung.titel}</h3>
                    <p>{spotlight.loesung.text}</p>
                    <ul>
                      {spotlight.loesung.punkte.map((punkt) => (
                        <li key={punkt}>{punkt}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="case-step">
                    <span>Heute</span>
                    <h3>Laufende Betreuung</h3>
                    <p>{spotlight.ergebnis?.text ?? spotlight.teaser}</p>
                  </div>
                </div>
                <Link className="body-link" href={projectPath(spotlight.slug)}>
                  Projekt ansehen <ArrowIcon />
                </Link>
              </div>
            </div>
          </section>
        ) : null}

        <section className="band theme-light" id="standort">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">08 — Der Standort</span>
              <h2 className="band-title">
                Zuhause in Bendorf. <em>Unterwegs in der Region.</em>
              </h2>
              <p className="lead">
                Pixel56 arbeitet aus Bendorf bei Koblenz, ohne Ladenlokal:
                Kennenlernen per Video-Call oder bei dir im Betrieb. Koblenz liegt
                wenige Minuten entfernt, Neuwied, Montabaur und der Westerwald
                sind schnell erreicht.
              </p>
              <p className="lead">
                Die Zusammenarbeit selbst ist nicht an den Ort gebunden. Per
                Video-Call, Telefon und WhatsApp betreuen wir Kunden in ganz
                Deutschland genauso verbindlich wie Betriebe um die Ecke.
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

        <section className="band dark-stage service-dark-stage" id="erreichbarkeit">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">09 — Erreichbarkeit</span>
              <h2 className="band-title">
                Ein Kanal, <em>eine Nummer</em>
              </h2>
              <p className="lead">
                Kein Ticket-System, keine Warteschleife, keine Rückrufbitte.
                Während der Zusammenarbeit erreichst du deinen Ansprechpartner
                direkt per WhatsApp oder Telefon, für die schnelle Frage genauso
                wie für die große Entscheidung.
              </p>
              <ul className="lines">
                <li>Antwort auf Anfragen innerhalb eines Werktags, meist deutlich schneller</li>
                <li>Feste Abstimmungstermine während der Umsetzung</li>
                <li>Zwischenstände als Link, nicht als PDF-Anhang</li>
              </ul>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 · Atilla"
                messages={[
                  { from: "in", text: "Hast du kurz Zeit? Frage zur Startseite." },
                  { from: "out", text: "Klar. Ruf durch oder schick mir einen Screenshot, dann schaue ich direkt rein." },
                  { from: "in", text: "Screenshot kommt. Danke dir!" },
                ]}
                footer="So laufen Abstimmungen während eines Projekts"
              />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="nicht">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">10 — Was wir nicht machen</span>
              <h2 className="band-title">
                Vier Dinge, <em>die du bei uns nicht findest</em>
              </h2>
            </div>
            <p className="band-note">
              Vertrauen entsteht auch dadurch, dass man weiß, was jemand nicht
              tut.
            </p>
          </div>
          <div className="mini-grid cols-4 reveal">
            {nichtMachen.map((item) => (
              <div key={item.title}>
                <b>{item.title}</b>
                <small>{item.text}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="band theme-light light-reviews" id="stimmen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">11 — Kundenstimmen</span>
              <h2 className="band-title">
                Was Kunden <em>über die Zusammenarbeit sagen</em>
              </h2>
            </div>
            <p className="band-note">
              Echte Google-Bewertungen, wörtlich übernommen, mit Link zum
              Original. Keine erfundenen Bewertungen, keine geschönten Zahlen.
            </p>
          </div>
          <GoogleBewertungen stand={googleStand} bewertungen={googleAuswahl} />
        </section>

        <section className="band theme-light" id="faq">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">12 — Häufige Fragen</span>
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
          <ContactStrip />
          <CloseCta>
            Lern uns <em>kennen.</em>
          </CloseCta>
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
