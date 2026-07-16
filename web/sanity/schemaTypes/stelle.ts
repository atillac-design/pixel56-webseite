import { defineField, defineType } from "sanity";

/** Offene Stelle auf der Karriere-Seite. */
export const stelle = defineType({
  name: "stelle",
  title: "Offene Stelle",
  type: "document",
  fields: [
    defineField({ name: "titel", title: "Stellentitel", type: "string", validation: (r) => r.required() }),
    defineField({ name: "pensum", title: "Pensum & Ort (z. B. „Vollzeit · Bendorf / Remote“)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "aktiv", title: "Aktiv (wird angezeigt)", type: "boolean", initialValue: true }),
    defineField({ name: "reihenfolge", title: "Reihenfolge", type: "number", initialValue: 0 }),
  ],
  preview: { select: { title: "titel", subtitle: "pensum" } },
});
