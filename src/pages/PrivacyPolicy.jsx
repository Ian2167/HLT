import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicy = () => {
    const { t } = useLanguage();

    return (
        <section className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-6 max-w-3xl">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">{t('privacyTitle')}</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">{t('privacyLead')}</p>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p>{t('privacyBody1')}</p>
                    <p>{t('privacyBody2')}</p>
                    <p>{t('privacyBody3')}</p>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
