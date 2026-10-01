// ControlFlow.jsx — the HLT control method, six parts (repositioning brief, sections 8 and 25).
//
// Capture, Ownership, Deadline, Check, Escalation, Record: a horizontal flow from lg, a vertical
// one on a phone, each part a name and one short line. An ordered list underneath the arrows so
// the order survives without them. Ends on the line that keeps technology in its place.
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const ControlFlow = ({ dark = false }) => {
    const { t } = useLanguage();
    const parts = [1, 2, 3, 4, 5, 6].map((n) => ({ name: t(`control${n}Name`), body: t(`control${n}Body`) }));

    const card = dark
        ? 'border-white/15 bg-white/[0.06] text-white'
        : 'border-slate-200 card-glass card-static text-slate-950';
    const body = dark ? 'text-slate-200' : 'text-slate-600';
    const arrow = dark ? 'text-indigo-200' : 'text-slate-400';

    return (
        <div>
            <ol className="flex flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-0">
                {parts.map((part, index) => (
                    <li key={part.name} className="flex flex-col items-center lg:flex-1 lg:flex-row">
                        <div className={`w-full rounded-2xl border p-5 text-center lg:min-h-[9rem] ${card}`}>
                            <span className="block text-sm font-bold uppercase tracking-[0.2em]">{part.name}</span>
                            <span className={`mt-2 block text-sm leading-6 ${body}`}>{part.body}</span>
                        </div>
                        {index < parts.length - 1 ? (
                            <span aria-hidden="true" className={`flex shrink-0 items-center justify-center py-1 lg:px-1 lg:py-0 ${arrow}`}>
                                <ChevronDown size={22} className="lg:hidden" />
                                <ChevronRight size={22} className="hidden lg:block" />
                            </span>
                        ) : null}
                    </li>
                ))}
            </ol>
            <p className={`mx-auto mt-8 max-w-3xl text-center text-base font-semibold leading-7 ${dark ? 'text-white' : 'text-slate-950'}`}>
                {t('controlLine')}
            </p>
        </div>
    );
};

export default ControlFlow;
