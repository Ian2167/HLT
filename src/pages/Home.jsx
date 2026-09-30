// Home.jsx — the home page. REBUILT 30 September 2026, the visibility refresh (bridge row 4007 and
// Ian's fuller spec of the same day, sections 6 to 14, "you build based on the following").
//
// THE ORDER IS THE SPEC'S. Hero; the problem as the owner's week; how HLT works in three steps;
// the human-judgement section; the six blindspots; how we work; case study zero; the closing call
// to action. Every string comes from src/copy/visibilityRefresh.js except the three keep, transfer,
// remove cards (src/copy/newDirection.js, Ian's "Agreed" of 27 September) and the AI line under the
// three steps (src/copy/homeRebuild.js, Ian's own words of 17 September). Nothing on this page is
// the builder's wording.
//
// WHAT WENT. The 18 September bands this replaces (the three capability cards, the five-line
// "what you can hold us to" panel, the 30 September six-blindspot list of the 12:42 session) stop
// rendering; their strings stay in their modules, on Ian's "do not delete". The capabilities now
// live inside step three of the spec's copy, which names them. The 27 September line under the
// hero headline, "Keep the judgement. Remove the dependency.", moved down the page to head the
// section the spec gives it, with the three cards it belongs to.
//
// ONE PRIMARY ACTION, TWICE. "Start with the Business Read" in the hero and in the closing band, on
// the spec's CTA architecture (section 37); "Talk to us" beside it opens LINE. On a phone both are
// full width and there are never more than two above the fold.
//
// MOTION comes from src/lib/motion.js so the prerender can switch it off; see that file.
//
// THE HERO PHOTOGRAPH is unchanged, keys and all: Ian's own ruling of 15 September, wash at 55 per
// cent, the crop anchored on the roofline.
import { motion } from 'framer-motion';
import {
    ArrowRight,
    BookOpen,
    ClipboardCheck,
    GitBranch,
    Lightbulb,
    Puzzle,
    Scissors,
    Search,
    ShieldCheck,
    Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LINE_OFFICIAL_ACCOUNT } from '../constants/contact';
import {
    ROUTE_BUSINESS_BLINDSPOTS,
    ROUTE_BUSINESS_READ,
    ROUTE_HOME,
    ROUTE_HOW_IT_WORKS,
} from '../constants/routes';
import ProcessNumber from '../components/mocks/ProcessNumber';
import Seo from '../components/Seo';
import { fadeUp, fadeUpDelayed, heroIn } from '../lib/motion';

export const CTA_CLASSES =
    'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-indigo-950/20 transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:w-auto';

export const SECONDARY_CTA_CLASSES =
    'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/50 px-7 py-4 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:w-auto';

const TEXT_LINK_CLASSES =
    'inline-flex items-center gap-2 text-base font-bold text-indigo-600 transition-colors hover:text-indigo-500';

// Marks, not copy: one glyph per card. The three keep, transfer, remove glyphs are the 27 September
// ones; the six blindspot glyphs are new, chosen from the same lucide set the site already uses.
const KTR_ICONS = [ShieldCheck, BookOpen, Scissors];
const BLIND_ICONS = [Users, Lightbulb, GitBranch, Puzzle, Search, ClipboardCheck];

const Home = () => {
    const { t, lp } = useLanguage();

    const signs = [1, 2, 3, 4, 5, 6, 7].map((n) => t(`homeSign${n}`));
    const stages = [1, 2, 3].map((n) => ({ n, name: t(`homeStage${n}Name`), body: t(`homeStage${n}Body`) }));
    const ktr = [1, 2, 3].map((n) => ({ name: t(`homeKtr${n}Name`), body: t(`homeKtr${n}Body`), Icon: KTR_ICONS[n - 1] }));
    const blindspots = [1, 2, 3, 4, 5, 6].map((n) => ({
        name: t(`homeBlind${n}Name`),
        body: t(`homeBlind${n}Body`),
        note: n === 4 ? t('homeBlind4Note') : null,
        Icon: BLIND_ICONS[n - 1],
    }));
    const trust = [1, 2, 3, 4, 5, 6].map((n) => t(`homeTrust${n}`));

    return (
        <div className="min-h-screen bg-stone-50 pt-20 text-slate-950 lg:pt-24">
            <Seo title={t('homeMetaTitle')} description={t('homeMetaDescription')} route={ROUTE_HOME} organization />

            {/* 1. Hero. One outcome, one supporting sentence, two actions, one line of microcopy. */}
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
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl sm:leading-9">
                            {t('homeHeroLead')}
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                            <Link to={lp(ROUTE_BUSINESS_READ)} className={CTA_CLASSES}>
                                {t('homeCtaLabel')}
                                <ArrowRight size={18} aria-hidden="true" />
                            </Link>
                            <a href={LINE_OFFICIAL_ACCOUNT} target="_blank" rel="noopener noreferrer" className={SECONDARY_CTA_CLASSES}>
                                {t('homeSecondaryCtaLabel')}
                            </a>
                        </div>
                        <p className="mt-5 text-sm leading-6 text-slate-200 sm:text-base">{t('homeHeroCtaNote')}</p>
                    </motion.div>
                </div>
            </section>

            {/* 2. The problem, in the owner's own week. Seven signs, one card each, one column on a
                phone so nothing reads as a dense grid, then the line that names the cause. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('homeProblemHeading')}
                    </motion.h2>
                    <motion.p {...fadeUp} className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-slate-600 sm:text-lg">
                        {t('homeProblemLead')}
                    </motion.p>
                    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                        {signs.map((sign, index) => (
                            <motion.li
                                key={sign}
                                {...fadeUpDelayed(index)}
                                className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5 card-glass sm:p-6"
                            >
                                <ProcessNumber label={`${index + 1}`} decorative />
                                <span className="text-base leading-7 text-slate-700">{sign}</span>
                            </motion.li>
                        ))}
                    </ul>
                    <motion.p {...fadeUp} className="mx-auto mt-10 max-w-3xl text-center text-lg font-semibold leading-8 text-slate-950">
                        {t('homeConsequenceP1')}
                    </motion.p>
                </div>
            </section>

            {/* 3. How HLT works: understand, diagnose, improve. The connector between the cards is
                drawn in the gap, as on 18 September. AI's one line sits under the steps, in Ian's
                own words, visible and subordinate. */}
            <section className="bg-stone-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('homeStagesHeading')}
                    </motion.h2>
                    <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
                        {stages.map((stage, index) => (
                            <motion.li
                                key={stage.name}
                                {...fadeUpDelayed(index, 0.08)}
                                className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 card-glass"
                            >
                                {index < stages.length - 1 ? (
                                    <>
                                        <span aria-hidden="true" className="absolute left-[3.75rem] top-full h-8 w-px bg-slate-300 md:hidden" />
                                        <span aria-hidden="true" className="absolute left-full top-[3.75rem] hidden h-px w-6 bg-slate-300 md:block" />
                                    </>
                                ) : null}
                                <ProcessNumber label={`${stage.n}`} size="lg" decorative />
                                <h3 className="mt-6 text-xl font-bold leading-7 text-slate-950">{stage.name}</h3>
                                <p className="mt-3 text-base leading-7 text-slate-600">{stage.body}</p>
                            </motion.li>
                        ))}
                    </ol>
                    <motion.p {...fadeUp} className="mx-auto mt-10 max-w-3xl text-center text-base leading-8 text-slate-600">
                        {t('homeAiLine')}
                    </motion.p>
                    <motion.div {...fadeUp} className="mt-5 text-center">
                        <Link to={lp(ROUTE_HOW_IT_WORKS)} className={TEXT_LINK_CLASSES}>
                            {t('homeStagesLinkLabel')}
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 4. Keep the judgement. Remove the dependency. The spec's three lines, then Ian's three
                cards of 27 September, which are how the sorting is done. Navy, the turn from problem
                to answer. */}
            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('homeHumanHeading')}
                    </motion.h2>
                    <motion.div {...fadeUp} className="mx-auto mt-6 max-w-2xl space-y-3 text-center text-base leading-8 text-slate-200 sm:text-lg">
                        <p>{t('homeHumanP1')}</p>
                        <p>{t('homeHumanP2')}</p>
                        <p className="font-semibold text-white">{t('homeHumanP3')}</p>
                    </motion.div>
                    <ul className="mt-10 grid gap-5 md:grid-cols-3">
                        {ktr.map((item, index) => (
                            <motion.li
                                key={item.name}
                                {...fadeUpDelayed(index, 0.06)}
                                className="rounded-2xl border border-white/15 bg-white/[0.06] p-7"
                            >
                                <item.Icon size={26} className="text-indigo-200" aria-hidden="true" />
                                <h3 className="mt-4 text-xl font-bold">{item.name}</h3>
                                <p className="mt-3 text-base leading-7 text-slate-200">{item.body}</p>
                            </motion.li>
                        ))}
                    </ul>
                    <motion.p {...fadeUp} className="mx-auto mt-10 max-w-2xl text-center text-lg font-semibold leading-8">
                        {t('homeKtrClosing')}
                    </motion.p>
                </div>
            </section>

            {/* 5. The six blindspots. Icon left of the heading, one column on a phone, three on a
                laptop; the fourth carries the Thailand note the spec gives it. Ends on the free
                test, the "Learn" rung of the spec's three-level CTA architecture. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('homeBlindHeading')}
                    </motion.h2>
                    <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {blindspots.map((item, index) => (
                            <motion.li
                                key={item.name}
                                {...fadeUpDelayed(index, 0.05)}
                                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-stone-50 p-6 card-glass card-static"
                            >
                                <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-hltNavy text-white">
                                    <item.Icon size={20} />
                                </span>
                                <div className="min-w-0">
                                    <h3 className="text-lg font-bold leading-7 text-slate-950">{item.name}</h3>
                                    <p className="mt-2 text-base leading-7 text-slate-600">{item.body}</p>
                                    {item.note ? <p className="mt-3 text-sm leading-6 text-slate-500">{item.note}</p> : null}
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                    <motion.div {...fadeUp} className="mt-10 text-center">
                        <Link to={lp(ROUTE_BUSINESS_BLINDSPOTS)} className={TEXT_LINK_CLASSES}>
                            {t('homeBlindCtaLabel')}
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 6. How we work. Six commitments in one panel, indigo-ruled, the form the 18 September
                proof block took. Commitments and mechanism, never a result. */}
            <section className="bg-stone-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('homeTrustHeading')}
                    </motion.h2>
                    <div className="mx-auto max-w-3xl">
                        <ul className="mt-8 space-y-4 rounded-2xl border border-slate-200 p-6 card-glass sm:p-7">
                            {trust.map((line, index) => (
                                <motion.li
                                    key={line}
                                    {...fadeUpDelayed(index)}
                                    className="border-l-2 border-indigo-600 pl-5 text-base leading-7 text-slate-700"
                                >
                                    {line}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 7. Case study zero. The test HLT ran on itself, rendered because the report names what
                was tested and when. Proof of method before there is a client library. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-stone-50 p-7 card-glass card-static sm:p-9">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('homeCaseZeroHeading')}</h2>
                    <div className="mt-5 space-y-3 text-base leading-8 text-slate-600">
                        <p>{t('homeCaseZeroP1')}</p>
                        <p>{t('homeCaseZeroP2')}</p>
                        <p className="font-semibold text-slate-950">{t('homeCaseZeroP3')}</p>
                    </div>
                    <div className="mt-6">
                        <Link to={lp(ROUTE_BUSINESS_BLINDSPOTS)} className={TEXT_LINK_CLASSES}>
                            {t('homeCaseZeroCta')}
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* 8. Closing. The same primary action as the hero, and Talk to us beside it. */}
            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('homeClosingHeading')}</h2>
                    <div className="mx-auto mt-5 max-w-2xl space-y-3 text-base leading-8 text-slate-200 sm:text-lg">
                        <p>{t('homeClosingP1')}</p>
                        <p>{t('homeClosingP2')}</p>
                        <p>{t('homeClosingP3')}</p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                        <Link to={lp(ROUTE_BUSINESS_READ)} className={CTA_CLASSES}>
                            {t('homeCtaLabel')}
                            <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                        <a href={LINE_OFFICIAL_ACCOUNT} target="_blank" rel="noopener noreferrer" className={SECONDARY_CTA_CLASSES}>
                            {t('homeSecondaryCtaLabel')}
                        </a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
