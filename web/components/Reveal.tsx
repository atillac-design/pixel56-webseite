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

    // Einblenden, sobald irgendein Teil des Abschnitts im Bild ist. Kein
    // Mindestanteil: sehr hohe Abschnitte (z. B. die Projektliste auf dem
    // Handy) erreichen sonst nie die Schwelle und bleiben unsichtbar.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -6% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));

    // Sicherheitsnetz: alles, dessen Oberkante schon im oder über dem
    // Bildschirm liegt, wird eingeblendet, auch wenn der Beobachter es bei
    // schnellem Wischen übersprungen hat.
    let ticking = false;
    function nachziehen() {
      ticking = false;
      const grenze = window.innerHeight * 0.96;
      revealEls.forEach((el) => {
        if (el.classList.contains("in")) return;
        if (el.getBoundingClientRect().top < grenze) {
          el.classList.add("in");
          io.unobserve(el);
        }
      });
    }
    function beiScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(nachziehen);
    }
    nachziehen();
    window.addEventListener("scroll", beiScroll, { passive: true });
    window.addEventListener("resize", beiScroll, { passive: true });

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
      window.removeEventListener("scroll", beiScroll);
      window.removeEventListener("resize", beiScroll);
    };
  }, [pathname]);

  return null;
}
