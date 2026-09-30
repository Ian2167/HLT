import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_HOME } from '../constants/routes';
import Seo from '../components/Seo';

// 30 September 2026: the head is set through Seo and marked noindex; the way home keeps the
// visitor's language.
const NotFound = () => {
    const { t, lp } = useLanguage();

    return (
        <section className="min-h-screen pb-20 pt-32">
            <Seo title={`${t('notFoundTitle')} | High Level Thai`} description={t('notFoundBody')} route={ROUTE_HOME} noindex />
            <div className="container mx-auto max-w-3xl px-6 text-center">
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600">404</p>
                <h1 className="mb-4 text-4xl font-bold text-slate-900">{t('notFoundTitle')}</h1>
                <p className="mb-8 text-lg text-slate-600">{t('notFoundBody')}</p>
                <Link
                    to={lp(ROUTE_HOME)}
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white"
                >
                    {t('notFoundAction')}
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
