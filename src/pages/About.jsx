// About.jsx — /about and /en/about. Built 18 September 2026; the H1 and lead REPLACED 30 September
// 2026 on the visibility refresh (Ian's fuller spec of the same day, section 26).
//
// WHAT THIS PAGE IS, IN IAN'S WORDS
// Its one job, from his locked page-hierarchy table of 17 September 2026: "Why HLT is credible."
//
// WHAT THE SPEC CHANGED, AND WHAT IT DID NOT
// The spec's H1 ("Business systems before technology.") and its three-line core copy now open the
// page. They make no claim about any person. The spec then asks for "clear profiles for Ian, Ann,
// HLT". THOSE ARE NOT HERE, and must not be typed in: Ian's ruling of 18 September 2026 (gate 128,
// "Do not include either founder paragraph, named or unnamed, at this stage") and his hard rule of
// 27 September (no name, face, bio or career line on anything HLT publishes until his visa is
// resolved) stand until he lifts them himself. The report lists the profiles as the spec item held.
//
// The rest of the page is the thin form he ruled: what we do, how we work, what we won't do, the
// three-line company facts block, and the one action. No address, no photograph, no team section.
// tests/about-company-facts.mjs still holds this page to both halves of gate 128.
//
// COPY: src/copy/about.js, with the H1, lead, meta title and CTA label overridden by
// src/copy/visibilityRefresh.js, which is spread last.
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LINE_OFFICIAL_ACCOUNT } from '../constants/contact';
import { ROUTE_ABOUT, ROUTE_BUSINESS_READ } from '../constants/routes';
import Seo from '../components/Seo';
import { CTA_CLASSES } from './Home';
import { fadeUp, heroIn } from '../lib/motion';

const About = () => {
    const { t, lp } = useLanguage();

    const howRules = [t('abHow1'), t('abHow2'), t('abHow3'), t('abHow4'), t('abHow5')];
    const wontRules = [t('abWont1'), t('abWont2'), t('abWont3'), t('abWont4')];

    return (
        <div className="min-h-screen bg-stone-50 pt-20 text-slate-950 lg:pt-24">
            <Seo title={t('abMetaTitle')} description={t('abMetaDescription')} route={ROUTE_ABOUT} />

            <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...heroIn} className="mx-auto max-w-3xl">
                    <h1 className="text-[2rem] font-bold leading-[1.15] sm:text-5xl sm:leading-[1.1]">{t('abHeroHeadline')}</h1>
                    <div className="mt-6 space-y-3 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                        <p>{t('abHeroLead')}</p>
                        <p>{t('abHeroLead2')}</p>
                        <p className="font-semibold text-slate-950">{t('abHeroLead3')}</p>
                    </div>
                </motion.div>
            </section>

            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('abWhatHeading')}</h2>
                    <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
                        <p>{t('abWhatP1')}</p>
                        <p>{t('abWhatP2')}</p>
                        <p>{t('abWhatP3')}</p>
                    </div>
                </motion.div>
            </section>

            <section className="bg-stone-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('abHowHeading')}</h2>
                    <ul className="mt-6 space-y-5">
                        {howRules.map((rule) => (
                            <li key={rule} className="border-l-2 border-indigo-600 pl-5 text-base leading-8 text-slate-600">
                                {rule}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </section>

            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('abWontHeading')}</h2>
                    <ul className="mt-6 space-y-5">
                        {wontRules.map((rule) => (
                            <li key={rule} className="rounded-xl border border-slate-200 bg-stone-50 p-5 text-base leading-8 text-slate-600 card-glass card-static">
                                {rule}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </section>

            {/* The company facts block, Ian's own three-line layout, gate 128, 18 September 2026.
                The company number is public record. No address, by his standing rule. */}
            <section className="bg-white px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <p className="text-sm leading-7 text-slate-500">
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
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{t('abClosingBody')}</p>
                    <div className="mt-8">
                        <Link to={lp(ROUTE_BUSINESS_READ)} className={CTA_CLASSES}>
                            {t('abCtaLabel')}
                            <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                    </div>
                    <p className="mt-4 text-sm text-slate-400">
                        <a href={LINE_OFFICIAL_ACCOUNT} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 transition-colors hover:text-white">
                            {t('abLineNote')}
                        </a>
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default About;
