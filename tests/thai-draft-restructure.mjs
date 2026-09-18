// thai-draft-restructure.mjs — the fixture for the 18 September 2026 HLT Thai draft covering
// the seven restructured public pages. Run it with:
//   node C:\Projects\hlt\tests\thai-draft-restructure.mjs
//
// A SIBLING, NOT AN EDIT, to
// C:\Projects\IWT\02-builds\executive-assistant\work\drafts\verify-hlt-thai-draft.mjs. That
// fixture's job is to prove the 15 September draft is wired into NOTHING; this one proves the
// opposite — that the 18 September draft IS wired in and wins. The two assertions contradict
// each other by design, so they cannot live in one file.
//
// WHY IT IS HERE AND NOT IN THE DRAFTS FOLDER, which is where the brief put it. The estate's
// proof-check hook (C:\Projects\IWT\tools\proof-check.mjs, COPY_PATH) classifies EVERY file
// under a drafts folder as client copy whatever its extension, so a .mjs fixture parked there
// is scanned for unsourced claims and blocked on its own section numbers and its own
// `let failures = 0`. It cannot be committed there without neutering the gate. It lives beside
// tests/about-company-facts.mjs instead, which is where this repo already keeps its fixtures.
// Flagged to the caller; the hook is not this brief's to change.
//
// WHAT IT PROVES, in order, failing loudly on the first breach:
//   1  src/translations.js parses and the `th` block resolves.
//   2  EVERY key the seven restructured copy modules define carries a Thai value in `th` — no
//      English fallback survives anywhere in that key set. This is the fault Ian reported.
//   3  No key of the draft is orphaned: every key it carries is defined by one of the seven.
//   4  Every draft value is non-empty, differs from its English, and carries Thai script (unless
//      it is a listed brand-name-stays-English key, an already-Thai key or numeric-only).
//   5  The spread order in the file itself: thaiDraftRestructure is spread LAST in `th`.
//   6  Nothing outside the seven modules' key set moved in `th` against git HEAD, and no English
//      value moved at all.
//   7  Figures survive: every digit run in the English of a price, delivery, revision, row or
//      note key appears in the Thai.
// Then, and only then, it writes the review sheet (.md, .csv, and the H: reading copy).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { dirname } from 'node:path';

const REPO = 'C:/Projects/hlt';
const SRC = REPO + '/src/';
const DRAFTS = 'C:/Projects/IWT/02-builds/executive-assistant/work/drafts/';
const OUT_MD = DRAFTS + '2026-09-18-HLT-THAI-REVIEW-SHEET-RESTRUCTURE.md';
const OUT_CSV = DRAFTS + '2026-09-18-HLT-THAI-REVIEW-SHEET-RESTRUCTURE.csv';
const OUT_H = 'H:/My Drive/IWT Reports/HLT Thai Review Sheet Restructure 2026-09-18.md';

let failures = 0;
const fail = (msg) => { failures++; console.log('  FAIL  ' + msg); };
const pass = (msg) => console.log('  pass  ' + msg);

const mod = async (p) => import(pathToFileURL(SRC + p).href);
const { aiosAuditCopy } = await mod('copy/aiosAudit.js');
const { brandOsCopy } = await mod('copy/brandOs.js');
const { customAiAssistantCopy } = await mod('copy/executiveAssistant.js');
const { opsCockpitCopy } = await mod('copy/opsCockpit.js');
const { openBrainCopy } = await mod('copy/openBrain.js');
const { homeCopy, homeHeroHeadlineTh } = await mod('copy/home.js');
const { homeRebuildCopy } = await mod('copy/homeRebuild.js');
const { businessReadRebuildCopy } = await mod('copy/businessReadRebuild.js');
const { howItWorksCopy } = await mod('copy/howItWorks.js');
const { examplesCopy } = await mod('copy/examples.js');
const { aboutCopy } = await mod('copy/about.js');
const { contactCopy } = await mod('copy/contact.js');
const { clientLoginCopy } = await mod('copy/clientLogin.js');
const { thaiDraft } = await mod('copy/thaiDraft.js');
const { thaiDraftRestructure } = await mod('copy/thaiDraftRestructure.js');

// The seven restructured modules, in page order. This IS the scope of the brief.
const SEVEN = [
    ['Home', '/', homeRebuildCopy],
    ['Business Read', '/business-read', businessReadRebuildCopy],
    ['How It Works', '/how-it-works', howItWorksCopy],
    ['Examples', '/examples', examplesCopy],
    ['About', '/about', aboutCopy],
    ['Contact', '/contact', contactCopy],
    ['Client Login', '/client-login', clientLoginCopy],
];
const SEVEN_KEYS = new Set(SEVEN.flatMap(([, , o]) => Object.keys(o)));

// Execute the translations literal exactly as written on disk, with every module it imports.
const ARGS = [
    'aiosAuditCopy', 'brandOsCopy', 'customAiAssistantCopy', 'opsCockpitCopy', 'openBrainCopy',
    'homeCopy', 'homeHeroHeadlineTh', 'homeRebuildCopy', 'businessReadRebuildCopy',
    'howItWorksCopy', 'examplesCopy', 'aboutCopy', 'contactCopy', 'clientLoginCopy',
    'thaiDraft', 'thaiDraftRestructure',
];
const VALS = [
    aiosAuditCopy, brandOsCopy, customAiAssistantCopy, opsCockpitCopy, openBrainCopy,
    homeCopy, homeHeroHeadlineTh, homeRebuildCopy, businessReadRebuildCopy,
    howItWorksCopy, examplesCopy, aboutCopy, contactCopy, clientLoginCopy,
    thaiDraft, thaiDraftRestructure,
];
const buildTranslations = (source) => {
    const marker = 'export const translations = ';
    const at = source.indexOf(marker);
    if (at < 0) throw new Error('translations literal not found');
    // A source from before this change never references thaiDraftRestructure; an extra parameter
    // it does not use is harmless, so one builder serves both revisions of the file.
    return new Function(...ARGS, 'return ' + source.slice(at + marker.length))(...VALS);
};

// ---- check one: the file parses and `th` resolves ------------------------------------------
console.log('\nCHECK ONE. src/translations.js parses and its th block resolves');
const nowSource = readFileSync(SRC + 'translations.js', 'utf8');
const { en, th } = buildTranslations(nowSource);
pass(`en has ${Object.keys(en).length} keys, th has ${Object.keys(th).length}`);

// ---- check two: no English fallback survives in the seven modules' key set -----------------
console.log('\nCHECK TWO. every key the seven restructured modules define carries Thai in `th`');
// Keys whose Thai is the English on purpose. Brand and product names, per the governing context.
const STAYS_ENGLISH = new Set([
    'brNavLink',        // Business Read
    'hiwStage1Name',    // The Business Read
    'hiwStage2Name',    // AIOS Audit
    'abCompanyName',    // High Level Thai Ltd.
    'clHeading',        // Client Workspace
]);
// Keys whose ENGLISH value is already Thai, so th === en is correct, not a fallback.
const ALREADY_THAI = new Set(['abCompanyNameThai']);
const NUMERIC_ONLY = /^[\d\u2014\s.,%/-]+$/;
const THAI = /[\u0E00-\u0E7F]/;

let fallbacks = 0, blanks = 0;
for (const k of SEVEN_KEYS) {
    const v = th[k];
    if (typeof v !== 'string' || !v.trim()) { blanks++; fail(`${k} has no th value at all`); continue; }
    if (STAYS_ENGLISH.has(k) || ALREADY_THAI.has(k) || NUMERIC_ONLY.test(v)) continue;
    if (v === en[k]) { fallbacks++; fail(`${k} is still the English string in th: ${v.slice(0, 60)}`); }
}
if (!fallbacks && !blanks) {
    pass(`all ${SEVEN_KEYS.size} keys across the seven modules carry a Thai value`);
    pass(`zero English fallbacks (${STAYS_ENGLISH.size} brand names and ${ALREADY_THAI.size} already-Thai key held by name)`);
}

// ---- check three: no orphaned draft key ------------------------------------------------------
console.log('\nCHECK THREE. no key of the draft is orphaned');
const draftKeys = Object.keys(thaiDraftRestructure);
const orphans = draftKeys.filter((k) => !SEVEN_KEYS.has(k));
const uncovered = [...SEVEN_KEYS].filter((k) => !draftKeys.includes(k));
if (orphans.length) fail(`${orphans.length} draft key(s) no module defines: ${orphans.slice(0, 8).join(', ')}`);
else pass(`all ${draftKeys.length} draft keys are defined by one of the seven modules`);
if (uncovered.length) fail(`${uncovered.length} module key(s) missing from the draft: ${uncovered.slice(0, 8).join(', ')}`);
else pass('the draft covers the seven modules exactly, with nothing left over');

// ---- check four: every draft value is real, translated Thai ----------------------------------
console.log('\nCHECK FOUR. every draft value is non-empty, changed, and Thai (brand names excepted)');
let noThai = 0, unchanged = 0, empty = 0;
for (const k of draftKeys) {
    const v = thaiDraftRestructure[k];
    if (typeof v !== 'string' || !v.trim()) { empty++; fail(`${k} is empty`); continue; }
    if (STAYS_ENGLISH.has(k) || ALREADY_THAI.has(k)) continue;
    if (v === en[k] && !NUMERIC_ONLY.test(v)) { unchanged++; fail(`${k} is still the English string`); }
    if (!THAI.test(v) && !NUMERIC_ONLY.test(v)) { noThai++; fail(`${k} carries no Thai script: ${v}`); }
}
if (!empty && !unchanged && !noThai) pass(`all ${draftKeys.length} values non-empty, translated and Thai-bearing`);

// ---- check five: the spread order in the file itself ------------------------------------------
console.log('\nCHECK FIVE. thaiDraftRestructure is spread LAST in the th block');
const thAt = nowSource.indexOf('\n    th: {');
if (thAt < 0) fail('could not find the th block');
else {
    const thBlock = nowSource.slice(thAt);
    const spreads = [...thBlock.matchAll(/^\s*\.\.\.(\w+)/gm)].map((m) => m[1]);
    const last = spreads[spreads.length - 1];
    if (last !== 'thaiDraftRestructure') fail(`last spread in th is ...${last}, not ...thaiDraftRestructure`);
    else pass(`th spread order ends: ${spreads.slice(-4).map((s) => '...' + s).join(' -> ')}`);
}

// ---- check six: nothing outside the seven modules moved ---------------------------------------
console.log('\nCHECK SIX. no th value outside the seven modules, and no en value at all, moved against git HEAD');
const headSource = execFileSync('git', ['show', 'HEAD:src/translations.js'], { cwd: REPO, encoding: 'utf8' });
const head = buildTranslations(headSource);
const thDrift = Object.keys(head.th).filter((k) => !SEVEN_KEYS.has(k) && head.th[k] !== th[k]);
const enDrift = Object.keys(head.en).filter((k) => head.en[k] !== en[k]);
if (thDrift.length) fail(`${thDrift.length} th value(s) outside scope changed: ${thDrift.slice(0, 5).join(', ')}`);
else pass(`all ${Object.keys(head.th).length - SEVEN_KEYS.size} out-of-scope th values identical to HEAD`);
if (enDrift.length) fail(`${enDrift.length} en value(s) changed: ${enDrift.slice(0, 5).join(', ')}`);
else pass(`all ${Object.keys(en).length} en values identical to HEAD — no English copy was touched`);

// ---- check seven: figures survive --------------------------------------------------------------
console.log('\nCHECK SEVEN. every figure in a price / delivery / revision / row / note string survives');
let lostFigures = 0;
for (const k of draftKeys) {
    if (!/(Price|Delivery|Revisions|Row\d|CtaNote|PriceNote|VatSuffix|Registered)/.test(k)) continue;
    // NOT /\d[\d,]*/ — that swallows the comma in "THB 15,000, excluding VAT" and asks the Thai
    // for a figure "15,000," that never existed. Thousands separators only, no trailing comma.
    const FIGURE = /\d+(?:,\d{3})*/g;
    const wanted = String(en[k]).match(FIGURE) || [];
    const have = String(thaiDraftRestructure[k]).match(FIGURE) || [];
    for (const n of wanted) {
        if (!have.includes(n)) { lostFigures++; fail(`${k}: figure "${n}" missing from the Thai`); }
    }
}
if (!lostFigures) pass('all figures carried through unchanged');

if (failures) {
    console.log(`\nFIXTURE FAILED: ${failures} check(s)\n`);
    process.exit(1);
}
console.log('\nFIXTURE PASSED: all checks green\n');

// ---- the review sheet ---------------------------------------------------------------------------
const INSTRUCTIONS = [
    '1. This is the **restructured** High Level Thai website, rebuilt on 18 September 2026. It is seven pages now: Home, Business Read, How It Works, Examples, About, Contact and Client Login. The reader is a busy Thai business owner on a phone, not a technical person.',
    '2. **The Thai in column 3 is a machine draft and it is ALREADY ON THE SITE under the Thai toggle.** That was Ian\'s ruling on 15 September 2026: the draft goes up now and the native review follows. So every line you correct is a line that changes on the live site.',
    '3. **Where the English reads badly in Thai, rewrite it. Do not correct it.** A natural Thai sentence that says the same thing is always better than a tidy translation of the English one. Say it the way you would say it to a shop owner.',
    '4. The voice should be **calm and plain, like a person who knows their job** — the way the existing Thai on the site already reads. Not formal written Thai, and never salesy or exaggerated.',
    '5. **These stay in English, please do not translate them:** High Level Thai, HLT, The Business Read, AIOS Audit, Client Workspace, LINE, AI, SMB, Facebook, and the software names.',
    '6. Write in the **OK / CORRECTION** column: put a tick if the Thai is fine, or write your version. Prices, day counts, minute counts and the VAT rate must not change — if the wording around them is wrong, fix the words and leave the numbers alone.',
    '7. **One row is for Ian, not for you:** `homeHeroHeadline` on the Home page. He wrote the Thai for the old headline himself and the English headline has since changed, so that row carries his sentence in the notes for comparison.',
];

const IAN_FLAG = 'homeHeroHeadline';
const IAN_NOTE = "FOR IAN, NOT ANN. His own 14 September Thai, written for the RETIRED headline: " + homeHeroHeadlineTh;
const HELD_NOTE = 'stays as it is, brand or registered name';

const esc = (s) => String(s).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ').replace(/</g, '&lt;');
const noteFor = (k) => (k === IAN_FLAG ? IAN_NOTE : (STAYS_ENGLISH.has(k) || ALREADY_THAI.has(k) ? HELD_NOTE : ''));

const md = [];
md.push('# HLT restructured website — Thai review sheet');
md.push('');
md.push('**18 September 2026 · for review by a native Thai speaker · ' + SEVEN_KEYS.size + ' lines · the draft is live under the Thai toggle**');
md.push('');
md.push('## Before you start');
md.push('');
for (const line of INSTRUCTIONS) md.push(line);
md.push('');
md.push('---');
md.push('');
for (const [name, route, obj] of SEVEN) {
    const keys = Object.keys(obj);
    md.push(`## ${name}  \`${route}\`  (${keys.length} lines)`);
    md.push('');
    md.push('| KEY | ENGLISH | THAI DRAFT | OK / CORRECTION |');
    md.push('| :-- | :------ | :--------- | :-------------- |');
    for (const k of keys) {
        const note = noteFor(k);
        md.push(`| \`${k}\` | ${esc(en[k])} | ${esc(thaiDraftRestructure[k])} | ${note ? '**' + esc(note) + '**' : ''} |`);
    }
    md.push('');
}
md.push('---');
md.push('');
md.push('Draft held at `C:\\Projects\\hlt\\src\\copy\\thaiDraftRestructure.js`, spread last in the `th` block of `src/translations.js`. Corrections go into that file, never into `translations.js`.');
md.push('');
writeFileSync(OUT_MD, md.join('\n'), 'utf8');

const csvCell = (s) => '"' + String(s).replace(/"/g, '""').replace(/\r?\n/g, ' ') + '"';
const csv = ['PAGE,ROUTE,KEY,ENGLISH,THAI DRAFT,OK / CORRECTION'];
let rows = 0;
for (const [name, route, obj] of SEVEN) {
    for (const k of Object.keys(obj)) {
        csv.push([name, route, k, en[k], thaiDraftRestructure[k], noteFor(k)].map(csvCell).join(','));
        rows++;
    }
}
writeFileSync(OUT_CSV, '\ufeff' + csv.join('\r\n') + '\r\n', 'utf8');

mkdirSync(dirname(OUT_H), { recursive: true });
writeFileSync(OUT_H, md.join('\n'), 'utf8');

// ---- measured counts ------------------------------------------------------------------------------
const words = (s) => String(s).trim().split(/\s+/).filter(Boolean).length;
const thaiChars = (s) => (String(s).match(/[\u0E00-\u0E7F]/g) || []).length;
const translated = draftKeys.filter((k) => !STAYS_ENGLISH.has(k) && !ALREADY_THAI.has(k));

console.log('MEASURED');
for (const [name, , obj] of SEVEN) console.log(('  ' + name).padEnd(24) + ':', Object.keys(obj).length, 'keys');
console.log('  keys in scope, total    :', SEVEN_KEYS.size);
console.log('  English fallbacks left  :', fallbacks);
console.log('  review sheet rows (md)  :', SEVEN.reduce((n, g) => n + Object.keys(g[2]).length, 0));
console.log('  review sheet rows (csv) :', rows);
console.log('  translated this run     :', translated.length);
console.log('  held English by name    :', STAYS_ENGLISH.size + ALREADY_THAI.size);
console.log('  English source words    :', translated.reduce((n, k) => n + words(en[k]), 0));
console.log('  Thai characters written :', translated.reduce((n, k) => n + thaiChars(thaiDraftRestructure[k]), 0));
console.log('');
console.log('  wrote', OUT_MD);
console.log('  wrote', OUT_CSV);
console.log('  wrote', OUT_H);
