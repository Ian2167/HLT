import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
// Logo v2, 14 Sept 2026: the real High Level Thai mark, derived from Ian's Canva source
// vector. See src/assets/brand/hlt-logo-v2/README.md, which records what the earlier violet
// set was and why it is archived rather than deleted.
//
// ONE LOCKUP, 18 September 2026. The colour lockup is the only one this header imports. The
// white lockup is still in the set and the footer still uses it on the navy band; it simply has
// no place here any more, because there is no longer a dark header for it to sit on.
import hltLockupColour from '../assets/brand/hlt-logo-v2/svg/hlt-lockup-colour.svg';
import { hltWebsiteCopy } from '../config/hltWebsite';
import { PUBLIC_NAV, ROUTE_EXECUTIVE_ASSISTANT, ROUTE_HOME } from '../constants/routes';
import { LINE_OFFICIAL_ACCOUNT } from '../constants/contact';

// THE HEADER, REWRITTEN 18 September 2026 on Ian's simplification directive of 17 September,
// held verbatim at C:\Projects\hlt-estate\01-doctrine\HLT-SITE-DIRECTIVE-2026-09-17.md, and his
// GO of 07:41 Bangkok on the 18th: "Preserve the simplified navigation."
//
// His navigation line, verbatim: "Home | Business Read | How It Works | Examples | About |
// Contact, with Client Login on the right. No service names in the main navigation."
//
// WHAT CHANGED, AND WHAT DID NOT. This header now reads PUBLIC_NAV rather than HEADER_SERVICES,
// so the five service pages leave it, the way Problem, Diagnostic, Sectors and Insights left it
// on 14 September and Brand OS left it on his 16:18 ruling the same day. EVERY ONE OF THOSE
// ROUTES STAYS LIVE: nothing is deleted, nothing is redirected, and the "Step n of 5" strip on
// each service page still works, because ladderPosition still reads HEADER_SERVICES. Only the
// header stops pointing at them. That is his opening line, "Do not delete existing service or
// methodology content", kept literally.
//
// CLIENT LOGIN IS OUT OF THE HEADER. Ian, 13:3x Bangkok, 18 September 2026, verbatim: "The
// Client Login can be dropped from the header." It used to render after the divider as a quiet
// text link, on his earlier line that put it on the right. THE ROUTE AND THE PAGE STAY LIVE:
// /client-login is still served in src/App.jsx and ROUTE_CLIENT_LOGIN still lives in
// src/constants/routes.js. Only the header, desktop and mobile, stops pointing at it, which is
// why this file no longer imports that constant. The divider stays, now separating the six nav
// links from the language toggle and the LINE button.
//
// THE SPACING, 18 September 2026. Ian, a minute earlier, with a screenshot of the live header at
// desktop width, verbatim: "Also the Header isn't well spaced and is quite clumsy looking." What
// his screenshot showed was a row on two baselines: Business Read, How It Works and Talk to us on
// LINE each broke over two lines while Home, Examples, About and Contact sat on one, so the gaps
// read as uneven and the logo was jammed against Home. Four lines fix it and none of them touch a
// word of copy: whitespace-nowrap on every nav link and on the LINE button, so no label may break;
// lg:mr-10 on the logo lockup, so the mark has air before Home; gap-7 rather than gap-6 across the
// desktop row, with the divider keeping mx-1; and the row's breakpoint, which is measured below
// rather than guessed.
//
// WHY THE HARD-CODED HOME LINK WENT. Home is PUBLIC_NAV's first entry now, so rendering it
// twice would have put two Home links in the header.
//
// WHERE THE WORDS COME FROM. Every label is a gated deck's own nav key: homeNavHome and the LINE
// button label from the home deck, brNavLink from the Business Read deck, and hiwNavLink,
// exNavLink, aboutNavLink, contactNavLink and clNavLink from the four new decks in the 18
// September pack. The order lives in src/constants/routes.js, so a reorder is one array.
//
// ONE HEADER, ONE LOGO, NO THEME SWITCH. Ian, 12:2x Bangkok, 18 September 2026, verbatim: "I
// just want one common header with the blue logo." He said it after the Desk showed him that
// this header swapped to the white lockup whenever the browser held theme=dark, so two visitors
// on the same page saw two different headers and his own browser came up dark.
//
// WHAT THAT MEANS IN THIS FILE. The light glass header and the blue colour lockup, on every page
// and in every browser. The white lockup <img> and its dark:hidden / dark:block pair are gone,
// so there is one <img> and nothing to swap. ThemeToggle is gone from the desktop bar and from
// the mobile button row, and its import with it; the component file stays on disk, retired, and
// src/main.jsx clears any dark class and any stored theme key a browser is still holding.
//
// WHAT DID NOT CHANGE. The Language toggle (EN/TH) is untouched and stays exactly where it was.
// No copy, no navigation, no structure. The dark: utility classes elsewhere in the tree are left
// as dead styling on purpose: sweeping them was ruled out of scope for this commit, and dead
// classes cost nothing once nothing can add the dark class.
//
// THE BREAKPOINT IS MEASURED, NOT GUESSED. It was lg (1024px) and it stays lg: with the login
// link gone and nothing allowed to wrap, the DOM read at 1024 wide puts the logo, the six links,
// the divider, the toggle and the button on one line inside the container with room to spare. It
// was never md: six items plus a toggle and a button do not fit a tablet.
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { language, t } = useLanguage();
    // Only the menu button's aria labels still come from the old copy file. Everything the
    // visitor reads in this header comes from a gated deck.
    const copy = hltWebsiteCopy[language]?.nav || hltWebsiteCopy.th.nav;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = PUBLIC_NAV.map((item) => ({
        name: t(item.labelKey),
        href: item.to,
    }));

    // Ian, 15 September 2026 12:5x Bangkok: "make the header names stay in purple when you are on
    // that page". Home matches only exactly; a service page matches its own path and anything
    // under it, so a future sub-page keeps its parent lit. The alias /custom-ai-assistant also
    // lights Executive Assistant, because it is the same page under its old name.
    const { pathname } = useLocation();
    const isHere = (href) => {
        if (href === ROUTE_HOME) return pathname === ROUTE_HOME;
        if (href === ROUTE_EXECUTIVE_ASSISTANT && pathname.startsWith('/custom-ai-assistant')) return true;

        return pathname === href || pathname.startsWith(`${href}/`);
    };
    const deskLink = (href) =>
        `text-sm font-medium whitespace-nowrap transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${isHere(href)
            ? 'text-indigo-600 dark:text-indigo-400'
            : 'text-slate-600 dark:text-slate-300'}`;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen
                ? 'glass shadow-sm py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* Logo */}
                <Link to={ROUTE_HOME} className="flex items-center group lg:mr-10" aria-label="High Level Thai">
                    <img
                        src={hltLockupColour}
                        alt="High Level Thai"
                        className="h-9 w-auto block"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-7">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={deskLink(link.href)}
                            aria-current={isHere(link.href) ? 'page' : undefined}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* The divider, between the six nav links and the two controls. It kept its
                        mx-1 when Client Login came out from behind it on Ian's 18 September
                        ruling. */}
                    <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
                    <LanguageToggle />
                    <a
                        href={LINE_OFFICIAL_ACCOUNT}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold whitespace-nowrap hover:bg-indigo-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        {t('homeNavCtaLabel')}
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden items-center gap-4">
                    <LanguageToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? copy.menuClose : copy.menuOpen}
                        className="text-slate-900 dark:text-white focus:outline-none"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay. THE SAME SIX ITEMS AS THE DESKTOP HEADER, IN THE SAME ORDER
                (seven until Client Login came out of both halves on 18 September), and that is the
                whole point of doing both halves in one commit: a header that differs between a
                phone and a laptop is worse than either.

                The hard-coded Home link that used to open this list went with the desktop one:
                Home is PUBLIC_NAV's first entry now, so keeping it would have rendered Home
                twice on a phone. The five service links used to sit indented under it, behind a
                left border, because they were its children. PUBLIC_NAV's six items are peers, so
                the indent went too and the list is flat, exactly as it reads on the desktop. */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-white/20 overflow-hidden">
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400 ${isHere(link.href)
                                        ? 'text-indigo-600 dark:text-indigo-400'
                                        : 'text-slate-900 dark:text-white'}`}
                                    aria-current={isHere(link.href) ? 'page' : undefined}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* Client Login sat here, below the divider and above the LINE button.
                                It came out on Ian's 18 September ruling, the same one that took it
                                off the desktop bar, so the two halves still show the same items.
                                The divider stays and now separates the six links from the one
                                action. */}
                            <div className="h-px bg-slate-200 dark:bg-slate-700" />
                            <a
                                href={LINE_OFFICIAL_ACCOUNT}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full py-3 mt-4 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 text-center"
                            >
                                {t('homeNavCtaLabel')}
                            </a>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
