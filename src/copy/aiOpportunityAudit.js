// aiOpportunityAudit.js — every visible string on /ai-opportunity-audit.
//
// WHY THIS FILE EXISTS AND WHAT IT MAY NOT CONTAIN
// Each line below is lifted VERBATIM from a fenced block in the verified copy deck at
//   C:\Projects\IWT\02-builds\executive-assistant\work\drafts\2026-09-14-HLT-AI-OPPORTUNITY-AUDIT-PAGE-COPY.md
// Nothing here is the builder's own wording. To change a line, change the deck first, then
// this file, never the page component. The page is proved verbatim against the deck by
//   node src/assets/brand/hlt-logo-v2/verify-page-copy.mjs /ai-opportunity-audit <deck path>
//
// PRICES. No THB figure is ruled for PC1 yet, so there is no price key in this file and no
// price renders on the page. The deck carries a PRICE SLOT line per tier. No USD, ever.
//
// LANGUAGE. English only this pass (Ian, 14 September 2026, intent section 3.8). translations.js
// spreads this same object into both `en` and `th`, so the Thai toggle falls back to English
// rather than showing a machine translation, which HLT doctrine forbids.
export const aiOpportunityAuditCopy = {
    // Nav label: taken from the product name in the title tag, because the deck carries no nav
    // line of its own. Same device as brNavLink on the Business Read page.
    aoaNavLink: 'AI Opportunity Audit',

    aoaMetaTitle: 'AI Opportunity Audit: a scored review and a ranked 90-day plan | High Level Thai',
    aoaMetaDescription: 'Forty-five minutes on how your week really runs, then a scored review and a ranked list of what to automate first. For service businesses across Thailand.',

    aoaHeroHeadline: 'Something in your week is wasting time. We name it, and what fixing it costs.',
    aoaHeroLead: "Most owners know something in the week is wasting time. Very few can say which thing, or what fixing it would cost. We spend forty-five minutes on how work really moves through your week, not how it's supposed to, then score you against a 0 to 4 AI adoption ladder and rank what to automate first. You get a PDF you keep, and there's no login to hand over.",
    aoaCtaLabel: 'Book the audit on LINE',
    aoaHeroCtaNote: 'Delivery from three days. No logins needed.',

    // Hero image: free-licence stock, hotlinked, logged in src/assets/brand/hlt-logo-v2/IMAGES.md.
    aoaHeroImage: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?auto=format&fit=crop&w=1600&q=70',
    aoaHeroImageAlt: 'Two people mapping out a week of work on a glass wall covered in sticky notes.',

    aoaSummaryHeading: 'You can feel the waste. Nobody can point at it.',
    aoaSummaryP1: 'Most owners know something in the week is wasting time. Very few can say which thing, or what fixing it would cost.',
    aoaSummaryP2: "Here's what happens. We interview you for forty-five minutes about how work really moves through the week, not how it's supposed to.",
    aoaSummaryP3: 'Then we score you against a 0 to 4 AI adoption ladder, with an evidence table showing how the score was reached.',
    aoaSummaryP4: "You get the top five automation candidates ranked by effort and impact, and a 90-day sequence in the order we'd actually do it.",
    aoaSummaryP5: "If the honest answer is that you shouldn't automate anything yet, the report says so and the stop-doing list becomes the deliverable.",
    aoaSummaryP6: "We don't promise a revenue number. We sell the review, the plan, and a costed quote for whichever build you choose.",
    aoaSummaryP7: 'We work with service businesses across Thailand, Hua Hin and Bangkok included.',

    aoaTiersHeading: 'Three depths. Same method.',

    aoaTier1Name: 'Scored Audit',
    aoaTier1Desc: 'One interview, your adoption score with the evidence table, and the top five ranked.',
    aoaTier2Name: 'Audit and Sequence',
    aoaTier2Desc: 'The same, plus the 90-day sequence, the stop-doing list and one costed build quote.',
    aoaTier3Name: 'Audit, Sequence and Build Quotes',
    aoaTier3Desc: 'Two interviews, hours against each candidate, two costed paths and a board summary.',

    aoaRow1Label: 'Delivery',
    aoaRow1A: '3 days',
    aoaRow1B: '5 days',
    aoaRow1C: '7 days',
    aoaRow2Label: 'Revisions',
    aoaRow2A: '1',
    aoaRow2B: '2',
    aoaRow2C: '3',
    aoaRow3Label: 'Interviews',
    aoaRow3A: '1 (45 min)',
    aoaRow3B: '1 (45 min)',
    aoaRow3C: '2 (45 min each)',
    aoaRow4Label: 'PDF length',
    aoaRow4A: '8 pages',
    aoaRow4B: '10 to 12 pages',
    aoaRow4C: '10 to 12 pages plus board summary',
    aoaRow5Label: 'Ranked candidates',
    aoaRow5A: 'Top 5',
    aoaRow5B: 'Top 5 with effort and impact',
    aoaRow5C: 'Top 5 with effort, impact and hours',
    aoaRow6Label: '90-day sequence',
    aoaRow6A: 'No',
    aoaRow6B: 'Yes',
    aoaRow6C: 'Yes',
    aoaRow7Label: 'Stop-doing list',
    aoaRow7A: 'No',
    aoaRow7B: 'Yes, 3 items',
    aoaRow7C: 'Yes, 3 items',
    aoaRow8Label: 'Costed build quote',
    aoaRow8A: 'No',
    aoaRow8B: '1 path',
    aoaRow8C: '2 paths',
    aoaRow9Label: 'Walkthrough call',
    aoaRow9A: 'No',
    aoaRow9B: '30 min, recorded',
    aoaRow9C: '45 min, recorded',

    aoaIncludedHeading: 'What you get, on every tier',
    aoaIncluded1: 'A recorded 45-minute interview about how work actually moves through the week',
    aoaIncluded2: 'A score against a 0 to 4 AI adoption ladder, with an evidence table showing how the score was reached',
    aoaIncluded3: 'The top five automation candidates ranked by effort and impact',
    aoaIncluded4: 'A costed quote for whichever build you choose',
    aoaIncluded5: 'The PDF, delivered as a file you keep',
    aoaIncluded6: 'No logins. Screenshots and a task list are enough',

    aoaStepsHeading: 'How it runs',
    aoaStep1Lead: 'Intake.',
    aoaStep1Body: 'You send screenshots of your three main tools, one week of your real task list, and your tool costs.',
    aoaStep2Lead: 'The interview.',
    aoaStep2Body: 'Forty-five minutes, recorded, with the person who decides. How work actually moves, not how it should.',
    aoaStep3Lead: 'Scoring.',
    aoaStep3Body: 'Your position on the 0 to 4 adoption ladder, with an evidence table showing how the score was reached.',
    aoaStep4Lead: 'Ranking and sequence.',
    aoaStep4Body: 'Top five automation candidates by effort and impact, three things to stop doing, and a 90-day order of delivery.',
    aoaStep5Lead: 'Delivery.',
    aoaStep5Body: 'The PDF, plus a recorded walkthrough call and a costed quote for whichever build you pick.',

    aoaFaqHeading: 'Questions owners ask first',
    aoaFaq1Q: 'Will you tell me how much revenue this will add?',
    aoaFaq1A: 'No. The audit scores how you work now and ranks what to change, with effort and price attached. Revenue promises made before seeing your data are guesses.',
    aoaFaq2Q: 'Do you need logins?',
    aoaFaq2A: 'No. Screenshots and a task list are enough. Builds that follow are created in your own accounts.',
    aoaFaq3Q: "What if the honest answer is that I shouldn't automate anything?",
    aoaFaq3A: "Then the audit says that, and the stop-doing list becomes the deliverable. That's a legitimate outcome of the audit.",
    aoaFaq4Q: 'Can this be repeated later?',
    aoaFaq4A: "Yes. It's scored, so a repeat audit in six months is directly comparable against the first.",
    aoaFaq5Q: 'Who needs to be on the interview?',
    aoaFaq5A: 'The person who can actually decide what changes. One is enough. If two of you run the business, bring both, at no extra cost.',

    aoaClosingHeading: 'Forty-five minutes in. A ranked 90-day plan out.',
    aoaClosingBody: 'Message us on LINE and pick a time that suits you. Send the screenshots and the task list when you book, and the audit starts the day they land.',
    aoaLineHandle: 'LINE Official Account @highlevelthai',
};
