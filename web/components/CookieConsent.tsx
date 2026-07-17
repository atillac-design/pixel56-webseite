"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "p56-consent";
const GA_ID = "G-24RF0RF9G7";

function ladeAnalytics() {
  if (document.getElementById("ga-src")) return;
  const s = document.createElement("script");
  s.id = "ga-src";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  const inline = document.createElement("script");
  inline.id = "ga-init";
  inline.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`;
  document.head.appendChild(inline);
}

/** DSGVO-konformes Cookie-Banner — Analytics lädt erst nach Zustimmung. */
export default function CookieConsent() {
  const [offen, setOffen] = useState(false);

  useEffect(() => {
    const wahl = localStorage.getItem(KEY);
    if (wahl === "accept") ladeAnalytics();
    else if (wahl !== "decline") setOffen(true);
  }, []);

  function entscheide(wahl: "accept" | "decline") {
    localStorage.setItem(KEY, wahl);
    if (wahl === "accept") ladeAnalytics();
    setOffen(false);
  }

  if (!offen) return null;

  return (
    <div className="consent" role="dialog" aria-label="Cookie-Einstellungen">
      <p>
        Wir nutzen Cookies zur anonymen Statistik (Google Analytics), damit wir
        die Website verbessern können. Nur mit deiner Zustimmung. Mehr in der{" "}
        <Link href="/datenschutz">Datenschutzerklärung</Link>.
      </p>
      <div className="consent-actions">
        <button className="consent-decline" onClick={() => entscheide("decline")}>
          Nur notwendige
        </button>
        <button className="consent-accept" onClick={() => entscheide("accept")}>
          Alle akzeptieren
        </button>
      </div>
    </div>
  );
}
