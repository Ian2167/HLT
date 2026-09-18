// clientLogin.js — every visible string on /client-login, and the workspace's own messages, held.
//
// Each line below is lifted VERBATIM from a fenced SENDABLE block in the gated copy pack at
//   C:\Projects\hlt-estate\02-builds\hlt-site-kit\copy\2026-09-18-client-login.md
// Nothing here is the builder's own wording. Change the pack first, then this file.
//
// THE PAGE'S ONE JOB, as Ian locked it: separate from the public buying journey.
//
// ------------------------------------------------------------------------------------------
// THIS IS A STUB, AND THE REASON MATTERS
// ------------------------------------------------------------------------------------------
// Ian's Client Workspace security rule, 17 September 2026, verbatim: "Protected client and
// methodology content must be stored behind authenticated access. It must not be committed in
// readable form to the public HLT repository or merely hidden by front-end routing." This
// repository IS public. So there is no authentication here, no Supabase client, no new
// dependency and no protected content in this bundle. The fields are inert and the button is
// disabled, because a login form with nothing behind it is a promise, not a gate.
//
// The route exists so the seventh navigation item is not a dead link while the Workspace is
// being built. When it ships, this file is where @supabase/supabase-js and the magic-link call
// arrive, and nothing else in the public site changes.
//
// THE PAGE MUST NOT BECOME A SALES PAGE (the pack's NOTE 1). No Business Read button, no
// capability cards, no LINE button in the body. A client who has already paid is not sold to at
// the door, and a visitor who arrived by mistake is handled in one line: `clNotAClient`, then
// `clBackLabel`.
export const clientLoginCopy = {
    clNavLink: 'Client Login',

    clMetaTitle: 'Client login | High Level Thai',
    clMetaDescription: 'Sign in to your Client Workspace to see your Business Read, findings, priority actions and implementation progress.',

    clHeading: 'Client Workspace',
    clSubLine: 'Sign in to see your Business Read, what it found, what to do first, and where your systems have got to.',

    clFieldEmail: 'Email address',
    clFieldPassword: 'Password',
    clSubmitLabel: 'Sign in',

    clNotAClient: "Workspace access is set up by HLT when your work starts. If you're not a client yet, there's nothing to sign up for here.",
    clBackLabel: 'Back to the site',
};

// ------------------------------------------------------------------------------------------
// HELD. Every message the pack writes for a build that does not exist yet: the password reset
// journey, the sign-in errors, and the signed-out states. NOT spread into src/translations.js,
// so `t()` cannot reach any of it and no component can render a message for a flow that cannot
// run. Spread it when the Workspace build lands, and check the twelve-character rule below
// against the validator that ships with it: a message that contradicts the validator is worse
// than no message.
// ------------------------------------------------------------------------------------------
export const clientLoginCopyHeld = {
    clForgotLabel: 'Forgotten your password?',

    clErrorMismatch: "That email address and password don't match. Check both and try again.",
    clErrorNoEmail: 'Enter the email address your workspace was set up with.',
    clErrorNoPassword: 'Enter your password.',
    clErrorTooMany: 'Too many attempts. Wait a few minutes and try again, or reset your password below.',
    clErrorOurEnd: "We couldn't sign you in just now, and that's our end, not yours. Try again shortly, and message us on LINE if it keeps happening.",

    clResetHeading: 'Reset your password',
    clResetBody: "Enter the email address your workspace was set up with. We'll send you a link to set a new password.",
    clResetSubmit: 'Send the link',
    clResetBackLabel: 'Back to sign in',
    clResetSent: 'If that address has a workspace, the link is on its way. It works once and it expires in an hour.',

    clNewHeading: 'Set a new password',
    clNewField: 'New password',
    clNewFieldRepeat: 'Type it again',
    clNewRule: 'At least twelve characters. Nothing else is required, and longer beats complicated.',
    clNewSubmit: 'Save it and sign in',

    clNewErrorMismatch: "Those two don't match. Type the new password again.",
    clNewErrorShort: "That's too short. Twelve characters or more.",
    clNewErrorExpired: 'That link has expired or has already been used. Ask for a new one below.',

    clSignedOut: "You're signed out. Sign in again whenever you need the workspace.",
    clTimedOut: 'You were signed out because the workspace was left open. Sign in again to carry on.',
};
