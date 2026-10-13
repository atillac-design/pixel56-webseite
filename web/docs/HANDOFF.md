# Übergabe an Claude Code / Codex

## Ziel

Pixel56 soll eine unabhängige, schnelle und hochwertige Website für Webdesign, Meta Ads, Social Content/Reels, Google Ads und sinnvolle KI-Prozesse bekommen. Sie soll besser verkaufen und echte Kundenarbeit zeigen. SEO ist ein wichtiges technisches und redaktionelles Fundament, aber nicht die Hauptleistung von Pixel56.

## Struktur

- `web/` ist bereits der eigene Ordner für die **neue** Seite; `mockups/` sind alte Entwürfe.
- `app/` enthält Seiten, `components/` UI, `lib/` Inhalte/URL-Mappings, `data/legacy-*.json` das öffentliche URL-Inventar, `public/bilder/` Medien.
- `NEXT_PUBLIC_INDEXABLE=true` ist nur für die geprüfte Live-Produktion bestimmt. Vorher bleibt die Seite `noindex`.
- Die aktuellen Webflow-URLs haben Priorität: nach Möglichkeit identisch erhalten, sonst inhaltlich passende 301-Weiterleitung. Keine pauschalen Redirects ganzer Inhaltsgruppen auf allgemeine Übersichtsseiten.
- Die Search-Console-Rohdaten `data/gsc-*` sind bewusst nicht im öffentlichen Repo. Lokal können sie für die SEO-Priorisierung genutzt werden.

## Schon umgesetzt (Stand 13.10.2026)

- Alle Seitentypen laufen über ein gemeinsames Design-System (`app/globals.css`,
  Klassen `service-premium`, `service-premium-hero`, `theme-light`,
  `dark-stage`, `audience-grid`, `mini-grid`, `friction-list`,
  `premium-process`, `case-spotlight`, `ContactStrip`): Startseite, acht
  Leistungsseiten, Über uns, Team, Kontakt, Leistungs- und Projektübersicht,
  17 Projektseiten, Standorte-Übersicht und 291 Standortseiten, Blog mit
  Artikel- und Themenseiten, drei Ressourcen, Karriere, Stellenanzeige, 404,
  die beiden alten Shop-Pfade.
- Kundenstimmen kommen ausschließlich aus `lib/verified-reviews.ts`. Keine
  erfundenen Bewertungen, Kennzahlen oder Projektbilder; Demo-Dashboards sind
  entfernt. Das Abbruch-Creative gehört zur Van den Berg Gruppe und wird als
  Beispiel für Handwerks-Recruiting gezeigt (Hinweis `galerieHinweis`).
- Standortseiten: nur die 13 Städte in `lib/standorte.ts` (`regionStaedte`)
  sind indexierbar und in der Sitemap; alle anderen 226 URLs bleiben
  erreichbar mit `noindex, follow`. Leistungstexte je Stadtseite liegen in
  `lib/standort-inhalte.ts`. Keine Sammelredirects.
- Blog-Themen liegen in `lib/blog.ts` (`blogKategorien`) und decken alte wie
  neue Kategorie-Werte ab, damit jede Themenseite eigene Artikel zeigt.
- Titel höchstens 60 Zeichen inkl. „| Pixel56“, Beschreibungen höchstens 155
  Zeichen, überall genau eine H1, Alt-Texte, Canonicals, Breadcrumb- und
  Organisations-Schema, Sicherheits-Header in `next.config.ts`.
- Google Analytics (`G-24RF0RF9G7`) lädt erst nach Zustimmung im
  Cookie-Hinweis (`components/CookieConsent.tsx`).
- Weitere Medienbedarfe stehen in `docs/MEDIA_PLAN.md`, der laufende Stand in
  `docs/STATUS.md`.

## Nächste Aufgaben

1. Vor dem Livegang durch Atilla: AGB-Text (`app/agb/page.tsx` ist ein
   Platzhalter), Impressum und Datenschutz prüfen; Formulare anschließen
   (MailerLite, Resend, siehe `.env.example`); Search Console für die neue
   Seite einrichten; die 13 Städtetexte und Entfernungen gegenlesen.
2. Echte Fotos und freigegebene Ergebnisse einsammeln und einbauen; Blog-Cover
   sind bislang Farbverläufe.
3. Die 31 aus Webflow übernommenen Blogartikel redaktionell nachschärfen; die
   acht neu geschriebenen in `lib/blog.ts` sind die Messlatte.
4. Nach dem Livegang: Indexierung, 404-Berichte und Rankings in der Search
   Console beobachten; Städte mit echten Klicks in `regionStaedte` aufnehmen.
5. Separates Projekt „KMU-Webseiten“ erst verlinken, wenn Atilla die URL liefert.

Lokal prüfen: `npm ci`, `npm run build`, `npm run seo:check:strict`; danach `npm run start` und in einer zweiten Shell `npm run qa:crawl` (defekte Links, Titel-/Beschreibungslängen, H1, Alt-Texte, Canonicals). Bei Next.js-Änderungen zuerst `AGENTS.md` und die passende Dokumentation im installierten `node_modules/next/dist/docs/` lesen.
