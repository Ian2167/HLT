// ClientLogin.jsx — /client-login. Built 18 September 2026. THIS IS A STUB.
//
// WHAT THIS PAGE IS, IN IAN'S WORDS
// Point 9 of his directive: "Add Client Login as a separate navigation item." Its one job, from
// his locked page table: "Separate from the public buying journey."
//
// ------------------------------------------------------------------------------------------
// WHY IT IS A STUB, WHICH IS IAN'S OWN SECURITY RULE AND NOT A SHORTCUT
// ------------------------------------------------------------------------------------------
// Ian, 17 September 2026, verbatim: "Client Workspace security rule: Protected client and
// methodology content must be stored behind authenticated access. It must not be committed in
// readable form to the public HLT repository or merely hidden by front-end routing."
//
// This repository has a PUBLIC GitHub remote. So this file imports no Supabase client, adds no
// dependency, holds no client content and performs no authentication. The two fields are
// disabled and the button is disabled, because a login form with nothing behind it is a promise
// rather than a gate, and a disabled control says so honestly.
//
// It exists so the seventh navigation item is not a dead link while the Workspace is decided and
// built. When that build lands (Supabase, on Ian's ruling of 17 September, "And yes use Supabase
// for now"), this file is where @supabase/supabase-js and the sign-in call arrive, and nothing
// else in the public site changes.
//
// THIS PAGE MUST NOT BECOME A SALES PAGE. The pack's NOTE 1 anticipates exactly the temptation:
// the page looks empty, so a later editor adds a Business Read button. It is not empty, it is
// finished. A client who has already paid is not sold to at the door. There is deliberately no
// Business Read call to action, no capability card and no LINE button in the body; a visitor who
// arrived by mistake is handled in one line and one link back to the site.
//
// TWO SLOTS THE RESTRUCTURE PLAN ASKED FOR AND THE COPY PACK DOES NOT FILL, so neither is here
// and neither was invented: a line saying the Workspace opens shortly, and a LINE link in the
// body. Both are listed in the staging report.
//
// WHY THIS FILE HOLDS NO COPY OF ITS OWN
// Every visible string comes from src/copy/clientLogin.js, lifted verbatim from the gated pack at
//   C:\Projects\hlt-estate\02-builds\hlt-site-kit\copy\2026-09-18-client-login.md
// The sign-in errors, the password-reset journey and the signed-out messages are written and
// held in that module's second export, which is not spread into the translation table.
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_HOME } from '../constants/routes';

const FIELD_CLASSES =
    'mt-2 w-full rounded-xl border border-slate-200 bg-stone-50 px-4 py-3 text-base text-slate-950 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/20 dark:bg-white/[0.04] dark:text-white';

const ClientLogin = () => {
    const { t } = useLanguage();

    const metaDescription = t('clMetaDescription');
    useEffect(() => {
        const tag = document.querySelector('meta[name="description"]');
        if (!tag) return undefined;
        const previous = tag.getAttribute('content');
        tag.setAttribute('content', metaDescription);
        return () => tag.setAttribute('content', previous);
    }, [metaDescription]);

    return (
        <div className="min-h-screen bg-stone-50 pt-24 text-slate-950 dark:bg-hltNavy dark:text-white">
            <title>{t('clMetaTitle')}</title>

            <section className="px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-md">
                    <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{t('clHeading')}</h1>
                    <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">{t('clSubLine')}</p>

                    {/* No <form> element and no handler: there is nothing behind this yet and a
                        submit that goes nowhere is worse than a control that says it is not
                        ready. Both fields and the button are disabled. */}
                    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 card-glass sm:p-7">
                        <label className="block text-sm font-semibold text-slate-950 dark:text-white">
                            {t('clFieldEmail')}
                            <input type="email" disabled autoComplete="off" className={FIELD_CLASSES} />
                        </label>
                        <label className="mt-5 block text-sm font-semibold text-slate-950 dark:text-white">
                            {t('clFieldPassword')}
                            <input type="password" disabled autoComplete="off" className={FIELD_CLASSES} />
                        </label>
                        <button
                            type="button"
                            disabled
                            className="mt-7 w-full rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {t('clSubmitLabel')}
                        </button>
                    </div>

                    <p className="mt-8 text-sm leading-7 text-slate-600 dark:text-slate-300">{t('clNotAClient')}</p>
                    <Link
                        to={ROUTE_HOME}
                        className="mt-3 inline-block text-sm font-bold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-300"
                    >
                        {t('clBackLabel')}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ClientLogin;
