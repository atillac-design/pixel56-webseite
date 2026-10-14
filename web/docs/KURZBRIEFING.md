# Kurzbriefing — Stand 14.10.2026

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
- **KI-Automatisierung bleibt eine Säule.** Eigene KI-Projekte vorzeigen:
  Teykto (Bestellplattform, teykto.de), KMU-Webseiten (Formular, Make,
  MailerLite), Adloc (adloc.io, B2B-Kontaktdaten), Zentrale (Live-Dashboard).
  **Positionierung entschieden (14.10.):** Inhaber folgt der Empfehlung.
  Keine Nischen-Spezialisierung, sondern Schärfung nach Kundentyp:
  inhabergeführte Betriebe, die Anfragen oder Bewerber brauchen. Vier
  Kernleistungen vorn (Webdesign, Meta Ads, Content & Reels, KI), die vier
  anderen als Ergänzung („Je nach Ziel ergänzen wir“). Struktur war schon
  so gebaut; Hero-Absatz nennt jetzt die Zielgruppe, Kicker und Proof-Zeile
  sagen „Koblenz“ statt „Bendorf bei Koblenz“.
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

1. **Vom Inhaber erwartet:** schärfere Desktop-Screenshots von Teykto und
   Adloc (ersetzen `ki-projekt-teykto.webp` und den Adloc-BrowserMock in
   `app/leistungen/ki-automatisierung/page.tsx`, `eigeneProjekte`);
   weitere Rückmeldung aus dem Durchklicken. Offene Frage an ihn: soll
   „Bendorf“ auch im Fuß und im Abschnitt „Aus Bendorf bei Koblenz“ der
   Startseite durch „Koblenz“ ersetzt werden (Stadtseite Bendorf bleibt)?
2. Kontaktformular je Leistung (Wunsch des Inhabers, noch offen).
3. Vor dem Livegang: AGB-Platzhalter, Impressum, Datenschutz prüfen;
   Env-Variablen in Netlify (MailerLite, Resend, optional Google Places);
   Website-Check live testen; `NEXT_PUBLIC_INDEXABLE=true` erst dann.
4. Domainumzug pixel56.de von Webflow auf Netlify, danach Sitemap in der
   Search Console einreichen und alte URLs beobachten.
5. Medien: Reels Handwerk (M&A Transporte, GM-Dachdecker), echte
   Vorher-Screenshots, Zuordnung der schematischen Vorher-Varianten bestätigen.
6. Redaktion: Leistungsseiten ggf. um ca. 30 % kürzen, Wiederholungen
   glätten; 31 alte Blogartikel nachschärfen; Stadttexte gegenlesen.
7. Standortseiten mit Search-Console-Daten abgleichen (`regionStaedte`).

## Zuletzt geprüft

Build fehlerfrei (745 Seiten), Lighthouse Startseite 100/100 nach
Schriftwechsel, Playwright-Klicktest der Zentrale-Demo ohne Fehler,
mobile Überlauf-Prüfung auf 14 Seiten in Ordnung.
