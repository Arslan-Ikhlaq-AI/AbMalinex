import { Link } from '@inertiajs/react';
import type { InertiaLinkProps } from '@inertiajs/react';
import { cn } from '@/lib/utils';

type BrandButtonVariant = 'primary' | 'outline' | 'white' | 'ghost-light';

const variantClasses: Record<BrandButtonVariant, string> = {
    primary:
        'bg-gradient-to-b from-brand-500 to-brand-700 text-white shadow-[0_8px_24px_-8px_rgb(23_111_147/0.7),inset_0_1px_0_rgb(255_255_255/0.2)] hover:shadow-[0_12px_28px_-8px_rgb(23_111_147/0.8),inset_0_1px_0_rgb(255_255_255/0.25)] hover:brightness-110',
    outline:
        'border border-brand-600/40 bg-white/70 text-brand-700 backdrop-blur hover:border-brand-600 hover:bg-white',
    white: 'bg-white text-navy-800 shadow-lg shadow-navy-950/20 hover:bg-brand-50',
    'ghost-light':
        'border border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/15',
};

export function brandButtonClasses(
    variant: BrandButtonVariant = 'primary',
    size: 'sm' | 'md' | 'lg' = 'md',
): string {
    return cn(
        'group focus-visible:ring-brand-300/50 inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:outline-none active:translate-y-0 disabled:pointer-events-none disabled:opacity-60',
        size === 'sm' && 'h-9 px-4 text-sm',
        size === 'md' && 'h-11 px-5 text-sm',
        size === 'lg' && 'h-12 px-7 text-base',
        variantClasses[variant],
    );
}

export default function BrandButton({
    variant = 'primary',
    size = 'md',
    className,
    ...props
}: Omit<InertiaLinkProps, 'size'> & {
    variant?: BrandButtonVariant;
    size?: 'sm' | 'md' | 'lg';
}) {
    return (
        <Link
            className={cn(brandButtonClasses(variant, size), className)}
            {...props}
        />
    );
}
