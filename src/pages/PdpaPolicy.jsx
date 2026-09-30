// PdpaPolicy.jsx — /pdpa. Built 30 September 2026 (bridge row 4007's footer_spec legal_links).
//
// PLACEHOLDER ONLY, per constraint (7) of the visibility-refresh brief: "pointing to placeholder
// pages that say 'coming soon' in plain words until Ian supplies or approves legal copy (no
// invented terms, privacy or PDPA text)." Nothing here is legal advice or a legal claim.
import { useLanguage } from '../context/LanguageContext';

const PdpaPolicy = () => {
    const { t } = useLanguage();

    return (
        <section className="pt-32 pb-20 min-h-screen">
            <title>{t('pdpaTitle')} | High Level Thai</title>
            <div className="container mx-auto px-6 max-w-3xl">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">{t('pdpaTitle')}</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300">{t('pdpaBody')}</p>
            </div>
        </section>
    );
};

export default PdpaPolicy;
