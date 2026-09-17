import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ElementType, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Tracks whether an element has scrolled into the viewport (fires once).
 */
export function useInView<T extends Element>(threshold = 0.15) {
    const ref = useRef<T>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin: '0px 0px -40px 0px' },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isInView };
}

export default function Reveal({
    as: Component = 'div',
    delay = 0,
    className,
    children,
}: {
    as?: ElementType;
    delay?: number;
    className?: string;
    children: ReactNode;
}) {
    const { ref, isInView } = useInView<HTMLDivElement>();

    return (
        <Component
            ref={ref}
            className={cn('reveal', isInView && 'is-visible', className)}
            style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
        >
            {children}
        </Component>
    );
}
