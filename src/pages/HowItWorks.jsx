// HowItWorks.jsx — /how-it-works and /en/how-it-works. Built 18 September 2026; REBUILT 1 October
// 2026, the repositioning (Ian's brief of that morning, sections 9 and 11, and his "Agreed to the
// Home and other page structuring").
//
// WHAT THIS PAGE IS NOW. The brief's six steps in order (Fit Call, Business Read, Control Map, Fix
// Sprint, Measure, Expand Only If Useful), the line that nobody has to buy every stage, then the
// owner-by-exception flow (the brief's section 9, drawn in src/components/flows/DecisionFlow.jsx),
// then Ian's own "what you can hold us to" lines of 18 September, then the Fit Call.
//
// WHAT WENT. The three stages of 18 September (understand, diagnose, improve), the "who decides"
// and "where AI sits" bands: their strings stay in src/copy/howItWorks.js and stop rendering, on
// Ian's "do not delete". AI's full treatment now lives on /problems-we-fix.
//
// WHAT IS NOT ON THIS PAGE AND MUST NOT ARRIVE LATER (unchanged from 18 September): no
// methodology, no audit framework, no scoring, no diagnostic matrix, no implementation
// specification. Ian's directive moves all of it behind the Client Workspace login.
//
// COPY: src/copy/repositioning.js for the steps and the flow, src/copy/howItWorks.js for the rest.
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_HOW_IT_WORKS } from '../constants/routes';
import ProcessNumber from '../components/mocks/ProcessNumber';
import DecisionFlow from '../components/flows/DecisionFlow';
import FitCallButtons, { FitCallButton } from '../components/FitCallButtons';
import Seo from '../components/Seo';
import { fadeUp, fadeUpDelayed, heroIn } from '../lib/motion';

const HowItWorks = () => {
    const { t } = useLanguage();
    const steps = [1, 2, 3, 4, 5, 6].map((n) => ({ n, name: t(`step${n}Name`), body: t(`step${n}Body`) }));
    const hold = [t('hiwHold1'), t('hiwHold2'), t('hiwHold3'), t('hiwHold4')];

    return (
        <div className="min-h-screen bg-stone-50 pt-20 text-slate-950 lg:pt-24">
            <Seo title={t('hiwMetaTitle')} description={t('hiwMetaDescription')} route={ROUTE_HOW_IT_WORKS} />

            {/* Hero: the home page's photograph under the same wash, so the page sits with the
                others (creative-director defect 2, 18 September 2026). */}
            <section className="relative flex min-h-[28rem] items-center overflow-hidden lg:min-h-[32rem]">
                <img
                    src={t('homeHeroImage')}
                    alt={t('homeHeroImageAlt')}
                    className="absolute inset-0 h-full w-full object-cover object-bottom"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-hltNavy/55" />
                <div className="absolute inset-0 bg-gradient-to-r from-hltNavy/70 via-hltNavy/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-hltNavy/30 via-transparent to-hltNavy/60" />

                <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                    <motion.div {...heroIn} className="max-w-3xl">
                        <h1 className="text-[2rem] font-bold leading-[1.15] text-white sm:text-5xl sm:leading-[1.1]">{t('hiwHeroHeadline')}</h1>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg sm:leading-9">{t('hiwHeroLead')}</p>
                        <div className="mt-8">
                            <FitCallButton place="hiw-hero" />
                        </div>
                        <p className="mt-4 text-sm leading-6 text-slate-200 sm:text-base">{t('ctaFitCallNote')}</p>
                    </motion.div>
                </div>
            </section>

            {/* The six steps, as the timeline the service pages use. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <ol className="relative">
                        <span aria-hidden="true" className="absolute bottom-7 left-7 top-7 w-px bg-slate-300" />
                        {steps.map((step, index) => (
                            <motion.li key={step.name} {...fadeUpDelayed(index, 0.05)} className="relative flex gap-5 pb-10 last:pb-0 sm:gap-7">
                                <ProcessNumber label={`${step.n}`} decorative />
                                <div className="pt-2">
                                    <h2 className="text-xl font-bold leading-7 text-slate-950">{step.name}</h2>
                                    <p className="mt-2 text-base leading-7 text-slate-600">{step.body}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ol>
                    <motion.p {...fadeUp} className="mt-10 rounded-2xl border border-slate-200 bg-stone-50 p-6 text-base font-semibold leading-7 text-slate-950 card-glass card-static">
                        {t('hiwNoObligation')}
                    </motion.p>
                </div>
            </section>

            {/* Owner by exception, as a flow. */}
            <section className="bg-stone-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('exceptionHeading')}
                    </motion.h2>
                    <motion.div {...fadeUp} className="mt-10">
                        <DecisionFlow />
                    </motion.div>
                    <motion.p {...fadeUp} className="mx-auto mt-10 max-w-3xl text-center text-base leading-8 text-slate-600 sm:text-lg">
                        {t('exceptionLead')}
                    </motion.p>
                </div>
            </section>

            {/* What you can hold us to: Ian's own four lines of 18 September. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('hiwHoldHeading')}</h2>
                    <ul className="mt-6 space-y-4">
                        {hold.map((line) => (
                            <li key={line} className="border-l-2 border-indigo-600 pl-5 text-base leading-8 text-slate-600">
                                {line}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </section>

            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('hiwClosingHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{t('hiwClosingBody')}</p>
                    <div className="mt-8 flex justify-center">
                        <FitCallButtons place="hiw-final" />
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default HowItWorks;
