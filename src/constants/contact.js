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
