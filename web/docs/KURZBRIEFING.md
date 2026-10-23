# Kurzbriefing — Stand 23.10.2026

Einstieg für jede neue Sitzung. Kurz halten (unter 150 Zeilen), nach jedem
Arbeitsschritt aktualisieren. Details und Begründungen stehen im Protokoll
[`STATUS.md`](STATUS.md), Grundlagen in [`HANDOFF.md`](HANDOFF.md).

## Wie wir arbeiten

Der Inhaber (Atilla) schaut die Vorschau auf Netlify an und gibt Rückmeldung
Schritt für Schritt, oft als Sprachnachricht oder Screenshot. Jede Rückmeldung
wird umgesetzt, gebaut, mit Screenshot geprüft, committet und gepusht
(Zweig `codex/pixel56-neue-seite`). Letzter Commit: siehe `git log -1`.

## Entscheidungen des Inhabers (gelten weiter)

- **Schrift:** Figtree, Fließtext kräftiger und größer, keine Serifen-Kursive
  mehr. Vom Inhaber abgenommen („Variante 3“).
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
  nur in Impressum, Datenschutz, Schema, Standortkarte und auf den
  Standortseiten (Entfernungen werden ab Bendorf gerechnet).
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
- **Livegang-Reihenfolge (23.10.):** Resend-Konto und Mail-Schlüssel in
  Netlify → Fragebogen-Test → Domainumzug → Google-Freigabe. Anwaltsprüfung
  der Rechtstexte erst im Nachgang.

## Offene Punkte (Reihenfolge = Priorität)

1. **Vom Inhaber erwartet:** Rückmeldung zu den gekürzten Leistungsseiten,
   zur neuen Kontaktseite und zur Projekte-Übersicht (17.10., Auftrag „pass
   alles an“ für den Vier-Punkte-Plan: Leistungstexte, Kontakt + Projekte,
   Env-Liste, Livegang-Checkliste; alles umgesetzt, siehe STATUS 17.10.).
   **Adloc und Teykto bleiben in der Testphase** (nicht buchbar); bei Start
   Kicker/Hinweis auf der KI-Seite ändern.
2. **Klick-Fragebogen** auf allen acht Leistungsseiten und als Hauptweg auf
   `/kontakt` (`frageboegen.allgemein`: erste Frage wählt das Thema, der
   Betreff der Mail trägt es). Technik: `lib/fragebogen.ts`,
   `components/LeistungsAnfrage.tsx`, `app/api/anfrage/route.ts`. Ohne
   `RESEND_API_KEY` meldet das Formular „derzeit nicht verfügbar“; in Netlify
   sind die Schlüssel noch nicht gesetzt. Budget-Spannen sind Vorschläge,
   unterste Stufe weich („Erstmal klein anfangen“), intern als „kleines
   Budget“ markiert. Personenzeile „Gründer · antwortet dir persönlich“.
3. **Nur der Inhaber kann:** Netlify-Variablen setzen (Liste mit exakten
   Namen in `docs/LIVEGANG.md`, Abschnitt 1), danach einen Fragebogen live
   testen. Rechtstexte gegenlesen (Impressum, Datenschutz enthält jetzt
   Fragebogen/Resend und Website-Check; AGB seit 23.10. vollständig nach
   den Vorgaben des Inhabers: 50 % Anzahlung, 14 Tage, 4 Wochen Kündigung,
   Referenzrecht; Anwalt soll gegenlesen).
   Domainumzug Webflow → Netlify nach `docs/LIVEGANG.md`, erst danach
   `NEXT_PUBLIC_INDEXABLE=true`.
4. **Pushes sparsam** (Netlify-Build-Kontingent), Screenshots in den Chat
   (`SendUserFile`), nur ein Push pro abgeschlossenem Paket.
5. Medien: Reels Handwerk (M&A Transporte, GM-Dachdecker), echte
   Vorher-Screenshots, Zuordnung der schematischen Vorher-Varianten bestätigen.
6. Redaktion: 31 alte Blogartikel nachschärfen; Stadttexte gegenlesen;
   Blog-Teaser auf der Startseite auf den neuen Ton prüfen.
7. Standortseiten mit Search-Console-Daten abgleichen (`regionStaedte`).

- **Einblend-Fehler behoben (23.10.):** `components/Reveal.tsx` blendete
  Abschnitte erst ab 12 % Sichtbarkeit ein; sehr hohe Abschnitte (Projektliste
  auf dem Handy, fast 10.000 px) blieben deshalb weiß. Jetzt Schwelle 0 plus
  Sicherheitsnetz beim Scrollen. Inhaber hatte die leere Projektseite auf dem
  iPhone gemeldet. Netlify-Kontingent seit 22.10. wieder frei, Deploys laufen
  nach jedem Push automatisch.
- **Fragebogen auf sechs Fragen (23.10., Wunsch des Inhabers):** überall
  neue Frage „Wie groß ist dein Betrieb?“ (allein, 3–10, 11–50, über 50),
  Webdesign zusätzlich „Was brauchst du?“ (einzelne Seite, mehrere
  Unterseiten, Website plus Funnel/Buchung/Bewerbung, Shop) statt der
  Zeitfrage und Ziel-Option „wie eine Visitenkarte“. Texte „fünf Klicks“ →
  „sechs Klicks“. Zusammenfassungen auf Über uns, Leistungsübersicht und
  Karriere auf „Kleine und mittelständische Unternehmen, Handwerk, Vereine“,
  Kundenstimmen-Köpfe überall „Wörtlich so veröffentlicht.“ Prüflauf über
  19 Seiten (Desktop + Handy): keine JS-Fehler, kein Überlauf, keine
  kaputten Bilder, je genau eine H1.
- **Next.js aktualisiert (23.10.):** 16.4.0 → 16.4.2 wegen einer vom
  Framework gemeldeten Sicherheitslücke. Build, SEO-Prüfung, Einblend-Test,
  Fragebogen-Klicktests und Statuscodes danach unverändert in Ordnung.

## Zuletzt geprüft (23.10.)

Build fehlerfrei (746 Routen), `seo:check:strict` ohne Befund. Playwright-
Prüflauf über 19 Seiten (Desktop + Mobil): keine Skriptfehler, kein Überlauf,
keine kaputten Bilder, je eine h1. Metadaten-Prüfung derselben Seiten plus
404: Titel unter 62 Zeichen, Beschreibungen unter 165, canonical und
OG-Bild vorhanden, keine doppelten Titel (Webdesign-Seite heißt jetzt
„Webdesign Agentur: …“, die Koblenz-Standortseite behält „Webdesign
Koblenz: …“). Besuchs-Hinweise auf Bendorf („persönlich in Bendorf“) aus
Standortseiten und Schnellsuche entfernt.
