import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowIcon,
  PulseField,
  ClientMarquee,
  CloseCta,
  Reviews,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Echte Projekte, echte Ergebnisse — vom Dachdecker-Karriereportal bis zur Spendengala. Ausgewählte Arbeiten von Pixel56 aus Bendorf bei Koblenz.",
};

type Projekt = {
  variant: string;
  barWidth: number;
  cat: string;
  title: string;
  text: string;
  tags: string;
  year: string;
  /** Echter Projekt-Screenshot (Pfad unter public/) — ersetzt das abstrakte Browser-Mockup. */
  img?: string;
};

const projekte: Projekt[] = [
  { variant: "ic-3", barWidth: 60, img: "/bilder/projekt-stark-ins-neue.webp", cat: "Stark ins Neue gGmbH", title: "Vertrauen und Wirkung für eine Bildungsinitiative", text: "Kompletter Website-Relaunch für eine gemeinnützige Organisation im Bereich mentale Gesundheit — SEO-optimiert, DSGVO-konform, mit klarer Nutzerführung zur Kursanmeldung. Ergebnis: deutlich mehr Kursanmeldungen und Newsletter-Abos.", tags: "Webdesign · SEO · Funnel", year: "2025" },
  { variant: "ic-1", barWidth: 52, cat: "GM-Dachdecker Meisterbetrieb", title: "Handwerkskunst digital erlebbar gemacht", text: "Neue Website inklusive Karriereportal — Bewerber laden ihre Unterlagen direkt hoch, ohne E-Mail-Programm. Ergebnis: höhere Sichtbarkeit und spürbar leichtere Mitarbeitergewinnung.", tags: "Webdesign · Karriereportal · Recruiting", year: "2023" },
  { variant: "ic-4", barWidth: 65, img: "/bilder/projekt-van-den-berg.webp", cat: "Van den Berg Gruppe", title: "56 % Wachstum durch gezielte Facebook Ads", text: "Kontinuierlicher Kampagnenaufbau mit konsequenter Budget-Steuerung nach Datenlage statt Bauchgefühl — auch bei reduziertem Budget hielt der Anfrage-Effekt an.", tags: "Meta Ads · Landingpage · Betreuung", year: "laufend" },
  { variant: "ic-2", barWidth: 70, img: "/bilder/projekt-ma-transporte.webp", cat: "MA-Transporte", title: "Dienstleistungsqualität digital sichtbar gemacht", text: "Neue, repräsentative Website plus laufende Social-Media-Betreuung für ein Transportunternehmen — gestärkte Markenwahrnehmung und mehr Kundenengagement.", tags: "Webdesign · Social Media", year: "seit 2019" },
  { variant: "ic-7", barWidth: 55, cat: "Oktay Cömertler", title: "Full-Service für Abbruch, Tief- & Kanalbau", text: "Maßgeschneidertes Branding und Webdesign, entwickelt aus umfassender Markt- und Unternehmensanalyse — für Desktop und mobil gleichermaßen durchdacht.", tags: "Branding · Webdesign", year: "seit 2022" },
  { variant: "ic-6", barWidth: 48, img: "/bilder/projekt-cass.webp", cat: "CASS Schulungen", title: "Bildung und Sicherheit digital vereint", text: "Branding und Webdesign für Luftsicherheitsschulungen — seriöser Auftritt für ein Thema, bei dem Vertrauen alles ist.", tags: "Branding · Webdesign · Social Media", year: "2023" },
  { variant: "ic-5", barWidth: 62, img: "/bilder/projekt-kinderherzen.webp", cat: "Sportler für Kinderherzen", title: "Marketing & Branding für eine Spendengala", text: "Komplette Kampagne zugunsten krebskranker Kinder — Sichtbarkeit für den guten Zweck, von der Marke bis zur Bewerbung des Events.", tags: "Branding · Event · Kampagne", year: "2022" },
  { variant: "ic-8", barWidth: 58, cat: "Burgerfabrik", title: "Reels direkt aus dem echten Betrieb", text: "Kurzvideos aus dem laufenden Ladenalltag statt gestellter Werbeaufnahmen — Content, der zeigt, wie es dort tatsächlich zugeht.", tags: "Reels · Social Content", year: "laufend" },
];

const reviews = [
  { text: "Von der ersten Idee bis zum Livegang alles aus einer Hand — schnell, unkompliziert, top Ergebnis.", who: "GM-Dachdecker" },
  { text: "56 % Wachstum, und wir wissen genau, woher es kommt. Absolute Empfehlung.", who: "Van den Berg Gruppe" },
  { text: "Die neue Website hat sich in wenigen Wochen ausgezahlt. Klare Empfehlung.", who: "Stark ins Neue gGmbH" },
];

export default function ProjektePage() {
  return (
    <>
      <div className="sheet">
        <SiteNav crumb={{ section: "Unternehmen", page: "Projekte" }} />

        <header className="hero">
          <PulseField label1="// 8 PROJEKTE AUSGEWÄHLT" label2="// SEIT 2019 IM EINSATZ" />
          <div className="hero-eyebrow">UNTERNEHMEN · PROJEKTE</div>
          <h1>
            <span className="in"><span>Echte Projekte.</span></span>
            <span className="in"><span>Echte Ergebnisse.</span></span>
            <span className="in"><span>Keine Behauptungen.</span></span>
          </h1>
          <p className="hero-sub">
            Vom Dachdecker-Karriereportal bis zur Spendengala — jedes Projekt
            hier ist real, mit echten Kunden und nachvollziehbaren Ergebnissen.
          </p>
          <div className="hero-actions">
            <Link className="btn-primary" href="#kontakt">
              Kostenloses Erstgespräch <ArrowIcon />
            </Link>
            <Link className="btn-text" href="#projekte">
              Projekte ansehen ↓
            </Link>
          </div>
          <div className="hero-foot">
            <span className="hf-label">Projektarten:</span>
            <div className="hf-chip">Webdesign</div>
            <div className="hf-chip">Branding</div>
            <div className="hf-chip">Kampagnen</div>
            <div className="hf-chip">Content</div>
          </div>
        </header>
      </div>

      <ClientMarquee />

      <div className="sheet">
        <section className="band" id="projekte">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">01 — Ausgewählte Arbeiten</span>
              <h2 className="band-title">
                Branchen, die wir <em>digital vorangebracht haben</em>
              </h2>
            </div>
            <p className="band-note">
              Acht Projekte aus Handwerk, Bildung, Transport, Gastronomie und
              Non-Profit — Bildmaterial folgt im echten Aufbau.
            </p>
          </div>
          <div className="proj-grid reveal">
            {projekte.map((p) => (
              <div className="proj-card" key={p.cat}>
                {p.img ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img className="pc-img" src={p.img} alt={`Projekt: ${p.cat}`} />
                ) : (
                  <>
                    <div className="ic-chrome">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className={`ic-body ${p.variant}`}>
                      <div className="ic-bar ic-bar-lg" />
                      <div className="ic-bar ic-bar-sm" />
                      <div className="ic-bar ic-bar-sm" style={{ width: `${p.barWidth}%` }} />
                      <div className="ic-btn" />
                    </div>
                  </>
                )}
                <div className="pc-body">
                  <span className="rc-cat">{p.cat}</span>
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                  <div className="rc-tag">
                    <span>{p.tags}</span>
                    <span>{p.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="band tint" id="beweis">
          <div className="band-tag reveal" style={{ marginBottom: 44 }}>
            02 — Der Beweis
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
                kein Schätzwert. Dazu: spürbar leichtere Mitarbeitergewinnung
                für GM-Dachdecker, deutlich mehr Kursanmeldungen für Stark ins
                Neue.
              </p>
              <cite>{"// VAN DEN BERG GRUPPE, LAUFENDE BETREUUNG"}</cite>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Bewertungen</span>
              <h2 className="band-title">
                Das sagen <em>Kunden über uns</em>
              </h2>
            </div>
          </div>
          <Reviews reviews={reviews} />
        </section>

        <CloseCta>
          Dein Projekt könnte das <em>nächste</em> sein.
        </CloseCta>

        <SiteFooter />
      </div>
    </>
  );
}
