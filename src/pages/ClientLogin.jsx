// ClientLogin.jsx — /client-login. Built 18 September 2026. THIS IS A STUB.
// 30 September 2026: per-page head through Seo (marked noindex, because a disabled sign-in form is
// not a page a search engine should list), and the one link through lp().
//
// WHY IT IS A STUB, WHICH IS IAN'S OWN SECURITY RULE AND NOT A SHORTCUT
// Ian, 17 September 2026, verbatim: "Client Workspace security rule: Protected client and
// methodology content must be stored behind authenticated access. It must not be committed in
// readable form to the public HLT repository or merely hidden by front-end routing."
//
// This repository has a PUBLIC GitHub remote. So this file imports no Supabase client, adds no
// dependency, holds no client content and performs no authentication. The two fields are
// disabled and the button is disabled, because a login form with nothing behind it is a promise
// rather than a gate, and a disabled control says so honestly.
//
// THIS PAGE MUST NOT BECOME A SALES PAGE. A client who has already paid is not sold to at the
// door. There is deliberately no Business Read call to action, no capability card and no LINE
// button in the body; a visitor who arrived by mistake is handled in one line and one link back.
//
// COPY: src/copy/clientLogin.js. The sign-in errors, the password-reset journey and the signed-out
// messages are written and held in that module's second export, which is not spread.
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_CLIENT_LOGIN, ROUTE_HOME } from '../constants/routes';
import Seo from '../components/Seo';

const FIELD_CLASSES =
    'mt-2 w-full rounded-xl border border-slate-200 bg-stone-50 px-4 py-3 text-base text-slate-950 disabled:cursor-not-allowed disabled:opacity-60';

const ClientLogin = () => {
    const { t, lp } = useLanguage();

    return (
        <div className="min-h-screen bg-stone-50 pt-20 text-slate-950 lg:pt-24">
            <Seo title={t('clMetaTitle')} description={t('clMetaDescription')} route={ROUTE_CLIENT_LOGIN} noindex />

            <section className="px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-md">
                    <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{t('clHeading')}</h1>
                    <p className="mt-5 text-base leading-8 text-slate-600">{t('clSubLine')}</p>

                    {/* No <form> element and no handler: there is nothing behind this yet. */}
                    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 card-glass card-static sm:p-7">
                        <label className="block text-sm font-semibold text-slate-950">
                            {t('clFieldEmail')}
                            <input type="email" disabled autoComplete="off" className={FIELD_CLASSES} />
                        </label>
                        <label className="mt-5 block text-sm font-semibold text-slate-950">
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

                    <p className="mt-8 text-sm leading-7 text-slate-600">{t('clNotAClient')}</p>
                    <Link to={lp(ROUTE_HOME)} className="mt-3 inline-block text-sm font-bold text-indigo-600 transition-colors hover:text-indigo-500">
                        {t('clBackLabel')}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ClientLogin;
