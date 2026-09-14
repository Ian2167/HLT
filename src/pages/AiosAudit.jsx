// AiosAudit.jsx — /aios-audit, "AIOS Audit". Rewritten 14 September 2026 at 17:50 Bangkok on
// Ian's correction, from the page that was /ai-opportunity-audit. That path stays live as an
// alias, so nothing anybody has already opened 404s.
//
// IAN'S WORDS, VERBATIM, WHICH THIS PAGE ANSWERS
// "The AIOS Audit is still wrong. It is reading too much like the Business Read rather than the
// AIOS Audit which actually Interviews different sectors of the business to identify the
// processes and workflows to find the opportunities where AI would save them time and money."
//
// This file holds no copy. Every visible string comes from src/copy/aiosAudit.js, which is
// lifted verbatim from the verified deck at
//   C:\Projects\IWT\02-builds\executive-assistant\work\drafts\2026-09-14-HLT-AIOS-AUDIT-PAGE-COPY.md
// The layout is the shared src/components/ServicePage.jsx. All this file decides is which icons
// sit on the tier and step cards, which artefact mock the page carries, and how many of each
// block the deck holds.
//
// Counts, straight off the deck: 7 summary paragraphs, 3 tiers, 9 inclusion rows, 7 all-tier
// inclusions, 5 steps (the five the audit actually runs), 5 FAQs.
//
// THE ICONS FOLLOW THE METHOD, not the old page's: research, kickoff, the interviews, the
// scoring, the blueprint.
import { BookOpen, FileText, Handshake, Layers, Mic, Target, Users, Workflow } from 'lucide-react';
import ServicePage from '../components/ServicePage';
import { ROUTE_AIOS_AUDIT } from '../constants/routes';
import InterviewMapMock from '../components/mocks/InterviewMapMock';

const AiosAudit = () => (
    <ServicePage
        prefix="aios"
        route={ROUTE_AIOS_AUDIT}
        artefact={<InterviewMapMock />}
        paragraphs={7}
        tiers={3}
        rows={9}
        included={7}
        steps={5}
        faqs={5}
        tierIcons={[Target, Users, Layers]}
        stepIcons={[BookOpen, Handshake, Mic, Workflow, FileText]}
    />
);

export default AiosAudit;
