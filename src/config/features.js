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

// ---------------------------------------------------------------- About Ian
// The brief's section 17 paragraph. Ian's rules of 18 and 27 September keep any founder line off
// the site until he lifts them himself; he asked on 1 October for it to be "prepared so it can be
// switched on or off". Set to true to show it.
export const SHOW_ABOUT_IAN = false;

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
    websites: false,
    booking: false,
    reviews: false,
    'customer-reactivation': false,
    reporting: false,
};

export const enabledCapabilities = () => Object.keys(CAPABILITIES).filter((slug) => CAPABILITIES[slug]);
