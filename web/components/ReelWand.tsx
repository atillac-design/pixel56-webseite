"use client";

import { useRef, useState } from "react";
import type { Reel } from "@/lib/reels";

/**
 * Reel-Wand: Hochkantvideos im Raster. Videos laden erst beim Abspielen
 * (preload="none"), es läuft immer nur eines, Ton erst nach Klick.
 */
export default function ReelWand({ reels }: { reels: Reel[] }) {
  const [aktiv, setAktiv] = useState<number | null>(null);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);

  const abspielen = (i: number) => {
    videos.current.forEach((v, j) => {
      if (!v) return;
      if (j === i) {
        if (v.paused) {
          v.muted = false;
          void v.play();
          setAktiv(i);
        } else {
          v.pause();
          setAktiv(null);
        }
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });
  };

  return (
    <div className="reel-wand">
      {reels.map((r, i) => (
        <figure className={`rw-tile${aktiv === i ? " laeuft" : ""}`} key={r.src}>
          <div className="rw-frame">
            <video
              ref={(el) => { videos.current[i] = el; }}
              src={r.src}
              poster={r.poster}
              preload="none"
              playsInline
              loop
              muted
              onEnded={() => setAktiv(null)}
              onPause={() => setAktiv((a) => (a === i ? null : a))}
            />
            <button type="button" className="rw-play" onClick={() => abspielen(i)} aria-label={aktiv === i ? `${r.titel} anhalten` : `${r.titel} abspielen`}>
              {aktiv === i ? (
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="5" width="4" height="14" rx="1" /><rect x="13" y="5" width="4" height="14" rx="1" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" /></svg>
              )}
            </button>
          </div>
          <figcaption>
            <b>{r.titel}</b>
            <span>{r.kunde ? `${r.kunde} · ` : ""}{r.hinweis}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
