import { artikel } from "@/lib/blog";
import { fallstudien } from "@/lib/projekte";
import { ressourcen } from "@/lib/ressourcen";
import { indexableLocations, stadtAnzeige } from "@/lib/standorte";
import { getStandortLeistung } from "@/lib/standort-inhalte";
import { services } from "@/lib/site";
import { locationPath, projectPath, resourcePath, routes } from "@/lib/routes";

/** Eintrag der Schnellsuche (components/Schnellsuche.tsx), ausgeliefert über /api/suchindex. */
export type SuchEintrag = { typ: "Leistung" | "Projekt" | "Artikel" | "Ressource" | "Standort" | "Seite"; titel: string; text: string; href: string };

const kurz = (t: string, max = 140) => {
  const s = t.replace(/\s+/g, " ").trim();
  return s.length <= max ? s : `${s.slice(0, max - 1).replace(/\s\S*$/, "")}…`;
};

const seiten: SuchEintrag[] = [
  { typ: "Seite", titel: "Alle Leistungen im Überblick", text: "Webdesign, Meta Ads, Social Content, KI-Prozesse, Landingpages, Mitarbeitergewinnung, Google Ads und SEO.", href: "/dienstleistung" },
  { typ: "Seite", titel: "Website-Check", text: "Kostenlos: Adresse eingeben und zwölf Grundlagen deiner Startseite prüfen lassen.", href: "/website-check" },
  { typ: "Seite", titel: "Kundenprojekte", text: "Websites, Branding und Kampagnen für Handwerk, Dienstleister, Bildung und Vereine.", href: routes.projects },
  { typ: "Seite", titel: "Blog", text: "Marketing-Wissen für kleine Unternehmen und Handwerk, aus der Praxis geschrieben.", href: routes.blog },
  { typ: "Seite", titel: "Über Pixel56", text: "Gründergeführte Digitalagentur in Bendorf bei Koblenz, seit 2018.", href: routes.about },
  { typ: "Seite", titel: "Kontakt und Erstgespräch", text: "Kostenloses Erstgespräch, Telefon, WhatsApp, E-Mail.", href: routes.contact },
  { typ: "Seite", titel: "Standorte rund um Koblenz", text: "13 Städte im Einzugsgebiet, deutschlandweit im Einsatz.", href: routes.locations },
  { typ: "Seite", titel: "Karriere bei Pixel56", text: "Offene Stellen, Initiativbewerbung, Arbeiten in Bendorf und remote.", href: routes.careers },
  { typ: "Seite", titel: "Impressum", text: "Anbieterkennzeichnung von Pixel56.", href: routes.imprint },
  { typ: "Seite", titel: "Datenschutz", text: "Datenschutzerklärung von Pixel56.", href: routes.privacy },
];

export const suchindex: SuchEintrag[] = [
  ...services.map((s): SuchEintrag => ({ typ: "Leistung", titel: s.title, text: kurz(s.short), href: s.href })),
  ...seiten,
  ...ressourcen.map((r): SuchEintrag => ({ typ: "Ressource", titel: `${r.titleStart}${r.titleEm}`, text: kurz(r.heroSub), href: resourcePath(r.slug) })),
  ...fallstudien.map((f): SuchEintrag => ({ typ: "Projekt", titel: `${f.kunde}: ${f.titel}`, text: kurz(`${f.branche} · ${f.tags.join(", ")}. ${f.teaser}`), href: projectPath(f.slug) })),
  ...artikel.map((a): SuchEintrag => ({ typ: "Artikel", titel: a.titel, text: kurz(a.teaser), href: `/blog/${a.slug}` })),
  ...indexableLocations.map((l): SuchEintrag => {
    const leistung = getStandortLeistung(l.leistung);
    const stadt = stadtAnzeige(l);
    return { typ: "Standort", titel: `${leistung.kurz} in ${stadt}`, text: kurz(leistung.metaText(stadt)), href: locationPath(l.slug) };
  }),
];
