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
import { projectPath, routes } from "@/lib/routes";
import { verifiedProjectVoices } from "@/lib/verified-reviews";

export const metadata: Metadata = {
  title: "Projekte & Kundenprojekte",
  description:
    "Echte Kundenprojekte von Pixel56: Webdesign, Branding, Meta Ads & Content für KMUs und Handwerker. Einblicke in ausgewählte Arbeiten vom Handwerk bis Non-Profit.",
  alternates: { canonical: routes.projects },
};

const reviews = [
  { text: "Von der ersten Idee bis zum Livegang alles aus einer Hand — schnell, unkompliziert, top Ergebnis.", who: "GM-Dachdecker" },
  { text: "Endlich Wachstum, und wir wissen genau, woher es kommt. Absolute Empfehlung.", who: "Van den Berg Gruppe" },
  { text: "Die neue Website hat sich in wenigen Wochen ausgezahlt. Klare Empfehlung.", who: "Stark ins Neue gGmbH" },
];

// Nur kurze, auf der bisherigen Website veröffentlichte Originalauszüge.
const stimmen = fallstudien.flatMap((f) => {
  const voice = verifiedProjectVoices[f.slug];
  if (!voice?.img) return [];
  return [{
    text: voice.text,
    name: voice.who.split(" · ")[0],
    rolle: f.kunde,
    img: voice.img,
    logo: f.logo,
    geloest: f.loesung.punkte[0],
    slug: f.slug,
  }];
});

export default function ProjektePage() {
  return (
    <main className="service-premium service-suite page-suite page-suite-projects">
      <div className="sheet">
        <SiteNav crumb={{ section: "Unternehmen", page: "Projekte" }} />

        <header className="hero service-suite-hero">
          <PulseField label1={`// ${fallstudien.length} PROJEKTE AUSGEWÄHLT`} label2="// SEIT 2019 IM EINSATZ" />
          <div className="hero-eyebrow">UNTERNEHMEN · PROJEKTE</div>
          <h1>
            <span className="in"><span>Echte Projekte.</span></span>
            <span className="in"><span>Echte Einblicke.</span></span>
            <span className="in"><span>Klare Leistungen.</span></span>
          </h1>
          <p className="hero-sub">
            Vom Dachdecker-Karriereportal bis zur Spendengala — jedes Projekt
            hier zeigt echte Kundenarbeit und unseren Beitrag zum Projekt.
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

      <div className="editorial-shell service-editorial">
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
              <Link className="proj-card" href={projectPath(p.slug)} key={p.slug}>
                {p.bild ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img className="pc-img" src={p.bild} alt={`${p.kunde} — ${p.titel}`} loading="lazy" decoding="async" />
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
            02 — Unsere Arbeit
          </div>
          <div className="stat-copy reveal" style={{ maxWidth: 780, margin: "0 auto" }}>
            <p className="quote" style={{ fontSize: "clamp(24px, 3.4vw, 34px)" }}>
              Vom ersten Konzept bis zur laufenden Betreuung.
            </p>
            <p>
              Die Projekte zeigen Websites, Kampagnen, Content und
              Anmeldestrecken im realen Einsatz. Wo keine freigegebenen
              Kennzahlen vorliegen, beschreiben wir die umgesetzte Arbeit
              statt einen Erfolg zu behaupten.
            </p>
          </div>
        </section>

        <section className="band tint-violet" id="stimmen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Kundenstimmen</span>
              <h2 className="band-title">
                Echte Gesichter, <em>echte Stimmen</em>
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
                    <img src={s.img} alt={s.name} loading="lazy" decoding="async" />
                  ) : (
                    <div className="vp-fallback">{s.name.slice(0, 1)}</div>
                  )}
                  <div>
                    <b>{s.name}</b>
                    <span>{s.rolle}</span>
                  </div>
                  {s.logo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="case-logo" src={s.logo} alt="" style={{ marginLeft: "auto" }} loading="lazy" decoding="async" />
                  )}
                </div>
                <div className="voice-solved">
                  <b>Was wir gelöst haben</b>
                  {s.geloest}
                </div>
                {s.slug && (
                  <Link className="voice-link" href={projectPath(s.slug)}>
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
              <span className="band-tag">04 — Kundenfeedback</span>
              <h2 className="band-title">
                Das sagen <em>Kunden über uns</em>
              </h2>
            </div>
          </div>
          <Reviews reviews={reviews} />
        </section>

        </div>
      </div>

      <div className="sheet service-ending">
        <CloseCta>
          Dein Projekt könnte das <em>nächste</em> sein.
        </CloseCta>
        <SiteFooter />
      </div>
    </main>
  );
}
