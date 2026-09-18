// businessReadRebuild.js — every visible string on /business-read, re-copied 18 September 2026.
//
// Each line below is lifted VERBATIM from a fenced SENDABLE block in the gated copy pack at
//   C:\Projects\hlt-estate\02-builds\hlt-site-kit\copy\2026-09-18-business-read.md
// Nothing here is the builder's own wording. Change the pack first, then this file.
//
// THE RULE THE PACK SETS FOR THIS FILE (section 5 of its index): only fenced blocks are copy,
// SENDABLE renders and NOTE never does, and no copy is invented for an empty slot. Every NOTE
// block in that file stayed out.
//
// WHY THIS IS A MODULE AND WHY IT IS SPREAD LAST. The 14 September Business Read strings are
// written INLINE in the en block of src/translations.js, not in a module, so a spread at the top
// of that block would lose to them. This module is therefore spread at the FOOT of both blocks,
// after the inline keys. Not one 14 September line is edited or deleted: the ones this page still
// uses are overridden here key by key, and the ones it no longer renders stay exactly where they
// are.
//
// WHAT CHANGED AND WHY, from the pack's own opening note. Two things. The lead message moves from
// margin to owner dependence, because the 17 September directive rules the site's lead message.
// And the page is restructured to the four questions Ian wrote for it: what is happening, what
// the Business Read does, what you receive, what it is not. Every delivery term, price, tier name,
// interview length and answer that still holds is carried word for word from the 14 September
// deck, which passed the same gate.
//
// WHAT STOPS RENDERING AND IS NOT DELETED. brSummaryHeading and brSummaryP1 to brSummaryP7, the
// margin-led summary the four questions replace; brIncludedHeading and brIncluded1 to
// brIncluded6, replaced by the pack's "What you receive". Every one of those keys is still in
// src/translations.js and every word is still in the 14 September deck.
//
// THE CTA TARGET IS NOT WRITTEN HERE. Block 7 is `https://lin.ee/YQMkWI3`. The page reads
// LINE_BUSINESS_READ from src/constants/contact.js, which is that exact string, so there is still
// one LINE address on this site and one place it is written down.
//
// THE PRICES ARE RULED AND THE BANDING IS NOT. The pack's NOTE 1: Ian ruled the three figures on
// 14 September, then ruled on 15 September that pricing should band by business size, and two
// decisions at the foot of the analyst's paper are still open. This page ships the ruled figures
// with no band language, which is the only honest reading of the record today.
export const businessReadRebuildCopy = {
    // Block 1. Ian's navigation line names this page "Business Read"; the 14 September key read
    // "The Business Read", taken from that deck's title tag because it carried no nav label.
    brNavLink: 'Business Read',

    // Blocks 2 and 3.
    brMetaTitle: 'The Business Read: what to change first | High Level Thai',
    brMetaDescription: 'A written read of where your business depends on you, where work gets repeated and what to change first. For Thai service businesses. From THB 15,000.',

    // The hero, blocks 4, 5, 6 and 8.
    brHeroHeadline: 'Find out what your business should change first.',
    brHeroLead: "An hour with us, then a written read of where decisions stall, where information gets lost and where the business leans on you. You get it on a promised day, and you're not obliged to do anything with it.",
    brCtaLabel: 'Book the hour on LINE',
    brHeroCtaNote: 'From THB 15,000, excluding VAT at seven per cent. Three working days.',

    // Question one, blocks 9 and 10. The block is three paragraphs; one key each.
    brHappeningHeading: 'What is happening',
    brHappeningP1: 'Your business may be growing, but more work still means more owner involvement.',
    brHappeningP2: "That isn't a people problem and it isn't a motivation problem. It's what happens when a business grows faster than the systems underneath it. The work still gets done, and it gets done by somebody remembering, asking or waiting.",
    brHappeningP3: 'Most owners can feel it long before they can point at it. The read is how you point at it.',

    // Question two, blocks 11 and 12. Four paragraphs; one key each.
    brDoesHeading: 'What the Business Read does',
    brDoesP1: 'HLT looks at how the business operates and identifies where decisions stall, information gets lost, work gets repeated, people depend on the owner, and systems fail to connect.',
    brDoesP2: "We spend an hour with you. There's nothing to fill in first, no data room and nothing to prepare. You talk about your business and our lead consultant asks the questions.",
    brDoesP3: "Then we do the work you don't see. Your company registration and the public record, your market, whatever regulation is landing on your trade this year, and the chain from enquiry to invoice as you've described it.",
    brDoesP4: "The judgement is a person's, not a model's. AI does the hours that used to make this cost a week of consultancy time.",

    // Question three, blocks 13, 14 and 15. Five lines, then the line under them.
    brReceiveHeading: 'What you receive',
    brReceive1: 'The key friction points, named in the words the people doing the work used.',
    brReceive2: 'The likely causes behind each one.',
    brReceive3: 'The impact each is having on the business.',
    brReceive4: 'A priority order, so you know what to deal with first.',
    brReceive5: 'A recommended next action.',
    brReceiveNote: 'Everything is labelled as verified or not established, so you never have to guess which parts were checked.',

    // Question four, blocks 16 and 17. The boundary section: the only part of the page that says
    // what the reader is not buying.
    brNotHeading: 'What it is not',
    brNot1: "It isn't a generic AI consultation.",
    brNot2: "It isn't a software sales pitch.",
    brNot3: "It isn't an automatic commitment to implementation.",

    // The tiers, blocks 18 and 19. Names, prices and delivery terms are Ian's and are carried
    // from 14 September unchanged; only tier one's description moved with the lead message.
    brTiersHeading: 'Three depths. Same method.',
    brPriceNote: 'All prices in Thai baht, excluding VAT at seven per cent.',
    // The suffix renders immediately after each tier price so the price reads in full as block
    // 8's form does. It is the tail of that block, word for word, and it is here rather than in
    // the deck for the same reason the 14 September suffix was: a price with no note in view has
    // to carry the ex-VAT wording itself.
    brPriceVatSuffix: ', excluding VAT at seven per cent',

    brTier1Name: 'The Read',
    brTier1Desc: 'One hour with us, then a written read in three working days.',
    brTier1Price: 'THB 15,000',
    brTier1Delivery: 'Delivery: 3 working days',
    brTier1Revisions: 'Revisions: 1',

    brTier2Name: 'The Read, Widened',
    brTier2Desc: 'Ninety minutes, a second voice from your team, and a walkthrough call.',
    brTier2Price: 'THB 22,500',
    brTier2Delivery: 'Delivery: 5 working days',
    brTier2Revisions: 'Revisions: 1',

    brTier3Name: 'The Read, Full Depth',
    brTier3Desc: 'Two sessions, up to four people, competitor research, sized next steps.',
    brTier3Price: 'THB 37,500',
    brTier3Delivery: 'Delivery: 7 working days',
    brTier3Revisions: 'Revisions: 2',

    // The comparison rows, block 20, in the pack's order, three cells each. Row seven is the one
    // that moved: "Costed next steps" became "Priority order and next action", which is what the
    // read's output is called everywhere else on the restructured page.
    brRow1Label: 'Delivery',
    brRow1A: '3 working days',
    brRow1B: '5 working days',
    brRow1C: '7 working days',
    brRow2Label: 'Revisions',
    brRow2A: '1',
    brRow2B: '1',
    brRow2C: '2',
    brRow3Label: 'Interview',
    brRow3A: '60 minutes',
    brRow3B: '90 minutes',
    brRow3C: '90 minutes, plus a second session',
    brRow4Label: 'People interviewed',
    brRow4A: 'You',
    brRow4B: 'You, plus one other',
    brRow4C: 'You, plus up to three others',
    brRow5Label: 'Written read',
    brRow5A: 'Yes',
    brRow5B: 'Yes',
    brRow5C: 'Yes',
    brRow6Label: 'Desk research',
    brRow6A: 'Your company registration and the public record',
    brRow6B: 'Registration, public record, sector and regulation',
    brRow6C: 'All of it, plus your named competitors',
    brRow7Label: 'Priority order and next action',
    brRow7A: 'Yes',
    brRow7B: 'Yes',
    brRow7C: 'Yes, with each item sized separately',
    brRow8Label: 'Walkthrough call',
    brRow8A: 'No',
    brRow8B: '30 minutes',
    brRow8C: '60 minutes',

    // How it runs, block 21. Each numbered line is a lead sentence and the rest, which is how the
    // timeline has rendered it since 14 September. Step four is the one that moved.
    brStepsHeading: 'How it runs',
    brStep1Lead: 'Book the hour.',
    brStep1Body: "You pick a time. There's nothing to prepare and nothing to send first.",
    brStep2Lead: 'The interview.',
    brStep2Body: 'Sixty to ninety minutes, recorded, on whatever platform suits you. You talk, we ask.',
    brStep3Lead: 'The desk work.',
    brStep3Body: 'Your company registration, your sector, the regulation landing on your trade, and the chain you described, checked against primary sources.',
    brStep4Lead: 'The read is written.',
    brStep4Body: 'What to change first, in priority order, with the evidence behind it.',
    brStep5Lead: 'Delivery.',
    brStep5Body: 'It lands in your inbox on the promised day. On the two deeper reads we walk you through it.',

    // The five answers, block 22. Only the fourth moved, with the read's own output wording.
    brFaqHeading: 'Questions owners ask first',
    brFaq1Q: 'Do I need to send you anything before the call?',
    brFaq1A: "No. Come as you are. If something turns out to be worth seeing, we'll ask for it afterwards.",
    brFaq2Q: 'Is this AI writing a report about my business?',
    brFaq2A: "No. The hour is a person's, the questions are ours, and the judgement is ours. AI does the research and the drafting that used to take days. That difference is the whole reason this costs what it costs rather than what a consultancy charges.",
    brFaq3Q: 'What if you tell me something I already know?',
    brFaq3A: "Then you'll have it written down with the evidence behind it, which isn't the same thing as knowing it. Most of the value in the first read is the part you suspected and had never seen proved.",
    brFaq4Q: 'Will you try to sell me something bigger?',
    brFaq4A: "The read ends with a recommended next action and a costed list. Some of it we could do and some of it you should do yourself, and the read says which is which. You're not obliged to buy anything.",
    brFaq5Q: 'Who sees my information?',
    brFaq5A: 'Us, and nobody else. Nothing about your business is named to anybody without your written agreement, and that holds after the work ends.',

    // The closing call to action, block 23.
    brClosingHeading: 'One hour in. A written read out.',
    brClosingBody: "Message us on LINE and pick a time that suits you. There's nothing to prepare and nothing to send first, and you'll have the written read on the day we promise.",
    brClosingNote: 'We work with service businesses across Thailand, Hua Hin and Bangkok included.',
};
