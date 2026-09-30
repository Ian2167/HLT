// LanguageToggle.jsx — the EN | ไทย control. REWRITTEN 30 September 2026, the visibility refresh.
//
// WHAT CHANGED. It used to be a button that flipped a value in localStorage; the page then re-read
// its strings in place and the URL never moved. The language now lives in the URL (see
// src/constants/lang.js), so this control is TWO LINKS: the current language, lit, and the other
// one, which points at the same page in that language. A crawler following the second link finds
// the twin page, which is what makes the two languages separately indexable.
//
// THE LABELS. The spec asks for "an obvious EN | ไทย language switch": the Thai label is written in
// Thai script, as a Thai reader would look for it, not as a two-letter code.
//
// THE 15 September fix survives: both labels are always shown and the active one is lit, so the
// control can never be misread as "click for the language you are already in".
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { localPath } from '../constants/lang';

const LanguageToggle = () => {
    const { language, route, t } = useLanguage();

    const options = [
        { code: 'en', label: t('langLabelEn'), title: t('switchToEnglish') },
        { code: 'th', label: t('langLabelTh'), title: t('switchToThai') },
    ];

    const remember = (code) => {
        try {
            localStorage.setItem('language', code);
        } catch {
            // Storage blocked: the URL carries the language regardless.
        }
    };

    return (
        <nav aria-label="Language" className="flex h-10 items-center gap-0.5 overflow-hidden rounded-lg bg-slate-100 p-1">
            {options.map(({ code, label, title }) => {
                const active = language === code;
                return (
                    <Link
                        key={code}
                        to={localPath(route, code)}
                        hrefLang={code}
                        lang={code}
                        title={active ? undefined : title}
                        aria-current={active ? 'true' : undefined}
                        onClick={() => remember(code)}
                        className={`rounded-md px-2.5 py-1 text-xs font-bold leading-none transition-colors ${
                            active ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        {label}
                    </Link>
                );
            })}
        </nav>
    );
};

export default LanguageToggle;
