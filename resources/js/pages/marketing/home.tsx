import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    ArrowUpRight,
    BadgeCheck,
    CheckCircle2,
    ChevronDown,
    Headset,
    MessageCircleHeart,
    Quote,
    SearchCheck,
    ShieldCheck,
    Star,
    TrendingUp,
    UserCheck,
    Workflow,
} from 'lucide-react';
import BrandButton from '@/components/marketing/brand-button';
import HomeHero, { processSteps } from '@/components/marketing/home-hero';
import Reveal from '@/components/marketing/reveal';
import SectionHeading from '@/components/marketing/section-heading';
import {
    coreServices,
    faqList,
    testimonialList,
    trustedPartners,
} from '@/lib/marketing-content';
import { trackSpotlight } from '@/lib/spotlight';
import { cn } from '@/lib/utils';
import { contact, services } from '@/routes';

const processIcons = [SearchCheck, Workflow, BadgeCheck, TrendingUp];

const differentiators = [
    {
        title: 'Certified specialists',
        description:
            'AAPC certified coders who know your specialty, never generalists.',
        icon: BadgeCheck,
    },
    {
        title: 'Privacy you can trust',
        description:
            'HIPAA compliant processes, signed BAAs and secure handling of every record.',
        icon: ShieldCheck,
    },
    {
        title: 'A dedicated partner',
        description:
            'One account manager who knows your practice by name, not a ticket number.',
        icon: UserCheck,
    },
    {
        title: 'Always reachable',
        description:
            'Friendly U.S.-based support with same-day responses for you and your patients.',
        icon: Headset,
    },
];

function ServicesShowcase() {
    const [featuredService, ...otherServices] = coreServices;

    return (
        <section className="px-4 py-24 sm:px-6 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
                    <SectionHeading
                        align="left"
                        eyebrow="What we do"
                        title="Our Core Services"
                        description="Comprehensive RCM solutions tailored to your practice's success."
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
                            className="group relative flex h-full min-h-[24rem] flex-col justify-end overflow-hidden rounded-[1.75rem] p-8"
                        >
                            <img
                                src="/images/marketing/team.jpg"
                                alt=""
                                loading="lazy"
                                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/20" />
                            <div className="relative flex flex-col gap-4">
                                <span className="bg-brand-600 shadow-brand-600/30 flex size-14 items-center justify-center rounded-2xl text-white shadow-lg">
                                    <featuredService.icon
                                        className="size-7"
                                        strokeWidth={1.6}
                                    />
                                </span>
                                <h3 className="font-display text-navy-900 text-3xl font-bold">
                                    {featuredService.title}
                                </h3>
                                <p className="max-w-md text-slate-600">
                                    {featuredService.description}
                                </p>
                                <ul className="grid max-w-md grid-cols-2 gap-2">
                                    {featuredService.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-2 text-sm text-slate-700"
                                        >
                                            <CheckCircle2 className="text-brand-500 size-4" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <span className="text-brand-600 mt-1 inline-flex items-center gap-2 text-sm font-semibold">
                                    Learn more
                                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </span>
                            </div>
                        </Link>
                    </Reveal>

                    {otherServices.map((service, index) => (
                        <Reveal key={service.slug} delay={(index % 4) * 60}>
                            <Link
                                href={`${services().url}#${service.slug}`}
                                onMouseMove={trackSpotlight}
                                className="spotlight-card group hover:border-brand-200 flex h-full flex-col gap-4 rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-[0_4px_24px_-12px_rgb(10_35_66/0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgb(23_111_147/0.35)]"
                            >
                                <div className="flex items-start justify-between">
                                    <span className="bg-brand-50 text-brand-600 ring-brand-100 group-hover:bg-brand-600 flex size-12 items-center justify-center rounded-2xl ring-1 transition-colors duration-300 group-hover:text-white">
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

                    <Reveal className="sm:col-span-2 lg:col-span-3">
                        <div className="from-brand-50 to-brand-100/70 ring-brand-100 relative flex h-full flex-col items-start justify-between gap-6 overflow-hidden rounded-[1.75rem] bg-gradient-to-br via-white p-8 ring-1 sm:flex-row sm:items-center">
                            <div className="bg-cyan-glow/15 pointer-events-none absolute -top-16 -right-10 size-56 rounded-full blur-3xl" />
                            <div className="relative flex items-center gap-4">
                                <span className="text-brand-600 flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                                    <MessageCircleHeart className="size-6" />
                                </span>
                                <div>
                                    <p className="font-display text-navy-900 text-xl font-bold">
                                        Not sure where to start?
                                    </p>
                                    <p className="text-sm text-slate-600">
                                        Tell us about your practice and we'll
                                        recommend the right mix of services.
                                    </p>
                                </div>
                            </div>
                            <BrandButton href={contact()} className="relative">
                                Talk to a specialist
                                <ArrowRight className="size-4" />
                            </BrandButton>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

function ImpactSection() {
    return (
        <section className="px-4 sm:px-6">
            <Reveal className="from-brand-50 to-brand-50 ring-brand-100 relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] bg-gradient-to-br via-white p-6 ring-1 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
                <div className="bg-cyan-glow/10 pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full blur-3xl" />
                <div className="relative flex flex-col gap-6">
                    <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
                        Real results. Real impact.
                    </span>
                    <h2 className="font-display text-navy-900 text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                        Healthier finances for the practices we serve
                    </h2>
                    <p className="text-lg leading-relaxed text-slate-600">
                        When billing runs smoothly, everything else does too.
                        Our clients get paid faster, spend less time chasing
                        insurers, and give their full attention back to patient
                        care.
                    </p>
                    <ul className="flex flex-col gap-3">
                        {[
                            'Fewer denials with claims done right the first time',
                            'Faster payments and steadier monthly cash flow',
                            'Less paperwork and stress for your front office',
                        ].map((benefit) => (
                            <li
                                key={benefit}
                                className="flex items-start gap-3 text-slate-700"
                            >
                                <CheckCircle2 className="text-brand-500 mt-0.5 size-5 shrink-0" />
                                {benefit}
                            </li>
                        ))}
                    </ul>
                    <BrandButton href={contact()} className="self-start">
                        Get Free Audit
                        <ArrowRight className="size-4" />
                    </BrandButton>
                </div>

                <div className="relative">
                    <img
                        src="/images/marketing/doctor-patient.jpg"
                        alt="A physician speaking with a patient"
                        loading="lazy"
                        className="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-[0_40px_80px_-40px_rgb(10_35_66/0.5)] ring-8 ring-white"
                    />
                    <figure className="absolute -bottom-6 left-4 max-w-xs rounded-2xl bg-white p-5 shadow-[0_24px_50px_-20px_rgb(10_35_66/0.35)] sm:-left-6">
                        <Quote className="fill-brand-100 text-brand-400 size-6" />
                        <blockquote className="mt-2 text-sm leading-relaxed text-slate-700">
                            “Our team finally has time to focus on patients
                            again.”
                        </blockquote>
                        <figcaption className="text-navy-900 mt-2 text-xs font-semibold">
                            Dr. Sarah Mitchell · Heartline Cardiology
                        </figcaption>
                    </figure>
                </div>
            </Reveal>
        </section>
    );
}

function WhyAbMalinex() {
    return (
        <section className="px-4 py-24 sm:px-6 lg:py-28">
            <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="flex flex-col gap-10">
                    <SectionHeading
                        align="left"
                        eyebrow="Why AbMalinex"
                        title="A billing partner that feels like part of your team"
                        description="Experienced people, thoughtful processes and genuine care for the practices we work with."
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                        {differentiators.map((item, index) => (
                            <Reveal
                                key={item.title}
                                delay={index * 80}
                                className="hover:border-brand-200 flex flex-col gap-3 rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_6px_30px_-16px_rgb(10_35_66/0.18)] transition-all duration-300 hover:-translate-y-1"
                            >
                                <span className="bg-brand-50 text-brand-600 flex size-12 items-center justify-center rounded-2xl">
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

                <Reveal className="relative grid grid-cols-5 gap-4">
                    <img
                        src="/images/marketing/office.jpg"
                        alt="A friendly AbMalinex billing specialist"
                        loading="lazy"
                        className="col-span-3 aspect-[3/4] w-full rounded-[2rem] object-cover shadow-[0_30px_60px_-30px_rgb(10_35_66/0.45)]"
                    />
                    <div className="col-span-2 flex flex-col gap-4 pt-12">
                        <img
                            src="/images/marketing/reception.jpg"
                            alt="A welcoming clinic reception"
                            loading="lazy"
                            className="aspect-square w-full rounded-[2rem] object-cover shadow-[0_30px_60px_-30px_rgb(10_35_66/0.45)]"
                        />
                        <div className="bg-brand-600 shadow-brand-600/30 flex flex-col gap-1 rounded-[2rem] p-6 text-white shadow-lg">
                            <span className="font-display text-4xl font-extrabold">
                                10+
                            </span>
                            <span className="text-brand-50 text-sm">
                                Years serving healthcare providers
                            </span>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

function ProcessSection() {
    return (
        <section className="relative overflow-hidden bg-slate-50/70 px-4 py-24 sm:px-6 lg:py-28">
            <div className="bg-grid-fade pointer-events-none absolute inset-0" />
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="How it works"
                    title="Getting started is simple"
                    description="A clear four-step process that gets you paid faster without disrupting your practice."
                />
                <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="from-brand-100 via-brand-300 to-brand-100 absolute top-10 right-[12%] left-[12%] hidden h-px bg-gradient-to-r lg:block" />
                    {processSteps.map((step, index) => {
                        const Icon = processIcons[index];

                        return (
                            <Reveal
                                key={step.title}
                                delay={index * 120}
                                className="group relative flex flex-col items-center gap-5 rounded-3xl p-6 text-center transition-all duration-300 hover:bg-white hover:shadow-[0_20px_50px_-24px_rgb(10_35_66/0.2)]"
                            >
                                <span className="text-brand-600 shadow-brand-900/5 ring-brand-100 group-hover:bg-brand-600 relative flex size-20 items-center justify-center rounded-3xl bg-white shadow-lg ring-1 transition-colors duration-300 group-hover:text-white">
                                    <Icon
                                        className="size-8"
                                        strokeWidth={1.5}
                                    />
                                    <span className="bg-navy-800 absolute -top-2 -right-2 flex size-7 items-center justify-center rounded-full text-xs font-bold text-white shadow">
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
        <figure className="flex w-[21rem] shrink-0 flex-col gap-5 rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_10px_40px_-24px_rgb(10_35_66/0.25)] sm:w-[25rem]">
            <div className="flex items-center justify-between">
                <span className="flex gap-0.5 text-amber-400">
                    {[0, 1, 2, 3, 4].map((star) => (
                        <Star key={star} className="size-4 fill-current" />
                    ))}
                </span>
                <Quote className="fill-brand-100 text-brand-300 size-7" />
            </div>
            <blockquote className="leading-relaxed text-slate-700">
                “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3 border-t border-slate-100 pt-5">
                <span className="bg-brand-50 text-brand-700 ring-brand-100 flex size-11 items-center justify-center rounded-full text-sm font-bold ring-1">
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

function TestimonialsSection() {
    const rows = [testimonialList.slice(0, 3), testimonialList.slice(3)];

    return (
        <section className="overflow-hidden py-24 lg:py-28">
            <div className="px-4 sm:px-6">
                <SectionHeading
                    eyebrow="Testimonials"
                    title="Kind words from our clients"
                    description="Physicians, practice managers and administrators across the country trust us with their billing."
                />
            </div>
            <div className="mt-14 flex flex-col gap-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                {rows.map((row, rowIndex) => (
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

function FaqSection() {
    return (
        <section className="px-4 pb-24 sm:px-6 lg:pb-28">
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
                            <details className="group open:border-brand-200 open:bg-brand-50/40 rounded-2xl border border-slate-200 bg-white p-6 transition-all">
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
    );
}

export default function Home() {
    return (
        <>
            <Head title="Medical Billing & RCM Services" />

            <HomeHero />

            <section className="border-y border-slate-100 bg-white py-10">
                <p className="text-center text-sm font-medium text-slate-500">
                    Trusted by Healthcare Providers Across the U.S.
                </p>
                <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
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

            <ServicesShowcase />
            <ImpactSection />
            <WhyAbMalinex />
            <ProcessSection />
            <TestimonialsSection />
            <FaqSection />
        </>
    );
}
