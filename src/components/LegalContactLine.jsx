// LegalContactLine.jsx: the one contact line under the four "coming soon" legal pages (/terms,
// /privacy, /pdpa, /cookies, both languages). Added 20 October 2026 on Ian's ruling 7, in the build
// session, verbatim: "Can we just use an 'email us' link with no name?" The line used to end in the
// address as text; it now ends in an "Email us" link to the same CONTACT_EMAIL, so no name is shown.
// No legal text is added: the pages still say "coming soon" (Ian, 20 October: "Agreed").
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_EMAIL } from '../constants/contact';

const LegalContactLine = () => {
    const { t } = useLanguage();
    return (
        <p className="mt-6 text-base leading-7 text-slate-500">
            {t('legalContactLine')}{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-indigo-600 underline underline-offset-4 hover:text-indigo-700">
                {t('emailUsLabel')}
            </a>
        </p>
    );
};

export default LegalContactLine;
