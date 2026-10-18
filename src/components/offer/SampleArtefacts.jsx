// SampleArtefacts.jsx — two of the three things a client receives, shown on /examples (change 3 of
// the 18 October 2026 offer refresh, A-044). Built on an INVENTED clinic, never a client's material
// (no client's or prospect's work is used publicly without their permission).
//
//   SampleBusinessMap       the owner's goal, then each step a patient takes, scored for
//                           marketing, people and systems. A table on a laptop; on a phone each
//                           step stacks as its own card, so nothing scrolls sideways.
//   ImprovementPlanExtract  the agreed priority and its first six actions: who, when, and whether
//                           outside help is needed.
//
// Every string is in src/copy/offerRefresh1018.js; the status of each cell is data here, because it
// is the example's content, not copy.
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { fadeUp, fadeUpDelayed } from '../../lib/motion';

// The invented clinic's scores: one row per lens, one cell per step. ok / watch / fix.
const MAP_STATUS = {
    M: ['watch', 'ok', 'ok', 'watch', 'watch'],
    P: ['ok', 'fix', 'watch', 'fix', 'ok'],
    S: ['watch', 'fix', 'watch', 'fix', 'watch'],
};
const ROWS = [
    { code: 'M', key: 'mapRowMarketing' },
    { code: 'P', key: 'mapRowPeople' },
    { code: 'S', key: 'mapRowSystems' },
];
const STEPS = [1, 2, 3, 4, 5];

const STATUS_STYLE = {
    ok: { dot: 'bg-emerald-500', ring: 'border-emerald-200 bg-emerald-50', key: 'mapStatusOk' },
    watch: { dot: 'bg-amber-500', ring: 'border-amber-200 bg-amber-50', key: 'mapStatusWatch' },
    fix: { dot: 'bg-rose-500', ring: 'border-rose-200 bg-rose-50', key: 'mapStatusFix' },
};

export const ArtefactTag = ({ children }) => (
    <span className="inline-block whitespace-nowrap rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-amber-800">
        {children}
    </span>
);

// The wow pass, 18 October 2026: the cells arrive in a short ripple (step by step, 35 ms apart,
// under the stagger ceiling), and a "fix first" dot pulses so the eye lands where the plan starts.
// The pulse is CSS (motion-safe only), the ripple framer-motion under MotionConfig.
const Cell = ({ status, note, t, order = 0 }) => {
    const s = STATUS_STYLE[status];
    return (
        <motion.div {...fadeUpDelayed(order, 0.035)} className={`h-full rounded-xl border p-3 ${s.ring}`}>
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-700">
                <span aria-hidden="true" className="relative inline-flex h-2.5 w-2.5">
                    {status === 'fix' ? <span className={`absolute inset-0 rounded-full opacity-60 motion-safe:animate-ping ${s.dot}`} /> : null}
                    <span className={`relative h-2.5 w-2.5 rounded-full ${s.dot}`} />
                </span>
                {t(s.key)}
            </span>
            <span className="mt-1.5 block text-sm leading-6 text-slate-800">{note}</span>
        </motion.div>
    );
};

// Counted from the example's own data, so the summary can't drift from the map.
const countStatus = (status) => Object.values(MAP_STATUS).flat().filter((s) => s === status).length;

export const SampleBusinessMap = () => {
    const { t } = useLanguage();
    const note = (step, code) => t(`map${step}${code}`);

    return (
        <motion.article {...fadeUp} id="sample-business-map" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 card-glass sm:p-9">
            <ArtefactTag>{t('mapTag')}</ArtefactTag>
            <h3 className="mt-4 text-2xl font-bold leading-8 text-slate-950">{t('mapTitle')}</h3>
            <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">{t('mapLead')}</p>

            <div className="mt-6 rounded-xl bg-hltNavy px-5 py-4 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-200">{t('mapGoalLabel')}</p>
                <p className="mt-1 text-lg font-semibold leading-7">{t('mapGoal')}</p>
            </div>

            <ul className="mt-4 flex flex-wrap gap-2 text-sm font-semibold">
                {[
                    ['fix', 'mapSummaryFix'],
                    ['watch', 'mapSummaryWatch'],
                    ['ok', 'mapSummaryOk'],
                ].map(([status, key]) => (
                    <li key={status} className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-slate-800 ${STATUS_STYLE[status].ring}`}>
                        <span aria-hidden="true" className={`h-2 w-2 rounded-full ${STATUS_STYLE[status].dot}`} />
                        <span className="tabular-nums">{countStatus(status)}</span> {t(key)}
                    </li>
                ))}
            </ul>

            {/* Laptop and up: the map as a table, steps across, lenses down. */}
            <div className="mt-6 hidden lg:block">
                <table className="w-full table-fixed border-separate border-spacing-2 text-left">
                    <thead>
                        <tr>
                            <th className="w-28" />
                            {STEPS.map((step) => (
                                <th key={step} scope="col" className="align-bottom text-sm font-bold leading-5 text-slate-900">
                                    <span className="mr-1 text-indigo-600">{step}.</span>
                                    {t(`mapStep${step}`)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {ROWS.map((row) => (
                            <tr key={row.code}>
                                <th scope="row" className="align-top pt-3 text-sm font-bold text-slate-900">
                                    {t(row.key)}
                                </th>
                                {STEPS.map((step, i) => (
                                    <td key={step} className="align-top">
                                        <Cell status={MAP_STATUS[row.code][i]} note={note(step, row.code)} t={t} order={i * 3 + ROWS.indexOf(row)} />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Phone and tablet: one card per step, the three lenses inside it. */}
            <ol className="mt-6 space-y-4 lg:hidden">
                {STEPS.map((step, i) => (
                    <li key={step} className="rounded-xl border border-slate-200 bg-stone-50 p-4">
                        <p className="text-base font-bold text-slate-950">
                            <span className="mr-1 text-indigo-600">{step}.</span>
                            {t(`mapStep${step}`)}
                        </p>
                        <dl className="mt-3 grid gap-2 sm:grid-cols-3">
                            {ROWS.map((row) => (
                                <div key={row.code}>
                                    <dt className="mb-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{t(row.key)}</dt>
                                    <dd className="h-full">
                                        <Cell status={MAP_STATUS[row.code][i]} note={note(step, row.code)} t={t} order={i * 3 + ROWS.indexOf(row)} />
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </li>
                ))}
            </ol>

            <p className="mt-6 border-t border-slate-200 pt-5 text-sm leading-7 text-slate-600">{t('mapNote')}</p>
        </motion.article>
    );
};

export const ImprovementPlanExtract = () => {
    const { t } = useLanguage();
    const rows = [1, 2, 3, 4, 5, 6].map((n) => ({
        n,
        action: t(`plan${n}Action`),
        who: t(`plan${n}Who`),
        when: t(`plan${n}When`),
        help: t(`plan${n}Help`),
    }));

    return (
        <motion.article {...fadeUp} id="improvement-plan-extract" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 card-glass sm:p-9">
            <ArtefactTag>{t('planTag')}</ArtefactTag>
            <h3 className="mt-4 text-2xl font-bold leading-8 text-slate-950">{t('planTitle')}</h3>
            <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">{t('planLead')}</p>

            <div className="mt-6 rounded-xl border-l-4 border-indigo-600 bg-indigo-50 px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">{t('planPriorityLabel')}</p>
                <p className="mt-1 text-lg font-semibold leading-7 text-slate-950">{t('planPriority')}</p>
            </div>

            <div className="mt-6 hidden md:block">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-slate-200 text-xs uppercase tracking-[0.12em] text-slate-500">
                            <th className="w-8 py-3 pr-2" />
                            <th className="py-3 pr-4">{t('planColAction')}</th>
                            <th className="py-3 pr-4">{t('planColWho')}</th>
                            <th className="py-3 pr-4">{t('planColWhen')}</th>
                            <th className="py-3">{t('planColHelp')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.n} className="border-b border-slate-100 last:border-0">
                                <td className="py-3 pr-2 align-top font-bold text-indigo-600">{row.n}</td>
                                <td className="py-3 pr-4 align-top font-semibold leading-6 text-slate-900">{row.action}</td>
                                <td className="py-3 pr-4 align-top leading-6 text-slate-700">{row.who}</td>
                                <td className="whitespace-nowrap py-3 pr-4 align-top leading-6 text-slate-700">{row.when}</td>
                                <td className="py-3 align-top leading-6 text-slate-700">{row.help}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ol className="mt-6 space-y-3 md:hidden">
                {rows.map((row) => (
                    <li key={row.n} className="rounded-xl border border-slate-200 bg-stone-50 p-4">
                        <p className="font-semibold leading-6 text-slate-900">
                            <span className="mr-1 text-indigo-600">{row.n}.</span>
                            {row.action}
                        </p>
                        <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm leading-6">
                            <dt className="font-bold text-slate-500">{t('planColWho')}</dt>
                            <dd className="text-slate-700">{row.who}</dd>
                            <dt className="font-bold text-slate-500">{t('planColWhen')}</dt>
                            <dd className="text-slate-700">{row.when}</dd>
                            <dt className="font-bold text-slate-500">{t('planColHelp')}</dt>
                            <dd className="text-slate-700">{row.help}</dd>
                        </dl>
                    </li>
                ))}
            </ol>

            <p className="mt-6 border-t border-slate-200 pt-5 text-sm leading-7 text-slate-600">{t('planNote')}</p>
        </motion.article>
    );
};
