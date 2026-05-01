export const aiosDiagnosticCopy = {
    heroEyebrow: '',
    heroTitle: 'ลูกค้าหายไปตอนไหนในธุรกิจของคุณ? (When are customers disappearing in your business?)',
    heroSubtitle: 'ตอบ 15 ข้อสั้น ๆ แล้วดูว่าลูกค้าหลุดตรงไหน (Answer 15 short questions and see where customers drop off)',
    explanationTitle: 'ตอบตามสิ่งที่เกิดขึ้นจริงในร้านคุณ (Answer based on what actually happens in your business)',
    explanationBody: '',
    progressLabel: 'ตอบแล้ว (Answered)',
    scoreLabel: 'คะแนนรวม (Total score)',
    yesLabel: 'ใช่ (Yes)',
    noLabel: 'ไม่ใช่ (No)',
    resultTitle: 'ผลลัพธ์ของคุณ (Your result)',
    scoreSummary: 'คุณได้ {score} / 15 คะแนน (You scored {score} / 15)',
    incompleteTitle: 'ตอบให้ครบก่อน แล้วดูผลลัพธ์ของคุณ (Complete all questions to see your result)',
    incompleteBody: 'ตอบครบ 15 ข้อแล้ว จุดที่ลูกค้าหลุดจะขึ้นตรงนี้ (Finish all 15 questions and the drop-off points will appear here)',
    diagnosisTitle: 'ลูกค้ากำลังหลุดในจุดเหล่านี้: (Customers are dropping off at these points:)',
    topLeaksTitle: 'จุดที่ลูกค้าหลุดมากสุด 3 ข้อ (Top 3 leak points)',
    noLeaksTitle: 'ยังไม่เจอจุดที่ลูกค้าหลุดชัด ๆ (No clear drop-off point appears yet)',
    noLeaksBody: 'ภาพรวมค่อนข้างดีแล้ว เหลือดูรายละเอียดหน้างานจริงอีกนิด (Overall this looks strong. A closer look at the real workflow is the next step)',
    lineCtaTitle: 'อยากรู้ว่าควรแก้ตรงไหนก่อน? (Want to know what to fix first?)',
    lineCtaBody: 'ส่งผลลัพธ์นี้ใน LINE แล้วเราจะช่วยดูให้ (Send this result on LINE and we will review it with you)',
    lineCtaButton: 'คุยทาง LINE (Chat on LINE)',
    resetButton: 'เริ่มใหม่ (Start over)',
};

export const resultBands = [
    {
        min: 0,
        max: 5,
        label: 'รั่วหนัก (Critical leakage)',
        summary: 'ลูกค้าหลุดหลายช่วงจนเสียงานไปง่าย (Customers are slipping away at several stages)',
        tone: 'red',
    },
    {
        min: 6,
        max: 10,
        label: 'รั่วปานกลาง (Moderate leakage)',
        summary: 'ยังมีบางช่วงที่ทำให้ลูกค้าหายไป (Some stages are still causing customers to drop off)',
        tone: 'amber',
    },
    {
        min: 11,
        max: 15,
        label: 'คุมได้ดี แต่ยังไปได้อีก (Controlled but optimisable)',
        summary: 'ภาพรวมดีแล้ว แต่ยังมีจุดให้เก็บอีกนิด (The overall journey is strong, with a few places to tighten)',
        tone: 'emerald',
    },
];

export const diagnosticNiches = {
    acServices: {
        label: 'ร้านแอร์ (AC services)',
        stages: [
            {
                id: 'discovery',
                label: 'การเจอร้าน (Discovery)',
                questions: [
                    {
                        id: 'localSearchConfidence',
                        text: 'ลูกค้าเห็นร้านคุณแล้ว แต่ยังไม่ทัก LINE (Customers see your business, but do not message on LINE)',
                        leak: 'หน้าร้านยังพาไปทัก LINE ไม่ชัดพอ (Your storefront is not clearly moving people into LINE)',
                    },
                    {
                        id: 'serviceAreaClarity',
                        text: 'ลูกค้าอยู่ในพื้นที่คุณแล้ว แต่ยังไม่แน่ใจว่าคุณรับไหม (Customers are in your area, but are still not sure you cover it)',
                        leak: 'พื้นที่รับงานยังไม่ชัด (Your service area is still unclear)',
                    },
                    {
                        id: 'proofBeforeContact',
                        text: 'ลูกค้าอยากดูผลงานแล้ว แต่หารูปงานหรือรีวิวไม่เจอ (Customers want to see your work, but cannot find photos or reviews)',
                        leak: 'รูปงานและรีวิวยังหาไม่เจอง่าย (Photos and reviews are still hard to find)',
                    },
                ],
            },
            {
                id: 'response',
                label: 'การตอบกลับ (Response)',
                questions: [
                    {
                        id: 'missedFirstMessage',
                        text: 'ลูกค้าทัก LINE มาแล้ว แต่คุณตอบไม่ทัน (Customers message on LINE, but you do not reply in time)',
                        leak: 'การตอบ LINE ครั้งแรกยังช้า (Your first LINE response is still too slow)',
                    },
                    {
                        id: 'missedCalls',
                        text: 'ลูกค้าโทรมาแล้ว แต่ไม่มีใครรับสาย (Customers call, but nobody answers)',
                        leak: 'สายโทรเข้ายังหลุดอยู่ (Incoming calls are still being missed)',
                    },
                    {
                        id: 'repeatQuestions',
                        text: 'ลูกค้าถามเรื่องเดิมใน LINE แล้ว แต่ทีมยังต้องตอบซ้ำทุกวัน (Customers ask the same things on LINE, but the team still answers them repeatedly every day)',
                        leak: 'ทีมยังเสียเวลาตอบเรื่องเดิมใน LINE (The team is still losing time answering the same questions on LINE)',
                    },
                ],
            },
            {
                id: 'conversion',
                label: 'การตัดสินใจ (Conversion)',
                questions: [
                    {
                        id: 'unclearNextStep',
                        text: 'ลูกค้าสนใจแล้ว แต่ยังไม่รู้ว่าต้องทำอะไรต่อ (Customers are interested, but still do not know what to do next)',
                        leak: 'ขั้นตอนต่อไปยังไม่ชัด (The next step is still unclear)',
                    },
                    {
                        id: 'quoteDelay',
                        text: 'ลูกค้าขอดูราคาแล้ว แต่ใบเสนอราคายังส่งช้า (Customers ask for pricing, but the quote still arrives late)',
                        leak: 'ใบเสนอราคายังช้าเกินไป (The quote is still arriving too late)',
                    },
                    {
                        id: 'followUpGap',
                        text: 'ลูกค้าถามราคาแล้ว แต่หายไป (Customers ask about price, but then disappear)',
                        leak: 'หลังคุยราคาแล้วยังตามต่อไม่พอ (Follow-up after pricing is still too weak)',
                    },
                ],
            },
            {
                id: 'delivery',
                label: 'การส่งมอบงาน (Delivery)',
                questions: [
                    {
                        id: 'arrivalUncertainty',
                        text: 'ถึงวันนัด ลูกค้าต้องทักมาถามว่าช่างอยู่ไหน (On appointment day, customers have to message to ask where the technician is)',
                        leak: 'ลูกค้ายังไม่เห็นความคืบหน้าก่อนช่างถึง (Customers still cannot see progress before the technician arrives)',
                    },
                    {
                        id: 'jobScopeConfusion',
                        text: 'ถึงหน้างานแล้ว ลูกค้ายังไม่เข้าใจว่าราคานี้รวมอะไร (On site, the customer still does not understand what is included in the price)',
                        leak: 'ขอบเขตงานยังไม่ชัดก่อนเริ่ม (The job scope is still unclear before work starts)',
                    },
                    {
                        id: 'completionProof',
                        text: 'ทำงานเสร็จแล้ว จบเลย ไม่มีการทักลูกค้าต่อ (After the job is done, it just ends, with no follow-up message)',
                        leak: 'หลักฐานหลังจบงานใน LINE ยังไม่แน่นพอ (Completion proof in LINE is still not strong enough)',
                    },
                ],
            },
            {
                id: 'retention',
                label: 'การกลับมาใช้ซ้ำ (Retention)',
                questions: [
                    {
                        id: 'serviceReminder',
                        text: 'ลูกค้าเคยใช้บริการแล้ว แต่ไม่กลับมาอีก (Customers have used the service before, but do not come back again)',
                        leak: 'ลูกค้าเก่ายังไม่ถูกดึงกลับมา (Past customers are still not being brought back)',
                    },
                    {
                        id: 'reviewCapture',
                        text: 'ลูกค้าพอใจแล้ว แต่คุณยังไม่ได้ขอรีวิว (Customers are happy, but you still do not ask for a review)',
                        leak: 'รีวิวดี ๆ ยังหลุดไปหลังจบงาน (Good reviews are still being lost after the job)',
                    },
                    {
                        id: 'oldCustomerReactivation',
                        text: 'ลูกค้าเคยคุยไว้แล้ว แต่ยังไม่มีใครทักกลับไป (Customers have talked with you before, but nobody has followed up with them)',
                        leak: 'คนที่เคยสนใจยังไม่ได้ถูกทักกลับ (People who were interested are still not being followed up)',
                    },
                ],
            },
        ],
    },
};
