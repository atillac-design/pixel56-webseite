import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowIcon,
  PulseField,
  StatusPanel,
  CloseCta,
  BrowserMock,
} from "@/components/ui";
import { fallstudien, getFallstudie } from "@/lib/projekte";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return fallstudien.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const f = getFallstudie(slug);
  if (!f) return {};
  return {
    title: `${f.kunde} — Projekt`,
    description: f.teaser,
  };
}

export default async function FallstudiePage({ params }: Props) {
  const { slug } = await params;
  const f = getFallstudie(slug);
  if (!f) notFound();

  return (
    <>
      <div className="sheet">
        <SiteNav crumb={{ section: "Projekte", page: f.kunde }} />

        <header className="hero hero-case" style={{ minHeight: "62vh" }}>
          <PulseField label1={`// ${f.branche.toUpperCase()}`} label2={`// ${f.jahr.toUpperCase()}`} />
          <div className="hero-eyebrow">PROJEKT · {f.kunde.toUpperCase()}</div>
          <h1>
            <span className="in"><span>{f.titel}</span></span>
          </h1>
          <p className="hero-sub">{f.teaser}</p>
          <div className="hero-foot">
            <span className="hf-label">Leistungen:</span>
            {f.tags.map((t) => (
              <div className="hf-chip" key={t}>
                {t}
              </div>
            ))}
          </div>
        </header>
      </div>

      <div className="sheet">
        {f.bild && (
          <section className="band" style={{ paddingTop: 0, paddingBottom: 60 }}>
            <div className="reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="case-img" src={f.bild} alt={`${f.kunde} — ${f.titel}`} />
            </div>
          </section>
        )}

        <section className="band tint-amber">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">01 — Die Ausgangslage</span>
              <h2 className="band-title">{f.problem.titel}</h2>
              <p className="lead">{f.problem.text}</p>
            </div>
            <div className="reveal">
              <StatusPanel
                head={`${f.problem.punkte.length} von ${f.problem.punkte.length} Warnsignalen aktiv`}
                rows={f.problem.punkte.map((p, i) => ({ label: p, tag: `0${i + 1}` }))}
              />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">02 — Die Lösung</span>
              <h2 className="band-title">{f.loesung.titel}</h2>
              <p className="lead">{f.loesung.text}</p>
              <ul className="lines">
                {f.loesung.punkte.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              {f.galerie?.[0] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="case-img" src={f.galerie[0]} alt={`Einblick in das Projekt für ${f.kunde}`} />
              ) : f.bild ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="case-img" src={f.bild} alt={`Einblick in das Projekt für ${f.kunde}`} />
              ) : (
                <BrowserMock variant={f.variant} barWidth={60} />
              )}
            </div>
          </div>
        </section>

        {f.galerie && f.galerie.length > 1 && (
          <section className="band" style={{ paddingTop: 0 }}>
            <div className="band-head reveal">
              <div>
                <span className="band-tag">03 — Einblicke</span>
                <h2 className="band-title">
                  Aus dem <em>Projekt</em>
                </h2>
              </div>
            </div>
            <div className="case-galerie reveal">
              {f.galerie.slice(1).map((g) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={g} alt={`Einblick in das Projekt für ${f.kunde}`} key={g} />
              ))}
            </div>
          </section>
        )}

        {f.ergebnis && (
          <section className="band tint">
            <div className="band-tag reveal" style={{ marginBottom: 44 }}>
              {f.galerie && f.galerie.length > 1 ? "04" : "03"} — Das Ergebnis
            </div>
            {f.ergebnis.statNum ? (
              <div className="stat-block reveal">
                <div className="stat-num" data-label={f.ergebnis.statLabel ?? "ERGEBNIS"}>
                  {f.ergebnis.statNum}
                  <small>%</small>
                </div>
                <div className="stat-copy">
                  <p>{f.ergebnis.text}</p>
                  <cite>{`// ${f.kunde.toUpperCase()}`}</cite>
                </div>
              </div>
            ) : (
              <div className="callout2 reveal">
                <p>
                  <b>Das Ergebnis:</b> {f.ergebnis.text}
                </p>
              </div>
            )}
          </section>
        )}

        {f.stimme && (
          <section className="band tint-violet">
            <div className="split2">
              <div className="reveal">
                <span className="band-tag">Die Zusammenarbeit</span>
                <h2 className="band-title">
                  Das sagt <em>der Kunde</em>
                </h2>
                <p className="lead">
                  Kein Ticket-System, kein Callcenter — während des Projekts gab
                  es einen festen Ansprechpartner, direkt per WhatsApp
                  erreichbar. So arbeiten wir mit jedem Kunden.
                </p>
              </div>
              <div className="reveal">
                <div className="voice-card">
                  <blockquote>„{f.stimme.text}“</blockquote>
                  <div className="voice-person">
                    {f.stimme.img ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={f.stimme.img} alt={f.stimme.name} />
                    ) : (
                      <div className="vp-fallback">{f.stimme.name.slice(0, 1)}</div>
                    )}
                    <div>
                      <b>{f.stimme.name}</b>
                      <span>{f.stimme.rolle}</span>
                    </div>
                    {f.logo && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img className="case-logo" src={f.logo} alt="" style={{ marginLeft: "auto" }} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="band" style={{ paddingBottom: 0 }}>
          <div className="band-head reveal">
            <div>
              <span className="band-tag">Weitere Projekte</span>
              <h2 className="band-title">
                Mehr aus der <em>echten Arbeit</em>
              </h2>
            </div>
            <p className="band-note">
              <Link href="/projekte" className="voice-link">
                Alle Projekte ansehen <ArrowIcon />
              </Link>
            </p>
          </div>
        </section>

        <CloseCta>
          Dein Projekt könnte das <em>nächste</em> sein.
        </CloseCta>

        <SiteFooter />
      </div>
    </>
  );
}
