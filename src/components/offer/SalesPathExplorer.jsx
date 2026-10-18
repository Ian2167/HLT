// SalesPathExplorer.jsx — change 4 of the 18 October 2026 offer refresh (A-044): two illustrated
// commercial paths, step by step, on /examples. Ian's two, in his order:
//   a clinic              finding the right service, making contact, arranging an appointment,
//                         reception handover
//   a fragrance supplier  hotel enquiry, sample or trial, quotation, supply, repeat orders
// Each step shows what we look at and where it often slips. Illustrations only: they show what HLT
// can investigate and improve, and promise no functionality that isn't built.
//
// HOW IT BEHAVES. Two tabs (arrow keys move between them, per the WAI tabs pattern). Within a tab
// the steps are a numbered row; choosing one shows its detail. On the prerendered page the clinic
// tab and its first step are open, and every step name is in the markup.
import { useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArtefactTag } from './SampleArtefacts';

const PATHS = {
    clinic: { tabKey: 'jrTabClinic', prefix: 'jrC', steps: [1, 2, 3, 4] },
    supplier: { tabKey: 'jrTabSupplier', prefix: 'jrF', steps: [1, 2, 3, 4, 5] },
};
const ORDER = ['clinic', 'supplier'];

const SalesPathExplorer = () => {
    const { t } = useLanguage();
    const [path, setPath] = useState('clinic');
    const [step, setStep] = useState(1);
    const tabRefs = useRef({});
    const current = PATHS[path];

    const choosePath = (key) => {
        setPath(key);
        setStep(1);
    };
    const onTabKey = (event) => {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
        const next = ORDER[(ORDER.indexOf(path) + (event.key === 'ArrowRight' ? 1 : ORDER.length - 1)) % ORDER.length];
        choosePath(next);
        tabRefs.current[next]?.focus();
    };

    const k = (n, suffix = '') => t(`${current.prefix}${n}${suffix}`);

    return (
        <section id="sales-path" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 card-glass sm:p-9">
            <ArtefactTag>{t('receiveTagExample')}</ArtefactTag>
            <h2 className="mt-4 text-2xl font-bold leading-8 text-slate-950 sm:text-3xl">{t('jrHeading')}</h2>
            <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">{t('jrLead')}</p>

            <div role="tablist" aria-label={t('jrHeading')} className="mt-6 inline-flex flex-wrap gap-1 rounded-xl bg-slate-100 p-1" onKeyDown={onTabKey}>
                {ORDER.map((key) => (
                    <button
                        key={key}
                        ref={(el) => (tabRefs.current[key] = el)}
                        type="button"
                        role="tab"
                        id={`path-tab-${key}`}
                        aria-selected={path === key}
                        aria-controls={`path-panel-${key}`}
                        tabIndex={path === key ? 0 : -1}
                        onClick={() => choosePath(key)}
                        className={`press rounded-lg px-4 py-2 text-sm font-bold ${
                            path === key ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        {t(PATHS[key].tabKey)}
                    </button>
                ))}
            </div>

            <div role="tabpanel" id={`path-panel-${path}`} aria-labelledby={`path-tab-${path}`} className="mt-6">
                {/* The wow pass, 18 October 2026: a rail that fills to the chosen step, so the
                    visitor sees how far along the sale they are looking. Transform only. */}
                <div aria-hidden="true" className="mb-3 h-1.5 overflow-hidden rounded-full bg-slate-200">
                    <div
                        className="h-full origin-left rounded-full bg-gradient-to-r from-indigo-600 to-rose-500 transition-transform duration-300"
                        style={{ transform: `scaleX(${step / current.steps.length})`, transitionTimingFunction: 'var(--ease-out-strong)' }}
                    />
                </div>
                <ol className={`grid gap-2 ${current.steps.length === 5 ? 'sm:grid-cols-5' : 'sm:grid-cols-4'}`}>
                    {current.steps.map((n) => (
                        <li key={n} className="relative">
                            <button
                                type="button"
                                onClick={() => setStep(n)}
                                aria-pressed={step === n}
                                className={`press flex h-full w-full items-start gap-2 rounded-xl border px-3 py-3 text-left text-sm font-bold leading-5 ${
                                    step === n ? 'border-indigo-600 bg-indigo-50 text-indigo-900' : 'border-slate-200 bg-stone-50 text-slate-800 hover:border-indigo-300'
                                }`}
                            >
                                <span
                                    className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs ${
                                        step === n ? 'bg-indigo-600 text-white' : 'bg-white text-slate-700 ring-1 ring-slate-300'
                                    }`}
                                >
                                    {n}
                                </span>
                                {k(n)}
                            </button>
                        </li>
                    ))}
                </ol>

                <div key={`${path}-${step}`} aria-live="polite" className="mt-5 grid gap-4 motion-safe:animate-[fadeIn_220ms_ease-out] md:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 bg-stone-50 p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{t('jrLookLabel')}</p>
                        <p className="mt-2 text-base leading-7 text-slate-800">{k(step, 'Look')}</p>
                    </div>
                    <div className="rounded-xl border border-rose-200 bg-rose-50 p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-rose-700">{t('jrSlipLabel')}</p>
                        <p className="mt-2 text-base leading-7 text-slate-800">{k(step, 'Slip')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SalesPathExplorer;
