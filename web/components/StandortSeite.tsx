import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import BreadcrumbLd from "@/components/BreadcrumbLd";
import { ArrowIcon, ClientMarquee, CloseCta, ContactStrip, FaqList, RefCard, Reviews, type RefItem } from "@/components/ui";
import type { LegacyLocation } from "@/lib/legacy-locations";
import { getFallstudie } from "@/lib/projekte";
import { getStandortLeistung } from "@/lib/standort-inhalte";
import type { StandortText } from "@/lib/standort-texte";
import { getRegionStadt, locationsOfCity, neighbouringLocations, stadtAnzeige } from "@/lib/standorte";
import { verifiedProjectVoices, type VerifiedReview } from "@/lib/verified-reviews";
import { locationPath, projectPath, routes } from "@/lib/routes";
import { site } from "@/lib/site";

/**
 * Standortseite mit individuellen Texten (lib/standort-texte). Aufbau und
 * Gestaltung entsprechen den Leistungsseiten, der Inhalt ist pro Stadt und
 * Leistung geschrieben. Für Städte ohne eigene Texte bleibt LocationPage.
 */
export default function StandortSeite({ location, text }: { location: LegacyLocation; text: StandortText }) {
  const stadt = stadtAnzeige(location);
  const leistung = getStandortLeistung(location.leistung);
  const region = getRegionStadt(location.stadt);
  const canonical = locationPath(location.slug);
  const geschwister = locationsOfCity(location.stadt).filter((other) => other.slug !== location.slug);
  const nachbarn = neighbouringLocations(location).filter((other) => other.stadt !== location.stadt).slice(0, 6);

  const referenzen: RefItem[] = text.referenzen.slugs
    .map((slug) => getFallstudie(slug))
    .filter((projekt): projekt is NonNullable<typeof projekt> => Boolean(projekt))
    .map((projekt) => ({
      variant: projekt.variant,
      img: projekt.bild,
      href: projectPath(projekt.slug),
      cat: projekt.kunde,
      title: projekt.titel,
      // Kurz statt Teaser: Der Teaser ist auf jeder Seite gleich, die Einordnung
      // steht pro Standortseite in referenzen.note.
      text: projekt.branche,
      tag: `${projekt.tags.join(" · ")} · ${projekt.jahr}`,
    }));

  const stimmen: VerifiedReview[] = text.stimmen
    .map((key) => verifiedProjectVoices[key])
    .filter((stimme): stimme is VerifiedReview => Boolean(stimme));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${canonical}#service`,
    name: `${leistung.kurz} in ${stadt}`,
    serviceType: leistung.key,
    description: text.meta,
    url: `${site.url}${canonical}`,
    areaServed: { "@type": "City", name: stadt },
    provider: {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      telephone: site.phoneIntl,
      address: { "@type": "PostalAddress", streetAddress: "Hüttenstraße 100", postalCode: "56170", addressLocality: "Bendorf", addressCountry: "DE" },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbLd items={[{ name: "Standorte", href: routes.locations }, { name: `${leistung.kurz} in ${stadt}`, href: canonical }]} />

      <main className="service-premium location-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Standorte", page: `${leistung.kurz} in ${stadt}` }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">{leistung.kurz.toUpperCase()} · {stadt.toUpperCase()} · {region?.landkreis.toUpperCase() ?? "REGION KOBLENZ"}</div>
              <h1>
                <span>{leistung.kurz}</span>
                <span className="service-hero-accent">in {stadt}.</span>
                <span>{text.heroLine}</span>
              </h1>
              <p>{text.heroText}</p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Kostenloses Erstgespräch <ArrowIcon />
                </a>
                <Link className="btn-text" href="#ort">
                  {leistung.kurz} in {stadt} ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label={`${leistung.kurz} in ${stadt} auf einen Blick`}>
                {text.proof.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>

            <div className="web-experience-board" aria-label={`Ablauf: ${leistung.kurz}`}>
              <div className="web-board-top">
                <span>{leistung.boardTop}</span>
                <i>{stadt.toUpperCase()}</i>
              </div>
              <div className="system-flow" aria-hidden="true">
                {leistung.flow.map((step, index) => (
                  <div key={step.b}><span>{String(index + 1).padStart(2, "0")}</span><b>{step.b}</b><small>{step.small}</small></div>
                ))}
              </div>
              <div className="web-board-signals">
                {leistung.signals.map((signal, index) => (
                  <div key={signal.b}><span>{String(index + 1).padStart(2, "0")}</span><b>{signal.b}</b><small>{signal.small}</small></div>
                ))}
              </div>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
            <section className="service-summary service-summary-premium reveal theme-light" aria-label={`${leistung.kurz} in ${stadt}: Eckdaten`}>
              <div>
                <span>Leistung</span>
                <strong>{leistung.key}</strong>
              </div>
              <div>
                <span>Für Betriebe in</span>
                <strong>{stadt}</strong>
              </div>
              <div>
                <span>Region</span>
                <strong>{region?.landkreis ?? "Region Koblenz"}</strong>
              </div>
              <div>
                <span>Agentur</span>
                <strong>Pixel56, Region Koblenz</strong>
              </div>
            </section>

            <section className="band theme-light" id="ort">
              <div className="split2">
                <div className="reveal">
                  <span className="band-tag">01 — {text.ort.tag}</span>
                  <h2 className="band-title">
                    {text.ort.title} <em>{text.ort.em}</em>
                  </h2>
                  {text.ort.absaetze.map((absatz) => (
                    <p className="lead" key={absatz.slice(0, 40)}>{absatz}</p>
                  ))}
                </div>
                <div className="mini-grid reveal" aria-label={`Eckdaten zu ${leistung.kurz} in ${stadt}`}>
                  {text.ort.fakten.map((fakt) => (
                    <div key={fakt.b}>
                      <b>{fakt.b}</b>
                      <small>{fakt.small}</small>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="band theme-light" id="bedarf">
              <div className="split2 align-top">
                <div className="reveal">
                  <span className="band-tag">02 — {text.bedarf.tag}</span>
                  <h2 className="band-title">
                    {text.bedarf.title} <em>{text.bedarf.em}</em>
                  </h2>
                  {text.bedarf.absaetze.map((absatz) => (
                    <p className="lead" key={absatz.slice(0, 40)}>{absatz}</p>
                  ))}
                  <Link className="body-link" href={leistung.route}>
                    Alles über {leistung.kurz} bei Pixel56 <ArrowIcon />
                  </Link>
                </div>
                <div className="case-steps reveal" style={{ marginTop: 0 }} aria-label="Was wir dagegen tun">
                  {text.bedarf.punkte.map((punkt, index) => (
                    <div className="case-step" key={punkt}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{punkt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="band dark-stage service-dark-stage" id="konkret">
              <div className="band-head reveal">
                <div>
                  <span className="band-tag">03 — Konkret für {stadt}</span>
                  <h2 className="band-title">
                    {text.konkret.title} <em>{text.konkret.em}</em>
                  </h2>
                </div>
                <p className="band-note">{text.konkret.note}</p>
              </div>
              <div className="premium-process reveal">
                {text.konkret.punkte.map((punkt, index) => (
                  <article key={punkt.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{punkt.title}</h3>
                    <p>{punkt.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="band theme-light" id="referenzen">
              <div className="band-head reveal">
                <div>
                  <span className="band-tag">04 — Passende Projekte</span>
                  <h2 className="band-title">
                    Arbeiten, <em>die zu {stadt} passen</em>
                  </h2>
                </div>
                <p className="band-note">{text.referenzen.note}</p>
              </div>
              <div className="ref-grid-3 reveal">
                {referenzen.map((item) => (
                  <RefCard key={item.cat} item={item} />
                ))}
              </div>
              <div className="section-link-row reveal">
                <Link className="body-link" href={routes.projects}>
                  Alle Kundenprojekte ansehen <ArrowIcon />
                </Link>
              </div>
            </section>

            {(geschwister.length || nachbarn.length) ? (
              <section className="band theme-light" id="weitere">
                <div className="band-head reveal">
                  <div>
                    <span className="band-tag">05 — Weitere Leistungen und Orte</span>
                    <h2 className="band-title">
                      {stadt} <em>und die Nachbarschaft</em>
                    </h2>
                  </div>
                </div>
                <div className="mini-grid reveal">
                  {geschwister.length ? (
                    <div>
                      <b>Weitere Leistungen in {stadt}</b>
                      <small>
                        {geschwister.map((other, index) => (
                          <span key={other.slug}>
                            {index > 0 ? " · " : ""}
                            <Link href={locationPath(other.slug)}>{getStandortLeistung(other.leistung).kurz}</Link>
                          </span>
                        ))}
                      </small>
                    </div>
                  ) : null}
                  {nachbarn.length ? (
                    <div>
                      <b>{leistung.kurz} in der Nachbarschaft</b>
                      <small>
                        {nachbarn.map((other, index) => (
                          <span key={other.slug}>
                            {index > 0 ? " · " : ""}
                            <Link href={locationPath(other.slug)}>{stadtAnzeige(other)}</Link>
                          </span>
                        ))}
                      </small>
                    </div>
                  ) : null}
                </div>
              </section>
            ) : null}

            {stimmen.length ? (
              <section className="band theme-light light-reviews" id="stimmen">
                <div className="band-head reveal">
                  <div>
                    <span className="band-tag">06 — Kundenstimmen</span>
                    <h2 className="band-title">
                      Stimmen <em>aus diesen Projekten</em>
                    </h2>
                  </div>
                </div>
                <Reviews reviews={[]} items={stimmen} />
              </section>
            ) : null}

            <section className="band theme-light" id="faq">
              <div className="band-head reveal">
                <div>
                  <span className="band-tag">07 — Häufige Fragen</span>
                  <h2 className="band-title">
                    {leistung.kurz} in {stadt}: <em>vorher gefragt</em>
                  </h2>
                </div>
              </div>
              <FaqList items={text.faqs} />
            </section>
          </div>
        </div>

        <div className="sheet service-ending">
          <ContactStrip />
          <CloseCta>
            {leistung.kurz} in {stadt}: <em>Lass uns reden.</em>
          </CloseCta>
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
