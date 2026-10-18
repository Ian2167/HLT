// lang.js — the one place the site's two languages and their URL shapes are written down.
// Added 30 September 2026, the visibility refresh (bridge row 4007 and Ian's fuller spec of the
// same day, "you build based on the following").
//
// WHY THE URL CARRIES THE LANGUAGE NOW. Until this build the language was a browser toggle stored
// in localStorage, so every route had ONE URL and a crawler with no storage saw Thai only. The spec's
// requirement, verbatim: "English and Thai pages are separately indexable." That needs two URLs per
// page, so the language moved into the path.
//
// THE SHAPE. Thai stays at the addresses the site has always had (/, /business-read, /about ...),
// because Thai is the ruled first language (Ian, 14 September 2026) and because every indexed Thai
// URL keeps working with no redirect. English lives under /en (/en, /en/business-read ...). The spec
// allowed "/th/ or an equivalent clean Thai URL"; the unprefixed URL is the cleanest Thai URL there
// is, and /th/... is redirected to it in vercel.json and in the router so nothing 404s.
//
// x-default is the Thai URL. Switching the root to English later is one redirect line in
// vercel.json and one constant here; nothing else moves.
export const LANGS = ['en', 'th'];
export const DEFAULT_LANG = 'th';
export const EN_PREFIX = '/en';

// The canonical origin, used for canonical and hreflang links, Open Graph URLs, the Organization
// schema and the sitemap. No trailing slash. It is the www host because that is the host Vercel
// serves: the apex highlevelthai.com answers every request with a redirect to www (read on the
// live site and in the project's domain list, 30 September 2026), and a canonical that points at a
// redirecting address is a canonical a crawler has to second-guess.
export const SITE_URL = 'https://www.highlevelthai.com';

// Split a pathname into its language and its language-free route.
//   '/en/hua-hin' -> { lang: 'en', route: '/hua-hin' }
//   '/hua-hin'    -> { lang: 'th', route: '/hua-hin' }
//   '/en'         -> { lang: 'en', route: '/' }
export function splitLang(pathname) {
    const clean = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    if (clean === EN_PREFIX) return { lang: 'en', route: '/' };
    if (clean.startsWith(`${EN_PREFIX}/`)) return { lang: 'en', route: clean.slice(EN_PREFIX.length) };
    return { lang: DEFAULT_LANG, route: clean || '/' };
}

// Build the path for a language-free route in a given language.
//   localPath('/hua-hin', 'en') -> '/en/hua-hin'
//   localPath('/', 'en')        -> '/en'
//   localPath('/hua-hin', 'th') -> '/hua-hin'
export function localPath(route, lang) {
    if (lang !== 'en') return route;
    return route === '/' ? EN_PREFIX : `${EN_PREFIX}${route}`;
}

// The absolute URL of a route in a language, for canonical, hreflang and the sitemap.
export function absoluteUrl(route, lang) {
    return `${SITE_URL}${localPath(route, lang)}`;
}

// THAI ADDRESSES WAITING FOR THAI COPY, 18 October 2026 (A-044, and the website status report of
// that day: "7 of 11 Thai addresses carry the English title, H1 and description").
//
// These pages' bodies are English on their Thai address, under Ian's "English first" of 1 October,
// while the header, buttons and footer carried machine Thai. That mixed two languages on one page
// and gave Google an English page posing as Thai, a near-duplicate of its /en twin. Ian, 18 October:
// "fix the English and Thai mixing on the default home page and the Business Read page"; the brief:
// "don't publish machine Thai".
//
// So while a route is listed here its Thai address renders in English throughout (header and
// footer included), says so in a one-line notice, declares lang="en", points its canonical at the
// /en twin, and is left out of the sitemap's Thai entries. The Thai address itself keeps working.
// When Ann's native Thai for a page lands, delete its line here and it is a Thai page again.
//
// EMPTIED THE SAME DAY. Ian, shown the result, chose "A. Machine Thai now, Ann checks after"
// (18 October 2026), so the seven pages carry an unreviewed machine Thai draft
// (src/copy/offerRefreshTh1018.js) and are Thai pages again. The mechanism stays for any page
// that loses its Thai later.
export const THAI_PENDING_ROUTES = [];

// Capability pages have no Thai unless their copy carries a `th` block; Websites does.
const THAI_READY_CAPABILITIES = ['/capabilities/websites'];
export const isThaiPending = (route) =>
    THAI_PENDING_ROUTES.includes(route) || (route.startsWith('/capabilities/') && !THAI_READY_CAPABILITIES.includes(route));

// The language a page's words are in: English for a pending route on its Thai address.
export const contentLangFor = (route, lang) => (lang === 'th' && isThaiPending(route) ? 'en' : lang);

// The Open Graph locale for each language.
export const OG_LOCALE = { en: 'en_GB', th: 'th_TH' };
