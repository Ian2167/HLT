// Navbar.jsx — the one header, on every page.
// REWRITTEN 30 September 2026, the visibility refresh (bridge row 4007 and Ian's fuller spec of
// the same day, "you build based on the following"). Everything Ian ruled on 18 September that is
// not about WHICH links appear is kept: one light glass header, the blue colour lockup only, no
// theme switch, no label ever wrapping, the measured lg breakpoint, the active page lit.
//
// WHAT THE SPEC RULES, verbatim (section 5). Mobile: "HLT logo / wordmark on left, hamburger menu on
// right, obvious EN | ไทย language switch, no overloaded navigation." Desktop: "How It Works |
// Business Read | Blindspots | Owner Dependency | About | EN | ไทย", primary CTA "Start with the
// Business Read."
//
// WHAT THAT CHANGES FROM 17 SEPTEMBER. Ian's earlier navigation line was "Home | Business Read | How
// It Works | Examples | About | Contact". Home is now the lockup, which links home on every page;
// Examples and Contact leave the desktop bar and live in the mobile menu and the footer; Blindspots
// and Owner Dependency join. The order is the spec's. This is listed in the report as the conflict
// it is, resolved by Ian's own paste of the fuller spec.
//
// THE CALL TO ACTION IS THE BUSINESS READ, NOT LINE. The header button used to open LINE. The spec's
// CTA architecture (section 37) makes "Start with the Business Read" the one primary action across
// the public site and "Talk to us" the secondary; the desktop bar carries the primary only, the
// mobile menu carries both, and LINE is one tap away in the footer of every page.
//
// EVERY LINK GOES THROUGH lp(). The language now lives in the URL (src/constants/lang.js), so a
// visitor reading /en/about who taps Business Read lands on /en/business-read, not the Thai page.
//
// THE MOBILE BAR HOLDS THREE THINGS: the lockup, EN | ไทย, the menu button. Nothing else, on the
// spec's "do not overcrowd the header". The menu lists the five desktop items plus Hua Hin, Examples
// and Contact, then the two actions.
//
// THE BREAKPOINT IS MEASURED, NOT GUESSED, as on 18 September. It was lg (1024px) and it is now xl
// (1280px): with "Start with the Business Read" on the button, the five labels, the divider, the
// toggle and the lockup need about 1,080px of row, and a 1024px screen has 976px inside the
// container. The first build at lg let the flex row squeeze the lockup to a 16px sliver rather
// than wrap, which a Playwright read of the image's rendered width caught. A tablet in landscape
// now gets the phone header, which is the honest fit.
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import hltLockupColour from '../assets/brand/hlt-logo-v2/svg/hlt-lockup-colour.svg';
import { hltWebsiteCopy } from '../config/hltWebsite';
import { MOBILE_NAV, PUBLIC_NAV, ROUTE_BUSINESS_READ, ROUTE_HOME } from '../constants/routes';
import { LINE_OFFICIAL_ACCOUNT } from '../constants/contact';
import { splitLang } from '../constants/lang';

const CTA_CLASSES =
    'inline-flex min-h-10 items-center justify-center rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white whitespace-nowrap shadow-lg transition-all hover:bg-indigo-500 hover:shadow-xl';

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

                {/* Desktop: the spec's five, the divider, EN | ไทย, the one call to action. */}
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
                    <Link to={lp(ROUTE_BUSINESS_READ)} className={CTA_CLASSES}>
                        {t('navCtaLabel')}
                    </Link>
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

            {/* The mobile menu: eight links, then the primary action full width, then Talk to us. */}
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
                        <Link
                            to={lp(ROUTE_BUSINESS_READ)}
                            onClick={closeMenu}
                            className="w-full rounded-xl bg-indigo-600 px-6 py-4 text-center text-base font-bold text-white hover:bg-indigo-500"
                        >
                            {t('navCtaLabel')}
                        </Link>
                        <a
                            href={LINE_OFFICIAL_ACCOUNT}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
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
