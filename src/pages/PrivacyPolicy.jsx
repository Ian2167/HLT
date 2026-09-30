// PrivacyPolicy.jsx — /privacy and /en/privacy. PLACEHOLDER since 30 September 2026, the
// visibility refresh (constraint 7 of the brief: "coming soon" in plain words, no invented privacy
// text). The three-paragraph text this page carried from April 2026 was never approved copy; its
// strings stay in src/translations.js and stop rendering. Marked noindex until real text exists.
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_PRIVACY } from '../constants/routes';
import Seo from '../components/Seo';

const PrivacyPolicy = () => {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen pb-20 pt-32">
            <Seo title={`${t('privacyTitle')} | High Level Thai`} description={t('privacyComingSoon')} route={ROUTE_PRIVACY} noindex />
            <div className="container mx-auto max-w-3xl px-6">
                <h1 className="mb-6 text-4xl font-bold text-slate-900">{t('privacyTitle')}</h1>
                <p className="text-lg leading-8 text-slate-600">{t('privacyComingSoon')}</p>
                <p className="mt-6 text-base leading-7 text-slate-500">{t('legalContactLine')}</p>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
