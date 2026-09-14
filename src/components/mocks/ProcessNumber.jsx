// ProcessNumber.jsx — the one numbered-step badge the whole site uses.
// Added 14 September 2026 in the visual pass, on Ian's words at 17:46 Bangkok: "Can we add
// numbered steps so it feels like a process."
//
// ONE BADGE, TWO PLACES, SO THE SITE HAS ONE PROCESS LANGUAGE
// The home page's "How we work" beats and every service page's "How it runs" timeline render
// the same badge at the same weight, so a visitor who reads the home page recognises the
// pattern on the page he clicks into.
//
// WHY THE `decorative` PROP EXISTS, AND IT IS NOT COSMETIC
// On a service page the numeral is COPY: the deck's step line reads "1. Intake. You send
// screenshots...", and the copy fixture rebuilds that line by joining the badge to the lead and
// the body. Mark it decorative there and the fixture would correctly fail, because the deck
// line would no longer render in full.
// On the home page no deck line carries a numeral — the three beats are lead and body only — so
// the 1, 2, 3 are a visual device this pass added, and they are marked `data-visual` and listed
// as MOCK STRINGS by the fixture rather than smuggled past the reverse check.
//
// Contrast, both grounds: navy tile with white numeral on the light ground, white tile with the
// navy numeral on #0A1F44. Both are the site's own two colours, so nothing new was introduced.
const SIZES = {
    // The home page's beats: the numeral is the dominant element of the step, as Ian asked.
    lg: 'h-16 w-16 rounded-2xl text-3xl',
    // The service-page timeline: large enough to read as the same badge, small enough that a
    // five-step column stays calm.
    md: 'h-14 w-14 rounded-2xl text-2xl',
};

const ProcessNumber = ({ label, size = 'md', decorative = false }) => {
    const marks = decorative ? { 'data-visual': 'process-number', 'aria-hidden': 'true' } : {};

    return (
        <span
            {...marks}
            className={`relative z-10 flex shrink-0 items-center justify-center bg-hltNavy font-bold leading-none text-white shadow-sm dark:bg-white dark:text-hltNavy ${SIZES[size]}`}
        >
            {label}
        </span>
    );
};

export default ProcessNumber;
