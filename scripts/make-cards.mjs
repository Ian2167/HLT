// MAKE CARDS, 23 October 2026 (A-062, brief
// C:\Projects\IWT\02-builds\executive-assistant\work\briefs\2026-10-23-code-builder-hlt-card-fit-call-booking.md).
//
// WHY THIS EXISTS: the contact card is Codex's reviewed, self-contained HTML (logo and QR inline),
// adapted per person. Hand-editing three 37 KB one-line files would drift, so this script derives
// every card from Codex's file with the same few changes, and writes public/card/. Run it again
// with a new entry in CARDS (Ann's card is the next one, once her name and title are supplied) and
// rerun tests/card-check.mjs. It is not part of the site build; nothing in vite.config.js calls it.
//
// The changes it makes to Codex's file, all from Ian's rulings of 23 October (brief, REFERENCE):
//   1. The Fit Call button opens Ian's Google Calendar booking page (BOOKING_URL), and reads
//      "Book a free 20-minute Fit Call"; the line under it and the note say the booking is
//      confirmed by email (no "Ian will reply" promise). The two Thai lines for that are new.
//   2. The draft label and its style are gone.
//   3. Head links are absolute /card/ paths: vercel.json has trailingSlash false, so /card/ is
//      redirected to /card, where "./icon-192.png" would resolve to /icon-192.png and miss.
//   4. "Save contact" links a real .vcf file under /card/ instead of a data: URI, so a phone
//      receives a file served as text/vcard.
//   5. <meta name="robots" content="noindex">: the card is for people handed the link.
//   6. <main data-card="<id>"> so the fixture can tell a card from the app shell.
//
// Usage: node scripts/make-cards.mjs <path to Codex's hlt-homescreen-prep\index.html>
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const BOOKING_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0rTLZHg5dJTWbRNBiVdkUDB4WxAUK7ASRa9rVNksONP8XVyeMGKuMtpUWiJrlPF6GaXwlAMqQy';

const COMMON = {
  th: {
    eyebrow: 'ยินดีที่ได้รู้จัก',
    company: 'High Level Thai',
    descriptor: 'Business systems & practical AI',
    intro: 'เริ่มคุยกันได้ในช่องทางที่คุณสะดวก',
    whatsapp: 'WhatsApp',
    line: 'LINE',
    email: 'ian@highlevelthai.com',
    phone: '+66 96 839 8305',
    website: 'highlevelthai.com',
    fit: 'นัดคุย Fit Call ฟรี 20 นาที ↗',
    fitSub: 'เลือกวันและเวลาที่สะดวกในปฏิทิน', // NEW Thai, for Ann's review
    note: 'เมื่อจองแล้ว คุณจะได้รับอีเมลยืนยันการนัดหมาย', // NEW Thai, for Ann's review
    qr: 'สแกนเพื่อดูช่องทางติดต่อ',
    save: 'บันทึกข้อมูลติดต่อ',
  },
  en: {
    eyebrow: 'Good to connect',
    company: 'High Level Thai',
    descriptor: 'Business systems & practical AI',
    intro: 'Let’s start with a conversation.',
    whatsapp: 'WhatsApp',
    line: 'LINE',
    email: 'ian@highlevelthai.com',
    phone: '+66 96 839 8305',
    website: 'highlevelthai.com',
    fit: 'Book a free 20-minute Fit Call ↗',
    fitSub: 'Pick a day and time in the calendar',
    note: 'Once you’ve booked, you’ll get a confirmation by email.',
    qr: 'Scan to connect',
    save: 'Save contact',
  },
};

const vcard = (lines) => ['BEGIN:VCARD', 'VERSION:3.0', ...lines, 'END:VCARD', ''].join('\r\n');
const CONTACT_LINES = [
  'ORG:High Level Thai',
  'TEL;TYPE=CELL,VOICE:+66968398305',
  'EMAIL;TYPE=INTERNET,WORK:ian@highlevelthai.com',
  'URL:https://www.highlevelthai.com/',
  'X-SOCIALPROFILE;TYPE=WhatsApp:https://wa.me/66968398305',
  'X-SOCIALPROFILE;TYPE=LINE:https://line.me/ti/p/5_UWYMe4nU',
];

const CARDS = [
  {
    id: 'ian',
    dir: 'card',
    title: 'Ian Turton | High Level Thai',
    appTitle: 'Ian · HLT',
    manifestName: 'Ian Turton | High Level thAI',
    copy: {
      th: { ...COMMON.th, name: 'Ian Turton' },
      en: { ...COMMON.en, name: 'Ian Turton', save: 'Save Ian’s contact' },
    },
    showCompany: true,
    vcfName: 'Ian-Turton-High-Level-Thai.vcf',
    vcf: vcard(['N:Turton;Ian;;;', 'FN:Ian Turton', ...CONTACT_LINES]),
  },
  {
    // No personal name anywhere (brief deliverable 2). The heading is the company, so the
    // company line under it is dropped rather than repeated. The email stays ian@ (brief).
    id: 'hlt',
    dir: 'card/hlt',
    title: 'High Level Thai',
    appTitle: 'HLT',
    manifestName: 'High Level thAI',
    copy: {
      th: { ...COMMON.th, name: 'High Level Thai' },
      en: { ...COMMON.en, name: 'High Level Thai', save: 'Save our contact' },
    },
    showCompany: false,
    vcfName: 'High-Level-Thai.vcf',
    vcf: vcard(['N:;;;;', 'FN:High Level Thai', 'X-ABShowAs:COMPANY', ...CONTACT_LINES]),
  },
];

const src = process.argv[2];
if (!src) {
  console.error('usage: node scripts/make-cards.mjs <Codex hlt-homescreen-prep/index.html>');
  process.exit(2);
}
const source = readFileSync(src, 'utf8');
const root = path.resolve('public');

// Each replacement must hit exactly once, or the script stops: a silent miss is how a card ships
// still pointing at WhatsApp.
function once(text, find, repl, label) {
  const hits = typeof find === 'string' ? text.split(find).length - 1 : (text.match(new RegExp(find.source, 'g')) || []).length;
  if (hits !== 1) throw new Error(`${label}: expected 1 match, found ${hits}`);
  return text.replace(find, repl);
}

const js = (v) => `'${String(v).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
const copyLiteral = (copy) =>
  '{' + ['th', 'en'].map((l) => `${l}:{` + Object.entries(copy[l]).map(([k, v]) => `${k}:${js(v)}`).join(',') + '}').join(',') + '}';

for (const card of CARDS) {
  const base = '/' + card.dir;
  let h = source;
  h = once(h, '<meta name="viewport" content="width=device-width,initial-scale=1">', '<meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex">', 'robots');
  h = once(h, '<meta name="apple-mobile-web-app-title" content="Ian · HLT">', `<meta name="apple-mobile-web-app-title" content="${card.appTitle}">`, 'app title');
  h = once(h, 'href="./apple-touch-icon.png"', 'href="/card/apple-touch-icon.png"', 'touch icon');
  h = once(h, 'href="./icon-192.png"', 'href="/card/icon-192.png"', 'icon');
  h = once(h, 'href="./card.webmanifest"', `href="${base}/card.webmanifest"`, 'manifest');
  h = once(h, '<title>Ian Turton | High Level Thai</title>', `<title>${card.title}</title>`, 'title');
  h = once(h, /\.draft\{[^}]*\}/, '', 'draft style');
  h = once(h, '<body><main>', `<body><main data-card="${card.id}">`, 'main marker');
  h = once(h, /<a class="fit" href="[^"]*">/, `<a class="fit" href="${BOOKING_URL}">`, 'fit href');
  h = once(h, /<a class="save" href="data:text\/vcard[^"]*" download="[^"]*"/, `<a class="save" href="${base}/${card.vcfName}" download="${card.vcfName}"`, 'vcard link');
  if (!card.showCompany) h = once(h, '<p class="company" data-copy="company"></p>', '', 'company line');
  h = once(h, /const copy=\{[\s\S]*?\};(?=\s*function render)/, `const copy=${copyLiteral(card.copy)};`, 'copy object');
  if (/draft/i.test(h)) throw new Error(`${card.id}: a draft string survived`);

  const manifest = {
    id: base,
    name: card.manifestName,
    short_name: card.appTitle,
    start_url: base,
    scope: base,
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0A1F44',
    icons: [
      { src: '/card/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/card/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  };

  const out = path.join(root, card.dir);
  mkdirSync(out, { recursive: true });
  writeFileSync(path.join(out, 'index.html'), h);
  writeFileSync(path.join(out, 'card.webmanifest'), JSON.stringify(manifest, null, 2) + '\n');
  writeFileSync(path.join(out, card.vcfName), card.vcf);
  console.log(`wrote ${path.relative(process.cwd(), out)}: index.html (${h.length} chars), card.webmanifest, ${card.vcfName}`);
}
