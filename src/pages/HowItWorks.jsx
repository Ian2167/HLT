// HowItWorks.jsx — /how-it-works. Built 18 September 2026.
//
// WHAT THIS PAGE IS, IN IAN'S WORDS
// Its one job, from his locked page-hierarchy table of 17 September 2026: "Understand -> Diagnose
// -> Improve". Three stages in order, each said as problem, outcome and mechanism, which is his
// point 7: "Shorten public capability pages to problem, outcome and mechanism."
//
// WHY THIS FILE HOLDS NO COPY OF ITS OWN
// Every visible string comes from src/copy/howItWorks.js, lifted verbatim from the gated pack at
//   C:\Projects\hlt-estate\02-builds\hlt-site-kit\copy\2026-09-18-how-it-works.md
// Only SENDABLE blocks are there. Every NOTE block stayed in the pack.
//
// WHAT IS NOT ON THIS PAGE AND MUST NOT ARRIVE LATER
// No methodology, no audit framework, no scoring, no diagnostic matrix, no implementation
// specification. Ian's directive moves all of it behind the Client Workspace login. The three
// system names are absent for the reason in the copy module's header.
//
// THE NUMERALS ARE VISUAL, THE STAGE LABELS ARE COPY. "Stage 1. Understand" is a deck line and
// renders as text. The badge beside it is a device this build added, so it carries
// ProcessNumber's `decorative` mark and is listed as a mock string rather than smuggled past a
// copy fixture.
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LINE_OFFICIAL_ACCOUNT } from '../constants/contact';
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

const HowItWorks = () => {
    const { t } = useLanguage();

    // Swapped in place rather than rendered, for the reason recorded in src/pages/Home.jsx:
    // React 19 hoists a rendered <meta> by APPENDING it, which leaves two on the page.
    const metaDescription = t('hiwMetaDescription');
    useEffect(() => {
        const tag = document.querySelector('meta[name="description"]');
        if (!tag) return undefined;
        const previous = tag.getAttribute('content');
        tag.setAttribute('content', metaDescription);
        return () => tag.setAttribute('content', previous);
    }, [metaDescription]);

    const stages = [
        {
            n: 1,
            label: t('hiwStage1Label'),
            name: t('hiwStage1Name'),
            paras: [t('hiwStage1P1'), t('hiwStage1P2'), t('hiwStage1P3')],
            linkLabel: t('hiwStage1LinkLabel'),
        },
        {
            n: 2,
            label: t('hiwStage2Label'),
            name: t('hiwStage2Name'),
            paras: [t('hiwStage2P1'), t('hiwStage2P2'), t('hiwStage2P3'), t('hiwStage2P4')],
            linkLabel: null,
        },
        {
            n: 3,
            label: t('hiwStage3Label'),
            name: t('hiwStage3Name'),
            paras: [t('hiwStage3P1'), t('hiwStage3P2'), t('hiwStage3P3')],
            linkLabel: null,
        },
    ];

    return (
        <div className="min-h-screen bg-stone-50 pt-24 text-slate-950 dark:bg-hltNavy dark:text-white">
            <title>{t('hiwMetaTitle')}</title>

            {/* Hero. No photograph: this page argues an order of operations, and a stock image
                behind it would be decoration rather than evidence. */}
            <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl"
                >
                    <h1 className="text-3xl font-bold leading-tight sm:text-5xl sm:leading-[1.1]">
                        {t('hiwHeroHeadline')}
                    </h1>
                    <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-9">
                        {t('hiwHeroLead')}
                    </p>
                    <div className="mt-8">
                        <Link to={ROUTE_BUSINESS_READ} className={CTA_CLASSES}>
                            {t('hiwCtaLabel')}
                            <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* The three stages. One panel each, in order, and the order is the argument. */}
            <section className="bg-white px-5 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8">
                <ol className="mx-auto max-w-4xl space-y-8">
                    {stages.map((stage, index) => (
                        <motion.li
                            key={stage.label}
                            {...fadeUp}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="rounded-2xl border border-slate-200 bg-stone-50 p-7 card-glass sm:p-9"
                        >
                            <div className="flex items-start gap-5">
                                <ProcessNumber label={`${stage.n}`} decorative />
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
                                        {stage.label}
                                    </p>
                                    <h2 className="mt-2 text-2xl font-bold leading-8 text-slate-950 dark:text-white">
                                        {stage.name}
                                    </h2>
                                </div>
                            </div>

                            <div className="mt-6 space-y-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                                {stage.paras.map((para) => (
                                    <p key={para}>{para}</p>
                                ))}
                            </div>

                            {stage.linkLabel ? (
                                <Link
                                    to={ROUTE_BUSINESS_READ}
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-300"
                                >
                                    {stage.linkLabel}
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            ) : null}
                        </motion.li>
                    ))}
                </ol>
            </section>

            {/* The diagnosis chooses, not the visitor. Ian's own instruction, turned into a line
                the visitor can read. */}
            <section className="bg-stone-100 px-5 py-16 dark:bg-white/[0.04] sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('hiwDecidesHeading')}</h2>
                    <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">{t('hiwDecidesP1')}</p>
                    <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{t('hiwDecidesP2')}</p>
                </motion.div>
            </section>

            {/* AI visible, and subordinate, in Ian's own order: the operating improvement first. */}
            <section className="bg-white px-5 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('hiwAiHeading')}</h2>
                    <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">{t('hiwAiP1')}</p>
                    <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{t('hiwAiP2')}</p>
                </motion.div>
            </section>

            <section className="bg-stone-100 px-5 py-16 dark:bg-white/[0.04] sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('hiwHoldHeading')}</h2>
                    <ul className="mt-6 space-y-4">
                        {[t('hiwHold1'), t('hiwHold2'), t('hiwHold3'), t('hiwHold4')].map((line) => (
                            <li
                                key={line}
                                className="border-l-2 border-indigo-600 pl-5 text-base leading-8 text-slate-600 dark:border-indigo-400 dark:text-slate-300"
                            >
                                {line}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </section>

            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('hiwClosingHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                        {t('hiwClosingBody')}
                    </p>
                    <div className="mt-8">
                        <Link to={ROUTE_BUSINESS_READ} className={CTA_CLASSES}>
                            {t('hiwCtaLabel')}
                            <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                    </div>
                    <p className="mt-4 text-sm text-slate-400">
                        <a
                            href={LINE_OFFICIAL_ACCOUNT}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-4 transition-colors hover:text-white"
                        >
                            {t('hiwLineNote')}
                        </a>
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default HowItWorks;
