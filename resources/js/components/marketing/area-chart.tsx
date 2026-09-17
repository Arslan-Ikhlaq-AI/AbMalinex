import { useId } from 'react';
import { useInView } from '@/components/marketing/reveal';
import { cn } from '@/lib/utils';

type AreaChartProps = {
    series: number[];
    labels?: string[];
    className?: string;
    tone?: 'light' | 'dark';
    showGrid?: boolean;
    yTicks?: string[];
};

const chartWidth = 320;
const chartHeight = 140;

/**
 * Builds a smooth cubic bezier path through the given points.
 */
function buildSmoothPath(points: [number, number][]): string {
    return points.reduce((path, [x, y], index) => {
        if (index === 0) {
            return `M${x},${y}`;
        }

        const [previousX, previousY] = points[index - 1];
        const controlX = (previousX + x) / 2;

        return `${path} C${controlX},${previousY} ${controlX},${y} ${x},${y}`;
    }, '');
}

export default function AreaChart({
    series,
    labels,
    className,
    tone = 'light',
    showGrid = true,
    yTicks,
}: AreaChartProps) {
    const gradientId = useId();
    const { ref, isInView } = useInView<SVGSVGElement>(0.3);
    const maxValue = Math.max(...series) * 1.1;
    const minValue = Math.min(...series) * 0.8;
    const points: [number, number][] = series.map((value, index) => [
        (index / (series.length - 1)) * chartWidth,
        chartHeight -
            ((value - minValue) / (maxValue - minValue)) * chartHeight,
    ]);
    const linePath = buildSmoothPath(points);
    const areaPath = `${linePath} L${chartWidth},${chartHeight} L0,${chartHeight} Z`;
    const [lastX, lastY] = points[points.length - 1];
    const isDark = tone === 'dark';

    return (
        <div className={cn('flex w-full flex-col gap-2', className)}>
            <div className="flex min-h-0 flex-1 gap-2">
                {yTicks && (
                    <div
                        className={cn(
                            'flex flex-col justify-between py-0.5 text-[0.6rem]',
                            isDark ? 'text-brand-200/70' : 'text-slate-400',
                        )}
                    >
                        {yTicks.map((tick) => (
                            <span key={tick}>{tick}</span>
                        ))}
                    </div>
                )}
                <div className="relative min-h-0 flex-1">
                    <svg
                        ref={ref}
                        viewBox={`0 -8 ${chartWidth} ${chartHeight + 16}`}
                        preserveAspectRatio="none"
                        className="absolute inset-0 size-full overflow-visible"
                        role="img"
                        aria-label="Trend chart"
                    >
                        <defs>
                            <linearGradient
                                id={gradientId}
                                x1="0"
                                x2="0"
                                y1="0"
                                y2="1"
                            >
                                <stop
                                    offset="0%"
                                    stopColor={isDark ? '#22c3dd' : '#1d8aaf'}
                                    stopOpacity={isDark ? 0.45 : 0.28}
                                />
                                <stop
                                    offset="100%"
                                    stopColor={isDark ? '#22c3dd' : '#1d8aaf'}
                                    stopOpacity="0"
                                />
                            </linearGradient>
                        </defs>
                        {showGrid &&
                            [0, 1, 2, 3].map((row) => (
                                <line
                                    key={row}
                                    x1="0"
                                    x2={chartWidth}
                                    y1={(chartHeight / 3) * row}
                                    y2={(chartHeight / 3) * row}
                                    stroke={isDark ? '#ffffff' : '#0f3a52'}
                                    strokeOpacity={isDark ? 0.08 : 0.06}
                                    strokeDasharray="4 4"
                                    vectorEffect="non-scaling-stroke"
                                />
                            ))}
                        <g
                            className="transition-[clip-path] duration-[1600ms] ease-out"
                            style={{
                                clipPath: isInView
                                    ? 'inset(-10% -2% -10% -2%)'
                                    : 'inset(-10% 100% -10% -2%)',
                            }}
                        >
                            <path d={areaPath} fill={`url(#${gradientId})`} />
                            <path
                                d={linePath}
                                fill="none"
                                stroke={isDark ? '#5ad6e8' : '#176f93'}
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                vectorEffect="non-scaling-stroke"
                            />
                        </g>
                    </svg>
                    <span
                        className={cn(
                            'absolute size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow transition-opacity delay-[1500ms] duration-300',
                            isDark ? 'bg-[#5ad6e8]' : 'bg-brand-600',
                            isInView ? 'opacity-100' : 'opacity-0',
                        )}
                        style={{
                            left: `${(lastX / chartWidth) * 100}%`,
                            top: `${((lastY + 8) / (chartHeight + 16)) * 100}%`,
                        }}
                    />
                </div>
            </div>
            {labels && (
                <div
                    className={cn(
                        'flex justify-between text-[0.6rem]',
                        yTicks && 'pl-7',
                        isDark ? 'text-brand-200/70' : 'text-slate-400',
                    )}
                >
                    {labels.map((label) => (
                        <span key={label}>{label}</span>
                    ))}
                </div>
            )}
        </div>
    );
}
