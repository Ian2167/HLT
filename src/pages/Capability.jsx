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
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { CAPABILITIES } from '../config/features';
import { capabilities } from '../copy/capabilities';
import { ROUTE_PROBLEMS, capabilityRoute } from '../constants/routes';
import Seo from '../components/Seo';
import FitCallButtons from '../components/FitCallButtons';
import NotFound from './NotFound';
import { EVENTS, logEvent } from '../lib/analytics';
import { fadeUp, heroIn } from '../lib/motion';

const Capability = () => {
    const { slug } = useParams();
    const { t, lp } = useLanguage();
    const on = Boolean(CAPABILITIES[slug]);
    const cap = on ? capabilities[slug] : null;

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
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('finalHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{t('finalBody')}</p>
                    <div className="mt-8 flex justify-center">
                        <FitCallButtons place={`capability-${slug}`} />
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Capability;
