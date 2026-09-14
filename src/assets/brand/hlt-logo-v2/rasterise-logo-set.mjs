#!/usr/bin/env node
// rasterise-logo-set.mjs — renders the derived SVGs to PNG at the sizes the site and the
// browsers need. Run build-logo-set.mjs first.
//
// WHY (code-builder, 14 September 2026, bridge row 3406): the site needs PNG fallbacks and a
// favicon set. Nothing is drawn here — Chromium rasterises the SVGs this folder already holds.
//
// DEPENDENCY NOTE, read before you run it: this repo does not carry Playwright and this script
// deliberately does not add it to package.json — the site build must not grow a browser
// dependency for a one-off asset job. It borrows the Playwright already installed at
//   C:\Projects\video-studio-teleprompter\node_modules
// and the Chromium already downloaded to C:\Users\ianwt\AppData\Local\ms-playwright.
// If that repo moves, set PW_ROOT below or pass --pw <path to node_modules>.
//
// Run:  node rasterise-logo-set.mjs

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const HERE = dirname(fileURLToPath(import.meta.url));
const SVG = join(HERE, "svg");
const PNG = join(HERE, "png");
const FAV = join(HERE, "favicon");

const argIdx = process.argv.indexOf("--pw");
const PW_ROOT = argIdx > -1 ? process.argv[argIdx + 1] : "C:\\Projects\\video-studio-teleprompter\\node_modules";
if (!existsSync(join(PW_ROOT, "playwright"))) {
  console.error(`Playwright not found at ${PW_ROOT}. Pass --pw <node_modules path>.`);
  process.exit(2);
}
const require = createRequire(pathToFileURL(join(PW_ROOT, "_.js")));
const { chromium } = require("playwright");

// name -> [svg file, width, height, background ('transparent' or a css colour), padding fraction]
const JOBS = [
  ["png/hlt-lockup-colour@2x.png",     "hlt-lockup-colour.svg",     700, 180, "transparent", 0],
  ["png/hlt-lockup-white@2x.png",      "hlt-lockup-white.svg",      700, 180, "transparent", 0],
  ["png/hlt-lockup-mono-black@2x.png", "hlt-lockup-mono-black.svg", 700, 180, "transparent", 0],
  ["png/hlt-icon@2x.png",              "hlt-icon.svg",              512, 512, "transparent", 0],
  ["png/hlt-icon-white@2x.png",        "hlt-icon-white.svg",        512, 512, "transparent", 0],
  ["favicon/favicon-16.png",           "hlt-icon.svg",               16,  16,  "transparent", 0],
  ["favicon/favicon-32.png",           "hlt-icon.svg",               32,  32,  "transparent", 0],
  ["favicon/favicon-48.png",           "hlt-icon.svg",               48,  48,  "transparent", 0],
  // Apple tiles do not honour transparency: solid white, mark inset so it is not clipped by the rounding
  ["favicon/apple-touch-icon-180.png", "hlt-icon.svg",              180, 180, "#ffffff",     0.14],
];

const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 1 });
mkdirSync(PNG, { recursive: true });
mkdirSync(FAV, { recursive: true });

for (const [out, src, w, h, bg, pad] of JOBS) {
  const svg = readFileSync(join(SVG, src), "utf8");
  const inset = Math.round(Math.min(w, h) * pad);
  const html = `<!doctype html><meta charset="utf-8"><style>
    html,body{margin:0;padding:0;background:${bg === "transparent" ? "transparent" : bg};}
    #box{width:${w}px;height:${h}px;display:flex;align-items:center;justify-content:center;
         background:${bg === "transparent" ? "transparent" : bg};box-sizing:border-box;padding:${inset}px;}
    #box svg{width:100%;height:100%;display:block;}
  </style><div id="box">${svg}</div>`;
  await page.setViewportSize({ width: w, height: h });
  await page.setContent(html, { waitUntil: "load" });
  const box = await page.locator("#box");
  await box.screenshot({ path: join(HERE, out), omitBackground: bg === "transparent" });
  console.log(`wrote ${out}  ${w}x${h}  bg=${bg}`);
}

// favicon.svg is just the icon, copied under the name browsers look for
writeFileSync(join(FAV, "favicon.svg"), readFileSync(join(SVG, "hlt-icon.svg")));
console.log("wrote favicon/favicon.svg");

await browser.close();
