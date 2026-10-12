"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { routes } from "@/lib/routes";

type Crumb = { section: string; page: string };

export default function SiteNav({ crumb }: { crumb?: Crumb }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [menuOpen]);

  return (
    <nav className="site-nav">
      <Link className="mark" href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/bilder/logo-pixel56.webp" alt="Pixel56" />
      </Link>
      {crumb ? (
        <div className="crumb">
          {crumb.section} <b>/</b> <b>{crumb.page}</b>
        </div>
      ) : (
        <div className="nav-links">
          <Link href="/#leistungen">Leistungen</Link>
          <Link href={routes.projects}>Projekte</Link>
          <Link href={routes.about}>Über Pixel56</Link>
        </div>
      )}
      <button
        className="nav-mobile-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="pixel56-mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "Schließen" : "Menü"}
        <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
      </button>
      <Link className="nav-cta" href={routes.contact}>
        Projekt anfragen
      </Link>
      <div className={`nav-mobile-panel${menuOpen ? " is-open" : ""}`} id="pixel56-mobile-menu" inert={!menuOpen}>
        <span className="nav-mobile-label">Leistungen</span>
        <Link href="/webdesign" onClick={() => setMenuOpen(false)}>Webdesign</Link>
        <Link href="/facebook-meta-ads" onClick={() => setMenuOpen(false)}>Meta Ads</Link>
        <Link href="/social-media-content" onClick={() => setMenuOpen(false)}>Content &amp; Reels</Link>
        <Link href="/ki-automatisierung" onClick={() => setMenuOpen(false)}>KI-Prozesse</Link>
        <span className="nav-mobile-label">Pixel56</span>
        <Link href={routes.projects} onClick={() => setMenuOpen(false)}>Projekte</Link>
        <Link href={routes.about} onClick={() => setMenuOpen(false)}>Über Pixel56</Link>
        <Link href={routes.blog} onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link href={routes.contact} onClick={() => setMenuOpen(false)}>Kontakt</Link>
      </div>
    </nav>
  );
}
