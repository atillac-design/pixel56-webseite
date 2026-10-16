# Kurzbriefing — Stand 16.10.2026

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
  Koblenz“ ist okay. WhatsApp und E-Mail immer anbieten. Später je
  Leistung ein eigenes Kontaktformular (noch nicht gebaut).
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
  **Offen:** Inhaber fragt, ob das Koblenz-Bild in den Hero soll wie auf
  der alten Seite. Empfehlung dagegen (siehe Chat/STATUS), Entscheidung
  beim Inhaber.
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

## Offene Punkte (Reihenfolge = Priorität)

1. **Vom Inhaber erwartet:** Rückmeldung zur neuen Startseite (Hero,
   Ohne/Mit-Block, Beispielbilder, Passt-Block), Entscheidung zum
   Koblenz-Bild im Hero (Empfehlung: nein, Alternative Porträt). Teykto-
   und Adloc-Bilder sind da (16.10.): Adloc = Laptop-Mockup
   `ki-projekt-adloc.webp`, Adloc-Texte nach den Screenshots der Produktseite (Credits statt Abo,
   RLP komplett, 15 Branchen; Zahlen als „laut adloc.io“ gekennzeichnet).
   Teykto = Bestellseite `ki-projekt-teykto.webp`, scharf aus dem
   lokal gestarteten Teykto-Repo (Demo „Bella Napoli“, 1440 px; Demo hat
   keine Gerichtsfotos, weil Unsplash gesperrt ist). adloc.io und
   teykto.de sind in der Sandbox durch die Netzwerk-Richtlinie gesperrt
   (403 am Proxy), Inhaber kann sie in den Umgebungs-Einstellungen
   freigeben.
2. Noch nicht auf die Positionierung gezogen: Fließtexte **innerhalb** der
   acht Leistungsseiten (Abschnitte unter dem Hero), Projekte-Übersicht,
   Kontakt-Hero, Blog-Teaser. Nächster Schritt, wenn der Inhaber die
   Richtung bestätigt.
3. Kontaktformular je Leistung (Wunsch des Inhabers, noch offen).
4. Vor dem Livegang: AGB-Platzhalter, Impressum, Datenschutz prüfen;
   Env-Variablen in Netlify (MailerLite, Resend, optional Google Places);
   Website-Check live testen; `NEXT_PUBLIC_INDEXABLE=true` erst dann.
5. Domainumzug pixel56.de von Webflow auf Netlify, danach Sitemap in der
   Search Console einreichen und alte URLs beobachten.
6. Medien: Reels Handwerk (M&A Transporte, GM-Dachdecker), echte
   Vorher-Screenshots, Zuordnung der schematischen Vorher-Varianten bestätigen.
7. Redaktion: Leistungsseiten ggf. um ca. 30 % kürzen, Wiederholungen
   glätten; 31 alte Blogartikel nachschärfen; Stadttexte gegenlesen.
8. Standortseiten mit Search-Console-Daten abgleichen (`regionStaedte`).

## Zuletzt geprüft

Build fehlerfrei (745 Seiten), Lighthouse Startseite 100/100 nach
Schriftwechsel, Playwright-Klicktest der Zentrale-Demo ohne Fehler,
mobile Überlauf-Prüfung auf 14 Seiten in Ordnung.
