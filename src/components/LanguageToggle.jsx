import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
    const { language, toggleLanguage, t } = useLanguage();

    return (
        // AMBIGUOUS BEFORE, FIXED 15 September 2026. This button showed ONE code, the language
        // you were already in, so "TH" read to a user as "click here for Thai" when it meant
        // "you are in Thai". Ian could not tell whether the Thai was broken or whether he was
        // simply in English. Both codes are now shown with the active one lit, which is what a
        // reader expects and cannot be misread.
        <button
            onClick={toggleLanguage}
            className="h-10 rounded-lg flex items-center bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors overflow-hidden p-1 gap-0.5"
            title={language === 'en' ? t('switchToThai') : t('switchToEnglish')}
        >
            {['en', 'th'].map((code) => (
                <motion.span
                    key={code}
                    animate={{ opacity: language === code ? 1 : 0.55 }}
                    transition={{ duration: 0.2 }}
                    className={`px-2 py-1 rounded-md text-xs font-bold leading-none ${
                        language === code
                            ? 'bg-indigo-600 text-white'
                            : 'text-slate-600 dark:text-slate-300'
                    }`}
                >
                    {code.toUpperCase()}
                </motion.span>
            ))}
        </button>
    );
};

export default LanguageToggle;
