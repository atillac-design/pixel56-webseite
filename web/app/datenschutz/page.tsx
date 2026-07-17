import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Pixel56: Wie wir mit personenbezogenen Daten umgehen — Hosting, Formulare, Newsletter, Terminbuchung, Analyse und deine Rechte nach DSGVO.",
  robots: { index: true },
};

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <p>
        <b>Hinweis:</b> Diese Datenschutzerklärung beschreibt die
        Datenverarbeitung auf dieser Website. Bitte vor dem Livegang durch eine
        juristisch geprüfte Fassung bestätigen bzw. ergänzen lassen — die hier
        genannten Dienste sind vollständig und korrekt benannt.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Atilla Ciftcioglu — Pixel56
        <br />
        Hüttenstraße 100, 56170 Bendorf bei Koblenz
        <br />
        E-Mail: <a href="mailto:info@pixel56.de">info@pixel56.de</a> · Telefon:
        02622 9898654
      </p>

      <h2>2. Hosting</h2>
      <p>
        Diese Website wird bei <b>Netlify</b> (Netlify, Inc., USA) gehostet.
        Beim Aufruf der Seiten verarbeitet Netlify technisch notwendige Daten in
        Server-Logfiles (u. a. IP-Adresse, Datum und Uhrzeit des Zugriffs,
        aufgerufene Seite, Browsertyp). Rechtsgrundlage ist unser berechtigtes
        Interesse an einem sicheren und stabilen Betrieb der Website (Art. 6
        Abs. 1 lit. f DSGVO). Mit Netlify besteht ein Vertrag zur
        Auftragsverarbeitung; die Übermittlung in die USA ist über die
        EU-Standardvertragsklauseln abgesichert.
      </p>

      <h2>3. Inhalte (Content-Management)</h2>
      <p>
        Redaktionelle Inhalte (z. B. Blog, Stellenanzeigen) werden über{" "}
        <b>Sanity</b> (Sanity AS, Norwegen) verwaltet und ausgeliefert. Beim
        Abruf von Inhalten können technische Verbindungsdaten verarbeitet werden.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <h2>4. Kontaktaufnahme und Formulare</h2>
      <p>
        Wenn du uns über das Kontaktformular, ein Freebie-Formular, per E-Mail,
        Telefon oder WhatsApp kontaktierst, verarbeiten wir die von dir
        angegebenen Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, Nachricht),
        um deine Anfrage zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
        DSGVO (vorvertragliche Maßnahmen) bzw. lit. f DSGVO.
      </p>

      <h3>Newsletter und Freebie-Downloads (MailerLite)</h3>
      <p>
        Für den Versand kostenloser Downloads (Checklisten, Vorlagen) und für
        unseren Newsletter nutzen wir <b>MailerLite</b> (UAB „MailerLite“,
        Litauen). Trägst du dich ein, werden deine E-Mail-Adresse und ggf.
        weitere Angaben bei MailerLite gespeichert. Der Versand erfolgt im
        Double-Opt-in-Verfahren, deine Einwilligung kannst du jederzeit über den
        Abmeldelink oder per Nachricht an uns widerrufen. Rechtsgrundlage ist
        Art. 6 Abs. 1 lit. a DSGVO.
      </p>

      <h2>5. Terminbuchung (Calendly)</h2>
      <p>
        Für die Buchung kostenloser Erstgespräche verlinken wir auf{" "}
        <b>Calendly</b> (Calendly LLC, USA). Erst wenn du den Buchungslink
        aufrufst, verarbeitet Calendly die von dir eingegebenen Daten (z. B.
        Name, E-Mail, Terminwunsch). Es gilt die Datenschutzerklärung von
        Calendly. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <h2>6. WhatsApp</h2>
      <p>
        Über den WhatsApp-Button kannst du uns direkt kontaktieren. Dabei gelten
        die Datenschutzbestimmungen von WhatsApp (Meta Platforms Ireland Ltd.).
        Die Nutzung ist freiwillig; alternativ erreichst du uns per E-Mail oder
        Telefon.
      </p>

      <h2>7. Webanalyse (Google Analytics)</h2>
      <p>
        Diese Website nutzt <b>Google Analytics</b> (Google Ireland Ltd.) zur
        statistischen Auswertung der Nutzung — jedoch <b>erst nach deiner
        ausdrücklichen Einwilligung</b> über unser Cookie-Banner (Art. 6 Abs. 1
        lit. a DSGVO). Ohne Einwilligung werden keine Analyse-Cookies gesetzt
        und keine Analysedaten übertragen. Deine Einwilligung kannst du
        jederzeit über die Cookie-Einstellungen widerrufen.
      </p>

      <h2>8. Speicherdauer</h2>
      <p>
        Wir verarbeiten personenbezogene Daten nur so lange, wie es für die
        genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen
        bestehen. Danach werden die Daten gelöscht.
      </p>

      <h2>9. Deine Rechte</h2>
      <p>Dir stehen nach der DSGVO folgende Rechte zu:</p>
      <ul>
        <li>Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft</li>
        <li>Beschwerde bei einer Datenschutz-Aufsichtsbehörde</li>
      </ul>
      <p>
        Zur Ausübung deiner Rechte genügt eine Nachricht an{" "}
        <a href="mailto:info@pixel56.de">info@pixel56.de</a>.
      </p>

      <p className="legal-meta">Stand: 2026 · Dienste-Liste vollständig, juristische Endprüfung ausstehend</p>
    </LegalLayout>
  );
}
