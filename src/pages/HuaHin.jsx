// HuaHin.jsx — /hua-hin and /en/hua-hin. Built 30 September 2026, the visibility refresh (bridge
// row 4007 and Ian's fuller spec of the same day, sections 18 to 20). First drafted by the 12:42
// build session; rebuilt here on the URL-language routing with the spec's fuller copy.
//
// WHAT THIS PAGE IS. The local page the spec calls "important for local discoverability": the H1
// and three-line intro, who it is for, the common condition that matters more than the industry,
// and the local-systems message ("local problems aren't always software problems"). No address:
// the location line is the spec's own, and the registered office is open on the record.
//
// 1 OCTOBER 2026, the repositioning: the page's action is the Fit Call (Ian's brief, section 22).
// Nothing else on the page moved.
//
// COPY: src/copy/visibilityRefresh.js. Thai is a machine draft under review.
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_HUA_HIN, ROUTE_OWNER_DEPENDENCY } from '../constants/routes';
import Seo from '../components/Seo';
import FitCallButtons, { FitCallButton } from '../components/FitCallButtons';
import { fadeUp, fadeUpDelayed, heroIn } from '../lib/motion';

const HuaHin = () => {
    const { t, lp } = useLanguage();
    const who = [1, 2, 3, 4, 5, 6].map((n) => t(`huahinWho${n}`));

    return (
        <div className="min-h-screen bg-stone-50 pt-20 text-slate-950 lg:pt-24">
            <Seo title={t('huahinSeoTitle')} description={t('huahinMetaDescription')} route={ROUTE_HUA_HIN} />

            <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...heroIn} className="mx-auto max-w-3xl">
                    <h1 className="text-[2rem] font-bold leading-[1.15] sm:text-5xl sm:leading-[1.1]">{t('huahinH1')}</h1>
                    <div className="mt-6 space-y-3 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                        <p>{t('huahinIntro1')}</p>
                        <p>{t('huahinIntro2')}</p>
                        <p className="font-semibold text-slate-950">{t('huahinIntro3')}</p>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-500">{t('huahinLocationLine')}</p>
                    <div className="mt-8">
                        <FitCallButton place="huahin-hero" label={t('huahinCta')} />
                    </div>
                </motion.div>
            </section>

            {/* Who it is for: six cards, and the line that matters more than any of them. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <motion.h2 {...fadeUp} className="text-2xl font-bold leading-tight sm:text-3xl">
                        {t('huahinWhoHeading')}
                    </motion.h2>
                    <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                        {who.map((item, index) => (
                            <motion.li
                                key={item}
                                {...fadeUpDelayed(index)}
                                className="rounded-xl border border-slate-200 bg-stone-50 p-5 text-base leading-7 text-slate-700 card-glass card-static"
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                    <motion.p {...fadeUp} className="mt-8 text-lg font-semibold leading-8 text-slate-950">
                        {t('huahinCommonLine')}
                    </motion.p>
                </div>
            </section>

            <section className="bg-stone-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('huahinLocalHeading')}</h2>
                    <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{t('huahinLocalBody')}</p>
                </motion.div>
            </section>

            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('finalHeading')}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{t('finalBody')}</p>
                    <div className="mt-8 flex justify-center">
                        <FitCallButtons place="huahin-final" />
                    </div>
                    <p className="mt-6 text-sm text-slate-300">
                        <Link to={lp(ROUTE_OWNER_DEPENDENCY)} className="underline underline-offset-4 transition-colors hover:text-white">
                            {t('huahinOdLink')}
                        </Link>
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default HuaHin;
