// ChatLauncher.jsx — the floating "Chat with us" button, bottom right on every page, EN and TH.
// Added 21 October 2026 (bridge row 4948, brief hlt-site-polish-chat-1021): a visitor can start a
// conversation in one tap.
//
// WHAT IT IS AND ISN'T. Two plain links in a small sheet: LINE and WhatsApp, the same two
// destinations every other message button on the site uses (src/constants/contact.js). No AI, no
// third-party widget, no script, no cookie, and nothing is sent until the visitor sends it in their
// own app. The brief named the LINE Official Account link; the owner's newer ruling of 20 October
// ("As attached QR") made LINE_DESTINATION the site's one LINE target, so this follows that constant.
//
// ACCESSIBILITY. The button is a real <button> with aria-expanded and aria-controls. Opening moves
// focus to the first option; Escape or the close button shuts it and returns focus to the button;
// a click outside shuts it. The sheet is a labelled, non-modal dialog, so the page stays usable.
//
// COLOURS. Indigo for the button, as for every button on the site (tailwind.config.js: "indigo
// stays for buttons only"); a white ring so it reads on the navy bands; the channel greens on the
// two options, as in MessageBackups.
import { useEffect, useId, useRef, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_WHATSAPP_URL, LINE_OFFICIAL_ACCOUNT } from '../constants/contact';
import { EVENTS, logEvent } from '../lib/analytics';
import { LINE_GREEN, LineMark, WHATSAPP_GREEN, WhatsAppMark } from './ChannelIcons';

// The two new strings per language. The option labels reuse ctaLine and ctaWhatsApp, so the only
// new Thai is the button's name and "close" (listed in the report for Ann's read).
const COPY = {
    en: { open: 'Chat with us', close: 'Close' },
    th: { open: 'แชทกับเรา', close: 'ปิด' },
};

const OPTION_CLASSES =
    'flex min-h-12 w-full items-center gap-3 rounded-xl px-4 text-base font-bold text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2';

// NEVER OVER A CALL TO ACTION. The first browser pass (21 Oct) found it covering the phone's "Ask
// for a Fit Call" button on Hua Hin. So while the closed button's box meets any call to action (a
// [data-cta] element, or any indigo-filled link, which is how PRIMARY_CLASSES draws one), it steps
// out of the way, hidden from sight, tab order and screen readers alike; it comes back as soon as
// the page scrolls clear. It never hides while its sheet is open.
const CTA_SELECTOR = '[data-cta], a[class*="bg-indigo-600"]';
const meets = (a, b) => a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;

const ChatLauncher = () => {
    const { t, contentLang, route } = useLanguage();
    const copy = COPY[contentLang] || COPY.en;
    const [open, setOpen] = useState(false);
    const [tucked, setTucked] = useState(false);
    const wrapRef = useRef(null);
    const buttonRef = useRef(null);
    const firstRef = useRef(null);
    const sheetId = useId();
    const titleId = useId();

    const close = (returnFocus = true) => {
        setOpen(false);
        if (returnFocus) buttonRef.current?.focus();
    };

    useEffect(() => {
        let frame = 0;
        const measure = () => {
            frame = 0;
            const own = buttonRef.current?.getBoundingClientRect();
            if (!own) return;
            const hit = [...document.querySelectorAll(CTA_SELECTOR)].some((el) => {
                if (wrapRef.current?.contains(el)) return false;
                const box = el.getBoundingClientRect();
                return box.width > 0 && box.height > 0 && meets(own, box);
            });
            setTucked(hit);
        };
        const schedule = () => { if (!frame) frame = requestAnimationFrame(measure); };
        measure();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);
        // A page's own content can still be settling (fonts, animations) just after it opens.
        const late = setTimeout(measure, 600);
        return () => {
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
            clearTimeout(late);
            if (frame) cancelAnimationFrame(frame);
        };
    }, [route, contentLang]);

    useEffect(() => {
        if (!open) return undefined;
        firstRef.current?.focus();
        const onKey = (event) => {
            if (event.key === 'Escape') close();
        };
        const onPointer = (event) => {
            if (wrapRef.current && !wrapRef.current.contains(event.target)) close(false);
        };
        document.addEventListener('keydown', onKey);
        document.addEventListener('pointerdown', onPointer);
        return () => {
            document.removeEventListener('keydown', onKey);
            document.removeEventListener('pointerdown', onPointer);
        };
    }, [open]);

    return (
        <div
            ref={wrapRef}
            data-chat-launcher
            data-tucked={tucked && !open ? 'true' : 'false'}
            className={`fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 transition-opacity duration-200 motion-reduce:transition-none sm:bottom-6 sm:right-6 ${tucked && !open ? 'invisible opacity-0' : 'opacity-100'}`}
        >
            {open ? (
                <div
                    id={sheetId}
                    role="dialog"
                    aria-labelledby={titleId}
                    data-chat-sheet
                    className="w-64 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl"
                >
                    <div className="flex items-center justify-between gap-3">
                        <p id={titleId} className="text-base font-bold text-slate-950">{copy.open}</p>
                        <button
                            type="button"
                            onClick={() => close()}
                            aria-label={copy.close}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                        >
                            <X size={18} aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-3 flex flex-col gap-2">
                        <a
                            ref={firstRef}
                            href={LINE_OFFICIAL_ACCOUNT}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => logEvent(EVENTS.lineClick, { place: 'chat-launcher' })}
                            className={OPTION_CLASSES}
                            style={{ backgroundColor: LINE_GREEN }}
                        >
                            <LineMark size={22} />
                            {t('ctaLine')}
                        </a>
                        <a
                            href={CONTACT_WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => logEvent(EVENTS.whatsAppClick, { place: 'chat-launcher' })}
                            className={OPTION_CLASSES}
                            style={{ backgroundColor: WHATSAPP_GREEN }}
                        >
                            <WhatsAppMark size={22} />
                            {t('ctaWhatsApp')}
                        </a>
                    </div>
                </div>
            ) : null}
            <button
                ref={buttonRef}
                type="button"
                data-chat-button
                aria-expanded={open}
                aria-controls={open ? sheetId : undefined}
                onClick={() => (open ? close() : setOpen(true))}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-indigo-600 px-5 text-base font-bold text-white shadow-lg shadow-indigo-950/30 ring-2 ring-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
                <MessageCircle size={20} aria-hidden="true" />
                {copy.open}
            </button>
        </div>
    );
};

export default ChatLauncher;
