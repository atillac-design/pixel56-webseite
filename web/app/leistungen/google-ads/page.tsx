import type { Metadata } from "next";
import { AnzeigenSchema } from "@/components/Schemata";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import BreadcrumbLd from "@/components/BreadcrumbLd";
import RegionLinks from "@/components/RegionLinks";
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
import LeistungsAnfrage from "@/components/LeistungsAnfrage";
import { frageboegen } from "@/lib/fragebogen";
import { googleAnzahlLautProfil, googleBewertungLautProfil } from "@/lib/google-bewertungen";

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
  { title: "Suchkampagnen", text: "Textanzeigen für Suchen mit klarer Absicht, etwa „Dachdecker Notdienst“ mit Ort. Hier entstehen die meisten Anfragen." },
  { title: "Lokale Sichtbarkeit", text: "Anzeigen mit Standort, Anruf und Wegbeschreibung, verknüpft mit dem Unternehmensprofil. Für Kunden aus dem Umkreis." },
  { title: "Automatisierte Kampagnen", text: "Kampagnen, die Google selbst steuert. Funktionieren nur mit sauberen Conversion-Daten, sonst verbrennen sie Budget. Gezielt eingesetzt, nicht standardmäßig." },
  { title: "Retargeting", text: "Wer deine Website besucht hat, sieht dich später wieder. Günstig, weil die Zielgruppe dich schon kennt." },
];

const audiences = [
  { tag: "Handwerk & Notdienst", title: "Wenn das Problem akut ist", text: "Rohrbruch, Sturmschaden, Schlüssel weg: Wer so sucht, braucht jetzt jemanden. Suchanzeigen mit Anrufoption holen das ab.", hint: "Typisch: hohe Absicht, kurze Entscheidung" },
  { tag: "Lokale Dienstleister", title: "Im Umkreis gefunden werden", text: "Pflege, Fahrschule, Steuerberatung, Studio: Kunden suchen mit Ort. Kampagnen mit Standortbezug und Zielseite pro Leistung.", hint: "Typisch: Umkreis statt Bundesgebiet" },
  { tag: "B2B & Spezialleistungen", title: "Nischen mit wenig, aber wertvollen Suchen", text: "Spezialtransporte, Trocknungstechnik, Industrieservice: wenige Suchen, jede ein möglicher großer Auftrag. Präzision statt Volumen.", hint: "Typisch: wenige Klicks, hoher Auftragswert" },
  { tag: "Bildung & Kurse", title: "Saisonale Nachfrage abholen", text: "Schulungen, Nachhilfe, Weiterbildung: Nachfrage kommt in Wellen. Kampagnen zum Anmeldezeitraum, direkt zur Anmeldung.", hint: "Typisch: Zeitfenster, klare Anmeldung" },
  { tag: "Immobilien & Bau", title: "Hochpreisig, gut vorqualifiziert", text: "Wer nach „Haus bauen schlüsselfertig“ sucht, ist weit in der Entscheidung. Zielseiten, die Fragen beantworten.", hint: "Typisch: lange Entscheidung, hoher Wert" },
  { tag: "Shops & Produkte", title: "Produkte direkt in der Suche", text: "Shopping-Anzeigen mit Bild und Preis. Nur sinnvoll, wenn Marge und Warenkorb die Klickkosten tragen.", hint: "Typisch: Produktfeed, Margenrechnung" },
];

const scope = [
  { nr: "01", title: "Keywords mit Absicht", text: "Nicht die Begriffe mit dem meisten Volumen, sondern die mit Auftrag dahinter. Ausgeschlossen, was nur kostet: Jobsuche, „kostenlos“, „selber machen“." },
  { nr: "02", title: "Struktur, die Google versteht", text: "Eine Anzeigengruppe pro Thema, passende Anzeigen, Zielseiten, die das Thema einlösen. Das senkt den Klickpreis." },
  { nr: "03", title: "Anzeigentexte & Erweiterungen", text: "Texte, die das Angebot in einer Zeile treffen, plus Anruf, Standort, Sitelinks. Mehr Fläche, höhere Klickrate." },
  { nr: "04", title: "Tracking vor dem Start", text: "Messung für Anfragen, Anrufe und Buchungen, getestet, bevor Budget fließt. Ohne Messung keine Optimierung." },
  { nr: "05", title: "Zielseiten", text: "Jede Kampagne führt auf eine Seite, die das Versprechen der Anzeige erfüllt. Fehlt sie, bauen wir sie." },
  { nr: "06", title: "Optimierung & Reporting", text: "Wöchentlich Suchbegriffe, Gebote, Budget und Anzeigen pflegen. Monatlich verständlich auswerten." },
];

const qualityFactors = [
  { title: "Anzeigenrelevanz", text: "Wer „Dachsanierung“ sucht, will keine Anzeige für „Bauunternehmen“." },
  { title: "Zielseitenerfahrung", text: "Hält die Seite, was die Anzeige verspricht? Thematisch, technisch, mobil." },
  { title: "Erwartete Klickrate", text: "Wie wahrscheinlich klickt genau diese Zielgruppe? Entsteht aus Text, Erweiterungen und Historie." },
];

const mistakes = [
  { problem: "Breite Keywords ohne Ausschlussliste.", answer: "„Dachdecker“ bringt auch Jobsuchende. Passende Keyword-Optionen, Negativliste jede Woche gepflegt." },
  { problem: "Die Anzeige führt auf die Startseite.", answer: "Wer eine Leistung sucht, will diese Leistung sehen. Eine Zielseite pro Thema, Anfrage oben." },
  { problem: "Kein Conversion-Tracking, nur Klicks.", answer: "Klicks sind Kosten, Anfragen sind Ergebnis. Wir messen die Aktion, die zählt, und steuern danach." },
  { problem: "Empfehlungen aus dem Konto blind übernommen.", answer: "Google schlägt gern mehr Budget und breitere Keywords vor. Wir prüfen jede Empfehlung gegen dein Ziel." },
  { problem: "Anzeigen ohne Erweiterungen.", answer: "Anruf, Standort, Sitelinks: kostenlose Fläche, die die Klickrate hebt." },
  { problem: "Einmal eingerichtet, nie wieder angefasst.", answer: "Suchverhalten und Wettbewerb ändern sich. Eine Kampagne, die niemand pflegt, wird jeden Monat teurer." },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Analyse & Keywords", text: "Wonach deine Zielgruppe sucht, was ein Klick kostet, was eine Anfrage wert sein darf. Vor dem ersten Euro." },
  { nr: "02", tag: "Phase 2", title: "Tracking", text: "Messung für Anfragen, Anrufe und Buchungen, getestet. Sonst bleibt alles Rätselraten." },
  { nr: "03", tag: "Phase 3", title: "Aufbau", text: "Kampagnen, Anzeigen, Erweiterungen, Zielseiten. Du siehst alle Texte vor dem Start." },
  { nr: "04", tag: "Phase 4", title: "Laufende Optimierung", text: "Wöchentlich anhand echter Daten: Suchbegriffe, Gebote, Budget, Anzeigentests." },
  { nr: "05", tag: "Phase 5", title: "Reporting & Kurs", text: "Verständlich, was das Budget gebracht hat. Gemeinsam entscheiden, wie es weitergeht." },
];

const weeklyChecks = [
  { title: "Suchbegriffe", text: "Wofür wurde die Anzeige wirklich ausgespielt? Unpassendes in die Negativliste, Gutes ergänzen." },
  { title: "Kosten pro Anfrage", text: "Steigen sie, finden wir die Ursache: Keyword, Anzeige oder Zielseite. Bevor es teuer wird." },
  { title: "Qualitätsfaktor", text: "Sinkt er, passen Anzeige und Seite nicht mehr zum Suchbegriff. Nachschärfen statt nachzahlen." },
  { title: "Anzeigentests", text: "Zwei Varianten gegeneinander, die bessere bleibt." },
  { title: "Zielseite", text: "Kommen Besucher an und fragen sie an? Absprünge sind oft ein Seitenproblem." },
  { title: "Budgetverteilung", text: "Budget wandert dorthin, wo Anfragen entstehen. Ohne Ergebnis wird gedrosselt." },
];


const channelMix = [
  { title: "Google Ads: sofort sichtbar", text: "Läuft ab dem ersten Tag, holt Nachfrage ab. Endet mit dem Budget." },
  { title: "SEO: langfristig sichtbar", text: "Braucht Monate, bringt dann Anfragen ohne Klickkosten. Ads zeigen, welche Begriffe sich lohnen." },
  { title: "Meta Ads: Nachfrage wecken", text: "Erreicht Menschen, bevor sie suchen. Wer dich kennt, klickt in der Suche eher." },
];

const faqs = [
  { q: "Wie viel Budget brauche ich für den Einstieg?", a: "Das hängt von Branche, Suchvolumen und Wettbewerb ab. Wichtiger als die Höhe ist die Struktur: Ohne sie verpufft auch ein großes Budget. Im Erstgespräch schätzen wir ein, welches Budget genug Daten für Entscheidungen liefert." },
  { q: "Wie setzt sich die Zusammenarbeit zusammen?", a: "Das Werbebudget geht direkt an Google und bleibt in deinem Konto. Die Betreuung ist ein fester Monatsbetrag, getrennt ausgewiesen. Eine Zielseite kommt nur dazu, wenn sie fehlt. Prozente vom Werbebudget nehmen wir nicht." },
  { q: "Brauche ich eine eigene Landingpage?", a: "Fast immer ja. Eine Seite, die zum Anzeigenversprechen passt, verbessert Anfragequote und Klickpreis zugleich. Passende Leistungsseiten reichen oft mit kleinen Anpassungen." },
  { q: "Wie schnell sehe ich erste Ergebnisse?", a: "Erste Daten innerhalb weniger Tage, belastbare Aussagen nach zwei bis vier Wochen Optimierung. Wir legen vorab einen Testzeitraum fest und bewerten danach gemeinsam." },
  { q: "Google Ads oder SEO?", a: "Beides hat seinen Platz. Ads wirken sofort und enden mit dem Budget, SEO braucht Monate und bringt dann Anfragen ohne Klickkosten. Oft der beste Weg: mit Ads lernen, welche Begriffe Anfragen bringen, und genau dafür die Website ausbauen." },
  { q: "Wem gehört das Google-Ads-Konto?", a: "Dir. Budget, Daten und Historie bleiben bei dir, auch wenn die Zusammenarbeit endet." },
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
                Google Ads ist der ehrlichste Werbekanal: Jeder Klick kostet, jeder Klick ist messbar. Deshalb fällt hier am schnellsten auf, wenn Struktur, Zielseite oder Messung fehlen.
              </p>
              <p className="lead">
                Den meisten Konten fehlt nicht Budget. Sie zahlen für Klicks, die nie eine Anfrage werden konnten.
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
                Bei Google Ads ist die Absicht schon da: Jemand sucht aktiv nach deiner Leistung, oft mit Ort, oft mit Dringlichkeit.
              </p>
              <p className="lead">
                Dafür verzeiht der Kanal keine Nachlässigkeit. Wer breit bucht und auf die Startseite schickt, zahlt für Besucher, die nie anfragen wollten.
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
              Ehrliche Einschränkung: Sucht niemand nach deiner Leistung, bringen Suchanzeigen nichts. Dann empfehlen wir einen anderen Kanal.
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
              Passen die Bausteine zusammen, belohnt Google das mit günstigeren Klicks.
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
              Google belohnt relevante Anzeigen mit niedrigeren Klickpreisen. Nicht nur den höchsten Bieter.
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
          <AnzeigenSchema />
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
              In fast jedem Konto, das wir übernehmen. Jeder vermeidbar, keiner peinlich.
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
              <span className="band-tag">07 — So läuft es</span>
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
              <span className="band-tag">08 — Laufende Betreuung</span>
              <h2 className="band-title">
                Was wir <em>jede Woche prüfen</em>
              </h2>
              <p className="lead">
                Eine Kampagne ist nie fertig. Suchbegriffe ändern sich, Wettbewerber heben Gebote, Google ändert Regeln. Deshalb kein Autopilot, sondern ein fester Rhythmus.
              </p>
              <p className="lead">
                Du bekommst eine Einordnung statt Exporte: Was lief, was ändern wir, was brauchen wir von dir.
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

        <section className="band theme-light" id="kanalmix">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">09 — Google Ads im Zusammenspiel</span>
              <h2 className="band-title">
                Sofort sichtbar, <em>langfristig gefunden</em>
              </h2>
              <p className="lead">
                Google Ads liefert ab dem ersten Tag Daten: welche Suchbegriffe Anfragen bringen, welche Zielseiten funktionieren. Diese Daten machen SEO und Meta Ads besser.
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
              <span className="band-tag">10 — Zusammenarbeit</span>
              <h2 className="band-title">
                Dein Budget. <em>Volle Transparenz.</em>
              </h2>
              <p className="lead">
                Kein Callcenter, keine Rückrufbitte. Du sprichst per WhatsApp oder kurzem Call mit dem, der die Kampagne steuert.
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
              <span className="band-tag">11 — Das sagen Kunden</span>
              <h2 className="band-title">
                Wörtlich so <em>veröffentlicht.</em>
              </h2>
            </div>
            <p className="band-note">Nichts erfunden, nichts geschönt.  Zahlen.
            </p>
          </div>
          <Reviews reviews={verifiedReviews} items={verifiedReviews} />
        </section>

        <RegionLinks leistung="Google Ads" kurz="Google Ads" />

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
                Sag uns kurz, <em>was passieren soll, wenn jemand sucht.</em>
              </h2>
            </div>
            <p className="band-note">{frageboegen["google-ads"].einleitung}</p>
          </div>
          <div className="reveal">
            <LeistungsAnfrage bogen={frageboegen["google-ads"]} google={{ bewertung: googleBewertungLautProfil, anzahl: googleAnzahlLautProfil }} />
          </div>
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
