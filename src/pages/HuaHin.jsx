// HuaHin.jsx — /hua-hin. Built 30 September 2026 (bridge row 4007, the visibility refresh brief).
//
// WHAT THIS PAGE IS. Bridge row 4007's hua_hin_page_en, verbatim, via src/copy/visibilityRefresh.js.
// It is a NEW public page, which is a conflict with the 18 September "no eighth page" ruling in
// src/constants/routes.js; that conflict is named there and in the visibility-refresh report, not
// resolved here.
//
// THAI. The `th` strings this page reads are an UNREVIEWED MACHINE DRAFT (see
// src/copy/visibilityRefresh.js). Do not treat the Thai render as final copy.
//
// META. Same pattern as Home.jsx and About.jsx: a rendered <title> and a useEffect swap of the
// document's meta description tag, restored on unmount.
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LINE_OFFICIAL_ACCOUNT } from '../constants/contact';
import { ROUTE_BUSINESS_READ } from '../constants/routes';

const CTA_CLASSES =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-950/20 transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:text-base';

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.5 },
};

const HuaHin = () => {
    const { t } = useLanguage();

    const metaDescription = t('huahinMetaDescription');
    useEffect(() => {
        const tag = document.querySelector('meta[name="description"]');
        if (!tag) return undefined;
        const previous = tag.getAttribute('content');
        tag.setAttribute('content', metaDescription);
        return () => tag.setAttribute('content', previous);
    }, [metaDescription]);

    const who = [
        t('huahinWho1'),
        t('huahinWho2'),
        t('huahinWho3'),
        t('huahinWho4'),
        t('huahinWho5'),
        t('huahinWho6'),
    ];

    return (
        <div className="min-h-screen bg-stone-50 pt-24 text-slate-950 dark:bg-hltNavy dark:text-white">
            <title>{t('huahinSeoTitle')}</title>

            <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl"
                >
                    <h1 className="text-3xl font-bold leading-tight sm:text-5xl sm:leading-[1.1]">
                        {t('huahinH1')}
                    </h1>
                    <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-9">
                        {t('huahinIntro')}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                        {t('huahinLocationLine')}
                    </p>
                    <div className="mt-8">
                        <Link to={ROUTE_BUSINESS_READ} className={CTA_CLASSES}>
                            {t('huahinCta')}
                            <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            <section className="bg-white px-5 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('huahinWhoHeading')}</h2>
                    <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                        {who.map((item) => (
                            <li
                                key={item}
                                className="rounded-xl border border-slate-200 bg-stone-50 p-5 text-base leading-8 text-slate-600 card-glass dark:text-slate-300"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </section>

            <section className="bg-stone-100 px-5 py-16 dark:bg-white/[0.04] sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('huahinLocalHeading')}</h2>
                    <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
                        {t('huahinLocalBody')}
                    </p>
                </motion.div>
            </section>

            <section className="bg-hltNavy px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('huahinH1')}</h2>
                    <div className="mt-8">
                        <Link to={ROUTE_BUSINESS_READ} className={CTA_CLASSES}>
                            {t('huahinCta')}
                            <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                    </div>
                    <p className="mt-4 text-sm text-slate-400">
                        <a
                            href={LINE_OFFICIAL_ACCOUNT}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-4 transition-colors hover:text-white"
                        >
                            {t('footerLineLabel')}
                        </a>
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default HuaHin;
