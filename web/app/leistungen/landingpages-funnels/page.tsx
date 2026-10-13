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
import { Funnel2 } from "@/components/mocks";
import { site } from "@/lib/site";
import { getFallstudie } from "@/lib/projekte";
import { verifiedReviews } from "@/lib/verified-reviews";
import { projectPath, resourceRoutes, routes, serviceRoutes } from "@/lib/routes";
import starkDetailImage from "@/public/bilder/projekt-stark-ins-neue-3.webp";

export const metadata: Metadata = {
  title: "Landingpages & Funnels: Eine Seite, ein Ziel, mehr Anfragen",
  description:
    "Landingpages und Funnels, die das Versprechen der Anzeige einlösen: klare Struktur, kurzes Formular, sauberes Tracking. Für Kampagnen, Anmeldungen und Erstgespräche. Pixel56 aus Bendorf bei Koblenz.",
  alternates: { canonical: serviceRoutes["landingpages-funnels"] },
  openGraph: {
    title: "Landingpages & Funnels: Eine Seite, ein Ziel, mehr Anfragen | Pixel56",
    description:
      "Von der Anzeige bis zur Anfrage ohne Umweg. Landingpages mit einem Ziel, kurzem Formular und Tracking, das zeigt, wo Besucher abspringen.",
    url: serviceRoutes["landingpages-funnels"],
  },
};

const serviceUrl = `${site.url}${serviceRoutes["landingpages-funnels"]}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: "Landingpages und Funnels",
      serviceType: "Landingpage- und Funnel-Entwicklung",
      description:
        "Konzeption, Text, Design und Technik für Landingpages und mehrstufige Funnels: Lead-Formulare, Terminbuchung, Anmeldestrecken, Conversion-Tracking und Anbindung an Postfach, Kalender oder CRM.",
      url: serviceUrl,
      provider: { "@type": "ProfessionalService", "@id": `${site.url}/#organization`, name: site.name, url: site.url },
      areaServed: [
        { "@type": "City", name: "Koblenz" },
        { "@type": "Country", name: "Deutschland" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: site.url },
        { "@type": "ListItem", position: 2, name: "Leistungen", item: `${site.url}/dienstleistung` },
        { "@type": "ListItem", position: 3, name: "Landingpages & Funnels", item: serviceUrl },
      ],
    },
  ],
};

const statusRows = [
  { label: "Traffic landet auf der Startseite", tag: "Ziel" },
  { label: "Zu viele Wege, zu viele Ablenkungen", tag: "Fokus" },
  { label: "Formular mit zehn Feldern", tag: "Reibung" },
  { label: "Keine Bestätigung, kein Follow-up", tag: "Tempo" },
  { label: "Eine Seite für jede Zielgruppe", tag: "Passung" },
  { label: "Keine Ahnung, wo Besucher abspringen", tag: "Auswertung" },
];

const funnelTypes = [
  { title: "Lead-Funnel", text: "Für Angebote, die vor dem Kauf ein Gespräch brauchen. Die Seite erklärt das Angebot, baut Vertrauen auf und endet mit einer kurzen Anfrage. Typisch für Handwerk, Bau und Dienstleistung." },
  { title: "Termin-Funnel", text: "Vom Klick direkt in den Kalender. Ideal für Erstgespräche, Beratungen und Besichtigungen. Keine Mail-Schleife, kein „wann passt es Ihnen“." },
  { title: "Anmelde- oder Verkaufs-Funnel", text: "Für Kurse, Veranstaltungen, digitale Produkte oder klar bepreiste Angebote ohne Zwischengespräch. Anmeldung oder Kauf in wenigen Schritten, mit Bestätigung." },
];

const audiences = [
  { tag: "Google- & Meta-Kampagnen", title: "Die Seite hinter der Anzeige", text: "Jede Kampagne braucht eine Zielseite, die genau das aufgreift, was die Anzeige verspricht. Sonst zahlst du für Klicks, die auf der Startseite verloren gehen.", refs: "Van den Berg Gruppe · Stark ins Neue" },
  { tag: "Kurse & Veranstaltungen", title: "Anmeldung ohne Umwege", text: "Termin, Inhalt, Preis, Anmeldung. Eine Strecke, die in zwei Minuten erledigt ist und sofort bestätigt. Für Bildungsangebote und Events.", refs: "Stark ins Neue · Sportler für Kinderherzen" },
  { tag: "Erstgespräch & Beratung", title: "Vom Interesse zum Termin", text: "Für Dienstleister, bei denen das Gespräch der erste Schritt ist. Die Seite beantwortet die wichtigsten Fragen und führt direkt in den Kalender.", refs: "Van den Berg Gruppe" },
  { tag: "Handwerk & Bau", title: "Angebotsanfrage mit den richtigen Angaben", text: "Ein kurzes Formular, das genau die Informationen abfragt, die du für ein Angebot brauchst, inklusive Foto-Upload. Weniger Rückfragen, schnellere Angebote.", refs: "GM-Dachdecker · MDU Bedachungen" },
  { tag: "Recruiting", title: "Bewerbung in zwei Minuten", text: "Eine Stelle, eine Seite, ein Upload. Bewerber sehen, wer ihr Arbeitgeber wäre, und bewerben sich ohne E-Mail-Programm.", refs: "GM-Dachdecker" },
  { tag: "Lead-Magnet", title: "Checkliste gegen Kontakt", text: "Ein nützliches PDF gegen eine E-Mail-Adresse. Wir nutzen das selbst für unsere Checklisten, mit automatischem Versand und sauberer Einwilligung.", refs: "Eigene Ressourcen-Seiten von Pixel56" },
];

const anatomy = [
  { problem: "Die Überschrift wiederholt das Versprechen der Anzeige.", answer: "Wer auf „Dachsanierung Koblenz“ klickt, muss „Dachsanierung Koblenz“ lesen, nicht „Willkommen bei Firma Müller“. Sonst ist der Besucher in drei Sekunden wieder weg." },
  { problem: "Der Nutzen steht über dem Falz, nicht die Firmengeschichte.", answer: "Was bekommt der Besucher, bis wann, und was muss er dafür tun? Alles andere kommt danach." },
  { problem: "Beweise statt Behauptungen.", answer: "Echte Projekte, echte Kundenstimmen, echte Fotos. Keine Stockbilder, keine erfundenen Zahlen. Vertrauen entsteht durch Belegbares." },
  { problem: "Einwände werden beantwortet, bevor sie gestellt werden.", answer: "Was kostet es, wie lange dauert es, was passiert danach? Eine kurze FAQ auf der Seite räumt die Fragen aus, die sonst zum Absprung führen." },
  { problem: "Das Formular fragt nur, was für den nächsten Schritt nötig ist.", answer: "Name, Kontakt, eine qualifizierende Frage. Jedes zusätzliche Feld senkt die Abschlussquote. Details klärt das Gespräch." },
  { problem: "Ein Ziel, mehrfach angeboten.", answer: "Der Button zur Anfrage erscheint oben, in der Mitte und am Ende. Kein Menü, keine Links zu anderen Leistungen, nichts, was ablenkt." },
];

const friction = [
  { title: "Felder reduzieren", text: "Drei bis vier Felder statt zehn. Alles, was nicht für den ersten Kontakt nötig ist, fliegt raus und wird im Gespräch geklärt." },
  { title: "Mobil zuerst", text: "Die meisten Klicks aus Anzeigen kommen vom Handy. Formular, Buttons und Upload werden zuerst dort gebaut und getestet." },
  { title: "Sofortige Bestätigung", text: "Wer anfragt, bekommt sofort eine Bestätigung mit dem nächsten Schritt. Kein „wir melden uns“, sondern „so geht es weiter“." },
  { title: "Übergabe ohne Verlust", text: "Anfragen landen dort, wo du arbeitest: Postfach, Kalender, Tabelle oder CRM. Nichts bleibt in einem Formular-Backend liegen." },
];

const tracking = [
  { title: "Conversion-Messung", text: "Jede Anfrage, Buchung oder Anmeldung wird gezählt und der Kampagne zugeordnet. So weißt du, welcher Euro was gebracht hat." },
  { title: "Einwilligung sauber gelöst", text: "Cookie-Einwilligung und Messung sind so aufgesetzt, dass sie rechtlich halten und trotzdem brauchbare Daten liefern." },
  { title: "Kalender & Automatisierung", text: "Terminbuchung direkt auf der Seite, automatische Bestätigung und Erinnerung, Übergabe in deinen Kalender." },
  { title: "Absprünge sichtbar", text: "Wir sehen, an welcher Stelle Besucher aussteigen, und ändern genau dort. Nicht die ganze Seite, nur die schwache Stelle." },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Ziel & Angebot", text: "Was am Ende passieren soll und für wen. Davon hängt die gesamte Struktur ab." },
  { nr: "02", tag: "Phase 2", title: "Struktur & Text", text: "Ein Argument nach dem anderen, ein Call-to-Action, keine Konkurrenz zwischen Angeboten. Du siehst den Text vor dem Design." },
  { nr: "03", tag: "Phase 3", title: "Design & Formular", text: "So wenig Reibung wie möglich, klare Führung, mobil zuerst." },
  { nr: "04", tag: "Phase 4", title: "Tracking & Anbindung", text: "Jeder Schritt messbar, Anfragen landen automatisch an der richtigen Stelle." },
  { nr: "05", tag: "Phase 5", title: "Auswertung", text: "Wo Interessenten abspringen, wird gezielt angepasst. Eine Landingpage ist nach dem Launch nicht fertig." },
];

const referenzen: RefItem[] = [
  { variant: "ic-3", barWidth: 55, img: "/bilder/projekt-stark-ins-neue-3.webp", href: projectPath("stark-ins-neue"), cat: "Stark ins Neue gGmbH", title: "Anmeldestrecke mit genau einem Ziel", text: "Fokussierte Landingpage für eine Bildungsinitiative, abgestimmt auf Meta-Ads-Kampagnen, DSGVO-konform, ohne unnötige Zwischenschritte.", tag: "Landingpage · Anmeldefunnel · 2025" },
  { variant: "ic-4", barWidth: 65, img: "/bilder/projekt-van-den-berg.webp", href: projectPath("van-den-berg"), cat: "Van den Berg Gruppe", title: "Anzeige direkt auf ein Angebot geführt", text: "Meta-Ads-Kampagnen mit passender Zielseite statt allgemeiner Startseite, verbunden mit Conversion-Tracking und laufender Auswertung.", tag: "Meta Ads · Landingpage · laufend" },
];

const faqs = [
  { q: "Was ist der Unterschied zu einer normalen Website-Seite?", a: "Eine normale Seite bietet viele Wege an: Menü, Leistungen, Über uns, Blog. Eine Landingpage verzichtet bewusst darauf und führt zu genau einem Ziel. Sie ergänzt die Website, sie ersetzt sie nicht." },
  { q: "Brauche ich dafür schon eine Werbekampagne?", a: "Nein. Eine Landingpage funktioniert auch für organischen Traffic, E-Mail-Verteiler, QR-Codes auf Fahrzeugen oder den Link in der Social-Media-Bio. Mit Kampagne entfaltet sie allerdings die größte Wirkung." },
  { q: "Wie kurz sollte das Formular wirklich sein?", a: "So kurz wie möglich für das jeweilige Ziel. Oft reichen Name, Kontakt und eine qualifizierende Frage. Jedes weitere Feld senkt die Abschlussquote. Was du für ein Angebot brauchst, klären wir im Gespräch oder in einem zweiten Schritt nach der Anfrage." },
  { q: "Wie messt ihr, ob die Seite funktioniert?", a: "Wir zählen Anfragen, Buchungen oder Anmeldungen und ordnen sie der Quelle zu. Dazu sehen wir, an welcher Stelle Besucher abspringen. Daraus entstehen konkrete Änderungen, keine Vermutungen." },
  { q: "Kann ich mehrere Funnels gleichzeitig haben?", a: "Ja, bei unterschiedlichen Angeboten oder Zielgruppen ist das sogar sinnvoll. Jeder Funnel bleibt dabei auf ein Ziel fokussiert. Technisch läuft alles auf derselben Basis." },
  { q: "Was kostet ein Funnel?", a: "Eine einzelne Landingpage braucht weniger Aufwand als ein mehrstufiger Funnel mit Terminbuchung, Bestätigung und Automatisierung. Vor dem Start bekommst du ein Angebot mit klarem Umfang. Die Seite gehört danach dir und trägt jede weitere Kampagne." },
  { q: "Bleibst du auch danach erreichbar?", a: "Ja. Per WhatsApp, Telefon oder E-Mail über einen festen Ansprechpartner. Ein Formularfeld kürzen oder einen Text anpassen ist meist am selben Tag erledigt." },
];

const funnelVoices = [verifiedReviews[0], verifiedReviews[2], verifiedReviews[1]];
const spotlight = getFallstudie("stark-ins-neue");
const spotlightVoice = verifiedReviews[0];

export default function FunnelsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="service-premium funnels-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Leistungen", page: "Landingpages & Funnels" }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">LANDINGPAGES &amp; FUNNELS · FÜR KAMPAGNEN, ANMELDUNGEN UND ERSTGESPRÄCHE</div>
              <h1>
                <span>Ein Klick.</span>
                <span className="service-hero-accent">Ein Ziel.</span>
                <span>Keine Ablenkung.</span>
              </h1>
              <p>
                Eine gute Anzeige verliert die Hälfte ihrer Wirkung, wenn der
                Klick auf einer Seite ohne klares Ziel landet. Wir bauen
                Landingpages, die das Versprechen der Anzeige einlösen: ein
                Angebot, ein kurzes Formular, sauberes Tracking und eine
                Übergabe, bei der keine Anfrage verloren geht.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Landingpage besprechen <ArrowIcon />
                </a>
                <Link className="btn-text" href="#aufbau">
                  So ist eine gute Landingpage aufgebaut ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="Landingpages auf einen Blick">
                <span>Ein Ziel pro Seite</span>
                <span>Kurzes Formular</span>
                <span>Tracking inklusive</span>
                <span>Gehört danach dir</span>
              </div>
            </div>

            <div className="web-experience-board" aria-label="Schema eines Funnels von der Anzeige zur Anfrage">
              <div className="web-board-top">
                <span>PIXEL56 · FUNNEL</span>
                <i>LIVE</i>
              </div>
              <div className="system-flow" aria-hidden="true">
                <div><span>01</span><b>Anzeige</b><small>Google, Meta oder Beitrag</small></div>
                <div><span>02</span><b>Landingpage</b><small>Ein Angebot, ein Versprechen</small></div>
                <div><span>03</span><b>Formular</b><small>Drei Felder, mobil zuerst</small></div>
                <div><span>04</span><b>Anfrage</b><small>Im Postfach oder Kalender</small></div>
              </div>
              <div className="web-board-signals">
                <div><span>01</span><b>Botschaft</b><small>passend</small></div>
                <div><span>02</span><b>Reibung</b><small>minimal</small></div>
                <div><span>03</span><b>Tracking</b><small>messbar</small></div>
                <div><span>04</span><b>Übergabe</b><small>automatisch</small></div>
              </div>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="Landingpages und Funnels auf einen Blick">
          <div><span>Traffic</span><strong>Ads, Social, QR-Code oder organisch</strong></div>
          <div><span>Seitenziel</span><strong>Eine klare nächste Handlung</strong></div>
          <div><span>System</span><strong>Formular, Tracking, Übergabe</strong></div>
          <div><span>Ergebnis</span><strong>Mehr Anfragen aus demselben Budget</strong></div>
        </section>

        <section className="band dark-stage service-dark-stage" id="status">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">01 — Der Status quo</span>
              <h2 className="band-title">
                Sechs Gründe, warum <em>Traffic verpufft</em>
              </h2>
              <p className="lead">
                Besucher sind da, aber die Anfrage bleibt aus. Fast immer liegt
                es nicht an zu wenig Traffic, sondern an dem, was mit ihm
                passiert, sobald er ankommt.
              </p>
              <p className="lead">
                Die teuerste Variante: eine gute Kampagne, die auf eine
                Startseite mit zwölf Menüpunkten führt. Der Besucher sucht, was
                die Anzeige versprochen hat, findet es nicht und geht.
              </p>
            </div>
            <div className="reveal">
              <StatusPanel head="Typische Gründe für ausbleibende Anfragen" rows={statusRows} />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="warum">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Warum ein Funnel</span>
              <h2 className="band-title">
                Eine Seite, <em>ein einziges Ziel</em>
              </h2>
            </div>
            <p className="band-note">
              Eine Website muss vielen Besuchern viele Wege anbieten. Eine
              Landingpage darf genau das Gegenteil tun und wird dadurch
              spürbar wirksamer.
            </p>
          </div>
          <Funnel2
            nodes={[
              { tag: "Anzeige", label: "Google, Meta oder Beitrag" },
              { tag: "Landingpage", label: "Ein Angebot, ein Ziel", hot: true },
              { tag: "Ergebnis", label: "Anfrage, Termin oder Anmeldung" },
            ]}
          />
          <div className="mini-grid cols-3 reveal" style={{ marginTop: 28 }} aria-label="Arten von Funnels">
            {funnelTypes.map((item) => (
              <div key={item.title}>
                <b>{item.title}</b>
                <small>{item.text}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="einsatz">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Wofür Landingpages arbeiten</span>
              <h2 className="band-title">
                Sechs Einsatzfelder, <em>ein Prinzip</em>
              </h2>
            </div>
            <p className="band-note">
              Überall dort, wo ein konkretes Angebot auf einen konkreten Bedarf
              trifft, schlägt eine fokussierte Seite die allgemeine Website.
            </p>
          </div>
          <div className="audience-grid reveal">
            {audiences.map((audience) => (
              <article className="audience-card" key={audience.tag}>
                <span>{audience.tag}</span>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
                <small>{audience.refs.startsWith("Eigene") ? audience.refs : `Referenzen: ${audience.refs}`}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="aufbau">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Aufbau</span>
              <h2 className="band-title">
                Sechs Regeln, <em>nach denen wir jede Landingpage bauen</em>
              </h2>
            </div>
            <p className="band-note">
              Keine Geheimnisse, nur Konsequenz. Die meisten Seiten scheitern
              nicht an fehlendem Wissen, sondern daran, dass eine dieser Regeln
              aus Bequemlichkeit gebrochen wird.
            </p>
          </div>
          <div className="friction-list checklist reveal">
            {anatomy.map((item, index) => (
              <div className="friction-row" key={item.problem}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.problem}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {spotlight && (
          <section className="band theme-light" id="fallstudie">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">05 — Ein Projekt im Detail</span>
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
                      <h3>Anmeldung und Kampagne aus einem Guss</h3>
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

        <section className="band dark-stage service-dark-stage" id="formular">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">06 — Formular &amp; Reibung</span>
              <h2 className="band-title">
                So wenig Reibung <em>wie möglich</em>
              </h2>
              <p className="lead">
                Das Formular ist die Stelle, an der die meisten Anfragen
                verloren gehen. Nicht, weil das Angebot nicht passt, sondern
                weil zehn Felder auf dem Handy niemand ausfüllt.
              </p>
              <p className="lead">
                Wir bauen das Formular vom Gespräch her: Was brauchst du
                wirklich, um zurückzurufen? Alles andere klärt sich danach.
              </p>
            </div>
            <div className="mini-grid reveal" aria-label="Reibung im Formular senken">
              {friction.map((item) => (
                <div key={item.title}>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="tracking">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">07 — Tracking &amp; Anbindung</span>
              <h2 className="band-title">
                Jeder Schritt messbar, <em>jede Anfrage am richtigen Ort</em>
              </h2>
              <p className="lead">
                Eine Landingpage ohne Messung ist eine Vermutung. Wir richten
                Conversion-Tracking mit Einwilligung ein, verbinden die Seite
                mit Kalender, Postfach oder CRM und sehen, an welcher Stelle
                Besucher aussteigen.
              </p>
              <p className="lead">
                Dieselbe Technik trägt unsere eigenen Ressourcen-Seiten:
                Checkliste anfordern, Einwilligung, automatischer Versand.
              </p>
              <Link className="body-link" href={resourceRoutes["seo-checkliste"]}>
                Beispiel: unsere SEO-Checkliste-Seite <ArrowIcon />
              </Link>
            </div>
            <div className="mini-grid reveal" aria-label="Tracking und Anbindung">
              {tracking.map((item) => (
                <div key={item.title}>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="prozess">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">08 — Der Weg dahin</span>
              <h2 className="band-title">
                Fünf Phasen, <em>ein klarer Weg</em>
              </h2>
            </div>
            <p className="band-note">
              Vom Ziel bis zur laufenden Auswertung. Du siehst Text und Aufbau,
              bevor das Design entsteht.
            </p>
          </div>
          <Stepper steps={steps} />
        </section>

        <section className="band theme-light" id="referenzen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">09 — Referenzen</span>
              <h2 className="band-title">
                Aus der <em>echten Arbeit</em>
              </h2>
            </div>
            <p className="band-note">
              Zwei Projekte, zwei Ziele: Anmeldung und Anfrage. Beide mit
              Kampagne, Zielseite und Tracking als ein System.
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

        <section className="band theme-light" id="kanaele">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">10 — Zusammenspiel</span>
              <h2 className="band-title">
                Die Seite trägt <em>jede weitere Kampagne</em>
              </h2>
              <p className="lead">
                Eine Landingpage ist kein Einmalprodukt. Einmal gebaut und
                gemessen, trägt sie Google Ads, Meta Ads, den QR-Code auf dem
                Firmenwagen und den Link in der Social-Media-Bio. Mit jeder
                Kampagne wird sie besser, weil wir wissen, wo Besucher abspringen.
              </p>
              <ul className="lines">
                <li>
                  Nachfrage abholen: <Link href={serviceRoutes["google-ads"]}>Google Ads</Link>
                </li>
                <li>
                  Nachfrage wecken: <Link href={serviceRoutes["meta-ads"]}>Meta Ads</Link>
                </li>
                <li>
                  Bewerber statt Kunden: <Link href={serviceRoutes.mitarbeitergewinnung}>Mitarbeitergewinnung</Link>
                </li>
                <li>
                  Die komplette Website: <Link href={serviceRoutes.webdesign}>Webdesign</Link>
                </li>
              </ul>
            </div>
            <div className="mini-grid reveal" aria-label="Wofür eine Landingpage weiterverwendet wird">
              <div><b>Google Ads</b><small>Suchanzeigen führen auf die Seite, die das gesuchte Thema einlöst.</small></div>
              <div><b>Meta Ads</b><small>Feed-Anzeigen landen auf dem Angebot aus dem Creative, nicht auf der Startseite.</small></div>
              <div><b>Offline</b><small>QR-Code auf Fahrzeug, Flyer oder Baustellenschild führt auf dieselbe Seite.</small></div>
              <div><b>Social-Media-Bio</b><small>Ein Link, der nicht auf die Startseite zeigt, sondern auf das aktuelle Angebot.</small></div>
            </div>
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="zusammenarbeit">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">11 — Zusammenarbeit</span>
              <h2 className="band-title">
                Dein Funnel. <em>Kurze Wege.</em>
              </h2>
              <p className="lead">
                Kein Callcenter, keine Rückrufbitte. Formularfeld kürzen, Text
                anpassen, neue Variante testen: Du schreibst direkt per WhatsApp,
                und kleine Änderungen sind meist am selben Tag erledigt.
              </p>
              <ul className="lines">
                <li>Die Seite gehört dir, inklusive aller Inhalte und Daten.</li>
                <li>Auswertung in verständlicher Sprache, nicht als Rohdaten-Export.</li>
                <li>Änderungen werden gemessen, nicht nur umgesetzt.</li>
              </ul>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 — Dein Ansprechpartner"
                messages={[
                  { from: "in", text: "Können wir das Formular auf drei Felder kürzen?" },
                  { from: "out", text: "Ja, ist umgesetzt. Testest du einmal kurz vom Handy aus?" },
                  { from: "in", text: "Läuft, danke!" },
                ]}
                footer="Beispielhafter Ablauf einer Abstimmung während der Betreuung"
              />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="bewertungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">12 — Kundenstimmen</span>
              <h2 className="band-title">
                Das sagen <em>Kunden über uns</em>
              </h2>
            </div>
            <p className="band-note">
              Nur Aussagen, die unsere Kunden so veröffentlicht haben. Keine
              erfundenen Bewertungen, keine geschönten Zahlen.
            </p>
          </div>
          <Reviews reviews={funnelVoices} items={funnelVoices} />
        </section>

        <section className="band theme-light" id="faq">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">13 — Häufige Fragen</span>
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
          <CloseCta ctaLabel="Landingpage besprechen">
            Lass uns über deinen <em>Funnel</em> sprechen.
          </CloseCta>

          <ContactStrip />

          <SiteFooter />
        </div>
      </main>
    </>
  );
}
