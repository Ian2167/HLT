// TierVisuals.jsx — the two small marks the tier ladders use, on every page that has tiers.
// Added 14 September 2026 in the visual pass; lifted out of ServicePage.jsx when /business-read
// needed the same two marks and /business-read is deliberately NOT on the shared layout.
//
// Neither of these invents a string. The depth ladder has no text at all, and the cell mark is
// added BESIDE the deck's own word, never in place of it — a tick that replaced the word "Yes"
// would delete a line the copy deck carries, and the copy fixture would fail it, rightly.
import { Check, Minus } from 'lucide-react';

// Three bars of rising height, filled up to this tier, so Starter, Standard and Advanced read as
// depths at a glance rather than as three equal cards.
export const DepthLadder = ({ depth }) => (
    <span aria-hidden="true" className="flex items-end gap-1.5">
        {[1, 2, 3].map((bar) => (
            <span
                key={bar}
                style={{ height: `${8 + bar * 6}px` }}
                // Ian, 15 September 2026 09:2x Bangkok: "make the bars on the chart Icons purple
                // for added impact", then 09:3x: the purple was too faded and must match the
                // "Talk to us on LINE" button, which is bg-indigo-600 in both themes. So the
                // filled bars are indigo-600 flat, never a lighter dark-mode variant. The
                // unfilled ones stay quiet so the depth still reads as a count.
                className={`w-1.5 rounded-sm ${bar <= depth
                    ? 'bg-indigo-600'
                    : 'bg-slate-200 dark:bg-white/20'}`}
            />
        ))}
    </span>
);

// A comparison cell. "Yes" gains a tick, "No" a muted dash, everything else is left alone.
// `align` is "right" in the shared layout's tier cards, where the value is right-aligned against
// its label, and "left" in the Business Read comparison table, where it sits in a column.
export const CellValue = ({ value, align = 'right' }) => {
    const yes = /^yes/i.test(value);
    const no = /^no$/i.test(value);

    return (
        <span
            className={`inline-flex items-start gap-1.5 ${align === 'right' ? 'justify-end' : 'justify-start'} ${no ? 'text-slate-400 dark:text-slate-500' : ''}`}
        >
            {yes ? (
                <Check size={15} className="mt-1 shrink-0 text-indigo-700 dark:text-indigo-300" aria-hidden="true" />
            ) : null}
            {no ? <Minus size={15} className="mt-1 shrink-0" aria-hidden="true" /> : null}
            <span>{value}</span>
        </span>
    );
};
