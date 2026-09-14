// BrandOs.jsx — /brand-os. Built 14 September 2026.
//
// No copy lives here. Every visible string comes from src/copy/brandOs.js, lifted verbatim from
//   C:\Projects\IWT\02-builds\executive-assistant\work\drafts\2026-09-14-HLT-BRAND-OS-PAGE-COPY.md
// Layout is the shared src/components/ServicePage.jsx.
//
// Counts, straight off the deck: 7 summary paragraphs, 3 tiers, 10 inclusion rows (the PC2 tier
// table with the price row removed), 6 all-tier inclusions, 5 steps, and FOUR FAQs, because PC2
// carries four and nothing was invented to reach five.
import { BookOpen, Layers, Palette, PenTool, Type, Users } from 'lucide-react';
import ServicePage from '../components/ServicePage';

const BrandOs = () => (
    <ServicePage
        prefix="bos"
        paragraphs={7}
        tiers={3}
        rows={10}
        included={6}
        steps={5}
        faqs={4}
        tierIcons={[BookOpen, Palette, Layers]}
        stepIcons={[Type, Users, Palette, PenTool, BookOpen]}
    />
);

export default BrandOs;
