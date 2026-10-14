import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import DetailReihe, { type DetailEintrag } from "@/components/DetailReihe";
import ZentraleSzene from "@/components/ZentraleSzene";
import ZentraleDemo from "@/components/ZentraleDemo";
import AblaufSimulator from "@/components/AblaufSimulator";
import BreadcrumbLd from "@/components/BreadcrumbLd";
import PlannedMedia from "@/components/PlannedMedia";
import {
  ArrowIcon,
  ClientMarquee,
  CloseCta,
  ContactStrip,
  FaqList,
  StatusPanel,
  Stepper,
  WaMock,
} from "@/components/ui";
import { site } from "@/lib/site";
import { resourceRoutes, serviceRoutes } from "@/lib/routes";
import kiFreebieImage from "@/public/bilder/freebie-ki-ebook.webp";

export const metadata: Metadata = {
  title: "KI-Automatisierung: Prozesse, die Zeit sparen",
  description:
    "KI-Prozesse für kleine und mittlere Unternehmen: Anfragen vorsortieren, Angebote vorbereiten, Wissen durchsuchbar machen. Der Mensch entscheidet.",
  alternates: { canonical: serviceRoutes["ki-automatisierung"] },
  openGraph: {
    title: "KI-Automatisierung für Unternehmen | Pixel56",
    description:
      "KI-Prozesse für Betriebe ohne IT-Abteilung: Anfragen sortieren, Angebote vorbereiten, Berichte schreiben. Mit eigenen Projekten belegt. Pixel56 aus Koblenz.",
    url: serviceRoutes["ki-automatisierung"],
  },
};

const pageUrl = `${site.url}${serviceRoutes["ki-automatisierung"]}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "KI-Prozesse und Automatisierung für Unternehmen",
      serviceType: "KI-Beratung und Prozessautomatisierung",
      description:
        "Analyse und Umsetzung von KI-gestützten Arbeitsabläufen, Wissensassistenten und Automatisierungen für kleine und mittelständische Unternehmen, mit menschlicher Prüfung und klarem Datenrahmen.",
      provider: { "@id": `${site.url}/#organization` },
      areaServed: { "@type": "Country", name: "Deutschland" },
      url: pageUrl,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "KI-Leistungen",
        itemListElement: [
          "Prozessaufnahme und Priorisierung",
          "Prototyp für einen abgegrenzten Ablauf",
          "Interne Wissensassistenten",
          "Vorsortierung und Entwürfe für Anfragen",
          "Integration in bestehende Systeme",
          "Betreuung und Weiterentwicklung",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: site.url },
        { "@type": "ListItem", position: 2, name: "Leistungen", item: `${site.url}/dienstleistung` },
        { "@type": "ListItem", position: 3, name: "KI-Automatisierung", item: pageUrl },
      ],
    },
  ],
};

const statusRows = [
  { label: "Informationen liegen an fünf Orten", tag: "Wissen" },
  { label: "Texte beginnen immer wieder bei null", tag: "Entwurf" },
  { label: "Anfragen werden von Hand vorsortiert", tag: "Eingang" },
  { label: "Übergaben kosten unnötig Zeit", tag: "Prozess" },
  { label: "Daten werden doppelt eingetippt", tag: "Routine" },
  { label: "Fünf KI-Tools, aber kein System", tag: "Fokus" },
];

const useCases = [
  { nr: "01", title: "Anfragen vorsortieren", text: "Eingehende Mails und Formulare nach Anliegen, Dringlichkeit und Region einordnen und einen Antwortentwurf vorbereiten. Du liest, prüfst, schickst ab." },
  { nr: "02", title: "Angebote vorbereiten", text: "Aus Vorlagen, Preislisten und Projektnotizen entsteht ein erster Angebotsentwurf. Die Freigabe und jede Preisentscheidung bleiben bei dir." },
  { nr: "03", title: "Internes Wissen", text: "Richtlinien, Abläufe, alte Projekte und häufige Fragen in einem Assistenten, der deinem Team antwortet, statt dass alle den Chef fragen." },
  { nr: "04", title: "Content-Entwürfe", text: "Aus Baustellenfotos, Stichworten oder Interviews entstehen Beitragsentwürfe im Ton deiner Marke. Bereit zur Freigabe, nicht zur Veröffentlichung." },
  { nr: "05", title: "Dokumente & Berichte", text: "Besprechungen, Notizen oder lange Unterlagen werden zu Aufgaben, Entscheidungen und einem lesbaren Wochenbericht, ohne Copy-and-paste." },
  { nr: "06", title: "Übergaben zwischen Systemen", text: "Daten aus Formularen, Postfächern und Tabellen kontrolliert weitergeben, damit niemand mehr dasselbe zweimal eintippt." },
];

const audiences = [
  { tag: "Handwerk & Bau", title: "Anfragen und Angebote", text: "Anfragen kommen per Mail, WhatsApp und Telefon, Angebote entstehen abends am Schreibtisch. KI sortiert vor und bereitet den Entwurf, du entscheidest über Preis und Termin.", hint: "Beispiel: Anfrage-Eingang mit Antwortentwurf" },
  { tag: "Dienstleistung", title: "Termine und Rückfragen", text: "Dieselben zehn Fragen, jeden Tag. Ein Assistent beantwortet sie auf Basis deiner Unterlagen und übergibt nur das an dich, was wirklich eine Entscheidung braucht.", hint: "Beispiel: FAQ-Assistent mit Übergabe" },
  { tag: "Bildung & Soziales", title: "Anmeldungen und Unterlagen", text: "Anmeldungen prüfen, fehlende Angaben anfordern, Teilnehmerlisten pflegen. Routine, die Zeit für die eigentliche Arbeit mit Menschen frisst.", hint: "Beispiel: Anmeldestrecke mit Vollständigkeitsprüfung" },
  { tag: "Immobilien & Bau", title: "Exposés und Interessenten", text: "Objektdaten in Exposé-Entwürfe, Interessentenanfragen nach Budget und Zeitraum vorqualifiziert. Die Besichtigung macht weiter der Mensch.", hint: "Beispiel: Vorqualifizierung von Anfragen" },
  { tag: "Beratung & Agenturen", title: "Berichte und Wissen", text: "Projektstände, Kampagnenzahlen und Notizen in Berichte übersetzen, die Kunden verstehen. Wissen aus alten Projekten wiederfinden, statt neu zu erarbeiten.", hint: "Beispiel: Wochenbericht aus Rohdaten" },
  { tag: "Gastronomie & Handel", title: "Bewertungen und Beiträge", text: "Antworten auf Bewertungen, Beitragsentwürfe aus Fotos, Produkttexte aus Lieferantendaten. Schnell, im richtigen Ton, mit Freigabe durch dich.", hint: "Beispiel: Bewertungsantworten mit Freigabe" },
];

const checks = [
  { problem: "Wiederholt sich die Aufgabe wirklich?", answer: "Nur wenn eine Aufgabe jede Woche in ähnlicher Form anfällt, lohnt sich Automatisierung. Einmalige Sonderfälle bleiben Handarbeit, und das sagen wir auch." },
  { problem: "Gibt es Beispiele, an denen KI lernen kann?", answer: "Alte Angebote, beantwortete Mails, Vorlagen. Ohne Beispiele rät das System. Mit Beispielen trifft es deinen Ton und deine Regeln." },
  { problem: "Wer prüft das Ergebnis?", answer: "Jeder Ablauf hat eine Stelle, an der ein Mensch freigibt. Wir legen fest, wer das ist und wie viel Zeit die Prüfung kosten darf." },
  { problem: "Welche Daten dürfen wohin?", answer: "Kundendaten, Preise, Personalunterlagen: Vor der Umsetzung klären wir, welche Informationen welches System sehen darf und welche gar nicht." },
  { problem: "Was passiert bei einem Fehler?", answer: "Jeder Entwurf ist nur ein Entwurf. Nichts geht automatisch raus, nichts wird automatisch gelöscht. Fehler bleiben intern und korrigierbar." },
  { problem: "Was ist der Zeitgewinn, ehrlich gerechnet?", answer: "Wir schätzen vor dem Start, wie viele Stunden pro Woche der Ablauf heute kostet, und messen nach dem Prototyp, ob die Erwartung stimmt." },
];

const boundaries = [
  { title: "Preisentscheidungen", text: "KI bereitet das Angebot vor, den Preis setzt du. Rabatte, Nachlässe und Sonderkonditionen bleiben Chefsache." },
  { title: "Sensible Kommunikation", text: "Beschwerden, Absagen, schwierige Gespräche: Hier schreibt der Mensch. KI liefert höchstens Fakten und einen Rohentwurf." },
  { title: "Personalentscheidungen", text: "Bewerbungen strukturieren ja, Bewerber bewerten nein. Die Auswahl bleibt bei dir, nachvollziehbar und fair." },
  { title: "Rechtliche Zusagen", text: "Fristen, Gewährleistung, Verträge: Nichts davon formuliert ein System verbindlich. Vorlagen ja, Zusagen nein." },
];

const dataFrame = [
  { title: "Datenarten klären", text: "Welche Informationen fließen in den Ablauf, welche sind sensibel, welche bleiben außen vor? Das steht vor der ersten Zeile Technik fest." },
  { title: "Anbieter nach Datenart", text: "Nicht jedes KI-Modell darf jede Information sehen. Wir wählen Dienste und Konfiguration passend zur Vertraulichkeit, mit Auftragsverarbeitung, wo nötig." },
  { title: "Zugriffsrechte", text: "Wer im Team darf was sehen und freigeben? Rollen und Rechte werden eingerichtet, bevor der Prozess live geht." },
  { title: "Protokoll & Löschung", text: "Was das System getan hat, bleibt nachvollziehbar. Was nicht mehr gebraucht wird, wird nach festen Regeln gelöscht." },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Prozess verstehen", text: "Wir schauen auf echte Arbeitsschritte, beteiligte Personen, Daten und Engpässe. Eine Stunde mit den Menschen, die es heute von Hand machen." },
  { nr: "02", tag: "Phase 2", title: "Hebel auswählen", text: "Priorisierung nach Zeitgewinn, Machbarkeit, Risiko und Nutzen im Alltag. Ein Ablauf zuerst, nicht fünf gleichzeitig." },
  { nr: "03", tag: "Phase 3", title: "Klein testen", text: "Ein klar begrenzter Prototyp zeigt früh, ob die Idee funktioniert, bevor ein größerer Prozess verändert wird." },
  { nr: "04", tag: "Phase 4", title: "Sauber integrieren", text: "Der funktionierende Ablauf wird dokumentiert, in bestehende Systeme eingebunden und dem Team erklärt." },
  { nr: "05", tag: "Phase 5", title: "Messen & verbessern", text: "Qualität und Zeitgewinn werden geprüft, Regeln und Übergaben gezielt angepasst. Dann erst der nächste Ablauf." },
];

const exampleFlow = [
  { tag: "Eingang", title: "Anfrage kommt per Formular oder Mail", text: "Ein Kunde beschreibt sein Anliegen frei, oft unvollständig: kein Ort, kein Zeitraum, keine Fotos." },
  { tag: "KI bereitet vor", title: "Strukturieren und ergänzen", text: "Das System erkennt Leistung, Ort und Dringlichkeit, prüft die Vollständigkeit und formuliert eine Rückfrage oder einen Antwortentwurf im Ton des Betriebs." },
  { tag: "Mensch prüft", title: "Lesen, anpassen, freigeben", text: "Ein Mitarbeiter sieht Zusammenfassung und Entwurf in einem Bild, korrigiert bei Bedarf und schickt ab. Unter einer Minute statt zehn." },
  { tag: "Ablage", title: "Nachvollziehbar abgelegt", text: "Anfrage, Antwort und Status landen dort, wo das Team ohnehin arbeitet: Postfach, Tabelle oder CRM. Nichts geht verloren, nichts wird doppelt erfasst." },
];

const entry = [
  { title: "Prozessaufnahme", text: "Ein Termin, in dem wir den Ablauf, die Beteiligten und die Daten verstehen. Daraus entsteht ein Vorschlag für den ersten sinnvollen Schritt, mit Umfang und Preis." },
  { title: "Prototyp", text: "Ein abgegrenzter Ablauf, der im Alltag läuft und zeigt, ob der Zeitgewinn real ist. Einmalig kalkuliert, ohne langfristige Bindung." },
  { title: "Integration & Betreuung", text: "Einbindung in bestehende Systeme, Einweisung des Teams und laufende Pflege, wenn sich Regeln oder Werkzeuge ändern. Als Festbetrag, nicht nach Stunden." },
];

const faqs = [
  { q: "Brauche ich bereits bestimmte KI-Tools?", a: "Nein. Wir beginnen bei deinem Prozess und wählen Werkzeuge erst danach. Vorhandene Systeme werden eingebunden, wenn sie sinnvoll nutzbar sind, statt sie zu ersetzen." },
  { q: "Welche Prozesse eignen sich für KI-Automatisierung?", a: "Wiederkehrende, klar beschreibbare Aufgaben mit ausreichend Beispielen oder strukturiertem Wissen: Anfragen, Angebote, Berichte, Dokumentation. Entscheidungen mit hoher Verantwortung bleiben beim Menschen und werden höchstens vorbereitet." },
  { q: "Ersetzt KI Mitarbeiter?", a: "Nein. Ziel ist, Routine zu reduzieren und Informationen vorzubereiten, damit mehr Zeit für Kunden, Entscheidungen und die eigentliche Arbeit bleibt. In kleinen Betrieben ist das oft der Unterschied zwischen Feierabend und Abendschicht." },
  { q: "Wie geht ihr mit vertraulichen Daten um?", a: "Datenarten, Zugriffsrechte und eingesetzte Dienste werden vor der Umsetzung geklärt und dokumentiert. Sensible Informationen werden nicht ungeprüft an beliebige Tools übertragen. Je nach Anforderung wählen wir einen passenden technischen und vertraglichen Rahmen." },
  { q: "Kann man mit einem kleinen Test starten?", a: "Ja, das ist der bevorzugte Weg. Ein klar begrenzter Anwendungsfall macht Nutzen, Qualität und Grenzen sichtbar, bevor ein größerer Prozess verändert wird." },
  { q: "Wie lange dauert ein erster Prototyp?", a: "Das hängt von Datenlage und beteiligten Systemen ab. Ein abgegrenzter Ablauf wie die Vorsortierung von Anfragen steht in der Regel innerhalb weniger Wochen im Alltag. Den konkreten Zeitplan bekommst du nach der Prozessaufnahme." },
  { q: "Was kostet ein KI-Prozess?", a: "Das hängt davon ab, wie viele Systeme beteiligt sind, wie sauber die Daten vorliegen und wie kritisch der Ablauf ist. Nach der Prozessaufnahme bekommst du einen klaren Vorschlag mit Umfang und Preis für den ersten Schritt, keine offene Stundenabrechnung." },
  { q: "Was passiert, wenn sich die Werkzeuge ändern?", a: "KI-Dienste entwickeln sich schnell. Deshalb dokumentieren wir jeden Ablauf unabhängig vom Werkzeug und betreuen ihn weiter. Wenn ein besseres oder günstigeres Modell sinnvoll ist, stellen wir um, ohne dass dein Prozess stillsteht." },
];

/** Eigene Produkte und Werkzeuge, mit KI gebaut. Keine Kundenprojekte, dafür vollständig nachprüfbar. */
const eigeneProjekte: DetailEintrag[] = [
  {
    kicker: "Eigenes Produkt · Gastronomie · Pilotphase",
    titel: "Teykto: Bestellsystem für Gastronomen ohne Provision",
    text: "Lieferportale nehmen pro Bestellung Provision. Teykto gibt jedem Restaurant eine eigene Bestellseite zum festen Monatspreis. Das komplette System haben wir mit KI-Unterstützung entwickelt, vom Warenkorb bis zum Bondrucker.",
    punkte: [
      "Bestellseite mit Speisekarte, Optionen, Gutscheinen, Vorbestellung und Bewertungen echter Käufer",
      "Online-Zahlung über Stripe (Karte, Apple Pay, Google Pay, PayPal), Auszahlung direkt ans Restaurant",
      "Fahrer-App mit Live-Karte, Bondrucker-Anbindung und Dashboard für den Betrieb",
      "Speisekarten-Import per Skript: knapp 100 Artikel mit Optionen in Minuten statt Tagen",
    ],
    bild: "/bilder/ki-projekt-teykto.webp",
    bildAlt: "Teykto-Bestellseite eines Pizza-Lieferservice mit Angeboten, Lieferzeit und Warenkorb",
    href: "https://teykto.de",
    linkText: "teykto.de ansehen",
    extern: true,
    hinweis: "Eigenes Produkt von Pixel56, aktuell in der Pilotphase mit dem ersten Betrieb.",
  },
  {
    kicker: "Eigenes Produkt · Lead-Automatisierung",
    titel: "KMU-Webseiten.de: vom Formular zum fertigen Entwurf",
    text: "Ein Interessent füllt vier Felder aus, der Rest läuft automatisch: Benachrichtigung, Kontakt in MailerLite, Eingangsbestätigung per E-Mail. Aus einem Datensatz entsteht danach ein kompletter Website-Entwurf im Look des Betriebs.",
    punkte: [
      "Lead-Formular an Make: interne Mail, MailerLite-Kontakt und automatische Bestätigung an den Interessenten",
      "Onboarding-Formular mit allen Betriebsdaten, ebenfalls automatisch verarbeitet",
      "Entwurfs-Fabrik: aus einem Datensatz wird eine komplette One-Page-Website mit eigenen Farben, Logo und Texten",
      "Schutzfilter gegen leere Bot-Anfragen, Herkunftsmessung ohne Cookies",
    ],
    bild: "/bilder/ki-projekt-kmu-webseiten.webp",
    bildAlt: "Automatisch erzeugter Website-Entwurf für einen Malerbetrieb auf kmu-webseiten.de",
    href: "https://kmu-webseiten.de",
    linkText: "kmu-webseiten.de ansehen",
    extern: true,
    hinweis: "Produkt von Pixel56, mit KI entwickelt und betrieben.",
  },
  {
    kicker: "Eigenes Produkt · B2B-Daten",
    titel: "Adloc: B2B-Kontaktdatenbank für Deutschland",
    text: "Schluss mit stundenlanger Recherche: Firmenkontakte nach Branche und Bundesland finden und für Vertrieb und Akquise nutzen. Als Abo zum festen Monatspreis, mit KI-Unterstützung gebaut und betrieben.",
    punkte: [
      "Suche nach Branche und Bundesland, Ergebnisse in Sekunden statt Stunden",
      "Kontaktdaten für Vertrieb, Akquise und Kampagnen gebündelt an einem Ort",
      "Drei transparente Monatspakete, Einstieg in wenigen Schritten",
    ],
    variant: "ic-6",
    href: "https://adloc.io",
    linkText: "adloc.io ansehen",
    extern: true,
    hinweis: "Eigenes Produkt von Pixel56.",
  },
  {
    kicker: "Eigenes Werkzeug · Live-Dashboard",
    titel: "Zentrale: ein Live-Dashboard für deinen Betrieb",
    text: "Alle Bereiche deines Betriebs auf einer Karte: Marketing, Website, Funnel, Mitarbeitersuche, Automatisierung, Content. Jeder Bereich ist ein Gebäude, der Fortschritt steht dran, der Stand wird live gespeichert. Ein Klick auf „Was steht heute an?“ und die KI schlägt die nächsten Schritte vor.",
    punkte: [
      "Hauptziel und alle Bereiche mit Fortschritt und offenen Punkten auf einen Blick",
      "Stand wird live gespeichert, auf dem Handy genauso wie am Rechner",
      "Tagesplanung per KI: „Was steht heute an?“ liefert die nächsten Schritte",
      "Spielerische Motivation mit Level, Erfahrungspunkten und Missionen, wenn du magst",
    ],
    visual: <ZentraleSzene />,
    href: "#zentrale-demo",
    linkText: "Demo ausprobieren",
    hinweis: "Das Original läuft bei Pixel56 intern als KI-Anwendung ohne eigenen Server. Unten kannst du eine Beispiel-Zentrale durchklicken.",
  },
  {
    kicker: "Eigene Website · Technik & Inhalte",
    titel: "Diese Website: mit KI gebaut, in Tagen statt Monaten",
    text: "Die Seite, die du gerade liest, ist aus Webflow in ein eigenes System umgezogen. Inhalte, Standortseiten, Vorschaubilder und Werkzeuge entstanden mit KI-Unterstützung, geprüft und freigegeben von Menschen.",
    punkte: [
      "Über 700 Seiten, davon 291 Standortseiten aus einer Datenbasis mit eigenen Texten je Stadt",
      "Website-Check mit zwölf Prüfpunkten, Budget-Planer, Leistungs-Finder und Schnellsuche",
      "Vorschaubilder für Social Media automatisch je Seite erzeugt",
      "Alle Weiterleitungen aus dem alten System übernommen, Rankings bleiben erhalten",
    ],
    bild: "/bilder/ki-projekt-pixel56-website.webp",
    bildAlt: "Standortkarte der Pixel56-Website mit dreizehn Städten der Region Koblenz",
    href: "/website-check",
    linkText: "Website-Check ausprobieren",
  },
];

export default function KiAutomatisierungPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbLd items={[{ name: "Leistungen", href: "/dienstleistung" }, { name: "KI-Prozesse & Automatisierung", href: serviceRoutes["ki-automatisierung"] }]} />

      <main className="service-premium ki-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Leistungen", page: "KI-Prozesse" }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">KI-AUTOMATISIERUNG FÜR BETRIEBE · OHNE EIGENE IT-ABTEILUNG</div>
              <h1>
                <span>Weniger Routine.</span>
                <span className="service-hero-accent">Mehr Zeit.</span>
                <span>KI mit Aufgabe.</span>
              </h1>
              <p>
                Anfragen sortieren, Angebote vorbereiten, Berichte schreiben:
                Arbeit, die bei dir jeden Tag gleich anfällt. Wir bauen den
                KI-Prozess, der sie übernimmt. Die Entscheidung bleibt bei dir.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Prozess kostenlos besprechen <ArrowIcon />
                </a>
                <Link className="btn-text" href="#anwendungen">Was KI konkret erledigt ↓</Link>
              </div>
              <div className="premium-proof" aria-label="KI-Prinzipien von Pixel56">
                <span>Prozess vor Tool</span>
                <span>Klein testen</span>
                <span>Mensch gibt frei</span>
                <span>Datenrahmen vorab</span>
              </div>
            </div>

            <div className="web-experience-board" aria-label="Schema eines kontrollierten KI-Ablaufs">
              <div className="web-board-top">
                <span>PIXEL56 · KI-ABLAUF</span>
                <i>LIVE</i>
              </div>
              <div className="system-flow" aria-hidden="true">
                <div><span>01</span><b>Eingang</b><small>Anfrage per Mail oder Formular</small></div>
                <div><span>02</span><b>KI bereitet vor</b><small>Einordnung, Rückfrage, Entwurf</small></div>
                <div><span>03</span><b>Mensch prüft</b><small>Lesen, anpassen, freigeben</small></div>
                <div><span>04</span><b>Ablage</b><small>Dort, wo das Team arbeitet</small></div>
              </div>
              <div className="web-board-signals">
                <div><span>01</span><b>Routine</b><small>automatisiert</small></div>
                <div><span>02</span><b>Entwurf</b><small>vorbereitet</small></div>
                <div><span>03</span><b>Freigabe</b><small>beim Menschen</small></div>
                <div><span>04</span><b>Daten</b><small>geklärt</small></div>
              </div>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="KI-Automatisierung auf einen Blick">
          <div><span>Geeignet für</span><strong>Wiederkehrende Wissensarbeit</strong></div>
          <div><span>Start</span><strong>Ein klar begrenzter Testprozess</strong></div>
          <div><span>Wichtig</span><strong>Menschliche Prüfung und Datenrahmen</strong></div>
          <div><span>Ziel</span><strong>Messbarer Zeitgewinn pro Woche</strong></div>
        </section>

        <section className="band dark-stage service-dark-stage" id="status">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">01 — Ausgangslage</span>
              <h2 className="band-title">KI ist erst wertvoll, wenn sie <em>Arbeit verbessert</em></h2>
              <p className="lead">
                Ein weiteres Abo löst keinen schlechten Ablauf. Die interessanten
                Anwendungen für kleine und mittlere Betriebe sind unspektakulär:
                Sie erledigen Arbeit, die heute jemand von Hand macht, obwohl sie
                jeden Tag gleich abläuft.
              </p>
              <p className="lead">
                Deshalb suchen wir zuerst die Stelle, an der Informationen
                verloren gehen, Arbeit doppelt entsteht oder Wissen nur in
                einzelnen Köpfen liegt. Erst dann geht es um Technik.
              </p>
            </div>
            <div className="reveal">
              <StatusPanel head="Typische Ansatzpunkte im Betrieb" rows={statusRows} />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="anwendungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Was KI konkret erledigt</span>
              <h2 className="band-title">Sechs Abläufe statt <em>allgemeiner Versprechen</em></h2>
            </div>
            <p className="band-note">
              Welche Anwendung zuerst sinnvoll ist, hängt von deinem Team, deinen
              Daten und den vorhandenen Systemen ab. Meist ist es die, die heute
              am meisten nervt.
            </p>
          </div>
          <div className="scope-grid reveal">
            {useCases.map((item) => (
              <article className="scope-card" key={item.nr}>
                <span>{item.nr}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <PlannedMedia
            title="Ein KI-Workflow aus der Praxis"
            description="Hier kommt eine freigegebene Prozessansicht oder ein anonymisierter Bildschirm aus einem echten Projekt hin, vom Eingang bis zur menschlichen Freigabe."
            format="16:9"
          />
        </section>

        <section className="band theme-light" id="branchen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Für wen das passt</span>
              <h2 className="band-title">Kein Tech-Unternehmen nötig. <em>Ein nerviger Ablauf reicht.</em></h2>
            </div>
            <p className="band-note">
              Sechs Branchen, sechs typische Ansatzpunkte. Die Technik ist
              überall ähnlich, der Ablauf ist immer deiner.
            </p>
          </div>
          <div className="audience-grid reveal">
            {audiences.map((audience) => (
              <article className="audience-card" key={audience.tag}>
                <span>{audience.tag}</span>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
                <small>{audience.hint}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="kontrolle">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">04 — Verantwortungsvolle Umsetzung</span>
              <h2 className="band-title">Automatisieren, ohne <em>Kontrolle abzugeben</em></h2>
              <p className="lead">
                KI darf vorbereiten, sortieren und Entwürfe erstellen. Kritische
                Entscheidungen, Freigaben und sensible Kommunikation bleiben
                dort beim Menschen, wo Verantwortung notwendig ist.
              </p>
              <ul className="lines">
                <li>Daten und Zugriffsrechte vorab klären.</li>
                <li>Ergebnisse nachvollziehbar und prüfbar halten.</li>
                <li>Klare Grenzen für den Anwendungsfall definieren.</li>
                <li>Team und bestehende Arbeitsweise mitnehmen.</li>
              </ul>
            </div>
            <div className="system-flow reveal" aria-label="Kontrollierter KI-Ablauf">
              <div><span>01</span><b>Input</b><small>Freigegebene Daten und klare Aufgabe</small></div>
              <div><span>02</span><b>KI-Vorbereitung</b><small>Struktur, Entwurf oder Vorschlag</small></div>
              <div><span>03</span><b>Prüfung</b><small>Menschliche Kontrolle und Freigabe</small></div>
              <div><span>04</span><b>Nächster Schritt</b><small>Dokumentiert und nachvollziehbar</small></div>
            </div>
          </div>
        </section>

        <section className="band theme-light" id="pruefung">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">05 — Bevor wir bauen</span>
              <h2 className="band-title">Sechs Fragen, <em>die jeder Ablauf bestehen muss</em></h2>
            </div>
            <p className="band-note">
              Fällt eine Antwort negativ aus, bauen wir nicht. Lieber ein
              ehrliches Nein im Erstgespräch als ein Prototyp, den niemand nutzt.
            </p>
          </div>
          <div className="friction-list checklist reveal">
            {checks.map((item, index) => (
              <div className="friction-row" key={item.problem}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.problem}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="grenzen">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">06 — Was wir nicht automatisieren</span>
              <h2 className="band-title">Vier Bereiche, <em>die beim Menschen bleiben</em></h2>
              <p className="lead">
                Die meisten Anbieter erzählen, was KI alles kann. Wir sagen dir
                auch, wo sie nichts zu suchen hat. Nicht aus Vorsicht, sondern
                weil dort Vertrauen, Haftung und Beziehung auf dem Spiel stehen.
              </p>
              <p className="lead">
                Innerhalb dieser Grenzen bleibt genug Routine übrig, die sich
                lohnt. Fast immer mehr, als Betriebe vorher vermuten.
              </p>
            </div>
            <div className="mini-grid reveal" aria-label="Grenzen der Automatisierung">
              {boundaries.map((item) => (
                <div key={item.title}>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="daten">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">07 — Datenschutz &amp; Technik</span>
              <h2 className="band-title">Der Rahmen steht, <em>bevor Daten fließen</em></h2>
              <p className="lead">
                Kundendaten, Preise, Personalunterlagen: Die Frage ist nicht, ob
                KI damit umgehen kann, sondern ob sie es darf. Deshalb klären
                wir vor der Umsetzung, welche Information welches System sehen
                darf, wer freigibt und was protokolliert wird.
              </p>
              <p className="lead">
                Das Ergebnis ist ein dokumentierter Ablauf, den du auch deinem
                Steuerberater oder Datenschutzbeauftragten zeigen kannst.
              </p>
            </div>
            <div className="mini-grid reveal" aria-label="Datenrahmen">
              {dataFrame.map((item) => (
                <div key={item.title}>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="vorgehen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">08 — Vorgehen</span>
              <h2 className="band-title">Vom Engpass zum <em>funktionierenden Ablauf</em></h2>
            </div>
            <p className="band-note">
              Fünf Phasen, ein Ablauf nach dem anderen. Erst wenn der erste
              Prozess läuft und misst, kommt der nächste.
            </p>
          </div>
          <Stepper steps={steps} />
        </section>

        <section className="band dark-stage service-dark-stage" id="beispiel">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">09 — Ein Beispielablauf</span>
              <h2 className="band-title">So sieht die Vorsortierung <em>von Anfragen aus</em></h2>
            </div>
            <p className="band-note">
              Ein typischer erster Prozess für Handwerk und Dienstleistung,
              schematisch dargestellt. Kein Kundenprojekt, aber genau so bauen
              wir es.
            </p>
          </div>
          <div className="reveal">
            <AblaufSimulator />
          </div>
          <div className="case-steps reveal" style={{ marginTop: 40 }}>
            {exampleFlow.map((step) => (
              <div className="case-step" key={step.tag}>
                <span>{step.tag}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="eigene-projekte">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">10 — Eigene Projekte</span>
              <h2 className="band-title">Was wir selbst <em>mit KI gebaut haben</em></h2>
            </div>
            <p className="band-note">
              Keine Kundenprojekte, sondern eigene Produkte und Werkzeuge. Jedes
              davon läuft, jedes kannst du anschauen. Genau so bauen wir es auch
              für dich.
            </p>
          </div>
          <DetailReihe eintraege={eigeneProjekte} titel={null} />
        </section>

        <section className="band dark-stage service-dark-stage" id="zentrale-demo">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">11 — Zum Ausprobieren</span>
              <h2 className="band-title">Die Zentrale, <em>zum Durchklicken</em></h2>
            </div>
            <p className="band-note">
              Ein erfundener Dachdeckerbetrieb, echte Bedienung: Bereich
              antippen, Aufgaben abhaken, „Was steht heute an?“ fragen. Für
              deinen Betrieb kommen deine Bereiche, Leute und Programme rein.
            </p>
          </div>
          <div className="reveal">
            <ZentraleDemo />
          </div>
        </section>

        <section className="band theme-light" id="einstieg">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">12 — Einstieg &amp; Kosten</span>
              <h2 className="band-title">Drei Schritte, <em>jeder einzeln entscheidbar</em></h2>
              <p className="lead">
                Du musst dich nicht für ein großes KI-Projekt entscheiden. Die
                Prozessaufnahme zeigt, ob sich ein Ablauf lohnt. Der Prototyp
                zeigt, ob der Zeitgewinn real ist. Erst dann geht es um
                Integration und Betreuung.
              </p>
              <p className="lead">
                Preise hängen von Systemen, Datenlage und Kritikalität ab und
                stehen vor jedem Schritt klar im Angebot. Keine offene
                Stundenabrechnung.
              </p>
            </div>
            <div className="mini-grid reveal" aria-label="Einstiegsschritte">
              {entry.map((item) => (
                <div key={item.title}>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="checkliste">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">13 — Selbst prüfen</span>
              <h2 className="band-title">Wo spart KI in deinem Betrieb <em>wirklich Zeit?</em></h2>
              <p className="lead">
                Unsere KI-Agenten-Checkliste hilft dir, das vor dem ersten
                Gespräch selbst einzuordnen: wo KI sofort hilft, wo es sich
                noch nicht lohnt und wie du ohne Projektrisiko startest.
                Kostenlos als PDF.
              </p>
              <Link className="body-link" href={resourceRoutes["ki-agenten-checkliste"]}>
                KI-Agenten-Checkliste herunterladen <ArrowIcon />
              </Link>
            </div>
            <div className="resource-grid reveal" style={{ gridTemplateColumns: "minmax(0, 360px)", justifyContent: "center" }}>
              <Link className="resource-card" href={resourceRoutes["ki-agenten-checkliste"]}>
                <div className="resource-mockup">
                  <Image src={kiFreebieImage} alt="" fill sizes="360px" />
                </div>
                <span>Checkliste · PDF</span>
                <h3>KI-Agenten-Checkliste</h3>
                <p>Wo KI im Betriebsalltag tatsächlich Zeit spart und wo sie nur Spielerei ist. Ehrlich eingeordnet, mit konkreten Beispielen.</p>
                <em>Kostenlos herunterladen <ArrowIcon /></em>
              </Link>
            </div>
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="zusammenarbeit">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">14 — Zusammenarbeit</span>
              <h2 className="band-title">Dein Ablauf. <em>Ein fester Ansprechpartner.</em></h2>
              <p className="lead">
                Kein Projektmanager, der weiterreicht. Du sprichst mit der
                Person, die den Prozess versteht und baut. Änderungen am Ablauf,
                neue Regeln oder eine zusätzliche Übergabe klärst du direkt per
                WhatsApp oder im Video-Call.
              </p>
              <ul className="lines">
                <li>Dokumentation, die dein Team versteht, nicht nur Entwickler.</li>
                <li>Einweisung für alle, die mit dem Ablauf arbeiten.</li>
                <li>Betreuung, wenn sich Werkzeuge oder Anforderungen ändern.</li>
              </ul>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 — Dein Ansprechpartner"
                messages={[
                  { from: "in", text: "Die Anfragen aus dem Kontaktformular landen jetzt sortiert im Postfach. Können wir WhatsApp-Anfragen auch einbinden?" },
                  { from: "out", text: "Ja. Ich prüfe, welche Daten dabei fließen, und melde mich mit einem Vorschlag." },
                  { from: "in", text: "Super, danke." },
                ]}
                footer="Beispielhafter Ablauf einer Abstimmung während der Betreuung"
              />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="faq">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">15 — Häufige Fragen</span>
              <h2 className="band-title">Was du vor dem Start <em>wissen solltest</em></h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>

          </div>
        </div>

        <div className="sheet service-ending">
          <CloseCta ctaLabel="KI-Prozess kostenlos besprechen">
            Welche Routine kostet dich <em>jede Woche Zeit?</em>
          </CloseCta>

          <ContactStrip />

          <SiteFooter />
        </div>
      </main>
    </>
  );
}
