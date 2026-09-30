// scripts/lib/serve-dist.mjs — a small static server that serves dist/ the way Vercel does.
// Added 30 September 2026, Stage 3 of the visibility refresh.
//
// WHY NOT `vite preview`. Vite's preview answers every extensionless path with the root
// index.html, so /en was served the prerendered THAI home and React then hydrated English over
// it: a hydration error that exists only on the preview server. Vercel resolves a static file
// first, including a directory's index.html for an extensionless path, and only then falls back
// to the rewrite in vercel.json. This server does the same:
//   1. an exact file under dist/                       -> that file
//   2. dist/<path>/index.html                          -> that page (a prerendered page)
//   3. a path with a trailing slash                    -> 308 to the path without it (trailingSlash false)
//   4. anything else                                   -> dist/app.html, status 200 (the SPA shell)
import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import path from 'node:path';

const TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.webmanifest': 'application/manifest+json; charset=utf-8',
    '.xml': 'application/xml; charset=utf-8',
    '.txt': 'text/plain; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.ico': 'image/x-icon',
    '.woff2': 'font/woff2',
};

export function serveDist(dist, { port = 0 } = {}) {
    const server = createServer((req, res) => {
        const url = new URL(req.url, 'http://localhost');
        let p = decodeURIComponent(url.pathname);
        if (p.length > 1 && p.endsWith('/')) {
            res.writeHead(308, { Location: p.slice(0, -1) + url.search });
            res.end();
            return;
        }
        const safe = path.normalize(p).replace(/^(\.\.[/\\])+/, '');
        const candidates = [path.join(dist, safe), path.join(dist, safe, 'index.html')];
        let file = candidates.find((c) => existsSync(c) && statSync(c).isFile());
        if (!file) file = path.join(dist, 'app.html');
        const type = TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-store' });
        createReadStream(file).pipe(res);
    });
    return new Promise((resolve) => {
        server.listen(port, '127.0.0.1', () => {
            const { port: actual } = server.address();
            resolve({ url: `http://127.0.0.1:${actual}`, port: actual, close: () => new Promise((r) => server.close(r)) });
        });
    });
}
