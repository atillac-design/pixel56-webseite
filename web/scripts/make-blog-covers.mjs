// Erzeugt die Themen-Grafiken für die Blog-Cover (public/bilder/blog/cover-<kategorie>.svg).
// Transparente Linienzeichnungen in Weiß mit rotem Akzent; der Farbverlauf kommt aus dem CSS
// (.blog-cover.c1 … c6), damit die Cover je Artikel weiterhin farblich variieren.
// Aufruf: node scripts/make-blog-covers.mjs
import { writeFileSync, mkdirSync } from "node:fs";

const W = 1600, H = 1000, CX = 800, CY = 500;
const ROT = "#ff3951";
const S = (w = 4, c = "#fff") => `stroke="${c}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"`;
const SOFT = 'fill="#fff" fill-opacity="0.09"';
const SOFT2 = 'fill="#fff" fill-opacity="0.16"';

const rings = `<g stroke="#fff" fill="none" stroke-width="2" opacity="0.08">
  <circle cx="${CX}" cy="${CY}" r="300"/><circle cx="${CX}" cy="${CY}" r="420"/><circle cx="${CX}" cy="${CY}" r="560"/>
</g>`;
const glow = `<defs><radialGradient id="g" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff" stop-opacity="0.14"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>
<ellipse cx="${CX}" cy="${CY}" rx="560" ry="330" fill="url(#g)"/>`;

function wrap(body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" preserveAspectRatio="xMidYMid slice">\n${glow}\n${rings}\n${body}\n</svg>\n`;
}
const browser = (x, y, w, h) => `
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22" ${SOFT}/>
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22" ${S()}/>
  <line x1="${x}" y1="${y + 56}" x2="${x + w}" y2="${y + 56}" ${S()}/>
  <circle cx="${x + 30}" cy="${y + 28}" r="7" fill="${ROT}"/><circle cx="${x + 56}" cy="${y + 28}" r="7" fill="#fff" fill-opacity="0.7"/><circle cx="${x + 82}" cy="${y + 28}" r="7" fill="#fff" fill-opacity="0.7"/>`;
const lines = (x, y, widths, gap = 26) => widths.map((w, i) => `<line x1="${x}" y1="${y + i * gap}" x2="${x + w}" y2="${y + i * gap}" ${S()} stroke-opacity="0.7"/>`).join("\n");

const covers = {
  webdesign: () => `
  ${browser(470, 280, 660, 440)}
  ${lines(520, 390, [260, 200])}
  <rect x="520" y="440" width="150" height="46" rx="12" fill="${ROT}"/>
  <rect x="520" y="520" width="270" height="150" rx="14" ${SOFT2}/>
  <rect x="820" y="370" width="260" height="300" rx="14" ${SOFT2}/>
  <rect x="820" y="370" width="260" height="300" rx="14" ${S()} stroke-opacity="0.5"/>
  <path d="M700 470 l0 70 l18 -16 l14 34 l16 -7 l-14 -33 l24 -1 z" fill="#fff" stroke="#151319" stroke-width="3" stroke-linejoin="round"/>`,

  seo: () => `
  <rect x="470" y="300" width="660" height="92" rx="46" ${SOFT2}/>
  <rect x="470" y="300" width="660" height="92" rx="46" ${S()}/>
  <circle cx="530" cy="346" r="18" ${S()}/><line x1="544" y1="360" x2="562" y2="378" ${S()}/>
  ${lines(590, 346, [300])}
  <rect x="1040" y="318" width="64" height="56" rx="14" fill="${ROT}"/>
  <g>
    <rect x="560" y="640" width="110" height="80" rx="14" ${SOFT2}/>
    <rect x="720" y="580" width="110" height="140" rx="14" ${SOFT2}/>
    <rect x="880" y="500" width="110" height="220" rx="14" ${SOFT2}/>
    <rect x="880" y="500" width="110" height="220" rx="14" ${S()}/>
    <rect x="720" y="580" width="110" height="140" rx="14" ${S()} stroke-opacity="0.6"/>
    <rect x="560" y="640" width="110" height="80" rx="14" ${S()} stroke-opacity="0.6"/>
    <path d="M520 560 L615 610 L775 540 L935 452" ${S(6, ROT)}/>
    <circle cx="935" cy="452" r="12" fill="${ROT}"/>
  </g>
  <path d="M1110 560 c0 -40 -30 -66 -60 -66 s-60 26 -60 66 c0 44 60 110 60 110 s60 -66 60 -110 z" ${SOFT2}/>
  <path d="M1110 560 c0 -40 -30 -66 -60 -66 s-60 26 -60 66 c0 44 60 110 60 110 s60 -66 60 -110 z" ${S()}/>
  <circle cx="1050" cy="560" r="18" ${S()}/>`,

  "meta-ads": () => `
  <rect x="520" y="330" width="330" height="420" rx="24" ${SOFT}/>
  <rect x="560" y="300" width="330" height="420" rx="24" ${SOFT}/>
  <rect x="600" y="270" width="330" height="420" rx="24" fill="#151319" fill-opacity="0.35"/>
  <rect x="600" y="270" width="330" height="420" rx="24" ${S()}/>
  <circle cx="640" cy="312" r="16" ${S()}/>${lines(672, 306, [120, 80], 16)}
  <rect x="620" y="356" width="290" height="200" rx="14" ${SOFT2}/>
  <path d="M700 480 l60 -60 l50 50 l40 -40 l60 60" ${S()} stroke-opacity="0.8"/>
  <circle cx="860" cy="400" r="14" fill="${ROT}"/>
  <path d="M654 612 c-12 -14 -2 -34 16 -30 c8 2 12 8 14 12 c2 -4 6 -10 14 -12 c18 -4 28 16 16 30 l-30 30 z" fill="${ROT}"/>
  <path d="M740 592 h60 v34 h-34 l-14 14 v-14 h-12 z" ${S()}/>
  <rect x="800" y="640" width="110" height="36" rx="18" ${S()}/>
  <g transform="translate(1090 480)">
    <circle r="120" ${S()} stroke-opacity="0.5"/><circle r="80" ${S()} stroke-opacity="0.7"/><circle r="40" ${S()}/><circle r="12" fill="${ROT}"/>
    <line x1="-150" y1="0" x2="-130" y2="0" ${S()}/><line x1="130" y1="0" x2="150" y2="0" ${S()}/><line x1="0" y1="-150" x2="0" y2="-130" ${S()}/><line x1="0" y1="130" x2="0" y2="150" ${S()}/>
  </g>`,

  "soziale-medien": () => `
  <rect x="650" y="230" width="300" height="540" rx="40" fill="#151319" fill-opacity="0.35"/>
  <rect x="650" y="230" width="300" height="540" rx="40" ${S()}/>
  <rect x="750" y="252" width="100" height="14" rx="7" fill="#fff" fill-opacity="0.6"/>
  <rect x="674" y="290" width="252" height="420" rx="22" ${SOFT2}/>
  <circle cx="800" cy="500" r="58" ${S()}/><path d="M786 474 l44 26 l-44 26 z" fill="#fff"/>
  <rect x="690" y="686" width="220" height="8" rx="4" fill="#fff" fill-opacity="0.35"/><rect x="690" y="686" width="130" height="8" rx="4" fill="${ROT}"/>
  <g transform="translate(560 420)">
    <circle r="46" ${SOFT2}/><circle r="46" ${S()}/>
    <path d="M-16 -4 c-10 -12 2 -30 16 -22 c14 -8 26 10 16 22 l-16 16 z" fill="${ROT}"/>
  </g>
  <g transform="translate(1050 350)">
    <circle r="46" ${SOFT2}/><circle r="46" ${S()}/>
    <path d="M-20 -10 h40 v24 h-22 l-10 10 v-10 h-8 z" ${S()}/>
  </g>
  <g transform="translate(1040 590)">
    <circle r="46" ${SOFT2}/><circle r="46" ${S()}/>
    <path d="M-18 8 l16 -24 l16 24 z M-14 14 h28 M-8 20 h16" ${S()}/>
  </g>
  <path d="M606 420 c40 -60 80 -140 160 -150 M996 350 c-30 -40 -80 -80 -140 -90 M994 590 c-30 30 -70 60 -130 70" ${S()} stroke-opacity="0.35" stroke-dasharray="6 12"/>`,

  "kunstliche-intelligenz": () => {
    const nodes = [[520, 330], [1080, 320], [470, 620], [1120, 640], [800, 220], [800, 790], [560, 470], [1050, 480]];
    const links = nodes.map(([x, y]) => `<line x1="${CX}" y1="${CY}" x2="${x}" y2="${y}" ${S()} stroke-opacity="0.35"/>`).join("\n");
    const dots = nodes.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i < 4 ? 22 : 14}" ${i === 1 ? `fill="${ROT}"` : SOFT2}/><circle cx="${x}" cy="${y}" r="${i < 4 ? 22 : 14}" ${S()}/>`).join("\n");
    const pins = [];
    for (let i = -2; i <= 2; i++) {
      const o = i * 36;
      pins.push(`<line x1="${CX + o}" y1="${CY - 110}" x2="${CX + o}" y2="${CY - 140}" ${S()}/><line x1="${CX + o}" y1="${CY + 110}" x2="${CX + o}" y2="${CY + 140}" ${S()}/><line x1="${CX - 110}" y1="${CY + o}" x2="${CX - 140}" y2="${CY + o}" ${S()}/><line x1="${CX + 110}" y1="${CY + o}" x2="${CX + 140}" y2="${CY + o}" ${S()}/>`);
    }
    return `${links}
  <rect x="${CX - 110}" y="${CY - 110}" width="220" height="220" rx="28" fill="#151319" fill-opacity="0.4"/>
  <rect x="${CX - 110}" y="${CY - 110}" width="220" height="220" rx="28" ${S()}/>
  <rect x="${CX - 60}" y="${CY - 60}" width="120" height="120" rx="18" ${S()} stroke-opacity="0.6"/>
  <circle cx="${CX}" cy="${CY}" r="16" fill="${ROT}"/>
  ${pins.join("\n")}
  ${dots}`;
  },

  wachstum: () => `
  <line x1="420" y1="740" x2="1180" y2="740" ${S()} stroke-opacity="0.6"/>
  <line x1="420" y1="740" x2="420" y2="260" ${S()} stroke-opacity="0.6"/>
  <g stroke="#fff" stroke-width="2" stroke-dasharray="8 14" opacity="0.3"><line x1="420" y1="620" x2="1180" y2="620"/><line x1="420" y1="500" x2="1180" y2="500"/><line x1="420" y1="380" x2="1180" y2="380"/></g>
  <path d="M470 690 L620 640 L770 600 L920 470 L1070 400 L1130 330 L1130 740 L470 740 z" fill="#fff" fill-opacity="0.08"/>
  <path d="M470 690 L620 640 L770 600 L920 470 L1070 400 L1130 330" ${S(7)}/>
  <circle cx="470" cy="690" r="12" ${SOFT2}/><circle cx="470" cy="690" r="12" ${S()}/>
  <circle cx="620" cy="640" r="12" ${SOFT2}/><circle cx="620" cy="640" r="12" ${S()}/>
  <circle cx="770" cy="600" r="12" ${SOFT2}/><circle cx="770" cy="600" r="12" ${S()}/>
  <circle cx="920" cy="470" r="12" ${SOFT2}/><circle cx="920" cy="470" r="12" ${S()}/>
  <circle cx="1070" cy="400" r="12" ${SOFT2}/><circle cx="1070" cy="400" r="12" ${S()}/>
  <circle cx="1130" cy="330" r="40" ${S()} stroke-opacity="0.5"/>
  <circle cx="1130" cy="330" r="22" fill="${ROT}"/>
  <rect x="820" y="250" width="200" height="64" rx="16" ${SOFT2}/>
  <rect x="820" y="250" width="200" height="64" rx="16" ${S()} stroke-opacity="0.6"/>
  ${lines(846, 274, [100, 140], 18)}`,

  "marketing-tools": () => {
    const tiles = [[560, 300], [740, 300], [920, 300], [560, 520], [740, 520], [920, 520]];
    const glyphs = [
      `<circle cx="0" cy="0" r="30" ${S()}/><circle cx="0" cy="0" r="12" ${S()}/>` + [0, 45, 90, 135, 180, 225, 270, 315].map((a) => `<line x1="0" y1="-32" x2="0" y2="-44" ${S()} transform="rotate(${a})"/>`).join(""),
      `<rect x="-36" y="-24" width="72" height="48" rx="8" ${S()}/><path d="M-36 -20 l36 28 l36 -28" ${S()}/>`,
      `<rect x="-34" y="-30" width="68" height="62" rx="10" ${S()}/><line x1="-34" y1="-10" x2="34" y2="-10" ${S()}/><line x1="-14" y1="-42" x2="-14" y2="-24" ${S()}/><line x1="14" y1="-42" x2="14" y2="-24" ${S()}/><rect x="-6" y="2" width="14" height="14" rx="3" fill="${ROT}"/>`,
      `<rect x="-36" y="4" width="18" height="28" rx="4" ${S()}/><rect x="-9" y="-14" width="18" height="46" rx="4" ${S()}/><rect x="18" y="-32" width="18" height="64" rx="4" fill="${ROT}"/>`,
      `<path d="M-36 -26 h72 v44 h-40 l-18 16 v-16 h-14 z" ${S()}/><line x1="-18" y1="-8" x2="18" y2="-8" ${S()}/><line x1="-18" y1="6" x2="6" y2="6" ${S()}/>`,
      `<circle cx="0" cy="0" r="34" ${S()}/><path d="M-10 -18 l30 18 l-30 18 z" fill="#fff"/>`,
    ];
    return tiles.map(([x, y], i) => `
  <rect x="${x}" y="${y}" width="150" height="150" rx="26" ${i === 3 ? `fill="${ROT}" fill-opacity="0.85"` : SOFT2}/>
  <rect x="${x}" y="${y}" width="150" height="150" rx="26" ${S()} stroke-opacity="${i === 3 ? 0 : 0.8}"/>
  <g transform="translate(${x + 75} ${y + 75})">${glyphs[i]}</g>`).join("\n");
  },

  webseite: () => `
  ${browser(470, 280, 660, 440)}
  <rect x="520" y="380" width="250" height="300" rx="14" ${SOFT2}/>
  ${lines(545, 420, [180, 140, 160, 110])}
  <rect x="545" y="560" width="130" height="44" rx="12" fill="${ROT}"/>
  <g transform="translate(950 560)">
    <path d="M-130 0 a130 130 0 0 1 260 0" ${S(14)} stroke-opacity="0.3"/>
    <path d="M-130 0 a130 130 0 0 1 184 -92" ${S(14, ROT)}/>
    <line x1="0" y1="0" x2="60" y2="-96" stroke="#fff" stroke-width="8" stroke-linecap="round"/>
    <circle r="16" fill="#fff"/>
  </g>
  <circle cx="1190" cy="330" r="40" ${SOFT2}/><circle cx="1190" cy="330" r="40" ${S()}/>
  <path d="M1170 330 l14 14 l28 -30" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
};

mkdirSync("public/bilder/blog", { recursive: true });
for (const [name, fn] of Object.entries(covers)) {
  const svg = wrap(fn());
  writeFileSync(`public/bilder/blog/cover-${name}.svg`, svg);
  console.log(`cover-${name}.svg ${svg.length} bytes`);
}
