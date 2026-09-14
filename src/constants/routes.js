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

// The header's order, exactly as Ian ruled it on 14 September 2026 at 16:24 Bangkok: Home, then
// these five, then the LINE button. Brand OS is not in it. The labels are translation keys, each
// one already gated on that page's own copy deck.
export const HEADER_SERVICES = [
    { labelKey: 'aiosNavLink', to: ROUTE_AIOS_AUDIT },
    { labelKey: 'caaProductName', to: ROUTE_EXECUTIVE_ASSISTANT },
    { labelKey: 'ocpNavLink', to: ROUTE_OPS_COCKPIT },
    { labelKey: 'brNavLink', to: ROUTE_BUSINESS_READ },
    { labelKey: 'obNavLink', to: ROUTE_OPENBRAIN },
];
