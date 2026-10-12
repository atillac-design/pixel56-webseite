# Status — 12.10.2026

Ergänzt [`HANDOFF.md`](HANDOFF.md) und das [README](../../README.md) um den
Stand der Zusammenführung und um Befunde, die nur über die Webflow-API und
GitHub sichtbar waren. Reihenfolge der offenen Punkte = Priorität.

## Was zuletzt passiert ist

- `codex/pixel56-neue-seite` wurde als reiner Fast-Forward in
  `claude/zen-dirac-z9djvd` übernommen (Stand `b94ff80`). Die Historien liefen
  nicht auseinander, es gab keine Konflikte: die Codex-Arbeit setzt direkt auf
  dem vorherigen Commit `17e597c` vom 23.07.2026 auf.
- `claude/zen-dirac-z9djvd` ist der Default-Branch und enthält damit beide
  Arbeitsstränge. Pull Requests, Issues und Tags gibt es im Repo keine.

## Noch nicht verifiziert

`npm ci && npm run build && npm run seo:check:strict` ist nach dem Merge **nicht
gelaufen**. Das ist der erste Schritt in der nächsten Sitzung — erst danach sind
Aussagen über die Lauffähigkeit belastbar.

## Offene Punkte

### 1. Standort-URLs: 166 im Manifest, 291 im Webflow-CMS

Über die Webflow-API geprüfte Fakten (12.10.2026):

| Quelle | Anzahl |
| --- | --- |
| Webflow-Sammlung „Locations" | **291** Einträge, alle mit `lastPublished`, keine Entwürfe |
| `web/data/legacy-locations.json` / Sitemap-Manifest | **166** Standort-URLs |

Letzter **vollständiger** Publish der Webflow-Site: **03.07.2026**
(`lastUpdated` der Site: 18.07.2026). Das Manifest wurde am 13.08.2026 aus
`sitemap.xml` erzeugt.

Naheliegende Erklärung: Webflow erzeugt `sitemap.xml` nur beim Veröffentlichen
der **gesamten** Site. Die Standorteinträge aus Ende Juli (29 Slugs auf `-seo`,
13 auf `-social-media`) fehlen deshalb im Manifest, obwohl die Einträge selbst
veröffentlicht sind.

**Vor dem Domainwechsel zu klären:** Sind diese Seiten live erreichbar? Wenn ja,
fehlen sie im Migrationsplan und laufen nach dem Umzug auf 404 — bei 125
Seiten wäre das ein spürbarer Rankingverlust.

Prüfweg: einige Slugs direkt auf der Live-Domain aufrufen (z. B.
`www.pixel56.de/standorte/vallendar-seo`). Sind sie erreichbar, nach einem
vollständigen Webflow-Publish `npm run seo:sync-legacy` erneut laufen lassen,
damit das Manifest alle URLs kennt.

Kleinere Lücke mit möglicherweise gleicher Ursache, ebenfalls zu prüfen: das
Webflow-CMS enthält **35** Blogartikel, das Manifest **31** Blog-URLs.

Im Manifest stehen die 166 Standort-URLs ohnehin auf `review` — die inhaltliche
Entscheidung (erhalten, zusammenfassen oder weiterleiten) ist also offen.
`HANDOFF.md` weist zu Recht darauf hin, keine pauschalen Redirects ganzer
Inhaltsgruppen auf Übersichtsseiten zu setzen.

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

## Webflow-Altstand zum Nachschlagen (12.10.2026)

Ein Workspace, eine Site: `pixel56.de` und `www.pixel56.de`. Letzter Publish
03.07.2026, letzte Designer-Bearbeitung 18.07.2026. CMS: 291 Standorte, 35
Blogartikel, keine Entwürfe, nichts Unveröffentlichtes. Collection-Schemas
unverändert seit 01.07.2026.

Das Webflow-Angebot bleibt unangetastet, bis die neue Seite abgenommen ist.
