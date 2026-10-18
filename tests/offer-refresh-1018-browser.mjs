// tests/offer-refresh-1018-browser.mjs — the real-browser half of the 18 October 2026 fixture
// (A-044). One headless Chromium at phone width over the built dist/, served by
// scripts/lib/serve-dist.mjs (never vite preview: it serves the root page for every path).
//
// RUN:  node tests/offer-refresh-1018-browser.mjs [--shots <dir>]   (after a build)
// EXIT: 0 every check passed, 1 otherwise.
//
// CHECKS: no hydration or console error on the changed pages; nothing scrolls sideways at 390 px;
// the hero card finishes; the website demonstration plays itself and stops when tapped; the
// supplier path opens and shows its fifth step; reduced motion shows the finished hero at once;
// the Thai home reads English with its notice.
import path from 'node:path';
import { mkdirSync } from 'node:fs';
import { resolvePlaywright } from '../scripts/lib/playwright.mjs';
import { serveDist } from '../scripts/lib/serve-dist.mjs';

const args = process.argv.slice(2);
const shotsArg = args.indexOf('--shots');
const SHOTS = shotsArg >= 0 ? args[shotsArg + 1] : null;
if (SHOTS) mkdirSync(SHOTS, { recursive: true });

const passes = [];
const failures = [];
const check = (ok, line) => (ok ? passes : failures).push(line);

const { chromium } = await resolvePlaywright();
// --base <url> checks a deployed preview instead of the local build.
const baseArg = args.indexOf('--base');
const server =
    baseArg >= 0 ? { url: args[baseArg + 1].replace(/\/$/, ''), close: async () => {} } : await serveDist(path.join(process.cwd(), 'dist'));
// Playwright's own headless shell isn't downloaded on this laptop; the installed Chrome is used
// first, and the bundled browser only if Chrome isn't there. Nothing is downloaded.
const browser = await chromium.launch({ channel: 'chrome' }).catch(() => chromium.launch());
const phone = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true };

try {
    const ctx = await browser.newContext({ ...phone, reducedMotion: 'no-preference' });
    // /_vercel/insights/script.js (Vercel Analytics) exists only on Vercel; served locally it falls
    // through to the HTML shell and throws "Unexpected token '<'" (proved on the base build too,
    // 18 October). It's answered here with an empty script, as Vercel would answer it.
    await ctx.route('**/_vercel/**', (route) => route.fulfill({ status: 200, contentType: 'application/javascript', body: '' }));
    const pageErrors = [];
    const open = async (url) => {
        const page = await ctx.newPage();
        page.on('console', (m) => {
            if (m.type() === 'error') pageErrors.push(`${url}: ${m.text().slice(0, 160)}`);
        });
        page.on('pageerror', (e) => pageErrors.push(`${url}: ${String(e).slice(0, 160)}`));
        await page.goto(`${server.url}${url}`, { waitUntil: 'networkidle' });
        return page;
    };

    for (const url of ['/en', '/en/business-read', '/en/how-it-works', '/en/examples', '/en/capabilities/websites', '/en/about', '/', '/business-read']) {
        const page = await open(url);
        const width = await page.evaluate(() => document.documentElement.scrollWidth);
        check(width <= 390, `phone ${url} doesn't scroll sideways (page width ${width}px at 390)`);
        if (url === '/en') {
            await page.waitForTimeout(3600);
            const rows = await page.$$eval('.hero-flow-row', (els) => els.map((e) => Number(getComputedStyle(e).opacity)));
            check(rows.length === 4 && rows.every((o) => o > 0.99), `wow the hero card has finished after 3.6 s (opacities ${rows.join(', ')})`);
            if (SHOTS) await page.screenshot({ path: path.join(SHOTS, 'phone-en-home-hero.png') });
        }
        if (url === '/') {
            check((await page.getAttribute('html', 'lang')) === 'en', 'thai / reads English and says lang="en" after hydration');
            check(await page.isVisible('text=This page is in English for now'), 'thai / shows its "English for now" notice');
        }
        if (url === '/en/examples') {
            await page.click('text=Play the walkthrough');
            await page.waitForTimeout(3700);
            const s2 = await page.getAttribute('[data-demo-step]', 'data-demo-step');
            check(s2 === '2', `wow the walkthrough moves on by itself (step ${s2} after 3.7 s)`);
            await page.click('button:has-text("Next")');
            const s3 = await page.getAttribute('[data-demo-step]', 'data-demo-step');
            await page.waitForTimeout(3700);
            const s3later = await page.getAttribute('[data-demo-step]', 'data-demo-step');
            check(s3 === '3' && s3later === '3', `wow a tap stops the walkthrough (step ${s3}, still ${s3later} 3.7 s later)`);
            await page.click('button:has-text("4. Reception handover")');
            check(await page.isVisible('text=Reply by 17:00 today'), 'change3 the demonstration reaches the reception card');
            if (SHOTS) {
                await page.locator('#website-demonstration').screenshot({ path: path.join(SHOTS, 'phone-en-examples-demo.png') });
                await page.locator('#sample-business-map').screenshot({ path: path.join(SHOTS, 'phone-en-examples-map.png') });
            }
            await page.click('role=tab[name="A fragrance supplier to hotels"]');
            await page.click('button:has-text("Repeat orders")');
            check(await page.isVisible('text=Does anyone know when a hotel is due to reorder?'), 'change4 the supplier path opens and shows its fifth step');
            if (SHOTS) await page.locator('#sales-path').screenshot({ path: path.join(SHOTS, 'phone-en-examples-sales-path.png') });
        }
        if (url === '/en/business-read' && SHOTS) await page.screenshot({ path: path.join(SHOTS, 'phone-en-business-read.png'), fullPage: true });
        if (url === '/en/how-it-works' && SHOTS) await page.locator('#delivery').screenshot({ path: path.join(SHOTS, 'phone-en-how-it-works-delivery.png') });
        await page.close();
    }
    const hydration = pageErrors.filter((e) => /hydrat|did not match|Minified React error/i.test(e));
    check(hydration.length === 0, `no hydration error on any page checked${hydration.length ? `: ${hydration[0]}` : ''}`);
    check(pageErrors.length === 0, `no console or page error on any page checked${pageErrors.length ? `: ${pageErrors.slice(0, 3).join(' | ')}` : ''}`);
    await ctx.close();

    const reduced = await browser.newContext({ ...phone, reducedMotion: 'reduce' });
    const rp = await reduced.newPage();
    await rp.goto(`${server.url}/en`, { waitUntil: 'networkidle' });
    await rp.waitForTimeout(150);
    const ro = await rp.$$eval('.hero-flow-row', (els) => els.map((e) => Number(getComputedStyle(e).opacity)));
    check(ro.length === 4 && ro.every((o) => o > 0.99), `motion with reduced motion the hero card is finished at once (opacities ${ro.join(', ')})`);
    await reduced.close();
} finally {
    await browser.close();
    await server.close();
}

for (const p of passes) console.log(`PASS  ${p}`);
for (const f of failures) console.log(`FAIL  ${f}`);
console.log(`RESULT ${passes.length} pass, ${failures.length} fail · ${new Date().toISOString()}`);
process.exit(failures.length ? 1 : 0);
