import { motion } from 'framer-motion';
import { Stethoscope, CalendarCheck, Shield, MessageCircle, Star, Image, HeartPulse, Clock, Smile } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import cardClinic from '../assets/card-clinic.png';

const Clinics = () => {
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
                            {t('patientExperience')} <span className="text-teal-500">{t('reputationDeserves')}</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
                            {t('clinicsHeroDesc')}
                        </p>

                        {/* Hero Image Card */}
                        <div className="relative max-w-4xl mx-auto mt-12">
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur opacity-20 dark:opacity-40"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                                <img src={cardClinic} alt="Premium Clinics" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Problem / Solution Grid */}
            <section className="py-16 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* The Problem */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <HeartPulse className="text-red-500" /> {t('busyClinicTrap')}
                            </h3>
                            <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                                <li className="flex gap-3">
                                    <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0">1</span>
                                    <span>{t('clinicProblem1')}</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0">2</span>
                                    <span>{t('clinicProblem2')}</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0">3</span>
                                    <span><strong>{t('clinicProblem3Bold')}</strong> {t('clinicProblem3Desc')}</span>
                                </li>
                            </ul>
                        </div>

                        {/* The Solution */}
                        <div className="bg-teal-50 dark:bg-teal-900/10 p-8 rounded-2xl border border-teal-100 dark:border-teal-900/30">
                            <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-6 flex items-center gap-2">
                                <Smile className="text-teal-500" /> {t('modernPatientJourney')}
                            </h3>
                            <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                                <li className="flex gap-3">
                                    <span className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0">✓</span>
                                    <span><strong>{t('clinicSolution1Bold')}</strong> {t('clinicSolution1Desc')}</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0">✓</span>
                                    <span><strong>{t('clinicSolution2Bold')}</strong> {t('clinicSolution2Desc')}</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0">✓</span>
                                    <span><strong>{t('clinicSolution3Bold')}</strong> {t('clinicSolution3Desc')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features for Clinics */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">{t('clinicSpecificTools')}</h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-6">
                                <MessageCircle className="text-teal-600 dark:text-teal-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('mctbIntegration')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('mctbIntegrationDesc')}
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-6">
                                <CalendarCheck className="text-teal-600 dark:text-teal-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('noShowProtection')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('noShowProtectionDesc')}
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Image className="text-teal-600 dark:text-teal-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('beforeAfterGallery')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('beforeAfterGalleryDesc')}
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Shield className="text-teal-600 dark:text-teal-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('pdpaCompliant')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('pdpaCompliantDesc')}
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Star className="text-teal-600 dark:text-teal-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('reputationManagement')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('reputationManagementDesc')}
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Clock className="text-teal-600 dark:text-teal-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('recallAutomation')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('recallAutomationDesc')}
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Clinics;
