import { cn } from '@/lib/utils';

const brandImages = {
    logo: '/images/brand/abmalinex-logo.png',
    mark: '/images/brand/abmalinex-mark.png',
    wordmark: '/images/brand/abmalinex-wordmark.png',
};

/**
 * The AbMalinex shield mark, taken directly from the official logo artwork.
 */
export function AbMalinexMark({ className }: { className?: string }) {
    return (
        <img
            src={brandImages.mark}
            alt=""
            aria-hidden="true"
            className={cn('w-auto object-contain', className)}
        />
    );
}

/**
 * The official AbMalinex logo. The horizontal layout places the original
 * shield mark beside the original wordmark for navigation bars; the stacked
 * layout is the untouched logo artwork.
 */
export default function AbMalinexLogo({
    layout = 'horizontal',
    className,
}: {
    layout?: 'horizontal' | 'stacked';
    className?: string;
}) {
    if (layout === 'stacked') {
        return (
            <img
                src={brandImages.logo}
                alt="AbMalinex Health and IT Services"
                className={cn('h-32 w-auto object-contain', className)}
            />
        );
    }

    return (
        <span
            className={cn('inline-flex items-center gap-1.5', className)}
            role="img"
            aria-label="AbMalinex Health and IT Services"
        >
            <AbMalinexMark className="h-12 shrink-0" />
            <img
                src={brandImages.wordmark}
                alt=""
                aria-hidden="true"
                className="h-10 w-auto object-contain"
            />
        </span>
    );
}
