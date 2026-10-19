// finish1019.js: Rich's finish list on the HLT preview (bridge row 4882, 19 October 2026), built by
// code-builder on brief 2026-10-19-code-builder-hlt-finish-1019.md (A-044, phase B).
//
// ONE MODULE, SPREAD LAST in both language blocks of src/translations.js, so it wins every key it
// names. Older modules keep their strings on disk (Ian's "do not delete"); only what a visitor reads
// changes.
//
// WHAT IT CARRIES, by Rich's priority group:
//   1 the opening journey: three problems a visitor recognises, each tied to the loss it causes
//     (Money lost, Time lost, Control lost: the existing leakOutcome1-3 labels, so there is one source
//     for those words), then the connected flow "your goal or problem, we look at what gets in the
//     way, one priority and a practical plan, you choose the next step", then one plain next-step line
//   2 a shorter hero lead (two short sentences)
//   3 the header's Contact action
//   4 the sample's logic: why the enquiry priority serves the weekday-room goal, what would show it,
//     and what is checked next. Faster replies alone are never said to fill the room.
//   5 symptom-first headings on Problems We Fix, the How It Works build detail behind a disclosure,
//     Examples' four stories as open-one-at-a-time, the Websites page's own button label and detail
//     disclosure, and the Hua Hin headline goal-first with CRM explained
//
// NOTHING INVENTED: no new price, time, result, client or guarantee. The fee is the one on main
// (THB 22,500 plus VAT). The two [IAN: ...] slots in improvements1019.js are untouched.
//
// THE THAI is code-builder's machine Thai, UNREVIEWED, for the native speaker's pass. Every key in
// finishTh mirrors a key in finishEn, and the consolidated report lists every one.

export const finishEn = {
    // ------------------------------------------------------------ 2. the hero, shorter
    homeHeroLead: "For owner-led businesses in Thailand. Tell us your goal. We'll find what's in the way and agree one practical plan.",

    // ------------------------------------------------------------ 1. three problems, each with its loss
    probHeading: 'Is any of this happening in your business?',
    prob1Name: "Customers find you, but the work doesn't arrive",
    prob1Body: 'People visit your website or send a message, then go quiet. Some enquiries get a late reply, and some get none.',
    prob1Loss: 'The work goes to a business that answered first.',
    prob2Name: 'You spend the day chasing',
    prob2Body: "You ask around to find out what's happening, and answer the same questions every week.",
    prob2Loss: 'Hours go on checking instead of running the business.',
    prob3Name: 'Everyday decisions come back to you',
    prob3Body: "Staff wait for your yes on small things, so work stops when you're busy or away.",
    prob3Loss: "The business only moves when you're there.",
    probLink: 'See how we help',

    // ------------------------------------------------------------ 1. the connected flow and the next step
    flowHeading: 'How we help',
    flow1Name: 'Your goal or problem',
    flow1Body: 'You tell us what you want to achieve, or what keeps going wrong.',
    flow2Name: 'We look at what gets in the way',
    flow2Body: 'Your marketing, your people and your systems. From the outside first, then with you.',
    flow3Name: 'One priority and a practical plan',
    flow3Body: 'We agree the one thing to fix first, and write down how to do it.',
    flow4Name: 'You choose the next step',
    flow4Body: 'Your team carries out the plan, or we help with the parts you choose.',
    flowNextLabel: 'Your next step',
    flowNextBody:
        'Ask for a 20-minute call. If the Business Read fits, it costs THB 22,500 plus VAT and ends with the agreed plan. Then your team carries it out, or we help with the parts you choose, agreed separately.',
    flowWebsiteLine: 'Only need a website? Talk to us about it directly.',

    // ------------------------------------------------------------ 3. the header's Contact action
    navContactCta: 'Contact us',
    navContactShort: 'Contact',

    // ------------------------------------------------------------ 4. the sample's logic
    whyHeading: 'Why this priority?',
    why1Label: 'Why the enquiries come first',
    why1Body:
        "The weekday room fills with new patients, and every new patient starts as an enquiry. All four 'fix first' notes sit where an enquiry is answered or handed on, so slow or lost replies are the most likely reason weekday slots stay empty.",
    why2Label: 'What would show it',
    why2Body:
        "Before anything changes, count one normal week: enquiries in, answered the same working day, and booked into a weekday slot. When many wait or go unanswered, the priority is right. If they're answered but don't book, we look again.",
    why3Label: 'What gets checked next',
    why3Body:
        "Every Friday, the same count, plus weekday room bookings and how many enquiries still needed the owner. Faster replies alone won't fill the room. The weekly count shows whether bookings follow.",
    plan6Action: 'Every Friday, count enquiries in, answered the same day, booked into a weekday slot, and how many needed the owner',

    // ------------------------------------------------------------ 5. Problems We Fix: the symptom leads
    m1Symptom: 'Enquiries go unanswered',
    m2Symptom: 'Quotes and invoices wait for someone to remember',
    m3Symptom: 'Small decisions wait for you',
    m4Symptom: 'You have to ask around to know how things are going',
    pwfCategoryLabel: 'We call this',

    // ------------------------------------------------------------ 5. How It Works: build detail behind a disclosure
    hiwBuildSummary: 'See how we build it',
    hiwBuildNote: 'For when you go ahead and build something after the plan: how a decision is handled, and how a build is delivered.',
    exception1: 'Everyday work',
    exception2: 'Simple rules you agree',
    exceptionContinue: 'The team carries on',
    exceptionEscalate: 'It goes to a manager or you',
    exceptionDecide: 'Owner or manager decides',
    exceptionRecord: 'The decision is written down',
    exceptionResume: 'Work carries on',

    // ------------------------------------------------------------ 5. Examples: open the one that fits
    exScenariosNote:
        "Illustrations, not client stories. Open the one closest to your business. 'What could change' describes a possible result, not a promised one.",

    // ------------------------------------------------------------ 5. Websites: its own button, detail folded
    capWebsitesCta: 'Talk to us about a website',
    capMoreDetail: 'More detail about website work',

    // ------------------------------------------------------------ 5. Hua Hin: the goal first, CRM explained
    huahinH1: "More of the right customers in Hua Hin, and a business that keeps going when you're away.",
    huahinLocalBody:
        'A CRM is one place for every customer, their messages and what happens next. It can work exactly as designed and still miss how a Thai business knows its customers: by nickname, by LINE chat, by a pin on Google Maps. We look for those gaps before adding another tool.',
};

export const finishTh = {
    homeHeroLead: 'สำหรับธุรกิจที่เจ้าของบริหารเองในประเทศไทย บอกเป้าหมายของคุณให้เราฟัง เราจะหาว่าอะไรขวางอยู่ แล้วตกลงแผนที่ทำได้จริงหนึ่งแผนร่วมกัน',

    probHeading: 'ธุรกิจของคุณเจอเรื่องเหล่านี้อยู่หรือเปล่า',
    prob1Name: 'ลูกค้าหาคุณเจอ แต่งานไม่เข้ามา',
    prob1Body: 'คนเข้ามาดูเว็บไซต์หรือส่งข้อความมา แล้วก็เงียบไป บางข้อความได้คำตอบช้า บางข้อความไม่ได้คำตอบเลย',
    prob1Loss: 'งานไปตกอยู่กับธุรกิจที่ตอบก่อน',
    prob2Name: 'ทั้งวันหมดไปกับการไล่ตาม',
    prob2Body: 'คุณต้องไล่ถามว่าเกิดอะไรขึ้นบ้าง และตอบคำถามเดิมซ้ำทุกสัปดาห์',
    prob2Loss: 'เวลาหมดไปกับการเช็กงาน แทนที่จะได้บริหารธุรกิจ',
    prob3Name: 'เรื่องประจำวันยังวนกลับมาที่คุณ',
    prob3Body: 'พนักงานรอให้คุณอนุมัติเรื่องเล็กๆ งานจึงหยุดเมื่อคุณยุ่งหรือไม่อยู่',
    prob3Loss: 'ธุรกิจขยับได้เฉพาะตอนที่คุณอยู่',
    probLink: 'ดูว่าเราช่วยอย่างไร',

    flowHeading: 'เราช่วยอย่างไร',
    flow1Name: 'เป้าหมายหรือปัญหาของคุณ',
    flow1Body: 'คุณเล่าว่าอยากไปถึงอะไร หรืออะไรที่ผิดพลาดซ้ำๆ',
    flow2Name: 'เราดูว่าอะไรขวางทางอยู่',
    flow2Body: 'การตลาด คน และระบบของคุณ เริ่มดูจากภายนอกก่อน แล้วค่อยดูร่วมกับคุณ',
    flow3Name: 'เรื่องสำคัญหนึ่งเรื่อง และแผนที่ทำได้จริง',
    flow3Body: 'เราตกลงเรื่องที่ต้องแก้ก่อนหนึ่งเรื่อง แล้วเขียนวิธีทำไว้ให้ชัด',
    flow4Name: 'คุณเลือกขั้นต่อไปเอง',
    flow4Body: 'ทีมของคุณลงมือตามแผน หรือให้เราช่วยในส่วนที่คุณเลือก',
    flowNextLabel: 'ขั้นต่อไปของคุณ',
    flowNextBody:
        'ขอนัดคุย 20 นาที ถ้า Business Read เหมาะกับคุณ ราคา 22,500 บาท ไม่รวมภาษีมูลค่าเพิ่ม และจบด้วยแผนที่ตกลงกัน จากนั้นทีมของคุณลงมือเอง หรือให้เราช่วยในส่วนที่คุณเลือก โดยตกลงกันแยกต่างหาก',
    flowWebsiteLine: 'ต้องการแค่เว็บไซต์? คุยกับเราเรื่องนั้นโดยตรงได้เลย',

    navContactCta: 'ติดต่อเรา',
    navContactShort: 'ติดต่อ',

    whyHeading: 'ทำไมถึงเป็นเรื่องนี้ก่อน',
    why1Label: 'ทำไมข้อความสอบถามต้องมาก่อน',
    why1Body:
        'ห้องทรีตเมนต์วันธรรมดาจะเต็มได้ด้วยคนไข้ใหม่ และคนไข้ใหม่ทุกคนเริ่มจากข้อความสอบถาม จุด "ต้องแก้ก่อน" ทั้งสี่จุดอยู่ตรงที่ข้อความถูกตอบหรือส่งต่อ การตอบช้าหรือตกหล่นจึงน่าจะเป็นสาเหตุหลักที่ช่วงวันธรรมดายังว่าง',
    why2Label: 'อะไรจะยืนยันเรื่องนี้',
    why2Body:
        'ก่อนเปลี่ยนอะไร นับหนึ่งสัปดาห์ปกติ: ข้อความที่เข้ามา ที่ได้คำตอบภายในวันทำการเดียวกัน และที่จองช่วงวันธรรมดา เมื่อมีหลายข้อความที่รอหรือไม่ได้คำตอบ แปลว่าเลือกถูก ถ้าตอบแล้วแต่ไม่จอง เราจะกลับไปดูใหม่',
    why3Label: 'อะไรที่จะตรวจต่อไป',
    why3Body:
        'ทุกวันศุกร์ นับแบบเดิม พร้อมจำนวนการจองห้องในวันธรรมดา และจำนวนข้อความที่ยังต้องรอเจ้าของ การตอบเร็วขึ้นอย่างเดียวไม่ได้ทำให้ห้องเต็ม ตัวเลขรายสัปดาห์จะบอกว่าการจองตามมาหรือไม่',
    plan6Action: 'ทุกวันศุกร์ นับข้อความที่เข้ามา ที่ตอบในวันเดียวกัน ที่จองช่วงวันธรรมดา และที่ต้องรอเจ้าของ',

    m1Symptom: 'ข้อความสอบถามไม่ได้รับคำตอบ',
    m2Symptom: 'ใบเสนอราคาและใบแจ้งหนี้รอให้มีคนนึกขึ้นได้',
    m3Symptom: 'เรื่องเล็กๆ ต้องรอคุณตัดสินใจ',
    m4Symptom: 'ต้องไล่ถามหลายคนถึงจะรู้ว่างานเป็นอย่างไร',
    pwfCategoryLabel: 'เราเรียกเรื่องนี้ว่า',

    hiwBuildSummary: 'ดูว่าเราสร้างงานอย่างไร',
    hiwBuildNote: 'สำหรับเมื่อคุณตัดสินใจสร้างอะไรต่อหลังจากได้แผน: การตัดสินใจถูกจัดการอย่างไร และงานถูกส่งมอบอย่างไร',
    exception1: 'งานประจำวัน',
    exception2: 'กติกาง่ายๆ ที่คุณตกลง',
    exceptionContinue: 'ทีมทำงานต่อได้เลย',
    exceptionEscalate: 'ส่งต่อให้ผู้จัดการหรือคุณ',
    exceptionDecide: 'เจ้าของหรือผู้จัดการตัดสินใจ',
    exceptionRecord: 'จดการตัดสินใจไว้',
    exceptionResume: 'งานเดินต่อ',

    exScenariosNote:
        'เป็นภาพตัวอย่าง ไม่ใช่เรื่องของลูกค้า เปิดดูเรื่องที่ใกล้กับธุรกิจของคุณที่สุด "สิ่งที่อาจเปลี่ยนไป" คือผลที่เป็นไปได้ ไม่ใช่ผลที่รับประกัน',

    capWebsitesCta: 'คุยกับเราเรื่องเว็บไซต์',
    capMoreDetail: 'รายละเอียดเพิ่มเติมเรื่องงานเว็บไซต์',

    huahinH1: 'ได้ลูกค้าที่ใช่มากขึ้นในหัวหิน และธุรกิจที่เดินต่อได้แม้คุณไม่อยู่',
    huahinLocalBody:
        'CRM คือที่เดียวที่เก็บลูกค้าทุกคน ข้อความของเขา และสิ่งที่ต้องทำต่อ ระบบอาจทำงานตรงตามที่ออกแบบไว้ทุกอย่าง แต่ก็ยังไม่ตรงกับวิธีที่ธุรกิจไทยรู้จักลูกค้า: จากชื่อเล่น จากแชต LINE จากหมุดใน Google Maps เรามองหาช่องว่างเหล่านี้ก่อนจะเพิ่มเครื่องมืออีกชิ้น',
};
