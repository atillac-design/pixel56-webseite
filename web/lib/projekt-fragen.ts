/**
 * Fragen und Antworten je Projektseite. Vorher hatten alle 17 Projektseiten
 * dieselben drei Fragen; jetzt bezieht sich jede Frage auf das konkrete
 * Projekt. Keine Zahlen, keine Ergebnisse, die der Kunde nicht freigegeben hat.
 */

export type ProjektFrage = { q: string; a: string };

export const projektFragen: Record<string, ProjektFrage[]> = {
  "stark-ins-neue": [
    { q: "Warum eine eigene Landingpage statt der bestehenden Website?", a: "Weil eine Anzeige ein Versprechen macht und die Seite dahinter genau dieses Versprechen einlösen muss. Auf der normalen Website konkurrierte die Kursanmeldung mit allem anderen. Die Landingpage hat ein Ziel und sonst nichts." },
    { q: "Wie wurden Meta Ads und Landingpage aufeinander abgestimmt?", a: "Motiv, Text und Zielgruppe der Anzeige greifen das Kursangebot auf, die Seite führt es weiter: gleiche Sprache, gleiches Bild, Anmeldung ohne Umweg. Das Tracking zeigt, welche Anzeige zu welcher Anmeldung geführt hat." },
    { q: "Lässt sich das auf andere Bildungsangebote oder Vereine übertragen?", a: "Ja, der Aufbau passt überall dort, wo ein Angebot eine klare Handlung verlangt: Anmeldung, Spende, Mitgliedschaft. Die Inhalte entstehen aber jedes Mal aus dem Angebot selbst, nicht aus einer Vorlage." },
  ],
  "ma-transporte": [
    { q: "Warum laufen Website, Social Media und Meta Ads hier aus einer Hand?", a: "Weil die drei zusammen wirken: Die Website erklärt die Spezialleistungen, der Content zeigt den Alltag, die Kampagnen bringen Kunden und Bewerber dorthin. Ein Ansprechpartner hält Bild, Sprache und Botschaft über alle Kanäle gleich." },
    { q: "Wie zeigt man ein Transportunternehmen, das auch Gefahrgut bewegt, auf Social Media?", a: "Mit echten Aufnahmen aus dem Betrieb: Fahrzeuge, Fahrer, Verladung, Zertifikate. Sicherheit und Sorgfalt werden gezeigt, nicht behauptet. Was nicht gezeigt werden darf, bleibt draußen." },
    { q: "Was heißt „Zusammenarbeit seit 2019“ konkret?", a: "Laufende Betreuung mit festem Rhythmus: neue Inhalte, Anpassungen an der Website, Kampagnen nach Bedarf. Kein Projekt mit Enddatum, sondern eine Begleitung, die mit dem Betrieb mitwächst." },
  ],
  "van-den-berg": [
    { q: "Warum war konstantes Budget so wichtig?", a: "Meta lernt aus Daten, und sprunghaftes Budget bricht dieses Lernen immer wieder ab. Mit gleichmäßigem Budget und sauberem Tracking konnte der Algorithmus herausfinden, wer wirklich reagiert, und die Ergebnisse wurden planbar." },
    { q: "Wie liefen die Recruiting-Anzeigen ab?", a: "Anzeigen im Feed-Format mit klarer Botschaft, zum Beispiel für Abbruchhelfer mit Festeinstellung in Andernach, führten auf eine fokussierte Zielseite. Bewerbungen und Anfragen wurden gemessen, Motive und Zielgruppen regelmäßig angepasst." },
    { q: "Warum endete die Zusammenarbeit 2024?", a: "Das Unternehmen besteht in dieser Form nicht mehr. Bis dahin liefen Kampagnen, Tracking und Zielseiten durchgehend betreut. Wir zeigen das Projekt, weil die Vorgehensweise für Recruiting im Handwerk weiterhin gilt." },
  ],
  "gm-dachdecker": [
    { q: "Warum ein Karriereportal statt einer einfachen Stellenanzeige?", a: "Weil der Bewerbungsweg per E-Mail gerade jüngere Kandidaten abschreckt. Im Portal laden Bewerber ihre Unterlagen in wenigen Minuten direkt hoch, vom Handy aus. Die Hürde ist niedriger, und der Betrieb bekommt vollständige Unterlagen." },
    { q: "Wie passen Website und Meta-Ads-Kampagnen zusammen?", a: "Die Kampagnen sprechen Dachdecker und Quereinsteiger in der Region gezielt an und führen direkt ins Karriereportal. Die Website zeigt vorher, wer der Betrieb ist, damit Bewerber wissen, bei wem sie sich melden." },
    { q: "Kann ein kleinerer Handwerksbetrieb dasselbe bekommen?", a: "Ja. Karriereseite, Upload und Kampagne lassen sich auf jede Betriebsgröße anpassen. Wichtig ist nicht die Größe, sondern dass der Betrieb ehrlich zeigt, wie es bei ihm zugeht." },
  ],
  "dachdecker-region-koblenz": [
    { q: "Warum wird der Betrieb hier nicht namentlich genannt?", a: "Auf Wunsch des Inhabers. Wir zeigen deshalb Ausschnitte ohne Logo und beschreiben die Arbeit, ohne den Namen zu nennen. Das Projekt steht trotzdem hier, weil es zeigt, wie eine Dachdecker-Website heute aufgebaut sein sollte." },
    { q: "Was macht eine Dachdecker-Website aus, die Anfragen bringt?", a: "Leistungen einzeln erklärt, echte Baustellenfotos, Einsatzgebiet klar benannt und ein Kontaktweg, der auf dem Handy sofort sichtbar ist. Wer ein Dach sanieren lassen will, vergleicht drei Seiten in zwei Minuten und ruft eine an." },
    { q: "Wie lange dauert so ein Projekt?", a: "Von der ersten Abstimmung bis zum Livegang einige Wochen, abhängig von Fototermin und Textfreigaben. Den genauen Ablauf legen wir im Erstgespräch fest." },
  ],
  "oktay-coemertler": [
    { q: "Warum zuerst Branding und dann die Website?", a: "Weil die Website nur so gut wirkt wie die Marke dahinter. Logo, Farben und Tonalität mussten zur Härte des Gewerks passen. Erst danach ergab es Sinn, Leistungen, Referenzen und Kontakt auf einer Website zu strukturieren." },
    { q: "Wie zeigt man Abbruch, Tief- und Kanalbau online seriös?", a: "Mit klaren Leistungsseiten, echten Bildern von Maschinen und Baustellen und einer Sprache, die Bauherren und Auftraggeber verstehen. Keine Werbesprüche, sondern Bandbreite, Ausstattung und Erreichbarkeit." },
    { q: "Was bedeutet der Zeitraum 2018 bis 2023?", a: "Die Zusammenarbeit lief über mehrere Jahre: zuerst Marke und Website, danach Anpassungen und Erweiterungen, wenn sich das Unternehmen verändert hat. So bleibt ein Auftritt aktuell, statt nach drei Jahren wieder von vorn zu beginnen." },
  ],
  "cass-schulungen": [
    { q: "Warum ist Seriosität bei Luftsicherheitsschulungen so entscheidend?", a: "Weil Unternehmen und Teilnehmer einem Anbieter vertrauen müssen, bevor sie buchen. Bunte Werbung schadet hier. Marke und Website sind deshalb ruhig und klar gestaltet, mit Kursübersicht und verständlichen Informationen im Mittelpunkt." },
    { q: "Welche Rolle spielt Social Media für einen Schulungsanbieter?", a: "Sie zeigt Kompetenz im Alltag: Schulungsräume, Dozenten, Termine, Hinweise zu Vorschriften. Das Erscheinungsbild zieht sich von der Website bis in den Feed durch, damit der Anbieter überall gleich erkennbar ist." },
    { q: "Kann ich ein ähnliches Projekt für einen anderen Bildungsanbieter bekommen?", a: "Ja. Der Aufbau passt für Schulungen, Akademien und Zertifizierungsanbieter. Tonalität, Kursstruktur und Buchungsweg entstehen aber jedes Mal aus dem konkreten Angebot." },
  ],
  "sportler-fuer-kinderherzen": [
    { q: "Warum braucht eine Spendengala eine eigene Marke?", a: "Weil Menschen das Event über Wochen auf verschiedenen Kanälen sehen: Einladung, Social Media, Plakat, Bühne. Ein wiedererkennbares Erscheinungsbild sorgt dafür, dass alles als eine Veranstaltung wahrgenommen wird." },
    { q: "Welches Material ist für die Kampagne entstanden?", a: "Social-Media-Formate, Event-Cover und Stories, alle im selben Erscheinungsbild. Damit konnten Veranstalter, Sportler und Unterstützer das Event mit einheitlichem Material bewerben." },
    { q: "Macht ihr so etwas auch für Vereine mit kleinem Budget?", a: "Ja, wenn das Ziel klar ist. Für Vereine und gemeinnützige Projekte legen wir den Umfang so, dass das Material über mehrere Veranstaltungen hinweg genutzt werden kann." },
  ],
  "lernforum-obertshausen": [
    { q: "Wie bringt man ein so breites Angebot übersichtlich auf eine Website?", a: "Mit einer Struktur nach den Fragen der Eltern und Schüler: Nachhilfe nach Fach und Stufe, Prüfungsvorbereitung, Sprachcafé. Jedes Angebot hat eine eigene Seite mit Ablauf und Kontakt, statt alles auf einer Seite zu sammeln." },
    { q: "Wie wird die Atmosphäre des Lernforums online spürbar?", a: "Durch Bilder aus den Räumen, warme Farben, freundliche Sprache und Texte, die Eltern direkt ansprechen. Vertrauen entsteht, bevor der erste Anruf kommt." },
    { q: "Das Lernforum sitzt in Hessen. Arbeitet ihr auch außerhalb der Region Koblenz?", a: "Ja. Konzept, Design und Abstimmung liefen per Video-Call und Telefon, mit festen Terminen. Für viele Projekte spielt die Entfernung keine Rolle." },
  ],
  curlyann: [
    { q: "Warum war das Buchungssystem so wichtig?", a: "Weil das Angebot vielfältig ist und Interessenten vorher nicht wussten, wo sie buchen sollen. Jetzt hat jeder Workshop eine eigene Seite mit Kalender, freien Plätzen und Buchung im selben Schritt. Zahlung und Bestätigung laufen automatisch." },
    { q: "Wie entstand die Marke vor der Website?", a: "Logo, Farben und Tonalität wurden zuerst entwickelt, damit Website, Buchungsseiten und Social Media dieselbe Handschrift tragen. Das Kreative des Angebots sollte sichtbar sein, ohne dass die Struktur darunter leidet." },
    { q: "Kann ich die Website live ansehen?", a: "Ja, der Link steht oben auf dieser Seite. Die Website ist seit 2026 online und wird vom Atelier selbst gepflegt: Termine, Workshops und Texte lassen sich ohne uns ändern." },
  ],
  "cavar-home": [
    { q: "Welches Shopsystem steckt dahinter?", a: "Ein System, das Produkte groß zeigt und sich ohne Agentur pflegen lässt: Produkte anlegen, Preise ändern, Bestellungen verwalten. Welches System zu einem Sortiment passt, klären wir je nach Größe und Zielgruppe." },
    { q: "Worauf kommt es bei einem Shop für Wohnen und Living an?", a: "Auf Bilder, Kategorien und einen Checkout ohne Hürden. Wer stöbert, muss sich zurechtfinden, und wer kaufen will, darf nicht an einem langen Formular scheitern. Dazu eine mobile Darstellung, die genauso gut funktioniert wie am Rechner." },
    { q: "Übernehmt ihr auch Produktfotos und Texte?", a: "Nach Absprache ja. Für diesen Shop lag der Schwerpunkt auf Struktur, Design und Technik. Produktfotos und Beschreibungen können wir ergänzen oder mit dem Kunden gemeinsam aufbauen." },
  ],
  "discounthaus-holding": [
    { q: "Warum ist Modulbau online so erklärungsbedürftig?", a: "Weil Interessenten oft nicht wissen, was möglich ist: Einsatzzwecke, Ablauf, Genehmigungen, Zeiträume. Die Website erklärt das Schritt für Schritt und nimmt die Fragen vorweg, die sonst zum Abbruch führen." },
    { q: "Wie führt die Seite zum Kontakt?", a: "Jede Erklärung endet mit einem klaren nächsten Schritt: Kontaktformular, Rückruf oder Anfrage mit den wichtigsten Angaben. Wer verstanden hat, was er bekommt, meldet sich eher." },
    { q: "Eignet sich der Aufbau auch für andere erklärungsbedürftige Produkte?", a: "Ja, zum Beispiel für Anlagenbau, Sanierung oder technische Dienstleistungen. Das Prinzip bleibt: erst verständlich machen, dann zur Anfrage führen." },
  ],
  "schluesselfertig-immobilien": [
    { q: "Wie bleibt die Objektübersicht aktuell?", a: "Objekte lassen sich vom Unternehmen selbst anlegen, ändern und entfernen, mit Bildern, Eckdaten und Status. So ist die Übersicht immer auf Stand, ohne dass eine Agentur eingreifen muss." },
    { q: "Warum ein eigener Bereich für Homestaging?", a: "Weil es eine eigene Leistung mit eigener Zielgruppe ist: Verkäufer, die ihr Objekt besser präsentieren wollen. Ein eigener Bereich macht das sichtbar, ohne die Objektsuche zu stören." },
    { q: "Worauf achtet ihr bei Immobilien-Websites besonders?", a: "Auf Ruhe und Seriosität: klare Typografie, große Bilder, keine Werbesprache. Käufer treffen hier große Entscheidungen und suchen einen Anbieter, dem sie vertrauen." },
  ],
  "dema-bedachungen": [
    { q: "Warum nur Logo und Branding, keine Website?", a: "Weil das der Baustein mit dem größten Hebel war: Fahrzeuge, Kleidung und Angebote werden täglich gesehen, und dort fehlte ein einheitliches Erscheinungsbild. Eine Website kann später auf derselben Marke aufbauen." },
    { q: "Wie entsteht ein Logo, das zum Dachdeckerhandwerk passt?", a: "Aus dem Gewerk heraus: robuste Formen, klare Schrift, Farben, die auf Fahrzeugen und Arbeitskleidung funktionieren. Getestet in klein auf der Visitenkarte und in groß auf dem Transporter." },
    { q: "Was bekommt der Betrieb am Ende in die Hand?", a: "Alle Logodateien in den nötigen Formaten, Farbwerte, Schriftangaben und Vorlagen für Fahrzeug, Kleidung und Angebot. Damit kann jeder Dienstleister des Betriebs sauber weiterarbeiten." },
  ],
  "berkan-kaya": [
    { q: "Was unterscheidet eine Sponsorenmappe von einer Broschüre?", a: "Die Sponsorenmappe richtet sich an Entscheider, die eine Investition prüfen. Sie erzählt das Vorhaben, zeigt den Menschen dahinter und nennt klar, was ein Partner bekommt. Sie muss im Gespräch funktionieren und danach auf dem Schreibtisch bestehen." },
    { q: "Wie wurde das Seven-Summits-Projekt visuell erzählt?", a: "Mit großer Bildsprache, einer klaren Reihenfolge der Seiten und Fakten dort, wo Entscheider sie suchen. Das Design tritt hinter das Vorhaben zurück, statt sich davor zu stellen." },
    { q: "Gestaltet ihr auch Sponsorenunterlagen für Vereine und Veranstaltungen?", a: "Ja. Der Aufbau ist übertragbar: Geschichte, Reichweite, Gegenleistung, Kontakt. Inhalt und Bildsprache entstehen aber immer aus dem konkreten Projekt." },
  ],
  burgerfabrik: [
    { q: "Warum werden die Reels direkt im laufenden Betrieb gedreht?", a: "Weil Gäste echtes Essen, echte Menschen und echte Atmosphäre sehen wollen. Gestellte Aufnahmen wirken in der Gastronomie austauschbar. Der Dreh im Betrieb liefert Material, das man so nirgendwo anders sieht." },
    { q: "Wie hängen Branding und Social Content zusammen?", a: "Logo, Verpackung und Plakate tragen dieselbe Handschrift wie der Feed. Wer ein Reel sieht und danach den Laden betritt, erkennt die Marke sofort wieder. Das schafft Vertrauen und Wiedererkennung." },
    { q: "Wie oft wird veröffentlicht?", a: "In festem Rhythmus statt sporadisch. Der Plan richtet sich nach Öffnungszeiten, Aktionen und Saison. Drehtage werden gebündelt, damit das Team im Laden nicht gestört wird." },
  ],
  "colak-gmbh": [
    { q: "Wie erklärt man Trocknungstechnologie verständlich, ohne sie zu vereinfachen?", a: "Mit einer Struktur nach Fragen der Kunden: Welches System, für welchen Einsatz, wie wird es eingebunden? Die Systeme CT 500 und CF 500 bekamen eigene Seiten mit Einsatzbereichen und Integrationsmöglichkeiten, verständlich für Einkäufer und Technik gleichermaßen." },
    { q: "Was heißt Produktkommunikation in diesem Projekt?", a: "Texte, Struktur und Darstellung, die aus technischen Merkmalen einen Nutzen machen. Nicht die Technik steht vorn, sondern das Problem, das sie im Produktionsprozess löst." },
    { q: "Was bedeutet der Zeitraum 2020 bis 2021?", a: "Konzept, Umsetzung und Livegang der Website fielen in diesen Zeitraum. Die Aussage der Colak GmbH zur Zusammenarbeit stammt aus den veröffentlichten Kundenstimmen." },
  ],
  "bne-ag-broschuere": [
    { q: "Warum eine gedruckte Broschüre statt einer Website?", a: "Weil sie im persönlichen Gespräch übergeben wird und danach für sich allein stehen muss. Bei einem beratungsintensiven Angebot für eine anspruchsvolle Zielgruppe ist ein hochwertiges Druckstück das passendere Format." },
    { q: "Wie wurde die Gestaltung auf Vertrauen ausgelegt?", a: "Dunkles Blau, Gold, viel Luft, ruhige Typografie und eine klare Lesereihenfolge: ein Satz auf dem Cover, Innenseiten mit Struktur, eine Vorteilsseite zum Abschluss. Keine Werbesprache." },
    { q: "Habt ihr auch die Druckabwicklung übernommen?", a: "Die Druckdaten kamen fertig aufbereitet aus unserer Hand: Format, Falz, Farbprofil, Beschnitt. Den Druck kann der Kunde bei seiner Druckerei beauftragen oder über uns abwickeln lassen." },
  ],
  "benjamin-hassan": [
    { q: "Wofür nutzt ein Profi-Tennisspieler eine Broschüre?", a: "Für Gespräche mit Sponsoren, Veranstaltern und Partnern. Sie stellt den Spieler vor, zeigt die Saison mit Turnierplan und wirkt seriös, ohne wie ein Fan-Flyer auszusehen. Etwas zum Dalassen, das nach dem Gespräch weiterwirkt." },
    { q: "Wie entstand die Farbwelt aus Platzgrün und Gelb?", a: "Aus dem Sport selbst: Platzgrün und Ballgelb sind sofort als Tennis lesbar. Kräftige Schrift und klare Seiten sorgen dafür, dass Fakten und Termine schnell erfassbar sind." },
    { q: "Lässt sich die Broschüre für neue Saisons aktualisieren?", a: "Ja, der Turnierplan nach Monaten und die Spielerseiten sind so aufgebaut, dass sie sich mit neuen Daten und Bildern aktualisieren lassen, ohne das Layout neu zu entwickeln." },
  ],
};

export function getProjektFragen(slug: string): ProjektFrage[] | undefined {
  return projektFragen[slug];
}
