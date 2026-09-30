// tests/about-company-facts.mjs
//
// WHY THIS FIXTURE EXISTS
// Ian ruled gate 128 on 18 September 2026 (bridge row 3681, ruling of record
//   C:\Projects\hlt-estate\01-doctrine\HLT-ABOUT-PAGE-RULING-2026-09-18.md):
// the company facts block goes ON the About page, and the two founder paragraphs
// and the photograph/team section stay OFF it. Those are two separate duties and a
// grep over source proves neither of them, because a string can sit in src and never
// render, and a comment can hold a banned phrase harmlessly.
//
// So this fixture does two things a grep cannot:
//   1. It BUILDS the site and DRIVES a real browser to /about, then reads the rendered
//      text. A string only passes if a visitor would actually see it.
//   2. It reads the BUILT bundle for the banned NOTE A, B and D wording, because
//      "not rendered today" is not the same as "not shipped" - a withheld paragraph
//      sitting in the JavaScript is one conditional away from being public.
//
// NO SILENT FALLBACK. If the browser driver cannot be resolved this fixture FAILS and
// says so. It never degrades to a source grep and reports a pass, because a fixture with
// a quiet fallback is how a check comes to mean nothing.
//
// THE BROWSER DRIVER IS BORROWED. This repo has no test dependencies and this fixture
// does not add any. Playwright is resolved from another checkout on the estate; the path
// used is PRINTED on every run so it is never a mystery. Override with HLT_PLAYWRIGHT.
//
// RUN:  node tests/about-company-facts.mjs        (from C:\Projects\hlt)
// EXIT: 0 all assertions passed, 1 one or more failed.

import { spawn } from 'node:child_process';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import net from 'node:net';

const REPO = process.cwd();

// THE PORT IS CHOSEN AT RUNTIME, NOT FIXED. A fixed port made the first run of this fixture
// fail with "port never opened" when a preview server leaked from an earlier run still held it.
// Asking the OS for a free port means a leaked server can never block the next run.
let PORT = 0;

// ---------------------------------------------------------------- the assertions

// Block 10 of THE POST in the copy pack, Ian's own three-line layout. Lifted verbatim from
//   C:\Projects\hlt-estate\02-builds\hlt-site-kit\copy\2026-09-18-about.md
const MUST_RENDER = [
    'High Level Thai Ltd.',
    'บริษัท ไฮ เลเวล ไทย จำกัด',
    'Registered in Thailand, company number 0835568013864',
];

// Wording from the NOTE blocks Ian ruled OUT. None of it may reach the shipped bundle.
const MUST_NOT_SHIP = [
    { note: 'A', text: 'forty-five years on the money side of construction' },
    { note: 'A', text: 'Ian W Turton' },
    { note: 'A', text: "shopping mall to a city's metro" },
    { note: 'B', text: 'a consultant who spent his career on the money side' },
    { note: 'B', text: 'The same job, done for a business your size' },
];

// NOTE D is a shape, not a sentence: no photograph of anybody, no team section.
const MUST_NOT_RENDER_ON_ABOUT = [
    { note: 'D', label: 'a team section heading', re: /\b(our team|the team|meet the team)\b/i },
];

const failures = [];
const passes = [];

function check(ok, line) {
    if (ok) passes.push(line);
    else failures.push(line);
}

// ---------------------------------------------------------------- helpers

function run(cmd, args, opts = {}) {
    return new Promise((resolve, reject) => {
        const p = spawn(cmd, args, { cwd: REPO, shell: true, stdio: 'pipe', ...opts });
        let out = '';
        p.stdout.on('data', (d) => (out += d));
        p.stderr.on('data', (d) => (out += d));
        p.on('close', (code) => (code === 0 ? resolve(out) : reject(new Error(`${cmd} exited ${code}\n${out}`))));
    });
}

function freePort() {
    return new Promise((resolve, reject) => {
        const s = net.createServer();
        s.on('error', reject);
        s.listen(0, () => {
            const { port } = s.address();
            s.close(() => resolve(port));
        });
    });
}

// VITE PREVIEW BINDS IPv6 LOOPBACK ([::1]) ON THIS MACHINE, NOT 127.0.0.1. Polling the v4
// address alone reports "never opened" while the server is up and listening - which is exactly
// how the first run of this fixture lied. So try both families and return whichever answers.
function waitForPort(port, timeoutMs) {
    const hosts = ['127.0.0.1', '::1'];
    const deadline = Date.now() + timeoutMs;
    return new Promise((resolve, reject) => {
        const attempt = (i = 0) => {
            const host = hosts[i % hosts.length];
            const s = net.connect(port, host);
            s.on('connect', () => { s.destroy(); resolve(host === '::1' ? '[::1]' : host); });
            s.on('error', () => {
                s.destroy();
                if (Date.now() > deadline) reject(new Error(`port ${port} never opened on ${hosts.join(' or ')}`));
                else setTimeout(() => attempt(i + 1), 250);
            });
        };
        attempt();
    });
}

async function resolvePlaywright() {
    const candidates = [
        process.env.HLT_PLAYWRIGHT,
        'C:/Projects/qo-linkedin-desk-v2/node_modules/playwright/index.js',
        'C:/Projects/quote-optimiser-iwt-crm/node_modules/playwright/index.js',
        'C:/Projects/qo-rls-fix/node_modules/playwright/index.js',
    ].filter(Boolean);
    for (const c of candidates) {
        if (existsSync(c)) {
            console.log(`  browser driver: ${c}`);
            // Playwright ships CommonJS, so a dynamic import hands back a namespace whose real
            // exports sit under .default. Reaching for .chromium on the namespace gets undefined.
            const mod = await import(pathToFileURL(c).href);
            const api = mod.chromium ? mod : mod.default;
            if (!api || !api.chromium) throw new Error(`Playwright at ${c} exposes no chromium export`);
            return api;
        }
    }
    throw new Error(
        'No Playwright install found. Set HLT_PLAYWRIGHT to a playwright/index.js on this machine.\n' +
        `Tried:\n  ${candidates.join('\n  ')}`
    );
}

// ---------------------------------------------------------------- the run

let preview;
try {
    console.log('HLT About page, company facts block - fixture for Ian gate 128');
    console.log(`  repo: ${REPO}`);

    const pw = await resolvePlaywright();

    console.log('  building...');
    await run('npx', ['vite', 'build']);

    // ---- duty 2: the banned wording must not be in the shipped JavaScript
    const assetDir = path.join(REPO, 'dist', 'assets');
    const bundle = readdirSync(assetDir)
        .filter((f) => f.endsWith('.js') || f.endsWith('.css'))
        .map((f) => readFileSync(path.join(assetDir, f), 'utf8'))
        .join('\n') + '\n' + readFileSync(path.join(REPO, 'dist', 'index.html'), 'utf8');
    console.log(`  bundle read: ${bundle.length} chars from dist/assets + dist/index.html`);

    for (const { note, text } of MUST_NOT_SHIP) {
        check(!bundle.includes(text), `NOTE ${note} wording absent from the bundle: "${text}"`);
    }

    // ---- duty 1: the three lines must actually render at /about
    PORT = await freePort();
    console.log(`  starting preview server on port ${PORT}...`);
    preview = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
        cwd: REPO, shell: true, stdio: 'ignore', detached: false,
    });
    const host = await waitForPort(PORT, 60000);
    console.log(`  preview answered on ${host}:${PORT}`);

    // 30 September 2026: the language lives in the URL now (src/constants/lang.js). The English
    // lines are asserted on /en/about, where they render in English; the Thai page at /about is
    // asserted to carry the company number and the Thai company name, which do not translate.
    const browser = await pw.chromium.launch();
    const page = await browser.newPage();
    await page.goto(`http://${host}:${PORT}/en/about`, { waitUntil: 'networkidle' });
    const rendered = await page.evaluate(() => document.body.innerText);
    await page.goto(`http://${host}:${PORT}/about`, { waitUntil: 'networkidle' });
    const renderedTh = await page.evaluate(() => document.body.innerText);
    await browser.close();

    console.log(`  rendered /en/about: ${rendered.length} chars of visible text; /about: ${renderedTh.length}`);

    for (const text of MUST_RENDER) {
        check(rendered.includes(text), `renders on /en/about: "${text}"`);
    }
    check(renderedTh.includes('0835568013864'), 'renders on /about: the company number 0835568013864');
    check(renderedTh.includes('บริษัท ไฮ เลเวล ไทย จำกัด'), 'renders on /about: the Thai company name');
    for (const { note, label, re } of MUST_NOT_RENDER_ON_ABOUT) {
        check(!re.test(rendered), `NOTE ${note} absent from /en/about: ${label}`);
        check(!re.test(renderedTh), `NOTE ${note} absent from /about: ${label}`);
    }
} catch (err) {
    failures.push(`FIXTURE ERROR: ${err.message}`);
} finally {
    if (preview && !preview.killed) {
        try { process.kill(preview.pid); } catch { /* already gone */ }
        try { spawn('taskkill', ['/PID', String(preview.pid), '/T', '/F'], { shell: true, stdio: 'ignore' }); } catch { /* best effort */ }
    }
}

console.log('');
for (const p of passes) console.log(`  PASS  ${p}`);
for (const f of failures) console.log(`  FAIL  ${f}`);
console.log('');
console.log(`${passes.length} passed, ${failures.length} failed  -  ${new Date().toISOString()}`);
process.exit(failures.length === 0 ? 0 : 1);
