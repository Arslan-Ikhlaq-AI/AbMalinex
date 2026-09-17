import { useId } from 'react';
import type { SVGAttributes } from 'react';
import { cn } from '@/lib/utils';

type MarkProps = SVGAttributes<SVGElement> & {
    inverted?: boolean;
};

/**
 * The AbMalinex shield mark: a care figure inside a shield, wired with
 * circuitry to a medical cross and wrapped by an orbit swoosh.
 */
export function AbMalinexMark({ inverted = false, ...props }: MarkProps) {
    const id = useId();
    const navy = inverted ? '#e3f4fa' : '#123e6e';
    const navyDeep = inverted ? '#bfe6f2' : '#0c2c55';

    return (
        <svg viewBox="4 -6 124 124" fill="none" aria-hidden="true" {...props}>
            <defs>
                <linearGradient
                    id={`${id}-teal`}
                    x1="18"
                    y1="20"
                    x2="60"
                    y2="108"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3cc7b4" />
                    <stop offset="0.5" stopColor="#1aa0ad" />
                    <stop offset="1" stopColor="#15719a" />
                </linearGradient>
                <linearGradient
                    id={`${id}-top`}
                    x1="20"
                    y1="28"
                    x2="80"
                    y2="10"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#1aa0ad" />
                    <stop offset="1" stopColor="#5fd8c0" stopOpacity="0.35" />
                </linearGradient>
                <linearGradient
                    id={`${id}-navy`}
                    x1="60"
                    y1="30"
                    x2="98"
                    y2="106"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={navy} />
                    <stop offset="1" stopColor={navyDeep} />
                </linearGradient>
                <linearGradient
                    id={`${id}-orbit`}
                    x1="10"
                    y1="84"
                    x2="108"
                    y2="66"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={navyDeep} />
                    <stop offset="0.6" stopColor={navy} />
                    <stop offset="1" stopColor="#1aa0ad" />
                </linearGradient>
                <linearGradient
                    id={`${id}-body`}
                    x1="30"
                    y1="36"
                    x2="70"
                    y2="100"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#23b2ac" />
                    <stop offset="1" stopColor="#0f6f8f" />
                </linearGradient>
            </defs>

            {/* Shield: teal left rim and fading top edge */}
            <path
                d="M22 30c1 30 10 56 36 76"
                stroke={`url(#${id}-teal)`}
                strokeWidth="7"
                strokeLinecap="round"
            />
            <path
                d="M22 30c18-1 34-6 50-16"
                stroke={`url(#${id}-top)`}
                strokeWidth="5"
                strokeLinecap="round"
            />

            {/* Shield: navy right side built from circuit-board leaves */}
            <path
                d="M98 34c-1 34-14 56-40 72 12-22 19-46 20-66 7-1 14-3 20-6z"
                fill={`url(#${id}-navy)`}
            />
            <path
                d="M84 62c-6 16-14 30-26 42 6-14 10-26 12-38z"
                fill={`url(#${id}-teal)`}
                opacity="0.85"
            />

            {/* Care figure */}
            <circle cx="45" cy="42" r="8" fill={`url(#${id}-body)`} />
            <path
                d="M28 40c4 18 15 26 27 24 11-2 20-12 30-22-6 16-17 30-31 34-14 4-25-12-26-36z"
                fill={`url(#${id}-body)`}
            />
            <path
                d="M46 76c6 10 10 20 12 30-7-8-14-16-12-30z"
                fill={`url(#${id}-body)`}
                opacity="0.8"
            />

            {/* Circuit traces with nodes */}
            <g
                stroke={navy}
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M86 30 74 40h-8" />
                <path d="M94 44 80 58H68" />
                <path d="M92 58 80 72h-8l-6 8" />
            </g>
            <g
                stroke="#2bb5a4"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M62 20l10 8 10-6" />
                <path d="M72 28v0" />
            </g>
            <circle cx="62" cy="20" r="3.4" fill="#2bb5a4" />
            <circle cx="72" cy="28" r="3.8" fill="#1aa0ad" />
            <circle cx="82" cy="22" r="3" fill="#5fd8c0" />
            <circle cx="66" cy="40" r="3.4" fill={navy} />
            <circle
                cx="68"
                cy="58"
                r="3.6"
                fill={inverted ? '#0a2342' : '#fff'}
                stroke={navy}
                strokeWidth="2.2"
            />
            <circle cx="66" cy="80" r="3.4" fill={navy} />

            {/* Orbit swoosh */}
            <path
                d="M10 84c16 18 62 20 98-18-30 28-70 34-98 18z"
                fill={`url(#${id}-orbit)`}
            />

            {/* Medical cross with radiating sparkle */}
            <path
                d="M96 6h9v10h10v9h-10v10h-9V25H86v-9h10z"
                fill={navy}
                stroke="#2bb5a4"
                strokeWidth="2.4"
                strokeLinejoin="round"
            />
            <g stroke="#3cc7b4" strokeWidth="2" strokeLinecap="round">
                <path d="M100.5 0.5v-2" />
                <path d="M111 2.5l2-3" />
                <path d="M118 11l3-1.5" />
                <path d="M119 30l3 1.5" />
                <path d="M112 39l2 3" />
                <path d="M90 2.5l-2-3" />
            </g>
        </svg>
    );
}

export default function AbMalinexLogo({
    className,
    inverted = false,
    size = 'md',
}: {
    className?: string;
    inverted?: boolean;
    size?: 'md' | 'lg';
}) {
    return (
        <span className={cn('inline-flex items-center gap-2.5', className)}>
            <AbMalinexMark
                inverted={inverted}
                className={cn(
                    'shrink-0 overflow-visible',
                    size === 'lg' ? 'size-14' : 'size-11',
                )}
            />
            <span className="flex flex-col leading-none">
                <span
                    className={cn(
                        'font-display relative font-extrabold tracking-tight',
                        size === 'lg' ? 'text-3xl' : 'text-[1.35rem]',
                        inverted ? 'text-white' : 'text-[#123e6e]',
                    )}
                >
                    AbMal
                    <span className="relative inline-block">
                        ı
                        <span className="bg-cyan-glow absolute bottom-[0.66em] left-1/2 size-[0.19em] -translate-x-1/2 rounded-full shadow-[0_0_0.3em_0.06em_rgb(34_195_221/0.85)]" />
                    </span>
                    nex
                </span>
                <span
                    className={cn(
                        'mt-1 font-medium tracking-[0.08em] whitespace-nowrap',
                        size === 'lg' ? 'text-xs' : 'text-[0.6rem]',
                        inverted ? 'text-brand-100/80' : 'text-slate-600',
                    )}
                >
                    HEALTH <span className="lowercase">and</span>
                    <span
                        className={cn(
                            'mx-1 inline-block h-[0.9em] w-px translate-y-[0.1em]',
                            inverted ? 'bg-brand-100/50' : 'bg-slate-400',
                        )}
                    />
                    IT SERVICES
                </span>
            </span>
        </span>
    );
}
