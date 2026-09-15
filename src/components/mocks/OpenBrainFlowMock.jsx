// OpenBrainFlowMock.jsx — the artefact /openbrain sells, drawn in HTML.
// Added 14 September 2026 in the visual pass.
//
// WHAT IT SHOWS: the deck's own sentence, drawn. "Your own material, your policies, product
// facts, past decisions, pricing rules and the way you talk, is broken into indexed, retrievable
// chunks", and an assistant then answers from it. Three columns, two arrows, nothing else.
//
// WHAT IT DELIBERATELY DOES NOT SHOW. No vendor, no table name, no architecture. The page names
// none, because its source marks that detail as unverified against the live system, and a
// drawing is not allowed to claim what the words would not.
import { ArrowDown, ArrowRight, FileText, Library } from 'lucide-react';
import MockShell, { MockChip, MockLabel } from './MockShell';

const MATERIAL = ['Pricing rules', 'Past decisions', 'Product facts'];

// The chunk grid: nine tiles, the ones that answered this question filled. A drawing of an
// index, with no claim about how many chunks anybody's material makes.
const CHUNKS = [true, false, true, false, true, false, false, true, false];

const Arrow = () => (
    <div className="flex items-center justify-center text-slate-400 dark:text-slate-500" aria-hidden="true">
        <ArrowDown size={18} className="md:hidden" />
        <ArrowRight size={18} className="hidden md:block" />
    </div>
);

const OpenBrainFlowMock = () => (
    <MockShell title="From your material to an answer" meta="sample layout" icon={Library}>
        <div className="grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {/* 1. What the business already knows. */}
            <div className="rounded-xl border border-slate-200 p-4 dark:border-white/20">
                <MockLabel>Your material</MockLabel>
                <ul className="mt-3 space-y-2">
                    {MATERIAL.map((item) => (
                        <li
                            key={item}
                            className="flex items-center gap-2 rounded-lg bg-stone-100 px-2.5 py-2 text-xs font-semibold text-slate-700 card-glass dark:text-slate-200"
                        >
                            <FileText size={13} className="shrink-0 text-slate-500 dark:text-slate-400" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <Arrow />

            {/* 2. The index. */}
            <div className="rounded-xl border border-slate-200 p-4 dark:border-white/20">
                <MockLabel>Indexed chunks</MockLabel>
                <div className="mt-3 grid grid-cols-3 gap-2">
                    {CHUNKS.map((filled, i) => (
                        <span
                            key={i}
                            className={`h-7 rounded-md ${filled
                                ? 'bg-hltNavy dark:bg-white'
                                : 'bg-stone-100 card-glass'}`}
                        />
                    ))}
                </div>
            </div>

            <Arrow />

            {/* 3. The answer, and where it came from. */}
            <div className="rounded-xl border border-slate-200 p-4 dark:border-white/20">
                <MockLabel>The answer</MockLabel>
                <div className="mt-3 space-y-2 rounded-lg bg-stone-100 p-3 card-glass">
                    <span className="block h-2 w-full rounded-full bg-slate-300 dark:bg-white/30" />
                    <span className="block h-2 w-11/12 rounded-full bg-slate-300 dark:bg-white/30" />
                    <span className="block h-2 w-3/5 rounded-full bg-slate-300 dark:bg-white/30" />
                </div>
                <div className="mt-3">
                    <MockChip>from your own material</MockChip>
                </div>
            </div>
        </div>
    </MockShell>
);

export default OpenBrainFlowMock;
