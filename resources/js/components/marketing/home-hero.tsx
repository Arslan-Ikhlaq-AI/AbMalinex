import {
    ArrowRight,
    CheckCircle2,
    HeartHandshake,
    Play,
    ShieldCheck,
    Star,
} from 'lucide-react';
import { useRef } from 'react';
import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react';
import { AbMalinexMark } from '@/components/marketing/abmalinex-logo';
import AnimatedCounter from '@/components/marketing/animated-counter';
import BrandButton from '@/components/marketing/brand-button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { heroStats } from '@/lib/marketing-content';
import { contact } from '@/routes';

export const processSteps = [
    {
        title: 'Free Revenue Audit',
        description:
            'We review your claims, denials and A/R to find where revenue is slipping away.',
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
        title: 'Grow With Confidence',
        description:
            'Regular check-ins and clear reporting keep your practice moving forward.',
    },
];

const reassurances = [
    'HIPAA compliant',
    'No long-term contracts',
    'U.S.-based support',
];

/**
 * Offsets a parallax layer by the pointer position stored on the hero.
 */
function parallaxLayer(depth: number): CSSProperties {
    return {
        transform: `translate3d(calc(var(--pointer-x, 0) * ${depth}px), calc(var(--pointer-y, 0) * ${depth}px), 0)`,
    };
}

function HowItWorksDialog() {
    return (
        <Dialog>
            <DialogTrigger className="group text-navy-900 hover:text-brand-700 inline-flex h-14 items-center gap-3 rounded-2xl pr-5 pl-2 text-base font-semibold transition-colors">
                <span className="text-brand-600 ring-brand-100 relative flex size-11 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_-8px_rgb(23_111_147/0.45)] ring-1 transition-transform duration-300 group-hover:scale-105">
                    <span className="animate-pulse-ring ring-brand-300 absolute inset-0 rounded-full ring-2" />
                    <Play className="relative ml-0.5 size-4 fill-current" />
                </span>
                See How It Works
            </DialogTrigger>
            <DialogContent className="font-display text-navy-900 max-w-2xl overflow-hidden border-none bg-white p-0 sm:rounded-3xl">
                <div className="from-brand-50 to-brand-100/60 relative overflow-hidden bg-gradient-to-br via-white p-8">
                    <div className="bg-cyan-glow/15 pointer-events-none absolute -top-16 -right-10 size-56 rounded-full blur-3xl" />
                    <DialogTitle className="font-display relative text-2xl font-bold">
                        How AbMalinex Works
                    </DialogTitle>
                    <DialogDescription className="relative text-slate-600">
                        A simple, proven path from your first conversation to a
                        healthier revenue cycle.
                    </DialogDescription>
                </div>
                <ol className="grid gap-4 p-8 sm:grid-cols-2">
                    {processSteps.map((step, index) => (
                        <li
                            key={step.title}
                            className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-4"
                        >
                            <span className="bg-brand-600 flex size-10 shrink-0 items-center justify-center rounded-xl font-bold text-white">
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

function HeroPortrait() {
    return (
        <div className="relative mx-auto aspect-[5/6] w-full max-w-[34rem]">
            <div
                className="absolute inset-0 transition-transform duration-700 ease-out"
                style={parallaxLayer(-10)}
            >
                <div className="animate-spin-slow border-brand-200 absolute top-[4%] left-[6%] size-[88%] rounded-full border border-dashed" />
                <div className="from-brand-100 via-brand-50 to-cyan-glow/10 absolute top-[14%] right-[4%] bottom-[8%] left-[28%] rounded-t-full rounded-b-[2.5rem] bg-gradient-to-b" />
            </div>

            <div
                className="absolute top-[8%] right-[10%] bottom-[4%] left-[22%] transition-transform duration-700 ease-out"
                style={parallaxLayer(6)}
            >
                <div className="relative size-full overflow-hidden rounded-t-full rounded-b-[2.5rem] shadow-[0_40px_80px_-30px_rgb(10_35_66/0.45)] ring-8 ring-white">
                    <img
                        src="/images/marketing/hero-doctor.jpg"
                        alt="A smiling healthcare professional in teal scrubs"
                        fetchPriority="high"
                        className="size-full object-cover object-top"
                    />
                    <div className="from-navy-900/25 absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent" />
                </div>
            </div>

            <div
                className="absolute bottom-[10%] left-0 size-[34%] transition-transform duration-700 ease-out sm:left-[2%]"
                style={parallaxLayer(14)}
            >
                <img
                    src="/images/marketing/hero-physician.jpg"
                    alt="A physician in a white coat"
                    loading="lazy"
                    className="size-full rounded-full object-cover object-top shadow-[0_24px_50px_-20px_rgb(10_35_66/0.5)] ring-8 ring-white"
                />
            </div>

            <div
                className="absolute top-[6%] left-[8%] transition-transform duration-700 ease-out"
                style={parallaxLayer(18)}
            >
                <div className="animate-float flex size-20 items-center justify-center rounded-3xl bg-white p-3 shadow-[0_20px_50px_-20px_rgb(10_35_66/0.35)] ring-1 ring-slate-100">
                    <AbMalinexMark className="h-full" />
                </div>
            </div>

            <div
                className="absolute top-[30%] -right-2 transition-transform duration-700 ease-out sm:-right-6"
                style={parallaxLayer(22)}
            >
                <div className="animate-float flex items-center gap-3 rounded-2xl bg-white/90 p-3 pr-5 shadow-[0_20px_50px_-20px_rgb(10_35_66/0.35)] ring-1 ring-white backdrop-blur-xl [animation-delay:-2s]">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <ShieldCheck className="size-5" />
                    </span>
                    <span className="flex flex-col">
                        <span className="text-navy-900 text-sm font-semibold">
                            HIPAA Compliant
                        </span>
                        <span className="text-xs text-slate-500">
                            Your data stays protected
                        </span>
                    </span>
                </div>
            </div>

            <div
                className="absolute right-[2%] bottom-[14%] transition-transform duration-700 ease-out"
                style={parallaxLayer(16)}
            >
                <div className="animate-float flex items-center gap-3 rounded-2xl bg-white/90 p-3 pr-5 shadow-[0_20px_50px_-20px_rgb(10_35_66/0.35)] ring-1 ring-white backdrop-blur-xl [animation-delay:-4s]">
                    <span className="bg-brand-50 text-brand-600 flex size-11 items-center justify-center rounded-xl">
                        <HeartHandshake className="size-5" />
                    </span>
                    <span className="flex flex-col">
                        <span className="text-navy-900 text-sm font-semibold">
                            More time for patients
                        </span>
                        <span className="text-xs text-slate-500">
                            We handle the billing
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function HomeHero() {
    const sectionRef = useRef<HTMLElement>(null);

    const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
        const section = sectionRef.current;

        if (!section || event.pointerType !== 'mouse') {
            return;
        }

        const bounds = section.getBoundingClientRect();
        const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;

        section.style.setProperty('--pointer-x', relativeX.toFixed(3));
        section.style.setProperty('--pointer-y', relativeY.toFixed(3));
    };

    return (
        <section
            ref={sectionRef}
            onPointerMove={handlePointerMove}
            className="relative isolate overflow-hidden bg-white"
        >
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_85%_20%,var(--color-brand-50),transparent_70%),radial-gradient(ellipse_60%_50%_at_0%_100%,rgb(238_248_251/0.9),transparent_70%)]" />
                <div className="animate-aurora bg-cyan-glow/10 absolute -top-32 right-[8%] size-[34rem] rounded-full blur-[110px]" />
                <div className="animate-aurora bg-brand-200/30 absolute bottom-[-12rem] left-[-8rem] size-[30rem] rounded-full blur-[110px] [animation-delay:-9s]" />
                <div className="absolute inset-0 bg-[radial-gradient(rgb(15_58_82/0.09)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_30%_40%,black,transparent_75%)] bg-[size:26px_26px]" />
                <svg
                    className="text-brand-200/70 absolute inset-x-0 bottom-0 h-48 w-full"
                    viewBox="0 0 1440 200"
                    preserveAspectRatio="none"
                    fill="none"
                >
                    <path
                        d="M0 150C220 90 420 190 720 130s520-120 720-40"
                        stroke="currentColor"
                    />
                    <path
                        d="M0 175C260 120 460 200 760 150s480-100 680-40"
                        stroke="currentColor"
                        strokeOpacity="0.5"
                    />
                </svg>
            </div>

            <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pt-32 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:pt-40 lg:pb-20">
                <div className="flex min-w-0 flex-col items-start gap-7">
                    <span className="animate-word-in border-brand-100 text-brand-700 inline-flex items-center gap-2 rounded-full border bg-white/80 py-1.5 pr-4 pl-1.5 text-sm font-medium shadow-sm backdrop-blur">
                        <span className="bg-brand-600 flex size-6 items-center justify-center rounded-full text-white">
                            <ShieldCheck className="size-3.5" />
                        </span>
                        Medical Billing & RCM Specialists
                    </span>

                    <h1 className="font-display text-navy-900 text-[2.35rem] leading-[1.06] font-extrabold tracking-[-0.03em] sm:text-6xl xl:text-[4.25rem]">
                        Smart Solutions for Smarter{' '}
                        <span className="relative inline-block whitespace-nowrap">
                            <span className="text-gradient-brand">
                                Healthcare
                            </span>
                            <svg
                                viewBox="0 0 300 20"
                                preserveAspectRatio="none"
                                className="absolute -bottom-2 left-0 h-3 w-full sm:-bottom-3 sm:h-4"
                                aria-hidden="true"
                            >
                                <defs>
                                    <linearGradient id="hero-underline">
                                        <stop stopColor="#22c3dd" />
                                        <stop offset="1" stopColor="#176f93" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M3 14C60 5 150 2 297 9"
                                    fill="none"
                                    stroke="url(#hero-underline)"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    pathLength={1}
                                    strokeDasharray={1}
                                    className="animate-underline-draw"
                                />
                            </svg>
                        </span>
                    </h1>

                    <p className="max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                        End-to-end Medical Billing & RCM services that maximize
                        revenue, reduce denials, and let you focus on what
                        matters most – your patients.
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                        <BrandButton
                            href={contact()}
                            className="btn-shine h-14 rounded-2xl px-8 text-base"
                        >
                            Get Free Audit
                            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                        </BrandButton>
                        <HowItWorksDialog />
                    </div>

                    <ul className="flex flex-wrap gap-x-5 gap-y-2">
                        {reassurances.map((reassurance) => (
                            <li
                                key={reassurance}
                                className="flex items-center gap-2 text-sm text-slate-600"
                            >
                                <CheckCircle2 className="text-brand-500 size-4" />
                                {reassurance}
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                        <div className="flex -space-x-3">
                            {[
                                '/images/marketing/doctor-portrait.jpg',
                                '/images/marketing/office.jpg',
                                '/images/marketing/hero-physician.jpg',
                            ].map((avatar) => (
                                <img
                                    key={avatar}
                                    src={avatar}
                                    alt=""
                                    className="size-11 rounded-full object-cover object-top ring-4 ring-white"
                                />
                            ))}
                            <span className="bg-brand-600 flex size-11 items-center justify-center rounded-full text-xs font-bold text-white ring-4 ring-white">
                                500+
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="flex gap-0.5 text-amber-400">
                                {[0, 1, 2, 3, 4].map((star) => (
                                    <Star
                                        key={star}
                                        className="size-4 fill-current"
                                    />
                                ))}
                            </span>
                            <span className="text-sm text-slate-600">
                                Trusted by practices across the U.S.
                            </span>
                        </div>
                    </div>
                </div>

                <HeroPortrait />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6">
                <div className="grid grid-cols-2 gap-y-8 rounded-3xl border border-white bg-white/80 px-4 py-8 shadow-[0_24px_60px_-28px_rgb(10_35_66/0.25)] backdrop-blur-xl sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-slate-100">
                    {heroStats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center gap-1 px-4 text-center"
                        >
                            <span className="font-display text-navy-900 text-3xl font-extrabold sm:text-4xl">
                                <AnimatedCounter stat={stat} />
                            </span>
                            <span className="text-xs text-slate-500 sm:text-sm">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
