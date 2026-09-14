#!/usr/bin/env node
// shoot-proof.mjs — screenshots the BUILT site so the header logo can be judged from a
// picture, not from a claim. (code-builder, 14 September 2026, bridge row 3406.)
//
// It serves ../../../../dist with a plain static server, then shoots the header and the home
// hero at desktop and mobile, in light and dark mode. Run `npm run build` first.
//
// Borrowed Playwright: see the dependency note in rasterise-logo-set.mjs.
// Run:  node shoot-proof.mjs

import { createServer } from "node:http";
import { readFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join, extname, normalize } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const HERE = dirname(fileURLToPath(import.meta.url));
const DIST = join(HERE, "..", "..", "..", "..", "dist");
const OUT = join(HERE, "proof");

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
await new Promise((r) => server.listen(4178, r));
const BASE = "http://localhost:4178";

mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();

const VIEWPORTS = [["desktop", 1440, 900], ["mobile", 390, 844]];
const MODES = ["light", "dark"];

for (const [vname, w, h] of VIEWPORTS) {
  for (const mode of MODES) {
    const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2 });
    // the site stores its theme choice; set it before first paint so we shoot the real thing
    await page.addInitScript((m) => {
      try { localStorage.setItem("theme", m); } catch { /* ignore */ }
      if (m === "dark") document.documentElement.classList.add("dark");
    }, mode);
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    await page.waitForTimeout(1200);

    const header = page.locator("nav").first();
    await header.screenshot({ path: join(OUT, `header-${vname}-${mode}.png`) });
    console.log(`wrote proof/header-${vname}-${mode}.png`);

    await page.screenshot({ path: join(OUT, `hero-${vname}-${mode}.png`) });
    console.log(`wrote proof/hero-${vname}-${mode}.png`);
    await page.close();
  }
}

await browser.close();
server.close();
