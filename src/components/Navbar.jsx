import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
// Logo v2, 14 Sept 2026: the real High Level Thai mark, derived from Ian's Canva source
// vector. See src/assets/brand/hlt-logo-v2/README.md, which records what the earlier violet
// set was and why it is archived rather than deleted.
import hltLockupColour from '../assets/brand/hlt-logo-v2/svg/hlt-lockup-colour.svg';
import hltLockupWhite from '../assets/brand/hlt-logo-v2/svg/hlt-lockup-white.svg';
import { hltWebsiteCopy } from '../config/hltWebsite';
import { HEADER_SERVICES, ROUTE_EXECUTIVE_ASSISTANT, ROUTE_HOME } from '../constants/routes';
import { LINE_OFFICIAL_ACCOUNT } from '../constants/contact';

// THE HEADER, REWRITTEN 14 September 2026 on Ian's ruling at 16:24 Bangkok: the links array is
// exactly Home, the five live service pages, then the LINE button. Problem, Diagnostic, AIOS
// Audit, Sectors and Insights all leave the header, desktop and mobile, because they point into
// the retired offering. Brand OS leaves it too, on his 16:18 ruling, "Drop Brand OS, keep it on
// Upwork". Every one of those routes stays live; only the header stops pointing at them.
//
// WHERE THE WORDS COME FROM. The service labels are each page's own nav key, already gated on
// that page's copy deck. "Home" and the button label come from the home page's deck, section 6.
// The order lives in src/constants/routes.js, so a renamed route is a one-line change.
//
// The breakpoint is lg, not md: six items plus two toggles and a button do not fit a tablet.
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

    const links = HEADER_SERVICES.map((service) => ({
        name: t(service.labelKey),
        href: service.to,
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
        `text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${isHere(href)
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
                <Link to={ROUTE_HOME} className="flex items-center group" aria-label="High Level Thai">
                    <img
                        src={hltLockupColour}
                        alt="High Level Thai"
                        className="h-9 w-auto block dark:hidden"
                    />
                    <img
                        src={hltLockupWhite}
                        alt=""
                        aria-hidden="true"
                        className="h-9 w-auto hidden dark:block"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-6">
                    <Link to={ROUTE_HOME} className={deskLink(ROUTE_HOME)} aria-current={isHere(ROUTE_HOME) ? 'page' : undefined}>
                        {t('homeNavHome')}
                    </Link>

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

                    <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
                    <ThemeToggle />
                    <LanguageToggle />
                    <a
                        href={LINE_OFFICIAL_ACCOUNT}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        {t('homeNavCtaLabel')}
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden items-center gap-4">
                    <ThemeToggle />
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

            {/* Mobile Menu Overlay. A flat list, in the same order as the desktop header. */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-white/20 overflow-hidden">
                        <div className="px-6 py-6 flex flex-col gap-4">
                            <Link
                                to={ROUTE_HOME}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-lg font-medium ${isHere(ROUTE_HOME)
                                    ? 'text-indigo-600 dark:text-indigo-400'
                                    : 'text-slate-900 dark:text-white'}`}
                                aria-current={isHere(ROUTE_HOME) ? 'page' : undefined}
                            >
                                {t('homeNavHome')}
                            </Link>
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-lg font-medium pl-4 border-l-2 hover:text-indigo-600 dark:hover:text-indigo-400 ${isHere(link.href)
                                        ? 'text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400'
                                        : 'text-slate-900 dark:text-white border-slate-100 dark:border-white/20'}`}
                                    aria-current={isHere(link.href) ? 'page' : undefined}
                                >
                                    {link.name}
                                </Link>
                            ))}
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
