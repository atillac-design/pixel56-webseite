import { BrowserMock } from "@/components/ui";

/** Google-Suche mit Tipp-Animation und Ergebnisliste. */
export function SearchMock({ query, youTag, others }: { query: string; youTag: string; others: string[] }) {
  return (
    <div className="search-mock">
      <div className="search-bar">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="typed-text">{query}</span>
      </div>
      <div className="search-results">
        <div className="sres you">
          <span>Ihr Unternehmen</span>
          <span className="tag">{youTag}</span>
        </div>
        {others.map((o) => (
          <div className="sres other" key={o}>
            {o}
          </div>
        ))}
      </div>
    </div>
  );
}

const HeartIcon = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 21s-7-4.5-9.5-9C1 8.5 2.5 5 6 5c2 0 3.5 1.2 4 2.5C10.5 6.2 12 5 14 5c3.5 0 5 3.5 3.5 7-2.5 4.5-9.5 9-9.5 9z" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);
const CommentIcon = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M21 12a8 8 0 01-8 8H6l-3 3 .5-4.5A8 8 0 1121 12z" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);
const ShareIcon = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 12l16-8-6 16-2-7-8-1z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

/** Instagram-/Meta-Feed-Post (gesponsert) — optional mit echtem Anzeigenbild. */
export function FeedMock({ imgSrc, wer = "Ihr Unternehmen" }: { imgSrc?: string; wer?: string }) {
  return (
    <div className="feed-mock">
      <div className="fm-head">
        <div className="fm-avatar" />
        <div className="fm-who">
          <b>{wer}</b>
          <span>Gesponsert</span>
        </div>
      </div>
      <div className={imgSrc ? "fm-image has-img" : "fm-image"}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {imgSrc && <img src={imgSrc} alt="Beispiel-Anzeige" />}
      </div>
      <div className="fm-actions">
        {HeartIcon}
        {CommentIcon}
        {ShareIcon}
      </div>
      <div className="fm-caption">
        <b>128 Gefällt mir</b> — Jetzt entdecken →
      </div>
    </div>
  );
}

/** Vertikales Kurzvideo (Reel) — optional mit echtem Video statt Farbverlauf. */
export function ReelMock({ caption = "Ein Tag bei uns im Betrieb", videoSrc }: { caption?: string; videoSrc?: string }) {
  return (
    <div className="reel-mock">
      <div className="rl-frame">
        <div className="rl-video">
          {videoSrc && <video src={videoSrc} autoPlay muted loop playsInline preload="metadata" />}
        </div>
        {!videoSrc && <div className="rl-play" />}
        <div className="rl-side">
          <div className="rl-ic">
            {HeartIcon}
            <span>482</span>
          </div>
          <div className="rl-ic">
            {CommentIcon}
            <span>36</span>
          </div>
          <div className="rl-ic">
            {ShareIcon}
            <span>12</span>
          </div>
        </div>
        <div className="rl-cap">
          <b>Ihr Unternehmen</b>
          <span>{caption}</span>
        </div>
      </div>
    </div>
  );
}

/** Karriereseite mit Direkt-Upload. */
export function JobMock({ title = "Dachdecker (m/w/d)" }: { title?: string }) {
  return (
    <div className="job-mock">
      <span className="jm-tag">Offene Stelle</span>
      <div className="jm-title">{title}</div>
      <div className="jm-line" />
      <div className="jm-line short" />
      <div className="jm-upload">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 16V4M12 4l-4 4M12 4l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        Unterlagen direkt hochladen
      </div>
      <div className="jm-btn">Jetzt bewerben →</div>
    </div>
  );
}

export type CompareRow = { variant: string; barWidth?: number; noBtn?: boolean; label: string };

/** Vorher/Nachher-Vergleich zweier Browser-Mockups. */
export function CompareMock({ rows }: { rows: [CompareRow, CompareRow] }) {
  return (
    <div className="compare-mock">
      <div className="cm-row">
        <BrowserMock variant={rows[0].variant} barWidth={rows[0].barWidth} noBtn={rows[0].noBtn} />
        <span className="cm-label">{rows[0].label}</span>
      </div>
      <div className="cm-arrow">↓</div>
      <div className="cm-row">
        <BrowserMock variant={rows[1].variant} barWidth={rows[1].barWidth} noBtn={rows[1].noBtn} />
        <span className="cm-label">{rows[1].label}</span>
      </div>
    </div>
  );
}

export type FunnelNode = { tag: string; label: string; hot?: boolean };

/** Dreistufiger Funnel: Anzeige → Landingpage → Ergebnis. */
export function Funnel2({ nodes }: { nodes: FunnelNode[] }) {
  return (
    <div className="funnel2 reveal">
      {nodes.map((n, i) => (
        <span key={n.tag} style={{ display: "contents" }}>
          {i > 0 && <div className="fn2-arrow">→</div>}
          <div className={n.hot ? "fn2-node hot" : "fn2-node"}>
            <span className="fn2-tag">{n.tag}</span>
            <b>{n.label}</b>
          </div>
        </span>
      ))}
    </div>
  );
}
