// improvements1019.js — the site review of Monday 19 October 2026.
//
// ONE MODULE, SPREAD LAST in both language blocks of src/translations.js, so it wins every key it
// names. The older modules keep their strings on disk (Ian's "do not delete"); only what a visitor
// reads changes.
//
// ROUND 1, the faults:
//   - The Business Read is said one way everywhere, the way /business-read says it: researched goals,
//     an hour with the owner, an optional half hour with a manager, one agreed priority and a
//     practical written plan. THB 22,500 excluding VAT. Anything afterwards is scoped separately.
//     How It Works no longer describes "one workflow" and a separate "Control Map".
//   - The rule that every capability, websites included, is decided "after the Business Read, never
//     before" is gone. The Read stays the main recommended route; a clear website brief can be
//     talked about on its own.
//   - The Fit Call is asked for, not booked: the visitor suggests a time and HLT replies to confirm.
//     One call length everywhere, the Business Read page's own: 20 minutes.
//
// THE THAI is the builder's machine Thai, UNREVIEWED, for the native speaker's pass. Every key in
// improvementsTh mirrors a key in improvementsEn.
//
// "[IAN: ...]" marked a fact only Ian can supply. Both are now his words, 20 October 2026, in the
// build session, verbatim: "Business Read is within 3 days. Line and WhatsApp within 24 hours".
// The plan timing is homeFaq2A, brTimingValue and brFaq7A; the reply time is ctNext1.

export const improvementsEn = {
    // ------------------------------------------------------------ the Fit Call, asked for honestly
    navCtaLabel: 'Ask for a Fit Call',
    ctaFitCall: 'Ask for a Fit Call',
    ctaFitCallFirst: 'Ask for a Fit Call first',
    brCtaLabel: 'Ask for a Fit Call first',
    abCtaLabel: 'Ask for a Fit Call',
    blindCta: 'Ask for a Fit Call',
    odCta: 'Ask for a Fit Call',
    huahinCta: 'Ask for a Fit Call',
    ctMetaTitle: 'Contact High Level Thai | Ask for a Fit Call',
    ctMetaDescription:
        "Ask for a 20-minute Fit Call with High Level Thai. Message us on LINE or WhatsApp with a time that suits you and we'll reply to confirm it. Working with businesses in Hua Hin and across Thailand.",
    ctHeroHeadline: 'Ask for a Fit Call',
    ctHeroLead:
        "A 20-minute call on Google Meet. Tell us what you want the business to achieve, or what keeps getting in the way, and we'll tell you honestly whether a closer look is worth it.",
    ctBookHeading: 'Suggest a time',
    ctBookByMessage:
        "Message us on LINE or WhatsApp with a day and time that suit you. This asks for a time. It isn't a confirmed booking yet. We'll reply to confirm it, or suggest another time, and send you a Google Meet link.",
    ctNext2:
        "If we can help, we'll suggest the next step, usually a Business Read, and tell you what it costs. If you only need a website, we can talk about that directly.",
    abClosingBody:
        "Twenty minutes on a Fit Call is a fair way to find out whether we can help. You'll get an honest answer, and there's no obligation after it.",

    // ------------------------------------------------------------ How It Works: one main journey
    hiwMetaTitle: 'How It Works | Fit Call, Business Read, One Priority, a Practical Plan | High Level Thai',
    hiwMetaDescription:
        'Start with a 20-minute Fit Call. The Business Read researches the business, takes an hour with you and up to half an hour with a manager, then agrees one priority and a practical plan. Anything after that is scoped separately.',
    hiwHeroLead: 'Six steps, in order. You can stop after any of them. Each one ends with a decision you make.',
    step1Name: 'Fit Call',
    step1Body:
        'Twenty minutes. You tell us what you want the business to achieve. We tell you honestly whether a Business Read is worth it, or whether something else fits better.',
    step2Name: 'Business Read',
    step2Body: 'We research the business first, then talk with you for an hour, and with one of your managers for up to 30 minutes if that helps.',
    step3Name: 'One priority, one plan',
    step3Body: 'We agree the one priority that matters most and write a practical plan for it: what to do, in what order, and who could do it.',
    step4Name: 'Carry out the plan',
    step4Body: 'Your team carries out the plan, or we help with the parts you choose. Any help is scoped and priced separately.',
    step5Name: 'Check what changed',
    step5Body: 'See whether it worked. For example: did every enquiry get an answer?',
    step6Name: 'The next priority, if you want one',
    step6Body: "Move on to the next priority only if it's worth it to you.",
    hiwNoObligation: "You don't have to buy every stage. You can stop after the Business Read, or after any step, and the plan is still yours.",

    // ------------------------------------------------------------ Examples: the close says the Read the same way
    exUnderLine: 'Which of these matters most in your business, if any, is what the Business Read helps you decide.',
    exClosingHeading: 'Start with what you want to achieve',
    exClosingBody:
        "The Business Read starts with your goals. We research the business, talk with you for an hour, and with a manager for up to 30 minutes if it helps. Then we agree one priority and write a practical plan for it. You're not obliged to do anything with it.",

    // ------------------------------------------------------------ Blindspots: the Read isn't only for problems inside
    blindDeeperHeading: 'When you want to look further',

    // ------------------------------------------------------------ Owner Dependency: a lens, not a separate deliverable
    odClassLead:
        'Every way the business depends on you can be sorted into one of five groups. We use this sorting when owner dependence turns out to matter to your goals.',

    // ------------------------------------------------------------ capabilities: no "never before" rule
    capMethodLine:
        'We suggest a tool only once we know what it has to do. For most businesses that starts with the Business Read. If you already have a clear website brief, we can talk about a website project on its own.',

    // ============================================================ ROUND 2, the full review
    // ------------------------------------------------------------ shared closing band (goals first)
    finalHeading: 'Tell us what you want the business to achieve.',
    finalBody: "In 20 minutes we'll tell you honestly whether a closer look is worth it, and what it would cost.",

    // ------------------------------------------------------------ home
    homeMetaTitle: 'High Level Thai | Start With Your Goals | Owner-Led Businesses in Thailand',
    homeHeroLead:
        "For owner-led businesses in Thailand. You tell us what you want to achieve: more suitable enquiries, a smoother customer journey, a team that can do more without you. We look at how your marketing, people and systems help or get in the way, then agree one priority and a practical plan.",
    hxTag: 'Example',
    hxHeading: 'What that can look like',
    hxTodayLabel: 'Today',
    hxToday: 'A customer asks for a price on LINE. Three people assume someone else answered.',
    hxChangeLabel: "What we'd change",
    hxChange: 'The enquiry goes into one shared list, and one person is named to reply.',
    hxLateLabel: 'If the reply is late',
    hxLate: 'The manager sees it, without anyone having to remember.',
    hxNoticeLabel: "What you'd notice",
    hxNotice: 'You can check whether every enquiry got an answer.',
    hpHeading: "A look at what you'd receive",
    hpLead: "A small part of a sample business map and plan, built on an invented clinic so we can show it in public. It shows the format, not a client's results.",
    goalsHeading: 'Which is closest to what you want?',
    goalsLead: 'Pick the one that sounds most like you. Each leads to the page that explains it.',
    goal1Name: 'More of the right enquiries',
    goal1Body: "People find you, understand what you offer and get in touch.",
    goal2Name: 'A website that brings in work',
    goal2Body: 'A new site, or a better one, planned around how customers contact you.',
    goal3Name: 'Every enquiry answered',
    goal3Body: 'One person responsible for each reply, and a manager who sees when one is late.',
    goal4Name: 'Quotes, jobs and payments that keep moving',
    goal4Body: 'Track a customer from the first question to the quote, the job and the payment.',
    goal5Name: 'A team that handles everyday decisions',
    goal5Body: 'Clear limits, so routine work goes on and the important things reach you.',
    goal6Name: 'See what needs you, without asking',
    goal6Body: 'Know what needs your attention without asking everyone for an update.',
    goalsCta: 'Read more',
    followHeading: 'What can follow, if you want it',
    followLead:
        'Each of these is scoped and priced separately, and only if you want it. If you already have a clear website brief, you can talk to us about a website on its own.',
    follow1Name: 'A new or improved website',
    follow1Body: 'Design, clear messaging, enquiries and follow-up, planned together.',
    follow2Name: 'The enquiry journey',
    follow2Body: 'From the first message to a booked appointment or a sent quote, with someone owning each step.',
    follow3Name: 'Marketing',
    follow3Body: "Before anyone spends more on advertising, we check that the enquiries it brings will be answered.",
    follow4Name: 'Processes and routines',
    follow4Body: 'Simple rules, shared lists and checks, built in your own accounts wherever practical.',
    nextHeading: 'What happens next',
    next1Name: 'Ask for a Fit Call',
    next1Body: 'Send a day and time on LINE or WhatsApp. We reply to confirm. The call takes 20 minutes.',
    next2Name: 'The Business Read, if it fits',
    next2Body: 'Research on the business, an hour with you, and up to 30 minutes with a manager if it helps. THB 22,500, excluding VAT at seven per cent.',
    next3Name: 'One priority and a practical plan',
    next3Body: "You decide what to do with it. Anything after that is scoped separately, and you're not obliged to buy it.",
    nextSelfCheck: 'Not ready to talk? Try the free 2-minute self-check',
    homeFaqHeading: 'Short answers',
    homeFaq1Q: 'What does the Business Read cost?',
    homeFaq1A: "THB 22,500, excluding VAT at seven per cent. Anything done afterwards is scoped and priced separately, and you're not obliged to buy it.",
    homeFaq2Q: 'When do I get the written plan?',
    homeFaq2A: 'Within 3 days of the Business Read meeting.',
    homeFaq3Q: 'Can I talk to you about a website without a Business Read?',
    homeFaq3A: 'Yes. If you already have a clear brief for a new or improved website, we can talk about that project on its own.',
    homeFaq4Q: 'Do I need to prepare anything?',
    homeFaq4A: "No. Come as you are. If something turns out to be worth seeing, we'll ask for it afterwards.",
    homeFaq5Q: 'Is this about selling software or AI?',
    homeFaq5A: "No. We start with what you want to achieve. Software, automation or AI come in only if the plan shows they'd help.",

    // ------------------------------------------------------------ the sample preview (home, Business Read, About)
    spTag: 'Example · invented business',
    spMapTitle: 'Sample business map, in brief',
    spMapLead: 'Each dot is how marketing, people or systems are doing at one step a patient takes.',
    spFixLabel: 'The map flags four things to fix first',
    spArrow: 'Together they point to one agreed priority',
    spPlanTitle: 'Improvement plan, first actions',
    spSeeMap: 'See the full sample map',
    spSeePlan: 'See the full plan extract',
    spSeeDemo: 'Try the website demonstration',

    // ------------------------------------------------------------ Business Read
    brPreviewHeading: 'What the Read gives you',
    brValueBody:
        "A decision on what deserves attention first, and a plan your team can act on. Here's a small part of a sample, built on an invented clinic.",
    brReceiveNote: "Every point is marked 'we checked this' or 'we still need to check this', so you never have to guess.",
    brTimingLabel: 'When the plan arrives:',
    brTimingValue: 'Within 3 days of the meeting.',
    brExcludedBody2: "It also isn't a software sales pitch or a general talk about AI.",
    brFaq2A:
        "No. A person runs the conversations, weighs what we find and decides what goes in the plan, and that person answers to you for it. We use AI tools to help with research, transcription and first drafts, and we check what they produce against what we saw and heard. Anything we couldn't check is marked that way.",
    brFaq3A:
        "That's common, and it's useful. A suspicion you already have gets tested against what we find and ranked against everything else, so you can see whether it really comes first. Anything we couldn't prove is marked 'we still need to check this'.",
    brFaq7Q: 'When do I get the written plan?',
    brFaq7A: 'Within 3 days of the Business Read meeting.',

    // ------------------------------------------------------------ Examples
    exHeroHeadline: 'What we look at, and what could change',
    exHeroLead:
        "Everything on this page is built on invented businesses, so we can show it in public. None of it is a client's story, and there are no results figures. It shows what we'd look at, what we might change, and what you'd notice.",
    planFromMap: "The map above flags four things to fix first. They don't become four projects. Together they point to the one priority below.",
    exScenariosHeading: 'Four more situations, and what could change',
    exScenariosNote: "Illustrations, not client stories. 'What could change' describes a possible result, not a promised one.",
    ex1After:
        'What could change. Every enquiry lands in one place, whichever channel it came from. Each one has an owner and a next step with a date on it. Follow-up happens because the list shows it, not because somebody remembered.',
    ex2After:
        'What could change. The everyday decisions have simple rules, written where the staff work, not in your head. Anything outside the rules comes to you with the facts already gathered, so the answer can take a minute instead of a meeting.',
    ex3After:
        'What could change. The way the business does things is written down and easy to search, so anyone can find the answer without finding the person. New staff can learn from the notes rather than from interruptions.',
    ex4After:
        'What could change. Routine requests are handled without you. Uncertain ones go to someone on your team, with the history attached. Only what needs your judgement reaches you, ready to decide.',

    // ------------------------------------------------------------ Contact
    ctIncludeHeading: 'What to put in your message (all optional)',
    ctInclude1: 'Your website address, if you have one',
    ctInclude2: 'The one thing you most want to change or achieve, for example more suitable enquiries, a new website, or fewer things coming back to you',
    ctInclude3: 'A day and time that suit you for the call',
    ctNext1: 'We read your message and reply ourselves, within 24 hours on LINE and WhatsApp.',

    // ------------------------------------------------------------ How It Works
    hiwHold1: 'We explain why before we recommend what.',
    hiwHold2: "Everything we write is marked 'we checked this' or 'we still need to check this'.",
    hiwHold3: 'We build in your accounts wherever practical, and the domain, content, logins and data stay with your business.',

    // ------------------------------------------------------------ Problems We Fix
    problemsMetaDescription:
        "Start from what you'd notice: enquiries going unanswered, quotes nobody follows up, decisions waiting for the owner, a website that doesn't bring work. Each with a goal and an example change.",
    pwfLead: "Start from what you'd notice. Each problem has a goal, one example of a change that helps, and where to read more.",
    pwfNoticeLabel: "What you'd notice",
    pwfGoalLabel: 'The goal',
    pwfExampleLabel: 'For example',
    pwfDetailLabel: 'Possible controls, in more detail',
    pwfE1Name: "Customers can't find you, or don't get in touch",
    pwfE1Notice: 'People visit your website or page, but few send a message, or they ask questions the site should already answer.',
    pwfE1Goal: 'More of the right people find you, understand what you offer and get in touch.',
    pwfE1Example: 'Service times and the next step are added to every page, with one clear way to ask a question.',
    pwfE1Link: 'New websites and website improvement',
    pwfE2Name: 'Marketing brings people in, but few become customers',
    pwfE2Notice: "Enquiries arrive from posts or adverts, but you can't say how many turned into work.",
    pwfE2Goal: 'A customer journey you can see, from the first question to the first job.',
    pwfE2Example: 'Each enquiry records where it came from, so you can see which channel brings work.',
    pwfE2Link: 'See where a sale can slip',
    m1Notice: 'Enquiries arrive on LINE, Facebook and the phone, and some never get an answer.',
    m1Goal: 'Every enquiry has one person responsible and gets a reply in good time.',
    m1Example:
        'A customer asks for a price on LINE. Today, three people assume someone else answered. We put the enquiry in one shared list and name one person to reply. If the reply is late, the manager sees it.',
    m1Link: 'See a sample plan for this',
    m2Notice: 'Quotes go out and nobody follows up. Invoices wait until someone remembers.',
    m2Goal: 'Keep track of a customer from the first question to the quote, the job and the payment.',
    m2Example: 'Every quote gets a follow-up date. On that date, the person who sent it gets a reminder.',
    m2Link: 'See where a sale can slip',
    m3Notice: 'Staff wait for you to approve small things, and the same questions come back every week.',
    m3Goal: 'Give the team clear limits, so they can handle everyday decisions and bring you the important ones.',
    m3Example: 'Reception can offer a new-patient slot within limits you set. Anything outside them comes to you with the details ready.',
    m3Link: 'Read about owner dependency',
    m4Notice: 'To know how things are going, you have to ask several people.',
    m4Goal: 'See what needs your attention without asking everyone for an update.',
    m4Example: 'Every Friday, one short list shows enquiries in, answered the same day, and booked.',
    m4Link: 'How the Business Read picks a first priority',
    controlHeading: 'A simple rule that makes sure the next step happens',
    pwfControlLead: 'For example, every enquiry has one person responsible for replying. Most of the fixes above are made of these six parts:',
    glossHeading: 'Words we use, in plain terms',
    gloss1Term: 'Revenue leakage',
    gloss1Body: 'People ask about your service, but some never get an answer. Those are chances to win work that slip away.',
    gloss2Term: 'Control',
    gloss2Body: 'A simple rule that makes sure the next step happens. For example, every enquiry has one person responsible for replying.',
    gloss3Term: 'Escalation',
    gloss3Body: 'If nobody replies by the agreed time, the manager gets a reminder.',
    gloss4Term: 'Commercial follow-through',
    gloss4Body: 'Keep track of a customer from the first question to the quote, the job and the payment.',
    gloss5Term: 'Management visibility',
    gloss5Body: 'See what needs your attention without asking everyone for an update.',
    gloss6Term: 'Owner decision control',
    gloss6Body: 'Give the team clear limits, so they can handle everyday decisions and bring you the important ones.',
    gloss7Term: 'Verified / not established',
    gloss7Body: "'We checked this' / 'We still need to check this'.",
    aiLead: 'After you and the team are clear on what should happen, AI can help with some of the work. You decide whether it does.',

    // ------------------------------------------------------------ Who We Help
    whoMetaDescription:
        'High Level Thai works with owner-led businesses in Thailand, Thai or foreign owned, that want more suitable enquiries, a smoother customer journey, a team that can do more without the owner, or a website that brings in work.',
    whoHeading: 'Owner-led businesses in Thailand',
    whoLead: "Thai owners and foreign owners alike. What matters is what you want the business to achieve, more than which industry you're in.",
    whoSitHeading: 'Three situations we often hear about',
    whoSit1Name: "You're growing, and enquiries are slipping",
    whoSit1Body: 'More messages arrive than anyone can keep track of, and some never get an answer.',
    whoSit1Goal: 'Goal: more suitable enquiries, answered and followed through.',
    whoSit2Name: 'Everything still comes back to you',
    whoSit2Body: "Staff wait for your approval on small things, and you're the only one who knows how some jobs are done.",
    whoSit2Goal: 'Goal: a team that handles everyday decisions, so your time goes where it matters.',
    whoSit3Name: "Your website or marketing isn't bringing the right customers",
    whoSit3Body: 'People find you, but they leave without getting in touch, or the enquiries that do come in are the wrong fit.',
    whoSit3Goal: 'Goal: a website and customer journey that turn interest into enquiries.',
    whoFitHeading: 'Probably a good fit if',
    whoFitY1: 'You can name a goal for the business over the next year.',
    whoFitY2: 'More than one person deals with customers or jobs.',
    whoFitY3: 'Enquiries come in on more than one channel.',
    whoFitY4: "You're willing to show how things really work, not only how they should.",
    whoNotYetHeading: 'Probably not yet if',
    whoFitN1: 'You want software installed before anyone looks at how the work runs.',
    whoFitN2: "You want results promised in advance, or a fixed number of new customers.",
    whoFitN3: "You'd rather not change how decisions are made.",
    whoWebHeading: 'Just need a website?',
    whoWebBody: 'If you have a clear brief for a new or improved website, you can talk to us about that on its own.',
    whoWebLink: 'New websites and website improvement',
    expatHeading: 'If you run a Thai business from abroad, or as a foreign owner',
    expatLead: 'Some foreign owners also tell us about:',

    // ------------------------------------------------------------ About
    abMetaDescription:
        "High Level Thai is a Thai registered company. It helps owner-led businesses reach the goals they've set, by looking at how marketing, people and systems work together. How we work, and a sample of what you'd receive.",
    abHeroHeadline: 'A Thai company that starts with your goals.',
    abHeroLead:
        "High Level Thai helps owner-led businesses in Thailand reach the goals they've set, by looking at how marketing, people and systems work together.",
    abHeroLead2:
        'We start by understanding the business. Then we agree what deserves attention first and write a practical plan your team can act on. Software, automation or AI come in only where they help that plan.',
    abHeroLead3: 'Your goals first. Tools second.',
    abHowHeading: 'How we work, in ways you can check',
    abHow1: 'We start with your goals, in your words.',
    abHow2: 'Before we meet, we research the business from the outside: the website, listings, reviews and how an enquiry reaches you.',
    abHow3: "Every finding is marked 'we checked this' or 'we still need to check this'.",
    abHow4: 'The plan says which steps your team can take on and where outside help would make sense.',
    abHow5: 'We build in your accounts wherever practical. The domain, content, logins and data stay with your business.',
    abHow6: 'Third-party costs are listed before you agree, and any further work is scoped and priced separately.',
    abSampleHeading: "A sample of what you'd receive",
    abSampleLead: 'Built on an invented clinic, so we can show it in public.',

    // ------------------------------------------------------------ Blindspot self-check
    blindSeoTitle: 'Business Blindspot Self-Check | High Level Thai',
    blindMetaDescription:
        'A free 2-minute self-check. Look at your business from the outside and notice where a customer might struggle to find, understand, trust or contact you.',
    blindIntro3: "This free self-check helps you look at your business the way a stranger would. There's no score. It's for you.",
    blindQuickTestHeading: 'The 2-minute self-check',
    blindInstruction: 'Write down every place where you hesitate. Fix the biggest one first, then run the check again.',
    blindSendHeading: 'Want a second pair of eyes?',
    blindSendBody:
        "If you like, send us the one point where you hesitated, on LINE or WhatsApp, and we'll tell you what we'd look at first. There's no form, and nothing to sign up for.",
    blindCaseHeading: 'We ran the check on ourselves first.',
    blindCaseBody:
        'Before asking other businesses to try it, we ran the same check on High Level Thai. It showed us things to improve, including how easy we were to find locally and how clearly we explained what we do.',

    // ------------------------------------------------------------ Owner Dependency
    odIllTag: 'Illustration · invented example',
    odIllHeading: 'A routine decision, and one that should stay yours',
    odRoutineLabel: 'Routine: the team decides',
    odRoutineBody: "A regular customer asks to move a booking to next week. Reception checks the diary and moves it, within rules you've set.",
    odOwnerLabel: 'Yours: it comes to you',
    odOwnerBody:
        'A hotel that buys from you every month asks for a lower price on a year of supply. It comes to you, with the order history and the margin already in front of you.',
    odGoalHeading: 'Want the business to handle more without you?',
    odGoalBody: "Tell us which decisions you'd like off your desk. In 20 minutes we'll tell you honestly whether a closer look is worth it.",

    // ------------------------------------------------------------ Hua Hin
    huahinCommonLine:
        "Whatever the industry, what matters is your goal: more of the right customers, a smoother customer journey, or a business that runs well when you're not there. A simple website project is welcome too.",
    hhJourneyTag: 'Illustration · invented business',
    hhJourneyHeading: 'One weekend enquiry in Hua Hin',
    hhJourneyLead: 'An invented pool villa, to show the kind of thing we look at. Not a client.',
    hhStep1Name: 'Finding',
    hhStep1Body: 'A family planning a weekend searches on Google Maps and finds the villa: good photos, but no prices or dates.',
    hhStep2Name: 'Asking',
    hhStep2Body: 'On Friday evening they send a LINE message to ask if Saturday is free.',
    hhStep3Name: 'Waiting',
    hhStep3Body: 'The owner is driving back from Bangkok. Nobody else watches that LINE account at weekends.',
    hhStep4Name: 'Gone',
    hhStep4Body: "By Sunday morning they've booked somewhere that answered.",
    hhChangeLabel: 'What could change',
    hhChangeBody: 'Prices and free dates on the website, one shared list for LINE and Facebook messages, and one named person who replies by an agreed time at weekends.',
    hhNoticeLabel: "What you'd notice",
    hhNoticeBody: 'Weekend messages answered before the guest moves on.',

    // ------------------------------------------------------------ tidy-ups after reading the built pages
    footerBrandLine:
        "High Level Thai helps owner-led businesses in Thailand reach the goals they've set, by looking at how marketing, people and systems work together.",
    homeBlindCtaLabel: 'Try the free 2-minute self-check',
    odBlindLink: 'Try the free 2-minute self-check',
    exArtefactsLead: "The clinic here is an example in Hua Hin, made up for this page. None of it comes from a client, and none of it shows a result we've achieved.",
    blindDeeperBody:
        'This check looks at how a customer finds you and gets in touch. The Business Read looks at the whole picture: what you want the business to achieve, and how your marketing, people and systems help or get in the way. It ends with one agreed priority and a practical plan.',
};

export const improvementsTh = {
    navCtaLabel: 'ขอนัดคุยเบื้องต้น',
    ctaFitCall: 'ขอนัดคุยเบื้องต้น',
    ctaFitCallFirst: 'ขอนัดคุยเบื้องต้นก่อน',
    brCtaLabel: 'ขอนัดคุยเบื้องต้นก่อน',
    abCtaLabel: 'ขอนัดคุยเบื้องต้น',
    blindCta: 'ขอนัดคุยเบื้องต้น',
    odCta: 'ขอนัดคุยเบื้องต้น',
    huahinCta: 'ขอนัดคุยเบื้องต้น',
    ctMetaTitle: 'ติดต่อ High Level Thai | ขอนัดคุยเบื้องต้น',
    ctMetaDescription:
        'ขอนัดคุยเบื้องต้น 20 นาทีกับ High Level Thai ส่งข้อความทาง LINE หรือ WhatsApp บอกเวลาที่คุณสะดวก แล้วเราจะตอบกลับเพื่อยืนยัน เราทำงานกับธุรกิจในหัวหินและทั่วประเทศไทย',
    ctHeroHeadline: 'ขอนัดคุยเบื้องต้น',
    ctHeroLead:
        'คุยกัน 20 นาทีผ่าน Google Meet เล่าให้เราฟังว่าคุณอยากให้ธุรกิจไปถึงอะไร หรืออะไรที่ขวางทางอยู่ แล้วเราจะบอกตรงๆ ว่าคุ้มที่จะดูให้ละเอียดขึ้นหรือไม่',
    ctBookHeading: 'เสนอเวลาที่คุณสะดวก',
    ctBookByMessage:
        'ส่งข้อความทาง LINE หรือ WhatsApp บอกวันและเวลาที่คุณสะดวก ข้อความนี้เป็นการขอเวลานัด ยังไม่ใช่การจองที่ยืนยันแล้ว เราจะตอบกลับเพื่อยืนยันเวลา หรือเสนอเวลาอื่น พร้อมส่งลิงก์ Google Meet ให้คุณ',
    ctNext2:
        'ถ้าเราช่วยได้ เราจะเสนอขั้นตอนถัดไป ซึ่งส่วนใหญ่คือ Business Read และบอกราคาให้ทราบ ถ้าคุณต้องการแค่เว็บไซต์ เราคุยเรื่องนั้นโดยตรงได้เลย',
    abClosingBody:
        'การนัดคุยเบื้องต้นยี่สิบนาทีเป็นวิธีที่เหมาะในการดูว่าเราช่วยคุณได้หรือไม่ คุณจะได้คำตอบที่ตรงไปตรงมา และไม่มีข้อผูกมัดหลังจากนั้น',

    hiwMetaTitle: 'วิธีการทำงาน | นัดคุยเบื้องต้น, Business Read, เรื่องสำคัญหนึ่งเรื่อง, แผนที่ทำได้จริง | High Level Thai',
    hiwMetaDescription:
        'เริ่มด้วยการนัดคุยเบื้องต้น 20 นาที Business Read ศึกษาธุรกิจ คุยกับคุณหนึ่งชั่วโมง และกับผู้จัดการไม่เกินครึ่งชั่วโมง แล้วตกลงเรื่องสำคัญหนึ่งเรื่องพร้อมแผนที่ทำได้จริง งานหลังจากนั้นตกลงขอบเขตแยกต่างหาก',
    hiwHeroLead: 'หกขั้นตอนตามลำดับ คุณหยุดได้หลังขั้นไหนก็ได้ และทุกขั้นจบด้วยการตัดสินใจของคุณเอง',
    step1Name: 'นัดคุยเบื้องต้น',
    step1Body: 'ยี่สิบนาที คุณเล่าว่าอยากให้ธุรกิจไปถึงอะไร แล้วเราบอกตรงๆ ว่า Business Read คุ้มสำหรับคุณหรือไม่ หรือมีทางอื่นที่เหมาะกว่า',
    step2Name: 'Business Read',
    step2Body: 'เราศึกษาธุรกิจก่อน แล้วคุยกับคุณหนึ่งชั่วโมง และคุยกับผู้จัดการคนหนึ่งไม่เกิน 30 นาทีหากเป็นประโยชน์',
    step3Name: 'เรื่องสำคัญหนึ่งเรื่อง แผนหนึ่งแผน',
    step3Body: 'เราตกลงเรื่องที่สำคัญที่สุดร่วมกัน แล้วเขียนแผนที่ทำได้จริงสำหรับเรื่องนั้น: ต้องทำอะไร ลำดับไหน และใครทำได้',
    step4Name: 'ลงมือตามแผน',
    step4Body: 'ทีมของคุณลงมือตามแผน หรือให้เราช่วยในส่วนที่คุณเลือก ความช่วยเหลือใดๆ ตกลงขอบเขตและราคาแยกต่างหาก',
    step5Name: 'ดูว่าอะไรเปลี่ยนไป',
    step5Body: 'ตรวจว่าได้ผลหรือไม่ เช่น ทุกข้อความสอบถามได้รับคำตอบหรือเปล่า',
    step6Name: 'เรื่องถัดไป ถ้าคุณต้องการ',
    step6Body: 'ไปต่อที่เรื่องสำคัญเรื่องถัดไป เฉพาะเมื่อคุณเห็นว่าคุ้ม',
    hiwNoObligation: 'คุณไม่ต้องซื้อทุกขั้นตอน คุณหยุดหลัง Business Read หรือหลังขั้นไหนก็ได้ และแผนยังเป็นของคุณ',

    exUnderLine: 'ในธุรกิจของคุณ ข้อไหนสำคัญที่สุด หรือมีข้อไหนเกิดขึ้นบ้าง Business Read ช่วยให้คุณตัดสินใจเรื่องนี้',
    exClosingHeading: 'เริ่มจากสิ่งที่คุณอยากไปถึง',
    exClosingBody:
        'Business Read เริ่มจากเป้าหมายของคุณ เราศึกษาธุรกิจ คุยกับคุณหนึ่งชั่วโมง และกับผู้จัดการไม่เกิน 30 นาทีหากเป็นประโยชน์ จากนั้นเราตกลงเรื่องสำคัญหนึ่งเรื่องร่วมกัน และเขียนแผนที่ทำได้จริงสำหรับเรื่องนั้น คุณไม่มีข้อผูกมัดว่าต้องทำอะไรต่อ',

    blindDeeperHeading: 'เมื่อคุณอยากดูให้ลึกกว่านี้',

    odClassLead: 'ทุกเรื่องที่ธุรกิจพึ่งพาคุณ จัดได้เป็นหนึ่งในห้ากลุ่มนี้ เราใช้การจัดกลุ่มนี้เมื่อการพึ่งพาเจ้าของเป็นเรื่องสำคัญต่อเป้าหมายของคุณ',

    capMethodLine:
        'เราจะแนะนำเครื่องมือก็ต่อเมื่อรู้แล้วว่าเครื่องมือนั้นต้องทำอะไร สำหรับธุรกิจส่วนใหญ่ จุดเริ่มต้นคือ Business Read แต่ถ้าคุณมีโจทย์เรื่องเว็บไซต์ที่ชัดเจนอยู่แล้ว เราคุยเรื่องงานเว็บไซต์แยกต่างหากได้เลย',

    // ============================================================ ROUND 2
    finalHeading: 'บอกเราว่าคุณอยากให้ธุรกิจไปถึงอะไร',
    finalBody: 'ใน 20 นาที เราจะบอกตรงๆ ว่าคุ้มที่จะดูให้ละเอียดขึ้นหรือไม่ และมีค่าใช้จ่ายเท่าไร',

    homeMetaTitle: 'High Level Thai | เริ่มจากเป้าหมายของคุณ | ธุรกิจที่เจ้าของบริหารเองในประเทศไทย',
    homeHeroLead:
        'สำหรับธุรกิจที่เจ้าของบริหารเองในประเทศไทย คุณบอกเราว่าอยากไปถึงอะไร เช่น ได้ลูกค้าที่ใช่มากขึ้น เส้นทางของลูกค้าที่ราบรื่นขึ้น หรือทีมที่ทำงานได้มากขึ้นโดยไม่ต้องพึ่งคุณ เราดูว่าการตลาด คน และระบบของคุณช่วยหรือขวางทางอยู่ตรงไหน แล้วตกลงเรื่องสำคัญหนึ่งเรื่องพร้อมแผนที่ทำได้จริง',
    hxTag: 'ตัวอย่าง',
    hxHeading: 'หน้าตาของงานเป็นแบบนี้',
    hxTodayLabel: 'วันนี้',
    hxToday: 'ลูกค้าถามราคาทาง LINE พนักงานสามคนต่างคิดว่ามีคนอื่นตอบไปแล้ว',
    hxChangeLabel: 'สิ่งที่เราจะเปลี่ยน',
    hxChange: 'ข้อความสอบถามเข้าไปอยู่ในรายการเดียวที่ทุกคนเห็น และมีคนหนึ่งคนที่ได้รับมอบหมายให้ตอบ',
    hxLateLabel: 'ถ้าตอบช้า',
    hxLate: 'ผู้จัดการเห็นได้เอง โดยไม่ต้องมีใครคอยจำ',
    hxNoticeLabel: 'สิ่งที่คุณจะสังเกตเห็น',
    hxNotice: 'คุณตรวจได้ว่าทุกข้อความสอบถามได้รับคำตอบแล้วหรือยัง',
    hpHeading: 'ตัวอย่างสิ่งที่คุณจะได้รับ',
    hpLead: 'ส่วนเล็กๆ จากตัวอย่างแผนผังธุรกิจและแผนงาน สร้างจากคลินิกสมมติเพื่อให้แสดงต่อสาธารณะได้ แสดงรูปแบบของงาน ไม่ใช่ผลลัพธ์ของลูกค้า',
    goalsHeading: 'ข้อไหนใกล้กับสิ่งที่คุณต้องการที่สุด',
    goalsLead: 'เลือกข้อที่ฟังดูเหมือนธุรกิจของคุณที่สุด แต่ละข้อพาไปยังหน้าที่อธิบายเรื่องนั้น',
    goal1Name: 'ได้ข้อความสอบถามที่ใช่มากขึ้น',
    goal1Body: 'คนหาคุณเจอ เข้าใจว่าคุณทำอะไร และติดต่อเข้ามา',
    goal2Name: 'เว็บไซต์ที่ช่วยให้ได้งาน',
    goal2Body: 'เว็บไซต์ใหม่ หรือเว็บไซต์เดิมที่ดีขึ้น วางแผนจากวิธีที่ลูกค้าติดต่อคุณ',
    goal3Name: 'ทุกข้อความสอบถามได้รับคำตอบ',
    goal3Body: 'มีคนรับผิดชอบการตอบแต่ละเรื่อง และผู้จัดการเห็นเมื่อมีเรื่องที่ตอบช้า',
    goal4Name: 'ใบเสนอราคา งาน และการชำระเงินที่เดินต่อไปได้',
    goal4Body: 'ติดตามลูกค้าตั้งแต่คำถามแรก ไปจนถึงใบเสนอราคา งาน และการชำระเงิน',
    goal5Name: 'ทีมที่ตัดสินใจเรื่องประจำวันได้เอง',
    goal5Body: 'มีขอบเขตที่ชัดเจน งานประจำจึงเดินต่อได้ และเรื่องสำคัญมาถึงคุณ',
    goal6Name: 'เห็นว่าเรื่องไหนต้องการคุณ โดยไม่ต้องถาม',
    goal6Body: 'รู้ว่าอะไรต้องการความสนใจของคุณ โดยไม่ต้องไล่ถามความคืบหน้าจากทุกคน',
    goalsCta: 'อ่านต่อ',
    followHeading: 'สิ่งที่ทำต่อได้ ถ้าคุณต้องการ',
    followLead:
        'แต่ละเรื่องตกลงขอบเขตและราคาแยกต่างหาก และทำเฉพาะเมื่อคุณต้องการ ถ้าคุณมีโจทย์เรื่องเว็บไซต์ที่ชัดเจนอยู่แล้ว คุยกับเราเรื่องเว็บไซต์อย่างเดียวได้เลย',
    follow1Name: 'เว็บไซต์ใหม่ หรือปรับปรุงเว็บไซต์เดิม',
    follow1Body: 'การออกแบบ ข้อความที่ชัดเจน การรับสอบถาม และการติดตามลูกค้า วางแผนไปพร้อมกัน',
    follow2Name: 'เส้นทางของข้อความสอบถาม',
    follow2Body: 'ตั้งแต่ข้อความแรก จนถึงการนัดหมายหรือใบเสนอราคาที่ส่งออกไป โดยมีคนรับผิดชอบทุกขั้น',
    follow3Name: 'การตลาด',
    follow3Body: 'ก่อนจะจ่ายค่าโฆษณาเพิ่ม เราตรวจก่อนว่าข้อความสอบถามที่ได้มาจะมีคนตอบ',
    follow4Name: 'กระบวนการและงานประจำ',
    follow4Body: 'กติกาง่ายๆ รายการที่ทุกคนเห็น และการตรวจสอบ สร้างในบัญชีของคุณเองในทุกกรณีที่ทำได้',
    nextHeading: 'ขั้นตอนต่อไป',
    next1Name: 'ขอนัดคุยเบื้องต้น',
    next1Body: 'ส่งวันและเวลาที่สะดวกทาง LINE หรือ WhatsApp เราจะตอบกลับเพื่อยืนยัน การคุยใช้เวลา 20 นาที',
    next2Name: 'Business Read ถ้าเหมาะกับคุณ',
    next2Body: 'การศึกษาธุรกิจ หนึ่งชั่วโมงกับคุณ และไม่เกิน 30 นาทีกับผู้จัดการหากเป็นประโยชน์ ราคา 22,500 บาท ไม่รวมภาษีมูลค่าเพิ่ม 7%',
    next3Name: 'เรื่องสำคัญหนึ่งเรื่อง และแผนที่ทำได้จริง',
    next3Body: 'คุณเป็นคนตัดสินใจว่าจะทำอะไรกับแผนนั้น งานหลังจากนั้นตกลงขอบเขตแยกต่างหาก และคุณไม่มีข้อผูกมัดที่ต้องซื้อ',
    nextSelfCheck: 'ยังไม่พร้อมคุย? ลองเช็กตัวเองฟรี 2 นาที',
    homeFaqHeading: 'คำตอบสั้นๆ',
    homeFaq1Q: 'Business Read ราคาเท่าไร',
    homeFaq1A: '22,500 บาท ไม่รวมภาษีมูลค่าเพิ่ม 7% งานใดๆ หลังจากนั้นตกลงขอบเขตและราคาแยกต่างหาก และคุณไม่มีข้อผูกมัดที่ต้องซื้อ',
    homeFaq2Q: 'จะได้รับแผนฉบับเขียนเมื่อไร',
    homeFaq2A: 'ภายใน 3 วันหลังการคุย Business Read',
    homeFaq3Q: 'คุยเรื่องเว็บไซต์โดยไม่ต้องทำ Business Read ได้ไหม',
    homeFaq3A: 'ได้ ถ้าคุณมีโจทย์ที่ชัดเจนสำหรับเว็บไซต์ใหม่หรือการปรับปรุงเว็บไซต์เดิม เราคุยเรื่องงานนั้นแยกต่างหากได้',
    homeFaq4Q: 'ต้องเตรียมอะไรไหม',
    homeFaq4A: 'ไม่ต้อง มาคุยแบบที่เป็นอยู่ได้เลย ถ้ามีอะไรที่ควรดู เราค่อยขอทีหลัง',
    homeFaq5Q: 'นี่คือการขายซอฟต์แวร์หรือ AI ใช่ไหม',
    homeFaq5A: 'ไม่ใช่ เราเริ่มจากสิ่งที่คุณอยากไปถึง ซอฟต์แวร์ ระบบอัตโนมัติ หรือ AI จะเข้ามาก็ต่อเมื่อแผนแสดงว่าช่วยได้จริง',

    spTag: 'ตัวอย่าง · ธุรกิจสมมติ',
    spMapTitle: 'ตัวอย่างแผนผังธุรกิจ แบบย่อ',
    spMapLead: 'แต่ละจุดคือสถานะของการตลาด คน หรือระบบ ในแต่ละขั้นที่คนไข้ผ่าน',
    spFixLabel: 'แผนผังชี้สี่เรื่องที่ต้องแก้ก่อน',
    spArrow: 'ทั้งหมดนำไปสู่เรื่องสำคัญหนึ่งเรื่องที่ตกลงกัน',
    spPlanTitle: 'แผนการปรับปรุง สิ่งที่ต้องทำในช่วงแรก',
    spSeeMap: 'ดูตัวอย่างแผนผังฉบับเต็ม',
    spSeePlan: 'ดูตัวอย่างแผนงานฉบับเต็ม',
    spSeeDemo: 'ลองใช้ตัวอย่างเว็บไซต์',

    brPreviewHeading: 'Business Read ให้อะไรคุณ',
    brValueBody: 'การตัดสินใจว่าเรื่องไหนควรได้รับความสนใจก่อน และแผนที่ทีมของคุณลงมือทำได้ นี่คือส่วนเล็กๆ จากตัวอย่าง ที่สร้างจากคลินิกสมมติ',
    brReceiveNote: 'ทุกประเด็นระบุไว้ว่า "เราตรวจสอบแล้ว" หรือ "เรายังต้องตรวจสอบ" คุณจึงไม่ต้องเดา',
    brTimingLabel: 'ได้รับแผนเมื่อไร:',
    brTimingValue: 'ภายใน 3 วันหลังการคุย',
    brExcludedBody2: 'และไม่ใช่การขายซอฟต์แวร์ หรือการคุยเรื่อง AI แบบทั่วไป',
    brFaq2A:
        'ไม่ใช่ คนจริงเป็นผู้คุยกับคุณ ชั่งน้ำหนักสิ่งที่เราพบ และตัดสินใจว่าอะไรอยู่ในแผน และคนนั้นรับผิดชอบต่อคุณ เราใช้เครื่องมือ AI ช่วยค้นข้อมูล ถอดความ และร่างฉบับแรก แล้วตรวจสิ่งที่ได้กับสิ่งที่เราเห็นและได้ยินจริง เรื่องไหนที่เรายังตรวจสอบไม่ได้ จะระบุไว้ชัดเจน',
    brFaq3A:
        'เป็นเรื่องปกติ และมีประโยชน์ สิ่งที่คุณสงสัยอยู่แล้วจะถูกทดสอบกับสิ่งที่เราพบ และจัดลำดับเทียบกับเรื่องอื่นๆ คุณจึงเห็นว่ามันควรมาก่อนจริงหรือไม่ เรื่องไหนที่เรายังพิสูจน์ไม่ได้ จะระบุไว้ว่า "เรายังต้องตรวจสอบ"',
    brFaq7Q: 'จะได้รับแผนฉบับเขียนเมื่อไร',
    brFaq7A: 'ภายใน 3 วันหลังการคุย Business Read',

    exHeroHeadline: 'สิ่งที่เราดู และสิ่งที่อาจเปลี่ยนไป',
    exHeroLead:
        'ทุกอย่างในหน้านี้สร้างจากธุรกิจสมมติ เพื่อให้แสดงต่อสาธารณะได้ ไม่มีส่วนไหนเป็นเรื่องของลูกค้า และไม่มีตัวเลขผลลัพธ์ หน้านี้แสดงว่าเราจะดูอะไร อาจเปลี่ยนอะไร และคุณจะสังเกตเห็นอะไร',
    planFromMap: 'แผนผังด้านบนชี้สี่เรื่องที่ต้องแก้ก่อน แต่ไม่ได้กลายเป็นสี่โปรเจกต์ ทั้งหมดนำไปสู่เรื่องสำคัญหนึ่งเรื่องด้านล่างนี้',
    exScenariosHeading: 'อีกสี่สถานการณ์ และสิ่งที่อาจเปลี่ยนไป',
    exScenariosNote: 'เป็นภาพตัวอย่าง ไม่ใช่เรื่องของลูกค้า "สิ่งที่อาจเปลี่ยนไป" หมายถึงผลที่เป็นไปได้ ไม่ใช่ผลที่สัญญาไว้',
    ex1After:
        'สิ่งที่อาจเปลี่ยนไป ทุกข้อความสอบถามไปรวมอยู่ที่เดียว ไม่ว่าจะมาจากช่องทางไหน แต่ละเรื่องมีผู้รับผิดชอบ และมีขั้นตอนถัดไปที่มีวันกำกับไว้ การติดตามเกิดขึ้นเพราะรายการแสดงให้เห็น ไม่ใช่เพราะมีใครนึกขึ้นได้',
    ex2After:
        'สิ่งที่อาจเปลี่ยนไป การตัดสินใจเรื่องประจำวันมีกติกาง่ายๆ เขียนไว้ตรงที่ทีมทำงาน ไม่ใช่อยู่ในหัวคุณ เรื่องที่อยู่นอกกติกาจะมาถึงคุณพร้อมข้อมูลที่รวบรวมไว้แล้ว คำตอบจึงอาจใช้เวลาหนึ่งนาที แทนที่จะเป็นหนึ่งการประชุม',
    ex3After:
        'สิ่งที่อาจเปลี่ยนไป วิธีที่ธุรกิจทำสิ่งต่างๆ ถูกเขียนไว้และค้นหาได้ง่าย ใครก็หาคำตอบได้โดยไม่ต้องตามหาตัวคน พนักงานใหม่เรียนรู้จากบันทึกได้ แทนที่จะต้องขัดจังหวะคนอื่น',
    ex4After:
        'สิ่งที่อาจเปลี่ยนไป เรื่องประจำจัดการได้โดยไม่ต้องผ่านคุณ เรื่องที่ไม่แน่ใจไปถึงคนในทีมพร้อมประวัติที่เกี่ยวข้อง มีแต่เรื่องที่ต้องใช้ดุลยพินิจของคุณเท่านั้นที่มาถึงคุณ และพร้อมให้ตัดสินใจ',

    ctIncludeHeading: 'สิ่งที่ใส่ในข้อความได้ (ไม่บังคับ)',
    ctInclude1: 'ที่อยู่เว็บไซต์ของคุณ ถ้ามี',
    ctInclude2: 'เรื่องเดียวที่คุณอยากเปลี่ยนหรืออยากไปถึงมากที่สุด เช่น ได้ข้อความสอบถามที่ใช่มากขึ้น เว็บไซต์ใหม่ หรือเรื่องที่วนกลับมาหาคุณน้อยลง',
    ctInclude3: 'วันและเวลาที่คุณสะดวกสำหรับการคุย',
    ctNext1: 'เราอ่านข้อความของคุณและตอบกลับด้วยตัวเอง ทาง LINE และ WhatsApp ภายใน 24 ชั่วโมง',

    hiwHold1: 'เราอธิบายว่าทำไม ก่อนจะแนะนำว่าทำอะไร',
    hiwHold2: 'ทุกอย่างที่เราเขียนระบุไว้ว่า "เราตรวจสอบแล้ว" หรือ "เรายังต้องตรวจสอบ"',
    hiwHold3: 'เราสร้างในบัญชีของคุณในทุกกรณีที่ทำได้ และโดเมน เนื้อหา รหัสเข้าใช้งาน และข้อมูล ยังอยู่กับธุรกิจของคุณ',

    problemsMetaDescription:
        'เริ่มจากสิ่งที่คุณสังเกตเห็น: ข้อความสอบถามที่ไม่มีใครตอบ ใบเสนอราคาที่ไม่มีใครติดตาม การตัดสินใจที่รอเจ้าของ เว็บไซต์ที่ไม่ช่วยให้ได้งาน แต่ละเรื่องมีเป้าหมายและตัวอย่างการเปลี่ยนแปลง',
    pwfLead: 'เริ่มจากสิ่งที่คุณสังเกตเห็น แต่ละปัญหามีเป้าหมาย ตัวอย่างการเปลี่ยนแปลงหนึ่งอย่างที่ช่วยได้ และหน้าที่อ่านต่อได้',
    pwfNoticeLabel: 'สิ่งที่คุณจะสังเกตเห็น',
    pwfGoalLabel: 'เป้าหมาย',
    pwfExampleLabel: 'ตัวอย่าง',
    pwfDetailLabel: 'การควบคุมที่อาจใช้ แบบละเอียด',
    pwfE1Name: 'ลูกค้าหาคุณไม่เจอ หรือไม่ติดต่อเข้ามา',
    pwfE1Notice: 'มีคนเข้าเว็บไซต์หรือเพจของคุณ แต่ส่งข้อความมาน้อย หรือถามเรื่องที่เว็บไซต์ควรตอบไว้แล้ว',
    pwfE1Goal: 'คนที่ใช่หาคุณเจอมากขึ้น เข้าใจว่าคุณทำอะไร และติดต่อเข้ามา',
    pwfE1Example: 'เพิ่มระยะเวลาของบริการและขั้นตอนถัดไปในทุกหน้า พร้อมช่องทางถามที่ชัดเจนหนึ่งทาง',
    pwfE1Link: 'เว็บไซต์ใหม่และการปรับปรุงเว็บไซต์',
    pwfE2Name: 'การตลาดพาคนเข้ามา แต่กลายเป็นลูกค้าน้อย',
    pwfE2Notice: 'มีข้อความสอบถามจากโพสต์หรือโฆษณา แต่คุณบอกไม่ได้ว่ากี่รายที่กลายเป็นงาน',
    pwfE2Goal: 'เห็นเส้นทางของลูกค้า ตั้งแต่คำถามแรกจนถึงงานแรก',
    pwfE2Example: 'ทุกข้อความสอบถามบันทึกว่ามาจากไหน คุณจึงเห็นว่าช่องทางไหนนำงานมาให้',
    pwfE2Link: 'ดูว่ายอดขายหลุดได้ตรงไหน',
    m1Notice: 'ข้อความสอบถามเข้ามาทาง LINE, Facebook และโทรศัพท์ และบางเรื่องไม่เคยได้รับคำตอบ',
    m1Goal: 'ทุกข้อความสอบถามมีคนรับผิดชอบหนึ่งคน และได้รับคำตอบทันเวลา',
    m1Example:
        'ลูกค้าถามราคาทาง LINE วันนี้พนักงานสามคนต่างคิดว่ามีคนอื่นตอบไปแล้ว เราใส่ข้อความนั้นไว้ในรายการเดียวที่ทุกคนเห็น และกำหนดคนหนึ่งคนให้ตอบ ถ้าตอบช้า ผู้จัดการจะเห็น',
    m1Link: 'ดูตัวอย่างแผนสำหรับเรื่องนี้',
    m2Notice: 'ส่งใบเสนอราคาไปแล้วไม่มีใครติดตาม ใบแจ้งหนี้รอจนกว่าจะมีคนนึกขึ้นได้',
    m2Goal: 'ติดตามลูกค้าตั้งแต่คำถามแรก ไปจนถึงใบเสนอราคา งาน และการชำระเงิน',
    m2Example: 'ทุกใบเสนอราคามีวันติดตาม เมื่อถึงวันนั้น คนที่ส่งใบเสนอราคาจะได้รับการแจ้งเตือน',
    m2Link: 'ดูว่ายอดขายหลุดได้ตรงไหน',
    m3Notice: 'พนักงานรอให้คุณอนุมัติเรื่องเล็กๆ และคำถามเดิมๆ กลับมาทุกสัปดาห์',
    m3Goal: 'ให้ทีมมีขอบเขตที่ชัดเจน เพื่อให้ตัดสินใจเรื่องประจำวันได้เอง และนำเรื่องสำคัญมาหาคุณ',
    m3Example: 'พนักงานต้อนรับเสนอคิวคนไข้ใหม่ได้เอง ภายในขอบเขตที่คุณกำหนด เรื่องที่อยู่นอกขอบเขตจะมาถึงคุณพร้อมรายละเอียด',
    m3Link: 'อ่านเรื่องการพึ่งพาเจ้าของ',
    m4Notice: 'ถ้าอยากรู้ว่างานเป็นอย่างไร คุณต้องถามหลายคน',
    m4Goal: 'เห็นว่าอะไรต้องการความสนใจของคุณ โดยไม่ต้องไล่ถามความคืบหน้าจากทุกคน',
    m4Example: 'ทุกวันศุกร์ มีรายการสั้นๆ หนึ่งรายการที่แสดงข้อความที่เข้ามา ที่ตอบภายในวันเดียวกัน และที่ได้นัด',
    m4Link: 'Business Read เลือกเรื่องสำคัญเรื่องแรกอย่างไร',
    controlHeading: 'กติกาง่ายๆ ที่ทำให้ขั้นตอนถัดไปเกิดขึ้นจริง',
    pwfControlLead: 'เช่น ทุกข้อความสอบถามมีคนหนึ่งคนที่รับผิดชอบการตอบ การแก้ไขส่วนใหญ่ข้างบนประกอบด้วยหกส่วนนี้:',
    glossHeading: 'คำที่เราใช้ แบบเข้าใจง่าย',
    gloss1Term: 'รายได้รั่วไหล',
    gloss1Body: 'มีคนถามถึงบริการของคุณ แต่บางคนไม่เคยได้รับคำตอบ นั่นคือโอกาสได้งานที่หลุดมือไป',
    gloss2Term: 'การควบคุม',
    gloss2Body: 'กติกาง่ายๆ ที่ทำให้ขั้นตอนถัดไปเกิดขึ้นจริง เช่น ทุกข้อความสอบถามมีคนหนึ่งคนที่รับผิดชอบการตอบ',
    gloss3Term: 'การส่งต่อเมื่อเกินกำหนด',
    gloss3Body: 'ถ้าไม่มีใครตอบภายในเวลาที่ตกลงไว้ ผู้จัดการจะได้รับการแจ้งเตือน',
    gloss4Term: 'การติดตามงานขายจนจบ',
    gloss4Body: 'ติดตามลูกค้าตั้งแต่คำถามแรก ไปจนถึงใบเสนอราคา งาน และการชำระเงิน',
    gloss5Term: 'การมองเห็นภาพรวมการบริหาร',
    gloss5Body: 'เห็นว่าอะไรต้องการความสนใจของคุณ โดยไม่ต้องไล่ถามความคืบหน้าจากทุกคน',
    gloss6Term: 'การควบคุมการตัดสินใจของเจ้าของ',
    gloss6Body: 'ให้ทีมมีขอบเขตที่ชัดเจน เพื่อให้ตัดสินใจเรื่องประจำวันได้เอง และนำเรื่องสำคัญมาหาคุณ',
    gloss7Term: 'ตรวจสอบแล้ว / ยังไม่ยืนยัน',
    gloss7Body: '"เราตรวจสอบแล้ว" / "เรายังต้องตรวจสอบ"',
    aiLead: 'เมื่อคุณและทีมชัดเจนแล้วว่าอะไรควรเกิดขึ้น AI ช่วยงานบางส่วนได้ และคุณเป็นคนตัดสินใจว่าจะใช้หรือไม่',

    whoMetaDescription:
        'High Level Thai ทำงานกับธุรกิจที่เจ้าของบริหารเองในประเทศไทย ทั้งเจ้าของคนไทยและชาวต่างชาติ ที่อยากได้ข้อความสอบถามที่ใช่มากขึ้น เส้นทางลูกค้าที่ราบรื่นขึ้น ทีมที่ทำงานได้มากขึ้นโดยไม่ต้องพึ่งเจ้าของ หรือเว็บไซต์ที่ช่วยให้ได้งาน',
    whoHeading: 'ธุรกิจที่เจ้าของบริหารเองในประเทศไทย',
    whoLead: 'ทั้งเจ้าของคนไทยและเจ้าของชาวต่างชาติ สิ่งที่สำคัญคือคุณอยากให้ธุรกิจไปถึงอะไร มากกว่าว่าคุณอยู่ในอุตสาหกรรมไหน',
    whoSitHeading: 'สามสถานการณ์ที่เรามักได้ยิน',
    whoSit1Name: 'ธุรกิจกำลังโต และข้อความสอบถามเริ่มหลุด',
    whoSit1Body: 'ข้อความเข้ามามากกว่าที่ใครจะตามทัน และบางเรื่องไม่เคยได้รับคำตอบ',
    whoSit1Goal: 'เป้าหมาย: ข้อความสอบถามที่ใช่มากขึ้น ได้รับคำตอบและมีการติดตามจนจบ',
    whoSit2Name: 'ทุกอย่างยังวนกลับมาหาคุณ',
    whoSit2Body: 'พนักงานรอให้คุณอนุมัติเรื่องเล็กๆ และมีงานบางอย่างที่คุณเป็นคนเดียวที่รู้วิธีทำ',
    whoSit2Goal: 'เป้าหมาย: ทีมที่ตัดสินใจเรื่องประจำวันได้เอง เพื่อให้เวลาของคุณไปอยู่กับเรื่องที่สำคัญ',
    whoSit3Name: 'เว็บไซต์หรือการตลาดยังไม่นำลูกค้าที่ใช่มาให้',
    whoSit3Body: 'คนหาคุณเจอ แต่ออกไปโดยไม่ติดต่อ หรือข้อความที่เข้ามาไม่ใช่ลูกค้าที่เหมาะ',
    whoSit3Goal: 'เป้าหมาย: เว็บไซต์และเส้นทางลูกค้าที่เปลี่ยนความสนใจให้เป็นข้อความสอบถาม',
    whoFitHeading: 'น่าจะเหมาะ ถ้า',
    whoFitY1: 'คุณบอกได้ว่าอยากให้ธุรกิจไปถึงอะไรในปีหน้า',
    whoFitY2: 'มีมากกว่าหนึ่งคนที่ดูแลลูกค้าหรืองาน',
    whoFitY3: 'ข้อความสอบถามเข้ามามากกว่าหนึ่งช่องทาง',
    whoFitY4: 'คุณยินดีให้เราเห็นว่างานเป็นอย่างไรจริงๆ ไม่ใช่แค่ว่าควรเป็นอย่างไร',
    whoNotYetHeading: 'อาจยังไม่ถึงเวลา ถ้า',
    whoFitN1: 'คุณอยากติดตั้งซอฟต์แวร์ก่อนที่จะมีใครดูว่างานเดินอย่างไร',
    whoFitN2: 'คุณต้องการให้สัญญาผลลัพธ์ไว้ล่วงหน้า หรือจำนวนลูกค้าใหม่ที่แน่นอน',
    whoFitN3: 'คุณไม่อยากเปลี่ยนวิธีการตัดสินใจ',
    whoWebHeading: 'ต้องการแค่เว็บไซต์?',
    whoWebBody: 'ถ้าคุณมีโจทย์ที่ชัดเจนสำหรับเว็บไซต์ใหม่หรือการปรับปรุงเว็บไซต์เดิม คุยกับเราเรื่องนั้นอย่างเดียวได้เลย',
    whoWebLink: 'เว็บไซต์ใหม่และการปรับปรุงเว็บไซต์',
    expatHeading: 'ถ้าคุณดูแลธุรกิจในไทยจากต่างประเทศ หรือเป็นเจ้าของชาวต่างชาติ',
    expatLead: 'เจ้าของชาวต่างชาติบางคนยังเล่าถึงเรื่องเหล่านี้:',

    abMetaDescription:
        'High Level Thai เป็นบริษัทที่จดทะเบียนในประเทศไทย ช่วยธุรกิจที่เจ้าของบริหารเองไปถึงเป้าหมายที่ตั้งไว้ โดยดูว่าการตลาด คน และระบบทำงานร่วมกันอย่างไร วิธีการทำงานของเรา และตัวอย่างสิ่งที่คุณจะได้รับ',
    abHeroHeadline: 'บริษัทไทยที่เริ่มจากเป้าหมายของคุณ',
    abHeroLead: 'High Level Thai ช่วยธุรกิจที่เจ้าของบริหารเองในประเทศไทยไปถึงเป้าหมายที่ตั้งไว้ โดยดูว่าการตลาด คน และระบบทำงานร่วมกันอย่างไร',
    abHeroLead2:
        'เราเริ่มจากการทำความเข้าใจธุรกิจ จากนั้นตกลงว่าเรื่องไหนควรได้รับความสนใจก่อน และเขียนแผนที่ทีมของคุณลงมือทำได้ ซอฟต์แวร์ ระบบอัตโนมัติ หรือ AI จะเข้ามาก็ต่อเมื่อช่วยแผนนั้นได้',
    abHeroLead3: 'เป้าหมายของคุณมาก่อน เครื่องมือตามมา',
    abHowHeading: 'วิธีการทำงานของเรา ที่คุณตรวจสอบได้',
    abHow1: 'เราเริ่มจากเป้าหมายของคุณ ในคำพูดของคุณเอง',
    abHow2: 'ก่อนพบกัน เราศึกษาธุรกิจจากภายนอก ทั้งเว็บไซต์ รายชื่อออนไลน์ รีวิว และเส้นทางที่ข้อความสอบถามมาถึงคุณ',
    abHow3: 'ทุกข้อค้นพบระบุไว้ว่า "เราตรวจสอบแล้ว" หรือ "เรายังต้องตรวจสอบ"',
    abHow4: 'แผนบอกว่าขั้นตอนไหนทีมของคุณทำเองได้ และตรงไหนที่ความช่วยเหลือจากภายนอกจะคุ้มค่า',
    abHow5: 'เราสร้างในบัญชีของคุณในทุกกรณีที่ทำได้ โดเมน เนื้อหา รหัสเข้าใช้งาน และข้อมูล ยังอยู่กับธุรกิจของคุณ',
    abHow6: 'ค่าใช้จ่ายของบุคคลภายนอกแจ้งให้ทราบก่อนคุณตกลง และงานเพิ่มเติมตกลงขอบเขตและราคาแยกต่างหาก',
    abSampleHeading: 'ตัวอย่างสิ่งที่คุณจะได้รับ',
    abSampleLead: 'สร้างจากคลินิกสมมติ เพื่อให้แสดงต่อสาธารณะได้',

    blindSeoTitle: 'เช็กจุดบอดธุรกิจด้วยตัวเอง | High Level Thai',
    blindMetaDescription: 'เช็กตัวเองฟรี 2 นาที มองธุรกิจของคุณจากภายนอก และสังเกตว่าลูกค้าอาจค้นหา เข้าใจ ไว้ใจ หรือติดต่อคุณได้ยากตรงไหน',
    blindIntro3: 'การเช็กตัวเองฟรีนี้ช่วยให้คุณมองธุรกิจในมุมของคนแปลกหน้า ไม่มีคะแนน เป็นเรื่องของคุณเอง',
    blindQuickTestHeading: 'เช็กตัวเอง 2 นาที',
    blindInstruction: 'จดทุกจุดที่คุณลังเล แก้จุดที่ใหญ่ที่สุดก่อน แล้วลองเช็กอีกครั้ง',
    blindSendHeading: 'อยากได้อีกมุมมองหนึ่งไหม',
    blindSendBody: 'ถ้าต้องการ ส่งจุดเดียวที่คุณลังเลมาให้เราทาง LINE หรือ WhatsApp แล้วเราจะบอกว่าเราจะดูอะไรก่อน ไม่มีแบบฟอร์ม และไม่ต้องสมัครอะไร',
    blindCaseHeading: 'เราลองเช็กกับตัวเองก่อน',
    blindCaseBody:
        'ก่อนจะชวนธุรกิจอื่นมาลอง เราเช็กแบบเดียวกันกับ High Level Thai ก่อน ผลที่ได้ชี้ให้เห็นสิ่งที่ต้องปรับ รวมถึงการค้นหาเราในพื้นที่ และการอธิบายให้ชัดว่าเราทำอะไร',

    odIllTag: 'ภาพตัวอย่าง · ตัวอย่างสมมติ',
    odIllHeading: 'การตัดสินใจเรื่องประจำ และเรื่องที่ควรเป็นของคุณ',
    odRoutineLabel: 'เรื่องประจำ: ทีมตัดสินใจเอง',
    odRoutineBody: 'ลูกค้าประจำขอเลื่อนนัดไปสัปดาห์หน้า พนักงานต้อนรับดูตารางแล้วเลื่อนให้ ภายในกติกาที่คุณตั้งไว้',
    odOwnerLabel: 'เรื่องของคุณ: มาถึงคุณ',
    odOwnerBody: 'โรงแรมที่ซื้อจากคุณทุกเดือนขอราคาที่ต่ำลงสำหรับการสั่งทั้งปี เรื่องนี้มาถึงคุณ พร้อมประวัติการสั่งซื้อและกำไรให้ดูอยู่แล้ว',
    odGoalHeading: 'อยากให้ธุรกิจดูแลได้มากขึ้นโดยไม่ต้องพึ่งคุณ?',
    odGoalBody: 'บอกเราว่าการตัดสินใจเรื่องไหนที่คุณอยากให้หลุดจากโต๊ะของคุณ ใน 20 นาที เราจะบอกตรงๆ ว่าคุ้มที่จะดูให้ละเอียดขึ้นหรือไม่',

    huahinCommonLine:
        'ไม่ว่าจะเป็นธุรกิจประเภทไหน สิ่งที่สำคัญคือเป้าหมายของคุณ: ลูกค้าที่ใช่มากขึ้น เส้นทางลูกค้าที่ราบรื่นขึ้น หรือธุรกิจที่เดินได้ดีแม้คุณไม่อยู่ งานเว็บไซต์แบบเรียบง่ายก็ยินดีเช่นกัน',
    hhJourneyTag: 'ภาพตัวอย่าง · ธุรกิจสมมติ',
    hhJourneyHeading: 'ข้อความสอบถามช่วงสุดสัปดาห์หนึ่งเรื่องในหัวหิน',
    hhJourneyLead: 'พูลวิลล่าสมมติ เพื่อแสดงสิ่งที่เรามักดู ไม่ใช่ลูกค้า',
    hhStep1Name: 'หาเจอ',
    hhStep1Body: 'ครอบครัวหนึ่งวางแผนเที่ยวสุดสัปดาห์ ค้นใน Google Maps แล้วเจอวิลล่า รูปสวย แต่ไม่มีราคาและวันว่าง',
    hhStep2Name: 'สอบถาม',
    hhStep2Body: 'เย็นวันศุกร์ พวกเขาส่งข้อความ LINE ถามว่าวันเสาร์ว่างไหม',
    hhStep3Name: 'รอ',
    hhStep3Body: 'เจ้าของกำลังขับรถกลับจากกรุงเทพฯ และไม่มีใครดูบัญชี LINE นั้นในวันหยุด',
    hhStep4Name: 'หายไป',
    hhStep4Body: 'พอถึงเช้าวันอาทิตย์ พวกเขาจองที่อื่นที่ตอบกลับไปแล้ว',
    hhChangeLabel: 'สิ่งที่อาจเปลี่ยนไป',
    hhChangeBody: 'ราคาและวันว่างบนเว็บไซต์ รายการเดียวสำหรับข้อความ LINE และ Facebook และคนหนึ่งคนที่ได้รับมอบหมายให้ตอบภายในเวลาที่ตกลงไว้ในวันหยุด',
    hhNoticeLabel: 'สิ่งที่คุณจะสังเกตเห็น',
    hhNoticeBody: 'ข้อความช่วงสุดสัปดาห์ได้รับคำตอบก่อนที่แขกจะไปที่อื่น',

    footerBrandLine: 'High Level Thai ช่วยธุรกิจที่เจ้าของบริหารเองในประเทศไทยไปถึงเป้าหมายที่ตั้งไว้ โดยดูว่าการตลาด คน และระบบทำงานร่วมกันอย่างไร',
    homeBlindCtaLabel: 'ลองเช็กตัวเองฟรี 2 นาที',
    odBlindLink: 'ลองเช็กตัวเองฟรี 2 นาที',
    exArtefactsLead: 'คลินิกในส่วนนี้เป็นตัวอย่างในหัวหินที่สร้างขึ้นสำหรับหน้านี้ ไม่มีส่วนไหนมาจากลูกค้า และไม่มีส่วนไหนแสดงผลลัพธ์ที่เราทำได้',
    blindDeeperBody:
        'การเช็กนี้ดูว่าลูกค้าหาคุณเจอและติดต่อคุณได้อย่างไร ส่วน Business Read ดูภาพรวมทั้งหมด: คุณอยากให้ธุรกิจไปถึงอะไร และการตลาด คน และระบบช่วยหรือขวางทางอยู่ตรงไหน แล้วจบด้วยเรื่องสำคัญหนึ่งเรื่องที่ตกลงกันและแผนที่ทำได้จริง',
};
