// Ian, 17 September 2026, 07:0x Bangkok, supplied the High Level Thai Official Account add-friend
// link (lin.ee → line.me/R/ti/p/@535zlmbx). One target for every LINE button on the site.
const LINE_BASE = 'https://lin.ee/YQMkWI3';
const utm = (content) =>
    `${LINE_BASE}?utm_source=hlt_website&utm_medium=line_cta&utm_campaign=contact&utm_content=${content}`;

export const CONTACT_URL = utm('generic');
export const LINE_HERO = utm('hero');
export const LINE_HOME_REVIEW = utm('home_line_review');
export const LINE_HOME_FINAL = utm('home_final_cta');
export const LINE_DIAGNOSTIC = utm('diagnostic_result');
export const LINE_ECOSYSTEM = utm('ecosystem');
export const LINE_FOOTER = utm('footer');
export const LINE_SUPPORT = utm('support');

// The Business Read (/business-read), 14 September 2026.
// Its own constant on purpose: not derived from the site's LINE contact URL and not
// utm-tagged. Ian ruled this Official Account for that page on 14 September 2026, and the
// verified copy deck
// (C:\Projects\IWT\02-builds\executive-assistant\work\drafts\2026-09-14-HLT-BUSINESS-READ-PAGE-COPY.md,
// the CTA target block) says "this exact URL, nothing appended without Ian's word". Every
// other constant in this file is left exactly as it was. Flag 2 of that deck asks Ian to rule
// the split between the two accounts; until he does, both live side by side.
// 17 September 2026: https://line.me/R/ti/p/@highlevelthai answered HTTP 404 (no Official Account
// under that ID; node fetch 16 Sept 17:02 Bangkok). Ian supplied the Official Account's own
// add-friend link on 17 September; it is the one LINE target for the whole site.
export const LINE_BUSINESS_READ = 'https://lin.ee/YQMkWI3';

// The six rebuilt pages (14 September 2026: the five catalogue services, OpenBrain and the
// summary home page) all point at the SAME Official Account Ian ruled above. This is an alias,
// not a second URL, so there is one string to change when he rules the split in flag 2 of the
// Business Read deck. Nothing is appended to it, and no utm tag is added without his word.
export const LINE_OFFICIAL_ACCOUNT = LINE_BUSINESS_READ;

// The visibility refresh, 30 September 2026 (bridge row 4007, "HLT website visibility and mobile
// UX refresh"). Verified contact block, carried verbatim from the brief's constraint (c):
//   C:\Projects\IWT\02-builds\executive-assistant\work\briefs\
//   2026-09-30-site-dashboard-hlt-website-visibility-refresh.md
// Email ian@highlevelthai.com, phone and WhatsApp +66 96 839 8305, LINE @535zlmbx via the same
// add-friend link every other LINE button on the site already uses. NEVER "@highlevelthai" — the
// spec named that exact wrong handle as a trap. No street address anywhere: "Working with
// businesses in Hua Hin and across Thailand" is the location line until a registered office is
// confirmed (Ian, 14 September 2026, unchanged by this brief).
export const CONTACT_EMAIL = 'ian@highlevelthai.com';
export const CONTACT_PHONE_DISPLAY = '+66 96 839 8305';
export const CONTACT_PHONE_TEL = 'tel:+66968398305';
export const CONTACT_PHONE_E164 = '+66968398305'; // the same number, as the Organization schema wants it
export const CONTACT_WHATSAPP_URL = 'https://wa.me/66968398305';
export const CONTACT_LOCATION_LINE = 'Working with businesses in Hua Hin and across Thailand';
