// ProcessFlow.jsx — the HLT method, as a flow (repositioning brief, sections 7 and 25).
//
// Six steps in reading order, as an ordered list, so a screen reader and a crawler get the
// sequence without the arrows. On a phone the steps stack with a short connector between them;
// from lg they run across in one row with an arrow glyph between. Beneath the whole flow, the seven
// things a control might turn out to be, as chips. No raster, no text in images.
//
// 18 OCTOBER 2026, Ian on the preview: "I really don't understand why you've got item [four]
// different than any of the others. There should be no reason for anything to hang beneath that
// one and it should just be the same but all buttons ... should be consistent and probably have a
// change when they are in Hover state." So every step is the same card, step four included, and
// the options panel belongs to the flow as a whole, not to one step. Steps and chips share one
// hover change (.flow-card and .flow-chip in src/index.css), on devices that can hover only.
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const ProcessFlow = () => {
    const { t } = useLanguage();
    const steps = [1, 2, 3, 4, 5, 6].map((n) => t(`method${n}`));
    const branches = [1, 2, 3, 4, 5, 6, 7].map((n) => t(`methodBranch${n}`));

    return (
        <div>
            <ol className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-stretch lg:gap-0">
                {steps.map((step, index) => (
                    <li key={step} className="flex flex-col items-center lg:flex-1 lg:flex-row">
                        <div className="flow-card w-full rounded-2xl border border-sand-300 bg-white p-5 text-center shadow-sm lg:flex lg:h-40 lg:flex-col lg:items-center lg:justify-center">
                            <span className="flow-badge mx-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-hltNavy text-xs font-bold text-saffron-300">
                                {index + 1}
                            </span>
                            <span className="mt-2 block text-base font-bold leading-6 text-slate-950">{step}</span>
                        </div>
                        {index < steps.length - 1 ? (
                            <span aria-hidden="true" className="flex shrink-0 items-center justify-center py-1 text-saffron-500 lg:px-1 lg:py-0">
                                <ChevronDown size={22} className="lg:hidden" />
                                <ChevronRight size={22} className="hidden lg:block" />
                            </span>
                        ) : null}
                    </li>
                ))}
            </ol>

            <div className="mt-8 rounded-2xl bg-sand-100 p-5 text-center">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-saffron-700">{t('methodBranchesLabel')}</p>
                <ul className="mt-3 flex flex-wrap justify-center gap-2">
                    {branches.map((branch) => (
                        <li key={branch} className="flow-chip rounded-full border border-sand-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800">
                            {branch}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProcessFlow;
