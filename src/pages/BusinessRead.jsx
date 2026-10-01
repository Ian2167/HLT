// BusinessRead.jsx — /business-read and /en/business-read, "The Business Read".
// Built 14 September 2026, restructured 18 September, rebuilt at the top 30 September, REBUILT AT
// THE TOP AGAIN 1 October 2026 on the repositioning (Ian's brief of that morning, section 10, and
// his ruling of the same day: "the THB 15k as the base should now be published").
//
// WHAT THE BRIEF CHANGES. The hero (H1 "See where your business is getting stuck.", the two-line
// intro, "Book a Fit Call First", the 20-minute line, the price line); then the brief's three
// sections: the one real workflow we map, what we examine at each stage (eight questions), and the
// Business Control Map the read produces (seven things it identifies), with the drawn read beneath.
// The 30 September four-part method and "what you receive" bands stop rendering; their strings
// stay in src/copy/visibilityRefresh.js, on Ian's "do not delete".
//
// WHAT STAYS EXACTLY AS IT WAS. Ian's own "what it is not" list; the three tiers with the prices he
// ruled on 14 September (THB 15,000 / 22,500 / 37,500, ex VAT, THB only) and their comparison rows;
// "how it runs"; the five questions. The brief's section 10 said to hold pricing; Ian overrode it
// on 1 October for the base price, and the tiers stay because nothing ruled them out.
//
// THE ACTION IS THE FIT CALL FIRST (brief, section 10 and 22). The button is the FitCallButton:
// the Google Calendar booking page once its link is in src/config/features.js, the Contact page
// until then. The closing says the two honest things the brief asks for: if there's nothing worth
// fixing we'll say so, and not every read leads to a project.
//
// COPY: src/copy/repositioning.js for the new sections, src/copy/businessReadRebuild.js for the rest.
import { motion } from 'framer-motion';
import { Check, FileText, Layers, Users, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_BUSINESS_READ } from '../constants/routes';
import ProcessNumber from '../components/mocks/ProcessNumber';
import BusinessReadMock from '../components/mocks/BusinessReadMock';
import { CellValue, DepthLadder } from '../components/mocks/TierVisuals';
import Seo from '../components/Seo';
import { FitCallButton } from '../components/FitCallButtons';
import { fadeUp, fadeUpDelayed, heroIn } from '../lib/motion';

// One mark per tier, in the deck's order: the read itself, the read with a second voice from the
// team, the read at full depth.
const TIER_ICONS = [FileText, Users, Layers];

const BusinessRead = () => {
    const { t } = useLanguage();

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

    const workflows = [1, 2, 3, 4, 5].map((n) => t(`brWf${n}`));
    const questions = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => t(`brQ${n}`));
    const outputs = [1, 2, 3, 4, 5, 6, 7].map((n) => t(`brOut${n}`));
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
                        <p className="mx-auto max-w-3xl text-lg text-slate-100 sm:text-xl">{t('brHeroLead')}</p>
                        <div className="mt-10 flex justify-center">
                            <FitCallButton place="br-hero" label={t('brCtaLabel')} />
                        </div>
                        <p className="mx-auto mt-5 max-w-xl text-sm text-slate-200 sm:text-base">{t('brCtaNote')}</p>
                        <p className="mx-auto mt-2 max-w-xl text-sm font-semibold text-white sm:text-base">{t('brPriceLine')}</p>
                    </motion.div>
                </div>
            </section>

            {/* We map one real workflow. Five examples, as cards. */}
            <section className="bg-white py-16 sm:py-20">
                <div className="mx-auto max-w-6xl px-5 sm:px-6">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
                        {t('brWorkflowHeading')}
                    </motion.h2>
                    <motion.p {...fadeUp} className="mx-auto mt-4 max-w-2xl text-center text-base leading-8 text-slate-600 sm:text-lg">
                        {t('brWorkflowLead')}
                    </motion.p>
                    <ul className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
                        {workflows.map((workflow, index) => (
                            <motion.li
                                key={workflow}
                                {...fadeUpDelayed(index)}
                                className="rounded-xl border border-slate-200 bg-stone-50 px-5 py-4 text-base font-semibold leading-7 text-slate-900 card-glass card-static"
                            >
                                {workflow}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* What we examine: eight questions at each stage. */}
            <section className="bg-slate-50 py-16 sm:py-20">
                <div className="mx-auto max-w-6xl px-5 sm:px-6">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
                        {t('brExamineHeading')}
                    </motion.h2>
                    <motion.p {...fadeUp} className="mt-4 text-center text-base leading-8 text-slate-600 sm:text-lg">
                        {t('brExamineLead')}
                    </motion.p>
                    <ol className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
                        {questions.map((question, index) => (
                            <motion.li key={question} {...fadeUpDelayed(index)} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 card-glass card-static">
                                <ProcessNumber label={`${index + 1}`} decorative />
                                <span className="text-base font-semibold leading-7 text-slate-900">{question}</span>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Your Business Control Map: what the read identifies, then the read drawn. */}
            <section className="bg-white py-16 sm:py-20">
                <div className="container mx-auto px-5 sm:px-6">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
                        {t('brOutputHeading')}
                    </motion.h2>
                    <motion.p {...fadeUp} className="mt-4 text-center text-base leading-8 text-slate-600 sm:text-lg">
                        {t('brOutputLead')}
                    </motion.p>
                    <ul className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
                        {outputs.map((item, index) => (
                            <motion.li key={item} {...fadeUpDelayed(index)} className="flex gap-3 text-base leading-7 text-slate-700">
                                <span className="mt-1 shrink-0 text-indigo-600">
                                    <Check size={20} aria-hidden="true" />
                                </span>
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                    <div className="mx-auto mt-12 max-w-3xl">
                        <BusinessReadMock />
                    </div>
                </div>
            </section>

            {/* What it is not. Ian's own three, verbatim. */}
            <section className="bg-slate-50 py-16">
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
            <section className="bg-white py-20">
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
            <section className="bg-slate-50 py-20">
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
            <section className="bg-white py-20">
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

            {/* Closing: the two honest lines, the price, the Fit Call First. */}
            <section className="bg-hltNavy py-20 text-white">
                <div className="container mx-auto px-5 text-center sm:px-6">
                    <h2 className="mb-5 text-2xl font-bold sm:text-3xl">{t('brHonest')}</h2>
                    <p className="mx-auto mb-3 max-w-2xl text-lg text-slate-200">{t('brNoProject')}</p>
                    <p className="mx-auto mb-10 max-w-2xl text-base font-semibold text-white">{t('brPriceLine')}</p>
                    <div className="flex justify-center">
                        <FitCallButton place="br-final" label={t('brCtaLabel')} />
                    </div>
                    <p className="mt-5 text-sm text-slate-300">{t('brCtaNote')}</p>
                </div>
            </section>
        </div>
    );
};

export default BusinessRead;
