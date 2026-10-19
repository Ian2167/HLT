// WhoWeHelp.jsx — /who-we-help and /en/who-we-help. Built 1 October 2026, the repositioning;
// RESTRUCTURED 19 October 2026 (the site review, round 2).
//
// WHAT THIS PAGE IS NOW. Thai owners and foreign owners alike, first. Three recognisable situations,
// each with its goal; then plain signals that it's probably a good fit, or probably not yet (no
// invented thresholds: no staff counts, no revenue bands); then the route for anyone with a simple
// website brief; then the shorter section for foreign owners, the Hua Hin link and the Fit Call.
// The long industry list stopped rendering; its strings stay in src/copy/repositioning.js.
//
// COPY: src/copy/improvements1019.js, with the foreign-owner lines from src/copy/repositioning.js.
import { motion } from 'framer-motion';
import { ArrowRight, Check, Clock, MonitorSmartphone, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_HUA_HIN, ROUTE_WHO, capabilityRoute } from '../constants/routes';
import Seo from '../components/Seo';
import FitCallButtons from '../components/FitCallButtons';
import { fadeUp, fadeUpDelayed, heroIn } from '../lib/motion';

const SITUATION_ICONS = [TrendingUp, Users, MonitorSmartphone];

const WhoWeHelp = () => {
    const { t, lp } = useLanguage();
    const situations = [1, 2, 3].map((n) => ({
        name: t(`whoSit${n}Name`),
        body: t(`whoSit${n}Body`),
        goal: t(`whoSit${n}Goal`),
        Icon: SITUATION_ICONS[n - 1],
    }));
    const fitYes = [1, 2, 3, 4].map((n) => t(`whoFitY${n}`));
    const fitNotYet = [1, 2, 3].map((n) => t(`whoFitN${n}`));
    const expat = [1, 2, 3, 4, 5].map((n) => t(`expat${n}`));

    return (
        <div className="min-h-screen bg-stone-50 pt-20 text-slate-950 lg:pt-24">
            <Seo title={t('whoMetaTitle')} description={t('whoMetaDescription')} route={ROUTE_WHO} />

            <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...heroIn} className="mx-auto max-w-3xl">
                    <h1 className="text-[2rem] font-bold leading-[1.15] sm:text-5xl sm:leading-[1.1]">{t('whoHeading')}</h1>
                    <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">{t('whoLead')}</p>
                </motion.div>
            </section>

            {/* Three situations, each with its goal. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('whoSitHeading')}
                    </motion.h2>
                    <ul className="mt-10 grid gap-5 lg:grid-cols-3">
                        {situations.map((s, index) => (
                            <motion.li key={s.name} {...fadeUpDelayed(index, 0.06)} className="flex flex-col rounded-2xl border border-slate-200 bg-stone-50 p-6 card-glass card-static">
                                <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-hltNavy text-white">
                                    <s.Icon size={20} />
                                </span>
                                <h3 className="mt-4 text-lg font-bold leading-7 text-slate-950">{s.name}</h3>
                                <p className="mt-2 flex-1 text-base leading-7 text-slate-600">{s.body}</p>
                                <p className="mt-4 text-base font-semibold leading-7 text-slate-950">{s.goal}</p>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Fit, and not yet. */}
            <section className="bg-stone-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
                    <motion.div {...fadeUp} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
                        <h2 className="text-xl font-bold text-slate-950">{t('whoFitHeading')}</h2>
                        <ul className="mt-4 space-y-3">
                            {fitYes.map((line) => (
                                <li key={line} className="flex gap-3 text-base leading-7 text-slate-700">
                                    <span className="mt-1 shrink-0 text-indigo-600">
                                        <Check size={20} aria-hidden="true" />
                                    </span>
                                    <span>{line}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div {...fadeUp} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
                        <h2 className="text-xl font-bold text-slate-950">{t('whoNotYetHeading')}</h2>
                        <ul className="mt-4 space-y-3">
                            {fitNotYet.map((line) => (
                                <li key={line} className="flex gap-3 text-base leading-7 text-slate-700">
                                    <span className="mt-1 shrink-0 text-slate-400">
                                        <Clock size={20} aria-hidden="true" />
                                    </span>
                                    <span>{line}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
                <motion.p {...fadeUp} className="mx-auto mt-8 max-w-3xl text-center text-lg font-semibold leading-8 text-slate-950">
                    {t('whoNotEvery')}
                </motion.p>
            </section>

            {/* A simple website brief has its own route. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl rounded-2xl border-l-4 border-saffron-500 bg-sand-50 p-6 sm:p-8">
                    <h2 className="text-2xl font-bold leading-tight">{t('whoWebHeading')}</h2>
                    <p className="mt-3 text-base leading-8 text-slate-600 sm:text-lg">{t('whoWebBody')}</p>
                    <Link to={lp(capabilityRoute('websites'))} className="mt-4 inline-flex items-center gap-2 text-base font-bold text-indigo-600 transition-colors hover:text-indigo-500">
                        {t('whoWebLink')}
                        <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                </motion.div>
            </section>

            {/* Foreign owners: a shorter section, after the situations everyone shares. */}
            <section className="bg-stone-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('expatHeading')}</h2>
                    <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{t('expatLead')}</p>
                    <ul className="mt-5 space-y-3">
                        {expat.map((line) => (
                            <li key={line} className="border-l-2 border-indigo-600 pl-5 text-base leading-7 text-slate-700">
                                {line}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-6 text-base leading-8 text-slate-600">{t('expatBody')}</p>
                    <motion.div {...fadeUp} className="mt-6">
                        <Link to={lp(ROUTE_HUA_HIN)} className="inline-flex items-center gap-2 text-base font-bold text-indigo-600 transition-colors hover:text-indigo-500">
                            {t('whoHuaHinLink')}
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('finalHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{t('finalBody')}</p>
                    <div className="mt-8 flex justify-center">
                        <FitCallButtons place="who-final" />
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default WhoWeHelp;
