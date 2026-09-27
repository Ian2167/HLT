// BusinessReadMock.jsx — the artefact /business-read sells, drawn in HTML.
// Added 14 September 2026 in the visual pass. REWRITTEN 27 September 2026 on Ian's "Go proceed
// with Fix" and his new direction (keep, transfer, remove).
//
// WHAT CHANGED, AND WHY. The 14 September mock was hard-coded English on a Thai-first site, and
// its example came from the construction world (quotes going out late), not owner dependence.
// Its three costed next steps read "THB —", which looked unfinished. Now every string comes
// through t() from src/copy/newDirection.js (the 27 September pack), in both languages; the
// example is owner dependence; and the next steps are SORTED keep, transfer, remove rather than
// priced, which is the new direction's own method and needs no invented figure.
//
// THE NAMED PROBLEM IS STILL A PLACEHOLDER and reads as one. No client, no trade, no figure, and
// nothing that could be mistaken for a result somebody got.
import { FileText } from 'lucide-react';
import MockShell, { MockChip, MockLabel } from './MockShell';
import { useLanguage } from '../../context/LanguageContext';

const BusinessReadMock = () => {
    const { t } = useLanguage();

    const evidence = [
        { line: t('brMockEv1'), tag: t('brMockVerified'), tone: 'solid' },
        { line: t('brMockEv2'), tag: t('brMockVerified'), tone: 'solid' },
        { line: t('brMockEv3'), tag: t('brMockNotEstablished'), tone: 'outline' },
    ];

    // Keep is the settled, solid chip: it's the part that stays with the owner.
    const nextSteps = [
        { step: t('brMockNext1'), tag: t('brMockTagRemove'), tone: 'outline' },
        { step: t('brMockNext2'), tag: t('brMockTagTransfer'), tone: 'outline' },
        { step: t('brMockNext3'), tag: t('brMockTagKeep'), tone: 'solid' },
    ];

    return (
        <MockShell title={t('brMockTitle')} meta={t('brMockMeta')} icon={FileText}>
            <MockLabel>{t('brMockProblemLabel')}</MockLabel>
            <p className="mt-2.5 text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                {t('brMockProblem')}
            </p>

            <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/20">
                <MockLabel>{t('brMockEvidenceLabel')}</MockLabel>
                <ul className="mt-3 space-y-2">
                    {evidence.map((item) => (
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
                <MockLabel>{t('brMockNextLabel')}</MockLabel>
                <table className="mt-3 w-full text-xs">
                    <tbody>
                        {nextSteps.map((item) => (
                            <tr key={item.step} className="border-b border-slate-100 last:border-0 dark:border-white/20">
                                <td className="py-2.5 pr-4 text-slate-700 dark:text-slate-200">{item.step}</td>
                                <td className="w-24 py-2.5 text-right">
                                    <MockChip tone={item.tone}>{item.tag}</MockChip>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </MockShell>
    );
};

export default BusinessReadMock;
