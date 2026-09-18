// BusinessRead.jsx — /business-read, "The Business Read". Built 14 September 2026.
// RE-COPIED AND RESTRUCTURED 18 September 2026.
//
// WHY THIS FILE HOLDS NO COPY OF ITS OWN
// Every visible string on this page comes from the gated copy pack at
//   C:\Projects\hlt-estate\02-builds\hlt-site-kit\copy\2026-09-18-business-read.md
// and is stored verbatim in src/copy/businessReadRebuild.js, which src/translations.js spreads
// at the foot of both language blocks. Nothing here is the builder's wording. If a line needs
// changing, change the pack first, then the module, never this file.
//
// WHAT THE RESTRUCTURE DID, 18 September 2026. Ian's directive of 17 September makes this "the
// main commercial page" and writes out the four questions it should answer, in order: what is
// happening, what the Business Read does, what you receive, what it is not. Those four sections
// are now the spine of the page and they run before the tiers, because the reader should know
// what he is buying before he is shown three prices for it. The margin-led summary of 14
// September is what they replace; its seven paragraphs are still in src/translations.js and still
// in their own deck, and nothing was deleted anywhere.
//
// THE FOURTH SECTION IS THE UNUSUAL ONE AND IT STAYS. "What it is not" is the only block on the
// page that tells the reader what he is not buying. It is Ian's own list, verbatim, and it is the
// part a seat would be tempted to soften.
//
// WHY THE "STEP 1 OF 5" STRIP WENT. It read HEADER_SERVICES through ladderPosition and rendered
// a link to the AIOS Audit under the hero, so the site's main commercial page opened by pointing
// at a service page that is now deliberately off the navigation, and claimed a ladder of five the
// public site no longer presents. Ian's line is "No service names in the main navigation". The
// component, HEADER_SERVICES and ladderPosition are all untouched, and the strip still renders on
// each of the five service pages, which keep their routes and their files.
//
// LANGUAGE. English only this pass. The th block falls back to English for the keys this page
// renders, for the reason recorded at the foot of src/translations.js: the machine Thai draft
// describes the page this one replaced, and no line of Thai may be written or translated here.
//
// PRICES. Thai baht only, always with the ex-VAT wording beside them. HLT's own VAT
// registration is NOT ESTABLISHED, so no VAT-inclusive figure appears anywhere on this page. The
// three figures are Ian's ruling of 14 September; size banding is modelled and unruled, and the
// pack's NOTE 1 leaves that decision with him.
//
// CTA. One CTA on the page, the LINE Official Account ruled by Ian. It is deliberately NOT the
// site's utm-tagged contact constant: the deck rules "this exact URL, nothing appended without
// Ian's word".
//
// THE VISUAL PASS, 14 September 2026 (Ian, 17:42 Bangkok: "please add visuals to improve"; and
// 17:46: "Can we add numbered steps so it feels like a process"). Carried through the restructure
// unchanged:
//   1. "How it runs" is a vertical timeline with the site's numbered badge. The badge still
//      renders the deck's own "1.", so the copy fixture can rebuild the step line by joining
//      badge, lead and body.
//   2. Each tier card carries its icon and a three-bar depth ladder.
//   3. A comparison cell reading "Yes" gains a tick and "No" a muted dash, beside the word.
//   4. One code-drawn artefact mock, now under "What you receive": the written read.
// The price on the tier cards is untouched, and the mock's own costed lines read "THB —"
// because no figure for a client's next steps exists anywhere. See BusinessReadMock.jsx.
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, FileText, Layers, Users, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LINE_BUSINESS_READ } from '../constants/contact';
import ProcessNumber from '../components/mocks/ProcessNumber';
import BusinessReadMock from '../components/mocks/BusinessReadMock';
import { CellValue, DepthLadder } from '../components/mocks/TierVisuals';

// One mark per tier, in the deck's order: the read itself, the read with a second voice from the
// team, the read at full depth.
const TIER_ICONS = [FileText, Users, Layers];

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
        Icon: TIER_ICONS[n - 1],
        depth: n,
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

    const receive = [1, 2, 3, 4, 5].map((n) => t(`brReceive${n}`));
    const notThis = [1, 2, 3].map((n) => t(`brNot${n}`));

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

            {/* Hero. Ian, 15 Sept 2026 08:1x Bangkok: "the Business Read needs an Image, maybe a person
                with a magnifying glass". A free-licence Unsplash photograph (magnifying glass by a
                laptop; the person-with-glass images on Unsplash are paid Unsplash+), under the same
                card-navy wash and gradients as the ServicePage heroes, at the 55 per cent Ian set. */}
            <section className="relative py-20 overflow-hidden">
                <img
                    src={t('brHeroImage')}
                    alt={t('brHeroImageAlt')}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-hltNavy/55" />
                <div className="absolute inset-0 bg-gradient-to-r from-hltNavy/70 via-hltNavy/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-hltNavy/30 via-transparent to-hltNavy/60" />
                <div className="relative container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
                            {t('brHeroHeadline')}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-100 max-w-3xl mx-auto mb-10">
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
                        <p className="mt-5 text-sm text-slate-200">
                            {t('brHeroCtaNote')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ONE CONTAINER ACROSS THE SITE. 18 September 2026, creative-director defect 3: the
                three prose bands on this page ran on Tailwind's `container`, which is 1280px at
                this width, while the home page's bands ran on max-w-6xl, so the two pages put
                their text at different edges. The three bands named in the defect — "What is
                happening", "What the Business Read does" and "What it is not" — now run on
                mx-auto max-w-6xl px-6, which lands their inner max-w-3xl text column on the same
                336px edge as the home page's. The tier, receive, steps, FAQ and closing bands are
                not in the defect and keep their container. */}

            {/* QUESTION ONE. What is happening. Ian's own opening line for this section. */}
            <section className="py-16 bg-white dark:bg-slate-950">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
                            {t('brHappeningHeading')}
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300">
                            <p className="font-semibold text-slate-900 dark:text-white">{t('brHappeningP1')}</p>
                            <p>{t('brHappeningP2')}</p>
                            <p>{t('brHappeningP3')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUESTION TWO. What the Business Read does. Mechanism before recommendation, which
                is doctrine and is also the order Ian wrote the questions in. */}
            <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
                            {t('brDoesHeading')}
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300">
                            <p>{t('brDoesP1')}</p>
                            <p>{t('brDoesP2')}</p>
                            <p>{t('brDoesP3')}</p>
                            <p>{t('brDoesP4')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUESTION THREE. What you receive: the five, then the labelling line, then the
                deliverable drawn. */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
                        {t('brReceiveHeading')}
                    </h2>
                    <ul className="max-w-3xl mx-auto space-y-5">
                        {receive.map((item) => (
                            <li key={item} className="flex gap-4 text-slate-600 dark:text-slate-300">
                                <span className="mt-1 shrink-0 text-indigo-600 dark:text-indigo-400">
                                    <Check size={20} aria-hidden="true" />
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="max-w-3xl mx-auto mt-8 text-slate-600 dark:text-slate-300">
                        {t('brReceiveNote')}
                    </p>

                    {/* The deliverable, drawn: the named problem, the evidence with its verified
                        and not-established labels, and the costed next steps. */}
                    <div className="max-w-3xl mx-auto mt-14">
                        <BusinessReadMock />
                    </div>
                </div>
            </section>

            {/* QUESTION FOUR. What it is not. Ian's own three, verbatim, and the most persuasive
                block on the page precisely because it is the only one that draws a boundary. */}
            <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
                            {t('brNotHeading')}
                        </h2>
                        <ul className="space-y-5">
                            {notThis.map((item) => (
                                <li key={item} className="flex gap-4 text-lg text-slate-600 dark:text-slate-300">
                                    <span className="mt-1.5 shrink-0 text-slate-400 dark:text-slate-500">
                                        <X size={18} aria-hidden="true" />
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* The three tiers */}
            <section className="py-20 bg-white dark:bg-slate-950">
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
                                <div className="mb-6 flex items-center justify-between gap-4">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-200">
                                        <tier.Icon size={22} aria-hidden="true" />
                                    </span>
                                    <DepthLadder depth={tier.depth} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{tier.name}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">{tier.desc}</p>
                                {/* The price line reads in full as the pack's block 8 form. */}
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
                        className="hidden md:block max-w-5xl mx-auto mt-14 overflow-hidden rounded-xl card-glass"
                    >
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-white/20">
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
                                    <tr key={row.label} className="border-b border-slate-100 dark:border-white/10 last:border-0">
                                        <th scope="row" className="p-4 font-semibold text-slate-900 dark:text-white align-top">
                                            {row.label}
                                        </th>
                                        {row.cells.map((cell, i) => (
                                            <td key={i} className="p-4 text-slate-600 dark:text-slate-300 align-top">
                                                <CellValue value={cell} align="left" />
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
                                            <dd className="text-right text-slate-600 dark:text-slate-300">
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

            {/* How it runs */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
                        {t('brStepsHeading')}
                    </h2>
                    {/* The same vertical timeline the service pages carry, so the whole site has
                        one process language. The connecting line is drawn once behind the
                        column and each opaque badge sits over it. */}
                    <ol className="max-w-3xl mx-auto relative">
                        <span
                            aria-hidden="true"
                            className="absolute left-7 top-7 bottom-7 w-px bg-slate-300 dark:bg-white/20"
                        />
                        {steps.map((step) => (
                            <li key={step.number} className="relative flex gap-5 sm:gap-7 pb-10 last:pb-0">
                                <ProcessNumber label={step.number} />
                                <p className="text-slate-600 dark:text-slate-300 pt-3">
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
                    <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">{t('brClosingNote')}</p>
                </div>
            </section>
        </div>
    );
};

export default BusinessRead;
