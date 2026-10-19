// Home.jsx — the home page. REORDERED 19 October 2026 (the site review, round 2).
//
// THE ORDER, each section answering a new question:
//   1 hero        who it's for, their goal, what the Business Read gives them (Ian's goals-first
//                 headline of 18 October and his one button), beside the illustrated enquiry
//   2 example     one small, concrete change: today, what we'd change, if it's late, what you'd notice
//   3 stages      Understand / Diagnose / Improve
//   4 sample      the sample map and the one-priority plan SHOWN, not described (SamplePreview), with
//                 links to the full map, the plan and the website demonstration. This is the proof,
//                 now the fourth section rather than about nine screens down.
//   5 goals       "Which is closest to what you want?" six goal cards, each to the page that explains it
//   6 follow      what can follow, each scoped separately: a website (first and largest, the website
//                 capability), the enquiry journey, marketing, processes
//   7 next        what happens next, in three steps, and the free self-check for anyone not ready
//   8 faq         short answers
//   9 final       the Fit Call, the Business Read beside it, LINE and WhatsApp
//
// WHAT MOVED OFF THE HOME PAGE. The leak list, the three problems, the week-away question, the method
// flow, the six-part control flow, the four modules and "where AI fits". Their strings stay in their
// modules on Ian's "do not delete"; the control flow and a plain-language glossary now sit on
// /problems-we-fix, and the week-away question's job (sending people to the self-check) is a link in
// section 7. Copy for the new sections: src/copy/improvements1019.js.
//
// THE HERO PHOTOGRAPH is unchanged, keys and all: Ian's own ruling of 15 September, wash at 55 per
// cent, the crop anchored on the roofline. MOTION comes from src/lib/motion.js (reduced motion is
// honoured app-wide by MotionConfig in src/App.jsx).
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, ClipboardCheck, Inbox, LayoutGrid, MessageCircle, MonitorSmartphone, Repeat, Route, Search, UserCog, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
    ROUTE_BUSINESS_BLINDSPOTS,
    ROUTE_BUSINESS_READ,
    ROUTE_EXAMPLES,
    ROUTE_HOME,
    ROUTE_HOW_IT_WORKS,
    ROUTE_OWNER_DEPENDENCY,
    ROUTE_PROBLEMS,
    capabilityRoute,
} from '../constants/routes';
import Seo from '../components/Seo';
import FitCallButtons from '../components/FitCallButtons';
import { AccentRule, HeroFlowCard, StagesBand } from '../components/offer/OfferBands';
import { SamplePreview } from '../components/offer/SampleArtefacts';
import { EVENTS, logEvent } from '../lib/analytics';
import { fadeUp, fadeUpDelayed, heroIn } from '../lib/motion';

export const CTA_CLASSES =
    'press inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-indigo-950/20 transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:w-auto';

export const SECONDARY_CTA_CLASSES =
    'press inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/50 px-7 py-4 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:w-auto';

const TEXT_LINK_CLASSES =
    'inline-flex items-center gap-2 text-base font-bold text-indigo-600 transition-colors hover:text-indigo-500';

// The free test's button: outlined in the site's indigo on the light ground, full width on a phone.
export const OUTLINE_CTA_CLASSES =
    'press inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-indigo-600 px-7 py-4 text-base font-bold text-indigo-700 transition-colors hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:w-auto';

// The small example: four beats, read in order.
const EXAMPLE_BEATS = [
    { label: 'hxTodayLabel', body: 'hxToday', Icon: MessageCircle },
    { label: 'hxChangeLabel', body: 'hxChange', Icon: Inbox },
    { label: 'hxLateLabel', body: 'hxLate', Icon: UserCog },
    { label: 'hxNoticeLabel', body: 'hxNotice', Icon: ClipboardCheck },
];

// The goal cards: each one to the page that explains it.
const GOALS = [
    { n: 1, Icon: Search, to: `${ROUTE_PROBLEMS}#finding-you` },
    { n: 2, Icon: MonitorSmartphone, to: capabilityRoute('websites') },
    { n: 3, Icon: Inbox, to: `${ROUTE_PROBLEMS}#revenue-capture` },
    { n: 4, Icon: Repeat, to: `${ROUTE_PROBLEMS}#commercial-follow-through` },
    { n: 5, Icon: Users, to: ROUTE_OWNER_DEPENDENCY },
    { n: 6, Icon: BarChart3, to: `${ROUTE_PROBLEMS}#daily-business-pulse` },
];

// What can follow. The website first and largest; the others beside it.
const FOLLOW = [
    { n: 2, Icon: Route, to: `${ROUTE_EXAMPLES}#sales-path` },
    { n: 3, Icon: Search, to: ROUTE_BUSINESS_BLINDSPOTS },
    { n: 4, Icon: LayoutGrid, to: `${ROUTE_HOW_IT_WORKS}#delivery` },
];

const Home = () => {
    const { t, lp } = useLanguage();
    const faqs = [1, 2, 3, 4, 5].map((n) => ({ q: t(`homeFaq${n}Q`), a: t(`homeFaq${n}A`) }));

    return (
        <div className="min-h-screen bg-sand-50 pt-20 text-slate-950 lg:pt-24">
            <Seo title={t('homeMetaTitle')} description={t('homeMetaDescription')} route={ROUTE_HOME} organization />

            {/* 1. Hero: the goals-first headline, who it's for and what the Read gives, one button. */}
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

                <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-8 lg:py-24">
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
                    <div className="lg:justify-self-end">
                        <HeroFlowCard />
                    </div>
                </div>
            </section>

            {/* 2. One small, concrete example. */}
            <section id="example" className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <AccentRule />
                    <motion.div {...fadeUp} className="text-center">
                        <span className="inline-block rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-amber-800">
                            {t('hxTag')}
                        </span>
                        <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">{t('hxHeading')}</h2>
                    </motion.div>
                    <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {EXAMPLE_BEATS.map((beat, index) => (
                            <motion.li
                                key={beat.label}
                                {...fadeUpDelayed(index, 0.05)}
                                className="flex flex-col rounded-2xl border border-sand-300 bg-sand-50 p-5"
                            >
                                <span className="flex items-center gap-3">
                                    <span aria-hidden="true" className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-hltNavy text-saffron-400">
                                        <beat.Icon size={18} />
                                    </span>
                                    <span className="text-sm font-bold uppercase tracking-[0.14em] text-saffron-700">{t(beat.label)}</span>
                                </span>
                                <p className="mt-3 text-base leading-7 text-slate-800">{t(beat.body)}</p>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* 3. Understand, Diagnose, Improve. */}
            <StagesBand />

            {/* 4. The sample map and the one-priority plan, shown. */}
            <section id="sample" className="bg-sand-200 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <AccentRule />
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('hpHeading')}
                    </motion.h2>
                    <motion.p {...fadeUp} className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-slate-600 sm:text-lg">
                        {t('hpLead')}
                    </motion.p>
                    <motion.div {...fadeUp} className="mt-8">
                        <SamplePreview />
                    </motion.div>
                </div>
            </section>

            {/* 5. Which is closest to what you want? */}
            <section id="goals" className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <AccentRule />
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('goalsHeading')}
                    </motion.h2>
                    <motion.p {...fadeUp} className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-slate-600 sm:text-lg">
                        {t('goalsLead')}
                    </motion.p>
                    <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {GOALS.map((goal, index) => (
                            <motion.li key={goal.n} {...fadeUpDelayed(index, 0.05)}>
                                <Link
                                    to={lp(goal.to)}
                                    className="press flex h-full items-start gap-4 rounded-2xl border border-sand-300 bg-sand-50 p-5 shadow-sm transition-colors hover:border-saffron-500 sm:p-6"
                                >
                                    <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500 text-hltNavy">
                                        <goal.Icon size={20} />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block text-lg font-bold leading-7 text-slate-950">{t(`goal${goal.n}Name`)}</span>
                                        <span className="mt-1 block text-base leading-7 text-slate-600">{t(`goal${goal.n}Body`)}</span>
                                        <span className={`${TEXT_LINK_CLASSES} mt-3 text-sm`}>
                                            {t('goalsCta')}
                                            <ArrowRight size={16} aria-hidden="true" />
                                        </span>
                                    </span>
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 6. What can follow, each scoped separately. The website first. */}
            <section id="websites" className="navy-glow bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.div {...fadeUp} className="max-w-3xl">
                        <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('followHeading')}</h2>
                        <p className="mt-5 text-base leading-8 text-slate-200 sm:text-lg">{t('followLead')}</p>
                    </motion.div>
                    <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
                        <motion.div {...fadeUp} className="overflow-hidden rounded-2xl border border-white/15 bg-white/5">
                            <img src="/images/offer/phone-in-hand.jpg" alt="A hand holding a phone" loading="lazy" className="h-48 w-full object-cover sm:h-56" />
                            <div className="p-6 sm:p-7">
                                <MonitorSmartphone size={28} aria-hidden="true" className="text-saffron-400" />
                                <h3 className="mt-3 text-xl font-bold">{t('follow1Name')}</h3>
                                <p className="mt-2 text-base leading-7 text-slate-200">{t('follow1Body')}</p>
                                <Link
                                    to={lp(capabilityRoute('websites'))}
                                    className="mt-5 inline-flex items-center gap-2 text-base font-bold text-saffron-300 transition-colors hover:text-white"
                                >
                                    {t('websitesBandCta')}
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                        </motion.div>
                        <ul className="grid gap-4">
                            {FOLLOW.map((item, index) => (
                                <motion.li key={item.n} {...fadeUpDelayed(index, 0.05)}>
                                    <Link to={lp(item.to)} className="press flex h-full items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 transition-colors hover:border-saffron-400">
                                        <span aria-hidden="true" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-saffron-400">
                                            <item.Icon size={18} />
                                        </span>
                                        <span className="min-w-0">
                                            <span className="block text-lg font-bold leading-7">{t(`follow${item.n}Name`)}</span>
                                            <span className="mt-1 block text-base leading-7 text-slate-200">{t(`follow${item.n}Body`)}</span>
                                        </span>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 7. What happens next, and the self-check for anyone not ready to talk. */}
            <section id="next" className="bg-sand-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    <AccentRule />
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('nextHeading')}
                    </motion.h2>
                    <ol className="mt-10 grid gap-5 md:grid-cols-3">
                        {[1, 2, 3].map((n, index) => (
                            <motion.li key={n} {...fadeUpDelayed(index, 0.06)} className="rounded-2xl border border-sand-300 bg-white p-6 shadow-sm">
                                <span className="text-sm font-bold text-saffron-700">{n}</span>
                                <h3 className="mt-1 text-lg font-bold leading-7 text-slate-950">{t(`next${n}Name`)}</h3>
                                <p className="mt-2 text-base leading-7 text-slate-600">{t(`next${n}Body`)}</p>
                            </motion.li>
                        ))}
                    </ol>
                    <motion.p {...fadeUp} className="mt-8 text-center">
                        <Link
                            to={lp(ROUTE_BUSINESS_BLINDSPOTS)}
                            onClick={() => logEvent(EVENTS.blindspotCtaClick, { place: 'home-next' })}
                            className={TEXT_LINK_CLASSES}
                        >
                            {t('nextSelfCheck')}
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                    </motion.p>
                </div>
            </section>

            {/* 8. Short answers. */}
            <section id="faq" className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <AccentRule />
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('homeFaqHeading')}
                    </motion.h2>
                    <div className="mt-8 divide-y divide-sand-300 rounded-2xl border border-sand-300 bg-sand-50">
                        {faqs.map((faq) => (
                            <details key={faq.q} className="group px-5 py-4 sm:px-6">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold leading-7 text-slate-950">
                                    {faq.q}
                                    <ArrowRight size={16} aria-hidden="true" className="shrink-0 text-indigo-600 transition-transform group-open:rotate-90 motion-reduce:transition-none" />
                                </summary>
                                <p className="mt-2 text-base leading-7 text-slate-600">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. The final call. */}
            <section className="navy-glow bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
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
