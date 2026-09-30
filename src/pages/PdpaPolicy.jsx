// PdpaPolicy.jsx — /pdpa and /en/pdpa. Built 30 September 2026 (bridge row 4007's footer legal
// links). PLACEHOLDER ONLY, per constraint 7 of the visibility-refresh brief: "coming soon" in
// plain words, no invented legal text. Nothing here is legal advice or a legal claim. Marked
// noindex until real text exists.
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_PDPA } from '../constants/routes';
import Seo from '../components/Seo';

const PdpaPolicy = () => {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen pb-20 pt-32">
            <Seo title={`${t('pdpaTitle')} | High Level Thai`} description={t('pdpaBody')} route={ROUTE_PDPA} noindex />
            <div className="container mx-auto max-w-3xl px-6">
                <h1 className="mb-6 text-4xl font-bold text-slate-900">{t('pdpaTitle')}</h1>
                <p className="text-lg leading-8 text-slate-600">{t('pdpaBody')}</p>
                <p className="mt-6 text-base leading-7 text-slate-500">{t('legalContactLine')}</p>
            </div>
        </section>
    );
};

export default PdpaPolicy;
