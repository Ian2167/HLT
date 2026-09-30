// CookiePolicy.jsx — /cookies. Built 30 September 2026 (bridge row 4007's footer_spec legal_links).
//
// PLACEHOLDER ONLY, per constraint (7) of the visibility-refresh brief: "coming soon" in plain
// words, no invented legal text.
import { useLanguage } from '../context/LanguageContext';

const CookiePolicy = () => {
    const { t } = useLanguage();

    return (
        <section className="pt-32 pb-20 min-h-screen">
            <title>{t('cookiesTitle')} | High Level Thai</title>
            <div className="container mx-auto px-6 max-w-3xl">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">{t('cookiesTitle')}</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300">{t('cookiesBody')}</p>
            </div>
        </section>
    );
};

export default CookiePolicy;
