// home.js — every visible string on the summary home page, plus the header and footer chrome.
//
// Each line below is lifted VERBATIM from a fenced block in the verified copy deck at
//   C:\Projects\IWT\02-builds\executive-assistant\work\drafts\2026-09-14-HLT-HOME-PAGE-COPY.md
// Nothing here is the builder's own wording. Change the deck first, then this file. Proved by
//   node src/assets/brand/hlt-logo-v2/verify-page-copy.mjs home <deck path>
//
// THE SERVICE CARD NAMES ARE NOT IN THIS FILE. Each card takes its name from the service's own
// translation key (aoaNavLink, caaProductName, ocpNavLink, brNavLink, obNavLink), so a renamed
// service is renamed once. Only the card descriptions live here, and each one is lifted from
// that service's own gated deck.
//
// FIVE CARDS, NOT SIX: Brand OS is off the site's front on Ian's ruling of 14 September 2026,
// 16:18 Bangkok, "Drop Brand OS, keep it on Upwork". Its page and route stay live and unlinked.
export const homeCopy = {
    // Header and footer chrome. Rendered outside <main>, so the copy fixture checks these as
    // chrome rather than as page copy.
    homeNavHome: 'Home',
    homeNavCtaLabel: 'Talk to us on LINE',
    homeFooterBrand: 'High Level Thai',

    homeMetaTitle: 'High Level Thai: AI systems for Thai SMBs, across Thailand',
    homeMetaDescription: 'We help Thai SMBs to implement AI to better systemise business. Five services for service businesses across Thailand, Hua Hin and Bangkok included.',

    // Ian's positioning line, his own words. The Thai value below is ALSO his own words, supplied
    // through the EA Desk on 14 September 2026 at 16:03 Bangkok, and it is the only Thai string
    // on the rebuilt site. No seat translated anything: HLT doctrine forbids it.
    homeHeroHeadline: 'We help Thai SMBs to implement AI to better systemise business.',
    homeHeroLead: "Five services, and each page says what's in it, what you get and what happens next, before you talk to anybody. Start wherever it hurts most.",
    homeCtaLabel: 'Talk to us on LINE',
    homeHeroCtaNote: 'One message on LINE, and nothing to prepare first.',

    homeHeroImage: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1600&q=70',
    homeHeroImageAlt: 'Thai temple rooftops under a wide open sky.',

    // The approach, in three beats. Every line is lifted from a file, never written here: the
    // sources are named row by row in the deck's changes table (the site's own en copy in
    // src/config/hltWebsite.js, HLT_GOVERNING_CONTEXT.md's Governing Doctrine, and the PC1 and
    // PC4 catalogue text). A beat with no line on file would have been left out.
    homeApproachHeading: 'How we work',
    homeBeat1Lead: "We don't start by selling systems",
    homeBeat1Body: "We start by reading the business, and finding where the work leaks, before anything is installed. That's what the Business Read and the AIOS Audit are for.",
    homeBeat2Lead: 'We design to the business that actually exists',
    homeBeat2Body: 'The mechanism gets explained before the recommendation, and what gets designed is what fits your actual business, not how the week is supposed to run.',
    homeBeat3Lead: 'We build in your accounts, and hand over',
    homeBeat3Body: 'Your login, your data, your domain. We get invited in, and we hold nothing after handover. Then you choose what to do, when to do it, and how much to do.',

    homeServicesHeading: 'Five services. Start wherever it hurts.',
    homeCard1Desc: 'We interview every part of your business, then rank where AI saves time and money.',
    homeCard2Desc: "Your expert's judgement, built into an assistant installed in your own account.",
    homeCard3Desc: "A login-gated dashboard built on one rule: work that's done disappears.",
    homeCard4Desc: 'One hour with us, then a written diagnosis of where your margin is going.',
    homeCard5Desc: "Your business's knowledge, indexed so an assistant can answer from it.",
    homeCardsNote: 'We work with service businesses across Thailand, Hua Hin and Bangkok included.',

    homeClosingHeading: 'Not sure which one you need?',
    homeClosingBody: "Message us on LINE and say what's going wrong. If the honest answer is that none of these five is right for you yet, we'll say so.",
    homeLineHandle: 'LINE Official Account @highlevelthai',
};

// Ian's own Thai for his positioning line, 14 September 2026, 16:03 Bangkok. It overrides ONE
// key in the `th` block of translations.js and nothing else on the site.
export const homeHeroHeadlineTh = 'เราช่วยพัฒนา AI ของ SMB ให้สามารถสร้างระบบธุรกิจได้ดียิ่งขึ้น';
