// tests/visibility-refresh.mjs — the acceptance harness for the 30 September 2026 visibility refresh
// (bridge row 4007's eight tests, Ian's correction pass of the same day, and the Stage 3 checks).
//
// RUN:  node tests/visibility-refresh.mjs        (from C:\Projects\hlt; builds first)
// EXIT: 0 every check passed, 1 otherwise. Prints PASS / FAIL per check and a summary.
//
// WHAT IT PROVES, against a real build served by `vite preview` and driven by a real browser:
//   static     every public page exists as prerendered HTML in both languages, with its own
//              title, description, canonical, three hreflang links and Open Graph; the English
//              copy is in the English file and the Thai in the Thai file, without JavaScript
//   sitemap    every indexable page in both languages is in sitemap.xml and nothing noindexed is
//   robots     robots.txt allows the site and names the sitemap; the placeholders carry noindex
//   hydrate    a prerendered page hydrates without a hydration error, keeps ONE title and ONE
//              canonical, and a client-side navigation swaps them cleanly
//   nav        the header's five links, the mobile menu's eight, and the footer's links all resolve
//              to the page they name, in the language of the page they were clicked on
//   toggle     EN | ไทย on every page leads to the same page in the other language
//   contact    every email, phone, WhatsApp and LINE link on the home page and the footer carries
//              the ruled destination (nothing is sent: hrefs are read, never followed)
//   address    no street address anywhere in the built site
//   legacy     the retired proposition does not appear on any public page
//   brand      favicon.ico, the manifest and the Open Graph image are served; no "lovable"
//              string anywhere in dist
//
// THE BROWSER DRIVER IS BORROWED (scripts/lib/playwright.mjs). No silent fallback.
import { spawn } from 'node:child_process';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { resolvePlaywright } from '../scripts/lib/playwright.mjs';
import { serveDist } from '../scripts/lib/serve-dist.mjs';

const REPO = process.cwd();
const DIST = path.join(REPO, 'dist');
const SITE = 'https://www.highlevelthai.com';
const NO_BUILD = process.argv.includes('--no-build');

const routes = await import(pathToFileURL(path.join(REPO, 'src', 'constants', 'routes.js')).href);
const { INDEXABLE_ROUTES, NOINDEX_ROUTES, PUBLIC_NAV, MOBILE_NAV, FOOTER_QUICK_LINKS, LEGAL_LINKS } = routes;
const { localPath } = await import(pathToFileURL(path.join(REPO, 'src', 'constants', 'lang.js')).href);

const passes = [];
const failures = [];
const check = (ok, line) => (ok ? passes : failures).push(line);

const run = (cmd, args, env = {}) =>
    new Promise((resolve, reject) => {
        const p = spawn(cmd, args, { cwd: REPO, shell: true, stdio: 'pipe', env: { ...process.env, ...env } });
        let out = '';
        p.stdout.on('data', (d) => (out += d));
        p.stderr.on('data', (d) => (out += d));
        p.on('close', (code) => (code === 0 ? resolve(out) : reject(new Error(`${cmd} ${args.join(' ')} exited ${code}\n${out.slice(-2000)}`))));
    });
const walk = (dir) => readdirSync(dir).flatMap((f) => (statSync(path.join(dir, f)).isDirectory() ? walk(path.join(dir, f)) : [path.join(dir, f)]));
const staticFile = (url) => path.join(DIST, ...url.split('/').filter(Boolean), 'index.html');

let preview;
try {
    console.log('HLT visibility refresh: acceptance harness');
    const pw = await resolvePlaywright();

    if (!NO_BUILD) {
        console.log('  building (with the prerender)...');
        await run('npx', ['vite', 'build']);
    }

    // ---------------------------------------------------------------- static files
    const allRoutes = [...INDEXABLE_ROUTES, ...NOINDEX_ROUTES];
    for (const route of allRoutes) {
        for (const code of ['th', 'en']) {
            const url = localPath(route, code);
            const file = staticFile(url);
            const exists = existsSync(file);
            check(exists, `static: ${url} is prerendered at ${path.relative(REPO, file)}`);
            if (!exists) continue;
            const html = readFileSync(file, 'utf8');
            check(html.includes(`<html lang="${code}">`), `static: ${url} declares lang="${code}"`);
            check((html.match(/<title[^>]*>/g) || []).length === 1, `static: ${url} has exactly one <title>`);
            check((html.match(/rel="canonical"/g) || []).length === 1 && html.includes(`rel="canonical" href="${SITE}${url}"`), `static: ${url} has one canonical, itself`);
            check(html.includes(`hreflang="th" href="${SITE}${route === '/' ? '' : route}`), `static: ${url} carries the Thai hreflang`);
            check(html.includes(`hreflang="en" href="${SITE}${localPath(route, 'en')}"`), `static: ${url} carries the English hreflang`);
            check(html.includes('hreflang="x-default"'), `static: ${url} carries x-default`);
            check(html.includes('property="og:image"') && html.includes('/brand/og-image.png'), `static: ${url} carries the Open Graph image`);
            check(html.includes('window.__PRERENDERED__=true'), `static: ${url} carries the prerender flag`);
            const rootText = html.slice(html.indexOf('<div id="root">'), html.indexOf('</body>')).replace(/<[^>]+>/g, ' ');
            // Header and footer alone weigh about 700 characters of text; a page with copy is
            // well past that, and a placeholder page is a little past it.
            check(rootText.length > 900, `static: ${url} body carries copy without JavaScript (${rootText.length} chars)`);
            if (code === 'en') check(/Business Read/.test(rootText) && !/เริ่มต้นด้วย/.test(rootText), `static: ${url} is in English`);
            if (code === 'th') check(/[\u0E00-\u0E7F]/.test(rootText), `static: ${url} is in Thai`);
            const noindexExpected = NOINDEX_ROUTES.includes(route);
            check(html.includes('name="robots" content="noindex"') === noindexExpected, `static: ${url} ${noindexExpected ? 'carries' : 'does not carry'} noindex`);
        }
    }
    check(existsSync(path.join(DIST, 'app.html')) && readFileSync(path.join(DIST, 'app.html'), 'utf8').includes('<div id="root"></div>'), 'static: app.html is the empty shell for the SPA fallback');

    // ---------------------------------------------------------------- sitemap and robots
    const sitemap = readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
    for (const route of INDEXABLE_ROUTES) for (const code of ['th', 'en']) check(sitemap.includes(`<loc>${SITE}${localPath(route, code)}</loc>`), `sitemap: lists ${localPath(route, code)}`);
    for (const route of NOINDEX_ROUTES) check(!sitemap.includes(`<loc>${SITE}${route}</loc>`), `sitemap: does not list ${route}`);
    const robots = readFileSync(path.join(DIST, 'robots.txt'), 'utf8');
    check(/Allow: \//.test(robots) && robots.includes(`Sitemap: ${SITE}/sitemap.xml`), 'robots: allows the site and names the sitemap');

    // ---------------------------------------------------------------- brand and hygiene
    check(existsSync(path.join(DIST, 'favicon.ico')) && statSync(path.join(DIST, 'favicon.ico')).size > 1000, 'brand: favicon.ico is served');
    check(existsSync(path.join(DIST, 'site.webmanifest')), 'brand: site.webmanifest is served');
    check(existsSync(path.join(DIST, 'brand', 'og-image.png')), 'brand: og-image.png is served');
    const distFiles = walk(DIST).filter((f) => /\.(html|js|css|json|xml|txt|webmanifest|svg)$/.test(f));
    const lovable = distFiles.filter((f) => /lovable/i.test(readFileSync(f, 'utf8')));
    check(lovable.length === 0, `brand: zero files in dist mention lovable (${lovable.length} found)`);
    const htmlFiles = distFiles.filter((f) => f.endsWith('.html'));
    const addressHits = htmlFiles.filter((f) => /Interchange 21|\bSoi\b|Tambon|Prachuap|Sukhumvit/i.test(readFileSync(f, 'utf8')));
    check(addressHits.length === 0, `address: no street address in any built page (${addressHits.length} hits)`);
    // The retired proposition, in the words the spec quotes and the words the old head carried.
    const legacyHits = htmlFiles.filter((f) => /customers are being lost|missed-call recovery|Operational Systems for Premium|find where customers are/i.test(readFileSync(f, 'utf8')));
    check(legacyHits.length === 0, `legacy: the retired proposition appears on no prerendered page (${legacyHits.length} hits)`);
    const personHits = htmlFiles.filter((f) => /Ian W Turton|Turton/i.test(readFileSync(f, 'utf8')));
    check(personHits.length === 0, `rule: no page names Ian (${personHits.length} hits)`);

    // ---------------------------------------------------------------- the browser
    // Served the way Vercel serves it (scripts/lib/serve-dist.mjs), not by vite preview, which
    // answers /en with the root page and manufactures a hydration error that does not exist.
    preview = await serveDist(DIST);
    const base = preview.url;
    const browser = await pw.chromium.launch();

    // hydrate: the English home, prerendered, hydrates cleanly and keeps one head.
    {
        const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
        const errors = [];
        page.on('console', (m) => {
            if (m.type() === 'error') errors.push(m.text());
        });
        page.on('pageerror', (e) => errors.push(String(e)));
        await page.goto(`${base}/en`, { waitUntil: 'networkidle' });
        await page.waitForTimeout(800);
        const hydrationErrors = errors.filter((e) => /hydrat|did not match|Minified React error/i.test(e));
        check(hydrationErrors.length === 0, `hydrate: /en hydrates without a hydration error (${hydrationErrors.length} logged)`);
        const counts = await page.evaluate(() => ({
            titles: document.querySelectorAll('title').length,
            canonicals: document.querySelectorAll('link[rel="canonical"]').length,
            descriptions: document.querySelectorAll('meta[name="description"]').length,
            title: document.title,
            canonical: document.querySelector('link[rel="canonical"]')?.href,
        }));
        check(counts.titles === 1 && counts.canonicals === 1 && counts.descriptions === 1, `hydrate: one title, one canonical, one description after hydration (${counts.titles}/${counts.canonicals}/${counts.descriptions})`);
        check(counts.canonical === `${SITE}/en`, `hydrate: canonical is ${SITE}/en`);
        // A client navigation swaps the head.
        await page.click('nav a[href="/en/business-read"]');
        await page.waitForURL('**/en/business-read');
        await page.waitForTimeout(500);
        const after = await page.evaluate(() => ({
            canonicals: document.querySelectorAll('link[rel="canonical"]').length,
            canonical: document.querySelector('link[rel="canonical"]')?.href,
            h1: document.querySelector('h1')?.textContent,
        }));
        check(after.canonicals === 1 && after.canonical === `${SITE}/en/business-read`, `hydrate: after a client navigation the canonical is ${SITE}/en/business-read and there is one`);
        check(/depends on you/.test(after.h1 || ''), 'nav: the Business Read page renders its H1 after a client navigation');
        await page.close();
    }

    // nav and toggle, both languages, every public page.
    const expectH1 = {
        '/': /needs you less|น้อยลง/,
        '/business-read': /depends on you|พึ่งพาคุณ/,
        '/how-it-works': /Understand it first|เข้าใจ/,
        '/examples': /./,
        '/about': /before technology|ก่อนเทคโนโลยี/,
        '/contact': /./,
        '/hua-hin': /Hua Hin|หัวหิน/,
        '/business-blindspots': /own customer|ลูกค้าของตัวเอง/,
        '/owner-dependency': /replace yourself|แทนตัวเอง/,
    };
    for (const code of ['th', 'en']) {
        const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
        for (const route of INDEXABLE_ROUTES) {
            const url = localPath(route, code);
            const res = await page.goto(`${base}${url}`, { waitUntil: 'networkidle' });
            check(res.status() === 200, `nav: ${url} answers 200`);
            const h1 = await page.evaluate(() => document.querySelector('h1')?.textContent || '');
            check(expectH1[route].test(h1), `nav: ${url} renders its H1 ("${h1.slice(0, 40)}")`);
            const htmlLang = await page.evaluate(() => document.documentElement.lang);
            check(htmlLang === code, `nav: ${url} runs with lang=${code}`);
            // The toggle leads to the twin.
            const other = code === 'en' ? 'th' : 'en';
            const twin = await page.evaluate((c) => document.querySelector(`nav[aria-label="Language"] a[hreflang="${c}"]`)?.getAttribute('href'), other);
            check(twin === localPath(route, other), `toggle: ${url} offers ${localPath(route, other)} (got ${twin})`);
            // Every header, menu, footer and legal link stays in this language.
            const hrefs = await page.evaluate(() => [...document.querySelectorAll('nav a[href^="/"], footer a[href^="/"]')].map((a) => a.getAttribute('href')));
            const wrongLang = hrefs.filter((h) => (code === 'en' ? !h.startsWith('/en') : h.startsWith('/en')) && !/^\/(en|th)$/.test(h) || (code === 'th' && h === '/en'));
            const langLinks = new Set([localPath(route, 'en'), localPath(route, 'th')]);
            const strays = wrongLang.filter((h) => !langLinks.has(h));
            check(strays.length === 0, `nav: every internal link on ${url} stays in ${code} (${strays.length} strays: ${strays.slice(0, 3).join(', ')})`);
        }
        await page.close();
    }

    // The header carries the spec's five; the mobile menu the eight; the footer the quick links and legal links.
    {
        const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
        await page.goto(`${base}/en`, { waitUntil: 'networkidle' });
        const desk = await page.evaluate(() =>
            [...document.querySelectorAll('nav .xl\\:flex a[href^="/"]')].filter((a) => !a.closest('nav[aria-label="Language"]')).map((a) => a.getAttribute('href')),
        );
        check(JSON.stringify(desk) === JSON.stringify([...PUBLIC_NAV.map((i) => localPath(i.to, 'en')), '/en/business-read']), `nav: desktop bar is the spec's five plus the one button (${desk.join(' ')})`);
        // Both halves of the header hold a language control; only the desktop one is visible here.
        const toggle = await page.evaluate(() => [...document.querySelectorAll('nav[aria-label="Language"] a')].filter((a) => a.offsetParent !== null).map((a) => a.getAttribute('href')));
        check(JSON.stringify(toggle) === JSON.stringify(['/en', '/']), `nav: the desktop language control offers EN and ไทย (${toggle.join(' ')})`);
        const footerQuick = await page.evaluate(() => [...document.querySelectorAll('footer ul a[href^="/"]')].map((a) => a.getAttribute('href')));
        for (const item of [...FOOTER_QUICK_LINKS, ...LEGAL_LINKS]) check(footerQuick.includes(localPath(item.to, 'en')), `footer: links to ${localPath(item.to, 'en')}`);
        const contact = await page.evaluate(() => [...document.querySelectorAll('footer a[href^="mailto:"], footer a[href^="tel:"], footer a[href*="wa.me"], footer a[href*="lin.ee"]')].map((a) => a.getAttribute('href')));
        check(contact.some((h) => h === 'mailto:ian@highlevelthai.com'), 'contact: footer email is ian@highlevelthai.com');
        check(contact.some((h) => h === 'tel:+66968398305'), 'contact: footer phone is +66 96 839 8305');
        check(contact.some((h) => h === 'https://wa.me/66968398305'), 'contact: footer WhatsApp is wa.me/66968398305');
        check(contact.some((h) => h.startsWith('https://lin.ee/YQMkWI3')), 'contact: footer LINE is lin.ee/YQMkWI3');
        const badLine = await page.evaluate(() => [...document.querySelectorAll('a[href*="@highlevelthai"]')].filter((a) => /line\.me/.test(a.href)).length);
        check(badLine === 0, 'contact: the dead @highlevelthai LINE handle is linked nowhere');
        const heroCtas = await page.evaluate(() => [...document.querySelectorAll('main section:first-of-type a')].map((a) => a.getAttribute('href')));
        check(heroCtas[0] === '/en/business-read' && heroCtas.some((h) => h.startsWith('https://lin.ee/')), 'contact: the hero offers the Business Read first and LINE second');
        await page.close();

        const phone = await browser.newPage({ viewport: { width: 390, height: 844 } });
        await phone.goto(`${base}/en`, { waitUntil: 'networkidle' });
        const barVisible = await phone.evaluate(() => getComputedStyle(document.querySelector('button[aria-controls="mobile-menu"]')).display !== 'none');
        check(barVisible, 'mobile: the menu button shows at 390px');
        await phone.click('button[aria-controls="mobile-menu"]');
        await phone.waitForTimeout(300);
        const menu = await phone.evaluate(() => [...document.querySelectorAll('#mobile-menu a[href^="/"]')].map((a) => a.getAttribute('href')));
        check(JSON.stringify(menu) === JSON.stringify([...MOBILE_NAV.map((i) => localPath(i.to, 'en')), '/en/business-read']), `mobile: the menu lists the eight pages and the button (${menu.length} links)`);
        const overflow = await phone.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
        check(!overflow, 'mobile: no horizontal overflow at 390px with the menu open');
        await phone.click('#mobile-menu a[href="/en/hua-hin"]');
        await phone.waitForURL('**/en/hua-hin');
        const menuGone = await phone.evaluate(() => !document.querySelector('#mobile-menu'));
        check(menuGone, 'mobile: the menu closes on a tap');
        for (const route of INDEXABLE_ROUTES) {
            await phone.goto(`${base}${localPath(route, 'en')}`, { waitUntil: 'networkidle' });
            const wide = await phone.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
            check(!wide, `mobile: ${localPath(route, 'en')} has no horizontal overflow at 390px`);
        }
        await phone.close();
    }

    await browser.close();
} catch (err) {
    failures.push(`HARNESS ERROR: ${err.message}`);
} finally {
    if (preview) await preview.close();
}

console.log('');
for (const p of passes) console.log(`  PASS  ${p}`);
for (const f of failures) console.log(`  FAIL  ${f}`);
console.log(`\n${passes.length} passed, ${failures.length} failed  -  ${new Date().toISOString()}`);
process.exit(failures.length === 0 ? 0 : 1);
