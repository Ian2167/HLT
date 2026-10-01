// routes.js — the one place a rebuilt page's path is written down.
// Added 14 September 2026, when Ian said a product name was about to change: "hold the product
// name in ONE translation key and ONE route constant so the rename is a two-string change".
//
// The header, the summary home page and App.jsx all read their paths from here, so a renamed
// route is changed once. The old service routes (MCTB, Quotes, RAG, Websites, HomeServices,
// Clinics, Salons, the diagnostic) are deliberately NOT in this file: they stay live, they are
// off the header, and nothing in the rebuild links to them.
//
// THE IMPORTS CARRY THEIR .js EXTENSION because scripts/prerender.mjs and the tests load this file
// straight into Node, which resolves nothing for them. Vite reads the same paths without complaint.
import { SHOW_INSIGHTS, enabledCapabilities } from '../config/features.js';
import { capabilities } from '../copy/capabilities.js';

export const ROUTE_HOME = '/';
// Renamed 14 September 2026, 17:50 Bangkok, on Ian's correction: the service is the AIOS Audit,
// and it interviews the functions of the business rather than reviewing the week in one call.
// The pre-rename path stays live as an alias, as /custom-ai-assistant did.
export const ROUTE_AIOS_AUDIT = '/aios-audit';
export const ROUTE_AIOS_AUDIT_ALIAS = '/ai-opportunity-audit';
export const ROUTE_BRAND_OS = '/brand-os'; // live and unlinked: Ian, 14 Sept 2026, "Drop Brand OS, keep it on Upwork"
export const ROUTE_EXECUTIVE_ASSISTANT = '/executive-assistant';
export const ROUTE_EXECUTIVE_ASSISTANT_ALIAS = '/custom-ai-assistant'; // the pre-rename path, kept so nothing 404s
export const ROUTE_OPS_COCKPIT = '/ops-cockpit';
export const ROUTE_BUSINESS_READ = '/business-read';
export const ROUTE_OPENBRAIN = '/openbrain';

// ---------------------------------------------------------------------------------------
// THE SIMPLIFIED PUBLIC SITE, 18 September 2026.
// Authority: C:\Projects\hlt-estate\01-doctrine\HLT-SITE-DIRECTIVE-2026-09-17.md, Ian's own
// words, and his GO of 07:41 Bangkok 18 September 2026: "Proceed with all six public pages.
// Preserve the simplified navigation. Do not improvise new product pages."
//
// Six public pages and one login stub. The five service pages are NOT retired: their routes,
// their files and their copy all stay exactly as they are, on Ian's opening line "Do not delete
// existing service or methodology content". What changes is that the header stops listing them.
//
// THERE IS NO /systems-we-build. The restructure plan offered it and the Desk ruled it out on
// 18 September: no eighth page of any kind in this build. The consequence is recorded where it
// bites, on the three capability cards in src/copy/homeRebuild.js, which render without a
// Learn more link because there is nowhere for one to go.
// ---------------------------------------------------------------------------------------
export const ROUTE_HOW_IT_WORKS = '/how-it-works';
export const ROUTE_EXAMPLES = '/examples';
export const ROUTE_ABOUT = '/about';
export const ROUTE_CONTACT = '/contact';
export const ROUTE_CLIENT_LOGIN = '/client-login';

// ---------------------------------------------------------------------------------------
// THE VISIBILITY REFRESH, 30 September 2026 (bridge row 4007, brief
// C:\Projects\IWT\02-builds\executive-assistant\work\briefs\
// 2026-09-30-site-dashboard-hlt-website-visibility-refresh.md). Two new public pages.
//
// CONFLICT NAMED, NOT RESOLVED HERE: the 18 September ruling in
// C:\Projects\hlt\src\constants\routes.js (this file, above) says "there is no eighth page" and
// HLT-SITE-DIRECTIVE-2026-09-17.md locks six public pages plus Client Login. Today's brief
// explicitly commissions these two pages as in-scope deliverables (items 4 and 5), on Ian's own
// word of 30 September routed through the EA Desk and ChatGPT's spec. The Desk's brief instructs
// the builder to build them and list the doctrine conflict for Ian, not to resolve it by refusing
// the work; see the visibility-refresh report for the flag.
export const ROUTE_HUA_HIN = '/hua-hin';
export const ROUTE_BUSINESS_BLINDSPOTS = '/business-blindspots';
// Legal placeholders only (constraint 7 of the brief): PDPA / Data Handling and Cookie Policy did
// not exist before this brief. Both pages say "coming soon" in plain words; no legal text is
// invented for them.
export const ROUTE_PDPA = '/pdpa';
export const ROUTE_COOKIES = '/cookies';
export const ROUTE_TERMS = '/terms';
export const ROUTE_PRIVACY = '/privacy';
// The owner-dependency page, from Ian's fuller spec of 30 September 2026 (sections 21 and 22),
// which put it on the desktop header and in the footer.
export const ROUTE_OWNER_DEPENDENCY = '/owner-dependency';

// ---------------------------------------------------------------------------------------
// THE REPOSITIONING, 1 October 2026 (Ian's "HIGH LEVEL THAI WEBSITE REPOSITIONING BRIEF" of that
// morning, reviewed at C:\Projects\hlt-estate\02-builds\hlt-site-kit\
// 2026-10-01-HLT-REPOSITIONING-BRIEF-REVIEWED.md, and his rulings in the same conversation:
// "Agreed to the Home and other page structuring"). Two new public pages, the capability pages
// behind switches, and Insights held behind a switch.
//
// WHAT IS NOT HERE, on his word of the same day: no Full Chairs page and no Voice AI page.
// ---------------------------------------------------------------------------------------
export const ROUTE_PROBLEMS = '/problems-we-fix';
export const ROUTE_WHO = '/who-we-help';
export const ROUTE_INSIGHTS = '/insights';
// One route per capability, under one prefix; the slugs and the switches live in
// src/config/features.js and the copy in src/copy/capabilities.js. Only an enabled capability is
// routed, listed, prerendered or put in the sitemap.
export const ROUTE_CAPABILITIES = '/capabilities';
export const capabilityRoute = (slug) => `${ROUTE_CAPABILITIES}/${slug}`;
export const CAPABILITY_ROUTES = enabledCapabilities().map(capabilityRoute);

// THE PUBLIC NAVIGATION, 1 October 2026, from the repositioning brief (section 20): "Home,
// Business Read, How It Works, Problems We Fix, Who We Help, About, Contact", with Insights only
// when it exists. Home is the lockup on the desktop bar (as since 30 September) and a line in the
// mobile menu. Blindspots, Owner Dependency, Hua Hin and Examples stay live and move to the
// footer and the mobile menu, because the brief's header has seven places and these are the
// pages the brief does not list.
//
// WHAT THIS SUPERSEDES. The 30 September bar "How It Works | Business Read | Blindspots | Owner
// Dependency | About", and its primary action "Start with the Business Read", which the brief
// replaces with "Book a Fit Call" (section 22; Ian, 1 October: Google Calendar and Meet, LINE and
// WhatsApp as backups).
export const PUBLIC_NAV = [
    { labelKey: 'brNavLink', to: ROUTE_BUSINESS_READ },
    { labelKey: 'hiwNavLink', to: ROUTE_HOW_IT_WORKS },
    { labelKey: 'problemsNavLink', to: ROUTE_PROBLEMS },
    { labelKey: 'whoNavLink', to: ROUTE_WHO },
    { labelKey: 'aboutNavLink', to: ROUTE_ABOUT },
    ...(SHOW_INSIGHTS ? [{ labelKey: 'insightsNavLink', to: ROUTE_INSIGHTS }] : []),
    { labelKey: 'contactNavLink', to: ROUTE_CONTACT },
];

// The mobile menu: Home, the bar's pages, then the four the bar leaves to the footer.
export const MOBILE_NAV = [
    { labelKey: 'homeNavHome', to: ROUTE_HOME },
    ...PUBLIC_NAV,
    { labelKey: 'blindNavLink', to: ROUTE_BUSINESS_BLINDSPOTS },
    { labelKey: 'odNavLink', to: ROUTE_OWNER_DEPENDENCY },
    { labelKey: 'huaHinNavLink', to: ROUTE_HUA_HIN },
    { labelKey: 'exNavLink', to: ROUTE_EXAMPLES },
];

// The footer's quick links: every public page, in the brief's order, then the four it does not
// name. The footer lays them in two columns.
export const FOOTER_QUICK_LINKS = [
    { labelKey: 'homeNavHome', to: ROUTE_HOME },
    ...PUBLIC_NAV,
    { labelKey: 'blindNavLink', to: ROUTE_BUSINESS_BLINDSPOTS },
    { labelKey: 'odNavLink', to: ROUTE_OWNER_DEPENDENCY },
    { labelKey: 'huaHinNavLink', to: ROUTE_HUA_HIN },
    { labelKey: 'exNavLink', to: ROUTE_EXAMPLES },
];

// The footer's capabilities column (brief, section 29): only the enabled ones, so the column is
// absent until Ian turns the first switch on.
export const FOOTER_CAPABILITY_LINKS = enabledCapabilities().map((slug) => ({ label: capabilities[slug].name, to: capabilityRoute(slug) }));

// The footer's legal links: four placeholders until Ian supplies or approves the text.
export const LEGAL_LINKS = [
    { labelKey: 'footerLegalTerms', to: ROUTE_TERMS },
    { labelKey: 'footerLegalPrivacy', to: ROUTE_PRIVACY },
    { labelKey: 'footerLegalPdpa', to: ROUTE_PDPA },
    { labelKey: 'footerLegalCookies', to: ROUTE_COOKIES },
];

// Every public route in the language layout, for the prerender, the sitemap and the tests. The
// login stub and the four legal placeholders are served but carry noindex, so they are listed
// separately from the pages a crawler should index.
export const INDEXABLE_ROUTES = [
    ROUTE_HOME,
    ROUTE_BUSINESS_READ,
    ROUTE_HOW_IT_WORKS,
    ROUTE_PROBLEMS,
    ROUTE_WHO,
    ROUTE_EXAMPLES,
    ROUTE_ABOUT,
    ROUTE_CONTACT,
    ROUTE_HUA_HIN,
    ROUTE_BUSINESS_BLINDSPOTS,
    ROUTE_OWNER_DEPENDENCY,
    ...(SHOW_INSIGHTS ? [ROUTE_INSIGHTS] : []),
    ...CAPABILITY_ROUTES,
];
export const NOINDEX_ROUTES = [ROUTE_CLIENT_LOGIN, ROUTE_TERMS, ROUTE_PRIVACY, ROUTE_PDPA, ROUTE_COOKIES];

// THE LADDER. One order for the whole site: the header, the home page's stack and the "Step n of
// 5" indicator on each service page all read this array, so a reorder is this array and nothing
// else.
//
// 18 September 2026: THE HEADER NO LONGER READS THIS ARRAY, and neither does the rebuilt home
// page. It is left exactly as it was because `ladderPosition` below still drives the "Step n of
// 5" strip on the five service pages, which stay live and unlinked. Do not edit it in this
// restructure.
//
// IAN, 14 September 2026, 18:10 Bangkok: "The 5 different elements should naturally stack on
// each other starting with the Business Read." The order below is the Desk's reading of
// "naturally stack", and Ian may swap 3 to 5 in a word: read the business, audit its processes,
// build the knowledge base, put an assistant on that knowledge, then the operating dashboard.
// It replaces the 16:24 header order, which was the catalogue's order rather than a sequence.
//
// Brand OS is not in it, on his 16:18 ruling. Every label is a translation key already gated on
// that page's own copy deck, and `homeDescKey` is the home deck's one-liner for that service.
//
// WHY THE DESCRIPTION IS KEYED HERE and not taken from the card's position. It used to be
// `homeCard${index + 1}Desc`, which silently tied each one-liner to where its service happened
// to sit in this array. Reordering the array would have handed every card the wrong sentence.
export const HEADER_SERVICES = [
    { labelKey: 'brNavLink', to: ROUTE_BUSINESS_READ, homeDescKey: 'homeCard4Desc' },
    { labelKey: 'aiosNavLink', to: ROUTE_AIOS_AUDIT, homeDescKey: 'homeCard1Desc' },
    { labelKey: 'obNavLink', to: ROUTE_OPENBRAIN, homeDescKey: 'homeCard5Desc' },
    { labelKey: 'caaProductName', to: ROUTE_EXECUTIVE_ASSISTANT, homeDescKey: 'homeCard2Desc' },
    { labelKey: 'ocpNavLink', to: ROUTE_OPS_COCKPIT, homeDescKey: 'homeCard3Desc' },
];

// Where a route sits on the ladder, 1-based, and what sits either side of it. The alias path of
// a renamed service resolves to the same rung, so /ai-opportunity-audit and /custom-ai-assistant
// show the same indicator as the paths that replaced them.
const ALIASES = {
    [ROUTE_AIOS_AUDIT_ALIAS]: ROUTE_AIOS_AUDIT,
    [ROUTE_EXECUTIVE_ASSISTANT_ALIAS]: ROUTE_EXECUTIVE_ASSISTANT,
};

export const ladderPosition = (route) => {
    const canonical = ALIASES[route] || route;
    const index = HEADER_SERVICES.findIndex((service) => service.to === canonical);
    if (index < 0) return null;

    return {
        step: index + 1,
        total: HEADER_SERVICES.length,
        previous: index > 0 ? HEADER_SERVICES[index - 1] : null,
        next: index < HEADER_SERVICES.length - 1 ? HEADER_SERVICES[index + 1] : null,
    };
};
