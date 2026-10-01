// FitCallButtons.jsx — the one primary action across the site, and its backups.
// Added 1 October 2026 on the repositioning brief (section 22) and Ian's ruling of the same day:
// "use Google Calendar and Google Meet with Line and WhatsApp backups".
//
// WHAT RENDERS. "Book a Fit Call" goes to the Google Calendar booking page when its link is in
// src/config/features.js; until then it goes to the Contact page, where the LINE and WhatsApp
// routes are, so the button never dead-ends. Beneath it, the 20-minute line. With `backups`, the
// LINE and WhatsApp buttons follow, which is how the Contact page and the final call use it.
// With `secondary`, the "See How the Business Read Works" link sits beside it (the hero).
//
// Every click is named for analytics (src/lib/analytics.js).
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FIT_CALL_BOOKING_URL } from '../config/features';
import { CONTACT_WHATSAPP_URL, LINE_OFFICIAL_ACCOUNT } from '../constants/contact';
import { ROUTE_BUSINESS_READ, ROUTE_CONTACT } from '../constants/routes';
import { EVENTS, logEvent } from '../lib/analytics';
import { LINE_GREEN, LineMark, WHATSAPP_GREEN, WhatsAppMark } from './ChannelIcons';

export const PRIMARY_CLASSES =
    'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-indigo-950/20 transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:w-auto';

// The secondary action on a dark ground (the hero and the navy bands) and on a light one.
export const SECONDARY_DARK_CLASSES =
    'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/50 px-7 py-4 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:w-auto';
export const SECONDARY_LIGHT_CLASSES =
    'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-indigo-600 px-7 py-4 text-base font-bold text-indigo-700 transition-colors hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:w-auto';

const BACKUP_CLASSES =
    'inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full px-5 text-base font-bold text-white shadow-lg transition-opacity hover:opacity-90 sm:w-auto sm:min-w-[14rem]';

export const FitCallButton = ({ place, className = PRIMARY_CLASSES, label }) => {
    const { t, lp } = useLanguage();
    const text = label || t('ctaFitCall');
    const onClick = () => logEvent(EVENTS.fitCallClick, { place, destination: FIT_CALL_BOOKING_URL ? 'booking' : 'contact' });
    if (FIT_CALL_BOOKING_URL) {
        return (
            <a href={FIT_CALL_BOOKING_URL} target="_blank" rel="noopener noreferrer" onClick={onClick} className={className}>
                {text}
                <ArrowRight size={18} aria-hidden="true" />
            </a>
        );
    }
    return (
        <Link to={lp(ROUTE_CONTACT)} onClick={onClick} className={className}>
            {text}
            <ArrowRight size={18} aria-hidden="true" />
        </Link>
    );
};

export const BusinessReadLink = ({ place, className = SECONDARY_DARK_CLASSES }) => {
    const { t, lp } = useLanguage();
    return (
        <Link to={lp(ROUTE_BUSINESS_READ)} onClick={() => logEvent(EVENTS.businessReadCtaClick, { place })} className={className}>
            {t('ctaSeeBusinessRead')}
        </Link>
    );
};

export const MessageBackups = ({ place, lead = true, dark = false }) => {
    const { t } = useLanguage();
    return (
        <div>
            {lead ? <p className={`text-sm leading-6 ${dark ? 'text-slate-200' : 'text-slate-500'}`}>{t('fitCallBackupLead')}</p> : null}
            <div className={`${lead ? 'mt-3' : ''} flex flex-col gap-3 sm:flex-row sm:justify-center`}>
                <a
                    href={LINE_OFFICIAL_ACCOUNT}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => logEvent(EVENTS.lineClick, { place })}
                    className={BACKUP_CLASSES}
                    style={{ backgroundColor: LINE_GREEN }}
                >
                    <LineMark size={22} />
                    {t('ctaLine')}
                </a>
                <a
                    href={CONTACT_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => logEvent(EVENTS.whatsAppClick, { place })}
                    className={BACKUP_CLASSES}
                    style={{ backgroundColor: WHATSAPP_GREEN }}
                >
                    <WhatsAppMark size={22} />
                    {t('ctaWhatsApp')}
                </a>
            </div>
        </div>
    );
};

// The final band's set: the Fit Call, the Business Read link beside it, the 20-minute line
// beneath, then LINE and WhatsApp as the backups (Ian, 1 October 2026).
const FitCallButtons = ({ place, dark = true, note = true, secondary = true, backups = true }) => {
    const { t } = useLanguage();
    return (
        <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
                <FitCallButton place={place} />
                {secondary ? <BusinessReadLink place={place} className={dark ? SECONDARY_DARK_CLASSES : SECONDARY_LIGHT_CLASSES} /> : null}
            </div>
            {note ? <p className={`mt-4 text-sm leading-6 ${dark ? 'text-slate-200' : 'text-slate-500'} sm:text-base`}>{t('ctaFitCallNote')}</p> : null}
            {backups ? (
                <div className="mt-6">
                    <MessageBackups place={place} dark={dark} />
                </div>
            ) : null}
        </div>
    );
};

export default FitCallButtons;
