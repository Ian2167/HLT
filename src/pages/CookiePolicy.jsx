// CookiePolicy.jsx — /cookies and /en/cookies. Built 30 September 2026 (bridge row 4007's footer
// legal links). PLACEHOLDER ONLY, per constraint 7 of the visibility-refresh brief: "coming soon"
// in plain words, no invented legal text. Marked noindex until real text exists.
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_COOKIES } from '../constants/routes';
import Seo from '../components/Seo';

const CookiePolicy = () => {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen pb-20 pt-32">
            <Seo title={`${t('cookiesTitle')} | High Level Thai`} description={t('cookiesBody')} route={ROUTE_COOKIES} noindex />
            <div className="container mx-auto max-w-3xl px-6">
                <h1 className="mb-6 text-4xl font-bold text-slate-900">{t('cookiesTitle')}</h1>
                <p className="text-lg leading-8 text-slate-600">{t('cookiesBody')}</p>
            </div>
        </section>
    );
};

export default CookiePolicy;
