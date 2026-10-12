# Pixel56 Sanity Studio

Das öffentliche Next.js-Frontend nutzt nur `@sanity/client`, um veröffentlichte
Inhalte zu lesen. Das Sanity Studio wird aus Sicherheits- und Performancegründen
separat deployt und nicht in die Kundenwebsite gebündelt.

Die vorhandenen Schemas unter `schemaTypes/` und `sanity.config.ts` bleiben als
Ausgangsbasis erhalten. Nach dem separaten Studio-Deployment wird dessen URL als
`NEXT_PUBLIC_SANITY_STUDIO_URL` gesetzt; `/studio` leitet dann dorthin weiter.
