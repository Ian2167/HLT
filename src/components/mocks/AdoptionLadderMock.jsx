// AdoptionLadderMock.jsx — RETIRED THE SAME EVENING IT WAS BUILT, and now imported by nothing.
//
// It drew the 0 to 4 adoption ladder of the AI Opportunity Audit. Ian corrected that page at
// 17:50 Bangkok on 14 September 2026 — the service is the AIOS Audit, which interviews the
// functions of the business — so the ladder is gone from the site and
// src/components/mocks/InterviewMapMock.jsx stands in its place.
//
// WHY IT IS STILL HERE. This seat does not delete files; deleting is the caller's call at the
// merge. One line and it goes. It is flagged in the build notes and in the bridge report.
//
// The original header follows.
//
// AdoptionLadderMock.jsx — the artefact /ai-opportunity-audit sells, drawn in HTML.
// Added 14 September 2026 in the visual pass.
//
// WHAT IT SHOWS, AND WHY THESE TWO THINGS
// The deck promises exactly two artefacts on every tier: "a score against a 0 to 4 AI adoption
// ladder, with an evidence table showing how the score was reached" and "the top five
// automation candidates ranked by effort and impact". So the mock is the ladder with a marker
// on it, and the ranked five with their chips. Nothing else, because nothing else is promised.
//
// THE MARKER SITS ON 2 AND MEANS NOTHING. It is a drawing of where a marker goes, not a score
// anybody was given. The five candidates are the ordinary jobs of a service business, written
// neutrally: no client, no sector, no saving, no figure. The one thing this mock must never do
// is look like somebody's real audit.
import { Gauge } from 'lucide-react';
import MockShell, { MockChip, MockLabel } from './MockShell';

const RUNGS = [0, 1, 2, 3, 4];
const MARKER = 2;

const CANDIDATES = [
    { rank: '1', task: 'Quote follow-up', effort: 'low', impact: 'high' },
    { rank: '2', task: 'Job scheduling', effort: 'low', impact: 'high' },
    { rank: '3', task: 'Invoice chasing', effort: 'medium', impact: 'high' },
    { rank: '4', task: 'Supplier price checks', effort: 'medium', impact: 'medium' },
    { rank: '5', task: 'Monthly reporting', effort: 'high', impact: 'low' },
];

const AdoptionLadderMock = () => (
    <MockShell title="Adoption ladder and ranked candidates" meta="sample layout" icon={Gauge}>
        <MockLabel>Where you sit, 0 to 4</MockLabel>

        {/* The ladder. Five rungs of rising height; the ones at or below the marker are filled,
            the ones above are outlined, so the position reads without reading a number. */}
        <div className="mt-5 flex items-end gap-2 sm:gap-3">
            {RUNGS.map((rung) => {
                const reached = rung <= MARKER;

                return (
                    <div key={rung} className="flex flex-1 flex-col items-center gap-2">
                        <div
                            className={`w-full rounded-t-md ${reached
                                ? 'bg-hltNavy dark:bg-white'
                                : 'border border-dashed border-slate-300 bg-transparent dark:border-white/25'}`}
                            style={{ height: `${28 + rung * 16}px` }}
                        />
                        <span
                            className={`text-xs font-bold ${reached ? 'text-slate-950 dark:text-white' : 'text-slate-400 dark:text-slate-500'}`}
                        >
                            {rung}
                        </span>
                    </div>
                );
            })}
        </div>
        <div className="mt-3 flex justify-center">
            <MockChip tone="solid">you are here</MockChip>
        </div>

        <div className="mt-7 border-t border-slate-200 pt-6 dark:border-white/20">
            <MockLabel>Ranked by effort and impact</MockLabel>
            <ul className="mt-4 space-y-2.5">
                {CANDIDATES.map((candidate) => (
                    <li
                        key={candidate.rank}
                        className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-xl bg-stone-100 px-3.5 py-2.5 dark:bg-white/[0.10]"
                    >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-hltNavy text-[11px] font-bold text-white dark:bg-white dark:text-hltNavy">
                            {candidate.rank}
                        </span>
                        <span className="mr-auto text-sm font-semibold text-slate-800 dark:text-slate-100">
                            {candidate.task}
                        </span>
                        <MockChip>effort {candidate.effort}</MockChip>
                        <MockChip tone={candidate.impact === 'high' ? 'solid' : 'outline'}>
                            impact {candidate.impact}
                        </MockChip>
                    </li>
                ))}
            </ul>
        </div>
    </MockShell>
);

export default AdoptionLadderMock;
