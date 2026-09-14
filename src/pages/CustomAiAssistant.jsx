// CustomAiAssistant.jsx — /custom-ai-assistant. Built 14 September 2026.
//
// No copy lives here. Every visible string comes from src/copy/customAiAssistant.js, lifted
// verbatim from
//   C:\Projects\IWT\02-builds\executive-assistant\work\drafts\2026-09-14-HLT-CUSTOM-AI-ASSISTANT-PAGE-COPY.md
// Layout is the shared src/components/ServicePage.jsx.
//
// Counts, straight off the deck: 7 summary paragraphs, 3 tiers, 11 inclusion rows (the PC3 tier
// table with the price row removed), 4 all-tier inclusions, 5 steps, 5 FAQs.
import { ClipboardList, FileText, MapPin, MessageCircle, MessageSquare, Package, ShieldCheck, Sparkles } from 'lucide-react';
import ServicePage from '../components/ServicePage';

const CustomAiAssistant = () => (
    <ServicePage
        prefix="caa"
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

export default CustomAiAssistant;
