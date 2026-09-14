// routes.js — the one place a rebuilt page's path is written down.
// Added 14 September 2026, when Ian said a product name was about to change: "hold the product
// name in ONE translation key and ONE route constant so the rename is a two-string change".
//
// The header, the summary home page and App.jsx all read their paths from here, so a renamed
// route is changed once. The old service routes (MCTB, Quotes, RAG, Websites, HomeServices,
// Clinics, Salons, the diagnostic) are deliberately NOT in this file: they stay live, they are
// off the header, and nothing in the rebuild links to them.
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

// THE LADDER. One order for the whole site: the header, the home page's stack and the "Step n of
// 5" indicator on each service page all read this array, so a reorder is this array and nothing
// else.
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
