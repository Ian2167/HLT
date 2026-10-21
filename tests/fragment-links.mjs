// tests/fragment-links.mjs — every cross-page "#" link lands on its section, under the header.
// Added 19 October 2026: the home card linking to /en/examples#website-demonstration landed at
// scrollY 0, even when the address was opened directly (src/components/ScrollToTop.jsx reset it).
//
// RUN:  node tests/fragment-links.mjs            (after a build; serves dist/)
//       node tests/fragment-links.mjs --base <url> to check a deployed preview
// EXIT: 0 every check passed, 1 otherwise.
//
// FOR EACH TARGET, in both languages, at a phone width and a laptop width:
//   direct   open the address with its hash; the section's top sits below the fixed header and
//            within reach of it (or the page is scrolled as far as it goes)
//   click    open the page that links to it, click the link, same check
// A deliberately missing id is checked too, so the probe is proved able to fail.
import path from 'node:path';
import { resolvePlaywright } from '../scripts/lib/playwright.mjs';
import { serveDist } from '../scripts/lib/serve-dist.mjs';

const args = process.argv.slice(2);
const baseArg = args.indexOf('--base');
const server =
    baseArg >= 0 ? { url: args[baseArg + 1].replace(/\/$/, ''), close: async () => {} } : await serveDist(path.join(process.cwd(), 'dist'));
const { chromium } = await resolvePlaywright();
const browser = await chromium.launch({ channel: 'chrome' }).catch(() => chromium.launch());

// [source page, link href ending, target page, target id]. Routes are language-free.
// 20 October 2026: the home's three links into /examples lived in the sample preview, which Ian has
// held (SHOW_SAMPLE_PREVIEW = false), so they no longer render. The home's cross-page link now
// checked is the Money Lost card, which lands on /problems-we-fix#revenue-capture.
const LINKS = [
    ['/', '/problems-we-fix#revenue-capture', '/problems-we-fix', 'revenue-capture'],
    ['/business-read', '/examples#sample-business-map', '/examples', 'sample-business-map'],
    ['/capabilities/websites', '/how-it-works#delivery', '/how-it-works', 'delivery'],
    ['/capabilities/websites', '/examples#website-demonstration', '/examples', 'website-demonstration'],
];
const EXTRA_DIRECT = [
    ['/examples', 'improvement-plan-extract'],
    ['/problems-we-fix', 'revenue-capture'],
    ['/problems-we-fix', 'where-ai-fits'],
];
const WIDTHS = [
    { name: 'phone', width: 390, height: 844 },
    { name: 'laptop', width: 1366, height: 800 },
];
const localPath = (route, lang) => (lang === 'en' ? (route === '/' ? '/en' : `/en${route}`) : route);

let pass = 0;
let fail = 0;
const check = (ok, label) => {
    if (ok) pass += 1;
    else fail += 1;
    console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}`);
};

// Where the section sits, after the page has settled.
async function landing(page, id) {
    await page.waitForTimeout(900);
    return page.evaluate((targetId) => {
        const el = document.getElementById(targetId);
        const nav = document.querySelector('nav');
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        return {
            found: Boolean(el),
            top: el ? Math.round(el.getBoundingClientRect().top) : null,
            navBottom: nav ? Math.round(nav.getBoundingClientRect().bottom) : 0,
            scrollY: Math.round(window.scrollY),
            atBottom: Math.round(window.scrollY) >= maxScroll - 2,
        };
    }, id);
}

const landed = (r) => r.found && r.scrollY > 0 && r.top >= r.navBottom - 2 && (r.top <= r.navBottom + 90 || r.atBottom);
const describe = (r) => `top ${r.top}px, header ends ${r.navBottom}px, scrollY ${r.scrollY}`;

for (const size of WIDTHS) {
    const context = await browser.newContext({ viewport: { width: size.width, height: size.height } });
    const page = await context.newPage();
    for (const lang of ['en', 'th']) {
        const direct = [...LINKS.map(([, , route, id]) => [route, id]), ...EXTRA_DIRECT];
        const seen = new Set();
        for (const [route, id] of direct) {
            const url = `${server.url}${localPath(route, lang)}#${id}`;
            if (seen.has(url)) continue;
            seen.add(url);
            await page.goto(url, { waitUntil: 'load' });
            const r = await landing(page, id);
            check(landed(r), `direct ${size.name} ${localPath(route, lang)}#${id}: ${describe(r)}`);
        }
        for (const [source, hrefEnd, route, id] of LINKS) {
            await page.goto(`${server.url}${localPath(source, lang)}`, { waitUntil: 'load' });
            const want = localPath(hrefEnd.split('#')[0], lang) + '#' + hrefEnd.split('#')[1];
            const link = page.locator(`a[href="${want}"]`).first();
            if ((await link.count()) === 0) {
                check(false, `click ${size.name} ${localPath(source, lang)} has a link to ${want}`);
                continue;
            }
            await link.scrollIntoViewIfNeeded();
            await link.click();
            await page.waitForURL((u) => u.pathname === localPath(route, lang) && u.hash === `#${id}`, { timeout: 5000 }).catch(() => {});
            const r = await landing(page, id);
            check(landed(r), `click ${size.name} ${localPath(source, lang)} -> ${want}: ${describe(r)}`);
        }
    }
    // The probe must be able to fail: a missing id never "lands".
    await page.goto(`${server.url}/en/examples#no-such-section`, { waitUntil: 'load' });
    const missing = await landing(page, 'no-such-section');
    check(!landed(missing), `control ${size.name}: a missing id is reported as not landed`);
    await context.close();
}

await browser.close();
await server.close();
console.log(`RESULT ${pass} pass, ${fail} fail`);
process.exit(fail ? 1 : 0);
