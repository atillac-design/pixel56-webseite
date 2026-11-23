# Pixel56 Instagram-Baukasten

Vorlage für die Instagram-Karussells von Pixel56 (1080x1350).

## Start
```
cd instagram
npm install            # Schriften (Bricolage Grotesque, DM Sans)
node render.js so      # rendert den Beispiel-Post nach out/
```
Gebraucht werden Node, Playwright (Chromium) und ffmpeg.

## Dateien
- `vorlage.html`: alle Bausteine (Cover, Bild-Slide, Karten, Listen, Projekt-Slide, CTA mit Foto). Die Inhalte der Posts stehen im Objekt `P`, ein Eintrag pro Post. Thema `sand` oder `dark`.
- `render.js`: Cover und letzte Slide als MP4 (doppelt gerendert, auf 1080x1350 verkleinert), übrige Slides als PNG. In `NAMES` steht pro Post-Kürzel der Ordnername.
- `img/`: Projektbilder, Kundenfotos, Atillas Foto.

## Neuer Post
1. In `vorlage.html` im Objekt `P` einen Eintrag anlegen.
2. In `render.js` das Kürzel in `NAMES` eintragen.
3. `node render.js <kürzel> preview` für eine schnelle Vorschau (nur PNG), ohne `preview` für die fertigen Dateien.
