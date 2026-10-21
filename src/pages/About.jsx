// About.jsx — /about and /en/about. Built 18 September 2026; the top REPLACED 30 September; REBUILT
// 1 October 2026, the repositioning (Ian's brief of that morning, section 17, and his rulings).
//
// WHAT THIS PAGE IS, IN IAN'S WORDS
// Its one job, from his locked page-hierarchy table of 17 September 2026: "Why HLT is credible."
// Still thin, by his rule.
//
// NO PERSON ON THIS PAGE, 19 October 2026. The founder paragraph and the team slot that sat behind
// switches were deleted from the source, not just hidden, because a withheld string still ships in
// the JavaScript bundle. The page carries the company's identity and registration only.
//
// THE REST: the brief's H1 and three lines, how we work (the brief's six lines), Ian's own "what we
// won't do" of 18 September, the three-line company facts block (gate 128), and the Fit Call. The
// 18 September "what we do" band stops rendering: the new opening says it. No address, no
// photograph, no team section.
//
// COPY: src/copy/about.js, with the opening, how we work, the meta and the CTA overridden by
// src/copy/repositioning.js, which is spread last.
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_ABOUT } from '../constants/routes';
import Seo from '../components/Seo';
import FitCallButtons from '../components/FitCallButtons';
import { SHOW_SAMPLE_PREVIEW } from '../config/features';
import { SamplePreview } from '../components/offer/SampleArtefacts';
import { fadeUp, heroIn } from '../lib/motion';

const About = () => {
    const { t } = useLanguage();

    const howRules = [1, 2, 3, 4, 5, 6].map((n) => t(`abHow${n}`));

    return (
        <div className="min-h-screen bg-stone-50 pt-20 text-slate-950 lg:pt-24">
            <Seo title={t('abMetaTitle')} description={t('abMetaDescription')} route={ROUTE_ABOUT} />

            <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...heroIn} className="mx-auto max-w-3xl">
                    <h1 className="text-[2rem] font-bold leading-[1.15] sm:text-5xl sm:leading-[1.1]">{t('abHeroHeadline')}</h1>
                    <div className="mt-6 space-y-3 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                        <p>{t('abHeroLead')}</p>
                        <p>{t('abHeroLead2')}</p>
                        <p className="font-semibold text-slate-950">{t('abHeroLead3')}</p>
                    </div>
                </motion.div>
            </section>


            <section className="bg-stone-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('abHowHeading')}</h2>
                    <ul className="mt-6 space-y-5">
                        {howRules.map((rule) => (
                            <li key={rule} className="border-l-2 border-indigo-600 pl-5 text-base leading-8 text-slate-600">
                                {rule}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </section>

            {/* 19 October 2026: a sample artefact in place of the "won't" lines. */}
            {SHOW_SAMPLE_PREVIEW && (
            <section id="sample" className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                        <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('abSampleHeading')}</h2>
                        <p className="mt-4 text-base leading-8 text-slate-600">{t('abSampleLead')}</p>
                    </motion.div>
                    <motion.div {...fadeUp} className="mt-8">
                        <SamplePreview />
                    </motion.div>
                </div>
            </section>
            )}


            {/* The company facts block, Ian's own three-line layout, gate 128, 18 September 2026.
                The company number is public record. No address, by his standing rule. */}
            <section className="bg-white px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <p className="text-sm leading-7 text-slate-500">
                        {t('abCompanyName')}
                        <br />
                        {t('abCompanyNameThai')}
                        <br />
                        {t('abCompanyRegistered')}
                    </p>
                </motion.div>
            </section>

            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('abClosingHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{t('abClosingBody')}</p>
                    <div className="mt-8 flex justify-center">
                        <FitCallButtons place="about-final" />
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default About;
