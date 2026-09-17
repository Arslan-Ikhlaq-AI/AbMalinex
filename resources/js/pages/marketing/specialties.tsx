import { Head } from '@inertiajs/react';
import { ChevronDown, Search, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import PageHero from '@/components/marketing/page-hero';
import Reveal from '@/components/marketing/reveal';
import { specialtyList } from '@/lib/marketing-content';
import { trackSpotlight } from '@/lib/spotlight';
import { brandButtonClasses } from '@/components/marketing/brand-button';

const initialVisibleCount = 9;

export default function Specialties() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isShowingAll, setIsShowingAll] = useState(false);

    const matchingSpecialties = specialtyList.filter((specialty) =>
        specialty.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
    );
    const visibleSpecialties =
        isShowingAll || searchTerm
            ? matchingSpecialties
            : matchingSpecialties.slice(0, initialVisibleCount);

    return (
        <>
            <Head title="Specialties We Serve" />

            <PageHero
                eyebrow="Specialties"
                title="Specialties We Serve"
                description="Expert RCM support for 20+ medical specialties."
            >
                <label className="relative mt-4 w-full max-w-md">
                    <span className="sr-only">Search specialties</span>
                    <Search className="pointer-events-none absolute top-1/2 left-4 z-10 size-4.5 -translate-y-1/2 text-slate-400" />
                    <input
                        type="search"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder="Search your specialty…"
                        className="text-navy-900 shadow-navy-900/5 focus:border-brand-400 focus:ring-brand-100 h-12 w-full rounded-2xl border border-slate-200 bg-white/90 pr-4 pl-11 text-sm shadow-lg backdrop-blur transition focus:ring-4 focus:outline-none"
                    />
                </label>
            </PageHero>

            <section className="px-4 sm:px-6">
                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {visibleSpecialties.map((specialty, index) => (
                            <Reveal
                                key={specialty.name}
                                delay={(index % 3) * 80}
                            >
                                <article
                                    onMouseMove={trackSpotlight}
                                    className="spotlight-card group hover:border-brand-200 relative flex h-full min-h-52 flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-[0_6px_30px_-12px_rgb(10_35_66/0.15)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgb(23_111_147/0.4)]"
                                >
                                    <span className="bg-brand-50 text-brand-600 ring-brand-100 group-hover:bg-brand-600 flex size-16 items-center justify-center rounded-2xl ring-1 transition-all duration-500 group-hover:scale-90 group-hover:text-white">
                                        <specialty.icon
                                            className="size-8"
                                            strokeWidth={1.5}
                                        />
                                    </span>
                                    <h2 className="text-navy-900 font-semibold">
                                        {specialty.name}
                                    </h2>
                                    <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                                        <div className="flex flex-col items-center gap-2 overflow-hidden">
                                            <p className="text-sm text-slate-500">
                                                {specialty.description}
                                            </p>
                                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                                                <TrendingUp className="size-3.5" />
                                                {specialty.metric}
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>

                    {matchingSpecialties.length === 0 && (
                        <p className="rounded-3xl border border-dashed border-slate-200 p-10 text-center text-slate-500">
                            We don't list “{searchTerm}” yet, but we likely bill
                            for it. Contact us and we'll confirm.
                        </p>
                    )}

                    {!searchTerm &&
                        specialtyList.length > initialVisibleCount && (
                            <div className="mt-10 flex justify-center">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setIsShowingAll(
                                            (isCurrentlyShowing) =>
                                                !isCurrentlyShowing,
                                        )
                                    }
                                    className={brandButtonClasses('primary')}
                                >
                                    {isShowingAll
                                        ? 'Show Fewer Specialties'
                                        : 'View All Specialties'}
                                    <ChevronDown
                                        className={
                                            isShowingAll
                                                ? 'size-4 rotate-180 transition-transform'
                                                : 'size-4 transition-transform'
                                        }
                                    />
                                </button>
                            </div>
                        )}
                </div>
            </section>

            <div className="h-24 lg:h-32" />
        </>
    );
}
