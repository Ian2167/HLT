// Navbar.jsx — the one header, on every page.
// REWRITTEN 30 September 2026 for the visibility refresh; THE LINKS AND THE BUTTON CHANGED 1 October
// 2026 for the repositioning (Ian's brief of that morning, section 20, and his "Agreed to the Home
// and other page structuring"). Everything Ian ruled on 18 September that is not about WHICH links
// appear is kept: one light glass header, the blue colour lockup only, no theme switch, no label
// ever wrapping, the measured breakpoint, the active page lit.
//
// WHAT THE BRIEF RULES (section 20): "Home, Business Read, How It Works, Problems We Fix, Who We
// Help, About, Contact", Insights only when it exists. Home is the lockup on the desktop bar and a
// line in the mobile menu. The lists live in src/constants/routes.js.
//
// THE CALL TO ACTION IS THE FIT CALL (brief, section 22; Ian, 1 October: Google Calendar and Meet,
// LINE and WhatsApp as backups). The button is the FitCallButton, which goes to the booking page
// once its link is in src/config/features.js and to the Contact page until then. The mobile menu
// carries the button and "Talk to us" (LINE).
//
// EVERY LINK GOES THROUGH lp(). The language lives in the URL (src/constants/lang.js), so a visitor
// reading /en/about who taps Business Read lands on /en/business-read, not the Thai page.
//
// THE MOBILE BAR HOLDS THREE THINGS: the lockup, EN | ไทย, the menu button. Nothing else.
//
// THE BREAKPOINT IS MEASURED, NOT GUESSED, as on 18 and 30 September. It stays xl (1280px): six
// labels, the divider, the toggle, the shorter "Book a Fit Call" button and the lockup need about
// 1,050px of row; a 1280px screen gives 1,232px inside the container and a 1024px screen only 976px.
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import hltLockupColour from '../assets/brand/hlt-logo-v2/svg/hlt-lockup-colour.svg';
import { hltWebsiteCopy } from '../config/hltWebsite';
import { MOBILE_NAV, PUBLIC_NAV, ROUTE_HOME } from '../constants/routes';
import { LINE_OFFICIAL_ACCOUNT } from '../constants/contact';
import { splitLang } from '../constants/lang';
import { FitCallButton } from './FitCallButtons';
import { EVENTS, logEvent } from '../lib/analytics';

const CTA_CLASSES =
    'inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white whitespace-nowrap shadow-lg transition-all hover:bg-indigo-500 hover:shadow-xl';

const MOBILE_CTA_CLASSES =
    'inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 text-center text-base font-bold text-white hover:bg-indigo-500';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { language, t, lp } = useLanguage();
    // Only the menu button's aria labels still come from the old copy file.
    const copy = hltWebsiteCopy[language]?.nav || hltWebsiteCopy.th.nav;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Every tap inside the open menu closes it, so a link never leaves it hanging over the page.
    const closeMenu = () => setMobileMenuOpen(false);

    // Ian, 15 September 2026: "make the header names stay in purple when you are on that page".
    // Compared on the language-free route, so /en/about lights About just as /about does.
    const { pathname } = useLocation();
    const { route } = splitLang(pathname);
    const isHere = (href) => (href === ROUTE_HOME ? route === ROUTE_HOME : route === href || route.startsWith(`${href}/`));

    const deskLink = (href) =>
        `text-sm font-medium whitespace-nowrap transition-colors hover:text-indigo-600 ${
            isHere(href) ? 'text-indigo-600' : 'text-slate-600'
        }`;

    const desktopLinks = PUBLIC_NAV.map((item) => ({ name: t(item.labelKey), href: item.to }));
    const mobileLinks = MOBILE_NAV.map((item) => ({ name: t(item.labelKey), href: item.to }));

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled || mobileMenuOpen ? 'glass shadow-sm py-3 xl:py-4' : 'bg-transparent py-4 xl:py-6'
            }`}
        >
            <div className="container mx-auto flex items-center justify-between px-5 sm:px-6">
                {/* The lockup is the Home link, on every page and in both halves. shrink-0 so the
                    flex row can never squeeze the mark. */}
                <Link to={lp(ROUTE_HOME)} className="flex shrink-0 items-center xl:mr-8" aria-label="High Level Thai">
                    <img src={hltLockupColour} alt="High Level Thai" className="block h-8 w-auto shrink-0 sm:h-9" />
                </Link>

                {/* Desktop: the brief's pages, the divider, EN | ไทย, the one call to action. */}
                <div className="hidden items-center gap-6 xl:flex">
                    {desktopLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={lp(link.href)}
                            className={deskLink(link.href)}
                            aria-current={isHere(link.href) ? 'page' : undefined}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="mx-1 h-6 w-px bg-slate-200" />
                    <LanguageToggle />
                    <FitCallButton place="header" className={CTA_CLASSES} label={t('navCtaLabel')} />
                </div>

                {/* Mobile bar: EN | ไทย, then the menu button. */}
                <div className="flex items-center gap-3 xl:hidden">
                    <LanguageToggle />
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((open) => !open)}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-menu"
                        aria-label={mobileMenuOpen ? copy.menuClose : copy.menuOpen}
                        className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* The mobile menu: the pages, then the primary action full width, then Talk to us. */}
            {mobileMenuOpen ? (
                <div id="mobile-menu" className="border-b border-slate-200 bg-white xl:hidden">
                    <div className="flex flex-col gap-1 px-5 py-4 sm:px-6">
                        {mobileLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={lp(link.href)}
                                onClick={closeMenu}
                                className={`rounded-lg px-2 py-3 text-lg font-medium hover:bg-slate-50 hover:text-indigo-600 ${
                                    isHere(link.href) ? 'text-indigo-600' : 'text-slate-900'
                                }`}
                                aria-current={isHere(link.href) ? 'page' : undefined}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="my-3 h-px bg-slate-200" />
                        <span onClick={closeMenu} className="block">
                            <FitCallButton place="mobile-menu" className={MOBILE_CTA_CLASSES} label={t('navCtaLabel')} />
                        </span>
                        <a
                            href={LINE_OFFICIAL_ACCOUNT}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                                closeMenu();
                                logEvent(EVENTS.lineClick, { place: 'mobile-menu' });
                            }}
                            className="mt-2 w-full rounded-xl border border-slate-300 px-6 py-4 text-center text-base font-bold text-slate-900 hover:border-indigo-500 hover:text-indigo-600"
                        >
                            {t('navTalkLabel')}
                        </a>
                    </div>
                </div>
            ) : null}
        </nav>
    );
};

export default Navbar;
