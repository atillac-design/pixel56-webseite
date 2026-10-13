import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { CloseCta, PulseField } from "@/components/ui";
import { artikel } from "@/lib/blog";

const kategorien = {
  "kunstliche-intelligenz": { label: "Künstliche Intelligenz", matches: ["KI"] },
  "marketing-tools": { label: "Marketing-Tools", matches: ["Technik", "Website"] },
  "meta-ads": { label: "Meta Ads", matches: ["Kampagnen"] },
  seo: { label: "SEO", matches: ["SEO", "Lokal", "Technik"] },
  "soziale-medien": { label: "Soziale Medien", matches: ["Kampagnen"] },
  wachstum: { label: "Wachstum", matches: ["Kampagnen", "SEO", "Lokal"] },
  webdesign: { label: "Webdesign", matches: ["Website", "Technik"] },
  webseite: { label: "Webseite", matches: ["Website", "Technik"] },
} as const;

type KategorieSlug = keyof typeof kategorien;
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(kategorien).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const kategorie = kategorien[slug as KategorieSlug];
  if (!kategorie) return {};
  return {
    title: `${kategorie.label} – Wissen für KMUs`,
    description: `Praxisnahe Pixel56-Artikel rund um ${kategorie.label} für KMUs, Handwerker und Selbstständige.`,
    alternates: { canonical: `/blog-kategorien/${slug}` },
  };
}

export default async function BlogKategoriePage({ params }: Props) {
  const { slug } = await params;
  const kategorie = kategorien[slug as KategorieSlug];
  if (!kategorie) notFound();

  const passend = artikel.filter((beitrag) =>
    (kategorie.matches as readonly string[]).includes(beitrag.kategorie),
  );
  const beitraege = passend.length ? passend : artikel;

  return (
    <main className="service-premium service-suite page-suite page-suite-blog">
      <div className="sheet">
      <SiteNav crumb={{ section: "Blog", page: kategorie.label }} />
      <header className="hero service-suite-hero" style={{ minHeight: "55vh" }}>
        <PulseField label1="// PIXEL56 WISSEN" label2={`// ${kategorie.label.toUpperCase()}`} />
        <div className="hero-eyebrow">BLOG-KATEGORIE</div>
        <h1><span className="in"><span>{kategorie.label}.</span></span></h1>
        <p className="hero-sub">Praxiswissen ohne Marketing-Floskeln – verständlich, konkret und für den Betriebsalltag geschrieben.</p>
      </header>
      </div>

      <div className="editorial-shell service-editorial">
        <div className="sheet">
      <section className="band" style={{ paddingTop: 40 }}>
        <div className="blog-grid reveal">
          {beitraege.map((beitrag) => (
            <Link className="blog-card" href={`/blog/${beitrag.slug}`} key={beitrag.slug}>
              <div className={`blog-cover ${beitrag.cover}`} data-tag={beitrag.kategorie} />
              <h3>{beitrag.titel}</h3>
              <p>{beitrag.teaser}</p>
              <span className="bc-meta">{beitrag.kategorie} · {beitrag.lesezeit} Min. Lesezeit</span>
            </Link>
          ))}
        </div>
      </section>
        </div>
      </div>

      <div className="sheet service-ending">
        <CloseCta>Lieber direkt <em>fragen?</em></CloseCta>
        <SiteFooter />
      </div>
    </main>
  );
}
