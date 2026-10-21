// guidedHelp1021.js — the guided help inside the "Chat with us" button, EN and TH.
// code-builder, 21 October 2026, brief hlt-preview-check-1019 (reply to bridge row 4975).
//
// WHY THIS EXISTS. The owner, 21 October, afternoon Bangkok: "I decided to add as Guided for now".
// A guided helper, not AI: a fixed list of questions, each with a fixed answer, then LINE or
// WhatsApp. Rich's allowance (bridge row 4951): "A transparent guided FAQ assistant is acceptable as
// a no-API fallback if clearly labelled, not misrepresented as AI."
//
// WHERE EVERY ANSWER COMES FROM. Only C:\Projects\ea-desk\hlt\chatbot\HLT-CHATBOT-KNOWLEDGE-v0.1.md
// (the EA Desk's read of the live public site, 21 October), and never its email line. Each answer
// names the knowledge-file lines it is taken from (kb). Nothing here goes beyond those lines: no new
// price, client, result or claim. The only price is the Business Read's.
//
// LEFT OUT ON PURPOSE.
//   - The Fit Call's length. The knowledge file says "20 to 30 minute"; the site's newer copy says a
//     20-minute call (src/copy/improvements1019.js). The answer gives no length rather than pick one.
//   - Any booking. The helper never says a time is booked or a message sent: it tells the visitor to
//     message, and the message is theirs to send in their own app.
//   - A persona name, and the word "AI" in the helper's own label.
//
// THAI. Machine Thai for Ann's native read, as on every page since 18 October (offerRefreshTh1018.js).
// Where the site already says the same thing in Thai, its wording is reused and the key is named
// (thFrom). Every other Thai line here is new and is listed in the report for Ann.
export const GUIDED_HELP = {
    en: {
        heading: 'Guided help',
        note: 'Set answers taken from this website. Nothing you tap is sent.',
        pick: 'Choose a question',
        back: 'Back to questions',
        handoff: 'Anything else? Message us directly.',
        items: [
            {
                kb: 'line 8',
                q: 'What does High Level Thai do?',
                a: 'We help owner-led businesses find where money, time and decisions get stuck, then put simple controls in place so it stops happening. We start with the problem, not the software.',
            },
            {
                kb: 'line 6',
                q: 'Who do you work with?',
                a: 'Owner-led service businesses in Hua Hin and across Thailand: clinics, hotels and hospitality businesses, and professional services. High Level Thai Ltd is a company registered in Thailand.',
            },
            {
                kb: 'lines 23 to 27 and 30',
                q: 'What is the Business Read?',
                a: "Our starting point: a paid engagement that ends with a practical plan for the one thing that matters most. First, we review the business from the outside. Then there's an hour's online conversation with you, and up to 30 minutes with the manager closest to the work if you'd like. Together we agree the one priority, and you receive a step-by-step plan. If nothing is worth fixing, we say so.",
            },
            {
                kb: 'lines 28 to 30',
                q: 'What does the Business Read cost?',
                a: "THB 22,500, excluding 7% VAT. Implementation, ongoing support, hosting, software licences and marketing aren't included; these can be agreed separately, with no obligation. There's no obligation to buy anything after the Read.",
            },
            {
                kb: 'line 35',
                q: 'Is there a free first step?',
                a: "Yes, the Fit Call: a free conversation on Google Meet about what keeps getting chased, forgotten, delayed or brought back to you. Afterwards we say whether it's worth a closer look. There's no obligation and nothing to prepare. To arrange one, message us with a day and time that suits you, and we'll reply with a Google Meet link.",
            },
            {
                kb: 'lines 38 to 44',
                q: 'Do you build websites?',
                a: 'Yes. We build new websites and improve existing ones, planned around how customers find you and contact you. You own the domain and the website. Third-party costs such as hosting are shown before anything is agreed, and training is included. Website prices depend on scope and are quoted in writing after a conversation.',
            },
            {
                kb: 'lines 14 and 47',
                q: 'Where does AI fit?',
                a: 'AI is used to support a clearly defined process, not as a product in itself: for example, helping a team find written answers about the business, drafting, and research. AI helps; people stay in charge of decisions.',
            },
            {
                kb: 'line 32',
                q: 'Who sees my information?',
                a: 'Only the people working on your Business Read and the tools used to record, transcribe and write it up. Nothing is shared without your written agreement.',
            },
        ],
    },
    th: {
        heading: 'ตัวช่วยตอบคำถาม',
        note: 'คำตอบที่เตรียมไว้จากเนื้อหาในเว็บไซต์นี้ สิ่งที่คุณแตะจะไม่ถูกส่งไปที่ใด',
        pick: 'เลือกคำถาม',
        back: 'กลับไปที่คำถาม',
        handoff: 'มีคำถามอื่นไหม ส่งข้อความหาเราได้โดยตรง',
        items: [
            {
                q: 'High Level Thai ทำอะไร',
                // "เริ่มจากปัญหา ไม่ใช่ซอฟต์แวร์" reuses finalHeading (offerRefreshTh1018.js).
                a: 'เราช่วยธุรกิจที่เจ้าของบริหารเอง ค้นหาว่าเงิน เวลา และการตัดสินใจติดค้างอยู่ตรงไหน แล้ววางการควบคุมง่ายๆ เพื่อไม่ให้เกิดขึ้นอีก เราเริ่มจากปัญหา ไม่ใช่ซอฟต์แวร์',
            },
            {
                q: 'คุณทำงานกับธุรกิจแบบไหน',
                a: 'ธุรกิจบริการที่เจ้าของบริหารเอง ในหัวหินและทั่วประเทศไทย ได้แก่ คลินิก โรงแรมและธุรกิจด้านการต้อนรับ และธุรกิจบริการวิชาชีพ บริษัท ไฮ เลเวล ไทย จำกัด เป็นบริษัทที่จดทะเบียนในประเทศไทย',
            },
            {
                q: 'Business Read คืออะไร',
                // The last sentence reuses brHonest (offerRefreshTh1018.js).
                a: 'จุดเริ่มต้นของการทำงานกับเรา เป็นงานแบบมีค่าบริการ ที่จบด้วยแผนที่ทำได้จริงสำหรับเรื่องที่สำคัญที่สุด ขั้นแรก เราดูธุรกิจของคุณจากภายนอก จากนั้นคุยกับคุณออนไลน์หนึ่งชั่วโมง และหากคุณต้องการ คุยกับผู้จัดการที่ใกล้ชิดกับงานที่สุดไม่เกิน 30 นาที เราตกลงเรื่องสำคัญหนึ่งเรื่องร่วมกัน แล้วคุณจะได้รับแผนทีละขั้นตอน ถ้าไม่มีอะไรคุ้มที่จะแก้ เราจะบอกตรงๆ',
            },
            {
                q: 'Business Read ราคาเท่าไร',
                // The question reuses homeFaq1Q, the price reuses brSinglePriceLine, the list reuses
                // brExcludedBody (improvements1019.js, offerRefreshTh1018.js).
                a: '22,500 บาท ไม่รวมภาษีมูลค่าเพิ่ม 7% การลงมือดำเนินการ การดูแลต่อเนื่อง โฮสติ้ง ใบอนุญาตซอฟต์แวร์ และการตลาด ไม่ได้รวมอยู่ด้วย ตกลงกันแยกต่างหากได้ โดยไม่มีข้อผูกมัด และคุณไม่มีข้อผูกมัดที่ต้องซื้ออะไรหลัง Business Read',
            },
            {
                q: 'มีขั้นแรกที่ไม่มีค่าใช้จ่ายไหม',
                // "นัดคุยเบื้องต้น" is the site's Thai for the Fit Call; the list of four reuses
                // ctHeroLead; the last sentence follows ctBookByMessage (offerRefreshTh1018.js).
                a: 'มี คือนัดคุยเบื้องต้น คุยกันฟรีผ่าน Google Meet ว่าเรื่องไหนที่ต้องไล่ตาม ถูกลืม ล่าช้า หรือวนกลับมาหาคุณ หลังจากนั้นเราจะบอกว่าคุ้มที่จะดูให้ละเอียดขึ้นหรือไม่ ไม่มีข้อผูกมัด และไม่ต้องเตรียมอะไร หากต้องการนัด ส่งข้อความบอกวันและเวลาที่คุณสะดวก แล้วเราจะตอบกลับพร้อมลิงก์ Google Meet',
            },
            {
                q: 'คุณทำเว็บไซต์ไหม',
                // The ownership and hosting sentences follow websitesCapabilityTh.extra.ownBody.
                a: 'ทำ เราสร้างเว็บไซต์ใหม่และปรับปรุงเว็บไซต์เดิม โดยวางแผนจากวิธีที่ลูกค้าหาคุณเจอและติดต่อคุณ คุณเป็นเจ้าของโดเมนและเว็บไซต์ ค่าใช้จ่ายของบุคคลภายนอก เช่น โฮสติ้ง แสดงไว้ก่อนตกลงใดๆ และรวมการอบรมไว้ด้วย ราคาเว็บไซต์ขึ้นอยู่กับขอบเขตงาน และเสนอราคาเป็นลายลักษณ์อักษรหลังจากได้คุยกัน',
            },
            {
                q: 'AI เข้ามาช่วยตรงไหน',
                a: 'AI ใช้สนับสนุนกระบวนการที่กำหนดไว้ชัดเจน ไม่ใช่สินค้าในตัวเอง เช่น ช่วยให้ทีมหาคำตอบที่เขียนไว้เกี่ยวกับธุรกิจ ช่วยร่าง และช่วยค้นคว้า AI เป็นผู้ช่วย ส่วนการตัดสินใจยังอยู่ในมือคน',
            },
            {
                q: 'ใครเห็นข้อมูลของฉันบ้าง',
                // Follows brFaq5A (offerRefreshTh1018.js).
                a: 'เฉพาะคนที่ทำ Business Read ของคุณ และเครื่องมือที่ใช้บันทึก ถอดความ และเขียนสรุป จะไม่มีการแบ่งปันข้อมูลใดๆ โดยไม่ได้รับความยินยอมเป็นลายลักษณ์อักษรจากคุณ',
            },
        ],
    },
};
