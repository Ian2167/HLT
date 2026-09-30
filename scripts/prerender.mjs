// scripts/prerender.mjs — every public page as static HTML, in both languages, plus the sitemap.
// Added 30 September 2026, Stage 3 of the visibility refresh (bridge row 4007, spec: "English
// pages must be independently indexable, not hidden behind client-side language switching only",
// "Core proposition and page copy must be server-rendered/indexable").
//
// HOW IT RUNS. vite.config.js runs this at the end of every `vite build`, after building
// src/entry-server.jsx with Vite's SSR mode into dist-ssr/. So it runs wherever the site is built,
// on this machine and on Vercel, with no browser and no extra dependency.
//
// WHAT IT WRITES, all under dist/:
//   app.html                  the untouched app shell, which vercel.json serves for any URL that has
//                             no static page (the retired service routes, unknown paths)
//   index.html                the Thai home, prerendered
//   <route>/index.html        every other Thai page
//   en/index.html, en/<route>/index.html   every English page
//   sitemap.xml               every indexable page in both languages, with hreflang alternates
//
// EACH PAGE carries: the language on <html>, the head the page's Seo component captured (title,
// description, canonical, hreflang, Open Graph, and noindex where the page asks for it), a one-line
// script that tells the client it is hydrating a prerendered page (src/lib/motion.js), and the
// body markup inside #root. On a preview deployment every page also carries a robots noindex meta,
// on top of the X-Robots-Tag header Vercel already sends, so no preview can reach an index.
//
// NO SILENT FALLBACK. A page that captures no head, or a render that throws, fails the build.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const escapeAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeText = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const headTags = (h, previewNoindex) => {
    const tags = [
        `<title data-seo="">${escapeText(h.title)}</title>`,
        `<meta data-seo="" name="description" content="${escapeAttr(h.description)}">`,
        `<link data-seo="" rel="canonical" href="${escapeAttr(h.url)}">`,
        `<link data-seo="" rel="alternate" hreflang="th" href="${escapeAttr(h.alternates.th)}">`,
        `<link data-seo="" rel="alternate" hreflang="en" href="${escapeAttr(h.alternates.en)}">`,
        `<link data-seo="" rel="alternate" hreflang="x-default" href="${escapeAttr(h.alternates['x-default'])}">`,
        `<meta data-seo="" property="og:type" content="website">`,
        `<meta data-seo="" property="og:site_name" content="${escapeAttr(h.siteName)}">`,
        `<meta data-seo="" property="og:title" content="${escapeAttr(h.title)}">`,
        `<meta data-seo="" property="og:description" content="${escapeAttr(h.description)}">`,
        `<meta data-seo="" property="og:url" content="${escapeAttr(h.url)}">`,
        `<meta data-seo="" property="og:image" content="${escapeAttr(h.image)}">`,
        `<meta data-seo="" property="og:locale" content="${escapeAttr(h.locale)}">`,
        `<meta data-seo="" name="twitter:card" content="summary_large_image">`,
    ];
    if (h.noindex || previewNoindex) tags.push(`<meta data-seo="" name="robots" content="noindex">`);
    return tags.join('\n    ');
};

export async function prerender({ root = process.cwd() } = {}) {
    const dist = path.join(root, 'dist');
    const template = readFileSync(path.join(dist, 'index.html'), 'utf8');
    if (!template.includes('<div id="root"></div>')) throw new Error('dist/index.html has no empty #root to fill');

    const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');
    if (!existsSync(ssrEntry)) throw new Error(`no SSR bundle at ${ssrEntry}`);
    const { render } = await import(pathToFileURL(ssrEntry).href);

    const routes = await import(pathToFileURL(path.join(root, 'src', 'constants', 'routes.js')).href);
    const lang = await import(pathToFileURL(path.join(root, 'src', 'constants', 'lang.js')).href);
    const { INDEXABLE_ROUTES, NOINDEX_ROUTES } = routes;
    const { LANGS, localPath, absoluteUrl } = lang;

    // Vercel sets VERCEL_ENV to "production" or "preview" (or "development") at build time.
    const vercelEnv = process.env.VERCEL_ENV || '';
    const previewNoindex = vercelEnv !== '' && vercelEnv !== 'production';

    // The clean shell first, before index.html is overwritten by the Thai home.
    const shell = previewNoindex
        ? template.replace('</head>', '    <meta name="robots" content="noindex">\n  </head>')
        : template;
    writeFileSync(path.join(dist, 'app.html'), shell);

    let written = 0;
    const pages = [];
    for (const route of [...INDEXABLE_ROUTES, ...NOINDEX_ROUTES]) {
        for (const code of LANGS) {
            const url = localPath(route, code);
            const { html, head, lang: renderedLang } = render(url);
            if (!head) throw new Error(`${url}: the page rendered no Seo head`);
            if (!html || html.length < 500) throw new Error(`${url}: the render is ${html.length} chars, which is not a page`);

            // The shell's own <title> gives way to the page's, so a static page has one title.
            let page = template
                .replace(/<html lang="[a-z-]+">/, `<html lang="${renderedLang}">`)
                .replace(/\n\s*<title>[^<]*<\/title>/, '')
                .replace('<meta charset="UTF-8" />', '<meta charset="UTF-8" />\n    <script>window.__PRERENDERED__=true</script>')
                .replace('</head>', `    ${headTags(head, previewNoindex)}\n  </head>`)
                .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
            if (!page.includes('window.__PRERENDERED__')) throw new Error(`${url}: the prerender flag was not injected`);

            const outDir = url === '/' ? dist : path.join(dist, ...url.split('/').filter(Boolean));
            mkdirSync(outDir, { recursive: true });
            writeFileSync(path.join(outDir, 'index.html'), page);
            written += 1;
            pages.push({ route, code, url });
        }
    }

    // The sitemap: indexable pages only, each with its alternates.
    const today = new Date().toISOString().slice(0, 10);
    const entries = INDEXABLE_ROUTES.flatMap((route) =>
        LANGS.map((code) => {
            const alts = LANGS.map((c) => `    <xhtml:link rel="alternate" hreflang="${c}" href="${absoluteUrl(route, c)}"/>`);
            alts.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(route, 'th')}"/>`);
            return `  <url>\n    <loc>${absoluteUrl(route, code)}</loc>\n    <lastmod>${today}</lastmod>\n${alts.join('\n')}\n  </url>`;
        }),
    );
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`;
    writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);

    console.log(`  prerender: ${written} pages written, ${entries.length} sitemap entries${previewNoindex ? ', preview noindex on every page' : ''}`);
    return { written, pages, sitemapEntries: entries.length, previewNoindex };
}

// Run directly: node scripts/prerender.mjs (after `vite build` with HLT_SKIP_PRERENDER=1 and the
// SSR build), mainly for debugging the step on its own.
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'))) {
    prerender().catch((err) => {
        console.error(`prerender FAILED: ${err.message}`);
        process.exit(1);
    });
}
