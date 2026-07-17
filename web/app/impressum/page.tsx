import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum der Agentur Pixel56 (Atilla Ciftcioglu), Bendorf bei Koblenz — Anbieterkennzeichnung und rechtliche Angaben gemäß § 5 DDG.",
  robots: { index: true },
};

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <h2>Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</h2>
      <p>
        Atilla Ciftcioglu
        <br />
        Hüttenstraße 100
        <br />
        56170 Bendorf
        <br />
        Deutschland
      </p>

      <h3>Kontakt</h3>
      <p>
        Telefon: 02622 9898654
        <br />
        E-Mail: <a href="mailto:info@pixel56.de">info@pixel56.de</a>
      </p>

      <h3>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz</h3>
      <p>DE316853316</p>

      <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
      <p>
        Atilla Ciftcioglu
        <br />
        Hüttenstraße 100
        <br />
        56170 Bendorf
      </p>

      <h3>Verbraucherstreitbeilegung</h3>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        von einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
        bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers.
      </p>
    </LegalLayout>
  );
}
