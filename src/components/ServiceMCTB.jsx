import { motion } from 'framer-motion';
import { Smartphone, MessageSquare, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ServiceMCTB = () => {
    const { t } = useLanguage();

    return (
        <section id="services" className="py-24 bg-white dark:bg-slate-950 transition-colors">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Visual Side (The Hardware) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-3xl opacity-10 blur-3xl"></div>
                        <div className="relative bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl">
                            <div className="flex justify-center mb-8">
                                <div className="w-48 h-80 bg-slate-900 rounded-[2.5rem] p-3 shadow-xl border-4 border-slate-800 relative overflow-hidden">
                                    {/* Screen */}
                                    <div className="w-full h-full bg-slate-800 rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden">
                                        <div className="absolute top-4 w-12 h-4 bg-black rounded-full z-20"></div>
                                        <div className="z-10 text-center p-4">
                                            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2 animate-pulse">
                                                <Smartphone className="text-white w-6 h-6" />
                                            </div>
                                            <p className="text-white text-xs font-bold mb-1">{t('missedCall')}</p>
                                            <p className="text-slate-400 text-[10px]">081-XXX-XXXX</p>
                                        </div>
                                        {/* Notification Toast */}
                                        <motion.div
                                            initial={{ y: 50, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 1, duration: 0.5 }}
                                            className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-2 shadow-lg"
                                        >
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <p className="text-[8px] text-slate-800 font-bold">{t('smsSent')}</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('receptionistBox')}</h3>
                                <p
                                    className="text-sm text-slate-500 dark:text-slate-400"
                                    dangerouslySetInnerHTML={{ __html: t('receptionistBoxDesc') }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-wider uppercase text-sm mb-2 block">{t('foundationLayer')}</span>
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">{t('mctbTitle')}</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            {t('mctbDesc')}
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Smartphone, title: t('hardwarIncluded'), desc: t('hardwareDesc') },
                                { icon: MessageSquare, title: t('lineBridge'), desc: t('lineBridgeDesc') },
                                { icon: Zap, title: t('instantReply'), desc: t('instantReplyDesc') }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/50 flex items-center justify-center shrink-0">
                                        <item.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServiceMCTB;
