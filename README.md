# Pixel56 Webseite — Neugestaltung

Kompletter Neuaufbau von pixel56.de (aktuell Webflow). Prozess: statische HTML-Mockups → Feedback-Iterationen → technischer Aufbau (Next.js + CMS) mit finaler SEO-/Text-Optimierung.

## Stand

Alle 13 Seiten sind als Mockup in der finalen Formsprache fertig ("Freier Entwurf", Stand Juli 2026):

| Seite | Datei | Artifact-URL |
|---|---|---|
| Startseite | `mockups/startseite.html` | https://claude.ai/code/artifact/bdf40464-c599-4297-a2a7-cb8c194f58c2 |
| Webdesign | `mockups/leistung-webdesign.html` | https://claude.ai/code/artifact/c60992fe-d5ee-4619-91a2-4e758e3e321e |
| SEO | `mockups/leistung-seo.html` | https://claude.ai/code/artifact/4b1e2430-61e4-4087-b452-c5d09d950eee |
| Google Ads | `mockups/leistung-google-ads.html` | https://claude.ai/code/artifact/89ff1698-5e5f-46a9-919c-a11edff4dddd |
| Meta Ads | `mockups/leistung-meta-ads.html` | https://claude.ai/code/artifact/fac58a97-09c0-4818-9eb2-7b54327302fb |
| Landingpages & Funnels | `mockups/leistung-landingpages-funnels.html` | https://claude.ai/code/artifact/ad8bdb6e-c85b-4c84-804e-54e1045f3476 |
| Content-Produktion | `mockups/leistung-content-produktion.html` | https://claude.ai/code/artifact/d10649f1-08df-4f24-a58e-d7c1a16e00c1 |
| Mitarbeitergewinnung | `mockups/leistung-mitarbeitergewinnung.html` | https://claude.ai/code/artifact/f69597e4-1f07-4437-89e0-153216c56142 |
| Über uns | `mockups/ueber-uns.html` | https://claude.ai/code/artifact/9483e155-6c85-4e09-93bc-f23b9fee73d5 |
| Projekte | `mockups/projekte.html` | https://claude.ai/code/artifact/87122e8b-d315-44f6-8fc6-158b5bb66e6d |
| Blog | `mockups/blog.html` | https://claude.ai/code/artifact/02c55f02-7608-4d1f-a0a4-91e949ec4f4c |
| Karriere | `mockups/karriere.html` | https://claude.ai/code/artifact/605814db-aec4-4f3c-86a6-71fe6ee2f83d |
| Standort-Vorlage (Koblenz) | `mockups/standort-vorlage-koblenz.html` | https://claude.ai/code/artifact/48fcc1d2-e051-438c-9d24-c8d2c80a131d |
| Freebie-Vorlage (SEO-Checkliste) | `mockups/freebie-vorlage-seo-checkliste.html` | https://claude.ai/code/artifact/cc4316a4-aa4e-4fe7-aac1-a7a7515f04cb |

`mockups/archiv/` enthält die früheren, verworfenen Design-Iterationen.

## Formsprache (Design-System der Mockups)

- Grund: `#07070c`, Akzent Rot `#ff3951`, Amber `#ffc226`, Blau `#3f80fd`, Violett `#6a35ff`
- Serif-Kursiv (Georgia-Stack) für Subheadlines/Zitate, Sans 800 für Headlines, Mono für Labels
- Pill-Buttons (100px Radius), Puls-/Radar-Motiv im Hero, kinetischer Headline-Reveal
- Wiederkehrende "lebendige" Komponenten: Status-Panel (blinkende Warnsignale), Live-Metrik-Karte (Count-up + Balken), WhatsApp-Chat-Mockup, Such-/Feed-/Reel-/Upload-Mockups je nach Thema
- Vollflächige Farb-Verläufe pro Sektion (rot/amber/violett), alternierende Split-Layouts

## Offene Punkte (für den technischen Aufbau)

- Echte Bilder einsetzen (Koblenz/Deutsches Eck im Hero, Team-Fotos, Projekt-Screenshots)
- Google-Bewertungen live anbinden (Places API), Platzhalter 4.9/27 ersetzen
- Freebie-Seiten für KI-Agenten-Checkliste und Tagesplaner aus der Vorlage ableiten (Struktur steht, nur Inhalte tauschen)
- 166 Standortseiten als CMS-Template (Achtung: Thin-Content-Risiko der Altseiten beheben; Slug-Inkonsistenz `zuerich`/`zurich-meta-ads` bei Migration/Redirects beachten)
- Finale SEO-/Copy-Optimierung als eigener Durchgang vor Livegang
