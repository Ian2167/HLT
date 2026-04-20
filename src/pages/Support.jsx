import { useLanguage } from '../context/LanguageContext';
import { CONTACT_URL } from '../constants/contact';

const content = {
    en: {
        title: 'Support',
        lead: 'HLT handles project communication directly so questions can be resolved quickly.',
        body: [
            'If you are an existing client, use your current HLT project channel for implementation questions, revisions, or support requests.',
            'If you are a new enquiry, contact HLT directly on LINE using the button below.'
        ]
    },
    th: {
        title: 'ติดต่อฝ่ายสนับสนุน',
        lead: 'HLT ดูแลการสื่อสารของโครงการโดยตรง เพื่อให้ตอบคำถามและแก้ไขงานได้รวดเร็ว',
        body: [
            'หากคุณเป็นลูกค้าปัจจุบัน กรุณาติดต่อผ่านช่องทางโครงการที่ใช้อยู่สำหรับคำถาม การแก้ไขงาน หรือการขอความช่วยเหลือ',
            'หากคุณเป็นผู้ติดต่อใหม่ กรุณาใช้ปุ่มติดต่อหลักของเว็บไซต์นี้หลังจากกำหนดช่องทางติดต่อสำหรับการ deploy แล้ว'
        ]
    }
};

const Support = () => {
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
                <a
                    href={CONTACT_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold"
                >
                    LINE
                </a>
            </div>
        </section>
    );
};

export default Support;
