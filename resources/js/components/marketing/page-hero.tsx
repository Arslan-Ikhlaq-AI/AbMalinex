import type { ReactNode } from 'react';
import Reveal from '@/components/marketing/reveal';

export default function PageHero({
    eyebrow,
    title,
    description,
    children,
}: {
    eyebrow: string;
    title: string;
    description: string;
    children?: ReactNode;
}) {
    return (
        <section className="relative overflow-hidden px-4 pt-36 pb-16 sm:px-6 lg:pt-44 lg:pb-20">
            <div className="from-brand-50 pointer-events-none absolute inset-0 bg-gradient-to-b via-white to-white" />
            <div className="bg-grid-fade pointer-events-none absolute inset-0" />
            <div className="bg-cyan-glow/20 pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full blur-3xl" />
            <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                <span className="border-brand-200 text-brand-700 inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide uppercase backdrop-blur">
                    <span className="bg-cyan-glow size-1.5 rounded-full" />
                    {eyebrow}
                </span>
                <h1 className="font-display text-navy-900 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                    {title}
                </h1>
                <p className="max-w-2xl text-lg text-pretty text-slate-600">
                    {description}
                </p>
                {children}
            </Reveal>
        </section>
    );
}
