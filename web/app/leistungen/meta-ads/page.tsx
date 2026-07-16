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
import { FeedMock } from "@/components/mocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meta Ads (Facebook & Instagram)",
  description:
    "Facebook- und Instagram-Kampagnen, die Reichweite aufbauen, bevor der Bedarf entsteht — gezielt ausgesteuert und laufend optimiert. Aus Bendorf bei Koblenz.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Meta Ads",
  serviceType: "Social-Media-Werbung",
  provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
  areaServed: "DE",
  url: `${site.url}/leistungen/meta-ads`,
};

const statusRows = [
  { label: "Budget läuft, niemand weiß warum", tag: "Tracking" },
  { label: "Falsche Zielgruppe, richtige Anzeige", tag: "Targeting" },
  { label: "Anzeige führt ins Leere", tag: "Landingpage" },
  { label: "Kein Tracking, keine Klarheit", tag: "Conversion" },
  { label: "Sprunghaftes Budget statt Konstanz", tag: "Kontinuität" },
  { label: "Schlechte Erfahrung, abgeschrieben", tag: "Setup" },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Analyse & Ziel", text: "Was eine Anfrage wert ist, bevor Budget fließt." },
  { nr: "02", tag: "Phase 2", title: "Tracking-Fundament", text: "Sauberes Conversion-Tracking zuerst." },
  { nr: "03", tag: "Phase 3", title: "Kampagnen-Aufbau", text: "Zielgruppen und Creatives, abgestimmt auf euer Angebot." },
  { nr: "04", tag: "Phase 4", title: "Laufende Optimierung", text: "Anpassung anhand echter Daten, ohne ständiges Stoppen." },
  { nr: "05", tag: "Phase 5", title: "Reporting & Kurs", text: "Transparente Auswertung, was das Budget bringt." },
];

const referenzen: RefItem[] = [
  { variant: "ic-3", barWidth: 60, cat: "Van den Berg Gruppe", title: "56 % Wachstum durch gezielte Facebook Ads", text: "Kontinuierlicher Kampagnenaufbau mit konsequenter Budget-Steuerung nach Datenlage statt Bauchgefühl.", tag: "Meta Ads · laufende Betreuung" },
  { variant: "ic-1", barWidth: 50, cat: "GM-Dachdecker Meisterbetrieb", title: "Kampagnen für Mitarbeitergewinnung", text: "Neben klassischer Kundengewinnung setzen wir Meta Ads gezielt zur Bewerbergewinnung ein — spürbar leichtere Mitarbeitersuche.", tag: "Meta Ads · Recruiting" },
];

const faqs = [
  { q: "Wie viel Budget brauche ich für den Einstieg?", a: "Wichtiger als die Höhe ist Konstanz — ein moderates, dauerhaftes Budget bringt oft mehr als kurze, hohe Ausschläge." },
  { q: "Facebook oder Instagram — was ist besser?", a: "Beide laufen über dieselbe Kampagnenstruktur bei Meta und lassen sich kombinieren. Was besser funktioniert, hängt von Zielgruppe und Angebot ab." },
  { q: "Brauche ich professionelle Fotos oder Videos für die Anzeigen?", a: "Hilfreich, aber kein Muss von Anfang an. Authentischer Content performt auf Meta oft genauso gut wie aufwendig produzierter." },
  { q: "Was, wenn ich das Budget mal pausieren muss?", a: "Möglich, aber der Aufbau-Effekt geht dabei meist verloren — nach einer Pause muss der Algorithmus neu lernen." },
  { q: "Was kostet die Betreuung, getrennt vom Werbebudget?", a: "Werbebudget geht direkt an Meta, die Betreuung deckt Strategie, Aufbau und laufende Optimierung ab. Den passenden Umfang klären wir im kostenlosen Erstgespräch." },
  { q: "Bleibst du auch danach erreichbar?", a: "Ja — per WhatsApp über einen festen Ansprechpartner, siehe oben. Betreuung ist Teil der Zusammenarbeit, kein Zusatzverkauf danach." },
];

const reviews = [
  { text: "56 % Wachstum, und wir wissen genau, woher es kommt. Absolute Empfehlung.", who: "Van den Berg Gruppe" },
  { text: "Auch für die Mitarbeitersuche über Meta Ads — hätten wir nicht erwartet, dass das so gut läuft.", who: "GM-Dachdecker" },
  { text: "Konstante Betreuung statt einmal aufgesetzt und liegen gelassen.", who: "Colak GmbH", img: "/bilder/person-nalan-colak.webp" },
];

export default function MetaAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="sheet">
        <SiteNav crumb={{ section: "Leistungen", page: "Meta Ads" }} />

        <header className="hero">
          <PulseField label1="// REICHWEITE AKTIV" label2="// FEED & STORY" />
          <div className="hero-eyebrow">LEISTUNG · META ADS</div>
          <h1>
            <span className="in"><span>Bekannt werden,</span></span>
            <span className="in"><span>bevor gesucht wird.</span></span>
            <span className="in"><span>Nicht erst danach.</span></span>
          </h1>
          <p className="hero-sub">
            Facebook und Instagram erreichen Menschen, die noch gar nicht aktiv
            suchen — aber genau zur Zielgruppe passen. Gezielt ausgesteuert und
            laufend optimiert, statt einmal eingerichtet und stehen gelassen.
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
            <span className="hf-label">Wir steuern:</span>
            <div className="hf-chip">Zielgruppen</div>
            <div className="hf-chip">Creatives</div>
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
                Bekanntheit, <em>bevor gesucht wird</em>
              </h2>
              <p className="lead">
                Bei Google Ads muss die Absicht schon da sein. Facebook und
                Instagram erreichen Menschen davor — wecken Interesse, bevor
                überhaupt aktiv gesucht wird.
              </p>
              <ul className="lines">
                <li>Ohne Meta Ads erreicht ihr nur, wer euch schon folgt.</li>
                <li>Sprunghafte Kampagnen kommen nie richtig ins Lernen.</li>
                <li>Ein konstantes Budget baut Reichweite auf, die bleibt.</li>
              </ul>
            </div>
            <div className="reveal">
              <FeedMock />
            </div>
          </div>
        </section>

        <section className="band tint" id="beweis">
          <div className="band-tag reveal" style={{ marginBottom: 44 }}>
            03 — Der Beweis
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
                Van den Berg Gruppe, kontinuierlich weiterentwickelte
                Facebook-Ads-Kampagnen. Auch bei reduziertem Budget hielt der
                Anfrage-Effekt an — Konstanz schlägt Sprunghaftigkeit.
              </p>
              <cite>{"// VAN DEN BERG GRUPPE"}</cite>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">04 — Warum wir</span>
              <h2 className="band-title">
                Konstanz statt <em>Stop-and-go.</em>
              </h2>
              <p className="lead">
                Vier Gründe, warum unsere Meta-Ads-Kampagnen nachhaltig wirken
                statt nur kurz auszuschlagen.
              </p>
              <ul className="lines">
                <li>Sauberes Conversion-Tracking, bevor eine Kampagne live geht.</li>
                <li>Konstantes Budget statt ständigem Stoppen und Neustarten.</li>
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
              <span className="band-tag">05 — Der Weg dahin</span>
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
              <span className="band-tag">06 — Referenzen</span>
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
              <span className="band-tag">07 — Zusammenarbeit</span>
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
                  { from: "in", text: "Sollen wir das Creative für die neue Kampagne tauschen?" },
                  { from: "out", text: "Ja, hab schon 3 neue Varianten hochgeladen." },
                  { from: "in", text: "👍 Super, schau ich mir gleich an." },
                ]}
                footer="Antwortzeit während der Zusammenarbeit: meist unter 1 Stunde"
              />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">08 — Bewertungen</span>
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
              <span className="band-tag">09 — Häufige Fragen</span>
              <h2 className="band-title">
                Was du vorher <em>wissen willst</em>
              </h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>

        <CloseCta>
          Lass uns über eure <em>Meta-Ads-Kampagne</em> sprechen.
        </CloseCta>

        <SiteFooter />
      </div>
    </>
  );
}
