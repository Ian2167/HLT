// ProblemsWeFix.jsx — /problems-we-fix and /en/problems-we-fix. Built 1 October 2026, the
// repositioning (Ian's brief of that morning, sections 12 to 14, and his "Agreed to the Home and
// other page structuring").
//
// WHAT THIS PAGE IS. The four places HLT most often puts a control in, each with its headline and
// the controls it tends to be made of, in full (the home page carries only the cards); then the
// brief's two technology sections, where AI fits and what automation should do, in full; then the
// enabled capability pages, if any; then the Fit Call. "Explore the problem, not a package" is the
// brief's own instruction, which is why these are not priced and not called products.
//
// EACH MODULE HAS AN ANCHOR the home page's cards link to; a hash in the URL scrolls to it after
// the page mounts, because ScrollToTop otherwise lands every navigation at the top.
//
// COPY: src/copy/repositioning.js and, for the capability names, src/copy/capabilities.js.
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Repeat, UserCog, Wallet } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FOOTER_CAPABILITY_LINKS, ROUTE_PROBLEMS } from '../constants/routes';
import Seo from '../components/Seo';
import FitCallButtons from '../components/FitCallButtons';
import { fadeUp, fadeUpDelayed, heroIn } from '../lib/motion';

const MODULE_ICONS = [Wallet, Repeat, UserCog, BarChart3];
// The anchors the home page's four cards link to; Home.jsx carries the same four strings.
const MODULE_SLUGS = ['revenue-capture', 'commercial-follow-through', 'owner-decision-control', 'daily-business-pulse'];

const Chips = ({ items }) => (
    <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
            <li key={item} className="rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800">
                {item}
            </li>
        ))}
    </ul>
);

const ProblemsWeFix = () => {
    const { t, lp } = useLanguage();
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;
        const el = document.getElementById(hash.slice(1));
        if (el) window.setTimeout(() => el.scrollIntoView({ block: 'start' }), 50);
    }, [hash]);

    const modules = [1, 2, 3, 4].map((n) => ({
        slug: MODULE_SLUGS[n - 1],
        name: t(`m${n}Name`),
        headline: t(`m${n}Headline`),
        controls: t(`m${n}Controls`).split(', '),
        Icon: MODULE_ICONS[n - 1],
    }));
    const aiHelps = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => t(`aiHelp${n}`));
    const autoExamples = [1, 2, 3, 4, 5, 6].map((n) => t(`autoEx${n}`));

    return (
        <div className="min-h-screen bg-stone-50 pt-20 text-slate-950 lg:pt-24">
            <Seo title={t('problemsMetaTitle')} description={t('problemsMetaDescription')} route={ROUTE_PROBLEMS} />

            <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...heroIn} className="mx-auto max-w-3xl">
                    <h1 className="text-[2rem] font-bold leading-[1.15] sm:text-5xl sm:leading-[1.1]">{t('problemsPageHeading')}</h1>
                    <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">{t('modulesLead')}</p>
                </motion.div>
            </section>

            {/* The four modules, in full. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <ol className="mx-auto max-w-4xl space-y-6">
                    {modules.map((module, index) => (
                        <motion.li
                            key={module.slug}
                            id={module.slug}
                            {...fadeUpDelayed(index, 0.05)}
                            className="scroll-mt-28 rounded-2xl border border-slate-200 bg-stone-50 p-6 card-glass card-static sm:p-8"
                        >
                            <div className="flex items-center gap-4">
                                <span aria-hidden="true" className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-hltNavy text-white">
                                    <module.Icon size={22} />
                                </span>
                                <h2 className="text-xl font-bold leading-7 sm:text-2xl">{module.name}</h2>
                            </div>
                            <p className="mt-4 text-lg font-semibold leading-8 text-slate-950">{module.headline}</p>
                            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{t('modulesControlsLabel')}</p>
                            <Chips items={module.controls} />
                        </motion.li>
                    ))}
                </ol>
            </section>

            {/* Where AI fits, in full. */}
            <section id="where-ai-fits" className="scroll-mt-20 bg-stone-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('aiHeading')}</h2>
                    <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{t('aiLead')}</p>
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{t('aiHelpsLabel')}</p>
                    <Chips items={aiHelps} />
                    <p className="mt-6 text-lg font-semibold leading-8 text-slate-950">{t('aiWarning')}</p>
                    <p className="mt-2 text-base leading-8 text-slate-600">{t('aiLine')}</p>
                </motion.div>
            </section>

            {/* Automation should enforce good work, in full. */}
            <section id="automation" className="scroll-mt-20 bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('autoHeading')}</h2>
                    <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{t('autoLead')}</p>
                    <Chips items={autoExamples} />
                    <p className="mt-6 text-lg font-semibold leading-8 text-slate-950">{t('autoClose')}</p>
                </motion.div>
            </section>

            {/* The capability pages, only once a switch is on. */}
            {FOOTER_CAPABILITY_LINKS.length > 0 ? (
                <section className="bg-stone-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                    <motion.div {...fadeUp} className="mx-auto max-w-4xl">
                        <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('footerCapabilitiesHeading')}</h2>
                        <p className="mt-4 text-base leading-8 text-slate-600">{t('capMethodLine')}</p>
                        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                            {FOOTER_CAPABILITY_LINKS.map((item) => (
                                <li key={item.to}>
                                    <Link
                                        to={lp(item.to)}
                                        className="flex min-h-12 items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 text-base font-semibold text-slate-900 transition-colors hover:border-indigo-500 hover:text-indigo-600"
                                    >
                                        {item.label}
                                        <ArrowRight size={16} aria-hidden="true" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </section>
            ) : null}

            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('finalHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{t('finalBody')}</p>
                    <div className="mt-8 flex justify-center">
                        <FitCallButtons place="problems-final" />
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default ProblemsWeFix;
