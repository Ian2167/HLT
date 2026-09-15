// ServicePage.jsx — the shared layout for the rebuilt HLT service pages.
// Built 14 September 2026 for the six-page rebuild (Ian's ruling 3.1, intent file
// C:\Projects\IWT\02-builds\hlt-site-kit\intent\2026-09-14-hlt-site-kit.intent.md).
//
// WHY THIS COMPONENT HOLDS NO COPY OF ITS OWN
// Every visible string comes in through translation keys built from a prefix, and every one of
// those keys is lifted verbatim from that page's verified copy deck under
//   C:\Projects\IWT\02-builds\executive-assistant\work\drafts\2026-09-14-HLT-<SLUG>-PAGE-COPY.md
// Nothing in this file is wording. A page is proved verbatim against its deck by
//   node src/assets/brand/hlt-logo-v2/verify-page-copy.mjs <route> <deck path>
//
// WHY IT IS SHARED RATHER THAN COPIED FIVE TIMES
// Ian called the first page of the rebuild "visually low quality". One layout means the visual
// lift (hero image, icon cards, motion, spacing) is made once and every page gets it, and a
// later visual pass changes one file rather than six. src/pages/BusinessRead.jsx is deliberately
// NOT refactored onto this component: the brief ring-fences that file.
//
// PRICES. There is no price slot in this layout. No THB figure is ruled for PC1 to PC4 yet and
// USD never renders on this site, so tier cards carry name, description, delivery and the
// inclusion rows, and nothing where a price would go.
//
// THE VISUAL PASS, 14 September 2026 (Ian, 17:42 Bangkok: "please add visuals to improve"; and
// 17:46: "Can we add numbered steps so it feels like a process"). Four things changed here and
// NO COPY MOVED:
//   1. "How it runs" is a vertical timeline with the same numbered badge the home page uses.
//      The badge still renders the deck's own "1." so the copy fixture can rebuild the step
//      line by joining badge, lead and body — see ProcessNumber's `decorative` prop.
//   2. Each tier card carries a three-bar depth ladder beside its icon, so Starter, Standard
//      and Advanced read as depths at a glance rather than as three equal cards.
//   3. An inclusion cell that starts "Yes" gains a tick and a cell reading "No" a muted dash.
//      The words stay: the icon is added beside the text, never in place of it.
//   4. A page may pass ONE code-drawn artefact mock, which renders under its own "what you
//      get" heading. The mocks live in src/components/mocks/.
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LINE_OFFICIAL_ACCOUNT } from '../constants/contact';
import ProcessNumber from './mocks/ProcessNumber';
import StepIndicator from './mocks/StepIndicator';
import { CellValue, DepthLadder } from './mocks/TierVisuals';

const CTA_CLASSES =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-950/20 transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:text-base';

const range = (n) => Array.from({ length: n }, (_, i) => i + 1);

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.5 },
};

// DepthLadder and CellValue moved to ./mocks/TierVisuals.jsx when /business-read needed the
// same two marks: that page is deliberately not on this shared layout, and one definition beats
// two that drift.

// Every count below defaults to 0, and a section with a count of 0 does not render. That is
// how /openbrain works: no tiers exist for it, no delivery days are on file for it, and no
// price is ruled, so the page is a description page with a "who it's for" band where the tier
// ladder sits on the other five. Nothing is invented to fill a slot.
const ServicePage = ({
    prefix,
    paragraphs = 0,
    tiers = 0,
    rows = 0,
    who = 0,
    included = 0,
    steps = 0,
    faqs = 0,
    tierIcons = [],
    whoIcons = [],
    stepIcons = [],
    artefact = null,
    // The page's own path. It is passed in rather than read from the router so a page that is
    // NOT on the ladder (/brand-os) simply doesn't pass one and shows no indicator.
    route = null,
}) => {
    const { t } = useLanguage();
    const k = (name) => t(`${prefix}${name}`);

    // The description meta is swapped in place rather than rendered, for the reason recorded in
    // src/pages/BusinessRead.jsx: React 19 hoists a rendered <meta> by APPENDING it, which would
    // leave two description tags on the route with the site-wide one first.
    const metaDescription = k('MetaDescription');
    useEffect(() => {
        const tag = document.querySelector('meta[name="description"]');
        if (!tag) return undefined;
        const previous = tag.getAttribute('content');
        tag.setAttribute('content', metaDescription);
        return () => tag.setAttribute('content', previous);
    }, [metaDescription]);

    const tierList = range(tiers).map((n) => ({
        name: k(`Tier${n}Name`),
        desc: k(`Tier${n}Desc`),
        Icon: tierIcons[n - 1],
        column: ['A', 'B', 'C'][n - 1],
    }));

    const rowList = range(rows).map((n) => ({
        label: k(`Row${n}Label`),
        cells: { A: k(`Row${n}A`), B: k(`Row${n}B`), C: k(`Row${n}C`) },
    }));

    return (
        <div className="min-h-screen bg-stone-50 pt-24 text-slate-950 dark:bg-hltNavy dark:text-white">
            {/* React 19 hoists this into <head>; the route gets its own title. */}
            <title>{k('MetaTitle')}</title>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <img
                    src={k('HeroImage')}
                    alt={k('HeroImageAlt')}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                />
                {/* LEGIBILITY, not decoration. Ian's ruling of 14 September 2026 standardises the
                    dark ground on the card navy, and the Desk's read of the first two heroes was
                    that a headline over a busy photograph is hard to read. So the photograph sits
                    under a FLAT card-navy wash at 80 per cent, not a gradient that thins out
                    wherever the picture happens to be bright.
                    Measured, not eyeballed: white text over #0A1F44 at 80 per cent gives a
                    contrast ratio of 8.3:1 in the worst case the photograph can produce, which is
                    a pure white pixel behind it (blend #444F62, relative luminance 0.077). WCAG
                    AA large text wants 3:1 and AAA wants 4.5:1. The gradient below only adds
                    depth at the edges; the wash is what carries the contrast. */}
                <div className="absolute inset-0 bg-hltNavy/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-hltNavy/70 via-hltNavy/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-hltNavy/30 via-transparent to-hltNavy/60" />

                <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl sm:leading-[1.1]">
                            {k('HeroHeadline')}
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg sm:leading-9">
                            {k('HeroLead')}
                        </p>
                        <div className="mt-8">
                            <a href={LINE_OFFICIAL_ACCOUNT} target="_blank" rel="noopener noreferrer" className={CTA_CLASSES}>
                                {k('CtaLabel')}
                                <ArrowRight size={18} aria-hidden="true" />
                            </a>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-slate-300">{k('HeroCtaNote')}</p>
                    </motion.div>
                </div>
            </section>

            {/* Where this service sits on the ladder, and what is either side of it. */}
            {route ? <StepIndicator route={route} /> : null}

            {/* The summary */}
            <section className="bg-white px-5 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold leading-tight text-slate-950 dark:text-white sm:text-3xl">
                        {k('SummaryHeading')}
                    </h2>
                    <div className="mt-8 space-y-6 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-9">
                        {range(paragraphs).map((n) => (
                            <p
                                key={n}
                                className={n === paragraphs ? 'font-semibold text-slate-950 dark:text-white' : undefined}
                            >
                                {k(`SummaryP${n}`)}
                            </p>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Who it's for. Only /openbrain carries this band, where the tier ladder sits on the
                other five pages, because no tiers exist for it. */}
            {who > 0 ? (
                <section className="bg-stone-100 px-5 py-16 dark:bg-white/[0.03] sm:px-6 sm:py-20 lg:px-8">
                    <div className="mx-auto max-w-6xl">
                        <motion.h2
                            {...fadeUp}
                            className="text-center text-2xl font-bold leading-tight text-slate-950 dark:text-white sm:text-3xl"
                        >
                            {k('WhoHeading')}
                        </motion.h2>
                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {range(who).map((n) => {
                                const Icon = whoIcons[n - 1];

                                return (
                                    <motion.article
                                        key={n}
                                        {...fadeUp}
                                        transition={{ duration: 0.5, delay: (n - 1) * 0.08 }}
                                        className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
                                    >
                                        {Icon ? (
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-200">
                                                <Icon size={22} aria-hidden="true" />
                                            </div>
                                        ) : null}
                                        <p className="mt-6 leading-7 text-slate-700 dark:text-slate-300">{k(`Who${n}`)}</p>
                                    </motion.article>
                                );
                            })}
                        </div>
                    </div>
                </section>
            ) : null}

            {/* How it runs */}
            {steps > 0 ? (
            <section className="bg-stone-100 px-5 py-16 dark:bg-white/[0.03] sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2
                        {...fadeUp}
                        className="text-center text-2xl font-bold leading-tight text-slate-950 dark:text-white sm:text-3xl"
                    >
                        {k('StepsHeading')}
                    </motion.h2>
                    {/* A VERTICAL TIMELINE, not a grid of cards. Ian, 17:46 Bangkok: "Can we add
                        numbered steps so it feels like a process." The connecting line is drawn
                        once behind the column and each opaque badge sits over it, so the line
                        can never miss a badge. The badge text is still the deck's "1." — see
                        ProcessNumber. */}
                    <ol className="relative mx-auto mt-12 max-w-3xl">
                        <span
                            aria-hidden="true"
                            className="absolute left-7 top-7 bottom-7 w-px bg-slate-300 dark:bg-white/20"
                        />
                        {range(steps).map((n) => {
                            const Icon = stepIcons[n - 1];

                            return (
                                <motion.li
                                    key={n}
                                    {...fadeUp}
                                    transition={{ duration: 0.45, delay: (n - 1) * 0.06 }}
                                    className="relative flex gap-5 pb-10 last:pb-0 sm:gap-7"
                                >
                                    <ProcessNumber label={`${n}.`} />
                                    <div className="pt-2">
                                        <div className="flex items-center gap-2.5">
                                            {Icon ? (
                                                <span className="text-indigo-700 dark:text-indigo-300">
                                                    <Icon size={18} aria-hidden="true" />
                                                </span>
                                            ) : null}
                                            <h3 className="font-bold leading-7 text-slate-950 dark:text-white">{k(`Step${n}Lead`)}</h3>
                                        </div>
                                        <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{k(`Step${n}Body`)}</p>
                                    </div>
                                </motion.li>
                            );
                        })}
                    </ol>
                </div>
            </section>
            ) : null}

            {/* What's included */}
            {included > 0 ? (
            <section className="bg-white px-5 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    <motion.h2
                        {...fadeUp}
                        className="text-center text-2xl font-bold leading-tight text-slate-950 dark:text-white sm:text-3xl"
                    >
                        {k('IncludedHeading')}
                    </motion.h2>
                    <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                        {range(included).map((n) => (
                            <motion.li
                                key={n}
                                {...fadeUp}
                                transition={{ duration: 0.45, delay: (n % 2) * 0.06 }}
                                className="flex gap-4 rounded-xl border border-slate-200 bg-stone-50 p-5 dark:border-white/10 dark:bg-white/[0.04]"
                            >
                                <span className="mt-0.5 shrink-0 text-indigo-700 dark:text-indigo-300">
                                    <Check size={20} aria-hidden="true" />
                                </span>
                                <span className="text-sm leading-7 text-slate-700 dark:text-slate-300">{k(`Included${n}`)}</span>
                            </motion.li>
                        ))}
                    </ul>

                    {/* ONE artefact mock per page, under the heading that promises it. It is a
                        drawing of the thing, not a screenshot of anybody's real one. */}
                    {artefact ? (
                        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="mx-auto mt-14 max-w-3xl">
                            {artefact}
                        </motion.div>
                    ) : null}
                </div>
            </section>
            ) : null}

            {/* The tiers. Name, description and the catalogue's inclusion rows. No price. */}
            {tiers > 0 ? (
            <section className="bg-stone-100 px-5 py-16 dark:bg-white/[0.03] sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2
                        {...fadeUp}
                        className="text-center text-2xl font-bold leading-tight text-slate-950 dark:text-white sm:text-3xl"
                    >
                        {k('TiersHeading')}
                    </motion.h2>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {tierList.map((tier, index) => (
                            <motion.article
                                key={tier.name}
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    {tier.Icon ? (
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-200">
                                            <tier.Icon size={22} aria-hidden="true" />
                                        </div>
                                    ) : null}
                                    <DepthLadder depth={index + 1} />
                                </div>
                                <h3 className="mt-6 text-xl font-bold leading-7 text-slate-950 dark:text-white">{tier.name}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{tier.desc}</p>
                                <dl className="mt-6 space-y-3 border-t border-slate-100 pt-6 dark:border-white/10">
                                    {rowList.map((row) => (
                                        <div key={row.label} className="flex justify-between gap-4 text-sm leading-6">
                                            <dt className="font-semibold text-slate-950 dark:text-white">{row.label}</dt>
                                            <dd className="text-right text-slate-600 dark:text-slate-300">
                                                <CellValue value={row.cells[tier.column]} />
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
            ) : null}

            {/* The FAQs */}
            {faqs > 0 ? (
            <section className="bg-white px-5 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    <motion.h2
                        {...fadeUp}
                        className="text-center text-2xl font-bold leading-tight text-slate-950 dark:text-white sm:text-3xl"
                    >
                        {k('FaqHeading')}
                    </motion.h2>
                    <div className="mt-10 grid gap-8 md:grid-cols-2">
                        {range(faqs).map((n) => (
                            <motion.div key={n} {...fadeUp} transition={{ duration: 0.45, delay: (n % 2) * 0.06 }}>
                                <h3 className="font-bold leading-7 text-slate-950 dark:text-white">{k(`Faq${n}Q`)}</h3>
                                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{k(`Faq${n}A`)}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            ) : null}

            {/* Closing CTA */}
            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{k('ClosingHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{k('ClosingBody')}</p>
                    <div className="mt-8">
                        <a href={LINE_OFFICIAL_ACCOUNT} target="_blank" rel="noopener noreferrer" className={CTA_CLASSES}>
                            {k('CtaLabel')}
                            <ArrowRight size={18} aria-hidden="true" />
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-slate-400">{k('LineHandle')}</p>
                </motion.div>
            </section>
        </div>
    );
};

export default ServicePage;
