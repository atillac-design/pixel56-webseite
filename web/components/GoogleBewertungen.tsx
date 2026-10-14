import Link from "next/link";
import { type GoogleBewertung, type GoogleStand } from "@/lib/google-bewertungen";
import { projectPath } from "@/lib/routes";

/** Google-Bewertungen mit Sternen: Stand oben, ausgewählte Stimmen mit Bild, alle anderen über den Google-Link. */

const FARBEN = ["#6b5bd6", "#3f80fd", "#f08a2e", "#2f9e8f", "#d82f49", "#8b5cf6", "#e06a8a", "#c48a1a"];
function farbe(name: string): string {
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) % 9973;
  return FARBEN[h % FARBEN.length];
}
function initialen(name: string): string {
  const teile = name.replace(/[^\p{L}\p{N} ]/gu, "").trim().split(/\s+/);
  return teile.slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("") || "G";
}

function Sterne({ n, gross }: { n: number; gross?: boolean }) {
  return (
    <span className={`gb-sterne${gross ? " gross" : ""}`} aria-label={`${n} von 5 Sternen`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.6l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L10 15l-5.3 2.8 1.1-5.9L1.5 7.8l5.9-.8z" fill={i <= n ? "#fbbc04" : "rgba(128,128,128,0.3)"} /></svg>
      ))}
    </span>
  );
}

function GoogleG() {
  return (
    <svg className="gb-g" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285F4" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.2-.1-2.4-.4-3.5z" />
      <path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#FBBC05" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#EA4335" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2C41.4 35.3 44 30 44 24c0-1.2-.1-2.4-.4-3.5z" />
    </svg>
  );
}

function Karte({ b, profilUrl }: { b: GoogleBewertung; profilUrl: string }) {
  return (
    <article className="gb-karte">
      {b.projektBild ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="gb-projektbild" src={b.projektBild} alt="" loading="lazy" decoding="async" />
      ) : null}
      <header className="gb-kopf">
        {b.bild ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className={`gb-avatar${b.bildArt === "logo" ? " logo" : ""}`} src={b.bild} alt="" loading="lazy" decoding="async" />
        ) : (
          <span className="gb-avatar gb-initialen" style={{ background: farbe(b.name) }} aria-hidden="true">{initialen(b.name)}</span>
        )}
        <div>
          <b className="gb-name">{b.name}</b>
          <span className="gb-meta"><Sterne n={b.sterne} /> <span>{b.jahr}</span></span>
        </div>
      </header>
      <p className="gb-text">
        {b.text}
        {b.gekuerzt ? " …" : ""}
      </p>
      <footer className="gb-fuss">
        <span className="gb-quelle">{b.quelle ? `Rezension aus ${b.quelle}` : "Rezension auf Google"}</span>
        {b.gekuerzt && <a href={profilUrl} target="_blank" rel="noopener noreferrer">Weiterlesen ↗</a>}
        {b.projekt && <Link href={projectPath(b.projekt)}>Zum Projekt →</Link>}
      </footer>
    </article>
  );
}

export default function GoogleBewertungen({ stand, bewertungen }: { stand: GoogleStand; bewertungen: GoogleBewertung[] }) {
  return (
    <div className="gb">
      <div className="gb-stand">
        <GoogleG />
        <div className="gb-stand-text">
          <b>{stand.bewertung.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</b>
          <Sterne n={Math.round(stand.bewertung)} gross />
          <span>
            {stand.anzahl} {stand.anzahl === 1 ? "Bewertung" : "Bewertungen"} bei Google
          </span>
        </div>
        <a className="btn-text" href={stand.profilUrl} target="_blank" rel="noopener noreferrer">Alle auf Google ansehen ↗</a>
      </div>
      <div className="gb-grid">
        {bewertungen.map((b) => <Karte key={`${b.name}-${b.jahr}`} b={b} profilUrl={stand.profilUrl} />)}
      </div>
      <div className="gb-mehr">
        <a className="gb-knopf" href={stand.profilUrl} target="_blank" rel="noopener noreferrer">
          Alle {stand.anzahl} Bewertungen auf Google lesen ↗
        </a>
      </div>
    </div>
  );
}
