# Pixel56 – neue Website

Die neue Pixel56-Website liegt bereits vollständig getrennt von den älteren HTML-Entwürfen im Ordner [`web/`](web/). Dieser Ordner ist der gemeinsame Arbeitsbereich für Codex und Claude Code. `mockups/` ist nur ein historisches Designarchiv; dort keine neuen Seiten entwickeln.

## Lokal starten

```bash
cd web
npm ci
npm run dev
```

Danach `http://localhost:3000` öffnen. Vor Änderungen an Next.js-Code bitte [`web/AGENTS.md`](web/AGENTS.md) lesen. Wichtige Befehle: `npm run build`, `npm run seo:check:strict`.

## Arbeitsstand

- Eigenständige Next.js-Website mit Startseite, Leistungen, Projekten, Blog, Ressourcen, Standorten und Kontakt. Sie ist **nicht** mit Webflow verbunden.
- Bestehende Pixel56-URLs werden im Migrationsmanifest und über Weiterleitungen bzw. direkte Routen berücksichtigt. Vor einem Domainwechsel alle wichtigen URLs nochmals gegen die Live-Seite und Search Console prüfen.
- Die Startseite zeigt ausgewählte echte Projekte; weitere Beispiele stehen unter `/projekte`.
- Sichtbare Medienplätze in der lokalen Vorschau markieren noch fehlendes Material. Auf einer indexierbaren Produktion werden diese Platzhalter nicht angezeigt. Siehe [`web/docs/MEDIA_PLAN.md`](web/docs/MEDIA_PLAN.md).
- **Nicht live geschaltet:** Das aktuelle Webflow-Angebot bleibt unverändert. Rechtstexte, Tracking/Cookies, Formulare, Bildrechte und SEO-Migration brauchen vor dem Launch eine abschließende Prüfung.
- „KMU-Webseiten“ ist ein separates Projekt. Die URL wird nachgereicht und noch nicht verlinkt.

## Zusammenarbeit über GitHub

Das Repository ist öffentlich. Search-Console-Rohdaten unter `web/data/gsc-*` und lokale `.env`-Dateien bleiben absichtlich nur lokal und werden nicht hochgeladen. Für Claude Code: dieses Repository und den Arbeitszweig öffnen, dann [`web/docs/HANDOFF.md`](web/docs/HANDOFF.md) und [`web/docs/STATUS.md`](web/docs/STATUS.md) lesen — letztere hält den aktuellen Arbeitsstand und die offenen Punkte nach Priorität. Keine erfundenen Kundenbewertungen, Kennzahlen oder Projektbilder veröffentlichen.
