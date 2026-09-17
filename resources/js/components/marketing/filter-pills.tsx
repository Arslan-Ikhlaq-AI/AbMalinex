import { cn } from '@/lib/utils';

export default function FilterPills({
    filters,
    activeFilter,
    onChange,
}: {
    filters: string[];
    activeFilter: string;
    onChange: (filter: string) => void;
}) {
    return (
        <div className="mt-4 flex flex-wrap justify-center gap-2 rounded-2xl border border-slate-200/70 bg-white/80 p-1.5 shadow-sm backdrop-blur">
            {filters.map((filter) => (
                <button
                    key={filter}
                    type="button"
                    onClick={() => onChange(filter)}
                    aria-pressed={filter === activeFilter}
                    className={cn(
                        'rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300',
                        filter === activeFilter
                            ? 'bg-brand-600 shadow-brand-600/30 text-white shadow-md'
                            : 'hover:bg-brand-50 hover:text-brand-700 text-slate-600',
                    )}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}
