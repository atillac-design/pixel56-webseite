import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Datenschutz", robots: { index: false } };

export default function DatenschutzPage() {
  return <LegalPage title="Datenschutz" />;
}
