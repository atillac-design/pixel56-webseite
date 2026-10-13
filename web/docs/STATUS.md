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

- 13.10.2026: **Abschlussrunde ohne Eigentümer-Input.** Leistungsseiten
  verlinken auf die Standortseiten derselben Leistung im Einzugsgebiet
  (`components/RegionLinks.tsx`), Breadcrumb-Schema auf Leistungs-,
  Standort- und Projektseiten (`components/BreadcrumbLd.tsx`),
  Geo-Koordinaten und erweitertes `areaServed` im Organisations-Schema,
  Sicherheits-Header in `next.config.ts` (nosniff, Frame-Options,
  Referrer-Policy, Permissions-Policy, HSTS), 404-Seite und die beiden alten
  Shop-Pfade (`/category/digitale-produkte`,
  `/product/tagesplaner-to-do-liste-set`) im neuen Stil, `npm run qa:crawl`
  als wiederholbare Prüfung im Repo, HANDOFF.md auf den aktuellen Stand
  gebracht. Korrektur zur Bewertung vom selben Tag: Google Analytics ist
  vorhanden und lädt nach Zustimmung; es fehlt nur die Search Console.
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
- 13.10.2026: **Burger Fabriq: Branding, Bilder und zwei echte Reels.** Der Inhaber
  hat vier Videos und zwei Branding-Motive geliefert und bestätigt, dass das
  Branding (Logo, Verpackung, Plakat) von Pixel56 stammt. Übernommen: zwei im
  Laden gedrehte Reels (Smash Burger auf dem Grill, Lotus-Milchshake; aus
  1080×1920 MOV, je rund 21 bis 25 MB, zu 720×1280 MP4 mit 3,7 bzw. 4,6 MB
  verkleinert, Poster als WebP) in `lib/reels.ts` und als `video` des
  Projekts; die Reel-Wand auf der Content-Seite ist damit sichtbar (drei
  Reels). Zwei weitere, mit Gemini erzeugte Aktionsvideos (Desserts, Shake)
  wurden bewusst nicht eingebaut, weil die Content-Seite mit „echten
  Aufnahmen statt gestellter Werbung“ wirbt; sie liegen nur in den Uploads
  der Sitzung. Projekt `burgerfabrik`: Anzeigename jetzt „Burger Fabriq“
  (Schreibweise laut Logo und Domain burgerfabriq.de, Slug unverändert), Tag
  „Branding“, Hero-Bild aus dem Verpackungsmotiv (16:10-Ausschnitt), Galerie
  mit Verpackung und Plakat (neues Feld `galerieHochkant` für 3:4), neuer
  Abschnitt „Reel aus dem Projekt“ (Felder `videoPoster`, `videoHinweis`).
  Texte um das Branding ergänzt. Name auch in Kundenliste, Startseite, Über
  uns und Content-Seite angepasst.
- 13.10.2026: **Vorher-nachher mit schematischer Ausgangslage.** Weil die meisten
  Kunden vorher keine Website hatten, zeigt der Schieber links statt eines
  Screenshots eine neutrale Skizze (`components/VorherSchema.tsx`, Feld
  `vorherArt` an `Fallstudie`): „keine-website“ (Suchmaske mit Verzeichnissen
  und Mitbewerbern, Hinweis „Kein eigener Auftritt“), „veraltet“ (graues
  Wireframe ohne Kundenlogo mit den Marken „Nicht für Handys gebaut, Kontakt
  versteckt, Keine Leistungsseiten“) und „social“ (nur Social-Media-Profil).
  Beschriftung „Vorher · schematisch“, der Begleittext sagt ausdrücklich, dass
  es kein Screenshot ist. Ein echtes Vorher-Bild (`vorher`) hat Vorrang.
  Zuordnung nach den Ausgangslage-Texten der Fallstudien, vom Inhaber noch zu
  bestätigen: keine-website für MDU Bedachungen, Oktay Cömertler, Cavar Home,
  DiscountHaus Holding, Schlüsselfertig-Immobilien, GM-Dachdecker; veraltet
  für M&A Transporte, CASS Schulungen, Lernforum Obertshausen, CurlyAnn, Colak
  GmbH. Kein Vergleich bei Projekten ohne Website-Bezug (Stark ins Neue, Van
  den Berg, Sportler für Kinderherzen, Berkan Kaya) oder ohne Bild (DEMA,
  Burgerfabrik).
- 13.10.2026: **Branchen-Leitfaden und Richtwerte im Budget-Planer.** Neue Datei
  `lib/meta-ads-branchen.ts` mit sieben Branchen (Handwerk & Bau, Transport &
  Logistik, Bildung & Soziales, Immobilien & Modulbau, Dienstleistung &
  Technik, Gastronomie/Handel/Kreativ, Mitarbeitergewinnung): je drei Punkte
  „Darauf kommt es an“ und „Unbedingt nötig“ sowie eine veröffentlichte Spanne
  je Anfrage bzw. Bewerbung mit Quellen (WordStream 2025, USA; deutsche
  Agentur- und Anbieterblogs 2026: artico.agency, Ostend Digital, Skill
  Sprinters, Talentbait, Fachkraft jetzt, myonlineconcept). Keine der Quellen
  legt eine Stichprobe offen; das steht so unter dem Abschnitt. Auf der
  Meta-Ads-Seite neuer Abschnitt „11 — Worauf es je Branche ankommt“ mit
  Karten und Quellenzeile, folgende Abschnitte umnummeriert (12 bis 16). Der
  Budget-Planer hat eine optionale Branchenauswahl und ordnet den eigenen
  Höchstpreis je Anfrage gegen die veröffentlichte Spanne ein (darunter,
  innerhalb, darüber). Hintergrund: Der Inhaber hat kein Werbekonto mehr und
  damit keine eigenen Erfahrungswerte; die Seite nennt deshalb ausschließlich
  fremde, belegte Richtwerte.
- 13.10.2026: **Projektfilter.** `components/ProjektFilter.tsx` auf
  `/kundenprojekte`: Chips für Branche (aus `branche`) und Leistung (aus
  `tags`), Anzahl der Treffer, Zurücksetzen, Hinweis mit Kontaktlink bei
  leerer Kombination. Karten-Markup unverändert übernommen.
- 13.10.2026: **Ablauf-Simulator auf der KI-Seite.** `components/AblaufSimulator.tsx`
  im Abschnitt „09 — Ein Beispielablauf“ über den bisherigen Textschritten:
  fünf Schritte (Eingang, KI bereitet vor, Mensch prüft, Antwort, Ablage) als
  Chat-Verlauf mit Schrittleiste, Abspielen/Pause und Erklärung je Schritt.
  Kunde, Nachrichten, Zeiten sind erfunden und so beschriftet. Lighthouse
  KI-Seite danach 90/100/100 (vorher 92 bis 98 auf Leistungsseiten).
- 13.10.2026: **Reel-Wand vorbereitet.** `components/ReelWand.tsx` und
  `lib/reels.ts` (ein Eintrag: `/videos/reel-handwerker-tipps.mp4`). Die Wand
  erscheint auf der Content-Seite erst ab zwei Reels, Videos laden erst beim
  Abspielen, Ton erst nach Klick, immer nur eines läuft. Weitere Reels: Datei
  unter `public/videos/` ablegen und in `lib/reels.ts` eintragen. Außerdem die
  erfundenen Zähler (482, 36, 12) aus dem Reel-Mockup entfernt.
- 13.10.2026: **Schnellsuche über alle Seiten.** `components/Schnellsuche.tsx`
  (im Layout) öffnet sich über den Suchknopf in der Navigation
  (`SiteNav`, `data-suche-oeffnen`) oder mit Strg/Cmd+K: Eingabe, bis zu
  acht Treffer mit Typ (Leistung, Seite, Ressource, Projekt, Artikel,
  Standort), Pfeiltasten, Enter, Esc, Vorschläge bei leerer Eingabe. Der
  Index (`lib/suchindex.ts`, 8 Leistungen, 10 Seiten, 3 Ressourcen, 17
  Projekte, 35 Artikel, 65 indexierbare Standortseiten, rund 34 KB) wird
  beim Build als statische Datei unter `/api/suchindex` abgelegt und erst
  beim ersten Öffnen geladen. Treffer: alle Suchwörter müssen in Titel oder
  Text vorkommen, Titeltreffer wiegen mehr. Neue Seiten oder Artikel landen
  automatisch im Index, weil er aus denselben Datenquellen gebaut wird.
- 13.10.2026: **Vorher-nachher-Schieber vorbereitet.** `components/VorherNachher.tsx`
  (Regler per Maus, Touch und Tastatur, unsichtbarer Bereichsregler über dem
  Bild) und neues Feld `vorher?: string` an `Fallstudie`. Die Projektseite
  zeigt den Abschnitt „Vorher · Nachher“ nur, wenn `vorher` und `bild`
  gesetzt sind. **Noch kein Projekt hat ein Vorher-Bild**: Dafür Screenshots
  der alten Kunden-Websites unter `public/bilder/vorher-<slug>.webp` ablegen
  und in `lib/projekte.ts` eintragen (Freigabe des Kunden vorausgesetzt).
  Mit einem Testbild geprüft, Testbild vor dem Commit entfernt.
- 13.10.2026: **Leistungs-Finder auf der Leistungsseite.** `components/LeistungsFinder.tsx`
  im neuen Abschnitt „Leistungs-Finder · vier Fragen“ (nach „Welcher
  Baustein zu welchem Ziel passt“): vier Fragen mit drei bis vier Antworten,
  einfache Gewichtung auf die acht Leistungen, Ergebnis mit Begründung, zwei
  passenden Ergänzungen, Link zur Leistungsseite und zum Erstgespräch.
  Ausdrücklich als Einschätzung, nicht als Angebot formuliert; keine
  Kontaktdaten nötig.
- 13.10.2026: **Schematische Standortkarte.** `components/Standortkarte.tsx` auf
  `/standorte` über den Stadtkarten: 13 Städte nach gerundeten Koordinaten
  (in `app/standorte/page.tsx`), Rhein, Mosel und Lahn als vereinfachte
  Linien, Bendorf mit Puls, Hover oder Fokus zeigt Entfernung und Fahrzeit
  aus `regionStaedte`, Klick führt zur Webdesign-Seite der Stadt. Als
  „schematisch, keine Straßenkarte“ beschriftet. Auf kleinen Bildschirmen
  seitlich scrollbar statt verkleinert.
- 13.10.2026: **Mobile Kontaktleiste.** `components/KontaktLeiste.tsx` im Layout:
  unter 760 px feste Leiste am unteren Rand mit Anrufen, WhatsApp und Termin
  (Calendly); der schwebende WhatsApp-Button ist dort ausgeblendet, der
  Cookie-Hinweis rückt darüber, der Seiteninhalt bekommt unten Platz.
  Termin-Button in dunklerem Rot, damit der Kontrast reicht.
- 13.10.2026: **Budget-Planer auf der Meta-Ads-Seite.** `components/BudgetPlaner.tsx`
  im Abschnitt „Budget & Kosten“: Der Besucher gibt Auftragswert, gewünschte
  Aufträge pro Monat, Werbeanteil und Anfragen je Auftrag ein; daraus ergeben
  sich Werbebudget pro Monat, nötige Anfragen, Höchstpreis je Anfrage und
  Tagesbudget. Die Rechnung steht offen daneben. Es werden keine Branchen-
  oder Erfahrungswerte behauptet: Startwerte sind als „Beispielwerte, bitte
  anpassen“ markiert, bis der Besucher etwas ändert; der Text nennt den Rahmen
  ausdrücklich als Rahmen, nicht als Versprechen.
- 13.10.2026: **Website-Check als eigenes Werkzeug.** Seite `/website-check`
  (in Sitemap und mit Vorschaubild), Route `app/api/website-check/route.ts`
  (Node-Runtime, dynamisch) und `components/WebsiteCheck.tsx`. Die Route lädt
  die angegebene Startseite serverseitig und prüft zwölf Punkte: HTTPS,
  Antwortzeit, Titel- und Beschreibungslänge, H1-Anzahl, Viewport, Sprache,
  Bild-Alternativtexte, Impressum-Link, Kontaktweg, Vorschaubild, HTML-Größe
  (plus noindex-Hinweis). Schutz vor Missbrauch: nur http(s), keine
  IP-Adressen, lokale oder private Ziele (DNS-Auflösung wird geprüft, auch
  nach jeder Weiterleitung), höchstens fünf Weiterleitungen, 9 s Zeitlimit,
  1,5 MB Lesegrenze, zwölf Prüfungen je Absender in zehn Minuten (im
  Speicher der Funktion). Keine Speicherung der Adresse, keine E-Mail nötig.
  Eingebettet außerdem auf den Seiten Webdesign und SEO (Abschnitt
  „Kostenlos · Website-Check“). In dieser Sandbox lassen sich die meisten
  Domains nicht auflösen; der Durchlauf wurde mit github.com geprüft (7 von
  12 Punkten, Impressum-Hinweis gilt für deutsche Seiten). Lighthouse
  `/website-check`: 99/100/100.
- 13.10.2026: **System-Szene auch auf der Leistungsseite, Inhalte ausgelagert.**
  `components/SystemSzene.tsx` nimmt jetzt eine Konfiguration
  (`lib/system-szene.ts`): `startseiteSzene` mit vier Bausteinen,
  `leistungenSzene` mit allen acht Leistungen im 3×3-Raster um den Betrieb.
  Bei acht Bausteinen zeigen die Pins nur Symbol und Nummer, die Namen
  stehen in Detailkarte und Chips. Auf `/dienstleistung` neuer Abschnitt
  „04 — Alles greift ineinander“, die folgenden Abschnitte sind umnummeriert
  (05 bis 11).
- 13.10.2026: **Zeiger-Effekte und Lesefortschritt.** Globale
  Client-Komponente `components/Interaktiv.tsx` (im Layout neben `Reveal`):
  Karten (`premium-service-card`, `audience-card`, `resource-card`,
  `proj-card`, `scope-card`, `svc-card`, `voice-card`) neigen sich bis 4°
  zum Mauszeiger und zeigen einen weichen roten Lichtpunkt an der
  Zeigerposition (`[data-tilt]` mit CSS-Variablen, Pseudo-Element). Nur bei
  feinem Zeiger mit Hover und ohne `prefers-reduced-motion`, auf Touch-Geräten
  passiert nichts. Auf Blogartikeln läuft eine 3 px dünne Fortschrittslinie
  am oberen Rand mit (`.lese-fortschritt`, aus dem Scrollstand von
  `.article-body`). Lighthouse danach (mobil, lokal): Startseite 98/100/100,
  Artikelseite 93/100/100.
- 13.10.2026: **Interaktive System-Szene auf der Startseite.** Abschnitt 04
  („Ein System, das miteinander arbeitet“) zeigt statt der Vier-Punkte-Liste
  eine isometrische Szene (`components/SystemSzene.tsx`, Client-Komponente
  ohne Bibliotheken): vier Bausteine (Website, Content, Reichweite,
  KI-Abläufe) rund um „Dein Betrieb“, animierte Flüsse mit laufenden Punkten
  (SVG `animateMotion`), schwebende Karten mit Status-Pulse, Detailkarte mit
  Text, drei Punkten und Link zur Leistung, Auswahl-Chips und eine
  Ereigniszeile, die als „Beispielablauf, kein Live-System“ gekennzeichnet
  ist. Ohne Eingriff wandert die Auswahl alle 3,4 s weiter; Hover, Fokus oder
  Klick stoppen das. `prefers-reduced-motion` schaltet Punkte, Laufmuster und
  Wechsel ab. Auf dem Handy zeigen die Pins nur Symbole, Namen stehen in den
  Chips. Zahlen oder Kennzahlen kommen bewusst nicht vor. Lighthouse
  Startseite (mobil, lokal) danach: Performance 97, Barrierefreiheit 100,
  Best Practices 100; Crawl unverändert 0 defekte Links.
- 13.10.2026: **Blog-Cover mit Themengrafiken und Vorschaubilder je Seite.**
  Die Blog-Cover zeigen statt reiner Farbverläufe jetzt acht
  Linien-Illustrationen je Thema (`public/bilder/blog/cover-<thema>.svg`,
  erzeugt mit `node scripts/make-blog-covers.mjs`, transparent, 2 bis 6 KB).
  Der Farbverlauf je Artikel (`c1` bis `c6`) bleibt darunter erhalten; die
  Zuordnung läuft über `coverKlasse()` in `lib/blog.ts` bzw. die
  Themen-Slugs. **Open Graph:** Jede Seite außer Startseite, Rechtstexten
  und Projekt-Detailseiten bekommt ein eigenes, beim Build gerendertes
  Vorschaubild (1200×630, `lib/og-bild.tsx` mit `ImageResponse`,
  `opengraph-image.tsx` je Route, 24 Dateien): Logo, rote Themenzeile,
  Titel, Kurztext, Themengrafik, Fußzeile. Standortseiten (291),
  Blogartikel, Themen und Ressourcen nutzen `generateStaticParams`, damit
  die Bilder statisch entstehen (Build: 742 statt 386 Routen, etwa 30 s
  mehr). Projekt-Detailseiten behalten ihr echtes Projektfoto als og:image,
  die Startseite das vorhandene Premium-Bild. Schrift: Inter als
  Latin-Subset (`assets/fonts`, OFL, 36 KB je Schnitt). Das globale
  `twitter:image` im Layout ist entfernt, damit X das jeweilige og:image
  nutzt. Prüfung: Build, Crawl (0 defekte Links), Sichtprüfung von acht
  Bildern und der Blogseiten.
- 13.10.2026: **16 alte Blogartikel neu geschrieben.** Von den 31 aus Webflow
  übernommenen Artikeln sprachen 14 den Leser mit „Sie“ an; dazu kamen ein
  Lorem-ipsum-Teaser, eine „Wir als Unternehmen“-Perspektive, abgebrochene
  Einleitungen und erfundene Erfolgszahlen („Anfragen +40 %“, „60 % mehr
  Buchungen“) in diesen und zwei weiteren Texten. Diese 16
  Artikel liegen jetzt als Dateien in `lib/artikel/<slug>.ts` (Typ `Artikel`
  aus `lib/blog-typen.ts`, Registrierung in `lib/artikel/index.ts`) und
  ersetzen beim Zusammenführen in `lib/blog.ts` die migrierte Fassung aus
  `data/legacy-blog.json`. Slug, Datum, Kategorie und Cover bleiben, die
  URLs ändern sich nicht. Inhaltlich: du-Ansprache, Zwischenüberschriften für
  das Inhaltsverzeichnis, relative interne Links auf die kanonischen
  Leistungsseiten, keine erfundenen Kennzahlen und keine Kundenfälle außer
  den belegten aus `lib/projekte.ts`; veraltete Jahresangaben („für 2023“,
  „im Jahr 2024“) aus Überschriften entfernt, Slugs unverändert. Lesezeit aus
  der Wortzahl (200 Wörter/Minute). Neues optionales Feld `seoTitel` für
  kurze Seitentitel, genutzt bei sechs Artikeln mit langen Überschriften.
  Inhaltsverzeichnis zählt nicht mehr doppelt, wenn die Überschriften selbst
  nummeriert sind. Die restlichen 15 alten Artikel waren bereits in
  du-Form; ihre vereinzelten „Sie“ sind Pronomen („Sie führt dich …“), keine
  Anrede. Prüfung: `tsc`, Build, `seo:check:strict`, `qa:crawl` (150
  Seiten, 0 defekte Links, 0 Titel über 60 Zeichen; der Crawl dekodiert
  HTML-Entities jetzt vor der Längenmessung).
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
- **Crawl des lokalen Builds** (alle intern verlinkten Seiten, 150 Stück):
  0 defekte Links, überall genau eine H1, alle Bilder mit Alt-Text, überall
  Canonical, Titel höchstens 60 und Beschreibungen höchstens 155 Zeichen.
- **Überlauf-Prüfung** bei 390, 768 und 1440 px Breite auf 19 Seitentypen:
  lange Wörter in Hero-Überschriften („Ansprechpartner.“,
  „Vertriebsprofi/in“) verbreiterten die Seite auf dem Handy; behoben über
  Zeilenumbruch in Wörtern und kleinere Schrift unter 480 px.
- **Lighthouse 12** (mobil, lokal) auf Startseite, Leistungs-, Standort-,
  Projekt-, Blog- und Karriereseiten: Performance 92 bis 98, Barrierefreiheit
  96 bis 100, Best Practices 100. SEO lokal 69 nur wegen des globalen
  `noindex` ohne `NEXT_PUBLIC_INDEXABLE`.
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
