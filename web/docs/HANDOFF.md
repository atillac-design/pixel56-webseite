# Übergabe an Claude Code / Codex

## Ziel

Pixel56 soll eine unabhängige, schnelle und hochwertige Website für Webdesign, Meta Ads, Social Content/Reels, Google Ads und sinnvolle KI-Prozesse bekommen. Sie soll besser verkaufen und echte Kundenarbeit zeigen. SEO ist ein wichtiges technisches und redaktionelles Fundament, aber nicht die Hauptleistung von Pixel56.

## Struktur

- `web/` ist bereits der eigene Ordner für die **neue** Seite; `mockups/` sind alte Entwürfe.
- `app/` enthält Seiten, `components/` UI, `lib/` Inhalte/URL-Mappings, `data/legacy-*.json` das öffentliche URL-Inventar, `public/bilder/` Medien.
- `NEXT_PUBLIC_INDEXABLE=true` ist nur für die geprüfte Live-Produktion bestimmt. Vorher bleibt die Seite `noindex`.
- Die aktuellen Webflow-URLs haben Priorität: nach Möglichkeit identisch erhalten, sonst inhaltlich passende 301-Weiterleitung. Keine pauschalen Redirects ganzer Inhaltsgruppen auf allgemeine Übersichtsseiten.
- Die Search-Console-Rohdaten `data/gsc-*` sind bewusst nicht im öffentlichen Repo. Lokal können sie für die SEO-Priorisierung genutzt werden.

## Schon umgesetzt

- Die Startseite zeigt ausgewählte Projekte einschließlich GM-Dachdecker, Oktay Cömertler und Colak mit vorhandenen Projektmotiven.
- Google Ads und KI haben lokal sichtbare, ausdrücklich als fehlend gekennzeichnete Medienplätze. Diese erscheinen nicht auf einer indexierbaren Live-Seite.
- Weitere Medienbedarfe und Anforderungen an echte Screenshots stehen in `docs/MEDIA_PLAN.md`.

## Nächste Aufgaben

1. Echte, freigegebene Referenzbilder/Screenshots vom Eigentümer einsammeln und die Medienplätze damit ersetzen. Niemals erfundene Dashboardwerte als echte Ergebnisse darstellen.
2. Alle Projektseiten redaktionell und visuell überprüfen; Freigaben, Bildrechte und belastbare Aussagen prüfen.
3. Mobile Darstellung, Kontraste, Typografie, Bildkomprimierung und Ladezeiten auf realen Geräten testen.
4. Kontaktformular, WhatsApp, Kalender, Cookie-Einstellungen und rechtliche Texte vor Launch testen/freigeben.
5. URL-Migration vor Domainwechsel mit Live-Webflow und Search Console abgleichen; nach Launch Indexierung, 404 und Rankings beobachten.
6. Separates Projekt „KMU-Webseiten“ erst verlinken, wenn Atilla die URL liefert.

Lokal prüfen: `npm ci`, `npm run build`, `npm run seo:check:strict`. Bei Next.js-Änderungen zuerst `AGENTS.md` und die passende Dokumentation im installierten `node_modules/next/dist/docs/` lesen.
