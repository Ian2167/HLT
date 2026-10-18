// WebsiteDemo.jsx — the interactive website demonstration on /examples (change 3 of the 18 October
// 2026 offer refresh, A-044), labelled CONCEPT. An invented clinic's site in a phone frame, four
// screens a visitor taps through: choose a service, make contact, ask for a time, and the card
// reception sees. It's a mock-up: no form submits, nothing is booked, no message leaves the page,
// and no booking software is implied (bridge row 4822: "do not present it as built").
//
// HOW IT BEHAVES. Back and Next move a screen at a time; the dots jump straight to one; Start again
// returns to the first. The step's explanation sits beside the frame and is announced politely to a
// screen reader. The prerendered page shows screen one, so the page reads sensibly without script.
// Screen changes cross-fade only where the visitor's device allows motion (motion-safe).
import { useEffect, useState } from 'react';
import { CalendarClock, ChevronLeft, ChevronRight, MessageCircle, Pause, Play, RotateCcw, User } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ArtefactTag } from './SampleArtefacts';

const STEPS = [1, 2, 3, 4];

const Frame = ({ title, children }) => (
    <div className="mx-auto w-full max-w-[19rem] rounded-[2.25rem] border-[10px] border-slate-900 bg-slate-900 shadow-xl shadow-slate-900/20">
        <div className="overflow-hidden rounded-[1.6rem] bg-white">
            <div className="flex items-center justify-between bg-teal-700 px-4 py-3 text-white">
                <span className="text-sm font-bold">{title}</span>
                <span aria-hidden="true" className="flex gap-1">
                    <span className="h-1.5 w-4 rounded-full bg-white/70" />
                    <span className="h-1.5 w-4 rounded-full bg-white/70" />
                </span>
            </div>
            <div className="min-h-[21rem] p-4">{children}</div>
        </div>
    </div>
);

const Screen = ({ step, t, service, onChoose, onNext }) => {
    if (step === 1) {
        const services = [1, 2, 3].map((n) => ({ n, name: t(`demoService${n}`), time: t(`demoService${n}Time`) }));
        return (
            <ul className="space-y-3">
                {services.map((s) => (
                    <li key={s.n}>
                        <button
                            type="button"
                            onClick={() => onChoose(s.n)}
                            className={`press flex w-full items-center justify-between rounded-xl border px-3 py-3 text-left ${
                                service === s.n ? 'border-teal-600 bg-teal-50' : 'border-slate-200 hover:border-teal-400'
                            }`}
                        >
                            <span>
                                <span className="block text-sm font-bold text-slate-900">{s.name}</span>
                                <span className="block text-xs text-slate-500">{s.time}</span>
                            </span>
                            <span className="rounded-lg bg-teal-700 px-2.5 py-1 text-xs font-bold text-white">{t('demoChoose')}</span>
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
    if (step === 2) {
        return (
            <div className="space-y-3">
                <p className="text-sm font-bold text-slate-900">{t(`demoService${service}`)}</p>
                <button type="button" onClick={onNext} className="flex w-full items-center gap-3 rounded-xl border border-slate-200 px-3 py-3 text-left text-sm font-semibold text-slate-800 hover:border-teal-400">
                    <MessageCircle size={18} aria-hidden="true" className="text-emerald-600" />
                    {t('demoAskLine')}
                </button>
                <button type="button" onClick={onNext} className="flex w-full items-center gap-3 rounded-xl bg-teal-700 px-3 py-3 text-left text-sm font-bold text-white hover:bg-teal-600">
                    <CalendarClock size={18} aria-hidden="true" />
                    {t('demoRequest')}
                </button>
            </div>
        );
    }
    if (step === 3) {
        const field = (label, value) => (
            <div>
                <span className="block text-xs font-bold text-slate-500">{label}</span>
                <span className="mt-1 block rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800">{value}</span>
            </div>
        );
        return (
            <div className="space-y-3">
                <p className="text-sm font-bold text-slate-900">{t(`demoService${service}`)}</p>
                {field(t('demoFieldName'), '…')}
                {field(t('demoFieldDay'), t('demoFieldDayValue'))}
                {field(t('demoFieldTime'), t('demoFieldTimeValue'))}
                <button type="button" onClick={onNext} className="w-full rounded-xl bg-teal-700 px-3 py-3 text-sm font-bold text-white hover:bg-teal-600">
                    {t('demoSend')}
                </button>
            </div>
        );
    }
    return (
        <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-4">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-indigo-700">
                <User size={14} aria-hidden="true" />
                {t('demoCardTitle')}
            </p>
            <p className="mt-2 text-base font-bold text-slate-950">{t(`demoService${service}`)}</p>
            <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                <li>
                    {t('demoFieldDayValue')}, {t('demoFieldTimeValue').toLowerCase()}
                </li>
                <li>{t('demoCardChannel')}</li>
                <li>{t('demoCardOwner')}</li>
                <li className="font-semibold text-slate-900">{t('demoCardReply')}</li>
            </ul>
        </div>
    );
};

// THE WALKTHROUGH (the wow pass, 18 October 2026). "Play the walkthrough" steps through the four
// screens by itself, a bar showing the time left on each; any tap by the visitor stops it, so the
// demo never fights the person using it. It stops at the reception card and doesn't loop. The
// timer pauses while the tab is hidden. Reduced motion keeps the steps and drops the bar's motion.
const STEP_MS = 3200;

const WebsiteDemo = () => {
    const { t } = useLanguage();
    const [step, setStep] = useState(1);
    const [service, setService] = useState(2);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        if (!playing) return undefined;
        if (step >= 4) {
            setPlaying(false);
            return undefined;
        }
        let timer = null;
        const arm = () => {
            clearTimeout(timer);
            if (!document.hidden) timer = setTimeout(() => setStep((s) => Math.min(4, s + 1)), STEP_MS);
        };
        arm();
        document.addEventListener('visibilitychange', arm);
        return () => {
            clearTimeout(timer);
            document.removeEventListener('visibilitychange', arm);
        };
    }, [playing, step]);

    // A visitor's own tap always wins over the walkthrough.
    const go = (n) => {
        setPlaying(false);
        setStep(Math.min(4, Math.max(1, n)));
    };
    const play = () => {
        if (step >= 4) setStep(1);
        setPlaying(true);
    };

    return (
        <article id="website-demonstration" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 card-glass sm:p-9">
            <ArtefactTag>{t('demoTag')}</ArtefactTag>
            <h3 className="mt-4 text-2xl font-bold leading-8 text-slate-950">{t('demoTitle')}</h3>
            <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">{t('demoLead')}</p>

            <div className="mt-8 grid items-start gap-8 md:grid-cols-[19rem_1fr]">
                <div key={step} className="motion-safe:animate-[fadeIn_250ms_ease-out]" data-demo-step={step}>
                    <Frame title={t('demoSiteName')}>
                        <Screen
                            step={step}
                            t={t}
                            service={service}
                            onChoose={(n) => {
                                setService(n);
                                go(2);
                            }}
                            onNext={() => go(step + 1)}
                        />
                    </Frame>
                </div>

                <div>
                    <ol className="flex flex-wrap gap-2" aria-label={t('demoTitle')}>
                        {STEPS.map((n) => (
                            <li key={n}>
                                <button
                                    type="button"
                                    onClick={() => go(n)}
                                    aria-current={step === n ? 'step' : undefined}
                                    className={`press rounded-full px-3 py-1.5 text-xs font-bold ${
                                        step === n ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                                >
                                    {n}. {t(`demoStep${n}`)}
                                </button>
                            </li>
                        ))}
                    </ol>

                    <div aria-live="polite" className="relative mt-6 overflow-hidden rounded-xl border border-slate-200 bg-stone-50 p-5">
                        {playing && step < 4 ? (
                            <span
                                key={`bar-${step}`}
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-1 origin-left bg-indigo-600"
                                style={{ animation: `demoProgress ${STEP_MS}ms linear both` }}
                            />
                        ) : null}
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                            {t('demoStepOf')} {step} / 4
                        </p>
                        <p className="mt-1 text-lg font-bold text-slate-950">{t(`demoStep${step}`)}</p>
                        <p className="mt-2 text-base leading-7 text-slate-700">{t(`demoHint${step}`)}</p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                        <button
                            type="button"
                            onClick={() => (playing ? setPlaying(false) : play())}
                            aria-pressed={playing}
                            className="press inline-flex min-h-11 items-center gap-1.5 rounded-xl bg-hltNavy px-4 text-sm font-bold text-white hover:bg-slate-800"
                        >
                            {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
                            {playing ? t('demoPause') : t('demoPlay')}
                        </button>
                        <button
                            type="button"
                            onClick={() => go(step - 1)}
                            disabled={step === 1}
                            className="press inline-flex min-h-11 items-center gap-1 rounded-xl border border-slate-300 px-4 text-sm font-bold text-slate-800 transition-colors hover:bg-slate-100 disabled:opacity-40"
                        >
                            <ChevronLeft size={16} aria-hidden="true" />
                            {t('demoBack')}
                        </button>
                        {step < 4 ? (
                            <button
                                type="button"
                                onClick={() => go(step + 1)}
                                className="press inline-flex min-h-11 items-center gap-1 rounded-xl bg-indigo-600 px-4 text-sm font-bold text-white transition-colors hover:bg-indigo-500"
                            >
                                {t('demoNext')}
                                <ChevronRight size={16} aria-hidden="true" />
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={() => go(1)}
                                className="press inline-flex min-h-11 items-center gap-1 rounded-xl bg-indigo-600 px-4 text-sm font-bold text-white transition-colors hover:bg-indigo-500"
                            >
                                <RotateCcw size={16} aria-hidden="true" />
                                {t('demoRestart')}
                            </button>
                        )}
                    </div>

                    <p className="mt-6 text-sm leading-7 text-slate-600">{t('demoNote')}</p>
                </div>
            </div>
        </article>
    );
};

export default WebsiteDemo;
