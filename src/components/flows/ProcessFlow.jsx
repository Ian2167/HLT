// ProcessFlow.jsx — the HLT method, as a flow (repositioning brief, sections 7 and 25).
//
// Six steps in reading order, as an ordered list, so a screen reader and a crawler get the
// sequence without the arrows. On a phone the steps stack with a short connector between them;
// from lg they run across in one row with an arrow glyph between. Step four, "Define the Required
// Control", carries the seven things the control might turn out to be, as chips, labelled so they
// read as options rather than stages. No raster, no text in images, no animation.
//
// 18 OCTOBER 2026, Ian on the preview: "Why ... does only item 4 have a blue [frame] ... and all
// others are just white". He was right that it didn't read: the highlight on step four pointed at
// the options box, but on a phone that box sat after step six, two screens away. Now:
//   - on a phone the options sit directly under step four, joined to it, before step five;
//   - on a laptop they sit beneath the row with a "4" badge matching the highlighted step;
//   - every step carries its number in a saffron badge, and step four's highlight is saffron
//     (direction A), so it reads as "this step opens up" rather than a stray blue box.
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const CHOICE_STEP = 3; // zero-based: step four

const Options = ({ t, branches, attached = false }) => (
    <div
        className={`rounded-2xl border-2 border-dashed border-saffron-400 bg-sand-100 p-5 text-center ${
            attached ? 'mt-0 w-full rounded-t-none border-t-0' : ''
        }`}
    >
        <p className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-saffron-700">
            <span aria-hidden="true" className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-saffron-500 text-xs text-hltNavy">
                4
            </span>
            {t('methodBranchesLabel')}
        </p>
        <ul className="mt-3 flex flex-wrap justify-center gap-2">
            {branches.map((branch) => (
                <li key={branch} className="rounded-full border border-sand-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800">
                    {branch}
                </li>
            ))}
        </ul>
    </div>
);

const ProcessFlow = () => {
    const { t } = useLanguage();
    const steps = [1, 2, 3, 4, 5, 6].map((n) => t(`method${n}`));
    const branches = [1, 2, 3, 4, 5, 6, 7].map((n) => t(`methodBranch${n}`));

    return (
        <div>
            <ol className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-start lg:gap-0">
                {steps.map((step, index) => {
                    const choice = index === CHOICE_STEP;
                    return (
                        <li key={step} className="flex flex-col items-center lg:flex-1 lg:flex-row">
                            <div className="w-full">
                                <div
                                    className={`w-full border bg-white p-5 text-center shadow-sm lg:flex lg:h-40 lg:flex-col lg:items-center lg:justify-center ${
                                        choice
                                            ? 'rounded-2xl border-2 border-saffron-500 max-lg:rounded-b-none'
                                            : 'rounded-2xl border-sand-300'
                                    }`}
                                >
                                    <span
                                        className={`mx-auto inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                                            choice ? 'bg-saffron-500 text-hltNavy' : 'bg-hltNavy text-saffron-300'
                                        }`}
                                    >
                                        {index + 1}
                                    </span>
                                    <span className="mt-2 block text-base font-bold leading-6 text-slate-950">{step}</span>
                                </div>
                                {/* On a phone the options belong right here, under their step. */}
                                {choice ? (
                                    <div className="lg:hidden">
                                        <Options t={t} branches={branches} attached />
                                    </div>
                                ) : null}
                            </div>
                            {index < steps.length - 1 ? (
                                <span aria-hidden="true" className="flex shrink-0 items-center justify-center py-1 text-saffron-500 lg:px-1 lg:py-0 lg:pt-10">
                                    <ChevronDown size={22} className="lg:hidden" />
                                    <ChevronRight size={22} className="hidden lg:block" />
                                </span>
                            ) : null}
                        </li>
                    );
                })}
            </ol>
            {/* On a laptop, beneath the row, badged with the step it belongs to. */}
            <div className="mt-8 hidden lg:block">
                <Options t={t} branches={branches} />
            </div>
        </div>
    );
};

export default ProcessFlow;
