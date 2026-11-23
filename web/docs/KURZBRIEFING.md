# Kurzbriefing — Stand 23.11.2026

Einstieg für jede neue Sitzung. Kurz halten (unter 150 Zeilen), nach jedem
Arbeitsschritt aktualisieren. Details und Begründungen stehen im Protokoll
[`STATUS.md`](STATUS.md), Grundlagen in [`HANDOFF.md`](HANDOFF.md).

## Wie wir arbeiten

- **Push-Sperre (23.10.):** Netlify-Credits sind knapp, jeder Push baut die
  Seite neu. Änderungen lokal sammeln, Screenshots zeigen, erst pushen, wenn
  der Inhaber das Paket freigibt. Alternative, falls er sie einschaltet:
  Netlify → Build & deploy → „Stop builds“, dann sind Pushes kostenlos.

Der Inhaber (Atilla) schaut die Vorschau auf Netlify an und gibt Rückmeldung
Schritt für Schritt, oft als Sprachnachricht oder Screenshot. Jede Rückmeldung
wird umgesetzt, gebaut, mit Screenshot geprüft, committet und gepusht
(Zweig `codex/pixel56-neue-seite`). Letzter Commit: siehe `git log -1`.

## Entscheidungen des Inhabers (gelten weiter)

- **Hosting (26.10.):** Netlify-Free-Guthaben (300 Credits) war nach dem
  Livegang aufgebraucht, Produktions-Deploys pausiert. Inhaber nimmt den
  Personal-Plan (rund 9 $/Monat, 1.000 Credits). IONOS-Webspace bleibt nur
  Notlösung (Inhaber mag es nicht, außerdem laufen dort Anfrage-API und
  Website-Check nicht ohne Node-Server). Späterer Spar-Kandidat: Umzug auf
  Cloudflare, erst wenn Netlify-Kosten steigen. Pushes weiter gebündelt.
- **Partnerprogramm `/partner` (29.10.):** Vertrieb über freiberufliche
  Partner, als Programm erzählt, nicht als Stellenanzeige (Inhaber fand den
  ersten Entwurf „du bringst Auftrag, wir zahlen“ zu räudig). Drei Stufen:
  Empfehlungspartner, Vertriebspartner, Gebietspartner (Folgeaufträge,
  eigene Region). Ton: Entscheidung, nicht Notlösung („wächst über Partner
  statt Vertriebsabteilung“, „lieber drei Partner eng als zwanzig lose“).
  Keine internen Zahlen, kein „Kaltakquise“ als Hauptwort. Beteiligung laut
  Inhaber (29.10.): Empfehlungspartner bis zu 25 %, Vertriebs- und
  Gebietspartner bis zu 35 %, „abhängig von Zusammenarbeit und Qualität“
  (`provision` oben in `app/partner/page.tsx`). `/vertriebspartner`
  leitet weiter. Verlinkt von `/karriere`, Vertriebsprofi-Stelle, Sitemap,
  Schnellsuche. Lokal committet, Push auf Freigabe.
- **Freebie-Downloads laufen (28.10.):** MailerLite-Schlüssel und drei
  Gruppen in Netlify gesetzt (IDs in `docs/LIVEGANG.md`, Abschnitt 1), die
  Automationen starten über „Subscriber joins a group“. Alle drei Downloads
  vom Inhaber live getestet, PDFs kommen an.
- **PageSpeed (29.10., Inhaber-Screenshot, mobil, Startseite):** Leistung 89,
  Barrierefreiheit 97, Best Practices 100, SEO 100, „Agentisches Browsing“
  1/2. Lokal mit Lighthouse nachgestellt: Barrierefreiheits-Fehler war
  `aria-label` auf einem `span` (Sterne), jetzt `role="img"` → 100.
  `public/llms.txt` angelegt (Lighthouse-Kategorie Agentic Browsing prüft
  u. a. llms.txt). Rest sind Hinweise ohne großen Hebel: ungenutztes CSS
  (globals.css gilt für alle Seiten), 13 KiB Polyfills aus einem
  Abhängigkeits-Chunk, Logo 180 px bei 70 px Anzeige. Nicht angefasst.
- **Freebie-Texte an die echten PDFs angepasst (29.10.):** Die SEO-PDF ist
  „Lokales SEO für Handwerker“ (6 Seiten, 7 Schritte, 25 Prüfpunkte,
  Wochenplan), die KI-PDF „KI-Agenten für Selbstständige einrichten“
  (18 Seiten, 7-Schritte-Tool-Anleitung mit ManyChat/Twilio/Dialogflow,
  Zielgruppe Coach/Fotograf/Therapeut, Stand April 2025). Seite versprach
  vorher „30 Prüfpunkte, 12 Seiten“ bzw. „ehrliche Einordnung, wo KI nicht
  lohnt, 10 Seiten“. Alle Teaser (Start, Blog, Leistungen, Website-Check,
  Kontakt-Blog-Kasten) beschreiben die echten Inhalte. Die SEO-PDF sagt
  „Google My Business“ (heißt seit 2021 Google-Unternehmensprofil).
- **Neues E-Book „KI-Suche“ (30.10.):** Inhaber wollte ein E-Book zu einem
  aktuellen Thema; Wahl: „Gefunden werden, wenn Kunden die KI fragen“
  (`freebies/ki-suche/`, 14 Seiten, Titel ohne Foto, dafür zwei gestaltete
  Beispiel-Antworten mit erfundenem Betrieb). Zahlen belegt und auf Seite 14
  mit Quellen: Sistrix ~20 % Suchanfragen mit KI-Übersicht in DE, KI-Modus in
  DE seit Okt. 2025, OpenAI 900 Mio. Wochennutzer (Feb. 2026), Search-Console-
  Berichte. Neue Ressourcen-Seite `/ressourcen/ki-suche` (Daten in
  `lib/ressourcen.ts`, Vorschaubild `freebie-ki-suche.webp`), auf der
  Startseite ersetzt der Leitfaden den Tagesplaner-Teaser. **Vor dem Push
  muss der Inhaber in MailerLite eine Gruppe + Automation für die PDF
  anlegen und `MAILERLITE_GROUP_KI_SUCHE` in Netlify setzen** (sonst
  Fallback auf `MAILERLITE_GROUP_ID` = Tagesplaner-Gruppe, falsche Mail).
- **SEO-Checkliste neu gebaut (30.10.):** Gleiche Technik
  (`freebies/seo-checkliste/index.html`, gemeinsames `freebies/freebie.css`,
  `node scripts/freebie-pdf.mjs seo-checkliste`). 12 Seiten: Wie Google
  lokal entscheidet (Relevanz, Entfernung, Bekanntheit) + Zeiträume aus dem
  Blog, 7 Schritte mit 30 Prüfpunkten (Profil, Suchbegriffe mit Tabelle,
  Website mit Titel-Vorlage, Bewertungen mit 3 Textvorlagen, Einträge,
  Technik + Website-Check, Wochenplan), Selbsttest mit Auswertung, Messen,
  Erstgespräch. Titelfoto = Handwerker-Stockfoto der alten Canva-PDF.
  Vorschaubild `freebie-seo-ebook-transparent.webp` neu. Seitentexte auf
  „30 Prüfpunkte, 12 Seiten“. **Beide PDFs zuerst in MailerLite tauschen,
  dann Push.**
- **KI-Checkliste neu gebaut (29.10.):** Alte Canva-PDF (Tool-Tutorial für
  Coaches, Hype-Ton, 2025) ersetzt durch eigene 10-seitige PDF im Website-
  Design: `freebies/ki-agenten-checkliste/index.html` → `node
  scripts/freebie-pdf.mjs ki-agenten-checkliste` erzeugt
  `freebies/ki-agenten-checkliste.pdf` plus Titelbild. Inhalt: 3 Regeln,
  8 Aufgaben (Heute/Mit KI/Freigabe), 6 „lohnt nicht“, Selbsttest-Tabelle,
  8 Datenpunkte, 4-Wochen-Plan, 4 eigene Pixel56-Abläufe, Erstgespräch.
  Nur belegte Inhalte (Beispiele von der KI-Seite), keine Werkzeugnamen.
  Vorschaubild `public/bilder/freebie-ki-ebook.webp` neu. Seitentexte
  (`lib/ressourcen.ts`, Teaser) beschreiben die neue PDF. **Reihenfolge
  beim Livegang: Inhaber lädt die PDF in MailerLite hoch (Automation
  „KI-Agent“, Anhang/Link tauschen), erst dann Push.**

- **Schrift:** Figtree, Fließtext kräftiger und größer, keine Serifen-Kursive
  mehr. Vom Inhaber abgenommen („Variante 3“).
- **Dachdecker-Projekt anonym (24.10.):** Inhaber will den Betrieb (früher
  MDU) nicht nennen. Slug `dachdecker-region-koblenz`, kein Name, keine
  Logos in Bildern. Nirgends wieder einführen.
- **Wegweiser auf der Startseite (23.10.):** Abschnitt 01 ist jetzt „Wo
  drückt es bei dir?“ mit sechs Situationskarten, jede führt direkt zum
  passenden Fragebogen (Webdesign, Google Ads, Mitarbeiter, Content, KI,
  „Weiß nicht“ → Kontakt-Fragebogen). Ersetzt den reinen Satz „Die Arbeit
  stimmt…“. Grund: Besucher denken in Problemen, nicht in Leistungen.
- **Nur die Handynummer 0178 5282464** auf der Seite (auch Impressum,
  Datenschutz, Schema), Festnetz 02622 entfernt (23.10.): verrät den Standort
  und Atilla ist mobil erreichbar. Google-Unternehmensprofil angleichen.
- **Kein Standort Bendorf** sichtbar, niemand soll vorbeikommen; „aus
  Koblenz“ ist okay. WhatsApp und E-Mail immer anbieten.
- **Leistungsseiten (17.10.):** alle acht unter dem Hero gekürzt (kurze
  Sätze, Schmerz → Lösung → Beweis, keine Preisaussagen, keine neuen
  Zahlen). Gestrichen: „Kosten“-Abschnitte (Meta Ads, Google Ads,
  Mitarbeitergewinnung), Prüfpunkte und Landingpage-Teaser auf Webdesign,
  „Verantwortungsvolle Umsetzung“ auf KI (Doppelung). FAQ je Seite auf
  sechs. Kundenstimmen-Kopf überall „Wörtlich so veröffentlicht.“, Prozess
  „So läuft es“. Koblenz nur noch im Region-Abschnitt (Webdesign), in
  Suchbeispielen und im Seitentitel.
- **Kontaktseite (17.10.):** Hero „15 Minuten. Dann weißt du, wo dein
  Hebel liegt.“, rechts Termin-Karte (Calendly, WhatsApp, E-Mail), darunter
  Abschnitt 01 = allgemeiner Klick-Fragebogen. Das alte `KontaktForm` ist
  nicht mehr eingebunden (Datei bleibt).
- **Positionierung (15.10., mit dem Inhaber abgestimmt):** Zielgruppe
  „kleine und mittelständische Unternehmen“ (Mittelstand ausdrücklich
  erwünscht: Team, Standort, Budget), **nicht** nur Handwerk und **nicht**
  „Selbstständige/kleine“ vorn. Region: „deutschlandweit · DACH-Region“,
  keine Länderaufzählung, Koblenz nur im Seitentitel, im Region-Abschnitt
  und im Fuß. Ansprache nach dem Baulig-Muster: Problem vor Zielgruppe,
  Schmerz vor Lösung, Beweis, Ablauf, „Für wen geeignet“, ein Aufruf.
  **Keine Preisaussage** auf der Seite (auch nicht „fair“), nur die
  Qualifizierung „günstigste Baukasten-Lösung passt nicht“. Hero:
  „Du machst gute Arbeit. Online merkt das keiner. Wir ändern das. Alles
  aus einer Hand.“ (Klasse `hero-satz`, kleinere Schrift). Vier Sätze nach
  der Liste des Inhabers (veraltete Website, nur Empfehlung, keine
  Bewerber, kein Marketing-Wissen/keine Zeit), danach neuer Block
  „Ohne System / Mit System“ (`#unterschied`, aus der alten Webflow-Seite
  übernommen, dort „Ohne uns / Mit Pixel56“). Passt/Passt nicht mit
  Budget-Satz ohne Preis. Kurze, hochwertige Texte mit rotem Faden.
  Leistungs-Heros, Leistungsübersicht, Über uns, Fuß, Meta-Beschreibungen
  und Schema (areaServed DE/AT/CH) auf dieselbe Breite gezogen.
- **Bilder in den Abschnitten (16.10., Wunsch des Inhabers):** jede
  Erklärung bekommt ein echtes Beispiel. Vier Sätze: je ein Projektbild
  mit Link (Colak, Stark ins Neue, Van den Berg, M&A Transporte);
  Leistungskarten: je ein Beispielbild (CurlyAnn, Van den Berg, Burgerfabriq,
  Teykto). Tagesplaner-Freebie hat jetzt ein Bild
  (`public/bilder/freebie-tagesplaner.webp`, aus der Webflow-Grafik
  „pixel56.de - Tagesplaner PDF.svg“ gerendert und zugeschnitten; Webflow
  nur lesend). Passt/Passt nicht auf acht bzw. sechs Punkte erweitert
  (Selbstständige, Unternehmer, roter Faden, alles aus einer Hand).
  **Entschieden (16.10.):** Hero bleibt ohne Koblenz-Bild, Inhaber folgt
  der Empfehlung.
- **Vergleich alt/neu (15.10.):** Alte Webflow-Seite hatte Breite
  (Handwerk, Coaches, KMU, DACH) und harten Verkaufston, aber keine
  Beweise, unhaltbare Versprechen („Ergebnisse in 2–4 Wochen“,
  „Top-Rankings“) und 291 fast identische Standortseiten. Neue Seite:
  Beweise, Struktur, Technik; Ton und Breite aus der alten übernommen.
- **Standort:** sichtbar nur noch „Koblenz“ (Kicker, Fuß, Über uns,
  Kontakt, Team, Karriere, Blog-Autorenzeile, OG-Bilder). „Bendorf“ bleibt
  nur in Impressum, Datenschutz, Schema und Standortkarte. Auf den
  Standortseiten steht seit 24.10. „aus der Region Koblenz“ und die
  Fahrzeit, kein Bendorf mehr (außer auf den Bendorf-Seiten selbst).
- **Standortseiten individuell (24.10., Auftrag des Inhabers):** Die 65
  indexierbaren Standortseiten (13 Städte × Webdesign, Google Ads, Meta Ads,
  SEO, Social Media) haben eigene Texte in `lib/standort-texte/<stadt>.ts`
  (Hero, Lage und Wirtschaft der Stadt, Schmerz und Lösung, vier konkrete
  Punkte, passende Projekte, zwei Kundenstimmen, vier FAQ). Vorher waren
  76 % der Sätze zwischen zwei Seiten identisch, Vorgabe des Inhabers:
  höchstens 10 %. Jetzt 0 % im Inhalt, Prüfskript meldet Dubletten, Titel
  über 50 und Meta über 155 Zeichen. Gerendert von
  `components/StandortSeite.tsx`; `LocationPage.tsx` bleibt nur für die 226
  noindex-Städte. Regeln dabei: keine erfundenen Zahlen, Kundennamen nur
  mit Beleg (CurlyAnn = Koblenz, Van den Berg = Stellen in Andernach,
  Lernforum = Hessen), Stadtfakten nur allgemein bekannte (Sehenswürdig-
  keiten, Stadtteile, Verkehr, Branchenstruktur). Neue Stadt = neue Datei
  plus Eintrag in `lib/standorte.ts`. Danach auch Projektseiten entschlackt
  (eigene FAQ je Projekt in `lib/projekt-fragen.ts`, kein geteilter
  Ablauf-Block mehr) und Blog-Themenseiten mit eigenem Einstieg (`intro`).
  Offen: sechs kurze Blogartikel haben längere Zwillinge zum selben Thema,
  Vorschlag Weiterleitung, Inhaber entscheidet.
- **Zentrale:** interne Zahlen nie zeigen. Auf der Seite läuft ein
  erfundenes Beispiel (Dachdeckerei Muster, „Dein Unternehmen“ in der
  Mitte), klickbar: Bereiche, Aufgaben abhaken, Verantwortliche,
  Anbindungen, Tagesplan. Alles als Platzhalter gekennzeichnet.
- **Website-Check:** läuft ohne KI, rein technische Prüfung in der
  Netlify-Funktion (8-s-Budget). Live noch nicht mit echter Adresse getestet.
- **Google-Bewertungen:** Stand „5,0 · 27 Bewertungen“ laut Inhaber
  (`googleAnzahlLautProfil`), Liste im Repo hat 23 wörtliche Texte. Auf der
  Seite nur die fünf mit Bild und Projekt (Anna Milossi/CurlyAnn mit
  Porträt und vollem Wortlaut als `textVoll`, Margarete Wolf/Stark ins Neue,
  Van den Berg, Angela Wurzel/Lernforum, Nalan Colak/Colak). Alle Karten
  gleich aufgebaut (Website-Bild, Avatar, Sterne, Jahr, Text, „Weiterlesen“,
  „Zum Projekt“). Rest über Knopf „Alle 27 Bewertungen auf Google lesen“.
  Live-Zahlen über Places API, wenn `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID`
  gesetzt sind.
- **„Ein Projekt im Detail“** zeigt mehrere Projekte (`DetailReihe`), z. B.
  CurlyAnn auf Start, Webdesign und Projekte.
- **CurlyAnn Soulcare & Art** (curlyann-soulcare.de): komplette Seite von
  Pixel56, Jahr **2026**, Coaching und kreative Workshops/Seminare,
  Branding + Website, Buchungstool mit Kalender, Online-Zahlung,
  Bestätigungs-Mail.
- **Van den Berg Gruppe:** Firma existiert nicht mehr, Zusammenarbeit
  „bis 2024“, drei Meta-Anzeigen in der Galerie, Texte in Vergangenheit.

- **Strategie-Entscheidung (19.10.):** Website bleibt breit, keine Preise.
  Nach außen ein Speer für den Mittelstand (20 bis 200 Mitarbeiter):
  „Marketing- und Digitalabteilung ohne Festanstellung, abrufbar,
  pausierbar“. Alles dazu liegt fertig in `docs/AKQUISE-MITTELSTAND.md`,
  `docs/AKQUISE-LISTE-1.md`, `docs/akquise-blatt/`, `docs/akquise-angebot/`
  und der Google-Tabelle im Drive des Inhabers. Regel: nichts aus Bendorf
  und Umgebung anschreiben, Baldus und WEPA gestrichen.
  **Akquise ruht (23.10.):** Inhaber will erst die Website fertig haben.
  Keine weiteren Akquise-Lieferungen, bis er es ausdrücklich sagt.
- **Anfrage-Ablauf (23.10.):** Resend läuft (Domain pixel56.de verifiziert,
  drei Variablen in Netlify, Testmail angekommen). **Telefon ist Pflicht**
  im Fragebogen. Jeder Besucher bekommt sofort eine schlichte Bestätigung
  (`lib/anfrage-mail.ts`): angekommen, Anruf in den nächsten Werktagen unter
  seiner Nummer, WhatsApp für Eilige, seine Angaben zur Erinnerung. Keine
  Reaktionssätze, kein Calendly in der Mail (Inhaber: unverständlich ohne
  Kontext). **Preis und Angebot nie automatisch**, nur im Telefonat.
  Ablauf des Inhabers: Mail kommt → er ruft an.
- **LIVE seit 23.10. abends:** www.pixel56.de läuft auf Netlify (IONOS-DNS:
  A @ → 75.2.60.5, CNAME www → pixel56-neue-seite.netlify.app, MailerLite-
  Einträge neu angelegt, Post/Resend unberührt). Primär ist www, pixel56.de
  leitet um, Let's-Encrypt-Zertifikat aktiv. `NEXT_PUBLIC_INDEXABLE=true`
  gesetzt, robots.txt erlaubt, Sitemap erreichbar. Webflow-Hosting bleibt
  zwei Wochen als Rückfall, dann kündigen. Anwalt für Rechtstexte im Nachgang.
- **Livegang-Reihenfolge (23.10.):** Resend-Konto und Mail-Schlüssel in
  Netlify → Fragebogen-Test → Domainumzug → Google-Freigabe. Anwaltsprüfung
  der Rechtstexte erst im Nachgang.

## Blog-Woche (seit 3.11., Auftrag des Inhabers)

**Ziel:** jede Woche zwei Blog-Stücke, die Besucher und Anfragen bringen:
ein neuer Artikel plus ein alter Artikel überarbeitet oder mit seinem
Zwilling zusammengelegt. Nach vier Wochen Search Console prüfen, dann
entscheiden, ob zwei neue pro Woche. Artikel müssen Bilder oder Grafiken
haben (Inhaber-Wunsch, „nicht nur Text“), CTA, Links auf Leistungen und
Freebies, und 10/10 im Prüfskript erreichen.

**Termin:** Scheduled Task „Pixel56 Blog-Woche“ (trig_018sFUYqPmQpkTZYzma9T7nz),
montags 4:49 Uhr Berlin, feuert in den Chat 3.0 (session_0113S7MdAHKAucSgoQM6wtPw).
Umgezogen am 17.11.: alter Termin aus dem Vorgänger-Chat gelöscht, gleicher
Text. Der Vorgänger-Chat konnte nicht mehr pushen (GitHub blockiert), seine
beiden Commits kamen als Git-Bundle in den neuen Chat.
Er schreibt beide Stücke, baut, prüft, macht Screenshots, committet lokal
und bittet um „Push“. Der Inhaber antwortet möglichst am selben Tag, sonst
können lokale Commits mit dem Container verloren gehen.

**Technik (3.11. gebaut):** Blocktypen `bild`, `grafik`, `faq`, `cta` in
`lib/blog-typen.ts`, Darstellung in `app/blog/[slug]/page.tsx` (FAQ auch
als FAQPage-Schema, erstes Bild als Artikelbild im Schema, Quellenliste
über `quellen`). Grafiken in `components/BlogGrafik.tsx` (SVG, CSS-animiert,
still bei „Bewegung reduzieren“): `ki-antwort`, `klick-verlauf`. Stile am
Ende von `app/globals.css`. Prüfskript `npm run blog:check [slug]` auf dem
Build: Titel 20–60, Beschreibung 70–160, eine H1 und ≥3 H2, ≥900 Wörter,
FAQ-Schema, Bild/Grafik, Alt-Texte, ≥2 Leistungs- und ≥1 Freebie-Link,
Zwischen-CTA, du-Form plus Quellen bei Zahlen. Neue Artikel als Datei in
`lib/artikel/<slug>.ts`, Eintrag in `lib/artikel/index.ts`.

**Stand 9.11.:** erster automatischer Termin gelaufen, zwei Stücke lokal
committet, Push offen. Grafiken jetzt vier: `ki-antwort`, `klick-verlauf`,
`seo-zeitverlauf`, `bewerber-weg`. Lernpunkt fürs Prüfskript: Sätze, die
mit „Sie“ (= sie, Plural) beginnen, zählen als Sie-Form; beim Schreiben
vermeiden. Blog-Woche 2 (16.11.) am 17.11. im Chat 3.0 geprüft (Build, beide
Artikel 10/10, SEO-Check). Push am 17.11. zunächst mit 403 abgelehnt
(„Claude doesn't have GitHub access … for your organization“), am 18.11.
nach Freigabe des Inhabers erfolgreich (34cf10b). Falls das wieder
passiert: Claude-GitHub-App auf dem Repo installieren oder GitHub in den
claude.ai-Connectors neu verbinden.
**Blog-Woche 3 (23.11., gepusht b2072b2 nach Freigabe am selben Tag):** neu
`google-ads-oder-meta-ads` (10/10, Grafik `kanal-wahl`, Van-den-Berg-Motiv),
alt `ki-agenten-fuer-selbststaendige` komplett neu geschrieben unter altem
Slug (10/10, Grafik `ki-freigabe`, Bitkom-Zahl vom 14.9.2026 als Quelle,
Foto kmu-webseiten.de). Grafiken jetzt acht. Im selben Commit: **Next von
16.4.2 auf 16.4.6** (npm audit meldete sieben Sicherheitslücken in Next und
eine in undici; `npm audit fix` → 0). Grund neben der Sicherheit: Next
bricht seit 16.4.x den Build mit `SecurityFatalError` ab, wenn die
installierte Version eine bekannte Lücke hat (erster Lauf scheitert, der
sofortige zweite Lauf geht durch). Auf Netlify ist jeder Build ein erster
Lauf, deshalb bei dieser Meldung immer zuerst Next aktualisieren. Nächste
Woche: neu „Website-Relaunch ohne Rankingverlust: die Checkliste“, alt die
Google-Rezensionen-Zwillinge zusammenlegen. Screenshot-Hinweis:
Handy-Aufnahmen mit eigenem Kontext und weggeklicktem Cookie-Banner
machen, sonst kommen leere Bilder. Vorher: Alle 36 Artikel im Build lagen im Schnitt bei 4,9/10; die 16
alten (2024/25) und die Rohfassungen aus Webflow bei 4–5. Muster-Artikel
`ki-uebersichten-weniger-klicks-mehr-kunden` (3.11.) hat 10/10.

**Search-Console-Befund (Export 6.11., letzte 3 Monate, Zahlen liegen
nicht im Repo):** 120 Klicks, 57.000 Impressionen, Schnitt Position 32.
Klicks kommen fast nur vom Tagesplaner (41, Position 14, „tagesplaner
vorlage kostenlos pdf“ Position 8) und der Startseite. Große Reichweite
ohne Klicks: „webdesign koblenz“ 1.931 Impressionen auf Position 33,
`/webdesign` 7.000 Impressionen auf Position 57, „wie lange dauert seo“
1.163 Impressionen auf Position 28 (zwei Zwillingsartikel teilen sich die
Kraft; „wann sehe ich erste ergebnisse durch seo?“ steht schon auf 5,8).
„mehr anfragen bekommen handwerksbetrieb“ Position 5,7 und „mehr anfragen“
7,8 zeigen auf den alten Artikel „5 einfache Tipps“ (2.500 Impressionen,
0 Klicks, Titel im Suchergebnis abgeschnitten). „ki für selbstständige“
15,6 und „ki tools für selbstständige“ 14 auf die Rohfassung
`/blog/ki-agenten-fuer-selbststaendige` (3.760 Impressionen). Alte
Stadtseiten unter `/locations/*` sind noindex, bekommen aber noch
Impressionen: Bonn 6.250 („webdesign bonn“ Position 20), Mainz Google Ads
Position 10–13, Karlsruhe, Mönchengladbach, Graz. Die werden mit dem
noindex verschwinden. **Entscheidung des Inhabers nötig:** Bonn und Mainz
als eigene indexierbare Städte mit eigenem Text anlegen (Nachfrage ist
belegt), oder bewusst nur die Region Koblenz?

**Entschieden 7.11.:** Schritt für Schritt, nicht alle 84 Städte. Bonn
und Mainz sind jetzt indexierbare Städte mit eigenen Texten
(`lib/standort-texte/bonn.ts`, `mainz.ts`, je vier Seiten: Webdesign,
Google Ads, Meta Ads, SEO; keine Social-Media-Seite, weil es dafür keine
alte URL gibt). Eintrag in `regionStaedte` (Bonn 70 km/55 min, Mainz
100 km/70 min, Fahrzeiten gerundet). Neues Prüfskript
`npm run standort:check [stadt]`: Titel ≤ 50, Meta ≤ 155, Anteil
identischer Sätze zu jeder anderen Seite (Grenze 10 %); Bonn/Mainz jetzt
höchstens 2 %. Jetzt 15 Städte, 73 indexierbare Standortseiten, 218
noindex. Der Inhaber schickt alle zwei Wochen einen Search-Console-Export;
weitere Städte (Karlsruhe, Bielefeld, Essen) nur bei belegter Nachfrage.
Gepusht 7.11. (2b1771f), live geprüft: alle acht Seiten unter
`/locations/<slug>` (die alten Google-bekannten Adressen bleiben die
echten URLs, `/standorte/...` leitet dorthin), ohne robots-Meta, in der
Sitemap, alle Abschnitte sichtbar, keine Skriptfehler. Offen beim Inhaber:
in der Search Console die acht Adressen per „URL-Prüfung → Indexierung
beantragen“ anstoßen.

**Zweiter Export (11.11., Daten bis 9.11.):** Woche ab 2.11. mit 27 Klicks
die stärkste im Drei-Monats-Fenster (davor 5 bis 15 pro Woche),
Impressionen pro Woche von 2.800 (Ende September) auf 5.800 gestiegen,
Durchschnittsposition dabei von 25 auf 40 (mehr breite Begriffe weit hinten,
normales Wachstumsmuster). Bonn-Seite 16 Klicks (vorher 9), vor allem
„bonn it agentur“ und „bonn webdesign“. Eigene Testaufrufe Anfang November
können einen Teil der Klicks erklären. Wirkung der Änderungen vom 7.11.
(Bonn/Mainz) und 11.11. (Blog, Produktbild) ist darin noch nicht enthalten:
Zielbegriffe unverändert (SEO-Dauer 27,7, „wann sehe ich erste Ergebnisse“
6,1, „webdesign bonn“ 21, Mainz-Ads-Begriffe 9 bis 11, Tagesplaner 8,0).
Nächster Vergleich Ende November.

**Dritter Export (23.11., Daten 22.8. bis 21.11., Dateien nur im Chat, nicht
im Repo):** 111 Klicks, 52.800 Impressionen in drei Monaten. Wochen: 2.11.
27 Klicks (Ausreißer, eigene Tests), 9.11. 3, 16.11. 9; Impressionen pro
Woche 4.300 bis 5.700, Niveau gehalten. Desktop 40.400 Impressionen,
Mobil 12.000 (Agentur-Begriffe werden am Rechner gesucht). Befund je Baustelle:
- Tagesplaner weiter die einzige Klickquelle: 37 Klicks, Position 14,7;
  „tagesplaner vorlage kostenlos pdf“ Position 8,0 mit 388 Impressionen,
  aber nur 1 % Klickrate → Titel/Snippet-Aufgabe bestätigt (schnellster Gewinn).
- Bonn: 15 Klicks, 5.180 Impressionen, Position 39; „bonn webdesign“ 21,8
  (4 Klicks), „webdesign bonn“ 22,2 (760 Impressionen, 0 Klicks), „bonn it
  agentur“ 7 Klicks bei 24 Impressionen. Bonn ist nach dem Tagesplaner die
  zweitstärkste Seite.
- Mainz: Google zeigt für „adwords/ads agentur mainz“ (Positionen 10 bis 13)
  noch die Meta-Ads-Seite (3.641 Impressionen, Position 38), die neue
  Google-Ads-Seite erst 155 Impressionen auf 19. Abwarten, Umschwenken dauert.
- Blog mit Reichweite ohne Klicks: `ki-agenten-fuer-selbststaendige` 4
  Klicks, 3.352 Impressionen, Position 19 („ki für selbstständige“ 15,5,
  „ki tools für selbstständige“ 14,8) → heute neu geschrieben.
  `5-einfache-tipps` 3.018 Impressionen, 0 Klicks, Position 23,5 („mehr
  anfragen bekommen handwerksbetrieb“ 6,0, „handwerker mehr anfragen
  bekommen“ 5,4) → seit 18.11. neu, Wirkung frühestens Mitte Dezember.
  `seo-dauer-bis-ergebnisse` 3.232 Impressionen, Position 27 („wie lange
  dauert seo“ 26,7, vorher 27,7; „wann sehe ich erste ergebnisse“ 6,5), der
  alte Zwilling bekommt noch 158 Impressionen. `meta-ads-mehr-kunden-fur-
  handwerker-kmu` 3 Klicks, 1.032 Impressionen, Position 22, „meta ads
  handwerk“ Position 3,95 → nächster Kandidat zum Neuschreiben.
- **Koblenz-Kernbegriffe stehen auf Seite 5:** „webdesign koblenz“ 1.376
  Impressionen Position 50,7 (6.11. noch 33), „webdesigner koblenz“ 52,
  „webdesign agentur koblenz“ 49,6, „suchmaschinenoptimierung koblenz“ 60,
  „seo koblenz“ 66. `/webdesign` 5.041 Impressionen Position 57, Startseite
  4.387 auf 57. Die eigene Seite `/locations/koblenz` („Webdesign Koblenz:
  Websites, die anfragen lassen“) taucht im Export gar nicht auf, also 0
  Impressionen: Google bewertet sie nicht, sondern zeigt `/webdesign` und
  die Startseite weit hinten. Zwei Ursachen: Drei Seiten konkurrieren um
  denselben Begriff (Startseite „Digitalagentur Koblenz“, `/webdesign`
  „Webdesign Agentur Koblenz“, `/locations/koblenz` „Webdesign Koblenz“),
  und die Koblenz-Seite war nur über die Standort-Übersicht und die
  15er-Liste unter `/webdesign` verlinkt. Am 23.11. (lokal) ergänzt: Link
  im Region-Abschnitt der Startseite, im Koblenz-Abschnitt von `/webdesign`
  und im Fuß („Webdesign Koblenz“). CurlyAnn ist auf der Koblenz-Seite
  schon als Projekt hinterlegt. **Offen beim Inhaber:** in der Search Console
  per URL-Prüfung nachsehen, ob `/locations/koblenz` im Index ist, und
  Indexierung beantragen. Der größere Hebel für Koblenz liegt außerhalb
  der Website (siehe „Was nur der Inhaber kann“ weiter unten).
- Weitere Nachfrage ohne Seite: „webdesign bielefeld“ 513 Impressionen
  (Seite noindex, 1 Klick), „google ads agentur karlsruhe“ 273 (Seite
  noindex, 987 Impressionen auf 17,9). Bleibt bei der Regel: nur bei
  weiter belegter Nachfrage als eigene Stadt.
- Google for Jobs: die Vertriebsprofi-Stelle erscheint als „Stellenangebot“
  (56 Impressionen, 2 Klicks, Position 8,8). Produkt-Snippets 2 Impressionen.
  Österreich 1.606 und Schweiz 1.121 Impressionen, je 1 Klick.
**Vorher/nachher Livegang (23.10.), aus demselben Export:** acht Wochen vor
dem Livegang 6,5 Klicks und 3.400 Impressionen pro Woche, vier Wochen danach
12 Klicks (7 ohne die Testwoche 2.11.) und 5.100 Impressionen pro Woche.
Reichweite plus 50 %, Klicks noch nicht; das ist nach vier Wochen normal,
die eigenen Artikel nennen vier Monate bis ein Jahr. Inhaber fragte am
23.11. „sind die Zahlen besser geworden?“ und will Seite eins. Antwort:
Reichweite ja, Klicks noch nicht, Seite eins ist für Koblenz-Kernbegriffe
kein Versprechen (Regel der Seite: keine Platz-1-Versprechen), aber das Ziel
der nächsten Monate. Umgesetzt am 23.11. (lokal): Koblenz-Verlinkung
(Startseite, `/webdesign`, Fuß), Tagesplaner-Seite auf „Tagesplaner Vorlage
kostenlos als PDF“ (Titel, Beschreibung, H1, vierte Frage).

**Was nur der Inhaber kann (größter Hebel für „webdesign koblenz“):**
1. Google-Unternehmensprofil: Hauptkategorie „Webdesigner“ oder
   „Werbeagentur“, Einzugsgebiet Koblenz und Umland, Website-Link auf
   `/locations/koblenz` oder `/webdesign`, alle zwei Wochen ein Beitrag.
2. Bewertungen: neue Kunden um Text bitten, in dem Leistung und Ort stehen
   („Website für unsere Praxis in Koblenz“). Antworten auf jede Bewertung.
3. Einträge mit identischen Daten (Name, Handynummer, Website): IHK
   Koblenz, Gelbe Seiten, 11880, Das Örtliche, Branchenbuch Koblenz, Agentur-
   Verzeichnisse (ProvenExpert, Sortlist). Keine Straße nötig, wo optional.
4. Erwähnungen von außen: Kundenseiten verlinken „Website von Pixel56“,
   Partner, lokale Presse, Vereine, Innungen. Fünf saubere Links aus der
   Region wirken mehr als jede Textänderung.
5. Search Console: `/locations/koblenz` und die acht Bonn/Mainz-Adressen
   per URL-Prüfung zur Indexierung anmelden.

Konsequenz für die Blog-Reihenfolge: nächste Woche alt = Meta-Ads-Zwillinge
(`meta-ads-mehr-kunden-fur-handwerker-kmu` neu schreiben, Budget-Zwillinge
`meta-ads-budget-realistisch` und `meta-ads-budget-handwerksbetrieb`
zusammenführen), Google-Rezensionen danach. Nächster Export Anfang Dezember.

**Reihenfolge nach Daten (zuerst die alten Stücke mit Reichweite):**
- [x] SEO-Dauer (9.11.): Zwillinge zusammengelegt in
  `lib/artikel/seo-dauer-bis-ergebnisse.ts` (Slug mit Google-Historie, 10/10,
  1.260 Wörter, Grafik `seo-zeitverlauf`, Googles „vier Monate bis ein Jahr“
  als Quelle); `seo-wie-lange-dauert-es` aus `lib/blog.ts` entfernt und in
  `next.config.ts` dauerhaft weitergeleitet.
- [x] „5 einfache Tipps“ (16.11.): neu geschrieben unter altem Slug, Titel
  „Mehr Anfragen als Handwerksbetrieb: Welche 5 Hebel wirken zuerst?“,
  seoTitel ohne Abschneiden, 10/10, Grafik `anfrage-hebel` (vier Stationen,
  schrumpfender Balken), Foto GM-Dachdecker (Kundenprojekt), CTA SEO-Checkliste.
- [x] KI für Selbstständige (23.11.): Rohfassung `ki-agenten-fuer-selbststaendige`
  neu geschrieben, Titel „KI für Selbstständige: Welche Aufgaben lohnen sich
  zuerst?“, H2 zu „KI-Tools für Selbstständige“ ohne Produktnamen, CTA
  KI-Agenten-Checkliste, 10/10, 1.630 Wörter.
- [ ] Tagesplaner-Seite: Titel und Beschreibung auf „Tagesplaner Vorlage
  kostenlos als PDF“ schärfen, kurzer Fragen-Block; Position 8 → 3 ist
  der schnellste Klick-Gewinn der Seite.
- [ ] Titel mit „…“ im Suchergebnis beseitigen (seoTitel setzen): SEO-Dauer,
  5 Tipps, weitere per `npm run blog:check`.

**Themen (abhaken, Reihenfolge = Vorschlag):**
- [x] Googles KI-Übersichten: weniger Klicks heißt nicht weniger Kunden (3.11.)
- [x] Mitarbeiter finden über Social Media: Wie läuft eine Bewerberkampagne? (9.11.,
  `mitarbeiter-finden-social-media`, 10/10, 1.290 Wörter, Grafik `bewerber-weg`,
  Anzeigenmotiv aus dem Van-den-Berg-Projekt als Bild, CTA Mitarbeitergewinnung)
- [x] Karriereseite, die Bewerbungen bringt (16.11., `karriereseite-die-bewerbungen-bringt`,
  10/10, Grafik `karriereseite-aufbau`, Google for Jobs mit JobPosting-Quelle)
- [x] Google Ads oder Meta Ads: was passt zu welchem Betrieb? (23.11.,
  `google-ads-oder-meta-ads`, 10/10, 1.730 Wörter, Grafik `kanal-wahl`,
  drei erfundene Beispielbetriebe als solche gekennzeichnet, CTA Website-Check)
- [ ] Website-Relaunch ohne Rankingverlust: die Checkliste
- [ ] Landingpage oder Website: wann lohnt sich was?
- [ ] Auf Google-Bewertungen antworten: Vorlagen für Betriebe
- [ ] WhatsApp als Kundenkanal: Einrichtung, Regeln, Datenschutz
- [ ] Lokales SEO für Dienstleister, nicht nur Handwerk
- [ ] Was ein KI-Agent im Betrieb wirklich übernimmt, und was nicht
- [ ] Reels für Handwerker: zehn Ideen ohne Schauspielerei
- [ ] Erstgespräch mit einer Agentur: welche Fragen du stellen solltest
Dazu Fragen, die der Inhaber am Telefon hört (noch nicht geliefert).

**Alte Artikel, Kandidaten für Überarbeitung oder Zusammenlegung:** die
Zwillinge (Google-Rezensionen, SEO-Dauer, Meta-Ads-Budget, langsame
Website, je kurz und lang), Tool-Listen von 2024 (KI-Schreibtools, „8
bessere KI-Tools“, Calendly-Alternativen 2023, Grok vs. DeepSeek, Skool).

## Offene Punkte (Reihenfolge = Priorität, Stand 31.10.)

**Erledigt 2.11. (MailerLite und Push):** Gruppe `KI-Suche E-Book`
(ID `203059250002396418`) und Automation „KI-Suche E-Book“ („Subscriber
joins a group“, Mail mit Titelbild und 16-Seiten-PDF, Anrede „Hallo,“ ohne
{$name}, weil das Formular keinen Namen abfragt) vom Inhaber angelegt und
aktiviert; PDFs in „Lokales SEO“ und „KI-Agent“ getauscht; Variable
`MAILERLITE_GROUP_KI_SUCHE` in Netlify gesetzt. Push 2.11. (17de170),
Netlify hat gebaut, `/ressourcen/ki-suche` zeigt die 16-Seiten-Fassung.
Testanmeldung über `/api/lead` mit `quelle: ki-suche` → `{ok:true}`;
Inhaber bestätigt 2.11.: Mail mit der neuen PDF ist angekommen. Alle vier
Freebie-Downloads laufen.
**Fuß (5.11., lokal):** „Partner werden“ (`/partner`) unter „Unternehmen“
neben Karriere, auf Nachfrage des Inhabers; Empfehlung: ja, unauffällig,
von jeder Seite erreichbar, hilft Google.

**Search-Console-Meldung „Händlereinträge, Feld image fehlt“ (11.11., lokal):**
Betraf die einzige Seite mit Produkt-Schema, `/product/tagesplaner-to-do-liste-set`
(Canva-Set, 3,90 €). `image` im Product-Schema ergänzt und dasselbe Bild
(`freebie-tagesplaner.webp`) sichtbar in Abschnitt 01 eingebaut. Nach dem Push
in der Search Console unter „Händlereinträge“ auf „Fehlerbehebung prüfen“.

**Stil-Sicherheitsnetz (4.11., lokal):** Inhaber sah die Seite kurz ohne
Design (Screenshot: nackter Text, riesige Symbole). Ursache: Seite war
während des Builds offen, alter Seitenaufbau zeigte auf eine CSS-Datei mit
altem Namen. HTML wird immer neu geprüft (max-age=0), CSS ein Jahr unter
eindeutigem Namen; betroffen ist nur das Minutenfenster eines Builds.
Gegenmittel: Inline-Skript am Ende von `app/layout.tsx` prüft nach `load`,
ob die Schrift Figtree am `body` ankommt; wenn nicht, einmaliges
`location.reload()` mit sessionStorage-Merker `p56-stil` (kein Loop).
Playwright-Test: normal 1 Ladevorgang, bei 404 auf CSS genau 2, danach
Merker gelöscht. Builds weiter zu ruhigen Zeiten (Montag früh).
**Bot-Schutz der Formulare (3.11., gepusht 298f287, live geprüft):** Anlass war
eine Beschwerde-Mail: Ein Fremder hatte die MailerLite-Bestätigungsmail
bekommen, weil jemand seine Adresse in ein Download-Formular eingetragen
hatte. Double-Opt-in in MailerLite ist aktiv (gut), die Formulare hatten
aber keinen Bot-Schutz. Jetzt in `lib/formschutz.ts` für `/api/lead` und
`/api/anfrage`: Herkunft (Origin/Referer nur pixel56.de, Netlify-Vorschau,
localhost), Mindestzeit 2 s ab Formular-Aktivierung (`t` im Body),
Honigfalle `website` (Fragebogen hatte sie schon, Freebie-Formular neu),
Drossel 5 Absendungen je IP und 10 Minuten (je Funktionsinstanz, grob).
`/api/lead` legt zusätzlich keine Adresse neu an, die in MailerLite noch
„unconfirmed“ ist, damit Fremde nicht mehrfach die Bestätigungsmail
bekommen. Stufe 3 (Cloudflare Turnstile) nur, falls Spam weitergeht.
MailerLite-Bestätigungsmail am 3.11. vom Inhaber auf du-Form umgestellt
(Account settings → Subscribe settings → Double opt-in emails); Ziel nach
dem Bestätigen: `https://www.pixel56.de/bestaetigt` (war `/danke`, das ist
die Seite für Anfragen). Entscheidung: kein Namensfeld im Download-Formular
(ein Feld = mehr Downloads; Name kommt später über Fragebogen/Gespräch).
Live-Test nach dem Push: ohne Herkunft 403, fremde Herkunft 403, zu
schnell 400, Honigfalle 200 ok, Fragebogen ohne Herkunft 403.
**Verlinkung des E-Books (2.11., gepusht 3.11., live im Fuß):** Fuß der
Website („Leitfaden KI-Suche“ unter Ressourcen, `lib/site.ts`), Übersicht
`/category/digitale-produkte` mit Bild, Freebie-Dreierreihe auf `/blog` und
`/dienstleistung` (Leitfaden ersetzt dort den Tagesplaner), zweite Karte
neben der SEO-Checkliste auf `/suchmaschinenoptimierung`. Build 751
Seiten, Screenshots geprüft. Inhaber hatte gefragt, ob die Seite im Fuß
steht: vorher nein, jetzt ja.
Vorschaubilder `freebie-ki-ebook.webp` und `freebie-ki-suche.webp` am 3.11.
wie die SEO-Vorschau freigestellt (1200×800 transparent, 660 px hoch, Ecken
16 px, -4°, Schatten); Rezept jetzt als Code in STATUS 3.11.
Hinweis: Die Live-Seite ist aus dieser Sandbox erreichbar (curl auf
www.pixel56.de geht), Live-Tests sind also möglich. „[skip netlify]“ im
Commit hat den Build offenbar nicht verhindert.

**Danach, in der Sitzung:**

4. E-Book KI-Suche von 7 auf 10 (Inhaber-Ziel). **Umgesetzt 31.10.
   (lokal, Push auf Freigabe):** jetzt 16 Seiten. Neu: Seite 3 sechs
   Begriffe in je einem Satz; Seite 13 Vorlagen zum Ausfüllen
   (Beschreibungssatz, Über-uns-Gerüst, Pressemeldung, Video-Titel) und
   die sechs Selbsttest-Fragen für sechs weitere Branchen (SHK,
   Steuerberatung, Physiotherapie, Kfz, Maschinenbau, Pflege); Seite 14
   Kurzfassung zum Ausdrucken (28 Prüfpunkte, Auswertung 0–9/10–19/20–28,
   Monatstest über sechs Monate). Zahlen nachgeprüft und präzisiert
   (Sistrix 17 % Aug. 2025 → 20 % Anfang 2026, Search-Console-Bericht
   „Generative KI“ seit Juni 2026). Website-Seite `/ki-suche` sagt
   16 Seiten. **Entschieden 3.11.:** Titelblatt bleibt das Stockfoto, der Canva-Bild-
   Gedanke ist gestrichen. **Noch offen:** Praxisbeispiel aus einem echten Betrieb, sobald ein Kunde die
   Hebel umgesetzt hat (Selbsttest vorher/nachher, 2–3 Monate); Zahlen
   halbjährlich prüfen. Nach Push: neue PDF in der MailerLite-Automation
   „KI-Suche“ hochladen (ersetzt die 14-Seiten-Fassung).
5. Partnerprogramm: Inhaber prüft Ton live unter `/partner`; falls auch
   Empfehlungspartner bis 35 % bekommen sollen, eine Zahl ändern.
6. Webflow-Hosting ab 6.11. kündigen (Seite seit 23.10. live und stabil).
7. Rechtstexte (Impressum, Datenschutz, AGB) von Anwalt/Generator
   gegenlesen lassen; Datenschutz um Google Places ergänzen, falls die
   Variablen gesetzt werden.
8. Search Console Mitte November: Abdeckung der 13 Standortseiten, 404,
   Klicks; „5 Gründe“-Artikel; Standortseiten mit Daten abgleichen.
9. Inhaber-Entscheidungen offen: sechs kurze Blog-Zwillinge zusammenlegen?
   „Bendorf“ auf `/standorte`-Übersicht lassen? Cloudflare-Umzug (nur bei
   steigenden Netlify-Kosten)?
10. Medien und Redaktion: Reels Handwerk, echte Vorher-Screenshots, 31
    alte Blogartikel nachschärfen, Adloc/Teykto-Hinweise bei Start ändern.

**Technik-Merkzettel:** Freebie-PDFs bauen mit
`node scripts/freebie-pdf.mjs <ki-agenten-checkliste|seo-checkliste|ki-suche>`
(HTML in `freebies/<name>/index.html`, Stile `freebies/freebie.css`,
Vorschaubilder per PIL aus `<name>-titel.png`). Canva/Higgsfield-Bilder sind
aus der Sandbox nicht in voller Größe ladbar; der Inhaber lädt sie hoch.

## Zuletzt geprüft (31.10.)

E-Book KI-Suche neu gebaut (`node scripts/freebie-pdf.mjs ki-suche`), 16
Seiten, Überlauf-Prüfung ohne Befund, alle Seiten als Bild gesichtet.
Website-Build nach der Textänderung in `lib/ressourcen.ts`: siehe STATUS
31.10.

### Davor (30.10.)

Build fehlerfrei (750 Routen), `seo:check:strict` ohne Befund, Playwright
auf 390/1280 px für `/partner`, Freebie-Seiten, Start, Karriere: kein
Überlauf, keine Skriptfehler, interne Links 200. PageSpeed live (29.10.,
mobil): Leistung 89, Barrierefreiheit 97 → lokal 100 nach ARIA-Fix, Best
Practices 100, SEO 100.
