// scripts/make-icons.mjs — the site's own icon set and Open Graph image, from the HLT logo v2 set.
// Added 30 September 2026 for bridge row 4018 (remove every Lovable residual) and the visibility
// refresh (Open Graph image for every page's head).
//
// RUN:  node scripts/make-icons.mjs        (from C:\Projects\hlt)
// WRITES, all under public/:
//   favicon.ico             16, 32 and 48 px, PNG-in-ICO, from src/assets/brand/hlt-logo-v2/favicon/
//   site.webmanifest        name, short name, the icon set, HLT's navy as the theme colour
//   brand/icon-512.png      the @2x icon copied for the manifest, its size read from the PNG header
//   brand/og-image.png      1200 x 630, navy ground, the white lockup, one line of copy
//
// WHY A favicon.ico AT ALL. The site has linked its SVG and PNG icons since 16 September, but no
// /favicon.ico existed, so a crawler asking for it got the SPA's index.html back with a 200. Some
// crawlers ask for that path before they read the link tags, and one that finds nothing keeps the
// icon it last cached, which for HLT was the icon of the tool the first site was built with. A real
// file at that path closes the gap.
//
// THE ICO FORMAT, briefly: a 6-byte header (reserved, type 1, count), then one 16-byte directory
// entry per image (width, height, palette 0, reserved 0, planes 1, bit depth 32, byte size, byte
// offset), then the images. PNG payloads have been valid inside an ICO since Windows Vista and every
// browser reads them.
//
// THE OPEN GRAPH IMAGE is rendered from a small HTML card by the borrowed Playwright (see
// scripts/shoot-preview.mjs), so it uses the real lockup SVG rather than a hand-drawn copy.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { resolvePlaywright } from './lib/playwright.mjs';

const REPO = process.cwd();
const BRAND = path.join(REPO, 'src', 'assets', 'brand', 'hlt-logo-v2');
const PUBLIC = path.join(REPO, 'public');
const OUT_BRAND = path.join(PUBLIC, 'brand');
mkdirSync(OUT_BRAND, { recursive: true });

const pngSize = (buf) => ({ width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) });

// 1. favicon.ico
const sizes = [16, 32, 48];
const pngs = sizes.map((s) => {
    const p = path.join(BRAND, 'favicon', `favicon-${s}.png`);
    if (!existsSync(p)) throw new Error(`missing ${p}`);
    const buf = readFileSync(p);
    const dim = pngSize(buf);
    if (dim.width !== s || dim.height !== s) throw new Error(`${p} is ${dim.width}x${dim.height}, expected ${s}`);
    return { s, buf };
});
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(pngs.length, 4);
const dirSize = 16 * pngs.length;
let offset = 6 + dirSize;
const entries = [];
for (const { s, buf } of pngs) {
    const e = Buffer.alloc(16);
    e.writeUInt8(s === 256 ? 0 : s, 0);
    e.writeUInt8(s === 256 ? 0 : s, 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(buf.length, 8);
    e.writeUInt32LE(offset, 12);
    entries.push(e);
    offset += buf.length;
}
const ico = Buffer.concat([header, ...entries, ...pngs.map((p) => p.buf)]);
writeFileSync(path.join(PUBLIC, 'favicon.ico'), ico);
console.log(`  favicon.ico: ${ico.length} bytes, ${sizes.join('/')} px`);

// 2. the large icon for the manifest
const bigSrc = path.join(BRAND, 'png', 'hlt-icon@2x.png');
const big = readFileSync(bigSrc);
const bigDim = pngSize(big);
const bigName = `icon-${bigDim.width}.png`;
writeFileSync(path.join(OUT_BRAND, bigName), big);
console.log(`  brand/${bigName}: ${bigDim.width}x${bigDim.height}`);

// 3. the manifest
const manifest = {
    name: 'High Level Thai',
    short_name: 'HLT',
    description: 'Business systems for owner-led businesses in Hua Hin and across Thailand.',
    start_url: '/',
    display: 'browser',
    background_color: '#0A1F44',
    theme_color: '#0A1F44',
    icons: [
        { src: '/brand/favicon-32.png', sizes: '32x32', type: 'image/png' },
        { src: '/brand/apple-touch-icon-180.png', sizes: '180x180', type: 'image/png' },
        { src: `/brand/${bigName}`, sizes: `${bigDim.width}x${bigDim.height}`, type: 'image/png' },
    ],
};
writeFileSync(path.join(PUBLIC, 'site.webmanifest'), JSON.stringify(manifest, null, 2) + '\n');
console.log('  site.webmanifest written');

// 4. the Open Graph image
const lockupSvg = readFileSync(path.join(BRAND, 'svg', 'hlt-lockup-white.svg'), 'utf8');
const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  html,body{margin:0;width:1200px;height:630px;background:#0A1F44;font-family:Inter,"Segoe UI",Arial,sans-serif;color:#fff}
  .card{position:relative;width:1200px;height:630px;box-sizing:border-box;padding:96px 104px;display:flex;flex-direction:column;justify-content:space-between}
  .lockup svg{height:96px;width:auto}
  h1{margin:0;font-size:54px;line-height:1.15;font-weight:700;max-width:900px;letter-spacing:-0.01em}
  p{margin:20px 0 0;font-size:28px;line-height:1.4;color:#C7D2FE}
  .site{font-size:24px;color:#A5B4FC;letter-spacing:0.02em}
  .glow{position:absolute;right:-120px;top:-120px;width:520px;height:520px;border-radius:50%;background:radial-gradient(closest-side,rgba(99,102,241,.28),rgba(10,31,68,0))}
</style></head><body><div class="card"><div class="glow"></div>
  <div class="lockup">${lockupSvg}</div>
  <div><h1>Build a business that needs you less.</h1><p>Business systems for owner-led businesses in Hua Hin and across Thailand.</p></div>
  <div class="site">highlevelthai.com</div>
</div></body></html>`;
// The card is a build input, not a page, so it is written to the OS temp folder and never to
// public/, where Vite would copy it into the site.
const cardPath = path.join(tmpdir(), `hlt-og-card-${process.pid}.html`);
writeFileSync(cardPath, html);
const pw = await resolvePlaywright();
const browser = await pw.chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(cardPath).href);
await page.waitForTimeout(300);
await page.screenshot({ path: path.join(OUT_BRAND, 'og-image.png'), fullPage: false });
await browser.close();
console.log('  brand/og-image.png: 1200x630');
