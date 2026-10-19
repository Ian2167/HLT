// ProblemsWeFix.jsx — /problems-we-fix and /en/problems-we-fix. Built 1 October 2026, the
// repositioning; RESTRUCTURED 19 October 2026 (the site review, round 2).
//
// WHAT THIS PAGE IS NOW. Six entry points, each in the same pattern: what you'd notice, the goal, one
// example change, and a link to the page that explains it. The first two are the marketing and
// website entry points (customers can't find you; marketing brings people but few become customers);
// the other four are the modules the home page used to list. Each module's "possible controls" sit
// behind a details toggle, as optional detail. Then the six-part control flow, moved here from the
// home page, with the plain-language glossary; then AI and automation, second to the owner's
// decision; then the capability pages and the Fit Call.
//
// EACH ENTRY HAS AN ANCHOR the home page's goal cards link to. The scroll is src/components/ScrollToTop.jsx.
//
// COPY: src/copy/improvements1019.js for the new lines; src/copy/repositioning.js for the module
// names, controls, AI and automation; src/copy/capabilities.js for the capability names.
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Megaphone, Repeat, Search, UserCog, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FOOTER_CAPABILITY_LINKS, ROUTE_BUSINESS_READ, ROUTE_EXAMPLES, ROUTE_OWNER_DEPENDENCY, ROUTE_PROBLEMS, capabilityRoute } from '../constants/routes';
// 18 October 2026: a capability with Thai copy (Websites) shows its Thai name on the Thai page.
import { capabilities } from '../copy/capabilities';
import Seo from '../components/Seo';
import FitCallButtons from '../components/FitCallButtons';
import ControlFlow from '../components/flows/ControlFlow';
import { fadeUp, fadeUpDelayed, heroIn } from '../lib/motion';

// The six entry points. `prefix` names the copy keys; `controls` is set for the four modules.
const ENTRIES = [
    { id: 'finding-you', prefix: 'pwfE1', nameKey: 'pwfE1Name', Icon: Search, to: capabilityRoute('websites') },
    { id: 'marketing-to-customers', prefix: 'pwfE2', nameKey: 'pwfE2Name', Icon: Megaphone, to: `${ROUTE_EXAMPLES}#sales-path` },
    { id: 'revenue-capture', prefix: 'm1', nameKey: 'm1Name', Icon: Wallet, to: `${ROUTE_EXAMPLES}#improvement-plan-extract`, controls: 'm1Controls' },
    { id: 'commercial-follow-through', prefix: 'm2', nameKey: 'm2Name', Icon: Repeat, to: `${ROUTE_EXAMPLES}#sales-path`, controls: 'm2Controls' },
    { id: 'owner-decision-control', prefix: 'm3', nameKey: 'm3Name', Icon: UserCog, to: ROUTE_OWNER_DEPENDENCY, controls: 'm3Controls' },
    { id: 'daily-business-pulse', prefix: 'm4', nameKey: 'm4Name', Icon: BarChart3, to: ROUTE_BUSINESS_READ, controls: 'm4Controls' },
];

const Chips = ({ items }) => (
    <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
            <li key={item} className="rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800">
                {item}
            </li>
        ))}
    </ul>
);

const Field = ({ label, children }) => (
    <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{label}</p>
        <p className="mt-1 text-base leading-7 text-slate-800">{children}</p>
    </div>
);

const ProblemsWeFix = () => {
    const { t, lp, contentLang } = useLanguage();
    const aiHelps = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => t(`aiHelp${n}`));
    const autoExamples = [1, 2, 3, 4, 5, 6].map((n) => t(`autoEx${n}`));
    const glossary = [1, 2, 3, 4, 5, 6, 7].map((n) => ({ term: t(`gloss${n}Term`), body: t(`gloss${n}Body`) }));

    return (
        <div className="min-h-screen bg-stone-50 pt-20 text-slate-950 lg:pt-24">
            <Seo title={t('problemsMetaTitle')} description={t('problemsMetaDescription')} route={ROUTE_PROBLEMS} />

            <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...heroIn} className="mx-auto max-w-3xl">
                    <h1 className="text-[2rem] font-bold leading-[1.15] sm:text-5xl sm:leading-[1.1]">{t('problemsPageHeading')}</h1>
                    <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">{t('pwfLead')}</p>
                </motion.div>
            </section>

            {/* The six entry points: notice, goal, example, link. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <ol className="mx-auto max-w-4xl space-y-6">
                    {ENTRIES.map((entry, index) => (
                        <motion.li
                            key={entry.id}
                            id={entry.id}
                            {...fadeUpDelayed(index, 0.05)}
                            className="scroll-mt-28 rounded-2xl border border-slate-200 bg-stone-50 p-6 card-glass card-static sm:p-8"
                        >
                            <div className="flex items-center gap-4">
                                <span aria-hidden="true" className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-hltNavy text-white">
                                    <entry.Icon size={22} />
                                </span>
                                <h2 className="text-xl font-bold leading-7 sm:text-2xl">{t(entry.nameKey)}</h2>
                            </div>
                            <div className="mt-5 grid gap-4 md:grid-cols-3">
                                <Field label={t('pwfNoticeLabel')}>{t(`${entry.prefix}Notice`)}</Field>
                                <Field label={t('pwfGoalLabel')}>{t(`${entry.prefix}Goal`)}</Field>
                                <Field label={t('pwfExampleLabel')}>{t(`${entry.prefix}Example`)}</Field>
                            </div>
                            <div className="mt-5">
                                <Link to={lp(entry.to)} className="inline-flex items-center gap-2 text-base font-bold text-indigo-600 transition-colors hover:text-indigo-500">
                                    {t(`${entry.prefix}Link`)}
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                            {entry.controls ? (
                                <details className="mt-4 rounded-xl border border-slate-200 bg-white px-4 py-3">
                                    <summary className="cursor-pointer text-sm font-bold text-slate-700">{t('pwfDetailLabel')}</summary>
                                    <Chips items={t(entry.controls).split(', ')} />
                                </details>
                            ) : null}
                        </motion.li>
                    ))}
                </ol>
            </section>

            {/* The control flow, moved from the home page, with the glossary. */}
            <section id="how-a-rule-works" className="bg-sand-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('controlHeading')}
                    </motion.h2>
                    <motion.p {...fadeUp} className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-slate-600 sm:text-lg">
                        {t('pwfControlLead')}
                    </motion.p>
                    <motion.div {...fadeUp} className="mt-10">
                        <ControlFlow />
                    </motion.div>
                    <motion.div {...fadeUp} className="mx-auto mt-12 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                        <h3 className="text-xl font-bold text-slate-950">{t('glossHeading')}</h3>
                        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                            {glossary.map((item) => (
                                <div key={item.term}>
                                    <dt className="text-base font-bold text-slate-950">{item.term}</dt>
                                    <dd className="mt-1 text-base leading-7 text-slate-600">{item.body}</dd>
                                </div>
                            ))}
                        </dl>
                    </motion.div>
                </div>
            </section>

            {/* Where AI fits: second to the owner's decision. */}
            <section id="where-ai-fits" className="scroll-mt-28 bg-stone-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('aiHeading')}</h2>
                    <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{t('aiLead')}</p>
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{t('aiHelpsLabel')}</p>
                    <Chips items={aiHelps} />
                    <p className="mt-6 text-lg font-semibold leading-8 text-slate-950">{t('aiWarning')}</p>
                    <p className="mt-2 text-base leading-8 text-slate-600">{t('aiLine')}</p>
                </motion.div>
            </section>

            {/* Automation should enforce good work. */}
            <section id="automation" className="scroll-mt-28 bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
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
                                        {(contentLang === 'th' && capabilities[item.to.split('/').pop()]?.th?.name) || item.label}
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
