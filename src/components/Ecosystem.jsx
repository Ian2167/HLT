import { motion } from 'framer-motion';
import { Bot, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Ecosystem = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-white dark:bg-slate-950 transition-colors border-t border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12">

                    {/* RAG Agent Card */}
                    <div className="flex-1 bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-10 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <Bot className="w-12 h-12 text-indigo-400 mb-6" />
                        <h3 className="text-3xl font-bold mb-4">{t('ragAgentsTitle')}</h3>
                        <p className="text-indigo-200 mb-8 leading-relaxed max-w-sm">
                            {t('ragAgentsDesc')}
                        </p>
                        <div className="inline-flex items-center text-sm font-bold text-indigo-300">
                            {t('availableInEcosystem')}
                        </div>
                    </div>

                    {/* Website Card */}
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 relative overflow-hidden group">
                        <Globe className="w-12 h-12 text-slate-900 dark:text-white mb-6" />
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t('smartWebsitesTitle')}</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-sm">
                            {t('smartWebsitesDesc')}
                        </p>
                        <button className="px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold hover:shadow-md transition-all">
                            {t('viewTemplates')}
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
