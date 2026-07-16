import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "AGB", robots: { index: false } };

export default function AgbPage() {
  return <LegalPage title="AGB" />;
}
