#!/usr/bin/env node
// verify-logo-v2.mjs — THE FIXTURE for the hlt-logo-v2 swap (code-builder, bridge row 3406).
//
// It fails on the pre-change repo (Navbar imports the violet hlt-logo-system icon, no v2 set
// exists) and passes only when the real mark is derived, present and wired.
//
// Run from anywhere:  node C:\Projects\hlt\src\assets\brand\hlt-logo-v2\verify-logo-v2.mjs
// Exit 0 = pass. Exit 1 = at least one check failed, each named.

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, "..", "..", "..", "..");      // C:\Projects\hlt
const SRC = join(REPO, "src");

let pass = 0, fail = 0;
const ok = (name, detail = "") => { pass++; console.log(`  PASS  ${name}${detail ? "  — " + detail : ""}`); };
const no = (name, detail = "") => { fail++; console.log(`  FAIL  ${name}${detail ? "  — " + detail : ""}`); };
const check = (name, cond, detail = "") => (cond ? ok(name, detail) : no(name, detail));
// A missing file must read as a named FAIL, never a stack trace: a fixture that crashes
// tells you less than one that reports. Every read below goes through this.
const readOr = (p, fallback = "") => { try { return readFileSync(p, "utf8"); } catch { return fallback; } };

console.log(`verify-logo-v2  repo=${REPO}`);
console.log(`ran ${new Date().toISOString()}`);
console.log("");

// ---- 1. the derived set exists, every file the README promises
console.log("1. asset set present");
const EXPECTED = [
  "svg/hlt-lockup-colour.svg", "svg/hlt-lockup-white.svg", "svg/hlt-lockup-mono-black.svg",
  "svg/hlt-icon.svg", "svg/hlt-icon-white.svg",
  "png/hlt-lockup-colour@2x.png", "png/hlt-lockup-white@2x.png", "png/hlt-lockup-mono-black@2x.png",
  "png/hlt-icon@2x.png", "png/hlt-icon-white@2x.png",
  "favicon/favicon.svg", "favicon/favicon-16.png", "favicon/favicon-32.png",
  "favicon/favicon-48.png", "favicon/apple-touch-icon-180.png",
  "README.md", "build-logo-set.mjs", "rasterise-logo-set.mjs", "shoot-proof.mjs",
  "proof/header-desktop-light.png", "proof/header-desktop-dark.png",
  "proof/header-mobile-light.png", "proof/header-mobile-dark.png",
  "proof/hero-desktop-light.png", "proof/hero-mobile-light.png",
];
for (const f of EXPECTED) {
  const p = join(HERE, f);
  check(f, existsSync(p) && statSync(p).size > 0, existsSync(p) ? `${statSync(p).size} bytes` : "missing");
}

// ---- 2. the mark is DERIVED, not redrawn: every chevron path byte matches the source
console.log("\n2. derived from the source vector, not redrawn");
const sourceSvg = readOr(join(HERE, "..", "hlt-logo-source", "HLT Logo.svg"));
const markPath = (s) => {
  const m = s.match(/<g clip-path="url\(#f7c8e56ad6\)">\s*<path[^>]*d="([^"]+)"/);
  return m ? m[1].replace(/\s+/g, " ").trim() : null;
};
const srcMark = markPath(sourceSvg);
check("source chevron path readable", !!srcMark, srcMark ? `${srcMark.length} chars` : "not found");
for (const f of ["svg/hlt-lockup-colour.svg", "svg/hlt-lockup-white.svg", "svg/hlt-lockup-mono-black.svg", "svg/hlt-icon.svg", "svg/hlt-icon-white.svg"]) {
  const got = markPath(readOr(join(HERE, f)));
  check(`${f} chevron geometry identical to source`, got === srcMark);
}

// ---- 3. the colours are right per variant
console.log("\n3. palette");
// NB: clip-path ids like url(#f7c8e56ad6) look like hex colours to a naive regex and this
// check reported four colours in a two-colour file until the references were stripped first.
const colours = (s) => [...new Set(s.replace(/url\(#[^)]*\)/g, "").match(/#[0-9a-fA-F]{6}\b/g) || [])].map((c) => c.toLowerCase()).sort();
check("hlt-lockup-colour.svg is blue + ink only", JSON.stringify(colours(readOr(join(HERE, "svg/hlt-lockup-colour.svg")))) === JSON.stringify(["#007bff", "#191919"]), colours(readOr(join(HERE, "svg/hlt-lockup-colour.svg"))).join(" "));
check("hlt-lockup-white.svg is white only", JSON.stringify(colours(readOr(join(HERE, "svg/hlt-lockup-white.svg")))) === JSON.stringify(["#ffffff"]));
check("hlt-lockup-mono-black.svg is black only", JSON.stringify(colours(readOr(join(HERE, "svg/hlt-lockup-mono-black.svg")))) === JSON.stringify(["#000000"]));
check("hlt-icon.svg is blue only", JSON.stringify(colours(readOr(join(HERE, "svg/hlt-icon.svg")))) === JSON.stringify(["#007bff"]));

// ---- 4. THE THAI SUBLINE DEFECT IS FIXED
// In the Canva source the final glyph of ไทย is filled #ffffff and vanishes on white.
// The colour lockup must carry no white fill at all.
console.log("\n4. Thai subline defect (source ships the last glyph in white)");
const srcWhiteGroups = (sourceSvg.match(/<g fill="#ffffff" fill-opacity="1">/g) || []).length;
check("source still has the defect (this check documents it)", srcWhiteGroups === 1, `${srcWhiteGroups} white glyph group(s) in source`);
const outWhiteGroups = (readOr(join(HERE, "svg/hlt-lockup-colour.svg")).match(/<g fill="#ffffff" fill-opacity="1">/g) || []).length;
check("colour lockup has no invisible white glyph", outWhiteGroups === 0, `${outWhiteGroups} found`);
const blueGlyphs = (readOr(join(HERE, "svg/hlt-lockup-colour.svg")).match(/<g fill="#007bff" fill-opacity="1">/g) || []).length;
check("Thai subline has all 12 glyphs in brand blue", blueGlyphs === 12, `${blueGlyphs} blue glyph groups`);

// ---- 5. the icon is square, so favicons are not squashed
console.log("\n5. icon geometry");
const iconVbM = readOr(join(HERE, "svg/hlt-icon.svg")).match(/viewBox="([^"]+)"/);
const iconVb = iconVbM ? iconVbM[1].split(/\s+/).map(Number) : [0, 0, 0, 1];
check("icon viewBox is square", Math.abs(iconVb[2] - iconVb[3]) < 0.001, `viewBox=${iconVb.join(" ")}`);
check("icon drops the wordmark", !readOr(join(HERE, "svg/hlt-icon.svg")).includes("translate(107.842772"));

// ---- 6. NOTHING in src/ imports the archived violet set any more
console.log("\n6. the violet set is unimported");
const walk = (dir, out = []) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) { if (!p.includes("hlt-logo-system")) walk(p, out); }
    else if (/\.(jsx?|tsx?|css|html)$/.test(e.name)) out.push(p);
  }
  return out;
};
const offenders = walk(SRC).filter((p) => readOr(p).includes("hlt-logo-system"));
check("no source file imports hlt-logo-system", offenders.length === 0, offenders.map((p) => relative(REPO, p)).join(", ") || "none");
check("hlt-logo-system folder is still on disk (archived, not deleted)", existsSync(join(SRC, "assets/brand/hlt-logo-system/README.md")));
check("hlt-logo-system README is marked ARCHIVED", readOr(join(SRC, "assets/brand/hlt-logo-system/README.md")).includes("ARCHIVED"));

// ---- 7. the header actually uses the new lockup
console.log("\n7. header wiring");
const navbar = readOr(join(SRC, "components/Navbar.jsx"));
check("Navbar imports the v2 colour lockup", navbar.includes("hlt-logo-v2/svg/hlt-lockup-colour.svg"));
check("Navbar imports the v2 white lockup for dark mode", navbar.includes("hlt-logo-v2/svg/hlt-lockup-white.svg"));
check("Navbar renders the light lockup", /hltLockupColour[\s\S]{0,200}block dark:hidden/.test(navbar));
check("Navbar renders the dark lockup", /hltLockupWhite[\s\S]{0,200}hidden dark:block/.test(navbar));
check("Navbar logo has an accessible name", navbar.includes('alt="High Level Thai"'));

// ---- 8. favicons wired in index.html
console.log("\n8. favicon wiring");
const html = readOr(join(REPO, "index.html"));
for (const href of ["/brand/favicon.svg", "/brand/favicon-32.png", "/brand/favicon-16.png", "/brand/apple-touch-icon-180.png"]) {
  check(`index.html references ${href}`, html.includes(href));
  check(`public${href} exists`, existsSync(join(REPO, "public", href)));
}

console.log(`\n${fail === 0 ? "PASS" : "FAIL"}  ${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);
