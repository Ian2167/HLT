import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
    LINE_FOOTER,
    CONTACT_EMAIL,
    CONTACT_PHONE_DISPLAY,
    CONTACT_PHONE_TEL,
    CONTACT_WHATSAPP_URL,
} from '../constants/contact';
// The header's own white lockup. Ian, 14 September 2026: the footer's name must match the
// header, and the name is three words, "High Level Thai". The old footer rendered "HighLevel"
// and "Thai" as two spans, which read closed up and did not match the mark above it. Using the
// header's own asset means the two can never drift apart again.
import hltLockupWhite from '../assets/brand/hlt-logo-v2/svg/hlt-lockup-white.svg';
import {
    ROUTE_HOME,
    ROUTE_BUSINESS_READ,
    ROUTE_BUSINESS_BLINDSPOTS,
    ROUTE_ABOUT,
    ROUTE_CONTACT,
    ROUTE_PDPA,
    ROUTE_COOKIES,
} from '../constants/routes';

// FOOTER, REBUILT 30 September 2026 (bridge row 4007, the visibility refresh). Five blocks, per
// the spec's footer_spec: brand/logo plus one-sentence proposition, Quick Links, Contact,
// Channels, Legal links and copyright. Structural principles only, borrowed from the reference
// screenshots the spec named (huahinworkspace.com); no artwork, colours, logos or component
// styling copied from them, per the spec's own design_reference line and Ian's "Retain HLT brand
// identity."
//
// QUICK LINKS. The spec's list is Home, The Business Read, Business Blindspots, Owner Dependency,
// Hua Hin, About, Contact. Owner Dependency and Hua Hin are NOT linked here: Owner Dependency has
// no page in this build (not in the visibility-refresh brief's DELIVERABLE list, so a link would
// 404), and Hua Hin is reachable from its own page's CTA chain but was held out of the footer's
// quick links to keep the list to pages this brief actually ships without inventing an order the
// spec did not give for a partial list. Flagged in the visibility-refresh report for Ian's
// ruling on whether to add Hua Hin once Owner Dependency exists or ship it now.
//
// CONTACT BLOCK. Email, phone/WhatsApp and the location line, all from
// src/constants/contact.js, added in this same commit: no number or address is invented here.
//
// TRUST BADGES. None added, per the spec's trust_badges_rule and the brief's constraint (g).
const Footer = () => {
    const { t } = useLanguage();

    const quickLinks = [
        { label: t('homeNavHome'), to: ROUTE_HOME },
        { label: t('brNavLink'), to: ROUTE_BUSINESS_READ },
        { label: t('blindNavLink'), to: ROUTE_BUSINESS_BLINDSPOTS },
        { label: t('aboutNavLink'), to: ROUTE_ABOUT },
        { label: t('contactNavLink'), to: ROUTE_CONTACT },
    ];

    const legalLinks = [
        { label: t('footerLegalTerms'), to: '/terms' },
        { label: t('footerLegalPrivacy'), to: '/privacy' },
        { label: t('footerLegalPdpa'), to: ROUTE_PDPA },
        { label: t('footerLegalCookies'), to: ROUTE_COOKIES },
    ];

    return (
        <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
            <div className="container mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {/* Block 1: brand/logo plus one-sentence proposition. */}
                <div>
                    <Link to={ROUTE_HOME} className="inline-flex" aria-label="High Level Thai">
                        <img src={hltLockupWhite} alt="High Level Thai" className="h-9 w-auto" />
                    </Link>
                    <p className="mt-4 text-sm leading-7 max-w-xs">{t('footerBrandLine')}</p>
                </div>

                {/* Block 2: Quick Links. */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                        {t('footerQuickLinksHeading')}
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm">
                        {quickLinks.map((link) => (
                            <li key={link.to}>
                                <Link to={link.to} className="hover:text-white transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Block 3: Contact. Tap-friendly on a phone: each row is a real tel:/mailto: link,
                    not text. */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                        {t('footerContactHeading')}
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm">
                        <li>
                            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 hover:text-white transition-colors">
                                <Mail size={16} aria-hidden="true" />
                                {CONTACT_EMAIL}
                            </a>
                        </li>
                        <li>
                            <a href={CONTACT_PHONE_TEL} className="flex items-center gap-2 hover:text-white transition-colors">
                                <Phone size={16} aria-hidden="true" />
                                {CONTACT_PHONE_DISPLAY}
                            </a>
                        </li>
                        <li className="text-xs leading-6 text-slate-500">{t('footerContactLocation')}</li>
                    </ul>
                </div>

                {/* Block 4: Channels. LINE stays prominent for Thai-language users; English pages
                    may prioritise WhatsApp/email above, with LINE also available here. */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                        {t('footerChannelsHeading')}
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm">
                        <li>
                            <a href={LINE_FOOTER} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                                <MessageCircle size={16} aria-hidden="true" />
                                {t('footerLineLabel')}
                            </a>
                        </li>
                        <li>
                            <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Phone size={16} aria-hidden="true" />
                                WhatsApp
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Block 5: legal links and copyright. */}
            <div className="border-t border-slate-800">
                <div className="container mx-auto px-6 py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
                        {legalLinks.map((link) => (
                            <li key={link.to}>
                                <Link to={link.to} className="hover:text-white transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <p className="text-xs text-slate-600">
                        &copy; {new Date().getFullYear()} {t('footerCopyright')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
