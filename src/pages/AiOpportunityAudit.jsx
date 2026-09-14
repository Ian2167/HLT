// AiOpportunityAudit.jsx — /ai-opportunity-audit. Built 14 September 2026.
//
// This file holds no copy. Every visible string comes from src/copy/aiOpportunityAudit.js,
// which is lifted verbatim from the verified deck at
//   C:\Projects\IWT\02-builds\executive-assistant\work\drafts\2026-09-14-HLT-AI-OPPORTUNITY-AUDIT-PAGE-COPY.md
// The layout is the shared src/components/ServicePage.jsx. All this file decides is which
// icons sit on the tier and step cards, and how many of each block the deck carries.
//
// Counts, straight off the deck: 7 summary paragraphs, 3 tiers, 9 inclusion rows (the PC1 tier
// table with the price row removed), 6 all-tier inclusions, 5 steps, 5 FAQs.
//
// THE VISUAL PASS, 14 September 2026: this page passes ONE artefact mock, the adoption ladder
// with the ranked five. It is the drawing of the two things the deck promises on every tier,
// and it invents no score and no saving. Everything else it gained — the timeline, the depth
// ladder on the tier cards, the ticks — came from the shared layout.
import { ClipboardList, FileText, Gauge, Layers, ListOrdered, Mic } from 'lucide-react';
import ServicePage from '../components/ServicePage';
import AdoptionLadderMock from '../components/mocks/AdoptionLadderMock';

const AiOpportunityAudit = () => (
    <ServicePage
        prefix="aoa"
        artefact={<AdoptionLadderMock />}
        paragraphs={7}
        tiers={3}
        rows={9}
        included={6}
        steps={5}
        faqs={5}
        tierIcons={[Gauge, ListOrdered, Layers]}
        stepIcons={[ClipboardList, Mic, Gauge, ListOrdered, FileText]}
    />
);

export default AiOpportunityAudit;
