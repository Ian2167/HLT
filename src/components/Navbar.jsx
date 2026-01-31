import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        { name: t('mctb'), href: '/mctb' },
        { name: t('quotes'), href: '/quotes' },
        { name: t('rag'), href: '/rag' },
        { name: t('websites'), href: '/websites' },
    ];

    const sectors = [
        { name: t('homeServices'), href: '/home-services' },
        { name: t('clinics'), href: '/clinics' },
        { name: t('salons'), href: '/salons' },
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
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:bg-indigo-500 transition-colors">
                        H
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                        HighLevel<span className="text-indigo-600 dark:text-indigo-400">Thai</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        {t('home')}
                    </Link>

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            {t('services')} <ChevronDown size={14} />
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                            {services.map((service) => (
                                <Link
                                    key={service.name}
                                    to={service.href}
                                    className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400"
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Sectors Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            {t('sectors')} <ChevronDown size={14} />
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                            {sectors.map((sector) => (
                                <Link
                                    key={sector.name}
                                    to={sector.href}
                                    className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400"
                                >
                                    {sector.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2"></div>
                    <ThemeToggle />
                    <LanguageToggle />
                    <button className="px-5 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        {t('getStarted')}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-4">
                    <ThemeToggle />
                    <LanguageToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-slate-900 dark:text-white focus:outline-none"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-900 dark:text-white">{t('home')}</Link>
                            <div className="text-sm font-bold text-indigo-500 uppercase tracking-wider mt-2">{t('services')}</div>
                            {services.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 pl-4 border-l-2 border-slate-100 dark:border-slate-800"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="text-sm font-bold text-indigo-500 uppercase tracking-wider mt-4">{t('sectors')}</div>
                            {sectors.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 pl-4 border-l-2 border-slate-100 dark:border-slate-800"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button className="w-full py-3 mt-4 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700">
                                {t('getStarted')}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
