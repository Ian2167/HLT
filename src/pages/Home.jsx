// Home.jsx — the home page. RESTRUCTURED 18 September 2026.
//
// WHAT THIS PAGE IS, IN IAN'S WORDS
// Its one job, from his locked page-hierarchy table of 17 September 2026: "Problem, value, proof,
// CTA." The lead message is owner dependence, not a catalogue of services, and there is one
// commercial action on the page: the Business Read.
//
// WHAT WENT, AND WHY NOTHING WAS DELETED
// The five service cards are gone from this route, along with the "How we work" beats that
// introduced them. Every one of those five pages is still live at its own URL, its file is still
// on disk and its copy is still in src/copy/, on Ian's opening line "Do not delete existing
// service or methodology content". HEADER_SERVICES and ladderPosition are untouched, so the
// "Step n of 5" strip on each service page still works: this page simply stops importing them.
//
// WHY THIS FILE HOLDS NO COPY OF ITS OWN
// Every visible string comes from src/copy/homeRebuild.js, lifted verbatim from the gated pack at
//   C:\Projects\hlt-estate\02-builds\hlt-site-kit\copy\2026-09-18-home.md
// Only SENDABLE blocks are there. Every NOTE block stayed in the pack. The 14 September strings
// stay on disk in src/copy/home.js and are overridden key by key, never edited.
//
// TWO CALLS TO ACTION IN THE HERO, AND THAT IS IAN'S OWN HERO. He wrote both lines in the same
// paragraph of the directive: the Business Read is the commercial action, LINE is the contact
// rail beside it. The pack's NOTE 1 carries the research finding that argues for one and leaves
// the ruling with him. If he wants the secondary gone it is a delete and nothing else moves.
//
// THE THREE CAPABILITY CARDS CARRY NO LINK. The pack's NOTE 3 says they need three destinations
// and that none of the seven pages is one. The Desk ruled out an eighth page on 18 September, so
// there is nowhere for a "Learn more" to go and the label is not rendered. That decision is
// recorded in src/constants/routes.js where the ruling lives, and in the copy module.
//
// THE HERO PHOTOGRAPH stays exactly as it was, keys and all. It is Ian's demo ruling and the
// pack routes the question of hero imagery to the creative director rather than answering it.
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Eye, Library, MessageSquare, Scissors, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LINE_OFFICIAL_ACCOUNT } from '../constants/contact';
import { ROUTE_BUSINESS_READ, ROUTE_HOW_IT_WORKS } from '../constants/routes';
import ProcessNumber from '../components/mocks/ProcessNumber';

const CTA_CLASSES =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-950/20 transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:text-base';

// The secondary action is a quiet outline, never a second filled button, so the first screen
// still has one obvious thing to do.
const SECONDARY_CTA_CLASSES =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-4 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:text-base';

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.5 },
};

// One icon per capability card. These are marks, not copy: the card's words are the only thing a
// visitor reads, and each icon is the same lucide glyph the matching system page already uses.
const CAPABILITY_ICONS = [MessageSquare, Eye, Library];

// Keep, transfer, remove, 27 September 2026. Marks, not copy, same as the capability icons.
const KTR_ICONS = [ShieldCheck, BookOpen, Scissors];

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

    const signs = [
        t('homeSign1'),
        t('homeSign2'),
        t('homeSign3'),
        t('homeSign4'),
        t('homeSign5'),
        t('homeSign6'),
        t('homeSign7'),
    ];

    // Understand, Diagnose, Improve. His three stages, in his order, and the order is the point.
    const stages = [1, 2, 3].map((n) => ({
        n,
        name: t(`homeStage${n}Name`),
        body: t(`homeStage${n}Body`),
    }));

    const capabilities = [1, 2, 3].map((n) => ({
        name: t(`homeCap${n}Name`),
        body: t(`homeCap${n}Body`),
        Icon: CAPABILITY_ICONS[n - 1],
    }));

    // Keep, transfer, remove: Ian's three kinds of owner dependency, 27 September 2026.
    const ktr = [1, 2, 3].map((n) => ({
        name: t(`homeKtr${n}Name`),
        body: t(`homeKtr${n}Body`),
        Icon: KTR_ICONS[n - 1],
    }));

    const proof = [t('homeProof1'), t('homeProof2'), t('homeProof3'), t('homeProof4'), t('homeProof5')];

    return (
        <div className="min-h-screen bg-stone-50 pt-24 text-slate-950 dark:bg-hltNavy dark:text-white">
            <title>{t('homeMetaTitle')}</title>

            {/* Hero */}
            {/* Ian, 15 September 2026 12:5x Bangkok: "the Homepage Image that was initially approved
                has changed to a lesser depth so the buildings are severely cropped". The markup had
                not changed; the hero's height is set by the text inside it, and the Thai headline
                runs shorter than the English, so object-cover took a tighter crop out of the same
                photograph. Two fixes, so the crop no longer depends on how long the headline is:
                a minimum height that holds the frame open, and object-bottom, which anchors the
                crop on the temple roofline rather than the sky. The headline still sits over sky. */}
            <section className="relative flex min-h-[32rem] items-center overflow-hidden lg:min-h-[36rem]">
                <img
                    src={t('homeHeroImage')}
                    alt={t('homeHeroImageAlt')}
                    className="absolute inset-0 h-full w-full object-cover object-bottom"
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

                <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl sm:leading-[1.1]">
                            {t('homeHeroHeadline')}
                        </h1>
                        {/* 27 September 2026, Ian's "Agreed": the line under his headline. The
                            headline and lead above and below it stay in his ruled words. */}
                        <p className="mt-4 text-lg font-semibold leading-8 text-indigo-100 sm:text-xl">
                            {t('homeHeroKeepLine')}
                        </p>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg sm:leading-9">
                            {t('homeHeroLead')}
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                            <Link to={ROUTE_BUSINESS_READ} className={CTA_CLASSES}>
                                {t('homeCtaLabel')}
                                <ArrowRight size={18} aria-hidden="true" />
                            </Link>
                            <a
                                href={LINE_OFFICIAL_ACCOUNT}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={SECONDARY_CTA_CLASSES}
                            >
                                {t('homeSecondaryCtaLabel')}
                            </a>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-slate-300">{t('homeHeroCtaNote')}</p>
                    </motion.div>
                </div>
            </section>

            {/* The problem, in the owner's own week. Seven signs, in the pack's order. */}
            <section className="bg-white px-5 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8">
                {/* ONE CONTAINER, ONE TEXT MEASURE. 18 September 2026, creative-director defect 3:
                    this band ran on max-w-4xl with a left-aligned heading while the card bands ran
                    on max-w-6xl with centred ones, which put four heading edges on one page. The
                    band now runs on the site's own max-w-6xl, the cards sit on that 1152px column
                    with every other card on the page, and the prose sits in a centred max-w-3xl
                    column so the line length does not grow with the container. */}
                <div className="mx-auto max-w-6xl">
                    <motion.h2
                        {...fadeUp}
                        className="text-center text-2xl font-bold leading-tight sm:text-3xl"
                    >
                        {t('homeProblemHeading')}
                    </motion.h2>
                    <motion.p
                        {...fadeUp}
                        className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg"
                    >
                        {t('homeProblemLead')}
                    </motion.p>

                    {/* CARDED 18 September 2026, creative-director defects 1 and 7. The seven signs
                        rendered as indigo-ruled list rows on a flat ground, which is what took the
                        home page's bare-band share from 13 to 44 per cent and its glass elements
                        from 13 to 6. One sign per card-glass panel, each carrying the site's own
                        ProcessNumber badge, so this band reads as furniture rather than running
                        text. The badge is a visual device, not copy — no sign string carries a
                        numeral — so it is marked `decorative`. No string changed. */}
                    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                        {signs.map((sign, index) => (
                            <motion.li
                                key={sign}
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: index * 0.04 }}
                                className="flex items-start gap-4 rounded-2xl border border-slate-200 p-6 card-glass"
                            >
                                <ProcessNumber label={`${index + 1}`} decorative />
                                <span className="text-base leading-8 text-slate-600 dark:text-slate-300">
                                    {sign}
                                </span>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="mx-auto max-w-3xl">
                        <motion.p {...fadeUp} className="mt-10 text-base leading-8 text-slate-950 dark:text-white sm:text-lg">
                            {t('homeConsequenceP1')}
                        </motion.p>
                        <motion.p {...fadeUp} className="mt-4 text-base leading-8 text-slate-950 dark:text-white sm:text-lg">
                            {t('homeConsequenceP2')}
                        </motion.p>
                    </div>
                </div>
            </section>


            {/* KEEP, TRANSFER, REMOVE. 27 September 2026, Ian's new direction: sort every way the
                business depends on the owner into three and treat each differently. It answers the
                owner's fear straight after the problem is named: nothing that makes the business
                theirs is taken away. Navy, so it reads as the turn from problem to answer. Copy:
                src/copy/newDirection.js, from the 27 September pack. */}
            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('homeKtrHeading')}
                    </motion.h2>
                    <motion.p
                        {...fadeUp}
                        className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-slate-200 sm:text-lg"
                    >
                        {t('homeKtrLead')}
                    </motion.p>
                    <ul className="mt-10 grid gap-5 md:grid-cols-3">
                        {ktr.map((item, index) => (
                            <motion.li
                                key={item.name}
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: index * 0.06 }}
                                className="rounded-2xl border border-white/15 bg-white/[0.06] p-7"
                            >
                                <item.Icon size={26} className="text-indigo-200" aria-hidden="true" />
                                <h3 className="mt-4 text-xl font-bold">{item.name}</h3>
                                <p className="mt-3 text-base leading-7 text-slate-200">{item.body}</p>
                            </motion.li>
                        ))}
                    </ul>
                    <motion.p {...fadeUp} className="mx-auto mt-10 max-w-2xl text-center text-lg font-semibold leading-8">
                        {t('homeKtrClosing')}
                    </motion.p>
                </div>
            </section>

            {/* Understand, Diagnose, Improve. THE THREE STAGES REPLACE THE FIVE SERVICE CARDS.
                Same numbered process language the site already uses, because the order is the
                argument: nothing gets built before the business is read. */}
            <section className="bg-stone-100 px-5 py-16 dark:bg-white/[0.04] sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2
                        {...fadeUp}
                        className="text-center text-2xl font-bold leading-tight text-slate-950 dark:text-white sm:text-3xl"
                    >
                        {t('homeStagesHeading')}
                    </motion.h2>

                    {/* The connector is drawn in the gap between the cards, so no percentage
                        arithmetic is needed to make a line meet a badge: it runs from the edge of
                        one card to the next, horizontally on desktop and vertically on a phone,
                        and the opaque badge sits over it. The last stage draws none. */}
                    <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
                        {stages.map((stage, index) => (
                            <motion.li
                                key={stage.name}
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 card-glass"
                            >
                                {index < stages.length - 1 ? (
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

                                <ProcessNumber label={`${stage.n}`} size="lg" decorative />

                                <h3 className="mt-6 text-lg font-bold leading-7 text-slate-950 dark:text-white">
                                    {stage.name}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{stage.body}</p>
                            </motion.li>
                        ))}
                    </ol>

                    <motion.p
                        {...fadeUp}
                        className="mt-10 text-center text-base leading-8 text-slate-600 dark:text-slate-300"
                    >
                        {t('homeStagesClosing')}
                    </motion.p>
                    <motion.div {...fadeUp} className="mt-5 text-center">
                        <Link
                            to={ROUTE_HOW_IT_WORKS}
                            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-300"
                        >
                            {t('homeStagesLinkLabel')}
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* The capabilities, a level down from the stages, as Ian ruled. Three cards and no
                link on any of them: see this file's header and the copy module.
                THE LAYOUT IS ICON-LEFT (18 September 2026, creative-director defect 5). This band
                and the stages above it were two `md:grid-cols-3` rows of near-identical glass
                cards, 630px and 618px, stacked directly on each other with the same radius, the
                same padding and the same body length: one page reading as the same device twice.
                The tile moves to the left of the heading and body, so the two rows are two
                rhythms again. The tile itself is unchanged.
                THEY CARRY `card-static` (added 18 September 2026, creative-director defect 6).
                Ian's locked hover lights the indigo edge on every card, which on the live site is
                always a promise of a destination. These three have none, so the promise is
                withdrawn with it; the rule lives beneath .card-glass in src/index.css. */}
            <section className="bg-white px-5 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2
                        {...fadeUp}
                        className="text-center text-2xl font-bold leading-tight text-slate-950 dark:text-white sm:text-3xl"
                    >
                        {t('homeCapHeading')}
                    </motion.h2>
                    <motion.p
                        {...fadeUp}
                        className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-slate-600 dark:text-slate-300"
                    >
                        {t('homeCapLead')}
                    </motion.p>

                    <ul className="mt-12 grid gap-6 md:grid-cols-3">
                        {capabilities.map((capability, index) => (
                            <motion.li
                                key={capability.name}
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: index * 0.06 }}
                                className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-stone-50 p-7 card-glass card-static"
                            >
                                <span
                                    aria-hidden="true"
                                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-hltNavy text-white"
                                >
                                    <capability.Icon size={20} />
                                </span>
                                <div className="min-w-0">
                                    <h3 className="text-lg font-bold leading-7 text-slate-950 dark:text-white">
                                        {capability.name}
                                    </h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                                        {capability.body}
                                    </p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>

                    {/* AI visible, and subordinate, in Ian's own order: the operating improvement
                        first, AI second. */}
                    <motion.p
                        {...fadeUp}
                        className="mx-auto mt-10 max-w-3xl text-center text-base leading-8 text-slate-600 dark:text-slate-300"
                    >
                        {t('homeAiLine')}
                    </motion.p>
                </div>
            </section>

            {/* Proof. Commitments and mechanism, never a result: no delivered HLT engagement
                exists on file, so none is claimed. The pack's NOTE 4 records why. */}
            <section className="bg-stone-100 px-5 py-16 dark:bg-white/[0.04] sm:px-6 sm:py-20 lg:px-8">
                {/* Same container and same axis as the band above, creative-director defect 3. */}
                <div className="mx-auto max-w-6xl">
                    <motion.h2
                        {...fadeUp}
                        className="text-center text-2xl font-bold leading-tight sm:text-3xl"
                    >
                        {t('homeProofHeading')}
                    </motion.h2>
                    {/* CARDED 18 September 2026, creative-director defect 1. The five commitments
                        sit in ONE card-glass panel rather than on the flat ground, and the indigo
                        left rules stay exactly as they were, inside it. No string changed.
                        The panel keeps the band's text measure rather than the 1152px card column:
                        it is a wrapper around five lines of running text, and a 1152px-wide box of
                        one-line rules would trade one defect for another. */}
                    <div className="mx-auto max-w-3xl">
                        <ul className="mt-8 space-y-4 rounded-2xl border border-slate-200 p-7 card-glass">
                            {proof.map((line, index) => (
                                <motion.li
                                    key={line}
                                    {...fadeUp}
                                    transition={{ duration: 0.5, delay: index * 0.04 }}
                                    className="border-l-2 border-indigo-600 pl-5 text-base leading-8 text-slate-600 dark:border-indigo-400 dark:text-slate-300"
                                >
                                    {line}
                                </motion.li>
                            ))}
                        </ul>
                        <motion.p {...fadeUp} className="mt-8 text-base leading-8 text-slate-950 dark:text-white">
                            {t('homeProofClosing')}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Closing CTA. The same label as the hero, on purpose: one commercial action, placed
                twice on a page the reader scrolls. */}
            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('homeClosingHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                        {t('homeClosingBody')}
                    </p>
                    <div className="mt-8">
                        <Link to={ROUTE_BUSINESS_READ} className={CTA_CLASSES}>
                            {t('homeCtaLabel')}
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
                            {t('homeClosingNote')}
                        </a>
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
