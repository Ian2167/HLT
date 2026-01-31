import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <div className="text-2xl font-bold tracking-tight text-white mb-2">
                        HighLevel<span className="text-indigo-500">Thai</span>
                    </div>
                    <p className="text-sm max-w-xs">
                        {t('footerTagline')}
                    </p>
                </div>

                <div className="flex gap-8 text-sm font-medium">
                    <a href="#" className="hover:text-white transition-colors">{t('privacyPolicy')}</a>
                    <a href="#" className="hover:text-white transition-colors">{t('terms')}</a>
                    <a href="#" className="hover:text-white transition-colors">{t('contactSupport')}</a>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-600">
                &copy; {new Date().getFullYear()} HLT. {t('builtWith')}
            </div>
        </footer>
    );
};

export default Footer;
