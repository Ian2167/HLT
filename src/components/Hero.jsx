import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

            {/* Background Blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 dark:bg-violet-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-8 border border-indigo-100 dark:border-indigo-800">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        {t('heroBadge')}
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 max-w-4xl mx-auto leading-tight">
                        {t('heroTitlePrefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">{t('heroTitleHighlight')}</span> {t('heroTitleSuffix')}
                    </h1>

                    <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {t('heroSubtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                            {t('checkReadiness')}
                            <ArrowRight size={20} />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-white font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                            {t('viewSystem')}
                        </button>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-indigo-600 dark:text-indigo-400" />
                            <span>{t('heroFeature1')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-indigo-600 dark:text-indigo-400" />
                            <span>{t('heroFeature2')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-indigo-600 dark:text-indigo-400" />
                            <span>{t('heroFeature3')}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
