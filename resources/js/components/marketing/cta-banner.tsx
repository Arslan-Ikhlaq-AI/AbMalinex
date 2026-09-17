import { ArrowRight, CalendarCheck } from 'lucide-react';
import BrandButton from '@/components/marketing/brand-button';
import Reveal from '@/components/marketing/reveal';
import { contact, demo } from '@/routes';

export default function CtaBanner({
    title = 'Ready to Improve Your Revenue Cycle?',
    description = 'Let our experts handle the complexities while you focus on patient care.',
}: {
    title?: string;
    description?: string;
}) {
    return (
        <section className="px-4 py-16 sm:px-6 lg:py-24">
            <Reveal className="border-brand-100 from-brand-50 to-brand-50 relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border bg-gradient-to-br via-white px-6 py-14 text-center shadow-[0_30px_80px_-40px_rgb(23_111_147/0.45)] sm:px-12">
                <div className="bg-grid-fade pointer-events-none absolute inset-0" />
                <div className="bg-cyan-glow/20 pointer-events-none absolute -top-20 left-1/2 h-40 w-2/3 -translate-x-1/2 rounded-full blur-3xl" />
                <div className="relative flex flex-col items-center gap-4">
                    <span className="text-brand-600 flex size-12 items-center justify-center rounded-2xl bg-white shadow-md">
                        <CalendarCheck className="size-6" />
                    </span>
                    <h2 className="font-display text-navy-900 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                        {title}
                    </h2>
                    <p className="max-w-xl text-slate-600">{description}</p>
                    <div className="mt-3 flex flex-wrap justify-center gap-3">
                        <BrandButton href={contact()} size="lg">
                            Get Free Audit
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </BrandButton>
                        <BrandButton href={demo()} size="lg" variant="outline">
                            Explore Demo Dashboard
                        </BrandButton>
                    </div>
                    <p className="text-xs text-slate-500">
                        Free, no-obligation audit · Results in 5 business days
                    </p>
                </div>
            </Reveal>
        </section>
    );
}
