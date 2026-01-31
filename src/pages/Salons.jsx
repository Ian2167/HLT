import { motion } from 'framer-motion';
import { Scissors, Calendar, CreditCard, Gift, Star, RefreshCw, Smartphone, Camera, Gem } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import cardSalon from '../assets/card-salon.png';

const Salons = () => {
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
                            {t('turnOneTimeVisitors')} <span className="text-rose-500">{t('intoVipMembers')}</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
                            {t('salonsHeroDesc')}
                        </p>

                        {/* Hero Image Card */}
                        <div className="relative max-w-4xl mx-auto mt-12">
                            <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl blur opacity-20 dark:opacity-40"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                                <img src={cardSalon} alt="Empire Salons" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Problem / Solution Grid */}
            <section className="py-16 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* The Struggle */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <Scissors className="text-slate-400" /> {t('retentionStruggle')}
                            </h3>
                            <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                                <li className="flex gap-3">
                                    <span className="bg-slate-200 text-slate-600 rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0">1</span>
                                    <span><strong>{t('salonProblem1Bold')}</strong> {t('salonProblem1Desc')}</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="bg-slate-200 text-slate-600 rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0">2</span>
                                    <span><strong>{t('salonProblem2Bold')}</strong> {t('salonProblem2Desc')}</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="bg-slate-200 text-slate-600 rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0">3</span>
                                    <span><strong>{t('salonProblem3Bold')}</strong> {t('salonProblem3Desc')}</span>
                                </li>
                            </ul>
                        </div>

                        {/* The VIP Experience */}
                        <div className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-2xl border border-rose-100 dark:border-rose-900/30">
                            <h3 className="text-2xl font-bold text-rose-600 dark:text-rose-400 mb-6 flex items-center gap-2">
                                <Gem className="text-rose-500" /> {t('vipExperience')}
                            </h3>
                            <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                                <li className="flex gap-3">
                                    <span className="bg-rose-100 text-rose-600 rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0">✓</span>
                                    <span><strong>{t('salonSolution1Bold')}</strong> {t('salonSolution1Desc')}</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="bg-rose-100 text-rose-600 rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0">✓</span>
                                    <span><strong>{t('salonSolution2Bold')}</strong> {t('salonSolution2Desc')}</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="bg-rose-100 text-rose-600 rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0">✓</span>
                                    <span><strong>{t('salonSolution3Bold')}</strong> {t('salonSolution3Desc')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features for Salons */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">{t('beautyTechStack')}</h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Calendar className="text-rose-600 dark:text-rose-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('visualBookingMenu')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('visualBookingMenuDesc')}
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Smartphone className="text-rose-600 dark:text-rose-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('membershipCards')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('membershipCardsDesc')}
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-lg flex items-center justify-center mb-6">
                                <RefreshCw className="text-rose-600 dark:text-rose-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('timeToRetouch')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('timeToRetouchDesc')}
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Gift className="text-rose-600 dark:text-rose-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('birthdayAutomation')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('birthdayAutomationDesc')}
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-lg flex items-center justify-center mb-6">
                                <CreditCard className="text-rose-600 dark:text-rose-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('noShowDeposits')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('noShowDepositsDesc')}
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Camera className="text-rose-600 dark:text-rose-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('socialProofWall')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('socialProofWallDesc')}
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Salons;
