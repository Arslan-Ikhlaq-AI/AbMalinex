import { Head } from '@inertiajs/react';
import {
    CheckCircle2,
    Eye,
    HeartHandshake,
    Lightbulb,
    ShieldCheck,
    Target,
} from 'lucide-react';
import AnimatedCounter from '@/components/marketing/animated-counter';
import PageHero from '@/components/marketing/page-hero';
import Reveal from '@/components/marketing/reveal';
import SectionHeading from '@/components/marketing/section-heading';
import { aboutHighlights, aboutStats } from '@/lib/marketing-content';

const coreValues = [
    {
        title: 'Integrity',
        description:
            'Transparent reporting and honest advice, even when it is not what you want to hear.',
        icon: ShieldCheck,
    },
    {
        title: 'Partnership',
        description:
            'We act as an extension of your practice, invested in your long-term growth.',
        icon: HeartHandshake,
    },
    {
        title: 'Innovation',
        description:
            'Automation and analytics that remove busywork and surface revenue opportunities.',
        icon: Lightbulb,
    },
];

const milestones = [
    {
        year: '2015',
        title: 'Founded in Dallas, TX',
        description: 'Started with three billers and one cardiology client.',
    },
    {
        year: '2018',
        title: '100 practices served',
        description: 'Expanded into coding, credentialing and A/R recovery.',
    },
    {
        year: '2021',
        title: 'Analytics platform launched',
        description: 'Clients get real-time dashboards for every KPI.',
    },
    {
        year: '2026',
        title: '500+ happy clients',
        description: 'Supporting 20+ specialties across 38 states.',
    },
];

export default function About() {
    return (
        <>
            <Head title="About AbMalinex" />

            <PageHero
                eyebrow="About us"
                title="About AbMalinex"
                description="Your trusted partner in medical billing and RCM."
            />

            <section className="px-4 sm:px-6">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <Reveal className="flex flex-col gap-6">
                        <p className="text-lg leading-relaxed text-slate-600">
                            We are a team of medical billing experts committed
                            to helping healthcare providers achieve financial
                            success. For over a decade we have combined
                            certified expertise with smart technology to keep
                            practices profitable and compliant.
                        </p>
                        <ul className="grid gap-3 sm:grid-cols-2">
                            {aboutHighlights.map((highlight) => (
                                <li
                                    key={highlight}
                                    className="text-navy-900 flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 text-sm font-medium shadow-sm"
                                >
                                    <CheckCircle2 className="text-brand-500 size-5 shrink-0" />
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                    <Reveal delay={150} className="relative">
                        <div className="from-cyan-glow/25 to-brand-600/20 absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br blur-2xl" />
                        <img
                            src="/images/marketing/team.jpg"
                            alt="The AbMalinex team celebrating a client success"
                            className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl"
                        />
                        <div className="absolute -bottom-6 -left-4 rounded-2xl border border-white/70 bg-white/85 p-4 shadow-xl backdrop-blur-xl sm:-left-8">
                            <p className="font-display text-brand-600 text-3xl font-extrabold">
                                $250M+
                            </p>
                            <p className="text-xs text-slate-500">
                                Collected for our clients
                            </p>
                        </div>
                    </Reveal>
                </div>

                <Reveal className="mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-y-8 rounded-3xl border border-slate-100 bg-white py-10 shadow-[0_24px_60px_-30px_rgb(10_35_66/0.3)] lg:grid-cols-4 lg:divide-x lg:divide-slate-100">
                    {aboutStats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center gap-1 px-4 text-center"
                        >
                            <span className="text-gradient-brand font-display text-4xl font-extrabold">
                                <AnimatedCounter stat={stat} />
                            </span>
                            <span className="text-sm text-slate-500">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </Reveal>
            </section>

            <section className="px-4 pt-24 sm:px-6">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <Reveal className="relative order-last lg:order-first">
                        <img
                            src="/images/marketing/hands.jpg"
                            alt="Partnership handshake"
                            loading="lazy"
                            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl"
                        />
                    </Reveal>
                    <div className="flex flex-col gap-6">
                        <Reveal className="bg-navy-900 flex flex-col gap-3 rounded-3xl p-8 text-white">
                            <span className="text-cyan-glow flex size-12 items-center justify-center rounded-2xl bg-white/10">
                                <Target className="size-6" />
                            </span>
                            <h2 className="font-display text-2xl font-bold">
                                Our Mission
                            </h2>
                            <p className="text-brand-100/80 leading-relaxed">
                                To empower healthcare providers by optimizing
                                their revenue cycle and alleviating their
                                administrative burden so they can focus on what
                                matters most – their patients.
                            </p>
                        </Reveal>
                        <Reveal
                            delay={100}
                            className="border-brand-100 bg-brand-50/60 flex flex-col gap-3 rounded-3xl border p-8"
                        >
                            <span className="text-brand-600 flex size-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                                <Eye className="size-6" />
                            </span>
                            <h2 className="font-display text-navy-900 text-2xl font-bold">
                                Our Vision
                            </h2>
                            <p className="leading-relaxed text-slate-600">
                                A healthcare system where no provider loses
                                revenue to paperwork, and every claim is paid
                                right the first time.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="px-4 pt-24 sm:px-6">
                <div className="mx-auto max-w-6xl">
                    <SectionHeading
                        eyebrow="Our values"
                        title="What guides our work"
                    />
                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {coreValues.map((value, index) => (
                            <Reveal
                                key={value.title}
                                delay={index * 100}
                                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_10px_40px_-20px_rgb(10_35_66/0.2)] transition-transform duration-300 hover:-translate-y-1"
                            >
                                <span className="bg-brand-600 shadow-brand-600/30 flex size-12 items-center justify-center rounded-2xl text-white shadow-lg">
                                    <value.icon className="size-6" />
                                </span>
                                <h3 className="font-display text-navy-900 text-xl font-bold">
                                    {value.title}
                                </h3>
                                <p className="text-slate-600">
                                    {value.description}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 pt-24 sm:px-6">
                <div className="mx-auto max-w-4xl">
                    <SectionHeading
                        eyebrow="Our journey"
                        title="A decade of growth"
                    />
                    <ol className="border-brand-100 relative mt-12 flex flex-col gap-8 border-l-2 pl-8">
                        {milestones.map((milestone, index) => (
                            <Reveal
                                as="li"
                                key={milestone.year}
                                delay={index * 80}
                                className="relative"
                            >
                                <span className="bg-brand-500 ring-brand-200 absolute top-1 -left-[2.6rem] flex size-5 items-center justify-center rounded-full border-4 border-white shadow ring-2" />
                                <span className="text-brand-600 text-sm font-bold">
                                    {milestone.year}
                                </span>
                                <h3 className="font-display text-navy-900 text-lg font-bold">
                                    {milestone.title}
                                </h3>
                                <p className="text-slate-600">
                                    {milestone.description}
                                </p>
                            </Reveal>
                        ))}
                    </ol>
                </div>
            </section>

            <div className="h-24 lg:h-32" />
        </>
    );
}
