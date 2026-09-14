#!/usr/bin/env node
// verify-business-read-copy.mjs — proves /business-read renders the verified copy deck
// VERBATIM, and renders nothing else. (code-builder, 14 September 2026.)
//
// WHY THIS EXISTS. The page's whole contract is that no string on it is the builder's own
// wording. A build passing and a page looking right prove neither. This reads the deck off
// disk, reads the BUILT page out of a real browser, and diffs the two in both directions:
//
//   FORWARD  every copy line in the deck's fenced blocks (and every cell of its comparison
//            table) appears on the rendered page, character for character after whitespace
//            collapsing. A dropped or reworded line fails here.
//   REVERSE  every leaf string rendered inside <main> is a substring of some deck line. An
//            invented button label, tagline or helper sentence fails here.
//
// Whitespace collapsing is the ONLY normalisation applied. Nothing else is forgiven.
//
// It also checks, separately from the body text:
//   - document.title equals the deck's title tag block
//   - meta[name=description] equals the deck's meta description block
//   - every <a href> inside <main> decodes to the deck's CTA target, exactly, nothing appended
//   - all of the above under BOTH language settings, en and th, because the th keys carry the
//     English values on purpose until a native Thai deck exists
//
// Run `npm run build` in C:\Projects\hlt first, then:  node verify-business-read-copy.mjs
// Borrowed Playwright: see the dependency note in rasterise-logo-set.mjs. Port 4179, chosen
// because 5173 is held by the Desk's preview server and 4178 by shoot-proof.mjs.

import { createServer } from "node:http";
import { readFileSync, existsSync, statSync } from "node:fs";
import { dirname, join, extname, normalize } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const HERE = dirname(fileURLToPath(import.meta.url));
const DIST = join(HERE, "..", "..", "..", "..", "dist");
const DECK =
    "C:\\Projects\\IWT\\02-builds\\executive-assistant\\work\\drafts\\2026-09-14-HLT-BUSINESS-READ-PAGE-COPY.md";
const PORT = 4179;
const ROUTE = "/business-read";

if (!existsSync(join(DIST, "index.html"))) {
    console.error(`No build at ${DIST}. Run "npm run build" in C:\\Projects\\hlt first.`);
    process.exit(2);
}
if (!existsSync(DECK)) {
    console.error(`No copy deck at ${DECK}.`);
    process.exit(2);
}

const norm = (s) => s.replace(/\s+/g, " ").trim();

// ---------------------------------------------------------------------------------------
// 1. Read the deck. Fenced blocks only; text outside them is instruction, not copy.
// ---------------------------------------------------------------------------------------
const deckLines = readFileSync(DECK, "utf8").split(/\r?\n/);

const blocks = [];
let fence = null;
for (const line of deckLines) {
    if (line.trim() === "```") {
        if (fence) { blocks.push(fence); fence = null; } else { fence = []; }
        continue;
    }
    if (fence) fence.push(line);
}
if (fence) { console.error("Unclosed fence in the deck."); process.exit(2); }

const blockLines = (b) => b.filter((l) => l.trim().length > 0).map(norm);

// Block 0 is the title tag, block 1 the meta description (deck sections 1 and 2). Assert the
// shape rather than trusting it, so a re-ordered deck fails loudly instead of quietly.
const expectedTitle = blockLines(blocks[0])[0];
const expectedMeta = blockLines(blocks[1])[0];
if (!expectedTitle.includes("High Level Thai")) {
    console.error("Deck block 0 is not the title tag. Deck structure changed; fix this script.");
    process.exit(2);
}
if (!expectedMeta.startsWith("One hour with our lead consultant")) {
    console.error("Deck block 1 is not the meta description. Deck structure changed; fix this script.");
    process.exit(2);
}

const ctaTargets = new Set();
const expectedVisible = new Set();
blocks.forEach((b, i) => {
    for (const line of blockLines(b)) {
        if (line.startsWith("https://")) { ctaTargets.add(line); continue; }
        if (i === 0 || i === 1) continue; // title and meta are checked in <head>, not in <main>
        expectedVisible.add(line);
    }
});
if (ctaTargets.size !== 1) {
    console.error(`Expected exactly one CTA target in the deck, found ${ctaTargets.size}.`);
    process.exit(2);
}
const expectedHref = [...ctaTargets][0];

// The comparison table is a markdown table, not a fenced block. Pull its labels and cells.
const tableStart = deckLines.findIndex((l) => l.startsWith("### Comparison table"));
if (tableStart < 0) { console.error("Comparison table heading not found in the deck."); process.exit(2); }
let tableRows = 0;
for (let i = tableStart; i < deckLines.length; i++) {
    const l = deckLines[i].trim();
    if (l.startsWith("Price row,")) break;
    if (!l.startsWith("|")) continue;
    const cells = l.split("|").slice(1, -1).map((c) => norm(c.replace(/\*\*/g, "")));
    if (cells.every((c) => /^-*$/.test(c))) continue; // separator row
    for (const c of cells) if (c) expectedVisible.add(c);
    tableRows++;
}
if (tableRows !== 9) { // 1 header row + 8 inclusion rows
    console.error(`Expected 9 comparison-table rows in the deck (header + 8), found ${tableRows}.`);
    process.exit(2);
}

// ---------------------------------------------------------------------------------------
// 2. Serve the build and read the page out of a real browser.
// ---------------------------------------------------------------------------------------
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".json": "application/json", ".ico": "image/x-icon" };
const server = createServer((req, res) => {
    const url = decodeURIComponent(req.url.split("?")[0]);
    let file = normalize(join(DIST, url));
    if (!file.startsWith(normalize(DIST))) { res.writeHead(403).end(); return; }
    if (!existsSync(file) || statSync(file).isDirectory()) file = join(DIST, "index.html");
    res.writeHead(200, { "content-type": TYPES[extname(file)] || "application/octet-stream" });
    res.end(readFileSync(file));
});
await new Promise((r) => server.listen(PORT, r));

const PW_ROOT = "C:\\Projects\\video-studio-teleprompter\\node_modules";
const require = createRequire(pathToFileURL(join(PW_ROOT, "_.js")));
const { chromium } = require("playwright");
const browser = await chromium.launch();

let failures = 0;
const fail = (msg) => { failures++; console.log(`FAIL  ${msg}`); };

for (const lang of ["en", "th"]) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.addInitScript((l) => {
        try { localStorage.setItem("language", l); } catch { /* ignore */ }
    }, lang);
    await page.goto(`http://localhost:${PORT}${ROUTE}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(800);

    const shot = await page.evaluate(() => {
        const all = new Set();
        const leaves = new Set();
        const walk = (el) => {
            const parts = [];
            let hasElementChild = false;
            for (const node of el.childNodes) {
                if (node.nodeType === 3) {
                    const tx = node.textContent.replace(/\s+/g, " ").trim();
                    if (tx) parts.push(tx);
                } else if (node.nodeType === 1) {
                    hasElementChild = true;
                    const t = walk(node);
                    if (t) parts.push(t);
                }
            }
            const joined = parts.join(" ").replace(/\s+/g, " ").trim();
            if (joined) {
                all.add(joined);
                if (!hasElementChild) leaves.add(joined);
            }
            return joined;
        };
        walk(document.querySelector("main"));
        const metas = [...document.querySelectorAll('meta[name="description"]')];
        return {
            all: [...all],
            leaves: [...leaves],
            title: document.title,
            metaCount: metas.length,
            meta: metas.length ? metas[0].getAttribute("content") : null,
            hrefs: [...document.querySelectorAll("main a[href]")].map((a) => a.getAttribute("href")),
        };
    });

    const allSet = new Set(shot.all.map(norm));
    console.log(`\n=== language=${lang} · ${shot.all.length} rendered strings under <main> ===`);

    if (norm(shot.title) !== expectedTitle) fail(`title: got ${JSON.stringify(shot.title)}`);
    else console.log(`ok    title  ${shot.title}`);

    // One description tag, and it is the deck's. Two would leave a crawler reading the
    // site-wide one; the first in document order is the one that counts.
    if (shot.metaCount !== 1) fail(`meta description: expected exactly 1 tag, found ${shot.metaCount}`);
    else if (shot.meta === null || norm(shot.meta) !== expectedMeta) fail(`meta description: got ${JSON.stringify(shot.meta)}`);
    else console.log(`ok    meta   ${shot.meta}`);

    if (shot.hrefs.length === 0) fail("no links inside <main>");
    for (const h of shot.hrefs) {
        if (decodeURIComponent(h) !== expectedHref) fail(`href: got ${JSON.stringify(h)}, deck says ${expectedHref}`);
    }
    if (shot.hrefs.every((h) => decodeURIComponent(h) === expectedHref)) {
        console.log(`ok    hrefs  ${shot.hrefs.length} link(s), all ${expectedHref}`);
    }

    let missing = 0;
    for (const want of expectedVisible) {
        if (!allSet.has(want)) { fail(`deck line not rendered: ${JSON.stringify(want)}`); missing++; }
    }
    console.log(`${missing === 0 ? "ok" : "FAIL"}    forward  ${expectedVisible.size} deck copy lines, ${missing} missing`);

    let invented = 0;
    for (const got of shot.leaves.map(norm)) {
        let covered = false;
        for (const want of expectedVisible) { if (want.includes(got)) { covered = true; break; } }
        if (!covered) { fail(`rendered string is not in the deck: ${JSON.stringify(got)}`); invented++; }
    }
    console.log(`${invented === 0 ? "ok" : "FAIL"}    reverse  ${shot.leaves.length} rendered leaf strings, ${invented} not found in the deck`);

    await page.close();
}

await browser.close();
server.close();

console.log(`\n${failures === 0 ? "PASS" : "FAIL"}  ${failures} failure(s)`);
process.exit(failures === 0 ? 0 : 1);
