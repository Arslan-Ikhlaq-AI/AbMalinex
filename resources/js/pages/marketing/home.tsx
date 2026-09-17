import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    ArrowUpRight,
    BadgeCheck,
    CalendarClock,
    Calculator,
    CheckCircle2,
    ChevronDown,
    CircleDollarSign,
    Cpu,
    FileCheck2,
    Headset,
    Quote,
    SearchCheck,
    ShieldCheck,
    Sparkles,
    Star,
    TrendingUp,
    Workflow,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import AnimatedCounter from '@/components/marketing/animated-counter';
import AreaChart from '@/components/marketing/area-chart';
import BrandButton from '@/components/marketing/brand-button';
import HomeHero, { processSteps } from '@/components/marketing/home-hero';
import Reveal from '@/components/marketing/reveal';
import SectionHeading from '@/components/marketing/section-heading';
import {
    coreServices,
    faqList,
    resultStats,
    testimonialList,
    trustedPartners,
} from '@/lib/marketing-content';
import { trackSpotlight } from '@/lib/spotlight';
import { cn } from '@/lib/utils';
import { contact, services } from '@/routes';

const resultIcons = [CircleDollarSign, CalendarClock, FileCheck2, TrendingUp];
const processIcons = [SearchCheck, Workflow, BadgeCheck, TrendingUp];

const differentiators = [
    {
        title: 'Certified specialists',
        description:
            'AAPC & AHIMA certified coders assigned to your specialty, never generalists.',
        icon: BadgeCheck,
    },
    {
        title: 'Security by default',
        description:
            'HIPAA compliant, SOC 2 Type II audited, signed BAAs and encrypted PHI.',
        icon: ShieldCheck,
    },
    {
        title: 'Automation + humans',
        description:
            'AI-assisted claim scrubbing catches errors before payers ever see them.',
        icon: Cpu,
    },
    {
        title: 'A team that answers',
        description:
            'A dedicated U.S.-based account manager and same-day responses.',
        icon: Headset,
    },
];

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
});

/**
 * Smoothly animates a displayed number toward its latest target value.
 */
function useTweenedNumber(target: number, duration = 600): number {
    const [displayed, setDisplayed] = useState(target);
    const displayedRef = useRef(target);

    useEffect(() => {
        const startValue = displayedRef.current;
        const startedAt = performance.now();
        let frame = 0;

        const tick = (now: number) => {
            const progress = Math.min((now - startedAt) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = startValue + (target - startValue) * eased;

            displayedRef.current = value;
            setDisplayed(value);

            if (progress < 1) {
                frame = requestAnimationFrame(tick);
            }
        };

        frame = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(frame);
    }, [target, duration]);

    return displayed;
}

function RangeField({
    id,
    label,
    value,
    display,
    min,
    max,
    step,
    onChange,
}: {
    id: string;
    label: string;
    value: number;
    display: string;
    min: number;
    max: number;
    step: number;
    onChange: (value: number) => void;
}) {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-baseline justify-between gap-4">
                <label
                    htmlFor={id}
                    className="text-sm font-medium text-slate-600"
                >
                    {label}
                </label>
                <span className="font-display text-navy-900 text-lg font-bold tabular-nums">
                    {display}
                </span>
            </div>
            <input
                id={id}
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(event) => onChange(Number(event.target.value))}
                className="[&::-moz-range-thumb]:bg-brand-600 [&::-webkit-slider-thumb]:bg-brand-600 h-2 w-full cursor-pointer appearance-none rounded-full [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-white [&::-webkit-slider-thumb]:size-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-[0_2px_10px_rgb(23_111_147/0.5)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110"
                style={{
                    background: `linear-gradient(to right, #1d8aaf ${percentage}%, #e2eef3 ${percentage}%)`,
                }}
            />
        </div>
    );
}

function RevenueCalculator() {
    const [claimsPerMonth, setClaimsPerMonth] = useState(1200);
    const [averageClaimValue, setAverageClaimValue] = useState(180);
    const [denialRate, setDenialRate] = useState(9);

    const monthlyBilled = claimsPerMonth * averageClaimValue;
    const currentMonthlyCollections =
        monthlyBilled * (1 - (denialRate / 100) * 0.65) * 0.9;
    const improvedMonthlyCollections =
        monthlyBilled * (1 - 0.016 * 0.65) * 0.96;
    const annualGain = Math.max(
        (improvedMonthlyCollections - currentMonthlyCollections) * 12,
        0,
    );
    const displayedGain = useTweenedNumber(annualGain);
    const improvedShare = 100;
    const currentShare =
        (currentMonthlyCollections / improvedMonthlyCollections) * 100;

    return (
        <section className="relative px-4 py-24 sm:px-6 lg:py-32">
            <div className="via-brand-50/50 pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white to-white" />
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                <SectionHeading
                    align="left"
                    eyebrow="Revenue calculator"
                    title="How much revenue is your practice leaving behind?"
                    description="Move the sliders to estimate what cleaner claims, fewer denials and consistent A/R follow-up could add to your bottom line."
                />

                <Reveal className="grid overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-[0_40px_100px_-40px_rgb(10_35_66/0.35)] md:grid-cols-2">
                    <div className="flex flex-col gap-7 p-8">
                        <span className="text-brand-700 flex items-center gap-2 text-sm font-semibold">
                            <Calculator className="size-4" />
                            Your practice today
                        </span>
                        <RangeField
                            id="claims-per-month"
                            label="Claims per month"
                            value={claimsPerMonth}
                            display={claimsPerMonth.toLocaleString('en-US')}
                            min={100}
                            max={5000}
                            step={50}
                            onChange={setClaimsPerMonth}
                        />
                        <RangeField
                            id="average-claim"
                            label="Average claim value"
                            value={averageClaimValue}
                            display={currencyFormatter.format(
                                averageClaimValue,
                            )}
                            min={50}
                            max={600}
                            step={10}
                            onChange={setAverageClaimValue}
                        />
                        <RangeField
                            id="denial-rate"
                            label="Current denial rate"
                            value={denialRate}
                            display={`${denialRate}%`}
                            min={2}
                            max={20}
                            step={1}
                            onChange={setDenialRate}
                        />
                    </div>

                    <div className="bg-navy-950 relative flex flex-col gap-6 overflow-hidden p-8 text-white">
                        <div className="bg-cyan-glow/25 pointer-events-none absolute -top-20 -right-20 size-64 rounded-full blur-3xl" />
                        <div className="relative">
                            <p className="text-brand-100/70 text-sm">
                                Estimated additional revenue per year
                            </p>
                            <p className="text-gradient-hero animate-gradient-pan font-display mt-1 text-5xl font-extrabold tracking-tight tabular-nums">
                                {currencyFormatter.format(displayedGain)}
                            </p>
                        </div>

                        <div className="relative flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <div className="text-brand-100/70 flex justify-between text-xs">
                                    <span>Current collections</span>
                                    <span className="tabular-nums">
                                        {currencyFormatter.format(
                                            currentMonthlyCollections,
                                        )}
                                        /mo
                                    </span>
                                </div>
                                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                                    <div
                                        className="h-full rounded-full bg-white/40 transition-[width] duration-500"
                                        style={{ width: `${currentShare}%` }}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="text-brand-100/70 flex justify-between text-xs">
                                    <span className="font-semibold text-white">
                                        With AbMalinex
                                    </span>
                                    <span className="font-semibold text-white tabular-nums">
                                        {currencyFormatter.format(
                                            improvedMonthlyCollections,
                                        )}
                                        /mo
                                    </span>
                                </div>
                                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                                    <div
                                        className="from-brand-400 to-cyan-glow h-full rounded-full bg-gradient-to-r shadow-[0_0_20px_rgb(34_195_221/0.6)] transition-[width] duration-500"
                                        style={{ width: `${improvedShare}%` }}
                                    />
                                </div>
                            </div>
                        </div>

                        <BrandButton
                            href={contact()}
                            className="btn-shine text-navy-900 hover:bg-brand-50 relative mt-auto h-12 rounded-xl bg-white"
                        >
                            Get my exact numbers
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </BrandButton>
                        <p className="text-brand-100/50 relative text-[0.7rem]">
                            Illustrative estimate based on industry benchmarks.
                            Your free audit calculates your actual opportunity.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

function ServicesBento() {
    const [featuredService, ...otherServices] = coreServices;
    const analyticsService = otherServices[otherServices.length - 1];
    const compactServices = otherServices.slice(0, -1);

    return (
        <section className="px-4 py-24 sm:px-6 lg:py-32">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
                    <SectionHeading
                        align="left"
                        eyebrow="What we do"
                        title="Our Core Services"
                        description="Comprehensive RCM solutions tailored to your practice's success, delivered by one accountable team."
                    />
                    <Reveal>
                        <BrandButton href={services()} variant="outline">
                            Explore all services
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </BrandButton>
                    </Reveal>
                </div>

                <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <Reveal className="sm:col-span-2 lg:row-span-2">
                        <Link
                            href={`${services().url}#${featuredService.slug}`}
                            className="group bg-navy-950 relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden rounded-[1.75rem] p-8 text-white"
                        >
                            <img
                                src={featuredService.image}
                                alt=""
                                loading="lazy"
                                className="absolute inset-0 size-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="from-navy-950 via-navy-950/70 to-brand-700/20 absolute inset-0 bg-gradient-to-t" />
                            <div className="relative flex flex-col gap-4">
                                <span className="text-cyan-glow flex size-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
                                    <featuredService.icon
                                        className="size-7"
                                        strokeWidth={1.6}
                                    />
                                </span>
                                <h3 className="font-display text-3xl font-bold">
                                    {featuredService.title}
                                </h3>
                                <p className="text-brand-100/80 max-w-md">
                                    {featuredService.description}
                                </p>
                                <ul className="grid max-w-md grid-cols-2 gap-2">
                                    {featuredService.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="text-brand-100/90 flex items-center gap-2 text-sm"
                                        >
                                            <CheckCircle2 className="text-cyan-glow size-4" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <span className="text-cyan-glow mt-2 inline-flex items-center gap-2 text-sm font-semibold">
                                    Learn more
                                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </span>
                            </div>
                        </Link>
                    </Reveal>

                    {compactServices.map((service, index) => (
                        <Reveal key={service.slug} delay={(index % 4) * 60}>
                            <Link
                                href={`${services().url}#${service.slug}`}
                                onMouseMove={trackSpotlight}
                                className="spotlight-card group hover:border-brand-200 flex h-full flex-col gap-4 rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-[0_4px_24px_-12px_rgb(10_35_66/0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgb(23_111_147/0.35)]"
                            >
                                <div className="flex items-start justify-between">
                                    <span className="from-brand-50 to-brand-100 text-brand-600 ring-brand-100 group-hover:from-brand-500 group-hover:to-navy-700 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ring-1 transition-all duration-300 group-hover:text-white">
                                        <service.icon
                                            className="size-6"
                                            strokeWidth={1.6}
                                        />
                                    </span>
                                    <ArrowUpRight className="group-hover:text-brand-600 size-5 text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <h3 className="font-display text-navy-900 font-bold">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-slate-500">
                                        {service.summary}
                                    </p>
                                </div>
                            </Link>
                        </Reveal>
                    ))}

                    <Reveal className="sm:col-span-2 lg:col-span-4">
                        <Link
                            href={`${services().url}#${analyticsService.slug}`}
                            className="group from-navy-900 via-navy-800 to-brand-800 relative grid items-center gap-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br p-8 text-white md:grid-cols-[1fr_1.3fr]"
                        >
                            <div className="bg-cyan-glow/20 pointer-events-none absolute -right-20 -bottom-24 size-80 rounded-full blur-3xl" />
                            <div className="relative flex flex-col gap-4">
                                <span className="text-cyan-glow flex size-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                                    <analyticsService.icon
                                        className="size-6"
                                        strokeWidth={1.6}
                                    />
                                </span>
                                <h3 className="font-display text-2xl font-bold">
                                    {analyticsService.title}
                                </h3>
                                <p className="text-brand-100/80">
                                    {analyticsService.description}
                                </p>
                                <span className="text-cyan-glow inline-flex items-center gap-2 text-sm font-semibold">
                                    See the live dashboard
                                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </span>
                            </div>
                            <div className="glass-dark relative rounded-2xl p-5">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="font-semibold">
                                        Net collections
                                    </span>
                                    <span className="font-semibold text-emerald-300">
                                        +32%
                                    </span>
                                </div>
                                <AreaChart
                                    tone="dark"
                                    className="mt-3 h-36"
                                    series={[
                                        48, 52, 50, 61, 66, 64, 75, 82, 80, 94,
                                    ]}
                                    labels={['Q1', 'Q2', 'Q3', 'Q4']}
                                />
                            </div>
                        </Link>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

function ResultsShowcase() {
    return (
        <section className="px-4 sm:px-6">
            <Reveal className="bg-navy-950 relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-14 text-white sm:px-12 lg:py-16">
                <img
                    src="/images/marketing/doctor-portrait.jpg"
                    alt=""
                    loading="lazy"
                    className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-30 mix-blend-luminosity lg:block"
                />
                <div className="from-navy-950 via-navy-950/95 to-navy-900/60 absolute inset-0 bg-gradient-to-r" />
                <div className="animate-aurora bg-brand-500/30 pointer-events-none absolute -top-32 right-1/4 size-96 rounded-full blur-[100px]" />
                <div className="bg-grid-dark pointer-events-none absolute inset-0" />

                <div className="relative flex flex-col gap-10">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                        <div>
                            <span className="text-cyan-glow text-sm font-semibold tracking-wider uppercase">
                                Proven outcomes
                            </span>
                            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
                                Real Results. Real Impact.
                            </h2>
                            <p className="text-brand-100/80 mt-3 max-w-lg">
                                We help practices improve revenue and streamline
                                their operations, measured every single month.
                            </p>
                        </div>
                        <BrandButton href={contact()} variant="ghost-light">
                            See your potential
                            <ArrowRight className="size-4" />
                        </BrandButton>
                    </div>

                    <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_2fr]">
                        <div className="text-navy-900 rounded-3xl bg-white p-6 shadow-2xl shadow-black/40">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="font-semibold">
                                        Collections Trend
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        Last 7 months
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-display text-xl font-bold text-emerald-600">
                                        +32%
                                    </p>
                                    <p className="text-[0.65rem] text-slate-400">
                                        vs previous 6 months
                                    </p>
                                </div>
                            </div>
                            <AreaChart
                                className="mt-4 h-44"
                                series={[210, 260, 240, 320, 300, 380, 460]}
                                labels={[
                                    'Jan',
                                    'Feb',
                                    'Mar',
                                    'Apr',
                                    'May',
                                    'Jun',
                                    'Jul',
                                ]}
                                yTicks={['500', '400', '300', '200']}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {resultStats.map((stat, index) => {
                                const Icon = resultIcons[index];

                                return (
                                    <div
                                        key={stat.label}
                                        className="glass-dark group flex flex-col justify-between gap-6 rounded-3xl p-6 transition-colors hover:bg-white/10"
                                    >
                                        <span className="bg-cyan-glow/15 text-cyan-glow ring-cyan-glow/30 flex size-12 items-center justify-center rounded-2xl ring-1">
                                            <Icon
                                                className="size-6"
                                                strokeWidth={1.6}
                                            />
                                        </span>
                                        <div>
                                            <p className="font-display text-4xl font-extrabold sm:text-5xl">
                                                <AnimatedCounter stat={stat} />
                                            </p>
                                            <p className="text-brand-100/70 mt-1 text-sm">
                                                {stat.label}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}

function WhyAbMalinex() {
    return (
        <section className="px-4 py-24 sm:px-6 lg:py-32">
            <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
                <Reveal className="relative">
                    <div className="from-cyan-glow/25 via-brand-400/10 absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br to-transparent blur-2xl" />
                    <img
                        src="/images/marketing/doctor-patient.jpg"
                        alt="A physician reviewing results with a patient"
                        loading="lazy"
                        className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl sm:aspect-[4/3] lg:aspect-[4/5]"
                    />
                    <div className="absolute top-6 -right-3 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/85 p-4 shadow-xl backdrop-blur-xl sm:-right-8">
                        <span className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                            <TrendingUp className="size-5" />
                        </span>
                        <span className="flex flex-col">
                            <span className="font-display text-navy-900 text-2xl font-extrabold">
                                97%
                            </span>
                            <span className="text-xs text-slate-500">
                                Net collection rate
                            </span>
                        </span>
                    </div>
                    <div className="bg-navy-950 absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl p-4 pr-6 text-white shadow-2xl sm:-left-8">
                        <span className="from-cyan-glow to-brand-500 text-navy-950 flex size-11 items-center justify-center rounded-xl bg-gradient-to-br">
                            <Sparkles className="size-5" />
                        </span>
                        <span className="flex flex-col">
                            <span className="font-semibold">
                                More time for patients
                            </span>
                            <span className="text-brand-100/70 text-xs">
                                ~20 staff hours saved weekly
                            </span>
                        </span>
                    </div>
                </Reveal>

                <div className="flex flex-col gap-10">
                    <SectionHeading
                        align="left"
                        eyebrow="Why AbMalinex"
                        title="A billing partner that works like part of your practice"
                        description="Technology catches errors early. Certified experts handle the complexity. You get predictable cash flow and complete visibility."
                    />
                    <div className="grid gap-6 sm:grid-cols-2">
                        {differentiators.map((item, index) => (
                            <Reveal
                                key={item.title}
                                delay={index * 80}
                                className="flex flex-col gap-3"
                            >
                                <span className="bg-navy-950 text-cyan-glow shadow-navy-950/20 flex size-12 items-center justify-center rounded-2xl shadow-lg">
                                    <item.icon
                                        className="size-6"
                                        strokeWidth={1.6}
                                    />
                                </span>
                                <h3 className="font-display text-navy-900 text-lg font-bold">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-600">
                                    {item.description}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProcessTimeline() {
    return (
        <section className="relative overflow-hidden bg-slate-50/70 px-4 py-24 sm:px-6 lg:py-32">
            <div className="bg-grid-fade pointer-events-none absolute inset-0" />
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="How it works"
                    title="From audit to predictable cash flow"
                    description="A proven four-step process that gets you paid faster without disrupting your practice."
                />
                <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="from-brand-200 via-cyan-glow to-brand-200 absolute top-10 right-[12%] left-[12%] hidden h-px bg-gradient-to-r lg:block" />
                    {processSteps.map((step, index) => {
                        const Icon = processIcons[index];

                        return (
                            <Reveal
                                key={step.title}
                                delay={index * 120}
                                className="group relative flex flex-col items-center gap-5 rounded-3xl p-6 text-center transition-colors hover:bg-white hover:shadow-[0_20px_50px_-24px_rgb(10_35_66/0.25)]"
                            >
                                <span className="text-brand-600 shadow-brand-900/10 ring-brand-100 group-hover:bg-navy-950 group-hover:text-cyan-glow relative flex size-20 items-center justify-center rounded-3xl bg-white shadow-lg ring-1 transition-all duration-300">
                                    <Icon
                                        className="size-8"
                                        strokeWidth={1.5}
                                    />
                                    <span className="from-cyan-glow to-brand-600 absolute -top-2 -right-2 flex size-7 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white shadow">
                                        {index + 1}
                                    </span>
                                </span>
                                <h3 className="font-display text-navy-900 text-lg font-bold">
                                    {step.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-500">
                                    {step.description}
                                </p>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({
    testimonial,
}: {
    testimonial: (typeof testimonialList)[number];
}) {
    return (
        <figure className="flex w-[22rem] shrink-0 flex-col gap-5 rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_10px_40px_-20px_rgb(10_35_66/0.2)] sm:w-[26rem]">
            <div className="flex items-center justify-between">
                <span className="flex gap-0.5 text-amber-400">
                    {[0, 1, 2, 3, 4].map((star) => (
                        <Star key={star} className="size-4 fill-current" />
                    ))}
                </span>
                <Quote className="fill-brand-100 text-brand-400 size-7" />
            </div>
            <blockquote className="leading-relaxed text-slate-700">
                “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3 border-t border-slate-100 pt-5">
                <span className="from-brand-400 to-navy-700 flex size-11 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white">
                    {testimonial.name
                        .replace('Dr. ', '')
                        .split(' ')
                        .map((part) => part[0])
                        .join('')}
                </span>
                <span className="flex flex-col">
                    <span className="text-navy-900 font-semibold">
                        {testimonial.name}
                    </span>
                    <span className="text-xs text-slate-500">
                        {testimonial.role}
                    </span>
                </span>
            </figcaption>
        </figure>
    );
}

function TestimonialsMarquee() {
    const firstRow = testimonialList.slice(0, 3);
    const secondRow = testimonialList.slice(3);

    return (
        <section className="overflow-hidden py-24 lg:py-32">
            <div className="px-4 sm:px-6">
                <SectionHeading
                    eyebrow="Testimonials"
                    title="Loved by practices across the country"
                    description="Physicians, practice managers and administrators trust us with their revenue."
                />
            </div>
            <div className="mt-14 flex flex-col gap-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                {[firstRow, secondRow].map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={cn(
                            'flex w-max gap-6 hover:[animation-play-state:paused]',
                            rowIndex === 0
                                ? 'animate-marquee-slow'
                                : 'animate-marquee-reverse',
                        )}
                    >
                        {[...row, ...row, ...row, ...row].map(
                            (testimonial, index) => (
                                <TestimonialCard
                                    key={`${testimonial.name}-${index}`}
                                    testimonial={testimonial}
                                />
                            ),
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <>
            <Head title="Medical Billing & RCM Services" />

            <HomeHero />

            <section className="border-b border-slate-100 bg-white py-12">
                <p className="text-center text-sm font-medium tracking-wide text-slate-500">
                    Seamlessly integrated with the EHR & PM systems you already
                    use
                </p>
                <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                    <div className="animate-marquee flex w-max gap-16 hover:[animation-play-state:paused]">
                        {[...trustedPartners, ...trustedPartners].map(
                            (partner, index) => (
                                <span
                                    key={`${partner}-${index}`}
                                    className="font-display hover:text-brand-600 text-2xl font-bold whitespace-nowrap text-slate-300 transition-colors"
                                >
                                    {partner}
                                </span>
                            ),
                        )}
                    </div>
                </div>
            </section>

            <ServicesBento />
            <ResultsShowcase />
            <RevenueCalculator />
            <WhyAbMalinex />
            <ProcessTimeline />
            <TestimonialsMarquee />

            <section className="px-4 pb-24 sm:px-6 lg:pb-32">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr]">
                    <div className="flex flex-col gap-6">
                        <SectionHeading
                            align="left"
                            eyebrow="FAQ"
                            title="Questions practices ask us"
                            description="Can't find what you're looking for? Our billing specialists are one call away."
                        />
                        <Reveal>
                            <BrandButton href={contact()}>
                                Talk to a specialist
                                <ArrowRight className="size-4" />
                            </BrandButton>
                        </Reveal>
                    </div>
                    <div className="flex flex-col gap-3">
                        {faqList.map((faq, index) => (
                            <Reveal key={faq.question} delay={index * 60}>
                                <details className="group open:border-brand-200 open:bg-brand-50/40 rounded-2xl border border-slate-200 bg-white p-6 transition-all open:shadow-[0_20px_40px_-24px_rgb(23_111_147/0.35)]">
                                    <summary className="font-display text-navy-900 flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                                        {faq.question}
                                        <span className="text-brand-600 group-open:bg-brand-600 flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-open:rotate-180 group-open:text-white">
                                            <ChevronDown className="size-4" />
                                        </span>
                                    </summary>
                                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                                        {faq.answer}
                                    </p>
                                </details>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
