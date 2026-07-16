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
import { JobMock } from "@/components/mocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mitarbeitergewinnung",
  description:
    "Karriereseiten und Recruiting-Kampagnen mit einem Bewerbungsweg, den Menschen tatsächlich zu Ende gehen. Aus Bendorf bei Koblenz.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mitarbeitergewinnung",
  serviceType: "Recruiting-Marketing",
  provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
  areaServed: "DE",
  url: `${site.url}/leistungen/mitarbeitergewinnung`,
};

const statusRows = [
  { label: "Stelle ausgeschrieben, keine Bewerbung", tag: "Reichweite" },
  { label: "Bewerbung nur per E-Mail", tag: "Umweg" },
  { label: "Karriereseite veraltet", tag: "Eindruck" },
  { label: "Jüngere Zielgruppe unerreicht", tag: "Kanal" },
  { label: "Antwort dauert Wochen", tag: "Tempo" },
  { label: "Fachkräftemangel als Ausrede", tag: "Maßnahme" },
];

const bausteine = [
  { fl: "Baustein 1", title: "Karriereseite", text: "Eigene, gepflegte Seite statt einer vergessenen Unterseite — mit echtem Einblick." },
  { fl: "Baustein 2", title: "Bewerbung ohne Umwege", text: "Unterlagen direkt hochladen, ohne E-Mail-Programm und lange Formulare." },
  { fl: "Baustein 3", title: "Recruiting-Kampagnen", text: "Gezielte Ansprache über Google und Meta, wo die Zielgruppe unterwegs ist." },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Analyse", text: "Wo Kandidaten im aktuellen Bewerbungsweg abspringen." },
  { nr: "02", tag: "Phase 2", title: "Karriereseite", text: "Echter Einblick statt reiner Stellentitel-Liste." },
  { nr: "03", tag: "Phase 3", title: "Bewerbungsweg", text: "Upload-Funktion und kurzes Formular, wenige Minuten." },
  { nr: "04", tag: "Phase 4", title: "Kampagne", text: "Gezielte Ansprache, wo die Zielgruppe aktiv ist." },
  { nr: "05", tag: "Phase 5", title: "Auswertung", text: "Bewerbungszahlen und Absprungpunkte im Blick." },
];

const referenzen: RefItem[] = [
  { variant: "ic-1", barWidth: 55, cat: "GM-Dachdecker Meisterbetrieb", title: "Karriereportal mit Direkt-Upload", text: "Bewerber laden ihre Unterlagen direkt hoch, ohne E-Mail-Programm.", tag: "Karriereportal · Webdesign · 2023" },
  { variant: "ic-3", barWidth: 65, cat: "GM-Dachdecker Meisterbetrieb ", title: "Kampagnen zur Bewerbergewinnung", text: "Neben klassischer Kundengewinnung setzen wir Meta Ads gezielt zur Ansprache passender Kandidaten ein.", tag: "Meta Ads · Recruiting" },
];

const faqs = [
  { q: "Reicht nicht eine normale Stellenanzeige bei Jobportalen?", a: "Jobportale können ergänzend sinnvoll sein, ersetzen aber keine eigene Karriereseite — dort entscheidet sich oft erst, ob jemand tatsächlich auf „Bewerben“ klickt." },
  { q: "Können Bewerber ihre Unterlagen wirklich ohne E-Mail hochladen?", a: "Ja. Ein direktes Upload-Formular nimmt Unterlagen entgegen, ohne dass Bewerber ihr E-Mail-Programm öffnen müssen — das senkt die Abbruchquote spürbar." },
  { q: "Funktioniert das auch für schwer zu besetzende Stellen?", a: "Ein einfacherer Bewerbungsweg löst nicht jeden Fachkräftemangel, hilft aber dabei, von den vorhandenen Kandidaten möglichst viele tatsächlich zu erreichen." },
  { q: "Was kostet eine Recruiting-Kampagne im Vergleich zu einer Kunden-Kampagne?", a: "Die Mechanik ist ähnlich wie bei Google oder Meta Ads für Kunden — Budget für die Plattform getrennt von der Betreuung. Details klären wir im Erstgespräch." },
  { q: "Wie schnell ist die Karriereseite fertig?", a: "Je nach Umfang meist innerhalb weniger Wochen — der Zeitrahmen hängt vor allem davon ab, wie schnell Inhalte und Freigaben von eurer Seite kommen." },
  { q: "Bleibst du auch danach erreichbar?", a: "Ja — per WhatsApp über einen festen Ansprechpartner, siehe oben. Betreuung ist Teil der Zusammenarbeit, kein Zusatzverkauf danach." },
];

const reviews = [
  { text: "Endlich bekommen wir Bewerbungen, ohne dass Kandidaten unterwegs abspringen.", who: "GM-Dachdecker" },
  { text: "Professionell, schnell umgesetzt — genau das, was wir gebraucht haben.", who: "Oktay Cömertler", img: "/bilder/person-oktay-coemertler.webp" },
  { text: "Auch nach dem Launch immer erreichbar. Kann ich nur empfehlen.", who: "Colak GmbH", img: "/bilder/person-nalan-colak.webp" },
];

export default function RecruitingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="sheet">
        <SiteNav crumb={{ section: "Leistungen", page: "Mitarbeitergewinnung" }} />

        <header className="hero">
          <PulseField label1="// STELLE AKTIV" label2="// UPLOAD OHNE E-MAIL" />
          <div className="hero-eyebrow">LEISTUNG · MITARBEITERGEWINNUNG</div>
          <h1>
            <span className="in"><span>Offene Stellen.</span></span>
            <span className="in"><span>Echte Bewerbungen.</span></span>
            <span className="in"><span>Kein Umweg.</span></span>
          </h1>
          <p className="hero-sub">
            Karriereseiten und Kampagnen, die Bewerbungen genauso ernst nehmen
            wie Kundenanfragen — mit einem Bewerbungsweg, den Menschen
            tatsächlich zu Ende gehen.
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
            <div className="hf-chip">Karriereseite</div>
            <div className="hf-chip">Bewerbungsweg</div>
            <div className="hf-chip">Kampagne</div>
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
                Sechs Zeichen, dass Stellen <em>unbesetzt bleiben</em>
              </h2>
              <p className="lead">
                Der Betrieb läuft, aber es fehlen Hände. Meist liegt das nicht am
                Arbeitsmarkt allein, sondern an einem dieser Punkte.
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
                Bewerber sind auch <em>nur Kunden</em>
              </h2>
              <p className="lead">
                Wer um Kunden wirbt, gibt sich meist viel Mühe. Bei der
                Mitarbeitersuche fehlt diese Sorgfalt oft völlig — dabei gelten
                dieselben Prinzipien.
              </p>
              <ul className="lines">
                <li>Ohne Karriereseite seid ihr für aktiv Suchende unsichtbar.</li>
                <li>Jede zusätzliche Hürde im Bewerbungsweg kostet Kandidaten.</li>
                <li>Eine einfache Bewerberstrecke wird tatsächlich zu Ende gegangen.</li>
              </ul>
            </div>
            <div className="reveal">
              <JobMock />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Was wir bauen</span>
              <h2 className="band-title">
                Drei Bausteine, <em>ein einfacher Weg</em>
              </h2>
            </div>
            <p className="band-note">
              Karriereseite, Bewerbungsweg und Kampagne greifen ineinander —
              nicht als drei getrennte Baustellen.
            </p>
          </div>
          <div className="fact-grid reveal">
            {bausteine.map((f) => (
              <div className="fact-cell" key={f.fl}>
                <span className="fl">{f.fl}</span>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Ein Beispiel</span>
              <h2 className="band-title">
                Was <em>möglich ist</em>
              </h2>
            </div>
            <p className="band-note">
              Für GM-Dachdecker haben wir ein Karriereportal gebaut, über das
              Bewerber ihre Unterlagen direkt hochladen können — ohne
              E-Mail-Programm, ohne Medienbruch.
            </p>
          </div>
          <div className="callout2 reveal">
            <p>
              <b>Das Ergebnis:</b> spürbar leichtere Mitarbeitergewinnung für
              den Meisterbetrieb. Nicht weil plötzlich mehr Menschen einen
              Handwerksberuf ergreifen wollten, sondern weil der Weg zur
              Bewerbung einfach nicht mehr im Weg stand.
            </p>
          </div>
        </section>

        <section className="band">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">05 — Warum wir</span>
              <h2 className="band-title">
                Kein Medienbruch. <em>Keine Wartezeit.</em>
              </h2>
              <p className="lead">
                Vier Gründe, warum unsere Bewerberstrecken tatsächlich zu
                Bewerbungen führen.
              </p>
              <ul className="lines">
                <li>Direkt-Upload ohne E-Mail-Programm oder Medienbruch.</li>
                <li>Karriereseite mit echtem Einblick statt Stellentitel-Liste.</li>
                <li>Gezielte Kampagnen, wo die Zielgruppe tatsächlich ist.</li>
                <li>Schnelle Antwortzeiten, bevor Kandidaten abspringen.</li>
              </ul>
            </div>
            <div className="reveal">
              <MetricMock
                head="Live-Auswertung · GM-Dachdecker"
                rows={[
                  { label: "Bewerbungen / Monat", value: "18", countTo: "18" },
                  { label: "Formular-Abschlussrate", value: "72%", countTo: "72", suffix: "%" },
                  { label: "Antwortzeit", value: "<24h" },
                ]}
                bars={[40, 55, 48, 66, 60, 82, 100]}
              />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">06 — Der Weg dahin</span>
              <h2 className="band-title">
                Fünf Phasen, <em>ein einfacherer Weg</em>
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
                  { from: "in", text: "Können wir die Stellenanzeige noch anpassen?" },
                  { from: "out", text: "Klar, schick mir den neuen Text — ist heute noch online." },
                  { from: "in", text: "👍 Super, danke dir!" },
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
          Lass uns über eure <em>Mitarbeitergewinnung</em> sprechen.
        </CloseCta>

        <SiteFooter />
      </div>
    </>
  );
}
