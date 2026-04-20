import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const content = {
    en: {
        title: 'Page not found',
        body: 'The page you requested is not available.',
        action: 'Return home'
    },
    th: {
        title: 'ไม่พบหน้าที่ต้องการ',
        body: 'หน้าที่คุณกำลังค้นหาไม่มีอยู่ในเว็บไซต์นี้',
        action: 'กลับสู่หน้าแรก'
    }
};

const NotFound = () => {
    const { language } = useLanguage();
    const page = content[language] || content.en;

    return (
        <section className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-6 max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">404</p>
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{page.title}</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">{page.body}</p>
                <Link
                    to="/"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold"
                >
                    {page.action}
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
