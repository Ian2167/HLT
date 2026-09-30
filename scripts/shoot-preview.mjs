// scripts/shoot-preview.mjs — full-page screenshots of the built site, both languages, two widths.
// Added 30 September 2026 for the visibility-refresh report; kept because every later preview
// review needs the same shots.
//
// RUN:  node scripts/shoot-preview.mjs [outDir] [--no-build]      (from C:\Projects\hlt)
// It builds (unless --no-build), starts `vite preview` on a free port, drives Chromium to every
// public route in Thai and in English at 390 px and 1280 px, scrolls each page so every scroll
// reveal has fired, shoots it full-page, and also shoots the open mobile menu and the header at
// 1024 px, the narrowest width the desktop bar renders at. Files land in outDir, default
// C:\Projects\hlt-estate\04-reports\2026-09-30-screenshots\.
//
// THE BROWSER DRIVER IS BORROWED, as in tests/about-company-facts.mjs: this repo has no test
// dependencies and adds none. Playwright is resolved from a sibling checkout on the estate and the
// path is printed. Override with HLT_PLAYWRIGHT. No silent fallback: if none resolves, this fails.
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import net from 'node:net';
import path from 'node:path';

const REPO = process.cwd();
const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const OUT = args[0] || 'C:/Projects/hlt-estate/04-reports/2026-09-30-screenshots';
const NO_BUILD = process.argv.includes('--no-build');

const ROUTES = [
    { route: '/', name: 'home' },
    { route: '/business-read', name: 'business-read' },
    { route: '/how-it-works', name: 'how-it-works' },
    { route: '/examples', name: 'examples' },
    { route: '/about', name: 'about' },
    { route: '/contact', name: 'contact' },
    { route: '/hua-hin', name: 'hua-hin' },
    { route: '/business-blindspots', name: 'business-blindspots' },
    { route: '/owner-dependency', name: 'owner-dependency' },
    { route: '/terms', name: 'terms' },
];
const LANGS = [
    { code: 'th', prefix: '' },
    { code: 'en', prefix: '/en' },
];
const WIDTHS = [
    { w: 390, h: 844, label: 'mobile-390px' },
    { w: 1280, h: 900, label: 'desktop-1280px' },
];

const run = (cmd, cmdArgs) =>
    new Promise((resolve, reject) => {
        const p = spawn(cmd, cmdArgs, { cwd: REPO, shell: true, stdio: 'pipe' });
        let out = '';
        p.stdout.on('data', (d) => (out += d));
        p.stderr.on('data', (d) => (out += d));
        p.on('close', (code) => (code === 0 ? resolve(out) : reject(new Error(`${cmd} exited ${code}\n${out}`))));
    });

const freePort = () =>
    new Promise((resolve, reject) => {
        const s = net.createServer();
        s.on('error', reject);
        s.listen(0, () => {
            const { port } = s.address();
            s.close(() => resolve(port));
        });
    });

// vite preview binds IPv6 loopback on this machine; try both families.
const waitForPort = (port, timeoutMs) => {
    const hosts = ['127.0.0.1', '::1'];
    const deadline = Date.now() + timeoutMs;
    return new Promise((resolve, reject) => {
        const attempt = (i = 0) => {
            const host = hosts[i % hosts.length];
            const s = net.connect(port, host);
            s.on('connect', () => {
                s.destroy();
                resolve(host === '::1' ? '[::1]' : host);
            });
            s.on('error', () => {
                s.destroy();
                if (Date.now() > deadline) reject(new Error(`port ${port} never opened`));
                else setTimeout(() => attempt(i + 1), 250);
            });
        };
        attempt();
    });
};

export async function resolvePlaywright() {
    const candidates = [
        process.env.HLT_PLAYWRIGHT,
        'C:/Projects/qo-linkedin-desk-v2/node_modules/playwright/index.js',
        'C:/Projects/quote-optimiser-iwt-crm/node_modules/playwright/index.js',
        'C:/Projects/qo-rls-fix/node_modules/playwright/index.js',
    ].filter(Boolean);
    for (const c of candidates) {
        if (existsSync(c)) {
            console.log(`  browser driver: ${c}`);
            const mod = await import(pathToFileURL(c).href);
            const api = mod.chromium ? mod : mod.default;
            if (!api || !api.chromium) throw new Error(`Playwright at ${c} exposes no chromium export`);
            return api;
        }
    }
    throw new Error(`No Playwright install found. Set HLT_PLAYWRIGHT. Tried:\n  ${candidates.join('\n  ')}`);
}

// Scroll the whole page in steps so every whileInView reveal has fired, then return to the top.
async function settle(page) {
    const height = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < height; y += 400) {
        await page.evaluate((yy) => window.scrollTo(0, yy), y);
        await page.waitForTimeout(90);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
}

let preview;
try {
    mkdirSync(OUT, { recursive: true });
    const pw = await resolvePlaywright();

    if (!NO_BUILD) {
        console.log('  building...');
        await run('npx', ['vite', 'build']);
    }

    const port = await freePort();
    preview = spawn('npx', ['vite', 'preview', '--port', String(port), '--strictPort'], {
        cwd: REPO,
        shell: true,
        stdio: 'ignore',
    });
    const host = await waitForPort(port, 60000);
    const base = `http://${host}:${port}`;
    console.log(`  preview: ${base}`);

    const browser = await pw.chromium.launch();
    let shots = 0;

    for (const lang of LANGS) {
        for (const r of ROUTES) {
            for (const width of WIDTHS) {
                const page = await browser.newPage({ viewport: { width: width.w, height: width.h } });
                await page.goto(`${base}${lang.prefix}${r.route}`, { waitUntil: 'networkidle', timeout: 45000 });
                await settle(page);
                const file = path.join(OUT, `${r.name}-${width.label}-${lang.code}.png`);
                await page.screenshot({ path: file, fullPage: true });
                shots += 1;
                console.log(`  OK ${file}`);
                await page.close();
            }
        }

        // The open mobile menu, and the desktop bar at its narrowest width.
        const menuPage = await browser.newPage({ viewport: { width: 390, height: 844 } });
        await menuPage.goto(`${base}${lang.prefix}/`, { waitUntil: 'networkidle', timeout: 45000 });
        await menuPage.click('button[aria-controls="mobile-menu"]');
        await menuPage.waitForTimeout(300);
        const menuFile = path.join(OUT, `home-mobile-menu-open-${lang.code}.png`);
        await menuPage.screenshot({ path: menuFile, fullPage: false });
        shots += 1;
        console.log(`  OK ${menuFile}`);
        await menuPage.close();

        const narrow = await browser.newPage({ viewport: { width: 1024, height: 700 } });
        await narrow.goto(`${base}${lang.prefix}/`, { waitUntil: 'networkidle', timeout: 45000 });
        await narrow.waitForTimeout(400);
        const narrowFile = path.join(OUT, `home-header-1024px-${lang.code}.png`);
        await narrow.screenshot({ path: narrowFile, clip: { x: 0, y: 0, width: 1024, height: 120 } });
        shots += 1;
        console.log(`  OK ${narrowFile}`);
        await narrow.close();
    }

    await browser.close();
    console.log(`\n${shots} screenshots in ${OUT}  -  ${new Date().toISOString()}`);
} catch (err) {
    console.error(`FAIL ${err.message}`);
    process.exitCode = 1;
} finally {
    if (preview && !preview.killed) {
        try {
            spawn('taskkill', ['/PID', String(preview.pid), '/T', '/F'], { shell: true, stdio: 'ignore' });
        } catch {
            /* best effort */
        }
    }
}
