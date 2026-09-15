// InterviewMapMock.jsx — the artefact /aios-audit sells, drawn in HTML.
// Added 14 September 2026, replacing the adoption-ladder mock when Ian corrected the page at
// 17:50 Bangkok: the AIOS Audit "actually Interviews different sectors of the business to
// identify the processes and workflows to find the opportunities where AI would save them time
// and money".
//
// WHAT IT SHOWS, IN TWO HALVES, BECAUSE THE PRODUCT IS TWO THINGS
//   1. THE INTERVIEW MAP. The functions of a service business as nodes in the order work passes
//      between them, each one an hour in the diary. That is what gets interviewed, and the
//      chain is the process the audit maps.
//   2. THE RANKING. Every opportunity plotted on impact against feasibility — the Morningside
//      step 4 HLT runs — with the ones in the top right numbered, because those are the ones
//      that get done first.
//
// NOTHING HERE IS A RESULT. The nodes are the ordinary functions of a service business, not
// anybody's org chart. The plotted dots carry no labels and no savings: they are the shape of a
// ranking, not the output of one. No client, no sector, no figure.
import { Workflow } from 'lucide-react';
import MockShell, { MockChip, MockLabel } from './MockShell';

// The chain, in the order work passes along it.
const FUNCTIONS = ['Enquiries', 'Quoting', 'Jobs on site', 'Invoicing'];

// x is feasibility, y is impact, both as a percentage of the plot. The three with a rank sit in
// the top right, which is the only claim this drawing makes: easy and valuable goes first.
const OPPORTUNITIES = [
    { x: 80, y: 82, rank: '1' },
    { x: 68, y: 68, rank: '2' },
    { x: 58, y: 57, rank: '3' },
    { x: 30, y: 66 },
    { x: 40, y: 24 },
    { x: 72, y: 30 },
];

const InterviewMapMock = () => (
    <MockShell title="The interview map and the ranking" meta="sample layout" icon={Workflow}>
        <MockLabel>Who we interview, and what passes between them</MockLabel>

        {/* The chain. Each node is an hour in the diary; the connectors are the handovers where
            the work usually snags. */}
        <ul className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3">
            {FUNCTIONS.map((name, index) => (
                <li key={name} className="flex items-center gap-2">
                    <span className="rounded-xl border border-slate-300 bg-stone-100 px-3 py-2 text-xs font-bold text-slate-800 card-glass dark:text-slate-100">
                        {name}
                    </span>
                    {index < FUNCTIONS.length - 1 ? (
                        <span className="h-px w-4 bg-slate-300 dark:bg-white/25" />
                    ) : null}
                </li>
            ))}
        </ul>
        <div className="mt-3">
            <MockChip>one recorded hour each</MockChip>
        </div>

        <div className="mt-7 border-t border-slate-200 pt-6 dark:border-white/20">
            <MockLabel>Every opportunity, scored</MockLabel>

            <div className="mt-4 flex items-stretch gap-3">
                {/* The y axis, written up the side. */}
                <div className="flex w-5 items-center justify-center">
                    <span className="-rotate-90 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                        impact
                    </span>
                </div>

                <div className="flex-1">
                    <div className="relative h-44 rounded-xl border border-slate-200 bg-stone-100 card-glass">
                        {/* The quadrant lines, and the corner that matters. */}
                        <span className="absolute left-1/2 top-0 h-full w-px bg-slate-300 dark:bg-white/15" />
                        <span className="absolute left-0 top-1/2 h-px w-full bg-slate-300 dark:bg-white/15" />
                        <span className="absolute right-2 top-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                            do first
                        </span>

                        {OPPORTUNITIES.map((point) => (
                            <span
                                key={`${point.x}-${point.y}`}
                                style={{ left: `${point.x}%`, bottom: `${point.y}%` }}
                                className={`absolute -translate-x-1/2 translate-y-1/2 rounded-full ${point.rank
                                    ? 'flex h-6 w-6 items-center justify-center bg-hltNavy text-[11px] font-bold text-white dark:bg-white dark:text-hltNavy'
                                    : 'h-3 w-3 border-2 border-slate-400 bg-transparent dark:border-white/40'}`}
                            >
                                {point.rank || ''}
                            </span>
                        ))}
                    </div>
                    <p className="mt-2 text-right text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                        feasibility
                    </p>
                </div>
            </div>
        </div>
    </MockShell>
);

export default InterviewMapMock;
