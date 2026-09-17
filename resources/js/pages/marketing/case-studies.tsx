import { Head } from '@inertiajs/react';
import {
    ArrowRight,
    CheckCircle2,
    TrendingDown,
    TrendingUp,
} from 'lucide-react';
import { useState } from 'react';
import AreaChart from '@/components/marketing/area-chart';
import BrandButton from '@/components/marketing/brand-button';
import CtaBanner from '@/components/marketing/cta-banner';
import FilterPills from '@/components/marketing/filter-pills';
import PageHero from '@/components/marketing/page-hero';
import Reveal from '@/components/marketing/reveal';
import { caseStudyFilters, caseStudyList } from '@/lib/marketing-content';
import type { CaseStudy } from '@/lib/marketing-content';
import { contact } from '@/routes';

const chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

function TrendBadge({ change }: { change: string }) {
    const isDecrease = change.startsWith('-');
    const Icon = isDecrease ? TrendingDown : TrendingUp;

    return (
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-2 py-0.5 text-xs font-semibold text-emerald-300">
            <Icon className="size-3.5" />
            {change}
        </span>
    );
}

function FeaturedCaseStudy({ caseStudy }: { caseStudy: CaseStudy }) {
    return (
        <Reveal className="grid gap-8 overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_30px_80px_-40px_rgb(10_35_66/0.35)] sm:p-10 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
                <span className="text-brand-600 text-xs font-bold tracking-wider uppercase">
                    {caseStudy.practice}
                </span>
                <h2 className="font-display text-navy-900 text-3xl font-bold tracking-tight">
                    {caseStudy.title}
                </h2>
                <p className="text-slate-600">{caseStudy.summary}</p>
                <ul className="flex flex-col gap-2.5">
                    {caseStudy.results.map((result) => (
                        <li
                            key={result}
                            className="text-navy-900 flex items-center gap-3 text-sm font-medium"
                        >
                            <CheckCircle2 className="text-brand-500 size-5" />
                            {result}
                        </li>
                    ))}
                </ul>
                <BrandButton href={contact()} className="mt-2 self-start">
                    Get Results Like These
                    <ArrowRight className="size-4" />
                </BrandButton>
            </div>
            <div className="from-navy-900 to-navy-800 relative flex flex-col gap-4 overflow-hidden rounded-3xl bg-gradient-to-br p-6 text-white shadow-2xl">
                <div className="bg-cyan-glow/25 pointer-events-none absolute -top-16 -right-16 size-56 rounded-full blur-3xl" />
                <div className="relative flex items-start justify-between">
                    <div>
                        <p className="text-brand-100/70 text-sm">
                            {caseStudy.metric.label}
                        </p>
                        <p className="font-display text-4xl font-extrabold">
                            {caseStudy.metric.value}
                        </p>
                        <p className="text-brand-100/60 text-xs">
                            Monthly, after 90 days
                        </p>
                    </div>
                    <TrendBadge change={caseStudy.metric.change} />
                </div>
                <AreaChart
                    key={caseStudy.title}
                    tone="dark"
                    className="relative mt-auto h-44"
                    series={caseStudy.series}
                    labels={chartLabels}
                />
            </div>
        </Reveal>
    );
}

export default function CaseStudies() {
    const [activeFilter, setActiveFilter] = useState('All');
    const filteredCaseStudies = caseStudyList.filter(
        (caseStudy) =>
            activeFilter === 'All' || caseStudy.category === activeFilter,
    );
    const [featuredCaseStudy, ...otherCaseStudies] = filteredCaseStudies;

    return (
        <>
            <Head title="Case Studies" />

            <PageHero
                eyebrow="Case studies"
                title="Case Studies"
                description="Real stories. Real results."
            >
                <FilterPills
                    filters={caseStudyFilters}
                    activeFilter={activeFilter}
                    onChange={setActiveFilter}
                />
            </PageHero>

            <section className="px-4 sm:px-6">
                <div
                    key={activeFilter}
                    className="animate-in fade-in mx-auto flex max-w-6xl flex-col gap-6 duration-500"
                >
                    {featuredCaseStudy && (
                        <FeaturedCaseStudy caseStudy={featuredCaseStudy} />
                    )}

                    <div className="grid gap-6 md:grid-cols-2">
                        {otherCaseStudies.map((caseStudy, index) => (
                            <Reveal
                                key={caseStudy.title}
                                delay={index * 80}
                                className="group hover:border-brand-200 flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_10px_40px_-20px_rgb(10_35_66/0.2)] transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-brand-600 text-xs font-bold tracking-wider uppercase">
                                            {caseStudy.practice}
                                        </span>
                                        <h3 className="font-display text-navy-900 text-xl font-bold">
                                            {caseStudy.title}
                                        </h3>
                                    </div>
                                    <span className="bg-brand-50 rounded-xl px-3 py-2 text-center">
                                        <span className="font-display text-brand-700 block text-lg font-extrabold">
                                            {caseStudy.metric.change}
                                        </span>
                                        <span className="block text-[0.6rem] text-slate-500">
                                            {caseStudy.metric.label}
                                        </span>
                                    </span>
                                </div>
                                <p className="text-sm text-slate-600">
                                    {caseStudy.summary}
                                </p>
                                <AreaChart
                                    className="mt-auto h-20"
                                    showGrid={false}
                                    series={caseStudy.series}
                                />
                            </Reveal>
                        ))}
                    </div>

                    {filteredCaseStudies.length === 0 && (
                        <p className="rounded-3xl border border-dashed border-slate-200 p-10 text-center text-slate-500">
                            No case studies in this category yet.
                        </p>
                    )}
                </div>
            </section>

            <CtaBanner
                title="Your practice could be our next success story"
                description="Start with a free audit and see exactly how much revenue you're leaving on the table."
            />
        </>
    );
}
