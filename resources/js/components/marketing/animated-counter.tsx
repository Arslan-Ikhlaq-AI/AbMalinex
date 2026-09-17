import { useEffect, useState } from 'react';
import { useInView } from '@/components/marketing/reveal';
import type { Stat } from '@/lib/marketing-content';

export default function AnimatedCounter({
    stat,
    duration = 1600,
}: {
    stat: Stat;
    duration?: number;
}) {
    const { ref, isInView } = useInView<HTMLSpanElement>(0.4);
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        if (!isInView) {
            return;
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setCurrentValue(stat.value);

            return;
        }

        let frame = 0;
        const startedAt = performance.now();

        const tick = (now: number) => {
            const progress = Math.min((now - startedAt) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            setCurrentValue(stat.value * eased);

            if (progress < 1) {
                frame = requestAnimationFrame(tick);
            }
        };

        frame = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(frame);
    }, [isInView, stat.value, duration]);

    return (
        <span ref={ref} className="tabular-nums">
            {stat.prefix}
            {currentValue.toFixed(stat.decimals ?? 0)}
            {stat.suffix}
        </span>
    );
}
