// Überarbeitete Fassungen der alten Webflow-Blogartikel (du-Ansprache, Hausstil).
// Slug, Datum, Kategorie und Cover bleiben erhalten; der Text ersetzt die
// migrierte Fassung aus data/legacy-blog.json.
import type { Artikel } from "@/lib/blog-typen";
import a1 from "./5-einfache-tipps-um-mehr-kundenanfragen-als-handwerker-zu-bekommen";
import a2 from "./5-unglaubliche-ki-schreibtools";
import a3 from "./8-bessere-ai-tools-als-chatgpt";
import a4 from "./der-ultimative-guide-zur-erstellung-eines-effektiven-marketing-funnels";
import a5 from "./die-besten-alternativen-zu-calendly-fuer-2023-effiziente-terminplanung";
import a6 from "./die-besten-online-marketing-strategien-2024";
import a7 from "./die-ultimative-marketing-checkliste-fuer-selbststaendige-und-kmus";
import a8 from "./effektive-nutzung-von-social-media-fur-branding-und-lead-generierung";
import a9 from "./grok-vs-deepseek-ki-webdesign-social-media-kmus-deutschland";
import a10 from "./leitfaden-zur-verwendung-von-instagram-anzeigen";
import a11 from "./lernen-sie-wie-sie-ihre-website-fur-kleine-unternehmen-optimieren-und-neue-kunden-gewinnen";
import a12 from "./nische-auf-social-media-finden";
import a13 from "./revolution-durch-ki-fuer-kleine-und-mittelstandische-unternehmen";
import a14 from "./skool-die-neue-plattform-fur-community-building-und-lernen";
import a15 from "./warum-ihre-website-im-jahr-2024-mobil-first-sein-sollte";
import a16 from "./warum-ist-eine-neue-webseite-so-wichtig-fuer-unternehmer";

const dateien: Artikel[] = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16];

export const ueberarbeiteteArtikel: Artikel[] = dateien;
