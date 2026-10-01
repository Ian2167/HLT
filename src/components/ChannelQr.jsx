// ChannelQr.jsx — the LINE and WhatsApp QR codes, side by side, for a screen a phone can be
// pointed at. Added 1 October 2026 on Ian's word: the raw LINE ID "looks particularly poor, can we
// not use the QR code for that and WhatsApp throughout?"
//
// HIDDEN ON A PHONE (below md): a code on the screen you are holding cannot be scanned, so the
// tap buttons beside this component do that job. From md up both show: tap if you are on a
// laptop with LINE or WhatsApp desktop, scan if your phone is in your hand.
//
// The two SVGs are written by scripts/make-qr.mjs from the same constants every button uses, and
// read back by a decoder before they are kept, so a scan and a tap land in the same place.
import { useLanguage } from '../context/LanguageContext';
import { LINE_GREEN, LineMark, WHATSAPP_GREEN, WhatsAppMark } from './ChannelIcons';

const TILE = 'flex flex-col items-center gap-2 rounded-2xl bg-white p-3 text-center shadow-sm';
const LABEL = 'flex items-center gap-1.5 text-xs font-bold leading-4 text-slate-900';

const ChannelQr = ({ className = '' }) => {
    const { t } = useLanguage();
    return (
        <ul className={`hidden grid-cols-2 gap-3 md:grid ${className}`}>
            <li className={TILE}>
                <img src="/brand/qr-line.svg" alt={t('qrLineAlt')} width="120" height="120" className="h-auto w-full max-w-[8rem]" loading="lazy" />
                <span className={LABEL}>
                    <span style={{ color: LINE_GREEN }}>
                        <LineMark size={16} />
                    </span>
                    {t('qrLineLabel')}
                </span>
            </li>
            <li className={TILE}>
                <img src="/brand/qr-whatsapp.svg" alt={t('qrWhatsAppAlt')} width="120" height="120" className="h-auto w-full max-w-[8rem]" loading="lazy" />
                <span className={LABEL}>
                    <span style={{ color: WHATSAPP_GREEN }}>
                        <WhatsAppMark size={16} />
                    </span>
                    {t('qrWhatsAppLabel')}
                </span>
            </li>
        </ul>
    );
};

export default ChannelQr;
