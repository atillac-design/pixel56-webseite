import { defineField, defineType } from "sanity";

/**
 * Standortseite (/standorte/<slug>). Vorbereitet für den Ausbau auf viele
 * Städte — jede Stadt braucht individuelle Texte (Thin-Content vermeiden).
 */
export const standort = defineType({
  name: "standort",
  title: "Standortseite",
  type: "document",
  fields: [
    defineField({ name: "stadt", title: "Stadt", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "stadt" }, validation: (r) => r.required() }),
    defineField({ name: "koordinaten", title: "Koordinaten (Anzeige im Hero)", type: "string" }),
    defineField({ name: "heroSub", title: "Hero-Untertitel", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "warumJetztLead", title: "„Warum jetzt“-Absatz (individuell je Stadt!)", type: "text", rows: 5, validation: (r) => r.required() }),
  ],
  preview: { select: { title: "stadt" } },
});
