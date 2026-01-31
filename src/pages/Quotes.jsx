import { motion } from 'framer-motion';
import { FileText, CheckCircle, XCircle, ArrowRight, MousePointerClick, CreditCard, Bell } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import cardQuotes from '../assets/card-quotes.png';

const Quotes = () => {
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
                            {t('stopSendingPDFs')}
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
                            {t('quotesPageHeroDesc')}
                        </p>

                        {/* Hero Image Card */}
                        <div className="relative max-w-4xl mx-auto mt-12">
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-20 dark:opacity-40"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                                <img src={cardQuotes} alt="Detailed Quote Engine" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Problem / Solution Grid */}
            <section className="py-16 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Old Way */}
                        <div className="bg-red-50 dark:bg-red-900/10 p-8 rounded-2xl border border-red-100 dark:border-red-900/30">
                            <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-6 flex items-center gap-2">
                                <XCircle /> {t('theOldWay')}
                            </h3>
                            <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                                <li className="flex gap-3"><span className="text-red-500">✕</span> {t('oldWay1')}</li>
                                <li className="flex gap-3"><span className="text-red-500">✕</span> {t('oldWay2')}</li>
                                <li className="flex gap-3"><span className="text-red-500">✕</span> <strong>{t('oldWay3')}</strong></li>
                                <li className="flex gap-3"><span className="text-red-500">✕</span> {t('oldWay4')}</li>
                            </ul>
                        </div>

                        {/* HLT Way */}
                        <div className="bg-green-50 dark:bg-green-900/10 p-8 rounded-2xl border border-green-100 dark:border-green-900/30">
                            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6 flex items-center gap-2">
                                <CheckCircle /> {t('theHLTWay')}
                            </h3>
                            <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                                <li className="flex gap-3"><span className="text-green-500">✓</span> {t('hltWay1')}</li>
                                <li className="flex gap-3"><span className="text-green-500">✓</span> <strong>{t('hltWay2')}</strong></li>
                                <li className="flex gap-3"><span className="text-green-500">✓</span> {t('hltWay3')}</li>
                                <li className="flex gap-3"><span className="text-green-500">✓</span> {t('hltWay4')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">{t('whyItConverts')}</h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                        {/* Interactive */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6">
                                <MousePointerClick className="text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('interactiveChoices')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('interactiveChoicesDesc')}
                            </p>
                        </div>

                        {/* Payments */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6">
                                <CreditCard className="text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('collectDeposit')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('collectDepositDesc')}
                            </p>
                        </div>

                        {/* Tracking */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6">
                                <Bell className="text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('liveTracking')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('liveTrackingDesc')}
                            </p>
                        </div>

                    </div>

                    <div className="mt-16 text-center">
                        <button className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 mx-auto">
                            {t('upgradeProposals')}
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Quotes;
