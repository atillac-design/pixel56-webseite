/**
 * Reels für die Reel-Wand (components/ReelWand.tsx). Dateien liegen unter
 * public/videos/, hochkant (9:16), möglichst unter 6 MB, H.264 in MP4.
 * Die Wand erscheint erst ab zwei Einträgen; bis dahin läuft das einzelne
 * Reel weiter in den Reel-Mockups der Content- und Meta-Ads-Seite.
 */
export type Reel = {
  src: string;
  /** Vorschaubild (Pfad unter public/), optional; sonst erstes Videobild. */
  poster?: string;
  titel: string;
  kunde?: string;
  /** Kurze Einordnung: Format, Zweck. */
  hinweis: string;
};

export const reels: Reel[] = [
  {
    src: "/videos/reel-burgerfabriq-smash.mp4",
    poster: "/bilder/reel-burgerfabriq-smash.webp",
    titel: "Smash Burger auf dem Grill",
    kunde: "Burger Fabriq",
    hinweis: "Gedreht im laufenden Betrieb, geschnitten für Instagram und TikTok.",
  },
  {
    src: "/videos/reel-burgerfabriq-shake.mp4",
    poster: "/bilder/reel-burgerfabriq-shake.webp",
    titel: "Lotus-Milchshake, Schritt für Schritt",
    kunde: "Burger Fabriq",
    hinweis: "Gedreht im laufenden Betrieb, mit Logo-Abspann aus dem Branding.",
  },
  {
    src: "/videos/reel-handwerker-tipps.mp4",
    poster: "/bilder/reel-handwerker-tipps.webp",
    titel: "5 Tipps für mehr Kundenanfragen",
    kunde: "Pixel56",
    hinweis: "Erklär-Reel aus der eigenen Content-Produktion.",
  },
];
