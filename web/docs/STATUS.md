# Status — 13.10.2026

Ergänzt [`HANDOFF.md`](HANDOFF.md) und das [README](../../README.md) um den
Stand der Zusammenführung und um Befunde, die nur über die Webflow-API und
GitHub sichtbar waren. Reihenfolge der offenen Punkte = Priorität.

## Grundsatz

Die neue Seite ist eine eigenständige Next.js-Anwendung in `web/` und hängt an
keiner Webflow-Funktion. Webflow ist ausschließlich die **Quelle für das
Inventar der alten URLs** (`data/legacy-*.json`), damit bestehende Rankings
beim Domainwechsel per identischem Pfad oder 301-Weiterleitung weitergeführt
werden. Am Webflow-Angebot wird bis zur Abnahme der neuen Seite nichts
verändert, auch kein Publish. Lesende API-Zugriffe sind davon nicht betroffen.

## Was zuletzt passiert ist

- 13.10.2026: **Standort-Lücke im Migrationsmanifest geschlossen.** Atilla hat
  im Browser bestätigt, dass `https://www.pixel56.de/locations/vallendar-seo`
  lädt; die 125 im Juli 2026 einzeln publizierten Standortseiten sind also
  live und hätten nach dem Domainwechsel 404 geliefert. Die 291 Items der
  Webflow-Collection „Locations“ wurden per API **nur gelesen** und mit dem
  neuen Skript `scripts/merge-cms-locations.mjs` in Manifest und Inhalte
  übernommen. Details unter „Erledigt“.
- 13.10.2026: Dabei zwei Scrape-Artefakte auf allen Standortseiten entfernt
  (siehe „Erledigt“).
- 13.10.2026: **Blog-Frage geklärt.** Die 4 CMS-Artikel, die nicht im Manifest
  stehen, sind unveröffentlichte Entwürfe (`isDraft`, kein `lastPublished`):
  `5-haufige-fehler-auf-webseiten-von-kleinen-unternehmen-und-wie-du-sie-vermeidest`,
  `ai-agenten-kmu-marketing-2025`,
  `erfolgreiche-social-media-strategien-dienstleister-e-commerce`,
  `wie-eine-gepflegte-website-google-sichtbarkeit-steigert`. Das Manifest mit
  31 Blog-URLs ist vollständig.
- 13.10.2026: `codex/pixel56-neue-seite` per Fast-Forward auf `876f969`
  gezogen; der Arbeitsbranch enthält damit auch STATUS.md. Die Commits vom
  13.10. liegen nur auf `codex/pixel56-neue-seite`; der GitHub-Default-Branch
  `claude/zen-dirac-z9djvd` ist dahinter und per Fast-Forward nachziehbar.
- 13.10.2026: `npm audit fix` ausgeführt. Nur `package-lock.json` geändert,
  `package.json` unverändert. Vorher 4 Schwachstellen (1 kritisch, 3 hoch),
  nachher 0. Die kritische betraf Next.js 16.3.0 bis 16.3.7, u. a. Remote Code
  Execution in der Bildoptimierung und Cache Poisoning bei SSG/ISR, also genau
  den Betrieb auf Netlify.

  | Paket | vorher | nachher |
  | --- | --- | --- |
  | next | 16.3.0 | 16.4.0 |
  | sharp | 0.35.3 | 0.35.5 |
  | source-map-js | 1.2.1 | 1.2.2 |
  | undici (Abhängigkeit von `@sanity/client`) | 7.29.0 | 7.30.0 |

- 12.10.2026: `codex/pixel56-neue-seite` wurde als reiner Fast-Forward in
  `claude/zen-dirac-z9djvd` übernommen (Stand `b94ff80`). Die Historien liefen
  nicht auseinander, es gab keine Konflikte: die Codex-Arbeit setzt direkt auf
  dem vorherigen Commit `17e597c` vom 23.07.2026 auf. Pull Requests, Issues
  und Tags gibt es im Repo keine.

## Verifiziert am 13.10.2026

`npm ci && npm run build && npm run seo:check:strict` läuft fehlerfrei durch
(Node 22.22.0, npm 10.9.4), zuletzt nach dem Standort-Merge.

- **Build:** TypeScript ohne Fehler, 386 statisch erzeugte Seiten, darunter
  291 Standorte, 35 Blogartikel, 17 Projekte, 8 Blog-Kategorien, 3 Ressourcen.
  `/api/kontakt`, `/api/lead` und `/studio` sind dynamisch.
- **SEO-Check strict:** 365 Bestands-URLs inventarisiert, 21 Kernseiten, 10
  Portfolio-Einzelmappings, 2 GSC-Redirects, 291 Standort-URLs direkt
  erreichbar. Keine Fehler, keine Warnungen.
- **Stichprobe `/standorte/vallendar-seo`** (öffentlich unter
  `/locations/vallendar-seo` per Rewrite): Titel, Meta-Beschreibung,
  Canonical `/locations/vallendar-seo`, `noindex` (Schalter nicht gesetzt),
  lokaler Text aus dem CMS vorhanden, kein Slug-Artefakt.
- **Erwartete Build-Meldung:** „Sanity nicht erreichbar, nutze statische
  Inhalte“ erscheint dreimal. In der Cloud-Session sperrt die
  Netzwerk-Richtlinie die Sanity-API; der statische Fallback greift und der
  Build bleibt grün. Lokal mit Netz erscheint die Meldung nicht.

## Erledigt: Migrationsmanifest kennt jetzt alle 291 Standortseiten

Ausgangslage (Webflow-API, 12.10.2026): 291 Standort-Items im CMS, 166 im
Manifest. Die 166 bekannten wurden im Mai 2025 angelegt und standen in der
Sitemap vom 13.08.2026; die 125 fehlenden wurden im Juli 2026 angelegt und
einzeln publiziert. Webflow erzeugt `sitemap.xml` nur beim Publish der
gesamten Site (zuletzt 03.07.2026), deshalb fehlten sie. Die Live-Prüfung von
außen (Cloud-Session: `pixel56.de` durch Netzwerk-Richtlinie gesperrt) hat
Atilla am 13.10.2026 übernommen: die Seiten laden.

| Variante (Slug-Endung) | in Webflow | vorher im Manifest | ergänzt |
| --- | --- | --- | --- |
| nur Stadt (`aachen`) | 83 | 68 | 15 |
| `-google-ads` | 83 | 44 | 39 |
| `-meta-ads` | 83 | 54 | 29 |
| `-seo` | 29 | 0 | 29 |
| `-social-media` | 13 | 0 | 13 |
| **Summe** | **291** | **166** | **125** |

Umsetzung ohne Webflow-Publish:

- `scripts/merge-cms-locations.mjs <export.json>` liest einen Export der
  Collection-Items (Webflow Data API v2 oder MCP, der Export bleibt wie die
  Sitemap-Datei lokal) und ergänzt fehlende veröffentlichte Items im
  Manifest als `location`/`review` mit Herkunftsvermerk in `note`. Das
  Manifest trägt zusätzlich ein `supplements`-Feld mit Quelle und Zeitpunkt.
  Idempotent; ein zweiter Lauf ändert nichts.
- Die Inhalte in `data/legacy-locations.json` entstehen aus den CMS-Feldern
  (`ort`, `keyword`, `seo-titel`, `seo-beschreibung`, `lokaler-content`,
  `warum-titel-1..3`, `warum-text-1..3`) plus der für alle Standorte
  identischen Seitenvorlage, abgeleitet aus einem vorhandenen Eintrag. Die
  Zuordnung wurde an allen 166 gescrapten Einträgen geprüft: 0 Abweichungen.
  Das Option-Feld `service` ist im CMS überall leer, die Leistung steht in
  `keyword`.
- Zwei Scrape-Artefakte wurden auf allen 291 Einträgen entfernt: eine `h2`,
  die nur den URL-Slug enthielt (z. B. „aachen“), und die Einstreuung
  „<slug> <Leistung>“ in einem Fließtext-Absatz. Die Bereinigung liegt in
  `scripts/legacy-location-blocks.mjs` und wird auch vom Scraper
  `sync-legacy-locations.mjs` angewendet, sodass ein späterer lokaler
  Re-Scrape dasselbe Ergebnis liefert. Sonst sind die 166 Einträge unverändert.
- Routing unverändert: `/locations/:slug` wird auf `/standorte/[slug]`
  umgeschrieben, `/standorte/:slug` leitet 301 auf `/locations/:slug`. Die
  öffentlichen Pfade bleiben identisch zu Webflow. Alle 291 Slugs landen über
  `legacyLocations` automatisch in `generateStaticParams` und der Sitemap.

Optionaler Gegencheck aus einer Sitzung mit Netz: `npm run seo:sync-locations`
scrapt alle 291 Live-Seiten neu; Abweichungen zum CMS-Aufbau wären dann im
Diff von `data/legacy-locations.json` sichtbar.

## Offene Punkte

### 1. Inhaltliche Entscheidung für 291 Standort-URLs

Alle 291 Standort-URLs stehen im Manifest auf `review`: Pfade bleiben beim
Relaunch 1:1 erreichbar, die inhaltliche Entscheidung (erhalten, ausbauen,
konsolidieren, noindex) ist offen. `HANDOFF.md` weist zu Recht darauf hin,
keine pauschalen Redirects ganzer Inhaltsgruppen auf Übersichtsseiten zu
setzen; `seo:check:strict` erzwingt das. Die GSC-Auswertung in
`scripts/build-gsc-report-artifact.mjs` bezieht sich noch auf die 166 alten
URLs; die 125 neuen haben erst seit Juli 2026 Daten in der Search Console.
Hinweis zur Qualität: Die Seiten teilen eine Vorlage und unterscheiden sich
nur in sechs Textblöcken, also Thin-Content-Risiko (siehe Kommentar in
`lib/standorte.ts`).

### 2. Deployment steht, ist aber nicht ausgerollt

`netlify.toml` ist konfiguriert (`base = "web"`, `@netlify/plugin-nextjs`), die
Seite ist jedoch nicht deployt. `pixel56.de` liefert weiterhin Webflow.

`NEXT_PUBLIC_INDEXABLE=true` erst in der geprüften Produktion setzen — ohne den
Schalter bleibt die Seite `noindex` und liefert keine Sitemap. Grund: im Juli
hatte Google eine offene Netlify-Testumgebung gecrawlt und unfertige URLs
indexiert.

### 3. Fehlende Env-Variablen

- `MAILERLITE_API_KEY` und die Gruppen-IDs sind leer. Freebie- und
  Kontaktformulare nehmen dadurch keine Kontakte auf.
- `NEXT_PUBLIC_SANITY_STUDIO_URL` fehlt. Das Studio ist bewusst aus dem
  Frontend gelöst (siehe [`../sanity/STUDIO.md`](../sanity/STUDIO.md)); `/studio`
  leitet erst nach einem separaten Studio-Deployment weiter. Die Abhängigkeiten
  `sanity`, `@sanity/vision`, `next-sanity` und `styled-components` wurden dafür
  entfernt, nur `@sanity/client` bleibt.

### 4. Medien

Siehe [`MEDIA_PLAN.md`](MEDIA_PLAN.md). Google Ads und KI-Automatisierung haben
bewusst markierte Medienplätze, die auf einer indexierbaren Produktion nicht
erscheinen.

## Webflow-Altstand zum Nachschlagen (13.10.2026)

Ein Workspace, eine Site: `pixel56.de` und `www.pixel56.de`. Letzter
vollständiger Publish 03.07.2026, letzte Designer-Bearbeitung 18.07.2026. CMS:
291 Standorte (alle veröffentlicht, keine Entwürfe, nichts archiviert),
35 Blogartikel, davon 4 unveröffentlichte Entwürfe. Collection-Schemas
unverändert seit 01.07.2026. Bei zwei Standort-Items weicht das Hilfsfeld
`url` von `/locations/<slug>` ab (fehlender Schrägstrich); das Feld wird
nicht genutzt.

Das Webflow-Angebot bleibt unangetastet, bis die neue Seite abgenommen ist.
