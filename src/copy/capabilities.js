// capabilities.js — the eight capability pages behind switches (repositioning brief, section 19;
// Ian, 1 October 2026: "Rewrite the Capabilities but again make it so they can be switched on or
// off"). Voice AI and Full Chairs are not here, on his word of the same day.
//
// EVERY LINE HERE IS THE BUILDER'S DRAFT, written to the brief's positioning (problem, outcome,
// mechanism, potential controls; never a result figure, never a guarantee), and OFF by default in
// src/config/features.js. Nothing here is public until Ian turns a switch on, and the copy gate
// runs on each page before it does. Each capability is one of the tools the control method may
// choose, which is how the pages say it.
export const CAPABILITY_ORDER = ['crm', 'automation', 'ai-assistance', 'websites', 'booking', 'reviews', 'customer-reactivation', 'reporting'];

export const capabilities = {
    crm: {
        name: 'CRM',
        title: 'CRM | A Capability of High Level Thai',
        description: 'A CRM is where enquiries, customers and next actions live so that nothing depends on memory. HLT sets one up only after the process it serves is clear.',
        headline: 'One place where every enquiry, customer and next action lives.',
        fits: 'Revenue Leakage and Management Visibility.',
        does: 'Holds who the customer is, where they came from, who owns them, what was promised and what happens next, in a form the whole team reads the same way.',
        not: "It doesn't fix a process nobody follows. If enquiries aren't captured at the moment they arrive, a CRM only records the gap.",
        controls: 'capture at source, ownership on every record, next-action dates, overdue flags, the daily list of what needs attention',
    },
    automation: {
        name: 'Automation',
        title: 'Automation | A Capability of High Level Thai',
        description: 'Automation enforces a rule that is already clear: assign, remind, check, escalate, update, summarise. HLT automates after the rule exists, never instead of it.',
        headline: 'Automation should enforce good work.',
        fits: 'Commercial Follow-through and Owner Decision Control.',
        does: 'Assigns a new enquiry, reminds somebody of a deadline, checks whether something happened, escalates an overdue action, updates a record, prepares a daily summary.',
        not: "It doesn't decide. A rule that was never agreed can't be automated, and automating a poor process hides it beneath more software.",
        controls: 'assignment rules, deadline reminders, did-it-happen checks, escalation on overdue, record updates, the daily summary',
    },
    'ai-assistance': {
        name: 'AI Assistance',
        title: 'AI Assistance | A Capability of High Level Thai',
        description: 'AI helps once the process is clear: reading conversations, summarising, drafting, classifying, searching company knowledge, spotting exceptions. HLT defines the control first.',
        headline: 'AI assists the process. It does not replace it.',
        fits: 'Owner Decision Control and Management Visibility.',
        does: 'Reads conversations, summarises information, drafts responses for a person to send, classifies enquiries, searches company knowledge, identifies exceptions, prepares reports, spots patterns.',
        not: 'Putting AI into a broken process usually gives you a faster broken process. It makes no decision the business has not already made a rule for.',
        controls: 'a person approves every outward message, knowledge kept in the client\'s own accounts, exceptions routed to a named owner, outputs labelled as drafts',
    },
    websites: {
        name: 'Websites',
        title: 'Websites | A Capability of High Level Thai',
        description: 'A website is the first place a stranger tests whether they can find, understand, trust and contact a business. HLT builds or fixes one when that test is where enquiries are lost.',
        headline: 'A site a stranger can find, understand, trust and contact.',
        fits: 'Revenue Leakage, at the very front of the enquiry journey.',
        does: 'Makes what the business does, who it is for, where it works and how to get in touch clear within seconds, in the languages the customers use, on a phone.',
        not: "It isn't a brochure and it isn't the business. If enquiries arrive and then disappear, the site was never the problem.",
        controls: 'one obvious next step per page, every contact route tested, enquiries captured where the team works, pages that search engines can read',
    },
    booking: {
        name: 'Booking',
        title: 'Booking | A Capability of High Level Thai',
        description: 'Booking controls make an appointment, a job or a reservation something the business holds rather than something a person remembers. HLT adds them where the handoff is where things go wrong.',
        headline: 'A booking the business holds, not a person remembers.',
        fits: 'Commercial Follow-through for appointment and job-based businesses.',
        does: 'Captures the booking at the moment it is made, gives it an owner and a time, confirms it, reminds the customer, and shows what is coming without anyone asking.',
        not: "It doesn't fill a diary on its own. It stops the bookings that were already won from being lost in a chat thread.",
        controls: 'capture from every channel, confirmation to the customer, reminders, no-show follow-up, a visible day and week ahead',
    },
    reviews: {
        name: 'Reviews',
        title: 'Reviews | A Capability of High Level Thai',
        description: 'Reviews are the trust step a stranger takes before contacting a business. HLT puts a simple control around asking for them and answering them, where that step is where enquiries stall.',
        headline: 'Trust, asked for at the right moment and answered every time.',
        fits: 'Revenue Leakage, at the trust step of the customer journey.',
        does: 'Asks for a review at the point a customer is pleased, in their language, and makes sure every review gets an answer within an agreed time.',
        not: "It doesn't manufacture praise. Only genuine reviews are asked for, and a poor review is answered, not hidden.",
        controls: 'the moment to ask, the owner of each reply, the reply deadline, the escalation of a poor review to the owner',
    },
    'customer-reactivation': {
        name: 'Customer Reactivation',
        title: 'Customer Reactivation | A Capability of High Level Thai',
        description: 'Old customers are the cheapest enquiries a business has, and the ones most often forgotten. HLT puts a control around when and how they are contacted again.',
        headline: 'Old customers are forgotten by accident, not by decision.',
        fits: 'Revenue Leakage, among customers the business already has.',
        does: 'Keeps the list of past customers current, decides who should be contacted and when, gives each contact an owner and a next action, and records the outcome.',
        not: "It isn't a campaign blast. The contact is personal, timed to the customer's own cycle, and stops when they say so.",
        controls: 'a maintained customer list, a contact rule by customer type, an owner per contact, outcome recorded, opt-out honoured',
    },
    reporting: {
        name: 'Reporting',
        title: 'Reporting | A Capability of High Level Thai',
        description: 'Reporting that shows the owner what genuinely needs attention, not a dashboard demanding attention all day. HLT builds it last, from the controls already in place.',
        headline: 'See what needs attention without chasing anyone.',
        fits: 'Management Visibility and the Daily Business Pulse.',
        does: 'Shows the exceptions: overdue actions, important enquiries, unresolved decisions, payment issues, and the few performance indicators the business has agreed matter.',
        not: "It doesn't replace running the business, and it only reports what the process already captures. A dashboard over a process with no capture reports nothing.",
        controls: 'exceptions first, a daily summary, overdue and unowned items, selected indicators, the routine kept out of sight',
    },
};
