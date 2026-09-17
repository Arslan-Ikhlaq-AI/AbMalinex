import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    ArrowUpRight,
    BadgeCheck,
    CalendarClock,
    CheckCircle2,
    ChevronDown,
    CircleDollarSign,
    FileCheck2,
    Play,
    Quote,
    SearchCheck,
    Star,
    TrendingUp,
    Workflow,
} from 'lucide-react';
import { AbMalinexMark } from '@/components/marketing/abmalinex-logo';
import AnimatedCounter from '@/components/marketing/animated-counter';
import AreaChart from '@/components/marketing/area-chart';
import BrandButton from '@/components/marketing/brand-button';
import CtaBanner from '@/components/marketing/cta-banner';
import Reveal from '@/components/marketing/reveal';
import SectionHeading from '@/components/marketing/section-heading';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    coreServices,
    faqList,
    heroStats,
    resultStats,
    testimonialList,
    trustedPartners,
} from '@/lib/marketing-content';
import { trackSpotlight } from '@/lib/spotlight';
import { contact, services } from '@/routes';

const resultIcons = [CircleDollarSign, CalendarClock, FileCheck2, TrendingUp];

const processSteps = [
    {
        title: 'Free Revenue Audit',
        description:
            'We analyze 90 days of claims, denials and A/R to find hidden revenue leaks.',
        icon: SearchCheck,
    },
    {
        title: 'Seamless Onboarding',
        description:
            'We connect to your EHR/PM system in days, with zero disruption to your staff.',
        icon: Workflow,
    },
    {
        title: 'Clean Claims, Daily',
        description:
            'Certified coders and billers submit accurate claims within 24 hours of service.',
        icon: BadgeCheck,
    },
    {
        title: 'Grow & Optimize',
        description:
            'Live dashboards and monthly strategy reviews keep your collections climbing.',
        icon: TrendingUp,
    },
];

function HeroVisual() {
    return (
        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="bg-cyan-glow/25 absolute inset-[12%] rounded-full blur-3xl" />
            <div className="animate-spin-slow border-brand-300/60 absolute inset-[6%] rounded-full border border-dashed" />
            <div className="border-brand-200/70 absolute inset-[16%] rounded-full border" />

            <svg
                viewBox="0 0 400 400"
                className="text-brand-400/50 absolute inset-0 size-full"
                aria-hidden="true"
            >
                {[
                    'M40 250h60l20-20h40',
                    'M360 150h-50l-20 20h-30',
                    'M60 120h50l25 25',
                    'M340 280h-60l-25-25',
                ].map((path) => (
                    <path
                        key={path}
                        d={path}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                ))}
                {[
                    [40, 250],
                    [360, 150],
                    [60, 120],
                    [340, 280],
                ].map(([cx, cy]) => (
                    <circle
                        key={`${cx}-${cy}`}
                        cx={cx}
                        cy={cy}
                        r="4"
                        fill="#22c3dd"
                    />
                ))}
            </svg>

            <div className="absolute inset-x-[18%] bottom-[8%] h-[16%]">
                <div className="from-brand-100 to-brand-300/70 absolute inset-0 rounded-[50%] bg-gradient-to-b shadow-[0_20px_60px_-10px_rgb(34_195_221/0.6)]" />
                <div className="border-cyan-glow/70 absolute inset-x-[10%] top-[18%] h-[50%] rounded-[50%] border-2 bg-white/60 shadow-[0_0_40px_rgb(34_195_221/0.8)]" />
                <div className="animate-pulse-ring border-cyan-glow/60 absolute inset-x-[10%] top-[18%] h-[50%] rounded-[50%] border-2" />
            </div>

            <div className="animate-float absolute inset-x-[20%] top-[8%] bottom-[22%]">
                <AbMalinexMark className="size-full drop-shadow-[0_30px_40px_rgb(15_58_102/0.35)]" />
            </div>

            <div className="animate-float shadow-navy-900/10 absolute top-[14%] -left-2 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/80 p-3 pr-4 shadow-xl backdrop-blur-xl [animation-delay:-2s] sm:left-0">
                <span className="flex size-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="size-5" />
                </span>
                <span className="flex flex-col">
                    <span className="text-[0.65rem] text-slate-500">
                        Claim approved
                    </span>
                    <span className="text-navy-900 text-sm font-bold">
                        +$2,340.00
                    </span>
                </span>
            </div>

            <div className="animate-float shadow-navy-900/10 absolute right-0 bottom-[30%] flex flex-col gap-1 rounded-2xl border border-white/70 bg-white/80 p-3 shadow-xl backdrop-blur-xl [animation-delay:-4s]">
                <span className="text-[0.65rem] text-slate-500">
                    Clean claim rate
                </span>
                <span className="text-navy-900 flex items-center gap-2 text-lg font-bold">
                    98.4%
                    <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 text-[0.6rem] font-semibold text-emerald-600">
                        ▲ 4.2%
                    </span>
                </span>
                <div className="flex h-6 items-end gap-1">
                    {[40, 55, 45, 70, 62, 85, 95].map((height, index) => (
                        <span
                            key={index}
                            className="from-brand-500 to-cyan-glow w-2 rounded-sm bg-gradient-to-t"
                            style={{ height: `${height}%` }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function HowItWorksDialog() {
    return (
        <Dialog>
            <DialogTrigger className="group border-brand-600/40 text-brand-700 hover:border-brand-600 inline-flex h-12 items-center gap-3 rounded-xl border bg-white/70 pr-6 pl-2 text-base font-semibold backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
                <span className="bg-brand-600 relative flex size-8 items-center justify-center rounded-lg text-white">
                    <span className="animate-pulse-ring bg-brand-500 absolute inset-0 rounded-lg" />
                    <Play className="relative size-3.5 fill-current" />
                </span>
                Watch How It Works
            </DialogTrigger>
            <DialogContent className="font-display text-navy-900 max-w-2xl border-none bg-white p-0 sm:rounded-3xl">
                <div className="from-navy-900 to-brand-700 rounded-t-3xl bg-gradient-to-br p-8 text-white">
                    <DialogTitle className="font-display text-2xl font-bold">
                        How AbMalinex Works
                    </DialogTitle>
                    <DialogDescription className="text-brand-100/80">
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

export default function Home() {
    return (
        <>
            <Head title="Medical Billing & RCM Services" />

            <section className="relative overflow-hidden px-4 pt-32 sm:px-6 lg:pt-36">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-brand-100),transparent_55%),radial-gradient(ellipse_at_bottom_left,var(--color-brand-50),transparent_60%)]" />
                <div className="bg-grid-fade pointer-events-none absolute inset-0" />
                <svg
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full text-white"
                    viewBox="0 0 1440 160"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path
                        d="M0 90C240 150 480 160 720 120s480-110 720-60v100H0z"
                        fill="currentColor"
                    />
                    <path
                        d="M0 80C240 140 480 150 720 110s480-110 720-60"
                        fill="none"
                        stroke="#aedcea"
                        strokeOpacity="0.6"
                    />
                </svg>

                <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
                    <Reveal className="flex flex-col items-start gap-6">
                        <span className="border-brand-200 text-brand-700 inline-flex items-center gap-2 rounded-full border bg-white/80 py-1 pr-3 pl-1 text-xs font-semibold shadow-sm backdrop-blur">
                            <span className="bg-brand-600 rounded-full px-2 py-0.5 text-white">
                                New
                            </span>
                            AI-assisted claim scrubbing is live
                            <ArrowRight className="size-3" />
                        </span>
                        <h1 className="font-display text-navy-900 text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl xl:text-[4.1rem]">
                            Smart Solutions for{' '}
                            <br className="hidden sm:block" />
                            Smarter{' '}
                            <span className="text-gradient-brand">
                                Healthcare
                            </span>
                        </h1>
                        <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                            End-to-end Medical Billing & RCM services that
                            maximize revenue, reduce denials, and let you focus
                            on what matters most – your patients.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <BrandButton href={contact()} size="lg">
                                Get Free Audit
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </BrandButton>
                            <HowItWorksDialog />
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                            <div className="flex -space-x-2">
                                {['SM', 'JP', 'PR', 'AK'].map((initials) => (
                                    <span
                                        key={initials}
                                        className="from-brand-400 to-navy-700 flex size-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br text-[0.65rem] font-bold text-white"
                                    >
                                        {initials}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <span className="flex gap-0.5 text-amber-400">
                                    {[0, 1, 2, 3, 4].map((star) => (
                                        <Star
                                            key={star}
                                            className="size-3.5 fill-current"
                                        />
                                    ))}
                                </span>
                                <span className="text-xs text-slate-600">
                                    Rated 4.9/5 by 500+ practices
                                </span>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={150}>
                        <HeroVisual />
                    </Reveal>
                </div>

                <Reveal
                    delay={250}
                    className="relative mx-auto mt-8 max-w-6xl pb-10"
                >
                    <div className="grid grid-cols-2 gap-y-6 rounded-3xl border border-white bg-white/80 px-4 py-8 shadow-[0_24px_60px_-24px_rgb(10_35_66/0.25)] backdrop-blur-xl sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-slate-100">
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
                </Reveal>
            </section>

            <section className="px-4 py-16 sm:px-6 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading
                        eyebrow="What we do"
                        title="Our Core Services"
                        description="Comprehensive RCM solutions tailored to your practice's success."
                    />
                    <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
                        {coreServices.map((service, index) => (
                            <Reveal key={service.slug} delay={index * 50}>
                                <Link
                                    href={`${services().url}#${service.slug}`}
                                    onMouseMove={trackSpotlight}
                                    className="spotlight-card group hover:border-brand-200 flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-[0_4px_20px_-8px_rgb(10_35_66/0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-16px_rgb(23_111_147/0.35)] sm:p-6"
                                >
                                    <span className="bg-brand-50 text-brand-600 ring-brand-100 group-hover:bg-brand-600 group-hover:ring-brand-600 flex size-14 items-center justify-center rounded-2xl ring-1 transition-all duration-300 group-hover:text-white">
                                        <service.icon
                                            className="size-7"
                                            strokeWidth={1.6}
                                        />
                                    </span>
                                    <h3 className="text-navy-900 font-semibold">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-slate-500">
                                        {service.summary}
                                    </p>
                                    <span className="text-brand-600 mt-auto flex items-center gap-1 text-xs font-semibold opacity-0 transition-opacity group-hover:opacity-100">
                                        Learn more
                                        <ArrowUpRight className="size-3.5" />
                                    </span>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 sm:px-6">
                <Reveal className="bg-navy-900 relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-12 text-white sm:px-10 lg:py-14">
                    <img
                        src="/images/marketing/doctor-portrait.jpg"
                        alt=""
                        loading="lazy"
                        className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-30 mix-blend-luminosity lg:block"
                    />
                    <div className="from-navy-900 via-navy-900/95 to-navy-800/60 absolute inset-0 bg-gradient-to-r" />
                    <div className="bg-brand-500/30 pointer-events-none absolute -top-24 right-1/4 size-80 rounded-full blur-3xl" />

                    <div className="relative flex flex-col gap-8">
                        <div>
                            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                                Real Results. Real Impact.
                            </h2>
                            <p className="text-brand-100/80 mt-2">
                                We help practices improve revenue and streamline
                                their operations.
                            </p>
                        </div>

                        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_2fr]">
                            <div className="text-navy-900 shadow-navy-950/40 rounded-2xl bg-white p-5 shadow-2xl">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm font-semibold">
                                            Collections Trend
                                        </p>
                                        <p className="text-xs text-slate-500">
                                            Last 7 months
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-emerald-600">
                                            +32%
                                        </p>
                                        <p className="text-[0.65rem] text-slate-400">
                                            vs previous 6 months
                                        </p>
                                    </div>
                                </div>
                                <AreaChart
                                    className="mt-4 h-40"
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

                            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
                                {resultStats.map((stat, index) => {
                                    const Icon = resultIcons[index];

                                    return (
                                        <div
                                            key={stat.label}
                                            className="flex flex-col items-center gap-2 text-center"
                                        >
                                            <span className="text-cyan-glow flex size-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                                                <Icon
                                                    className="size-6"
                                                    strokeWidth={1.6}
                                                />
                                            </span>
                                            <span className="font-display text-3xl font-extrabold">
                                                <AnimatedCounter stat={stat} />
                                            </span>
                                            <span className="text-brand-100/70 text-xs sm:text-sm">
                                                {stat.label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            <section className="py-14">
                <p className="text-center text-sm font-medium text-slate-500">
                    Trusted by Healthcare Providers Across the U.S.
                </p>
                <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                    <div className="animate-marquee flex w-max gap-16 hover:[animation-play-state:paused]">
                        {[...trustedPartners, ...trustedPartners].map(
                            (partner, index) => (
                                <span
                                    key={`${partner}-${index}`}
                                    className="font-display hover:text-brand-600 text-2xl font-bold whitespace-nowrap text-slate-400 italic transition-colors"
                                >
                                    {partner}
                                </span>
                            ),
                        )}
                    </div>
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading
                        eyebrow="How it works"
                        title="From audit to predictable cash flow"
                        description="A proven four-step process that gets you paid faster without disrupting your practice."
                    />
                    <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <div className="via-brand-300 absolute top-8 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-transparent to-transparent lg:block" />
                        {processSteps.map((step, index) => (
                            <Reveal
                                key={step.title}
                                delay={index * 100}
                                className="relative flex flex-col items-center gap-4 text-center"
                            >
                                <span className="text-brand-600 shadow-brand-900/10 ring-brand-100 relative flex size-16 items-center justify-center rounded-2xl bg-white shadow-lg ring-1">
                                    <step.icon
                                        className="size-7"
                                        strokeWidth={1.6}
                                    />
                                    <span className="bg-navy-800 absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full text-[0.65rem] font-bold text-white">
                                        {index + 1}
                                    </span>
                                </span>
                                <h3 className="text-navy-900 font-semibold">
                                    {step.title}
                                </h3>
                                <p className="max-w-xs text-sm text-slate-500">
                                    {step.description}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="via-brand-50/60 bg-gradient-to-b from-white to-white px-4 py-16 sm:px-6 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading
                        eyebrow="Testimonials"
                        title="Practices that trust us with their revenue"
                    />
                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {testimonialList.map((testimonial, index) => (
                            <Reveal
                                key={testimonial.name}
                                delay={index * 100}
                                className="flex flex-col gap-5 rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_10px_40px_-20px_rgb(10_35_66/0.2)]"
                            >
                                <Quote className="fill-brand-100 text-brand-500 size-8" />
                                <p className="leading-relaxed text-slate-700">
                                    “{testimonial.quote}”
                                </p>
                                <div className="mt-auto flex items-center gap-3 border-t border-slate-100 pt-5">
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
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 lg:py-20">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.4fr]">
                    <SectionHeading
                        align="left"
                        eyebrow="FAQ"
                        title="Questions practices ask us"
                        description="Can't find what you're looking for? Our billing specialists are one call away."
                    />
                    <div className="flex flex-col gap-3">
                        {faqList.map((faq, index) => (
                            <Reveal key={faq.question} delay={index * 60}>
                                <details className="group open:border-brand-200 open:bg-brand-50/40 rounded-2xl border border-slate-200 bg-white p-5 transition-colors">
                                    <summary className="text-navy-900 flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                                        {faq.question}
                                        <ChevronDown className="text-brand-600 size-5 shrink-0 transition-transform duration-300 group-open:rotate-180" />
                                    </summary>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                        {faq.answer}
                                    </p>
                                </details>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBanner />
        </>
    );
}
