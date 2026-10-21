// ChatLauncher.jsx — the floating "Chat with us" button, bottom right on every page, EN and TH.
// Added 21 October 2026 (bridge row 4948, brief hlt-site-polish-chat-1021): a visitor can start a
// conversation in one tap.
//
// WHAT IT IS AND ISN'T. A small sheet with two parts.
//   1. GUIDED HELP (owner's word, 21 Oct: "I decided to add as Guided for now"; brief
//      hlt-preview-check-1019, reply to bridge row 4975). Eight set questions, each with a set answer
//      taken only from the knowledge file the EA Desk read off the live site (src/copy/
//      guidedHelp1021.js says which lines). Labelled "Guided help", with no "AI" and no persona name.
//      Nothing typed, nothing stored, nothing sent anywhere, and no answer says anything is booked.
//   2. LINE and WhatsApp, always the last two things in the sheet, under every answer as well as the
//      list: the same two destinations every other message button on the site uses
//      (src/constants/contact.js). The brief of 21 Oct morning named the LINE Official Account link;
//      the owner's newer ruling of 20 October ("As attached QR") made LINE_DESTINATION the one target.
// No AI, no third-party widget, no script, no cookie.
//
// ACCESSIBILITY. The button is a real <button> with aria-expanded and aria-controls. Opening moves
// focus to the first question; choosing one moves focus to its answer, which sits in a polite live
// region; Tab reaches "Back", which returns focus to the question chosen. Escape or the close button
// shuts the sheet and returns focus to the button; a click outside shuts it. The sheet is a labelled,
// non-modal dialog, so the page stays usable. It scrolls inside itself on a short phone screen.
//
// COLOURS. Indigo for the button, as for every button on the site (tailwind.config.js: "indigo
// stays for buttons only"); a white ring so it reads on the navy bands; the channel greens on the
// two message options, as in MessageBackups.
import { useEffect, useId, useRef, useState } from 'react';
import { ArrowLeft, MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_WHATSAPP_URL, LINE_OFFICIAL_ACCOUNT } from '../constants/contact';
import { EVENTS, logEvent } from '../lib/analytics';
import { LINE_GREEN, LineMark, WHATSAPP_GREEN, WhatsAppMark } from './ChannelIcons';
import { GUIDED_HELP } from '../copy/guidedHelp1021';

// The button's name and "close" per language; the guided help's words are in guidedHelp1021.js; the
// message options reuse ctaLine and ctaWhatsApp. New Thai is listed in the report for Ann's read.
const COPY = {
    en: { open: 'Chat with us', close: 'Close' },
    th: { open: 'แชทกับเรา', close: 'ปิด' },
};

const OPTION_CLASSES =
    'flex min-h-12 w-full items-center gap-3 rounded-xl px-4 text-base font-bold text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2';
const QUESTION_CLASSES =
    'flex min-h-11 w-full items-center rounded-xl border border-slate-200 bg-stone-50 px-3 py-2 text-left text-sm font-semibold leading-5 text-slate-900 transition-colors hover:border-indigo-300 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-300';

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
    const [answer, setAnswer] = useState(0); // 0 = the question list, n = question n's answer
    const wrapRef = useRef(null);
    const buttonRef = useRef(null);
    const firstRef = useRef(null);
    const answerRef = useRef(null);
    const questionRefs = useRef([]);
    const lastQuestion = useRef(0);
    const sheetId = useId();
    const titleId = useId();
    const guide = GUIDED_HELP[contentLang] || GUIDED_HELP.en;
    const faqs = guide.items.map(({ q, a }, i) => ({ n: i + 1, q, a }));

    const close = (returnFocus = true) => {
        setOpen(false);
        setAnswer(0);
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

    // Focus follows the view: to the answer when one opens, back to its question on "Back".
    useEffect(() => {
        if (!open) return;
        if (answer) answerRef.current?.focus();
        else if (lastQuestion.current) questionRefs.current[lastQuestion.current - 1]?.focus();
    }, [answer, open]);

    const shown = answer ? faqs[answer - 1] : null;

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
                    className="max-h-[calc(100vh-7rem)] w-[min(20rem,calc(100vw-2rem))] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl"
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

                    <div data-chat-guided className="mt-2">
                        <p data-chat-heading className="text-xs font-bold uppercase tracking-[0.14em] text-saffron-700">{guide.heading}</p>
                        <p data-chat-note className="mt-1 text-xs leading-5 text-slate-500">{guide.note}</p>
                        {shown ? (
                            <div className="mt-3" aria-live="polite">
                                <p ref={answerRef} tabIndex={-1} data-chat-question className="text-sm font-bold leading-5 text-slate-950 focus:outline-none">{shown.q}</p>
                                <p data-chat-answer className="mt-2 text-sm leading-6 text-slate-700">{shown.a}</p>
                                <button
                                    type="button"
                                    data-chat-back
                                    onClick={() => setAnswer(0)}
                                    className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded-lg px-1"
                                >
                                    <ArrowLeft size={16} aria-hidden="true" />
                                    {guide.back}
                                </button>
                            </div>
                        ) : (
                            <>
                            <p className="mt-3 text-sm font-semibold text-slate-700">{guide.pick}</p>
                            <ul className="mt-2 flex flex-col gap-2">
                                {faqs.map(({ n, q }) => (
                                    <li key={n}>
                                        <button
                                            type="button"
                                            data-chat-faq={n}
                                            ref={(el) => {
                                                questionRefs.current[n - 1] = el;
                                                if (n === 1) firstRef.current = el;
                                            }}
                                            onClick={() => {
                                                lastQuestion.current = n;
                                                setAnswer(n);
                                            }}
                                            className={QUESTION_CLASSES}
                                        >
                                            {q}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            </>
                        )}
                    </div>

                    <p data-chat-handoff className="mt-4 text-sm font-semibold text-slate-700">{guide.handoff}</p>
                    <div className="mt-2 flex flex-col gap-2">
                        <a
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
