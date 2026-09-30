// visibilityRefresh.js — the HLT website visibility and mobile UX refresh, 30 September 2026.
//
// SOURCE. Every English line below is lifted verbatim (or lightly assembled from verbatim
// fragments, where noted) from bridge row 4007, "HLT website visibility and mobile UX refresh"
// (ChatGPT's spec, requested by Ian, status READY_FOR_BUILD), read via
//   node C:\Projects\IWT\tools\bridge.mjs sweep site-dashboard 4006
// and from the brief that commissioned this build:
//   C:\Projects\IWT\02-builds\executive-assistant\work\briefs\
//   2026-09-30-site-dashboard-hlt-website-visibility-refresh.md
//
// WHAT THIS MODULE COVERS, AND WHY IT IS A NEW MODULE RATHER THAN AN EDIT TO AN EXISTING ONE.
// Following the estate's own pattern (see src/copy/newDirection.js): one module per dated change,
// spread LAST in both the `en` and `th` blocks of src/translations.js so it wins on any shared
// key, and nothing existing is edited in place.
//
// WHAT THIS MODULE DOES NOT COVER, AND WHY.
//   - The "case zero" block (home_copy_en.case_zero_*) is HELD. Constraint (h) of the brief: it
//     "makes claims about tests HLT ran on itself; render it only if the report can name what was
//     tested and when, otherwise hold that block and say so." No test record exists on file this
//     session, so it is not rendered. See the visibility-refresh report.
//   - The Business Read and Owner Dependency page rewrites from the spec are NOT built: the
//     brief's own DELIVERABLE list (items 1 to 8) does not name them, and NOT IN SCOPE bars
//     founder profiles and the content hub. Only what the brief names is here.
//   - The About page's alternate H1/body from the spec is NOT applied: the existing About copy
//     already satisfies "thin form, no personal claim" under Ian's 18 September ruling, and
//     swapping a ruled headline is a content call left to him, not a same-session builder choice.
//   - Legal COPY (Terms, Privacy, PDPA, Cookies) is explicitly NOT IN SCOPE beyond placeholders.
//     The two new legal routes below render "coming soon" in plain words, per constraint (7).
//
// THAI. Every th-suffixed export is an UNREVIEWED MACHINE DRAFT under the 15 September 2026 Route
// 2 exception (HLT_GOVERNING_CONTEXT.md line 77): a native Thai speaker must review every line
// before it reaches the live site. It is marked here and in the render (see HuaHin.jsx and
// BusinessBlindspots.jsx, which read the `language` context but flag the draft state in their own
// header comments) and MUST NOT be treated as final Thai copy.
export const visibilityRefreshCopy = {
    // --- Navigation: one new item, additive only. See routes.js for the conflict this resolves
    // partially and flags the rest of. ---
    blindNavLink: 'Blindspots',

    // --- Footer, five-block structure (bridge row 4007 footer_spec). ---
    footerBrandLine:
        'High Level Thai helps owner-led businesses find blindspots, reduce unnecessary dependency on key people and build systems around the way the business actually works.',
    footerQuickLinksHeading: 'Quick Links',
    // Owner Dependency is named in the spec's quick_links list but its page is NOT IN SCOPE of
    // this brief (not in the DELIVERABLE list), so it is not linked here: a footer link to a page
    // that does not exist would 404. Flagged in the report.
    footerContactHeading: 'Contact',
    footerContactEmailLabel: 'Email',
    footerContactPhoneLabel: 'Phone / WhatsApp',
    footerContactLocation: 'Working with businesses in Hua Hin and across Thailand',
    footerChannelsHeading: 'Channels',
    footerLineLabel: 'LINE',
    footerLegalHeading: 'Legal',
    footerLegalTerms: 'Terms',
    footerLegalPrivacy: 'Privacy Policy',
    footerLegalPdpa: 'PDPA / Data Handling',
    footerLegalCookies: 'Cookie Policy',
    footerCopyright: 'High Level Thai',

    // --- Legal placeholders (constraint 7): plain "coming soon", no invented legal text. ---
    pdpaTitle: 'PDPA / Data Handling',
    pdpaBody: 'This page is coming soon. High Level Thai will publish its PDPA and data-handling policy here once the text is ready.',
    cookiesTitle: 'Cookie Policy',
    cookiesBody: 'This page is coming soon. High Level Thai will publish its cookie policy here once the text is ready.',

    // --- Hua Hin page (bridge row 4007 hua_hin_page_en, verbatim). ---
    huahinSeoTitle: 'Business Systems and AI Support in Hua Hin | High Level Thai',
    huahinMetaDescription:
        'High Level Thai helps Hua Hin business owners find blindspots, reduce owner dependency and build systems that fit how businesses actually operate in Thailand.',
    huahinH1: 'Business systems built around how Hua Hin businesses actually work.',
    huahinIntro:
        'Hua Hin businesses often serve Thai customers, expats, residents and visitors at the same time. They may rely on LINE, Facebook, Google Maps, informal relationships, local area knowledge and software designed for a different market. HLT starts by understanding that reality before recommending anything.',
    huahinWhoHeading: 'Who this is for',
    huahinWho1: 'Owner-led property businesses',
    huahinWho2: 'Hospitality and tourism businesses',
    huahinWho3: 'Retail and service companies',
    huahinWho4: 'Distribution and specialist suppliers',
    huahinWho5: 'Professional firms',
    huahinWho6: 'Expat-owned businesses operating in Thailand',
    huahinLocalHeading: 'Local problems are not always software problems.',
    huahinLocalBody:
        'A CRM can be working exactly as designed and still fail to represent the way a Thai business identifies customers, locations, relationships and decisions. We look for those mismatches before adding another tool.',
    huahinLocationLine: 'Working with businesses in Hua Hin and across Thailand.',
    huahinCta: 'Start with the Business Read',

    // --- Business Blindspots page (bridge row 4007 blindspots_page_en, verbatim). ---
    blindSeoTitle: 'Business Blindspot Test | High Level Thai',
    blindMetaDescription:
        'Test your business from the outside and find where customers may struggle to discover, understand, trust or contact you.',
    blindH1: 'Try becoming your own customer.',
    blindIntro:
        "Business owners know too much about their own businesses. That makes some problems almost invisible from the inside. This free test helps you look at the company as a stranger would.",
    blindQuickTestHeading: 'The 15-minute outside-in test',
    blindStep1: 'Find: Search for the business without using its name. Does it appear for the problem and location?',
    blindStep2: 'Understand: Can a stranger tell what the business does, who it is for and why it matters?',
    blindStep3: 'Locate: Can they actually find the entrance or service area?',
    blindStep4: 'Contact: Is it obvious whether to use phone, LINE, WhatsApp, Facebook, email or a form?',
    blindStep5: 'Trust: Is there enough evidence to believe the business is real, experienced and suitable?',
    blindStep6: 'Act: Does the customer know what happens next?',
    blindInstruction: 'Write down every place where you hesitate. Fix the single biggest point of friction first, then run the test again.',
    blindDeeperHeading: 'If the problem is inside the business',
    blindDeeperBody:
        "If customers can reach you but work still disappears, decisions still come back to the owner or knowledge still lives in people's heads, the Business Read follows the journey inside.",
    blindCta: 'Start with the Business Read',

    // --- Homepage additions (bridge row 4007 homepage_copy_en). Additive sections only: nothing
    // existing on Home.jsx is removed. The hero headline stays Ian's locked 18 September wording,
    // "Build a business that depends less on you.", not the spec's "needs you less" — flagged in
    // the report as a conflict, doctrine wins. ---
    homeBlindHeading: 'We look for what the business cannot easily see itself',
    homeBlind1: 'Human dependency: where work stops without a particular person',
    homeBlind2: "Knowledge dependency: what would disappear if somebody left",
    homeBlind3: 'Workflow blindspots: where work waits, repeats or falls between people',
    homeBlind4: 'System mismatch: where software does not reflect how the business actually works in Thailand',
    homeBlind5: 'Customer blindspots: where finding, contacting, trusting or buying becomes harder than the owner realises',
    homeBlind6: 'Control blindspots: where nobody can prove an important step happened',
    homeBlindCtaLabel: 'See the HLT Blindspot Test',

    homeTrustHeading: 'How we work',
    homeTrust1: 'We do not start by selling software.',
    homeTrust2: 'We separate verified facts from assumptions.',
    homeTrust3: 'We work inside client-owned accounts and systems wherever practical.',
    homeTrust4: 'The client keeps control of its data, logins and operating knowledge.',
    homeTrust5: 'The report states what should change first, what HLT can help with, and what the client may be better doing themselves.',
    homeTrust6: 'There is no obligation to continue after the Business Read.',
};

export const visibilityRefreshTh = {
    // UNREVIEWED MACHINE DRAFT. Ann's review sheet is not yet issued for this module; write one
    // before this branch goes live, following the pattern of the two prior review sheets in
    // C:\Projects\IWT\02-builds\executive-assistant\work\drafts\.
    blindNavLink: 'จุดบอดธุรกิจ',

    footerBrandLine:
        'High Level Thai ช่วยธุรกิจที่เจ้าของเป็นผู้นำค้นหาจุดบอด ลดการพึ่งพาบุคคลสำคัญที่ไม่จำเป็น และสร้างระบบให้เข้ากับวิธีที่ธุรกิจทำงานจริง',
    footerQuickLinksHeading: 'ลิงก์ด่วน',
    footerContactHeading: 'ติดต่อเรา',
    footerContactEmailLabel: 'อีเมล',
    footerContactPhoneLabel: 'โทร / WhatsApp',
    footerContactLocation: 'ให้บริการธุรกิจในหัวหินและทั่วประเทศไทย',
    footerChannelsHeading: 'ช่องทาง',
    footerLineLabel: 'LINE',
    footerLegalHeading: 'ข้อกฎหมาย',
    footerLegalTerms: 'ข้อกำหนดการใช้งาน',
    footerLegalPrivacy: 'นโยบายความเป็นส่วนตัว',
    footerLegalPdpa: 'PDPA / การจัดการข้อมูล',
    footerLegalCookies: 'นโยบายคุกกี้',
    footerCopyright: 'High Level Thai',

    pdpaTitle: 'PDPA / การจัดการข้อมูล',
    pdpaBody: 'หน้านี้กำลังจะมาเร็ว ๆ นี้ High Level Thai จะเผยแพร่นโยบาย PDPA และการจัดการข้อมูลที่นี่เมื่อข้อความพร้อม',
    cookiesTitle: 'นโยบายคุกกี้',
    cookiesBody: 'หน้านี้กำลังจะมาเร็ว ๆ นี้ High Level Thai จะเผยแพร่นโยบายคุกกี้ที่นี่เมื่อข้อความพร้อม',

    huahinSeoTitle: 'ระบบธุรกิจและการสนับสนุน AI ในหัวหิน | High Level Thai',
    huahinMetaDescription:
        'High Level Thai ช่วยเจ้าของธุรกิจในหัวหินค้นหาจุดบอด ลดการพึ่งพาเจ้าของ และสร้างระบบที่เข้ากับวิธีที่ธุรกิจดำเนินงานจริงในประเทศไทย',
    huahinH1: 'ระบบธุรกิจที่สร้างขึ้นตามวิธีที่ธุรกิจในหัวหินทำงานจริง',
    huahinIntro:
        'ธุรกิจในหัวหินมักให้บริการลูกค้าไทย ชาวต่างชาติ ผู้พักอาศัย และนักท่องเที่ยวไปพร้อมกัน อาจพึ่งพา LINE, Facebook, Google Maps ความสัมพันธ์แบบไม่เป็นทางการ ความรู้พื้นที่ท้องถิ่น และซอฟต์แวร์ที่ออกแบบมาสำหรับตลาดอื่น HLT เริ่มต้นด้วยการทำความเข้าใจความจริงนั้นก่อนแนะนำสิ่งใด',
    huahinWhoHeading: 'เหมาะกับใคร',
    huahinWho1: 'ธุรกิจอสังหาริมทรัพย์ที่เจ้าของเป็นผู้นำ',
    huahinWho2: 'ธุรกิจโรงแรมและการท่องเที่ยว',
    huahinWho3: 'ธุรกิจค้าปลีกและบริการ',
    huahinWho4: 'ธุรกิจจัดจำหน่ายและซัพพลายเออร์เฉพาะทาง',
    huahinWho5: 'ธุรกิจวิชาชีพ',
    huahinWho6: 'ธุรกิจที่ชาวต่างชาติเป็นเจ้าของในประเทศไทย',
    huahinLocalHeading: 'ปัญหาท้องถิ่นไม่ใช่ปัญหาซอฟต์แวร์เสมอไป',
    huahinLocalBody:
        'CRM อาจทำงานตามที่ออกแบบไว้ทุกประการ แต่ยังไม่สะท้อนวิธีที่ธุรกิจไทยระบุลูกค้า สถานที่ ความสัมพันธ์ และการตัดสินใจ เราหาความไม่สอดคล้องเหล่านั้นก่อนเพิ่มเครื่องมือใหม่',
    huahinLocationLine: 'ให้บริการธุรกิจในหัวหินและทั่วประเทศไทย',
    huahinCta: 'เริ่มต้นด้วย Business Read',

    blindSeoTitle: 'แบบทดสอบจุดบอดธุรกิจ | High Level Thai',
    blindMetaDescription: 'ทดสอบธุรกิจของคุณจากมุมมองภายนอก และค้นหาจุดที่ลูกค้าอาจค้นหา เข้าใจ ไว้ใจ หรือติดต่อคุณได้ยาก',
    blindH1: 'ลองเป็นลูกค้าของตัวเอง',
    blindIntro:
        'เจ้าของธุรกิจรู้จักธุรกิจของตัวเองมากเกินไป จนทำให้บางปัญหาแทบมองไม่เห็นจากภายใน แบบทดสอบฟรีนี้ช่วยให้คุณมองบริษัทในมุมของคนแปลกหน้า',
    blindQuickTestHeading: 'แบบทดสอบมุมมองภายนอก 15 นาที',
    blindStep1: 'ค้นหา: ลองค้นหาธุรกิจโดยไม่ใช้ชื่อธุรกิจ ธุรกิจปรากฏสำหรับปัญหาและพื้นที่นั้นหรือไม่',
    blindStep2: 'เข้าใจ: คนแปลกหน้าบอกได้ไหมว่าธุรกิจทำอะไร เพื่อใคร และทำไมถึงสำคัญ',
    blindStep3: 'ค้นหาที่ตั้ง: พวกเขาหาทางเข้าหรือพื้นที่ให้บริการเจอจริงหรือไม่',
    blindStep4: 'ติดต่อ: ชัดเจนหรือไม่ว่าจะใช้โทรศัพท์ LINE WhatsApp Facebook อีเมล หรือแบบฟอร์ม',
    blindStep5: 'ความไว้ใจ: มีหลักฐานเพียงพอที่จะเชื่อว่าธุรกิจนี้มีอยู่จริง มีประสบการณ์ และเหมาะสมหรือไม่',
    blindStep6: 'ลงมือทำ: ลูกค้ารู้หรือไม่ว่าขั้นตอนต่อไปคืออะไร',
    blindInstruction: 'จดทุกจุดที่คุณลังเล แก้จุดเสียดทานที่ใหญ่ที่สุดก่อน แล้วลองทดสอบอีกครั้ง',
    blindDeeperHeading: 'หากปัญหาอยู่ภายในธุรกิจ',
    blindDeeperBody:
        'หากลูกค้าติดต่อคุณได้แต่งานยังหายไป การตัดสินใจยังย้อนกลับมาที่เจ้าของ หรือความรู้ยังอยู่ในหัวของคน Business Read จะตามรอยเข้าไปภายใน',
    blindCta: 'เริ่มต้นด้วย Business Read',

    homeBlindHeading: 'เรามองหาสิ่งที่ธุรกิจมองไม่เห็นได้เอง',
    homeBlind1: 'การพึ่งพาบุคคล: งานหยุดชะงักหากไม่มีคนคนหนึ่ง',
    homeBlind2: 'การพึ่งพาความรู้: อะไรจะหายไปหากมีคนลาออก',
    homeBlind3: 'จุดบอดขั้นตอนงาน: งานที่รอ ทำซ้ำ หรือตกหล่นระหว่างคน',
    homeBlind4: 'ระบบไม่เข้ากัน: ซอฟต์แวร์ไม่สะท้อนวิธีที่ธุรกิจทำงานจริงในประเทศไทย',
    homeBlind5: 'จุดบอดลูกค้า: การค้นหา ติดต่อ ไว้ใจ หรือซื้อยากกว่าที่เจ้าของคิด',
    homeBlind6: 'จุดบอดการควบคุม: ไม่มีใครพิสูจน์ได้ว่าขั้นตอนสำคัญเกิดขึ้นจริง',
    homeBlindCtaLabel: 'ดูแบบทดสอบจุดบอดของ HLT',

    homeTrustHeading: 'วิธีการทำงานของเรา',
    homeTrust1: 'เราไม่เริ่มต้นด้วยการขายซอฟต์แวร์',
    homeTrust2: 'เราแยกข้อเท็จจริงที่ตรวจสอบแล้วออกจากข้อสันนิษฐาน',
    homeTrust3: 'เราทำงานภายในบัญชีและระบบของลูกค้าเมื่อทำได้จริง',
    homeTrust4: 'ลูกค้าเป็นผู้ควบคุมข้อมูล การเข้าสู่ระบบ และความรู้การดำเนินงานของตนเอง',
    homeTrust5: 'รายงานระบุว่าอะไรควรเปลี่ยนก่อน อะไรที่ HLT ช่วยได้ และอะไรที่ลูกค้าอาจทำเองได้ดีกว่า',
    homeTrust6: 'ไม่มีข้อผูกมัดให้ต้องทำต่อหลังจาก Business Read',
};
