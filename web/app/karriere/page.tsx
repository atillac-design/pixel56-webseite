import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, PulseField, WaMock, FaqList } from "@/components/ui";
import { getStellen } from "@/lib/sanity";

// CMS-Inhalte spätestens nach 5 Minuten übernehmen, ohne Neu-Deployment.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Karriere bei Pixel56",
  description:
    "Werde Teil von Pixel56: Jobs in Webdesign, Online-Marketing & Content für spannende KMU-Projekte — remote oder vor Ort in Bendorf bei Koblenz. Jetzt unkompliziert bewerben.",
};

const gruende = [
  { fl: "Grund 1", title: "Deine Arbeit geht live", text: "Websites, Kampagnen und Content für echte Kunden — was du baust, wird veröffentlicht und an echten Zahlen gemessen." },
  { fl: "Grund 2", title: "Kurze Wege, echte Verantwortung", text: "Keine fünf Hierarchie-Ebenen. Wer eine gute Idee hat, setzt sie um — und sieht das Ergebnis direkt beim Kunden." },
  { fl: "Grund 3", title: "Lernen am echten Fall", text: "SEO, Ads, Design, Content — bei uns arbeitest du über Disziplinen hinweg statt in einer einzigen Nische zu versauern." },
];

// Fallback-Stellen, solange kein CMS verbunden ist.
const stellenFallback = [
  { title: "Webdesigner / Webentwickler (m/w/d)", meta: "Vollzeit oder Teilzeit · Bendorf / Remote" },
  { title: "Content Creator — Foto & Video (m/w/d)", meta: "Teilzeit oder Freelance · Region Koblenz" },
  { title: "Werkstudent Performance Marketing (m/w/d)", meta: "Werkstudent · Bendorf / Remote" },
];

const faqs = [
  { q: "Kann ich komplett remote arbeiten?", a: "Je nach Rolle ja — Content-Produktion braucht Vor-Ort-Termine in der Region, Entwicklung und Kampagnen-Arbeit funktionieren auch komplett remote." },
  { q: "Brauche ich ein klassisches Anschreiben?", a: "Nein. Lebenslauf plus Arbeitsproben sagen mehr als jede Floskel-Seite. Wenn du uns etwas mitgeben willst, reichen drei ehrliche Sätze." },
  { q: "Wie schnell bekomme ich eine Antwort?", a: "Innerhalb weniger Tage — wir wissen selbst am besten, wie sehr langsame Antworten gute Kandidaten kosten." },
  { q: "Nehmt ihr auch Quereinsteiger?", a: "Wenn die Arbeitsproben überzeugen, ja. Was du kannst, zählt mehr als wo du es gelernt hast." },
];

export default async function KarrierePage() {
  const cmsStellen = await getStellen();
  // Solange das CMS leer ist, bleiben die Fallback-Stellen sichtbar.
  const stellen =
    cmsStellen && cmsStellen.length > 0
      ? cmsStellen.map((s) => ({ title: s.titel, meta: s.pensum }))
      : stellenFallback;

  return (
    <>
      <div className="sheet">
        <SiteNav crumb={{ section: "Unternehmen", page: "Karriere" }} />

        <header className="hero">
          <PulseField label1="// BENDORF & REMOTE" label2="// BEWERBUNG OHNE UMWEGE" />
          <div className="hero-eyebrow">UNTERNEHMEN · KARRIERE</div>
          <h1>
            <span className="in"><span>Arbeite an Dingen,</span></span>
            <span className="in"><span>die live gehen.</span></span>
            <span className="in"><span>Nicht in Schubladen.</span></span>
          </h1>
          <p className="hero-sub">
            Bei Pixel56 landet deine Arbeit nicht im Konzept-Ordner — sie geht
            online, wird gemessen und macht für echte Betriebe einen
            Unterschied.
          </p>
          <div className="hero-actions">
            <Link className="btn-primary" href="#stellen">
              Offene Stellen ansehen <ArrowIcon />
            </Link>
            <Link className="btn-text" href="#warum">
              Warum Pixel56? ↓
            </Link>
          </div>
          <div className="hero-foot">
            <span className="hf-label">Wie wir arbeiten:</span>
            <div className="hf-chip">Bendorf &amp; Remote</div>
            <div className="hf-chip">Kurze Wege</div>
            <div className="hf-chip">Echte Projekte</div>
          </div>
        </header>
      </div>

      <div className="sheet">
        <section className="band tint-amber" id="warum" style={{ paddingTop: 60 }}>
          <div className="band-head reveal">
            <div>
              <span className="band-tag">01 — Warum Pixel56</span>
              <h2 className="band-title">
                Klein genug für Freiheit, <em>groß genug für Wirkung</em>
              </h2>
            </div>
            <p className="band-note">
              Keine Konzern-Floskeln — drei Dinge, die den Arbeitsalltag hier
              tatsächlich ausmachen.
            </p>
          </div>
          <div className="fact-grid reveal">
            {gruende.map((f) => (
              <div className="fact-cell" key={f.fl}>
                <span className="fl">{f.fl}</span>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="band" id="stellen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Offene Stellen</span>
              <h2 className="band-title">
                Wen wir gerade <em>suchen</em>
              </h2>
            </div>
            <p className="band-note">
              Aktuelle Positionen — remote oder vor Ort in Bendorf bei Koblenz.
            </p>
          </div>
          <div className="job-list reveal">
            {stellen.map((s) => (
              <Link className="job-row" href="#bewerben" key={s.title}>
                <div className="jr-info">
                  <b>{s.title}</b>
                  <span>{s.meta}</span>
                </div>
                <span className="jr-btn">Jetzt bewerben →</span>
              </Link>
            ))}
          </div>
          <p className="job-open-note reveal">
            <b>Nichts Passendes dabei?</b> Initiativbewerbungen sind
            ausdrücklich willkommen — wenn du gut bist in dem, was du tust,
            finden wir heraus, ob es passt.
          </p>
        </section>

        <section className="band" id="bewerben">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">03 — So bewirbst du dich</span>
              <h2 className="band-title">
                Bewerbung <em>ohne Umwege</em>
              </h2>
              <p className="lead">
                Wir bauen Bewerbungswege ohne Hürden für unsere Kunden —
                natürlich gilt das auch für uns selbst. Kein Anschreiben-Roman,
                kein Bewerbungsportal mit zwölf Pflichtfeldern.
              </p>
              <ul className="lines">
                <li>Unterlagen direkt hochladen — ohne E-Mail-Programm.</li>
                <li>Kurzes Formular: wer du bist, was du kannst, was du willst.</li>
                <li>Antwort innerhalb weniger Tage, nicht Wochen.</li>
              </ul>
            </div>
            <div className="reveal">
              <div className="job-mock">
                <span className="jm-tag">Deine Bewerbung</span>
                <div className="jm-title">In 2 Minuten abgeschickt</div>
                <div className="jm-line" />
                <div className="jm-line short" />
                <div className="jm-upload">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 16V4M12 4l-4 4M12 4l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  Lebenslauf &amp; Arbeitsproben hochladen
                </div>
                <div className="jm-btn">Bewerbung absenden →</div>
              </div>
            </div>
          </div>
        </section>

        <section className="band tint-violet">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">04 — Kennenlernen</span>
              <h2 className="band-title">
                Erst reden, <em>dann Papierkram</em>
              </h2>
              <p className="lead">
                Nach deiner Bewerbung folgt ein lockeres Gespräch — per
                Video-Call oder vor Ort in Bendorf. Kein Assessment-Center,
                keine Fangfragen. Wir wollen wissen, wie du denkst und
                arbeitest, nicht wie gut du Bewerbungsratgeber auswendig lernst.
              </p>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 — Atilla"
                messages={[
                  { from: "in", text: "Hi! Ich habe gerade meine Bewerbung abgeschickt 🙂" },
                  { from: "out", text: "Super, schaue ich mir heute an. Hast du diese Woche Zeit für einen kurzen Call?" },
                  { from: "in", text: "Ja, Donnerstag würde passen!" },
                ]}
                footer="So schnell kann Kennenlernen gehen"
              />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">05 — Häufige Fragen</span>
              <h2 className="band-title">
                Was Bewerber <em>wissen wollen</em>
              </h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>

        <section className="close-cta reveal" id="kontakt">
          <div className="close-glow" />
          <h2>
            Klingt nach <em>dir?</em>
          </h2>
          <Link className="btn-primary" href="#stellen">
            Jetzt bewerben <ArrowIcon />
          </Link>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
