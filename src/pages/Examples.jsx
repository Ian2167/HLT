// Examples.jsx — /examples. Built 18 September 2026.
//
// WHAT THIS PAGE IS, IN IAN'S WORDS
// Its one job, from his locked page-hierarchy table of 17 September 2026: "Mechanism-based
// examples." His directive: "three or four anonymised demonstrations showing mechanism, not
// exaggerated results."
//
// WHY THIS FILE HOLDS NO COPY OF ITS OWN
// Every visible string comes from src/copy/examples.js, lifted verbatim from the gated pack at
//   C:\Projects\hlt-estate\02-builds\hlt-site-kit\copy\2026-09-18-examples.md
//
// THE LINE THAT MUST NEVER BE CUT FOR LAYOUT
// `exHeroLead` sits above the first example, at full width, before anything else. It says these
// are patterns and not client stories. No delivered HLT engagement exists on file, so there is
// no client name, no case study and no figure anywhere on this page. Remove that line for space
// and three patterns silently become three implied clients. The pack marks it load-bearing and
// so does this file.
//
// THREE, NOT FOUR. The fourth slot belongs to the first completed engagement, with its
// measurement and its date. Inventing one would be caught by the first prospect who asks.
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

const Examples = () => {
    const { t } = useLanguage();

    const metaDescription = t('exMetaDescription');
    useEffect(() => {
        const tag = document.querySelector('meta[name="description"]');
        if (!tag) return undefined;
        const previous = tag.getAttribute('content');
        tag.setAttribute('content', metaDescription);
        return () => tag.setAttribute('content', previous);
    }, [metaDescription]);

    const examples = [1, 2, 3].map((n) => ({
        title: t(`ex${n}Title`),
        now: t(`ex${n}Now`),
        after: t(`ex${n}After`),
        mechanism: t(`ex${n}Mechanism`),
    }));

    return (
        <div className="min-h-screen bg-stone-50 pt-24 text-slate-950 dark:bg-hltNavy dark:text-white">
            <title>{t('exMetaTitle')}</title>

            <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl"
                >
                    <h1 className="text-3xl font-bold leading-tight sm:text-5xl sm:leading-[1.1]">
                        {t('exHeroHeadline')}
                    </h1>
                    {/* THE HONESTY BLOCK. Full width, above the first example, never abridged. */}
                    <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-9">
                        {t('exHeroLead')}
                    </p>
                </motion.div>
            </section>

            {/* Three blocks, one component repeated. Now, After, then the mechanism, which is the
                paragraph that does the work: it is the part a reader can test against his own
                business before he believes anything. */}
            <section className="bg-white px-5 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-4xl space-y-8">
                    {examples.map((example, index) => (
                        <motion.article
                            key={example.title}
                            {...fadeUp}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="rounded-2xl border border-slate-200 bg-stone-50 p-7 card-glass sm:p-9"
                        >
                            <h2 className="text-2xl font-bold leading-8 text-slate-950 dark:text-white">
                                {example.title}
                            </h2>
                            <div className="mt-6 grid gap-6 md:grid-cols-2">
                                <p className="text-base leading-8 text-slate-600 dark:text-slate-300">{example.now}</p>
                                <p className="text-base leading-8 text-slate-600 dark:text-slate-300">{example.after}</p>
                            </div>
                            <p className="mt-6 border-t border-slate-200 pt-6 text-base leading-8 text-slate-950 dark:border-white/20 dark:text-white">
                                {example.mechanism}
                            </p>
                        </motion.article>
                    ))}

                    <motion.p
                        {...fadeUp}
                        className="mx-auto max-w-3xl pt-4 text-center text-base leading-8 text-slate-600 dark:text-slate-300"
                    >
                        {t('exUnderLine')}
                    </motion.p>
                </div>
            </section>

            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('exClosingHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                        {t('exClosingBody')}
                    </p>
                    <div className="mt-8">
                        <Link to={ROUTE_BUSINESS_READ} className={CTA_CLASSES}>
                            {t('exCtaLabel')}
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
                            {t('exLineNote')}
                        </a>
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default Examples;
