// DeliverySection.jsx — change 5 of the 18 October 2026 offer refresh (A-044), on /how-it-works:
// how a build is delivered (discovery, agreed scope, design approval, testing, launch, handover)
// and what stays the client's (ownership, training, separately agreed support, third-party costs
// shown first). Ian asked for the four to be prominent, so they sit in their own band, not a list
// under the steps. Strings in src/copy/offerRefresh1018.js.
import { motion } from 'framer-motion';
import { GraduationCap, KeyRound, LifeBuoy, ReceiptText } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { fadeUp, fadeUpDelayed } from '../../lib/motion';

const OWN_ICONS = [KeyRound, GraduationCap, LifeBuoy, ReceiptText];

// 19 October 2026 evening (bridge row 4882): How It Works puts the six build steps behind its "See how
// we build it" disclosure and keeps "what stays yours" in view, so each half can render on its own.
const DeliverySection = ({ showSteps = true, showOwn = true }) => {
    const { t } = useLanguage();
    const steps = [1, 2, 3, 4, 5, 6].map((n) => ({ n, name: t(`dl${n}Name`), body: t(`dl${n}Body`) }));
    const own = [1, 2, 3, 4].map((n) => ({ n, name: t(`dlOwn${n}Name`), body: t(`dlOwn${n}Body`), Icon: OWN_ICONS[n - 1] }));

    return (
        <>
            {showSteps ? (
            <section id="delivery" className="scroll-mt-28 bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('dlHeading')}
                    </motion.h2>
                    <motion.p {...fadeUp} className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-slate-600 sm:text-lg">
                        {t('dlLead')}
                    </motion.p>
                    <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {steps.map((step, index) => (
                            <motion.li
                                key={step.n}
                                {...fadeUpDelayed(index, 0.05)}
                                className="rounded-2xl border border-slate-200 bg-stone-50 p-6 card-glass card-static"
                            >
                                <p className="flex items-center gap-3">
                                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-hltNavy text-sm font-bold text-white">{step.n}</span>
                                    <span className="text-lg font-bold text-slate-950">{step.name}</span>
                                </p>
                                <p className="mt-3 text-base leading-7 text-slate-600">{step.body}</p>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </section>
            ) : null}

            {showOwn ? (
            <section id="what-stays-yours" className="navy-glow bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('dlOwnHeading')}
                    </motion.h2>
                    <ul className="mt-10 grid gap-5 md:grid-cols-2">
                        {own.map((item, index) => (
                            <motion.li key={item.n} {...fadeUpDelayed(index, 0.05)} className="flex gap-4 rounded-2xl border border-white/15 bg-white/5 p-6">
                                <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-indigo-200">
                                    <item.Icon size={20} />
                                </span>
                                <span>
                                    <span className="block text-lg font-bold">{item.name}</span>
                                    <span className="mt-1 block text-base leading-7 text-slate-200">{item.body}</span>
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </section>
            ) : null}
        </>
    );
};

export default DeliverySection;
