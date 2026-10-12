import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(scriptDir, "..");

const performanceDir = path.resolve(process.argv[2] ?? "");
const coverageDir = path.resolve(process.argv[3] ?? "");
const outputJson = path.resolve(process.argv[4] ?? path.join(webRoot, "data/gsc-seo-analysis.json"));
const outputCsv = path.resolve(process.argv[5] ?? path.join(webRoot, "data/gsc-url-decisions.csv"));

if (!process.argv[2] || !process.argv[3]) {
  console.error("Usage: node scripts/analyze-gsc-export.mjs <performance-dir> <coverage-dir> [output-json] [output-csv]");
  process.exit(1);
}

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

  if (rows.length === 0) return [];
  const headers = rows[0].map((header) => header.replace(/^\uFEFF/, ""));
  return rows.slice(1).map((cells) => Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""])));
}

function number(value) {
  if (value === undefined || value === null || value === "") return 0;
  return Number(String(value).replace("%", "").replace(",", ".")) || 0;
}

function round(value, digits = 2) {
  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

function normalizePath(urlOrPath) {
  let pathname = urlOrPath;
  try {
    pathname = new URL(urlOrPath).pathname;
  } catch {
    // Bereits ein Pfad.
  }
  const clean = pathname.split("?")[0].split("#")[0] || "/";
  return clean === "/" ? "/" : clean.replace(/\/+$/, "");
}

function csvCell(value) {
  const text = value === null || value === undefined ? "" : String(value);
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function periodSummary(rows) {
  const clicks = rows.reduce((sum, row) => sum + row.clicks, 0);
  const impressions = rows.reduce((sum, row) => sum + row.impressions, 0);
  const weightedPosition = impressions
    ? rows.reduce((sum, row) => sum + row.position * row.impressions, 0) / impressions
    : 0;
  return {
    start: rows.at(0)?.date ?? null,
    end: rows.at(-1)?.date ?? null,
    days: rows.length,
    clicks,
    impressions,
    ctr: impressions ? round((clicks / impressions) * 100, 3) : 0,
    position: round(weightedPosition, 2),
  };
}

function queryIntent(query) {
  const value = query.toLowerCase().trim();
  if (/\bpixel\s*56\b/.test(value)) return "brand";
  if (/(tagesplan|to.?do.?liste|checkliste|vorlage|pdf|kostenlos|ki.?agent|chatgpt|künstliche intelligenz)/.test(value)) {
    return "resource";
  }
  if (/(webdesign|webseite|homepage|seo|suchmaschinen|google ads|meta ads|facebook ads|online.?marketing|marketing.?agentur|werbeagentur|landingpage|mitarbeitergewinnung|social.?media.?agentur)/.test(value)) {
    return "commercial";
  }
  return "other";
}

function strategicDecision(route, metrics) {
  if (route.action === "exclude") return "exclude";
  if (route.action === "redirect") return "redirect";
  if (metrics.clicks > 0) return "protect";

  if (route.type === "location") {
    if (metrics.impressions >= 500 || (metrics.impressions >= 50 && metrics.position <= 20)) return "improve";
    if (metrics.impressions > 0) return "consolidate-review";
    return "noindex-review";
  }

  if (metrics.impressions >= 500) return "improve";
  return "preserve";
}

const [legacy, pageText, queryText, dailyText, issueText, coverageDailyText] = await Promise.all([
  readFile(path.join(webRoot, "data/legacy-urls.json"), "utf8").then(JSON.parse),
  readFile(path.join(performanceDir, "Seiten.csv"), "utf8"),
  readFile(path.join(performanceDir, "Suchanfragen.csv"), "utf8"),
  readFile(path.join(performanceDir, "Diagramm.csv"), "utf8"),
  readFile(path.join(coverageDir, "Kritische Probleme.csv"), "utf8"),
  readFile(path.join(coverageDir, "Diagramm.csv"), "utf8"),
]);

const pageRows = parseCsv(pageText).map((row) => ({
  url: row["Die häufigsten Seiten"],
  path: normalizePath(row["Die häufigsten Seiten"]),
  host: new URL(row["Die häufigsten Seiten"]).host,
  clicks: number(row.Klicks),
  impressions: number(row.Impressionen),
  ctr: number(row.CTR),
  position: number(row.Position),
}));

const queryRows = parseCsv(queryText).map((row) => ({
  query: row["Häufigste Suchanfragen"],
  intent: queryIntent(row["Häufigste Suchanfragen"]),
  clicks: number(row.Klicks),
  impressions: number(row.Impressionen),
  ctr: number(row.CTR),
  position: number(row.Position),
}));

const dailyRows = parseCsv(dailyText).map((row) => ({
  date: row.Datum,
  clicks: number(row.Klicks),
  impressions: number(row.Impressionen),
  ctr: number(row.CTR),
  position: number(row.Position),
}));

const issueRows = parseCsv(issueText).map((row) => ({
  reason: row.Grund,
  source: row.Quelle,
  validation: row.Validierung,
  pages: number(row.Seiten),
}));

const coverageRows = parseCsv(coverageDailyText).map((row) => ({
  date: row.Datum,
  notIndexed: row["Nicht indexiert"] === "" ? null : number(row["Nicht indexiert"]),
  indexed: row.Indexiert === "" ? null : number(row.Indexiert),
  impressions: number(row.Impressionen),
}));

const pageByPath = new Map();
for (const row of pageRows) {
  const current = pageByPath.get(row.path) ?? {
    path: row.path,
    clicks: 0,
    impressions: 0,
    weightedPosition: 0,
    hosts: new Set(),
    urls: [],
  };
  current.clicks += row.clicks;
  current.impressions += row.impressions;
  current.weightedPosition += row.position * row.impressions;
  current.hosts.add(row.host);
  current.urls.push(row.url);
  pageByPath.set(row.path, current);
}

const consolidatedPages = [...pageByPath.values()].map((row) => ({
  path: row.path,
  clicks: row.clicks,
  impressions: row.impressions,
  ctr: row.impressions ? round((row.clicks / row.impressions) * 100, 3) : 0,
  position: row.impressions ? round(row.weightedPosition / row.impressions, 2) : 0,
  hosts: [...row.hosts].sort(),
  urls: row.urls,
}));

const decisions = legacy.routes.map((route) => {
  const metrics = consolidatedPages.find((page) => page.path === normalizePath(route.sourcePath)) ?? {
    clicks: 0,
    impressions: 0,
    ctr: 0,
    position: 0,
    hosts: [],
    urls: [],
  };
  const decision = strategicDecision(route, metrics);
  return {
    sourcePath: route.sourcePath,
    type: route.type,
    migrationAction: route.action,
    targetPath: route.targetPath,
    strategicDecision: decision,
    clicks: metrics.clicks,
    impressions: metrics.impressions,
    ctr: metrics.ctr,
    position: metrics.position,
    hosts: metrics.hosts,
    rationale:
      decision === "protect" ? "Erzeugt Klicks: URL und Suchintention beim Relaunch schützen."
        : decision === "improve" ? "Sichtbarkeit ohne Klicks: Inhalt und Snippet gezielt verbessern."
          : decision === "consolidate-review" ? "Geringes Signal: nur auf ein thematisch gleichwertiges Ziel konsolidieren."
            : decision === "noindex-review" ? "Kein Performance-Signal im 16-Monats-Export; Indexierung nach Einzelprüfung entscheiden."
              : decision === "exclude" ? "Technische/System-URL bleibt aus der Sitemap ausgeschlossen."
                : decision === "redirect" ? "Bereits beschlossenes semantisch gleichwertiges Weiterleitungsziel."
                  : "Bestands-URL zunächst unverändert erhalten.",
  };
});

const gscOnlyRoutes = new Map([
  [
    "/stellenangebote/remote-freelancer-videograph-reels-experte-fur-pixel56",
    {
      type: "job",
      migrationAction: "redirect",
      targetPath: "/karriere",
      strategicDecision: "redirect",
      rationale: "Historische Stellenanzeige ist live bereits 404, hatte aber fünf Klicks; direkt auf Karriere weiterleiten.",
    },
  ],
  [
    "/stellenangebote/ixel56-marketing-agentur-in-koblenz-sucht-vertriebsprofi-in",
    {
      type: "job",
      migrationAction: "redirect",
      targetPath: "/stellenangebote/pixel56-marketing-agentur-in-koblenz-sucht-vertriebsprofi-in",
      strategicDecision: "redirect",
      rationale: "Historische Tippfehler-URL direkt auf die korrekte Stellenanzeige weiterleiten.",
    },
  ],
  [
    "/danke",
    {
      type: "system",
      migrationAction: "preserve",
      targetPath: "/danke",
      strategicDecision: "preserve-noindex",
      rationale: "Formular-Zielseite für bestehende Abläufe erhalten, aber nicht indexieren.",
    },
  ],
  [
    "/bestaetigt",
    {
      type: "system",
      migrationAction: "preserve",
      targetPath: "/bestaetigt",
      strategicDecision: "preserve-noindex",
      rationale: "Double-Opt-in-Zielseite erhalten, aber nicht indexieren.",
    },
  ],
]);

for (const page of consolidatedPages) {
  if (legacy.routes.some((route) => normalizePath(route.sourcePath) === page.path)) continue;
  const route = gscOnlyRoutes.get(page.path) ?? {
    type: "other",
    migrationAction: "review",
    targetPath: page.path,
    strategicDecision: "review",
    rationale: "Außerhalb der Sitemap über Search Console gefunden; vor dem Relaunch einzeln prüfen.",
  };
  decisions.push({
    sourcePath: page.path,
    ...route,
    clicks: page.clicks,
    impressions: page.impressions,
    ctr: page.ctr,
    position: page.position,
    hosts: page.hosts,
  });
}

const latest90 = periodSummary(dailyRows.slice(-90));
const previous90 = periodSummary(dailyRows.slice(-180, -90));
const allTime = periodSummary(dailyRows);

const monthly = Object.values(dailyRows.reduce((groups, row) => {
  const month = row.date.slice(0, 7);
  groups[month] ??= [];
  groups[month].push(row);
  return groups;
}, {})).map((rows) => ({ month: rows[0].date.slice(0, 7), ...periodSummary(rows) }));

const queryIntentSummary = Object.values(queryRows.reduce((groups, row) => {
  groups[row.intent] ??= { intent: row.intent, queries: 0, clicks: 0, impressions: 0, weightedPosition: 0 };
  const group = groups[row.intent];
  group.queries += 1;
  group.clicks += row.clicks;
  group.impressions += row.impressions;
  group.weightedPosition += row.position * row.impressions;
  return groups;
}, {})).map((group) => ({
  intent: group.intent,
  queries: group.queries,
  clicks: group.clicks,
  impressions: group.impressions,
  ctr: group.impressions ? round((group.clicks / group.impressions) * 100, 3) : 0,
  position: group.impressions ? round(group.weightedPosition / group.impressions, 2) : 0,
  clickShare: allTime.clicks ? round((group.clicks / allTime.clicks) * 100, 2) : 0,
  impressionShare: allTime.impressions ? round((group.impressions / allTime.impressions) * 100, 2) : 0,
})).sort((a, b) => b.clicks - a.clicks);

const decisionSummary = Object.values(decisions.reduce((groups, row) => {
  groups[row.strategicDecision] ??= { decision: row.strategicDecision, urls: 0, clicks: 0, impressions: 0 };
  groups[row.strategicDecision].urls += 1;
  groups[row.strategicDecision].clicks += row.clicks;
  groups[row.strategicDecision].impressions += row.impressions;
  return groups;
}, {})).sort((a, b) => b.urls - a.urls);

const typeSummary = Object.values(decisions.reduce((groups, row) => {
  groups[row.type] ??= { type: row.type, urls: 0, urlsWithClicks: 0, urlsWithImpressions: 0, clicks: 0, impressions: 0 };
  const group = groups[row.type];
  group.urls += 1;
  if (row.clicks > 0) group.urlsWithClicks += 1;
  if (row.impressions > 0) group.urlsWithImpressions += 1;
  group.clicks += row.clicks;
  group.impressions += row.impressions;
  return groups;
}, {})).sort((a, b) => b.clicks - a.clicks);

const locationDecisions = decisions.filter((row) => row.type === "location");
const locationSummary = {
  urls: locationDecisions.length,
  urlsWithClicks: locationDecisions.filter((row) => row.clicks > 0).length,
  urlsWithImpressions: locationDecisions.filter((row) => row.impressions > 0).length,
  clicks: locationDecisions.reduce((sum, row) => sum + row.clicks, 0),
  impressions: locationDecisions.reduce((sum, row) => sum + row.impressions, 0),
  decisions: decisionSummary.filter((row) => locationDecisions.some((location) => location.strategicDecision === row.decision)).map((row) => ({
    decision: row.decision,
    urls: locationDecisions.filter((location) => location.strategicDecision === row.decision).length,
    clicks: locationDecisions.filter((location) => location.strategicDecision === row.decision).reduce((sum, location) => sum + location.clicks, 0),
    impressions: locationDecisions.filter((location) => location.strategicDecision === row.decision).reduce((sum, location) => sum + location.impressions, 0),
  })),
  top: [...locationDecisions].sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions).slice(0, 20),
};

const issueTotal = issueRows.reduce((sum, row) => sum + row.pages, 0);
const selectionIssues = issueRows
  .filter((row) => /zurzeit nicht indexiert/.test(row.reason))
  .reduce((sum, row) => sum + row.pages, 0);

const currentCoverage = [...coverageRows].reverse().find((row) => row.indexed !== null && row.notIndexed !== null);
const minIndexed = coverageRows.filter((row) => row.indexed !== null).reduce((min, row) => row.indexed < min.indexed ? row : min, { indexed: Number.POSITIVE_INFINITY });
const maxIndexed = coverageRows.filter((row) => row.indexed !== null).reduce((max, row) => row.indexed > max.indexed ? row : max, { indexed: Number.NEGATIVE_INFINITY });

const pageTotals = {
  rows: pageRows.length,
  consolidatedPaths: consolidatedPages.length,
  clicks: pageRows.reduce((sum, row) => sum + row.clicks, 0),
  impressions: pageRows.reduce((sum, row) => sum + row.impressions, 0),
};
const queryTotals = {
  rows: queryRows.length,
  clicks: queryRows.reduce((sum, row) => sum + row.clicks, 0),
  impressions: queryRows.reduce((sum, row) => sum + row.impressions, 0),
};

const analysis = {
  generatedAt: new Date().toISOString(),
  sources: {
    performance: "pixel56.de-Performance-on-Search-2026-08-15.zip",
    coverage: "pixel56.de-Coverage-2026-08-15.zip",
    migrationInventory: "data/legacy-urls.json",
  },
  scope: {
    start: allTime.start,
    end: allTime.end,
    days: allTime.days,
    property: "pixel56.de",
    searchType: "Web",
  },
  dataQuality: {
    performance: "high",
    exactIndexClassification: "limited",
    notes: [
      "Performance enthält Tageswerte, Seiten und Suchanfragen für 16 Monate.",
      "Suchanfragen können wegen anonymisierter Google-Abfragen weniger Klicks als der Gesamtreport enthalten.",
      "Der Coverage-Export enthält Problemklassen und Summen, aber keine betroffenen Einzel-URLs.",
      "Positionen zusammengefasster Hostvarianten sind impressionsgewichtet und deshalb eine Näherung.",
    ],
    reconciliation: {
      daily: allTime,
      pages: pageTotals,
      queries: queryTotals,
      pageClickCoverage: allTime.clicks ? round((pageTotals.clicks / allTime.clicks) * 100, 2) : 0,
      queryClickCoverage: allTime.clicks ? round((queryTotals.clicks / allTime.clicks) * 100, 2) : 0,
    },
  },
  performance: {
    allTime,
    latest90,
    previous90,
    monthly,
    change90: {
      clicks: previous90.clicks ? round(((latest90.clicks - previous90.clicks) / previous90.clicks) * 100, 2) : null,
      impressions: previous90.impressions ? round(((latest90.impressions - previous90.impressions) / previous90.impressions) * 100, 2) : null,
      ctrPercentagePoints: round(latest90.ctr - previous90.ctr, 3),
      position: round(latest90.position - previous90.position, 2),
    },
    queryIntent: queryIntentSummary,
    topQueries: [...queryRows].sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions).slice(0, 30),
    topCommercialQueries: queryRows.filter((row) => row.intent === "commercial").sort((a, b) => b.impressions - a.impressions).slice(0, 30),
    topPages: [...consolidatedPages].sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions).slice(0, 30),
  },
  coverage: {
    current: currentCoverage,
    indexedShare: currentCoverage ? round((currentCoverage.indexed / (currentCoverage.indexed + currentCoverage.notIndexed)) * 100, 2) : null,
    issues: issueRows,
    issueTotal,
    googleSelectionIssues: selectionIssues,
    googleSelectionShare: issueTotal ? round((selectionIssues / issueTotal) * 100, 2) : 0,
    minIndexed,
    maxIndexed,
  },
  migration: {
    totalInventoryUrls: decisions.length,
    sitemapUrls: legacy.routes.length,
    gscDiscoveredUrls: decisions.length - legacy.routes.length,
    decisionSummary,
    typeSummary,
    locationSummary,
    unmatchedPerformancePaths: consolidatedPages
      .filter((page) => !legacy.routes.some((route) => normalizePath(route.sourcePath) === page.path))
      .sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions),
  },
};

const csvColumns = [
  "sourcePath", "type", "migrationAction", "targetPath", "strategicDecision",
  "clicks", "impressions", "ctr", "position", "hosts", "rationale",
];
const csv = [
  csvColumns.join(","),
  ...decisions.map((row) => csvColumns.map((column) => csvCell(column === "hosts" ? row.hosts.join("|") : row[column])).join(",")),
].join("\n");

await Promise.all([
  writeFile(outputJson, `${JSON.stringify(analysis, null, 2)}\n`, "utf8"),
  writeFile(outputCsv, `${csv}\n`, "utf8"),
]);

console.log(`GSC analysis written to ${path.relative(webRoot, outputJson)}`);
console.log(`URL decision matrix written to ${path.relative(webRoot, outputCsv)}`);
console.log(JSON.stringify({
  allTime: analysis.performance.allTime,
  latest90: analysis.performance.latest90,
  change90: analysis.performance.change90,
  coverage: analysis.coverage,
  locations: analysis.migration.locationSummary,
}, null, 2));
