import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const NotFound = () => {
    const { t } = useLanguage();

    return (
        <section className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-6 max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">404</p>
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('notFoundTitle')}</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">{t('notFoundBody')}</p>
                <Link
                    to="/"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold"
                >
                    {t('notFoundAction')}
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
