"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Aktiviert die Scroll-Reveal-Animationen (.reveal → .in) und die
 * Count-up-Zahlen in den Live-Metrik-Karten. Läuft einmal pro Seite.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));

    function animateCount(el: HTMLElement) {
      const raw = el.getAttribute("data-target") ?? "0";
      const target = parseFloat(raw);
      const suffix = el.getAttribute("data-suffix") ?? "";
      const decimals = (raw.split(".")[1] ?? "").length;
      let start: number | null = null;
      const dur = 1400;
      function step(ts: number) {
        if (start === null) start = ts;
        const p = Math.min(1, (ts - start) / dur);
        el.textContent = (target * p).toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    const mio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".count")
              .forEach(animateCount);
            mio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    document
      .querySelectorAll(".metric-mock")
      .forEach((el) => mio.observe(el));

    return () => {
      io.disconnect();
      mio.disconnect();
    };
  }, [pathname]);

  return null;
}
