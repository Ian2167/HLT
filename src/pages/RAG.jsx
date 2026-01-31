import { motion } from 'framer-motion';
import { Bot, FileText, Database, MessageSquare, ArrowRight, BookOpen, Clock, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import cardRag from '../assets/card-rag.png';

const RAG = () => {
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
                            {t('cloneYour')} <span className="text-indigo-600">{t('bestEmployee')}</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
                            {t('ragHeroDesc')}
                        </p>

                        {/* Hero Image Card */}
                        <div className="relative max-w-4xl mx-auto mt-12">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-20 dark:opacity-40"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                                <img src={cardRag} alt="AI Agents" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* How It Works Diagram */}
            <section className="py-16 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-900 rounded-3xl p-10 border border-slate-100 dark:border-slate-800">
                        <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-12">{t('howItWorks')}</h2>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                            {/* Input */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center mb-4 text-indigo-600">
                                    <FileText size={32} />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white">{t('yourData')}</h3>
                                <p className="text-sm text-slate-500 max-w-[150px]">{t('yourDataDesc')}</p>
                            </div>

                            {/* Arrow */}
                            <div className="hidden md:block text-slate-300 dark:text-slate-600">
                                <ArrowRight size={32} />
                            </div>

                            {/* Brain */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-indigo-600 rounded-full shadow-lg shadow-indigo-500/30 flex items-center justify-center mb-4 text-white z-10">
                                    <Bot size={40} />
                                </div>
                                <h3 className="font-bold text-indigo-600 dark:text-indigo-400">{t('theAIBrain')}</h3>
                                <p className="text-sm text-slate-500 max-w-[150px]">{t('theAIBrainDesc')}</p>
                            </div>

                            {/* Arrow */}
                            <div className="hidden md:block text-slate-300 dark:text-slate-600">
                                <ArrowRight size={32} />
                            </div>

                            {/* Output */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center mb-4 text-indigo-600">
                                    <MessageSquare size={32} />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white">{t('instantAnswers')}</h3>
                                <p className="text-sm text-slate-500 max-w-[150px]">{t('instantAnswersDesc')}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">{t('useCases')}</h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                        {/* Customer Support */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6">
                                <Clock className="text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('support247')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('support247Desc')}
                            </p>
                        </div>

                        {/* Staff Training */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6">
                                <BookOpen className="text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('technicianHelper')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('technicianHelperDesc')}
                            </p>
                        </div>

                        {/* Onboarding */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6">
                                <Users className="text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('hrOnboarding')}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {t('hrOnboardingDesc')}
                            </p>
                        </div>

                    </div>

                    <div className="mt-16 text-center">
                        <button className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 mx-auto">
                            {t('buildYourArmy')}
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RAG;
