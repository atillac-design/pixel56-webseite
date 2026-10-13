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

- 13.10.2026: **Ressourcen, Karriere, Stellenanzeige neu aufgebaut.** Die
  drei Freebie-Seiten behalten Formular und schlanke Navigation, bekommen
  aber Zusammenfassung, „Für wen“, „So nutzt du sie“, passende Leistung,
  weitere Ressourcen und FAQ (Daten in `lib/ressourcen.ts`: `fuerWen`,
  `schritte`, `leistung`); `DigitalDocument`-Schema. Karriere mit
  Bewerbungs-Board, Gründen, Arbeitsweise, Stellen (CMS plus
  Vertriebs-Stelle und Initiativbewerbung), vier Bewerbungsschritten,
  Kennenlernen, FAQ. Stellenanzeige Vertrieb mit Aufgaben, „Was zählt“,
  Ablauf und FAQ; bewusst **kein** `JobPosting`-Schema, weil Umfang und
  Modell offen sind und Google dafür konkrete Angaben verlangt.
- 13.10.2026: **Blog neu aufgebaut.** Übersicht (`app/blog/page.tsx`) mit
  neuestem Artikel im Hero, fünf jüngsten Beiträgen, acht Themen mit
  Artikelanzahl, Archiv und Ressourcen; Artikelvorlage
  (`app/blog/[slug]/page.tsx`) mit Teaser, Inhaltsverzeichnis aus den
  Zwischenüberschriften, Autorenkasten, Leistungs-Hinweis passend zum
  Thema, drei weiteren Artikeln, Checklisten, Kontaktleiste, `BlogPosting`-
  und `BreadcrumbList`-Schema; Themenseiten
  (`app/blog-kategorien/[slug]/page.tsx`) im selben Stil. **Behobener
  SEO-Fehler:** Die Themenseiten hatten nur die Kategorie-Werte der acht neu
  geschriebenen Artikel gekannt; die 31 alten Artikel (Werte wie „Künstliche
  Intelligenz“, „Soziale Medien“) passten nirgends, weshalb fast jede
  Themenseite als Rückfall alle 35 Artikel zeigte, also acht nahezu
  identische Seiten. Die Zuordnung liegt jetzt in `lib/blog.ts`
  (`blogKategorien`) und deckt alte und neue Werte ab; jede Themenseite
  zeigt nur ihre eigenen Artikel (2 bis 6). Alte absolute Links in den
  Artikeltexten (`https://www.pixel56.de/...`) werden beim Rendern relativ,
  damit sie auch auf Testumgebungen funktionieren. Seitentitel langer
  Artikelüberschriften enden nicht mehr mit „…“, sondern am Doppelpunkt.
- 13.10.2026: **Projekt-Detailseiten (17 Fallstudien) neu aufgebaut.** Neue
  Vorlage in `app/projekte/[slug]/page.tsx`: Hero mit Projektbild
  (Browser-Mockup als Rückfall), Zusammenfassung, Ausgangslage und Umsetzung
  mit Befund-/Baustein-Karten, Einblicke, Ergebnis als Statement, Zuordnung
  der Projekt-Tags zu Leistungsseiten (`tagZuLeistung`), Kundenstimme nur
  aus `lib/verified-reviews.ts`, drei passende weitere Projekte (gleiche
  Branche, dann ähnliche Tags), Ablauf, FAQ, Kontaktleiste. Titel und
  Beschreibungen in Suchmaschinen-Länge, `CreativeWork`-Schema mit Bild.
- 13.10.2026: **Technischer SEO- und Tempo-Check.** Crawl aller intern
  verlinkten Seiten des lokalen Builds (140 Seiten): 0 defekte Links, überall
  genau eine H1, alle Bilder mit Alt-Text, überall Canonical. Danach
  behoben: 41 zu lange Titel (jetzt höchstens 60 Zeichen inkl. „| Pixel56“),
  84 zu lange Meta-Beschreibungen (jetzt höchstens 155 Zeichen, auch auf den
  65 indexierbaren Standortseiten über `metaText` je Leistung),
  Leistungsübersicht `/dienstleistung` war verwaist und ist jetzt im Footer
  und auf der Startseite verlinkt, `/standorte` im Footer verlinkt.
  Lighthouse 12 (mobil, lokal): Startseite Performance 82 → 98,
  Barrierefreiheit 87 → 100 (Kontrast Cookie-Button, Überschriften-Reihenfolge
  H4 → H3 in Karten, Footer-Überschriften als `p`, größere Klickflächen im
  Footer), Best Practices 100. Logo als 360-px-Variante mit Maßangaben
  (vorher 900 px unskaliert). SEO-Score bleibt lokal bei 69, einzig wegen des
  globalen `noindex` ohne `NEXT_PUBLIC_INDEXABLE`; in Produktion entfällt
  der Punkt.
- 13.10.2026: **Gründungsjahr 2018 bestätigt** (Atilla). Steht als
  `foundingDate` im Organisations-Schema und auf Über uns.
- 13.10.2026: **Standortseiten: Thin-Content-Risiko behoben.** Analyse der
  291 Seiten: 94 % der Wörter sind je Leistung auf allen Seiten identisch,
  nur ein Absatz pro Stadt (CMS-Feld `lokaler-content`) ist einzigartig; 84
  Städte, davon 13 im Einzugsgebiet, 16 Großstädte, 53 weitere inkl. Schweiz
  und Österreich; keine GSC-Daten im Repo. Entscheidung (umkehrbar per Liste
  in `lib/standorte.ts`): 13 Städte im Einzugsgebiet (65 URLs) bleiben
  indexierbar und bekommen eine neue, leistungsspezifische Vorlage mit
  lokalen Fakten; die übrigen 226 URLs bleiben 1:1 erreichbar, liefern aber
  `noindex, follow` und stehen nicht in der Sitemap. Details unter
  „Erledigt: Standortseiten“.
- 13.10.2026: **Seiten-Überarbeitung Runde 2.** Über uns (13 Sektionen),
  Team-Seite Atilla (8), Kontakt (10), Leistungen-Übersicht (12),
  Projekte-Übersicht (11) und Standorte-Übersicht (7) neu geschrieben, im
  Stil der Startseite und der acht Leistungsseiten. Erfundene
  Review-Konstanten auf Über uns, Projekte und der alten Standortvorlage
  entfernt; es werden nur noch Stimmen aus `lib/verified-reviews.ts`
  gezeigt. Antwortzeit-Versprechen einheitlich „innerhalb eines Werktags“.
- 13.10.2026: **Creatives geprüft.** `ads-recruiting-beispiel.webp` und
  `content-creative-recruiting.webp` sind Vorlagen-Motive („IHR LOGO“,
  `job@webseite.de`) und werden nicht mehr als Kundenarbeit gezeigt. Das
  Abbruch-Motiv („Andernach“, Abbruchhelfer/Baggerfahrer) ist in
  `lib/projekte.ts` sowohl Van den Berg Gruppe als auch GM-Dachdecker
  zugeordnet; die Meta-Ads-Referenzkarte nutzt deshalb das
  GM-Dachdecker-Projektbild. **Geklärt (Atilla, 13.10.):** Das
  Abbruch-Creative gehört zur Recruiting-Kampagne der Van den Berg Gruppe
  und steht bewusst auch bei GM-Dachdecker als Beispiel für
  Mitarbeitergewinnung im Handwerk. Umsetzung: Bildunterschriften auf den
  Leistungsseiten nennen die Van den Berg Gruppe; die Projektseite
  GM-Dachdecker zeigt das Motiv mit dem Hinweis `galerieHinweis`
  („Beispiel-Creative aus der Recruiting-Kampagne für die Van den Berg
  Gruppe“). Ebenfalls geklärt: Die Kundin heißt **Margarete Wolf** (mit e);
  `lib/projekte.ts` korrigiert, nur der Dateiname
  `person-margarita-wolf.webp` bleibt.
- 13.10.2026: **Seiten-Überarbeitung Runde 1.** Startseite (15 Sektionen) und
  die acht Leistungsseiten (13 bis 15 Sektionen) neu geschrieben: Premium-Hero
  mit Board, Zusammenfassung, nummerierte Sektionen, Praxisbeispiel aus
  `lib/projekte.ts`, Kundenstimmen nur aus `lib/verified-reviews.ts`,
  Kontaktleiste vor dem Footer. Demo-Dashboards mit erfundenen Kennzahlen
  entfernt.
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
(Node 22.22.0, npm 10.9.4), zuletzt nach der Standort-Umstellung.

- **Build:** TypeScript ohne Fehler, 386 statisch erzeugte Seiten, darunter
  291 Standorte, 35 Blogartikel, 17 Projekte, 8 Blog-Kategorien, 3 Ressourcen.
  `/api/kontakt`, `/api/lead` und `/studio` sind dynamisch.
- **SEO-Check strict:** 365 Bestands-URLs inventarisiert, 21 Kernseiten, 10
  Portfolio-Einzelmappings, 2 GSC-Redirects, 291 Standort-URLs direkt
  erreichbar, davon 65 indexierbar (13 Städte) und 226 `noindex,follow`.
  Keine Fehler, keine Warnungen.
- **Stichproben nach der Umstellung** (lokaler `next start`, Schalter
  `NEXT_PUBLIC_INDEXABLE` nicht gesetzt, daher global `noindex, nofollow`):
  `/locations/koblenz` und `/locations/vallendar-seo` mit neuem Titel,
  Canonical auf sich selbst, in der Sitemap; `/locations/hamburg` und
  `/locations/wien-meta-ads` mit seitenbezogenem `noindex, follow`, altem
  Titel, nicht in der Sitemap. Die Sitemap enthält 65 Standort-URLs.
- **Screenshots** (Desktop 1440 px, Mobil 390 px) aller überarbeiteten Seiten
  geprüft: keine horizontalen Überläufe, Bilder laden, dunkle Bühnen lesbar.
- **Erwartete Build-Meldung:** „Sanity nicht erreichbar, nutze statische
  Inhalte“ erscheint dreimal. In der Cloud-Session sperrt die
  Netzwerk-Richtlinie die Sanity-API; der statische Fallback greift und der
  Build bleibt grün. Lokal mit Netz erscheint die Meldung nicht.

## Erledigt: Standortseiten ohne Thin Content

Befund (Analyse von `data/legacy-locations.json`, 13.10.2026):

| Merkmal | Wert |
| --- | --- |
| Seiten | 291 (Webdesign 83, Google Ads 83, Meta Ads 83, SEO 29, Social Media 13) |
| Städte | 84: 13 mit fünf Leistungen (Einzugsgebiet), 16 Großstädte mit vier, 53 mit drei, Urmitz doppelt |
| Identische Wörter je Leistung | 94 %; nur Block 3 (`lokaler-content`) ist pro Stadt einzigartig |
| GSC-Daten im Repo | keine (`data/gsc-*` bleibt lokal bei Atilla) |

Umsetzung:

- `lib/standorte.ts`: Tabelle `regionStaedte` mit 13 Städten (Bendorf,
  Koblenz, Vallendar, Neuwied, Andernach, Höhr-Grenzhausen,
  Ransbach-Baumbach, Montabaur, Lahnstein, Mülheim-Kärlich, Weißenthurm,
  Mayen, Limburg), je mit Landkreis, gerundeter Entfernung und Fahrzeit ab
  Hüttenstraße 100 sowie zwei Sätzen lokalem Kontext. **Atilla bitte
  prüfen:** Entfernungen/Fahrzeiten sind Schätzwerte, Kontexttexte enthalten
  allgemeine Ortsfakten (WHU, Kannenbäckerland, ICE-Halt usw.).
  `isIndexableLocation()` leitet die Indexierbarkeit allein aus dieser Liste
  ab. Eine weitere Stadt wird indexierbar, sobald sie mit eigenen Angaben in
  der Tabelle steht; so lassen sich GSC-Befunde später 1:1 umsetzen.
- `lib/standort-inhalte.ts`: je Leistung eigene Texte (Hero, Einleitung,
  sechs Bausteine, vier Ablaufschritte, Referenzen, vier Fragen), damit sich
  Webdesign-, Google-Ads-, Meta-Ads-, SEO- und Social-Media-Seiten derselben
  Stadt inhaltlich unterscheiden.
- `components/LocationPage.tsx` (ersetzt `LegacyLocationPage.tsx`): neue
  Vorlage mit Hero-Board, Zusammenfassung, Sektion „Pixel56 und <Stadt>“
  (Einzugsgebiet: Kontext, Entfernung, Vor-Ort-Angebot; sonst ehrlich: „Wir
  sitzen nicht in <Stadt>“), dem einzigartigen CMS-Absatz, Bausteinen,
  Ablauf, Referenzen, Querverlinkung zu den anderen Leistungen der Stadt und
  zur gleichen Leistung in Nachbarstädten, verifizierten Kundenstimmen, FAQ
  mit stadtbezogener Frage, Kontaktleiste. Die alte Koblenz-Sondervorlage
  mit Demo-Dashboard und erfundenen Stimmen ist entfernt.
- `app/standorte/[slug]/page.tsx`: alle 291 Slugs aus `legacyLocations`;
  außerhalb des Einzugsgebiets `robots: { index: false, follow: true }` und
  alter Titel/Beschreibung; im Einzugsgebiet neue Titel nach dem Muster
  „Webdesign Koblenz: Websites, die Anfragen bringen“.
- `app/sitemap.ts`: nur `indexableLocations`. `app/standorte/page.tsx`:
  Übersicht zeigt die 13 Städte mit Entfernung und ihren fünf Leistungsseiten;
  noindex-Seiten werden nicht verlinkt.
- `scripts/check-seo-migration.mjs`: prüft weiterhin, dass alle 291
  Manifest-URLs als Routen existieren (jetzt Fehler statt Warnung, wenn eine
  fehlt), zusätzlich, dass noindex-Seiten `noindex,follow` liefern und die
  Sitemap genau die indexierbaren enthält. Sammelredirects bleiben verboten.

Keine Weiterleitungen, kein Webflow-Publish, Manifest unverändert (`review`
bleibt als Vermerk stehen, die Entscheidung liegt im Code).

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

### 1. Standortseiten: Liste der indexierbaren Städte mit GSC-Daten abgleichen

Die Entscheidung „13 Städte indexierbar, 226 URLs noindex“ ist ohne
Search-Console-Daten getroffen (siehe „Erledigt: Standortseiten“). Sobald
Atilla einen GSC-Export (Seiten-Bericht, 16 Monate) bereitstellt: Seiten
außerhalb des Einzugsgebiets mit echten Klicks oder nennenswerten
Impressionen prüfen und bei Bedarf mit eigenen lokalen Angaben in
`regionStaedte` aufnehmen. Dann wird die Stadt automatisch indexierbar und
landet in der Sitemap. Ebenso die Schätzwerte für Entfernung und Fahrzeit
sowie die Kontexttexte der 13 Städte gegenlesen.

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
