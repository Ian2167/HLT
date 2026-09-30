// LanguageContext.jsx — which language the visitor is reading, and how a link stays in it.
// REWRITTEN 30 September 2026, the visibility refresh (bridge row 4007 and Ian's fuller spec).
//
// WHAT CHANGED. The language used to be a browser toggle held in localStorage, so every page had
// one URL and a crawler with no storage saw Thai only. The language is now READ FROM THE URL:
// anything under /en is English, everything else is Thai (the ruled first language). See
// src/constants/lang.js for the shape and the reasons.
//
// WHAT THE PROVIDER GIVES A COMPONENT.
//   language        'en' | 'th', from the URL
//   t(key)          the string for that key in that language, as before
//   lp(route)       the same route in the current language: lp('/about') is '/about' in Thai and
//                   '/en/about' in English. Every internal link on the public site goes through it,
//                   so a visitor reading English stays in English.
//   twinPath        the current page in the other language, for the EN | ไทย control
//   toggleLanguage  navigates to twinPath and remembers the choice
//
// THE STORED PREFERENCE SURVIVES, WITH ONE JOB. A returning visitor who chose English is taken
// from the root URL to /en once, on arrival. Deep links are never redirected: the URL decides, so a
// shared or indexed address always shows the language it names.
//
// THE PROVIDER NOW SITS INSIDE THE ROUTER (see src/App.jsx), because it reads the location.
import { createContext, useCallback, useContext, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { translations } from '../translations';
import { localPath, splitLang } from '../constants/lang';

const LanguageContext = createContext();

const STORAGE_KEY = 'language';

const readStored = () => {
    try {
        return localStorage.getItem(STORAGE_KEY);
    } catch {
        return null;
    }
};

const writeStored = (lang) => {
    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch {
        // Storage blocked: the URL still carries the language, so nothing is lost.
    }
};

export const LanguageProvider = ({ children }) => {
    const { pathname, search, hash } = useLocation();
    const navigate = useNavigate();
    const { lang: language, route } = useMemo(() => splitLang(pathname), [pathname]);

    // The document's own language attribute follows the URL, so the prerendered HTML and the live
    // page both tell a crawler and a screen reader which language they are reading.
    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    // The one redirect: a stored English preference, on the root URL only, on arrival only.
    useEffect(() => {
        if (pathname === '/' && readStored() === 'en') {
            navigate(`/en${search}${hash}`, { replace: true });
        }
        // Arrival only, on purpose: later navigations are the visitor's own choice.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const lp = useCallback((r) => localPath(r, language), [language]);

    const twinLang = language === 'en' ? 'th' : 'en';
    const twinPath = `${localPath(route, twinLang)}${search}${hash}`;

    const toggleLanguage = useCallback(() => {
        writeStored(twinLang);
        navigate(twinPath);
    }, [navigate, twinLang, twinPath]);

    const t = useCallback((key) => translations[language][key] || key, [language]);

    const value = useMemo(
        () => ({ language, route, t, lp, twinPath, twinLang, toggleLanguage }),
        [language, route, t, lp, twinPath, twinLang, toggleLanguage],
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
