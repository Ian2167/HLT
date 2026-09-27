// newDirection.js — the keep, transfer, remove layer and the five fixes, 27 September 2026.
//
// Every value below is lifted VERBATIM from the SENDABLE blocks of the copy pack at
//   C:\Projects\hlt-estate\02-builds\hlt-site-kit\copy\2026-09-27-new-direction.md
// and checked against it by script before commit. Change the pack first, then this file.
//
// Ian's rulings, 27 September 2026: "Go proceed with Fix" and "Agreed" to the keep, transfer,
// remove layer. Hard rule the same day: nothing here names Ian, or anyone.
//
// `newDirectionCopy` is spread LAST in the `en` block of src/translations.js and
// `newDirectionTh` LAST in the `th` block, so both win over the 18 September modules for the
// one key they share (exMetaDescription, "Three patterns" becoming "Four").
//
// THE THAI IS AN UNREVIEWED MACHINE DRAFT, written by the model under Ian's Route 2 exception of
// 15 September 2026. Ann reviews every line before this branch goes live.
export const newDirectionCopy = {
    // B1: under the hero headline
    homeHeroKeepLine: 'Keep the judgement. Remove the dependency.',

    // B2: the home band after the owner's-week problem section
    homeKtrHeading: 'Three kinds of dependency, three different answers',
    homeKtrLead: 'We sort every way the business depends on you into one of three, and treat each one differently.',
    homeKtr1Name: 'Keep',
    homeKtr1Body: 'The judgement that makes the business yours: reading a client, a negotiation, the call nobody else should make. We protect it.',
    homeKtr2Name: 'Transfer',
    homeKtr2Body: 'What you know that others could learn: the questions you ask, the warning signs you spot, which suppliers to trust. We capture it where your team works.',
    homeKtr3Name: 'Remove',
    homeKtr3Body: 'What only reaches you because nothing else catches it: chasing, answering the same question again, finding old information. We build the system that takes it off you.',
    homeKtrClosing: "The aim isn't fewer people. It's your judgement spent where it counts.",

    // B3: the Business Read's sixth deliverable
    brReceive6: "A first dependency map: what should stay yours, what can be taught, and what shouldn't need you at all.",

    // B4: the fourth example
    ex4Title: 'The call that should stay yours',
    ex4Now: "Now. Everything reaches you, so the big decisions get the same rushed minute as the small ones. A long-standing client's renegotiation waits behind a stationery order.",
    ex4After: 'After. Routine requests are handled without you. Uncertain ones reach your team with the history attached. Only the calls that need your judgement come to you, with the facts already gathered.',
    ex4Mechanism: 'The mechanism. Green, amber, red. The system handles green, supports a person on amber, and brings red to you. Nothing is taken from your judgement: you get the time to use it.',
    exMetaDescription: 'Four patterns we see in Thai service businesses, and what the business looks like before and after the system is in place. Mechanism, not promises.',

    // A3 and A4: the sample written read
    brMockTitle: 'The written read',
    brMockMeta: 'one page',
    brMockProblemLabel: 'The named problem',
    brMockProblem: 'Most of what waits for the owner is a routine decision nobody has written a rule for.',
    brMockEvidenceLabel: 'The evidence behind it',
    brMockEv1: 'Questions that reached the owner in one week, by type',
    brMockEv2: 'Which of them already had a rule anyone could follow',
    brMockEv3: 'Why the rest were never written down',
    brMockVerified: 'verified',
    brMockNotEstablished: 'not established',
    brMockNextLabel: 'What to do next, sorted',
    brMockNext1: 'Write the discount and day-off rules where the staff work',
    brMockNext2: 'Record how the owner prices unusual jobs',
    brMockNext3: 'Keep the final say on the largest client relationships',
    brMockTagRemove: 'remove',
    brMockTagTransfer: 'transfer',
    brMockTagKeep: 'keep',
};

export const newDirectionTh = {
    homeHeroKeepLine: 'เก็บดุลยพินิจไว้กับคุณ ตัดการพึ่งพาที่ไม่จำเป็นออก',

    homeKtrHeading: 'การพึ่งพาสามแบบ คำตอบสามแบบ',
    homeKtrLead: 'เราแยกทุกเรื่องที่ธุรกิจพึ่งตัวคุณออกเป็นสามแบบ แล้วจัดการแต่ละแบบต่างกัน',
    homeKtr1Name: 'เก็บไว้',
    homeKtr1Body: 'ดุลยพินิจที่ทำให้ธุรกิจนี้เป็นของคุณ การอ่านลูกค้า การต่อรอง และการตัดสินใจที่ไม่ควรให้ใครทำแทน เราปกป้องส่วนนี้ไว้',
    homeKtr2Name: 'ส่งต่อ',
    homeKtr2Body: 'สิ่งที่คุณรู้และคนอื่นเรียนรู้ได้ คำถามที่คุณถาม สัญญาณเตือนที่คุณสังเกตเห็น ซัพพลายเออร์รายไหนไว้ใจได้ เราเก็บมันไว้ตรงที่ทีมงานทำงาน',
    homeKtr3Name: 'ตัดออก',
    homeKtr3Body: 'เรื่องที่มาถึงคุณเพียงเพราะไม่มีอะไรรับไว้ การตามงาน การตอบคำถามเดิมซ้ำ การค้นหาข้อมูลเก่า เราสร้างระบบที่ยกเรื่องเหล่านี้ออกไปจากคุณ',
    homeKtrClosing: 'เป้าหมายไม่ใช่การลดคน แต่คือการให้ดุลยพินิจของคุณได้ใช้ในเรื่องที่สำคัญจริงๆ',

    brReceive6: 'แผนภาพการพึ่งพาฉบับแรก ว่าเรื่องไหนควรอยู่กับคุณ เรื่องไหนสอนต่อได้ และเรื่องไหนไม่ควรต้องใช้คุณเลย',

    ex4Title: 'เรื่องที่ควรเป็นการตัดสินใจของคุณ',
    ex4Now: 'ตอนนี้ ทุกเรื่องมาถึงคุณ เรื่องใหญ่จึงได้เวลาเร่งรีบเท่ากับเรื่องเล็ก การต่อรองใหม่กับลูกค้าเก่าแก่ต้องรอคิวต่อจากใบสั่งซื้อเครื่องเขียน',
    ex4After: 'หลังจากนั้น เรื่องประจำจัดการได้โดยไม่ต้องผ่านคุณ เรื่องที่ไม่แน่ใจไปถึงทีมงานพร้อมประวัติที่เกี่ยวข้อง และมีแต่เรื่องที่ต้องใช้ดุลยพินิจของคุณจริงๆ ที่มาถึงคุณ พร้อมข้อมูลที่รวบรวมมาให้แล้ว',
    ex4Mechanism: 'กลไก เขียว เหลือง แดง ระบบจัดการเรื่องสีเขียว ช่วยคนตัดสินใจในเรื่องสีเหลือง และส่งเรื่องสีแดงมาถึงคุณ ไม่มีอะไรถูกพรากไปจากดุลยพินิจของคุณ คุณแค่ได้เวลาไว้ใช้มัน',
    exMetaDescription: 'สี่รูปแบบที่เราเจอในธุรกิจบริการไทย และภาพธุรกิจก่อนกับหลังจากที่มีระบบเข้าไปแล้ว เป็นกลไก ไม่ใช่คำสัญญา',

    brMockTitle: 'รายงานฉบับเขียน',
    brMockMeta: 'หนึ่งหน้า',
    brMockProblemLabel: 'ปัญหาที่ระบุชัด',
    brMockProblem: 'เรื่องส่วนใหญ่ที่รอเจ้าของอยู่ คือการตัดสินใจประจำที่ยังไม่มีใครเขียนกฎไว้',
    brMockEvidenceLabel: 'หลักฐานเบื้องหลัง',
    brMockEv1: 'คำถามที่มาถึงเจ้าของในหนึ่งสัปดาห์ แยกตามประเภท',
    brMockEv2: 'ข้อไหนมีกฎที่ใครก็ทำตามได้อยู่แล้ว',
    brMockEv3: 'ทำไมที่เหลือถึงไม่เคยถูกเขียนไว้',
    brMockVerified: 'ตรวจสอบแล้ว',
    brMockNotEstablished: 'ยังไม่ยืนยัน',
    brMockNextLabel: 'ขั้นต่อไป แยกตามประเภท',
    brMockNext1: 'เขียนกฎเรื่องส่วนลดและวันลาไว้ตรงที่ทีมงานทำงาน',
    brMockNext2: 'บันทึกไว้ว่าเจ้าของตั้งราคางานที่ไม่ปกติยังไง',
    brMockNext3: 'เก็บการตัดสินใจสุดท้ายเรื่องลูกค้ารายใหญ่ไว้กับเจ้าของ',
    brMockTagRemove: 'ตัดออก',
    brMockTagTransfer: 'ส่งต่อ',
    brMockTagKeep: 'เก็บไว้',
};
