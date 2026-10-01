// WhoWeHelp.jsx — /who-we-help and /en/who-we-help. Built 1 October 2026, the repositioning
// (Ian's brief of that morning, sections 15 and 16, and his "Agreed to the Home and other page
// structuring").
//
// WHAT THIS PAGE IS. Owner-led service businesses in Thailand: what "usually that means" looks
// like, the sectors as examples, the line that not every small business needs this, then the
// expat and international owner section the brief asks for ("Running a Thai business shouldn't
// mean carrying it everywhere with you"), the hand to the Hua Hin page, and the Fit Call. No
// sector is priced or promised anything; the brief's words are kept.
//
// COPY: src/copy/repositioning.js.
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_HUA_HIN, ROUTE_WHO } from '../constants/routes';
import Seo from '../components/Seo';
import FitCallButtons from '../components/FitCallButtons';
import { fadeUp, fadeUpDelayed, heroIn } from '../lib/motion';

const WhoWeHelp = () => {
    const { t, lp } = useLanguage();
    const fit = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => t(`whoFit${n}`));
    const examples = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => t(`whoEx${n}`));
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

            {/* Usually that means. Eight lines, ticked. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <motion.h2 {...fadeUp} className="text-2xl font-bold leading-tight sm:text-3xl">
                        {t('whoFitLabel')}
                    </motion.h2>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {fit.map((line, index) => (
                            <motion.li key={line} {...fadeUpDelayed(index)} className="flex gap-3 text-base leading-7 text-slate-700">
                                <span className="mt-1 shrink-0 text-indigo-600">
                                    <Check size={20} aria-hidden="true" />
                                </span>
                                <span>{line}</span>
                            </motion.li>
                        ))}
                    </ul>
                    <motion.p {...fadeUp} className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                        {t('whoExamplesLabel')}
                    </motion.p>
                    <motion.ul {...fadeUp} className="mt-3 flex flex-wrap gap-2">
                        {examples.map((example) => (
                            <li key={example} className="rounded-full border border-slate-200 bg-stone-50 px-4 py-2 text-sm font-semibold text-slate-800">
                                {example}
                            </li>
                        ))}
                    </motion.ul>
                    <motion.p {...fadeUp} className="mt-8 text-lg font-semibold leading-8 text-slate-950">
                        {t('whoNotEvery')}
                    </motion.p>
                    <motion.div {...fadeUp} className="mt-6">
                        <Link to={lp(ROUTE_HUA_HIN)} className="inline-flex items-center gap-2 text-base font-bold text-indigo-600 transition-colors hover:text-indigo-500">
                            {t('whoHuaHinLink')}
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* International and expat owners. */}
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
                    <p className="mt-3 text-lg font-semibold leading-8 text-slate-950">{t('expatLine')}</p>
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
