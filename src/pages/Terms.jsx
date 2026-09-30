// Terms.jsx — /terms and /en/terms. PLACEHOLDER since 30 September 2026, the visibility refresh
// (constraint 7 of the brief: the legal links point "to placeholder pages that say 'coming soon'
// in plain words until Ian supplies or approves legal copy (no invented terms, privacy or PDPA
// text)"). The three-paragraph terms text this page carried from April 2026 was never approved
// copy; its strings stay in src/translations.js and stop rendering. Marked noindex until real text
// exists.
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_TERMS } from '../constants/routes';
import Seo from '../components/Seo';

const Terms = () => {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen pb-20 pt-32">
            <Seo title={`${t('termsTitle')} | High Level Thai`} description={t('termsComingSoon')} route={ROUTE_TERMS} noindex />
            <div className="container mx-auto max-w-3xl px-6">
                <h1 className="mb-6 text-4xl font-bold text-slate-900">{t('termsTitle')}</h1>
                <p className="text-lg leading-8 text-slate-600">{t('termsComingSoon')}</p>
            </div>
        </section>
    );
};

export default Terms;
