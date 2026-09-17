// brandOs.js — every visible string on /brand-os.
//
// Each line below is lifted VERBATIM from a fenced block in the verified copy deck at
//   C:\Projects\IWT\02-builds\executive-assistant\work\drafts\2026-09-14-HLT-BRAND-OS-PAGE-COPY.md
// Nothing here is the builder's own wording. To change a line, change the deck first, then this
// file, never the page component. Proved verbatim by
//   node src/assets/brand/hlt-logo-v2/verify-page-copy.mjs brand-os <deck path>
//
// PRICES. No THB figure is ruled for PC2 yet, so there is no price key and no price renders.
// LANGUAGE. English only this pass; translations.js spreads this object into `en` and `th` alike.
export const brandOsCopy = {
    bosNavLink: 'Brand OS',

    bosMetaTitle: 'Brand OS: a portable HTML brand guide, tokens and voice rules | High Level Thai',
    bosMetaDescription: 'Your colours, fonts, voice rules and asset templates as one working HTML file a new hire could use correctly on day one. For businesses across Thailand.',

    bosHeroHeadline: 'A brand system a new hire could use correctly on day one.',
    bosHeroLead: 'Most brand guidelines are a PDF nobody opens twice. This is a working file instead: your colours and fonts as tokens with a usage rule beside every one, the words you use and the words you never use, and copy-paste templates for the assets you actually make. It opens in any browser, it carries a light and dark toggle, and you keep the editable master.',
    bosCtaLabel: 'Talk to us on LINE',
    bosHeroCtaNote: 'Delivery from five days. The files are yours to keep.',

    bosHeroImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=70',
    bosHeroImageAlt: "A designer's desk with printed colour swatches and brand sketches on a tablet.",

    bosSummaryHeading: "Guidelines nobody opens aren't a brand system.",
    bosSummaryP1: "A PDF can't show a live theme toggle and nobody can copy a token value out of it. So it gets opened once, and after that everyone guesses.",
    bosSummaryP2: "Here's what happens. We spend ninety minutes on archetype and anti-positioning, starting from the three to five \"we are not X\" statements you write before the call.",
    bosSummaryP3: 'Then we build the system around your identity: colours and fonts as tokens with a written usage rule beside every one, light and dark pairs, and word-lists of what you use and what you never use.',
    bosSummaryP4: 'You get a self-contained HTML brand guide with a theme toggle, and the markdown master as the editable source you own.',
    bosSummaryP5: 'You also get copy-paste brief templates in the four-part shape, so the next person who needs an image can brief it properly without asking you first.',
    bosSummaryP6: "This isn't a logo design service. We build the system around your identity, and if you have no logo at all, that needs designing first and we'll say so.",
    bosSummaryP7: 'We work with service businesses across Thailand, Hua Hin and Bangkok included.',

    bosTiersHeading: 'Three depths. Same system.',

    bosTier1Name: 'Core Guide',
    bosTier1Desc: 'The HTML guide with core tokens, the markdown master and one image-brief template.',
    bosTier2Name: 'Brand OS',
    bosTier2Desc: 'The full token set with a usage rule each, two named asset templates and your Canva Brand Kit.',
    bosTier3Name: 'Brand OS and Asset System',
    bosTier3Desc: 'Everything above, plus a stakeholder session, four asset templates and three image briefs.',

    bosRow1Label: 'Delivery',
    bosRow1A: '5 days',
    bosRow1B: '8 days',
    bosRow1C: '12 days',
    bosRow2Label: 'Revisions',
    bosRow2A: '1',
    bosRow2B: '2',
    bosRow2C: '3',
    bosRow3Label: 'Intake interview',
    bosRow3A: '45 min',
    bosRow3B: '90 min archetype and anti-positioning',
    bosRow3C: '90 min plus a stakeholder session',
    bosRow4Label: 'HTML brand guide',
    bosRow4A: 'Yes, core tokens',
    bosRow4B: 'Yes, full, with theme toggle',
    bosRow4C: 'Yes, full, with theme toggle',
    bosRow5Label: 'Markdown master',
    bosRow5A: 'Yes',
    bosRow5B: 'Yes',
    bosRow5C: 'Yes',
    bosRow6Label: 'Light and dark token pairs',
    bosRow6A: 'Core set',
    bosRow6B: 'Full set with usage rule per token',
    bosRow6C: 'Full set with usage rule per token',
    bosRow7Label: 'Named asset templates',
    bosRow7A: 'No',
    bosRow7B: '2',
    bosRow7C: '4',
    bosRow8Label: 'Image-brief templates',
    bosRow8A: '1',
    bosRow8B: '2',
    bosRow8C: '3, in the four-part shape',
    bosRow9Label: 'Logo notes',
    bosRow9A: 'Basic',
    bosRow9B: 'Yes',
    bosRow9C: 'Yes',
    bosRow10Label: 'Canva Brand Kit populated',
    bosRow10A: 'No',
    bosRow10B: 'Yes',
    bosRow10C: 'Yes',

    bosIncludedHeading: 'What you get, on every tier',
    bosIncluded1: 'A self-contained, portable HTML brand guide with a theme toggle',
    bosIncluded2: 'The markdown master, as the editable source',
    bosIncluded3: 'Logo notes covering clear space, minimum sizes and misuse',
    bosIncluded4: 'CSS custom-property tokens with a written usage rule beside every token',
    bosIncluded5: 'Voice word-lists: the words you use, and the words you never use',
    bosIncluded6: 'Copy-paste brief templates in the four-part shape: role, strict visual spec, concept and layout, copy-paste prompt',

    bosStepsHeading: 'How it runs',
    bosStep1Lead: 'Intake.',
    bosStep1Body: 'You send your logo files, in vector where you have them, your current colours, the fonts you hold a licence for, and any previous guidelines, even the ones you dislike.',
    bosStep2Lead: 'The interview.',
    bosStep2Body: 'Ninety minutes on archetype and anti-positioning, starting from the three to five "we are not X" statements you write before the call.',
    bosStep3Lead: 'Tokens and rules.',
    bosStep3Body: 'Your colours and fonts become light and dark token pairs, each with a written usage rule, alongside the word-lists of what you use and never use.',
    bosStep4Lead: 'Templates.',
    bosStep4Body: 'The copy-paste brief templates in the four-part shape, and the named asset templates for the pieces you make most often.',
    bosStep5Lead: 'Handover.',
    bosStep5Body: 'The HTML guide, the markdown master, the logo notes, and your Canva Brand Kit populated, with one named approver signing it off.',

    bosFaqHeading: 'Questions owners ask first',
    bosFaq1Q: 'Is this a logo design service?',
    bosFaq1A: "No. We build the system around your identity: tokens, rules, word-lists and templates. If you have no logo at all, that needs designing first and we'll say so.",
    bosFaq2Q: 'Why HTML rather than a PDF?',
    bosFaq2A: "Because a PDF can't show a live theme toggle or let someone copy a token value. The HTML file is self-contained and opens anywhere, and you get the markdown master alongside it.",
    bosFaq3Q: 'Will my team actually use it?',
    bosFaq3A: "That's what the usage rule beside every token and the copy-paste brief templates are for. Rules people can paste get used. Long PDFs don't.",
    bosFaq4Q: 'Do you guarantee it will improve brand recognition?',
    bosFaq4A: 'No. The deliverable is the system and the templates. Recognition comes from consistent use over time, which is your side of the work.',

    bosClosingHeading: 'One file. Your colours, your words, your templates.',
    bosClosingBody: 'Message us on LINE with whatever you have already, even if you dislike it. Ninety minutes on the call, and the files are yours to keep.',
    bosLineHandle: 'LINE Official Account',
};
