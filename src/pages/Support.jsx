import { useLanguage } from '../context/LanguageContext';
import { CONTACT_URL } from '../constants/contact';

const Support = () => {
    const { t } = useLanguage();

    return (
        <section className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-6 max-w-3xl">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">{t('supportTitle')}</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">{t('supportLead')}</p>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p>{t('supportBody1')}</p>
                    <p>{t('supportBody2')}</p>
                </div>
                <a
                    href={CONTACT_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold"
                >
                    {t('lineLabel')}
                </a>
            </div>
        </section>
    );
};

export default Support;
