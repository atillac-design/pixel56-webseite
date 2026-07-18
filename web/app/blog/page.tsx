import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { PulseField, CloseCta } from "@/components/ui";
import { getBlogBeitraege } from "@/lib/sanity";
import { artikel as fallbackArtikel } from "@/lib/blog";

// CMS-Inhalte spätestens nach 5 Minuten übernehmen, ohne Neu-Deployment.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Blog — Marketing-Wissen für KMUs",
  description:
    "Der Pixel56-Blog: praxisnahe Tipps zu Webdesign, SEO, Google & Meta Ads und Social Media für KMUs, Handwerker & Selbstständige. Wissen, das wirklich weiterhilft.",
};

// Fallback-Artikel (aus lib/blog), solange kein CMS verbunden ist.
const artikelFallback = fallbackArtikel.map((a) => ({
  cover: a.cover,
  tag: a.kategorie,
  title: a.titel,
  text: a.teaser,
  meta: `${a.kategorie} · ${a.lesezeit} Min. Lesezeit`,
  slug: a.slug,
}));

const freebies = [
  { fl: "Checkliste · PDF", title: "SEO-Checkliste", text: "Die wichtigsten Punkte, die jede Website erfüllen sollte, um bei Google gefunden zu werden — zum Selbst-Abhaken.", href: "/ressourcen/seo-checkliste" },
  { fl: "Checkliste · PDF", title: "KI-Agenten-Checkliste", text: "Wo KI im Betriebsalltag tatsächlich Zeit spart — und wo sie nur Spielerei ist. Ehrlich eingeordnet.", href: "/ressourcen/ki-agenten-checkliste" },
  { fl: "Vorlage · PDF", title: "Tagesplaner", text: "Die Planungs-Vorlage, mit der wir selbst arbeiten — für fokussierte Tage statt Zettelwirtschaft.", href: "/ressourcen/tagesplaner" },
];

export default async function BlogPage() {
  const beitraege = await getBlogBeitraege();
  // Solange das CMS leer ist, bleiben die Fallback-Artikel sichtbar.
  const artikel =
    beitraege && beitraege.length > 0
      ? beitraege.map((b) => ({
          cover: b.coverFarbe,
          tag: b.kategorie,
          title: b.titel,
          text: b.teaser,
          meta: `${b.kategorie} · ${b.lesezeit} Min. Lesezeit`,
          slug: b.slug,
        }))
      : artikelFallback;

  return (
    <>
      <div className="sheet">
        <SiteNav crumb={{ section: "Unternehmen", page: "Blog" }} />

        <header className="hero">
          <PulseField />
          <div className="hero-eyebrow">UNTERNEHMEN · BLOG</div>
          <h1>
            <span className="in"><span>Wissen, das</span></span>
            <span className="in"><span>wirklich weiterhilft.</span></span>
          </h1>
          <p className="hero-sub">
            Keine Marketing-Floskeln, sondern Antworten auf die Fragen, die uns
            Kunden tatsächlich stellen — ehrlich und umsetzbar.
          </p>
          <div className="hero-foot">
            <span className="hf-label">Themen:</span>
            <div className="hf-chip">Website</div>
            <div className="hf-chip">SEO</div>
            <div className="hf-chip">Ads</div>
            <div className="hf-chip">Google Business</div>
          </div>
        </header>
      </div>

      <div className="sheet">
        <section className="band" id="artikel" style={{ paddingTop: 40 }}>
          <div className="band-head reveal">
            <div>
              <span className="band-tag">01 — Aktuelle Artikel</span>
              <h2 className="band-title">
                Fragen, die uns <em>oft erreichen</em>
              </h2>
            </div>
          </div>
          <div className="blog-grid reveal">
            {artikel.map((a) => (
              <Link className="blog-card" href={`/blog/${a.slug}`} key={a.title}>
                <div className={`blog-cover ${a.cover}`} data-tag={a.tag} />
                <h4>{a.title}</h4>
                <p>{a.text}</p>
                <span className="bc-meta">{a.meta}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="band tint-violet" id="ressourcen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Kostenlose Ressourcen</span>
              <h2 className="band-title">
                Zum Mitnehmen, <em>ohne Haken</em>
              </h2>
            </div>
            <p className="band-note">
              Drei Downloads, die sofort weiterhelfen — kostenlos gegen deine
              E-Mail-Adresse.
            </p>
          </div>
          <div className="freebie-grid reveal">
            {freebies.map((f) => (
              <div className="freebie" key={f.title}>
                <span className="fl">{f.fl}</span>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
                <Link className="fbtn" href={f.href}>
                  Kostenlos laden ↓
                </Link>
              </div>
            ))}
          </div>
        </section>

        <CloseCta>
          Lieber direkt <em>fragen?</em>
        </CloseCta>

        <SiteFooter />
      </div>
    </>
  );
}
