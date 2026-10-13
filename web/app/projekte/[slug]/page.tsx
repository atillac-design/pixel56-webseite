import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowIcon,
  BrowserMock,
  ClientMarquee,
  CloseCta,
  ContactStrip,
  FaqList,
  RefCard,
  type RefItem,
} from "@/components/ui";
import { fallstudien, getFallstudie, type Fallstudie } from "@/lib/projekte";
import { site } from "@/lib/site";
import { projectPath, routes, serviceRoutes } from "@/lib/routes";
import { verifiedProjectVoices } from "@/lib/verified-reviews";

type Props = { params: Promise<{ slug: string }> };

/** Kürzt Beschreibungen für Suchmaschinen an einer Wortgrenze. */
function kuerzen(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

/** Kleine Zahlen als Wort, wie im Fließtext üblich. */
function zahlwort(n: number): string {
  const woerter = ["Null", "Eine", "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun", "Zehn"];
  return woerter[n] ?? String(n);
}

/** Ordnet Projekt-Tags den Leistungsseiten zu. */
const tagZuLeistung: Record<string, { href: string; titel: string; text: string }> = {
  Webdesign: { href: serviceRoutes.webdesign, titel: "Webdesign", text: "Struktur, Texte, Design und Technik aus einer Hand, mit Blick auf Anfragen statt nur auf Optik." },
  Design: { href: serviceRoutes.webdesign, titel: "Design", text: "Ein Auftritt, der zum Betrieb passt: Farben, Bilder, Tonalität. Vertrauen auf den ersten Blick." },
  Konzeption: { href: serviceRoutes.webdesign, titel: "Konzeption", text: "Seitenaufbau und Botschaften entstehen aus Ziel und Zielgruppe, nicht aus einer Vorlage." },
  Onlineshop: { href: serviceRoutes.webdesign, titel: "Onlineshop", text: "Produkte klar präsentiert, Kaufweg ohne Umwege, Technik, die auch mobil trägt." },
  Branding: { href: serviceRoutes.webdesign, titel: "Branding", text: "Logo, Farben, Schrift und Tonalität als Grundlage für Website, Anzeigen und Content." },
  Logo: { href: serviceRoutes.webdesign, titel: "Logo", text: "Ein Zeichen, das auf Fahrzeug, Website und Visitenkarte gleich gut funktioniert." },
  Print: { href: serviceRoutes.webdesign, titel: "Print", text: "Drucksachen im selben Erscheinungsbild wie der digitale Auftritt." },
  Produktkommunikation: { href: serviceRoutes.webdesign, titel: "Produktkommunikation", text: "Technische Leistungen verständlich erklärt, damit Kunden den Nutzen erkennen." },
  "Meta Ads": { href: serviceRoutes["meta-ads"], titel: "Meta Ads", text: "Facebook- und Instagram-Kampagnen mit Creatives aus dem Betrieb, Zielseite und Tracking." },
  Kampagne: { href: serviceRoutes["meta-ads"], titel: "Kampagne", text: "Zielgruppe, Motiv, Zielseite und Auswertung als ein zusammenhängendes System." },
  Betreuung: { href: serviceRoutes["meta-ads"], titel: "Laufende Betreuung", text: "Optimierung, neue Motive und monatliche Einordnung, kündbar statt gebunden." },
  "Social Media": { href: serviceRoutes["content-produktion"], titel: "Social Media", text: "Reels, Fotos und Beiträge mit festem Rhythmus, aus dem Material des Betriebs." },
  "Social Content": { href: serviceRoutes["content-produktion"], titel: "Social Content", text: "Inhalte, die zeigen, wie der Betrieb wirklich arbeitet, geschnitten für Feed und Story." },
  Reels: { href: serviceRoutes["content-produktion"], titel: "Reels", text: "Kurze Videos aus dem Betriebsalltag, die Vertrauen aufbauen und Reichweite bringen." },
  Landingpage: { href: serviceRoutes["landingpages-funnels"], titel: "Landingpage", text: "Eine Seite, ein Ziel: das Versprechen der Anzeige einlösen und zur Anfrage führen." },
  Event: { href: serviceRoutes["landingpages-funnels"], titel: "Eventmarketing", text: "Anmeldestrecke, Kommunikation und Reichweite für eine Veranstaltung mit klarem Ziel." },
  Recruiting: { href: serviceRoutes.mitarbeitergewinnung, titel: "Recruiting", text: "Kampagnen und Inhalte, die Kandidaten erreichen, die nicht auf Jobbörsen suchen." },
  Karriereportal: { href: serviceRoutes.mitarbeitergewinnung, titel: "Karriereportal", text: "Bewerbung in wenigen Minuten, direkt auf der Website, ohne E-Mail-Programm." },
};

const ablauf = [
  { nr: "01", title: "Zuhören", text: "Was macht den Betrieb besonders, wer sind die Kunden, wo gehen Anfragen verloren? Daraus entsteht die Aufgabe.", gets: "Ergebnis: ein klares Ziel" },
  { nr: "02", title: "Konzept", text: "Struktur, Botschaften, Kampagnenlogik. Als klickbarer Entwurf, nicht als PDF.", gets: "Ergebnis: ein Entwurf zum Prüfen" },
  { nr: "03", title: "Umsetzung", text: "Design, Texte, Technik, Creatives. Mit festen Zwischenständen und Feedback direkt an die Person, die baut.", gets: "Ergebnis: ein Auftritt, der zum Betrieb passt" },
  { nr: "04", title: "Start & Betreuung", text: "Livegang mit sauberer Migration, dann beobachten, auswerten, anpassen. So lange, wie es dem Ziel dient.", gets: "Ergebnis: ein Projekt, das weiterläuft" },
];

function weitereProjekte(aktuell: Fallstudie): Fallstudie[] {
  const andere = fallstudien.filter((p) => p.slug !== aktuell.slug);
  const gleicheBranche = andere.filter((p) => p.branche === aktuell.branche);
  const gleicheTags = andere.filter((p) => !gleicheBranche.includes(p) && p.tags.some((t) => aktuell.tags.includes(t)));
  const rest = andere.filter((p) => !gleicheBranche.includes(p) && !gleicheTags.includes(p));
  return [...gleicheBranche, ...gleicheTags, ...rest].slice(0, 3);
}

function seitenTitel(f: Fallstudie): string {
  const kandidaten = [`${f.kunde}: ${f.titel}`, `${f.kunde}: ${f.tags.slice(0, 2).join(" & ")}`, `${f.kunde}: Projekt`];
  return kandidaten.find((k) => k.length <= 50) ?? kandidaten[2];
}

export function generateStaticParams() {
  return fallstudien.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const f = getFallstudie(slug);
  if (!f) return {};
  return {
    title: seitenTitel(f),
    description: kuerzen(f.teaser, 155),
    alternates: { canonical: projectPath(f.slug) },
    openGraph: {
      title: `${f.kunde}: ${f.titel} | Pixel56`,
      description: kuerzen(f.teaser, 200),
      url: projectPath(f.slug),
      ...(f.bild ? { images: [{ url: `${site.url}${f.bild}` }] } : {}),
    },
  };
}

export default async function FallstudiePage({ params }: Props) {
  const { slug } = await params;
  const f = getFallstudie(slug);
  if (!f) notFound();
  const voice = verifiedProjectVoices[f.slug];
  const leistungen = f.tags.map((tag) => ({ tag, ...(tagZuLeistung[tag] ?? { href: "/dienstleistung", titel: tag, text: "Teil des Projektumfangs." }) }));
  const bilder = [...(f.galerie ?? [])].filter((g) => g !== f.bild);
  const weitere: RefItem[] = weitereProjekte(f).map((p) => ({
    variant: p.variant,
    img: p.bild,
    href: projectPath(p.slug),
    cat: p.kunde,
    title: p.titel,
    text: p.teaser,
    tag: `${p.tags.join(" · ")} · ${p.jahr}`,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${site.url}${projectPath(f.slug)}#projekt`,
    name: `${f.kunde}: ${f.titel}`,
    headline: f.titel,
    description: f.teaser,
    url: `${site.url}${projectPath(f.slug)}`,
    ...(f.bild ? { image: `${site.url}${f.bild}` } : {}),
    about: { "@type": "Organization", name: f.kunde },
    creator: { "@type": "ProfessionalService", "@id": `${site.url}/#organization`, name: site.name, url: site.url },
    keywords: f.tags.join(", "),
  };

  const faqs = [
    { q: "Kann ich ein ähnliches Projekt für meinen Betrieb bekommen?", a: `Wenn dein Ziel dem von ${f.kunde} ähnelt, ja. Die Umsetzung sieht trotzdem anders aus, weil jedes Projekt aus dem Betrieb heraus entsteht und keine Vorlage ist. Im Erstgespräch klären wir, was bei dir den größten Hebel hat.` },
    { q: "Was kostet ein Projekt in dieser Größenordnung?", a: "Das hängt vom Umfang ab: Anzahl der Seiten, Kampagnen, Content, Funktionen. Du bekommst nach dem Erstgespräch ein konkretes Angebot mit Umfang, Ablauf und Preis. Werbebudgets werden getrennt ausgewiesen." },
    { q: "Warum stehen hier keine Prozentzahlen?", a: "Weil wir nur Kennzahlen nennen, die der Kunde freigegeben hat und die wir belegen können. Wo das nicht der Fall ist, beschreiben wir die umgesetzte Arbeit, statt einen Erfolg zu behaupten." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="service-premium projects-premium case-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Projekte", page: f.kunde }} />

          <header className="service-premium-hero about-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">PROJEKT · {f.branche.toUpperCase()} · {f.jahr.toUpperCase()}</div>
              <h1>
                <span className="service-hero-accent">{f.kunde}.</span>
                <span>{f.titel}</span>
              </h1>
              <p>{f.teaser}</p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Ähnliches Projekt besprechen <ArrowIcon />
                </a>
                <Link className="btn-text" href="#ausgangslage">
                  Zum Projekt ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="Leistungen in diesem Projekt">
                {f.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>

            <div className="founder-visual about-hero-visual projects-hero-visual reveal">
              <div className="founder-frame">
                {f.bild ? (
                  <Image src={f.bild} alt={`${f.kunde}: ${f.titel}`} fill priority sizes="(max-width: 1080px) 92vw, 520px" />
                ) : (
                  <div style={{ padding: 28 }}><BrowserMock variant={f.variant} barWidth={60} /></div>
                )}
              </div>
              <span>// {f.kunde.toUpperCase()} · {f.tags.slice(0, 3).join(" · ").toUpperCase()}</span>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="Projekt auf einen Blick">
          <div>
            <span>Kunde</span>
            <strong>{f.kunde}</strong>
          </div>
          <div>
            <span>Branche</span>
            <strong>{f.branche}</strong>
          </div>
          <div>
            <span>Leistungen</span>
            <strong>{f.tags.join(", ")}</strong>
          </div>
          <div>
            <span>Zeitraum</span>
            <strong>{f.jahr}</strong>
          </div>
        </section>

        <section className="band theme-light" id="ausgangslage">
          <div className="split2 align-top">
            <div className="reveal">
              <span className="band-tag">01 — Die Ausgangslage</span>
              <h2 className="band-title">{f.problem.titel}</h2>
              <p className="lead">{f.problem.text}</p>
            </div>
            <div className="case-steps reveal" style={{ marginTop: 0 }} aria-label="Ausgangslage im Detail">
              {f.problem.punkte.map((punkt, index) => (
                <div className="case-step" key={punkt}>
                  <span>Befund {String(index + 1).padStart(2, "0")}</span>
                  <p>{punkt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="loesung">
          <div className="split2 align-top reverse">
            <div className="reveal">
              <span className="band-tag">02 — Die Umsetzung</span>
              <h2 className="band-title">{f.loesung.titel}</h2>
              <p className="lead">{f.loesung.text}</p>
            </div>
            <div className="case-steps reveal" style={{ marginTop: 0 }} aria-label="Umsetzung im Detail">
              {f.loesung.punkte.map((punkt, index) => (
                <div className="case-step" key={punkt}>
                  <span>Baustein {String(index + 1).padStart(2, "0")}</span>
                  <p>{punkt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {bilder.length ? (
          <section className="band theme-light" id="einblicke">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">03 — Einblicke</span>
                <h2 className="band-title">
                  Aus dem <em>Projekt</em>
                </h2>
              </div>
              <p className="band-note">
                {f.galerieHinweis ?? `Ausschnitte aus der Arbeit für ${f.kunde}. Echte Umsetzung, keine Vorlagen.`}
              </p>
            </div>
            <div className={`work-gallery ${bilder.length === 1 ? "work-gallery-single" : bilder.length === 2 ? "work-gallery-pair" : ""} reveal`}>
              {bilder.map((bild, index) => (
                <figure key={bild}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={bild} alt={index === 0 && f.galerieHinweis ? f.galerieHinweis : `Einblick ${index + 1} in das Projekt für ${f.kunde}`} loading="lazy" decoding="async" />
                  <figcaption><b>{f.kunde}</b><span>{index === 0 && f.galerieHinweis ? "Beispiel-Creative" : f.tags[0]}</span></figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {f.ergebnis ? (
          <section className="premium-statement band reveal theme-light light-opening" id="ergebnis">
            <span className="band-tag">{bilder.length ? "04" : "03"} — Das Ergebnis</span>
            <p>
              {f.ergebnis.statNum ? <em>{f.ergebnis.statNum}% {f.ergebnis.statLabel ?? ""}. </em> : null}
              {f.ergebnis.text}
            </p>
          </section>
        ) : null}

        <section className="band theme-light" id="leistungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">{String((bilder.length ? 4 : 3) + (f.ergebnis ? 1 : 0)).padStart(2, "0")} — Was Pixel56 beigetragen hat</span>
              <h2 className="band-title">
                {leistungen.length === 1 ? "Eine Leistung," : `${zahlwort(leistungen.length)} Leistungen,`} <em>ein Verantwortlicher</em>
              </h2>
            </div>
            <p className="band-note">
              Jeder Baustein hat eine eigene Seite mit Ablauf, Bausteinen und
              Fragen. Hier steht, was davon in diesem Projekt steckt.
            </p>
          </div>
          <div className={`mini-grid ${leistungen.length >= 3 ? "cols-3" : ""} reveal`}>
            {leistungen.map((l) => (
              <div key={l.tag}>
                <b>{l.titel}</b>
                <small>{l.text}</small>
                <Link className="body-link" href={l.href}>Mehr zu {l.titel} <ArrowIcon /></Link>
              </div>
            ))}
          </div>
        </section>

        {voice ? (
          <section className="band dark-stage service-dark-stage" id="stimme">
            <div className="split2">
              <div className="reveal">
                <span className="band-tag">Die Zusammenarbeit</span>
                <h2 className="band-title">
                  Das sagt <em>der Kunde</em>
                </h2>
                <p className="lead">
                  Ein fester Ansprechpartner von der ersten Idee bis zur
                  Betreuung, erreichbar per Telefon, WhatsApp und Video-Call.
                  So arbeiten wir mit jedem Kunden.
                </p>
                <p className="lead">
                  Die Aussage stammt aus den auf der bisherigen Website
                  veröffentlichten Kundenstimmen. Wir zeigen nur, was Kunden so
                  gesagt haben.
                </p>
              </div>
              <div className="reveal">
                <div className="voice-card">
                  <blockquote>„{voice.text}“</blockquote>
                  <div className="voice-person">
                    {voice.img ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={voice.img} alt={voice.who} loading="lazy" decoding="async" />
                    ) : (
                      <div className="vp-fallback">{voice.who.slice(0, 1)}</div>
                    )}
                    <div>
                      <b>{voice.who}</b>
                      <span>Kundenstimme</span>
                    </div>
                    {f.logo && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img className="case-logo" src={f.logo} alt="" style={{ marginLeft: "auto" }} loading="lazy" decoding="async" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="band theme-light" id="weitere">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">Weitere Projekte</span>
              <h2 className="band-title">
                Mehr aus der <em>echten Arbeit</em>
              </h2>
            </div>
            <p className="band-note">
              Drei weitere Projekte, die zu diesem passen: gleiche Branche oder
              ähnliche Leistungen.
            </p>
          </div>
          <div className="ref-grid-3 reveal">
            {weitere.map((item) => (
              <RefCard key={item.cat} item={item} />
            ))}
          </div>
          <div className="section-link-row reveal">
            <Link className="body-link" href={routes.projects}>
              Alle Kundenprojekte ansehen <ArrowIcon />
            </Link>
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="ablauf">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">So arbeiten wir in jedem Projekt</span>
              <h2 className="band-title">
                Vier Schritte, <em>vom Gespräch zum Livegang</em>
              </h2>
            </div>
            <p className="band-note">
              Auch dieses Projekt ist so entstanden: mit festen Zwischenständen
              und einem Ansprechpartner von Anfang bis Ende.
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

        <section className="band theme-light" id="faq">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">Häufige Fragen</span>
              <h2 className="band-title">
                Fragen <em>zu diesem Projekt</em>
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
