import { motion } from 'framer-motion';
import { FileText, CheckCircle, PieChart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ServiceQuotes = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-wider uppercase text-sm mb-2 block">{t('growthLayer')}</span>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">{t('quotesTitle')}</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        {t('quotesDesc')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: FileText,
                            title: t('paperworkPrep'),
                            desc: t('paperworkPrepDesc')
                        },
                        {
                            icon: CheckCircle,
                            title: t('autoFollowUp'),
                            desc: t('autoFollowUpDesc')
                        },
                        {
                            icon: PieChart,
                            title: t('pipelineClarity'),
                            desc: t('pipelineClarityDesc')
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 hover:border-indigo-500/50 transition-colors"
                        >
                            <item.icon className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceQuotes;
