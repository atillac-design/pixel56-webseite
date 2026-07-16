import { defineField, defineType } from "sanity";

/** Blog-Beitrag. */
export const beitrag = defineType({
  name: "beitrag",
  title: "Blog-Beitrag",
  type: "document",
  fields: [
    defineField({ name: "titel", title: "Titel", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "titel" }, validation: (r) => r.required() }),
    defineField({ name: "teaser", title: "Teaser", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({
      name: "kategorie",
      title: "Kategorie (Cover-Label)",
      type: "string",
      options: { list: ["Website", "SEO", "Ads", "Google Business", "Bewertungen", "Performance", "Kampagnen", "Lokal", "Technik"] },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "coverFarbe",
      title: "Cover-Farbverlauf",
      type: "string",
      options: { list: ["c1", "c2", "c3", "c4", "c5", "c6"] },
      initialValue: "c1",
    }),
    defineField({ name: "lesezeit", title: "Lesezeit (Minuten)", type: "number", initialValue: 5 }),
    defineField({ name: "inhalt", title: "Inhalt", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "veroeffentlichtAm", title: "Veröffentlicht am", type: "datetime" }),
  ],
  preview: { select: { title: "titel", subtitle: "kategorie" } },
});
