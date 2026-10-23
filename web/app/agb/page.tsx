import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "AGB",
  description:
    "Allgemeine Geschäftsbedingungen von Pixel56 für Webdesign, Anzeigen, Content, SEO und KI-Prozesse: Vertragsschluss, Vergütung, Nutzungsrechte, Laufzeiten.",
  robots: { index: false },
};

export default function AgbPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen">
      <p className="legal-meta">
        Stand: Oktober 2026. Diese Bedingungen gelten für Unternehmer im Sinne
        von § 14 BGB. Für Verbraucher gelten sie nicht.
      </p>

      <h2>1. Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge
        zwischen Atilla Ciftcioglu, Pixel56, Hüttenstraße 100, 56170 Bendorf
        (nachfolgend „Pixel56“ oder „wir“) und dem Auftraggeber (nachfolgend
        „du“ oder „Kunde“) über Leistungen in den Bereichen Webdesign und
        Webentwicklung, Landingpages und Funnels, Online-Werbung (Meta Ads,
        Google Ads), Content-Produktion, Suchmaschinenoptimierung,
        Mitarbeitergewinnung und KI-gestützte Automatisierung.
      </p>
      <p>
        Abweichende oder ergänzende Bedingungen des Kunden werden nur
        Vertragsbestandteil, wenn wir ihnen ausdrücklich schriftlich zustimmen.
        Individuelle Vereinbarungen im Angebot oder Vertrag gehen diesen AGB
        vor.
      </p>

      <h2>2. Angebot und Vertragsschluss</h2>
      <p>
        Unsere Angebote sind freibleibend, sofern sie nicht ausdrücklich als
        verbindlich bezeichnet sind. Ein Vertrag kommt zustande, wenn du unser
        Angebot schriftlich oder in Textform (z. B. per E-Mail oder WhatsApp)
        annimmst oder wir mit der Ausführung beginnen. Angebote gelten 14 Tage
        ab Angebotsdatum.
      </p>
      <p>
        Der Leistungsumfang ergibt sich ausschließlich aus dem Angebot bzw. der
        Auftragsbestätigung. Leistungen, die dort nicht aufgeführt sind, werden
        gesondert beauftragt und vergütet.
      </p>

      <h2>3. Leistungen von Pixel56</h2>
      <p>
        Wir erbringen unsere Leistungen nach dem Stand der Technik und mit der
        Sorgfalt eines ordentlichen Dienstleisters. Soweit nicht anders
        vereinbart, schulden wir bei Websites, Landingpages und sonstigen
        Werken die Herstellung des vereinbarten Werks (Werkvertrag). Bei
        laufender Betreuung, Kampagnenführung, Content-Produktion im Abonnement,
        Beratung und Suchmaschinenoptimierung schulden wir die vereinbarte
        Tätigkeit, nicht einen bestimmten Erfolg wie Platzierungen, Reichweiten,
        Anfragen, Bewerbungen oder Umsätze (Dienstvertrag).
      </p>
      <p>
        Wir dürfen zur Leistungserbringung Subunternehmer und Dienste Dritter
        (z. B. Hosting, Schriftarten, Werbeplattformen, KI-Dienste) einsetzen.
        Wir bleiben dein Ansprechpartner und verantworten die Leistung.
      </p>
      <p>
        Werbebudgets für Meta, Google oder andere Plattformen sind nicht Teil
        unserer Vergütung. Sie werden über Werbekonten abgerechnet, die auf
        deinen Namen laufen oder zu denen du vollen Zugriff hast, und direkt
        von dir an die Plattform gezahlt.
      </p>

      <h2>4. Mitwirkung des Kunden</h2>
      <p>
        Du stellst uns rechtzeitig alle Inhalte, Informationen, Zugänge und
        Freigaben zur Verfügung, die wir für die Leistung brauchen (z. B.
        Texte, Bilder, Logos, Zugangsdaten zu Domain, Hosting, Werbekonten
        und Google-Unternehmensprofil). Du benennst eine Person, die
        Entscheidungen treffen und Freigaben erteilen kann.
      </p>
      <p>
        Für Inhalte, die du uns lieferst, sicherst du zu, dass du die
        erforderlichen Rechte besitzt und dass sie keine Rechte Dritter
        verletzen. Du stellst uns von Ansprüchen Dritter frei, die auf von dir
        gelieferten Inhalten beruhen.
      </p>
      <p>
        Verzögert sich die Leistung, weil Mitwirkungen ausbleiben, verschieben
        sich vereinbarte Termine entsprechend. Entstehen uns dadurch
        Mehraufwände, dürfen wir sie nach vorheriger Ankündigung gesondert
        berechnen.
      </p>

      <h2>5. Abnahme</h2>
      <p>
        Bei Werkleistungen (z. B. Website, Landingpage) stellen wir dir das
        fertige Werk zur Abnahme bereit. Du prüfst es innerhalb von 10
        Werktagen und teilst uns wesentliche Mängel in Textform mit. Erfolgt in
        dieser Frist keine Rüge wesentlicher Mängel oder nutzt du das Werk
        produktiv (z. B. durch Veröffentlichung unter deiner Domain), gilt es
        als abgenommen. Unwesentliche Mängel berechtigen nicht zur Verweigerung
        der Abnahme; wir beheben sie im Rahmen der Gewährleistung.
      </p>
      <p>
        Je Projekt sind zwei Korrekturrunden für Design und Texte enthalten,
        sofern im Angebot nichts anderes steht. Weitergehende Änderungswünsche,
        insbesondere nach Freigabe eines Arbeitsschritts, werden nach Aufwand
        vergütet.
      </p>

      <h2>6. Vergütung und Zahlung</h2>
      <p>
        Es gilt die im Angebot vereinbarte Vergütung. Alle Preise verstehen
        sich zuzüglich der gesetzlichen Umsatzsteuer.
      </p>
      <p>
        Bei Projekten mit festem Umfang werden 50 Prozent der Vergütung bei
        Auftragserteilung fällig, die restlichen 50 Prozent bei Abnahme bzw.
        Livegang. Bei Projekten über mehrere Monate können im Angebot
        Teilzahlungen nach Arbeitsschritten vereinbart werden.
      </p>
      <p>
        Laufende Leistungen (Betreuung, Kampagnenführung, Content-Pakete,
        Pflege) werden monatlich im Voraus abgerechnet. Leistungen nach Aufwand
        werden monatlich nachträglich abgerechnet; der Stundensatz ergibt sich
        aus dem Angebot.
      </p>
      <p>
        Rechnungen sind innerhalb von 14 Tagen ab Rechnungsdatum ohne Abzug
        zahlbar. Bei Zahlungsverzug dürfen wir Verzugszinsen in gesetzlicher
        Höhe berechnen und laufende Leistungen bis zum Ausgleich aussetzen.
        Die Übertragung von Nutzungsrechten steht unter dem Vorbehalt
        vollständiger Zahlung.
      </p>

      <h2>7. Laufzeit und Kündigung laufender Leistungen</h2>
      <p>
        Verträge über laufende Leistungen werden auf unbestimmte Zeit
        geschlossen, sofern im Angebot keine Mindestlaufzeit vereinbart ist.
        Beide Seiten können sie mit einer Frist von vier Wochen zum Monatsende
        in Textform kündigen. Eine vereinbarte Mindestlaufzeit bleibt unberührt.
      </p>
      <p>
        Du kannst laufende Leistungen nach Absprache vorübergehend pausieren.
        Während einer Pause ruhen Leistung und Vergütung; vereinbarte Pausen
        und ihre Dauer halten wir in Textform fest. Das Recht zur fristlosen
        Kündigung aus wichtigem Grund bleibt für beide Seiten bestehen.
      </p>
      <p>
        Nach Vertragsende übergeben wir dir auf Wunsch Zugänge, Daten und
        Konten, die dir gehören, und beenden unseren Zugriff. Werbekonten,
        Domains und Inhalte bleiben in deinem Eigentum.
      </p>

      <h2>8. Nutzungsrechte</h2>
      <p>
        Mit vollständiger Zahlung erhältst du das zeitlich und räumlich
        unbeschränkte Recht, die für dich erstellten Arbeitsergebnisse
        (Website, Texte, Designs, Fotos, Videos, Anzeigenmotive) für die
        vereinbarten Zwecke zu nutzen, zu vervielfältigen, zu bearbeiten und
        öffentlich zugänglich zu machen. Bis zur vollständigen Zahlung ist die
        Nutzung nur zur Prüfung und Abnahme gestattet.
      </p>
      <p>
        Entwürfe, Konzepte und Varianten, die nicht beauftragt wurden, bleiben
        bei uns. Lizenzen Dritter (z. B. Schriftarten, Musik, Stockmaterial,
        Software, Plugins) übertragen wir, soweit die Lizenzbedingungen das
        zulassen; andernfalls weisen wir dich darauf hin, und du erwirbst sie
        selbst.
      </p>
      <p>
        Wir dürfen die für dich erbrachten Leistungen als Referenz nennen und
        in angemessenem Umfang zeigen, etwa auf unserer Website, in sozialen
        Netzwerken und in Angeboten. Das umfasst Name, Logo, Screenshots und
        eine kurze Beschreibung der Aufgabe. Du kannst dem jederzeit in
        Textform widersprechen; dann entfernen wir die Referenz innerhalb von
        14 Tagen. Vertrauliche Inhalte und interne Kennzahlen veröffentlichen
        wir nicht.
      </p>
      <p>
        Ein dezenter Hinweis auf Pixel56 im Fuß einer von uns erstellten
        Website ist üblich. Wenn du das nicht möchtest, sag es uns, dann lassen
        wir ihn weg.
      </p>

      <h2>9. Gewährleistung</h2>
      <p>
        Bei Werkleistungen beheben wir Mängel, die innerhalb von 12 Monaten ab
        Abnahme in Textform gemeldet werden, durch Nachbesserung. Schlägt die
        Nachbesserung zweimal fehl, kannst du die Vergütung angemessen mindern
        oder vom Vertrag zurücktreten. Keine Mängel sind Abweichungen, die auf
        von dir gelieferten Inhalten, nachträglichen Änderungen durch dich
        oder Dritte, Änderungen von Browsern, Plattformen oder Diensten Dritter
        oder auf fehlenden Updates beruhen, sofern du keine Pflege bei uns
        beauftragt hast.
      </p>
      <p>
        Wir prüfen gelieferte Inhalte nicht auf rechtliche Zulässigkeit (z. B.
        Wettbewerbs-, Marken- oder Urheberrecht) und erbringen keine
        Rechtsberatung. Rechtstexte wie Impressum, Datenschutzerklärung oder
        AGB stellst du bereit oder lässt sie rechtlich prüfen; wir binden sie
        technisch ein.
      </p>

      <h2>10. Haftung</h2>
      <p>
        Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit, für
        Schäden aus der Verletzung von Leben, Körper oder Gesundheit sowie nach
        dem Produkthaftungsgesetz. Bei einfacher Fahrlässigkeit haften wir nur
        bei Verletzung einer wesentlichen Vertragspflicht, also einer Pflicht,
        deren Erfüllung die ordnungsgemäße Durchführung des Vertrags erst
        ermöglicht und auf deren Einhaltung du vertrauen darfst; in diesem Fall
        ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden
        begrenzt, höchstens auf die Vergütung der letzten zwölf Monate des
        betroffenen Vertrags.
      </p>
      <p>
        Für Ergebnisse von Werbekampagnen, Suchmaschinenplatzierungen,
        Reichweiten, Bewerbungszahlen oder Umsätze übernehmen wir keine
        Garantie. Für Ausfälle, Sperrungen, Richtlinienänderungen oder
        Fehlfunktionen von Plattformen und Diensten Dritter (z. B. Meta,
        Google, Hosting, KI-Anbieter) haften wir nicht, soweit wir sie nicht
        zu vertreten haben. Für Datenverlust haften wir nur in dem Umfang, der
        bei regelmäßiger, dem Stand der Technik entsprechender Datensicherung
        durch dich entstanden wäre.
      </p>

      <h2>11. KI-gestützte Leistungen</h2>
      <p>
        Bei Automatisierungen und Inhalten, die mit Unterstützung von
        KI-Diensten entstehen, legen wir vor der Umsetzung fest, welche Daten
        in welche Dienste fließen dürfen und an welcher Stelle ein Mensch
        prüft und freigibt. KI-Ergebnisse sind Entwürfe; verbindliche
        Entscheidungen, Preiszusagen, rechtliche Aussagen und sensible
        Kommunikation bleiben bei dir. Du prüfst KI-erstellte Inhalte vor der
        Veröffentlichung. Soweit gesetzlich erforderlich, kennzeichnen wir
        KI-generierte Inhalte und weisen dich auf Kennzeichnungspflichten hin.
      </p>

      <h2>12. Vertraulichkeit und Datenschutz</h2>
      <p>
        Beide Seiten behandeln Geschäftsgeheimnisse und vertrauliche
        Informationen der anderen Seite vertraulich, auch nach Vertragsende.
        Soweit wir personenbezogene Daten in deinem Auftrag verarbeiten (z. B.
        Anfragen über Formulare, Bewerberdaten, Kundendaten in
        Automatisierungen), schließen wir mit dir einen Vertrag zur
        Auftragsverarbeitung nach Art. 28 DSGVO. Die Datenschutzerklärung von
        Pixel56 findest du unter <a href="/datenschutz">pixel56.de/datenschutz</a>.
      </p>

      <h2>13. Schlussbestimmungen</h2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des
        UN-Kaufrechts. Gerichtsstand für alle Streitigkeiten aus dem
        Vertragsverhältnis ist Koblenz, sofern du Kaufmann, juristische Person
        des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen
        bist. Änderungen und Ergänzungen des Vertrags bedürfen der Textform.
      </p>
      <p>
        Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, bleibt
        die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle der
        unwirksamen Bestimmung tritt die gesetzliche Regelung.
      </p>

      <p className="legal-meta">
        Pixel56 · Atilla Ciftcioglu · Hüttenstraße 100 · 56170 Bendorf ·{" "}
        <a href="mailto:info@pixel56.de">info@pixel56.de</a>
      </p>
    </LegalLayout>
  );
}
