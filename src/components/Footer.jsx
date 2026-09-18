import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LINE_FOOTER } from '../constants/contact';
import { hltWebsiteCopy } from '../config/hltWebsite';
// The header's own white lockup. Ian, 14 September 2026: the footer's name must match the
// header, and the name is three words, "High Level Thai". The old footer rendered "HighLevel"
// and "Thai" as two spans, which read closed up and did not match the mark above it. Using the
// header's own asset means the two can never drift apart again.
import hltLockupWhite from '../assets/brand/hlt-logo-v2/svg/hlt-lockup-white.svg';
import { ROUTE_BUSINESS_READ, ROUTE_HOW_IT_WORKS } from '../constants/routes';

// THE FOOTER'S TWO FUNNEL LINKS WENT, 18 September 2026, on Ian's simplification directive of
// 17 September, held at C:\Projects\hlt-estate\01-doctrine\HLT-SITE-DIRECTIVE-2026-09-17.md.
//
// It pointed at /aios-diagnostic and /diagnostic, the landing page and the fifteen-question
// funnel that were the old first step. The new first step is the Business Read, so those two
// slots now hold the Business Read and How It Works: the commercial page and the page that
// explains the order of work.
//
// BOTH OLD ROUTES ARE STILL LIVE. Nothing is deleted and nothing is redirected. Their page files,
// their routes and their copy are untouched, on Ian's opening line "Do not delete existing
// service or methodology content"; the footer simply stops pointing at them, and vercel.json
// carries a noindex header for them so they fall out of search on their own.
//
// WHERE THE TWO LABELS COME FROM. brNavLink and hiwNavLink, each page's own gated nav key, the
// same strings the header renders. No word here is the builder's. The remaining three links keep
// their existing config strings, because Privacy, Terms and Support are unchanged by this
// restructure.
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
                    <Link to={ROUTE_BUSINESS_READ} className="hover:text-white transition-colors">{t('brNavLink')}</Link>
                    <Link to={ROUTE_HOW_IT_WORKS} className="hover:text-white transition-colors">{t('hiwNavLink')}</Link>
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
