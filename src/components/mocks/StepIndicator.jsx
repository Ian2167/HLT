// StepIndicator.jsx — "Step 2 of 5", with the rung below and the rung above.
// Added 14 September 2026 on Ian's ruling at 18:10 Bangkok: "The 5 different elements should
// naturally stack on each other starting with the Business Read."
//
// WHAT IT IS FOR. A visitor who lands on one service page from a search has no way of knowing
// the five are a sequence. This tells him where he is and what comes either side, in one strip
// under the hero, and the links let him walk the ladder without going back to the header.
//
// WHERE THE WORDS COME FROM. The two link labels are service TITLES, read from the same
// translation keys the header and the home page read, each one already gated on its own page's
// copy deck. Nothing here is new copy. "Step n of 5" is the one phrase this component adds, and
// it is a position, not a claim.
//
// WHY THE WHOLE STRIP IS data-visual. The copy fixture proves a page renders its own deck and
// nothing else. Another service's title is not in THIS page's deck, so without the mark the
// fixture would fail the strip — correctly, on its own terms. Marked, every string in it is
// PRINTED by the fixture instead, which is the receipt. The order it walks lives in one array,
// src/constants/routes.js.
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { ladderPosition } from '../../constants/routes';

const LINK_CLASSES =
    'inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-500 hover:text-slate-950 dark:border-white/20 dark:text-slate-300 dark:hover:border-white/50 dark:hover:text-white';

const StepIndicator = ({ route }) => {
    const { t } = useLanguage();
    const position = ladderPosition(route);

    if (!position) return null;

    return (
        <div
            data-visual="step-indicator"
            className="border-b border-slate-200 bg-stone-50 px-5 py-4 dark:border-white/10 dark:bg-white/[0.02] sm:px-6 lg:px-8"
        >
            <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-3">
                <span className="rounded-full bg-hltNavy px-3 py-1.5 text-xs font-bold text-white dark:bg-white dark:text-hltNavy">
                    {`Step ${position.step} of ${position.total}`}
                </span>

                <span className="ml-auto flex flex-wrap items-center gap-2">
                    {position.previous ? (
                        <Link to={position.previous.to} className={LINK_CLASSES}>
                            <ArrowLeft size={13} aria-hidden="true" />
                            {t(position.previous.labelKey)}
                        </Link>
                    ) : null}
                    {position.next ? (
                        <Link to={position.next.to} className={LINK_CLASSES}>
                            {t(position.next.labelKey)}
                            <ArrowRight size={13} aria-hidden="true" />
                        </Link>
                    ) : null}
                </span>
            </div>
        </div>
    );
};

export default StepIndicator;
