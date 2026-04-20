import { useLanguage } from '../context/LanguageContext';

const content = {
    en: {
        title: 'Terms',
        lead: 'All HLT projects are scoped and approved directly before work begins.',
        body: [
            'Website copy and example workflows on this site are marketing materials. Final deliverables, timelines, and support terms are confirmed during the project agreement.',
            'Client-provided content, access, and approvals may affect delivery timing. HLT will confirm scope changes before additional work is started.',
            'If you have a question about project terms, contact HLT before approving work.'
        ]
    },
    th: {
        title: 'เงื่อนไขการให้บริการ',
        lead: 'ทุกโครงการของ HLT จะมีการสรุปขอบเขตงานและยืนยันรายละเอียดก่อนเริ่มงานจริง',
        body: [
            'ข้อความและตัวอย่าง workflow บนเว็บไซต์นี้เป็นสื่อการตลาด โดยรายละเอียดงานจริง ระยะเวลา และเงื่อนไขการดูแล จะถูกยืนยันอีกครั้งในข้อตกลงโครงการ',
            'เนื้อหา การเข้าถึงระบบ และการอนุมัติจากลูกค้า อาจมีผลต่อระยะเวลาการส่งมอบ หากมีการเปลี่ยนขอบเขตงาน HLT จะยืนยันก่อนเริ่มงานเพิ่มเติม',
            'หากคุณมีคำถามเกี่ยวกับเงื่อนไขโครงการ กรุณาติดต่อ HLT ก่อนอนุมัติงาน'
        ]
    }
};

const Terms = () => {
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

export default Terms;
