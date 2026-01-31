import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Calendar, UserCheck, Hammer, Zap, Droplets, Trees, Ruler, Search, ArrowRight, Truck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import cardHome from '../assets/card-home.png';

const HomeServices = () => {
    const { t } = useLanguage();

    const industries = [
        { icon: Hammer, key: "tradeJoinery" },
        { icon: Droplets, key: "tradePlumbing" },
        { icon: Zap, key: "tradeElectric" },
        { icon: Trees, key: "tradeLandscape" },
        { icon: Ruler, key: "tradeStone" },
        { icon: Search, key: "tradeInspection" },
    ];

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
                            {t('trustIsYour')} <span className="text-indigo-600">{t('currency')}</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
                            {t('homeServicesHeroDesc')}
                        </p>

                        {/* Hero Image Card */}
                        <div className="relative max-w-4xl mx-auto mt-12">
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-20 dark:opacity-40"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                                <img src={cardHome} alt="Home Services Logistics" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Trust Problem */}
            <section className="py-16 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-red-50 dark:bg-red-900/10 rounded-2xl p-8 border border-red-100 dark:border-red-900/30 mb-16">
                        <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4 text-center">
                            {t('thaiContractorStigma')}
                        </h3>
                        <p
                            className="text-center text-slate-700 dark:text-slate-300 text-lg"
                            dangerouslySetInnerHTML={{ __html: t('stigmaDesc') }}
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t('premiumStandard')}</h2>
                            <p className="text-slate-600 dark:text-slate-400">
                                {t('premiumStandardDesc')}
                            </p>

                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center shrink-0">
                                        <UserCheck className="text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">{t('verifiedProfiles')}</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            {t('verifiedProfilesDesc')}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center shrink-0">
                                        <Truck className="text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">{t('trackingTitle')}</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            {t('trackingDesc')}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center shrink-0">
                                        <ShieldCheck className="text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">{t('digitalContracts')}</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            {t('digitalContractsDesc')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Representation */}
                        <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 max-w-sm mx-auto">
                                <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-700 pb-4 mb-4">
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                                        <UserCheck size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400">{t('incomingTechnician')}</div>
                                        <div className="font-bold text-slate-900 dark:text-white">{t('khunSomchai')}</div>
                                    </div>
                                    <div className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                        {t('verified')}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-32 bg-slate-100 dark:bg-slate-900 rounded-lg flex items-center justify-center text-slate-400 text-sm">
                                        <MapPin size={32} />
                                        <span className="ml-2">{t('liveMapView')}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">{t('eta')}</span>
                                        <span className="font-bold text-slate-900 dark:text-white">{t('mins14')}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">{t('vehicle')}</span>
                                        <span className="font-bold text-slate-900 dark:text-white">{t('vehicleInfo')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Served */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">{t('builtForTrades')}</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {industries.map((item, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center hover:border-indigo-500 transition-colors">
                                <item.icon className="text-indigo-600 dark:text-indigo-400 mb-3" size={32} />
                                <span className="font-semibold text-slate-900 dark:text-white">{t(item.key)}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 mx-auto">
                            {t('modernizeLogistics')}
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeServices;
