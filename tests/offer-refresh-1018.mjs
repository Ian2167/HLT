// tests/offer-refresh-1018.mjs — the fixture for the 18 October 2026 offer refresh (A-044).
//
// RUN:  node tests/offer-refresh-1018.mjs                 builds, then checks dist/
//       node tests/offer-refresh-1018.mjs --no-build      checks the dist/ already built
//       node tests/offer-refresh-1018.mjs --dist <dir>    checks another build (the "before" run)
//       add --release to also fail on any "[IAN: ...]" slot still in the site (go-live check)
// EXIT: 0 every check passed, 1 otherwise. No browser: it reads the prerendered HTML, the sitemap
// and the built JavaScript, so it runs in little memory.
//
// WHAT IT PROVES, one group per item of the brief:
//   change1   the home leads with the owner's goals; Understand / Diagnose / Improve in order
//   change2   the home's websites band; the Websites page is built, listed and linked
//   change3   /en/examples carries the map, the plan extract and the demonstration, each labelled
//   change4   the clinic's four steps and the supplier's five, in Ian's order, labelled illustration
//   change5   the six delivery stages in order; ownership, training, support, third-party costs
//   change6   the Business Read's 60 + 30 minute scope and one priority; one fee at Ian's price;
//             nothing says implementation is included
//   thai      the Thai home and Business Read are one language (English, lang="en", canonical to
//             /en, no Thai alternate, out of the sitemap's Thai entries); translated pages keep Thai
//   privacy   the confidentiality answer matches how the work is done; no compliance claim
//   schema    Service on the Business Read (no price, no person); breadcrumbs on the other pages
//   claims    across every public page: no name, no IWT link, no client, no result, no guarantee,
//             no address, the right LINE link and phone
//   motion    reduced motion is honoured in CSS and by framer-motion
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const REPO = process.cwd();
const distArg = args.indexOf('--dist');
const DIST = distArg >= 0 ? path.resolve(args[distArg + 1]) : path.join(REPO, 'dist');
const RELEASE = args.includes('--release');

if (!args.includes('--no-build') && distArg < 0) {
    const r = spawnSync('npx', ['vite', 'build'], { cwd: REPO, shell: true, stdio: 'inherit' });
    if (r.status !== 0) {
        console.error('BUILD FAILED');
        process.exit(1);
    }
}

const passes = [];
const failures = [];
const check = (ok, line) => (ok ? passes : failures).push(line);

const page = (url) => {
    const rel = url === '/' ? 'index.html' : path.join(...url.split('/').filter(Boolean), 'index.html');
    const file = path.join(DIST, rel);
    return existsSync(file) ? readFileSync(file, 'utf8') : '';
};
const body = (html) => {
    const m = html.match(/<div id="root">([\s\S]*)<\/div>\s*<\/body>/);
    return m ? m[1] : '';
};
const text = (html) =>
    body(html)
        .replace(/<script[\s\S]*?<\/script>/g, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&#x27;|&#39;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/\s+/g, ' ');
const inOrder = (hay, needles) => {
    let at = -1;
    for (const n of needles) {
        const i = hay.indexOf(n, at + 1);
        if (i < 0) return false;
        at = i;
    }
    return true;
};
const ldBlocks = (html) => [...body(html).matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => {
    try {
        return JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&'));
    } catch {
        return null;
    }
});
const THAI = /[฀-๿]/;

if (!existsSync(path.join(DIST, 'index.html'))) {
    console.log(`FAIL  no build at ${DIST}`);
    process.exit(1);
}

// ------------------------------------------------------------------ change 1: goals first
const enHome = text(page('/en'));
const enHomeH1 = (body(page('/en')).match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '';
check(/what you want the business to achieve/i.test(enHomeH1), `change1 home H1 leads with the owner's goals (H1: "${enHomeH1.replace(/<[^>]+>/g, '').slice(0, 70)}")`);
check(!/need you less/i.test(enHomeH1), 'change1 home H1 no longer starts from owner dependence');
check(inOrder(enHome, ['How we start', 'Understand', 'Diagnose', 'Improve']), 'change1 home shows Understand, Diagnose, Improve in order under "How we start"');
check(/one thing we check for/i.test(enHome), 'change1 work coming back to the owner is "one thing we check for", not the starting assumption');

// ------------------------------------------------------------------ change 2: websites
// 19 October 2026: the websites band became the first, largest card of "What can follow" (src/pages/Home.jsx).
check(/A new or improved website/.test(enHome), 'change2 home carries the websites offer');
check(/Before anyone spends more on advertising/.test(enHome), 'change2 home says the customer path comes before more advertising');
check(body(page('/en')).includes('href="/en/capabilities/websites"'), 'change2 home links to the Websites page');
const web = text(page('/en/capabilities/websites'));
check(web.length > 500, 'change2 /en/capabilities/websites is built');
check(['Design', 'Clear messaging', 'Enquiries', 'Follow-up'].every((w) => web.includes(w)), 'change2 Websites page plans design, messaging, enquiries and follow-up together');
check(/If you don't have a website yet/.test(web) && /If you have one that isn't working/.test(web), 'change2 Websites page covers a new site and improving an existing one');
const sitemap = existsSync(path.join(DIST, 'sitemap.xml')) ? readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8') : '';
check(sitemap.includes('<loc>https://www.highlevelthai.com/en/capabilities/websites</loc>'), 'change2 the Websites page is in the sitemap');

// ------------------------------------------------------------------ change 3: what a client receives
const exHtml = body(page('/en/examples'));
const ex = text(page('/en/examples'));
for (const [id, label, tag] of [
    ['sample-business-map', 'Sample business map', 'Example · invented business'],
    ['improvement-plan-extract', 'Improvement plan extract', 'Example · invented business'],
    ['website-demonstration', 'Website demonstration', 'Concept · invented clinic'],
]) {
    check(exHtml.includes(`id="${id}"`) && ex.includes(label) && ex.includes(tag), `change3 /en/examples shows the ${label.toLowerCase()}, tagged "${tag}"`);
}
check(/None of it comes from a client/.test(ex), 'change3 the examples say none of it comes from a client');
check(/nothing is booked and no message is sent/.test(ex), 'change3 the demonstration says nothing is booked or sent');
// 19 October 2026: the home SHOWS the map and the plan (SamplePreview) and links all three.
check(inOrder(enHome, ["A look at what you'd receive", 'Sample business map', 'The priority', 'Try the website demonstration']), 'change3 home shows the map and plan and links the three things a client receives');
check(!/cutting[- ]edge/i.test(enHome + ex), 'change3 no "cutting edge" claim');

// ------------------------------------------------------------------ change 4: the commercial path
check(inOrder(ex, ['A clinic', 'Finding the right service', 'Making contact', 'Arranging an appointment', 'Reception handover']), 'change4 the clinic path runs in Ian\'s four steps, in order');
const supplierSteps = ['Hotel enquiry', 'Sample or trial', 'Quotation', 'Supply', 'Repeat orders'];
const jsAll = readdirSync(path.join(DIST, 'assets')).filter((f) => f.endsWith('.js')).map((f) => readFileSync(path.join(DIST, 'assets', f), 'utf8')).join('\n');
// The supplier tab isn't the open one on the prerendered page, so its steps are read from the
// bundle, where the copy holds them in order.
check(ex.includes('A fragrance supplier to hotels') && inOrder(jsAll, supplierSteps.map((s) => `jrF${supplierSteps.indexOf(s) + 1}:"${s}"`)), 'change4 the supplier path carries its five steps, in order');
check(/They don't describe|Neither describes a system we've built/.test(ex), 'change4 the paths say they describe no built system');

// ------------------------------------------------------------------ change 5: delivery and ownership
const hiw = text(page('/en/how-it-works'));
check(inOrder(hiw, ['Discovery', 'Agreed scope', 'Design approval', 'Testing', 'Launch', 'Handover']), 'change5 How It Works shows the six delivery stages in order');
for (const w of ['What stays yours', 'You own it', 'Training', 'Support, if you want it', 'Third-party costs, shown first']) {
    check(hiw.includes(w), `change5 How It Works carries "${w}"`);
}
check(/agree what it covers and what it costs, separately/.test(hiw), 'change5 ongoing support is agreed separately');
const about = text(page('/en/about'));
check(about.includes('High Level Thai Ltd.') && about.includes('0835568013864'), 'change5 About keeps the company facts');
// Going live (18 Oct): the team section shows only once Ian's words fill the slot; a placeholder is
// never published. The slot itself stays in the copy for him.
check(!/\[IAN:/.test(about), 'change5 About publishes no placeholder (the team section waits for Ian\'s words)');

// ------------------------------------------------------------------ change 6: the Business Read
const br = text(page('/en/business-read'));
check(/starts with your goals/.test(br), 'change6 the Business Read starts with the owner\'s goals');
check(/An hour with you/.test(br) && /Up to 30 minutes with a manager/.test(br), 'change6 a 60-minute owner conversation and up to 30 minutes with a manager');
check(/One priority, one practical plan/.test(br), 'change6 a practical plan for one priority');
check(!/Sixty to ninety minutes|90 minutes, plus a second session|Two sessions, up to four people/.test(br), 'change6 no conflicting interview arrangement on the page');
check(/THB 22,500/.test(br) && !/THB 15,000|THB 37,500/.test(br), 'change6 one fee, THB 22,500 (Ian, 18 Oct), and no other tier price');
check(/aren't part of the Business Read/.test(br), 'change6 implementation, support, hosting, licences and marketing are said to be outside the Read');
check(!/(implementation|ongoing support|hosting|licen[cs]es?|marketing)[^.]{0,40}\b(is|are) included/i.test(br), 'change6 nothing claims implementation or support is included');

// ------------------------------------------------------------------ thai: one language per page
// Ian, 18 October 2026, on the live Thai home showing English: "Th translation toggle is not
// working"; then "A" (machine Thai now, Ann checks after). Every Thai address of a changed page
// must read Thai: lang="th", its own canonical with a Thai alternate, listed in the sitemap, and
// no English sentence left in the body. Product names and contact rails may stay in Latin script.
const LATIN_OK = new Set(
    'LINE WhatsApp Facebook Business Read High Level Thai HLT AI CRM Google Meet EN THB AIOS Audit Ltd PDPA'.split(' '),
);
const latinLeft = (t) =>
    // "The Business Read" is the product's name inside older Thai lines; Ian's slots are his to fill.
    (t.replace(/The Business Read|\[IAN:[^\]]*\]|[\w.+-]+@[\w.-]+|https?:\S+|\+?\d[\d ,.:/%-]*/g, ' ').match(/[A-Za-z][A-Za-z'’-]+/g) || []).filter((w) => !LATIN_OK.has(w));
const THAI_PAGES = ['/', '/business-read', '/how-it-works', '/problems-we-fix', '/who-we-help', '/about', '/contact', '/examples', '/capabilities/websites'];
for (const route of THAI_PAGES) {
    const html = page(route);
    const t = text(html);
    const lang = (html.match(/<html lang="([a-z-]+)"/) || [])[1];
    const canon = (html.match(/rel="canonical" href="([^"]+)"/) || [])[1];
    const self = `https://www.highlevelthai.com${route}`;
    const left = latinLeft(t);
    check(lang === 'th' && THAI.test(t), `thai ${route} is a Thai page (lang="${lang}")`);
    check(left.length === 0, `thai ${route} has no English left in its words (${left.length} Latin words: ${left.slice(0, 12).join(' ')})`);
    check(canon === self && /hreflang="th"/.test(html), `thai ${route} names itself as canonical and offers its Thai alternate`);
    check(sitemap.includes(`<loc>${self}</loc>`), `thai ${route} is listed in the sitemap`);
}
check(text(page('/examples')).includes('ตัวอย่างแผนผังธุรกิจ'), 'thai /examples carries the new sections in Thai');
check(text(page('/')).includes('เริ่มจากสิ่งที่คุณอยากให้ธุรกิจไปถึง'), 'thai / leads with the owner\'s goals in Thai');
check(text(page('/business-read')).includes('22,500 บาท'), 'thai /business-read shows the fee in Thai');
check(/UNREVIEWED MACHINE THAI/.test(readFileSync(path.join(DIST, '..', 'src', 'copy', 'offerRefreshTh1018.js'), 'utf8')), 'thai the Thai module is marked unreviewed for Ann');

// ------------------------------------------------------------------ privacy
check(!/Us, and nobody else/.test(br), 'privacy the "us, and nobody else" answer is gone');
check(/the tools we use to record, transcribe and write it up/.test(br), 'privacy the answer names the recording and drafting tools');
// /clinics is a retired, unlinked, noindex app-shell page, so it isn't prerendered; its source
// beside the build is read instead.
const clinicsSrc = path.join(DIST, '..', 'src', 'pages', 'Clinics.jsx');
const clinics = existsSync(clinicsSrc) ? readFileSync(clinicsSrc, 'utf8') : '';
check(/const SHOW_PDPA_CARD = false;/.test(clinics) && /SHOW_PDPA_CARD \?/.test(clinics), 'privacy the "PDPA Compliant" card on /clinics is off');

// ------------------------------------------------------------------ schema
const brLd = ldBlocks(page('/en/business-read')).filter(Boolean);
const svc = brLd.find((b) => b['@type'] === 'Service');
check(Boolean(svc), 'schema the Business Read carries a Service entry');
check(svc && !svc.offers && !svc.price && !JSON.stringify(svc).match(/Person|THB|\d{2},\d{3}/), 'schema the Service entry has no price, offer or person');
let crumbsOk = 0;
const crumbPages = ['/en/business-read', '/en/how-it-works', '/en/examples', '/en/about', '/en/contact', '/en/problems-we-fix', '/en/who-we-help', '/en/capabilities/websites'];
for (const p of crumbPages) if (ldBlocks(page(p)).some((b) => b && b['@type'] === 'BreadcrumbList')) crumbsOk += 1;
check(crumbsOk === crumbPages.length, `schema breadcrumbs on ${crumbsOk} of ${crumbPages.length} inner pages`);
check(ldBlocks(page('/en')).some((b) => b && b['@type'] === 'Organization'), 'schema the home keeps its Organization entry');

// ------------------------------------------------------------------ claims, across every public page
const walk = (dir) => readdirSync(dir).flatMap((f) => (statSync(path.join(dir, f)).isDirectory() ? walk(path.join(dir, f)) : [path.join(dir, f)]));
const htmlFiles = walk(DIST).filter((f) => f.endsWith('index.html'));
const all = htmlFiles.map((f) => text(readFileSync(f, 'utf8'))).join('\n');
const allRaw = htmlFiles.map((f) => readFileSync(f, 'utf8')).join('\n');
const banned = [
    [/\bIan\b|Turton/, 'Ian\'s name'],
    [/ianwturton/i, 'an IWT link'],
    [/testimonial/i, 'a testimonial'],
    [/guarantee/i, 'a guarantee'],
    [/GDPR|PDPA[- ]compliant|compliant with/i, 'a compliance claim'],
    [/\branking\b|rank (first|top|#)/i, 'a ranking promise'],
    // Not preceded by a word character, so the email address ian@highlevelthai.com doesn't count.
    [/(^|[^\w.])@highlevelthai\b/, 'the @highlevelthai ID'],
];
for (const [re, what] of banned) {
    const m = all.match(re);
    check(!m, `claims no ${what} on any public page${m ? ` (found "${m[0]}")` : ''}`);
}
// CLIENT NAMES AND CLIENT PRICES ARE NEVER WRITTEN IN THIS REPO: it is public. They live in a
// private list in the business estate, read here when present. Absent, the run says so, plainly.
const PRIVATE = process.env.HLT_PRIVATE_TERMS || 'C:/Projects/hlt-estate/02-builds/hlt-site-kit/private-banned-terms.json';
if (existsSync(PRIVATE)) {
    const { terms } = JSON.parse(readFileSync(PRIVATE, 'utf8'));
    for (const { pattern, what } of terms) {
        const hit = new RegExp(pattern, 'i').test(all);
        check(!hit, `claims no ${what} on any public page (private list)`);
    }
} else {
    console.log(`note  private term list not found at ${PRIVATE}: client names and prices NOT CHECKED`);
}
check(allRaw.includes('https://lin.ee/YQMkWI3') && !/line\.me\/ti\/p\/(VsfoVdvbUf|5_UWYMe4nU)/.test(allRaw), 'claims LINE buttons use lin.ee/YQMkWI3');
check(/66968398305|\+66 96 839 8305/.test(allRaw), 'claims the phone is +66 96 839 8305');
check(!/Interchange 21|Soi \d|Moo \d|\b77110\b/.test(all), 'claims no street address');
const slots = (all.match(/\[IAN:[^\]]*\]/g) || []).length;
if (RELEASE) check(slots === 0, `release no "[IAN: ...]" slot left in the site (found ${slots})`);
else console.log(`note  ${slots} "[IAN: ...]" slot(s) in the built site; --release fails until Ian fills them`);

// ------------------------------------------------------------------ motion
const css = readdirSync(path.join(DIST, 'assets')).filter((f) => f.endsWith('.css')).map((f) => readFileSync(path.join(DIST, 'assets', f), 'utf8')).join('\n');
check(/prefers-reduced-motion:\s*reduce/.test(css), 'motion the CSS honours prefers-reduced-motion');
check(/reducedMotion:"user"/.test(jsAll), 'motion framer-motion follows the visitor\'s reduced-motion setting');

// ------------------------------------------------------------------ wow (Ian, 18 October: "add the wow factor")
const homeBody = body(page('/en'));
check((homeBody.match(/class="hero-flow-row/g) || []).length === 4 && /One enquiry, followed through/.test(enHome) && /Illustration/.test(enHome), 'wow the hero carries the four-row "one enquiry, followed through" card, labelled Illustration');
check(/@keyframes flowRowIn/.test(css) && /\.hero-flow-row\{[^}]*animation/.test(css.replace(/\s+/g, '')), 'wow the hero card animates in CSS, with no script');
check(/animation-delay:\s*0ms\s*!important/.test(css), 'wow reduced motion shows the finished hero card at once (delays reset)');
check(/\.press:active\{transform:scale\(\.97\)\}/.test(css.replace(/\s+/g, '')), 'wow buttons give press feedback');
check((homeBody.match(/navy-glow/g) || []).length >= 2, 'wow the navy bands carry the soft glow');
check(/Play the walkthrough/.test(ex), 'wow the website demonstration can play itself');
check(/html\[lang=th\] \[class\*="tracking-\["\]\{letter-spacing:normal\}/.test(css), 'thai spaced labels keep normal letter-spacing on Thai pages');
check(/to fix first/.test(ex) && /animate-ping/.test(exHtml), 'wow the business map shows its summary and pulses the fix-first dots');
check(/origin-left rounded-full bg-gradient-to-r from-indigo-600 to-rose-500/.test(exHtml), 'wow the sales path has a progress rail');

// ------------------------------------------------------------------ result
for (const p of passes) console.log(`PASS  ${p}`);
for (const f of failures) console.log(`FAIL  ${f}`);
console.log(`RESULT ${passes.length} pass, ${failures.length} fail · dist ${DIST} · ${new Date().toISOString()}`);
process.exit(failures.length ? 1 : 0);
