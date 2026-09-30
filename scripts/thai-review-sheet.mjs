// scripts/thai-review-sheet.mjs — Ann's review sheet for the 30 September 2026 machine Thai draft.
//
// RUN:  node scripts/thai-review-sheet.mjs        (from C:\Projects\hlt)
// Reads src/copy/visibilityRefresh.js, pairs every Thai value with its English, groups the pairs
// by page, and writes the sheet as Markdown and CSV to the HLT estate, plus a reading copy on H:.
// The sheet is generated from the module so it can never drift from what the site renders; Ann's
// corrections go back INTO the module's visibilityRefreshTh, never into the sheet.
//
// The one row that is Ian's rather than Ann's, the hero headline, is marked as such, as the
// 18 September sheet marked its predecessor.
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const REPO = process.cwd();
const { visibilityRefreshCopy, visibilityRefreshTh } = await import(pathToFileURL(path.join(REPO, 'src', 'copy', 'visibilityRefresh.js')).href);

const OUT_DIR = 'C:/Projects/hlt-estate/02-builds/hlt-site-kit/copy';
const OUT_MD = path.join(OUT_DIR, '2026-09-30-HLT-THAI-REVIEW-SHEET-VISIBILITY-REFRESH.md');
const OUT_CSV = path.join(OUT_DIR, '2026-09-30-HLT-THAI-REVIEW-SHEET-VISIBILITY-REFRESH.csv');
const OUT_H = 'H:/My Drive/IWT Reports/HLT Thai Review Sheet Visibility Refresh 2026-09-30.md';

const GROUPS = [
    ['Header and navigation', /^(homeNavHome|hiwNavLink|brNavLink|blindNavLink|odNavLink|aboutNavLink|huaHinNavLink|exNavLink|contactNavLink|navCtaLabel|navTalkLabel|langLabel)/],
    ['Footer', /^footer/],
    ['Home page', /^home/],
    ['The Business Read page', /^br/],
    ['Hua Hin page', /^huahin/],
    ['Owner Dependency page', /^od/],
    ['Business Blindspots page', /^blind/],
    ['About page', /^ab/],
    ['Contact page', /^ct/],
    ['Legal placeholders', /^(terms|privacy|pdpa|cookies|legal)/],
    ['Other pages', /./],
];

const IAN_ROWS = new Set(['homeHeroHeadline']);
const KEEP_ENGLISH = (v) => !/[\u0E00-\u0E7F]/.test(v);

const keys = Object.keys(visibilityRefreshTh);
const missing = Object.keys(visibilityRefreshCopy).filter((k) => !(k in visibilityRefreshTh));
const orphans = keys.filter((k) => !(k in visibilityRefreshCopy));
if (missing.length || orphans.length) {
    console.error(`FAIL: ${missing.length} English keys without Thai (${missing.slice(0, 5).join(', ')}); ${orphans.length} Thai keys without English (${orphans.slice(0, 5).join(', ')})`);
    process.exit(1);
}

const rows = keys.map((k) => ({ key: k, en: visibilityRefreshCopy[k], th: visibilityRefreshTh[k] }));
const grouped = new Map();
for (const r of rows) {
    const [name] = GROUPS.find(([, re]) => re.test(r.key));
    if (!grouped.has(name)) grouped.set(name, []);
    grouped.get(name).push(r);
}

const cell = (s) => String(s).replace(/\|/g, '\\|').replace(/\n/g, ' ');
const md = [];
md.push('# HLT Thai review sheet: the visibility refresh, 30 September 2026');
md.push('');
md.push(`**For Ann.** Every Thai line below is an UNREVIEWED MACHINE DRAFT written on 30 September 2026 for the site rebuild on branch cb/hlt-visibility-refresh, under Ian's Route 2 exception of 15 September (a machine draft may go on the site provided a native speaker reviews every line). Please correct the Thai column in place, in the way you would say it to a Hua Hin business owner, and send the file back. The English column is the copy as it stands; it is the meaning to keep, not the sentence shape.`);
md.push('');
md.push(`**One row is Ian's, not yours:** the home page hero headline (\`homeHeroHeadline\`). The draft stands until he gives his own Thai for "Build a business that needs you less."`);
md.push('');
md.push(`**"Business Read" stays in English inside Thai copy**, as the 18 September draft set; LINE, WhatsApp and EN are labels, not translations.`);
md.push('');
md.push(`Rows: ${rows.length}. Source: \`C:\\Projects\\hlt\\src\\copy\\visibilityRefresh.js\` (both objects). Corrections go back into that file's \`visibilityRefreshTh\`.`);
md.push('');
for (const [name, list] of grouped) {
    md.push(`## ${name}`);
    md.push('');
    md.push('| Key | English (the meaning) | Thai draft (correct this) | Note |');
    md.push('|---|---|---|---|');
    for (const r of list) {
        const note = IAN_ROWS.has(r.key) ? "Ian's own Thai wanted" : KEEP_ENGLISH(r.th) ? 'label, stays as is' : '';
        md.push(`| \`${r.key}\` | ${cell(r.en)} | ${cell(r.th)} | ${note} |`);
    }
    md.push('');
}
md.push('CLAIMS: every key in the module has both an English and a Thai value | class=state | source=this script, which refuses to write the sheet otherwise | checked=at generation | VERIFIED');

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_MD, md.join('\n') + '\n');
const csvCell = (s) => `"${String(s).replace(/"/g, '""')}"`;
writeFileSync(OUT_CSV, '\uFEFF' + ['key,english,thai_draft,thai_corrected,note', ...rows.map((r) => [r.key, r.en, r.th, '', IAN_ROWS.has(r.key) ? "Ian's own Thai wanted" : ''].map(csvCell).join(','))].join('\n') + '\n');
let hCopy = 'not written (H: not mounted)';
if (existsSync('H:/My Drive/IWT Reports')) {
    writeFileSync(OUT_H, md.join('\n') + '\n');
    hCopy = OUT_H;
}
console.log(`  ${rows.length} rows in ${grouped.size} groups`);
console.log(`  ${OUT_MD}`);
console.log(`  ${OUT_CSV}`);
console.log(`  ${hCopy}`);
