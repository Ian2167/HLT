// Home.jsx — the summary home page. Rewritten 14 September 2026.
//
// WHAT THIS PAGE IS, IN IAN'S WORDS
// "a revised Home Page that summarises the company approach" (14 September 2026, 16:24 Bangkok),
// carrying his positioning line, three beats of how the firm works, and one card per live
// service. The old page's content, the free 15-question diagnostic funnel and the five-stage
// AIOS journey, sold the retired offering and is gone from this route. Nothing was deleted: the
// old copy is still in src/config/hltWebsite.js and in git history, and every old route is live.
//
// WHY THIS FILE HOLDS NO COPY OF ITS OWN
// Every visible string comes from src/copy/home.js, lifted verbatim from the verified deck at
//   C:\Projects\IWT\02-builds\executive-assistant\work\drafts\2026-09-14-HLT-HOME-PAGE-COPY.md
// except the five service NAMES, which come from each service's own gated translation key, so a
// renamed service is renamed in one place. Proved verbatim by
//   node src/assets/brand/hlt-logo-v2/verify-page-copy.mjs home <deck path>
//
// FIVE CARDS, NOT SIX. Brand OS is off the front of the site on Ian's ruling of 14 September
// 2026, 16:18 Bangkok. Its page and route stay live and unlinked.
//
// THE THAI LINE. The hero headline is the one key on this site with a real Thai value, Ian's own
// words supplied 16:03 Bangkok. It is not rendered here conditionally: translations.js overrides
// that single key in the `th` block, so this component stays language-agnostic.
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LINE_OFFICIAL_ACCOUNT } from '../constants/contact';
import { HEADER_SERVICES } from '../constants/routes';

const CTA_CLASSES =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-950/20 transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:text-base';

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.5 },
};

const Home = () => {
    const { t } = useLanguage();

    // The description meta is swapped in place rather than rendered, for the reason recorded in
    // src/pages/BusinessRead.jsx: React 19 hoists a rendered <meta> by APPENDING it.
    const metaDescription = t('homeMetaDescription');
    useEffect(() => {
        const tag = document.querySelector('meta[name="description"]');
        if (!tag) return undefined;
        const previous = tag.getAttribute('content');
        tag.setAttribute('content', metaDescription);
        return () => tag.setAttribute('content', previous);
    }, [metaDescription]);

    // The cards are the header's own list, in the header's own order, so the two can never
    // disagree about what the firm sells or where a service lives.
    const services = HEADER_SERVICES.map((service, index) => ({
        name: t(service.labelKey),
        desc: t(`homeCard${index + 1}Desc`),
        to: service.to,
    }));

    const beats = [1, 2, 3].map((n) => ({
        lead: t(`homeBeat${n}Lead`),
        body: t(`homeBeat${n}Body`),
    }));

    return (
        <div className="min-h-screen bg-stone-50 pt-24 text-slate-950 dark:bg-hltNavy dark:text-white">
            <title>{t('homeMetaTitle')}</title>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <img
                    src={t('homeHeroImage')}
                    alt={t('homeHeroImageAlt')}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                />
                {/* The same flat card-navy wash as the service pages, for the same measured
                    reason: white text over #0A1F44 at 80 per cent is 8.3:1 even where the
                    photograph is pure white. */}
                <div className="absolute inset-0 bg-hltNavy/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-hltNavy/70 via-hltNavy/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-hltNavy/30 via-transparent to-hltNavy/60" />

                <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl sm:leading-[1.1]">
                            {t('homeHeroHeadline')}
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg sm:leading-9">
                            {t('homeHeroLead')}
                        </p>
                        <div className="mt-8">
                            <a href={LINE_OFFICIAL_ACCOUNT} target="_blank" rel="noopener noreferrer" className={CTA_CLASSES}>
                                {t('homeCtaLabel')}
                                <ArrowRight size={18} aria-hidden="true" />
                            </a>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-slate-300">{t('homeHeroCtaNote')}</p>
                    </motion.div>
                </div>
            </section>

            {/* How we work, in three beats. Every line is lifted from a file; see the deck. */}
            <section className="bg-white px-5 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2
                        {...fadeUp}
                        className="text-center text-2xl font-bold leading-tight text-slate-950 dark:text-white sm:text-3xl"
                    >
                        {t('homeApproachHeading')}
                    </motion.h2>
                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {beats.map((beat, index) => (
                            <motion.article
                                key={beat.lead}
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="rounded-2xl border border-slate-200 bg-stone-50 p-7 dark:border-white/10 dark:bg-white/[0.04]"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-200">
                                    <Check size={20} aria-hidden="true" />
                                </span>
                                <h3 className="mt-6 text-lg font-bold leading-7 text-slate-950 dark:text-white">{beat.lead}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{beat.body}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* The services. One card per live service, each linking to its own page. */}
            <section className="bg-stone-100 px-5 py-16 dark:bg-white/[0.03] sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2
                        {...fadeUp}
                        className="text-center text-2xl font-bold leading-tight text-slate-950 dark:text-white sm:text-3xl"
                    >
                        {t('homeServicesHeading')}
                    </motion.h2>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <motion.div key={service.to} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.06 }}>
                                <Link
                                    to={service.to}
                                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-indigo-400/50"
                                >
                                    <h3 className="text-xl font-bold leading-7 text-slate-950 dark:text-white">{service.name}</h3>
                                    <p className="mt-3 flex-grow text-sm leading-7 text-slate-600 dark:text-slate-300">{service.desc}</p>
                                    <span className="mt-6 text-indigo-600 transition-transform group-hover:translate-x-1 dark:text-indigo-300">
                                        <ArrowRight size={20} aria-hidden="true" />
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        {...fadeUp}
                        className="mt-10 text-center text-sm leading-7 text-slate-600 dark:text-slate-300"
                    >
                        {t('homeCardsNote')}
                    </motion.p>
                </div>
            </section>

            {/* Closing CTA. The same one CTA as the hero: one label, one target, no second ask. */}
            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('homeClosingHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{t('homeClosingBody')}</p>
                    <div className="mt-8">
                        <a href={LINE_OFFICIAL_ACCOUNT} target="_blank" rel="noopener noreferrer" className={CTA_CLASSES}>
                            {t('homeCtaLabel')}
                            <ArrowRight size={18} aria-hidden="true" />
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-slate-400">{t('homeLineHandle')}</p>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
