import { Head } from '@inertiajs/react';
import {
    ArrowRight,
    Bell,
    CreditCard,
    FileText,
    FileWarning,
    FolderOpen,
    LayoutDashboard,
    MessageSquare,
    PieChart,
    ReceiptText,
    Search,
    Settings,
    Users,
} from 'lucide-react';
import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { AbMalinexMark } from '@/components/marketing/abmalinex-logo';
import AreaChart from '@/components/marketing/area-chart';
import BrandButton, {
    brandButtonClasses,
} from '@/components/marketing/brand-button';
import DonutChart from '@/components/marketing/donut-chart';
import Reveal from '@/components/marketing/reveal';
import { whyChooseUs } from '@/lib/marketing-content';
import { cn } from '@/lib/utils';
import { contact } from '@/routes';

type PortalView =
    | 'Dashboard'
    | 'Claims'
    | 'Payments'
    | 'Denials'
    | 'AR Follow-Up'
    | 'Reports'
    | 'Documents'
    | 'Messages'
    | 'Settings';

const portalNavigation: { label: PortalView; icon: LucideIcon }[] = [
    { label: 'Dashboard', icon: LayoutDashboard },
    { label: 'Claims', icon: ReceiptText },
    { label: 'Payments', icon: CreditCard },
    { label: 'Denials', icon: FileWarning },
    { label: 'AR Follow-Up', icon: Users },
    { label: 'Reports', icon: PieChart },
    { label: 'Documents', icon: FolderOpen },
    { label: 'Messages', icon: MessageSquare },
    { label: 'Settings', icon: Settings },
];

const collectionRanges = {
    '6M': {
        series: [62, 70, 66, 84, 80, 98],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    '12M': {
        series: [40, 44, 52, 49, 58, 60, 62, 70, 66, 84, 80, 98],
        labels: ['Jul', 'Sep', 'Nov', 'Jan', 'Mar', 'May'],
    },
};

const payerMix = [
    { label: 'Medicare', value: 38, color: '#0f3a66' },
    { label: 'Commercial', value: 32, color: '#1d8aaf' },
    { label: 'Medicaid', value: 18, color: '#22c3dd' },
    { label: 'Self-Pay', value: 12, color: '#aedcea' },
];

const recentClaims = [
    {
        id: 'CLM-20931',
        patient: 'J. Carter',
        payer: 'Medicare',
        amount: '$1,240.00',
        status: 'Paid',
    },
    {
        id: 'CLM-20930',
        patient: 'M. Alvarez',
        payer: 'Aetna',
        amount: '$860.50',
        status: 'Submitted',
    },
    {
        id: 'CLM-20927',
        patient: 'S. Nguyen',
        payer: 'BCBS',
        amount: '$2,115.00',
        status: 'Paid',
    },
    {
        id: 'CLM-20925',
        patient: 'D. Brooks',
        payer: 'Cigna',
        amount: '$430.00',
        status: 'Denied',
    },
    {
        id: 'CLM-20921',
        patient: 'L. Patel',
        payer: 'UnitedHealth',
        amount: '$975.25',
        status: 'In Review',
    },
];

const denialReasons = [
    { reason: 'Missing / invalid modifier', share: 34 },
    { reason: 'Eligibility not verified', share: 26 },
    { reason: 'Prior auth required', share: 21 },
    { reason: 'Duplicate claim', share: 11 },
    { reason: 'Timely filing', share: 8 },
];

const claimStatusClasses: Record<string, string> = {
    Paid: 'bg-emerald-50 text-emerald-700',
    Submitted: 'bg-sky-50 text-sky-700',
    Denied: 'bg-rose-50 text-rose-700',
    'In Review': 'bg-amber-50 text-amber-700',
};

function DashboardView() {
    const [range, setRange] = useState<keyof typeof collectionRanges>('6M');

    return (
        <div className="grid gap-4 xl:grid-cols-[1.6fr_1fr]">
            <div className="rounded-2xl border border-slate-100 bg-white p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-navy-900 text-sm font-semibold">
                            Collections Over Time
                        </p>
                        <p className="text-xs text-slate-400">
                            In thousands (USD)
                        </p>
                    </div>
                    <div className="flex rounded-lg bg-slate-100 p-0.5 text-xs">
                        {(['6M', '12M'] as const).map((option) => (
                            <button
                                key={option}
                                type="button"
                                onClick={() => setRange(option)}
                                className={cn(
                                    'rounded-md px-2.5 py-1 font-medium transition',
                                    range === option
                                        ? 'text-brand-700 bg-white shadow-sm'
                                        : 'text-slate-500',
                                )}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
                <AreaChart
                    key={range}
                    className="mt-4 h-44"
                    series={collectionRanges[range].series}
                    labels={collectionRanges[range].labels}
                />
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-4">
                <p className="text-navy-900 text-sm font-semibold">Payer Mix</p>
                <div className="mt-3 flex flex-col items-center gap-4 sm:flex-row xl:flex-col 2xl:flex-row">
                    <DonutChart
                        segments={payerMix}
                        centerValue="$125K"
                        centerLabel="This month"
                    />
                    <ul className="flex w-full flex-col gap-2 text-xs">
                        {payerMix.map((segment) => (
                            <li
                                key={segment.label}
                                className="flex items-center gap-2"
                            >
                                <span
                                    className="size-2.5 rounded-full"
                                    style={{ backgroundColor: segment.color }}
                                />
                                <span className="text-slate-600">
                                    {segment.label}
                                </span>
                                <span className="text-navy-900 ml-auto font-semibold">
                                    {segment.value}%
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-4 xl:col-span-2">
                <p className="text-navy-900 text-sm font-semibold">
                    Claims Summary
                </p>
                <div className="mt-3 grid grid-cols-3 gap-3">
                    {[
                        {
                            label: 'Total Claims',
                            value: '1,248',
                            width: '100%',
                        },
                        { label: 'Clean Claims', value: '1,229', width: '98%' },
                        { label: 'Denied Claims', value: '19', width: '2%' },
                    ].map((item) => (
                        <div key={item.label} className="flex flex-col gap-2">
                            <div className="flex items-baseline justify-between">
                                <span className="text-xs text-slate-500">
                                    {item.label}
                                </span>
                                <span className="text-navy-900 font-bold">
                                    {item.value}
                                </span>
                            </div>
                            <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                                <div
                                    className="from-brand-600 to-cyan-glow h-full rounded-full bg-gradient-to-r"
                                    style={{ width: item.width }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ClaimsView({ statusFilter }: { statusFilter?: string }) {
    const claims = statusFilter
        ? recentClaims.filter((claim) => claim.status === statusFilter)
        : recentClaims;

    return (
        <div className="overflow-x-auto rounded-2xl border border-slate-100 bg-white">
            <table className="w-full min-w-[480px] text-left text-xs">
                <thead className="bg-slate-50 text-slate-500">
                    <tr>
                        {['Claim', 'Patient', 'Payer', 'Amount', 'Status'].map(
                            (heading) => (
                                <th
                                    key={heading}
                                    className="px-4 py-3 font-medium"
                                >
                                    {heading}
                                </th>
                            ),
                        )}
                    </tr>
                </thead>
                <tbody>
                    {claims.map((claim) => (
                        <tr key={claim.id} className="border-t border-slate-50">
                            <td className="text-navy-900 px-4 py-3 font-semibold">
                                {claim.id}
                            </td>
                            <td className="px-4 py-3 text-slate-600">
                                {claim.patient}
                            </td>
                            <td className="px-4 py-3 text-slate-600">
                                {claim.payer}
                            </td>
                            <td className="text-navy-900 px-4 py-3 font-medium">
                                {claim.amount}
                            </td>
                            <td className="px-4 py-3">
                                <span
                                    className={cn(
                                        'rounded-full px-2 py-1 font-semibold',
                                        claimStatusClasses[claim.status],
                                    )}
                                >
                                    {claim.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function DenialsView() {
    return (
        <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-4">
                <p className="text-navy-900 text-sm font-semibold">
                    Top Denial Reasons
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                    {denialReasons.map((denial) => (
                        <li
                            key={denial.reason}
                            className="flex flex-col gap-1.5"
                        >
                            <div className="flex justify-between text-xs">
                                <span className="text-slate-600">
                                    {denial.reason}
                                </span>
                                <span className="text-navy-900 font-semibold">
                                    {denial.share}%
                                </span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                                <div
                                    className="from-navy-700 to-brand-400 h-full rounded-full bg-gradient-to-r"
                                    style={{ width: `${denial.share * 2.5}%` }}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <div className="rounded-2xl border border-slate-100 bg-white p-4">
                    <p className="text-xs text-slate-500">Denial Rate Trend</p>
                    <p className="font-display text-navy-900 text-2xl font-bold">
                        1.6%
                    </p>
                    <AreaChart
                        className="mt-2 h-24"
                        showGrid={false}
                        series={[9.3, 7.8, 6.1, 4.2, 2.9, 1.6]}
                    />
                </div>
                <ClaimsView statusFilter="Denied" />
            </div>
        </div>
    );
}

function PlaceholderView({ view }: { view: PortalView }) {
    return (
        <div className="flex h-full min-h-72 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center">
            <FileText className="text-brand-300 size-10" />
            <p className="text-navy-900 font-semibold">{view}</p>
            <p className="max-w-xs text-sm text-slate-500">
                This module is available in the live client portal. Book a demo
                to see it with your own practice data.
            </p>
        </div>
    );
}

function PortalPreview() {
    const [activeView, setActiveView] = useState<PortalView>('Dashboard');

    return (
        <div className="relative">
            <div className="from-cyan-glow/30 via-brand-500/20 to-navy-700/20 absolute -inset-6 rounded-[3rem] bg-gradient-to-br blur-3xl" />
            <div className="relative flex overflow-hidden rounded-3xl border border-white/70 bg-slate-50 shadow-[0_40px_100px_-30px_rgb(10_35_66/0.55)] ring-1 ring-slate-900/5">
                <aside className="bg-navy-900 hidden w-48 shrink-0 flex-col gap-1 p-3 text-white sm:flex">
                    <div className="mb-3 flex items-center gap-2 px-2 py-2">
                        <span className="flex size-9 items-center justify-center rounded-lg bg-white p-1">
                            <AbMalinexMark className="h-full" />
                        </span>
                        <span className="text-sm font-bold">AbMalinex</span>
                    </div>
                    {portalNavigation.map((item) => (
                        <button
                            key={item.label}
                            type="button"
                            onClick={() => setActiveView(item.label)}
                            className={cn(
                                'flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs font-medium transition',
                                activeView === item.label
                                    ? 'from-brand-600 to-brand-500 bg-gradient-to-r text-white shadow'
                                    : 'text-brand-100/70 hover:bg-white/5 hover:text-white',
                            )}
                        >
                            <item.icon className="size-4" />
                            {item.label}
                        </button>
                    ))}
                </aside>

                <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-center justify-between gap-3 border-b border-slate-100 bg-white px-4 py-3">
                        <div>
                            <p className="text-navy-900 text-sm font-bold">
                                {activeView === 'Dashboard'
                                    ? 'Dashboard Overview'
                                    : activeView}
                            </p>
                            <p className="text-[0.65rem] text-slate-400">
                                Heartline Cardiology · Live demo data
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="hidden items-center gap-2 rounded-lg bg-slate-50 px-3 py-1.5 text-xs text-slate-400 md:flex">
                                <Search className="size-3.5" />
                                Search claims
                            </span>
                            <span className="relative flex size-8 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                                <Bell className="size-4" />
                                <span className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-rose-500" />
                            </span>
                            <span className="flex items-center gap-2 rounded-lg bg-slate-50 py-1 pr-3 pl-1 text-xs text-slate-600">
                                <span className="bg-brand-600 flex size-6 items-center justify-center rounded-md text-[0.6rem] font-bold text-white">
                                    DS
                                </span>
                                <span className="hidden lg:inline">
                                    Welcome, Dr. Smith
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-1 overflow-x-auto border-b border-slate-100 bg-white px-3 py-2 sm:hidden">
                        {portalNavigation.map((item) => (
                            <button
                                key={item.label}
                                type="button"
                                onClick={() => setActiveView(item.label)}
                                className={cn(
                                    'shrink-0 rounded-md px-2.5 py-1 text-xs font-medium',
                                    activeView === item.label
                                        ? 'bg-brand-600 text-white'
                                        : 'text-slate-500',
                                )}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <div
                        key={activeView}
                        className="animate-in fade-in min-h-96 p-4 duration-300"
                    >
                        {activeView === 'Dashboard' && <DashboardView />}
                        {(activeView === 'Claims' ||
                            activeView === 'Payments') && (
                            <ClaimsView
                                statusFilter={
                                    activeView === 'Payments'
                                        ? 'Paid'
                                        : undefined
                                }
                            />
                        )}
                        {activeView === 'Denials' && <DenialsView />}
                        {![
                            'Dashboard',
                            'Claims',
                            'Payments',
                            'Denials',
                        ].includes(activeView) && (
                            <PlaceholderView view={activeView} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Demo() {
    return (
        <>
            <Head title="Client Portal Demo" />

            <section className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:pt-40">
                <div className="from-brand-50 pointer-events-none absolute inset-0 bg-gradient-to-b via-white to-white" />
                <div className="bg-grid-fade pointer-events-none absolute inset-0" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-12 xl:grid-cols-[0.8fr_1.4fr]">
                    <Reveal className="flex flex-col gap-6">
                        <span className="border-brand-200 text-brand-700 inline-flex items-center gap-2 self-start rounded-full border bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                            <span className="relative flex size-2">
                                <span className="animate-pulse-ring absolute inset-0 rounded-full bg-emerald-400" />
                                <span className="relative size-2 rounded-full bg-emerald-500" />
                            </span>
                            Interactive demo
                        </span>
                        <h1 className="font-display text-navy-900 text-4xl font-extrabold tracking-tight sm:text-5xl">
                            Experience Our RCM Dashboard
                        </h1>
                        <p className="text-lg text-slate-600">
                            Explore a live demo of our client portal with sample
                            data. Click around, it's fully interactive.
                        </p>
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                {
                                    value: '$125,430',
                                    label: 'Total Collections',
                                },
                                { value: '98.7%', label: 'Clean Claim Rate' },
                                { value: '$12,450', label: 'A/R Over 90 Days' },
                            ].map((metric) => (
                                <div
                                    key={metric.label}
                                    className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm"
                                >
                                    <p className="font-display text-navy-900 text-lg font-extrabold sm:text-xl">
                                        {metric.value}
                                    </p>
                                    <p className="text-[0.7rem] text-slate-500">
                                        {metric.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#portal-preview"
                                className={brandButtonClasses('primary', 'lg')}
                            >
                                Explore Demo Dashboard
                            </a>
                            <BrandButton
                                href={contact()}
                                size="lg"
                                variant="outline"
                            >
                                Schedule Demo
                            </BrandButton>
                        </div>
                    </Reveal>
                    <Reveal delay={150} className="scroll-mt-28">
                        <div id="portal-preview" className="scroll-mt-28">
                            <PortalPreview />
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="px-4 pb-8 sm:px-6">
                <Reveal className="from-navy-900 via-navy-800 to-brand-800 relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br px-6 py-14 text-white sm:px-12">
                    <div className="bg-cyan-glow/20 pointer-events-none absolute -top-24 -left-24 size-80 rounded-full blur-3xl" />
                    <div className="bg-brand-400/20 pointer-events-none absolute -right-24 -bottom-24 size-80 rounded-full blur-3xl" />
                    <h2 className="font-display relative text-center text-3xl font-bold sm:text-4xl">
                        Why Choose AbMalinex?
                    </h2>
                    <div className="relative mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
                        {whyChooseUs.map((reason, index) => (
                            <Reveal
                                key={reason.title}
                                delay={index * 60}
                                className="group flex flex-col items-center gap-3 rounded-2xl p-4 text-center transition hover:bg-white/5"
                            >
                                <span className="text-cyan-glow group-hover:bg-cyan-glow group-hover:text-navy-950 flex size-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 transition group-hover:scale-110">
                                    <reason.icon
                                        className="size-7"
                                        strokeWidth={1.6}
                                    />
                                </span>
                                <span className="text-sm font-medium">
                                    {reason.title}
                                </span>
                            </Reveal>
                        ))}
                    </div>
                    <div className="relative mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:flex-row md:px-10">
                        <div className="text-center md:text-left">
                            <p className="font-display text-2xl font-bold">
                                Ready to Boost Your Revenue?
                            </p>
                            <p className="text-brand-100/70">
                                Get your free billing audit today!
                            </p>
                        </div>
                        <BrandButton href={contact()} variant="white" size="lg">
                            Get Free Audit
                            <ArrowRight className="size-4" />
                        </BrandButton>
                    </div>
                </Reveal>
            </section>
        </>
    );
}
