// repositioning.js — the HLT website repositioning, 1 October 2026.
//
// SOURCE. The "HIGH LEVEL THAI WEBSITE REPOSITIONING BRIEF" Ian pasted on 1 October 2026, as
// reviewed with his minimal owner-friendly edits and his rulings of the same morning, recorded at
//   C:\Projects\hlt-estate\02-builds\hlt-site-kit\2026-10-01-HLT-REPOSITIONING-BRIEF-REVIEWED.md
// Every line below is the brief's own wording (with the listed edits) unless a comment says it is
// the builder's, and the builder's lines are the connective tissue a page needs (a nav label, a
// button, a short lead), never a claim.
//
// ONE MODULE, SPREAD LAST in both language blocks of src/translations.js, so it wins over the
// 30 September module on every key they share (the hero, the home sections, the Business Read
// page, About, the nav labels).
//
// THE HERO HEADLINE is Ian's proposal of 1 October, held as one string beside the recommended
// alternative, so the choice is one word (see the hero block).
//
// THAI. English first, by Ian's agreement on 1 October: this module is spread into the `th`
// block too, so the Thai pages show these sections in English until the one Thai pass for Ann at
// the end. The 30 September Thai for the pages this brief does not change stays as it is.
//
// WHAT IS DELIBERATELY NOT HERE. Prices other than the ruled Business Read figures (section 10
// said hold pricing; Ian ruled on 1 October that THB 15,000 as the base is published, and the
// tiers stay). Any result figure. Any name. Any address.

// THE HERO IS IAN'S, 1 October 2026, pasted with "Please use this as the Hero section": the
// headline, one paragraph, one button. His concern on the earlier "Build" line, in his words: "our
// clients already have businesses so they are not building them". The house contraction is applied
// to the headline (his standing rule: contractions always); the uncontracted form is one swap away.
const HERO_HEADLINE = "Fix what's slowing your business down.";
// const HERO_HEADLINE = 'Fix what is slowing your business down.'; // as pasted
// const HERO_HEADLINE = 'Make your business need you less.'; // the alternative recommended in the same conversation

export const repositioningCopy = {
    // ---------------------------------------------------------------- navigation
    homeNavHome: 'Home',
    brNavLink: 'Business Read',
    hiwNavLink: 'How It Works',
    problemsNavLink: 'Problems We Fix',
    whoNavLink: 'Who We Help',
    aboutNavLink: 'About',
    insightsNavLink: 'Insights',
    contactNavLink: 'Contact',
    navCtaLabel: 'Book a Fit Call',
    navTalkLabel: 'Talk to us',
    footerCapabilitiesHeading: 'Capabilities',

    // ---------------------------------------------------------------- the calls to action
    ctaFitCall: 'Book a Fit Call',
    ctaFitCallNote: "20 minutes, to see whether it's worth looking properly.",
    ctaSeeBusinessRead: 'See How the Business Read Works',
    ctaExplore: 'Explore this problem',
    ctaBlindspots: 'Find Your Business Blindspots',
    ctaFitCallFirst: 'Book a Fit Call First',
    ctaLine: 'Message us on LINE',
    ctaWhatsApp: 'Message us on WhatsApp',
    fitCallBackupLead: 'Or, if a call is easier to arrange by message:',

    // ---------------------------------------------------------------- home: hero (section 3)
    homeMetaTitle: 'High Level Thai | Business Systems and Process Control for Owner-Led Businesses in Thailand',
    homeMetaDescription:
        'High Level Thai helps owner-led businesses in Thailand find where money, time and decisions get stuck, then puts the controls in place that stop it happening again. Process first. Technology second.',
    homeHeroHeadline: HERO_HEADLINE,
    homeHeroLead:
        'HLT finds where money, work and decisions get stuck, then puts simple controls in place so work keeps moving without everything coming back to you.',
    homeCtaLabel: 'Start with The Business Read',
    // Not rendered since Ian's hero of 1 October; kept for the record of the brief's sub-header
    // and micro line, which his paragraph absorbs.
    homeHeroSub: 'Find where money, time and decisions get stuck.',
    homeHeroMicro: 'Process first. Technology second.',

    // ---------------------------------------------------------------- home: small problems (section 4)
    leakHeading: 'Small problems become expensive when nobody owns them.',
    leakLead: 'A business rarely breaks because of one dramatic failure. More often:',
    leak1: 'an enquiry is not followed up',
    leak2: 'a quotation sits unanswered',
    leak3: 'a customer is forgotten',
    leak4: 'an invoice is not chased',
    leak5: 'a decision waits for the owner',
    leak6: "information sits in one person's head",
    leak7: 'staff assume somebody else is dealing with it',
    leakClose1: 'On their own they look small.',
    leakClose2: 'Together they cost money, waste time and keep pulling you back in.',
    leakOutcome1: 'Money lost',
    leakOutcome2: 'Time lost',
    leakOutcome3: 'Control lost',

    // ---------------------------------------------------------------- home: the three problems (section 5)
    problemsHeading: 'The three problems behind most of it', // builder's lead, not a claim
    p1Name: 'Revenue Leakage',
    p1Headline: 'Opportunities quietly disappear.',
    p1Ex1: 'enquiries not followed up',
    p1Ex2: 'quotations with no next action',
    p1Ex3: 'old customers forgotten',
    p1Ex4: 'invoices not chased',
    p1Ex5: 'leads with no clear owner',
    p1Outcome: 'Make every commercial opportunity visible, owned and followed through.',
    p2Name: 'Owner Bottleneck',
    p2Headline: 'Too much still comes back to you.',
    p2Ex1: 'routine approvals',
    p2Ex2: 'repeated staff questions',
    p2Ex3: "knowledge held in the owner's head",
    p2Ex4: 'work waiting for decisions',
    p2Ex5: 'problems that escalate unnecessarily',
    p2Outcome: 'Create clear rules so routine work continues and only genuine exceptions reach you.',
    p3Name: 'Management Visibility',
    p3Headline: 'The information exists, but you still have to ask.',
    p3Ex1: 'LINE',
    p3Ex2: 'Facebook',
    p3Ex3: 'email',
    p3Ex4: 'spreadsheets',
    p3Ex5: 'staff conversations',
    p3Ex6: 'separate systems',
    p3Outcome: 'See what genuinely needs attention without chasing anyone for an update.',
    problemsExamplesLabel: 'It looks like:', // builder's
    problemsOutcomeLabel: 'What we put in place:', // builder's

    // ---------------------------------------------------------------- home: the week away (section 6)
    weekHeading: 'If you disappeared from your business for a week, what would stop?',
    weekLead: 'The answer often shows where the business still depends on memory, on one or two people, or on you stepping in.',

    // ---------------------------------------------------------------- the method flow (section 7)
    methodHeading: "We don't start with software.",
    methodLead: 'We start with what is actually happening inside the business.',
    method1: 'Business Problem',
    method2: 'Map What Actually Happens',
    method3: 'Find the Failure Point',
    method4: 'Define the Required Control',
    method5: 'Implement the Fix',
    method6: 'Measure What Changed',
    methodBranchesLabel: 'The control might be:', // builder's
    methodBranch1: 'Responsibility',
    methodBranch2: 'Process',
    methodBranch3: 'Rules',
    methodBranch4: 'Automation',
    methodBranch5: 'AI',
    methodBranch6: 'Dashboard',
    methodBranch7: 'Knowledge',

    // ---------------------------------------------------------------- the control flow (section 8)
    controlHeading: 'A process works when nothing can quietly disappear.',
    control1Name: 'Capture',
    control1Body: 'It gets recorded the moment it happens.',
    control2Name: 'Ownership',
    control2Body: 'Someone is responsible.',
    control3Name: 'Deadline',
    control3Body: "There's a date it should be done by.",
    control4Name: 'Check',
    control4Body: 'We know whether it happened.',
    control5Name: 'Escalation',
    control5Body: "If it doesn't happen, the right person hears about it.",
    control6Name: 'Record',
    control6Body: 'The outcome stays on record.',
    controlLine: 'Automation can enforce the process. AI can assist the process. Neither replaces the process.',

    // ---------------------------------------------------------------- owner by exception (section 9)
    exceptionHeading: 'The owner should manage exceptions, not chase routine work.',
    exception1: 'Routine Work',
    exception2: 'Rules + Controls',
    exceptionDecision: 'Within agreed rules?',
    exceptionYes: 'Yes',
    exceptionNo: 'No',
    exceptionContinue: 'Continue Automatically',
    exceptionEscalate: 'Escalate Exception',
    exceptionDecide: 'Owner / Manager Decision',
    exceptionRecord: 'Record Decision',
    exceptionResume: 'Process Continues',
    exceptionLead:
        "The aim isn't another dashboard shouting for attention all day. Routine work should remain in the background. The owner should see only what genuinely requires judgement.",

    // ---------------------------------------------------------------- the four modules (section 12)
    modulesHeading: 'Common problems we can help fix',
    modulesLead: 'Not software packages. The places where we most often put a control in, and what it tends to be made of.', // builder's
    m1Name: 'Revenue Capture',
    m1Headline: 'Stop enquiries and opportunities quietly disappearing.',
    m1Controls: 'lead capture, ownership, response deadlines, follow-up, escalation, outcome tracking',
    m2Name: 'Commercial Follow-through',
    m2Headline: 'Keep quotations, jobs, invoices and payments moving.',
    m2Controls: 'quotation status, next-action dates, job handoffs, invoice follow-up, overdue alerts, management exceptions',
    m3Name: 'Owner Decision Control',
    m3Headline: 'Reduce unnecessary questions and approvals.',
    m3Controls: 'authority limits, decision rules, approval routes, knowledge capture, exception escalation',
    m4Name: 'Daily Business Pulse',
    m4Headline: 'Know what needs attention without chasing people.',
    m4Controls: 'exceptions, overdue actions, important enquiries, unresolved decisions, payment issues, selected performance indicators',
    modulesControlsLabel: 'Possible controls:',

    // ---------------------------------------------------------------- where AI fits (section 13) and automation (14)
    aiHeading: 'Where AI fits',
    aiLead: 'AI can be extremely useful when the business process is already clear.',
    aiHelpsLabel: 'It can help:',
    aiHelp1: 'read conversations',
    aiHelp2: 'summarise information',
    aiHelp3: 'draft responses',
    aiHelp4: 'classify enquiries',
    aiHelp5: 'search company knowledge',
    aiHelp6: 'identify exceptions',
    aiHelp7: 'prepare reports',
    aiHelp8: 'spot patterns',
    aiWarning: 'Putting AI into a broken process usually gives you a faster broken process.',
    aiLine: 'HLT defines the control first, then chooses the technology.',
    autoHeading: 'Automation should enforce good work.',
    autoLead: 'Automation is useful when the rule is already clear.',
    autoEx1: 'assign a new enquiry',
    autoEx2: 'remind somebody of a deadline',
    autoEx3: 'check whether something happened',
    autoEx4: 'escalate an overdue action',
    autoEx5: 'update a record',
    autoEx6: 'prepare a daily summary',
    autoClose: 'It should not hide a poor process beneath more software.',

    // ---------------------------------------------------------------- who we help (sections 15 and 16)
    whoMetaTitle: 'Who We Help | Owner-Led Businesses in Thailand | High Level Thai',
    whoMetaDescription:
        'High Level Thai works with owner-led service businesses in Thailand: several staff, several customer channels, handoffs between people, and an owner still involved in routine decisions.',
    whoHeading: 'Owner-led service businesses in Thailand',
    whoLead: 'The best fit is a business with enough going on for a dropped ball to cost something.', // builder's
    whoFitLabel: 'Usually that means:',
    whoFit1: 'multiple staff or subcontractors',
    whoFit2: 'multiple customer channels',
    whoFit3: 'repeated enquiries or quotations',
    whoFit4: 'handoffs between people',
    whoFit5: 'recurring customers',
    whoFit6: 'owner involvement in routine decisions',
    whoFit7: 'information spread across different systems',
    whoFit8: 'enough operational complexity for mistakes to have a real cost',
    whoExamplesLabel: 'For example:',
    whoEx1: 'property businesses',
    whoEx2: 'clinics',
    whoEx3: 'hospitality',
    whoEx4: 'maintenance and home services',
    whoEx5: 'professional services',
    whoEx6: 'specialist service companies',
    whoEx7: 'hospitality suppliers',
    whoEx8: 'established salons and wellness businesses',
    whoEx9: 'other owner-led companies',
    whoNotEvery: "Not every small business needs this. If yours doesn't, the Fit Call will say so.", // builder's, from the brief's instruction
    whoHomeTeaser: 'For owner-led service businesses in Thailand with enough going on for a dropped ball to cost something.', // builder's, the home's one line
    whoHuaHinLink: 'Working in Hua Hin? Read the Hua Hin page.', // builder's
    expatHeading: "Running a Thai business shouldn't mean carrying it everywhere with you.",
    expatLead: 'For some international and expat owners, additional complexity can come from:',
    expat1: 'English and Thai communication handoffs',
    expat2: 'decisions depending on the foreign owner',
    expat3: 'important knowledge sitting with one trusted person',
    expat4: 'managing while travelling',
    expat5: 'information spread between local staff and different systems',
    expatBody:
        'HLT can help make responsibilities, information and decisions clearer so the business depends less on one person holding everything together.',
    expatLine: 'Build a Thai business that can operate without you personally holding every thread.',

    // ---------------------------------------------------------------- about (section 17, behind a switch)
    abMetaTitle: 'About High Level Thai | Process Control for Owner-Led Businesses in Thailand',
    abMetaDescription:
        'High Level Thai is a Thai registered company that helps owner-led businesses find where money, time and decisions get stuck and puts the controls in place that stop it. How we work, and what we will not do.',
    abHeroHeadline: 'Start with the problem, not the software.',
    abHeroLead: 'High Level Thai helps owner-led businesses find where money, time and decisions are getting stuck, then puts the controls in place that stop it happening again.',
    abHeroLead2: 'We first understand the business. Then we identify the failure point. Then we design the required control. Only after that do we decide whether process, clearer responsibility, a CRM, automation, AI, alerts, a dashboard, knowledge capture or another technology is needed.',
    abHeroLead3: 'Process first. Technology second.',
    abIanHeading: 'Why HLT', // builder's; the paragraph is the brief's, shown only when SHOW_ABOUT_IAN is true
    abIanBody:
        "Ian W. Turton's background is in commercial and project control on large, complex projects. Much of that work involved making sure responsibilities were clear, decisions were made, risks were visible and important work did not quietly fall between people. High Level Thai applies the same control thinking to owner-led businesses, using modern automation and AI where they genuinely improve the process.",
    abHowHeading: 'How we work',
    abHow1: "We don't start by selling software.",
    abHow2: 'We separate verified facts from assumptions.',
    abHow3: 'We work inside client-owned systems and accounts wherever practical.',
    abHow4: 'The client keeps control of its data, logins and operating knowledge.',
    abHow5: 'Our report states what should change first, what HLT can help with, and what the client may be better doing themselves.',
    abHow6: "There's no obligation to continue after the Business Read.",
    abCtaLabel: 'Book a Fit Call',

    // ---------------------------------------------------------------- the Business Read page (section 10)
    brMetaTitle: 'The Business Read | See Where Your Business Is Getting Stuck | High Level Thai',
    brMetaDescription:
        'The HLT Business Read maps one important part of your business from start to finish and shows where money, work, information or decisions are lost, delayed or pushed back to the owner. From THB 15,000.',
    brHeroHeadline: 'See where your business is getting stuck.',
    brHeroLead:
        'The HLT Business Read maps one important part of your business from start to finish. We look for where money, work, information or decisions are being lost, delayed or pushed back to you when they needn\'t be.',
    brWorkflowHeading: 'We map one real workflow',
    brWorkflowLead: 'One that matters commercially, end to end. For example:', // builder's
    brWf1: 'Enquiry → Quote → Decision',
    brWf2: 'Booking → Service → Rebooking',
    brWf3: 'Job → Invoice → Payment',
    brWf4: 'Customer Problem → Resolution',
    brWf5: 'Staff Question → Decision → Action',
    brExamineHeading: 'What we examine',
    brExamineLead: 'At each stage:',
    brQ1: 'What should happen?',
    brQ2: 'What actually happens?',
    brQ3: 'Who owns it?',
    brQ4: 'By when?',
    brQ5: 'Where is it recorded?',
    brQ6: 'What happens if nothing happens?',
    brQ7: 'When does the owner become involved?',
    brQ8: 'What is the commercial consequence?',
    brOutputHeading: 'Your Business Control Map',
    brOutputLead: 'The Business Read identifies:',
    brOut1: 'failure points',
    brOut2: 'missing ownership',
    brOut3: 'unnecessary delays',
    brOut4: 'owner dependencies',
    brOut5: 'missing controls',
    brOut6: 'potential financial or time consequences',
    brOut7: 'priority areas worth fixing',
    brHonest: "If there's nothing worth fixing, we'll say so.",
    brNoProject: 'Not every Business Read leads to a project.', // the brief's instruction, said plainly
    brPriceLine: 'From THB 15,000, excluding VAT at seven per cent. A written read in three working days.',
    brCtaLabel: 'Book a Fit Call First',
    brCtaNote: "20 minutes, to see whether it's worth looking properly.",

    // ---------------------------------------------------------------- how it works (section 11)
    hiwMetaTitle: 'How It Works | Fit Call, Business Read, Control Map, Fix Sprint | High Level Thai',
    hiwMetaDescription:
        'Six steps, none of them obligatory beyond the first: a 20-minute Fit Call, the Business Read, your Control Map, one Fix Sprint, measurement, and the next constraint only if the first proved worth it.',
    hiwHeroHeadline: 'How it works',
    hiwHeroLead: "Six steps, in order. You don't have to take all of them. Each one ends with a decision you make.", // builder's
    step1Name: 'Fit Call',
    step1Body: '20 to 30 minutes. We understand the issue and decide whether it is worth examining properly.',
    step2Name: 'Business Read',
    step2Body: 'Map one commercially important workflow.',
    step3Name: 'Control Map',
    step3Body: 'Identify where the process is failing and why.',
    step4Name: 'Fix Sprint',
    step4Body: 'Implement one clearly defined fix.',
    step5Name: 'Measure',
    step5Body: 'Compare before and after.',
    step6Name: 'Expand Only If Useful',
    step6Body: 'Fix the next thing only once the first fix has proved worth it.',
    hiwNoObligation: "You don't have to buy every stage. Most businesses stop where the first fix is enough.", // builder's, from the brief's instruction
    // The 18 September closings of this page and About said "it starts with an hour", the
    // Business Read. The brief's first step is the Fit Call, so the closings say that. Builder's.
    hiwClosingHeading: 'It starts with 20 minutes.',
    hiwClosingBody: "The Fit Call is the first step and the only one you need to think about today. A short conversation, and an honest answer on whether it's worth looking properly.",
    abClosingHeading: 'Judge us on the first conversation.',
    abClosingBody: 'The Fit Call is the cheapest way to find out whether any of the above is true. Twenty minutes, an honest answer, and no obligation after it.',

    // ---------------------------------------------------------------- problems we fix page (section 12)
    problemsMetaTitle: 'Problems We Fix | Revenue Capture, Follow-through, Owner Decisions, Daily Pulse | High Level Thai',
    problemsMetaDescription:
        'Four places High Level Thai most often puts a control in: revenue capture, commercial follow-through, owner decision control and the daily business pulse. Explore the problem, not a package.',
    problemsPageHeading: 'Common problems we can help fix',

    // ---------------------------------------------------------------- the final call (section 32)
    finalHeading: 'Start with the problem, not the software.',
    finalBody: 'If something in the business keeps being chased, forgotten, delayed or brought back to you, we can start by understanding why.',

    // ---------------------------------------------------------------- contact page
    ctMetaTitle: 'Contact High Level Thai | Book a Fit Call',
    ctMetaDescription: 'Book a 20-minute Fit Call with High Level Thai, or message us on LINE or WhatsApp. Working with businesses in Hua Hin and across Thailand.',
    ctHeroHeadline: 'Book a Fit Call',
    ctHeroLead: "20 to 30 minutes on Google Meet. You describe what keeps getting chased, forgotten, delayed or brought back to you; we tell you honestly whether it's worth examining properly.", // builder's, from section 11
    ctBookHeading: 'Pick a time', // builder's
    ctBookByMessage: "Send a message with a day and time that suits you and we'll reply with a Google Meet link.", // builder's; shown until the Google Calendar booking link is in src/config/features.js
    ctBackupHeading: 'Or message us first',
    ctBackupLead: "If a call is easier to arrange by message, or you'd rather ask something first.", // builder's
    ctOtherHeading: 'Other ways to reach us', // builder's

    // ---------------------------------------------------------------- the blindspots page gains case zero
    blindCaseHeading: 'We ran the test on ourselves first.',
    blindCaseBody:
        "Before asking Hua Hin businesses to look for their blindspots, we tested High Level Thai. We found weak local discoverability, an English search journey that needed strengthening, gaps in proof and trust, and older positioning that no longer matched the business we're building. We fixed those publicly and retest them.",
    blindCta: 'Book a Fit Call',
    blindDeeperBody:
        "If customers can reach you but work still disappears, decisions still come back to the owner or knowledge still lives in people's heads, the Business Read follows the journey inside.",

    // ---------------------------------------------------------------- the Owner Dependency and Hua Hin pages keep their copy; their actions move to the Fit Call
    odCta: 'Book a Fit Call',
    huahinCta: 'Book a Fit Call',

    // ---------------------------------------------------------------- the capability pages (section 19, behind switches)
    capFitsLabel: 'Where it fits', // builder's
    capDoesLabel: 'What it does', // builder's
    capNotLabel: "What it doesn't do", // builder's
    capControlsLabel: 'Possible controls', // builder's
    capMethodLine: 'Every capability is one of the tools the control method may choose. We decide which after the Business Read, never before.', // builder's, the brief's rule
    capBackLink: 'All the problems we fix', // builder's
};

// THE THAI, 1 October 2026: a machine draft for the chrome only (the header labels and the buttons
// a Thai reader taps on every page), marked UNREVIEWED for Ann's pass. Every repositioned section
// shows in English on the Thai pages until that pass, by Ian's "English first" of 1 October. Spread
// after repositioningCopy in the `th` block, so these few keys win and the rest fall back.
export const repositioningTh = {
    homeNavHome: 'หน้าแรก',
    problemsNavLink: 'ปัญหาที่เราแก้',
    whoNavLink: 'เราช่วยใคร',
    insightsNavLink: 'บทความ',
    navCtaLabel: 'นัดคุยเบื้องต้น',
    ctaFitCall: 'นัดคุยเบื้องต้น',
    ctaFitCallFirst: 'นัดคุยเบื้องต้นก่อน',
    ctaFitCallNote: '20 นาที เพื่อดูว่าคุ้มที่จะตรวจดูอย่างจริงจังหรือไม่',
    ctaSeeBusinessRead: 'ดูว่า Business Read ทำงานอย่างไร',
    ctaLine: 'ทักเราทาง LINE',
    ctaWhatsApp: 'ทักเราทาง WhatsApp',
    blindCta: 'นัดคุยเบื้องต้น',
    odCta: 'นัดคุยเบื้องต้น',
    huahinCta: 'นัดคุยเบื้องต้น',
    brCtaLabel: 'นัดคุยเบื้องต้นก่อน',
    abCtaLabel: 'นัดคุยเบื้องต้น',
    footerCapabilitiesHeading: 'ความสามารถ',
};
