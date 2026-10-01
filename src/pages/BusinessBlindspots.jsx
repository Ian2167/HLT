// BusinessBlindspots.jsx — /business-blindspots and /en/business-blindspots. Built 30 September
// 2026, the visibility refresh (bridge row 4007 and Ian's fuller spec, sections 23 to 25). First
// drafted by the 12:42 build session; rebuilt here on the URL-language routing.
//
// WHAT THIS PAGE IS. The free 15-minute outside-in test: six steps a visitor can run on their own
// business today, the instruction to fix the biggest point of friction first, and then, only after
// the whole test has been given, the one paragraph that says where the Business Read starts. The
// spec's rule, verbatim: "Do not turn the free test into a disguised sales page."
//
// 1 OCTOBER 2026, the repositioning: case study zero moved here from the home page (it is the test
// HLT ran on itself, so it belongs with the test), and the closing action became the Fit Call with
// the Business Read beside it (Ian's brief, section 22). The test itself is unchanged.
//
// COPY: src/copy/visibilityRefresh.js, with case zero and the closing from src/copy/repositioning.js.
// Thai is a machine draft under review.
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_BUSINESS_BLINDSPOTS, ROUTE_OWNER_DEPENDENCY } from '../constants/routes';
import ProcessNumber from '../components/mocks/ProcessNumber';
import Seo from '../components/Seo';
import FitCallButtons from '../components/FitCallButtons';
import { fadeUp, fadeUpDelayed, heroIn } from '../lib/motion';

const BusinessBlindspots = () => {
    const { t, lp } = useLanguage();
    const steps = [1, 2, 3, 4, 5, 6].map((n) => ({ name: t(`blindStep${n}Name`), body: t(`blindStep${n}Body`) }));

    return (
        <div className="min-h-screen bg-stone-50 pt-20 text-slate-950 lg:pt-24">
            <Seo title={t('blindSeoTitle')} description={t('blindMetaDescription')} route={ROUTE_BUSINESS_BLINDSPOTS} />

            <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...heroIn} className="mx-auto max-w-3xl">
                    <h1 className="text-[2rem] font-bold leading-[1.15] sm:text-5xl sm:leading-[1.1]">{t('blindH1')}</h1>
                    <div className="mt-6 space-y-3 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                        <p>{t('blindIntro1')}</p>
                        <p>{t('blindIntro2')}</p>
                        <p className="font-semibold text-slate-950">{t('blindIntro3')}</p>
                    </div>
                </motion.div>
            </section>

            {/* The six steps, numbered, one column on a phone. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.h2 {...fadeUp} className="text-center text-2xl font-bold leading-tight sm:text-3xl">
                        {t('blindQuickTestHeading')}
                    </motion.h2>
                    <ol className="mt-8 grid gap-4 sm:grid-cols-2">
                        {steps.map((step, index) => (
                            <motion.li
                                key={step.name}
                                {...fadeUpDelayed(index)}
                                className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5 card-glass card-static sm:p-6"
                            >
                                <ProcessNumber label={`${index + 1}`} decorative />
                                <div className="min-w-0">
                                    <h3 className="text-lg font-bold leading-7 text-slate-950">{step.name}</h3>
                                    <p className="mt-1 text-base leading-7 text-slate-600">{step.body}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ol>
                    <motion.p {...fadeUp} className="mx-auto mt-10 max-w-2xl text-center text-lg font-semibold leading-8 text-slate-950">
                        {t('blindInstruction')}
                    </motion.p>
                </div>
            </section>

            {/* Case study zero: the test HLT ran on itself. */}
            <section className="bg-stone-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-7 card-glass card-static sm:p-9">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('blindCaseHeading')}</h2>
                    <p className="mt-5 text-base leading-8 text-slate-600">{t('blindCaseBody')}</p>
                </motion.div>
            </section>

            {/* After the whole test, and only then: where the read begins. */}
            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('blindDeeperHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{t('blindDeeperBody')}</p>
                    <div className="mt-8 flex justify-center">
                        <FitCallButtons place="blindspots-final" />
                    </div>
                    <p className="mt-6 text-sm text-slate-300">
                        <Link to={lp(ROUTE_OWNER_DEPENDENCY)} className="underline underline-offset-4 transition-colors hover:text-white">
                            {t('blindOdLink')}
                        </Link>
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default BusinessBlindspots;
