import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(resolve(root, "data/legacy-urls.json"), "utf8"));
const outputPath = resolve(root, "data/legacy-blog.json");

const entityMap = {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  nbsp: " ",
  quot: '"',
  ndash: "–",
  mdash: "—",
  hellip: "…",
};

function decodeEntities(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, number) => String.fromCodePoint(Number(number)))
    .replace(/&([a-z]+);/gi, (entity, name) => entityMap[name.toLowerCase()] ?? entity);
}

function text(value = "") {
  return decodeEntities(
    value
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/[\u200b-\u200d\ufeff]/g, "")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function sanitizeInlineHtml(value) {
  const anchors = [];
  const withTokens = value
    .replace(/<a\b[^>]*href="([^"]+)"[^>]*>/gi, (_, href) => {
      const safeHref = /^(https?:\/\/|\/|#|mailto:|tel:)/i.test(href) ? href : "#";
      const token = `__P56_LINK_${anchors.length}__`;
      anchors.push(`<a href="${safeHref}">`);
      return token;
    })
    .replace(/<\/a>/gi, "__P56_LINK_END__")
    .replace(/<(?!\/?(?:strong|em|b|i|br)\b)[^>]+>/gi, "")
    .replace(/<(strong|em|b|i)\b[^>]*>/gi, "<$1>")
    .replace(/<br\s*\/?>/gi, "<br>");

  return anchors
    .reduce(
      (html, anchor, index) => html.replaceAll(`__P56_LINK_${index}__`, anchor),
      withTokens,
    )
    .replaceAll("__P56_LINK_END__", "</a>");
}

function capture(html, pattern, fallback = "") {
  return text(html.match(pattern)?.[1] ?? fallback);
}

function bodyBlocks(html) {
  const marker = 'class="rich-text w-richtext">';
  const start = html.indexOf(marker);
  if (start < 0) return [];
  const contentStart = start + marker.length;
  const endMarkers = [
    html.indexOf('class="card-about-author-animation"', contentStart),
    html.indexOf('class="section blog-post-newsletter"', contentStart),
  ].filter((position) => position > contentStart);
  const end = endMarkers.length ? Math.min(...endMarkers) : html.length;
  const content = html.slice(contentStart, end);
  const blocks = [];

  for (const match of content.matchAll(/<(h2|h3|p|ul)[^>]*>([\s\S]*?)<\/\1>/gi)) {
    const tag = match[1].toLowerCase();
    if (tag === "ul") {
      const items = [...match[2].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
        .map((item) => text(item[1]))
        .filter(Boolean);
      if (items.length) blocks.push({ typ: "ul", items });
      continue;
    }
    const value = text(match[2]);
    if (value) {
      const block = { typ: tag === "p" ? "p" : "h2", text: value };
      if (tag === "p" && /<(?:a|strong|em|b|i)\b/i.test(match[2])) {
        block.html = sanitizeInlineHtml(match[2]);
      }
      blocks.push(block);
    }
  }
  return blocks;
}

function isoDate(value) {
  const parsed = new Date(value);
  return Number.isNaN(parsed.valueOf()) ? "2026-01-01" : parsed.toISOString().slice(0, 10);
}

async function migrate(route, index) {
  const response = await fetch(route.sourceUrl, {
    headers: { "user-agent": "Pixel56 migration audit" },
  });
  if (!response.ok) throw new Error(`${route.sourcePath}: HTTP ${response.status}`);
  const html = await response.text();
  const blocks = bodyBlocks(html);
  const firstParagraph = blocks.findIndex((block) => block.typ === "p");
  const intro = firstParagraph >= 0 ? blocks[firstParagraph].text : "";
  const body = blocks.filter((_, blockIndex) => blockIndex !== firstParagraph);
  const title = capture(html, /<h1[^>]*class="[^"]*title blog-post[^"]*"[^>]*>([\s\S]*?)<\/h1>/i);
  const teaser = capture(html, /<meta content="([^"]*)" name="description"/i, intro);
  const category = capture(
    html,
    /href="\/blog-kategorien\/[^"]+"[^>]*class="[^"]*blog-post-category[^"]*"[^>]*>[\s\S]*?<div>([\s\S]*?)<\/div><\/a>/i,
    "Marketing",
  );
  const date = capture(html, /class="card-blog-post-main-content-date">([^<]+)</i, "2026-01-01");
  const words = blocks.reduce((count, block) => {
    const values = block.typ === "ul" ? block.items : [block.text];
    return count + values.join(" ").split(/\s+/).filter(Boolean).length;
  }, 0);

  if (!title || !intro || body.length === 0) {
    throw new Error(`${route.sourcePath}: Artikelstruktur unvollständig`);
  }

  return {
    slug: route.sourcePath.replace("/blog/", ""),
    cover: `c${(index % 6) + 1}`,
    kategorie: category,
    titel: title,
    teaser,
    lesezeit: Math.max(3, Math.ceil(words / 200)),
    datum: isoDate(date),
    intro,
    body,
  };
}

const blogRoutes = manifest.routes.filter((route) => route.type === "blog");
const articles = await Promise.all(blogRoutes.map(migrate));
articles.sort((a, b) => b.datum.localeCompare(a.datum));
writeFileSync(outputPath, `${JSON.stringify(articles, null, 2)}\n`);
console.log(`${articles.length} Blogartikel nach ${outputPath} migriert.`);
