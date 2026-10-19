// Capability.jsx — /capabilities/:slug and /en/capabilities/:slug. Built 1 October 2026, the
// repositioning (Ian's brief of that morning, section 19; his ruling: "Rewrite the Capabilities but
// again make it so they can be switched on or off").
//
// ONE PAGE FOR ALL EIGHT, driven by the slug. A slug whose switch is off in src/config/features.js
// renders the 404 page, is not in the sitemap and is not prerendered, so turning a capability on is
// one `true` in that file and a rebuild. The copy is the builder's draft in src/copy/capabilities.js
// and is gated before any switch goes on.
//
// THE SHAPE IS THE BRIEF'S: problem, outcome, mechanism, potential controls, and the line that every
// capability is one tool the control method may choose. No result figures, no guarantees, no price.
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { CAPABILITIES } from '../config/features';
import { capabilities } from '../copy/capabilities';
import { ROUTE_EXAMPLES, ROUTE_HOW_IT_WORKS, ROUTE_PROBLEMS, capabilityRoute } from '../constants/routes';
import Seo from '../components/Seo';
import FitCallButtons from '../components/FitCallButtons';
import NotFound from './NotFound';
import { EVENTS, logEvent } from '../lib/analytics';
import { fadeUp, heroIn } from '../lib/motion';

// The Websites page's extra sections, 18 October 2026 (Ian's change 2). New site or improving one,
// the four things planned together, the advertising line, what the client owns, and the two links:
// to how delivery works and to the website demonstration (the English examples page, where it
// lives until its Thai exists).
const WebsitesExtra = ({ extra }) => {
    const { lp } = useLanguage();
    return (
        <>
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
                    {[
                        [extra.newHeading, extra.newBody],
                        [extra.improveHeading, extra.improveBody],
                    ].map(([heading, body]) => (
                        <motion.div key={heading} {...fadeUp} className="rounded-2xl border border-slate-200 bg-stone-50 p-6 card-glass card-static sm:p-7">
                            <h2 className="text-xl font-bold leading-7 text-slate-950">{heading}</h2>
                            <p className="mt-3 text-base leading-7 text-slate-600">{body}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* 19 October 2026: the working example comes before any method detail. */}
            {extra.seeHeading ? (
                <section className="bg-white px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8">
                    <motion.div {...fadeUp} className="mx-auto flex max-w-5xl flex-col gap-4 rounded-2xl border-l-4 border-saffron-500 bg-sand-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                        <div>
                            <h2 className="text-xl font-bold leading-7 text-slate-950">{extra.seeHeading}</h2>
                            <p className="mt-2 text-base leading-7 text-slate-600">{extra.seeBody}</p>
                        </div>
                        <Link to={`${lp(ROUTE_EXAMPLES)}#website-demonstration`} className="inline-flex shrink-0 items-center gap-2 font-bold text-indigo-600 hover:text-indigo-500">
                            {extra.demoLink}
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                    </motion.div>
                </section>
            ) : null}
            <section className="bg-stone-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {extra.connectHeading}
                    </motion.h2>
                    <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {extra.connect.map((item, index) => (
                            <motion.li key={item.name} {...fadeUp} className="rounded-2xl border border-slate-200 bg-white p-5 card-glass card-static">
                                <p className="text-sm font-bold text-indigo-600">{index + 1}</p>
                                <h3 className="mt-1 text-lg font-bold text-slate-950">{item.name}</h3>
                                <p className="mt-2 text-base leading-7 text-slate-600">{item.body}</p>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </section>
            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{extra.adHeading}</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-200">{extra.adBody}</p>
                    <p className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5 text-base leading-7 text-white">{extra.ownBody}</p>
                    <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                        <Link to={`${lp(ROUTE_HOW_IT_WORKS)}#delivery`} className="inline-flex items-center gap-2 font-bold text-indigo-200 hover:text-white">
                            {extra.deliveryLink}
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                        <Link to={`${lp(ROUTE_EXAMPLES)}#website-demonstration`} className="inline-flex items-center gap-2 font-bold text-indigo-200 hover:text-white">
                            {extra.demoLink}
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

const Capability = () => {
    const { slug } = useParams();
    const { t, lp, contentLang } = useLanguage();
    const on = Boolean(CAPABILITIES[slug]);
    // The page's words follow the page's language: a capability with a `th` block (Websites, 18
    // October 2026) reads Thai on its Thai address.
    const base = on ? capabilities[slug] : null;
    const cap = base && contentLang === 'th' && base.th ? { ...base, ...base.th } : base;

    useEffect(() => {
        if (on) logEvent(EVENTS.capabilityView, { capability: slug });
    }, [on, slug]);

    if (!cap) return <NotFound />;

    return (
        <div className="min-h-screen bg-stone-50 pt-20 text-slate-950 lg:pt-24">
            <Seo title={cap.title} description={cap.description} route={capabilityRoute(slug)} />

            <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...heroIn} className="mx-auto max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">{cap.name}</p>
                    <h1 className="mt-3 text-[2rem] font-bold leading-[1.15] sm:text-5xl sm:leading-[1.1]">{cap.headline}</h1>
                    <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">{cap.description}</p>
                </motion.div>
            </section>

            {/* 18 October 2026: the Websites page's own sections (src/copy/offerRefresh1018.js). */}
            {cap.extra ? <WebsitesExtra extra={cap.extra} /> : null}

            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl space-y-8">
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{t('capFitsLabel')}</h2>
                        <p className="mt-2 text-lg font-semibold leading-8">{cap.fits}</p>
                    </div>
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{t('capDoesLabel')}</h2>
                        <p className="mt-2 text-base leading-8 text-slate-600">{cap.does}</p>
                    </div>
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{t('capNotLabel')}</h2>
                        <p className="mt-2 text-base leading-8 text-slate-600">{cap.not}</p>
                    </div>
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{t('capControlsLabel')}</h2>
                        <ul className="mt-3 flex flex-wrap gap-2">
                            {cap.controls.split(', ').map((control) => (
                                <li key={control} className="rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800">
                                    {control}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="rounded-xl border border-slate-200 bg-stone-50 p-5 text-base leading-7 text-slate-700 card-glass card-static">{t('capMethodLine')}</p>
                    <Link to={lp(ROUTE_PROBLEMS)} className="inline-flex items-center gap-2 text-base font-bold text-indigo-600 transition-colors hover:text-indigo-500">
                        <ArrowLeft size={16} aria-hidden="true" />
                        {t('capBackLink')}
                    </Link>
                </motion.div>
            </section>

            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    {/* 19 October 2026: a page with its own next step (Websites) says it here. */}
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{cap.extra?.closeHeading || t('finalHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{cap.extra?.closeBody || t('finalBody')}</p>
                    <div className="mt-8 flex justify-center">
                        <FitCallButtons place={`capability-${slug}`} />
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Capability;
