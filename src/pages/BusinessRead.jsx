// BusinessRead.jsx — /business-read and /en/business-read, "The Business Read".
// Built 14 September 2026, restructured 18 September, REBUILT AT THE TOP 30 September 2026 on the
// visibility refresh (Ian's fuller spec of the same day, sections 15 to 17).
//
// WHAT THE SPEC CHANGES. The hero (H1, two-line intro, "Book a Business Read", the microcopy), the
// four-part method (outside-in scan, inside-out read, human dependency, system fit) and the "what
// you receive" list. Those three sections replace the 18 September "what is happening" and "what
// the Business Read does" bands; their strings stay in src/copy/businessReadRebuild.js and stop
// rendering, on Ian's "do not delete".
//
// WHAT STAYS EXACTLY AS IT WAS. Ian's own "what it is not" list (the only block on the page that
// draws a boundary, and the most persuasive for it); the three tiers with the prices he ruled on
// 14 September (THB 15,000 / 22,500 / 37,500, ex VAT, THB only) and their comparison rows; "how it
// runs"; the five questions; the closing band. The spec removes none of these and the prices are
// ruled, so nothing below the method moves.
//
// THE CTA TARGET IS STILL LINE. "Book a Business Read" is the spec's label; where a booking is made
// is Ian's ruling of 14 September, the Official Account, and LINE_BUSINESS_READ is that exact URL.
//
// THE DRAWN READ (BusinessReadMock) stays under "what you receive": Ian asked for visuals on
// 14 September and it is the artefact the reader is buying.
//
// COPY: src/copy/visibilityRefresh.js for the new sections, src/copy/businessReadRebuild.js for the
// rest. Thai for the new sections is a machine draft under review.
import { motion } from 'framer-motion';
import { ArrowRight, Check, FileText, Layers, Users, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LINE_BUSINESS_READ } from '../constants/contact';
import { ROUTE_BUSINESS_BLINDSPOTS, ROUTE_BUSINESS_READ } from '../constants/routes';
import ProcessNumber from '../components/mocks/ProcessNumber';
import BusinessReadMock from '../components/mocks/BusinessReadMock';
import { CellValue, DepthLadder } from '../components/mocks/TierVisuals';
import Seo from '../components/Seo';
import { fadeUp, fadeUpDelayed, heroIn } from '../lib/motion';

// One mark per tier, in the deck's order: the read itself, the read with a second voice from the
// team, the read at full depth.
const TIER_ICONS = [FileText, Users, Layers];

const CTA_CLASSES =
    'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-xl sm:w-auto';

const BusinessRead = () => {
    const { t, lp } = useLanguage();

    const rows = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
        label: t(`brRow${n}Label`),
        cells: [t(`brRow${n}A`), t(`brRow${n}B`), t(`brRow${n}C`)],
    }));

    const tiers = [1, 2, 3].map((n) => ({
        name: t(`brTier${n}Name`),
        desc: t(`brTier${n}Desc`),
        price: t(`brTier${n}Price`),
        delivery: t(`brTier${n}Delivery`),
        revisions: t(`brTier${n}Revisions`),
        Icon: TIER_ICONS[n - 1],
        depth: n,
    }));

    const steps = [1, 2, 3, 4, 5].map((n) => ({
        number: `${n}.`,
        lead: t(`brStep${n}Lead`),
        body: t(`brStep${n}Body`),
    }));

    const faqs = [1, 2, 3, 4, 5].map((n) => ({ q: t(`brFaq${n}Q`), a: t(`brFaq${n}A`) }));

    // The four parts of the method, spec section 16. The first carries the note and the link to
    // the free test, because it is the test HLT ran on itself.
    const method = [1, 2, 3, 4].map((n) => ({
        n,
        name: t(`brMethod${n}Name`),
        body: t(`brMethod${n}Body`),
        note: n === 1 ? t('brMethod1Note') : null,
        link: n === 1 ? t('brMethod1Link') : null,
    }));

    // What you receive, spec section 17: eight lines.
    const receive = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => t(`brReceive${n}`));
    const notThis = [1, 2, 3].map((n) => t(`brNot${n}`));

    return (
        <div className="min-h-screen pt-20 lg:pt-24">
            <Seo title={t('brMetaTitle')} description={t('brMetaDescription')} route={ROUTE_BUSINESS_READ} />

            {/* Hero. Ian, 15 Sept 2026 08:1x Bangkok: "the Business Read needs an Image, maybe a person
                with a magnifying glass". The same photograph under the same navy wash. */}
            <section className="relative overflow-hidden py-20">
                <img
                    src={t('brHeroImage')}
                    alt={t('brHeroImageAlt')}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                />
                <div className="absolute inset-0 bg-hltNavy/55" />
                <div className="absolute inset-0 bg-gradient-to-r from-hltNavy/70 via-hltNavy/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-hltNavy/30 via-transparent to-hltNavy/60" />
                <div className="container relative mx-auto px-5 text-center sm:px-6">
                    <motion.div {...heroIn}>
                        <h1 className="mx-auto mb-6 max-w-4xl text-[2rem] font-bold leading-[1.15] text-white sm:text-5xl sm:leading-tight">
                            {t('brHeroHeadline')}
                        </h1>
                        <div className="mx-auto max-w-3xl space-y-3 text-lg text-slate-100 sm:text-xl">
                            <p>{t('brHeroLead')}</p>
                            <p>{t('brHeroLead2')}</p>
                        </div>
                        <div className="mt-10">
                            <a href={LINE_BUSINESS_READ} target="_blank" rel="noopener noreferrer" className={CTA_CLASSES}>
                                {t('brCtaLabel')}
                                <ArrowRight size={20} aria-hidden="true" />
                            </a>
                        </div>
                        <p className="mx-auto mt-5 max-w-xl text-sm text-slate-200 sm:text-base">{t('brHeroCtaNote')}</p>
                    </motion.div>
                </div>
            </section>

            {/* The method, in four numbered parts. */}
            <section className="bg-white py-16 sm:py-20">
                <div className="mx-auto max-w-6xl px-5 sm:px-6">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
                        {t('brMethodHeading')}
                    </motion.h2>
                    <ol className="mt-10 grid gap-5 md:grid-cols-2">
                        {method.map((part, index) => (
                            <motion.li
                                key={part.name}
                                {...fadeUpDelayed(index, 0.06)}
                                className="flex flex-col rounded-2xl border border-slate-200 p-6 card-glass card-static sm:p-7"
                            >
                                <div className="flex items-start gap-4">
                                    <ProcessNumber label={`${part.n}`} decorative />
                                    <h3 className="pt-2 text-xl font-bold leading-7 text-slate-950">{part.name}</h3>
                                </div>
                                <p className="mt-4 text-base leading-7 text-slate-600">{part.body}</p>
                                {part.note ? <p className="mt-3 text-sm font-semibold text-slate-950">{part.note}</p> : null}
                                {part.link ? (
                                    <Link
                                        to={lp(ROUTE_BUSINESS_BLINDSPOTS)}
                                        className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 transition-colors hover:text-indigo-500"
                                    >
                                        {part.link}
                                        <ArrowRight size={16} aria-hidden="true" />
                                    </Link>
                                ) : null}
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* What you receive: the eight lines, the labelling line, then the read drawn. */}
            <section className="bg-slate-50 py-16 sm:py-20">
                <div className="container mx-auto px-5 sm:px-6">
                    <motion.h2 {...fadeUp} className="mb-10 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
                        {t('brReceiveHeading')}
                    </motion.h2>
                    <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
                        {receive.map((item, index) => (
                            <motion.li key={item} {...fadeUpDelayed(index)} className="flex gap-3 text-base leading-7 text-slate-700">
                                <span className="mt-1 shrink-0 text-indigo-600">
                                    <Check size={20} aria-hidden="true" />
                                </span>
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                    <motion.p {...fadeUp} className="mx-auto mt-8 max-w-3xl text-center text-base leading-7 text-slate-600">
                        {t('brReceiveNote')}
                    </motion.p>
                    <div className="mx-auto mt-12 max-w-3xl">
                        <BusinessReadMock />
                    </div>
                </div>
            </section>

            {/* What it is not. Ian's own three, verbatim. */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-6xl px-5 sm:px-6">
                    <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                        <h2 className="mb-8 text-2xl font-bold text-slate-900 sm:text-3xl">{t('brNotHeading')}</h2>
                        <ul className="space-y-5">
                            {notThis.map((item) => (
                                <li key={item} className="flex gap-4 text-lg text-slate-600">
                                    <span className="mt-1.5 shrink-0 text-slate-400">
                                        <X size={18} aria-hidden="true" />
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* The three tiers. Prices as ruled, THB only, ex VAT. */}
            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-5 sm:px-6">
                    <h2 className="mb-12 text-center text-2xl font-bold text-slate-900 sm:text-3xl">{t('brTiersHeading')}</h2>

                    <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
                        {tiers.map((tier) => (
                            <div key={tier.name} className="flex flex-col rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
                                <div className="mb-6 flex items-center justify-between gap-4">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                                        <tier.Icon size={22} aria-hidden="true" />
                                    </span>
                                    <DepthLadder depth={tier.depth} />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-slate-900">{tier.name}</h3>
                                <p className="mb-6 flex-grow text-sm text-slate-500">{tier.desc}</p>
                                <p className="mb-4">
                                    <span className="text-3xl font-bold text-slate-900">{tier.price}</span>
                                    <span className="text-xs text-slate-500">{t('brPriceVatSuffix')}</span>
                                </p>
                                <p className="text-sm font-medium text-slate-700">{tier.delivery}</p>
                                <p className="text-sm font-medium text-slate-700">{tier.revisions}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-8 text-center text-sm text-slate-500">{t('brPriceNote')}</p>

                    {/* Desktop: the eight rows as one comparison table. */}
                    <div id="br-tier-table" className="mx-auto mt-14 hidden max-w-5xl overflow-hidden rounded-xl card-glass md:block">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-slate-200">
                                    <th className="p-4"></th>
                                    {tiers.map((tier) => (
                                        <th key={tier.name} className="p-4 font-bold text-slate-900">
                                            {tier.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row) => (
                                    <tr key={row.label} className="border-b border-slate-100 last:border-0">
                                        <th scope="row" className="p-4 align-top font-semibold text-slate-900">
                                            {row.label}
                                        </th>
                                        {row.cells.map((cell, i) => (
                                            <td key={i} className="p-4 align-top text-slate-600">
                                                <CellValue value={cell} align="left" />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile: the same eight rows, stacked per tier. */}
                    <div id="br-tier-stack" className="mt-10 space-y-6 md:hidden">
                        {tiers.map((tier, tierIndex) => (
                            <div key={tier.name} className="rounded-xl border border-slate-100 bg-white p-6">
                                <h3 className="mb-4 text-lg font-bold text-slate-900">{tier.name}</h3>
                                <dl className="space-y-3">
                                    {rows.map((row) => (
                                        <div key={row.label} className="flex justify-between gap-4 text-sm">
                                            <dt className="font-semibold text-slate-900">{row.label}</dt>
                                            <dd className="text-right text-slate-600">
                                                <CellValue value={row.cells[tierIndex]} />
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it runs. */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-5 sm:px-6">
                    <h2 className="mb-12 text-center text-2xl font-bold text-slate-900 sm:text-3xl">{t('brStepsHeading')}</h2>
                    <ol className="relative mx-auto max-w-3xl">
                        <span aria-hidden="true" className="absolute bottom-7 left-7 top-7 w-px bg-slate-300" />
                        {steps.map((step) => (
                            <li key={step.number} className="relative flex gap-5 pb-10 last:pb-0 sm:gap-7">
                                <ProcessNumber label={step.number} />
                                <p className="pt-3 text-slate-600">
                                    <span className="font-bold text-slate-900">{step.lead}</span> <span>{step.body}</span>
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* The five questions. */}
            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-5 sm:px-6">
                    <h2 className="mb-12 text-center text-2xl font-bold text-slate-900 sm:text-3xl">{t('brFaqHeading')}</h2>
                    <div className="mx-auto max-w-3xl space-y-8">
                        {faqs.map((faq) => (
                            <div key={faq.q}>
                                <h3 className="mb-2 text-lg font-bold text-slate-900">{faq.q}</h3>
                                <p className="text-slate-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing. */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-5 text-center sm:px-6">
                    <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">{t('brClosingHeading')}</h2>
                    <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">{t('brClosingBody')}</p>
                    <a href={LINE_BUSINESS_READ} target="_blank" rel="noopener noreferrer" className={CTA_CLASSES}>
                        {t('brCtaLabel')}
                        <ArrowRight size={20} aria-hidden="true" />
                    </a>
                    <p className="mt-5 text-sm text-slate-500">{t('brClosingNote')}</p>
                </div>
            </section>
        </div>
    );
};

export default BusinessRead;
