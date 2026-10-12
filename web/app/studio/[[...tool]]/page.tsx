import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Pixel56 CMS",
  robots: { index: false, follow: false },
};

/**
 * Das Redaktionsstudio wird getrennt vom öffentlichen Frontend betrieben.
 * Das reduziert Produktionsabhängigkeiten und die Angriffsfläche der Website.
 */
export default function StudioPage() {
  const studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL;
  if (studioUrl) redirect(studioUrl);
  notFound();
}
