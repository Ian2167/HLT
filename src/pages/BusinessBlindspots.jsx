// BusinessBlindspots.jsx — /business-blindspots. Built 30 September 2026 (bridge row 4007, the
// visibility refresh brief).
//
// WHAT THIS PAGE IS. Bridge row 4007's blindspots_page_en, verbatim, via
// src/copy/visibilityRefresh.js. A NEW public page: same "no eighth page" conflict as HuaHin.jsx,
// named in src/constants/routes.js and the visibility-refresh report, not resolved here.
//
// THAI. UNREVIEWED MACHINE DRAFT (see src/copy/visibilityRefresh.js). Not final copy.
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_BUSINESS_READ } from '../constants/routes';
import ProcessNumber from '../components/mocks/ProcessNumber';

const CTA_CLASSES =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-950/20 transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:text-base';

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.5 },
};

const BusinessBlindspots = () => {
    const { t } = useLanguage();

    const metaDescription = t('blindMetaDescription');
    useEffect(() => {
        const tag = document.querySelector('meta[name="description"]');
        if (!tag) return undefined;
        const previous = tag.getAttribute('content');
        tag.setAttribute('content', metaDescription);
        return () => tag.setAttribute('content', previous);
    }, [metaDescription]);

    const steps = [
        t('blindStep1'),
        t('blindStep2'),
        t('blindStep3'),
        t('blindStep4'),
        t('blindStep5'),
        t('blindStep6'),
    ];

    return (
        <div className="min-h-screen bg-stone-50 pt-24 text-slate-950 dark:bg-hltNavy dark:text-white">
            <title>{t('blindSeoTitle')}</title>

            <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl"
                >
                    <h1 className="text-3xl font-bold leading-tight sm:text-5xl sm:leading-[1.1]">
                        {t('blindH1')}
                    </h1>
                    <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-9">
                        {t('blindIntro')}
                    </p>
                </motion.div>
            </section>

            <section className="bg-white px-5 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2
                        {...fadeUp}
                        className="text-center text-2xl font-bold leading-tight sm:text-3xl"
                    >
                        {t('blindQuickTestHeading')}
                    </motion.h2>
                    <ol className="mt-8 grid gap-4 sm:grid-cols-2">
                        {steps.map((step, index) => (
                            <motion.li
                                key={step}
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: index * 0.04 }}
                                className="flex items-start gap-4 rounded-2xl border border-slate-200 p-6 card-glass"
                            >
                                <ProcessNumber label={`${index + 1}`} decorative />
                                <span className="text-base leading-8 text-slate-600 dark:text-slate-300">{step}</span>
                            </motion.li>
                        ))}
                    </ol>
                    <motion.p {...fadeUp} className="mx-auto mt-10 max-w-2xl text-center text-base leading-8 text-slate-600 dark:text-slate-300">
                        {t('blindInstruction')}
                    </motion.p>
                </div>
            </section>

            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('blindDeeperHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                        {t('blindDeeperBody')}
                    </p>
                    <div className="mt-8">
                        <Link to={ROUTE_BUSINESS_READ} className={CTA_CLASSES}>
                            {t('blindCta')}
                            <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default BusinessBlindspots;
