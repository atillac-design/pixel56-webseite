"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { COOKIE_SETTINGS_EVENT } from "@/components/CookieSettingsButton";

const KEY = "p56-consent";
const GA_ID = "G-24RF0RF9G7";

function gespeicherteWahl(): string | null {
  try {
    return window.localStorage?.getItem(KEY) ?? null;
  } catch {
    return null;
  }
}

function speichereWahl(wahl: "accept" | "decline") {
  try {
    window.localStorage?.setItem(KEY, wahl);
  } catch {
    // Bei gesperrtem Speicher bleibt die Entscheidung nur für diese Seite gültig.
  }
}

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

function analyticsAblehnen() {
  const w = window as typeof window & {
    [key: string]: unknown;
    gtag?: (...args: unknown[]) => void;
  };
  w[`ga-disable-${GA_ID}`] = true;
  w.gtag?.("consent", "update", { analytics_storage: "denied" });

  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0]?.trim();
    if (!name || (!name.startsWith("_ga") && name !== "_gid" && name !== "_gat")) return;
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.pixel56.de; SameSite=Lax`;
  });
}

/** DSGVO-konformes Cookie-Banner — Analytics lädt erst nach Zustimmung. */
export default function CookieConsent() {
  const [offen, setOffen] = useState(false);

  useEffect(() => {
    const wahl = gespeicherteWahl();
    if (wahl === "accept") ladeAnalytics();
    else if (wahl !== "decline") setOffen(true);

    const oeffnen = () => setOffen(true);
    window.addEventListener(COOKIE_SETTINGS_EVENT, oeffnen);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, oeffnen);
  }, []);

  function entscheide(wahl: "accept" | "decline") {
    speichereWahl(wahl);
    if (wahl === "accept") ladeAnalytics();
    else analyticsAblehnen();
    setOffen(false);
  }

  if (!offen) return null;

  return (
    <div className="consent" role="dialog" aria-modal="true" aria-label="Cookie-Einstellungen">
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
