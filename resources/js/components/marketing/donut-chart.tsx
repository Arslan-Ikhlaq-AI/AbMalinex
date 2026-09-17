import { useInView } from '@/components/marketing/reveal';

export type DonutSegment = {
    label: string;
    value: number;
    color: string;
};

export default function DonutChart({
    segments,
    centerLabel,
    centerValue,
}: {
    segments: DonutSegment[];
    centerLabel: string;
    centerValue: string;
}) {
    const { ref, isInView } = useInView<SVGSVGElement>(0.3);
    const radius = 38;
    const circumference = 2 * Math.PI * radius;
    const total = segments.reduce((sum, segment) => sum + segment.value, 0);
    let accumulated = 0;

    return (
        <div className="relative mx-auto aspect-square w-32 shrink-0">
            <svg ref={ref} viewBox="0 0 100 100" className="-rotate-90">
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="#e2eef3"
                    strokeWidth="14"
                />
                {segments.map((segment) => {
                    const length = (segment.value / total) * circumference;
                    const offset = accumulated;
                    accumulated += length;

                    return (
                        <circle
                            key={segment.label}
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            stroke={segment.color}
                            strokeWidth="14"
                            strokeDasharray={`${isInView ? length - 1.2 : 0} ${circumference}`}
                            strokeDashoffset={-offset}
                            className="transition-[stroke-dasharray] duration-1000 ease-out"
                        />
                    );
                })}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-navy-800 text-lg font-bold">
                    {centerValue}
                </span>
                <span className="text-[0.6rem] text-slate-500">
                    {centerLabel}
                </span>
            </div>
        </div>
    );
}
