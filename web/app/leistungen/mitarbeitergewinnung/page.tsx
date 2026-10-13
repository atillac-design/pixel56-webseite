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
  StatusPanel,
  Stepper,
  WaMock,
} from "@/components/ui";
import { JobMock } from "@/components/mocks";
import { site } from "@/lib/site";
import { getFallstudie } from "@/lib/projekte";
import { verifiedProjectVoices, verifiedReviews } from "@/lib/verified-reviews";
import { projectPath, serviceRoutes } from "@/lib/routes";
import gmDachdeckerImage from "@/public/bilder/projekt-gm-dachdecker.webp";

export const metadata: Metadata = {
  title: "Mitarbeitergewinnung für Handwerk und Mittelstand: Bewerbungen ohne Umweg",
  description:
    "Karriereseiten mit Direkt-Upload und Recruiting-Kampagnen auf Instagram und Facebook. Für Betriebe, die Fachkräfte suchen und keine Bewerbungen bekommen. Pixel56 aus Bendorf bei Koblenz.",
  alternates: { canonical: serviceRoutes.mitarbeitergewinnung },
  openGraph: {
    title: "Mitarbeitergewinnung: Bewerbungen ohne Umweg | Pixel56",
    description:
      "Karriereseite, Bewerbung in zwei Minuten und Kampagnen, die Menschen erreichen, bevor sie aktiv suchen.",
    url: serviceRoutes.mitarbeitergewinnung,
  },
};

const serviceUrl = `${site.url}${serviceRoutes.mitarbeitergewinnung}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: "Mitarbeitergewinnung und Recruiting-Marketing",
      serviceType: "Recruiting-Marketing",
      description:
        "Karriereseiten mit Direkt-Upload, Stellenanzeigen, die gelesen werden, und Recruiting-Kampagnen auf Meta und Google für Handwerk, Mittelstand und Dienstleister.",
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
        { "@type": "ListItem", position: 3, name: "Mitarbeitergewinnung", item: serviceUrl },
      ],
    },
  ],
};

const statusRows = [
  { label: "Stelle ausgeschrieben, keine Bewerbung", tag: "Reichweite" },
  { label: "Bewerbung nur per E-Mail", tag: "Umweg" },
  { label: "Karriereseite veraltet oder fehlt", tag: "Eindruck" },
  { label: "Jüngere Zielgruppe unerreicht", tag: "Kanal" },
  { label: "Antwort dauert Wochen", tag: "Tempo" },
  { label: "„Fachkräftemangel“ als Ausrede", tag: "Haltung" },
];

const principles = [
  { title: "Sichtbar sein", text: "Wer eine Stelle sucht, googelt den Betrieb. Fehlt die Karriereseite oder ist sie von 2016, ist die Bewerbung schon vorbei, bevor sie begonnen hat." },
  { title: "Einblick geben", text: "Menschen bewerben sich bei Menschen. Fotos vom Team, Videos von der Baustelle, ein paar ehrliche Sätze zum Alltag schlagen jede Floskel-Liste." },
  { title: "Bewerbung in zwei Minuten", text: "Name, Telefon, Unterlagen hochladen, fertig. Vom Handy, ohne E-Mail-Programm. Jede weitere Hürde kostet genau die Kandidaten, die du willst." },
  { title: "Schnell antworten", text: "Wer heute eine Bewerbung schickt, hat morgen zwei weitere Angebote. Eine Antwort innerhalb weniger Tage ist kein Service, sondern Voraussetzung." },
];

const scope = [
  { nr: "01", title: "Karriereseite", text: "Eine eigene, gepflegte Seite mit Einblick in den Betrieb, den Menschen und den Alltag. Kein Aushang, sondern ein Grund, sich zu bewerben." },
  { nr: "02", title: "Stellenanzeigen, die man liest", text: "Was man tut, mit wem, zu welchen Bedingungen, in Sätzen statt Stichpunktlisten. Gehalt und Arbeitszeiten offen, wo es geht." },
  { nr: "03", title: "Bewerbung mit Direkt-Upload", text: "Kurzes Formular, Unterlagen direkt hochladen, sofortige Bestätigung. Auch ohne Lebenslauf möglich, wenn dir das reicht." },
  { nr: "04", title: "Recruiting-Kampagnen auf Meta", text: "Instagram und Facebook erreichen Menschen, die nicht aktiv suchen. Mit echten Mitarbeitern im Motiv und einem Klick zur Bewerbung." },
  { nr: "05", title: "Sichtbar in der Google-Suche", text: "Stellen so aufbereitet, dass Google sie als Jobangebot versteht, plus Anzeigen für Suchen wie „Dachdecker Job Koblenz“." },
  { nr: "06", title: "Arbeitgeberprofil & Bewertungen", text: "Google-Unternehmensprofil, Bewertungen und Social-Media-Profile zeigen, wie der Betrieb wirklich ist. Wir helfen, sie ehrlich zu pflegen." },
];

const audiences = [
  { tag: "Dachdecker & Handwerk", title: "Volle Auftragsbücher, leere Bewerbermappe", text: "Die Arbeit ist da, die Hände fehlen. Karriereseite mit Einblick in den Betrieb, Bewerbung vom Handy und Kampagnen, die Gesellen erreichen, die gerade nicht suchen.", refs: "GM-Dachdecker" },
  { tag: "Bau, Abbruch & Tiefbau", title: "Menschen für harte Arbeit gewinnen", text: "Wer auf dem Bau arbeitet, liest keine Stellenbörse. Kurze Videos und Creatives mit echten Kollegen im Feed, Bewerbung mit einem Klick.", refs: "Oktay Cömertler" },
  { tag: "Transport & Logistik", title: "Fahrer und Disponenten finden", text: "Fahrer wechseln, wenn Bedingungen besser sind. Stellenanzeigen, die Touren, Fahrzeuge und Zeiten offen nennen, und Kampagnen im Umkreis.", refs: "M&A Transporte" },
  { tag: "Pflege & Dienstleistung", title: "Bewerber, die Planbarkeit suchen", text: "Dienstpläne, Team und Entwicklung sichtbar machen. Bewerbung ohne Anschreiben, mit Rückruf statt Formularschleife.", refs: "Typischer Einsatz" },
  { tag: "Gastronomie", title: "Schnell besetzen, ohne Portal", text: "Kurzfristiger Bedarf, hohe Fluktuation. Eine Seite, die immer aktuell ist, und Kampagnen, die in Tagen statt Wochen Bewerbungen bringen.", refs: "Typischer Einsatz" },
  { tag: "Büro & Verwaltung", title: "Die passenden statt die meisten", text: "Hier zählt Qualifikation. Stellenanzeigen mit klaren Anforderungen und eine Bewerbungsstrecke, die vorqualifiziert, ohne abzuschrecken.", refs: "Typischer Einsatz" },
];

const hurdles = [
  { problem: "Die Bewerbung geht nur per E-Mail mit Anschreiben.", answer: "Direkt-Upload auf der Karriereseite, ohne E-Mail-Programm. Anschreiben nur, wenn du es wirklich liest. Die meisten Betriebe brauchen es nicht." },
  { problem: "Die Karriereseite ist eine Liste von Stellentiteln.", answer: "Einblick statt Liste: Team, Arbeitsplatz, Alltag, ein Satz vom Chef. Erst dann die offenen Stellen mit Bedingungen, die man versteht." },
  { problem: "Die Anzeige verrät weder Gehalt noch Arbeitszeiten.", answer: "Wer Bedingungen verschweigt, bekommt Bewerbungen von Menschen, die danach fragen müssen. Offene Angaben filtern vor und bauen Vertrauen auf." },
  { problem: "Die Stelle steht nur auf Portalen, die die Zielgruppe nicht nutzt.", answer: "Handwerker, Fahrer und Köche suchen selten auf Jobbörsen. Sie sehen Instagram, Facebook und Google. Dort muss die Stelle hin." },
  { problem: "Das Formular funktioniert auf dem Handy nicht.", answer: "Die meisten Bewerbungen aus Kampagnen kommen vom Handy, oft abends. Formular, Upload und Bestätigung werden zuerst dort gebaut und getestet." },
  { problem: "Nach der Bewerbung passiert zwei Wochen nichts.", answer: "Sofortige Bestätigung, Antwort innerhalb weniger Tage, ein fester Ansprechpartner im Betrieb. Das vereinbaren wir mit dir, bevor die Kampagne startet." },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Analyse", text: "Welche Stellen, welche Zielgruppe, wo Kandidaten im aktuellen Bewerbungsweg abspringen." },
  { nr: "02", tag: "Phase 2", title: "Karriereseite", text: "Einblick in den Betrieb, Stellen mit klaren Bedingungen, Fotos und Videos von echten Kollegen." },
  { nr: "03", tag: "Phase 3", title: "Bewerbungsweg", text: "Kurzes Formular mit Direkt-Upload, mobil zuerst, Bestätigung sofort. Übergabe ins Postfach oder System." },
  { nr: "04", tag: "Phase 4", title: "Kampagne", text: "Motive mit echten Mitarbeitern, Zielgruppe im Umkreis, Anzeigen auf Meta und in der Google-Suche." },
  { nr: "05", tag: "Phase 5", title: "Auswertung", text: "Bewerbungen, Absprungpunkte und Qualität der Kandidaten im Blick. Nachschärfen, wo es hakt." },
];

const afterApply = [
  { title: "Bestätigung sofort", text: "Automatisch, mit Namen und dem nächsten Schritt. Der Bewerber weiß, dass die Unterlagen angekommen sind." },
  { title: "Antwort in wenigen Tagen", text: "Wir vereinbaren mit dir einen festen Zeitraum und einen Ansprechpartner im Betrieb. Gute Kandidaten warten nicht zwei Wochen." },
  { title: "Gespräch ohne Hürden", text: "Telefon oder kurzer Besuch im Betrieb statt dreistufigem Auswahlverfahren. Handwerk entscheidet im Gespräch, nicht im Assessment." },
  { title: "Faire Absage", text: "Wer nicht passt, bekommt eine Antwort. Das spricht sich herum, in beide Richtungen." },
];

const costParts = [
  { title: "Karriereseite", text: "Einmalig, als eigene Seite oder Teil der Website. Gehört dir und wird mit jeder neuen Stelle wiederverwendet." },
  { title: "Kampagnenbudget", text: "Geht direkt an Meta oder Google und bleibt in deinem Konto nachvollziehbar. Die sinnvolle Höhe hängt von Stelle und Region ab." },
  { title: "Betreuung", text: "Aufbau, Motive, Optimierung und Auswertung der Kampagne als Festbetrag, getrennt vom Werbebudget." },
  { title: "Kein Vermittlungshonorar", text: "Wir sind keine Personalvermittlung. Du zahlst für Seite und Kampagne, nicht pro eingestelltem Mitarbeiter." },
];

const faqs = [
  { q: "Reicht nicht eine Stellenanzeige bei Jobportalen?", a: "Jobportale können ergänzend sinnvoll sein, ersetzen aber keine eigene Karriereseite. Dort entscheidet sich, ob jemand nach dem Klick tatsächlich auf „Bewerben“ drückt. Und viele Zielgruppen im Handwerk, in der Logistik oder Gastronomie nutzen Portale kaum." },
  { q: "Können Bewerber ihre Unterlagen wirklich ohne E-Mail hochladen?", a: "Ja. Ein Upload-Formular nimmt Unterlagen direkt entgegen, auch vom Handy. Bewerber müssen kein E-Mail-Programm öffnen und kein Anschreiben formulieren. Das senkt die Abbruchquote spürbar." },
  { q: "Funktioniert das auch für schwer zu besetzende Stellen?", a: "Ein einfacherer Bewerbungsweg löst nicht jeden Fachkräftemangel. Er sorgt aber dafür, dass von den vorhandenen Kandidaten möglichst viele dich sehen und die Bewerbung zu Ende bringen. Oft ist das der Unterschied zwischen null und einigen Bewerbungen im Monat." },
  { q: "Müssen wir Gehalt und Arbeitszeiten nennen?", a: "Du musst nicht, du solltest. Offene Angaben bringen weniger, aber passendere Bewerbungen. Wenn du eine Spanne nennen kannst, reicht das." },
  { q: "Was kostet eine Recruiting-Kampagne?", a: "Die Mechanik ist dieselbe wie bei Kampagnen für Kunden: Werbebudget an die Plattform, Betreuung als Festbetrag. Dazu einmalig die Karriereseite, falls keine existiert. Den Umfang klären wir im Erstgespräch." },
  { q: "Wie schnell ist die Karriereseite fertig?", a: "Je nach Umfang meist innerhalb weniger Wochen. Der Zeitrahmen hängt vor allem davon ab, wie schnell Fotos, Stellenangaben und Freigaben von deiner Seite kommen. Fotos und Videos können wir vor Ort produzieren." },
  { q: "Bleibst du auch danach erreichbar?", a: "Ja. Per WhatsApp, Telefon oder E-Mail über einen festen Ansprechpartner. Eine neue Stelle einstellen oder eine Anzeige anpassen ist meist am selben Tag erledigt." },
];

const recruitingVoices = [verifiedProjectVoices["gm-dachdecker"], verifiedReviews[2], verifiedReviews[1]];
const spotlight = getFallstudie("gm-dachdecker");
const spotlightVoice = verifiedProjectVoices["gm-dachdecker"];

export default function RecruitingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="service-premium recruiting-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Leistungen", page: "Mitarbeitergewinnung" }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">MITARBEITERGEWINNUNG · KARRIERESEITE · RECRUITING-KAMPAGNEN</div>
              <h1>
                <span>Offene Stellen.</span>
                <span className="service-hero-accent">Echte Bewerbungen.</span>
                <span>Kein Umweg.</span>
              </h1>
              <p>
                Karriereseiten und Kampagnen, die Bewerbungen genauso ernst
                nehmen wie Kundenanfragen: Einblick in den Betrieb, Bewerbung
                in zwei Minuten vom Handy und Anzeigen, die Menschen erreichen,
                bevor sie aktiv suchen.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Recruiting-Projekt besprechen <ArrowIcon />
                </a>
                <Link className="btn-text" href="#huerden">
                  Sechs Hürden im Bewerbungsweg ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="Mitarbeitergewinnung auf einen Blick">
                <span>Bewerbung ohne E-Mail</span>
                <span>Echte Kollegen im Motiv</span>
                <span>Kein Vermittlungshonorar</span>
                <span>Ein Ansprechpartner</span>
              </div>
            </div>

            <div className="web-experience-board" aria-label="Beispiel einer Stellenanzeige mit Direkt-Upload">
              <div className="web-board-top">
                <span>PIXEL56 · KARRIERESEITE</span>
                <i>LIVE</i>
              </div>
              <JobMock title="Dachdecker (m/w/d)" />
              <div className="web-board-signals">
                <div><span>01</span><b>Einblick</b><small>echt</small></div>
                <div><span>02</span><b>Bedingungen</b><small>offen</small></div>
                <div><span>03</span><b>Upload</b><small>direkt</small></div>
                <div><span>04</span><b>Antwort</b><small>schnell</small></div>
              </div>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="Mitarbeitergewinnung auf einen Blick">
          <div><span>Zielgruppe</span><strong>Kandidaten, die nicht aktiv suchen</strong></div>
          <div><span>Auftritt</span><strong>Karriereseite mit echtem Einblick</strong></div>
          <div><span>Gewinnung</span><strong>Meta, Google-Suche, Unternehmensprofil</strong></div>
          <div><span>Bewerbung</span><strong>Mobil, zwei Minuten, Direkt-Upload</strong></div>
        </section>

        <section className="band dark-stage service-dark-stage" id="status">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">01 — Der Status quo</span>
              <h2 className="band-title">
                Sechs Zeichen, dass Stellen <em>unbesetzt bleiben</em>
              </h2>
              <p className="lead">
                Der Betrieb läuft, aber es fehlen Hände. Der Arbeitsmarkt ist
                eng, das stimmt. Aber in fast jedem Betrieb, mit dem wir
                sprechen, geht ein Teil der Bewerber nicht am Markt verloren,
                sondern im eigenen Bewerbungsweg.
              </p>
              <p className="lead">
                Die gute Nachricht: Genau diesen Teil kannst du beeinflussen.
              </p>
            </div>
            <div className="reveal">
              <StatusPanel head="Typische Gründe für ausbleibende Bewerbungen" rows={statusRows} />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="prinzip">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">02 — Warum es zählt</span>
              <h2 className="band-title">
                Bewerber sind auch <em>nur Kunden</em>
              </h2>
              <p className="lead">
                Wer um Kunden wirbt, gibt sich Mühe: gute Website, klare
                Leistungen, schnelle Antwort. Bei der Mitarbeitersuche fehlt
                diese Sorgfalt oft komplett. Dabei gelten dieselben Prinzipien,
                und die Konkurrenz um Fachkräfte ist härter als die um Kunden.
              </p>
              <p className="lead">
                Vier Dinge entscheiden, ob aus Interesse eine Bewerbung wird.
                Keines davon ist teuer, alle sind Arbeit.
              </p>
            </div>
            <div className="mini-grid reveal" aria-label="Vier Prinzipien der Mitarbeitergewinnung">
              {principles.map((item) => (
                <div key={item.title}>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="leistungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Was wir bauen</span>
              <h2 className="band-title">
                Sechs Bausteine, <em>ein einfacher Weg</em>
              </h2>
            </div>
            <p className="band-note">
              Karriereseite, Bewerbungsweg und Kampagne greifen ineinander. Du
              brauchst nicht alle sechs auf einmal, aber die Reihenfolge ist
              wichtig: erst die Seite, dann die Reichweite.
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

        <section className="band theme-light" id="branchen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Für wen das passt</span>
              <h2 className="band-title">
                Sechs Branchen, <em>dasselbe Problem</em>
              </h2>
            </div>
            <p className="band-note">
              Die Zielgruppen unterscheiden sich, der Mechanismus nicht: sichtbar
              sein, Einblick geben, Hürden abbauen, schnell antworten.
            </p>
          </div>
          <div className="audience-grid reveal">
            {audiences.map((audience) => (
              <article className="audience-card" key={audience.tag}>
                <span>{audience.tag}</span>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
                <small>{audience.refs === "Typischer Einsatz" ? audience.refs : `Referenz: ${audience.refs}`}</small>
              </article>
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
                      <h3>Der Weg zur Bewerbung steht nicht mehr im Weg</h3>
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

        <section className="band theme-light" id="huerden">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">06 — Typische Hürden</span>
              <h2 className="band-title">
                Sechs Stellen, <em>an denen Bewerber abspringen</em>
              </h2>
            </div>
            <p className="band-note">
              Und was wir jeweils dagegen tun. Die meisten Betriebe erkennen
              sich in mindestens dreien wieder.
            </p>
          </div>
          <div className="friction-list reveal">
            {hurdles.map((item, index) => (
              <div className="friction-row" key={item.problem}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>„{item.problem}“</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="kampagnen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">07 — Kampagnen für Bewerber</span>
              <h2 className="band-title">
                Menschen erreichen, <em>die gerade nicht suchen</em>
              </h2>
            </div>
            <p className="band-note">
              Die besten Fachkräfte haben einen Job. Sie wechseln, wenn sie
              ein besseres Angebot sehen. Im Feed, mit echten Kollegen im Bild,
              nicht auf einer Jobbörse.
            </p>
          </div>
          <div className="work-gallery work-gallery-social reveal">
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bilder/ads-recruiting-kampagne.webp" alt="Recruiting-Anzeige für einen Abbruchbetrieb: Bewirb dich jetzt als Abbruchhelfer" loading="lazy" decoding="async" />
              <figcaption><b>Recruiting-Kampagne</b><span>Abbruch &amp; Tiefbau · Feed</span></figcaption>
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bilder/ads-fb-beispiele.webp" alt="Variante derselben Recruiting-Anzeige für die Stelle Baggerfahrer" loading="lazy" decoding="async" />
              <figcaption><b>Stellenvariante</b><span>Ein Motiv, mehrere Stellen</span></figcaption>
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bilder/ads-meta-beispiel.webp" alt="Beispielansicht von Recruiting-Anzeigen im Instagram-Feed und in der Story" loading="lazy" decoding="async" />
              <figcaption><b>Anzeigenformate</b><span>Feed · Story · Reels</span></figcaption>
            </figure>
          </div>
          <div className="section-link-row reveal">
            <Link className="body-link" href={serviceRoutes["meta-ads"]}>
              Wie Meta-Kampagnen bei uns laufen <ArrowIcon />
            </Link>
          </div>
        </section>

        <section className="band theme-light" id="prozess">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">08 — Der Weg dahin</span>
              <h2 className="band-title">
                Fünf Phasen, <em>ein einfacherer Weg</em>
              </h2>
            </div>
            <p className="band-note">
              Erst die Seite, dann die Reichweite. Wer Kampagnen auf eine
              schlechte Karriereseite schickt, zahlt doppelt.
            </p>
          </div>
          <Stepper steps={steps} />
        </section>

        <section className="band theme-light" id="danach">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">09 — Nach der Bewerbung</span>
              <h2 className="band-title">
                Was wir <em>mit dir vereinbaren</em>
              </h2>
              <p className="lead">
                Die beste Karriereseite nützt nichts, wenn Bewerbungen zwei
                Wochen im Postfach liegen. Deshalb klären wir vor dem Start,
                was im Betrieb nach einer Bewerbung passiert, und bauen die
                Technik so, dass es leicht einzuhalten ist.
              </p>
              <p className="lead">
                Das ist der Teil, den keine Agentur für dich übernehmen kann.
                Aber wir machen ihn so einfach wie möglich.
              </p>
            </div>
            <div className="mini-grid reveal" aria-label="Ablauf nach der Bewerbung">
              {afterApply.map((item) => (
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
              <span className="band-tag">10 — Kosten</span>
              <h2 className="band-title">
                Woraus sich die Kosten <em>zusammensetzen</em>
              </h2>
              <p className="lead">
                Vier Posten, klar getrennt. Keine Vermittlungsgebühr pro
                Einstellung, kein Prozent vom Gehalt. Du zahlst für Seite und
                Kampagne, beides gehört danach dir.
              </p>
              <p className="lead">
                Konkrete Zahlen nennen wir im Erstgespräch, weil sie von Stelle,
                Region und vorhandener Website abhängen.
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

        <section className="band dark-stage service-dark-stage" id="zusammenarbeit">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">11 — Zusammenarbeit</span>
              <h2 className="band-title">
                Deine Stellen. <em>Ein Ansprechpartner.</em>
              </h2>
              <p className="lead">
                Kein Callcenter, keine Rückrufbitte. Neue Stelle einstellen,
                Anzeige anpassen oder Bewerberfluss besprechen: direkt per
                WhatsApp mit dem, der Seite und Kampagne selbst betreut.
              </p>
              <ul className="lines">
                <li>Neue Stellen sind meist am selben Tag online.</li>
                <li>Kampagnenmotive mit deinem Team, nicht mit Models.</li>
                <li>Auswertung: Bewerbungen, Absprünge, Qualität, in klarer Sprache.</li>
              </ul>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 — Dein Ansprechpartner"
                messages={[
                  { from: "in", text: "Können wir die Stellenanzeige noch anpassen? Wir suchen jetzt auch einen Azubi." },
                  { from: "out", text: "Klar, schick mir die Eckdaten. Ist heute noch online, Kampagnenmotiv passe ich mit an." },
                  { from: "in", text: "Super, danke dir!" },
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
          <Reviews reviews={recruitingVoices} items={recruitingVoices} />
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
          <CloseCta ctaLabel="Recruiting-Projekt besprechen">
            Lass uns über deine <em>Mitarbeitergewinnung</em> sprechen.
          </CloseCta>

          <ContactStrip />

          <SiteFooter />
        </div>
      </main>
    </>
  );
}
