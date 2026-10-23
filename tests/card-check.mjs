// CARD CHECK, 23 October 2026 (A-062, brief 2026-10-23-code-builder-hlt-card-fit-call-booking.md,
// bridge row 5077). The fixture for the static contact cards under public/card/.
//
// WHY: the cards are plain HTML outside the React app, so nothing else in the build checks them.
// This proves, for each card, the things the brief's DONE list names that can be read from the
// files or over HTTP: every button's target, the booking link, no draft label, no lin.ee, Thai
// default, absolute head paths (vercel.json has trailingSlash false, so /card/ is redirected to
// /card and a relative "./icon.png" would resolve to /icon.png), a manifest whose scope holds its
// own start_url, real PNG icons at their stated sizes, a vCard that parses, and the QR, decoded
// with jsQR from the inline SVG, still reading https://www.highlevelthai.com/contact.
// The no-name card must carry no personal name: "Ian" and "Turton" are refused anywhere except
// inside the email address ian@highlevelthai.com, which the brief keeps.
//
// Usage:  node tests/card-check.mjs dist                 (after `npm run build`)
//         node tests/card-check.mjs https://<host>       (a preview or the live domain; also checks
//                                                         /, /contact unchanged in status, and both
//                                                         slash forms of each card URL)
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import jsQR from 'jsqr';
import { PNG } from 'pngjs';

const BOOKING_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0rTLZHg5dJTWbRNBiVdkUDB4WxAUK7ASRa9rVNksONP8XVyeMGKuMtpUWiJrlPF6GaXwlAMqQy';
const QR_TARGET = 'https://www.highlevelthai.com/contact';
const CARD_ICON_MD5 = {
  '/card/apple-touch-icon.png': 'd10ac82d97fe679a58bba260cd555e47',
  '/card/icon-192.png': 'e0a38946df7e0a6bce477874bf48462a',
  '/card/icon-512.png': '8876e20ba5c983759209ffedc1f9a4ca',
};

const CARDS = [
  { id: 'ian', route: '/card', name: 'Ian Turton', fn: 'Ian Turton', noName: false },
  { id: 'hlt', route: '/card/hlt', name: 'High Level Thai', fn: 'High Level Thai', noName: true },
];

const target = process.argv[2] || 'dist';
const isHttp = /^https?:\/\//.test(target);
const base = isHttp ? target.replace(/\/$/, '') : path.resolve(target);

let pass = 0;
let fail = 0;
const ok = (cond, label) => {
  if (cond) pass++;
  else fail++;
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${label}`);
};

async function get(p, { binary = false, follow = true } = {}) {
  if (isHttp) {
    const r = await fetch(base + p, { redirect: follow ? 'follow' : 'manual' });
    const body = binary ? Buffer.from(await r.arrayBuffer()) : await r.text();
    return { status: r.status, type: r.headers.get('content-type') || '', body, location: r.headers.get('location') };
  }
  let file = path.join(base, p);
  if (!path.extname(p)) file = path.join(file, 'index.html');
  if (!existsSync(file)) return { status: 404, type: '', body: binary ? Buffer.alloc(0) : '' };
  return { status: 200, type: '', body: binary ? readFileSync(file) : readFileSync(file, 'utf8') };
}

const attr = (html, re) => (html.match(re) || [])[1];
const hrefOfClass = (html, cls) => attr(html, new RegExp(`<a class="${cls}"[^>]*href="([^"]+)"`));

function copyObject(html) {
  const src = attr(html, /const copy=(\{[\s\S]*?\});\s*function render/);
  if (!src) return null;
  try {
    return Function(`"use strict";return (${src});`)();
  } catch {
    return null;
  }
}

// Rasterise the qrcode library's SVG ("M<x> <y>.5h<n>m<n> 0h<n>..." runs on a <size> viewBox) and
// decode it with jsQR. Any other SVG shape returns null and the check fails loudly.
function decodeQrSvg(svg) {
  const size = Number(attr(svg, /viewBox="0 0 (\d+) \1"/));
  const d = attr(svg, /<path stroke="[^"]+" d="([^"]+)"/);
  if (!size || !d) return null;
  const grid = Array.from({ length: size }, () => new Array(size).fill(0));
  let x = 0;
  let y = 0;
  for (const [, op, a, b] of d.matchAll(/([MmhH])([\d.]+)(?:[ ,]([\d.]+))?/g)) {
    if (op === 'M') { x = Number(a); y = Math.floor(Number(b)); }
    else if (op === 'm') { x += Number(a); y += Math.floor(Number(b)); }
    else if (op === 'h') { for (let i = 0; i < Number(a); i++) grid[y][x + i] = 1; x += Number(a); }
  }
  const scale = 8;
  const px = size * scale;
  const png = new PNG({ width: px, height: px });
  for (let j = 0; j < px; j++) {
    for (let i = 0; i < px; i++) {
      const v = grid[Math.floor(j / scale)][Math.floor(i / scale)] ? 0 : 255;
      const k = (j * px + i) * 4;
      png.data[k] = png.data[k + 1] = png.data[k + 2] = v;
      png.data[k + 3] = 255;
    }
  }
  const res = jsQR(new Uint8ClampedArray(png.data), px, px);
  return res ? res.data : null;
}

function pngSize(buf) {
  if (buf.length < 24 || buf.toString('ascii', 1, 4) !== 'PNG') return null;
  return [buf.readUInt32BE(16), buf.readUInt32BE(20)];
}

console.log(`card-check ${new Date().toISOString()} target=${isHttp ? base : target}`);

for (const card of CARDS) {
  const tag = `[${card.id} ${card.route}]`;
  const page = await get(card.route);
  ok(page.status === 200, `${tag} page answers 200 (got ${page.status})`);
  const html = page.body || '';
  ok(html.includes(`data-card="${card.id}"`), `${tag} the body is this card, not the app shell`);
  if (isHttp) {
    const slash = await get(card.route + '/');
    ok(slash.status === 200 && slash.body.includes(`data-card="${card.id}"`), `${tag} the trailing-slash form ends on the card with 200 (got ${slash.status})`);
  }

  ok(/<html lang="th"/.test(html), `${tag} Thai is the default language`);
  ok(/render\(new URLSearchParams\(location\.search\)\.get\('lang'\)==='en'\?'en':'th'\)/.test(html), `${tag} ?lang=en opens English, anything else Thai`);
  ok(!/draft|ฉบับร่าง/i.test(html), `${tag} no draft label anywhere`);
  ok(!/lin\.ee/.test(html), `${tag} the retired lin.ee LINE link is absent`);
  ok(/<meta name="robots" content="noindex">/.test(html), `${tag} the card is kept out of search results`);
  ok(!/googletagmanager|gtag\(|analytics|plausible|_vercel\/insights/i.test(html), `${tag} no tracking or analytics`);

  // The five contact buttons and the booking button.
  const hrefs = [...html.matchAll(/<a class="action[^"]*" href="([^"]+)"/g)].map((m) => m[1]);
  ok(JSON.stringify(hrefs) === JSON.stringify([
    'https://wa.me/66968398305',
    'https://line.me/ti/p/5_UWYMe4nU',
    'mailto:ian@highlevelthai.com',
    'tel:+66968398305',
    'https://www.highlevelthai.com/',
  ]), `${tag} WhatsApp, LINE, email, phone and website buttons point at the right targets`);
  ok(hrefOfClass(html, 'fit') === BOOKING_URL, `${tag} the Fit Call button opens the booking page`);

  const copy = copyObject(html);
  ok(!!copy && !!copy.th && !!copy.en, `${tag} the copy object parses with th and en`);
  if (copy) {
    ok(copy.en.fit === 'Book a free 20-minute Fit Call ↗', `${tag} EN button reads "Book a free 20-minute Fit Call"`);
    ok(copy.th.fit === 'นัดคุย Fit Call ฟรี 20 นาที ↗', `${tag} TH button reads "นัดคุย Fit Call ฟรี 20 นาที"`);
    ok(/email/i.test(copy.en.note) && !/reply|WhatsApp/i.test(copy.en.note + copy.en.fitSub), `${tag} EN note says the booking confirms by email, with no reply promise`);
    ok(/อีเมล/.test(copy.th.note) && !/ตอบกลับ|WhatsApp/.test(copy.th.note + copy.th.fitSub), `${tag} TH note says the booking confirms by email, with no reply promise`);
    ok(copy.en.name === card.name && copy.th.name === card.name, `${tag} heading reads "${card.name}" in both languages`);
    const keys = Object.keys(copy.th).sort().join();
    ok(keys === Object.keys(copy.en).sort().join(), `${tag} TH and EN carry the same copy keys`);
    const used = [...html.matchAll(/data-copy="([a-zA-Z]+)"/g)].map((m) => m[1]);
    ok(used.every((k) => k in copy.th && k in copy.en), `${tag} every data-copy key has text in both languages`);
  }

  if (card.noName) {
    const scrubbed = html.replace(/ian@highlevelthai\.com|ian%40highlevelthai\.com/gi, '');
    ok(!/\bIan\b|Turton|Ian’s|Ian's/i.test(scrubbed), `${tag} no personal name anywhere apart from the email address`);
  }

  // Head: absolute paths, icons, manifest.
  const touch = attr(html, /<link rel="apple-touch-icon"[^>]*href="([^"]+)"/);
  const icon = attr(html, /<link rel="icon"[^>]*href="([^"]+)"/);
  const manifestHref = attr(html, /<link rel="manifest" href="([^"]+)"/);
  ok([touch, icon, manifestHref].every((h) => h && h.startsWith('/card/')), `${tag} icon and manifest links are absolute /card/ paths`);
  for (const [href, want] of [[touch, [180, 180]], [icon, [192, 192]]]) {
    if (!href) continue;
    const r = await get(href, { binary: true });
    const sz = pngSize(r.body);
    ok(r.status === 200 && sz && sz[0] === want[0] && sz[1] === want[1], `${tag} ${href} is a ${want.join('x')} PNG (got ${r.status}, ${sz ? sz.join('x') : 'not a PNG'})`);
  }
  // The business-card icon Ian asked for on 23 Oct (bridge rows 5082, 5083), not the plain emblem:
  // byte-identical to C:\Projects\ea-desk\hlt\card-icon\*.png.
  for (const [href, md5] of Object.entries(CARD_ICON_MD5)) {
    const r = await get(href, { binary: true });
    ok(r.status === 200 && createHash('md5').update(r.body).digest('hex') === md5, `${tag} ${href} is the business-card icon`);
  }
  if (manifestHref) {
    const r = await get(manifestHref);
    let m = null;
    try { m = JSON.parse(r.body); } catch { /* reported below */ }
    ok(r.status === 200 && !!m, `${tag} ${manifestHref} parses as JSON`);
    if (m) {
      ok(m.start_url === card.route && m.scope === card.route, `${tag} manifest start_url and scope are ${card.route}`);
      ok(m.display === 'standalone', `${tag} manifest opens standalone`);
      for (const ic of m.icons || []) {
        const ir = await get(ic.src, { binary: true });
        const sz = pngSize(ir.body);
        ok(ir.status === 200 && sz && `${sz[0]}x${sz[1]}` === ic.sizes, `${tag} manifest icon ${ic.src} is ${ic.sizes}`);
      }
      if (card.noName) ok(!/\bIan\b|Turton/i.test(r.body), `${tag} manifest carries no personal name`);
    }
  }

  // vCard.
  const save = attr(html, /<a class="save" href="([^"]+)"/);
  ok(!!save && save.startsWith('/card/') && save.endsWith('.vcf'), `${tag} "save contact" links a .vcf file under /card/`);
  if (save) {
    const v = await get(save);
    const body = v.body || '';
    ok(v.status === 200, `${tag} ${save} answers 200 (got ${v.status})`);
    if (isHttp) ok(/vcard/i.test(v.type), `${tag} ${save} is served as a vCard (content-type ${v.type})`);
    ok(body.startsWith('BEGIN:VCARD\r\nVERSION:3.0\r\n') && body.trimEnd().endsWith('END:VCARD'), `${tag} vCard 3.0 with CRLF line endings`);
    ok(body.includes(`\r\nFN:${card.fn}\r\n`), `${tag} vCard FN is "${card.fn}"`);
    for (const line of ['ORG:High Level Thai', 'TEL;TYPE=CELL,VOICE:+66968398305', 'EMAIL;TYPE=INTERNET,WORK:ian@highlevelthai.com', 'URL:https://www.highlevelthai.com/', 'X-SOCIALPROFILE;TYPE=LINE:https://line.me/ti/p/5_UWYMe4nU']) {
      ok(body.includes(`\r\n${line}\r\n`), `${tag} vCard has ${line}`);
    }
    if (card.noName) ok(!/\bIan\b|Turton/i.test(body.replace(/ian@highlevelthai\.com/g, '')), `${tag} vCard carries no personal name`);
  }

  // QR.
  const qrSvg = attr(html, /<a class="qr" href="[^"]+"[^>]*>(<svg[\s\S]*?<\/svg>)/);
  ok(hrefOfClass(html, 'qr') === QR_TARGET, `${tag} the QR links to ${QR_TARGET}`);
  ok(!!qrSvg && decodeQrSvg(qrSvg) === QR_TARGET, `${tag} the QR image decodes to ${QR_TARGET}`);
}

if (isHttp) {
  for (const p of ['/', '/contact']) {
    const r = await get(p);
    ok(r.status === 200 && !r.body.includes('data-card='), `[site] ${p} still answers 200 with the site page (got ${r.status})`);
  }
}

console.log(`card-check RESULT ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
