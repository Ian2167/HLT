// Footer.jsx — the site's five-block footer.
// REBUILT 30 September 2026, the visibility refresh (bridge row 4007 and Ian's fuller spec of the
// same day, sections 27 and 28). It replaces the one-row footer of 18 September and the first
// five-block draft of the 12:42 build session on the same day, keeping that session's contact
// constants and its no-badges rule.
//
// THE STRUCTURE IS THE SPEC'S, AND THE REFERENCE IS STRUCTURAL ONLY. Ian's guidance screenshots of
// huahinworkspace.com show, top to bottom on a phone: the brand block and a one-line description,
// a stacked quick-links list, a contact block with icons and tappable rows, the messaging channels
// as full-width buttons, then the legal line. That order is used here. Nothing of theirs is copied:
// not the green, the type, the buttons, the icon artwork, the logo treatment or the wording. The
// ground is the card navy (#0A1F44, Ian's 14 September standard), the type is the site's own.
//
// QUICK LINKS are the spec's seven, in the spec's order, plus Examples, because the Examples page is
// one of Ian's six locked public pages (17 September) and the spec's list would otherwise leave it
// reachable from nowhere on a desktop. Listed in the report as the one addition.
//
// CONTACT is the ruled block and nothing else: ian@highlevelthai.com, +66 96 839 8305 as a phone
// and as WhatsApp, LINE @535zlmbx through the one add-friend link. No street address anywhere: the
// registered office is open on the record (Ian, 14 September 2026), so the location line is the
// spec's own "Working with businesses in Hua Hin and across Thailand".
//
// NO TRUST BADGES. Spec: "Do not add Trustpilot, card/payment or association logos unless HLT
// genuinely uses them and has the right to display them." It does not, so there are none.
//
// EVERY INTERNAL LINK GOES THROUGH lp(), so an English reader stays in English.
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
    CONTACT_EMAIL,
    CONTACT_PHONE_DISPLAY,
    CONTACT_PHONE_TEL,
    CONTACT_WHATSAPP_URL,
    LINE_FOOTER,
} from '../constants/contact';
import hltLockupWhite from '../assets/brand/hlt-logo-v2/svg/hlt-lockup-white.svg';
import { FOOTER_QUICK_LINKS, LEGAL_LINKS, ROUTE_HOME } from '../constants/routes';

const HEADING_CLASSES = 'text-xs font-bold uppercase tracking-[0.18em] text-slate-300';
const ROW_CLASSES = 'flex min-h-11 items-center gap-3 text-base text-slate-200 transition-colors hover:text-white';
const BUTTON_CLASSES =
    'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 text-base font-semibold text-white transition-colors hover:bg-white/20 sm:w-auto sm:min-w-[14rem]';

const Footer = () => {
    const { t, lp } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-hltNavy text-slate-300">
            <div className="container mx-auto px-5 py-14 sm:px-6 lg:py-16">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
                    {/* Block 1: brand and the one-sentence proposition. */}
                    <div className="lg:col-span-4">
                        <Link to={lp(ROUTE_HOME)} className="inline-flex" aria-label="High Level Thai">
                            <img src={hltLockupWhite} alt="High Level Thai" className="h-9 w-auto" />
                        </Link>
                        <p className="mt-5 max-w-sm text-base leading-7 text-slate-300">{t('footerBrandLine')}</p>
                    </div>

                    {/* Block 2: quick links, one per line, big enough to tap. */}
                    <div className="lg:col-span-2">
                        <h2 className={HEADING_CLASSES}>{t('footerQuickLinksHeading')}</h2>
                        <ul className="mt-5 space-y-1">
                            {FOOTER_QUICK_LINKS.map((item) => (
                                <li key={item.to}>
                                    <Link to={lp(item.to)} className="inline-flex min-h-10 items-center text-base text-slate-200 transition-colors hover:text-white">
                                        {t(item.labelKey)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Block 3: contact. Every row is a real link a thumb can hit. */}
                    <div className="lg:col-span-3">
                        <h2 className={HEADING_CLASSES}>{t('footerContactHeading')}</h2>
                        <ul className="mt-5 space-y-1">
                            <li>
                                <a href={`mailto:${CONTACT_EMAIL}`} className={ROW_CLASSES}>
                                    <Mail size={18} aria-hidden="true" className="shrink-0 text-indigo-200" />
                                    <span className="break-all">{CONTACT_EMAIL}</span>
                                </a>
                            </li>
                            <li>
                                <a href={CONTACT_PHONE_TEL} className={ROW_CLASSES}>
                                    <Phone size={18} aria-hidden="true" className="shrink-0 text-indigo-200" />
                                    <span>{CONTACT_PHONE_DISPLAY}</span>
                                </a>
                            </li>
                            <li>
                                <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={ROW_CLASSES}>
                                    <MessageCircle size={18} aria-hidden="true" className="shrink-0 text-indigo-200" />
                                    <span>
                                        {t('footerContactWhatsAppLabel')} {CONTACT_PHONE_DISPLAY}
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href={LINE_FOOTER} target="_blank" rel="noopener noreferrer" className={ROW_CLASSES}>
                                    <span aria-hidden="true" className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[4px] bg-indigo-200 text-[9px] font-black leading-none text-hltNavy">
                                        L
                                    </span>
                                    <span>{t('footerContactLineLabel')} @535zlmbx</span>
                                </a>
                            </li>
                        </ul>
                        <p className="mt-4 text-sm leading-6 text-slate-400">{t('footerContactLocation')}</p>
                    </div>

                    {/* Block 4: the messaging channels, as buttons. Two, because two are real. */}
                    <div className="lg:col-span-3">
                        <h2 className={HEADING_CLASSES}>{t('footerChannelsHeading')}</h2>
                        <div className="mt-5 flex flex-col gap-3">
                            <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={BUTTON_CLASSES}>
                                <MessageCircle size={18} aria-hidden="true" />
                                {t('footerWhatsAppButton')}
                            </a>
                            <a href={LINE_FOOTER} target="_blank" rel="noopener noreferrer" className={BUTTON_CLASSES}>
                                {t('footerLineButton')}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Block 5: legal links and the copyright line. */}
                <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <ul className="flex flex-wrap gap-x-6 gap-y-2">
                        {LEGAL_LINKS.map((item) => (
                            <li key={item.to}>
                                <Link to={lp(item.to)} className="inline-flex min-h-8 items-center transition-colors hover:text-white">
                                    {t(item.labelKey)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <p>
                        &copy; {year} {t('footerCompanyName')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
