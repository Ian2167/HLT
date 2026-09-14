import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const DiagnosticBridge = () => {
    const { language } = useLanguage();
    const isEn = language === 'en';

    return (
        <section className="bg-white py-20 dark:bg-slate-950">
            <div className="container mx-auto px-6 text-center">
                <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
                    {isEn
                        ? 'Not sure where your customers are dropping off? Check first before changing anything.'
                        : 'ยังไม่รู้ว่าลูกค้าหลุดช่วงไหน? เช็กก่อนก่อนปรับอะไรเพิ่ม'}
                </p>
                <Link
                    to="/aios-diagnostic"
                    className="inline-flex px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all items-center gap-2 mx-auto"
                >
                    {isEn ? 'See where customers drop off' : 'ดูว่าลูกค้าหลุดช่วงไหน'}
                    <ArrowRight size={20} />
                </Link>
            </div>
        </section>
    );
};

export default DiagnosticBridge;
