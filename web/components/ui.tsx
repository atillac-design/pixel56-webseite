import Link from "next/link";
import { clients } from "@/lib/site";

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function PulseField({ label1, label2 }: { label1?: string; label2?: string }) {
  return (
    <div className="pulse-field" aria-hidden="true">
      <div className="pulse-ring" />
      <div className="pulse-ring" />
      <div className="pulse-ring" />
      <div className="pulse-ring" />
      <div className="pulse-core" />
      {label1 && <div className="pulse-label pl1">{label1}</div>}
      {label2 && <div className="pulse-label pl2">{label2}</div>}
    </div>
  );
}

export function ClientMarquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {clients.map((c) => (
          <span key={c}>{c}</span>
        ))}
        {clients.map((c) => (
          <span key={`${c}-2`} aria-hidden="true">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

export type StatusRow = { label: string; tag: string };

export function StatusPanel({ head, rows }: { head: string; rows: StatusRow[] }) {
  return (
    <div className="status-panel">
      <div className="sp-head">
        <span className="rdot" />
        {head}
      </div>
      {rows.map((r) => (
        <div className="sp-row" key={r.label}>
          <span className="sp-dot" />
          <b>{r.label}</b>
          <span>{r.tag}</span>
        </div>
      ))}
    </div>
  );
}

export type MetricRow = { label: string; value: string; countTo?: string; suffix?: string };

const BAR_HEIGHTS = [38, 52, 44, 68, 60, 82, 100];

export function MetricMock({ head, rows }: { head: string; rows: MetricRow[] }) {
  return (
    <div className="metric-mock">
      <div className="mm-head">
        <span className="wdot" />
        {head}
      </div>
      {rows.map((r) => (
        <div className="metric-row" key={r.label}>
          <span>{r.label}</span>
          {r.countTo ? (
            <b className="count" data-target={r.countTo} data-suffix={r.suffix ?? ""}>
              0{r.suffix ?? ""}
            </b>
          ) : (
            <b>{r.value}</b>
          )}
        </div>
      ))}
      <div className="metric-bars" aria-hidden="true">
        {BAR_HEIGHTS.map((h, i) => (
          <i key={h} style={{ height: `${h}%`, animationDelay: `${0.5 + i * 0.1}s` }} />
        ))}
      </div>
    </div>
  );
}

export type WaMessage = { from: "in" | "out"; text: string };

export function WaMock({ name, messages, footer }: { name: string; messages: WaMessage[]; footer: string }) {
  const classFor = (m: WaMessage, i: number) =>
    m.from === "out" ? "wa-bub out-msg" : i === 0 ? "wa-bub in-msg" : "wa-bub in-msg2";
  return (
    <div className="wa-mock">
      <div className="wa-head">
        <div className="wa-avatar">P56</div>
        <div className="wa-id">
          <b>{name}</b>
          <span className="wa-status">
            <span className="wdot" />
            Online
          </span>
        </div>
      </div>
      <div className="wa-thread">
        {messages.map((m, i) => (
          <div className={classFor(m, i)} key={m.text}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="wa-time">{footer}</div>
    </div>
  );
}

export function BrowserMock({ variant, barWidth = 60 }: { variant: string; barWidth?: number }) {
  return (
    <div className="ic-browser">
      <div className="ic-chrome">
        <span />
        <span />
        <span />
      </div>
      <div className={`ic-body ${variant}`}>
        <div className="ic-bar ic-bar-lg" />
        <div className="ic-bar ic-bar-sm" />
        <div className="ic-bar ic-bar-sm" style={{ width: `${barWidth}%` }} />
        <div className="ic-btn" />
      </div>
    </div>
  );
}

export function CloseCta({ children, ctaHref = "/#kontakt", ctaLabel = "Kostenloses Erstgespräch" }: {
  children: React.ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="close-cta reveal" id="kontakt">
      <div className="close-glow" />
      <h2>{children}</h2>
      <Link className="btn-primary" href={ctaHref}>
        {ctaLabel} <ArrowIcon />
      </Link>
    </section>
  );
}

export type Faq = { q: string; a: string };

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="faq-list reveal">
      {items.map((f) => (
        <details className="faq-item" key={f.q}>
          <summary>
            {f.q}
            <span className="fplus" />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export type Review = { text: string; who: string };

export function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <div className="reviews-wrap reveal">
      <div className="reviews-score">
        <div className="rs-num">4.9</div>
        <div className="rs-stars">★★★★★</div>
        <div className="rs-meta">
          27 Google Bewertungen
          <br />
          Pixel56 · Bendorf
        </div>
      </div>
      <div className="reviews-grid">
        {reviews.map((r) => (
          <div className="review-card" key={r.who}>
            <div className="rc-stars">★★★★★</div>
            <p>„{r.text}“</p>
            <div className="rc-who">{r.who}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
