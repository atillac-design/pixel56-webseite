# Schriften für die Vorschaubilder (Open Graph)

`inter-400.ttf`, `inter-600.ttf`, `inter-800.ttf`: Inter (SIL Open Font License 1.1,
© The Inter Project Authors, https://github.com/rsms/inter), als Latin-Subset über die
Google-Fonts-API bezogen. Nur für die serverseitige Bilderzeugung in `lib/og-bild.tsx`,
nicht für die Website selbst.

`figtree-latin.woff2`: Figtree (SIL Open Font License 1.1, © Erik Kennedy,
https://github.com/erikdkennedy/figtree), Variable Font 400–900, Latin-Subset über die
Google-Fonts-API bezogen. Webfont der Website. Seit 26.10.2026 als Base64 in `app/schrift.css` eingebettet
(CSS-Variable `--font-figtree`), damit sie beim ersten Zeichnen ohne Nachladen da ist.
Bei einem Schriftwechsel die Datei hier tauschen und `app/schrift.css` neu erzeugen:
`base64 -w0 assets/fonts/figtree-latin.woff2`.
