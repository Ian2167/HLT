// scripts/lib/playwright.mjs — the one place the borrowed browser driver is resolved.
// This repo has no test dependencies and adds none: Playwright is resolved from a sibling checkout
// on the estate and the path is printed on every run. Override with HLT_PLAYWRIGHT. No silent
// fallback: if none resolves, the caller fails loudly. Same rule as tests/about-company-facts.mjs.
import { existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

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
