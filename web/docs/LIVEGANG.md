# Livegang-Checkliste (Stand 23.10.2026, Seite ist LIVE)

Was vor dem Umzug von pixel56.de auf die neue Seite passieren muss, in der
Reihenfolge, in der es sinnvoll ist. Punkte mit **[Inhaber]** kann nur Atilla
erledigen (Zugänge, Verträge). Alles andere macht die KI-Sitzung.

## 1. Netlify: Umgebungsvariablen setzen [Inhaber]

Netlify → Site `pixel56-neue-seite` → Site configuration → Environment
variables → „Add a variable“. Namen exakt so eintragen (Groß-/Kleinschreibung
zählt). Nach dem Eintragen einen neuen Deploy auslösen („Trigger deploy“).

Pflicht, damit die Klick-Fragebögen (8 Leistungsseiten + Kontaktseite)
Mails verschicken:

| Variable | Woher | Beispiel |
|---|---|---|
| `RESEND_API_KEY` | resend.com → API Keys (Domain pixel56.de dort verifizieren) | `re_…` |
| `PIXEL56_CONTACT_FROM` | Absender, Domain muss bei Resend verifiziert sein | `Pixel56 <anfragen@pixel56.de>` |
| `PIXEL56_CONTACT_TO` | Postfach, in dem Anfragen landen sollen | `info@pixel56.de` |

Optional, damit Anfragen und Freebie-Anmeldungen als Kontakte in MailerLite
landen (ohne diese Werte funktionieren die Freebie-Formulare nicht):

| Variable | Woher |
|---|---|
| `MAILERLITE_API_KEY` | MailerLite → Integrations → Developer API |
| `MAILERLITE_GROUP_ID` | allgemeine Gruppe (Fallback) |
| `MAILERLITE_GROUP_SEO_CHECKLISTE` | Gruppe, die die SEO-Checkliste verschickt |
| `MAILERLITE_GROUP_KI_AGENTEN_CHECKLISTE` | Gruppe für die KI-Agenten-Checkliste |
| `MAILERLITE_GROUP_TAGESPLANER` | Gruppe für den Tagesplaner |
| `MAILERLITE_GROUP_KONTAKTANFRAGE` | Gruppe für Anfragen aus den Fragebögen |

Optional, damit Google-Sterne und Anzahl live aus dem Unternehmensprofil
kommen (sonst gilt der gepflegte Stand 5,0 · 27):

| Variable | Woher |
|---|---|
| `GOOGLE_PLACES_API_KEY` | Google Cloud Console, Places API (New) aktivieren, Schlüssel auf diese API beschränken |
| `GOOGLE_PLACE_ID` | https://developers.google.com/maps/documentation/places/web-service/place-id |

**Noch nicht setzen:** `NEXT_PUBLIC_INDEXABLE=true`. Erst nach dem
Domainumzug (Punkt 4), sonst indexiert Google die Netlify-Vorschau.

## 2. Nach dem Setzen testen

- ERLEDIGT 23.10.: Variablen gesetzt, Fragebogen Webdesign getestet, Mail
  angekommen. Noch zu prüfen: die Bestätigung an den Besucher (Betreff
  „Deine Anfrage bei Pixel56: …“ an die eingetragene Adresse).
- Kontaktseite `/kontakt#anfrage`: Betreff enthält das gewählte Thema.
- Freebie `/ressourcen/seo-checkliste` anfordern, Mail von MailerLite prüfen.
- Website-Check `/website-check` mit der echten Adresse `pixel56.de`.

## 3. Rechtstexte [Inhaber prüft, Sitzung setzt um]

**Entscheidung 23.10.:** Anwaltsprüfung erst im Nachgang, hält den Livegang
nicht auf. Reihenfolge: Resend-Schlüssel → Fragebogen-Test → Domainumzug.

- **Impressum** (`app/impressum/page.tsx`): Anschrift, USt-ID, Verantwortlicher.
  Inhaber liest gegen, bestätigt in einem Satz.
- **Datenschutz** (`app/datenschutz/page.tsx`): enthält Klick-Fragebogen +
  Resend, MailerLite, Calendly, WhatsApp, Website-Check, Sanity, Netlify.
  Fehlt noch: Google Places (nur serverseitig, ohne Nutzerdaten) sobald die
  Variablen gesetzt sind. Empfehlung: einmal von einem Anwalt oder einem
  Generator (z. B. eRecht24) gegenlesen lassen; die Seite nennt alle Dienste.
- **AGB** (`app/agb/page.tsx`): seit 23.10. vollständig (13 Abschnitte, nur
  für Unternehmer, 50 % Anzahlung, 14 Tage Zahlungsziel, laufende Leistungen
  4 Wochen zum Monatsende kündbar, pausierbar, Nutzungsrechte nach
  vollständiger Zahlung, Referenzrecht, Gerichtsstand Koblenz). Vor dem
  Livegang von einem Anwalt gegenlesen lassen.

## 4. Domainumzug pixel56.de: Webflow → Netlify [Inhaber]

**ERLEDIGT 23.10.** Schritte 1 bis 4 durch, Punkt 5 (Search Console) offen,
Punkt 6 ab 6.11. möglich.

Reihenfolge wichtig, sonst ist die Seite zwischendurch nicht erreichbar:

1. Netlify → Domain management → „Add a domain“ → `pixel56.de` und
   `www.pixel56.de`. Netlify zeigt die DNS-Werte an.
2. Beim Domain-Anbieter (wo pixel56.de registriert ist) die Einträge ändern:
   `A`-Eintrag für `pixel56.de` auf Netlifys Load-Balancer-IP, `CNAME` für
   `www` auf `pixel56-neue-seite.netlify.app`. Alte Webflow-Einträge
   (`proxy-ssl.webflow.com`, Webflow-IPs) entfernen.
3. Warten, bis Netlify „HTTPS: Zertifikat ausgestellt“ zeigt (meist unter
   einer Stunde, bis zu 24 h).
4. Dann in Netlify `NEXT_PUBLIC_INDEXABLE=true` setzen und neu deployen.
   Die Sitzung prüft danach `robots.txt` und `sitemap.xml` live.
5. Google Search Console: Property `pixel56.de` → Sitemap
   `https://pixel56.de/sitemap.xml` einreichen. Alte Webflow-URLs bleiben
   durch die Weiterleitungen im Code erreichbar (URL-Inventar liegt in
   `lib/standorte.ts` und `next.config`).
6. Webflow-Hosting erst kündigen, wenn die neue Seite zwei Wochen stabil
   läuft. Bis dahin bleibt der Webflow-Entwurf als Rückfalloption.

## 5. Nach dem Livegang (Sitzung)

- Search Console zwei Wochen beobachten: 404-Fehler, Abdeckung, Klicks
  der 13 Standortseiten.
- Google-Unternehmensprofil: Website-Link prüft sich von selbst, Fotos aus
  `public/bilder/` ggf. ergänzen.
- „Testphase“-Hinweise bei Adloc und Teykto entfernen, wenn die Produkte
  buchbar sind.
