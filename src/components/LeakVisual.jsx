// LeakVisual.jsx — several small leaks feeding into Money Lost, Time Lost, Control Lost
// (repositioning brief, section 4). Text, not a picture: the seven leaks as a list on the left,
// an arrow, the three outcomes stacked on the right. Stacks on a phone.
import { ArrowRight, ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LeakVisual = () => {
    const { t } = useLanguage();
    const leaks = [1, 2, 3, 4, 5, 6, 7].map((n) => t(`leak${n}`));
    const outcomes = [1, 2, 3].map((n) => t(`leakOutcome${n}`));

    return (
        <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-6">
            <ul className="space-y-2">
                {leaks.map((leak) => (
                    <li key={leak} className="rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-base leading-6 text-slate-700">
                        {leak}
                    </li>
                ))}
            </ul>
            <span aria-hidden="true" className="flex justify-center text-slate-400">
                <ArrowDown size={28} className="md:hidden" />
                <ArrowRight size={28} className="hidden md:block" />
            </span>
            <ul className="space-y-3">
                {outcomes.map((outcome) => (
                    <li key={outcome} className="rounded-2xl bg-hltNavy px-5 py-5 text-center text-lg font-bold text-white shadow-md">
                        {outcome}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeakVisual;
