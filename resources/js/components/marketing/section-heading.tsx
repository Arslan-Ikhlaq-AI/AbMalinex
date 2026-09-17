import Reveal from '@/components/marketing/reveal';
import { cn } from '@/lib/utils';

export default function SectionHeading({
    eyebrow,
    title,
    description,
    align = 'center',
    inverted = false,
    className,
}: {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: 'center' | 'left';
    inverted?: boolean;
    className?: string;
}) {
    return (
        <Reveal
            className={cn(
                'flex max-w-2xl flex-col gap-3',
                align === 'center'
                    ? 'mx-auto items-center text-center'
                    : 'items-start',
                className,
            )}
        >
            {eyebrow && (
                <span
                    className={cn(
                        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase',
                        inverted
                            ? 'text-brand-200 border-white/15 bg-white/5'
                            : 'border-brand-200 bg-brand-50 text-brand-700',
                    )}
                >
                    <span className="bg-cyan-glow size-1.5 rounded-full" />
                    {eyebrow}
                </span>
            )}
            <h2
                className={cn(
                    'font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl',
                    inverted ? 'text-white' : 'text-navy-900',
                )}
            >
                {title}
            </h2>
            {description && (
                <p
                    className={cn(
                        'text-base text-pretty sm:text-lg',
                        inverted ? 'text-brand-100/80' : 'text-slate-600',
                    )}
                >
                    {description}
                </p>
            )}
        </Reveal>
    );
}
