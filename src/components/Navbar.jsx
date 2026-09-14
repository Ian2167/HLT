import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
// Logo v2, 14 Sept 2026: the real High Level Thai mark, derived from Ian's Canva source
// vector. See src/assets/brand/hlt-logo-v2/README.md, which records what the earlier violet
// set was and why it is archived rather than deleted.
import hltLockupColour from '../assets/brand/hlt-logo-v2/svg/hlt-lockup-colour.svg';
import hltLockupWhite from '../assets/brand/hlt-logo-v2/svg/hlt-lockup-white.svg';
import { hltWebsiteCopy } from '../config/hltWebsite';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { language, t } = useLanguage();
    const copy = hltWebsiteCopy[language]?.nav || hltWebsiteCopy.th.nav;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: copy.problem, href: '/#problem' },
        { name: copy.diagnostic, href: '/#diagnostic' },
        { name: copy.audit, href: '/#audit' },
        { name: copy.sectors, href: '/#sectors' },
        { name: copy.insights, href: '/#insights' },
        // The Business Read, 14 September 2026. Routes render as router Links; the rest are hash
        // targets on the home page.
        { name: t('brNavLink'), href: '/business-read', route: true },
        // The rebuilt catalogue-service pages, added one per page as each one lands so Ian can
        // click straight to it on the dev server. This array is rewritten wholesale into
        // Home + a Services group + the LINE button with the summary home page (item 6 of the
        // 14 September brief), which is where the nav's own labels get their gated copy.
        { name: t('aoaNavLink'), href: '/ai-opportunity-audit', route: true },
        { name: t('bosNavLink'), href: '/brand-os', route: true },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen
                ? 'glass shadow-sm py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="flex items-center group" aria-label="High Level Thai">
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
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        {copy.home}
                    </Link>

                    {links.map((link) =>
                        link.route ? (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                            >
                                {link.name}
                            </a>
                        )
                    )}

                    <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2"></div>
                    <ThemeToggle />
                    <LanguageToggle />
                    <Link
                        to="/diagnostic"
                        className="px-5 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        {copy.cta}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-4">
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

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
                        <div className="px-6 py-6 flex flex-col gap-4">
                            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-900 dark:text-white">{copy.home}</Link>
                            {links.map((link) =>
                                link.route ? (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-lg font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 pl-4 border-l-2 border-slate-100 dark:border-slate-800"
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-lg font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 pl-4 border-l-2 border-slate-100 dark:border-slate-800"
                                    >
                                        {link.name}
                                    </a>
                                )
                            )}
                            <Link
                                to="/diagnostic"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full py-3 mt-4 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 text-center"
                            >
                                {copy.cta}
                            </Link>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
