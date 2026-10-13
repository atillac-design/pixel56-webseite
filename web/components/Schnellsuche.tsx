"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { SuchEintrag } from "@/lib/suchindex";

/**
 * Schnellsuche über alle Seiten: öffnet sich mit Strg/Cmd+K oder über Elemente
 * mit data-suche-oeffnen. Der Index kommt erst beim ersten Öffnen von
 * /api/suchindex (statische JSON-Datei). Tastatur: Pfeile, Enter, Esc.
 */

const VORSCHLAEGE = ["Webdesign", "Meta Ads", "Website-Check", "Kundenprojekte", "SEO", "Kontakt"];

function normal(s: string): string {
  return s.toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss").replace(/[^a-z0-9\s-]/g, " ").replace(/\s+/g, " ").trim();
}

export default function Schnellsuche() {
  const router = useRouter();
  const [offen, setOffen] = useState(false);
  const [frage, setFrage] = useState("");
  const [index, setIndex] = useState<SuchEintrag[] | null>(null);
  const [aktiv, setAktiv] = useState(0);
  const eingabe = useRef<HTMLInputElement>(null);
  const oeffner = useRef<HTMLElement | null>(null);

  const laden = useCallback(() => {
    if (index) return;
    fetch("/api/suchindex")
      .then((r) => (r.ok ? r.json() : []))
      .then((d: SuchEintrag[]) => setIndex(Array.isArray(d) ? d : []))
      .catch(() => setIndex([]));
  }, [index]);

  const oeffnen = useCallback(() => {
    oeffner.current = document.activeElement as HTMLElement | null;
    setOffen(true);
    laden();
  }, [laden]);
  const schliessen = useCallback(() => {
    setOffen(false);
    setFrage("");
    setAktiv(0);
    oeffner.current?.focus?.();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (offen) schliessen();
        else oeffnen();
      } else if (e.key === "Escape" && offen) {
        schliessen();
      }
    };
    const onClick = (e: MouseEvent) => {
      const ziel = (e.target as Element | null)?.closest?.("[data-suche-oeffnen]");
      if (ziel) {
        e.preventDefault();
        oeffnen();
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [offen, oeffnen, schliessen]);

  useEffect(() => {
    if (!offen) return;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => eingabe.current?.focus(), 30);
    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(t);
    };
  }, [offen]);

  const treffer = useMemo(() => {
    if (!index) return [];
    const q = normal(frage);
    if (!q) return [];
    const woerter = q.split(" ").filter(Boolean);
    return index
      .map((e) => {
        const t = normal(e.titel), x = normal(e.text);
        if (!woerter.every((w) => t.includes(w) || x.includes(w))) return null;
        let punkte = 0;
        if (t === q) punkte += 10;
        else if (t.startsWith(q)) punkte += 5;
        for (const w of woerter) {
          if (t.startsWith(w)) punkte += 4;
          else if (t.includes(w)) punkte += 2;
          if (x.includes(w)) punkte += 1;
        }
        if (e.typ === "Leistung" || e.typ === "Seite") punkte += 2;
        return { e, punkte };
      })
      .filter((r): r is { e: SuchEintrag; punkte: number } => r !== null)
      .sort((a, b) => b.punkte - a.punkte)
      .slice(0, 8)
      .map((r) => r.e);
  }, [index, frage]);

  useEffect(() => setAktiv(0), [frage]);

  const waehlen = (e: SuchEintrag) => {
    schliessen();
    router.push(e.href);
  };

  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setAktiv((a) => Math.min(a + 1, Math.max(treffer.length - 1, 0)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setAktiv((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && treffer[aktiv]) {
      e.preventDefault();
      waehlen(treffer[aktiv]);
    }
  };

  if (!offen) return null;
  return (
    <div className="suche-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) schliessen(); }}>
      <div className="suche-dialog" role="dialog" aria-modal="true" aria-label="Seite durchsuchen">
        <div className="suche-kopf">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><line x1="15.5" y1="15.5" x2="21" y2="21" /></svg>
          <input
            ref={eingabe}
            type="search"
            placeholder="Leistung, Projekt, Artikel oder Stadt suchen …"
            value={frage}
            onChange={(e) => setFrage(e.target.value)}
            onKeyDown={onInputKey}
            aria-label="Suchbegriff"
            aria-controls="suche-liste"
            aria-activedescendant={treffer[aktiv] ? `suche-${aktiv}` : undefined}
            autoComplete="off"
            spellCheck={false}
          />
          <button type="button" className="suche-schliessen" onClick={schliessen} aria-label="Suche schließen"><kbd>Esc</kbd></button>
        </div>

        {frage.trim() === "" ? (
          <div className="suche-leer">
            <span>Häufig gesucht</span>
            <div>
              {VORSCHLAEGE.map((v) => (
                <button type="button" key={v} onClick={() => setFrage(v)}>{v}</button>
              ))}
            </div>
          </div>
        ) : index === null ? (
          <p className="suche-hinweis">Index wird geladen …</p>
        ) : treffer.length === 0 ? (
          <p className="suche-hinweis">Nichts gefunden. Probier ein anderes Wort, oder <a href="/kontakt">frag uns direkt</a>.</p>
        ) : (
          <ul className="suche-liste" id="suche-liste" role="listbox">
            {treffer.map((e, i) => (
              <li
                key={e.href}
                id={`suche-${i}`}
                role="option"
                aria-selected={i === aktiv}
                className={i === aktiv ? "aktiv" : undefined}
                onMouseEnter={() => setAktiv(i)}
                onMouseDown={(ev) => ev.preventDefault()}
                onClick={() => waehlen(e)}
              >
                <span className="suche-typ">{e.typ}</span>
                <span className="suche-text"><b>{e.titel}</b><small>{e.text}</small></span>
                <span className="suche-pfeil" aria-hidden="true">↵</span>
              </li>
            ))}
          </ul>
        )}
        <div className="suche-fuss"><span><kbd>↑</kbd><kbd>↓</kbd> wählen</span><span><kbd>↵</kbd> öffnen</span><span><kbd>Esc</kbd> schließen</span></div>
      </div>
    </div>
  );
}
