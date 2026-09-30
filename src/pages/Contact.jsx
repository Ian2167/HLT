// Contact.jsx — /contact and /en/contact. Built 18 September 2026; the other rails ADDED
// 30 September 2026 on the visibility refresh.
//
// WHAT THIS PAGE IS, IN IAN'S WORDS
// Its one job, from his locked page-hierarchy table of 17 September 2026: "LINE and simple
// enquiry."
//
// THERE IS NO FORM ON THIS PAGE, AND IT IS NOT AN OVERSIGHT
// Ian's GO of 18 September 2026, verbatim: "Do not activate the Contact form without a working
// destination." This site has no backend, so there is NO <form>, NO input, NO submit button and
// NO handler in this file. The form's every string is held in `contactFormCopyHeld` in
// src/copy/contact.js, which is NOT spread into src/translations.js.
//
// WHAT THE 30 SEPTEMBER REFRESH ADDED. The rails the spec's contact rules name for English readers
// beside LINE: the email address, the phone number and WhatsApp, from src/constants/contact.js.
// Nothing is invented: every value there is the ruled contact block. No address.
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
    CONTACT_EMAIL,
    CONTACT_PHONE_DISPLAY,
    CONTACT_PHONE_TEL,
    CONTACT_WHATSAPP_URL,
    LINE_OFFICIAL_ACCOUNT,
} from '../constants/contact';
import { ROUTE_CONTACT } from '../constants/routes';
import Seo from '../components/Seo';
import { CTA_CLASSES } from './Home';
import { fadeUp, heroIn } from '../lib/motion';

const RAIL_CLASSES =
    'flex min-h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 transition-colors hover:border-indigo-500 hover:text-indigo-600';

const Contact = () => {
    const { t } = useLanguage();
    const next = [t('ctNext1'), t('ctNext2'), t('ctNext3')];

    return (
        <div className="min-h-screen bg-stone-50 pt-20 text-slate-950 lg:pt-24">
            <Seo title={t('ctMetaTitle')} description={t('ctMetaDescription')} route={ROUTE_CONTACT} />

            <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...heroIn} className="mx-auto max-w-3xl">
                    <h1 className="text-[2rem] font-bold leading-[1.15] sm:text-5xl sm:leading-[1.1]">{t('ctHeroHeadline')}</h1>
                    <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">{t('ctHeroLead')}</p>
                </motion.div>
            </section>

            {/* The LINE rail, first, as Ian ruled. Then the other three, each a real link. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-stone-50 p-7 card-glass card-static sm:p-9">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('ctLineHeading')}</h2>
                    <p className="mt-5 text-base leading-8 text-slate-600">{t('ctLineBody')}</p>
                    <div className="mt-8">
                        <a href={LINE_OFFICIAL_ACCOUNT} target="_blank" rel="noopener noreferrer" className={CTA_CLASSES}>
                            {t('ctLineLabel')}
                            <ArrowRight size={18} aria-hidden="true" />
                        </a>
                    </div>

                    <h3 className="mt-10 text-lg font-bold text-slate-950">{t('ctRailsHeading')}</h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-1">
                        <li>
                            <a href={`mailto:${CONTACT_EMAIL}`} className={RAIL_CLASSES}>
                                <Mail size={18} aria-hidden="true" className="shrink-0 text-indigo-600" />
                                <span className="font-semibold">{t('ctEmailLabel')}</span>
                                <span className="break-all text-slate-600">{CONTACT_EMAIL}</span>
                            </a>
                        </li>
                        <li>
                            <a href={CONTACT_PHONE_TEL} className={RAIL_CLASSES}>
                                <Phone size={18} aria-hidden="true" className="shrink-0 text-indigo-600" />
                                <span className="font-semibold">{t('ctPhoneLabel')}</span>
                                <span className="text-slate-600">{CONTACT_PHONE_DISPLAY}</span>
                            </a>
                        </li>
                        <li>
                            <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={RAIL_CLASSES}>
                                <MessageCircle size={18} aria-hidden="true" className="shrink-0 text-indigo-600" />
                                <span className="font-semibold">{t('ctWhatsAppLabel')}</span>
                                <span className="text-slate-600">{CONTACT_PHONE_DISPLAY}</span>
                            </a>
                        </li>
                    </ul>
                    <p className="mt-5 text-sm leading-6 text-slate-500">{t('footerContactLocation')}</p>
                </motion.div>
            </section>

            {/* What happens next. */}
            <section className="bg-stone-100 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('ctNextHeading')}</h2>
                    <ul className="mt-6 space-y-5">
                        {next.map((line) => (
                            <li key={line} className="border-l-2 border-indigo-600 pl-5 text-base leading-8 text-slate-600">
                                {line}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-8 text-base leading-8 text-slate-950">{t('ctClosingLine')}</p>
                </motion.div>
            </section>
        </div>
    );
};

export default Contact;
