// OpsCockpit.jsx — /ops-cockpit. Built 14 September 2026.
//
// No copy lives here. Every visible string comes from src/copy/opsCockpit.js, lifted verbatim
// from
//   C:\Projects\IWT\02-builds\executive-assistant\work\drafts\2026-09-14-HLT-OPS-COCKPIT-PAGE-COPY.md
// Layout is the shared src/components/ServicePage.jsx.
//
// Counts, straight off the deck: 6 summary paragraphs, 3 tiers, 10 inclusion rows (the PC4 tier
// table with the price row removed), 8 all-tier inclusions, 5 steps, 5 FAQs.
import { ClipboardCheck, Database, LayoutDashboard, ListOrdered, Rocket, ShieldCheck, Users } from 'lucide-react';
import ServicePage from '../components/ServicePage';

const OpsCockpit = () => (
    <ServicePage
        prefix="ocp"
        paragraphs={6}
        tiers={3}
        rows={10}
        included={8}
        steps={5}
        faqs={5}
        tierIcons={[ListOrdered, LayoutDashboard, ShieldCheck]}
        stepIcons={[ListOrdered, ClipboardCheck, Database, Rocket, Users]}
    />
);

export default OpsCockpit;
