import { ogBild, ogContentType, ogGroesse } from "@/lib/og-bild";

export const alt = "Vorlage: Tagesplaner und To-do-Liste | Pixel56";
export const size = ogGroesse;
export const contentType = ogContentType;

export default function Image() {
  return ogBild({
    kicker: "Vorlage · PDF",
    titel: "Tagesplaner und To-do-Liste",
    text: "Zwei editierbare Canva-Vorlagen für deinen Alltag: Tagesplaner und To-do-Liste. Druckbar, digital nutzbar und sofort einsatzbereit.",
    motiv: "marketing-tools",
  });
}
