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
    const context = await browser.newContext();
    // Set the language localStorage key BEFORE any page script runs, via an init script, since the
    // site reads it once at LanguageProvider's useState initialiser.
    await context.addInitScript(() => {
        window.localStorage.setItem('language', 'en');
    });
    for (const p of pages) {
        for (const width of widths) {
            const page = await context.newPage();
            await page.setViewportSize({ width: width.w, height: width.h });
            await page.goto(`${BASE}${p.path}`, { waitUntil: 'networkidle', timeout: 30000 });
            const height = await page.evaluate(() => document.body.scrollHeight);
            for (let y = 0; y < height; y += 400) {
                await page.evaluate((yy) => window.scrollTo(0, yy), y);
                await page.waitForTimeout(120);
            }
            await page.evaluate(() => window.scrollTo(0, 0));
            await page.waitForTimeout(500);
            const file = `${OUT}/${p.name}-${width.label}-${width.w}px-en.png`;
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
