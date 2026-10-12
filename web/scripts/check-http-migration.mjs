import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(resolve(root, "data/legacy-urls.json"), "utf8"));
const baseUrl = (process.argv[2] ?? "http://localhost:3100").replace(/\/$/, "");
const productionUrl = "https://www.pixel56.de";

function normalizeUrl(value) {
  return value === `${productionUrl}/` ? productionUrl : value.replace(/\/$/, "");
}

async function check(route) {
  const response = await fetch(`${baseUrl}${route.sourcePath}`, { redirect: "manual" });

  if (route.action === "exclude") {
    if (![404, 410].includes(response.status)) {
      throw new Error(`${route.sourcePath}: ${response.status} statt 404/410`);
    }
    return "excluded";
  }

  if (route.action === "redirect") {
    if (![301, 302, 307, 308].includes(response.status)) {
      throw new Error(`${route.sourcePath}: ${response.status} statt Redirect`);
    }
    const location = response.headers.get("location");
    if (location !== route.targetPath) {
      throw new Error(`${route.sourcePath}: Redirect auf ${location} statt ${route.targetPath}`);
    }
    return "redirected";
  }

  if (response.status !== 200) {
    throw new Error(`${route.sourcePath}: ${response.status} statt 200`);
  }

  const html = await response.text();
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const expectedCanonical = `${productionUrl}${route.sourcePath === "/" ? "" : route.sourcePath}`;
  if (!canonical || normalizeUrl(canonical) !== normalizeUrl(expectedCanonical)) {
    throw new Error(`${route.sourcePath}: Canonical ${canonical ?? "fehlt"} statt ${expectedCanonical}`);
  }
  return "served";
}

const counts = { served: 0, redirected: 0, excluded: 0 };
const errors = [];
let cursor = 0;

async function worker() {
  while (cursor < manifest.routes.length) {
    const route = manifest.routes[cursor++];
    try {
      counts[await check(route)] += 1;
    } catch (error) {
      errors.push(error.message);
    }
  }
}

await Promise.all(Array.from({ length: 16 }, worker));

console.log(
  `HTTP-Migration: ${counts.served}× 200 + Canonical, ${counts.redirected}× Redirect, ${counts.excluded}× 404/410`,
);
for (const error of errors) console.error(`FEHLER: ${error}`);
if (errors.length) process.exit(1);
