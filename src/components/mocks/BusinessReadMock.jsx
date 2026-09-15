// BusinessReadMock.jsx — the artefact /business-read sells, drawn in HTML.
// Added 14 September 2026 in the visual pass.
//
// WHAT IT SHOWS: the deck's own description of the deliverable, drawn. "A written read: one page
// that names the problem, then the working behind it", "everything labelled as verified or not
// established, so you never have to guess which parts were checked", and "a costed list of what
// to change next".
//
// WHY EVERY PRICE READS "THB —". The page carries real prices for the three tiers, ruled and on
// file. The COSTED NEXT STEPS inside a read are a different thing: they are whatever that
// client's next steps turn out to cost, and no figure for them exists anywhere. A drawing that
// put a number there would be inventing a quote. The brief says "THB —" where a price would sit,
// and that is exactly why.
//
// THE NAMED PROBLEM IS A PLACEHOLDER and reads as one. No client, no trade, no sum of money
// saved, and nothing that could be mistaken for a result somebody got.
import { FileText } from 'lucide-react';
import MockShell, { MockChip, MockLabel } from './MockShell';

const EVIDENCE = [
    { line: 'Time from enquiry to quote, job by job', tag: 'verified', tone: 'solid' },
    { line: 'Which days the won jobs were quoted on', tag: 'verified', tone: 'solid' },
    { line: 'Why the late ones ran late', tag: 'not established', tone: 'outline' },
];

const NEXT_STEPS = [
    'Quote at the start of the week, not the end',
    'One quote template, one owner',
    'A short weekly review of what is still open',
];

const BusinessReadMock = () => (
    <MockShell title="The written read" meta="one page" icon={FileText}>
        <MockLabel>The named problem</MockLabel>
        <p className="mt-2.5 text-sm font-semibold leading-6 text-slate-900 dark:text-white">
            Quotes go out at the end of the week, and the ones that win are the ones that went out
            first.
        </p>

        <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/20">
            <MockLabel>The evidence behind it</MockLabel>
            <ul className="mt-3 space-y-2">
                {EVIDENCE.map((item) => (
                    <li
                        key={item.line}
                        className="flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-lg bg-stone-100 px-3 py-2 text-xs card-glass"
                    >
                        <span className="mr-auto text-slate-700 dark:text-slate-200">{item.line}</span>
                        <MockChip tone={item.tone}>{item.tag}</MockChip>
                    </li>
                ))}
            </ul>
        </div>

        <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/20">
            <MockLabel>What to do next, costed</MockLabel>
            <table className="mt-3 w-full text-xs">
                <tbody>
                    {NEXT_STEPS.map((step) => (
                        <tr key={step} className="border-b border-slate-100 last:border-0 dark:border-white/20">
                            <td className="py-2.5 pr-4 text-slate-700 dark:text-slate-200">{step}</td>
                            <td className="w-20 py-2.5 text-right font-bold text-slate-900 dark:text-white">
                                THB —
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </MockShell>
);

export default BusinessReadMock;
