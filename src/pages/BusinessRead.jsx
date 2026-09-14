// BusinessRead.jsx — /business-read, "The Business Read". Built 14 September 2026.
//
// WHY THIS FILE HOLDS NO COPY OF ITS OWN
// Every visible string on this page comes from the verified copy deck at
//   C:\Projects\IWT\02-builds\executive-assistant\work\drafts\2026-09-14-HLT-BUSINESS-READ-PAGE-COPY.md
// and is stored verbatim in src/translations.js under the br* keys. Nothing here is the
// builder's wording. If a line needs changing, change the deck first, then the key, never
// this file. The page is proved verbatim against the deck by
//   src/assets/brand/hlt-logo-v2/verify-business-read-copy.mjs
//
// LANGUAGE. English only this pass. The th keys carry the English values on purpose, so the
// Thai toggle falls back to English rather than showing a machine translation — HLT doctrine
// (HLT_GOVERNING_CONTEXT.md line 73) forbids line-by-line translation, and Ian ruled the page
// ships English-only until a native Thai deck exists.
//
// PRICES. Thai baht only, always with the ex-VAT wording beside them. HLT's own VAT
// registration is NOT ESTABLISHED, so no VAT-inclusive figure appears anywhere on this page.
//
// CTA. One CTA on the page, the LINE Official Account ruled by Ian on 14 September 2026.
// It is deliberately NOT the site's utm-tagged contact constant: the deck rules "this exact
// URL, nothing appended without Ian's word". See the flag in the build notes.
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LINE_BUSINESS_READ } from '../constants/contact';

const CTA_CLASSES =
    'inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl';

const BusinessRead = () => {
    const { t } = useLanguage();

    // The eight comparison rows, in the deck's order. Labels and cells are keys, never text.
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
    }));

    const steps = [1, 2, 3, 4, 5].map((n) => ({
        number: `${n}.`,
        lead: t(`brStep${n}Lead`),
        body: t(`brStep${n}Body`),
    }));

    const faqs = [1, 2, 3, 4, 5].map((n) => ({
        q: t(`brFaq${n}Q`),
        a: t(`brFaq${n}A`),
    }));

    const included = [1, 2, 3, 4, 5, 6].map((n) => t(`brIncluded${n}`));

    // The description meta is swapped in place rather than rendered.
    // React 19 hoists a rendered <meta> by APPENDING it to <head>, and index.html already
    // carries a site-wide description. That would leave two description tags on this route
    // with the site-wide one first, which is the one a crawler reads — the fixture
    // verify-business-read-copy.mjs caught exactly that. Swapping the existing tag's content
    // and putting it back on unmount keeps one description per page and touches no other
    // file. The <title> below is left to React, which hoists and restores it correctly
    // because index.html's title is a single element it replaces rather than duplicates.
    const metaDescription = t('brMetaDescription');
    useEffect(() => {
        const tag = document.querySelector('meta[name="description"]');
        if (!tag) return undefined;
        const previous = tag.getAttribute('content');
        tag.setAttribute('content', metaDescription);
        return () => tag.setAttribute('content', previous);
    }, [metaDescription]);

    return (
        <div className="pt-24 min-h-screen">
            {/* React 19 hoists this into <head>; the route gets its own title. The description
                is handled by the effect above, for the reason recorded there. */}
            <title>{t('brMetaTitle')}</title>

            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 max-w-4xl mx-auto leading-tight">
                            {t('brHeroHeadline')}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10">
                            {t('brHeroLead')}
                        </p>
                        <a
                            href={LINE_BUSINESS_READ}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={CTA_CLASSES}
                        >
                            {t('brCtaLabel')}
                            <ArrowRight size={20} aria-hidden="true" />
                        </a>
                        <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
                            {t('brHeroCtaNote')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The summary */}
            <section className="py-16 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
                            {t('brSummaryHeading')}
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300">
                            <p>{t('brSummaryP1')}</p>
                            <p>{t('brSummaryP2')}</p>
                            <p>{t('brSummaryP3')}</p>
                            <p>{t('brSummaryP4')}</p>
                            <p>{t('brSummaryP5')}</p>
                            <p>{t('brSummaryP6')}</p>
                            <p className="font-semibold text-slate-900 dark:text-white">{t('brSummaryP7')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The three tiers */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
                        {t('brTiersHeading')}
                    </h2>

                    {/* Tier cards */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {tiers.map((tier) => (
                            <div
                                key={tier.name}
                                className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col"
                            >
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{tier.name}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">{tier.desc}</p>
                                {/* The price line reads in full as the deck's line 141 form. */}
                                <p className="mb-4">
                                    <span className="text-3xl font-bold text-slate-900 dark:text-white">{tier.price}</span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">{t('brPriceVatSuffix')}</span>
                                </p>
                                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{tier.delivery}</p>
                                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{tier.revisions}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">{t('brPriceNote')}</p>

                    {/* Desktop: the eight rows as one comparison table */}
                    {/* id is a screenshot target for shoot-business-read-proof.mjs, nothing else. */}
                    <div
                        id="br-tier-table"
                        className="hidden md:block max-w-5xl mx-auto mt-14 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                    >
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-slate-700">
                                    <th className="p-4"></th>
                                    {tiers.map((tier) => (
                                        <th key={tier.name} className="p-4 font-bold text-slate-900 dark:text-white">
                                            {tier.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row) => (
                                    <tr key={row.label} className="border-b border-slate-100 dark:border-slate-700/60 last:border-0">
                                        <th scope="row" className="p-4 font-semibold text-slate-900 dark:text-white align-top">
                                            {row.label}
                                        </th>
                                        {row.cells.map((cell, i) => (
                                            <td key={i} className="p-4 text-slate-600 dark:text-slate-300 align-top">
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile: the same eight rows, stacked per tier */}
                    <div id="br-tier-stack" className="md:hidden mt-10 space-y-6">
                        {tiers.map((tier, tierIndex) => (
                            <div
                                key={tier.name}
                                className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700"
                            >
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{tier.name}</h3>
                                <dl className="space-y-3">
                                    {rows.map((row) => (
                                        <div key={row.label} className="flex justify-between gap-4 text-sm">
                                            <dt className="font-semibold text-slate-900 dark:text-white">{row.label}</dt>
                                            <dd className="text-right text-slate-600 dark:text-slate-300">{row.cells[tierIndex]}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's included */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
                        {t('brIncludedHeading')}
                    </h2>
                    <ul className="max-w-3xl mx-auto space-y-5">
                        {included.map((item) => (
                            <li key={item} className="flex gap-4 text-slate-600 dark:text-slate-300">
                                <span className="mt-1 shrink-0 text-indigo-600 dark:text-indigo-400">
                                    <Check size={20} aria-hidden="true" />
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* How it runs */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
                        {t('brStepsHeading')}
                    </h2>
                    <ol className="max-w-3xl mx-auto space-y-8">
                        {steps.map((step) => (
                            <li key={step.number} className="flex gap-5">
                                <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 shrink-0 w-8">
                                    {step.number}
                                </span>
                                <p className="text-slate-600 dark:text-slate-300">
                                    <span className="font-bold text-slate-900 dark:text-white">{step.lead}</span>{' '}
                                    <span>{step.body}</span>
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* The five FAQs */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
                        {t('brFaqHeading')}
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-8">
                        {faqs.map((faq) => (
                            <div key={faq.q}>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
                                <p className="text-slate-600 dark:text-slate-300">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                        {t('brClosingHeading')}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
                        {t('brClosingBody')}
                    </p>
                    <a
                        href={LINE_BUSINESS_READ}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={CTA_CLASSES}
                    >
                        {t('brCtaLabel')}
                        <ArrowRight size={20} aria-hidden="true" />
                    </a>
                    <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">{t('brLineHandle')}</p>
                </div>
            </section>
        </div>
    );
};

export default BusinessRead;
