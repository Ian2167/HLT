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
// "[IAN: ...]" marks a fact only Ian can supply. It is shown on the page on purpose, so nothing is
// guessed in the meantime.

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
    blindDeeperBody:
        'This test looks at how a customer finds you and gets in touch. The Business Read looks at the whole picture: what you want the business to achieve, and how your marketing, people and systems help or get in the way. It ends with one agreed priority and a practical plan.',

    // ------------------------------------------------------------ Owner Dependency: a lens, not a separate deliverable
    odClassLead:
        'Every way the business depends on you can be sorted into one of five groups. We use this sorting when owner dependence turns out to matter to your goals.',

    // ------------------------------------------------------------ capabilities: no "never before" rule
    capMethodLine:
        'We suggest a tool only once we know what it has to do. For most businesses that starts with the Business Read. If you already have a clear website brief, we can talk about a website project on its own.',
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
    blindDeeperBody:
        'แบบทดสอบนี้ดูว่าลูกค้าหาคุณเจอและติดต่อคุณได้อย่างไร ส่วน Business Read ดูภาพรวมทั้งหมด: คุณอยากให้ธุรกิจไปถึงอะไร และการตลาด คน และระบบช่วยหรือขวางทางอยู่ตรงไหน แล้วจบด้วยเรื่องสำคัญหนึ่งเรื่องที่ตกลงกันและแผนที่ทำได้จริง',

    odClassLead: 'ทุกเรื่องที่ธุรกิจพึ่งพาคุณ จัดได้เป็นหนึ่งในห้ากลุ่มนี้ เราใช้การจัดกลุ่มนี้เมื่อการพึ่งพาเจ้าของเป็นเรื่องสำคัญต่อเป้าหมายของคุณ',

    capMethodLine:
        'เราจะแนะนำเครื่องมือก็ต่อเมื่อรู้แล้วว่าเครื่องมือนั้นต้องทำอะไร สำหรับธุรกิจส่วนใหญ่ จุดเริ่มต้นคือ Business Read แต่ถ้าคุณมีโจทย์เรื่องเว็บไซต์ที่ชัดเจนอยู่แล้ว เราคุยเรื่องงานเว็บไซต์แยกต่างหากได้เลย',
};
