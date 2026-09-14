#!/usr/bin/env node
// shoot-business-read-proof.mjs — screenshots the BUILT /business-read page so it can be
// judged from a picture, not from a claim. (code-builder, 14 September 2026.)
//
// Same pattern as shoot-proof.mjs beside it: it serves ../../../../dist with a plain static
// server, then shoots desktop and mobile, light and dark, top of page and the tier
// comparison. Run `npm run build` first.
//
// Borrowed Playwright: see the dependency note in rasterise-logo-set.mjs. Nothing is added to
// the site's package.json. Port 4180, because 5173 is held by the Desk's preview server and
// 4178 by shoot-proof.mjs.
//
// Run:  node shoot-business-read-proof.mjs
//
// Writes eight PNGs to proof/business-read/, then one 2-up overview (desktop light beside
// mobile light) both there and at the Google Drive reports path, where Ian reads it.

import { createServer } from "node:http";
import { readFileSync, writeFileSync, existsSync, mkdirSync, statSync, copyFileSync } from "node:fs";
import { dirname, join, extname, normalize } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const HERE = dirname(fileURLToPath(import.meta.url));
const DIST = join(HERE, "..", "..", "..", "..", "dist");
const OUT = join(HERE, "proof", "business-read");
const DRIVE_COPY = "H:\\My Drive\\IWT Reports\\HLT Business Read Page Proof 2026-09-14.png";
const PORT = 4180;
const ROUTE = "/business-read";

if (!existsSync(join(DIST, "index.html"))) {
    console.error(`No build at ${DIST}. Run "npm run build" in C:\\Projects\\hlt first.`);
    process.exit(2);
}

const PW_ROOT = "C:\\Projects\\video-studio-teleprompter\\node_modules";
const require = createRequire(pathToFileURL(join(PW_ROOT, "_.js")));
const { chromium } = require("playwright");

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".json": "application/json", ".ico": "image/x-icon" };

const server = createServer((req, res) => {
    const url = decodeURIComponent(req.url.split("?")[0]);
    let file = normalize(join(DIST, url));
    if (!file.startsWith(normalize(DIST))) { res.writeHead(403).end(); return; }
    if (!existsSync(file) || statSync(file).isDirectory()) file = join(DIST, "index.html"); // SPA fallback
    res.writeHead(200, { "content-type": TYPES[extname(file)] || "application/octet-stream" });
    res.end(readFileSync(file));
});
await new Promise((r) => server.listen(PORT, r));
const BASE = `http://localhost:${PORT}`;

mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();

// The tier comparison is a table on desktop and a stack of cards on mobile; each carries the
// same eight rows and its own id, put there as a screenshot target.
const VIEWPORTS = [
    ["desktop", 1440, 900, "#br-tier-table"],
    ["mobile", 390, 844, "#br-tier-stack"],
];
const MODES = ["light", "dark"];

for (const [vname, w, h, tierSelector] of VIEWPORTS) {
    for (const mode of MODES) {
        const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2 });
        // the site stores its theme and language; set both before first paint so we shoot the
        // real thing. English is explicit because the page is English-only this pass.
        await page.addInitScript((m) => {
            try {
                localStorage.setItem("theme", m);
                localStorage.setItem("language", "en");
            } catch { /* ignore */ }
            if (m === "dark") document.documentElement.classList.add("dark");
        }, mode);
        await page.goto(BASE + ROUTE, { waitUntil: "networkidle" });
        await page.waitForTimeout(1200);

        await page.screenshot({ path: join(OUT, `top-${vname}-${mode}.png`) });
        console.log(`wrote proof/business-read/top-${vname}-${mode}.png`);

        // The tier block is taller than the viewport, so Playwright stitches the element shot by
        // scrolling. The site's nav is position:fixed, so it burns itself across the middle of
        // that stitch and hides two rows of the first card. Hide it for this shot only — the
        // top-of-page shots above already show the nav in place.
        await page.addStyleTag({ content: "nav { display: none !important; }" });
        const tier = page.locator(tierSelector);
        await tier.scrollIntoViewIfNeeded();
        await page.waitForTimeout(400);
        await tier.screenshot({ path: join(OUT, `tiers-${vname}-${mode}.png`) });
        console.log(`wrote proof/business-read/tiers-${vname}-${mode}.png`);

        await page.close();
    }
}

// The 2-up overview: desktop light beside mobile light, composed in the browser from data
// URIs so no image library is added to the repo.
const b64 = (p) => readFileSync(p).toString("base64");
const deskB64 = b64(join(OUT, "top-desktop-light.png"));
const mobB64 = b64(join(OUT, "top-mobile-light.png"));
const overview = await browser.newPage({ viewport: { width: 1645, height: 830 }, deviceScaleFactor: 2 });
await overview.setContent(`<!doctype html><html><body style="margin:0;background:#f8fafc;">
  <div style="display:flex;gap:40px;align-items:flex-start;padding:40px;box-sizing:border-box;">
    <img src="data:image/png;base64,${deskB64}" style="width:1200px;height:auto;border:1px solid #e2e8f0;border-radius:8px;" />
    <img src="data:image/png;base64,${mobB64}" style="width:325px;height:auto;border:1px solid #e2e8f0;border-radius:8px;" />
  </div>
</body></html>`);
await overview.waitForTimeout(600);
const overviewPath = join(OUT, "overview-2up-light.png");
await overview.screenshot({ path: overviewPath });
console.log("wrote proof/business-read/overview-2up-light.png");
await overview.close();

await browser.close();
server.close();

// Ian reads proofs out of Google Drive, not out of the repo.
copyFileSync(overviewPath, DRIVE_COPY);
console.log(`copied  ${DRIVE_COPY}`);

// A tiny manifest, so a later reader knows what these eight files are without opening them.
writeFileSync(
    join(OUT, "MANIFEST.txt"),
    [
        "/business-read proof shots, 14 September 2026, from shoot-business-read-proof.mjs.",
        "Source: the built dist/ served on localhost:" + PORT + ", language=en, deviceScaleFactor 2.",
        "",
        "top-desktop-light.png    1440x900  viewport, top of page, light",
        "top-desktop-dark.png     1440x900  viewport, top of page, dark",
        "top-mobile-light.png     390x844   viewport, top of page, light",
        "top-mobile-dark.png      390x844   viewport, top of page, dark",
        "tiers-desktop-light.png  the eight-row comparison table, light",
        "tiers-desktop-dark.png   the eight-row comparison table, dark",
        "tiers-mobile-light.png   the same eight rows stacked per tier, light",
        "tiers-mobile-dark.png    the same eight rows stacked per tier, dark",
        "overview-2up-light.png   desktop light beside mobile light; copied to " + DRIVE_COPY,
        "",
        "The four tiers-*.png shots hide the fixed nav, which would otherwise burn across the",
        "middle of the stitched element capture. The four top-*.png shots show it in place.",
        "",
    ].join("\n")
);
console.log("wrote proof/business-read/MANIFEST.txt");
