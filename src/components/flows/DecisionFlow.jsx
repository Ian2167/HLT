// DecisionFlow.jsx — owner by exception (repositioning brief, sections 9 and 25).
//
// Routine work meets the rules and controls; a decision asks whether it is within the agreed
// rules; yes continues on its own, no becomes an exception that reaches the owner or manager,
// gets a decision, gets recorded, and the process continues. The decision is drawn as a diamond
// (a rotated square with the text held level), the two branches sit side by side from md and
// stack on a phone. Semantic order: an ordered list with the two branches as nested lists.
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Box = ({ children, tone = 'plain' }) => {
    const tones = {
        plain: 'border-slate-200 card-glass card-static text-slate-950',
        good: 'border-emerald-300 bg-emerald-50 text-emerald-900',
        warn: 'border-amber-300 bg-amber-50 text-amber-900',
        navy: 'border-hltNavy bg-hltNavy text-white',
    };
    return <div className={`w-full rounded-2xl border px-5 py-4 text-center text-base font-bold leading-6 ${tones[tone]}`}>{children}</div>;
};

const Down = ({ label }) => (
    <span aria-hidden="true" className="flex items-center justify-center gap-2 py-1 text-slate-400">
        <ChevronDown size={22} />
        {label ? <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{label}</span> : null}
    </span>
);

const DecisionFlow = () => {
    const { t } = useLanguage();

    return (
        <ol className="mx-auto flex max-w-3xl flex-col items-center">
            <li className="w-full max-w-sm">
                <Box>{t('exception1')}</Box>
                <Down />
            </li>
            <li className="w-full max-w-sm">
                <Box>{t('exception2')}</Box>
                <Down />
            </li>
            <li className="flex w-full flex-col items-center">
                {/* The diamond: a rotated square, the words rotated back. */}
                <div className="relative my-2 flex h-40 w-40 items-center justify-center sm:h-44 sm:w-44">
                    <div aria-hidden="true" className="absolute inset-3 rotate-45 rounded-xl border-2 border-indigo-500 bg-white shadow-md" />
                    <span className="relative px-6 text-center text-base font-bold leading-6 text-slate-950">{t('exceptionDecision')}</span>
                </div>
                <ol className="mt-2 grid w-full gap-6 md:grid-cols-2 md:gap-8">
                    <li className="flex flex-col items-center">
                        <Down label={t('exceptionYes')} />
                        <Box tone="good">{t('exceptionContinue')}</Box>
                    </li>
                    <li className="flex flex-col items-center">
                        <Down label={t('exceptionNo')} />
                        <Box tone="warn">{t('exceptionEscalate')}</Box>
                        <Down />
                        <Box tone="navy">{t('exceptionDecide')}</Box>
                        <Down />
                        <Box>{t('exceptionRecord')}</Box>
                        <Down />
                        <Box tone="good">{t('exceptionResume')}</Box>
                    </li>
                </ol>
            </li>
        </ol>
    );
};

export default DecisionFlow;
