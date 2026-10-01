// analytics.js — one place to name a conversion event. Added 1 October 2026 on Ian's "Yes to
// Vercel Analytics". The brief's section 27 asks that these be distinguishable: Fit Call clicks,
// Business Read visits, LINE conversations, WhatsApp, Blindspot CTA clicks, capability pages.
//
// The events are sent by @vercel/analytics; the page views come from the <Analytics /> component
// in src/App.jsx. Nothing fires on the server (the prerender) or until Ian switches Web Analytics
// on in the Vercel dashboard. No cookie is set, so no banner is needed.
import { track } from '@vercel/analytics';

export const EVENTS = {
    fitCallClick: 'fit_call_click',
    lineClick: 'line_click',
    whatsAppClick: 'whatsapp_click',
    emailClick: 'email_click',
    phoneClick: 'phone_click',
    blindspotCtaClick: 'blindspot_cta_click',
    businessReadCtaClick: 'business_read_cta_click',
    capabilityView: 'capability_view',
};

export const logEvent = (name, props = {}) => {
    if (typeof window === 'undefined') return;
    try {
        track(name, props);
    } catch {
        // Analytics never breaks a click.
    }
};
