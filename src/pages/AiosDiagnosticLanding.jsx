import { ArrowRight, CheckCircle2, ClipboardCheck, MessageSquareText, Play, SearchCheck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { aiosDiagnosticLandingCopy } from '../config/aiosDiagnosticLanding';
import acRepairHero from '../assets/hlt_ac_repair_guy_clean.png';

const stageIcons = [SearchCheck, MessageSquareText, ClipboardCheck, ShieldCheck, CheckCircle2];

const AiosDiagnosticLanding = () => {
    const { language } = useLanguage();
    const copy = aiosDiagnosticLandingCopy[language] || aiosDiagnosticLandingCopy.th;

    return (
        <div className="min-h-screen bg-stone-50 pt-24 text-slate-950 dark:bg-slate-950 dark:text-white">
            <section className="relative overflow-hidden">
                <img
                    src={acRepairHero}
                    alt={copy.heroImageAlt}
                    className="absolute inset-0 h-full w-full object-cover object-[62%_center] brightness-125 contrast-110 saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/42 to-slate-950/10" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/10 to-slate-950/72" />
                <div className="absolute inset-y-0 left-0 w-3/4 bg-slate-950/25" />

                <div className="relative mx-auto grid min-h-[calc(100svh-6rem)] max-w-7xl gap-8 px-5 py-10 sm:px-6 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:px-8 lg:py-16">
                    <div className="max-w-3xl self-center lg:self-end">
                        <p className="inline-flex min-h-11 items-center rounded-lg border border-white/20 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur">
                            {copy.heroEyebrow}
                        </p>
                        <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                            {copy.heroTitle}
                        </h1>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-100 sm:mt-5 sm:text-xl sm:leading-8">
                            {copy.heroSubtitle}
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                to="/diagnostic"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-950/20 transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                            >
                                {copy.heroPrimaryCta}
                                <ArrowRight size={18} />
                            </Link>
                            <a
                                href="#diagnostic-stages"
                                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
                            >
                                {copy.heroSecondaryCta}
                            </a>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-slate-200">{copy.heroTrustNote}</p>
                    </div>

                    <div className="self-end rounded-lg border border-white/15 bg-white/95 p-5 shadow-2xl backdrop-blur dark:bg-slate-950/90 sm:p-6">
                        <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">{copy.mapSubtitle}</p>
                        <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">{copy.mapTitle}</h2>
                        <div className="mt-6 grid gap-3">
                            {copy.stages.map((stage, index) => {
                                const Icon = stageIcons[index];

                                return (
                                    <div key={stage.title} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-200">
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-950 dark:text-white">{stage.title}</p>
                                            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{stage.label}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <p className="mt-5 rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold leading-6 text-white dark:bg-white dark:text-slate-950">
                            {copy.mapFooter}
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white px-5 py-12 dark:bg-slate-950 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-10">
                    <div>
                        <p className="text-sm font-bold uppercase text-indigo-700 dark:text-indigo-300">{copy.introKicker}</p>
                        <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl">
                            {copy.introTitle}
                        </h2>
                    </div>
                    <p className="text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
                        {copy.introBody}
                    </p>
                </div>
            </section>

            <section className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
                    <div>
                        <h2 className="max-w-3xl text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl">
                            {copy.problemTitle}
                        </h2>
                        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
                            {copy.problemBody}
                        </p>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
                        <h3 className="text-xl font-bold text-slate-950 dark:text-white">{copy.problemSignalsTitle}</h3>
                        <div className="mt-5 grid gap-3">
                            {copy.problemSignals.map((signal) => (
                                <div key={signal} className="flex gap-3 rounded-lg bg-slate-50 p-4 dark:bg-slate-950/70">
                                    <CheckCircle2 className="mt-1 shrink-0 text-indigo-700 dark:text-indigo-300" size={20} />
                                    <p className="leading-7 text-slate-700 dark:text-slate-300">{signal}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-950 px-5 py-10 text-white dark:bg-slate-900 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-8">
                    <div className="max-w-xl">
                        <p className="text-xs font-bold uppercase text-indigo-300 sm:text-sm">{copy.vslKicker}</p>
                        <h2 className="mt-2 text-2xl font-bold leading-tight sm:mt-3 sm:text-4xl">{copy.vslTitle}</h2>
                        <p className="mt-3 max-w-prose text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">{copy.vslBody}</p>
                    </div>

                    <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-white/25 bg-white/5">
                        <div className="text-center">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-950 sm:h-16 sm:w-16">
                                <Play size={22} fill="currentColor" className="sm:h-7 sm:w-7" />
                            </div>
                            <p className="mt-3 text-xs font-semibold text-slate-300 sm:mt-4 sm:text-sm">{copy.vslPlaceholder}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="diagnostic-stages" className="bg-white px-5 py-12 dark:bg-slate-950 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-3xl">
                        <p className="text-sm font-bold uppercase text-indigo-700 dark:text-indigo-300">{copy.stagesKicker}</p>
                        <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl">
                            {copy.stagesTitle}
                        </h2>
                        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{copy.stagesBody}</p>
                    </div>

                    <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                        {copy.stages.map((stage, index) => {
                            const Icon = stageIcons[index];

                            return (
                                <article key={stage.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-indigo-700 shadow-sm dark:bg-slate-950 dark:text-indigo-300">
                                        <Icon size={21} />
                                    </div>
                                    <p className="mt-5 text-sm font-bold text-indigo-700 dark:text-indigo-300">{stage.title}</p>
                                    <h3 className="mt-2 text-lg font-bold leading-7 text-slate-950 dark:text-white">{stage.label}</h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{stage.body}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div>
                        <h2 className="text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl">{copy.trustTitle}</h2>
                        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">{copy.trustBody}</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                        {copy.trustItems.map((item) => (
                            <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                                <ShieldCheck className="text-indigo-700 dark:text-indigo-300" size={24} />
                                <h3 className="mt-4 font-bold leading-7 text-slate-950 dark:text-white">{item.title}</h3>
                                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white px-5 py-12 dark:bg-slate-950 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <p className="text-sm font-bold uppercase text-indigo-700 dark:text-indigo-300">{copy.answers.kicker}</p>
                    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                        {copy.answers.items.map((item) => (
                            <article key={item.question} className="rounded-lg border border-slate-200 bg-stone-50 p-5 dark:border-slate-800 dark:bg-slate-900">
                                <h3 className="font-bold leading-7 text-slate-950 dark:text-white">{item.question}</h3>
                                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white px-5 py-12 dark:bg-slate-950 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                        <div>
                            <h2 className="text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl">{copy.flowTitle}</h2>
                            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">{copy.flowBody}</p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-3">
                            {copy.flowSteps.map((step, index) => (
                                <div key={step.title} className="rounded-lg border border-slate-200 bg-stone-50 p-5 dark:border-slate-800 dark:bg-slate-900">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
                                        {index + 1}
                                    </div>
                                    <h3 className="mt-4 font-bold leading-7 text-slate-950 dark:text-white">{step.title}</h3>
                                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{step.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto max-w-5xl rounded-lg bg-slate-950 p-6 text-center text-white dark:bg-white dark:text-slate-950 sm:p-10">
                    <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{copy.finalCtaTitle}</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300 dark:text-slate-600">{copy.finalCtaBody}</p>
                    <div className="mt-8">
                        <Link
                            to="/diagnostic"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-slate-950 dark:focus:ring-offset-white"
                        >
                            {copy.finalCtaButton}
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-400 dark:text-slate-500">{copy.finalCtaNote}</p>
                </div>
            </section>
        </div>
    );
};

export default AiosDiagnosticLanding;
