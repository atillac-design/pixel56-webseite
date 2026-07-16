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
import { Funnel2 } from "@/components/mocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Landingpages & Funnels",
  description:
    "Landingpages und Funnels, die von der Anzeige bis zur Anfrage gezielt führen — ein Ziel, keine Ablenkung. Aus Bendorf bei Koblenz.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Landingpages & Funnels",
  serviceType: "Landingpage- und Funnel-Entwicklung",
  provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
  areaServed: "DE",
  url: `${site.url}/leistungen/landingpages-funnels`,
};

const statusRows = [
  { label: "Traffic landet auf der Startseite", tag: "Ziel" },
  { label: "Zu viele Wege, zu viele Ablenkungen", tag: "Fokus" },
  { label: "Formular mit zehn Feldern", tag: "Reibung" },
  { label: "Kein Follow-up nach dem Opt-in", tag: "Tempo" },
  { label: "Eine Seite für jede Zielgruppe", tag: "Passung" },
  { label: "Keine Ahnung, wo Besucher abspringen", tag: "Auswertung" },
];

const funnelArten = [
  { fl: "Lead-Funnel", title: "Kontakt statt Verkauf", text: "Für Angebote, die vor dem Kauf ein Gespräch brauchen — Kontakt gegen ein klares Versprechen." },
  { fl: "Terminbuchungs-Funnel", title: "Direkt in den Kalender", text: "Vom Klick direkt zur Terminauswahl — ideal für Erstgespräche oder Beratungen." },
  { fl: "Verkaufs-Funnel", title: "Vom Interesse zum Abschluss", text: "Für digitale Produkte oder klar bepreiste Angebote ohne Zwischengespräch." },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Ziel & Angebot", text: "Was am Ende passieren soll — davon hängt die Struktur ab." },
  { nr: "02", tag: "Phase 2", title: "Struktur & Text", text: "Ein Argument-Aufbau, ein Call-to-Action, kein Wettbewerb." },
  { nr: "03", tag: "Phase 3", title: "Design & Formular", text: "So wenig Reibung wie möglich, klare Führung." },
  { nr: "04", tag: "Phase 4", title: "Tracking & Anbindung", text: "Jeder Schritt messbar, Leads landen automatisch richtig." },
  { nr: "05", tag: "Phase 5", title: "Auswertung", text: "Wo Interessenten abspringen — und genau das anpassen." },
];

const referenzen: RefItem[] = [
  { variant: "ic-3", barWidth: 55, cat: "Stark ins Neue gGmbH", title: "Klare Nutzerführung zur Kursanmeldung", text: "Fokussierte Anmeldestrecke für eine Bildungsinitiative — DSGVO-konform, ohne unnötige Zwischenschritte.", tag: "Landingpage · Anmeldefunnel · 2025" },
  { variant: "ic-4", barWidth: 65, cat: "Van den Berg Gruppe", title: "Anzeige direkt auf ein Angebot geführt", text: "Facebook-Ads-Kampagnen mit passender Zielseite statt allgemeiner Startseite — Teil eines 56 % Wachstums.", tag: "Meta Ads · Landingpage" },
];

const faqs = [
  { q: "Was ist der Unterschied zu einer normalen Website-Seite?", a: "Eine normale Seite bietet meist mehrere Wege an. Eine Landingpage verzichtet bewusst darauf und führt zu genau einem Ziel, ohne Ablenkung." },
  { q: "Brauche ich dafür schon eine Werbekampagne?", a: "Nein. Eine Landingpage funktioniert auch für organischen Traffic, E-Mail-Verteiler oder Social-Media-Bio-Links." },
  { q: "Wie kurz sollte das Formular wirklich sein?", a: "So kurz wie möglich für das jeweilige Ziel — oft reichen Name, Kontakt und eine qualifizierende Frage. Jedes Feld senkt die Abschlussquote." },
  { q: "Kann ich mehrere Funnels gleichzeitig haben?", a: "Ja, das ist sogar sinnvoll bei unterschiedlichen Angeboten oder Zielgruppen. Jeder Funnel bleibt dabei auf ein Ziel fokussiert." },
  { q: "Was kostet ein Funnel?", a: "Eine einzelne Landingpage braucht weniger Aufwand als ein mehrstufiger Funnel mit Terminbuchung und Follow-up. Den Umfang klären wir im kostenlosen Erstgespräch." },
  { q: "Bleibst du auch danach erreichbar?", a: "Ja — per WhatsApp über einen festen Ansprechpartner, siehe oben. Betreuung ist Teil der Zusammenarbeit, kein Zusatzverkauf danach." },
];

const reviews = [
  { text: "Die Anmeldestrecke ist so viel klarer geworden. Deutlich mehr abgeschlossene Anmeldungen.", who: "Stark ins Neue gGmbH" },
  { text: "Endlich landet die Anzeige nicht mehr auf der Startseite. Der Unterschied ist sofort spürbar.", who: "Van den Berg Gruppe" },
  { text: "Kurzes Formular, klare Führung — genau das, was wir gebraucht haben.", who: "Oktay Cömertler" },
];

export default function FunnelsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="sheet">
        <SiteNav crumb={{ section: "Leistungen", page: "Landingpages & Funnels" }} />

        <header className="hero">
          <PulseField label1="// FUNNEL AKTIV" label2="// EIN ZIEL, KEINE ABLENKUNG" />
          <div className="hero-eyebrow">LEISTUNG · LANDINGPAGES &amp; FUNNELS</div>
          <h1>
            <span className="in"><span>Ein Klick.</span></span>
            <span className="in"><span>Ein Ziel.</span></span>
            <span className="in"><span>Keine Ablenkung.</span></span>
          </h1>
          <p className="hero-sub">
            Eine gute Anzeige verliert die Hälfte ihrer Wirkung, wenn der Klick
            auf einer Seite ohne klares Ziel landet. Ein Funnel führt jede
            Station bewusst — von der ersten Berührung bis zur ausgefüllten
            Anfrage.
          </p>
          <div className="hero-actions">
            <Link className="btn-primary" href="#kontakt">
              Kostenloses Erstgespräch <ArrowIcon />
            </Link>
            <Link className="btn-text" href="#status">
              Kennst du das? ↓
            </Link>
          </div>
          <div className="hero-foot">
            <span className="hf-label">Wir bauen:</span>
            <div className="hf-chip">Landingpage</div>
            <div className="hf-chip">Formular</div>
            <div className="hf-chip">Tracking</div>
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
                Sechs Gründe, warum <em>Traffic verpufft</em>
              </h2>
              <p className="lead">
                Besucher sind da, aber die Anfrage bleibt aus. Fast immer liegt
                es nicht an zu wenig Traffic, sondern an dem, was mit ihm
                passiert, sobald er ankommt.
              </p>
            </div>
            <div className="reveal">
              <StatusPanel head="6 von 6 Warnsignalen aktiv" rows={statusRows} />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Warum ein Funnel</span>
              <h2 className="band-title">
                Eine Seite, <em>ein einziges Ziel</em>
              </h2>
            </div>
            <p className="band-note">
              Eine normale Website muss vielen Besuchern viele Wege anbieten.
              Eine Landingpage darf genau das Gegenteil tun — und wird dadurch
              spürbar wirksamer.
            </p>
          </div>
          <Funnel2
            nodes={[
              { tag: "Anzeige", label: "Google / Meta / Post" },
              { tag: "Landingpage", label: "Ein Angebot, ein Ziel", hot: true },
              { tag: "Ergebnis", label: "Lead oder Termin" },
            ]}
          />
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Arten von Funnels</span>
              <h2 className="band-title">
                Nicht jeder Funnel <em>hat dasselbe Ziel</em>
              </h2>
            </div>
            <p className="band-note">
              Ein Erstgespräch verkauft sich anders als ein digitales Produkt.
              Wir wählen die passende Struktur für euer konkretes Angebot.
            </p>
          </div>
          <div className="fact-grid reveal">
            {funnelArten.map((f) => (
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
                Van den Berg Gruppe: Facebook-Ads-Kampagnen mit passender
                Zielseite statt allgemeiner Startseite — Teil des Ergebnisses
                war ein Wachstum von 56 % bei den Anfragen.
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
                So wenig Reibung <em>wie möglich.</em>
              </h2>
              <p className="lead">
                Vier Gründe, warum unsere Funnels tatsächlich zu Anfragen führen
                statt nur gut auszusehen.
              </p>
              <ul className="lines">
                <li>Kurze Formulare — nur, was für die Qualifizierung nötig ist.</li>
                <li>Eine Seite, ein Ziel, kein Wettbewerb mehrerer Angebote.</li>
                <li>Ergebnisse mit echten Zahlen belegt, nicht mit Bauchgefühl.</li>
                <li>Laufende Optimierung an genau der Stelle, wo abgesprungen wird.</li>
              </ul>
            </div>
            <div className="reveal">
              <MetricMock
                head="Live-Auswertung · Van den Berg Gruppe"
                rows={[
                  { label: "Anfragen / Monat", value: "34", countTo: "34" },
                  { label: "Formular-Abschlussrate", value: "6.8%", countTo: "6.8", suffix: "%" },
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
                Fünf Phasen, <em>ein klarer Weg</em>
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
                  { from: "in", text: "Können wir das Formular auf zwei Felder kürzen?" },
                  { from: "out", text: "Klar, schon umgesetzt — testest du mal kurz?" },
                  { from: "in", text: "👍 Läuft super, danke!" },
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
          Lass uns über euren <em>Funnel</em> sprechen.
        </CloseCta>

        <SiteFooter />
      </div>
    </>
  );
}
