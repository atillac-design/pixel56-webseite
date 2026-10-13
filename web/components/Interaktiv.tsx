"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Kleine Interaktionen für die ganze Seite, ohne Bibliotheken:
 * 1. Karten neigen sich leicht zum Mauszeiger und bekommen einen Lichtpunkt
 *    (nur bei feinem Zeiger mit Hover, nicht bei reduzierter Bewegung).
 * 2. Lesefortschritt als dünne Linie am oberen Rand auf Blogartikeln.
 */
const KARTEN = ".premium-service-card, .audience-card, .resource-card, .proj-card, .scope-card, .svc-card, .voice-card";
const MAX_NEIGUNG = 4; // Grad

export default function Interaktiv() {
  const pathname = usePathname();

  useEffect(() => {
    const feinerZeiger = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const aufraeumen: (() => void)[] = [];

    if (feinerZeiger && !ruhig) {
      let frame = 0;
      let aktiv: HTMLElement | null = null;
      let letzterEvent: PointerEvent | null = null;

      const anwenden = () => {
        frame = 0;
        if (!aktiv || !letzterEvent) return;
        const r = aktiv.getBoundingClientRect();
        const px = (letzterEvent.clientX - r.left) / r.width;
        const py = (letzterEvent.clientY - r.top) / r.height;
        aktiv.style.setProperty("--sx", `${(px * 100).toFixed(1)}%`);
        aktiv.style.setProperty("--sy", `${(py * 100).toFixed(1)}%`);
        aktiv.style.setProperty("--ry", `${((px - 0.5) * 2 * MAX_NEIGUNG).toFixed(2)}deg`);
        aktiv.style.setProperty("--rx", `${((0.5 - py) * 2 * MAX_NEIGUNG).toFixed(2)}deg`);
      };
      const loslassen = () => {
        if (!aktiv) return;
        aktiv.removeAttribute("data-tilt");
        aktiv.style.removeProperty("--rx");
        aktiv.style.removeProperty("--ry");
        aktiv = null;
      };
      const onMove = (e: PointerEvent) => {
        const karte = (e.target as Element | null)?.closest?.(KARTEN) as HTMLElement | null;
        if (karte !== aktiv) {
          loslassen();
          aktiv = karte;
          if (aktiv) aktiv.setAttribute("data-tilt", "");
        }
        if (!aktiv) return;
        letzterEvent = e;
        if (!frame) frame = window.requestAnimationFrame(anwenden);
      };
      const onLeave = (e: PointerEvent) => {
        if (aktiv && e.target === aktiv) loslassen();
      };
      document.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerout", onLeave, { passive: true });
      aufraeumen.push(() => {
        document.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerout", onLeave);
        if (frame) window.cancelAnimationFrame(frame);
        loslassen();
      });
    }

    const artikel = document.querySelector<HTMLElement>(".article-body");
    if (artikel) {
      const leiste = document.createElement("div");
      leiste.className = "lese-fortschritt";
      leiste.setAttribute("aria-hidden", "true");
      document.body.appendChild(leiste);
      let frame = 0;
      const messen = () => {
        frame = 0;
        const r = artikel.getBoundingClientRect();
        const sichtbar = window.innerHeight;
        const gesamt = r.height - sichtbar * 0.5;
        const gelesen = Math.min(Math.max(-r.top + sichtbar * 0.25, 0), Math.max(gesamt, 1));
        leiste.style.transform = `scaleX(${(gelesen / Math.max(gesamt, 1)).toFixed(4)})`;
      };
      const onScroll = () => {
        if (!frame) frame = window.requestAnimationFrame(messen);
      };
      messen();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      aufraeumen.push(() => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        if (frame) window.cancelAnimationFrame(frame);
        leiste.remove();
      });
    }

    return () => aufraeumen.forEach((f) => f());
  }, [pathname]);

  return null;
}
