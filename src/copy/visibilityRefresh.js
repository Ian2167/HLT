// visibilityRefresh.js — the HLT website visibility and mobile UX refresh, 30 September 2026.
//
// SOURCE. Bridge row 4007 ("HLT website visibility and mobile UX refresh", ChatGPT's spec,
// requested by Ian), and the FULLER version of the same spec that Ian pasted into the build
// session at 13:0x Bangkok on 30 September 2026 with the words "you build based on the following".
// Where the two differ, the pasted version is the later word and wins. The brief that commissioned
// the build is C:\Projects\IWT\02-builds\executive-assistant\work\briefs\
// 2026-09-30-site-dashboard-hlt-website-visibility-refresh.md.
//
// ONE MODULE, SPREAD LAST. Same pattern as src/copy/newDirection.js: this object is spread LAST in
// the `en` block of src/translations.js and `visibilityRefreshTh` LAST in the `th` block, so every
// key here wins over the 18 and 27 September modules it shares a name with. Nothing older is edited
// or deleted; a key that stops rendering stays where it was.
//
// WHAT THIS MODULE DELIBERATELY DOES NOT CARRY.
//   - Founder profiles for the About page (spec section 26). Ian's 18 September ruling ("no founder
//     paragraph, named or unnamed") and his 27 September hard rule (no name, face, bio or career
//     line on anything HLT publishes until his visa is resolved) stand. The About page gains the
//     spec's H1 and body, which hold no personal claim, and nothing else. Listed in the report.
//   - Any price. The Business Read prices (THB 15,000 / 22,500 / 37,500, Ian's ruling of
//     14 September) stay in src/copy/businessReadRebuild.js and render unchanged on that page.
//   - Any address. The location line is "Working with businesses in Hua Hin and across Thailand".
//
// HOUSE STYLE APPLIED TO THE SPEC'S ENGLISH, and every change listed in the report: contractions
// (the spec wrote "do not", "cannot", "we will"); the word the house never uses replaced twice
// ("somebody specific" became "one particular person"; "specific conditions" became "clear
// conditions"); UK spelling checked. Nothing else in the spec's wording was touched.
//
// THAI. Every value in visibilityRefreshTh is an UNREVIEWED MACHINE DRAFT, written by the model
// under Ian's Route 2 exception of 15 September 2026 (HLT_GOVERNING_CONTEXT.md line 77): a native
// Thai speaker reviews every line before it is final. Ann's review sheet is issued with the report.
// The hero headline's Thai is flagged for IAN'S OWN WORDS, as the 18 September sheet flagged its
// predecessor. "Business Read" stays in English inside Thai copy, as the 18 September draft set.
export const visibilityRefreshCopy = {
    // ---------------------------------------------------------------- header and navigation
    // Desktop, per the spec: How it works | Business Read | Blindspots | Owner Dependency | About,
    // then EN | ไทย and the one primary call to action. The rest reach the mobile menu and footer.
    homeNavHome: 'Home',
    hiwNavLink: 'How it works',
    brNavLink: 'Business Read',
    blindNavLink: 'Blindspots',
    odNavLink: 'Owner Dependency',
    aboutNavLink: 'About',
    huaHinNavLink: 'Hua Hin',
    exNavLink: 'Examples',
    contactNavLink: 'Contact',
    navCtaLabel: 'Start with the Business Read',
    navTalkLabel: 'Talk to us',
    langLabelEn: 'EN',
    langLabelTh: 'ไทย',

    // ---------------------------------------------------------------- footer, five blocks
    footerBrandLine:
        'High Level Thai helps owner-led businesses find blindspots, reduce unnecessary dependency on key people and build systems around the way the business actually works.',
    footerQuickLinksHeading: 'Quick links',
    footerContactHeading: 'Contact',
    footerContactEmailLabel: 'Email',
    footerContactPhoneLabel: 'Phone',
    footerContactWhatsAppLabel: 'WhatsApp',
    footerContactLineLabel: 'LINE',
    footerContactLocation: 'Working with businesses in Hua Hin and across Thailand',
    footerChannelsHeading: 'Message us',
    footerWhatsAppButton: 'Chat on WhatsApp',
    footerLineButton: 'Add us on LINE',
    footerLegalHeading: 'Legal',
    footerLegalTerms: 'Terms',
    footerLegalPrivacy: 'Privacy Policy',
    footerLegalPdpa: 'PDPA / Data Handling',
    footerLegalCookies: 'Cookie Policy',
    footerCompanyName: 'High Level Thai Ltd.',

    // ---------------------------------------------------------------- home
    homeMetaTitle: 'High Level Thai | Business Systems for Owner-Led Businesses in Thailand',
    homeMetaDescription:
        'High Level Thai helps owner-led businesses in Hua Hin and across Thailand find blindspots, reduce dependency on key people and build better systems before adding more software or AI.',

    // The hero, spec section 7. The H1 is one of the three phrases Ian's spec names as recurring
    // HLT language (section 43).
    homeHeroHeadline: 'Build a business that needs you less.',
    homeHeroLead:
        'High Level Thai helps owner-led businesses in Hua Hin and across Thailand find where decisions, knowledge and work depend on key people, then build the systems that reduce that pressure.',
    homeCtaLabel: 'Start with the Business Read',
    homeSecondaryCtaLabel: 'Talk to us',
    homeHeroCtaNote: 'One conversation. No software pitch. We start by understanding how the business actually works.',

    // The problem, section 8.
    homeProblemHeading: 'From inside the business, it often looks like this',
    homeProblemLead: "Most owners don't call it owner dependency. They describe a week that sounds more like this:",
    homeSign1: 'The team can only get so far before asking you.',
    homeSign2: 'Customer enquiries arrive through LINE, Facebook, email and the website, and each one gets handled differently.',
    homeSign3: 'Work sits still until you approve it.',
    homeSign4: "Important know-how lives in someone's head rather than in the business.",
    homeSign5: "You can't see what needs attention without going to ask.",
    homeSign6: 'The same admin gets rebuilt every week.',
    homeSign7: 'Follow-up happens when somebody remembers.',
    homeConsequenceP1: 'These are rarely people problems. They usually appear when the business has grown faster than the systems underneath it.',

    // How HLT works, section 9. The second of the three recurring phrases.
    homeStagesHeading: 'Start with the business, not the software',
    homeStage1Name: 'Understand',
    homeStage1Body: 'The Business Read maps where work, decisions and knowledge are getting stuck and identifies what deserves attention first.',
    homeStage2Name: 'Diagnose',
    homeStage2Body: 'Where the issue crosses several parts of the business, we go deeper into the workflow, human dependency and system mismatch.',
    homeStage3Name: 'Improve',
    homeStage3Body: 'We build only what the diagnosis shows is needed: better visibility, decision support, knowledge capture, workflow controls or automation.',
    homeStagesLinkLabel: 'See how it works',

    // Human judgement, section 10. The third recurring phrase heads it; the three keep, transfer,
    // remove cards Ian agreed on 27 September sit beneath the copy, because they are its mechanism.
    homeHumanHeading: 'Keep the judgement. Remove the dependency.',
    homeHumanP1: 'Not everything should be automated.',
    homeHumanP2: 'Relationships, trust, body language, intuition and judgement often remain part of the business advantage.',
    homeHumanP3: "HLT separates what should stay human from what can be supported, transferred or removed from the owner's day.",

    // Blindspots, section 11.
    homeBlindHeading: "We look for what the business can't easily see itself",
    homeBlind1Name: 'Human dependency',
    homeBlind1Body: 'Where does work stop without a particular person?',
    homeBlind2Name: 'Knowledge dependency',
    homeBlind2Body: 'What would disappear if somebody left?',
    homeBlind3Name: 'Workflow blindspots',
    homeBlind3Body: 'Where does work wait, repeat or fall between people?',
    homeBlind4Name: 'System mismatch',
    homeBlind4Body: 'Where does software fail to reflect how the business actually works?',
    // Rendered under the six cards, not inside the fourth (Ian, 30 September), so it names its subject.
    homeBlind4Note:
        'System mismatch in Thailand often means LINE rather than email, bilingual names and nicknames, local geography and development names, Google Maps pins, relationship history, and CRM assumptions imported from another market.',
    homeBlind5Name: 'Customer blindspots',
    homeBlind5Body: 'Where does finding, contacting, trusting or buying become harder than the owner realises?',
    homeBlind6Name: 'Control blindspots',
    homeBlind6Body: 'Where can nobody prove that an important step actually happened?',
    homeBlindCtaLabel: 'Try the Blindspot Test',

    // Trust, section 12.
    homeTrustHeading: 'How we work',
    homeTrust1: "We don't start by selling software.",
    homeTrust2: 'We separate verified facts from assumptions.',
    homeTrust3: 'We work inside client-owned systems and accounts wherever practical.',
    homeTrust4: 'The client keeps control of its data, logins and operating knowledge.',
    homeTrust5: 'Our report states what should change first, what HLT can help with, and what the client may be better doing themselves.',
    homeTrust6: "There's no obligation to continue after the Business Read.",

    // Case study zero, section 13. Rendered because the report names what was tested and when:
    // see the visibility-refresh report, "Case zero, what we tested".
    homeCaseZeroHeading: 'We ran the test on ourselves first.',
    homeCaseZeroP1: 'Before asking Hua Hin businesses to look for their blindspots, we tested High Level Thai.',
    homeCaseZeroP2:
        "We found weak local discoverability, an English search journey that needed strengthening, gaps in proof and trust, and older positioning that no longer matched the business we're building.",
    homeCaseZeroP3: "We're fixing those issues publicly and retesting them.",
    homeCaseZeroCta: 'See the HLT Blindspot Test',

    // Closing, section 14.
    homeClosingHeading: 'Start with the point creating the most pressure.',
    homeClosingP1: 'Spend around an hour with us.',
    homeClosingP2: 'We map where the business depends on you, your key people and the systems around them, then give you a written view of what should change first.',
    homeClosingP3: "If the right answer is to leave something alone, we'll say so.",

    // ---------------------------------------------------------------- the Business Read page
    // Sections 15 to 17. The four-part method and the output list replace the 18 September page's
    // "what is happening" and "what the Business Read does" bands. Ian's "what it is not" list, the
    // ruled tiers and prices, "how it runs", the questions and the closing all stay as they were.
    brMetaTitle: 'The Business Read | High Level Thai',
    brMetaDescription:
        "A focused review of where an owner-led business depends on key people, loses visibility or uses systems that don't match how the work really happens.",
    brHeroHeadline: 'See where the business really depends on you.',
    brHeroLead: 'The Business Read is a focused review of how work, decisions, customer information and know-how move through the business.',
    brHeroLead2: 'We look for the points where progress stops, information disappears or one particular person has to step in.',
    brCtaLabel: 'Book a Business Read',
    brHeroCtaNote: 'Around 60 minutes. No preparation-heavy workshop. We start with how the business actually works.',
    // The price, the deliverable and the next step on the first screen (Ian, 30 September: "Make
    // Business Read's price, deliverable and next step clear"). The figure is the ruled Starter
    // price; the three tiers follow further down the page.
    brPriceLine: 'From THB 15,000, excluding VAT at seven per cent. A written read in three working days.',

    brMethodHeading: 'How the read works',
    brMethod1Name: 'Outside-In Blindspot Scan',
    brMethod1Body:
        'Before the conversation, we review what a new customer can actually discover. Can they find you, understand you, trust you, contact you and know what to do next?',
    brMethod1Note: "It's the test we ran on High Level Thai first.",
    brMethod1Link: 'Try the Blindspot Test',
    brMethod2Name: 'Inside-Out Business Read',
    brMethod2Body:
        'We then follow what happens after the enquiry arrives: who receives it, what decisions are needed, where information is stored, what gets handed off and where work waits.',
    brMethod3Name: 'Human Dependency',
    brMethod3Body:
        'We identify which activities genuinely need senior human judgement, which knowledge can be transferred, and which tasks should never have required the owner in the first place.',
    brMethod4Name: 'System Fit',
    brMethod4Body:
        'We check whether the CRM, communication tools and operating systems reflect how the business actually works, including local Thai realities such as LINE, bilingual names, location data and informal relationship knowledge.',

    brReceiveHeading: 'What you receive',
    brReceive1: 'The key blindspots we found',
    brReceive2: 'Where the business depends on particular people',
    brReceive3: 'What should stay human',
    brReceive4: 'What can be supported or transferred',
    brReceive5: "What can be removed from the owner's day",
    brReceive6: "Where the systems don't fit how the work really happens",
    brReceive7: 'The first priorities to fix',
    brReceive8: 'Clear next steps, with no obligation to use HLT to implement them',

    // ---------------------------------------------------------------- Hua Hin, sections 18 to 20
    huahinSeoTitle: 'Business Systems and AI Support in Hua Hin | High Level Thai',
    huahinMetaDescription:
        'High Level Thai helps Hua Hin business owners find blindspots, reduce owner dependency and build systems that fit how businesses actually operate in Thailand.',
    huahinH1: 'Business systems built around how Hua Hin businesses actually work.',
    huahinIntro1: 'Hua Hin businesses often serve Thai customers, expats, residents and visitors at the same time.',
    huahinIntro2: 'They may rely on LINE, Facebook, Google Maps, informal relationships, local area knowledge and software designed for a different market.',
    huahinIntro3: 'HLT starts by understanding that reality before recommending anything.',
    huahinWhoHeading: 'Who this is for',
    huahinWho1: 'Owner-led property businesses',
    huahinWho2: 'Hospitality and tourism businesses',
    huahinWho3: 'Retail and service companies',
    huahinWho4: 'Distribution and specialist suppliers',
    huahinWho5: 'Professional firms',
    huahinWho6: 'Expat-owned businesses operating in Thailand',
    huahinCommonLine:
        'The common condition matters more than the industry: enough complexity that the owner can no longer see or control everything personally.',
    huahinLocalHeading: "Local problems aren't always software problems.",
    huahinLocalBody:
        'A CRM can be working exactly as designed and still fail to represent the way a Thai business identifies customers, locations, relationships and decisions. We look for those mismatches before adding another tool.',
    huahinLocationLine: 'Working with businesses in Hua Hin and across Thailand.',
    huahinCta: 'Start with the Business Read',
    huahinOdLink: 'See where your business depends on you',

    // ---------------------------------------------------------------- Owner Dependency, 21 and 22
    odMetaTitle: 'Reduce Owner Dependency Without Losing Human Judgement | High Level Thai',
    odMetaDescription:
        "Find which parts of the owner's role should stay human, which can be supported, which knowledge can be transferred and which work should disappear from the owner's day.",
    odH1: "Don't replace yourself until you know which parts of the job actually need replacing.",
    odIntro1: 'An owner can be valuable to a business without needing to be involved in everything.',
    odIntro2: 'HLT separates valuable human judgement from unnecessary dependency.',
    odCta: 'See where your business depends on you',
    odClassHeading: 'How we sort what depends on you',
    odClassLead: 'Every way the business depends on you goes into one of five. This sorting is built into every Business Read.',
    od1Name: 'Preserve',
    od1Body: 'Things that remain a genuine human advantage: relationships, trust, intuition, body language, negotiation and judgement.',
    od2Name: 'Support',
    od2Body: 'The human still decides, but better information improves the decision.',
    od3Name: 'Transfer',
    od3Body: 'Knowledge and judgement patterns that can be made available to others.',
    od4Name: 'Remove',
    od4Body: "Routine tasks, information retrieval and repeated questions that shouldn't require the owner.",
    od5Name: 'Escalate',
    od5Body: 'Normal situations are handled elsewhere, with clear conditions for when senior involvement is needed.',
    odClosing: "The goal isn't to make the owner irrelevant. It's to give the owner a choice about where their time and judgement are used.",
    odBlindLink: 'Try the Blindspot Test',

    // ---------------------------------------------------------------- Business Blindspots, 23 to 25
    blindSeoTitle: 'Business Blindspot Test | High Level Thai',
    blindMetaDescription:
        'Test your business from the outside and find where customers may struggle to discover, understand, trust or contact you.',
    blindH1: 'Try becoming your own customer.',
    blindIntro1: 'Business owners know too much about their own businesses.',
    blindIntro2: 'That makes some problems almost invisible from the inside.',
    blindIntro3: 'This free test helps you look at the company as a stranger would.',
    blindQuickTestHeading: 'The 15-minute test',
    blindStep1Name: 'Find',
    blindStep1Body: 'Search for the business without using its name. Does it appear for the problem and the location?',
    blindStep2Name: 'Understand',
    blindStep2Body: 'Can a stranger tell what the business does, who it is for and why it matters?',
    blindStep3Name: 'Locate',
    blindStep3Body: 'Can they actually find the entrance or the service area?',
    blindStep4Name: 'Contact',
    blindStep4Body: 'Is it obvious whether to use phone, LINE, WhatsApp, Facebook, email or a form?',
    blindStep5Name: 'Trust',
    blindStep5Body: 'Is there enough evidence to believe the business is real, experienced and suitable?',
    blindStep6Name: 'Act',
    blindStep6Body: 'Does the customer understand what happens next?',
    blindInstruction: 'Write down every place where you hesitate. Fix the single biggest point of friction first, then run the test again.',
    blindDeeperHeading: 'If the problem is inside the business',
    blindDeeperBody:
        "If customers can reach you but work still disappears, decisions still come back to the owner or knowledge still lives in people's heads, the Business Read follows the journey inside.",
    blindCta: 'Start with the Business Read',
    blindOdLink: 'Read about owner dependency',

    // ---------------------------------------------------------------- About, section 26
    // The H1 and the three-line core copy. No profile of anybody: see the header of this file.
    abMetaTitle: 'About High Level Thai | Business Systems in Thailand',
    abHeroHeadline: 'Business systems before technology.',
    abHeroLead:
        'High Level Thai works with established owner-led businesses in Thailand to understand how the business actually operates before deciding what should change.',
    abHeroLead2: 'We focus on blindspots, human dependency, business knowledge, workflow and control.',
    abHeroLead3: 'AI is used where it helps the business work better, not because AI itself is the product.',
    abCtaLabel: 'Start with the Business Read',

    // ---------------------------------------------------------------- Contact: the other rails
    ctRailsHeading: 'Other ways to reach us',
    ctEmailLabel: 'Email',
    ctPhoneLabel: 'Phone',
    ctWhatsAppLabel: 'WhatsApp',

    // ---------------------------------------------------------------- the four legal placeholders
    // Constraint 7 of the brief: "coming soon" in plain words, no invented legal text.
    termsTitle: 'Terms',
    termsComingSoon: "This page is coming soon. High Level Thai will publish its terms here once they're ready.",
    privacyTitle: 'Privacy Policy',
    privacyComingSoon: "This page is coming soon. High Level Thai will publish its privacy policy here once it's ready.",
    pdpaTitle: 'PDPA / Data Handling',
    pdpaBody: "This page is coming soon. High Level Thai will publish its PDPA and data-handling policy here once it's ready.",
    cookiesTitle: 'Cookie Policy',
    cookiesBody: "This page is coming soon. High Level Thai will publish its cookie policy here once it's ready.",
    // One true line while the text is missing: where a question about data goes today.
    legalContactLine: 'Questions about your data in the meantime: ian@highlevelthai.com',

    // How It Works and Examples keep their pages; only their call to action label harmonises with
    // the spec's one primary CTA across the public site (section 37).
    hiwCtaLabel: 'Start with the Business Read',
    exCtaLabel: 'Start with the Business Read',
};

// UNREVIEWED MACHINE DRAFT. See the header of this file. Ann's corrections come back INTO THIS
// OBJECT, never into src/translations.js. Keys whose value is a brand name or a Latin-script label
// (LINE, WhatsApp, EN, Business Read) stay as they are by design.
export const visibilityRefreshTh = {
    homeNavHome: 'หน้าแรก',
    hiwNavLink: 'วิธีการทำงาน',
    brNavLink: 'Business Read',
    blindNavLink: 'จุดบอดธุรกิจ',
    odNavLink: 'การพึ่งพาเจ้าของ',
    aboutNavLink: 'เกี่ยวกับเรา',
    huaHinNavLink: 'หัวหิน',
    exNavLink: 'ตัวอย่าง',
    contactNavLink: 'ติดต่อเรา',
    navCtaLabel: 'เริ่มต้นด้วย Business Read',
    navTalkLabel: 'คุยกับเรา',
    langLabelEn: 'EN',
    langLabelTh: 'ไทย',

    footerBrandLine:
        'High Level Thai ช่วยธุรกิจที่เจ้าของบริหารเองค้นหาจุดบอด ลดการพึ่งพาคนสำคัญที่ไม่จำเป็น และสร้างระบบให้เข้ากับวิธีที่ธุรกิจทำงานจริง',
    footerQuickLinksHeading: 'ลิงก์ด่วน',
    footerContactHeading: 'ติดต่อ',
    footerContactEmailLabel: 'อีเมล',
    footerContactPhoneLabel: 'โทรศัพท์',
    footerContactWhatsAppLabel: 'WhatsApp',
    footerContactLineLabel: 'LINE',
    footerContactLocation: 'ให้บริการธุรกิจในหัวหินและทั่วประเทศไทย',
    footerChannelsHeading: 'ส่งข้อความหาเรา',
    footerWhatsAppButton: 'แชตทาง WhatsApp',
    footerLineButton: 'เพิ่มเพื่อนทาง LINE',
    footerLegalHeading: 'ข้อกฎหมาย',
    footerLegalTerms: 'ข้อกำหนดการใช้งาน',
    footerLegalPrivacy: 'นโยบายความเป็นส่วนตัว',
    footerLegalPdpa: 'PDPA / การจัดการข้อมูล',
    footerLegalCookies: 'นโยบายคุกกี้',
    footerCompanyName: 'บริษัท ไฮ เลเวล ไทย จำกัด',

    homeMetaTitle: 'High Level Thai | ระบบธุรกิจสำหรับธุรกิจที่เจ้าของบริหารเองในประเทศไทย',
    homeMetaDescription:
        'High Level Thai ช่วยธุรกิจที่เจ้าของบริหารเองในหัวหินและทั่วประเทศไทยค้นหาจุดบอด ลดการพึ่งพาคนสำคัญ และสร้างระบบที่ดีขึ้นก่อนเพิ่มซอฟต์แวร์หรือ AI',

    // FLAGGED FOR IAN'S OWN WORDS, not Ann's: the hero headline. A draft stands until he gives his.
    homeHeroHeadline: 'สร้างธุรกิจที่ต้องพึ่งคุณน้อยลง',
    homeHeroLead:
        'High Level Thai ช่วยธุรกิจที่เจ้าของบริหารเองในหัวหินและทั่วประเทศไทย ค้นหาว่าการตัดสินใจ ความรู้ และงานส่วนไหนพึ่งพาคนสำคัญอยู่ แล้วสร้างระบบที่ช่วยลดแรงกดดันนั้น',
    homeCtaLabel: 'เริ่มต้นด้วย Business Read',
    homeSecondaryCtaLabel: 'คุยกับเรา',
    homeHeroCtaNote: 'คุยกันหนึ่งครั้ง ไม่มีการขายซอฟต์แวร์ เราเริ่มจากการทำความเข้าใจว่าธุรกิจของคุณทำงานจริงอย่างไร',

    homeProblemHeading: 'มองจากข้างในธุรกิจ มักเป็นแบบนี้',
    homeProblemLead: 'เจ้าของส่วนใหญ่ไม่ได้เรียกมันว่าการพึ่งพาเจ้าของ แต่จะเล่าถึงสัปดาห์ที่เป็นแบบนี้:',
    homeSign1: 'ทีมทำงานไปได้ระดับหนึ่ง แล้วต้องกลับมาถามคุณ',
    homeSign2: 'ลูกค้าติดต่อเข้ามาทาง LINE, Facebook, อีเมล และเว็บไซต์ และแต่ละช่องทางถูกจัดการคนละแบบ',
    homeSign3: 'งานหยุดรออยู่จนกว่าคุณจะอนุมัติ',
    homeSign4: 'ความรู้สำคัญอยู่ในหัวของใครบางคน ไม่ได้อยู่ในธุรกิจ',
    homeSign5: 'คุณมองไม่เห็นว่าอะไรต้องดูแล จนกว่าจะเดินไปถามเอง',
    homeSign6: 'งานเอกสารเดิมถูกทำใหม่ทุกสัปดาห์',
    homeSign7: 'การติดตามลูกค้าเกิดขึ้นเมื่อมีใครนึกได้',
    homeConsequenceP1: 'เรื่องเหล่านี้แทบไม่ใช่ปัญหาเรื่องคน มันมักเกิดขึ้นเมื่อธุรกิจโตเร็วกว่าระบบที่รองรับอยู่ข้างใต้',

    homeStagesHeading: 'เริ่มจากธุรกิจ ไม่ใช่ซอฟต์แวร์',
    homeStage1Name: 'ทำความเข้าใจ',
    homeStage1Body: 'Business Read จะระบุว่างาน การตัดสินใจ และความรู้ติดขัดอยู่ตรงไหน และอะไรควรได้รับความสนใจก่อน',
    homeStage2Name: 'วินิจฉัย',
    homeStage2Body: 'เมื่อปัญหาข้ามหลายส่วนของธุรกิจ เราจะลงลึกในขั้นตอนงาน การพึ่งพาคน และความไม่เข้ากันของระบบ',
    homeStage3Name: 'ปรับปรุง',
    homeStage3Body: 'เราสร้างเฉพาะสิ่งที่ผลวินิจฉัยบอกว่าจำเป็น: การมองเห็นภาพรวมที่ดีขึ้น การสนับสนุนการตัดสินใจ การเก็บความรู้ การควบคุมขั้นตอนงาน หรือระบบอัตโนมัติ',
    homeStagesLinkLabel: 'ดูวิธีการทำงาน',

    homeHumanHeading: 'เก็บดุลยพินิจไว้ ตัดการพึ่งพาออก',
    homeHumanP1: 'ไม่ใช่ทุกอย่างที่ควรทำให้เป็นอัตโนมัติ',
    homeHumanP2: 'ความสัมพันธ์ ความไว้ใจ ภาษากาย สัญชาตญาณ และดุลยพินิจ มักยังเป็นส่วนหนึ่งของความได้เปรียบทางธุรกิจ',
    homeHumanP3: 'HLT แยกให้ชัดว่าอะไรควรอยู่กับคน และอะไรที่สนับสนุน ส่งต่อ หรือตัดออกจากวันทำงานของเจ้าของได้',

    homeBlindHeading: 'เรามองหาสิ่งที่ธุรกิจมองไม่เห็นได้ง่ายด้วยตัวเอง',
    homeBlind1Name: 'การพึ่งพาคน',
    homeBlind1Body: 'งานหยุดตรงไหนเมื่อไม่มีคนคนหนึ่ง',
    homeBlind2Name: 'การพึ่งพาความรู้',
    homeBlind2Body: 'อะไรจะหายไปถ้ามีใครลาออก',
    homeBlind3Name: 'จุดบอดในขั้นตอนงาน',
    homeBlind3Body: 'งานรอ ทำซ้ำ หรือตกหล่นระหว่างคนตรงไหน',
    homeBlind4Name: 'ระบบไม่เข้ากับงานจริง',
    homeBlind4Body: 'ซอฟต์แวร์ไม่สะท้อนวิธีที่ธุรกิจทำงานจริงตรงไหน',
    homeBlind4Note:
        'ระบบไม่เข้ากับงานจริงในประเทศไทยมักหมายถึง LINE แทนอีเมล ชื่อสองภาษาและชื่อเล่น ภูมิศาสตร์ท้องถิ่นและชื่อโครงการ หมุดใน Google Maps ประวัติความสัมพันธ์ และสมมติฐานของ CRM ที่นำเข้ามาจากตลาดอื่น',
    homeBlind5Name: 'จุดบอดด้านลูกค้า',
    homeBlind5Body: 'การค้นหา ติดต่อ ไว้ใจ หรือซื้อ ยากกว่าที่เจ้าของคิดตรงไหน',
    homeBlind6Name: 'จุดบอดด้านการควบคุม',
    homeBlind6Body: 'ตรงไหนที่ไม่มีใครพิสูจน์ได้ว่าขั้นตอนสำคัญเกิดขึ้นจริง',
    homeBlindCtaLabel: 'ลองทำแบบทดสอบจุดบอด',

    homeTrustHeading: 'วิธีการทำงานของเรา',
    homeTrust1: 'เราไม่เริ่มด้วยการขายซอฟต์แวร์',
    homeTrust2: 'เราแยกข้อเท็จจริงที่ตรวจสอบแล้วออกจากข้อสันนิษฐาน',
    homeTrust3: 'เราทำงานในระบบและบัญชีของลูกค้าเองทุกครั้งที่ทำได้',
    homeTrust4: 'ลูกค้าเป็นผู้ควบคุมข้อมูล การเข้าสู่ระบบ และความรู้ในการดำเนินงานของตัวเอง',
    homeTrust5: 'รายงานของเราระบุว่าอะไรควรเปลี่ยนก่อน อะไรที่ HLT ช่วยได้ และอะไรที่ลูกค้าอาจทำเองได้ดีกว่า',
    homeTrust6: 'ไม่มีข้อผูกมัดใดๆ หลังจาก Business Read',

    homeCaseZeroHeading: 'เราทดสอบตัวเองก่อน',
    homeCaseZeroP1: 'ก่อนจะชวนธุรกิจในหัวหินมองหาจุดบอดของตัวเอง เราทดสอบ High Level Thai ก่อน',
    homeCaseZeroP2:
        'เราพบว่าการค้นพบในพื้นที่ยังอ่อน เส้นทางการค้นหาภาษาอังกฤษต้องแข็งแรงขึ้น หลักฐานและความน่าเชื่อถือยังมีช่องว่าง และการวางตำแหน่งแบบเดิมไม่ตรงกับธุรกิจที่เรากำลังสร้างอีกต่อไป',
    homeCaseZeroP3: 'เรากำลังแก้ไขเรื่องเหล่านี้อย่างเปิดเผย และจะทดสอบซ้ำ',
    homeCaseZeroCta: 'ดูแบบทดสอบจุดบอดของ HLT',

    homeClosingHeading: 'เริ่มจากจุดที่สร้างแรงกดดันมากที่สุด',
    homeClosingP1: 'ใช้เวลากับเราประมาณหนึ่งชั่วโมง',
    homeClosingP2: 'เราจะระบุว่าธุรกิจพึ่งพาคุณ คนสำคัญของคุณ และระบบรอบตัวพวกเขาตรงไหน แล้วเขียนให้คุณเห็นว่าอะไรควรเปลี่ยนก่อน',
    homeClosingP3: 'ถ้าคำตอบที่ถูกต้องคือปล่อยบางอย่างไว้อย่างเดิม เราจะบอกคุณตรงๆ',

    brMetaTitle: 'The Business Read | High Level Thai',
    brMetaDescription:
        'การทบทวนอย่างตรงจุดว่าธุรกิจที่เจ้าของบริหารเองพึ่งพาคนสำคัญตรงไหน ขาดการมองเห็นภาพรวมตรงไหน หรือใช้ระบบที่ไม่ตรงกับวิธีที่งานเกิดขึ้นจริงตรงไหน',
    brHeroHeadline: 'ดูว่าธุรกิจพึ่งพาคุณตรงไหนจริงๆ',
    brHeroLead: 'Business Read คือการทบทวนอย่างตรงจุดว่างาน การตัดสินใจ ข้อมูลลูกค้า และความรู้ในการทำงาน ไหลผ่านธุรกิจอย่างไร',
    brHeroLead2: 'เรามองหาจุดที่ความคืบหน้าหยุดลง ข้อมูลหายไป หรือต้องมีคนคนหนึ่งเข้ามาจัดการเสมอ',
    brCtaLabel: 'จอง Business Read',
    brHeroCtaNote: 'ประมาณ 60 นาที ไม่ต้องเตรียมเวิร์กช็อปหนักๆ เราเริ่มจากวิธีที่ธุรกิจทำงานจริง',
    brPriceLine: 'เริ่มต้นที่ 15,000 บาท ไม่รวมภาษีมูลค่าเพิ่ม 7% รายงานฉบับเขียนภายใน 3 วันทำการ',

    brMethodHeading: 'Business Read ทำงานอย่างไร',
    brMethod1Name: 'สแกนจุดบอดจากมุมมองภายนอก',
    brMethod1Body:
        'ก่อนการพูดคุย เราทบทวนว่าลูกค้าใหม่ค้นพบอะไรได้จริงบ้าง เขาหาคุณเจอไหม เข้าใจคุณไหม ไว้ใจคุณไหม ติดต่อคุณได้ไหม และรู้ไหมว่าต้องทำอะไรต่อ',
    brMethod1Note: 'นี่คือแบบทดสอบที่เราใช้กับ High Level Thai ก่อน',
    brMethod1Link: 'ลองทำแบบทดสอบจุดบอด',
    brMethod2Name: 'อ่านธุรกิจจากข้างใน',
    brMethod2Body:
        'จากนั้นเราตามดูว่าเกิดอะไรขึ้นหลังจากมีลูกค้าติดต่อเข้ามา: ใครรับเรื่อง ต้องตัดสินใจอะไรบ้าง ข้อมูลเก็บไว้ที่ไหน ส่งต่ออะไร และงานรออยู่ตรงไหน',
    brMethod3Name: 'การพึ่งพาคน',
    brMethod3Body:
        'เราระบุว่ากิจกรรมไหนต้องใช้ดุลยพินิจของผู้บริหารจริงๆ ความรู้ไหนส่งต่อได้ และงานไหนที่ไม่ควรต้องผ่านเจ้าของตั้งแต่แรก',
    brMethod4Name: 'ความเข้ากันของระบบ',
    brMethod4Body:
        'เราตรวจว่า CRM เครื่องมือสื่อสาร และระบบปฏิบัติงานสะท้อนวิธีที่ธุรกิจทำงานจริงหรือไม่ รวมถึงบริบทไทยอย่าง LINE ชื่อสองภาษา ข้อมูลตำแหน่งที่ตั้ง และความรู้เรื่องความสัมพันธ์แบบไม่เป็นทางการ',

    brReceiveHeading: 'สิ่งที่คุณจะได้รับ',
    brReceive1: 'จุดบอดสำคัญที่เราพบ',
    brReceive2: 'ธุรกิจพึ่งพาคนคนไหนตรงไหน',
    brReceive3: 'อะไรควรอยู่กับคน',
    brReceive4: 'อะไรสนับสนุนหรือส่งต่อได้',
    brReceive5: 'อะไรตัดออกจากวันทำงานของเจ้าของได้',
    brReceive6: 'ระบบไม่ตรงกับงานจริงตรงไหน',
    brReceive7: 'สิ่งที่ควรแก้ก่อนเป็นอันดับแรก',
    brReceive8: 'ขั้นตอนต่อไปที่ชัดเจน โดยไม่มีข้อผูกมัดว่าต้องใช้ HLT ลงมือทำ',

    huahinSeoTitle: 'ระบบธุรกิจและการสนับสนุนด้วย AI ในหัวหิน | High Level Thai',
    huahinMetaDescription:
        'High Level Thai ช่วยเจ้าของธุรกิจในหัวหินค้นหาจุดบอด ลดการพึ่งพาเจ้าของ และสร้างระบบที่เข้ากับวิธีที่ธุรกิจดำเนินงานจริงในประเทศไทย',
    huahinH1: 'ระบบธุรกิจที่สร้างขึ้นตามวิธีที่ธุรกิจในหัวหินทำงานจริง',
    huahinIntro1: 'ธุรกิจในหัวหินมักให้บริการลูกค้าไทย ชาวต่างชาติ ผู้พักอาศัย และนักท่องเที่ยวไปพร้อมกัน',
    huahinIntro2: 'หลายธุรกิจพึ่งพา LINE, Facebook, Google Maps ความสัมพันธ์แบบไม่เป็นทางการ ความรู้เรื่องพื้นที่ และซอฟต์แวร์ที่ออกแบบมาสำหรับตลาดอื่น',
    huahinIntro3: 'HLT เริ่มจากการทำความเข้าใจความจริงข้อนี้ ก่อนจะแนะนำอะไรทั้งนั้น',
    huahinWhoHeading: 'เหมาะกับใคร',
    huahinWho1: 'ธุรกิจอสังหาริมทรัพย์ที่เจ้าของบริหารเอง',
    huahinWho2: 'ธุรกิจโรงแรมและการท่องเที่ยว',
    huahinWho3: 'ธุรกิจค้าปลีกและบริการ',
    huahinWho4: 'ธุรกิจจัดจำหน่ายและซัพพลายเออร์เฉพาะทาง',
    huahinWho5: 'สำนักงานวิชาชีพ',
    huahinWho6: 'ธุรกิจที่ชาวต่างชาติเป็นเจ้าของและดำเนินงานในประเทศไทย',
    huahinCommonLine:
        'สิ่งที่สำคัญกว่าประเภทธุรกิจคือสภาพร่วมกัน: ธุรกิจซับซ้อนพอที่เจ้าของไม่สามารถมองเห็นหรือควบคุมทุกอย่างด้วยตัวเองได้อีกต่อไป',
    huahinLocalHeading: 'ปัญหาในพื้นที่ไม่ใช่ปัญหาซอฟต์แวร์เสมอไป',
    huahinLocalBody:
        'CRM อาจทำงานตรงตามที่ออกแบบไว้ทุกอย่าง แต่ก็ยังไม่สะท้อนวิธีที่ธุรกิจไทยระบุลูกค้า สถานที่ ความสัมพันธ์ และการตัดสินใจ เรามองหาความไม่สอดคล้องเหล่านั้นก่อนจะเพิ่มเครื่องมืออีกชิ้น',
    huahinLocationLine: 'ให้บริการธุรกิจในหัวหินและทั่วประเทศไทย',
    huahinCta: 'เริ่มต้นด้วย Business Read',
    huahinOdLink: 'ดูว่าธุรกิจของคุณพึ่งพาคุณตรงไหน',

    odMetaTitle: 'ลดการพึ่งพาเจ้าของโดยไม่เสียดุลยพินิจของคน | High Level Thai',
    odMetaDescription:
        'ค้นหาว่าบทบาทของเจ้าของส่วนไหนควรอยู่กับคน ส่วนไหนสนับสนุนได้ ความรู้ส่วนไหนส่งต่อได้ และงานส่วนไหนควรหายไปจากวันทำงานของเจ้าของ',
    odH1: 'อย่าเพิ่งหาคนมาแทนตัวเอง จนกว่าจะรู้ว่างานส่วนไหนต้องการคนแทนจริงๆ',
    odIntro1: 'เจ้าของสามารถมีคุณค่าต่อธุรกิจได้ โดยไม่ต้องเข้าไปเกี่ยวข้องกับทุกเรื่อง',
    odIntro2: 'HLT แยกดุลยพินิจของคนที่มีคุณค่า ออกจากการพึ่งพาที่ไม่จำเป็น',
    odCta: 'ดูว่าธุรกิจของคุณพึ่งพาคุณตรงไหน',
    odClassHeading: 'เราแยกสิ่งที่พึ่งพาคุณอย่างไร',
    odClassLead: 'ทุกเรื่องที่ธุรกิจพึ่งพาคุณจะถูกจัดเข้าหนึ่งในห้ากลุ่ม การจัดกลุ่มนี้อยู่ใน Business Read ทุกครั้ง',
    od1Name: 'เก็บไว้',
    od1Body: 'สิ่งที่ยังเป็นความได้เปรียบของคนอย่างแท้จริง: ความสัมพันธ์ ความไว้ใจ สัญชาตญาณ ภาษากาย การต่อรอง และดุลยพินิจ',
    od2Name: 'สนับสนุน',
    od2Body: 'คนยังเป็นผู้ตัดสินใจ แต่ข้อมูลที่ดีขึ้นช่วยให้ตัดสินใจได้ดีขึ้น',
    od3Name: 'ส่งต่อ',
    od3Body: 'ความรู้และแบบแผนการตัดสินใจที่ทำให้คนอื่นเข้าถึงได้',
    od4Name: 'ตัดออก',
    od4Body: 'งานประจำ การค้นหาข้อมูล และคำถามซ้ำๆ ที่ไม่ควรต้องผ่านเจ้าของ',
    od5Name: 'ส่งขึ้นเมื่อจำเป็น',
    od5Body: 'สถานการณ์ปกติจัดการที่อื่น โดยมีเงื่อนไขชัดเจนว่าเมื่อไหร่ต้องให้ผู้บริหารเข้ามา',
    odClosing: 'เป้าหมายไม่ใช่การทำให้เจ้าของไม่จำเป็น แต่คือการให้เจ้าของเลือกได้ว่าจะใช้เวลาและดุลยพินิจของตัวเองไปกับเรื่องไหน',
    odBlindLink: 'ลองทำแบบทดสอบจุดบอด',

    blindSeoTitle: 'แบบทดสอบจุดบอดธุรกิจ | High Level Thai',
    blindMetaDescription: 'ทดสอบธุรกิจของคุณจากมุมมองภายนอก และค้นหาว่าลูกค้าอาจค้นหา เข้าใจ ไว้ใจ หรือติดต่อคุณได้ยากตรงไหน',
    blindH1: 'ลองเป็นลูกค้าของตัวเอง',
    blindIntro1: 'เจ้าของธุรกิจรู้จักธุรกิจของตัวเองมากเกินไป',
    blindIntro2: 'นั่นทำให้บางปัญหาแทบมองไม่เห็นจากข้างใน',
    blindIntro3: 'แบบทดสอบฟรีนี้ช่วยให้คุณมองบริษัทในมุมของคนแปลกหน้า',
    blindQuickTestHeading: 'แบบทดสอบ 15 นาที',
    blindStep1Name: 'ค้นหา',
    blindStep1Body: 'ลองค้นหาธุรกิจโดยไม่ใช้ชื่อธุรกิจ ธุรกิจปรากฏขึ้นมาสำหรับปัญหาและพื้นที่นั้นหรือไม่',
    blindStep2Name: 'เข้าใจ',
    blindStep2Body: 'คนแปลกหน้าบอกได้ไหมว่าธุรกิจทำอะไร เพื่อใคร และทำไมถึงสำคัญ',
    blindStep3Name: 'หาที่ตั้ง',
    blindStep3Body: 'พวกเขาหาทางเข้าหรือพื้นที่ให้บริการเจอจริงหรือไม่',
    blindStep4Name: 'ติดต่อ',
    blindStep4Body: 'ชัดเจนหรือไม่ว่าควรใช้โทรศัพท์ LINE WhatsApp Facebook อีเมล หรือแบบฟอร์ม',
    blindStep5Name: 'ไว้ใจ',
    blindStep5Body: 'มีหลักฐานเพียงพอที่จะเชื่อว่าธุรกิจนี้มีอยู่จริง มีประสบการณ์ และเหมาะสมหรือไม่',
    blindStep6Name: 'ลงมือ',
    blindStep6Body: 'ลูกค้าเข้าใจหรือไม่ว่าจะเกิดอะไรขึ้นต่อไป',
    blindInstruction: 'จดทุกจุดที่คุณลังเล แก้จุดสะดุดที่ใหญ่ที่สุดก่อน แล้วลองทดสอบอีกครั้ง',
    blindDeeperHeading: 'ถ้าปัญหาอยู่ข้างในธุรกิจ',
    blindDeeperBody:
        'ถ้าลูกค้าติดต่อคุณได้ แต่งานยังหายไป การตัดสินใจยังย้อนกลับมาที่เจ้าของ หรือความรู้ยังอยู่ในหัวของคน Business Read จะตามเส้นทางนั้นเข้าไปข้างใน',
    blindCta: 'เริ่มต้นด้วย Business Read',
    blindOdLink: 'อ่านเรื่องการพึ่งพาเจ้าของ',

    abMetaTitle: 'เกี่ยวกับ High Level Thai | ระบบธุรกิจในประเทศไทย',
    abHeroHeadline: 'ระบบธุรกิจต้องมาก่อนเทคโนโลยี',
    abHeroLead:
        'High Level Thai ทำงานกับธุรกิจที่เจ้าของบริหารเองและตั้งตัวได้แล้วในประเทศไทย เพื่อทำความเข้าใจว่าธุรกิจดำเนินงานจริงอย่างไร ก่อนตัดสินใจว่าอะไรควรเปลี่ยน',
    abHeroLead2: 'เราให้ความสำคัญกับจุดบอด การพึ่งพาคน ความรู้ของธุรกิจ ขั้นตอนงาน และการควบคุม',
    abHeroLead3: 'เราใช้ AI ในจุดที่ช่วยให้ธุรกิจทำงานได้ดีขึ้น ไม่ใช่เพราะ AI คือสินค้า',
    abCtaLabel: 'เริ่มต้นด้วย Business Read',

    ctRailsHeading: 'ช่องทางอื่นในการติดต่อเรา',
    ctEmailLabel: 'อีเมล',
    ctPhoneLabel: 'โทรศัพท์',
    ctWhatsAppLabel: 'WhatsApp',

    termsTitle: 'ข้อกำหนดการใช้งาน',
    termsComingSoon: 'หน้านี้กำลังจะมาเร็วๆ นี้ High Level Thai จะเผยแพร่ข้อกำหนดการใช้งานที่นี่เมื่อพร้อม',
    privacyTitle: 'นโยบายความเป็นส่วนตัว',
    privacyComingSoon: 'หน้านี้กำลังจะมาเร็วๆ นี้ High Level Thai จะเผยแพร่นโยบายความเป็นส่วนตัวที่นี่เมื่อพร้อม',
    pdpaTitle: 'PDPA / การจัดการข้อมูล',
    pdpaBody: 'หน้านี้กำลังจะมาเร็วๆ นี้ High Level Thai จะเผยแพร่นโยบาย PDPA และการจัดการข้อมูลที่นี่เมื่อพร้อม',
    cookiesTitle: 'นโยบายคุกกี้',
    cookiesBody: 'หน้านี้กำลังจะมาเร็วๆ นี้ High Level Thai จะเผยแพร่นโยบายคุกกี้ที่นี่เมื่อพร้อม',
    legalContactLine: 'ระหว่างนี้ หากมีคำถามเกี่ยวกับข้อมูลของคุณ ติดต่อได้ที่ ian@highlevelthai.com',

    hiwCtaLabel: 'เริ่มต้นด้วย Business Read',
    exCtaLabel: 'เริ่มต้นด้วย Business Read',
};
