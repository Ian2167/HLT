// MockShell.jsx — the frame every code-drawn artefact mock sits in.
// Added 14 September 2026 in the visual pass (Ian, 17:42 Bangkok: "please add visuals to
// improve"). One frame for all five, so a visitor who sees the read card on /business-read
// recognises the cockpit on /ops-cockpit as the same firm's work.
//
// WHAT A MOCK MAY AND MAY NOT SAY. Every string inside one of these frames is either a line the
// page's own copy deck already carries or a NEUTRAL PLACEHOLDER. Never a client name, never a
// testimonial, never a figure presented as a result, and "THB —" wherever a price would sit,
// because no THB figure is ruled for four of the five services.
//
// WHY THE ROOT CARRIES data-visual AND aria-hidden.
//   data-visual  the copy fixture skips the subtree in its reverse check and PRINTS every
//                string it skipped, so the placeholders are listed rather than smuggled past
//                it. See the header of src/assets/brand/hlt-logo-v2/verify-page-copy.mjs.
//   aria-hidden  a screen reader gets the section's real copy, which sits beside the mock and
//                says the same thing in words. Reading a drawing of a dashboard aloud helps
//                nobody.
//
// Both grounds: white card on the light page, a four per cent white lift on #0A1F44 in dark
// mode, and the title bar is the card navy in light and the navy lift in dark so it keeps an
// edge against the page behind it.
const MockShell = ({ title, meta, icon: Icon, children, className = '' }) => (
    <div
        data-visual="mock"
        aria-hidden="true"
        className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-950/5 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20 ${className}`}
    >
        <div className="flex items-center gap-2.5 bg-hltNavy px-5 py-3 text-white dark:bg-hltNavy-lift">
            {Icon ? <Icon size={15} strokeWidth={2.2} /> : null}
            <span className="text-xs font-bold tracking-wide">{title}</span>
            {meta ? <span className="ml-auto text-[11px] font-medium text-slate-300">{meta}</span> : null}
        </div>
        <div className="p-5 sm:p-7">{children}</div>
    </div>
);

// A section label inside a mock: small, uppercase, quiet.
export const MockLabel = ({ children, className = '' }) => (
    <p className={`text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400 ${className}`}>
        {children}
    </p>
);

// A chip. `tone="solid"` is the navy chip used where a thing is settled; `tone="outline"` is the
// quiet one used where it is not. Two tones of the site's own navy, so no new colour enters.
export const MockChip = ({ children, tone = 'outline', className = '' }) => {
    const tones = {
        solid: 'bg-hltNavy text-white dark:bg-white dark:text-hltNavy',
        outline: 'border border-slate-300 text-slate-600 dark:border-white/25 dark:text-slate-300',
    };

    return (
        <span
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold leading-5 ${tones[tone]} ${className}`}
        >
            {children}
        </span>
    );
};

export default MockShell;
