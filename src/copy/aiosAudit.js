// aiosAudit.js — every visible string on /aios-audit.
//
// WHY THIS FILE WAS REWRITTEN, IN IAN'S WORDS
// 14 September 2026, 17:50 Bangkok: "The AIOS Audit is still wrong. It is reading too much like
// the Business Read rather than the AIOS Audit which actually Interviews different sectors of
// the business to identify the processes and workflows to find the opportunities where AI would
// save them time and money."
// So the single forty-five-minute review and the 0 to 4 adoption ladder are GONE from this page,
// and what stands here is the interview-led process audit HLT actually runs: research, kickoff,
// one recorded hour per function, opportunities scored on impact against feasibility, blueprint.
// This file was src/copy/aiOpportunityAudit.js and was renamed with git mv, so the history of
// every retired line is one `git log --follow` away.
//
// Each line below is lifted VERBATIM from a fenced block in the verified copy deck at
//   C:\Projects\IWT\02-builds\executive-assistant\work\drafts\2026-09-14-HLT-AIOS-AUDIT-PAGE-COPY.md
// Nothing here is the builder's own wording. Change the deck first, then this file. Proved by
//   node src/assets/brand/hlt-logo-v2/verify-page-copy.mjs aios-audit <deck path>
//
// THE INTERVIEW COUNTS ARE A MARKED SLOT. The tiers are framed by the number of one-hour
// interviews and that number is Ian's to give. Until he does, every count renders as
// "— interviews": a visibly empty slot, never a guess. One line from him fills all three.
//
// PRICES. None. No THB figure is ruled for this service, and no USD ever renders on this site.
// DELIVERY TIME. None either, and that is not an oversight: the three, five and seven days the
// retired page carried belonged to a one-call review, and no turnaround is on file for an
// interview-led audit.
const INTERVIEW_SLOT = '— interviews';

export const aiosAuditCopy = {
    // Nav label: the product name, in one place, as with the Executive Assistant. Renaming it
    // again is this one string plus the deck lines that quote it.
    aiosNavLink: 'AIOS Audit',

    aiosMetaTitle: 'AIOS Audit: interview the business, rank the AI wins | High Level Thai',
    aiosMetaDescription: 'Recorded interviews across every function of your business, a map of how work really moves, and the AI opportunities ranked by impact against feasibility.',

    aiosHeroHeadline: 'We interview every part of your business, then rank where AI saves time and money.',
    aiosHeroLead: "This isn't one call. We read the business first, then sit with the people who run each part of it, one recorded hour at a time, and write down how work actually moves between them. Out of that comes a map of your processes, the pain points named in the words the people doing the work used, and every AI opportunity scored on impact against how hard it is to do. You get a blueprint: what to change, in what order, and what each piece takes.",
    aiosCtaLabel: 'Book the audit on LINE',
    aiosHeroCtaNote: 'Sessions run online and every one is recorded. On-site is available at additional cost.',

    // Hero image: unchanged by the rewrite, and logged in src/assets/brand/hlt-logo-v2/IMAGES.md.
    // A wall of work being mapped out by two people suits an interview-led audit better than it
    // suited the review it replaced.
    aiosHeroImage: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?auto=format&fit=crop&w=1600&q=70',
    aiosHeroImageAlt: 'Two people mapping out a week of work on a glass wall covered in sticky notes.',

    aiosSummaryHeading: "One conversation can't find what's wasting the week.",
    aiosSummaryP1: 'The person who answers the phone, the person who quotes, the person who runs the jobs and the person who chases the money each see a different business. The waste usually sits in the gaps between them, which is why nobody inside can point at it.',
    aiosSummaryP2: "So this isn't one call. We read the business first, then interview each part of it in turn, one recorded hour at a time, with the people who actually do the work.",
    aiosSummaryP3: 'Out of those interviews we build a map of how work really moves between them, and a list of the places it snags, in the words the people doing it used.',
    aiosSummaryP4: 'Then every opportunity where AI would save time or money is scored on impact against feasibility, so the valuable, doable ones come first and the expensive, marginal ones are named as exactly that.',
    aiosSummaryP5: 'The blueprint is the deliverable: the written diagnosis, the ranked opportunities and the order we would do them in.',
    aiosSummaryP6: "We don't promise a revenue number. We sell the interviews, the map, the ranking and the plan, plus a costed quote for whichever build you choose.",
    aiosSummaryP7: 'We work with service businesses across Thailand, Hua Hin and Bangkok included.',

    aiosTiersHeading: 'Three depths. Same method.',

    aiosTier1Name: 'The Focused Audit',
    aiosTier1Desc: 'One part of the business, interviewed and mapped, with its opportunities ranked.',
    aiosTier2Name: 'The Whole Business Audit',
    aiosTier2Desc: 'Every function interviewed, one map of how work moves, one ranked list.',
    aiosTier3Name: 'The Whole Business Audit, Sequenced',
    aiosTier3Desc: 'The same, plus the work sized and put in the order we would do it.',

    aiosRow1Label: 'One-hour interviews',
    aiosRow1A: INTERVIEW_SLOT,
    aiosRow1B: INTERVIEW_SLOT,
    aiosRow1C: INTERVIEW_SLOT,
    aiosRow2Label: 'Functions covered',
    aiosRow2A: 'The one part you pick',
    aiosRow2B: 'Every function of the business',
    aiosRow2C: 'Every function, plus a second pass on the worst',
    aiosRow3Label: 'Recorded sessions',
    aiosRow3A: 'Yes',
    aiosRow3B: 'Yes',
    aiosRow3C: 'Yes',
    aiosRow4Label: 'Process map',
    aiosRow4A: 'The part you picked',
    aiosRow4B: 'How work moves between all of them',
    aiosRow4C: 'How work moves between all of them',
    aiosRow5Label: 'Opportunity list',
    aiosRow5A: 'Ranked by impact and feasibility',
    aiosRow5B: 'Ranked by impact and feasibility',
    aiosRow5C: 'Ranked, with the work sized',
    aiosRow6Label: 'Roadmap',
    aiosRow6A: 'The next three things',
    aiosRow6B: 'A prioritised roadmap',
    aiosRow6C: 'A prioritised roadmap, in delivery order',
    aiosRow7Label: 'Blueprint',
    aiosRow7A: 'Yes',
    aiosRow7B: 'Yes',
    aiosRow7C: 'Yes',
    aiosRow8Label: 'Walkthrough',
    aiosRow8A: 'Written notes',
    aiosRow8B: 'Recorded walkthrough',
    aiosRow8C: 'Live session, recorded',
    aiosRow9Label: 'Where it runs',
    aiosRow9A: 'Online, on-site at additional cost',
    aiosRow9B: 'Online, on-site at additional cost',
    aiosRow9C: 'Online, on-site at additional cost',

    aiosIncludedHeading: 'What you get, on every tier',
    aiosIncluded1: 'A recorded interview for each function we cover, yours to keep and use for team training',
    aiosIncluded2: 'A map of how work actually moves between the people who do it',
    aiosIncluded3: 'The pain points named, in the words the people doing the work used',
    aiosIncluded4: 'An opportunity list, each one scored on impact against how hard it is to do',
    aiosIncluded5: 'A prioritised roadmap: what to do first, what to do next, what can wait',
    aiosIncluded6: 'The blueprint, the written diagnosis and the plan behind it',
    aiosIncluded7: 'A costed quote for whichever build you choose',

    aiosStepsHeading: 'How it runs',
    aiosStep1Lead: 'Research.',
    aiosStep1Body: 'Before we speak to anybody we read the business: the public record, your sector, and what your customers can already see.',
    aiosStep2Lead: 'Kickoff.',
    aiosStep2Body: 'One short session with you to agree what the audit covers, who we speak to, and what a good outcome looks like.',
    aiosStep3Lead: 'The interviews.',
    aiosStep3Body: 'One recorded hour per function or per person. What they actually do, where the day goes, and what keeps breaking.',
    aiosStep4Lead: 'The opportunities.',
    aiosStep4Body: 'Every candidate scored on impact against feasibility, then ranked, so the valuable and doable ones come first.',
    aiosStep5Lead: 'The blueprint.',
    aiosStep5Body: 'The written diagnosis and the plan: what to change, in what order, and what each piece takes.',

    aiosFaqHeading: 'Questions owners ask first',
    aiosFaq1Q: 'Will you tell me how much revenue this will add?',
    aiosFaq1A: 'No. The audit maps how you work now and ranks what to change, with impact and feasibility attached. Revenue promises made before seeing your business are guesses.',
    aiosFaq2Q: 'Who needs to be in the interviews?',
    aiosFaq2A: 'The people who actually do the work, a function at a time. The owner in one, whoever quotes in another, whoever runs the jobs in a third. One hour each, and nobody has to prepare.',
    aiosFaq3Q: 'Do you need logins to our systems?',
    aiosFaq3A: 'No. The audit runs on what your people tell us and what they show us in the sessions. Anything we build afterwards is created in your own accounts.',
    aiosFaq4Q: "What if the honest answer is that I shouldn't automate anything yet?",
    aiosFaq4A: "Then the blueprint says that, and what to fix in the process first becomes the deliverable. That's a legitimate outcome of an audit.",
    aiosFaq5Q: 'Can you come to us?',
    aiosFaq5A: 'Sessions run online, and every one is recorded so you can use it for review or for training your team. On-site is available at additional cost.',

    aiosClosingHeading: 'Interviews in. A ranked, costed plan out.',
    aiosClosingBody: 'Message us on LINE and tell us which parts of the business you want us to speak to. We read the business before the first session, so the sooner you say yes the sooner that starts.',
    aiosLineHandle: 'LINE Official Account @highlevelthai',
};
