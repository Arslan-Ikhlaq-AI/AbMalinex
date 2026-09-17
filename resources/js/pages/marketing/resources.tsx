import { Head } from '@inertiajs/react';
import { ArrowRight, Clock, Search } from 'lucide-react';
import { useState } from 'react';
import { brandButtonClasses } from '@/components/marketing/brand-button';
import CtaBanner from '@/components/marketing/cta-banner';
import FilterPills from '@/components/marketing/filter-pills';
import PageHero from '@/components/marketing/page-hero';
import Reveal from '@/components/marketing/reveal';
import { articleFilters, articleList } from '@/lib/marketing-content';

const articlesPerPage = 3;

export default function Resources() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleCount, setVisibleCount] = useState(articlesPerPage);

    const filteredArticles = articleList.filter(
        (article) =>
            (activeFilter === 'All' || article.category === activeFilter) &&
            article.title
                .toLowerCase()
                .includes(searchTerm.trim().toLowerCase()),
    );
    const visibleArticles = filteredArticles.slice(0, visibleCount);

    return (
        <>
            <Head title="Resources & Insights" />

            <PageHero
                eyebrow="Resources"
                title="Resources & Insights"
                description="Stay updated with the latest in medical billing and RCM."
            >
                <FilterPills
                    filters={articleFilters}
                    activeFilter={activeFilter}
                    onChange={(filter) => {
                        setActiveFilter(filter);
                        setVisibleCount(articlesPerPage);
                    }}
                />
                <label className="relative w-full max-w-md">
                    <span className="sr-only">Search articles</span>
                    <Search className="pointer-events-none absolute top-1/2 left-4 z-10 size-4.5 -translate-y-1/2 text-slate-400" />
                    <input
                        type="search"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder="Search articles…"
                        className="text-navy-900 focus:border-brand-400 focus:ring-brand-100 h-11 w-full rounded-2xl border border-slate-200 bg-white/90 pr-4 pl-11 text-sm transition focus:ring-4 focus:outline-none"
                    />
                </label>
            </PageHero>

            <section className="px-4 sm:px-6">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {visibleArticles.map((article, index) => (
                            <Reveal
                                as="article"
                                key={article.title}
                                delay={(index % 3) * 80}
                                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_10px_40px_-20px_rgb(10_35_66/0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgb(23_111_147/0.35)]"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt=""
                                        loading="lazy"
                                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <span className="text-brand-700 absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-bold tracking-wider uppercase backdrop-blur">
                                        {article.category}
                                    </span>
                                </div>
                                <div className="flex flex-1 flex-col gap-3 p-6">
                                    <h2 className="font-display text-navy-900 group-hover:text-brand-600 text-lg leading-snug font-bold transition-colors">
                                        {article.title}
                                    </h2>
                                    <p className="text-sm text-slate-500">
                                        {article.excerpt}
                                    </p>
                                    <div className="mt-auto flex items-center gap-3 pt-2 text-xs text-slate-400">
                                        <span>{article.date}</span>
                                        <span className="size-1 rounded-full bg-slate-300" />
                                        <span className="flex items-center gap-1">
                                            <Clock className="size-3.5" />
                                            {article.readTime}
                                        </span>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-brand-600 flex items-center gap-1.5 text-sm font-semibold"
                                    >
                                        Read More
                                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {filteredArticles.length === 0 && (
                        <p className="rounded-3xl border border-dashed border-slate-200 p-10 text-center text-slate-500">
                            No articles match your search.
                        </p>
                    )}

                    {visibleCount < filteredArticles.length && (
                        <div className="mt-10 flex justify-center">
                            <button
                                type="button"
                                onClick={() =>
                                    setVisibleCount(
                                        (count) => count + articlesPerPage,
                                    )
                                }
                                className={brandButtonClasses('primary')}
                            >
                                View All Articles
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <CtaBanner />
        </>
    );
}
