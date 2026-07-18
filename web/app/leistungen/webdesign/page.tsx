import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowIcon,
  PulseField,
  ClientMarquee,
  StatusPanel,
  MetricMock,
  WaMock,
  CloseCta,
  FaqList,
  Reviews,
  RefCard,
  Stepper,
  type RefItem,
} from "@/components/ui";
import { CompareMock, Funnel2 } from "@/components/mocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Webdesign für KMUs & Handwerker",
  description:
    "Individuelles Webdesign statt Baukasten: Websites, die Besucher zur Anfrage führen. Für KMUs, Handwerker & Selbstständige in Koblenz und deutschlandweit. Jetzt Erstgespräch buchen.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Webdesign & Onlinepräsenz",
  serviceType: "Webdesign",
  provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
  areaServed: "DE",
  url: `${site.url}/leistungen/webdesign`,
};

const statusRows = [
  { label: "Unsichtbar bei Google", tag: "Struktur" },
  { label: "Noch keine Website", tag: "Präsenz" },
  { label: "Wirkt veraltet", tag: "Design" },
  { label: "Bricht auf dem Handy", tag: "Mobil" },
  { label: "Besucher ohne Anfrage", tag: "Formular" },
  { label: "Änderungen dauern Tage", tag: "Betreuung" },
  { label: "Keine Auswertung", tag: "Zahlen" },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Analyse", text: "Seite, Wettbewerb, Zielgruppe — bevor irgendetwas entworfen wird." },
  { nr: "02", tag: "Phase 2", title: "Struktur & Text", text: "Texte, die zur Anfrage führen, kein Textbaustein von der Stange." },
  { nr: "03", tag: "Phase 3", title: "Design", text: "Passt zur Marke, baut Vertrauen auf — nicht nur „hübsch“." },
  { nr: "04", tag: "Phase 4", title: "Technik & SEO", text: "Ladezeit, mobile Darstellung, SEO von Anfang an mitgedacht." },
  { nr: "05", tag: "Phase 5", title: "Launch & Betreuung", text: "Nach dem Launch bleiben wir dran, nicht nur bis zur Rechnung." },
];

const referenzen: RefItem[] = [
  { variant: "ic-4", barWidth: 55, href: "/projekte/gm-dachdecker", cat: "GM-Dachdecker Meisterbetrieb", title: "Handwerkskunst digital erlebbar gemacht", text: "Neue Website inklusive Karriereportal — Bewerber laden Unterlagen direkt hoch, ohne E-Mail.", tag: "Webdesign · Karriereportal · 2023" },
  { variant: "ic-3", barWidth: 60, img: "/bilder/projekt-stark-ins-neue-2.webp", href: "/projekte/stark-ins-neue", cat: "Stark ins Neue gGmbH", title: "Vertrauen für eine Bildungsinitiative", text: "Kompletter Relaunch für eine gemeinnützige Organisation — SEO-optimiert, DSGVO-konform.", tag: "Webdesign · SEO · 2025" },
  { variant: "ic-1", barWidth: 48, href: "/projekte/oktay-coemertler", cat: "Oktay Cömertler", title: "Full-Service für Abbruch, Tief- & Kanalbau", text: "Maßgeschneidertes Branding und Webdesign aus umfassender Markt- und Unternehmensanalyse.", tag: "Branding · Webdesign · seit 2022" },
  { variant: "ic-2", barWidth: 70, img: "/bilder/projekt-ma-transporte.webp", href: "/projekte/ma-transporte", cat: "MA-Transporte", title: "Dienstleistungsqualität digital sichtbar gemacht", text: "Neue, repräsentative Website plus laufende Social-Media-Betreuung.", tag: "Webdesign · Social Media · seit 2019" },
];

const faqs = [
  { q: "Wie lange dauert die Erstellung einer Website?", a: "Liegen Logo, Bildmaterial und eine klare Richtung schon vor, kann es innerhalb einer Woche fertig sein. Ohne diese Vorbereitung dauert die Abstimmung entsprechend länger." },
  { q: "Was kostet eine professionelle Website?", a: "Das hängt vollständig vom Umfang ab — eine fokussierte Landingpage braucht weniger als ein mehrseitiger Auftritt mit Funktionen. Im kostenlosen Erstgespräch bekommst du eine ehrliche Einschätzung für deinen Fall." },
  { q: "Brauche ich eine ganze Website oder reicht eine Landingpage?", a: "Für eine einzelne Werbekampagne reicht oft eine fokussierte Landingpage. Für den dauerhaften Auftritt mit mehreren Leistungen empfiehlt sich eine vollständige Website — wir ordnen das gemeinsam ein." },
  { q: "Kann ich Inhalte später selbst ändern?", a: "Ja, du bekommst Zugriff auf ein einfaches Redaktionssystem. Wenn du lieber nichts anfassen willst, übernehmen wir das genauso." },
  { q: "Wird die Website auch bei Google gefunden?", a: "Technisches SEO ist von Anfang an Teil des Aufbaus — Struktur, Ladezeit und Inhalte werden so angelegt, dass Google die Seite versteht und einordnen kann." },
  { q: "Bleibst du auch nach dem Launch erreichbar?", a: "Ja — per WhatsApp über einen festen Ansprechpartner, siehe oben. Betreuung ist Teil der Zusammenarbeit, kein Zusatzverkauf danach." },
];

const reviews = [
  { text: "Maßgeschneidert, professionell, auf den Punkt — genau das haben wir gebraucht.", who: "Oktay Cömertler", img: "/bilder/person-oktay-coemertler.webp" },
  { text: "Die neue Website hat sich in wenigen Wochen ausgezahlt. Klare Empfehlung.", who: "Stark ins Neue gGmbH" },
  { text: "Schnell, zuverlässig, und auch nach dem Launch immer erreichbar.", who: "Colak GmbH", img: "/bilder/person-nalan-colak.webp" },
];

export default function WebdesignPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="sheet">
        <SiteNav crumb={{ section: "Leistungen", page: "Webdesign" }} />

        <header className="hero">
          <PulseField label1="// STATUS: LIVE" label2="// LADEZEIT <1.0S" />
          <div className="hero-eyebrow">LEISTUNG · WEBDESIGN</div>
          <h1>
            <span className="in"><span>Eine Website,</span></span>
            <span className="in"><span>die verkauft.</span></span>
            <span className="in"><span>Nicht nur aussieht.</span></span>
          </h1>
          <p className="hero-sub">
            Website, Landingpage oder digitale Visitenkarte — individuell gebaut
            statt Baukasten von der Stange, damit Besucher tatsächlich zur
            Anfrage finden.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="https://calendly.com/pixel56/15min" target="_blank" rel="noopener">
              Kostenloses Erstgespräch <ArrowIcon />
            </a>
            <Link className="btn-text" href="#status">
              Kennst du das? ↓
            </Link>
          </div>
          <div className="hero-foot">
            <span className="hf-label">Wir bauen:</span>
            <div className="hf-chip">Website</div>
            <div className="hf-chip">Landingpage</div>
            <div className="hf-chip">Funnel</div>
          </div>
        </header>
      </div>

      <ClientMarquee />

      <div className="sheet">
        <section className="band tint-amber" id="status">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">01 — Der Status quo</span>
              <h2 className="band-title">
                Sieben Zeichen, dass die Website <em>gegen dich arbeitet</em>
              </h2>
              <p className="lead">
                Egal ob deine Seite seit Jahren unangetastet ist oder es noch gar
                keine gibt — beides kostet dich heute Kunden, jeden einzelnen Tag.
              </p>
            </div>
            <div className="reveal">
              <StatusPanel head="7 von 7 Warnsignalen aktiv" rows={statusRows} />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">02 — Warum es zählt</span>
              <h2 className="band-title">
                Die Website ist die neue <em>Visitenkarte</em>
              </h2>
              <p className="lead">
                Bevor jemand anruft oder eine Anfrage schreibt, wird recherchiert
                — fast immer online. Was Interessenten dort finden, entscheidet
                oft schon, bevor das erste Gespräch überhaupt stattfindet.
              </p>
              <ul className="lines">
                <li>Wer nicht online zu finden ist, existiert für viele Interessenten nicht.</li>
                <li>Vertrauen entsteht vor dem ersten Wort, nicht danach.</li>
                <li>Sichtbarkeit ist kein Zustand, sondern ein Prozess — sie hält nicht von allein.</li>
              </ul>
            </div>
            <div className="reveal">
              <CompareMock
                rows={[
                  { variant: "ic-mute", barWidth: 40, noBtn: true, label: "Vorher — veraltet" },
                  { variant: "ic-1", barWidth: 65, label: "Nachher — baut Vertrauen auf" },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Landingpages &amp; Funnels</span>
              <h2 className="band-title">
                Gebaut für <em>Kampagnen</em>, nicht nur zum Zeigen
              </h2>
            </div>
            <p className="band-note">
              Wer Werbebudget in Google oder Meta Ads steckt und Besucher auf die
              normale Startseite schickt, verbrennt einen Teil davon. Eine
              Landingpage hat genau ein Ziel.
            </p>
          </div>
          <Funnel2
            nodes={[
              { tag: "Anzeige", label: "Google & Meta Ads" },
              { tag: "Landingpage", label: "Ein Angebot, ein Ziel", hot: true },
              { tag: "Ergebnis", label: "Anfrage oder Anruf" },
            ]}
          />
        </section>

        <section className="band tint" id="beweis">
          <div className="band-tag reveal" style={{ marginBottom: 44 }}>
            04 — Der Beweis
          </div>
          <div className="stat-block reveal">
            <div className="stat-num" data-label="WACHSTUM">
              +56<small>%</small>
            </div>
            <div className="stat-copy">
              <p className="quote">
                „Wir haben nicht mehr Budget verbrannt. Wir haben konstant
                gearbeitet — und das hat gereicht.“
              </p>
              <p>
                Van den Berg Gruppe, laufende Betreuung. Reale Kampagnendaten,
                kein Schätzwert — Wachstum, das entstand, weil niemand das Budget
                wöchentlich neu erfunden hat.
              </p>
              <cite>{"// VAN DEN BERG GRUPPE"}</cite>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">05 — Warum wir</span>
              <h2 className="band-title">
                Nicht die günstigste Agentur. <em>Die dranbleibt.</em>
              </h2>
              <p className="lead">
                Vier Gründe, warum Unternehmen bei uns bleiben, statt nach einem
                Jahr weiterzuziehen.
              </p>
              <ul className="lines">
                <li>Lokal verwurzelt — Bendorf bei Koblenz, kurze Wege, kein Callcenter.</li>
                <li>Ein fester Ansprechpartner, keine wechselnden Projektmanager.</li>
                <li>Ergebnisse mit echten Zahlen belegt, nicht mit Bauchgefühl.</li>
                <li>Bleibt nach dem Launch — Betreuung, kein Zusatzverkauf danach.</li>
              </ul>
            </div>
            <div className="reveal">
              <MetricMock
                head="Live-Auswertung · Van den Berg Gruppe"
                rows={[
                  { label: "Anfragen / Monat", value: "34", countTo: "34" },
                  { label: "Klickrate", value: "6.8%", countTo: "6.8", suffix: "%" },
                  { label: "Ladezeit", value: "0.8s" },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">06 — Der Weg dahin</span>
              <h2 className="band-title">
                Fünf Phasen, <em>ein klares Ergebnis</em>
              </h2>
            </div>
          </div>
          <Stepper steps={steps} />
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">07 — Referenzen</span>
              <h2 className="band-title">
                Vier Beispiele <em>aus der echten Arbeit</em>
              </h2>
            </div>
            <p className="band-note">
              Reale Projekte, reale Ergebnisse — Bildmaterial folgt im echten
              Aufbau.
            </p>
          </div>
          <div className="ref-grid-2 reveal">
            {referenzen.map((r) => (
              <RefCard item={r} key={r.cat} />
            ))}
          </div>
        </section>

        <section className="band tint-violet">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">08 — Zusammenarbeit</span>
              <h2 className="band-title">
                Ein Ansprechpartner. <em>Ein Kanal.</em>
              </h2>
              <p className="lead">
                Kein Ticket-System, kein Callcenter, keine Rückrufbitte. Während des Projekts erreichst du einen festen Ansprechpartner direkt per WhatsApp — für schnelle Fragen genauso wie für große Entscheidungen.
              </p>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 — Dein Ansprechpartner"
                messages={[
                  { from: "in", text: "Kurze Frage: Können wir das Bild auf der Startseite noch tauschen?" },
                  { from: "out", text: "Klar, schick's mir rüber — ist heute noch online." },
                  { from: "in", text: "👍 Danke, schnell wie immer." },
                ]}
                footer="Antwortzeit während der Zusammenarbeit: meist unter 1 Stunde"
              />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">09 — Bewertungen</span>
              <h2 className="band-title">
                Das sagen <em>Kunden über uns</em>
              </h2>
            </div>
          </div>
          <Reviews reviews={reviews} />
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">10 — Häufige Fragen</span>
              <h2 className="band-title">
                Was du vorher <em>wissen willst</em>
              </h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>

        <CloseCta>
          Lass uns über deine Website <em>sprechen.</em>
        </CloseCta>

        <SiteFooter />
      </div>
    </>
  );
}
