# Kurzbriefing — Stand 2.11.2026

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
   16 Seiten. **Noch offen, nur mit Inhaber:** Titelbild ggf. gegen das
   Canva-Dachdecker-Bild tauschen (er lädt es hoch, dann „KI-generiert“ im
   Nachweis); Praxisbeispiel aus einem echten Betrieb, sobald ein Kunde die
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
