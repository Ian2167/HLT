// OpenBrain.jsx — /openbrain. Built 14 September 2026.
//
// No copy lives here. Every visible string comes from src/copy/openBrain.js, lifted verbatim
// from
//   C:\Projects\IWT\02-builds\executive-assistant\work\drafts\2026-09-14-HLT-OPENBRAIN-PAGE-COPY.md
// Layout is the shared src/components/ServicePage.jsx.
//
// THIS PAGE PASSES tiers=0, steps=0 AND faqs=0 ON PURPOSE. No tier ladder, price, delivery
// timeline, step list or FAQ set exists for OpenBrain on any file read this run, so those
// sections do not render at all. The "who it's for" band stands where the tier ladder sits on
// the other five pages. Nothing was invented to match their shape.
//
// Counts, straight off the deck: 4 summary paragraphs, 3 "who it's for" cards, 4 things the
// client gets.
//
// THE VISUAL PASS, 14 September 2026: this page passes ONE artefact mock, the flow from the
// client's own material through an index to an answer that says where it came from. It names no
// vendor and no table, because the page names none.
import { FileSearch, Quote, User } from 'lucide-react';
import ServicePage from '../components/ServicePage';
import OpenBrainFlowMock from '../components/mocks/OpenBrainFlowMock';

const OpenBrain = () => (
    <ServicePage
        prefix="ob"
        artefact={<OpenBrainFlowMock />}
        paragraphs={4}
        who={3}
        included={4}
        whoIcons={[User, FileSearch, Quote]}
    />
);

export default OpenBrain;
