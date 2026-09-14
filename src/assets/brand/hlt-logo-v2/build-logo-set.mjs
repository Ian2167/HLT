#!/usr/bin/env node
// build-logo-set.mjs — derives the hlt-logo-v2 SVG set from Ian's Canva source vector.
//
// WHY (code-builder, 14 September 2026, bridge row 3406):
//   The site was carrying a "refined" violet redraw that is not Ian's logo. The real mark
//   is the solid upward chevron dissolving into a pixel field, #007bff, with the wordmark
//   HIGH LEVEL THAI and the Thai subline ไฮ เลเวล ไทย.
//   This script DERIVES every variant from the source vector by fill substitution and
//   viewBox cropping ONLY. No path data is ever rewritten, so nothing here is a redraw.
//
// SOURCE OF TRUTH: ../hlt-logo-source/HLT Logo.svg  (350x90 Canva export, viewBox 0 0 262.5 67.5)
//
// ONE CORRECTION IS APPLIED, AND IT IS NOT COSMETIC:
//   In the source, the final glyph of the Thai subline (ย of ไทย) is filled #ffffff, so on a
//   white background the word reads "ไท" with the last letter invisible. Verified 14 Sept 2026
//   by cropping "HLT HQ Logo Design (350 x 90 px).png" — the glyph is there and it is white.
//   That is a Canva export defect, not a design choice. This script recolours that ONE fill
//   attribute to match its eleven siblings. Geometry is untouched.
//
// Run:  node build-logo-set.mjs        (writes svg/ only; PNGs come from rasterise-logo-set.mjs)

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SRC = join(HERE, "..", "hlt-logo-source", "HLT Logo.svg");
const OUT = join(HERE, "svg");

const BLUE = "#007bff";
const INK = "#191919";
const WHITE = "#ffffff";

// The source's own clip bounds for the chevron mark, read from clipPath #f7c8e56ad6.
const MARK = { x: 8.238281, y: 4.730469, x2: 89.386719, y2: 61.308594 };

const raw = readFileSync(SRC, "utf8");

// ---- guard: refuse to run against a source that is not the one this script was written for
function assertSource(s) {
  const must = [
    ['viewBox="0 0 262.5 67.499998"', "source viewBox"],
    ['clipPath id="f7c8e56ad6"', "mark clip path"],
    ['fill="#007bff"', "brand blue fill"],
    ['<g fill="#191919" fill-opacity="1">', "wordmark ink fill"],
    ['<g transform="matrix(1, 0, 0, 1, 135, 36)">', "Thai subline group"],
  ];
  for (const [needle, what] of must) {
    if (!s.includes(needle)) throw new Error(`SOURCE MISMATCH: ${what} not found (${needle}). Refusing to derive.`);
  }
  if (s.includes("<text")) throw new Error("SOURCE MISMATCH: source contains live <text>; this script only handles outlined paths.");
}
assertSource(raw);

// ---- correction: the white final Thai glyph -> brand blue (see header note)
const corrected = raw.replace(`<g fill="${WHITE}" fill-opacity="1">`, `<g fill="${BLUE}" fill-opacity="1">`);
if (corrected === raw) throw new Error("EXPECTED the one #ffffff glyph group in the source; it was not there.");
if (corrected.includes(`<g fill="${WHITE}" fill-opacity="1">`)) throw new Error("More than one #ffffff glyph group; refusing to guess.");

// ---- recolour by whole-token substitution, applied once, never cascading
function recolour(svg, map) {
  return svg.replace(/#(?:007bff|191919|ffffff)/g, (m) => map[m.toLowerCase()] ?? m);
}

// ---- crop to the chevron mark, padded to a square, wordmark and subline dropped
function iconOnly(svg, colour) {
  const defs = svg.match(/<defs>[\s\S]*?<\/defs>/)[0];
  const markGroup = svg.match(/<g clip-path="url\(#f7c8e56ad6\)">[\s\S]*?<\/g>/)[0];
  const w = MARK.x2 - MARK.x;
  const h = MARK.y2 - MARK.y;
  const side = Math.max(w, h);
  const vx = MARK.x - (side - w) / 2;
  const vy = MARK.y - (side - h) / 2;
  const body = recolour(defs + markGroup, { "#007bff": colour, "#191919": colour, "#ffffff": colour });
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" viewBox="${round(vx)} ${round(vy)} ${round(side)} ${round(side)}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="High Level Thai">${body}</svg>`;
}

const round = (n) => Number(n.toFixed(6));

function label(svg) {
  return svg.replace("<svg ", '<svg role="img" aria-label="High Level Thai" ');
}

mkdirSync(OUT, { recursive: true });

const files = {
  // full lockup, brand blue chevron + ink wordmark + blue Thai subline; use on white/pale
  "hlt-lockup-colour.svg": label(corrected),
  // full lockup, all white; use on navy, slate-900 and any dark header
  "hlt-lockup-white.svg": label(recolour(corrected, { "#007bff": WHITE, "#191919": WHITE, "#ffffff": WHITE })),
  // full lockup, single-colour black; print, fax, stamps, one-colour reproduction
  "hlt-lockup-mono-black.svg": label(recolour(corrected, { "#007bff": "#000000", "#191919": "#000000", "#ffffff": "#000000" })),
  // chevron only, square, brand blue; favicon, app icon, avatar
  "hlt-icon.svg": iconOnly(corrected, BLUE),
  // chevron only, square, white; dark headers and dark app tiles
  "hlt-icon-white.svg": iconOnly(corrected, WHITE),
};

for (const [name, body] of Object.entries(files)) {
  writeFileSync(join(OUT, name), body, "utf8");
  console.log(`wrote svg/${name}  ${body.length} bytes`);
}
console.log("derived from:", SRC);
