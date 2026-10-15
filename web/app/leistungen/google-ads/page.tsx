import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import BreadcrumbLd from "@/components/BreadcrumbLd";
import RegionLinks from "@/components/RegionLinks";
import PlannedMedia from "@/components/PlannedMedia";
import {
  ArrowIcon,
  ClientMarquee,
  CloseCta,
  ContactStrip,
  FaqList,
  Reviews,
  StatusPanel,
  Stepper,
  WaMock,
} from "@/components/ui";
import { SearchMock } from "@/components/mocks";
import { site } from "@/lib/site";
import { verifiedReviews } from "@/lib/verified-reviews";
import { serviceRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Google Ads Agentur: Sichtbar, wenn gesucht wird",
  description:
    "Google Ads mit sauberem Tracking, klarer Kampagnenstruktur und passender Zielseite für Handwerk, Dienstleister und Mittelstand. Pixel56 bei Koblenz.",
  alternates: { canonical: serviceRoutes["google-ads"] },
  openGraph: {
    title: "Google Ads Agentur für KMU: Sichtbar, wenn gesucht wird | Pixel56",
    description:
      "Suchkampagnen, die Anfragen bringen: Keywords mit Absicht, Tracking vor dem Start, wöchentliche Optimierung. Eigenes Konto, feste Betreuung.",
    url: serviceRoutes["google-ads"],
  },
};

const serviceUrl = `${site.url}${serviceRoutes["google-ads"]}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: "Google Ads: Suchmaschinenwerbung",
      serviceType: "Suchmaschinenwerbung",
      description:
        "Planung, Aufbau und laufende Betreuung von Google-Ads-Kampagnen für kleine und mittlere Unternehmen, inklusive Keyword-Recherche, Conversion-Tracking, Zielseiten und wöchentlicher Optimierung.",
      url: serviceUrl,
      provider: { "@type": "ProfessionalService", "@id": `${site.url}/#organization`, name: site.name, url: site.url },
      areaServed: [
        { "@type": "City", name: "Koblenz" },
        { "@type": "Country", name: "Deutschland" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Google-Ads-Leistungen",
        itemListElement: [
          "Keyword-Recherche und Suchabsicht",
          "Kampagnenstruktur und Anzeigengruppen",
          "Anzeigentexte und Erweiterungen",
          "Conversion-Tracking und Einwilligung",
          "Zielseiten",
          "Laufende Optimierung und Reporting",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: site.url },
        { "@type": "ListItem", position: 2, name: "Leistungen", item: `${site.url}/dienstleistung` },
        { "@type": "ListItem", position: 3, name: "Google Ads", item: serviceUrl },
      ],
    },
  ],
};

const statusRows = [
  { label: "Budget läuft, niemand weiß wofür", tag: "Tracking" },
  { label: "Breite Keywords, teure Klicks", tag: "Struktur" },
  { label: "Anzeige führt auf die Startseite", tag: "Zielseite" },
  { label: "Empfehlungen blind übernommen", tag: "Automatik" },
  { label: "Einmal eingerichtet, nie angefasst", tag: "Pflege" },
  { label: "Einmal probiert, abgeschrieben", tag: "Setup" },
];

const campaignTypes = [
  { title: "Suchkampagnen", text: "Der Kern: Textanzeigen für Suchanfragen mit klarer Absicht, etwa „Dachdecker Koblenz Notdienst“. Hier entstehen die meisten Anfragen." },
  { title: "Lokale Sichtbarkeit", text: "Anzeigen mit Standort, Anruf und Wegbeschreibung, verknüpft mit dem Google-Unternehmensprofil. Für Betriebe, deren Kunden aus dem Umkreis kommen." },
  { title: "Automatisierte Kampagnen", text: "Google bietet Kampagnen, die vieles selbst steuern. Sie funktionieren nur mit sauberen Conversion-Daten; ohne diese verbrennen sie Budget. Wir setzen sie gezielt ein, nicht standardmäßig." },
  { title: "Retargeting", text: "Wer deine Website besucht hat, aber nicht angefragt hat, sieht dich später wieder. Günstig, weil die Zielgruppe dich bereits kennt." },
];

const audiences = [
  { tag: "Handwerk & Notdienst", title: "Wenn das Problem akut ist", text: "Rohrbruch, Sturmschaden, Schlüssel weg: Wer so sucht, braucht jetzt jemanden. Suchkampagnen mit Anrufoption holen genau diese Nachfrage ab.", hint: "Typisch: hohe Absicht, kurze Entscheidung" },
  { tag: "Lokale Dienstleister", title: "Im Umkreis gefunden werden", text: "Pflege, Fahrschule, Steuerberatung, Studio: Kunden suchen mit Ortsangabe. Kampagnen mit Standortbezug und passenden Zielseiten pro Leistung.", hint: "Typisch: Umkreis statt Bundesgebiet" },
  { tag: "B2B & Spezialleistungen", title: "Nischen mit wenig, aber wertvollen Suchen", text: "Spezialtransporte, Trocknungstechnik, Industrieservice: wenige Suchanfragen im Monat, jede einzelne potenziell ein großer Auftrag. Hier zählt Präzision, nicht Volumen.", hint: "Typisch: wenige Klicks, hoher Auftragswert" },
  { tag: "Bildung & Kurse", title: "Saisonale Nachfrage abholen", text: "Schulungen, Nachhilfe, Weiterbildung: Nachfrage kommt in Wellen. Kampagnen, die zum Anmeldezeitraum laufen und auf eine Anmeldestrecke führen.", hint: "Typisch: Zeitfenster, klare Anmeldung" },
  { tag: "Immobilien & Bau", title: "Hochpreisig, gut vorqualifiziert", text: "Wer nach „Haus bauen schlüsselfertig“ sucht, ist weit im Entscheidungsprozess. Zielseiten, die Fragen beantworten, statt nur ein Formular zu zeigen.", hint: "Typisch: lange Entscheidung, hoher Wert" },
  { tag: "Shops & Produkte", title: "Produkte direkt in der Suche", text: "Shopping-Anzeigen mit Bild und Preis für Produkte, die Menschen gezielt suchen. Nur sinnvoll, wenn Marge und Warenkorb die Klickkosten tragen.", hint: "Typisch: Produktfeed, Margenrechnung" },
];

const scope = [
  { nr: "01", title: "Keywords mit Absicht", text: "Wir suchen nicht die Begriffe mit dem meisten Volumen, sondern die, hinter denen ein Auftrag steckt. Und wir schließen aus, was nur kostet: Jobsuche, Ausbildung, „kostenlos“, „selber machen“." },
  { nr: "02", title: "Struktur, die Google versteht", text: "Eine Anzeigengruppe pro Thema, Anzeigen, die zum Suchbegriff passen, Zielseiten, die das Thema einlösen. So entsteht ein guter Qualitätsfaktor und damit ein günstigerer Klickpreis." },
  { nr: "03", title: "Anzeigentexte & Erweiterungen", text: "Texte, die das Angebot in einer Zeile treffen, plus Anruf, Standort, Sitelinks und Zusatzinfos. Mehr Fläche in der Suche, höhere Klickrate." },
  { nr: "04", title: "Tracking vor dem Start", text: "Conversion-Messung für Anfragen, Anrufe und Buchungen, eingerichtet mit Einwilligung und getestet, bevor Budget fließt. Ohne Messung keine Optimierung." },
  { nr: "05", title: "Zielseiten", text: "Jede Kampagne führt auf eine Seite, die das Versprechen der Anzeige erfüllt. Fehlt sie, bauen wir sie. Die Startseite ist fast nie die richtige Adresse." },
  { nr: "06", title: "Optimierung & Reporting", text: "Wöchentlich: Suchbegriffe prüfen, Negativ-Keywords ergänzen, Gebote und Budget verschieben, Anzeigen testen. Monatlich: verständliche Auswertung, was das Budget gebracht hat." },
];

const qualityFactors = [
  { title: "Anzeigenrelevanz", text: "Wie gut Anzeigentext und Suchbegriff zusammenpassen. Wer „Dachsanierung“ sucht, will keine Anzeige für „Bauunternehmen“." },
  { title: "Zielseitenerfahrung", text: "Ob die Seite hält, was die Anzeige verspricht: thematisch, technisch, mobil. Ladezeit und Klarheit zählen." },
  { title: "Erwartete Klickrate", text: "Wie wahrscheinlich es ist, dass genau diese Zielgruppe klickt. Entsteht aus Text, Erweiterungen und Historie." },
];

const mistakes = [
  { problem: "Breite Keywords ohne Ausschlussliste.", answer: "„Dachdecker“ bringt auch Jobsuchende und Ausbildungsplätze. Wir arbeiten mit passenden Keyword-Optionen und pflegen die Negativliste jede Woche." },
  { problem: "Die Anzeige führt auf die Startseite.", answer: "Wer nach einer Leistung sucht, will diese Leistung sehen. Eine Zielseite pro Thema, mit Anfrageweg oben, nicht nach drei Mal Scrollen." },
  { problem: "Kein Conversion-Tracking, nur Klicks.", answer: "Klicks sind Kosten, Anfragen sind Ergebnis. Wir messen die Aktion, die zählt, und steuern danach. Was wegen Einwilligung nicht messbar ist, benennen wir." },
  { problem: "Empfehlungen aus dem Konto blind übernommen.", answer: "Google schlägt gerne mehr Budget und breitere Keywords vor. Manches ist sinnvoll, vieles nicht. Wir prüfen jede Empfehlung gegen dein Ziel." },
  { problem: "Anzeigen ohne Erweiterungen.", answer: "Anruf, Standort, Sitelinks, Zusatzinfos: kostenlose Fläche in der Suche, die die Klickrate hebt. Fehlt sie, zahlst du mehr für weniger." },
  { problem: "Einmal eingerichtet, nie wieder angefasst.", answer: "Suchverhalten, Wettbewerb und Preise ändern sich. Eine Kampagne, die niemand pflegt, wird jeden Monat ein bisschen teurer." },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Analyse & Keywords", text: "Wonach deine Zielgruppe sucht, was ein Klick in deiner Branche kostet und was eine Anfrage wert sein darf. Vor dem ersten Euro Budget." },
  { nr: "02", tag: "Phase 2", title: "Tracking", text: "Conversion-Messung für Anfragen, Anrufe und Buchungen, mit Einwilligung und getestet. Sonst bleibt alles Rätselraten." },
  { nr: "03", tag: "Phase 3", title: "Aufbau", text: "Kampagnen, Anzeigengruppen, Anzeigen, Erweiterungen und Zielseiten. Du siehst alle Texte vor dem Start." },
  { nr: "04", tag: "Phase 4", title: "Laufende Optimierung", text: "Wöchentliche Pflege anhand echter Daten: Suchbegriffe, Gebote, Budget, Anzeigentests." },
  { nr: "05", tag: "Phase 5", title: "Reporting & Kurs", text: "Verständliche Auswertung, was das Budget gebracht hat, und gemeinsame Entscheidung, wie es weitergeht." },
];

const weeklyChecks = [
  { title: "Suchbegriffe", text: "Wofür wurde die Anzeige wirklich ausgespielt? Unpassende Begriffe wandern in die Negativliste, neue gute Begriffe werden ergänzt." },
  { title: "Kosten pro Anfrage", text: "Steigen sie, finden wir die Ursache: Keyword, Anzeige oder Zielseite. Bevor es teuer wird." },
  { title: "Qualitätsfaktor", text: "Sinkt er, passen Anzeige und Seite nicht mehr zum Suchbegriff. Dann wird nachgeschärft, nicht nachgezahlt." },
  { title: "Anzeigentests", text: "Zwei Varianten laufen gegeneinander, die bessere bleibt. So wird die Klickrate Woche für Woche besser." },
  { title: "Zielseite", text: "Kommen Besucher an und fragen sie an? Absprünge sind oft kein Anzeigenproblem, sondern ein Seitenproblem." },
  { title: "Budgetverteilung", text: "Budget wandert dorthin, wo Anfragen entstehen. Kampagnen ohne Ergebnis werden gedrosselt oder abgeschaltet." },
];

const costParts = [
  { title: "Werbebudget", text: "Geht direkt an Google und bleibt in deinem Konto nachvollziehbar. Die sinnvolle Höhe hängt von Klickpreisen in deiner Branche und deiner Region ab." },
  { title: "Betreuung", text: "Strategie, Aufbau, wöchentliche Optimierung und Reporting als monatlicher Festbetrag, getrennt vom Werbebudget ausgewiesen." },
  { title: "Zielseite", text: "Falls keine passende Seite existiert, bauen wir eine Landingpage. Einmalig, danach gehört sie dir." },
  { title: "Kein Prozentmodell", text: "Wir nehmen keinen Anteil vom Werbebudget. Das würde hohes Budget belohnen, nicht gute Arbeit." },
];

const channelMix = [
  { title: "Google Ads: sofort sichtbar", text: "Läuft ab dem ersten Tag und holt bestehende Nachfrage ab. Endet, wenn das Budget endet." },
  { title: "SEO: langfristig sichtbar", text: "Braucht Monate, bringt dann Anfragen ohne Klickkosten. Ads liefern dabei die Daten, welche Begriffe sich lohnen." },
  { title: "Meta Ads: Nachfrage wecken", text: "Erreicht Menschen, bevor sie suchen. Wer dich dort gesehen hat, klickt in der Suche eher auf deine Anzeige." },
];

const faqs = [
  { q: "Wie viel Budget brauche ich für den Einstieg?", a: "Das hängt von Branche, Suchvolumen und Wettbewerb ab. Wichtiger als die Höhe ist eine saubere Struktur: Ohne sie verpufft auch ein großes Budget. Im Erstgespräch schätzen wir für deinen Bereich ein, welches Budget genug Daten für Entscheidungen liefert." },
  { q: "Was kostet ein Klick bei Google Ads?", a: "Das variiert stark je nach Branche und Wettbewerb, von wenigen Cent bis zu mehreren Euro. Ein guter Qualitätsfaktor senkt den Preis spürbar. Wir schätzen die Spanne für deine Keywords vor dem Start ein." },
  { q: "Brauche ich eine eigene Landingpage für die Anzeigen?", a: "Fast immer ja. Eine fokussierte Seite, die zum Anzeigenversprechen passt, verbessert Anfragequote und Qualitätsfaktor zugleich. Wenn deine Website bereits passende Leistungsseiten hat, reichen diese oft mit kleinen Anpassungen." },
  { q: "Wie schnell sehe ich erste Ergebnisse?", a: "Erste Daten gibt es innerhalb weniger Tage, belastbare Aussagen nach zwei bis vier Wochen laufender Optimierung. Wir legen vorab einen Testzeitraum fest und bewerten danach gemeinsam." },
  { q: "Google Ads oder SEO, was ist besser?", a: "Beides hat seinen Platz. Ads wirken sofort und enden mit dem Budget, SEO braucht Monate und bringt dann Anfragen ohne Klickkosten. Oft ist der beste Weg: mit Ads starten, lernen, welche Begriffe Anfragen bringen, und genau dafür die Website ausbauen." },
  { q: "Wem gehört das Google-Ads-Konto?", a: "Dir. Wir arbeiten in einem Konto, auf das dein Unternehmen vollen Zugriff hat. Budget, Daten und Historie bleiben bei dir, auch wenn die Zusammenarbeit endet." },
  { q: "Was kostet die Betreuung, getrennt vom Werbebudget?", a: "Das Werbebudget geht direkt an Google. Die Betreuung deckt Strategie, Aufbau, wöchentliche Optimierung und Reporting ab und wird als monatlicher Festbetrag separat ausgewiesen. Den Umfang klären wir im kostenlosen Erstgespräch." },
  { q: "Bleibst du auch danach erreichbar?", a: "Ja. Per WhatsApp, Telefon oder E-Mail über einen festen Ansprechpartner, der die Kampagne selbst steuert. Betreuung ist Teil der Zusammenarbeit, kein Zusatzverkauf." },
];

export default function GoogleAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbLd items={[{ name: "Leistungen", href: "/dienstleistung" }, { name: "Google Ads", href: serviceRoutes["google-ads"] }]} />

      <main className="service-premium google-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Leistungen", page: "Google Ads" }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">GOOGLE ADS FÜR KLEINE UND MITTELSTÄNDISCHE UNTERNEHMEN · DEUTSCHLANDWEIT · DACH-REGION</div>
              <h1>
                <span>Sichtbar, wenn</span>
                <span className="service-hero-accent">gesucht wird.</span>
                <span>Nicht erst danach.</span>
              </h1>
              <p>
                Jemand tippt gerade „Dachdecker Koblenz“ oder „Zahnarzt
                Neuwied“ ein und will einen Termin. Wir sorgen dafür, dass du dort stehst: Keywords mit
                Auftrag dahinter, Tracking vor dem ersten Euro, eine Zielseite,
                die hält, was die Anzeige verspricht.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Google-Ads-Potenzial prüfen <ArrowIcon />
                </a>
                <Link className="btn-text" href="#fehler">
                  Sechs typische Fehler ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="Google Ads auf einen Blick">
                <span>Tracking vor dem Start</span>
                <span>Eigenes Konto</span>
                <span>Wöchentliche Pflege</span>
                <span>Ein Ansprechpartner</span>
              </div>
            </div>

            <div className="web-experience-board" aria-label="Beispiel einer Suchergebnisseite mit Anzeige">
              <div className="web-board-top">
                <span>PIXEL56 · GOOGLE ADS</span>
                <i>LIVE</i>
              </div>
              <SearchMock
                query="dachdecker koblenz"
                youTag="Anzeige · Dein Betrieb"
                others={["Mitbewerber A · Organisch", "Mitbewerber B · Organisch"]}
              />
              <div className="web-board-signals">
                <div><span>01</span><b>Keyword</b><small>mit Absicht</small></div>
                <div><span>02</span><b>Anzeige</b><small>passend</small></div>
                <div><span>03</span><b>Zielseite</b><small>fokussiert</small></div>
                <div><span>04</span><b>Tracking</b><small>messbar</small></div>
              </div>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="Google Ads auf einen Blick">
          <div><span>Moment</span><strong>Sichtbar bei aktiver Nachfrage</strong></div>
          <div><span>Setup</span><strong>Keywords, Anzeigen, Zielseiten</strong></div>
          <div><span>Messung</span><strong>Conversion-Tracking vor dem Start</strong></div>
          <div><span>Ziel</span><strong>Anfragen zu vertretbaren Kosten</strong></div>
        </section>

        <section className="band dark-stage service-dark-stage" id="status">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">01 — Der Status quo</span>
              <h2 className="band-title">
                Sechs Zeichen, dass Budget <em>verpufft statt wirkt</em>
              </h2>
              <p className="lead">
                Google Ads ist der ehrlichste Werbekanal: Jeder Klick kostet,
                und jeder Klick ist messbar. Genau deshalb fällt hier am
                schnellsten auf, wenn Struktur, Zielseite oder Messung fehlen.
              </p>
              <p className="lead">
                Die meisten Konten, die wir übernehmen, haben nicht zu wenig
                Budget. Sie zahlen für Klicks, die nie eine Anfrage werden
                konnten.
              </p>
            </div>
            <div className="reveal">
              <StatusPanel head="Typische Warnsignale im Konto" rows={statusRows} />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="warum">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">02 — Warum Google Ads</span>
              <h2 className="band-title">
                Der einzige Kanal, der <em>Absicht abholt</em>
              </h2>
              <p className="lead">
                Bei den meisten Werbeformen weckst du Interesse, das erst
                entstehen muss. Bei Google Ads ist die Absicht schon da: Jemand
                sucht aktiv nach deiner Leistung, oft mit Ort und oft mit
                Dringlichkeit.
              </p>
              <p className="lead">
                Dafür ist der Kanal unbarmherzig gegenüber Nachlässigkeit. Wer
                breit bucht und auf die Startseite schickt, zahlt für Besucher,
                die nie anfragen wollten.
              </p>
              <ul className="lines">
                <li>Ohne Anzeigen bist du im entscheidenden Moment unsichtbar.</li>
                <li>Ohne Struktur zahlst du für Klicks ohne Anfrage.</li>
                <li>Mit sauberem Tracking lässt sich jeder Euro einem Ergebnis zuordnen.</li>
                <li>
                  Für Nachfrage, die noch nicht besteht: <Link href={serviceRoutes["meta-ads"]}>Meta Ads</Link>
                </li>
              </ul>
            </div>
            <div className="mini-grid reveal" aria-label="Kampagnenarten">
              {campaignTypes.map((item) => (
                <div key={item.title}>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="einsatz">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Für wen Google Ads arbeitet</span>
              <h2 className="band-title">
                Sechs Situationen, <em>in denen Suchanzeigen sich lohnen</em>
              </h2>
            </div>
            <p className="band-note">
              Und eine ehrliche Einschränkung: Wenn niemand nach deiner Leistung
              sucht, bringen Suchanzeigen nichts. Dann empfehlen wir einen
              anderen Kanal.
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

        <section className="band theme-light" id="leistungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Was wir liefern</span>
              <h2 className="band-title">
                Von der Keyword-Liste bis zur <em>wöchentlichen Pflege</em>
              </h2>
            </div>
            <p className="band-note">
              Sechs Bausteine, die zusammengehören. Der Qualitätsfaktor von
              Google belohnt, wenn sie zusammenpassen, mit günstigeren Klicks.
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

        <section className="band theme-light" id="qualitaet">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">05 — Was den Klickpreis senkt</span>
              <h2 className="band-title">
                Mehr Budget ist <em>nicht die einzige Stellschraube</em>
              </h2>
            </div>
            <p className="band-note">
              Google belohnt Anzeigen, die für die suchende Person relevant
              sind, mit niedrigeren Klickpreisen. Nicht nur den höchsten Bieter.
            </p>
          </div>
          <div className="mini-grid cols-3 reveal" aria-label="Bestandteile des Qualitätsfaktors">
            {qualityFactors.map((item) => (
              <div key={item.title}>
                <b>{item.title}</b>
                <small>{item.text}</small>
              </div>
            ))}
          </div>
          <PlannedMedia
            title="Einblick in eine echte Google-Ads-Kampagne"
            description="Hier passt später ein freigegebener, anonymisierter Screenshot von Kampagnenstruktur und Auswertung hinein, mit echten Daten statt erfundener Ergebnisse."
            format="16:9"
          />
        </section>

        <section className="band theme-light" id="fehler">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">06 — Typische Fehler</span>
              <h2 className="band-title">
                Sechs Fehler, <em>die Klicks teuer machen</em>
              </h2>
            </div>
            <p className="band-note">
              Wir sehen sie in fast jedem Konto, das wir übernehmen. Jeder ist
              vermeidbar, keiner ist peinlich.
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
              <span className="band-tag">07 — Der Weg dahin</span>
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
              <span className="band-tag">08 — Laufende Betreuung</span>
              <h2 className="band-title">
                Was wir <em>jede Woche prüfen</em>
              </h2>
              <p className="lead">
                Eine Google-Ads-Kampagne ist nie fertig. Suchbegriffe ändern
                sich, Wettbewerber heben Gebote, Google ändert Regeln. Deshalb
                gibt es bei uns keinen Autopilot, sondern einen festen Rhythmus.
              </p>
              <p className="lead">
                Du bekommst keine Exporte aus dem Konto, sondern eine
                Einordnung: Was lief, was ändern wir, was brauchen wir von dir.
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
              <span className="band-tag">09 — Budget &amp; Kosten</span>
              <h2 className="band-title">
                Woraus sich die Kosten <em>zusammensetzen</em>
              </h2>
              <p className="lead">
                Klar getrennt: Das Werbebudget bleibt in deinem Konto, die
                Betreuung ist ein fester Betrag, eine Zielseite wird nur
                angeboten, wenn du sie brauchst.
              </p>
              <p className="lead">
                Konkrete Zahlen nennen wir im Erstgespräch, weil Klickpreise und
                Suchvolumen je nach Branche und Region stark schwanken. Wir
                sagen dir vorher, ob der Kanal für dein Angebot überhaupt
                rechnet.
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

        <section className="band theme-light" id="kanalmix">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">10 — Google Ads im Zusammenspiel</span>
              <h2 className="band-title">
                Sofort sichtbar, <em>langfristig gefunden</em>
              </h2>
              <p className="lead">
                Google Ads liefert ab dem ersten Tag Daten: welche Suchbegriffe
                Anfragen bringen, welche Zielseiten funktionieren, was eine
                Anfrage kosten darf. Genau diese Daten machen SEO und Meta Ads
                besser.
              </p>
              <ul className="lines">
                <li>
                  Begriffe, die sich bezahlt lohnen, werden zu Seiten, die organisch ranken: <Link href={serviceRoutes.seo}>SEO-Grundlagen</Link>
                </li>
                <li>
                  Zielseiten aus Kampagnen tragen auch die nächste Kampagne: <Link href={serviceRoutes["landingpages-funnels"]}>Landingpages &amp; Funnels</Link>
                </li>
                <li>
                  Bekanntheit vor der Suche senkt den Klickpreis in der Suche: <Link href={serviceRoutes["meta-ads"]}>Meta Ads</Link>
                </li>
              </ul>
            </div>
            <div className="mini-grid reveal" aria-label="Kanäle im Zusammenspiel">
              {channelMix.map((item) => (
                <div key={item.title}>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="zusammenarbeit">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">11 — Zusammenarbeit</span>
              <h2 className="band-title">
                Dein Budget. <em>Volle Transparenz.</em>
              </h2>
              <p className="lead">
                Kein Callcenter, keine Rückrufbitte. Zahlen, Klickpreise und
                Anpassungen besprichst du direkt mit dem, der die Kampagne
                steuert, per WhatsApp oder im kurzen Call.
              </p>
              <ul className="lines">
                <li>Dein Konto, dein Zugriff, deine Daten.</li>
                <li>Alle Anzeigentexte vor dem Start zur Freigabe.</li>
                <li>Monatliche Auswertung in verständlicher Sprache.</li>
              </ul>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 — Dein Ansprechpartner"
                messages={[
                  { from: "in", text: "Wie lief die Kampagne diese Woche?" },
                  { from: "out", text: "Klickpreis gesunken, zwei unpassende Suchbegriffe ausgeschlossen. Die Auswertung schicke ich dir gleich." },
                  { from: "in", text: "Super, danke." },
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
                Das sagen Kunden <em>über die Zusammenarbeit</em>
              </h2>
            </div>
            <p className="band-note">
              Nur Aussagen, die unsere Kunden so veröffentlicht haben. Keine
              erfundenen Bewertungen, keine geschönten Zahlen.
            </p>
          </div>
          <Reviews reviews={verifiedReviews} items={verifiedReviews} />
        </section>

        <RegionLinks leistung="Google Ads" kurz="Google Ads" />

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
          <CloseCta ctaLabel="Google-Ads-Potenzial prüfen">
            Lass uns über deine <em>Google-Ads-Kampagne</em> sprechen.
          </CloseCta>

          <ContactStrip />

          <SiteFooter />
        </div>
      </main>
    </>
  );
}
