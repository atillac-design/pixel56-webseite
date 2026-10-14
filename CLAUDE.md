# Pixel56-Website – Anleitung für KI-Assistenten

> **Zuerst `web/docs/KURZBRIEFING.md` lesen** (unter 150 Zeilen): aktueller
> Stand, Entscheidungen des Inhabers, offene Punkte. Das ersetzt das Lesen
> des Chatverlaufs. Erst wenn dort etwas fehlt, in `web/docs/STATUS.md`
> (ausführliches Protokoll) oder `web/docs/HANDOFF.md` nachschlagen.
> **Am Ende jedes Arbeitsschritts das Kurzbriefing aktualisieren**, damit die
> nächste Sitzung ohne Verlauf weitermachen kann.

Pixel56 ist die Agentur von Atilla Ciftcioglu (Webdesign, Meta Ads, Content,
Google Ads, Landingpages, Mitarbeitergewinnung, SEO, KI-Automatisierung).
Dieses Repo enthält die **neue, Webflow-unabhängige Website** (Next.js 16,
App Router, statisch gebaut) im Ordner `web/`. `mockups/` ist Archiv.
Der Inhaber ist **kein Programmierer**: auf Deutsch antworten, Änderungen in
einfachen Worten erklären, technische Entscheidungen selbst sicher treffen.
Vorschau zur Abnahme: https://pixel56-neue-seite.netlify.app/ (Netlify baut
den Arbeitszweig automatisch; aus der Sandbox ist die Adresse nicht erreichbar).

## Eiserne Regeln

1. **Nur Zweig `codex/pixel56-neue-seite`.** Dort entwickeln, committen und
   mit `git push -u origin codex/pixel56-neue-seite` pushen. Nie auf andere
   Zweige pushen, keine Pull Requests ohne Auftrag.
2. **Nur belegte Inhalte.** Keine erfundenen Bewertungen, Kennzahlen,
   Ergebnisse oder Projektbilder. Kundenstimmen nur aus
   `web/lib/verified-reviews.ts` und `web/lib/google-bewertungen.ts`
   (Google-Texte wörtlich; gekürzte enden dort, wo Google kürzt, und
   verlinken „Weiterlesen“). Demo-Daten immer sichtbar als Beispiel
   kennzeichnen. Keine KI-generierten Bilder ohne Kennzeichnung.
3. **Kein Standort-Hinweis auf Bendorf** im sichtbaren Text (keine
   Besucher vor Ort). Erlaubt: „aus Koblenz“, „bei Koblenz“, Region.
   Straße nur in Impressum, Datenschutz und im unsichtbaren Schema.
   Kontaktwege: WhatsApp, E-Mail, Calendly-Termin.
4. **Interne Geschäftszahlen des Inhabers** (aus seiner „Zentrale“, Umsatz,
   Kundenzahlen) erscheinen nie auf der Seite.
5. **Sprache:** du-Form überall, deutsche UI-Texte und Kommentare.
   Keine KI-Modellnamen oder -IDs in Code, Commits oder Doku.
6. **Lokal bleiben:** `web/data/gsc-*` und `.env*` nie committen.
   `NEXT_PUBLIC_INDEXABLE=true` nur für die geprüfte Produktion.
7. **Webflow nur lesend.** Das alte Angebot bleibt bis zur Abnahme unangetastet.
8. **Netlify-Funktionen brechen nach 10 s ab** → serverseitige Routen
   (z. B. Website-Check) halten ein Gesamtbudget unter 10 s ein.

## Vor jedem Push

```bash
cd web && npm run build            # muss fehlerfrei durchlaufen (~745 Seiten)
npm run seo:check:strict           # bei Änderungen an URLs/Metadaten
npm run start                      # dann Screenshots/Klicktests mit Playwright
```

Playwright in der Sandbox: `chromium.launch({ executablePath:
"/opt/pw-browsers/chromium-1194/chrome-linux/chrome" })`, Module über
`createRequire(import.meta.url)("/opt/node22/lib/node_modules/playwright")`.
Externe Domains sind gesperrt (Netlify, Kundenseiten, APIs) – nur WebSearch
geht. `pkill` auf den eigenen Server beendet die Shell mit Code 144, das ist
harmlos; Server als eigenen Hintergrundbefehl starten.

## Wo was liegt (`web/`)

- `app/` Seiten: `/` Start, `/leistungen/*` (8 Leistungen), `/projekte/[slug]`
  (17 Fallstudien), `/standorte/*` (13 indexierbar, Rest noindex), `/blog`,
  `/ressourcen`, `/kontakt`, `/ueber-uns`, `/karriere`, `/website-check`.
- `lib/projekte.ts` Fallstudien (Felder u. a. `website`, `galerieAnzeigen`),
  `lib/google-bewertungen.ts` (`googleAuswahl`, `holeGoogleStand()`),
  `lib/verified-reviews.ts`, `lib/standorte.ts`, `lib/blog.ts`, `lib/reels.ts`,
  `lib/ressourcen.ts`.
- `components/DetailReihe.tsx` („Ein Projekt im Detail“, mehrere Projekte),
  `GoogleBewertungen.tsx`, `ZentraleSzene.tsx` + `ZentraleDemo.tsx`
  (klickbare Beispiel-Zentrale auf der KI-Seite), `SiteFooter.tsx`, `ui.tsx`.
- `app/globals.css` Design-System; Schrift Figtree lokal
  (`assets/fonts/figtree-latin.woff2`, in `app/layout.tsx`).
- `app/api/website-check/route.ts` (8-s-Budget), `.env.example` (MailerLite,
  Resend, Google Places).
- `public/bilder/` nur freigegebene Fotos/Screenshots.
- Repo-Wurzel: `netlify.toml` (base `web`, Node 22, Next-Plugin).
