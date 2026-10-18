// offerRefresh1018.js — the offer refresh of 18 October 2026 (request A-044).
//
// SOURCE. Ian's six changes, pasted into the EA Desk on Sunday 18 October 2026, and the review
// report's fixes, as briefed at
//   C:\Projects\IWT\02-builds\executive-assistant\work\briefs\2026-10-18-code-builder-hlt-site-offer-refresh-1018.md
// with the current-offer answer on the bridge (row 4822) as the boundary on every claim.
// Every line here is the builder's draft for Ian's review on the preview. Nothing is live until he
// says so.
//
// THE SIX CHANGES, AND WHERE EACH LANDS
//   1 goals first             home hero and the Understand / Diagnose / Improve band; the Business Read
//   2 websites                home band; the Websites capability page, switched on
//   3 what a client receives  home band; /examples (map, plan extract, website demonstration)
//   4 the commercial path     /examples (clinic and fragrance supplier, step by step)
//   5 delivery and ownership  /how-it-works (six stages, what stays yours); About (company, team slot)
//   6 the Business Read       its page, reconciled to the 60 + 30 minute scope and one priority;
//                             the PRICES are not touched (see BR_PRICING in src/config/features.js)
//
// CLAIM LIMITS THIS FILE KEEPS (bridge row 4822, and the brief). No result, testimonial, case study,
// ranking, lead or revenue promise. No compliance claim of any kind. Nothing says implementation,
// support, hosting, licences or marketing come inside a Business Read. One price figure only, Ian's
// own (BR_USUAL_PRICE below), and no client-specific price. No client
// material: the examples run on an invented clinic. No name, face or career (the visa rule).
//
// ENGLISH ONLY. Thai is native-speaker work Ian supplies. Pages carrying these lines are listed in
// THAI_PENDING_ROUTES (src/constants/lang.js) and render in English on their Thai address, so no
// page mixes the two languages. Examples keeps its Thai: the new sections there show on the English
// page only, until their Thai exists.
//
// "[IAN: ...]" marks a slot only Ian can fill. tests/offer-refresh-1018.mjs --release fails while
// any slot is still in the built site.

export const IAN_SLOT_TEAM =
    "[IAN: who works on HLT engagements and the experience they bring, in your words, with no name or career that the visa rule holds back]";
// THE PRICE IS IAN'S OWN WORD. Ian, in the build session, Sunday 18 October 2026, about 16:0x
// Bangkok, verbatim: "Business Read usual price THB 22500". It is the figure his 14 September
// tiers gave the read with a second voice from the team, which is the scope confirmed on the bridge (row
// 4822). "Excluding VAT at seven per cent" is carried from the live price line; Ian confirms it on
// the preview. Client-specific prices never appear here.
export const BR_USUAL_PRICE = 'THB 22,500';

export const offerRefreshCopy = {
    // ---------------------------------------------------------------- home: hero (change 1)
    // Ian's hero of 1 October 2026 led with owner dependence: "Make your business need you less."
    // His change 1 of 18 October: "Lead with the owner's objectives ... Work coming back to the owner
    // is one possible issue, not the starting assumption." Kept in src/copy/repositioning.js.
    homeHeroHeadline: 'Start with what you want the business to achieve.',
    homeHeroLead:
        "We find out what you're aiming for, then look at how your marketing, your people and your systems help or get in the way. Then we agree what to fix first.",
    homeMetaDescription:
        "High Level Thai helps owner-led businesses in Thailand reach the goals they've set, by looking at how marketing, people and systems work together: the website, enquiries, follow-up and daily operations.",

    // The hero card (the wow pass, 18 October): one enquiry followed through, as an illustration.
    heroFlowTag: 'Illustration',
    heroFlowTitle: 'One enquiry, followed through',
    heroFlow1: 'An enquiry arrives on LINE',
    heroFlow2: 'It lands in one shared list',
    heroFlow3: 'Reception owns the reply',
    heroFlow4: 'A time is offered the same day',

    // ---------------------------------------------------------------- home: the three stages (change 1, bridge row 4822)
    stagesHeading: 'How we start',
    stagesLead: 'Before offering suggestions, we look into how the business actually runs. Three stages, in this order.',
    stage1Name: 'Understand',
    stage1Body:
        'What you want the business to achieve, in your words. We research the business before we meet: your website, your listings and reviews, and how an enquiry reaches you.',
    stage2Name: 'Diagnose',
    stage2Body:
        "How your marketing, people and systems support those goals, and where they don't. Work that keeps coming back to you is one thing we check for. We don't assume it's the problem.",
    stage3Name: 'Improve',
    stage3Body: 'One priority at a time. A practical plan you can carry out yourselves, or with support we agree separately.',

    // ---------------------------------------------------------------- home: websites (change 2)
    websitesBandHeading: 'New websites, and websites that bring in work',
    websitesBandBody:
        'We build new websites and improve existing ones. Design, clear messaging, enquiries and follow-up are planned together, because a good-looking site that sends enquiries nowhere still loses customers.',
    websitesBandLine:
        'Before anyone recommends more advertising, we follow the path a customer takes: how they find you, how they get in touch and how quickly they hear back.',
    websitesBandCta: 'How we approach websites',

    // ---------------------------------------------------------------- home: what a client receives (change 3)
    receiveHeading: "What you'd actually receive",
    receiveLead:
        "Three examples of our work, built on an invented business so we can show them in public. They show the format and the depth, not a client's results.",
    receiveTagExample: 'Example',
    receiveTagConcept: 'Concept',
    receive1Name: 'A business map',
    receive1Body: 'What the business is aiming for, and where marketing, people and systems help or hold it back, on one page.',
    receive2Name: 'An improvement plan extract',
    receive2Body: 'One priority broken into actions: who does each one, by when, and whether it needs outside help.',
    receive3Name: 'A website demonstration',
    receive3Body: "An interactive mock-up of how a clinic's website could turn a visitor's question into a request reception can act on.",
    receiveCta: 'See the examples',

    // ---------------------------------------------------------------- /examples: the three artefacts (change 3)
    exArtefactsHeading: 'What a client receives',
    exArtefactsLead:
        "Everything in this section is built on an invented business, an example clinic in Hua Hin. None of it comes from a client, and none of it shows a result we've achieved.",

    mapTag: 'Example · invented business',
    mapTitle: 'Sample business map',
    mapLead: "The owner's goal at the top. Underneath, each step a patient takes, and how marketing, people and systems are doing at each one.",
    mapGoalLabel: "Owner's goal",
    mapGoal: 'Fill the new treatment room on weekdays, without the owner answering every enquiry.',
    mapStatusOk: 'Working',
    mapStatusWatch: 'Watch',
    mapStatusFix: 'Fix first',
    mapRowMarketing: 'Marketing',
    mapRowPeople: 'People',
    mapRowSystems: 'Systems',
    mapStep1: 'Finding the right service',
    mapStep2: 'Making contact',
    mapStep3: 'Arranging an appointment',
    mapStep4: 'Reception handover',
    mapStep5: 'Coming back',
    map1M: "Treatment times aren't on the site",
    map1P: 'Staff know the services well',
    map1S: 'The site is slow on a phone',
    map2M: 'A LINE button on every page',
    map2P: 'Messages answered by whoever sees them first',
    map2S: 'LINE, Facebook and phone enquiries kept in three places',
    map3M: 'Opening hours shown clearly',
    map3P: 'Only the owner can approve a new-patient slot',
    map3S: 'The diary is a paper book at reception',
    map4M: 'The confirmation message is friendly but late',
    map4P: "Reception can't see what was said in the chat",
    map4S: 'No record of who took the enquiry',
    map5M: 'No reminder for the next visit',
    map5P: 'Patients like the team',
    map5S: "No list of who's due back",
    mapSummaryOk: 'working',
    mapSummaryWatch: 'to watch',
    mapSummaryFix: 'to fix first',
    mapNote:"On a real map, each note points to the evidence behind it: what we saw, who told us, and what we couldn't check.",

    planTag: 'Example · invented business',
    planTitle: 'Improvement plan extract',
    planLead: "The one priority agreed with the owner, and the first actions. A full plan also lists what we checked and what we couldn't.",
    planPriorityLabel: 'The priority',
    planPriority: 'Every enquiry has one owner and a reply on the same working day.',
    planColAction: 'Action',
    planColWho: 'Who',
    planColWhen: 'When',
    planColHelp: 'Outside help',
    plan1Action: 'Put LINE, Facebook and phone enquiries into one shared list',
    plan1Who: 'Reception lead',
    plan1When: 'Week 1',
    plan1Help: 'None. It uses tools the clinic already has',
    plan2Action: 'Agree who answers which kind of enquiry, and who covers days off',
    plan2Who: 'Owner and reception lead',
    plan2When: 'Week 1',
    plan2Help: 'None',
    plan3Action: 'Write down the five answers staff give most often, so anyone can send them',
    plan3Who: 'Reception team',
    plan3When: 'Week 2',
    plan3Help: 'None',
    plan4Action: 'Let reception offer new-patient slots inside limits the owner sets',
    plan4Who: 'Owner',
    plan4When: 'Week 2',
    plan4Help: 'None',
    plan5Action: 'Add treatment times to the website',
    plan5Who: 'Owner, with a web developer',
    plan5When: 'Week 3',
    plan5Help: 'Optional, agreed separately',
    plan6Action: 'Every Friday, check enquiries in, answered the same day, and booked',
    plan6Who: 'Reception lead',
    plan6When: 'From week 3',
    plan6Help: 'None',
    planNote: 'Most of the plan is work the business can do itself. Where outside help would make sense, the plan says so and leaves the choice with the owner.',

    demoTag: 'Concept · invented clinic',
    demoTitle: 'Website demonstration',
    demoLead:
        "Tap through how a clinic's website could take a visitor to an appointment request reception can act on. It's a mock-up: nothing is booked and no message is sent.",
    demoSiteName: 'Example Clinic, Hua Hin',
    demoStep1: 'Find the right service',
    demoStep2: 'Make contact',
    demoStep3: 'Arrange the appointment',
    demoStep4: 'Reception handover',
    demoService1: 'Dental check-up',
    demoService1Time: '30 minutes',
    demoService2: 'Teeth cleaning',
    demoService2Time: '45 minutes',
    demoService3: 'Whitening consultation',
    demoService3Time: '20 minutes',
    demoChoose: 'Choose',
    demoAskLine: 'Ask a question on LINE',
    demoRequest: 'Request an appointment',
    demoFieldName: 'Your name',
    demoFieldDay: 'Preferred day',
    demoFieldDayValue: 'Tuesday',
    demoFieldTime: 'Morning or afternoon',
    demoFieldTimeValue: 'Morning',
    demoSend: 'Send request',
    demoCardTitle: 'New request',
    demoCardChannel: 'Came in on the website',
    demoCardOwner: 'Owner: reception',
    demoCardReply: 'Reply by 17:00 today',
    demoHint1: "The visitor picks a service. Its treatment time is shown, so they know what they're asking for.",
    demoHint2: 'A question and a request both arrive in the same list at reception, whichever button is used.',
    demoHint3: "The visitor asks for a time and reception confirms it, so nobody is promised a slot the diary can't give.",
    demoHint4: 'Reception sees what the visitor asked for, who owns the reply and by when.',
    demoBack: 'Back',
    demoNext: 'Next',
    demoRestart: 'Start again',
    demoPlay: 'Play the walkthrough',
    demoPause: 'Pause',
    demoStepOf: 'Step',
    demoNote: "This shows a possible design. It's not a system we've built, and it's not a feature of any booking software.",

    // ---------------------------------------------------------------- /examples: the commercial path (change 4)
    jrHeading: 'Where a sale can slip, step by step',
    jrLead:
        "Two illustrations of the path from first contact to repeat business. Each shows what we look at and what we might improve. Neither describes a system we've built.",
    jrTabClinic: 'A clinic',
    jrTabSupplier: 'A fragrance supplier to hotels',
    jrLookLabel: 'What we look at',
    jrSlipLabel: 'Where it often slips',
    jrC1: 'Finding the right service',
    jrC1Look: 'Can a visitor on a phone tell which treatment they need and how long it takes?',
    jrC1Slip: "They can't tell, so they message to ask, or go to the clinic that made it clear.",
    jrC2: 'Making contact',
    jrC2Look: 'Which channels enquiries arrive on, and who sees each one.',
    jrC2Slip: "A LINE message is read on someone's day off and answered two days later.",
    jrC3: 'Arranging an appointment',
    jrC3Look: 'Who can offer a time, and what they need to check first.',
    jrC3Slip: 'Only the owner can approve a new-patient slot, so the patient waits.',
    jrC4: 'Reception handover',
    jrC4Look: 'Does reception see what was said in the chat before the patient arrives?',
    jrC4Slip: 'The patient repeats everything, or arrives expecting something nobody wrote down.',
    jrF1: 'Hotel enquiry',
    jrF1Look: "How a hotel's purchasing team reaches you, and how quickly they hear back.",
    jrF1Slip: "The enquiry sits in one salesperson's inbox while they're travelling.",
    jrF2: 'Sample or trial',
    jrF2Look: 'How samples are sent, tracked and followed up.',
    jrF2Slip: 'Samples go out and nobody asks the hotel what they thought.',
    jrF3: 'Quotation',
    jrF3Look: 'Who prices, from what, and how long a quote takes.',
    jrF3Slip: "Each quote is built from scratch, so it's slow and the margins vary.",
    jrF4: 'Supply',
    jrF4Look: 'How orders, stock and delivery dates are agreed and checked.',
    jrF4Slip: 'A delivery date is promised in chat and never reaches the warehouse.',
    jrF5: 'Repeat orders',
    jrF5Look: 'Does anyone know when a hotel is due to reorder?',
    jrF5Slip: "The hotel runs low and calls a competitor, and nobody notices the order that didn't come.",

    // ---------------------------------------------------------------- /how-it-works: delivery and ownership (change 5)
    step1Body: "20 to 30 minutes. We hear what you want to achieve and decide together whether it's worth examining properly.",
    dlHeading: 'When we build something for you',
    dlLead:
        "Six stages, in order. The scope and the design are agreed with you before anything is built, and nothing goes live until you've seen it tested.",
    dl1Name: 'Discovery',
    dl1Body: 'We learn how the business works today and what the build has to achieve.',
    dl2Name: 'Agreed scope',
    dl2Body: "What's included, what isn't, the timetable and the price, in writing, before work starts.",
    dl3Name: 'Design approval',
    dl3Body: "You see the design and approve it before it's built.",
    dl4Name: 'Testing',
    dl4Body: 'We test it the way your customers and staff will use it, on phones as well as computers.',
    dl5Name: 'Launch',
    dl5Body: "It goes live when you've seen it working and said yes.",
    dl6Name: 'Handover',
    dl6Body: 'The logins, the documents and the training, so your team can run it without us.',
    dlOwnHeading: 'What stays yours',
    dlOwn1Name: 'You own it',
    dlOwn1Body: 'Built in your accounts wherever practical. The domain, the content, the logins and the data stay with your business.',
    dlOwn2Name: 'Training',
    dlOwn2Body: 'Your team is shown how to use it and update it, with notes to refer back to.',
    dlOwn3Name: 'Support, if you want it',
    dlOwn3Body: "Ongoing support isn't included by default. If you want it, we agree what it covers and what it costs, separately.",
    dlOwn4Name: 'Third-party costs, shown first',
    dlOwn4Body: 'Domains, hosting, software licences and similar costs are listed separately before you agree, so you can see what you pay and who you pay.',

    // ---------------------------------------------------------------- About: the company and the team (change 5)
    abTeamHeading: 'The team',
    abTeamBody: IAN_SLOT_TEAM,

    // ---------------------------------------------------------------- the Business Read, reconciled (change 6)
    // The scope is the one confirmed on bridge row 4822: goals-first research, a 60-minute owner conversation, a
    // relevant manager conversation of up to 30 minutes, and a practical plan for one priority. No
    // price is written here. The live price lines and the three tiers stay in
    // src/copy/repositioning.js and src/copy/businessReadRebuild.js, untouched, until Ian rules.
    brMetaTitle: 'The Business Read | A Practical Plan for the Priority That Matters Most | High Level Thai',
    brMetaDescription:
        "Your goals first: research on the business, an hour with you, up to 30 minutes with a manager where it helps, then a practical plan for one priority. That's the Business Read.",
    brHeroHeadline: 'A practical plan for the one thing that matters most.',
    brHeroLead:
        'The Business Read starts with your goals. We research the business first, talk with you for an hour, and with one of your managers for up to 30 minutes where that helps. Then we agree one priority and write a practical plan for it.',
    brHowHeading: 'How the Read works',
    brHow1Name: 'Research first',
    brHow1Body: 'Before we meet, we look at the business from the outside: your website, listings, reviews, social channels and how an enquiry reaches you.',
    brHow2Name: 'An hour with you',
    brHow2Body: "Sixty minutes on your goals, what's working and what's getting in the way.",
    brHow3Name: 'Up to 30 minutes with a manager',
    brHow3Body: 'Where it helps, a conversation with the person closest to the work. We agree who with you first.',
    brHow4Name: 'One priority, one practical plan',
    brHow4Body: 'We agree the priority that matters most and write a plan for it: what to do, in what order, and who could do it.',
    brGetHeading: 'What you receive',
    brGet1: 'Your goals, written down as we understood them',
    brGet2: "What's helping and what's in the way, across marketing, people and systems",
    brGet3: 'The one priority we agree with you, and why it comes first',
    brGet4: 'A practical plan for it, step by step',
    brGet5: 'Which steps your team can take on, and where outside help would make sense',
    brSeeExamples: 'See a sample business map and plan extract',
    brExcludedHeading: "What the Read doesn't include",
    brExcludedBody:
        "Implementation, ongoing support, hosting, software licences and marketing aren't part of the Business Read. If you'd like help with any of them afterwards, we agree it separately, and you're under no obligation to.",
    brFaq4A:
        "The read ends with one priority and a practical plan for it. Some steps we could help with and some you should do yourselves, and the plan says which is which. You're not obliged to buy anything.",
    // The confidentiality answer, checked against how the work is actually done: the conversations
    // are recorded and the write-up uses transcription and drafting tools, so "us, and nobody else"
    // (18 September) wasn't accurate. The tools are named to Ian in the report, not here.
    brFaq5A:
        "The people working on your read, and the tools we use to record, transcribe and write it up. We don't pass your information to anyone else. Nothing about your business is named to anybody without your written agreement, and that holds after the work ends.",
    brFaq6Q: 'How long are the conversations?',
    brFaq6A: 'An hour with you and, where it helps, up to 30 minutes with one manager. Both run online, on whatever platform suits you.',
    // Shown under BR_PRICING 'single' (src/config/features.js), the preview's setting on Ian's price
    // of 18 October. 'tiers' brings back the live three-tier block unchanged.
    brPriceHeading: 'The fee',
    brSingleName: 'The Business Read',
    brSingleIncludes: 'Research on the business, an hour with you, up to 30 minutes with a manager, and a practical plan for one priority.',
    brSinglePrice: BR_USUAL_PRICE,
    brSingleVat: 'excluding VAT at seven per cent',
    brSinglePriceLine: `${BR_USUAL_PRICE}, excluding VAT at seven per cent.`,

    // ---------------------------------------------------------------- Thai addresses awaiting Thai copy
    thaiPendingNotice: 'This page is in English for now. The Thai version will follow.',
};

// THE WEBSITES CAPABILITY PAGE, change 2. Merged over the 1 October draft in src/copy/capabilities.js
// for the 'websites' slug only, and switched on in src/config/features.js.
export const websitesCapability = {
    title: 'New Websites and Website Improvement | High Level Thai',
    description:
        'We build new websites and improve existing ones, planning design, clear messaging, enquiries and follow-up together. Before anyone recommends more advertising, we look at how customers find you and get in touch.',
    headline: 'New websites, and better ones, planned around the enquiry.',
    extra: {
        newHeading: "If you don't have a website yet",
        newBody: 'We start with who your customers are, what they need to know before they get in touch, and how you want enquiries to reach you. The site is built around that.',
        improveHeading: "If you have one that isn't working",
        improveBody: "We look at what a visitor sees on a phone, how quickly it loads, whether the message is clear, and what happens to an enquiry after it's sent. Then we fix what matters most first.",
        connectHeading: 'What we plan together',
        connect: [
            { name: 'Design', body: 'Looks right for your business and works properly on a phone.' },
            { name: 'Clear messaging', body: "What you do, who it's for and where you work, clear within seconds, in the languages your customers use." },
            { name: 'Enquiries', body: 'Every contact button tested, and every enquiry landing where your team will see it.' },
            { name: 'Follow-up', body: 'Someone owns each enquiry and replies in good time, and you can see that it happened.' },
        ],
        adHeading: 'Before more advertising',
        adBody:
            "We follow the path a customer takes, from finding you to hearing back. Paying for more visitors doesn't help if the enquiries they send go unanswered.",
        ownBody:
            'You own the domain and the site. Third-party costs such as hosting are listed before you agree, training is part of the handover, and ongoing support is agreed separately if you want it.',
        deliveryLink: 'How delivery works',
        demoLink: 'See the website demonstration',
    },
};
