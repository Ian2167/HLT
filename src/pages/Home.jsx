// Home.jsx — the home page. REBUILT 1 October 2026, the repositioning (Ian's "HIGH LEVEL THAI
// WEBSITE REPOSITIONING BRIEF" of that morning, reviewed with his minimal owner-friendly edits at
// C:\Projects\hlt-estate\02-builds\hlt-site-kit\2026-10-01-HLT-REPOSITIONING-BRIEF-REVIEWED.md, and
// his rulings in the same conversation: "Agreed to the Home and other page structuring").
//
// THE ORDER IS THE AGREED TEN. 1 hero; 2 small problems and the leak visual; 3 the three problems;
// 4 the week-away question, which hands to the free Blindspot Test; 5 the method flow; 6 the
// control flow; 7 the four problem modules, which hand to Problems We Fix; 8 where AI fits, short;
// 9 who we help, one line, which hands to Who We Help; 10 the final call. Every string comes from
// src/copy/repositioning.js except the free test's button (src/copy/visibilityRefresh.js, Ian's
// 30 September wording) and the hero photograph's keys.
//
// THE HERO IS IAN'S OWN, pasted on 1 October: the headline, one paragraph, one button, "Start with
// The Business Read". Nothing else sits in it: no sub-header, no micro line, no second button. The
// Fit Call is one tap away in the header on every page.
//
// WHAT WENT. The 30 September bands this replaces (the seven signs, the three stages, keep,
// transfer, remove, the six blindspot cards, the six trust lines, case study zero, the closing
// three lines) stop rendering; their strings stay in their modules, on Ian's "do not delete". The
// six blindspots are the free test on /business-blindspots; case study zero moved to that page;
// keep, transfer, remove lives on /owner-dependency as the five kinds.
//
// THE THREE FLOWS are components under src/components/flows/, drawn in HTML, no raster, and read in
// order without the arrows. LeakVisual is the same idea for section 2.
//
// MOTION comes from src/lib/motion.js so the prerender can switch it off; see that file.
//
// THE HERO PHOTOGRAPH is unchanged, keys and all: Ian's own ruling of 15 September, wash at 55 per
// cent, the crop anchored on the roofline.
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Clock, Eye, Repeat, UserCog, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_BUSINESS_BLINDSPOTS, ROUTE_BUSINESS_READ, ROUTE_HOME, ROUTE_PROBLEMS, ROUTE_WHO } from '../constants/routes';
import Seo from '../components/Seo';
import LeakVisual from '../components/LeakVisual';
import ProcessFlow from '../components/flows/ProcessFlow';
import ControlFlow from '../components/flows/ControlFlow';
import FitCallButtons from '../components/FitCallButtons';
import { EVENTS, logEvent } from '../lib/analytics';
import { fadeUp, fadeUpDelayed, heroIn } from '../lib/motion';

export const CTA_CLASSES =
    'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-indigo-950/20 transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:w-auto';

export const SECONDARY_CTA_CLASSES =
    'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/50 px-7 py-4 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:w-auto';

const TEXT_LINK_CLASSES =
    'inline-flex items-center gap-2 text-base font-bold text-indigo-600 transition-colors hover:text-indigo-500';

// The free test's button: outlined in the site's indigo on the light ground, full width on a phone.
// Ian, 30 September: the Blindspot Test call "should include FREE and be more obvious".
export const OUTLINE_CTA_CLASSES =
    'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-indigo-600 px-7 py-4 text-base font-bold text-indigo-700 transition-colors hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:w-auto';

// Marks, not copy: one glyph per problem and per module, from the lucide set the site already uses.
const PROBLEM_ICONS = [Wallet, UserCog, Eye];
const MODULE_ICONS = [Wallet, Repeat, UserCog, BarChart3];

const Home = () => {
    const { t, lp } = useLanguage();

    const problems = [1, 2, 3].map((n) => ({
        name: t(`p${n}Name`),
        headline: t(`p${n}Headline`),
        examples: [1, 2, 3, 4, 5, 6].map((i) => t(`p${n}Ex${i}`)).filter((s) => !/^p\dEx\d$/.test(s)),
        outcome: t(`p${n}Outcome`),
        Icon: PROBLEM_ICONS[n - 1],
    }));
    const modules = [1, 2, 3, 4].map((n) => ({
        slug: ['revenue-capture', 'commercial-follow-through', 'owner-decision-control', 'daily-business-pulse'][n - 1],
        name: t(`m${n}Name`),
        headline: t(`m${n}Headline`),
        Icon: MODULE_ICONS[n - 1],
    }));

    return (
        <div className="min-h-screen bg-stone-50 pt-20 text-slate-950 lg:pt-24">
            <Seo title={t('homeMetaTitle')} description={t('homeMetaDescription')} route={ROUTE_HOME} organization />

            {/* 1. Hero: Ian's headline, his paragraph, his button. */}
            <section className="relative flex min-h-[32rem] items-center overflow-hidden lg:min-h-[36rem]">
                <img
                    src={t('homeHeroImage')}
                    alt={t('homeHeroImageAlt')}
                    className="absolute inset-0 h-full w-full object-cover object-bottom"
                    loading="eager"
                    fetchPriority="high"
                />
                <div className="absolute inset-0 bg-hltNavy/55" />
                <div className="absolute inset-0 bg-gradient-to-r from-hltNavy/70 via-hltNavy/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-hltNavy/30 via-transparent to-hltNavy/60" />

                <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                    <motion.div {...heroIn} className="max-w-3xl">
                        <h1 className="text-[2.125rem] font-bold leading-[1.15] text-white sm:text-5xl sm:leading-[1.1]">
                            {t('homeHeroHeadline')}
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl sm:leading-9">{t('homeHeroLead')}</p>
                        <div className="mt-8">
                            <Link
                                to={lp(ROUTE_BUSINESS_READ)}
                                onClick={() => logEvent(EVENTS.businessReadCtaClick, { place: 'hero' })}
                                className={CTA_CLASSES}
                            >
                                {t('homeCtaLabel')}
                                <ArrowRight size={18} aria-hidden="true" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Small problems become expensive when nobody owns them. The seven leaks feeding
                the three losses, drawn as text. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('leakHeading')}
                    </motion.h2>
                    <motion.p {...fadeUp} className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-slate-600 sm:text-lg">
                        {t('leakLead')}
                    </motion.p>
                    <motion.div {...fadeUp} className="mx-auto mt-8 max-w-4xl">
                        <LeakVisual />
                    </motion.div>
                    <motion.div {...fadeUp} className="mx-auto mt-8 max-w-3xl text-center">
                        <p className="text-base leading-7 text-slate-600 sm:text-lg">{t('leakClose1')}</p>
                        <p className="mt-1 text-lg font-semibold leading-8 text-slate-950">{t('leakClose2')}</p>
                    </motion.div>
                </div>
            </section>

            {/* 3. The three problems. Name, headline, what it looks like, what we put in place. One
                column on a phone, three on a laptop, every card the same height. */}
            <section className="bg-stone-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('problemsHeading')}
                    </motion.h2>
                    <ul className="mt-10 grid gap-5 lg:grid-cols-3">
                        {problems.map((problem, index) => (
                            <motion.li
                                key={problem.name}
                                {...fadeUpDelayed(index, 0.06)}
                                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 card-glass card-static sm:p-7"
                            >
                                <div className="flex items-center gap-3">
                                    <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-hltNavy text-white">
                                        <problem.Icon size={20} />
                                    </span>
                                    <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">{problem.name}</h3>
                                </div>
                                <p className="mt-4 text-xl font-bold leading-7 text-slate-950">{problem.headline}</p>
                                <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{t('problemsExamplesLabel')}</p>
                                <ul className="mt-2 space-y-1 text-base leading-7 text-slate-600">
                                    {problem.examples.map((example) => (
                                        <li key={example} className="flex gap-2">
                                            <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                                            <span>{example}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{t('problemsOutcomeLabel')}</p>
                                <p className="mt-2 flex-1 text-base font-semibold leading-7 text-slate-950">{problem.outcome}</p>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 4. The week away. One question, one line, and the free test. */}
            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <Clock size={32} aria-hidden="true" className="mx-auto text-indigo-200" />
                    <h2 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl">{t('weekHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{t('weekLead')}</p>
                    <div className="mt-8">
                        <Link
                            to={lp(ROUTE_BUSINESS_BLINDSPOTS)}
                            onClick={() => logEvent(EVENTS.blindspotCtaClick, { place: 'home-week' })}
                            className={`${SECONDARY_CTA_CLASSES} border-white/70`}
                        >
                            {t('homeBlindCtaLabel')}
                            <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* 5. We don't start with software. The method, as a flow. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('methodHeading')}
                    </motion.h2>
                    <motion.p {...fadeUp} className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-slate-600 sm:text-lg">
                        {t('methodLead')}
                    </motion.p>
                    <motion.div {...fadeUp} className="mt-10">
                        <ProcessFlow />
                    </motion.div>
                </div>
            </section>

            {/* 6. A process works when nothing can quietly disappear. The control, as a flow. */}
            <section className="bg-stone-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('controlHeading')}
                    </motion.h2>
                    <motion.div {...fadeUp} className="mt-10">
                        <ControlFlow />
                    </motion.div>
                </div>
            </section>

            {/* 7. Common problems we can help fix. The four modules as cards that hand to the
                Problems We Fix page, where each has its headline and possible controls. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('modulesHeading')}
                    </motion.h2>
                    <motion.p {...fadeUp} className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-slate-600 sm:text-lg">
                        {t('modulesLead')}
                    </motion.p>
                    <ul className="mt-10 grid gap-5 md:grid-cols-2">
                        {modules.map((module, index) => (
                            <motion.li key={module.name} {...fadeUpDelayed(index, 0.05)}>
                                <Link
                                    to={`${lp(ROUTE_PROBLEMS)}#${module.slug}`}
                                    className="flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-stone-50 p-6 card-glass transition-colors hover:border-indigo-400"
                                >
                                    <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-hltNavy text-white">
                                        <module.Icon size={20} />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block text-lg font-bold leading-7 text-slate-950">{module.name}</span>
                                        <span className="mt-1 block text-base leading-7 text-slate-600">{module.headline}</span>
                                        <span className={`${TEXT_LINK_CLASSES} mt-3 text-sm`}>
                                            {t('ctaExplore')}
                                            <ArrowRight size={16} aria-hidden="true" />
                                        </span>
                                    </span>
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 8. Where AI fits, in four lines. The full list lives on Problems We Fix. */}
            <section className="bg-stone-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-7 card-glass card-static sm:p-9">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('aiHeading')}</h2>
                    <div className="mt-5 space-y-3 text-base leading-8 text-slate-600">
                        <p>{t('aiLead')}</p>
                        <p className="font-semibold text-slate-950">{t('aiWarning')}</p>
                        <p>{t('aiLine')}</p>
                    </div>
                    <div className="mt-6">
                        <Link to={`${lp(ROUTE_PROBLEMS)}#where-ai-fits`} className={TEXT_LINK_CLASSES}>
                            {t('ctaExplore')}
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* 9. Who we help, one line, and the page. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('whoHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{t('whoHomeTeaser')}</p>
                    <div className="mt-6">
                        <Link to={lp(ROUTE_WHO)} className={TEXT_LINK_CLASSES}>
                            {t('whoNavLink')}
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* 10. The final call. The Fit Call, the Business Read beside it, LINE and WhatsApp
                beneath. */}
            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('finalHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{t('finalBody')}</p>
                    <div className="mt-8 flex justify-center">
                        <FitCallButtons place="home-final" />
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
