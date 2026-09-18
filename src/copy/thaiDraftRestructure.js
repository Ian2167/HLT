// thaiDraftRestructure.js — UNREVIEWED MACHINE THAI for the seven restructured public pages,
// 18 September 2026. WIRED INTO src/translations.js IN THE SAME COMMIT, spread LAST in the `th`
// block so it wins over the English of homeRebuild.js and businessReadRebuild.js.
// Ann's corrections come back INTO THIS FILE, never into translations.js.
//
// WHY IT EXISTS TODAY. Ian, 18 September 2026 ~11:1x Bangkok, on the restructure preview:
// "the Thai toggle doesn't work again". He was right, and the cause was mechanical. The `th`
// block spread `...thaiDraft` and then `...homeRebuildCopy` and `...businessReadRebuildCopy`
// AFTER it, so English overrode Thai on every home and Business Read key; and the five new
// copy modules (howItWorks, examples, about, contact, clientLogin) had no Thai at all. This
// file closes both holes: every key the seven modules define now has a Thai value.
//
// WHAT THIS FILE IS. A machine-produced Thai draft. It is site copy AND a review artefact at
// the same time, which is unusual and deliberate: it renders under the Thai toggle today and it
// is reviewed afterwards, on the route Ian ruled.
//
// WHY IT IS ALLOWED. HLT_GOVERNING_CONTEXT.md line 76 forbids producing Thai-facing copy by
// direct line-by-line translation. Line 77 carries ONE NAMED EXCEPTION, ruled by Ian on
// 15 September 2026 09:1x Bangkok ("Please use Route 2 for Thai translation"), for the HLT site
// rebuild: a machine Thai draft may be produced PROVIDED a native Thai speaker reviews every
// line. The 15 September wording names "the six rebuilt pages"; these seven are the same site
// rebuild carried forward, restructured on his 17 September directive, so the same route is
// applied. The exception still does not travel to any other HLT copy.
//
// HOW IT WAS PRODUCED. NO MACHINE-TRANSLATION TOOL EXISTS ON DISK. The 15 September entry in
// C:\Projects\IWT\02-builds\code-builder\DECISIONS.md names a verifier
// (verify-hlt-thai-draft.mjs) but no translator, and nothing matching translate/thai is present
// under C:\Projects\IWT\tools\ or the drafts folder. So THIS DRAFT WAS WRITTEN BY THE MODEL
// ITSELF (Claude Opus 5, code-builder seat, 18 September 2026), line by line, against the
// register and the terminology already established in src/copy/thaiDraft.js.
//
// THE GATE THAT IS STILL OPEN. The bilingual review sheet is at
//   C:\Projects\IWT\02-builds\executive-assistant\work\drafts\
//   2026-09-18-HLT-THAI-REVIEW-SHEET-RESTRUCTURE.md   (and the .csv beside it)
// Nothing on this page is native-reviewed until Ann has been through that sheet and her
// corrections have been applied to THIS file.
//
// STANDING RULES APPLIED TO EVERY LINE BELOW
//  - Register: the calm operator voice the site's own Thai already uses. Not formal written
//    Thai, never marketing hype.
//  - Brand and product names stay in English: High Level Thai (three words), HLT, The Business
//    Read, AIOS Audit, Client Workspace, LINE, AI, SMB, Facebook.
//  - Figures never change: prices, percentages, working-day counts and minute counts carry
//    through exactly. Prices are THB only, written the Thai way: "15,000 บาท". Ex-VAT takes the
//    Thai convention "ยังไม่รวม VAT 7%", which keeps the rate.
//  - Where the English of a line is word-for-word what it was on 14 September, the Thai from
//    src/copy/thaiDraft.js is carried across unchanged, so Ann is not asked to review the same
//    sentence twice and the two files cannot drift apart.
//
// ONE LINE NEEDS IAN'S OWN WORD, NOT ANN'S. `homeHeroHeadline` below is a machine draft of the
// NEW English headline, "Build a business that depends less on you." Ian wrote the Thai for the
// RETIRED headline himself on 14 September at 16:03 Bangkok
// ("เราช่วยพัฒนา AI ของ SMB ให้สามารถสร้างระบบธุรกิจได้ดียิ่งขึ้น", still on disk as
// homeHeroHeadlineTh in src/copy/home.js). That sentence says something different from the new
// English, so leaving it under the new layout would put two different promises on the two
// toggle states of the most prominent line on the site. His own Thai is preserved in the review
// sheet row for comparison and the row is flagged for his word.
//
// Keys are EXACTLY as src/translations.js keys them, and in page order.
export const thaiDraftRestructure = {
    // =====================================================================================
    // HOME (/) — src/copy/homeRebuild.js, 46 keys
    // =====================================================================================
    homeMetaTitle: 'สร้างธุรกิจที่พึ่งพาตัวคุณน้อยลง | High Level Thai',
    homeMetaDescription: 'HLT ช่วยธุรกิจบริการไทยหาว่าการตัดสินใจ ข้อมูล และงาน ติดขัดอยู่ตรงไหน แล้วสร้างระบบที่ลดภาระของเจ้าของลง',

    // FLAGGED FOR IAN. See this file's header: his own 14 September Thai was for the retired
    // headline and says something different from the English above it today.
    homeHeroHeadline: 'สร้างธุรกิจที่พึ่งพาตัวคุณน้อยลง',
    homeHeroLead: 'HLT ช่วยธุรกิจบริการไทยหาว่าการตัดสินใจ ข้อมูล และงาน ติดขัดอยู่ตรงไหน แล้วสร้างระบบที่ดีกว่าเดิมเพื่อลดภาระตรงนั้น',
    homeCtaLabel: 'เริ่มจาก The Business Read',
    // The LINE button label, taken from the existing Thai homeNavCtaLabel in thaiDraft.js so the
    // site has one wording for one action.
    homeSecondaryCtaLabel: 'คุยกับเราทาง LINE',
    homeHeroCtaNote: 'ทักมาใน LINE ข้อความเดียว ไม่ต้องเตรียมอะไรมาก่อน',

    homeProblemHeading: 'จากข้างในธุรกิจ มันเป็นแบบนี้',
    homeProblemLead: 'เจ้าของธุรกิจส่วนใหญ่ไม่ได้เรียกมันว่าธุรกิจพึ่งเจ้าของมากเกินไป แต่จะเล่าสัปดาห์หนึ่งที่หน้าตาแบบนี้',
    homeSign1: 'ทีมงานทำงานไปได้ไม่ไกล ถ้าไม่ได้ถามคุณก่อน',
    homeSign2: 'ลูกค้าติดต่อเข้ามาทาง Facebook ทาง LINE และทางเว็บไซต์ แล้วแต่ละรายก็ถูกจัดการคนละแบบ',
    homeSign3: 'งานค้างอยู่เฉยๆ จนกว่าคุณจะอนุมัติ',
    homeSign4: 'วิธีทำงานอยู่ในหัวของใครบางคน ไม่ได้อยู่บนกระดาษ',
    homeSign5: 'คุณไม่เห็นว่าเรื่องไหนต้องดูก่อน ถ้าไม่เดินไปถามเอง',
    homeSign6: 'งานเอกสารเดิมๆ ต้องทำซ้ำใหม่ทุกสัปดาห์',
    homeSign7: 'การติดตามงานเกิดขึ้นตอนที่มีใครนึกขึ้นได้',
    homeConsequenceP1: 'ทั้งหมดนี้ไม่ใช่ปัญหาที่ตัวคน แต่เป็นสิ่งที่เกิดขึ้นเมื่อธุรกิจโตเร็วกว่าระบบที่รองรับอยู่ข้างใต้',
    homeConsequenceP2: 'และมันไม่ได้เบาลงเมื่อธุรกิจโตขึ้น งานยิ่งมาก ก็ยิ่งต้องใช้ตัวคุณมากขึ้น',

    homeStagesHeading: 'สามขั้น เรียงตามลำดับ',
    homeStage1Name: 'เข้าใจ',
    homeStage1Body: 'The Business Read เราหาจุดที่งานติดขัดหลักๆ แล้วระบุว่าเรื่องไหนควรได้รับความสนใจก่อน',
    homeStage2Name: 'วินิจฉัย',
    homeStage2Body: 'AIOS Audit ใช้ในกรณีที่ปัญหาพาดผ่านหลายส่วนของธุรกิจ และต้องเจาะลึกกว่านั้น',
    homeStage3Name: 'ปรับให้ดีขึ้น',
    homeStage3Body: 'HLT สร้างระบบที่จำเป็นขึ้นมา ทั้งตัวช่วยตัดสินใจและงานเอกสาร การมองเห็นงานที่เดินอยู่ การเก็บความรู้ และการทำงานอัตโนมัติ',
    homeStagesClosing: 'คุณไม่ต้องรู้ว่าต้องใช้อันไหน รายงานจะเป็นตัวบอกเอง',
    homeStagesLinkLabel: 'ดูว่าเราทำงานยังไง',

    homeCapHeading: 'เราปรับธุรกิจให้ดีขึ้นยังไง',
    homeCapLead: 'ขึ้นอยู่กับสิ่งที่ The Business Read เจอ HLT อาจสร้างระบบสำหรับเรื่องเหล่านี้',
    homeCap1Name: 'ตัวช่วยตัดสินใจ',
    homeCap1Body: 'ลดการตัดสินใจซ้ำๆ ของเจ้าของ และลดภาระงานเอกสาร',
    homeCap2Name: 'การมองเห็นงานที่เดินอยู่',
    homeCap2Body: 'แสดงให้เห็นว่าเรื่องไหนต้องดู โดยไม่ต้องคอยไล่เช็กตลอดเวลา',
    homeCap3Name: 'ความรู้ในธุรกิจ',
    homeCap3Body: 'เก็บความรู้ที่ตอนนี้อยู่ในหัวของคนสำคัญไม่กี่คนออกมาไว้',
    homeAiLine: 'เราปรับวิธีที่ธุรกิจทำงาน ตรงไหนที่ AI ช่วยตัดงานซ้ำๆ ออกได้ ช่วยให้มองเห็นงานชัดขึ้น หรือช่วยลดการพึ่งตัวบุคคล เราก็ใช้',

    homeProofHeading: 'สิ่งที่คุณเอามาวัดเราได้',
    homeProof1: 'เราไม่เริ่มจากระบบ เราเริ่มจากการอ่านธุรกิจของคุณก่อน',
    homeProof2: 'ทุกอย่างที่เราเขียนกำกับไว้ว่าตรวจสอบแล้วหรือยังไม่ยืนยัน คุณจะได้ไม่ต้องเดาว่าส่วนไหนเช็กมาแล้วบ้าง',
    homeProof3: 'เราสร้างในบัญชีของคุณ ล็อกอินของคุณ ข้อมูลของคุณ โดเมนของคุณ',
    homeProof4: 'เราเข้าไปทำงานในฐานะคนที่คุณเชิญเข้ามา และหลังส่งมอบเราไม่ถือสิทธิ์อะไรไว้เลย',
    homeProof5: 'รายงานจบด้วยรายการสิ่งที่ควรเปลี่ยนพร้อมราคา บางข้อเราทำให้ได้ บางข้อคุณควรทำเอง และรายงานบอกไว้ชัดว่าข้อไหนเป็นแบบไหน',
    homeProofClosing: 'คุณไม่มีข้อผูกมัดว่าต้องทำอะไรต่อ',

    homeClosingHeading: 'เริ่มจากจุดที่กดดันที่สุด',
    homeClosingBody: 'คุยกับเราหนึ่งชั่วโมง แล้วรับรายงานฉบับเขียนว่าธุรกิจพึ่งตัวคุณตรงไหน และควรเปลี่ยนอะไรก่อน ถ้ายังไม่มีอันไหนที่เหมาะกับคุณตอนนี้ เราจะบอกตามนั้น',
    homeClosingNote: 'หรือทักมาใน LINE ไม่ต้องเตรียมอะไรมาก่อน',

    // =====================================================================================
    // THE BUSINESS READ (/business-read) — src/copy/businessReadRebuild.js, 102 keys
    // Prices, the 7 per cent rate and every working-day and minute count carry through unchanged.
    // =====================================================================================
    // Brand term. Ian's navigation line names this page "Business Read"; it stays English, as
    // every product name on this site does.
    brNavLink: 'Business Read',

    brMetaTitle: 'The Business Read: ควรเปลี่ยนอะไรก่อน | High Level Thai',
    brMetaDescription: 'รายงานฉบับเขียนว่าธุรกิจของคุณพึ่งตัวคุณตรงไหน งานไหนถูกทำซ้ำ และควรเปลี่ยนอะไรก่อน สำหรับธุรกิจบริการไทย เริ่มต้น 15,000 บาท',

    brHeroHeadline: 'มาดูกันว่าธุรกิจของคุณควรเปลี่ยนอะไรก่อน',
    brHeroLead: 'คุยกับเราหนึ่งชั่วโมง แล้วรับรายงานฉบับเขียนว่าการตัดสินใจไปค้างตรงไหน ข้อมูลหายไปตรงไหน และธุรกิจพึ่งตัวคุณตรงไหน เราส่งให้ในวันที่นัดไว้ และคุณไม่มีข้อผูกมัดว่าต้องทำอะไรต่อ',
    brCtaLabel: 'จองเวลาหนึ่งชั่วโมงทาง LINE',
    brHeroCtaNote: 'เริ่มต้น 15,000 บาท ยังไม่รวม VAT 7% ใช้เวลา 3 วันทำการ',

    brHappeningHeading: 'ตอนนี้เกิดอะไรขึ้น',
    brHappeningP1: 'ธุรกิจของคุณอาจจะกำลังโต แต่งานที่มากขึ้นก็ยังแปลว่าเจ้าของต้องลงมือมากขึ้นอยู่ดี',
    brHappeningP2: 'นี่ไม่ใช่ปัญหาที่ตัวคน และไม่ใช่ปัญหาเรื่องแรงจูงใจ แต่เป็นสิ่งที่เกิดขึ้นเมื่อธุรกิจโตเร็วกว่าระบบที่รองรับอยู่ข้างใต้ งานยังเสร็จอยู่ แต่เสร็จได้เพราะมีคนนึกขึ้นได้ มีคนถาม หรือมีคนรอ',
    brHappeningP3: 'เจ้าของธุรกิจส่วนใหญ่รู้สึกได้ก่อนที่จะชี้ได้นานมาก รายงานฉบับนี้คือวิธีที่ทำให้ชี้ได้',

    brDoesHeading: 'The Business Read ทำอะไรให้',
    brDoesP1: 'HLT ดูว่าธุรกิจทำงานยังไง แล้วระบุว่าการตัดสินใจไปค้างตรงไหน ข้อมูลหายตรงไหน งานไหนถูกทำซ้ำ คนพึ่งเจ้าของตรงไหน และระบบไหนไม่เชื่อมกัน',
    brDoesP2: 'เราใช้เวลาหนึ่งชั่วโมงคุยกับคุณ ไม่ต้องกรอกอะไรก่อน ไม่ต้องเปิดห้องข้อมูล ไม่ต้องเตรียมอะไรเลย คุณเล่าเรื่องธุรกิจของคุณ แล้วที่ปรึกษาหลักของเราเป็นคนถาม',
    brDoesP3: 'จากนั้นเราไปทำงานเบื้องหลังที่คุณไม่เห็น ทั้งข้อมูลจดทะเบียนบริษัทและข้อมูลสาธารณะ ตลาดของคุณ กฎระเบียบที่กำลังจะมีผลกับธุรกิจสายคุณในปีนี้ และเส้นทางงานตั้งแต่ลูกค้าติดต่อเข้ามาจนถึงใบแจ้งหนี้ ตามที่คุณเล่าไว้',
    brDoesP4: 'คนเป็นคนตัดสิน ไม่ใช่โมเดล AI ช่วยย่นชั่วโมงงานที่เมื่อก่อนทำให้งานแบบนี้กินเวลาที่ปรึกษาเป็นสัปดาห์',

    brReceiveHeading: 'สิ่งที่คุณจะได้รับ',
    brReceive1: 'จุดที่งานติดขัดหลักๆ เขียนด้วยคำพูดของคนที่ทำงานนั้นจริงๆ',
    brReceive2: 'สาเหตุที่น่าจะเป็นของแต่ละจุด',
    brReceive3: 'ผลกระทบที่แต่ละจุดมีต่อธุรกิจ',
    brReceive4: 'ลำดับความสำคัญ คุณจะได้รู้ว่าต้องจัดการอะไรก่อน',
    brReceive5: 'ขั้นตอนต่อไปที่เราแนะนำ',
    brReceiveNote: 'ทุกข้อกำกับไว้ว่าตรวจสอบแล้วหรือยังไม่ยืนยัน คุณจะได้ไม่ต้องเดาว่าส่วนไหนเช็กมาแล้วบ้าง',

    brNotHeading: 'สิ่งที่มันไม่ใช่',
    brNot1: 'ไม่ใช่การให้คำปรึกษาเรื่อง AI แบบทั่วๆ ไป',
    brNot2: 'ไม่ใช่การขายซอฟต์แวร์',
    brNot3: 'ไม่ใช่การผูกมัดว่าต้องติดตั้งระบบต่อโดยอัตโนมัติ',

    brTiersHeading: 'สามระดับความลึก วิธีเดียวกัน',
    brPriceNote: 'ราคาทั้งหมดเป็นเงินบาท ยังไม่รวม VAT 7%',
    // Renders immediately after each price, so the whole line reads "15,000 บาท ยังไม่รวม VAT 7%".
    // The English leads with a comma; Thai takes a space, which is the convention here.
    brPriceVatSuffix: ' ยังไม่รวม VAT 7%',

    brTier1Name: 'อ่านธุรกิจ',
    brTier1Desc: 'คุยกับเราหนึ่งชั่วโมง แล้วรับรายงานฉบับเขียนภายใน 3 วันทำการ',
    brTier1Price: '15,000 บาท',
    brTier1Delivery: 'ส่งมอบ: 3 วันทำการ',
    brTier1Revisions: 'แก้ไข: 1 ครั้ง',

    brTier2Name: 'อ่านธุรกิจ แบบกว้างขึ้น',
    brTier2Desc: '90 นาที มีคนในทีมคุณร่วมอีกหนึ่งเสียง และมีคอลอธิบายรายงานให้ฟัง',
    brTier2Price: '22,500 บาท',
    brTier2Delivery: 'ส่งมอบ: 5 วันทำการ',
    brTier2Revisions: 'แก้ไข: 1 ครั้ง',

    brTier3Name: 'อ่านธุรกิจ แบบเต็มความลึก',
    brTier3Desc: 'คุยกันสองรอบ ได้ถึงสี่คน มีงานวิจัยคู่แข่ง และประเมินขนาดงานของแต่ละขั้นต่อไป',
    brTier3Price: '37,500 บาท',
    brTier3Delivery: 'ส่งมอบ: 7 วันทำการ',
    brTier3Revisions: 'แก้ไข: 2 ครั้ง',

    brRow1Label: 'ส่งมอบ',
    brRow1A: '3 วันทำการ',
    brRow1B: '5 วันทำการ',
    brRow1C: '7 วันทำการ',
    brRow2Label: 'จำนวนครั้งที่แก้ไขได้',
    brRow2A: '1',
    brRow2B: '1',
    brRow2C: '2',
    brRow3Label: 'การสัมภาษณ์',
    brRow3A: '60 นาที',
    brRow3B: '90 นาที',
    brRow3C: '90 นาที บวกอีกหนึ่งรอบ',
    brRow4Label: 'คนที่เราสัมภาษณ์',
    brRow4A: 'คุณ',
    brRow4B: 'คุณ บวกอีกหนึ่งคน',
    brRow4C: 'คุณ บวกได้อีกถึงสามคน',
    brRow5Label: 'รายงานฉบับเขียน',
    brRow5A: 'มี',
    brRow5B: 'มี',
    brRow5C: 'มี',
    brRow6Label: 'งานค้นข้อมูลเบื้องหลัง',
    brRow6A: 'ข้อมูลจดทะเบียนบริษัทและข้อมูลสาธารณะ',
    brRow6B: 'ข้อมูลจดทะเบียน ข้อมูลสาธารณะ ภาพรวมอุตสาหกรรม และกฎระเบียบ',
    brRow6C: 'ทั้งหมดข้างต้น บวกคู่แข่งที่คุณระบุชื่อมา',
    // The 18 September English renames this row from "Costed next steps" to "Priority order and
    // next action", which is what the read's output is called everywhere else on the page.
    brRow7Label: 'ลำดับความสำคัญและขั้นตอนต่อไป',
    brRow7A: 'มี',
    brRow7B: 'มี',
    brRow7C: 'มี พร้อมประเมินขนาดงานแยกรายการ',
    brRow8Label: 'คอลอธิบายรายงาน',
    brRow8A: 'ไม่มี',
    brRow8B: '30 นาที',
    brRow8C: '60 นาที',

    brStepsHeading: 'ขั้นตอนเป็นแบบนี้',
    brStep1Lead: 'จองเวลาหนึ่งชั่วโมง',
    brStep1Body: 'คุณเลือกเวลาเอง ไม่ต้องเตรียมอะไร และไม่ต้องส่งอะไรมาก่อน',
    brStep2Lead: 'การสัมภาษณ์',
    brStep2Body: '60 ถึง 90 นาที บันทึกไว้ ใช้แพลตฟอร์มไหนก็ได้ที่คุณสะดวก คุณเล่า เราถาม',
    brStep3Lead: 'งานเบื้องหลัง',
    brStep3Body: 'ข้อมูลจดทะเบียนบริษัท ภาพรวมอุตสาหกรรมของคุณ กฎระเบียบที่กำลังมีผลกับธุรกิจสายคุณ และเส้นทางงานที่คุณเล่าไว้ ทั้งหมดตรวจกับแหล่งข้อมูลต้นทาง',
    brStep4Lead: 'เขียนรายงาน',
    brStep4Body: 'ควรเปลี่ยนอะไรก่อน เรียงตามลำดับความสำคัญ พร้อมหลักฐานที่มา',
    brStep5Lead: 'ส่งมอบ',
    // The English still names two tiers "Standard and Advanced", which are not the tier names
    // shown on the page (The Read, Widened / The Read, Full Depth). The Thai points at the two
    // tiers as they are actually named. Flagged on 15 September and still open; the English is
    // not this brief's to change.
    brStep5Body: 'รายงานเข้าอีเมลคุณในวันที่นัดไว้ ถ้าเป็นแบบกว้างขึ้นและแบบเต็มความลึก เราจะอธิบายให้ฟังด้วย',

    brFaqHeading: 'คำถามที่เจ้าของธุรกิจถามก่อน',
    brFaq1Q: 'ต้องส่งอะไรให้ก่อนคุยไหม?',
    brFaq1A: 'ไม่ต้อง มาคุยแบบที่เป็นอยู่ได้เลย ถ้าระหว่างทางมีอะไรที่ควรดู เราค่อยขอทีหลัง',
    brFaq2Q: 'นี่คือ AI เขียนรายงานเกี่ยวกับธุรกิจผมใช่ไหม?',
    brFaq2A: 'ไม่ใช่ หนึ่งชั่วโมงนั้นคุยกับคนจริง คำถามเป็นของเรา และการตัดสินก็เป็นของเรา AI ช่วยทำงานค้นข้อมูลและร่างเอกสารที่เมื่อก่อนกินเวลาหลายวัน ความต่างตรงนี้แหละคือเหตุผลที่ราคาเป็นเท่านี้ ไม่ใช่ราคาแบบบริษัทที่ปรึกษา',
    brFaq3Q: 'ถ้าสิ่งที่บอกมาเป็นเรื่องที่ผมรู้อยู่แล้วล่ะ?',
    brFaq3A: 'คุณก็จะได้เห็นมันเขียนออกมาเป็นเอกสารพร้อมหลักฐาน ซึ่งไม่เหมือนกับการรู้อยู่ในใจ คุณค่าส่วนใหญ่ของรายงานรอบแรกคือเรื่องที่คุณสงสัยอยู่แล้ว แต่ไม่เคยเห็นใครพิสูจน์ให้ดู',
    brFaq4Q: 'จะพยายามขายของที่ใหญ่กว่านี้ต่อไหม?',
    brFaq4A: 'รายงานจบด้วยขั้นตอนต่อไปที่เราแนะนำ และรายการสิ่งที่ควรเปลี่ยนพร้อมราคา บางข้อเราทำให้ได้ บางข้อคุณควรทำเอง และรายงานบอกไว้ชัดว่าข้อไหนเป็นแบบไหน คุณไม่มีข้อผูกมัดว่าต้องซื้ออะไร',
    brFaq5Q: 'ใครได้เห็นข้อมูลของผมบ้าง?',
    brFaq5A: 'เราเท่านั้น ไม่มีใครอื่น เราจะไม่เอ่ยชื่อหรือรายละเอียดธุรกิจคุณกับใคร ถ้าคุณไม่ได้ยินยอมเป็นลายลักษณ์อักษร และข้อนี้ยังมีผลต่อไปหลังงานจบแล้ว',

    brClosingHeading: 'ให้เวลาหนึ่งชั่วโมง ได้รายงานฉบับเขียนกลับไป',
    brClosingBody: 'ทักมาใน LINE แล้วเลือกเวลาที่คุณสะดวก ไม่ต้องเตรียมอะไร ไม่ต้องส่งอะไรมาก่อน และคุณจะได้รายงานฉบับเขียนในวันที่เรานัดไว้',
    brClosingNote: 'เราทำงานกับธุรกิจบริการทั่วประเทศไทย รวมถึงหัวหินและกรุงเทพฯ',

    // =====================================================================================
    // HOW IT WORKS (/how-it-works) — src/copy/howItWorks.js, 37 keys
    // =====================================================================================
    hiwNavLink: 'วิธีการทำงาน',

    hiwMetaTitle: 'HLT ทำงานยังไง: เข้าใจ วินิจฉัย ปรับให้ดีขึ้น | High Level Thai',
    hiwMetaDescription: 'สามขั้น เรียงตามลำดับ เราอ่านธุรกิจก่อน เจาะลึกเฉพาะตรงที่จำเป็น แล้วจึงสร้างระบบที่ดึงงานออกจากตัวเจ้าของ',

    hiwHeroHeadline: 'เข้าใจก่อน แล้วค่อยแก้ให้ถูกจุด',
    hiwHeroLead: 'โครงการวางระบบส่วนใหญ่ล้มเหลวเพราะเริ่มจากตัวระบบ เราเริ่มจากธุรกิจ และจะยังไม่สร้างอะไรทั้งนั้น จนกว่าจะบอกได้ว่าจริงๆ แล้วอะไรผิดปกติ และเรื่องไหนควรได้รับความสนใจก่อน',
    hiwCtaLabel: 'เริ่มจาก The Business Read',

    hiwStage1Label: 'ขั้นที่ 1 เข้าใจ',
    // Product name, stays English.
    hiwStage1Name: 'The Business Read',
    hiwStage1P1: 'ปัญหา คุณรู้สึกได้ว่าธุรกิจพิงอยู่กับตัวคุณ แต่ชี้ไม่ได้ว่าตรงไหน ทุกอย่างดูยุ่งไปหมด และไม่มีอะไรดูเหมือนเป็นต้นเหตุ',
    hiwStage1P2: 'สิ่งที่คุณจะได้ จุดที่งานติดขัดหลักๆ สาเหตุที่น่าจะเป็นของแต่ละจุด ผลที่ธุรกิจต้องจ่ายไปกับมัน และลำดับความสำคัญ คุณจะได้รู้ว่าเรื่องไหนควรดูก่อน',
    hiwStage1P3: 'ขั้นตอน คุยกับคุณหนึ่งชั่วโมง จากนั้นเป็นงานเบื้องหลังที่คุณไม่เห็น แล้วส่งรายงานฉบับเขียนให้ในวันที่นัดไว้ ไม่ต้องเตรียมอะไร และไม่ต้องส่งอะไรมาก่อน',
    hiwStage1LinkLabel: 'ดู The Business Read',

    hiwStage2Label: 'ขั้นที่ 2 วินิจฉัย',
    // Product name, stays English.
    hiwStage2Name: 'AIOS Audit',
    hiwStage2P1: 'ใช้เมื่อไหร่ เมื่อปัญหาพาดผ่านหลายส่วนของธุรกิจ และต้องเจาะลึกกว่านั้น ธุรกิจส่วนใหญ่ไม่จำเป็นต้องใช้ และนี่ไม่ใช่จุดเริ่มต้นอยู่แล้ว',
    hiwStage2P2: 'ปัญหา จุดติดขัดไม่ได้อยู่ที่เดียว แต่อยู่ตรงรอยต่อระหว่างออฟฟิศกับหน้างาน หรือระหว่างฝ่ายขายกับฝ่ายส่งมอบ และทุกคนที่เกี่ยวข้องเห็นได้แค่ฝั่งของตัวเอง',
    hiwStage2P3: 'สิ่งที่คุณจะได้ แผนภาพว่างานเดินระหว่างส่วนต่างๆ ของธุรกิจคุณจริงๆ ยังไง จุดเจ็บที่เขียนด้วยคำพูดของคนที่ทำงานนั้นจริงๆ และโอกาสที่จัดลำดับตามคุณค่าเทียบกับความยาก',
    hiwStage2P4: 'ขั้นตอน สัมภาษณ์แบบบันทึกไว้ ทีละส่วนของธุรกิจ กับคนที่ดูแลส่วนนั้น คุยกันออนไลน์ ถ้าต้องการให้ไปที่หน้างาน มีค่าใช้จ่ายเพิ่ม',

    hiwStage3Label: 'ขั้นที่ 3 ปรับให้ดีขึ้น',
    hiwStage3Name: 'HLT สร้างระบบที่จำเป็นขึ้นมา',
    hiwStage3P1: 'ปัญหา แค่รู้ว่าอะไรผิดปกติยังไม่เปลี่ยนอะไรเลย สัปดาห์หนึ่งก็ยังเดินแบบเดิมอยู่ดี',
    hiwStage3P2: 'สิ่งที่เราสร้าง ตัวช่วยตัดสินใจและงานเอกสาร การมองเห็นงานที่เดินอยู่ การเก็บความรู้ และการทำงานอัตโนมัติ',
    hiwStage3P3: 'ขั้นตอน เราสร้างในบัญชีของคุณ ล็อกอินของคุณ ข้อมูลของคุณ โดเมนของคุณ เราเข้าไปทำงานในฐานะคนที่คุณเชิญเข้ามา และหลังส่งมอบเราไม่ถือสิทธิ์อะไรไว้เลย จากนั้นคุณเลือกเองว่าจะทำอะไร ทำเมื่อไหร่ และทำแค่ไหน',

    hiwDecidesHeading: 'คุณไม่ต้องเลือกระบบเอง การวินิจฉัยเป็นตัวเลือกให้',
    hiwDecidesP1: 'เราไม่ให้คุณเลือกจากเมนู รายงานเป็นตัวบอกว่าธุรกิจต้องการอะไร แล้วค่อยคุยกันว่าจะสร้างอะไร ถึงจะมีเหตุผล',
    hiwDecidesP2: 'บางเรื่องที่ออกมาจากรายงานเป็นงานที่คุณควรทำเอง และรายงานก็บอกไว้แบบนั้น คุณไม่มีข้อผูกมัดว่าต้องสร้างอะไรกับเรา',

    hiwAiHeading: 'AI เข้ามาตรงไหน',
    hiwAiP1: 'เราปรับวิธีที่ธุรกิจทำงาน ตรงไหนที่ AI ช่วยตัดงานซ้ำๆ ออกได้ ช่วยให้มองเห็นงานชัดขึ้น หรือช่วยลดการพึ่งตัวบุคคล เราก็ใช้',
    hiwAiP2: 'มีแค่นั้น AI ไม่ใช่แผน แต่เป็นเครื่องมือหนึ่ง และมันต้องพิสูจน์ที่ทางของตัวเองในธุรกิจคุณ แบบเดียวกับเครื่องมืออื่นๆ',

    hiwHoldHeading: 'สิ่งที่คุณเอามาวัดเราได้',
    hiwHold1: 'เราอธิบายกลไกให้เข้าใจก่อนจะแนะนำอะไรเสมอ',
    hiwHold2: 'ทุกอย่างที่เราเขียนกำกับไว้ว่าตรวจสอบแล้วหรือยังไม่ยืนยัน',
    hiwHold3: 'เราสร้างในบัญชีของคุณ และหลังส่งมอบเราไม่ถือสิทธิ์อะไรไว้เลย',
    hiwHold4: 'ถ้ายังไม่มีอันไหนที่เหมาะกับคุณตอนนี้ เราจะบอกตามนั้น',

    hiwClosingHeading: 'เริ่มจากหนึ่งชั่วโมง',
    hiwClosingBody: 'The Business Read คือขั้นแรก และเป็นขั้นเดียวที่คุณต้องคิดถึงในวันนี้ คุยกับเราหนึ่งชั่วโมง แล้วรับรายงานฉบับเขียนว่าควรเปลี่ยนอะไรก่อน',
    hiwLineNote: 'หรือทักมาใน LINE ไม่ต้องเตรียมอะไรมาก่อน',

    // =====================================================================================
    // EXAMPLES (/examples) — src/copy/examples.js, 22 keys
    // exHeroLead is the honesty block and is load-bearing: it says these are patterns, not
    // client stories, and that no results figures are attached. It is translated in full.
    // =====================================================================================
    exNavLink: 'ตัวอย่าง',

    exMetaTitle: 'ตัวอย่าง: ก่อนและหลัง พร้อมกลไกเบื้องหลัง | High Level Thai',
    exMetaDescription: 'สามรูปแบบที่เราเจอในธุรกิจบริการไทย และภาพธุรกิจก่อนกับหลังจากที่มีระบบเข้าไปแล้ว เป็นกลไก ไม่ใช่คำสัญญา',

    exHeroHeadline: 'อะไรเปลี่ยนไปจริงๆ และเปลี่ยนได้ยังไง',
    exHeroLead: 'นี่คือรูปแบบที่เราเจอซ้ำแล้วซ้ำอีกในธุรกิจบริการไทย ไม่ใช่เรื่องของลูกค้ารายใดรายหนึ่ง และไม่มีตัวเลขผลลัพธ์แนบมาด้วย สิ่งที่แต่ละข้อแสดงให้เห็นคือกลไก ว่าวันนี้ในธุรกิจเกิดอะไรขึ้น และอะไรเปลี่ยนไปเมื่อมีระบบเป็นตัวรับไว้ แทนที่จะเป็นคน',

    ex1Title: 'ลูกค้าที่ติดต่อเข้ามาแล้วไม่มีใครตอบ',
    ex1Now: 'ตอนนี้ ลูกค้าติดต่อเข้ามาทาง Facebook ทาง LINE และทางเว็บไซต์ แต่ละรายไปตกกับคนละคน ได้คำตอบคนละแบบ และไม่มีที่เดียวให้เข้าไปดู ไม่มีใครรู้ว่าสัปดาห์ที่แล้วมีเข้ามากี่ราย และไม่มีใครสังเกตว่ารายไหนเงียบหายไป',
    ex1After: 'หลังจากนั้น ทุกรายที่ติดต่อเข้ามาไปรวมอยู่ที่เดียวกัน ไม่ว่าจะมาจากช่องทางไหน แต่ละรายมีเจ้าของเรื่องและมีขั้นตอนต่อไปที่มีวันกำกับไว้ การติดตามเกิดขึ้นเพราะระบบเตือน ไม่ใช่เพราะมีใครนึกขึ้นได้',
    ex1Mechanism: 'กลไก ช่องทางไม่ได้เปลี่ยน สิ่งที่เปลี่ยนคือมีการสร้างบันทึกหนึ่งรายการทันทีที่ลูกค้าติดต่อเข้ามา และไม่มีอะไรค้างเงียบๆ ได้อีก เพราะเรื่องที่ไม่มีขั้นตอนต่อไป จะโผล่ขึ้นมาให้เห็นว่ามันไม่มีขั้นตอนต่อไป',

    ex2Title: 'คิวที่รออยู่หน้าห้องเจ้าของ',
    ex2Now: 'ตอนนี้ งานหยุดรอจนกว่าคุณจะบอกว่าโอเค ส่วนลด งานเพิ่ม วันหยุด หรือออเดอร์ที่เกินขนาดหนึ่ง ทีมงานไม่ได้ขี้เกียจ แต่เขาระวัง เพราะไม่มีใครเขียนไว้ว่าเขาตัดสินใจเองได้แค่ไหน',
    ex2After: 'หลังจากนั้น การตัดสินใจที่เกิดซ้ำๆ มีกฎกำกับ และกฎนั้นเขียนไว้ตรงที่ทีมงานทำงาน ไม่ใช่อยู่ในหัวคุณ เรื่องที่อยู่นอกกฎถึงจะมาถึงคุณ พร้อมข้อมูลที่รวบรวมมาให้แล้ว คำตอบจึงใช้เวลาหนึ่งนาที ไม่ใช่หนึ่งการประชุม',
    ex2Mechanism: 'กลไก ส่วนใหญ่ของเรื่องที่มาถึงเจ้าของไม่ใช่การใช้ดุลยพินิจ แต่เป็นกฎที่ยังไม่มีใครเขียนไว้ พอเขียนกฎลงไป คิวก็สั้นลง กำหนดเส้นว่าเรื่องแบบไหนต้องส่งขึ้นมาถึงคุณ แล้วสิ่งที่มาถึงคุณจะเหลือแต่เรื่องที่ต้องใช้คุณจริงๆ',

    ex3Title: 'ความรู้ที่เดินออกจากบริษัทตอนห้าโมงเย็น',
    ex3Now: 'ตอนนี้ คุณตั้งราคายังไง รับมือลูกค้าที่ยากยังไง การตรวจครั้งล่าสุดเจออะไร ทำไมซัพพลายเออร์รายนั้นถึงอยู่ในรายชื่อ มีคนเดียวที่รู้ พอคนนั้นลาหยุด ธุรกิจก็ช้าลง และพอคนนั้นลาออกไปเลย ความรู้นั้นก็หายไปด้วย',
    ex3After: 'หลังจากนั้น วิธีที่ธุรกิจทำสิ่งต่างๆ ถูกเขียนไว้และค้นหาได้ ใครก็หาคำตอบได้โดยไม่ต้องตามหาตัวคน พนักงานใหม่เรียนรู้จากบันทึก แทนที่จะเรียนจากการไปขัดจังหวะคนอื่น',
    ex3Mechanism: 'กลไก ความรู้ที่อยู่ในหัวคน ตรวจสอบไม่ได้ ปรับปรุงไม่ได้ และส่งต่อไม่ได้ ความรู้เดียวกันที่อยู่ในบันทึกที่ค้นหาได้ ทำได้ทั้งสามอย่าง ไม่มีอะไรถูกพรากไปจากคนที่รู้ เพียงแต่มันเลิกเป็นสำเนาเดียวที่มีอยู่',

    exUnderLine: 'ข้อไหนกำลังเกิดขึ้นในธุรกิจของคุณ และข้อไหนสำคัญที่สุด นั่นคือสิ่งที่ The Business Read มีไว้เพื่อตอบ',

    exClosingHeading: 'มาดูกันว่าข้อไหนคือของคุณ',
    exClosingBody: 'คุยกับเราหนึ่งชั่วโมง แล้วรับรายงานฉบับเขียนว่าธุรกิจพึ่งตัวคุณตรงไหน และควรเปลี่ยนอะไรก่อน คุณไม่มีข้อผูกมัดว่าต้องทำอะไรต่อ',
    exCtaLabel: 'เริ่มจาก The Business Read',
    exLineNote: 'หรือทักมาใน LINE ไม่ต้องเตรียมอะไรมาก่อน',

    // =====================================================================================
    // ABOUT (/about) — src/copy/about.js, 27 keys
    // abCompanyNameThai is Ian's own registered Thai company name and is carried byte-for-byte.
    // =====================================================================================
    aboutNavLink: 'เกี่ยวกับเรา',

    abMetaTitle: 'เกี่ยวกับ High Level Thai: เราเป็นใคร และทำงานยังไง',
    abMetaDescription: 'บริษัทไทยที่สร้างระบบปฏิบัติการให้ธุรกิจบริการ เราทำงานยังไง เราจะไม่ทำอะไร และใครเป็นคนรับผิดชอบงานนั้น',

    abHeroHeadline: 'เราทำงานยังไง และเราจะไม่ทำอะไร',
    abHeroLead: 'High Level Thai สร้างระบบปฏิบัติการให้ธุรกิจบริการในประเทศไทย เราเป็นบริษัทจดทะเบียนไทย และทำงานได้ทั้งภาษาอังกฤษและภาษาไทย ทุกข้อด้านล่างคือกฎที่เรายึดกับตัวเอง คุณจะได้ตัดสินเราจากมันได้ ก่อนที่จะจ่ายอะไร',

    abWhatHeading: 'เราทำอะไร',
    abWhatP1: 'เราช่วยให้ธุรกิจไทยเดินด้วยระบบ แทนที่จะเดินด้วยความจำของเจ้าของ',
    abWhatP2: 'ส่วนใหญ่เริ่มจากการอ่านธุรกิจก่อน ว่าอะไรทำให้ช้าลงจริงๆ มันทำให้เสียอะไรไปบ้าง และเรื่องไหนควรได้รับความสนใจก่อน ตรงไหนที่คำตอบต้องสร้างขึ้นมา เราก็สร้างให้ ในบัญชีของคุณ แล้วส่งมอบ',
    abWhatP3: 'เราทำงานกับธุรกิจบริการทั่วประเทศไทย รวมถึงหัวหินและกรุงเทพฯ',

    abHowHeading: 'เราทำงานยังไง',
    abHow1: 'เราอธิบายกลไกก่อนจะให้คำแนะนำ ถ้าเรายังบอกไม่ได้ว่าทำไมเรื่องนี้ถึงเกิดขึ้น แปลว่าเรายังดูไม่เสร็จ',
    abHow2: 'เรากำกับทุกอย่างไว้ว่าตรวจสอบแล้วหรือยังไม่ยืนยัน คุณไม่ควรต้องเดาว่าส่วนไหนของรายงานเช็กมาแล้วจริงๆ',
    abHow3: 'เราสร้างในบัญชีของคุณ ล็อกอินของคุณ ข้อมูลของคุณ โดเมนของคุณ เราเข้าไปทำงานในฐานะคนที่คุณเชิญเข้ามา และหลังส่งมอบเราไม่ถือสิทธิ์อะไรไว้เลย',
    abHow4: 'เราบอกคุณว่าอะไรที่คุณควรทำเอง ไม่ใช่ทุกเรื่องที่รายงานเจอจะคุ้มที่จะจ้างเราทำ และรายงานบอกไว้ว่าข้อไหนเป็นแบบไหน',
    abHow5: 'เราบอกตรงๆ เมื่อคำตอบคือไม่ ถ้ายังไม่มีอะไรในนี้ที่เหมาะกับธุรกิจของคุณตอนนี้ เราจะบอกคุณ และจบแค่นั้น',

    abWontHeading: 'เราจะไม่ทำอะไร',
    abWont1: 'เราจะไม่ขายระบบให้คุณก่อนที่จะได้อ่านธุรกิจ การวินิจฉัยเป็นตัวเลือกระบบ ไม่ใช่บทสนทนาการขาย',
    abWont2: 'เราจะไม่อ้างผลลัพธ์ที่เราแสดงให้ดูไม่ได้ เรายอมให้หน้านี้บางไว้ ดีกว่าทำให้มันน่าเชื่อเกินจริง',
    abWont3: 'เราจะไม่ยึดบัญชี ข้อมูล หรือโดเมนของคุณไว้เป็นตัวประกันหลังงานจบ',
    abWont4: 'เราจะไม่อ้างว่า AI เป็นคนตัดสิน AI ทำชั่วโมงงาน คนเป็นคนตัดสิน และคนคนนั้นรับผิดชอบต่อคุณ',

    // Company name, stays English exactly as registered on the English record.
    abCompanyName: 'High Level Thai Ltd.',
    // Ian's registered Thai company name, byte-for-byte from src/copy/about.js. Not a draft.
    abCompanyNameThai: 'บริษัท ไฮ เลเวล ไทย จำกัด',
    abCompanyRegistered: 'จดทะเบียนในประเทศไทย เลขทะเบียนนิติบุคคล 0835568013864',

    abClosingHeading: 'ตัดสินเราจากหนึ่งชั่วโมงแรก',
    abClosingBody: 'The Business Read เป็นวิธีที่ถูกที่สุดในการหาคำตอบว่าทุกข้อข้างบนจริงหรือเปล่า คุยกับเราหนึ่งชั่วโมง รับรายงานฉบับเขียนในวันที่นัดไว้ และไม่มีข้อผูกมัดหลังจากนั้น',
    abCtaLabel: 'เริ่มจาก The Business Read',
    abLineNote: 'หรือทักมาใน LINE ไม่ต้องเตรียมอะไรมาก่อน',

    // =====================================================================================
    // CONTACT (/contact) — src/copy/contact.js, 13 keys
    // The form's strings live in contactFormCopyHeld, are not spread into translations.js and
    // are therefore NOT translated here. A string outside the table cannot be rendered.
    // =====================================================================================
    contactNavLink: 'ติดต่อเรา',

    ctMetaTitle: 'ติดต่อ High Level Thai: ทาง LINE หรือฝากข้อความไว้',
    ctMetaDescription: 'ทักเราทาง LINE หรือเล่าให้ฟังสักเรื่องว่าส่วนไหนของธุรกิจยังไม่ดีอย่างที่ควรจะเป็น ไม่ต้องเตรียมอะไรมาก่อน',

    ctHeroHeadline: 'เล่าให้ฟังว่าตรงไหนยังไม่เวิร์ก',
    ctHeroLead: 'คุณไม่ต้องมีโจทย์ ไม่ต้องมีงบ และไม่ต้องมีแผน ก็คุยกับเราได้ บอกมาว่าอะไรทำให้ธุรกิจช้าลง แล้วเราจะบอกตรงๆ ว่าเป็นเรื่องที่เราช่วยได้หรือเปล่า',

    ctLineHeading: 'ทักเราทาง LINE',
    ctLineBody: 'เป็นช่องทางที่เร็วที่สุด และเป็นช่องทางที่บทสนทนาส่วนใหญ่ของเราเริ่มต้น เพิ่ม Official Account แล้วส่งข้อความมาได้เลย ไม่ต้องเตรียมอะไรมาก่อน',
    ctLineLabel: 'คุยกับเราทาง LINE',

    ctNextHeading: 'หลังจากนั้นเกิดอะไรขึ้น',
    ctNext1: 'เราอ่านสิ่งที่คุณส่งมา แล้วตอบกลับหาคุณ ไม่ใช่ตอบเข้าฟอร์ม',
    ctNext2: 'ถ้าฟังดูเป็นเรื่องที่เราช่วยได้ เราจะเสนอ The Business Read และบอกราคาให้ทราบ',
    ctNext3: 'ถ้าไม่ใช่ เราจะบอกตามนั้น และจบแค่นั้น',

    ctClosingLine: 'ไม่มีข้อผูกมัดทั้งสองทาง และไม่ต้องเตรียมอะไรมาก่อน',

    // =====================================================================================
    // CLIENT LOGIN (/client-login) — src/copy/clientLogin.js, 10 keys
    // The workspace's own messages live in clientLoginCopyHeld, are not spread into
    // translations.js and are therefore NOT translated here.
    // =====================================================================================
    clNavLink: 'เข้าสู่ระบบสำหรับลูกค้า',

    clMetaTitle: 'เข้าสู่ระบบสำหรับลูกค้า | High Level Thai',
    clMetaDescription: 'เข้าสู่ Client Workspace เพื่อดู The Business Read ของคุณ สิ่งที่รายงานเจอ ลำดับสิ่งที่ควรทำก่อน และความคืบหน้าของการติดตั้งระบบ',

    // Product name, stays English.
    clHeading: 'Client Workspace',
    clSubLine: 'เข้าสู่ระบบเพื่อดู The Business Read ของคุณ ว่ารายงานเจออะไร ควรทำอะไรก่อน และระบบของคุณไปถึงไหนแล้ว',

    clFieldEmail: 'อีเมล',
    clFieldPassword: 'รหัสผ่าน',
    clSubmitLabel: 'เข้าสู่ระบบ',

    clNotAClient: 'สิทธิ์เข้าใช้ Client Workspace ทาง HLT เป็นผู้ตั้งให้ตอนที่งานของคุณเริ่ม ถ้าคุณยังไม่ได้เป็นลูกค้า ที่นี่ไม่มีอะไรให้สมัคร',
    clBackLabel: 'กลับไปที่เว็บไซต์',
};
