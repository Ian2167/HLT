// Examples.jsx — /examples and /en/examples. Built 18 September 2026.
// 30 September 2026, the visibility refresh: per-page head through Seo, links through lp(), motion
// from src/lib/motion.js, CTA label harmonised. No copy of this page moved.
//
// WHAT THIS PAGE IS, IN IAN'S WORDS
// Its one job, from his locked page-hierarchy table of 17 September 2026: "Mechanism-based
// examples." His directive: "three or four anonymised demonstrations showing mechanism, not
// exaggerated results."
//
// THE LINE THAT MUST NEVER BE CUT FOR LAYOUT
// `exHeroLead` sits above the first example, at full width, before anything else. It says these
// are patterns and not client stories. No delivered HLT engagement exists on file, so there is
// no client name, no case study and no figure anywhere on this page.
//
// FOUR EXAMPLES SINCE 27 SEPTEMBER 2026 (Ian's "Agreed"): the fourth is a pattern like the other
// three, never a client story. The first real, consented client story gets its own slot when it
// exists.
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LINE_OFFICIAL_ACCOUNT } from '../constants/contact';
import { ROUTE_BUSINESS_READ, ROUTE_EXAMPLES } from '../constants/routes';
import Seo from '../components/Seo';
import { CTA_CLASSES } from './Home';
import { fadeUp, fadeUpDelayed, heroIn } from '../lib/motion';

const Examples = () => {
    const { t, lp } = useLanguage();

    const examples = [1, 2, 3, 4].map((n) => ({
        title: t(`ex${n}Title`),
        now: t(`ex${n}Now`),
        after: t(`ex${n}After`),
        mechanism: t(`ex${n}Mechanism`),
    }));

    return (
        <div className="min-h-screen bg-stone-50 pt-20 text-slate-950 lg:pt-24">
            <Seo title={t('exMetaTitle')} description={t('exMetaDescription')} route={ROUTE_EXAMPLES} />

            <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...heroIn} className="mx-auto max-w-3xl">
                    <h1 className="text-[2rem] font-bold leading-[1.15] sm:text-5xl sm:leading-[1.1]">{t('exHeroHeadline')}</h1>
                    {/* THE HONESTY BLOCK. Full width, above the first example, never abridged. */}
                    <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">{t('exHeroLead')}</p>
                </motion.div>
            </section>

            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-8">
                    {examples.map((example, index) => (
                        <motion.article
                            key={example.title}
                            {...fadeUpDelayed(index, 0.08)}
                            className="rounded-2xl border border-slate-200 bg-stone-50 p-7 card-glass sm:p-9"
                        >
                            <h2 className="text-2xl font-bold leading-8 text-slate-950">{example.title}</h2>
                            <div className="mt-6 grid gap-6 md:grid-cols-2">
                                <p className="text-base leading-8 text-slate-600">{example.now}</p>
                                <p className="text-base leading-8 text-slate-600">{example.after}</p>
                            </div>
                            <p className="mt-6 border-t border-slate-200 pt-6 text-base leading-8 text-slate-950">{example.mechanism}</p>
                        </motion.article>
                    ))}

                    <motion.p {...fadeUp} className="mx-auto max-w-3xl pt-4 text-center text-base leading-8 text-slate-600">
                        {t('exUnderLine')}
                    </motion.p>
                </div>
            </section>

            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('exClosingHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{t('exClosingBody')}</p>
                    <div className="mt-8">
                        <Link to={lp(ROUTE_BUSINESS_READ)} className={CTA_CLASSES}>
                            {t('exCtaLabel')}
                            <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                    </div>
                    <p className="mt-4 text-sm text-slate-400">
                        <a href={LINE_OFFICIAL_ACCOUNT} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 transition-colors hover:text-white">
                            {t('exLineNote')}
                        </a>
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default Examples;
