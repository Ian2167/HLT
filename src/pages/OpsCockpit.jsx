// OpsCockpit.jsx — /ops-cockpit. Built 14 September 2026.
//
// No copy lives here. Every visible string comes from src/copy/opsCockpit.js, lifted verbatim
// from
//   C:\Projects\IWT\02-builds\executive-assistant\work\drafts\2026-09-14-HLT-OPS-COCKPIT-PAGE-COPY.md
// Layout is the shared src/components/ServicePage.jsx.
//
// Counts, straight off the deck: 6 summary paragraphs, 3 tiers, 10 inclusion rows (the PC4 tier
// table with the price row removed), 8 all-tier inclusions, 5 steps, 5 FAQs.
//
// THE VISUAL PASS, 14 September 2026: this page passes ONE artefact mock, the cockpit itself,
// with the waiting-on-you strip at the top and a row in the third queue finishing and leaving
// on a slow loop. That loop is the page's single rule, drawn: "disappear, not grey out".
import { ClipboardCheck, Database, LayoutDashboard, ListOrdered, Rocket, ShieldCheck, Users } from 'lucide-react';
import ServicePage from '../components/ServicePage';
import { ROUTE_OPS_COCKPIT } from '../constants/routes';
import CockpitMock from '../components/mocks/CockpitMock';

const OpsCockpit = () => (
    <ServicePage
        prefix="ocp"
        route={ROUTE_OPS_COCKPIT}
        artefact={<CockpitMock />}
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
