import { motion } from 'framer-motion';
import { Layout, Search, Zap, Gauge, ArrowRight, Layers, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import cardWeb from '../assets/card-web.png';

const Websites = () => {
    const { t } = useLanguage();

    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                            {t('notJustAnother')} <span className="text-indigo-600">{t('wordpressTemplate')}</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
                            {t('websitesHeroDesc')}
                        </p>

                        {/* Hero Image Card */}
                        <div className="relative max-w-4xl mx-auto mt-12">
                            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-2xl blur opacity-20 dark:opacity-40"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                                <img src={cardWeb} alt="High Performance Websites" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Performance Stats */}
            <section className="py-16 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Text Side */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{t('speedWinsDeals')}</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                                {t('speedWinsDealsDesc')}
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                                        <Zap />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white">{t('pageSpeedTitle')}</h3>
                                        <p className="text-sm text-slate-500">{t('pageSpeedDesc')}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <Search />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white">{t('seoNativeTitle')}</h3>
                                        <p className="text-sm text-slate-500">{t('seoNativeDesc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Side (Mockup of Score) */}
                        <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center shadow-sm">
                                    <div className="text-4xl font-bold text-green-500 mb-2">99</div>
                                    <div className="text-sm text-slate-400">{t('performance')}</div>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center shadow-sm">
                                    <div className="text-4xl font-bold text-green-500 mb-2">100</div>
                                    <div className="text-sm text-slate-400">{t('accessibility')}</div>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center shadow-sm">
                                    <div className="text-4xl font-bold text-green-500 mb-2">100</div>
                                    <div className="text-sm text-slate-400">{t('bestPractices')}</div>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center shadow-sm">
                                    <div className="text-4xl font-bold text-green-500 mb-2">100</div>
                                    <div className="text-sm text-slate-400">{t('seo')}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Tech Stack / Features */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">{t('theProDifference')}</h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                        {/* Technology */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6">
                                <Gauge className="text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('nextJsReact')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('nextJsReactDesc')}
                            </p>
                        </div>

                        {/* Responsive */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6">
                                <Smartphone className="text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('mobileFirst')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('mobileFirstDesc')}
                            </p>
                        </div>

                        {/* CMS */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6">
                                <Layers className="text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('easyContentEdits')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('easyContentEditsDesc')}
                            </p>
                        </div>

                    </div>

                    <div className="mt-16 text-center">
                        <button className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 mx-auto">
                            {t('getSiteAudit')}
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Websites;
