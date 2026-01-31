import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors overflow-hidden"
            title={language === 'en' ? "Switch to Thai" : "Switch to English"}
        >
            <motion.div
                key={language}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-sm font-bold"
            >
                {language === 'en' ? 'EN' : 'TH'}
            </motion.div>
        </button>
    );
};

export default LanguageToggle;
