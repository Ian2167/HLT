// Contact.jsx — /contact. Built 18 September 2026.
//
// WHAT THIS PAGE IS, IN IAN'S WORDS
// Its one job, from his locked page-hierarchy table of 17 September 2026: "LINE and simple
// enquiry."
//
// ------------------------------------------------------------------------------------------
// THERE IS NO FORM ON THIS PAGE, AND IT IS NOT AN OVERSIGHT
// ------------------------------------------------------------------------------------------
// Ian's GO of 18 September 2026, verbatim: "Do not activate the Contact form without a working
// destination." This site is a Vite and React single-page app with no backend, so a form here
// would have nowhere to send. There is therefore NO <form>, NO input, NO submit button and NO
// handler in this file, which is a stronger guarantee than an inert form: there is nothing here
// to accidentally wire up.
//
// The form's every string is written and gated, and it is held in `contactFormCopyHeld` in
// src/copy/contact.js, which is NOT spread into src/translations.js. A string outside the
// translation table cannot be rendered by t() anywhere on the site.
//
// THREE SLOTS ARE EMPTY AND NOTHING WAS INVENTED FOR THEM. No email address: none is recorded on
// any file the copy pack's author read, and the pack calls this "the rail a cautious buyer uses
// when he doesn't want to add a company on LINE". No telephone number, and no address. Each is
// Ian's to rule.
//
// WHY THIS FILE HOLDS NO COPY OF ITS OWN
// Every visible string comes from src/copy/contact.js, lifted verbatim from the gated pack at
//   C:\Projects\hlt-estate\02-builds\hlt-site-kit\copy\2026-09-18-contact.md
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LINE_OFFICIAL_ACCOUNT } from '../constants/contact';

const CTA_CLASSES =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-950/20 transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:text-base';

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.5 },
};

const Contact = () => {
    const { t } = useLanguage();

    const metaDescription = t('ctMetaDescription');
    useEffect(() => {
        const tag = document.querySelector('meta[name="description"]');
        if (!tag) return undefined;
        const previous = tag.getAttribute('content');
        tag.setAttribute('content', metaDescription);
        return () => tag.setAttribute('content', previous);
    }, [metaDescription]);

    const next = [t('ctNext1'), t('ctNext2'), t('ctNext3')];

    return (
        <div className="min-h-screen bg-stone-50 pt-24 text-slate-950 dark:bg-hltNavy dark:text-white">
            <title>{t('ctMetaTitle')}</title>

            <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl"
                >
                    <h1 className="text-3xl font-bold leading-tight sm:text-5xl sm:leading-[1.1]">
                        {t('ctHeroHeadline')}
                    </h1>
                    <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-9">
                        {t('ctHeroLead')}
                    </p>
                </motion.div>
            </section>

            {/* The LINE rail, and on this page it is the whole of the ask. */}
            <section className="bg-white px-5 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8">
                <motion.div
                    {...fadeUp}
                    className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-stone-50 p-7 card-glass sm:p-9"
                >
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('ctLineHeading')}</h2>
                    <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">{t('ctLineBody')}</p>
                    <div className="mt-8">
                        <a href={LINE_OFFICIAL_ACCOUNT} target="_blank" rel="noopener noreferrer" className={CTA_CLASSES}>
                            {t('ctLineLabel')}
                            <ArrowRight size={18} aria-hidden="true" />
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* What happens next. The part most contact pages leave out, and the part that makes
                a reader willing to start the conversation at all. */}
            <section className="bg-stone-100 px-5 py-16 dark:bg-white/[0.04] sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('ctNextHeading')}</h2>
                    <ul className="mt-6 space-y-5">
                        {next.map((line) => (
                            <li
                                key={line}
                                className="border-l-2 border-indigo-600 pl-5 text-base leading-8 text-slate-600 dark:border-indigo-400 dark:text-slate-300"
                            >
                                {line}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-8 text-base leading-8 text-slate-950 dark:text-white">{t('ctClosingLine')}</p>
                </motion.div>
            </section>
        </div>
    );
};

export default Contact;
