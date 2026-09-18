// homeRebuild.js — every visible string on the restructured home page, 18 September 2026.
//
// Each line below is lifted VERBATIM from a fenced SENDABLE block in the gated copy pack at
//   C:\Projects\hlt-estate\02-builds\hlt-site-kit\copy\2026-09-18-home.md
// Nothing here is the builder's own wording. Change the pack first, then this file.
//
// THE RULE THE PACK SETS FOR THIS FILE (section 5 of its index): only fenced blocks are copy,
// SENDABLE renders and NOTE never does, and no copy is invented for an empty slot. Every NOTE
// block in that file stayed out.
//
// WHY THIS IS A SECOND MODULE AND NOT AN EDIT TO home.js. The 14 September home page sold five
// services from a catalogue; this one leads on owner dependence and sells one first step. Where
// a key means the same thing on both pages it is reused and the value here wins, because this
// module is spread AFTER homeCopy in translations.js. Where it does not, the key is new. The 14
// September strings stay on disk in src/copy/home.js untouched, on Ian's opening line "Do not
// delete existing service or methodology content", and because HEADER_SERVICES still names
// homeCard1Desc to homeCard5Desc as each service's own one-liner.
//
// WHAT THE PACK SUPPLIES AS A TARGET RATHER THAN A STRING. Block 7 is `/business-read` and block
// 9 is `https://lin.ee/YQMkWI3`. Neither is written here: the page reads ROUTE_BUSINESS_READ from
// src/constants/routes.js and LINE_OFFICIAL_ACCOUNT from src/constants/contact.js, so there is
// still exactly one LINE address on this site and one place a path is written down.
//
// THE THREE CAPABILITY CARDS CARRY NO LINK. The pack's block 21 ends with a "Learn more" label
// and its NOTE 3 says the three cards need three destinations that no page in the pack provides.
// The Desk ruled out an eighth page on 18 September, so there is nowhere for the link to go and
// the label is not rendered. It stays in the pack for the day a destination exists.
export const homeRebuildCopy = {
    // Blocks 2 and 3.
    homeMetaTitle: 'Build a business that depends less on you | High Level Thai',
    homeMetaDescription: 'HLT helps Thai service businesses find where decisions, information and work get stuck, then builds the systems that take the pressure off the owner.',

    // The hero, blocks 4, 5, 6, 8 and 10. Ian's own words, verbatim, in the 17 September
    // directive. Two calls to action is his own hero as he wrote it; the pack's NOTE 1 flags the
    // research finding that argues for one and leaves the ruling with him.
    homeHeroHeadline: 'Build a business that depends less on you.',
    homeHeroLead: 'HLT helps Thai service businesses find where decisions, information and work get stuck, then builds better systems to remove the pressure.',
    homeCtaLabel: 'Start with a Business Read',
    homeSecondaryCtaLabel: 'Talk to us on LINE',
    homeHeroCtaNote: 'One message on LINE, and nothing to prepare first.',

    // The problem, blocks 11 to 14. Block 13 is seven lines in one fenced block, one key each,
    // in the pack's order. Block 14 is two lines, one key each.
    homeProblemHeading: 'What it looks like from the inside',
    homeProblemLead: "Most owners don't describe it as owner dependence. They describe a week that looks like this.",
    homeSign1: "Your staff can't get far without asking you.",
    homeSign2: 'Enquiries arrive on Facebook, on LINE and through the website, and each one is handled a different way.',
    homeSign3: 'Work sits still until you approve it.',
    homeSign4: "How things get done lives in somebody's head, not on paper.",
    homeSign5: "You can't see what needs attention without going and asking.",
    homeSign6: 'The same admin gets done again every week.',
    homeSign7: 'Follow-up happens when somebody remembers.',
    homeConsequenceP1: "None of that is a people problem. It's what happens when a business grows faster than the systems underneath it.",
    homeConsequenceP2: "And it doesn't ease off as you grow. More work means more of you.",

    // The three stages, blocks 15 to 19. Each stage block is a name line and a body line.
    homeStagesHeading: 'Three stages, in order',
    homeStage1Name: 'Understand',
    homeStage1Body: 'The Business Read. We find the main friction points and identify what deserves attention first.',
    homeStage2Name: 'Diagnose',
    homeStage2Body: 'The AIOS Audit. Used where the problem runs across several parts of the business and requires deeper investigation.',
    homeStage3Name: 'Improve',
    homeStage3Body: 'HLT builds the systems required: decision and admin support, operational visibility, knowledge capture, workflow automation.',
    homeStagesClosing: "You don't have to know which one you need. The read decides that.",
    homeStagesLinkLabel: 'See how it works',

    // The capabilities, blocks 20 to 22. Three cards, each a name line and a body line, and no
    // link on any of them for the reason in this file's header.
    homeCapHeading: 'How we improve the business',
    homeCapLead: 'Depending on what the Business Read finds, HLT may build systems for:',
    homeCap1Name: 'Decision support',
    homeCap1Body: 'Reduce repetitive owner decisions and administrative load.',
    homeCap2Name: 'Operational visibility',
    homeCap2Body: 'Show what needs attention without requiring constant checking.',
    homeCap3Name: 'Business knowledge',
    homeCap3Body: "Capture the knowledge that currently lives inside key people's heads.",
    homeAiLine: 'We improve how the business operates. Where AI can remove repetitive work, improve visibility or reduce dependence on individuals, we use it.',

    // Proof, blocks 23 and 24. Commitments and mechanism, never a result: the pack's NOTE 4
    // records that no delivered HLT engagement exists on file, so no outcome is claimed.
    homeProofHeading: 'What you can hold us to',
    homeProof1: 'Nothing starts with a system. It starts with a read of your business.',
    homeProof2: 'Everything we write is labelled as verified or not established, so you never have to guess which parts were checked.',
    homeProof3: 'We build in your accounts. Your login, your data, your domain.',
    homeProof4: 'We get invited in, and we hold nothing after handover.',
    homeProof5: 'The read ends with a costed list of what to change. Some of it we could do and some of it you should do yourself, and the read says which is which.',
    homeProofClosing: "You're not obliged to do anything with it.",

    // The closing call to action, block 25. Same label as the hero, on purpose.
    homeClosingHeading: 'Start where the pressure is',
    homeClosingBody: "One hour with us, then a written read of where the business leans on you and what to change first. If none of this is right for you yet, we'll say so.",
    homeClosingNote: 'Or message us on LINE. Nothing to prepare first.',
};
