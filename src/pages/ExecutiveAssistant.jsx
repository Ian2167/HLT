// ExecutiveAssistant.jsx — /executive-assistant. Built 14 September 2026, renamed the same
// afternoon on Ian's ruling at 16:27 Bangkok. /custom-ai-assistant stays live as an alias.
//
// No copy lives here. Every visible string comes from src/copy/executiveAssistant.js, lifted
// verbatim from
//   C:\Projects\IWT\02-builds\executive-assistant\work\drafts\2026-09-14-HLT-EXECUTIVE-ASSISTANT-PAGE-COPY.md
// Layout is the shared src/components/ServicePage.jsx.
//
// Counts, straight off the deck: 7 summary paragraphs, 3 tiers, 11 inclusion rows (the PC3 tier
// table with the price row removed), 4 all-tier inclusions, 5 steps, 5 FAQs.
//
// THE VISUAL PASS, 14 September 2026: this page passes ONE artefact mock, a chat window with a
// single question and a single CITED answer. The cite line is the product; a longer
// conversation would only show a chat app.
import { ClipboardList, FileText, MapPin, MessageCircle, MessageSquare, Package, ShieldCheck, Sparkles } from 'lucide-react';
import ServicePage from '../components/ServicePage';
import AssistantChatMock from '../components/mocks/AssistantChatMock';

const ExecutiveAssistant = () => (
    <ServicePage
        prefix="caa"
        artefact={<AssistantChatMock />}
        paragraphs={7}
        tiers={3}
        rows={11}
        included={4}
        steps={5}
        faqs={5}
        tierIcons={[Package, MessageSquare, ShieldCheck]}
        stepIcons={[ClipboardList, MapPin, FileText, Sparkles, MessageCircle]}
    />
);

export default ExecutiveAssistant;
