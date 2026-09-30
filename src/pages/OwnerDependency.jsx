// OwnerDependency.jsx — /owner-dependency and /en/owner-dependency. Built 30 September 2026, the
// visibility refresh (Ian's fuller spec of the same day, sections 21 and 22).
//
// WHAT THIS PAGE IS. The spec's owner-dependency page: an H1 that is the whole argument, two lines
// of intro, the five-way sorting HLT applies to everything that depends on the owner (preserve,
// support, transfer, remove, escalate), the closing line, and one action. The sorting is also what
// the Business Read delivers (the first dependency map, Ian's 27 September ruling), which the lead
// line says.
//
// WHY IT EXISTS WHEN THE ORIGINAL BRIEF DID NOT LIST IT. The spec's header and footer both link to
// it; Ian's paste of the fuller spec on 30 September put it in scope; a navigation link to a page
// that does not exist is the one thing a header must never do. Listed in the report.
//
// COPY: src/copy/visibilityRefresh.js, English from the spec, Thai a machine draft under review.
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BookOpen, Compass, Scissors, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LINE_OFFICIAL_ACCOUNT } from '../constants/contact';
import { ROUTE_BUSINESS_BLINDSPOTS, ROUTE_BUSINESS_READ, ROUTE_OWNER_DEPENDENCY } from '../constants/routes';
import Seo from '../components/Seo';
import { CTA_CLASSES, SECONDARY_CTA_CLASSES } from './Home';
import { fadeUp, fadeUpDelayed, heroIn } from '../lib/motion';

// Marks, not copy. Preserve, support, transfer and remove reuse the keep, transfer, remove glyphs
// the home page already carries; escalate gets the arrow that points up and out.
const ICONS = [ShieldCheck, Compass, BookOpen, Scissors, ArrowUpRight];

const OwnerDependency = () => {
    const { t, lp } = useLanguage();
    const kinds = [1, 2, 3, 4, 5].map((n) => ({ name: t(`od${n}Name`), body: t(`od${n}Body`), Icon: ICONS[n - 1] }));

    return (
        <div className="min-h-screen bg-stone-50 pt-20 text-slate-950 lg:pt-24">
            <Seo title={t('odMetaTitle')} description={t('odMetaDescription')} route={ROUTE_OWNER_DEPENDENCY} />

            <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...heroIn} className="mx-auto max-w-3xl">
                    <h1 className="text-[2rem] font-bold leading-[1.15] sm:text-5xl sm:leading-[1.1]">{t('odH1')}</h1>
                    <div className="mt-6 space-y-3 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                        <p>{t('odIntro1')}</p>
                        <p className="font-semibold text-slate-950">{t('odIntro2')}</p>
                    </div>
                    <div className="mt-8">
                        <Link to={lp(ROUTE_BUSINESS_READ)} className={CTA_CLASSES}>
                            {t('odCta')}
                            <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* The five kinds. One card each, icon left, one column on a phone. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('odClassHeading')}
                    </motion.h2>
                    <motion.p {...fadeUp} className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-slate-600 sm:text-lg">
                        {t('odClassLead')}
                    </motion.p>
                    <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {kinds.map((kind, index) => (
                            <motion.li
                                key={kind.name}
                                {...fadeUpDelayed(index, 0.05)}
                                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-stone-50 p-6 card-glass card-static"
                            >
                                <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-hltNavy text-white">
                                    <kind.Icon size={20} />
                                </span>
                                <div className="min-w-0">
                                    <h3 className="text-lg font-bold uppercase tracking-wide text-slate-950">{kind.name}</h3>
                                    <p className="mt-2 text-base leading-7 text-slate-600">{kind.body}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* The closing line is the heading: it is the page's one sentence. */}
            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('odClosing')}</h2>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                        <Link to={lp(ROUTE_BUSINESS_READ)} className={CTA_CLASSES}>
                            {t('odCta')}
                            <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                        <a href={LINE_OFFICIAL_ACCOUNT} target="_blank" rel="noopener noreferrer" className={SECONDARY_CTA_CLASSES}>
                            {t('navTalkLabel')}
                        </a>
                    </div>
                    <p className="mt-6 text-sm text-slate-300">
                        <Link to={lp(ROUTE_BUSINESS_BLINDSPOTS)} className="underline underline-offset-4 transition-colors hover:text-white">
                            {t('odBlindLink')}
                        </Link>
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default OwnerDependency;
