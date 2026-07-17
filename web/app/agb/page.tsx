import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "AGB",
  description:
    "Allgemeine Geschäftsbedingungen von Pixel56 — Grundlagen unserer Zusammenarbeit für Webdesign, Marketing und Content.",
  robots: { index: false },
};

export default function AgbPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen">
      <p>
        Die Grundlagen unserer Zusammenarbeit halten wir bewusst individuell
        fest: Leistungsumfang, Zeitrahmen und Konditionen werden pro Projekt im
        Angebot bzw. im Vertrag vereinbart, damit sie wirklich zu deinem Vorhaben
        passen.
      </p>
      <p>
        Vollständige Allgemeine Geschäftsbedingungen stellen wir dir vor
        Vertragsschluss gern zur Verfügung — schreib uns einfach an{" "}
        <a href="mailto:info@pixel56.de">info@pixel56.de</a> oder frag im
        Erstgespräch danach.
      </p>
      <p className="legal-meta">Ausführliche AGB folgen vor Livegang.</p>
    </LegalLayout>
  );
}
