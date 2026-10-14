import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import DetailReihe, { weitereDetails } from "@/components/DetailReihe";
import ProjektFilter from "@/components/ProjektFilter";
import {
  ArrowIcon,
  ClientMarquee,
  CloseCta,
  ContactStrip,
  FaqList,
  Reviews,
} from "@/components/ui";
import { fallstudien, getFallstudie } from "@/lib/projekte";
import { site } from "@/lib/site";
import { projectPath, routes } from "@/lib/routes";
import { verifiedProjectVoices } from "@/lib/verified-reviews";
import GoogleBewertungen from "@/components/GoogleBewertungen";
import { googleAuswahl, holeGoogleStand } from "@/lib/google-bewertungen";
import starkImage from "@/public/bilder/projekt-stark-ins-neue.webp";

export const metadata: Metadata = {
  title: "Kundenprojekte: Websites, Branding & Kampagnen",
  description:
    "Echte Kundenprojekte von Pixel56 aus Handwerk, Transport, Bildung und Non-Profit: Ausgangslage, Umsetzung und unser Beitrag, ohne erfundene Zahlen.",
  alternates: { canonical: routes.projects },
  openGraph: {
    title: "Kundenprojekte von Pixel56",
    description: "Websites, Branding, Meta Ads und Content für Betriebe, die etwas zu zeigen haben. Mit Ausgangslage und Umsetzung, ohne erfundene Zahlen.",
    url: routes.projects,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${site.url}${routes.projects}#collection`,
  url: `${site.url}${routes.projects}`,
  name: "Kundenprojekte von Pixel56",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: fallstudien.map((projekt, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${projekt.kunde}: ${projekt.titel}`,
      url: `${site.url}${projectPath(projekt.slug)}`,
    })),
  },
};

const gemeinsamkeiten = [
  { title: "Ein Ansprechpartner", text: "Jedes Projekt wurde von derselben Person geplant, umgesetzt und betreut. Keine Übergaben, keine stille Post." },
  { title: "Echte Inhalte", text: "Fotos aus dem Betrieb, Texte aus Gesprächen mit dem Inhaber. Keine Stockbilder, die auch beim Wettbewerber hängen könnten." },
  { title: "Ein klares Ziel", text: "Anfragen, Bewerber, Anmeldungen oder Spenden. Jede Seite und jede Kampagne hat eine Aufgabe, an der sie gemessen wird." },
  { title: "Technik, die trägt", text: "Schnelle Ladezeiten, saubere Struktur, mobile Darstellung ohne Kompromisse. Die Basis, damit Inhalte überhaupt gefunden werden." },
  { title: "Betreuung nach dem Start", text: "Viele Projekte laufen seit Jahren weiter: Content, Kampagnen, Anpassungen. Der Livegang war der Anfang." },
  { title: "Eigentum beim Kunden", text: "Domain, Website, Konten und Inhalte gehören dem Unternehmen. Niemand ist an uns gebunden, weil wir den Schlüssel haben." },
];

const ablauf = [
  { nr: "01", title: "Zuhören", text: "Was macht der Betrieb besonders, wer sind die Kunden, wo gehen heute Anfragen verloren? Daraus entsteht die Aufgabe.", gets: "Ergebnis: ein klares Ziel" },
  { nr: "02", title: "Konzept & Struktur", text: "Seitenaufbau, Botschaften, Kampagnenlogik. Als klickbarer Entwurf, nicht als PDF.", gets: "Ergebnis: ein Entwurf zum Prüfen" },
  { nr: "03", title: "Umsetzung", text: "Design, Texte, Technik, Creatives. Mit festen Zwischenständen und Feedback direkt an die Person, die baut.", gets: "Ergebnis: ein Auftritt, der zum Betrieb passt" },
  { nr: "04", title: "Start & Betreuung", text: "Livegang mit sauberer Migration, dann beobachten, auswerten, anpassen. So lange, wie es dem Ziel dient.", gets: "Ergebnis: ein Projekt, das weiterläuft" },
];

const faqs = [
  { q: "Sind das alle Projekte von Pixel56?", a: "Nein. Hier stehen die Projekte, die wir zeigen dürfen und die etwas erklären. Manche Kunden möchten nicht genannt werden, andere Arbeiten sind zu klein für eine eigene Fallstudie." },
  { q: "Warum stehen bei vielen Projekten keine Zahlen?", a: "Weil wir nur Kennzahlen nennen, die der Kunde freigegeben hat und die wir belegen können. Wo das nicht der Fall ist, beschreiben wir die umgesetzte Arbeit, statt einen Erfolg zu behaupten." },
  { q: "Stammen die Kundenstimmen wirklich von den Kunden?", a: "Ja. Wir zeigen ausschließlich Aussagen, die Kunden so veröffentlicht haben. Erfundene oder nachträglich geschönte Bewertungen gibt es auf dieser Website nicht." },
  { q: "Kann ich ein ähnliches Projekt für meinen Betrieb bekommen?", a: "Wenn das Ziel ähnlich ist, ja. Die Umsetzung sieht trotzdem anders aus, weil jedes Projekt aus dem Betrieb heraus entsteht und keine Vorlage ist. Im Erstgespräch klären wir, was bei dir den größten Hebel hat." },
  { q: "Arbeitet ihr nur mit Betrieben aus der Region?", a: "Nein. Viele Projekte stammen aus der Region Koblenz, andere aus anderen Bundesländern. Die Zusammenarbeit läuft ortsunabhängig per Video-Call, Telefon und WhatsApp." },
];

function tagGroups() {
  const groups = new Map<string, string[]>();
  for (const projekt of fallstudien) {
    for (const tag of projekt.tags) {
      const list = groups.get(tag) ?? [];
      list.push(projekt.slug);
      groups.set(tag, list);
    }
  }
  return [...groups.entries()]
    .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0], "de"))
    .slice(0, 6);
}

export default async function ProjektePage() {
  const googleStand = await holeGoogleStand();
  const spotlight = getFallstudie("cass-schulungen");
  const spotlightVoice = verifiedProjectVoices["cass-schulungen"];
  const gruppen = tagGroups();
  const jahre = fallstudien.flatMap((p) => p.jahr.match(/20\d\d/g) ?? []).map(Number);
  const ersteJahr = jahre.length ? Math.min(...jahre) : undefined;

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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="service-premium page-suite projects-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Unternehmen", page: "Projekte" }} />

          <header className="service-premium-hero about-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">KUNDENPROJEKTE · PIXEL56</div>
              <h1>
                <span>Echte Projekte.</span>
                <span className="service-hero-accent">Echte Arbeit.</span>
                <span>Keine Vorlagen.</span>
              </h1>
              <p>
                Vom Karriereportal für einen Dachdecker-Meisterbetrieb bis zur
                Spendengala: {fallstudien.length} Projekte aus Handwerk,
                Transport, Bildung, Immobilien, Gastronomie und Non-Profit. Jede
                Fallstudie beschreibt die Ausgangslage, die Umsetzung und unseren
                Beitrag.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Kostenloses Erstgespräch <ArrowIcon />
                </a>
                <Link className="btn-text" href="#projekte">
                  Projekte ansehen ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="Projektarten">
                <span>Webdesign</span>
                <span>Branding</span>
                <span>Kampagnen</span>
                <span>Content</span>
              </div>
            </div>

            <div className="founder-visual about-hero-visual projects-hero-visual reveal">
              <div className="founder-frame">
                <Image src={starkImage} alt="Website von Stark ins Neue, umgesetzt von Pixel56" priority sizes="(max-width: 1080px) 92vw, 520px" />
              </div>
              <span>// STARK INS NEUE · WEBDESIGN, SEO &amp; META ADS · 2025</span>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="Projekte auf einen Blick">
          <div>
            <span>Projekte</span>
            <strong>{fallstudien.length} Fallstudien</strong>
          </div>
          <div>
            <span>Branchen</span>
            <strong>Handwerk bis Non-Profit</strong>
          </div>
          <div>
            <span>Zeitraum</span>
            <strong>{ersteJahr ? `${ersteJahr} bis heute` : "Laufend"}</strong>
          </div>
          <div>
            <span>Leistungen</span>
            <strong>Web, Branding, Ads, Content</strong>
          </div>
        </section>

        <section className="band theme-light" id="projekte">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">01 — Alle Projekte</span>
              <h2 className="band-title">
                Betriebe, die wir <em>digital sichtbar gemacht haben</em>
              </h2>
            </div>
            <p className="band-note">
              {fallstudien.length} Projekte aus Handwerk, Bildung, Transport,
              Immobilien, Handel und Non-Profit. Jede Karte führt zur
              ausführlichen Fallstudie.
            </p>
          </div>
          <div className="reveal">
            <ProjektFilter
              projekte={fallstudien.map((p) => ({
                slug: p.slug,
                href: projectPath(p.slug),
                kunde: p.kunde,
                titel: p.titel,
                teaser: p.teaser,
                branche: p.branche,
                tags: p.tags,
                jahr: p.jahr,
                bild: p.bild,
                variant: p.variant,
              }))}
            />
          </div>
        </section>

        <section className="band theme-light" id="leistungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Projekte nach Leistung</span>
              <h2 className="band-title">
                Was in den Projekten <em>umgesetzt wurde</em>
              </h2>
            </div>
            <p className="band-note">
              Die meisten Projekte verbinden mehrere Leistungen. Hier siehst du,
              welche Kunden welche Bausteine bekommen haben.
            </p>
          </div>
          <div className="mini-grid cols-3 reveal">
            {gruppen.map(([tag, slugs]) => (
              <div key={tag}>
                <b>{tag} <small style={{ display: "inline", color: "var(--ink-faint)" }}>· {slugs.length} {slugs.length === 1 ? "Projekt" : "Projekte"}</small></b>
                <small>
                  {slugs.map((slug, index) => {
                    const projekt = getFallstudie(slug);
                    if (!projekt) return null;
                    return (
                      <span key={slug}>
                        {index > 0 ? ", " : ""}
                        <Link href={projectPath(slug)}>{projekt.kunde}</Link>
                      </span>
                    );
                  })}
                </small>
              </div>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="gemeinsam">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Was die Projekte verbindet</span>
              <h2 className="band-title">
                Sechs Dinge, <em>die in jedem Projekt stecken</em>
              </h2>
            </div>
            <p className="band-note">
              Unterschiedliche Branchen, unterschiedliche Aufgaben. Die
              Arbeitsweise dahinter ist immer dieselbe.
            </p>
          </div>
          <div className="audience-grid reveal">
            {gemeinsamkeiten.map((item, index) => (
              <article className="audience-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {spotlight ? (
          <section className="band theme-light" id="fallstudie">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">04 — Ein Projekt im Detail</span>
                <h2 className="band-title">
                  {spotlight.kunde}: <em>{spotlight.titel}</em>
                </h2>
              </div>
              <p className="band-note">{spotlight.teaser}</p>
            </div>
            <div className="case-spotlight reveal">
              <div>
                <figure className="case-spotlight-visual" style={{ margin: 0 }}>
                  {spotlight.bild ? (
                    <Image src={spotlight.bild} alt={`${spotlight.kunde}: ${spotlight.titel}`} fill sizes="(max-width: 980px) 100vw, 46vw" />
                  ) : null}
                  <figcaption>{spotlight.kunde} · {spotlight.branche}</figcaption>
                </figure>
                {spotlightVoice ? (
                  <blockquote className="case-quote">
                    „{spotlightVoice.text}“
                    <cite>{spotlightVoice.who}</cite>
                  </blockquote>
                ) : null}
              </div>
              <div>
                <div className="case-steps">
                  <div className="case-step">
                    <span>Ausgangslage</span>
                    <h3>{spotlight.problem.titel}</h3>
                    <p>{spotlight.problem.text}</p>
                  </div>
                  <div className="case-step">
                    <span>Umsetzung</span>
                    <h3>{spotlight.loesung.titel}</h3>
                    <p>{spotlight.loesung.text}</p>
                    <ul>
                      {spotlight.loesung.punkte.map((punkt) => (
                        <li key={punkt}>{punkt}</li>
                      ))}
                    </ul>
                  </div>
                  {spotlight.ergebnis ? (
                    <div className="case-step">
                      <span>Ergebnis</span>
                      <h3>Was heute steht</h3>
                      <p>{spotlight.ergebnis.text}</p>
                    </div>
                  ) : null}
                </div>
                <Link className="body-link" href={projectPath(spotlight.slug)}>
                  Ganze Fallstudie lesen <ArrowIcon />
                </Link>
              </div>
            </div>
            <DetailReihe eintraege={weitereDetails(["cass-schulungen"], ["curlyann", "burgerfabrik"], [])} />
          </section>
        ) : null}

        <section className="band theme-light" id="stimmen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">05 — Stimmen zu den Projekten</span>
              <h2 className="band-title">
                Die Menschen <em>hinter den Projekten</em>
              </h2>
            </div>
            <p className="band-note">
              Kurze Originalauszüge, so veröffentlicht von den Kunden. Dazu der
              erste Punkt, den wir für sie gelöst haben.
            </p>
          </div>
          <div className="voice-grid reveal">
            {stimmen.map((s) => (
              <div className="voice-card" key={s.slug}>
                <blockquote>„{s.text}“</blockquote>
                <div className="voice-person">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.name} loading="lazy" decoding="async" />
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
                <Link className="voice-link" href={projectPath(s.slug)}>
                  Zur Fallstudie <ArrowIcon />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="ablauf">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">06 — So entsteht ein Projekt</span>
              <h2 className="band-title">
                Vier Schritte, <em>vom Gespräch zum Livegang</em>
              </h2>
            </div>
            <p className="band-note">
              Jedes Projekt auf dieser Seite ist so entstanden. Mit festen
              Zwischenständen und einem Ansprechpartner von Anfang bis Ende.
            </p>
          </div>
          <div className="premium-process reveal">
            {ablauf.map((step) => (
              <article key={step.nr}>
                <span>{step.nr}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <small>{step.gets}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="premium-statement band reveal theme-light light-opening" id="ehrlich">
          <span className="band-tag">07 — Warum hier keine Prozentzahlen stehen</span>
          <p>
            Wo keine freigegebenen Kennzahlen vorliegen, beschreiben wir die
            Arbeit, <em>statt einen Erfolg zu behaupten.</em>
          </p>
        </section>

        <section className="band theme-light light-reviews" id="bewertungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">08 — Kundenstimmen</span>
              <h2 className="band-title">
                Was Kunden <em>über die Zusammenarbeit sagen</em>
              </h2>
            </div>
            <p className="band-note">
              Echte Google-Bewertungen, wörtlich übernommen, mit Link zum Original.
            </p>
          </div>
          <GoogleBewertungen stand={googleStand} bewertungen={googleAuswahl} />
        </section>

        <section className="band theme-light" id="faq">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">09 — Häufige Fragen</span>
              <h2 className="band-title">
                Fragen <em>zu den Projekten</em>
              </h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>

          </div>
        </div>

        <div className="sheet service-ending">
          <ContactStrip />
          <CloseCta>
            Dein Projekt könnte das <em>nächste</em> sein.
          </CloseCta>
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
