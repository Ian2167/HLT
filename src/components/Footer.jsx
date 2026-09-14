import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LINE_FOOTER } from '../constants/contact';
import { hltWebsiteCopy } from '../config/hltWebsite';
// The header's own white lockup. Ian, 14 September 2026: the footer's name must match the
// header, and the name is three words, "High Level Thai". The old footer rendered "HighLevel"
// and "Thai" as two spans, which read closed up and did not match the mark above it. Using the
// header's own asset means the two can never drift apart again.
import hltLockupWhite from '../assets/brand/hlt-logo-v2/svg/hlt-lockup-white.svg';

const Footer = () => {
    const { language, t } = useLanguage();
    const copy = hltWebsiteCopy[language]?.footer || hltWebsiteCopy.th.footer;

    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <div className="mb-3 flex justify-center md:justify-start">
                        <img src={hltLockupWhite} alt={t('homeFooterBrand')} className="h-9 w-auto" />
                    </div>
                    <p className="text-sm max-w-xs">
                        {copy.tagline}
                    </p>
                </div>

                <div className="flex gap-8 text-sm font-medium">
                    <Link to="/aios-diagnostic" className="hover:text-white transition-colors">{copy.aiosDiagnostic}</Link>
                    <Link to="/diagnostic" className="hover:text-white transition-colors">{copy.startCheck}</Link>
                    <Link to="/privacy" className="hover:text-white transition-colors">{copy.privacy}</Link>
                    <Link to="/terms" className="hover:text-white transition-colors">{copy.terms}</Link>
                    <a href={LINE_FOOTER} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{copy.support}</a>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-600">
                &copy; {new Date().getFullYear()} {copy.company}. {copy.builtWith}
            </div>
        </footer>
    );
};

export default Footer;
