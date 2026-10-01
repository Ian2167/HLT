// ProcessFlow.jsx — the HLT method, as a flow (repositioning brief, sections 7 and 25).
//
// Six steps in reading order, as an ordered list, so a screen reader and a crawler get the
// sequence without the arrows. On a phone the steps stack with a short connector between them;
// from lg they run across in one row with an arrow glyph between. Beneath step four, the seven
// things the control might turn out to be, as chips, labelled so they read as options rather than
// stages. No raster, no text in images, no animation.
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const ProcessFlow = () => {
    const { t } = useLanguage();
    const steps = [1, 2, 3, 4, 5, 6].map((n) => t(`method${n}`));
    const branches = [1, 2, 3, 4, 5, 6, 7].map((n) => t(`methodBranch${n}`));

    return (
        <div>
            <ol className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-start lg:gap-0">
                {steps.map((step, index) => (
                    <li key={step} className="flex flex-col items-center lg:flex-1 lg:flex-row">
                        <div
                            className={`w-full rounded-2xl border p-5 text-center card-glass card-static lg:min-h-[7.5rem] lg:flex lg:items-center lg:justify-center ${
                                index === 3 ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-slate-200'
                            }`}
                        >
                            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">{index + 1}</span>
                            <span className="mt-1 block text-base font-bold leading-6 text-slate-950">{step}</span>
                        </div>
                        {index < steps.length - 1 ? (
                            <span aria-hidden="true" className="flex shrink-0 items-center justify-center py-1 text-slate-400 lg:px-1 lg:py-0 lg:pt-10">
                                <ChevronDown size={22} className="lg:hidden" />
                                <ChevronRight size={22} className="hidden lg:block" />
                            </span>
                        ) : null}
                    </li>
                ))}
            </ol>

            {/* The possible controls, under the flow; the ring on step four says which step they
                belong to. Options, not stages. */}
            <div className="mt-8 rounded-2xl border border-dashed border-indigo-300 bg-indigo-50/60 p-5 text-center">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">{t('methodBranchesLabel')}</p>
                <ul className="mt-3 flex flex-wrap justify-center gap-2">
                    {branches.map((branch) => (
                        <li key={branch} className="rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800">
                            {branch}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProcessFlow;
