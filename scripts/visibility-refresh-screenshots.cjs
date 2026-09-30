// One-off screenshot helper for the visibility-refresh report, 30 September 2026. Uses the
// Playwright already installed in a sibling estate project (NODE_PATH), since this repo has no
// browser-automation dependency of its own and none is being added by this brief.
const { chromium } = require('playwright');

const BASE = 'http://localhost:4321';
const OUT = 'C:/Projects/hlt-estate/04-reports/2026-09-30-screenshots';

const pages = [
    { path: '/', name: 'home' },
    { path: '/hua-hin', name: 'hua-hin' },
    { path: '/business-blindspots', name: 'business-blindspots' },
    { path: '/about', name: 'about' },
];

const widths = [
    { w: 390, h: 844, label: 'mobile' },
    { w: 1280, h: 900, label: 'desktop' },
];

const run = async () => {
    const browser = await chromium.launch();
    for (const p of pages) {
        for (const width of widths) {
            const page = await browser.newPage({ viewport: { width: width.w, height: width.h } });
            await page.goto(`${BASE}${p.path}`, { waitUntil: 'networkidle', timeout: 30000 });
            // framer-motion's whileInView only fires once an element has actually crossed the
            // viewport via IntersectionObserver; a full-page screenshot taken without scrolling
            // leaves everything still off-screen at opacity:0. Scroll the whole page in steps
            // first so every section's reveal has fired before the shot is taken.
            const height = await page.evaluate(() => document.body.scrollHeight);
            for (let y = 0; y < height; y += 400) {
                await page.evaluate((yy) => window.scrollTo(0, yy), y);
                await page.waitForTimeout(120);
            }
            await page.evaluate(() => window.scrollTo(0, 0));
            await page.waitForTimeout(600);
            const file = `${OUT}/${p.name}-${width.label}-${width.w}px.png`;
            await page.screenshot({ path: file, fullPage: true });
            console.log('OK', file);
            await page.close();
        }
    }
    await browser.close();
};

run().catch((e) => {
    console.error('FAIL', e.message);
    process.exit(1);
});
