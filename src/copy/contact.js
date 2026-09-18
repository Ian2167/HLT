// contact.js — every visible string on /contact, and the enquiry form's strings, held.
//
// Each line below is lifted VERBATIM from a fenced SENDABLE block in the gated copy pack at
//   C:\Projects\hlt-estate\02-builds\hlt-site-kit\copy\2026-09-18-contact.md
// Nothing here is the builder's own wording. Change the pack first, then this file.
//
// THE PAGE'S ONE JOB, as Ian locked it: LINE, and a simple enquiry.
//
// ------------------------------------------------------------------------------------------
// WHY THERE IS NO FORM ON THIS PAGE, AND WHY ITS STRINGS ARE STILL IN THIS FILE
// ------------------------------------------------------------------------------------------
// Ian's GO of 18 September 2026: "Do not activate the Contact form without a working
// destination." The site is a Vite and React single-page app with no backend, so a form here has
// nowhere to send, and the pack's own NOTE 1 is blunt about the cost: "A contact form that
// silently drops an enquiry is worse than no form", and it is "the only block in the whole pack
// that could lose a real prospect".
//
// So the page renders the LINE rail and what happens next, and nothing else. The form's every
// string is written, gated and kept below in `contactFormCopyHeld`, which is EXPORTED BUT NOT
// SPREAD INTO src/translations.js. That is the mechanism rather than a promise: a string that is
// not in the translation table cannot be rendered by `t()` anywhere on the site, so the form
// cannot come back by accident. When the enquiry has a destination, spread this second object
// into translations.js, build the form, and the copy is already gated.
//
// THREE SLOTS ARE EMPTY ON PURPOSE AND NOTHING WAS INVENTED TO FILL THEM: no email address
// (none is recorded on any file the pack's author read), no telephone number (publishing a
// number that rings a mobile is Ian's call), and no address (the registered office is open on
// the record). The Quick Read is not offered here either: Ian ruled it relationship-led and not
// a navigation item, so this page asks his question without attaching the promise.
export const contactCopy = {
    contactNavLink: 'Contact',

    ctMetaTitle: 'Contact High Level Thai: LINE, or send us a note',
    ctMetaDescription: 'Message us on LINE, or tell us one part of the business that is not working as well as it should. Nothing to prepare first.',

    ctHeroHeadline: "Tell us what isn't working",
    ctHeroLead: "You don't need a brief, a budget or a plan to talk to us. Say what's slowing the business down and we'll tell you honestly whether it's something we can help with.",

    ctLineHeading: 'Message us on LINE',
    ctLineBody: "The quickest way to reach us, and the one most of our conversations start on. Add the Official Account and send a message. There's nothing to prepare first.",
    ctLineLabel: 'Talk to us on LINE',

    ctNextHeading: 'What happens next',
    ctNext1: 'We read what you sent and reply to you, not to a form.',
    ctNext2: "If it sounds like something we can help with, we'll suggest a Business Read and tell you what it costs.",
    ctNext3: "If it isn't, we'll say so, and that ends it.",

    ctClosingLine: 'No obligation either way, and nothing to prepare first.',
};

// ------------------------------------------------------------------------------------------
// HELD. Blocks 7 to 13 of the pack. NOT spread into src/translations.js, so `t()` cannot reach
// any of it and no component can render it. Do not spread this object until the enquiry has a
// destination that answers a test send.
// ------------------------------------------------------------------------------------------
export const contactFormCopyHeld = {
    ctEnquiryHeading: 'Or send us a note',
    ctEnquiryBody: 'One short note is enough. We read every one, and we answer in the language you write in.',

    ctFieldName: 'Your name',
    ctFieldBusiness: 'Your business',
    ctFieldReach: 'How we should reach you: LINE ID, email or phone',
    ctFieldProblem: "Tell us one part of the business that isn't working as well as it should",
    ctFieldHelper: "A couple of sentences is plenty. You're not writing a brief.",

    ctSubmitLabel: 'Send it',
    ctPrivacyLine: 'We use what you send to answer you, and for nothing else. Nothing about your business is named to anybody without your written agreement.',
    ctSuccess: "Thank you. That's with us, and you'll hear back from us shortly.",

    ctErrorName: 'We need a name to reply to.',
    ctErrorContact: 'We need one way to reach you: a LINE ID, an email address or a phone number.',
    ctErrorMessage: "Tell us one thing that isn't working, and that's enough to start.",
    ctErrorSend: "That didn't send. Message us on LINE instead and we'll pick it up there.",
};
