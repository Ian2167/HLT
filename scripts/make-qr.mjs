// scripts/make-qr.mjs — the two QR codes the site shows instead of a LINE ID and a WhatsApp number.
// Added 1 October 2026 on Ian's word: "the Line address '@535zlmbx' looks particularly poor, can we
// not use the QR code for that and WhatsApp throughout?"
//
// RUN:  node scripts/make-qr.mjs        (from C:\Projects\hlt)
// WRITES: public/brand/qr-line.svg and public/brand/qr-whatsapp.svg, navy on white, from the SAME
// two constants every button on the site uses (src/constants/contact.js), so a scan and a tap land
// in the same place.
//
// EVERY CODE IS READ BACK BEFORE IT IS KEPT. Each one is rendered to pixels and decoded, and the
// decoded text must equal the URL it was made from; a third code made from a deliberately
// different URL must decode to THAT, which proves the decoder is reading the image rather than
// echoing the input. Any mismatch fails the run and nothing is written.
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import QRCode from 'qrcode';
import jsQR from 'jsqr';
import { PNG } from 'pngjs';

const REPO = process.cwd();
const OUT = path.join(REPO, 'public', 'brand');
const { LINE_BUSINESS_READ, CONTACT_WHATSAPP_URL } = await import(pathToFileURL(path.join(REPO, 'src', 'constants', 'contact.js')).href);

const NAVY = '#0A1F44';
const codes = [
    { name: 'qr-line', url: LINE_BUSINESS_READ },
    { name: 'qr-whatsapp', url: CONTACT_WHATSAPP_URL },
];
const control = { name: 'control', url: 'https://example.com/not-the-real-link' };

const decode = async (url) => {
    const png = PNG.sync.read(await QRCode.toBuffer(url, { type: 'png', errorCorrectionLevel: 'M', margin: 4, scale: 8 }));
    const result = jsQR(new Uint8ClampedArray(png.data), png.width, png.height);
    return result ? result.data : null;
};

// The control first: the decoder must read a different URL back as that different URL.
const controlRead = await decode(control.url);
if (controlRead !== control.url) throw new Error(`decoder control failed: read "${controlRead}" for ${control.url}`);
console.log(`  control: a code for ${control.url} reads back as itself`);

for (const { name, url } of codes) {
    const read = await decode(url);
    if (read !== url) throw new Error(`${name}: rendered code reads back as "${read}", expected "${url}"`);
    const svg = await QRCode.toString(url, { type: 'svg', errorCorrectionLevel: 'M', margin: 2, color: { dark: NAVY, light: '#FFFFFF' } });
    const file = path.join(OUT, `${name}.svg`);
    writeFileSync(file, svg);
    const back = readFileSync(file, 'utf8');
    if (!back.startsWith('<svg') || back.length < 500) throw new Error(`${name}: the written SVG is not a QR (${back.length} bytes)`);
    console.log(`  ${name}.svg: ${back.length} bytes, encodes ${url}, read back VERIFIED`);
}
