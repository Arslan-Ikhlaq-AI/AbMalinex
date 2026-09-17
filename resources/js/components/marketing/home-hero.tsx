import {
    ArrowRight,
    BadgeCheck,
    CheckCircle2,
    Clock3,
    FileCheck2,
    Play,
    ShieldCheck,
    Star,
    TrendingDown,
    TrendingUp,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import AnimatedCounter from '@/components/marketing/animated-counter';
import BrandButton from '@/components/marketing/brand-button';
import ConstellationCanvas from '@/components/marketing/constellation-canvas';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { heroStats } from '@/lib/marketing-content';
import { cn } from '@/lib/utils';
import { contact } from '@/routes';

const rotatingWords = ['Healthcare', 'Revenue', 'Billing', 'Practices'];

const claimEvents = [
    {
        claim: 'CLM-20931',
        payer: 'Medicare',
        amount: '$1,240.00',
        status: 'Paid',
    },
    {
        claim: 'CLM-20932',
        payer: 'Aetna',
        amount: '$860.50',
        status: 'Approved',
    },
    {
        claim: 'CLM-20925',
        payer: 'Cigna',
        amount: '$430.00',
        status: 'Appeal won',
    },
    { claim: 'CLM-20934', payer: 'BCBS', amount: '$2,115.00', status: 'Paid' },
    {
        claim: 'CLM-20936',
        payer: 'UnitedHealth',
        amount: '$975.25',
        status: 'Approved',
    },
    {
        claim: 'CLM-20938',
        payer: 'Humana',
        amount: '$1,582.40',
        status: 'Paid',
    },
];

export const processSteps = [
    {
        title: 'Free Revenue Audit',
        description:
            'We analyze 90 days of claims, denials and A/R to find hidden revenue leaks.',
    },
    {
        title: 'Seamless Onboarding',
        description:
            'We connect to your EHR/PM system in days, with zero disruption to your staff.',
    },
    {
        title: 'Clean Claims, Daily',
        description:
            'Certified coders and billers submit accurate claims within 24 hours of service.',
    },
    {
        title: 'Grow & Optimize',
        description:
            'Live dashboards and monthly strategy reviews keep your collections climbing.',
    },
];

function usePrefersReducedMotion(): boolean {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        setPrefersReducedMotion(
            window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        );
    }, []);

    return prefersReducedMotion;
}

/**
 * Runs a callback on an interval unless the visitor prefers reduced motion.
 */
function useLiveInterval(callback: () => void, delay: number): void {
    const prefersReducedMotion = usePrefersReducedMotion();
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    });

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        const interval = window.setInterval(() => callbackRef.current(), delay);

        return () => window.clearInterval(interval);
    }, [delay, prefersReducedMotion]);
}

function RotatingWord() {
    const [wordIndex, setWordIndex] = useState(0);

    useLiveInterval(
        () => setWordIndex((index) => (index + 1) % rotatingWords.length),
        2800,
    );

    return (
        <span className="relative inline-block">
            <span className="invisible" aria-hidden="true">
                Healthcare
            </span>
            <span
                key={rotatingWords[wordIndex]}
                className="animate-word-in absolute inset-0 whitespace-nowrap"
            >
                <span className="text-gradient-hero animate-gradient-pan">
                    {rotatingWords[wordIndex]}
                </span>
            </span>
        </span>
    );
}

function LiveDashboard() {
    const [collectionsToday, setCollectionsToday] = useState(48392.1);
    const [claimsProcessed, setClaimsProcessed] = useState(1248);
    const [bars, setBars] = useState([
        38, 52, 44, 61, 55, 70, 64, 78, 72, 84, 80, 92, 88, 96,
    ]);
    const [eventOffset, setEventOffset] = useState(0);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    useLiveInterval(() => {
        setCollectionsToday((total) => total + Math.random() * 180 + 40);
        setClaimsProcessed((count) => count + Math.round(Math.random() * 2));
    }, 1400);

    useLiveInterval(() => {
        setBars((current) => [
            ...current.slice(1),
            Math.round(60 + Math.random() * 40),
        ]);
    }, 1800);

    useLiveInterval(() => {
        setEventOffset((offset) => (offset + 1) % claimEvents.length);
    }, 2600);

    const visibleEvents = [0, 1, 2].map(
        (position) =>
            claimEvents[(eventOffset + position) % claimEvents.length],
    );

    const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;

        setTilt({ x: relativeY * -8, y: relativeX * 10 });
    };

    return (
        <div
            onPointerMove={handlePointerMove}
            onPointerLeave={() => setTilt({ x: 0, y: 0 })}
            className="relative mx-auto w-full max-w-[540px] min-w-0 [perspective:1400px]"
        >
            <div
                className="relative transition-transform duration-300 ease-out [transform-style:preserve-3d]"
                style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                }}
            >
                <div className="glass-dark relative overflow-hidden rounded-[1.75rem] p-6">
                    <div className="bg-cyan-glow/25 pointer-events-none absolute -top-24 -right-20 size-64 rounded-full blur-3xl" />

                    <div className="relative flex items-center justify-between">
                        <div>
                            <p className="text-brand-100/60 text-xs font-medium tracking-wider uppercase">
                                Revenue Command Center
                            </p>
                            <p className="text-sm font-semibold text-white">
                                Heartline Cardiology
                            </p>
                        </div>
                    </div>

                    <div className="relative mt-4 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-brand-100/70 text-sm">
                                Collected today
                            </p>
                            <p className="font-display text-3xl font-extrabold tracking-tight text-white tabular-nums sm:text-5xl">
                                $
                                {collectionsToday.toLocaleString('en-US', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                            </p>
                            <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-emerald-300">
                                <TrendingUp className="size-3.5" />
                                +12.4% vs last week
                            </p>
                        </div>
                        <div className="flex h-20 items-end gap-1">
                            {bars.map((height, index) => (
                                <span
                                    key={index}
                                    className={cn(
                                        'w-1.5 rounded-full transition-all duration-700 ease-out sm:w-2',
                                        index < 6 && 'hidden sm:block',
                                        index === bars.length - 1
                                            ? 'bg-cyan-glow shadow-[0_0_12px_rgb(34_195_221/0.9)]'
                                            : 'from-brand-500/40 to-cyan-glow/80 bg-gradient-to-t',
                                    )}
                                    style={{ height: `${height}%` }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="relative mt-6 grid grid-cols-3 gap-3">
                        {[
                            {
                                label: 'Clean claims',
                                value: '98.7%',
                                icon: FileCheck2,
                            },
                            {
                                label: 'Denial rate',
                                value: '1.6%',
                                icon: TrendingDown,
                            },
                            { label: 'Days in A/R', value: '18', icon: Clock3 },
                        ].map((metric) => (
                            <div
                                key={metric.label}
                                className="rounded-2xl border border-white/10 bg-white/5 p-3"
                            >
                                <metric.icon className="text-cyan-glow size-4" />
                                <p className="font-display mt-2 text-lg font-bold text-white">
                                    {metric.value}
                                </p>
                                <p className="text-brand-100/60 text-[0.65rem]">
                                    {metric.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="relative mt-5 flex flex-col gap-2">
                        <p className="text-brand-100/60 flex items-center gap-2 text-xs font-medium">
                            <span className="relative flex size-2">
                                <span className="animate-pulse-ring absolute inset-0 rounded-full bg-emerald-400" />
                                <span className="relative size-2 rounded-full bg-emerald-400" />
                            </span>
                            Real-time claim activity
                        </p>
                        {visibleEvents.map((claimEvent, position) => (
                            <div
                                key={`${claimEvent.claim}-${eventOffset}-${position}`}
                                className={cn(
                                    'flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5',
                                    position === 0 &&
                                        'animate-feed-in border-cyan-glow/30 bg-cyan-glow/10',
                                )}
                            >
                                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
                                    <CheckCircle2 className="size-4" />
                                </span>
                                <span className="flex min-w-0 flex-1 flex-col">
                                    <span className="truncate text-xs font-semibold text-white">
                                        {claimEvent.claim} · {claimEvent.status}
                                    </span>
                                    <span className="text-brand-100/60 text-[0.65rem]">
                                        {claimEvent.payer} ·{' '}
                                        {position === 0
                                            ? 'just now'
                                            : `${position * 3}s ago`}
                                    </span>
                                </span>
                                <span className="text-sm font-bold text-emerald-300 tabular-nums">
                                    +{claimEvent.amount}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-dark animate-float absolute -top-9 -right-3 hidden [transform:translateZ(60px)] items-center gap-3 rounded-2xl p-3 pr-4 sm:flex lg:-right-10">
                    <svg viewBox="0 0 36 36" className="size-11 -rotate-90">
                        <circle
                            cx="18"
                            cy="18"
                            r="15"
                            fill="none"
                            stroke="rgb(255 255 255 / 0.12)"
                            strokeWidth="4"
                        />
                        <circle
                            cx="18"
                            cy="18"
                            r="15"
                            fill="none"
                            stroke="#22c3dd"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeDasharray={`${0.987 * 94.2} 94.2`}
                        />
                    </svg>
                    <span className="flex flex-col">
                        <span className="text-brand-100/70 text-[0.65rem]">
                            Claims processed
                        </span>
                        <span className="font-display text-lg font-bold text-white tabular-nums">
                            {claimsProcessed.toLocaleString('en-US')}
                        </span>
                    </span>
                </div>

                <div className="glass-dark animate-float absolute -bottom-12 -left-4 hidden [transform:translateZ(80px)] items-center gap-3 rounded-2xl p-3 pr-5 [animation-delay:-3s] sm:flex lg:-left-12">
                    <span className="from-cyan-glow text-navy-950 flex size-10 items-center justify-center rounded-xl bg-gradient-to-br to-emerald-400">
                        <ShieldCheck className="size-5" />
                    </span>
                    <span className="flex flex-col">
                        <span className="text-sm font-bold text-white">
                            HIPAA Compliant
                        </span>
                        <span className="text-brand-100/70 text-[0.65rem]">
                            256-bit encrypted · BAA signed
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}

function HowItWorksDialog() {
    return (
        <Dialog>
            <DialogTrigger className="group inline-flex h-14 items-center gap-3 rounded-2xl border border-white/15 bg-white/5 pr-6 pl-2 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10">
                <span className="text-navy-900 relative flex size-10 items-center justify-center rounded-xl bg-white">
                    <span className="animate-pulse-ring absolute inset-0 rounded-xl bg-white/60" />
                    <Play className="relative size-4 fill-current" />
                </span>
                Watch How It Works
            </DialogTrigger>
            <DialogContent className="font-display text-navy-900 max-w-2xl overflow-hidden border-none bg-white p-0 sm:rounded-3xl">
                <div className="from-navy-950 via-navy-800 to-brand-700 relative overflow-hidden bg-gradient-to-br p-8 text-white">
                    <div className="bg-cyan-glow/30 pointer-events-none absolute -top-16 -right-10 size-56 rounded-full blur-3xl" />
                    <DialogTitle className="font-display relative text-2xl font-bold">
                        How AbMalinex Works
                    </DialogTitle>
                    <DialogDescription className="text-brand-100/80 relative">
                        From first audit to predictable cash flow in four simple
                        steps.
                    </DialogDescription>
                </div>
                <ol className="grid gap-4 p-8 sm:grid-cols-2">
                    {processSteps.map((step, index) => (
                        <li
                            key={step.title}
                            className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-4"
                        >
                            <span className="from-brand-500 to-navy-700 flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br font-bold text-white">
                                {index + 1}
                            </span>
                            <span className="flex flex-col gap-1">
                                <span className="font-semibold">
                                    {step.title}
                                </span>
                                <span className="text-sm text-slate-600">
                                    {step.description}
                                </span>
                            </span>
                        </li>
                    ))}
                </ol>
                <div className="flex justify-end px-8 pb-8">
                    <BrandButton href={contact()}>
                        Start With a Free Audit
                        <ArrowRight className="size-4" />
                    </BrandButton>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default function HomeHero() {
    const sectionRef = useRef<HTMLElement>(null);

    const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
        const section = sectionRef.current;

        if (!section) {
            return;
        }

        const bounds = section.getBoundingClientRect();
        section.style.setProperty(
            '--hero-x',
            `${event.clientX - bounds.left}px`,
        );
        section.style.setProperty(
            '--hero-y',
            `${event.clientY - bounds.top}px`,
        );
    };

    return (
        <section
            ref={sectionRef}
            onPointerMove={handlePointerMove}
            className="bg-navy-950 relative isolate overflow-hidden text-white"
        >
            <div className="absolute inset-0 -z-10">
                <img
                    src="/images/marketing/hero-doctors-tech.jpg"
                    alt=""
                    fetchPriority="high"
                    className="size-full scale-105 object-cover object-[70%_center] opacity-60 saturate-50"
                />
                <div className="bg-brand-600/40 absolute inset-0 mix-blend-color" />
                <div className="from-navy-950 via-navy-950/90 to-navy-950/40 absolute inset-0 bg-gradient-to-r" />
                <div className="from-navy-950 to-navy-950/70 absolute inset-0 bg-gradient-to-t via-transparent" />

                <div className="animate-aurora bg-brand-500/30 absolute -top-40 left-[10%] size-[36rem] rounded-full blur-[120px]" />
                <div className="animate-aurora bg-cyan-glow/20 absolute top-[20%] right-[-10%] size-[32rem] rounded-full blur-[120px] [animation-delay:-6s]" />
                <div className="animate-aurora absolute bottom-[-20%] left-[35%] size-[30rem] rounded-full bg-emerald-400/15 blur-[120px] [animation-delay:-12s]" />

                <div className="bg-grid-dark absolute inset-0" />
                <ConstellationCanvas className="absolute inset-0" />
                <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--hero-x,70%)_var(--hero-y,40%),rgb(34_195_221/0.12),transparent_60%)]" />
            </div>

            <div className="relative mx-auto grid min-h-[min(100svh,58rem)] max-w-7xl items-center gap-16 px-4 pt-32 pb-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:pt-36">
                <div className="flex min-w-0 flex-col items-start gap-7">
                    <span className="animate-word-in text-brand-100 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 py-1.5 pr-4 pl-1.5 text-xs font-medium backdrop-blur-md sm:text-sm">
                        <span className="from-cyan-glow text-navy-950 flex items-center gap-1.5 rounded-full bg-gradient-to-r to-emerald-400 px-2.5 py-0.5 text-xs font-bold">
                            <BadgeCheck className="size-3.5" />
                            HIPAA
                        </span>
                        Trusted by 500+ practices across the U.S.
                    </span>

                    <h1 className="font-display text-[2.4rem] leading-[1.05] font-extrabold tracking-[-0.03em] text-white sm:text-6xl xl:text-[4rem]">
                        <span className="block text-white/95">
                            Smart Solutions for
                        </span>
                        <span className="block">
                            Smarter <RotatingWord />
                        </span>
                    </h1>

                    <p className="text-brand-100/80 max-w-xl text-lg leading-relaxed sm:text-xl">
                        End-to-end medical billing and revenue cycle management
                        that collects{' '}
                        <span className="font-semibold text-white">
                            up to 30% more
                        </span>
                        , cuts denials below{' '}
                        <span className="font-semibold text-white">2%</span>,
                        and gives your team time back for patients.
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                        <BrandButton
                            href={contact()}
                            className="btn-shine from-cyan-glow to-brand-400 text-navy-950 h-14 rounded-2xl bg-gradient-to-r px-7 text-base shadow-[0_0_0_1px_rgb(255_255_255/0.2),0_20px_50px_-12px_rgb(34_195_221/0.7)] hover:shadow-[0_0_0_1px_rgb(255_255_255/0.35),0_24px_60px_-10px_rgb(34_195_221/0.9)]"
                        >
                            Get Your Free Audit
                            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                        </BrandButton>
                        <HowItWorksDialog />
                    </div>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-2">
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2.5">
                                {['SM', 'JP', 'PR', 'AK'].map(
                                    (initials, index) => (
                                        <span
                                            key={initials}
                                            className="border-navy-950 flex size-10 items-center justify-center rounded-full border-2 text-xs font-bold text-white"
                                            style={{
                                                background: `linear-gradient(135deg, ${['#22c3dd', '#1d8aaf', '#34d3b4', '#3aa5c6'][index]}, #0f3a66)`,
                                            }}
                                        >
                                            {initials}
                                        </span>
                                    ),
                                )}
                            </div>
                            <div className="flex flex-col">
                                <span className="flex gap-0.5 text-amber-300">
                                    {[0, 1, 2, 3, 4].map((star) => (
                                        <Star
                                            key={star}
                                            className="size-4 fill-current"
                                        />
                                    ))}
                                </span>
                                <span className="text-brand-100/70 text-sm">
                                    <span className="font-semibold text-white">
                                        4.9/5
                                    </span>{' '}
                                    from 500+ reviews
                                </span>
                            </div>
                        </div>
                        <span className="hidden h-10 w-px bg-white/15 sm:block" />
                        <div className="flex flex-wrap gap-2">
                            {[
                                'AAPC Certified',
                                'SOC 2 Type II',
                                'BAA Ready',
                            ].map((badge) => (
                                <span
                                    key={badge}
                                    className="text-brand-100/90 flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium"
                                >
                                    <ShieldCheck className="text-cyan-glow size-3.5" />
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <LiveDashboard />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6">
                <div className="glass-dark grid grid-cols-2 gap-y-8 rounded-3xl px-4 py-8 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-white/10">
                    {heroStats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center gap-1 px-4 text-center"
                        >
                            <span className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                                <AnimatedCounter stat={stat} />
                            </span>
                            <span className="text-brand-100/70 text-xs sm:text-sm">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="to-navy-950 pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent" />
        </section>
    );
}
