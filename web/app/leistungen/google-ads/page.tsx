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
import { SearchMock } from "@/components/mocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Google Ads",
  description:
    "Sichtbar im Moment der Suchabsicht — Google-Ads-Kampagnen mit sauberem Tracking und Struktur statt Bauchgefühl. Aus Bendorf bei Koblenz.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads",
  serviceType: "Suchmaschinenwerbung",
  provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
  areaServed: "DE",
  url: `${site.url}/leistungen/google-ads`,
};

const statusRows = [
  { label: "Budget läuft, niemand weiß warum", tag: "Tracking" },
  { label: "Breite Keywords, teure Klicks", tag: "Struktur" },
  { label: "Anzeige führt ins Leere", tag: "Landingpage" },
  { label: "Kein Tracking, keine Klarheit", tag: "Conversion" },
  { label: "Einmal eingerichtet, nie angefasst", tag: "Pflege" },
  { label: "Schlechte Erfahrung, abgeschrieben", tag: "Setup" },
];

const faktoren = [
  { fl: "Faktor 1", title: "Anzeigenrelevanz", text: "Wie gut Anzeigentext und Suchbegriff tatsächlich zusammenpassen." },
  { fl: "Faktor 2", title: "Landingpage-Erfahrung", text: "Ob die Zielseite hält, was die Anzeige verspricht — thematisch und technisch." },
  { fl: "Faktor 3", title: "Erwartete Klickrate", text: "Wie wahrscheinlich es ist, dass genau diese Zielgruppe klickt." },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Analyse & Keywords", text: "Wonach eure Zielgruppe sucht, bevor ein Euro Budget fließt." },
  { nr: "02", tag: "Phase 2", title: "Tracking-Fundament", text: "Sauberes Conversion-Tracking zuerst — sonst bleibt alles Rätselraten." },
  { nr: "03", tag: "Phase 3", title: "Kampagnen-Aufbau", text: "Anzeigengruppen und Keywords, abgestimmt auf euer Angebot." },
  { nr: "04", tag: "Phase 4", title: "Laufende Optimierung", text: "Anpassung anhand echter Daten, nicht anhand von Vermutungen." },
  { nr: "05", tag: "Phase 5", title: "Reporting & Kurs", text: "Transparente Auswertung, was das Budget tatsächlich bringt." },
];

const referenzen: RefItem[] = [
  { variant: "ic-4", barWidth: 55, href: "/projekte/gm-dachdecker", cat: "GM-Dachdecker Meisterbetrieb", title: "Digitale Sichtbarkeit als Gesamtpaket", text: "Neue Website und laufende Kampagnenarbeit Hand in Hand — Tracking und Landingpage stimmen von Anfang an aufeinander ab.", tag: "Website · Kampagnenbetreuung" },
  { variant: "ic-2", barWidth: 65, cat: "Unser eigener Anspruch", title: "Tracking ist nie ein Nachgedanke", text: "Jede Kampagne bekommt sauberes Conversion-Tracking, bevor sie live geht — keine Ausnahme, kein optionales Extra für später.", tag: "Grundprinzip · alle Projekte" },
];

const faqs = [
  { q: "Wie viel Budget brauche ich für den Einstieg?", a: "Das hängt stark von Branche, Suchvolumen und Wettbewerb ab. Wichtiger als die Höhe ist eine saubere Struktur — ohne die verpufft auch ein großes Budget." },
  { q: "Was kostet ein Klick bei Google Ads?", a: "Das variiert stark je nach Branche und Wettbewerb — von wenigen Cent bis zu mehreren Euro pro Klick. Wir schätzen das für euren Bereich im Erstgespräch ein." },
  { q: "Brauche ich eine spezielle Landingpage für die Anzeigen?", a: "Empfehlenswert ist es fast immer. Eine fokussierte Landingpage, die zum Anzeigenversprechen passt, verbessert Conversion und Qualitätsfaktor." },
  { q: "Wie schnell sehe ich erste Ergebnisse?", a: "Erste Daten meist innerhalb weniger Tage, belastbare Aussagen nach zwei bis vier Wochen laufender Optimierung." },
  { q: "Was kostet die Betreuung, getrennt vom Werbebudget?", a: "Werbebudget geht direkt an Google, die Betreuung deckt Strategie, Aufbau und laufende Optimierung ab. Den passenden Umfang klären wir im kostenlosen Erstgespräch." },
  { q: "Bleibst du auch danach erreichbar?", a: "Ja — per WhatsApp über einen festen Ansprechpartner, siehe oben. Betreuung ist Teil der Zusammenarbeit, kein Zusatzverkauf danach." },
];

const reviews = [
  { text: "Endlich sehen wir genau, was das Budget bringt. Vorher war das reines Rätselraten.", who: "GM-Dachdecker" },
  { text: "Mehr Anfragen bei gleichem Budget — das Tracking macht den Unterschied.", who: "MA-Transporte" },
  { text: "Konstante Betreuung statt einmal aufgesetzt und liegen gelassen.", who: "Van den Berg Gruppe" },
];

export default function GoogleAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="sheet">
        <SiteNav crumb={{ section: "Leistungen", page: "Google Ads" }} />

        <header className="hero">
          <PulseField label1="// KAMPAGNE AKTIV" label2="// TRACKING LÜCKENLOS" />
          <div className="hero-eyebrow">LEISTUNG · GOOGLE ADS</div>
          <h1>
            <span className="in"><span>Sichtbar,</span></span>
            <span className="in"><span>wenn gesucht wird.</span></span>
            <span className="in"><span>Nicht erst danach.</span></span>
          </h1>
          <p className="hero-sub">
            Jemand tippt gerade eure Leistung in Google ein — bereit, zu handeln.
            Wir sorgen dafür, dass ihr dort steht, mit Tracking und Struktur
            statt Bauchgefühl.
          </p>
          <div className="hero-actions">
            <Link className="btn-primary" href="/kontakt">
              Kostenloses Erstgespräch <ArrowIcon />
            </Link>
            <Link className="btn-text" href="#status">
              Kennst du das? ↓
            </Link>
          </div>
          <div className="hero-foot">
            <span className="hf-label">Wir steuern:</span>
            <div className="hf-chip">Keywords</div>
            <div className="hf-chip">Tracking</div>
            <div className="hf-chip">Budget</div>
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
                Sechs Zeichen, dass Budget <em>verpufft statt wirkt</em>
              </h2>
              <p className="lead">
                Eine Kampagne laufen zu lassen ist einfach. Eine Kampagne laufen
                zu lassen, die tatsächlich Anfragen bringt, ist etwas anderes.
              </p>
            </div>
            <div className="reveal">
              <StatusPanel head="6 von 6 Warnsignalen aktiv" rows={statusRows} />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">02 — Warum es zählt</span>
              <h2 className="band-title">
                Der einzige Kanal, der <em>Absicht abholt</em>
              </h2>
              <p className="lead">
                Bei den meisten Werbeformen weckt ihr Interesse, das erst noch
                entstehen muss. Bei Google Ads ist die Absicht bereits da —
                jemand tippt aktiv eure Leistung in die Suche ein.
              </p>
              <ul className="lines">
                <li>Ohne Ads seid ihr unsichtbar im entscheidenden Moment.</li>
                <li>Ohne Struktur zahlt ihr drauf für Klicks ohne Anfrage.</li>
                <li>Mit sauberem Tracking lässt sich jeder Euro einem Ergebnis zuordnen.</li>
              </ul>
            </div>
            <div className="reveal">
              <SearchMock
                query="dachdecker koblenz"
                youTag="Anzeige"
                others={["Mitbewerber A · Organisch", "Mitbewerber B · Organisch"]}
              />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Was den Unterschied macht</span>
              <h2 className="band-title">
                Mehr Budget ist <em>nicht die einzige Stellschraube</em>
              </h2>
            </div>
            <p className="band-note">
              Google belohnt Anzeigen, die für die suchende Person relevant sind,
              mit niedrigeren Klickpreisen — nicht nur den höchsten Bieter.
            </p>
          </div>
          <div className="fact-grid reveal">
            {faktoren.map((f) => (
              <div className="fact-cell" key={f.fl}>
                <span className="fl">{f.fl}</span>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
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
                Van den Berg Gruppe, laufende Kampagnenbetreuung. Reale
                Kampagnendaten, kein Schätzwert — Wachstum, das entstand, weil
                niemand das Budget wöchentlich neu erfunden hat.
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
                Tracking zuerst. <em>Nicht als Nachgedanke.</em>
              </h2>
              <p className="lead">
                Vier Gründe, warum unsere Kampagnen nachvollziehbar wirken statt
                nur zu laufen.
              </p>
              <ul className="lines">
                <li>Sauberes Conversion-Tracking, bevor eine Kampagne live geht.</li>
                <li>Struktur statt generischer Vorlagen — abgestimmt auf euer Angebot.</li>
                <li>Ergebnisse mit echten Zahlen belegt, nicht mit Bauchgefühl.</li>
                <li>Laufende Optimierung — Budget wandert dahin, wo es wirkt.</li>
              </ul>
            </div>
            <div className="reveal">
              <MetricMock
                head="Live-Auswertung · Van den Berg Gruppe"
                rows={[
                  { label: "Anfragen / Monat", value: "34", countTo: "34" },
                  { label: "Klickrate", value: "6.8%", countTo: "6.8", suffix: "%" },
                  { label: "Ladezeit Landingpage", value: "0.8s" },
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
                Fünf Phasen, <em>laufend optimiert</em>
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
                Aus der <em>echten Arbeit</em>
              </h2>
            </div>
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
                Kein Ticket-System, kein Callcenter, keine Rückrufbitte. Während
                der Zusammenarbeit erreichst du einen festen Ansprechpartner
                direkt per WhatsApp.
              </p>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 — Ihr Ansprechpartner"
                messages={[
                  { from: "in", text: "Wie sieht der Klickpreis diese Woche aus?" },
                  { from: "out", text: "Runter auf 1,20 €, Anfragen hoch auf 12 diese Woche." },
                  { from: "in", text: "👍 Perfekt, weiter so." },
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
          Lass uns über eure <em>Google-Ads-Kampagne</em> sprechen.
        </CloseCta>

        <SiteFooter />
      </div>
    </>
  );
}
