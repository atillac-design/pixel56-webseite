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
verändert, auch kein Publish.

## Was zuletzt passiert ist

- 13.10.2026: `codex/pixel56-neue-seite` per Fast-Forward auf `876f969`
  gezogen; der Arbeitsbranch enthält damit auch STATUS.md. Die Commits vom
  13.10. liegen zunächst nur auf `codex/pixel56-neue-seite`; der
  GitHub-Default-Branch `claude/zen-dirac-z9djvd` ist dahinter und per
  Fast-Forward nachziehbar.
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

`npm ci && npm run build && npm run seo:check:strict` läuft fehlerfrei durch,
sowohl vor als auch nach dem Audit-Fix (Node 22.22.0, npm 10.9.4).

- **Build:** TypeScript ohne Fehler, 261 statisch erzeugte Seiten, darunter
  166 Standorte, 35 Blogartikel, 17 Projekte, 8 Blog-Kategorien, 3 Ressourcen.
  `/api/kontakt`, `/api/lead` und `/studio` sind dynamisch.
- **SEO-Check strict:** 240 Bestands-URLs inventarisiert, 21 Kernseiten, 10
  Portfolio-Einzelmappings, 2 GSC-Redirects, 166 Standort-URLs direkt
  erreichbar. Keine Fehler, keine Warnungen.
- **Erwartete Build-Meldung:** „Sanity nicht erreichbar, nutze statische
  Inhalte“ erscheint dreimal. In der Cloud-Session sperrt die
  Netzwerk-Richtlinie die Sanity-API; der statische Fallback greift und der
  Build bleibt grün. Lokal mit Netz erscheint die Meldung nicht.

## Offene Punkte

### 1. Migrationsmanifest kennt 125 von 291 Standortseiten nicht

**Das ist der kritischste Punkt vor dem Domainwechsel.** Über die Webflow-API
geprüft am 12.10.2026:

| Variante (Slug-Endung) | in Webflow | im Manifest | **fehlt** |
| --- | --- | --- | --- |
| nur Stadt (`aachen`) | 83 | 68 | **15** |
| `-google-ads` | 83 | 44 | **39** |
| `-meta-ads` | 83 | 54 | **29** |
| `-seo` | 29 | 0 | **29** |
| `-social-media` | 13 | 0 | **13** |
| **Summe** | **291** | **166** | **125** |

Das Manifest ist eine echte Teilmenge: es enthält keine URL, die nicht auch im
CMS liegt.

**Ursache ist geklärt.** Die Entstehungsdaten sind trennscharf:

- Alle **166** Einträge im Manifest wurden im **Mai 2025** angelegt.
- Alle **125** fehlenden Einträge wurden im **Juli 2026** angelegt.
- Fehlende Einträge, die vor Juli 2026 entstanden sind: **keine**.

Alle 125 haben ein `lastPublished` im Juli 2026, sind also **einzeln**
veröffentlicht. Der letzte **vollständige** Publish der Webflow-Site war aber am
**03.07.2026**. Webflow erzeugt `sitemap.xml` nur beim Publish der gesamten
Site — deshalb fehlen die im Juli entstandenen Seiten in der Sitemap vom
13.08.2026, aus der das Manifest gebaut wurde.

#### Was noch zu prüfen ist

Einzeln veröffentlichte CMS-Einträge sind in Webflow normalerweise live
erreichbar, auch ohne vollständigen Site-Publish. Ist das hier so, fehlen **125
live erreichbare URLs** im Migrationsplan und liefern nach dem Domainwechsel
404.

Prüfen lässt sich das nur von außen — aus der Cloud-Session ist
`pixel56.de` durch die Netzwerk-Richtlinie gesperrt (`CONNECT tunnel failed,
403`, erneut bestätigt am 13.10.2026). Also im Browser oder aus einer lokalen
Sitzung:

| URL | erwartet | Bedeutung |
| --- | --- | --- |
| `https://www.pixel56.de/locations/aachen` | 200 | Kontrolle: Pfadschema stimmt |
| `https://www.pixel56.de/locations/vallendar-seo` | **offen** | lädt sie → 125 URLs fehlen im Plan |

Der Live-Pfad lautet `/locations/<slug>` (nicht `/standorte/…` — das ist der
Pfad der **neuen** Seite). Ein 404 auf `/standorte/…` sagt daher nichts aus.

**Wenn `/locations/vallendar-seo` lädt:** Die 125 Slugs **ohne Webflow-Publish**
ins Manifest holen: über die Webflow-CMS-API (Items der Standort-Collection)
oder den CSV-Export der Collection, dann als `location`-Einträge mit
`action: review` in `data/legacy-urls.json` ergänzen und
`npm run seo:sync-locations` ausführen, das die Live-Seiten abruft und nach
`data/legacy-locations.json` schreibt. Kein vollständiger Site-Publish in
Webflow: Er würde auch die Designer-Änderungen vom 18.07.2026 ungeprüft live
schalten und widerspricht dem Grundsatz oben. Erst mit vollständigem Manifest
über Erhalt bzw. Weiterleitung entscheiden.

**Wenn sie 404 liefert:** Das Manifest ist vollständig, die 125 Einträge sind
reine CMS-Datensätze ohne öffentliche URL, und der Punkt ist erledigt.

Unabhängig davon stehen die 166 bekannten Standort-URLs im Manifest auf
`review` — die inhaltliche Entscheidung ist noch offen. `HANDOFF.md` weist zu
Recht darauf hin, keine pauschalen Redirects ganzer Inhaltsgruppen auf
Übersichtsseiten zu setzen.

Gleiche mögliche Ursache, ebenfalls offen: das Webflow-CMS enthält **35**
Blogartikel, das Manifest **31** Blog-URLs.

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

Ein Workspace, eine Site: `pixel56.de` und `www.pixel56.de`. Letzter
vollständiger Publish 03.07.2026, letzte Designer-Bearbeitung 18.07.2026. CMS:
291 Standorte, 35 Blogartikel, keine Entwürfe, nichts Unveröffentlichtes.
Collection-Schemas unverändert seit 01.07.2026.

Das Webflow-Angebot bleibt unangetastet, bis die neue Seite abgenommen ist.
