import { Head } from '@inertiajs/react';
import { ArrowRight, Check, CheckCircle2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import BrandButton from '@/components/marketing/brand-button';
import CtaBanner from '@/components/marketing/cta-banner';
import PageHero from '@/components/marketing/page-hero';
import Reveal from '@/components/marketing/reveal';
import SectionHeading from '@/components/marketing/section-heading';
import { coreServices } from '@/lib/marketing-content';
import { cn } from '@/lib/utils';
import { contact } from '@/routes';

const comparisonRows = [
    { label: 'Certified coders & billers', inHouse: false, abmalinex: true },
    {
        label: 'Claims submitted within 24 hours',
        inHouse: false,
        abmalinex: true,
    },
    { label: 'Live revenue dashboard', inHouse: false, abmalinex: true },
    {
        label: 'Coverage during staff vacations',
        inHouse: false,
        abmalinex: true,
    },
    {
        label: 'Payroll, benefits & training costs',
        inHouse: true,
        abmalinex: false,
    },
    { label: 'Software & clearinghouse fees', inHouse: true, abmalinex: false },
];

export default function Services() {
    const [activeSlug, setActiveSlug] = useState(coreServices[0].slug);
    const activeService =
        coreServices.find((service) => service.slug === activeSlug) ??
        coreServices[0];

    useEffect(() => {
        const syncWithHash = () => {
            const hashSlug = window.location.hash.replace('#', '');

            if (coreServices.some((service) => service.slug === hashSlug)) {
                setActiveSlug(hashSlug);
                document
                    .getElementById('service-explorer')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        syncWithHash();
        window.addEventListener('hashchange', syncWithHash);

        return () => window.removeEventListener('hashchange', syncWithHash);
    }, []);

    return (
        <>
            <Head title="Our Services" />

            <PageHero
                eyebrow="Services"
                title="Our Services"
                description="Complete RCM solutions to improve your practice's financial health."
            />

            <section
                id="service-explorer"
                className="scroll-mt-28 px-4 sm:px-6"
            >
                <Reveal className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-slate-100 bg-white p-4 shadow-[0_30px_80px_-40px_rgb(10_35_66/0.3)] sm:p-6 lg:grid-cols-[280px_1fr]">
                    <nav
                        aria-label="Services"
                        className="flex gap-2 overflow-x-auto pb-2 lg:sticky lg:top-28 lg:flex-col lg:self-start lg:overflow-visible lg:pb-0"
                    >
                        {coreServices.map((service) => (
                            <button
                                key={service.slug}
                                type="button"
                                onClick={() => {
                                    setActiveSlug(service.slug);
                                    window.history.replaceState(
                                        null,
                                        '',
                                        `#${service.slug}`,
                                    );
                                }}
                                className={cn(
                                    'flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300',
                                    service.slug === activeSlug
                                        ? 'from-brand-600 to-brand-500 shadow-brand-600/25 bg-gradient-to-r text-white shadow-lg'
                                        : 'hover:bg-brand-50 hover:text-brand-700 text-slate-600',
                                )}
                            >
                                <service.icon className="size-4.5 shrink-0" />
                                {service.title}
                            </button>
                        ))}
                    </nav>

                    <div
                        key={activeService.slug}
                        className="animate-in to-brand-50/50 fade-in slide-in-from-bottom-3 grid items-center gap-8 rounded-3xl bg-gradient-to-br from-slate-50 p-6 duration-500 sm:p-10 xl:grid-cols-[1fr_1.05fr]"
                    >
                        <div className="flex flex-col gap-5">
                            <span className="text-brand-600 flex size-14 items-center justify-center rounded-2xl bg-white shadow-md">
                                <activeService.icon
                                    className="size-7"
                                    strokeWidth={1.6}
                                />
                            </span>
                            <h2 className="font-display text-navy-900 text-3xl font-bold tracking-tight">
                                {activeService.title}
                            </h2>
                            <p className="text-slate-600">
                                {activeService.description}
                            </p>
                            <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                                {activeService.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="text-navy-900 flex items-center gap-3 text-sm font-medium"
                                    >
                                        <CheckCircle2 className="text-brand-500 size-5 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <BrandButton
                                href={contact()}
                                className="self-start"
                            >
                                Get a Quote for {activeService.title}
                                <ArrowRight className="size-4" />
                            </BrandButton>
                        </div>
                        <div className="relative">
                            <div className="from-cyan-glow/30 to-brand-600/20 absolute -inset-3 rounded-[2rem] bg-gradient-to-br blur-2xl" />
                            <img
                                src={activeService.image}
                                alt={activeService.title}
                                className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
                            />
                            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/85 p-3 pr-5 shadow-xl backdrop-blur-xl">
                                <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                    <CheckCircle2 className="size-5" />
                                </span>
                                <span className="flex flex-col">
                                    <span className="text-xs text-slate-500">
                                        Avg. turnaround
                                    </span>
                                    <span className="text-navy-900 font-bold">
                                        24 hours
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            <section className="px-4 pt-24 sm:px-6">
                <div className="mx-auto max-w-5xl">
                    <SectionHeading
                        eyebrow="Why outsource"
                        title="In-house billing vs. AbMalinex"
                        description="Get a full billing department for less than the cost of one employee."
                    />
                    <Reveal className="mt-12 overflow-x-auto rounded-3xl border border-slate-100 bg-white shadow-[0_20px_60px_-30px_rgb(10_35_66/0.3)]">
                        <table className="w-full min-w-[520px] text-left text-sm">
                            <thead>
                                <tr className="border-b border-slate-100">
                                    <th className="p-5 font-semibold text-slate-500">
                                        What you get
                                    </th>
                                    <th className="p-5 text-center font-semibold text-slate-500">
                                        In-House Team
                                    </th>
                                    <th className="bg-brand-50/70 text-brand-700 p-5 text-center font-semibold">
                                        AbMalinex
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row) => (
                                    <tr
                                        key={row.label}
                                        className="border-b border-slate-50 last:border-none"
                                    >
                                        <td className="text-navy-900 p-5 font-medium">
                                            {row.label}
                                        </td>
                                        <td className="p-5">
                                            <ComparisonMark
                                                isPositive={row.inHouse}
                                            />
                                        </td>
                                        <td className="bg-brand-50/70 p-5">
                                            <ComparisonMark
                                                isPositive={row.abmalinex}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Reveal>
                </div>
            </section>

            <CtaBanner />
        </>
    );
}

function ComparisonMark({ isPositive }: { isPositive: boolean }) {
    return (
        <span
            className={cn(
                'mx-auto flex size-7 items-center justify-center rounded-full',
                isPositive
                    ? 'bg-emerald-100 text-emerald-600'
                    : 'bg-slate-100 text-slate-400',
            )}
        >
            {isPositive ? (
                <Check className="size-4" />
            ) : (
                <X className="size-4" />
            )}
        </span>
    );
}
