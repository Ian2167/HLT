import { useMemo, useState } from 'react';
import { ArrowRight, Check, CircleAlert, MessageCircle, RotateCcw } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { LINE_DIAGNOSTIC } from '../constants/contact';
import { useLanguage } from '../context/LanguageContext';
import { aiosDiagnosticCopy, diagnosticNiches, resultBands } from '../config/aiosDiagnostic';
import acRepairHero from '../assets/hlt_ac_repair_guy_clean.png';

const toneClasses = {
    red: {
        badge: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/30 dark:text-red-200 dark:border-red-900/60',
        bar: 'bg-red-500',
    },
    amber: {
        badge: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/30 dark:text-amber-100 dark:border-amber-900/60',
        bar: 'bg-amber-500',
    },
    emerald: {
        badge: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-100 dark:border-emerald-900/60',
        bar: 'bg-emerald-500',
    },
};

const getQuestionState = (answers, questionId) => answers[questionId];

const getLocalizedText = (value, language) => {
    if (!value || language === 'th') {
        return value?.replace(/\s\([^()]+\)$/u, '') || '';
    }

    const match = value.match(/\(([^()]+)\)$/u);
    return match ? match[1] : value;
};

const formatScoreSummary = (template, score) => template.replace('{score}', score);

const AiosDiagnostic = () => {
    const { language } = useLanguage();
    const [searchParams] = useSearchParams();
    const nicheKey = searchParams.get('niche') || 'acServices';
    const niche = diagnosticNiches[nicheKey] ?? diagnosticNiches.acServices;
    const copy = useMemo(
        () => Object.fromEntries(
            Object.entries(aiosDiagnosticCopy).map(([key, value]) => [key, getLocalizedText(value, language)]),
        ),
        [language],
    );
    const questions = useMemo(
        () => niche.stages.flatMap((stage) => stage.questions.map((question) => ({
            ...question,
            text: getLocalizedText(question.text, language),
            leak: getLocalizedText(question.leak, language),
            stageLabel: getLocalizedText(stage.label, language),
        }))),
        [language, niche.stages],
    );
    const stages = useMemo(
        () => niche.stages.map((stage) => ({
            ...stage,
            label: getLocalizedText(stage.label, language),
            questions: stage.questions.map((question) => ({
                ...question,
                text: getLocalizedText(question.text, language),
                leak: getLocalizedText(question.leak, language),
            })),
        })),
        [language, niche.stages],
    );
    const localizedBands = useMemo(
        () => resultBands.map((band) => ({
            ...band,
            label: getLocalizedText(band.label, language),
            summary: getLocalizedText(band.summary, language),
        })),
        [language],
    );
    const [answers, setAnswers] = useState({});

    const answeredCount = Object.keys(answers).length;
    // SCORING DIRECTION, corrected 15 September 2026 by the EA Desk. Every question in
    // aiosDiagnostic.js describes the PROBLEM HAPPENING ("Customers call, but nobody answers"),
    // and the buttons are Yes and No, so a Yes is a leak. This line counted the Yes answers,
    // while the bands run low-is-bad (0 to 5 critical leakage, 11 to 15 controlled). An owner
    // answering honestly that everything was broken scored 15 and was told he was in control.
    // The score is therefore the count of problems the business does NOT have.
    const score = Object.values(answers).filter((value) => value === false).length;
    const isComplete = answeredCount === questions.length;
    const progress = Math.round((answeredCount / questions.length) * 100);
    const resultBand = localizedBands.find((band) => score >= band.min && score <= band.max);
    // Same inversion, same fix: a leak is a question the owner answered YES to.
    const topLeaks = questions.filter((question) => answers[question.id] === true).slice(0, 3);

    const handleAnswer = (questionId, value) => {
        setAnswers((current) => ({ ...current, [questionId]: value }));
    };

    const resetDiagnostic = () => {
        setAnswers({});
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen pt-24 bg-slate-50 dark:bg-slate-950">
            <div className="px-5 pt-4 sm:px-6 lg:px-8">
                <Link
                    to="/aios-diagnostic"
                    className="inline-flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                >
                    ← {language === 'en' ? 'Back to overview' : 'กลับไปดูภาพรวม'}
                </Link>
            </div>
            <section className="relative overflow-hidden px-5 pb-10 pt-14 sm:px-6 lg:px-8">
                <img
                    src={acRepairHero}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-slate-950/35" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/35 to-slate-950/75" />

                <div className="relative mx-auto max-w-5xl">
                    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                        <div>
                            {copy.heroEyebrow ? (
                                <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur">
                                    {copy.heroEyebrow}
                                </div>
                            ) : null}
                            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
                                {copy.heroTitle}
                            </h1>
                            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">
                                {copy.heroSubtitle}
                            </p>
                        </div>

                        <div className="rounded-lg border border-white/15 bg-white/95 p-5 shadow-sm backdrop-blur dark:bg-slate-950/90">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                                        {copy.progressLabel}
                                    </p>
                                    <p className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">
                                        {answeredCount}/{questions.length}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                                        {copy.scoreLabel}
                                    </p>
                                    <p className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">
                                        {score}/15
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                                <div className="h-full rounded-full bg-indigo-600 transition-all duration-300" style={{ width: `${progress}%` }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-5 py-6 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 sm:p-6">
                    <h2 className="text-xl font-bold text-slate-950 dark:text-white">{copy.explanationTitle}</h2>
                    {copy.explanationBody ? (
                        <p className="mt-3 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">{copy.explanationBody}</p>
                    ) : null}
                </div>
            </section>

            <section className="px-5 py-6 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-5xl gap-5">
                    {stages.map((stage, stageIndex) => (
                        <div key={stage.id} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
                                    {stageIndex + 1}
                                </div>
                                <h2 className="text-xl font-bold text-slate-950 dark:text-white">{stage.label}</h2>
                            </div>

                            <div className="grid gap-4">
                                {stage.questions.map((question, questionIndex) => {
                                    const currentAnswer = getQuestionState(answers, question.id);

                                    return (
                                        <div key={question.id} className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                                            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                                                {stageIndex + 1}.{questionIndex + 1}
                                            </p>
                                            <p className="mt-2 text-base font-semibold leading-7 text-slate-950 dark:text-white">
                                                {question.text}
                                            </p>
                                            <div className="mt-4 grid grid-cols-2 gap-3">
                                                <button
                                                    type="button"
                                                    onClick={() => handleAnswer(question.id, true)}
                                                    className={`min-h-12 rounded-lg border px-4 py-3 text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 ${currentAnswer === true
                                                        ? 'border-emerald-500 bg-emerald-600 text-white'
                                                        : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'
                                                        }`}
                                                >
                                                    {copy.yesLabel}
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => handleAnswer(question.id, false)}
                                                    className={`min-h-12 rounded-lg border px-4 py-3 text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 ${currentAnswer === false
                                                        ? 'border-red-500 bg-red-600 text-white'
                                                        : 'border-slate-200 bg-white text-slate-700 hover:border-red-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'
                                                        }`}
                                                >
                                                    {copy.noLabel}
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-5 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
                        <h2 className="text-xl font-bold text-slate-950 dark:text-white">{copy.resultTitle}</h2>
                        {isComplete ? (
                            <div className="mt-5">
                                <p className="text-3xl font-bold leading-tight text-slate-950 dark:text-white">
                                    {formatScoreSummary(copy.scoreSummary, score)}
                                </p>
                                <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                                    <div className={`h-full rounded-full ${toneClasses[resultBand.tone].bar}`} style={{ width: `${(score / questions.length) * 100}%` }} />
                                </div>
                            </div>
                        ) : (
                            <div className="mt-5 rounded-lg border border-dashed border-slate-300 p-5 dark:border-slate-700">
                                <CircleAlert className="text-indigo-600 dark:text-indigo-400" size={28} />
                                <h3 className="mt-4 font-bold text-slate-950 dark:text-white">{copy.incompleteTitle}</h3>
                                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{copy.incompleteBody}</p>
                            </div>
                        )}
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
                        <h2 className="text-xl font-bold text-slate-950 dark:text-white">{copy.diagnosisTitle}</h2>
                        {isComplete && topLeaks.length > 0 ? (
                            <div className="mt-5 grid gap-3">
                                {topLeaks.map((question, index) => (
                                    <div key={question.id} className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                                        <div className="flex gap-3">
                                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700 dark:bg-red-950 dark:text-red-200">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{copy.topLeaksTitle}</p>
                                                <p className="mt-1 font-semibold leading-7 text-slate-950 dark:text-white">{question.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : isComplete ? (
                            <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 p-5 text-emerald-900 dark:border-emerald-900/70 dark:bg-emerald-950/30 dark:text-emerald-100">
                                <Check size={28} />
                                <h3 className="mt-4 font-bold">{copy.noLeaksTitle}</h3>
                                <p className="mt-2 leading-7">{copy.noLeaksBody}</p>
                            </div>
                        ) : (
                            <div className="mt-5 grid gap-3">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="h-20 rounded-lg bg-slate-100 dark:bg-slate-800" />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="px-5 pb-16 pt-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl rounded-lg bg-slate-950 p-5 text-white dark:bg-white dark:text-slate-950 sm:p-6">
                    <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
                        <div>
                            <h2 className="text-2xl font-bold">{copy.lineCtaTitle}</h2>
                            <p className="mt-3 max-w-3xl leading-7 text-slate-300 dark:text-slate-600">{copy.lineCtaBody}</p>
                        </div>
                        <div className="flex flex-col gap-3 sm:items-end">
                            <a
                                href={LINE_DIAGNOSTIC}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                            >
                                <MessageCircle size={18} />
                                {copy.lineCtaButton}
                                <ArrowRight size={18} />
                            </a>
                            <button
                                type="button"
                                onClick={resetDiagnostic}
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 dark:border-slate-300 dark:text-slate-950 dark:hover:bg-slate-100"
                            >
                                <RotateCcw size={18} />
                                {copy.resetButton}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AiosDiagnostic;
