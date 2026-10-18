// entry-server.jsx — the server side of the static prerender. Added 30 September 2026, Stage 3 of
// the visibility refresh.
//
// scripts/prerender.mjs builds this file with Vite's SSR mode, imports it, and calls render() once
// per public URL in each language. It hands back the page's body markup and the head values the
// page's Seo component captured (src/lib/head.js). The script writes the finished HTML file.
//
// The router is StaticRouter: the same route tree the browser uses (AppShell), fixed at one URL.
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { AppShell } from './App';
import { startHeadCapture, stopHeadCapture } from './lib/head';
import { splitLang } from './constants/lang';

export function render(url) {
    startHeadCapture();
    const html = renderToString(
        <StrictMode>
            <StaticRouter location={url}>
                <AppShell />
            </StaticRouter>
        </StrictMode>,
    );
    const head = stopHeadCapture();
    const last = head[head.length - 1] || null;
    // The page's words decide <html lang> (18 October 2026): a Thai address still waiting for its
    // Thai copy renders English and says so. The head carries that language; the URL is the fallback.
    const lang = last?.lang || splitLang(url).lang;
    return { html, head: last, lang };
}
