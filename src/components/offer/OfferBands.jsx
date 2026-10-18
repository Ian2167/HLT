// OfferBands.jsx — the three home-page bands of the 18 October 2026 offer refresh (A-044).
//
//   StagesBand    change 1: Understand, Diagnose, Improve, goals first (bridge row 4822, keeps the
//                 three stages; Ian: "Lead with the owner's objectives")
//   WebsitesBand  change 2: new websites and website improvement, with the line about looking at
//                 the customer's path before more advertising; hands to the Websites page
//   ReceiveBand   change 3: the three things a client receives, each tagged Example or Concept,
//                 handing to /examples where each one is shown in full
//
// Every string is in src/copy/offerRefresh1018.js. Motion is the site's own (src/lib/motion.js),
// under the app-wide reduced-motion setting in src/App.jsx.
import { motion } from 'framer-motion';
import {
    ArrowRight,
    CalendarCheck,
    Check,
    ClipboardList,
    Compass,
    Inbox,
    Map,
    MessageCircle,
    MonitorSmartphone,
    Search,
    UserCheck,
    Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { ROUTE_EXAMPLES, capabilityRoute } from '../../constants/routes';
import { localPath } from '../../constants/lang';
import { drawX, fadeUp, fadeUpDelayed } from '../../lib/motion';

// Direction A (18 October 2026): a short saffron rule above each section heading.
export const AccentRule = ({ light = false }) => (
    <span aria-hidden="true" className={`mx-auto mb-5 block h-1 w-12 rounded-full ${light ? 'bg-saffron-400' : 'bg-saffron-500'}`} />
);

// One photograph per stage (free licence: CC0 from StockSnap, and the site's own Unsplash photos).
const STAGE_PHOTOS = [
    { src: '/images/offer/owner-conversation.jpg', alt: 'An owner talking through goals at a table' },
    { src: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?auto=format&fit=crop&w=800&q=70', alt: 'Two people mapping a process on a wall of notes' },
    { src: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=70', alt: 'A laptop showing a simple dashboard' },
];

const LINK_CLASSES = 'inline-flex items-center gap-2 text-base font-bold text-indigo-600 transition-colors hover:text-indigo-500';

// The hero card (the wow pass, 18 October 2026): one enquiry followed through, four rows that
// arrive one after another and tick, once, then hold. Pure CSS (src/index.css, .hero-flow-row),
// so it costs no script and plays even before the page hydrates. Labelled Illustration: it shows
// the idea, not a client's system. Reduced motion shows the finished card at once.
const FLOW_ICONS = [MessageCircle, Inbox, UserCheck, CalendarCheck];

export const HeroFlowCard = () => {
    const { t } = useLanguage();
    return (
        <div className="w-full max-w-sm rounded-2xl border border-white/20 bg-white/10 p-5 text-white shadow-2xl shadow-black/20 backdrop-blur-md">
            <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-bold">{t('heroFlowTitle')}</p>
                <span className="shrink-0 whitespace-nowrap rounded-full border border-white/30 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-indigo-100">
                    {t('heroFlowTag')}
                </span>
            </div>
            <ol className="relative mt-4 space-y-2.5">
                <span aria-hidden="true" className="absolute bottom-4 left-[1.15rem] top-4 w-px bg-white/20" />
                {[1, 2, 3, 4].map((n, i) => {
                    const Icon = FLOW_ICONS[i];
                    return (
                        <li key={n} style={{ '--i': i }} className="hero-flow-row relative flex items-center gap-3 rounded-xl bg-white/10 px-3 py-2.5">
                            <span aria-hidden="true" className="relative inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-hltNavy/80 text-indigo-100">
                                <Icon size={15} />
                            </span>
                            <span className="flex-1 text-sm leading-5">{t(`heroFlow${n}`)}</span>
                            <span aria-hidden="true" style={{ '--i': i }} className="hero-flow-tick inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-hltNavy">
                                <Check size={13} strokeWidth={3} />
                            </span>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export const StagesBand = () => {
    const { t } = useLanguage();
    const stages = [
        { n: 1, Icon: Compass },
        { n: 2, Icon: Search },
        { n: 3, Icon: Wrench },
    ].map(({ n, Icon }) => ({ n, Icon, name: t(`stage${n}Name`), body: t(`stage${n}Body`) }));

    return (
        <section id="how-we-start" className="bg-sand-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <AccentRule />
                <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                    {t('stagesHeading')}
                </motion.h2>
                <motion.p {...fadeUp} className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-slate-600 sm:text-lg">
                    {t('stagesLead')}
                </motion.p>
                {/* The line that joins the three stages draws itself once, on a laptop. */}
                <div aria-hidden="true" className="relative mx-auto mt-10 hidden h-1 max-w-4xl overflow-hidden rounded-full bg-slate-200 lg:block">
                    <motion.div {...drawX} className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-hltNavy via-saffron-500 to-saffron-400" />
                </div>
                <ol className="mt-6 grid gap-5 lg:grid-cols-3">
                    {stages.map((stage, index) => (
                        <motion.li
                            key={stage.name}
                            {...fadeUpDelayed(index, 0.06)}
                            className="flex flex-col overflow-hidden rounded-2xl border border-sand-300 bg-white shadow-sm"
                        >
                            <img src={STAGE_PHOTOS[index].src} alt={STAGE_PHOTOS[index].alt} loading="lazy" className="h-44 w-full object-cover" />
                            <div className="flex items-center gap-3 px-6 pt-6 sm:px-7">
                                <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-500 text-hltNavy">
                                    <stage.Icon size={20} />
                                </span>
                                <h3 className="text-lg font-bold text-slate-950">
                                    <span className="mr-2 text-saffron-600">{stage.n}.</span>
                                    {stage.name}
                                </h3>
                            </div>
                            <p className="mt-4 px-6 pb-7 text-base leading-7 text-slate-600 sm:px-7">{stage.body}</p>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export const WebsitesBand = () => {
    const { t, lp } = useLanguage();
    return (
        <section id="websites" className="navy-glow bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
            <motion.div {...fadeUp} className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
                <div>
                    <MonitorSmartphone size={32} aria-hidden="true" className="text-saffron-400" />
                    <h2 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl">{t('websitesBandHeading')}</h2>
                    <p className="mt-5 text-base leading-8 text-slate-200 sm:text-lg">{t('websitesBandBody')}</p>
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5">
                    <img src="/images/offer/phone-in-hand.jpg" alt="A hand holding a phone" loading="lazy" className="h-48 w-full object-cover sm:h-56" />
                    <div className="p-6 sm:p-7">
                    <p className="text-base font-semibold leading-8 text-white sm:text-lg">{t('websitesBandLine')}</p>
                    <Link
                        to={lp(capabilityRoute('websites'))}
                        className="mt-6 inline-flex items-center gap-2 text-base font-bold text-saffron-300 transition-colors hover:text-white"
                    >
                        {t('websitesBandCta')}
                        <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export const ReceiveBand = () => {
    const { t, contentLang } = useLanguage();
    const lp = (route) => localPath(route, contentLang);
    const items = [
        { n: 1, tag: t('receiveTagExample'), Icon: Map, anchor: 'sample-business-map' },
        { n: 2, tag: t('receiveTagExample'), Icon: ClipboardList, anchor: 'improvement-plan-extract' },
        { n: 3, tag: t('receiveTagConcept'), Icon: MonitorSmartphone, anchor: 'website-demonstration' },
    ].map((item) => ({ ...item, name: t(`receive${item.n}Name`), body: t(`receive${item.n}Body`) }));

    return (
        <section id="what-you-receive" className="bg-sand-200 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <AccentRule />
                <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                    {t('receiveHeading')}
                </motion.h2>
                <motion.p {...fadeUp} className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-slate-600 sm:text-lg">
                    {t('receiveLead')}
                </motion.p>
                <ul className="mt-10 grid gap-5 md:grid-cols-3">
                    {items.map((item, index) => (
                        <motion.li key={item.name} {...fadeUpDelayed(index, 0.06)}>
                            <Link
                                to={`${lp(ROUTE_EXAMPLES)}#${item.anchor}`}
                                className="press flex h-full flex-col rounded-2xl border border-sand-300 bg-white p-6 shadow-sm transition-colors hover:border-saffron-500 sm:p-7"
                            >
                                <span className="flex items-center justify-between gap-3">
                                    <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-hltNavy text-saffron-400">
                                        <item.Icon size={20} />
                                    </span>
                                    <span className="whitespace-nowrap rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-amber-800">
                                        {item.tag}
                                    </span>
                                </span>
                                <span className="mt-5 block text-lg font-bold leading-7 text-slate-950">{item.name}</span>
                                <span className="mt-2 block flex-1 text-base leading-7 text-slate-600">{item.body}</span>
                                <span className={`${LINK_CLASSES} mt-4 text-sm`}>
                                    {t('receiveCta')}
                                    <ArrowRight size={16} aria-hidden="true" />
                                </span>
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
