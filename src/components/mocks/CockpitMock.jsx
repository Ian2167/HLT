// CockpitMock.jsx — the artefact /ops-cockpit sells, drawn in HTML.
// Added 14 September 2026 in the visual pass.
//
// WHAT IT SHOWS, AND WHY IT MOVES
// The page is built on one rule, in the deck's own words: "disappear, not grey out". A still
// picture of a dashboard cannot show that rule; a row that leaves the screen can. So one row in
// the third panel finishes and goes, on a slow loop, and the panel closes up behind it. It is
// the only moving thing on the page.
//
// WHY THE QUEUE ROWS CARRY NO WORDS. A queue row would have to say what the job is, and
// inventing a client's job is exactly what a mock must not do. The rows are bars, which is what
// a queue looks like from across a room, and the panel titles are the queues the deck's own
// FAQ 1 names: "enquiries in, quotes out, jobs on site, snagging".
//
// THE STRIP AT THE TOP is the deck's promise, drawn: "an open-blockers queue at the top
// showing, per item, what you do next, what it blocks and how many minutes it costs". The two
// items are neutral, and the minutes are a placeholder shape, not a measurement of anything.
import { motion, useReducedMotion } from 'framer-motion';
import { Check, LayoutDashboard } from 'lucide-react';
import MockShell, { MockLabel } from './MockShell';

const BLOCKERS = [
    { do: 'Approve the quote', blocks: 'blocks the job start', minutes: '5 min' },
    { do: 'Pick a date for the site visit', blocks: 'blocks the week', minutes: '2 min' },
];

// Bar widths only. A queue seen from across a room is a stack of lines, not a list of names.
const PANELS = [
    { name: 'Enquiries', rows: ['85%', '60%', '72%'] },
    { name: 'Quotes out', rows: ['70%', '90%'] },
    { name: 'Jobs on site', rows: ['65%', '80%'], emptying: true },
];

const CockpitMock = () => {
    const reduceMotion = useReducedMotion();

    return (
        <MockShell title="Ops cockpit" meta="your login, your domain" icon={LayoutDashboard}>
            {/* Waiting on you: what you do, what it holds up, what it costs to clear. */}
            <div className="rounded-xl border border-hltNavy/20 bg-stone-100 p-4 card-glass">
                <MockLabel>Waiting on you</MockLabel>
                <ul className="mt-3 space-y-2">
                    {BLOCKERS.map((item) => (
                        <li
                            key={item.do}
                            className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg bg-white px-3 py-2 text-xs card-glass"
                        >
                            <span className="font-bold text-slate-900 dark:text-white">{item.do}</span>
                            <span className="text-slate-500 dark:text-slate-400">{item.blocks}</span>
                            <span className="ml-auto font-semibold text-slate-700 dark:text-slate-200">{item.minutes}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Three queues. The third one is finishing a job while you watch. */}
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {PANELS.map((panel) => (
                    <div
                        key={panel.name}
                        className="rounded-xl border border-slate-200 p-4 dark:border-white/20"
                    >
                        <p className="text-xs font-bold text-slate-900 dark:text-white">{panel.name}</p>
                        <div className="mt-3 space-y-2">
                            {panel.rows.map((width) => (
                                <span
                                    key={width}
                                    style={{ width }}
                                    className="block h-2.5 rounded-full bg-slate-200 dark:bg-white/20"
                                />
                            ))}
                            {panel.emptying ? (
                                <motion.div
                                    initial={false}
                                    animate={
                                        reduceMotion
                                            ? undefined
                                            : { opacity: [1, 1, 0, 0, 1], x: [0, 0, 28, 28, 0], height: [10, 10, 0, 0, 10] }
                                    }
                                    transition={{
                                        duration: 7,
                                        times: [0, 0.4, 0.55, 0.92, 1],
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                    className="flex items-center gap-1.5 overflow-hidden"
                                >
                                    <Check size={10} className="shrink-0 text-hltNavy dark:text-white" aria-hidden="true" />
                                    <span className="block h-2.5 w-3/4 rounded-full bg-hltNavy/30 dark:bg-white/40" />
                                </motion.div>
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>
        </MockShell>
    );
};

export default CockpitMock;
