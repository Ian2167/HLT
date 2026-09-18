// About.jsx — /about. Built 18 September 2026.
//
// WHAT THIS PAGE IS, IN IAN'S WORDS
// Its one job, from his locked page-hierarchy table of 17 September 2026: "Why HLT is credible."
//
// WHY IT IS SHORT, AND WHY THAT IS THE DELIVERABLE RATHER THAN A SHORTFALL
// Ian's GO of 18 September 2026 says "Do not publish unresolved About content." Three of the
// four things an About page usually runs on are unavailable today: there is no delivered client
// engagement, the founder is not named on the site under the voice ruling of 14 September while
// the work-permit position is open, and the registered office is unsettled so no address is
// published anywhere. What is left is what HLT does, how it works and what it will not do, and
// that is what this page is.
//
// FOUR BLOCKS WERE WAITING ON IAN. HE RULED ON ALL FOUR AT GATE 128 ON 18 SEPTEMBER 2026
// (bridge row 3681; ruling of record
//   C:\Projects\hlt-estate\01-doctrine\HLT-ABOUT-PAGE-RULING-2026-09-18.md):
//   - the named founder paragraph      RULED OUT, "named or unnamed, at this stage"
//   - the unnamed founder paragraph    RULED OUT, same words
//   - the company facts block          RULED IN, in his own three-line layout, and it now
//                                      renders between "What we won't do" and the closing CTA
//   - any photograph or team section   UNCHANGED, still out
// The three that are out are NOT in this bundle and must not be typed into this file. They live
// as NOTE blocks in the pack at
//   C:\Projects\hlt-estate\02-builds\hlt-site-kit\copy\2026-09-18-about.md
// and they reach the site through his word, then the pack, then src/copy/about.js. Never by
// being typed into this file. No address appears here, by his standing rule.
//
// tests/about-company-facts.mjs holds this page to both halves of that ruling: it drives a real
// browser to /about to prove the three company lines render, and reads the built bundle to prove
// the two founder paragraphs do not ship.
//
// WHY THIS FILE HOLDS NO COPY OF ITS OWN
// Every visible string comes from src/copy/about.js, lifted verbatim from that pack's SENDABLE
// blocks.
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LINE_OFFICIAL_ACCOUNT } from '../constants/contact';
import { ROUTE_BUSINESS_READ } from '../constants/routes';

const CTA_CLASSES =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-950/20 transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:text-base';

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.5 },
};

const About = () => {
    const { t } = useLanguage();

    const metaDescription = t('abMetaDescription');
    useEffect(() => {
        const tag = document.querySelector('meta[name="description"]');
        if (!tag) return undefined;
        const previous = tag.getAttribute('content');
        tag.setAttribute('content', metaDescription);
        return () => tag.setAttribute('content', previous);
    }, [metaDescription]);

    const howRules = [t('abHow1'), t('abHow2'), t('abHow3'), t('abHow4'), t('abHow5')];
    const wontRules = [t('abWont1'), t('abWont2'), t('abWont3'), t('abWont4')];

    return (
        <div className="min-h-screen bg-stone-50 pt-24 text-slate-950 dark:bg-hltNavy dark:text-white">
            <title>{t('abMetaTitle')}</title>

            {/* The first screen is a set of rules the reader can hold us to, not our history. An
                About page that opens on the firm's story is written for the firm. */}
            <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl"
                >
                    <h1 className="text-3xl font-bold leading-tight sm:text-5xl sm:leading-[1.1]">
                        {t('abHeroHeadline')}
                    </h1>
                    <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-9">
                        {t('abHeroLead')}
                    </p>
                </motion.div>
            </section>

            <section className="bg-white px-5 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('abWhatHeading')}</h2>
                    <div className="mt-5 space-y-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                        <p>{t('abWhatP1')}</p>
                        <p>{t('abWhatP2')}</p>
                        <p>{t('abWhatP3')}</p>
                    </div>
                </motion.div>
            </section>

            <section className="bg-stone-100 px-5 py-16 dark:bg-white/[0.04] sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('abHowHeading')}</h2>
                    <ul className="mt-6 space-y-5">
                        {howRules.map((rule) => (
                            <li
                                key={rule}
                                className="border-l-2 border-indigo-600 pl-5 text-base leading-8 text-slate-600 dark:border-indigo-400 dark:text-slate-300"
                            >
                                {rule}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </section>

            <section className="bg-white px-5 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('abWontHeading')}</h2>
                    <ul className="mt-6 space-y-5">
                        {wontRules.map((rule) => (
                            <li
                                key={rule}
                                className="rounded-xl border border-slate-200 bg-stone-50 p-5 text-base leading-8 text-slate-600 card-glass dark:text-slate-300"
                            >
                                {rule}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </section>

            {/*
                The company facts block. Ian ruled it IN at gate 128 on 18 September 2026, in this
                three-line form, to sit between "What we won't do" and the closing CTA. It answers
                the first question a cautious Thai buyer asks: is this a real company. Existing type
                scale, no icon, no address.
            */}
            <section className="bg-white px-5 pb-16 dark:bg-slate-950 sm:px-6 sm:pb-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
                        {t('abCompanyName')}
                        <br />
                        {t('abCompanyNameThai')}
                        <br />
                        {t('abCompanyRegistered')}
                    </p>
                </motion.div>
            </section>

            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('abClosingHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                        {t('abClosingBody')}
                    </p>
                    <div className="mt-8">
                        <Link to={ROUTE_BUSINESS_READ} className={CTA_CLASSES}>
                            {t('abCtaLabel')}
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
                            {t('abLineNote')}
                        </a>
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default About;
