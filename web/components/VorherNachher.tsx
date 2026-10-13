"use client";

import { useId, useState } from "react";
import VorherSchema from "@/components/VorherSchema";
import type { VorherArt } from "@/lib/projekte";

/**
 * Vorher-nachher-Vergleich zweier Bilder mit Schieberegler. Der unsichtbare
 * Bereichsregler liegt über dem Bild und macht den Vergleich per Maus, Touch
 * und Tastatur (Pfeiltasten) bedienbar.
 */
export default function VorherNachher({ vorher, vorherArt, nachher, kunde }: { vorher?: string; vorherArt?: VorherArt; nachher: string; kunde: string }) {
  const [pos, setPos] = useState(50);
  const id = useId();
  return (
    <div className="vn-wrap" style={{ "--pos": `${pos}%` } as React.CSSProperties}>
      <div className="vn-bild vn-nachher">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={nachher} alt={`${kunde}: neuer Auftritt`} loading="lazy" decoding="async" />
        <span className="vn-label rechts">Nachher</span>
      </div>
      <div className="vn-bild vn-vorher" aria-hidden="true">
        {vorher ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={vorher} alt="" loading="lazy" decoding="async" />
        ) : (
          <VorherSchema art={vorherArt ?? "keine-website"} kunde={kunde} />
        )}
        <span className="vn-label links">{vorher ? "Vorher" : "Vorher · schematisch"}</span>
      </div>
      <div className="vn-griff" aria-hidden="true">
        <i />
      </div>
      <label className="sr-only" htmlFor={id}>Vergleich zwischen altem und neuem Auftritt verschieben</label>
      <input
        id={id}
        className="vn-regler"
        type="range"
        min={0}
        max={100}
        step={1}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-valuetext={`${pos} Prozent neuer Auftritt sichtbar`}
      />
    </div>
  );
}
