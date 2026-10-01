// Contact.jsx — /contact and /en/contact. Built 18 September 2026; the other rails ADDED
// 30 September; REBUILT 1 October 2026, the repositioning (Ian's brief of that morning, section 22,
// and his ruling: "use Google Calendar and Google Meet with Line and WhatsApp backups").
//
// WHAT THIS PAGE IS NOW. The Fit Call page. With the Google Calendar booking link in
// src/config/features.js the button opens it; until the link is there, the page says to pick a time
// by message and offers LINE and WhatsApp as the way to do it, so the one action never dead-ends.
// Beneath, the email and phone rails and the location line. Then what happens next, as before.
//
// THERE IS NO FORM ON THIS PAGE, AND IT IS NOT AN OVERSIGHT
// Ian's GO of 18 September 2026, verbatim: "Do not activate the Contact form without a working
// destination." This site has no backend, so there is NO <form>, NO input, NO submit button and
// NO handler in this file. The form's every string is held in `contactFormCopyHeld` in
// src/copy/contact.js, which is NOT spread into src/translations.js.
//
// Every value is the ruled contact block in src/constants/contact.js. No address.
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FIT_CALL_BOOKING_URL } from '../config/features';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from '../constants/contact';
import { ROUTE_CONTACT } from '../constants/routes';
import Seo from '../components/Seo';
import { FitCallButton, MessageBackups } from '../components/FitCallButtons';
import { EVENTS, logEvent } from '../lib/analytics';
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

            {/* The booking, then the backups, then the other rails. */}
            <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div {...fadeUp} className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-stone-50 p-7 card-glass card-static sm:p-9">
                    {FIT_CALL_BOOKING_URL ? (
                        <>
                            <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('ctBookHeading')}</h2>
                            <div className="mt-6">
                                <FitCallButton place="contact" />
                            </div>
                            <p className="mt-4 text-sm leading-6 text-slate-500">{t('ctaFitCallNote')}</p>
                            <h3 className="mt-10 text-lg font-bold text-slate-950">{t('ctBackupHeading')}</h3>
                            <p className="mt-2 text-base leading-7 text-slate-600">{t('ctBackupLead')}</p>
                            <div className="mt-4">
                                <MessageBackups place="contact" lead={false} />
                            </div>
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{t('ctBookHeading')}</h2>
                            <p className="mt-4 text-base leading-7 text-slate-600">{t('ctBookByMessage')}</p>
                            <div className="mt-6">
                                <MessageBackups place="contact" lead={false} />
                            </div>
                            <p className="mt-4 text-sm leading-6 text-slate-500">{t('ctaFitCallNote')}</p>
                        </>
                    )}

                    <h3 className="mt-10 text-lg font-bold text-slate-950">{t('ctOtherHeading')}</h3>
                    <ul className="mt-4 grid gap-3">
                        <li>
                            <a href={`mailto:${CONTACT_EMAIL}`} onClick={() => logEvent(EVENTS.emailClick, { place: 'contact' })} className={RAIL_CLASSES}>
                                <Mail size={18} aria-hidden="true" className="shrink-0 text-indigo-600" />
                                <span className="font-semibold">{t('ctEmailLabel')}</span>
                                <span className="break-all text-slate-600">{CONTACT_EMAIL}</span>
                            </a>
                        </li>
                        <li>
                            <a href={CONTACT_PHONE_TEL} onClick={() => logEvent(EVENTS.phoneClick, { place: 'contact' })} className={RAIL_CLASSES}>
                                <Phone size={18} aria-hidden="true" className="shrink-0 text-indigo-600" />
                                <span className="font-semibold">{t('ctPhoneLabel')}</span>
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
