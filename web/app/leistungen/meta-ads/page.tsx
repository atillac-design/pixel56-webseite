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
import { projectPath, serviceRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Meta Ads: Facebook & Instagram Werbung",
  description:
    "Erfolgreiche Meta Ads für KMUs, Handwerker & Selbstständige: zielgerichtete Facebook- & Instagram-Werbung, mehr Leads & Anfragen. Kostenlose Beratung bei Pixel56 buchen.",
  alternates: { canonical: serviceRoutes["meta-ads"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Meta Ads",
  serviceType: "Social-Media-Werbung",
  provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
  areaServed: "DE",
  url: `${site.url}${serviceRoutes["meta-ads"]}`,
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
  { nr: "03", tag: "Phase 3", title: "Kampagnen-Aufbau", text: "Zielgruppen und Creatives, abgestimmt auf dein Angebot." },
  { nr: "04", tag: "Phase 4", title: "Laufende Optimierung", text: "Anpassung anhand echter Daten, ohne ständiges Stoppen." },
  { nr: "05", tag: "Phase 5", title: "Reporting & Kurs", text: "Transparente Auswertung, was das Budget bringt." },
];

const referenzen: RefItem[] = [
  { variant: "ic-3", barWidth: 60, img: "/bilder/projekt-van-den-berg.webp", href: projectPath("van-den-berg"), cat: "Van den Berg Gruppe", title: "Meta Ads mit kontinuierlicher Betreuung", text: "Kampagnenaufbau mit Budget-Steuerung nach Datenlage und laufender Auswertung.", tag: "Meta Ads · laufende Betreuung" },
  { variant: "ic-1", barWidth: 50, img: "/bilder/ads-recruiting-kampagne.webp", href: projectPath("gm-dachdecker"), cat: "GM-Dachdecker Meisterbetrieb", title: "Kampagnen für Mitarbeitergewinnung", text: "Neben klassischer Kundengewinnung wurden Meta Ads auch für die gezielte Bewerberansprache eingesetzt.", tag: "Meta Ads · Recruiting" },
];

const faqs = [
  { q: "Wie viel Budget brauche ich für den Einstieg?", a: "Wichtiger als die Höhe ist Konstanz — ein moderates, dauerhaftes Budget bringt oft mehr als kurze, hohe Ausschläge." },
  { q: "Facebook oder Instagram — was ist besser?", a: "Beide laufen über dieselbe Kampagnenstruktur bei Meta und lassen sich kombinieren. Was besser funktioniert, hängt von Zielgruppe und Angebot ab." },
  { q: "Brauche ich professionelle Fotos oder Videos für die Anzeigen?", a: "Hilfreich, aber kein Muss von Anfang an. Authentischer Content performt auf Meta oft genauso gut wie aufwendig produzierter." },
  { q: "Was, wenn ich das Budget mal pausieren muss?", a: "Möglich, aber der Aufbau-Effekt geht dabei meist verloren — nach einer Pause muss der Algorithmus neu lernen." },
  { q: "Was kostet die Betreuung, getrennt vom Werbebudget?", a: "Werbebudget geht direkt an Meta, die Betreuung deckt Strategie, Aufbau und laufende Optimierung ab. Den passenden Umfang klären wir im kostenlosen Erstgespräch." },
  { q: "Bleibst du auch danach erreichbar?", a: "Ja — per WhatsApp über einen festen Ansprechpartner, siehe oben. Betreuung ist Teil der Zusammenarbeit, kein Zusatzverkauf danach." },
  { q: "Wem gehört das Werbekonto?", a: "Das klären wir vor dem Start transparent. Im Regelfall arbeiten wir mit einem Werbekonto, auf das dein Unternehmen Zugriff hat, damit Budget und Kampagnendaten nachvollziehbar bleiben." },
  { q: "Könnt ihr Creatives und Reels für die Anzeigen erstellen?", a: "Ja. Wir können aus deinem Material Anzeigenmotive und kurze Videos schneiden oder bei Bedarf Aufnahmen vor Ort planen. Beides wird getrennt nach Aufwand angeboten." },
  { q: "Wie messt ihr, ob Anfragen aus den Anzeigen kommen?", a: "Wir definieren zuerst, welche Aktion zählt — etwa eine Anfrage oder Terminbuchung. Dann richten wir passende Messpunkte ein und besprechen, welche Daten wegen Einwilligung und Plattformgrenzen tatsächlich verfügbar sind." },
  { q: "Bekomme ich Einblick in die Kampagnenergebnisse?", a: "Ja. Wir besprechen Ausgaben, Reichweite, Klicks und die messbaren Anfragen regelmäßig. Die Beispielgrafik oben zeigt das Format; sie enthält keine echten Kundenzahlen." },
  { q: "Wie lange sollte eine Kampagne laufen?", a: "Das hängt von Ziel, Budget und Datenmenge ab. Wir legen vorab einen sinnvollen Testzeitraum fest und bewerten danach gemeinsam, ob sich eine Fortsetzung lohnt." },
];

const reviews = [
  { text: "Endlich Wachstum, und wir wissen genau, woher es kommt. Absolute Empfehlung.", who: "Van den Berg Gruppe" },
  { text: "Auch für die Mitarbeitersuche über Meta Ads — hätten wir nicht erwartet, dass das so gut läuft.", who: "GM-Dachdecker" },
  { text: "Konstante Betreuung statt einmal aufgesetzt und liegen gelassen.", who: "Colak GmbH", img: "/bilder/person-nalan-colak.webp" },
];

export default function MetaAdsPage() {
  return (
    <main className="service-premium service-suite service-suite-meta">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="sheet">
        <SiteNav crumb={{ section: "Leistungen", page: "Meta Ads" }} />

        <header className="hero service-suite-hero">
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
            <a className="btn-primary" href="https://calendly.com/pixel56/15min" target="_blank" rel="noopener">
              Meta-Ads-Potenzial besprechen <ArrowIcon />
            </a>
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

      <div className="editorial-shell service-editorial">
        <div className="sheet">
        <section className="service-summary service-summary-premium reveal" aria-label="Meta Ads auf einen Blick">
          <div><span>Ziel</span><strong>Planbare qualifizierte Anfragen</strong></div>
          <div><span>Kanäle</span><strong>Instagram &amp; Facebook</strong></div>
          <div><span>Hebel</span><strong>Creative, Zielgruppe, Angebot</strong></div>
          <div><span>Steuerung</span><strong>Tracking &amp; laufende Optimierung</strong></div>
        </section>

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
                <li>Ohne Meta Ads erreichst du nur, wer dir schon folgt.</li>
                <li>Sprunghafte Kampagnen kommen nie richtig ins Lernen.</li>
                <li>Ein konstantes Budget baut Reichweite auf, die bleibt.</li>
              </ul>
            </div>
            <div className="reveal">
              <FeedMock imgSrc="/bilder/ads-meta-beispiel.webp" />
            </div>
          </div>
        </section>

        <section className="band tint" id="beweis">
          <div className="band-tag reveal" style={{ marginBottom: 44 }}>
            03 — Aus der Projektarbeit
          </div>
          <div className="stat-copy reveal" style={{ maxWidth: 780, margin: "0 auto" }}>
            <p className="quote" style={{ fontSize: "clamp(24px, 3.4vw, 34px)" }}>
              Kampagnen brauchen ein klares Ziel und laufende Betreuung.
            </p>
            <p>
              Für die Van den Berg Gruppe wurden Meta-Kampagnen mit passender
              Zielseite und Conversion-Tracking aufgebaut. Motive und Struktur
              werden anhand der verfügbaren Kampagnendaten weiterentwickelt.
            </p>
            <cite>{"// PROJEKT VAN DEN BERG GRUPPE"}</cite>
          </div>
        </section>

        <section className="band" aria-labelledby="meta-creatives-title">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Echte Kampagnenmotive</span>
              <h2 className="band-title" id="meta-creatives-title">
                Creatives aus <em>echter Kundenarbeit</em>
              </h2>
            </div>
            <p className="band-note">
              Die Motive zeigen reale Arbeiten von Pixel56. Kampagnenaufbau,
              Zielgruppe und Landingpage werden jeweils auf das Angebot abgestimmt.
            </p>
          </div>
          <div className="work-gallery work-gallery-social reveal">
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bilder/ads-meta-beispiel.webp" alt="Instagram- und Facebook-Anzeigen für Mitarbeitergewinnung" loading="lazy" decoding="async" />
              <figcaption><b>Mitarbeitergewinnung</b><span>Feed · Story · Recruiting</span></figcaption>
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bilder/ads-fb-beispiele.webp" alt="Meta-Ad für einen Abbruch- und Tiefbaubetrieb" loading="lazy" decoding="async" />
              <figcaption><b>Abbruch &amp; Tiefbau</b><span>Ad Creative · Bewerberansprache</span></figcaption>
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bilder/projekt-stark-ins-neue-3.webp" alt="Social-Media-Anzeige für Stark ins Neue" loading="lazy" decoding="async" />
              <figcaption><b>Stark ins Neue</b><span>Meta Ads · Kursanmeldung</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="band">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">05 — Warum wir</span>
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
                <li>Ergebnisse ehrlich eingeordnet, nicht schöngerechnet.</li>
                <li>Laufende Optimierung — Budget wandert dahin, wo es wirkt.</li>
              </ul>
            </div>
            <div className="reveal">
              <MetricMock
                head="Beispiel-Dashboard · Kampagnen-Auswertung"
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
                Deine Kampagne. <em>Direkter Draht.</em>
              </h2>
              <p className="lead">
                Kein Ticket-System, kein Zwischenmanager. Neue Creatives, Zielgruppen oder Budget-Fragen klärst du direkt per WhatsApp mit deinem festen Ansprechpartner.
              </p>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 — Dein Ansprechpartner"
                messages={[
                  { from: "in", text: "Sollen wir das Creative für die neue Kampagne tauschen?" },
                  { from: "out", text: "Ja, hab schon 3 neue Varianten hochgeladen." },
                  { from: "in", text: "👍 Super, schau ich mir gleich an." },
                ]}
                footer="Neue Creatives besprechen — Antwort meist unter 1 Stunde"
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

        </div>
      </div>

      <div className="sheet service-ending">
        <CloseCta>
          Lass uns über deine <em>Meta-Ads-Kampagne</em> sprechen.
        </CloseCta>

        <SiteFooter />
      </div>
    </main>
  );
}
