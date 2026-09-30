// HowItWorks.jsx — /how-it-works and /en/how-it-works. Built 18 September 2026.
// 30 September 2026, the visibility refresh: per-page head through Seo, every link through lp() so
// the language in the URL is kept, motion from src/lib/motion.js so the prerender can switch it
// off, and the CTA label harmonised to the site's one primary action. No copy of this page moved.
//
// WHAT THIS PAGE IS, IN IAN'S WORDS
// Its one job, from his locked page-hierarchy table of 17 September 2026: "Understand -> Diagnose
// -> Improve". Three stages in order, each said as problem, outcome and mechanism, which is his
// point 7: "Shorten public capability pages to problem, outcome and mechanism."
//
// WHAT IS NOT ON THIS PAGE AND MUST NOT ARRIVE LATER
// No methodology, no audit framework, no scoring, no diagnostic matrix, no implementation
// specification. Ian's directive moves all of it behind the Client Workspace login.
//
// COPY: src/copy/howItWorks.js, lifted verbatim from the gated pack at
//   C:\Projects\hlt-estate\02-builds\hlt-site-kit\copy\2026-09-18-how-it-works.md
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LINE_OFFICIAL_ACCOUNT } from '../constants/contact';
import { ROUTE_BUSINESS_READ, ROUTE_EXAMPLES, ROUTE_HOW_IT_WORKS } from '../constants/routes';
import ProcessNumber from '../components/mocks/ProcessNumber';
import BusinessReadMock from '../components/mocks/BusinessReadMock';
import Seo from '../components/Seo';
import { CTA_CLASSES } from './Home';
import { fadeUp, fadeUpDelayed, heroIn } from '../lib/motion';

const HowItWorks = () => {
    const { t, lp } = useLanguage();

    const stages = [
        {
            n: 1,
            label: t('hiwStage1Label'),
            name: t('hiwStage1Name'),
            paras: [t('hiwStage1P1'), t('hiwStage1P2'), t('hiwStage1P3')],
            linkLabel: t('hiwStage1LinkLabel'),
            // The artefact stage 1 delivers, drawn: the same component /business-read renders.
            Artefact: BusinessReadMock,
        },
        {
            n: 2,
            label: t('hiwStage2Label'),
            name: t('hiwStage2Name'),
            paras: [t('hiwStage2P1'), t('hiwStage2P2'), t('hiwStage2P3'), t('hiwStage2P4')],
            linkLabel: null,
            Artefact: null,
        },
        {
            n: 3,
            label: t('hiwStage3Label'),
            name: t('hiwStage3Name'),
            paras: [t('hiwStage3P1'), t('hiwStage3P2'), t('hiwStage3P3')],
            linkLabel: null,
            Artefact: null,
        },
    ];

    return (
        <div className="min-h-screen bg-stone-50 pt-20 text-slate-950 lg:pt-24">
            <Seo title={t('hiwMetaTitle')} description={t('hiwMetaDescription')} route={ROUTE_HOW_IT_WORKS} />

            {/* Hero: the home page's photograph under the same wash, so the page sits with the six
                it belongs to (creative-director defect 2, 18 September 2026). */}
            <section className="relative flex min-h-[32rem] items-center overflow-hidden lg:min-h-[36rem]">
                <img
                    src={t('homeHeroImage')}
                    alt={t('homeHeroImageAlt')}
                    className="absolute inset-0 h-full w-full object-cover object-bottom"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-hltNavy/55" />
                <div className="absolute inset-0 bg-gradient-to-r from-hltNavy/70 via-hltNavy/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-hltNavy/30 via-transparent to-hltNavy/60" />

                <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                    <motion.div {...heroIn} className="max-w-3xl">
                        <h1 className="text-[2rem] font-bold leading-[1.15] text-white sm:text-5xl sm:leading-[1.1]">{t('hiwHeroHeadline')}</h1>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg sm:leading-9">{t('hiwHeroLead')}</p>
                        <div className="mt-8">
                            <Link to={lp(ROUTE_BUSINESS_READ)} className={CTA_CLASSES}>
                                {t('hiwCtaLabel')}
                                <ArrowRight size={18} aria-hidden="true" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The three stages. One panel each, in order, and the order is the argument. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <ol className="mx-auto max-w-4xl space-y-8">
                    {stages.map((stage, index) => (
                        <motion.li
                            key={stage.label}
                            {...fadeUpDelayed(index, 0.08)}
                            className="rounded-2xl border border-slate-200 bg-stone-50 p-7 card-glass sm:p-9"
                        >
                            <div className="flex items-start gap-5">
                                <ProcessNumber label={`${stage.n}`} decorative />
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-bold uppercase tracking-wide text-indigo-600">{stage.label}</p>
                                    <h2 className="mt-2 text-2xl font-bold leading-8 text-slate-950">{stage.name}</h2>
                                </div>
                            </div>

                            <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
                                {stage.paras.map((para) => (
                                    <p key={para}>{para}</p>
                                ))}
                            </div>

                            {stage.Artefact ? (
                                <div className="mt-8">
                                    <stage.Artefact />
                                </div>
                            ) : null}

                            {stage.linkLabel ? (
                                <Link
                                    to={lp(ROUTE_BUSINESS_READ)}
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 transition-colors hover:text-indigo-500"
                                >
                                    {stage.linkLabel}
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            ) : null}
                        </motion.li>
                    ))}
                </ol>
            </section>

            <section className="bg-stone-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('hiwDecidesHeading')}</h2>
                    <p className="mt-5 text-base leading-8 text-slate-600">{t('hiwDecidesP1')}</p>
                    <p className="mt-4 text-base leading-8 text-slate-600">{t('hiwDecidesP2')}</p>
                </motion.div>
            </section>

            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('hiwAiHeading')}</h2>
                    <p className="mt-5 text-base leading-8 text-slate-600">{t('hiwAiP1')}</p>
                    <p className="mt-4 text-base leading-8 text-slate-600">{t('hiwAiP2')}</p>
                </motion.div>
            </section>

            <section className="bg-stone-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('hiwHoldHeading')}</h2>
                    <ul className="mt-6 space-y-4">
                        {[t('hiwHold1'), t('hiwHold2'), t('hiwHold3'), t('hiwHold4')].map((line) => (
                            <li key={line} className="border-l-2 border-indigo-600 pl-5 text-base leading-8 text-slate-600">
                                {line}
                            </li>
                        ))}
                    </ul>
                    <Link
                        to={lp(ROUTE_EXAMPLES)}
                        className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 transition-colors hover:text-indigo-500"
                    >
                        {t('exNavLink')}
                        <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                </motion.div>
            </section>

            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('hiwClosingHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{t('hiwClosingBody')}</p>
                    <div className="mt-8">
                        <Link to={lp(ROUTE_BUSINESS_READ)} className={CTA_CLASSES}>
                            {t('hiwCtaLabel')}
                            <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                    </div>
                    <p className="mt-4 text-sm text-slate-400">
                        <a href={LINE_OFFICIAL_ACCOUNT} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 transition-colors hover:text-white">
                            {t('hiwLineNote')}
                        </a>
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default HowItWorks;
