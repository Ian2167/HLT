import { useLanguage } from '../context/LanguageContext';

const content = {
    en: {
        title: 'Privacy Policy',
        lead: 'HighLevelThai only collects the information needed to respond to enquiries and deliver services.',
        body: [
            'If you contact HLT, we may store the details you share so we can reply, scope your project, and provide support.',
            'We do not sell your information. Project details are only used to deliver services, improve operations, and meet legal obligations.',
            'If you want your enquiry data updated or removed, contact HLT directly through the active contact channel provided on this site.'
        ]
    },
    th: {
        title: 'นโยบายความเป็นส่วนตัว',
        lead: 'HighLevelThai จะเก็บเฉพาะข้อมูลที่จำเป็นต่อการตอบกลับลูกค้าและการให้บริการเท่านั้น',
        body: [
            'หากคุณติดต่อ HLT เราอาจจัดเก็บข้อมูลที่คุณส่งมาเพื่อใช้ในการตอบกลับ ประเมินงาน และดูแลการให้บริการ',
            'เราไม่ขายข้อมูลของคุณ รายละเอียดโครงการจะถูกใช้เพื่อการให้บริการ ปรับปรุงการดำเนินงาน และปฏิบัติตามข้อกฎหมายเท่านั้น',
            'หากต้องการแก้ไขหรือลบข้อมูลที่ส่งมา กรุณาติดต่อ HLT ผ่านช่องทางติดต่อหลักของเว็บไซต์นี้'
        ]
    }
};

const PrivacyPolicy = () => {
    const { language } = useLanguage();
    const page = content[language] || content.en;

    return (
        <section className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-6 max-w-3xl">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">{page.title}</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">{page.lead}</p>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                    {page.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
