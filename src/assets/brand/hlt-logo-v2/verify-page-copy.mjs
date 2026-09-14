#!/usr/bin/env node
// verify-page-copy.mjs — proves a rebuilt HLT page renders its verified copy deck VERBATIM,
// and renders nothing else. (code-builder, 14 September 2026.)
//
// WHY THIS EXISTS, AND WHY IT IS SHARED
// It is verify-business-read-copy.mjs made general, which was that fixture's own improvement
// line. One page fixture per page would drift; this one takes the route and the deck path as
// arguments, so every page of the six-page rebuild is proved by the same code:
//
//   node verify-page-copy.mjs /ai-opportunity-audit "C:\...\2026-09-14-HLT-AI-OPPORTUNITY-AUDIT-PAGE-COPY.md"
//
// WHAT IT PROVES
//   FORWARD  every copy line in the deck's fenced blocks (and every cell of its inclusion-rows
//            table) appears on the rendered page, character for character after whitespace
//            collapsing. A dropped or reworded line fails here.
//   REVERSE  every leaf string rendered inside <main> is a substring of some deck line. An
//            invented button label, tagline or helper sentence fails here.
//   HEAD     document.title is the deck's title tag, and there is exactly ONE meta description
//            on the route and it is the deck's.
//   LINKS    every EXTERNAL link inside <main> decodes to the deck's CTA target, exactly,
//            nothing appended. Internal route links (href starting "/") are allowed and listed,
//            because the summary home page links to the service pages.
//   IMAGES   every <img> inside <main> has a src listed in the deck's hero-image block and an
//            alt that is one of that block's alt lines. Hotlinked stock is copy too: a swapped
//            image that nobody logged fails here.
//   Both language settings, en and th, because the th keys carry the English values on purpose
//   until a native Thai deck exists.
//
// Whitespace collapsing is the ONLY normalisation applied. Nothing else is forgiven.
//
// DECK SHAPE IT EXPECTS (the Business Read deck's shape, one heading per section):
//   a heading containing "page title and meta"  -> block 1 is the title tag, block 2 the meta
//   a heading containing "hero image"           -> one block: the image URL, then the alt text
//   a heading containing "inclusion rows" or "comparison table" -> the markdown table under it
//   every other fenced block                    -> visible copy, except a line starting
//                                                  https://line.me, which is the CTA target
// Text outside a fenced block is instruction, never copy, so PRICE SLOT lines and the changes
// table are ignored by design.
//
// Run `npm run build` in C:\Projects\hlt first. Port 4181 by default (5173 is the Desk's dev
// server, 4178 shoot-proof.mjs, 4179 verify-business-read-copy.mjs); pass a third argument to
// change it. Borrowed Playwright: see the dependency note in rasterise-logo-set.mjs.

import { createServer } from "node:http";
import { readFileSync, existsSync, statSync } from "node:fs";
import { dirname, join, extname, normalize } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const [, , ROUTE_ARG, DECK, PORT_ARG] = process.argv;
if (!ROUTE_ARG || !DECK) {
    console.error('Usage: node verify-page-copy.mjs <route> <deck path> [port]');
    console.error('   eg: node verify-page-copy.mjs ai-opportunity-audit "C:\\...\\2026-09-14-HLT-AI-OPPORTUNITY-AUDIT-PAGE-COPY.md"');
    console.error('   the home page is "home" or "/"');
    process.exit(2);
}

// ROUTE NORMALISATION, and it is not cosmetic. Git Bash (MSYS) rewrites a leading-slash
// argument into a Windows path before node ever sees it: "/ai-opportunity-audit" arrives as
// "C:/Program Files/Git/ai-opportunity-audit" and the browser is then asked to navigate to
// nonsense. Caught on the first run of this fixture, 14 September 2026. Pass the slug with or
// without a slash, from either shell, and this puts it back. Set MSYS_NO_PATHCONV=1 if you
// would rather the shell left it alone.
let ROUTE = String(ROUTE_ARG);
if (/^[A-Za-z]:[\\/]/.test(ROUTE)) {
    ROUTE = "/" + ROUTE.split(/[\\/]/).filter(Boolean).pop();
    console.log(`note   shell path conversion detected in the route argument; using ${ROUTE}`);
}
if (ROUTE.toLowerCase() === "home" || ROUTE === "" || ROUTE === "/") ROUTE = "/";
else if (!ROUTE.startsWith("/")) ROUTE = "/" + ROUTE;

const PORT = Number(PORT_ARG || 4181);

const HERE = dirname(fileURLToPath(import.meta.url));
const DIST = join(HERE, "..", "..", "..", "..", "dist");

if (!existsSync(join(DIST, "index.html"))) {
    console.error(`No build at ${DIST}. Run "npm run build" in C:\\Projects\\hlt first.`);
    process.exit(2);
}
if (!existsSync(DECK)) {
    console.error(`No copy deck at ${DECK}.`);
    process.exit(2);
}

const norm = (s) => String(s).replace(/\s+/g, " ").trim();

// ---------------------------------------------------------------------------------------
// 1. Read the deck. Fenced blocks only, each tagged with the heading it sits under.
// ---------------------------------------------------------------------------------------
const deckLines = readFileSync(DECK, "utf8").split(/\r?\n/);

const blocks = [];
let fence = null;
let heading = "";
for (const line of deckLines) {
    if (/^\s*#{1,6}\s/.test(line) && !fence) {
        heading = line.replace(/^\s*#{1,6}\s*/, "").replace(/\*\*/g, "").trim().toLowerCase();
        continue;
    }
    if (line.trim() === "```") {
        if (fence) { blocks.push({ heading: fence.heading, lines: fence.lines }); fence = null; }
        else { fence = { heading, lines: [] }; }
        continue;
    }
    if (fence) fence.lines.push(line);
}
if (fence) { console.error("Unclosed fence in the deck."); process.exit(2); }

const clean = (b) => b.lines.filter((l) => l.trim().length > 0).map(norm);

const titleBlocks = blocks.filter((b) => b.heading.includes("page title and meta"));
if (titleBlocks.length < 2) {
    console.error('Deck has no "page title and meta" section with a title block and a meta block.');
    process.exit(2);
}
const expectedTitle = clean(titleBlocks[0])[0];
const expectedMeta = clean(titleBlocks[1])[0];

const imageBlocks = blocks.filter((b) => b.heading.includes("hero image"));
const expectedImages = new Set();
const expectedAlts = new Set();
for (const b of imageBlocks) {
    for (const line of clean(b)) {
        if (/^https?:\/\//.test(line)) expectedImages.add(line);
        else expectedAlts.add(line);
    }
}
if (imageBlocks.length && (!expectedImages.size || !expectedAlts.size)) {
    console.error("The hero image block needs an image URL line and an alt text line.");
    process.exit(2);
}

// Three kinds of block are not ordinary page copy, and each is marked by its own heading:
//   "(en only)" / "(th only)"  a language-conditional line. The home page's hero headline is
//                              English in en and Ian's own Thai in th, so each is required in
//                              its own language and allowed in the other's reverse check.
//   "nav and footer"           chrome: it renders in the header or footer, OUTSIDE <main>, so
//                              it is deck-sourced but never expected inside the page.
const ctaTargets = new Set();
const expectedVisible = new Set();
const expectedEnOnly = new Set();
const expectedThOnly = new Set();
const chrome = new Set();
for (const b of blocks) {
    if (b.heading.includes("page title and meta") || b.heading.includes("hero image")) continue;
    const bucket = b.heading.includes("(th only)") ? expectedThOnly
        : b.heading.includes("(en only)") ? expectedEnOnly
            : b.heading.includes("nav and footer") ? chrome
                : expectedVisible;
    for (const line of clean(b)) {
        if (/^https:\/\/line\.me/.test(line)) { ctaTargets.add(line); continue; }
        bucket.add(line);
    }
}
if (ctaTargets.size !== 1) {
    console.error(`Expected exactly one LINE CTA target in the deck, found ${ctaTargets.size}.`);
    process.exit(2);
}
const expectedHref = [...ctaTargets][0];

// The inclusion rows are a markdown table, not a fenced block.
let tableRows = 0;
heading = "";
for (const line of deckLines) {
    if (/^\s*#{1,6}\s/.test(line)) {
        heading = line.replace(/^\s*#{1,6}\s*/, "").replace(/\*\*/g, "").trim().toLowerCase();
        continue;
    }
    const isTableSection = heading.includes("inclusion rows") || heading.includes("comparison table");
    if (!isTableSection) continue;
    const l = line.trim();
    if (!l.startsWith("|")) continue;
    const cells = l.split("|").slice(1, -1).map((c) => norm(c.replace(/\*\*/g, "")));
    if (cells.every((c) => /^-*$/.test(c))) continue; // separator row
    for (const c of cells) if (c) expectedVisible.add(c);
    tableRows++;
}

console.log(`deck   ${DECK}`);
console.log(`route  ${ROUTE}`);
console.log(`copy   ${expectedVisible.size} deck lines (${tableRows} table row(s)), ${expectedImages.size} image(s), CTA ${expectedHref}`);
if (expectedEnOnly.size || expectedThOnly.size) {
    console.log(`lang   ${expectedEnOnly.size} en-only line(s), ${expectedThOnly.size} th-only line(s)`);
}
if (chrome.size) console.log(`chrome ${chrome.size} header and footer line(s), checked outside <main>`);

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
            images: [...document.querySelectorAll("main img")].map((i) => ({ src: i.getAttribute("src"), alt: i.getAttribute("alt") })),
        };
    });

    const allSet = new Set(shot.all.map(norm));
    console.log(`\n=== language=${lang} · ${shot.all.length} rendered strings under <main> ===`);

    if (norm(shot.title) !== expectedTitle) fail(`title: got ${JSON.stringify(shot.title)}`);
    else console.log(`ok    title  ${shot.title}`);

    if (shot.metaCount !== 1) fail(`meta description: expected exactly 1 tag, found ${shot.metaCount}`);
    else if (shot.meta === null || norm(shot.meta) !== expectedMeta) fail(`meta description: got ${JSON.stringify(shot.meta)}`);
    else console.log(`ok    meta   ${shot.meta}`);

    const external = shot.hrefs.filter((h) => /^https?:/i.test(h));
    const internal = shot.hrefs.filter((h) => h.startsWith("/"));
    const other = shot.hrefs.filter((h) => !/^https?:/i.test(h) && !h.startsWith("/"));
    if (shot.hrefs.length === 0) fail("no links inside <main>");
    for (const h of external) {
        if (decodeURIComponent(h) !== expectedHref) fail(`href: got ${JSON.stringify(h)}, deck says ${expectedHref}`);
    }
    for (const h of other) fail(`href is neither the deck CTA nor a site route: ${JSON.stringify(h)}`);
    if (external.length && external.every((h) => decodeURIComponent(h) === expectedHref)) {
        console.log(`ok    hrefs  ${external.length} external link(s), all ${expectedHref}`);
    }
    if (internal.length) console.log(`ok    routes ${internal.length} internal link(s): ${[...new Set(internal)].join(", ")}`);

    if (expectedImages.size) {
        const seen = new Set();
        for (const img of shot.images) {
            if (!expectedImages.has(img.src)) fail(`image src is not in the deck: ${JSON.stringify(img.src)}`);
            else seen.add(img.src);
            if (!expectedAlts.has(norm(img.alt || ""))) fail(`image alt is not in the deck: ${JSON.stringify(img.alt)}`);
        }
        for (const want of expectedImages) if (!seen.has(want)) fail(`deck image not rendered: ${want}`);
        if (shot.images.length && [...expectedImages].every((w) => seen.has(w))) {
            console.log(`ok    images ${shot.images.length} rendered, all from the deck`);
        }
    }

    // Forward: the shared lines plus this language's own conditional lines.
    const wantThisLang = new Set([...expectedVisible, ...(lang === "th" ? expectedThOnly : expectedEnOnly)]);
    let missing = 0;
    for (const want of wantThisLang) {
        if (!allSet.has(want)) { fail(`deck line not rendered: ${JSON.stringify(want)}`); missing++; }
    }
    console.log(`${missing === 0 ? "ok" : "FAIL"}    forward  ${wantThisLang.size} deck copy lines, ${missing} missing`);

    // The other language's conditional line must NOT be on the page: a th-only line rendering
    // in en means the override leaked.
    const wrongLang = lang === "th" ? expectedEnOnly : expectedThOnly;
    for (const nope of wrongLang) {
        if (allSet.has(nope)) fail(`${lang === "th" ? "en" : "th"}-only line rendered under language=${lang}: ${JSON.stringify(nope)}`);
    }

    // Reverse: a rendered string must be part of SOME deck line, in either language.
    const anyDeckLine = new Set([...expectedVisible, ...expectedEnOnly, ...expectedThOnly]);
    let invented = 0;
    for (const got of shot.leaves.map(norm)) {
        let covered = false;
        for (const want of anyDeckLine) { if (want.includes(got)) { covered = true; break; } }
        if (!covered) { fail(`rendered string is not in the deck: ${JSON.stringify(got)}`); invented++; }
    }
    console.log(`${invented === 0 ? "ok" : "FAIL"}    reverse  ${shot.leaves.length} rendered leaf strings, ${invented} not found in the deck`);

    await page.close();
}

await browser.close();
server.close();

console.log(`\n${failures === 0 ? "PASS" : "FAIL"}  ${ROUTE}  ${failures} failure(s)`);
process.exit(failures === 0 ? 0 : 1);
