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
//
// THE VISUAL PASS, 17:42 to 17:46 Bangkok, 14 September 2026. Ian, after reading the six pages
// on the dev server: "Ok this is looking ok in terms of copy next please add visuals to
// improve", then "Can we add numbered steps so it feels like a process." Copy is untouched: not
// one visible string on this page changed. What changed is that "How we work" now reads as a
// numbered process joined by a connecting line, each step shows which services belong to it
// using the service titles already on the page, and each service card carries its icon on a
// navy tile. The 1, 2, 3 are the only strings this pass added to the page, and they are marked
// `data-visual` so the copy fixture lists them rather than silently allowing them.
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Gauge, LayoutDashboard, Library, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LINE_OFFICIAL_ACCOUNT } from '../constants/contact';
import {
    HEADER_SERVICES,
    ROUTE_AIOS_AUDIT,
    ROUTE_BUSINESS_READ,
    ROUTE_EXECUTIVE_ASSISTANT,
    ROUTE_OPENBRAIN,
    ROUTE_OPS_COCKPIT,
} from '../constants/routes';
import ProcessNumber from '../components/mocks/ProcessNumber';

const CTA_CLASSES =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-950/20 transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:text-base';

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.5 },
};

// One icon per service, keyed by route so a renamed service keeps its icon. These are the same
// lucide icons the service pages already use on their tier and step cards, so a card on the home
// page and the page it opens carry the same mark.
const SERVICE_ICONS = {
    [ROUTE_AIOS_AUDIT]: Gauge,
    [ROUTE_EXECUTIVE_ASSISTANT]: MessageSquare,
    [ROUTE_OPS_COCKPIT]: LayoutDashboard,
    [ROUTE_BUSINESS_READ]: FileText,
    [ROUTE_OPENBRAIN]: Library,
};

// Which services belong to which beat, as Ian ruled at 17:46 Bangkok. The tags carry the
// SERVICE TITLES ONLY, read from the same translation keys as the cards below, so this adds no
// copy: rename a service once and its tag, its card and the header all change together.
// Beat 2 carries none, deliberately — it is the design step, and no service on the site is sold
// as design on its own.
// Each list is in LADDER ORDER, so a tag under a beat and the stack below it read the same way
// round (Ian, 18:10 Bangkok).
const BEAT_SERVICES = {
    1: [ROUTE_BUSINESS_READ, ROUTE_AIOS_AUDIT],
    2: [],
    3: [ROUTE_OPENBRAIN, ROUTE_EXECUTIVE_ASSISTANT, ROUTE_OPS_COCKPIT],
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
    // The cards are the ladder, in the ladder's order, so the header, the stack below and the
    // "Step n of 5" strip on every service page can never disagree. The one-liner is read from
    // the service's own `homeDescKey`, never from where it happens to sit in the array.
    const services = HEADER_SERVICES.map((service, index) => ({
        step: index + 1,
        name: t(service.labelKey),
        desc: t(service.homeDescKey),
        to: service.to,
        Icon: SERVICE_ICONS[service.to],
    }));

    // A service title, read from its own translation key, for the tags under the beats.
    const titleFor = (route) => {
        const entry = HEADER_SERVICES.find((service) => service.to === route);

        return entry ? t(entry.labelKey) : null;
    };

    const beats = [1, 2, 3].map((n) => ({
        n,
        lead: t(`homeBeat${n}Lead`),
        body: t(`homeBeat${n}Body`),
        tags: BEAT_SERVICES[n].map(titleFor).filter(Boolean),
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
                {/* Ian, 15 Sept 2026 08:0x: "The opacity of the Navy over the Image needs reducing so the
                    Image is clearer". 80 to 55; the left gradient below keeps the headline legible. */}
                <div className="absolute inset-0 bg-hltNavy/55" />
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
                    {/* THREE NUMBERED STEPS, JOINED. The numeral is the dominant mark on each
                        step and the connector is drawn in the gap between the cards, so no
                        percentage arithmetic is needed to make a line meet a badge: it runs from
                        the edge of one card to the next, horizontally on desktop and vertically
                        on a phone, and the opaque badge sits over it. The last step draws none. */}
                    <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
                        {beats.map((beat, index) => (
                            <motion.li
                                key={beat.lead}
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="relative flex flex-col rounded-2xl border border-slate-200 bg-stone-50 p-7 dark:border-white/10 dark:bg-white/[0.04]"
                            >
                                {index < beats.length - 1 ? (
                                    <>
                                        {/* The badge centre is the card's 1.75rem padding plus
                                            half of its 4rem height, so both connectors meet it
                                            at 3.75rem without any percentage maths. */}
                                        <span
                                            aria-hidden="true"
                                            className="absolute left-[3.75rem] top-full h-8 w-px bg-slate-300 dark:bg-white/20 md:hidden"
                                        />
                                        <span
                                            aria-hidden="true"
                                            className="absolute left-full top-[3.75rem] hidden h-px w-6 bg-slate-300 dark:bg-white/20 md:block"
                                        />
                                    </>
                                ) : null}

                                <ProcessNumber label={`${beat.n}`} size="lg" decorative />

                                <h3 className="mt-6 text-lg font-bold leading-7 text-slate-950 dark:text-white">{beat.lead}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{beat.body}</p>

                                {/* mt-auto on the wrapper, so the tag rows line up across the
                                    three cards however long the beat above them runs. */}
                                {beat.tags.length ? (
                                    <div className="mt-auto pt-8">
                                        <ul className="flex flex-wrap gap-2 border-t border-slate-200 pt-5 dark:border-white/10">
                                            {beat.tags.map((tag) => (
                                                <li
                                                    key={tag}
                                                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold leading-5 text-slate-700 dark:border-white/15 dark:bg-white/[0.06] dark:text-slate-200"
                                                >
                                                    {tag}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : null}
                            </motion.li>
                        ))}
                    </ol>
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

                    {/* THE STACK. Ian, 18:10 Bangkok: "The 5 different elements should naturally
                        stack on each other starting with the Business Read." So the five are one
                        numbered ladder rather than a grid of equals: each rung steps in a little
                        further than the one above it, and the numeral is the same badge the
                        approach beats and every service page's timeline use.
                        The indent is drawn by a spacer that only exists from md up, because a
                        staircase on a phone is just a squeezed card. */}
                    <ol className="mx-auto mt-12 max-w-4xl space-y-4">
                        {services.map((service, index) => (
                            <motion.li
                                key={service.to}
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: index * 0.06 }}
                                className="flex items-stretch"
                            >
                                <span
                                    aria-hidden="true"
                                    style={{ width: `${index * 1.75}rem` }}
                                    className="hidden shrink-0 md:block"
                                />
                                <Link
                                    to={service.to}
                                    className="group flex flex-1 items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-indigo-400/50 sm:p-7"
                                >
                                    <ProcessNumber label={`${service.step}`} decorative />

                                    <span className="min-w-0 flex-1">
                                        <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
                                            <h3 className="text-xl font-bold leading-7 text-slate-950 dark:text-white">
                                                {service.name}
                                            </h3>
                                            {/* The service's own mark, the same icon its page carries. */}
                                            {service.Icon ? (
                                                <span
                                                    aria-hidden="true"
                                                    className="text-slate-400 transition-colors group-hover:text-hltNavy dark:text-slate-500 dark:group-hover:text-white"
                                                >
                                                    <service.Icon size={18} />
                                                </span>
                                            ) : null}
                                        </span>
                                        <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.desc}</p>
                                    </span>

                                    <span className="mt-1 shrink-0 text-indigo-600 transition-transform group-hover:translate-x-1 dark:text-indigo-300">
                                        <ArrowRight size={20} aria-hidden="true" />
                                    </span>
                                </Link>
                            </motion.li>
                        ))}
                    </ol>

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
