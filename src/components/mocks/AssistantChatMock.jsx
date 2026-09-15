// AssistantChatMock.jsx — the artefact /executive-assistant sells, drawn in HTML.
// Added 14 September 2026 in the visual pass.
//
// WHAT IT SHOWS, AND WHY IT IS ONE EXCHANGE
// The page's whole argument is that a confident generic answer is worse than no answer, and
// that the difference is a numbered knowledge pack the answer can cite. One question and one
// cited answer show that difference; a longer conversation would show a chat app.
//
// THE CITE LINE IS THE POINT. "source: your pricing rules, section 3" is a placeholder pointing
// at a file the client owns, which is exactly what the deck promises: an assistant that answers
// from your own material and hands the question back when the evidence isn't there. The
// question and the answer are neutral. No client, no trade, no price, no promise of accuracy —
// the page's own FAQ 3 says accuracy is not guaranteed, so the mock must not imply it is.
import { MessageSquare, Quote } from 'lucide-react';
import MockShell from './MockShell';

const AssistantChatMock = () => (
    <MockShell title="Your assistant" meta="in your own account" icon={MessageSquare}>
        <div className="space-y-5">
            {/* The owner asks. */}
            <div className="flex justify-end">
                <p className="max-w-[85%] rounded-2xl rounded-br-md bg-stone-100 px-4 py-3 text-sm leading-6 text-slate-800 dark:bg-white/[0.12] dark:text-slate-100">
                    Can we discount this job?
                </p>
            </div>

            {/* The assistant answers, and says where the answer came from. */}
            <div className="flex justify-start">
                <div className="max-w-[90%]">
                    <p className="rounded-2xl rounded-bl-md bg-hltNavy px-4 py-3 text-sm leading-6 text-white dark:bg-hltNavy-lift">
                        Not below the floor for this job type. If they push, offer the shorter scope
                        instead, and say what comes out of it.
                    </p>
                    <p className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-2.5 py-1 text-[11px] font-semibold leading-5 text-slate-600 dark:border-white/25 dark:text-slate-300">
                        <Quote size={11} strokeWidth={2.4} />
                        source: your pricing rules, section 3
                    </p>
                </div>
            </div>
        </div>
    </MockShell>
);

export default AssistantChatMock;
