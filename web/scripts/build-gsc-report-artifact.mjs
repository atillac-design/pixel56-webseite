import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(scriptDir, "..");
const analysisPath = path.resolve(process.argv[2] ?? path.join(webRoot, "data/gsc-seo-analysis.json"));
const decisionsPath = path.resolve(process.argv[3] ?? path.join(webRoot, "data/gsc-url-decisions.csv"));
const outputPath = path.resolve(process.argv[4] ?? path.join(webRoot, "data/gsc-seo-report-artifact.json"));

const analysis = JSON.parse(await readFile(analysisPath, "utf8"));

function parseCsv(input) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;
  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];
    const next = input[index + 1];
    if (char === '"' && quoted && next === '"') {
      value += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(value);
      if (row.some((cell) => cell !== "")) rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }
  if (value !== "" || row.length > 0) {
    row.push(value);
    rows.push(row);
  }
  const headers = rows[0];
  return rows.slice(1).map((cells) => Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""])));
}

const decisions = parseCsv(await readFile(decisionsPath, "utf8")).map((row) => ({
  path: row.sourcePath,
  typ: row.type,
  migrationsaktion: row.migrationAction,
  ziel: row.targetPath,
  entscheidung: row.strategicDecision,
  entscheidungLabel: ({
    protect: "Schützen",
    improve: "Ausbauen",
    "consolidate-review": "Konsolidierung prüfen",
    "noindex-review": "Noindex prüfen",
    exclude: "Ausschließen",
    redirect: "Weiterleiten",
    preserve: "Erhalten",
    "preserve-noindex": "Erhalten, noindex",
    review: "Prüfen",
  })[row.strategicDecision] ?? row.strategicDecision,
  klicks: Number(row.clicks),
  impressionen: Number(row.impressions),
  ctr: Number(row.ctr) / 100,
  position: Number(row.position),
  hosts: row.hosts,
  begruendung: row.rationale,
}));

const performance = analysis.performance;
const coverage = analysis.coverage;
const locations = analysis.migration.locationSummary;
const fullMonths = performance.monthly
  .filter((row) => row.days >= 28)
  .map((row) => ({
    monat: row.month,
    klicks: row.clicks,
    impressionen: row.impressions,
    ctr: row.ctr / 100,
    position: row.position,
    tage: row.days,
  }));

const commercialQueries = performance.topCommercialQueries.slice(0, 15).map((row, index) => ({
  rang: index + 1,
  suchanfrage: row.query,
  klicks: row.clicks,
  impressionen: row.impressions,
  ctr: row.ctr / 100,
  position: row.position,
  intent: "Kommerziell",
}));

const decisionLabels = {
  protect: "Schützen",
  improve: "Ausbauen",
  "consolidate-review": "Konsolidierung prüfen",
  "noindex-review": "Noindex prüfen",
};
const locationDecisionOrder = ["protect", "improve", "consolidate-review", "noindex-review"];
const locationDecisionRows = locationDecisionOrder.map((decision) => {
  const row = locations.decisions.find((item) => item.decision === decision) ?? { urls: 0, clicks: 0, impressions: 0 };
  return {
    entscheidung: decisionLabels[decision],
    urls: row.urls,
    klicks: row.clicks,
    impressionen: row.impressions,
    anteil: row.urls / locations.urls,
  };
});

const topLocations = locations.top.slice(0, 15).map((row, index) => ({
  rang: index + 1,
  pfad: row.sourcePath,
  entscheidung: decisionLabels[row.strategicDecision] ?? row.strategicDecision,
  klicks: row.clicks,
  impressionen: row.impressions,
  ctr: row.ctr / 100,
  position: row.position,
}));

const coverageIssueRows = coverage.issues.map((row) => ({
  grund: row.reason.replace("zurzeit", "derzeit"),
  seiten: row.pages,
  anteil: row.pages / coverage.issueTotal,
  quelle: row.source,
  validierung: row.validation,
})).sort((a, b) => b.seiten - a.seiten);

const headline = [{
  klicks90: performance.latest90.clicks,
  klicksVorher90: performance.previous90.clicks,
  klicksDelta: performance.change90.clicks,
  impressionen90: performance.latest90.impressions,
  impressionenVorher90: performance.previous90.impressions,
  impressionenDelta: performance.change90.impressions,
  ctr90: performance.latest90.ctr / 100,
  ctrVorher90: performance.previous90.ctr / 100,
  ctrDelta: performance.change90.ctrPercentagePoints / 100,
  indexAnteil: coverage.indexedShare / 100,
  indexiert: coverage.current.indexed,
  nichtIndexiert: coverage.current.notIndexed,
}];

const performanceSql = `WITH bounds AS (
  SELECT MAX(date) AS max_date FROM gsc_daily
), recent AS (
  SELECT SUM(clicks) AS clicks, SUM(impressions) AS impressions
  FROM gsc_daily, bounds
  WHERE date BETWEEN DATE(max_date, '-89 days') AND max_date
), previous AS (
  SELECT SUM(clicks) AS clicks, SUM(impressions) AS impressions
  FROM gsc_daily, bounds
  WHERE date BETWEEN DATE(max_date, '-179 days') AND DATE(max_date, '-90 days')
)
SELECT recent.clicks AS clicks_90,
       previous.clicks AS clicks_previous_90,
       recent.impressions AS impressions_90,
       previous.impressions AS impressions_previous_90,
       1.0 * recent.clicks / recent.impressions AS ctr_90,
       1.0 * previous.clicks / previous.impressions AS ctr_previous_90
FROM recent, previous;

SELECT SUBSTR(date, 1, 7) AS month,
       COUNT(*) AS days,
       SUM(clicks) AS clicks,
       SUM(impressions) AS impressions,
       1.0 * SUM(clicks) / SUM(impressions) AS ctr,
       SUM(position * impressions) / SUM(impressions) AS position
FROM gsc_daily
GROUP BY SUBSTR(date, 1, 7)
HAVING COUNT(*) >= 28
ORDER BY month;

SELECT query, clicks, impressions,
       CAST(REPLACE(ctr, '%', '') AS REAL) / 100.0 AS ctr,
       position
FROM gsc_queries
WHERE (LOWER(query) LIKE '%webdesign%'
    OR LOWER(query) LIKE '%webseite%'
    OR LOWER(query) LIKE '%homepage%'
    OR LOWER(query) LIKE '%seo%'
    OR LOWER(query) LIKE '%suchmaschinen%'
    OR LOWER(query) LIKE '%google ads%'
    OR LOWER(query) LIKE '%meta ads%'
    OR LOWER(query) LIKE '%facebook ads%'
    OR LOWER(query) LIKE '%online marketing%'
    OR LOWER(query) LIKE '%marketingagentur%'
    OR LOWER(query) LIKE '%marketing agentur%'
    OR LOWER(query) LIKE '%werbeagentur%'
    OR LOWER(query) LIKE '%landingpage%'
    OR LOWER(query) LIKE '%mitarbeitergewinnung%'
    OR LOWER(query) LIKE '%social media agentur%')
  AND LOWER(query) NOT LIKE '%pdf%'
  AND LOWER(query) NOT LIKE '%kostenlos%'
  AND LOWER(query) NOT LIKE '%vorlage%'
  AND LOWER(query) NOT LIKE '%tagesplan%'
  AND LOWER(query) NOT LIKE '%checkliste%'
  AND LOWER(query) NOT LIKE '%ki agent%'
ORDER BY impressions DESC
LIMIT 15;`;

const coverageSql = `SELECT reason, pages,
       1.0 * pages / SUM(pages) OVER () AS share,
       source, validation
FROM gsc_coverage_issues
ORDER BY pages DESC;

SELECT date, not_indexed, indexed
FROM gsc_coverage_daily
WHERE indexed IS NOT NULL AND not_indexed IS NOT NULL
ORDER BY date;`;

const urlDecisionSql = `SELECT strategic_decision,
       COUNT(*) AS urls,
       SUM(clicks) AS clicks,
       SUM(impressions) AS impressions,
       1.0 * COUNT(*) / 166 AS share
FROM gsc_url_decisions
WHERE type = 'location'
GROUP BY strategic_decision;

SELECT source_path, strategic_decision, clicks, impressions, ctr, position
FROM gsc_url_decisions
WHERE type = 'location'
ORDER BY clicks DESC, impressions DESC
LIMIT 15;

SELECT source_path, type, migration_action, target_path, strategic_decision,
       clicks, impressions, ctr, position, hosts, rationale
FROM gsc_url_decisions
ORDER BY clicks DESC, impressions DESC;`;

const sources = [
  {
    id: "gsc-performance",
    label: "Google Search Console – Performance 16 Monate",
    path: "pixel56.de-Performance-on-Search-2026-08-15.zip",
    query: {
      engine: "SQLite (GSC-CSV-Import)",
      sql: performanceSql,
      description: "Web-Suche für pixel56.de, Tageswerte, Seiten und Suchanfragen.",
      executed_at: "2026-08-15T00:00:00+02:00",
      language: "SQL",
      filters: ["Suchtyp: Web", "13. April 2025 bis 12. August 2026"],
      metric_definitions: [
        "Klicks: Klicks aus unbezahlten Google-Suchergebnissen.",
        "Impressionen: Einblendungen in Google-Suchergebnissen.",
        "CTR: Klicks geteilt durch Impressionen.",
        "Position: von Google ausgewiesene durchschnittliche Position.",
      ],
      tables_used: ["gsc_daily", "gsc_queries"],
    },
  },
  {
    id: "gsc-coverage",
    label: "Google Search Console – Indexierungsabdeckung",
    path: "pixel56.de-Coverage-2026-08-15.zip",
    query: {
      engine: "SQLite (GSC-CSV-Import)",
      sql: coverageSql,
      description: "Indexierte und nicht indexierte Seiten sowie Ausschlussgründe.",
      executed_at: "2026-08-15T00:00:00+02:00",
      language: "SQL",
      filters: ["Sitemap: Alle bekannten Seiten"],
      metric_definitions: ["Indexierungsanteil: indexierte Seiten geteilt durch indexierte plus nicht indexierte Seiten."],
      tables_used: ["gsc_coverage_daily", "gsc_coverage_issues"],
    },
  },
  {
    id: "url-decisions",
    label: "Pixel56 GSC-URL-Entscheidungsmatrix",
    path: "data/gsc-url-decisions.csv",
    query: {
      engine: "SQLite (abgeleitete URL-Matrix)",
      sql: urlDecisionSql,
      description: "Pfadgleiche Verbindung des 240-URL-Sitemap-Inventars mit 232 GSC-Seitenzeilen und vier zusätzlich entdeckten URLs.",
      executed_at: analysis.generatedAt,
      language: "SQL",
      filters: ["Hosts www.pixel56.de und pixel56.de pfadgleich konsolidiert", "Keine pauschalen Redirects ohne semantisch gleichwertiges Ziel"],
      metric_definitions: [
        "Schützen: URL hatte mindestens einen Klick im 16-Monats-Zeitraum.",
        "Ausbauen: Standort-URL ohne Klick, aber mindestens 500 Impressionen oder mindestens 50 Impressionen bei Position 20 oder besser.",
        "Konsolidierung prüfen: Standort-URL mit geringem Performance-Signal und ohne Klick.",
        "Noindex prüfen: Standort-URL ohne Performance-Signal im Export.",
      ],
      tables_used: ["gsc_url_decisions"],
    },
  },
];

const artifact = {
  surface: "report",
  manifest: {
    version: 1,
    surface: "report",
    title: "Pixel56 SEO: Relaunch ohne Rankingverlust",
    description: "Search-Console-basierte URL-, Indexierungs- und Wachstumsstrategie für den Relaunch.",
    generatedAt: analysis.generatedAt,
    sources,
    cards: [
      {
        id: "clicks-90",
        dataset: "headline",
        sourceId: "gsc-performance",
        description: "Unbezahlte Google-Klicks im jüngsten vollständigen 90-Tage-Fenster.",
        metrics: [
          { label: "Klicks · 90 Tage", field: "klicks90", format: "number" },
          { label: "Vorher", field: "klicksVorher90", format: "number" },
          { label: "Veränderung (%)", field: "klicksDelta", format: "number", signed: true },
        ],
      },
      {
        id: "impressions-90",
        dataset: "headline",
        sourceId: "gsc-performance",
        description: "Google-Impressionen im jüngsten vollständigen 90-Tage-Fenster.",
        metrics: [
          { label: "Impressionen · 90 Tage", field: "impressionen90", format: "compact" },
          { label: "Vorher", field: "impressionenVorher90", format: "compact" },
          { label: "Veränderung (%)", field: "impressionenDelta", format: "number", signed: true },
        ],
      },
      {
        id: "ctr-90",
        dataset: "headline",
        sourceId: "gsc-performance",
        description: "Anteil der Impressionen, die im jüngsten 90-Tage-Fenster zu einem Klick führten.",
        metrics: [
          { label: "CTR · 90 Tage", field: "ctr90", format: "percent" },
          { label: "Vorher", field: "ctrVorher90", format: "percent" },
          { label: "Differenz", field: "ctrDelta", format: "percent", signed: true },
        ],
      },
      {
        id: "indexed-share",
        dataset: "headline",
        sourceId: "gsc-coverage",
        description: "Anteil der in der Search Console bekannten Seiten, die aktuell indexiert sind.",
        metrics: [
          { label: "Indexierungsanteil", field: "indexAnteil", format: "percent" },
          { label: "Indexiert", field: "indexiert", format: "number" },
          { label: "Nicht indexiert", field: "nichtIndexiert", format: "number" },
        ],
      },
    ],
    charts: [
      {
        id: "monthly-clicks",
        title: "Organische Klicks pro Monat",
        subtitle: "Nur vollständige Monate von Mai 2025 bis Juli 2026",
        type: "line",
        intent: "trend",
        question: "Wie haben sich die organischen Klicks im Zeitverlauf entwickelt?",
        rationale: "15 vollständige Monatswerte zeigen die längerfristige Entwicklung ohne tägliches Rauschen.",
        dataset: "monthly",
        sourceId: "gsc-performance",
        encodings: {
          x: { field: "monat", type: "temporal", label: "Monat" },
          y: { field: "klicks", type: "quantitative", label: "Klicks", format: "number" },
          tooltip: [
            { field: "impressionen", label: "Impressionen", format: "compact" },
            { field: "ctr", label: "CTR", format: "percent" },
            { field: "position", label: "Position", format: "number" },
          ],
        },
        valueFormat: "number",
        layout: "full",
      },
      {
        id: "commercial-demand",
        title: "Kommerzielle Suchanfragen mit den meisten Impressionen",
        subtitle: "Top 10 im 16-Monats-Export; hohe Impressionen bei sehr wenigen Klicks",
        type: "horizontalBar",
        intent: "comparison",
        question: "Bei welchen kaufnahen Suchanfragen ist die ungenutzte Sichtbarkeit am größten?",
        rationale: "Sortierte horizontale Balken machen lange Suchbegriffe und Größenunterschiede lesbar.",
        dataset: "commercialQueriesTop10",
        sourceId: "gsc-performance",
        encodings: {
          x: { field: "suchanfrage", type: "nominal", label: "Suchanfrage" },
          y: { field: "impressionen", type: "quantitative", label: "Impressionen", format: "compact" },
          tooltip: [
            { field: "klicks", label: "Klicks", format: "number" },
            { field: "ctr", label: "CTR", format: "percent" },
            { field: "position", label: "Position", format: "number" },
          ],
        },
        valueFormat: "compact",
        layout: "full",
      },
      {
        id: "location-decisions",
        title: "Vorläufige Entscheidung für 166 Standort-URLs",
        subtitle: "Klick- und impressionsbasierte Triage; keine automatische Löschung",
        type: "horizontalBar",
        intent: "comparison",
        question: "Wie verteilen sich die Standortseiten auf die nächsten SEO-Aktionen?",
        rationale: "Vier eindeutig benannte Aktionsgruppen machen Umfang und Priorität direkt vergleichbar.",
        dataset: "locationDecisions",
        sourceId: "url-decisions",
        encodings: {
          x: { field: "entscheidung", type: "nominal", label: "Entscheidung" },
          y: { field: "urls", type: "quantitative", label: "URLs", format: "number" },
          tooltip: [
            { field: "klicks", label: "Klicks", format: "number" },
            { field: "impressionen", label: "Impressionen", format: "compact" },
            { field: "anteil", label: "Anteil", format: "percent" },
          ],
        },
        valueFormat: "number",
        layout: "full",
      },
      {
        id: "coverage-issues",
        title: "Gründe für nicht indexierte Seiten",
        subtitle: "158 von 166 Ausschlüssen beruhen auf Googles Indexierungsentscheidung",
        type: "horizontalBar",
        intent: "comparison",
        question: "Welche Gründe erklären die 166 nicht indexierten Seiten?",
        rationale: "Die sortierte Darstellung trennt Qualitäts-/Auswahlsignale von technischen Sonderfällen.",
        dataset: "coverageIssues",
        sourceId: "gsc-coverage",
        encodings: {
          x: { field: "grund", type: "nominal", label: "Grund" },
          y: { field: "seiten", type: "quantitative", label: "Seiten", format: "number" },
          tooltip: [
            { field: "anteil", label: "Anteil", format: "percent" },
            { field: "quelle", label: "Quelle" },
          ],
        },
        valueFormat: "number",
        layout: "full",
      },
    ],
    tables: [
      {
        id: "commercial-query-table",
        title: "Kommerzielle Keyword-Chancen",
        subtitle: "Top 15 nach Impressionen, 13. April 2025 bis 12. August 2026",
        dataset: "commercialQueries",
        sourceId: "gsc-performance",
        defaultSort: { field: "impressionen", direction: "desc" },
        density: "spacious",
        layout: "full",
        columns: [
          { field: "suchanfrage", label: "Suchanfrage", type: "text" },
          { field: "impressionen", label: "Impressionen", format: "compact" },
          { field: "klicks", label: "Klicks", format: "number" },
          { field: "ctr", label: "CTR", format: "percent" },
          { field: "position", label: "Position", format: "number" },
        ],
      },
      {
        id: "top-location-table",
        title: "Standortseiten mit den stärksten Signalen",
        subtitle: "Top 15 nach Klicks, danach Impressionen; Hostvarianten pfadgleich konsolidiert",
        dataset: "topLocations",
        sourceId: "url-decisions",
        defaultSort: { field: "klicks", direction: "desc" },
        density: "spacious",
        layout: "full",
        columns: [
          { field: "pfad", label: "Pfad", type: "text" },
          { field: "entscheidung", label: "Entscheidung", type: "text" },
          { field: "klicks", label: "Klicks", format: "number" },
          { field: "impressionen", label: "Impressionen", format: "compact" },
          { field: "ctr", label: "CTR", format: "percent" },
          { field: "position", label: "Position", format: "number" },
        ],
      },
      {
        id: "url-matrix-table",
        title: "Vollständige URL-Entscheidungsmatrix",
        subtitle: "240 Sitemap-URLs plus vier zusätzliche GSC-Funde",
        dataset: "urlMatrix",
        sourceId: "url-decisions",
        defaultSort: { field: "klicks", direction: "desc" },
        density: "dense",
        layout: "full",
        columns: [
          { field: "path", label: "Pfad", type: "text" },
          { field: "typ", label: "Typ", type: "text" },
          { field: "entscheidungLabel", label: "Entscheidung", type: "text" },
          { field: "klicks", label: "Klicks", format: "number" },
          { field: "impressionen", label: "Impressionen", format: "compact" },
          { field: "ctr", label: "CTR", format: "percent" },
          { field: "position", label: "Position", format: "number" },
          { field: "ziel", label: "Ziel", type: "text" },
        ],
      },
    ],
    blocks: [
      { id: "title", type: "markdown", body: "# Pixel56 SEO: Relaunch ohne Rankingverlust", layout: "full" },
      {
        id: "executive-summary",
        type: "markdown",
        body: "## Executive Summary\n\n- **Die vorhandenen URLs werden beim Relaunch zunächst geschützt.** 74 Pfade mit weitergeführtem Inhalt hatten Klicks. Zusätzlich erhält eine historische, inzwischen gelöschte Stellenanzeige mit fünf Klicks eine direkte Weiterleitung auf `/karriere`.\n- **Das größte Wachstumsproblem ist nicht fehlende Nachfrage, sondern schwache Ausschöpfung.** Bekannte kommerzielle Suchanfragen erzeugten 158.441 Impressionen, aber nur 51 zuordenbare Klicks.\n- **Google sieht ein Qualitäts- und Architekturproblem.** Nur 91 von 257 bekannten Seiten sind indexiert; 158 der 166 Ausschlüsse lauten „gefunden/gecrawlt, derzeit nicht indexiert“.\n- **Standortseiten werden nicht pauschal gelöscht.** 37 müssen geschützt, 22 gezielt ausgebaut, 98 auf Konsolidierung und neun auf Noindex geprüft werden.",
        layout: "full",
      },
      { id: "headline-metrics", type: "metric-strip", cardIds: ["clicks-90", "impressions-90", "ctr-90", "indexed-share"], layout: "full" },
      {
        id: "performance-finding",
        type: "markdown",
        sourceId: "gsc-performance",
        body: "## Mehr Sichtbarkeit führt derzeit zu weniger Klicks\n\n**In den jüngsten 90 Tagen fielen die Klicks um 35,7 %, obwohl die Impressionen um 1,1 % stiegen.** Die CTR sank von 0,453 % auf 0,289 %, während sich die durchschnittliche Position um rund fünf Plätze verschlechterte. Die Nachfrage ist also nicht verschwunden; Pixel56 erscheint häufig, aber zu weit hinten oder mit einem unzureichend passenden Suchergebnis.\n\nDie monatliche Entwicklung zeigt, dass die Klickleistung nach dem stärkeren Sommer 2025 nicht wieder auf das frühere Niveau zurückgekehrt ist. Der Relaunch muss deshalb Rankings, Snippets und Suchintention gemeinsam verbessern – nicht nur Ladezeit und Technik.",
        layout: "full",
      },
      { id: "monthly-clicks-block", type: "chart", chartId: "monthly-clicks", layout: "full" },
      {
        id: "commercial-finding",
        type: "markdown",
        sourceId: "gsc-performance",
        body: "## Kaufnahe Suchbegriffe sind die größte ungenutzte Chance\n\n**„Webdesign Koblenz“ allein erzeugte 12.328 Impressionen, aber nur neun Klicks.** Ähnliche Muster zeigen „Webdesign Agentur Koblenz“, „SEO Koblenz“, „Online Marketing Koblenz“ und lokale Webdesign-Suchen in Bonn und Neuwied.\n\nDie neue Seitenarchitektur sollte daher zuerst drei kommerzielle Themencluster stärken: Webdesign für KMU und Handwerk, SEO mit regionalem Schwerpunkt sowie Google-/Meta-Ads als messbare Leadgewinnung. Informationsartikel bleiben wichtig, müssen aber systematisch auf passende Leistungsseiten weiterführen.",
        layout: "full",
      },
      { id: "commercial-chart-block", type: "chart", chartId: "commercial-demand", layout: "full" },
      { id: "commercial-table-block", type: "table", tableId: "commercial-query-table", layout: "full" },
      {
        id: "location-finding",
        type: "markdown",
        sourceId: "url-decisions",
        body: "## Die Standortstrategie braucht vier statt einer einzigen Regel\n\n**Nur 37 der 166 Standortseiten erzeugten mindestens einen Klick; sie werden geschützt.** Weitere 22 Seiten besitzen ausreichend Impressionen oder gute Positionssignale, um einen echten inhaltlichen Ausbau zu rechtfertigen. 98 Seiten haben nur geringe Signale, neun gar keine.\n\nBeim Relaunch bleiben die Pfade zunächst erreichbar. Danach werden schwache Seiten nur dann konsolidiert, wenn ein wirklich gleichwertiges regionales oder leistungsbezogenes Ziel existiert. Damit vermeiden wir sowohl Rankingverluste als auch eine dauerhafte Masse nahezu gleicher Seiten.",
        layout: "full",
      },
      { id: "location-chart-block", type: "chart", chartId: "location-decisions", layout: "full" },
      { id: "location-table-block", type: "table", tableId: "top-location-table", layout: "full" },
      {
        id: "coverage-finding",
        type: "markdown",
        sourceId: "gsc-coverage",
        body: "## Das Indexierungsproblem ist überwiegend redaktionell, nicht technisch\n\n**95 Seiten wurden gefunden, aber nicht indexiert; weitere 63 wurden sogar gecrawlt und trotzdem nicht aufgenommen.** Zusammen sind das 95,2 % aller nicht indexierten Seiten. Redirects, Noindex und 404 erklären nur acht Fälle.\n\nDie Priorität liegt deshalb auf einzigartigem lokalem Nutzen, klarer interner Verlinkung, weniger Kannibalisierung und einer Sitemap, die nur wirklich indexierbare 200-Seiten enthält. Ein technischer Relaunch allein würde dieses Problem nicht lösen.",
        layout: "full",
      },
      { id: "coverage-chart-block", type: "chart", chartId: "coverage-issues", layout: "full" },
      {
        id: "recommendations",
        type: "markdown",
        body: "## Empfohlene Reihenfolge\n\n1. **Relaunch-Schutz fertigstellen:** vorhandene Pfade, Canonicals, `www`-Weiterleitung und die zwei neu entdeckten Stellen-Redirects beibehalten und testen.\n2. **Kommerzielle Kernseiten neu ausrichten:** Webdesign Koblenz/KMU, SEO Koblenz/Handwerk und Ads-Seiten jeweils auf eine eindeutige Suchintention optimieren.\n3. **59 Standortseiten priorisieren:** 37 klickende Seiten schützen und 22 Chancen mit individueller Substanz ausbauen.\n4. **107 schwache Standortseiten einzeln entscheiden:** 98 Konsolidierungs- und neun Noindex-Kandidaten erst nach Inhalts- und Backlinkprüfung verändern.\n5. **Nach dem Go-live messen:** wöchentlich Klicks, CTR, Indexierung, 404 und Canonicals überwachen; keine Massenbereinigung am Launch-Tag.",
        layout: "full",
      },
      { id: "url-matrix-block", type: "table", tableId: "url-matrix-table", layout: "full" },
      {
        id: "further-questions",
        type: "markdown",
        body: "## Weitere Fragen\n\n- Welche Standortseiten besitzen externe Backlinks oder echte Kundenreferenzen?\n- Welche Leads und Umsätze kamen bisher tatsächlich über organische Suche?\n- Welche Änderung rund um September 2025 fällt zeitlich mit dem Sichtbarkeitsverlust zusammen?\n- Welche regionalen Märkte sind operativ wirklich relevant und können mit individuellem Inhalt belegt werden?",
        layout: "full",
      },
      {
        id: "caveats",
        type: "markdown",
        body: "## Annahmen und Grenzen\n\n- Search-Console-Seitenwerte sind dimensionsbedingt nicht vollständig additiv; sie werden zur URL-Priorisierung, nicht zur exakten Anteilssumme genutzt.\n- Der Suchanfragenexport deckt wegen anonymisierter Abfragen nur 409 der 1.189 Gesamtklicks ab.\n- Der Coverage-Export enthält Ausschlussgründe, aber keine betroffenen Einzel-URLs. Die Standortklassifikation ist daher eine belastbare Performance-Triage, noch keine automatische Indexierungsentscheidung.\n- Zeitliche Zusammenhänge belegen keine Ursache. Für den Rückgang ab 2025 fehlen noch Änderungsprotokolle der damaligen Website.",
        layout: "full",
      },
    ],
  },
  snapshot: {
    version: 1,
    generatedAt: analysis.generatedAt,
    status: "ready",
    datasets: {
      headline,
      monthly: fullMonths,
      commercialQueriesTop10: commercialQueries.slice(0, 10),
      commercialQueries,
      locationDecisions: locationDecisionRows,
      topLocations,
      coverageIssues: coverageIssueRows,
      urlMatrix: decisions,
    },
  },
  sources,
};

await writeFile(outputPath, `${JSON.stringify(artifact, null, 2)}\n`, "utf8");
console.log(`Report artifact written to ${path.relative(webRoot, outputPath)}`);
