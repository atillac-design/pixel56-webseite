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
import { fallstudien } from "@/lib/projekte";

export const metadata: Metadata = {
  title: "Projekte & Kundenprojekte",
  description:
    "Echte Kundenprojekte von Pixel56: Webdesign, Branding, Meta Ads & Content für KMUs und Handwerker. 16 Fallstudien mit nachvollziehbaren Ergebnissen — vom Handwerk bis Non-Profit.",
};

const reviews = [
  { text: "Von der ersten Idee bis zum Livegang alles aus einer Hand — schnell, unkompliziert, top Ergebnis.", who: "GM-Dachdecker" },
  { text: "Endlich Wachstum, und wir wissen genau, woher es kommt. Absolute Empfehlung.", who: "Van den Berg Gruppe" },
  { text: "Die neue Website hat sich in wenigen Wochen ausgezahlt. Klare Empfehlung.", who: "Stark ins Neue gGmbH" },
];

// Kundenstimmen mit Gesicht — aus den Fallstudien, ergänzt um Colak GmbH.
const stimmen = [
  ...fallstudien
    .filter((f) => f.stimme?.img)
    .map((f) => ({
      text: f.stimme!.text,
      name: f.stimme!.name,
      rolle: f.stimme!.rolle,
      img: f.stimme!.img,
      logo: f.logo,
      geloest: f.loesung.punkte[0],
      slug: f.slug,
    })),
  {
    text: "Messbare Ergebnisse statt leerer Versprechen — und auch Jahre später noch derselbe Ansprechpartner.",
    name: "Nalan Colak",
    rolle: "Colak GmbH",
    img: "/bilder/person-nalan-colak.webp",
    logo: "/bilder/kunde-colak.png",
    geloest: "Webdesign und laufende digitale Betreuung",
    slug: undefined as string | undefined,
  },
];

export default function ProjektePage() {
  return (
    <>
      <div className="sheet">
        <SiteNav crumb={{ section: "Unternehmen", page: "Projekte" }} />

        <header className="hero">
          <PulseField label1={`// ${fallstudien.length} PROJEKTE AUSGEWÄHLT`} label2="// SEIT 2019 IM EINSATZ" />
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
            <a className="btn-primary" href="https://calendly.com/pixel56/15min" target="_blank" rel="noopener">
              Kostenloses Erstgespräch <ArrowIcon />
            </a>
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
              {fallstudien.length} Projekte aus Handwerk, Bildung, Transport,
              Immobilien, E-Commerce und Non-Profit — jede Karte führt zur
              ausführlichen Fallstudie.
            </p>
          </div>
          <div className="proj-grid reveal">
            {fallstudien.map((p) => (
              <Link className="proj-card" href={`/projekte/${p.slug}`} key={p.slug}>
                {p.bild ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img className="pc-img" src={p.bild} alt={`${p.kunde} — ${p.titel}`} />
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
                      <div className="ic-bar ic-bar-sm" style={{ width: "60%" }} />
                      <div className="ic-btn" />
                    </div>
                  </>
                )}
                <div className="pc-body">
                  <span className="rc-cat">{p.kunde}</span>
                  <h4>{p.titel}</h4>
                  <p>{p.teaser}</p>
                  <div className="rc-tag">
                    <span>{p.tags.join(" · ")}</span>
                    <span>{p.jahr}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="band tint" id="beweis">
          <div className="band-tag reveal" style={{ marginBottom: 44 }}>
            02 — Der Beweis
          </div>
          <div className="stat-copy reveal" style={{ maxWidth: 780, margin: "0 auto" }}>
              <p className="quote" style={{ fontSize: "clamp(24px, 3.4vw, 34px)" }}>
                „Wir haben nicht mehr Budget verbrannt. Wir haben konstant
                gearbeitet — und das hat gereicht.“
              </p>
              <p>
              Van den Berg Gruppe, seit Jahren in laufender Betreuung. Dazu:
              spürbar leichtere Mitarbeitergewinnung für GM-Dachdecker und mehr
              Kursanmeldungen für Stark ins Neue.
              </p>
              <cite>{"// VAN DEN BERG GRUPPE, LAUFENDE BETREUUNG"}</cite>
          </div>
        </section>

        <section className="band tint-violet" id="stimmen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Kundenstimmen</span>
              <h2 className="band-title">
                Echte Gesichter, <em>echte Ergebnisse</em>
              </h2>
            </div>
            <p className="band-note">
              Die Menschen hinter den Projekten — und was wir für sie gelöst
              haben.
            </p>
          </div>
          <div className="voice-grid reveal">
            {stimmen.map((s) => (
              <div className="voice-card" key={s.name}>
                <blockquote>„{s.text}“</blockquote>
                <div className="voice-person">
                  {s.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={s.img} alt={s.name} />
                  ) : (
                    <div className="vp-fallback">{s.name.slice(0, 1)}</div>
                  )}
                  <div>
                    <b>{s.name}</b>
                    <span>{s.rolle}</span>
                  </div>
                  {s.logo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="case-logo" src={s.logo} alt="" style={{ marginLeft: "auto" }} />
                  )}
                </div>
                <div className="voice-solved">
                  <b>Was wir gelöst haben</b>
                  {s.geloest}
                </div>
                {s.slug && (
                  <Link className="voice-link" href={`/projekte/${s.slug}`}>
                    Zur Fallstudie <ArrowIcon />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="band" id="bewertungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Google-Bewertungen</span>
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
