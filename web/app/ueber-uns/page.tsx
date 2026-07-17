import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowIcon,
  PulseField,
  ClientMarquee,
  WaMock,
  CloseCta,
  FaqList,
  Reviews,
} from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über uns — Ein Ansprechpartner statt Callcenter",
  description:
    "Pixel56: kein anonymes Team, ein fester Ansprechpartner in Bendorf bei Koblenz. Persönlich, regional verwurzelt, alles aus einer Hand — für KMUs, Handwerker & Selbstständige.",
};

const prinzipien = [
  { fl: "Prinzip 1", title: "Ehrlichkeit vor Verkauf", text: "Das Erstgespräch ist kostenlos und ergebnisoffen. Wenn eine Leistung nichts bringt, sagen wir das — bevor sie beauftragt wird, nicht danach." },
  { fl: "Prinzip 2", title: "Ergebnisse vor Ästhetik", text: "Schön ist Pflicht, wirksam ist das Ziel. Jede Website und jede Kampagne wird an echten Zahlen gemessen, nicht an Bauchgefühl." },
  { fl: "Prinzip 3", title: "Dranbleiben vor Abliefern", text: "Der Launch ist der Anfang, nicht das Ende. Betreuung ist Teil der Zusammenarbeit — kein Zusatzverkauf danach." },
];

const faqs = [
  { q: "Wer ist mein Ansprechpartner während des Projekts?", a: "Immer dieselbe Person — von der ersten Anfrage bis zur laufenden Betreuung. Keine wechselnden Projektmanager, kein Neu-Erklären." },
  { q: "Arbeitet ihr nur regional in Bendorf und Koblenz?", a: "Der Sitz ist in Bendorf, lokale Betriebe sind uns besonders vertraut. Die Zusammenarbeit läuft aber ortsunabhängig — daher betreuen wir auch Kunden außerhalb der Region." },
  { q: "Kann ich auch persönlich vorbeikommen?", a: "Ja, gerne nach Terminabsprache — Hüttenstraße 100 in Bendorf. Für Content-Produktionen kommen wir umgekehrt auch zu dir in den Betrieb." },
  { q: "Was kostet das Erstgespräch?", a: "Nichts. Es dient dazu, deine Situation ehrlich einzuschätzen — erst danach gibt es ein konkretes, auf dich zugeschnittenes Angebot." },
  { q: "Übernehmt ihr auch nur Teilleistungen?", a: "Ja. Alles aus einer Hand ist ein Angebot, kein Zwang — wer nur SEO, nur Ads oder nur Content braucht, bekommt genau das." },
];

const reviews = [
  { text: "Man merkt sofort: Hier spricht man mit dem, der die Arbeit auch macht. Keine Übergaben, kein Stille-Post-Effekt.", who: "CASS Schulungen" },
  { text: "Ehrliche Beratung von Anfang an — uns wurde sogar von einer Leistung abgeraten, die wir nicht gebraucht hätten.", who: "Colak GmbH", img: "/bilder/person-nalan-colak.webp" },
  { text: "Seit Jahren derselbe Ansprechpartner, immer erreichbar. Das findet man selten.", who: "MA-Transporte" },
];

export default function UeberUnsPage() {
  return (
    <>
      <div className="sheet">
        <SiteNav crumb={{ section: "Unternehmen", page: "Über uns" }} />

        <header className="hero">
          <div className="hero-portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/bilder/team-atilla-quadrat.webp" alt="Atilla Ciftcioglu, Gründer von Pixel56" />
            <span className="hp-tag">Atilla Ciftcioglu · Gründer</span>
          </div>
          <div className="hero-eyebrow">UNTERNEHMEN · ÜBER UNS</div>
          <h1>
            <span className="in"><span>Kein anonymes</span></span>
            <span className="in"><span>Team.</span></span>
            <span className="in"><span>Ein Ansprechpartner.</span></span>
          </h1>
          <p className="hero-sub">
            Hinter jeder Anfrage bei Pixel56 steht jemand, den du beim Namen
            kennst und der ans Telefon geht — kein Callcenter, kein
            Ticket-System.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="https://calendly.com/pixel56/15min" target="_blank" rel="noopener">
              Kostenloses Erstgespräch <ArrowIcon />
            </a>
            <Link className="btn-text" href="#wer">
              Wer dahinter steht ↓
            </Link>
          </div>
          <div className="hero-foot">
            <span className="hf-label">Was uns ausmacht:</span>
            <div className="hf-chip">Persönlich</div>
            <div className="hf-chip">Regional verwurzelt</div>
            <div className="hf-chip">Alles aus einer Hand</div>
          </div>
        </header>
      </div>

      <ClientMarquee />

      <div className="sheet">
        <section className="band tint-amber" id="wer">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">01 — Wer dahinter steht</span>
              <h2 className="band-title">
                Ein Name, <em>kein Callcenter</em>
              </h2>
              <p className="lead">
                Pixel56 wurde aus dem Anspruch gegründet, dass digitale Arbeit
                für kleine und mittlere Unternehmen genauso professionell sein
                kann wie für Konzerne — nur persönlicher. Wer anruft, spricht
                nicht mit einer Hotline, sondern mit dem Menschen, der das
                Projekt tatsächlich umsetzt.
              </p>
              <ul className="lines">
                <li>Direkter Kontakt zum Umsetzer, keine Übergaben zwischen Abteilungen.</li>
                <li>Ehrliche Einschätzungen — auch wenn die Antwort mal „braucht ihr nicht“ lautet.</li>
                <li>Kurze Wege: WhatsApp, Telefon oder vor Ort in Bendorf.</li>
              </ul>
            </div>
            <div className="reveal">
              <div className="profile-mock">
                <div className="pm-top">
                  <div className="pm-avatar">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/bilder/team-atilla.webp" alt="Atilla Ciftcioglu" />
                  </div>
                  <div className="pm-id">
                    <b>Atilla Ciftcioglu</b>
                    <span>
                      <span className="wdot" />
                      Erreichbar
                    </span>
                  </div>
                </div>
                <div className="pm-row"><span>Rolle</span><b>Gründer &amp; Ansprechpartner</b></div>
                <div className="pm-row"><span>Standort</span><b>Bendorf bei Koblenz</b></div>
                <div className="pm-row"><span>Kanal</span><b>WhatsApp · Telefon · vor Ort</b></div>
                <div className="pm-row"><span>Antwortzeit</span><b>meist unter 1 Stunde</b></div>
              </div>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Woran wir glauben</span>
              <h2 className="band-title">
                Drei Prinzipien, <em>keine Floskeln</em>
              </h2>
            </div>
            <p className="band-note">
              Keine Poster-Werte fürs Büro, sondern Regeln, die jede
              Zusammenarbeit tatsächlich prägen.
            </p>
          </div>
          <div className="fact-grid reveal">
            {prinzipien.map((f) => (
              <div className="fact-cell" key={f.fl}>
                <span className="fl">{f.fl}</span>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="band tint" id="beweis">
          <div className="band-tag reveal" style={{ marginBottom: 44 }}>
            03 — Der Beweis
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
                kein Schätzwert — so arbeiten wir mit jedem Kunden: konstant,
                messbar, ohne leere Versprechen.
              </p>
              <cite>{"// VAN DEN BERG GRUPPE, LAUFENDE BETREUUNG"}</cite>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">04 — Der Standort</span>
              <h2 className="band-title">
                Zuhause in Bendorf. <em>Zuhause im Digitalen.</em>
              </h2>
              <p className="lead">
                {site.address} — hier sitzen wir wirklich, hier kann man
                vorbeikommen. Die Zusammenarbeit selbst läuft aber
                ortsunabhängig: per Video-Call, Telefon und WhatsApp betreuen
                wir Kunden aus der ganzen Region und darüber hinaus.
              </p>
              <ul className="lines">
                <li>Lokale Betriebe aus der Region Koblenz sind uns besonders vertraut.</li>
                <li>Vor-Ort-Termine für Content-Produktion und Kennenlernen.</li>
                <li>Ortsunabhängige Betreuung für alle anderen Projekte.</li>
              </ul>
            </div>
            <div className="reveal">
              <div className="map-mock">
                <div className="mm-ring" />
                <div className="mm-ring" />
                <div className="mm-ring" />
                <div className="mm-pin">
                  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <path d="M16 3c-5.8 0-10 4.4-10 9.8C6 19.8 16 29 16 29s10-9.2 10-16.2C26 7.4 21.8 3 16 3z" stroke="currentColor" strokeWidth="2" fill="rgba(255,57,81,0.15)" />
                    <circle cx="16" cy="12.5" r="3.2" fill="currentColor" />
                  </svg>
                </div>
                <div className="mm-label">Hüttenstraße 100 · 56170 Bendorf</div>
                <div className="mm-coords">50.4297° N, 7.5703° O</div>
              </div>
            </div>
          </div>
        </section>

        <section className="band tint-violet">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">05 — Zusammenarbeit</span>
              <h2 className="band-title">
                Ein Ansprechpartner. <em>Ein Kanal.</em>
              </h2>
              <p className="lead">
                Kein Ticket-System, kein Callcenter, keine Rückrufbitte. Während
                der Zusammenarbeit erreichst du deinen festen Ansprechpartner
                direkt per WhatsApp — für schnelle Fragen genauso wie für große
                Entscheidungen.
              </p>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 — Ihr Ansprechpartner"
                messages={[
                  { from: "in", text: "Hast du kurz Zeit für eine Frage zum Projekt?" },
                  { from: "out", text: "Klar, ruf einfach durch — bin am Platz." },
                  { from: "in", text: "👍 Super, mach ich." },
                ]}
                footer="Antwortzeit während der Zusammenarbeit: meist unter 1 Stunde"
              />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">06 — Bewertungen</span>
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
              <span className="band-tag">07 — Häufige Fragen</span>
              <h2 className="band-title">
                Was du vorher <em>wissen willst</em>
              </h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>

        <CloseCta>
          Lern uns <em>kennen.</em>
        </CloseCta>

        <SiteFooter />
      </div>
    </>
  );
}
