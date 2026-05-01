import { useLanguage } from '../context/LanguageContext';

const Terms = () => {
    const { t } = useLanguage();

    return (
        <section className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-6 max-w-3xl">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">{t('termsTitle')}</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">{t('termsLead')}</p>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p>{t('termsBody1')}</p>
                    <p>{t('termsBody2')}</p>
                    <p>{t('termsBody3')}</p>
                </div>
            </div>
        </section>
    );
};

export default Terms;
