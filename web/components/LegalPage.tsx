import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

/** Gemeinsames Gerüst für Impressum, Datenschutz, AGB — Inhalte folgen. */
export default function LegalPage({ title }: { title: string }) {
  return (
    <div className="sheet">
      <SiteNav crumb={{ section: "Rechtliches", page: title }} />
      <section className="band" style={{ minHeight: "50vh" }}>
        <span className="band-tag">Rechtliches</span>
        <h1 className="band-title">{title}</h1>
        <p className="lead" style={{ marginTop: 24 }}>
          Der Inhalt dieser Seite wird vor dem Livegang eingepflegt.
        </p>
      </section>
      <SiteFooter />
    </div>
  );
}
