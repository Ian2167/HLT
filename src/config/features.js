// features.js — the switches Ian asked for on 1 October 2026: "have this prepared so it can be
// switched on or off". One line per thing. Change a value, build, push.
//
// Everything here is OFF by default except what the repositioning brief puts in the main
// hierarchy. Nothing behind an OFF switch is linked, listed in the sitemap, or prerendered.

// ---------------------------------------------------------------- the Fit Call
// Ian, 1 October 2026: "use Google Calendar and Google Meet with Line and WhatsApp backups".
// Paste the appointment schedule's booking-page link here. While it is empty, "Book a Fit Call"
// opens LINE with the backups beneath it, so the button never dead-ends.
export const FIT_CALL_BOOKING_URL = '';

// ---------------------------------------------------------------- Insights
// Held until the first article exists (Ian, 1 October, agreed). Set to true to show the header
// item and the page.
export const SHOW_INSIGHTS = false;

// ---------------------------------------------------------------- Capabilities
// The brief's section 19 footer list, rewritten under the new positioning (Ian, 1 October:
// "Rewrite the Capabilities but again make it so they can be switched on or off"). Each is a
// short page at /capabilities/<slug>. Voice AI and Full Chairs are not here, on Ian's word of the
// same day. Set a slug to true to publish that page and list it in the footer.
export const CAPABILITIES = {
    crm: false,
    automation: false,
    'ai-assistance': false,
    // On, 18 October 2026: Ian's change 2, "Include new websites and website improvement clearly".
    // The page's words are in src/copy/offerRefresh1018.js (websitesCapability).
    websites: true,
    booking: false,
    reviews: false,
    'customer-reactivation': false,
    reporting: false,
};

// ---------------------------------------------------------------- the Business Read fee (18 October 2026)
// 'single' : one package, the reconciled scope, at Ian's usual price ("Business Read usual price
//            THB 22500", Ian, 18 October 2026). The preview's setting, for his approval.
// 'tiers'  : the three tiers and the "From THB 15,000" lines exactly as live since 1 October.
export const BR_PRICING = 'single';

export const enabledCapabilities =() => Object.keys(CAPABILITIES).filter((slug) => CAPABILITIES[slug]);

// Ian, 20 October 2026: hold the repeated sample until a stronger example is ready.
// Keep the components and copy recoverable; this controls both English and Thai pages.
export const SHOW_SAMPLE_PREVIEW = false;

// ---------------------------------------------------------------- the LINE and WhatsApp QR codes
// Owner's word, 21 October 2026: "Remove both QR for now". Off, no page shows either code (footer
// and Contact); the LINE and WhatsApp buttons stay. The SVGs stay in public/brand, so a code
// already printed or shared still opens. Set to true to show them again.
export const SHOW_CHANNEL_QR = false;
