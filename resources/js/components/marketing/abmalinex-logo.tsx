import { useId } from 'react';
import type { SVGAttributes } from 'react';
import { cn } from '@/lib/utils';

export function AbMalinexMark(props: SVGAttributes<SVGElement>) {
    const gradientId = useId();

    return (
        <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
            <defs>
                <linearGradient
                    id={`${gradientId}-shield`}
                    x1="8"
                    y1="8"
                    x2="52"
                    y2="60"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0f3a66" />
                    <stop offset="0.55" stopColor="#176f93" />
                    <stop offset="1" stopColor="#22c3dd" />
                </linearGradient>
                <linearGradient
                    id={`${gradientId}-cross`}
                    x1="40"
                    y1="4"
                    x2="60"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#22c3dd" />
                    <stop offset="1" stopColor="#1d8aaf" />
                </linearGradient>
            </defs>
            <path
                d="M31 5.5c-6.6 3.8-13.8 5.7-22 5.9v17.2C9 43.6 18 54.4 31 59.5c13-5.1 22-15.9 22-30.9V25"
                stroke={`url(#${gradientId}-shield)`}
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17 20.5c4.9-.4 9.5-1.7 14-3.8M17 20.5v8.2c0 9.6 5.4 17.2 14 21.4"
                stroke={`url(#${gradientId}-shield)`}
                strokeWidth="3.5"
                strokeLinecap="round"
            />
            <path
                d="M31 50.1c7.2-3.5 12-9.4 13.5-17M24 30h9l4-6h7M24 38h6l3 4h9"
                stroke="#1d8aaf"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="24" cy="30" r="2.6" fill="#22c3dd" />
            <circle cx="24" cy="38" r="2.6" fill="#176f93" />
            <circle cx="44" cy="24" r="2.2" fill="#0f3a66" />
            <circle cx="42" cy="42" r="2.2" fill="#22c3dd" />
            <path
                d="M46 4.5h6v7h7v6h-7v7h-6v-7h-7v-6h7z"
                fill={`url(#${gradientId}-cross)`}
                stroke="#fff"
                strokeWidth="1.4"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function AbMalinexLogo({
    className,
    inverted = false,
}: {
    className?: string;
    inverted?: boolean;
}) {
    return (
        <span className={cn('inline-flex items-center gap-2.5', className)}>
            <AbMalinexMark className="size-10 shrink-0" />
            <span className="flex flex-col leading-none">
                <span
                    className={cn(
                        'font-display text-xl font-extrabold tracking-tight',
                        inverted ? 'text-white' : 'text-navy-800',
                    )}
                >
                    AbMalinex
                </span>
                <span
                    className={cn(
                        'mt-1 text-[0.6rem] font-semibold tracking-[0.14em] uppercase',
                        inverted ? 'text-brand-200' : 'text-brand-600',
                    )}
                >
                    Health and IT Services
                </span>
            </span>
        </span>
    );
}
