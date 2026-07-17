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
  BrowserMock,
  CloseCta,
  FaqList,
  Reviews,
  Stepper,
} from "@/components/ui";
import { CompareMock, SearchMock } from "@/components/mocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Suchmaschinenoptimierung (SEO)",
  description:
    "Sichtbarkeit bei Google, die nicht von Werbebudget abhängt — technisches Fundament plus laufende Betreuung. SEO aus Bendorf bei Koblenz.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Suchmaschinenoptimierung",
  serviceType: "SEO",
  provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
  areaServed: "DE",
  url: `${site.url}/leistungen/seo`,
};

const statusRows = [
  { label: "Auf Google unauffindbar", tag: "Sichtbarkeit" },
  { label: "Nur auf Ads angewiesen", tag: "Abhängigkeit" },
  { label: "Lokale Konkurrenz liegt vorn", tag: "Ranking" },
  { label: "Einmal gemacht, nie gepflegt", tag: "Pflege" },
  { label: "Keine Ahnung, was wirkt", tag: "Auswertung" },
  { label: "Ungeduld nach wenigen Wochen", tag: "Geduld" },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Analyse", text: "Technischer Check, Keyword-Recherche, Blick auf die lokale Konkurrenz." },
  { nr: "02", tag: "Phase 2", title: "Technisches Fundament", text: "Ladezeit, Struktur, mobile Darstellung — die Basis für alles Weitere." },
  { nr: "03", tag: "Phase 3", title: "Lokale Optimierung", text: "Google Business Profil, einheitliche Adressdaten, lokale Keywords." },
  { nr: "04", tag: "Phase 4", title: "Inhalte & Sichtbarkeit", text: "Laufende Inhalte, die Relevanz signalisieren." },
  { nr: "05", tag: "Phase 5", title: "Auswertung & Anpassung", text: "Regelmäßiger Blick auf Rankings und Traffic, Kurskorrektur wo nötig." },
];

const faqs = [
  { q: "Wie lange dauert es, bis SEO wirkt?", a: "Erste Bewegungen oft ab Monat zwei bis vier bei weniger umkämpften Begriffen, spürbare Effekte bei wichtigen Suchbegriffen meist ab Monat sechs bis zwölf — abhängig von Branche und lokaler Konkurrenz." },
  { q: "Brauche ich SEO, wenn ich schon Google Ads schalte?", a: "Ja — Ads bringen sofortige, aber gemietete Sichtbarkeit. SEO baut etwas auf, das bleibt, auch wenn das Werbebudget mal pausiert." },
  { q: "Was ist lokales SEO genau?", a: "Die Optimierung dafür, bei Suchen mit Ortsbezug gefunden zu werden — vor allem über das Google Business Profil und einheitliche Adressdaten." },
  { q: "Was kostet SEO?", a: "Ein einmaliger technischer Grundcheck ist etwas anderes als laufende, monatliche Betreuung mit Content-Aufbau. Den passenden Umfang klären wir im kostenlosen Erstgespräch." },
  { q: "Kann ich SEO nicht einfach selbst machen?", a: "Kleinere Dinge durchaus — aber die Kombination aus technischem Fundament, laufendem Content und Auswertung braucht Zeit, die im Tagesgeschäft meist fehlt." },
  { q: "Bleibst du auch danach erreichbar?", a: "Ja — per WhatsApp über einen festen Ansprechpartner, siehe oben. Betreuung ist Teil der Zusammenarbeit, kein Zusatzverkauf danach." },
];

const reviews = [
  { text: "Endlich zeigen sich unsere Kurse auch bei Google. Man merkt den Unterschied deutlich.", who: "Stark ins Neue gGmbH" },
  { text: "Mehr Anfragen, ohne dass wir mehr Werbebudget ausgegeben haben.", who: "CASS Schulungen" },
  { text: "Ehrliche Einschätzung von Anfang an, keine leeren Versprechen.", who: "GM-Dachdecker" },
];

export default function SeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="sheet">
        <SiteNav crumb={{ section: "Leistungen", page: "SEO" }} />

        <header className="hero">
          <PulseField label1="// RANKING AKTIV" label2="// ORGANISCH, NICHT GEMIETET" />
          <div className="hero-eyebrow">LEISTUNG · SUCHMASCHINENOPTIMIERUNG</div>
          <h1>
            <span className="in"><span>Gefunden werden,</span></span>
            <span className="in"><span>wenn es zählt.</span></span>
            <span className="in"><span>Ohne Mietgebühr.</span></span>
          </h1>
          <p className="hero-sub">
            Sichtbarkeit bei Google, die nicht von Werbebudget abhängt —
            technisches Fundament plus laufende Betreuung, damit Rankings nicht
            nur entstehen, sondern bleiben.
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
            <span className="hf-label">Wir optimieren:</span>
            <div className="hf-chip">Technik</div>
            <div className="hf-chip">Lokal</div>
            <div className="hf-chip">Inhalte</div>
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
                Sechs Zeichen, dass Google <em>euch übersieht</em>
              </h2>
              <p className="lead">
                Die Leistung stimmt, aber wer danach sucht, landet zuerst bei der
                Konkurrenz. Meist steckt einer dieser Gründe dahinter.
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
                Sichtbarkeit, die <em>nicht gemietet ist</em>
              </h2>
              <p className="lead">
                Bei Google Ads kauft man sich Sichtbarkeit — sobald das Budget
                stoppt, ist sie weg. SEO baut etwas auf, das bleibt, auch wenn
                kein Cent mehr fließt.
              </p>
              <ul className="lines">
                <li>Jede Anfrage über Ads kostet dauerhaft Klickpreis.</li>
                <li>Ohne Pflege verlieren Rankings mit der Zeit an Boden.</li>
                <li>Laufendes SEO baut auf jedem Monat davor auf.</li>
              </ul>
            </div>
            <div className="reveal">
              <CompareMock
                rows={[
                  { variant: "ic-mute", barWidth: 35, noBtn: true, label: "Nur Ads — Budget pausiert, Sichtbarkeit weg" },
                  { variant: "ic-1", barWidth: 65, label: "SEO — wächst weiter, auch in der Pause" },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">03 — Lokales SEO</span>
              <h2 className="band-title">
                Der am meisten <em>unterschätzte Hebel</em>
              </h2>
              <p className="lead">
                Für die meisten unserer Kunden entscheidet nicht das bundesweite
                Ranking, sondern die drei Treffer in der lokalen Kartenansicht —
                genau da, wo „Handwerker in der Nähe“ gesucht wird.
              </p>
              <ul className="lines">
                <li>Google Business Profil vollständig gepflegt — kostenlos, aber der wirksamste Hebel.</li>
                <li>Name, Adresse, Telefonnummer überall identisch — Verzeichnisse, Website, Social Media.</li>
                <li>Menge und Aktualität von Bewertungen fließen direkt in die Platzierung ein.</li>
              </ul>
            </div>
            <div className="reveal">
              <SearchMock
                query="handwerker in der nähe"
                youTag="Platz 1"
                others={["Mitbewerber A · 4,3 ★", "Mitbewerber B · 3,8 ★"]}
              />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Wie lange es dauert</span>
              <h2 className="band-title">
                Ehrlich: <em>SEO ist kein Sprint</em>
              </h2>
            </div>
            <p className="band-note">
              In den ersten vier bis sechs Wochen passiert meist noch wenig
              Sichtbares. Erste Bewegungen ab Monat zwei bis vier, spürbare
              Effekte bei wichtigen Begriffen meist ab Monat sechs bis zwölf.
            </p>
          </div>
          <div className="callout2 reveal">
            <p>
              <b>Der häufigste Fehler:</b> SEO wird nach zwei, drei Monaten als
              gescheitert bewertet — genau in der Phase, in der sich die
              Grundlagen erst festigen. Wer die Zeit mit Google Ads überbrückt,
              merkt den Übergang meist gar nicht scharf, weil ein Kanal langsam
              übernimmt.
            </p>
          </div>
        </section>

        <section className="band">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">05 — Warum wir</span>
              <h2 className="band-title">
                Technisches SEO von <em>Tag eins.</em>
              </h2>
              <p className="lead">
                Vier Gründe, warum SEO bei uns kein nachträglich draufgesetztes
                Extra ist.
              </p>
              <ul className="lines">
                <li>Technisches SEO ist Teil jedes Website-Projekts, kein optionaler Zusatz.</li>
                <li>Lokale Optimierung inklusive — Google Business Profil, Adressdaten.</li>
                <li>Ergebnisse mit echten Zahlen belegt, nicht mit Bauchgefühl.</li>
                <li>Bleibt nach dem Launch dran — Rankings brauchen Pflege.</li>
              </ul>
            </div>
            <div className="reveal">
              <MetricMock
                head="Live-Auswertung · Stark ins Neue"
                rows={[
                  { label: "Organische Klicks / Monat", value: "210", countTo: "210" },
                  { label: "Sichtbarkeitsindex", value: "8.4", countTo: "8.4" },
                  { label: "Ladezeit", value: "0.8s" },
                ]}
                bars={[28, 36, 48, 58, 70, 86, 100]}
              />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">06 — Der Weg dahin</span>
              <h2 className="band-title">
                Fünf Phasen, <em>ein wachsendes Ergebnis</em>
              </h2>
            </div>
          </div>
          <Stepper steps={steps} />
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">07 — Referenz</span>
              <h2 className="band-title">
                Von unauffindbar <em>zu gut platziert</em>
              </h2>
            </div>
          </div>
          <div className="ref-solo reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="rc-img" src="/bilder/projekt-stark-ins-neue-2.webp" alt="Projekt: Stark ins Neue" style={{ marginBottom: 18 }} />
            <div className="rc-cat">Stark ins Neue gGmbH</div>
            <h4>Kompletter Relaunch mit SEO von Grund auf</h4>
            <p>
              Technisches und inhaltliches SEO — Keywords, Meta-Daten,
              semantische Struktur, alles von Anfang an mitgedacht statt
              nachträglich draufgesetzt. Ergebnis: bessere Google-Rankings und
              deutlich mehr Kursanmeldungen.
            </p>
            <span className="rc-tag">Webdesign · SEO · 2025</span>
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
                  { from: "in", text: "Wie sieht das Ranking für „Dachdecker Koblenz“ diesen Monat aus?" },
                  { from: "out", text: "Platz 3, letzten Monat noch Platz 7 — schick dir gleich die Auswertung." },
                  { from: "in", text: "👍 Perfekt, danke dir." },
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
          Lass uns über eure <em>Sichtbarkeit</em> sprechen.
        </CloseCta>

        <SiteFooter />
      </div>
    </>
  );
}
