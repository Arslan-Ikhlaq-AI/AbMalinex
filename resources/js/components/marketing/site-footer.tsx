import { Form, Link } from '@inertiajs/react';
import {
    ArrowRight,
    ArrowUp,
    ArrowUpRight,
    Award,
    Clock,
    Lock,
    Mail,
    MapPin,
    Phone,
    Send,
    ShieldCheck,
} from 'lucide-react';
import AbMalinexLogo from '@/components/marketing/abmalinex-logo';
import BrandButton from '@/components/marketing/brand-button';
import SocialLinks from '@/components/marketing/social-links';
import { contactDetails } from '@/lib/marketing-content';
import {
    about,
    caseStudies,
    contact,
    demo,
    resources,
    services,
    specialties,
} from '@/routes';

const footerColumns = [
    {
        title: 'Services',
        links: [
            {
                label: 'Medical Billing',
                href: `${services().url}#medical-billing`,
            },
            {
                label: 'Medical Coding',
                href: `${services().url}#medical-coding`,
            },
            {
                label: 'RCM Management',
                href: `${services().url}#rcm-management`,
            },
            {
                label: 'Denial Management',
                href: `${services().url}#denial-management`,
            },
            { label: 'AR Follow-Up', href: `${services().url}#ar-follow-up` },
            { label: 'Credentialing', href: `${services().url}#credentialing` },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About Us', href: about().url },
            { label: 'Specialties', href: specialties().url },
            { label: 'Case Studies', href: caseStudies().url },
            { label: 'Client Portal Demo', href: demo().url },
            { label: 'Contact Us', href: contact().url },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'Blog & Insights', href: resources().url },
            { label: 'Billing Guides', href: resources().url },
            { label: 'Compliance Updates', href: resources().url },
            { label: 'Free Revenue Audit', href: contact().url },
        ],
    },
];

const complianceBadges = [
    { label: 'HIPAA Compliant', icon: ShieldCheck },
    { label: 'SOC 2 Type II', icon: Lock },
    { label: 'AAPC Certified Coders', icon: Award },
    { label: 'US-Based Support', icon: Clock },
];

export default function SiteFooter() {
    return (
        <footer className="via-brand-50/50 to-brand-50 text-navy-900 relative isolate overflow-hidden bg-gradient-to-b from-white">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="bg-brand-100/50 absolute -top-40 left-1/4 size-[40rem] rounded-full blur-[140px]" />
                <div className="bg-cyan-glow/10 absolute right-[-10%] bottom-0 size-[36rem] rounded-full blur-[140px]" />
                <div className="bg-grid-fade absolute inset-0" />
            </div>
            <div className="via-brand-200 h-px w-full bg-gradient-to-r from-transparent to-transparent" />

            <div className="mx-auto max-w-[88rem] px-4 sm:px-8">
                <div className="border-brand-100 flex flex-col items-start justify-between gap-8 border-b py-14 lg:flex-row lg:items-center">
                    <div className="max-w-2xl">
                        <p className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
                            Stop leaving revenue on the table
                        </p>
                        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                            Ready to get paid faster for the care you provide?
                        </h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <BrandButton
                            href={contact()}
                            size="lg"
                            className="btn-shine h-14 rounded-2xl"
                        >
                            Get Your Free Audit
                            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                        </BrandButton>
                        <a
                            href={`tel:${contactDetails.phone}`}
                            className="text-navy-900 hover:border-brand-300 inline-flex h-14 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 font-semibold transition"
                        >
                            <Phone className="text-brand-600 size-5" />
                            {contactDetails.phone}
                        </a>
                    </div>
                </div>

                <div className="grid gap-12 py-16 lg:grid-cols-12">
                    <div className="flex flex-col gap-6 lg:col-span-4">
                        <AbMalinexLogo
                            layout="stacked"
                            className="h-32 self-start"
                        />
                        <p className="max-w-sm leading-relaxed text-slate-600">
                            We help healthcare providers maximize revenue and
                            improve cash flow through expert medical billing,
                            coding and revenue cycle management.
                        </p>
                        <ul className="flex flex-col gap-3 text-sm text-slate-600">
                            <li>
                                <a
                                    href={`mailto:${contactDetails.email}`}
                                    className="group hover:text-brand-600 flex items-center gap-3 transition-colors"
                                >
                                    <span className="text-brand-600 border-brand-100 flex size-9 items-center justify-center rounded-xl border bg-white">
                                        <Mail className="size-4" />
                                    </span>
                                    {contactDetails.email}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-brand-600 border-brand-100 flex size-9 shrink-0 items-center justify-center rounded-xl border bg-white">
                                    <MapPin className="size-4" />
                                </span>
                                <span>
                                    {contactDetails.addressLine1},{' '}
                                    {contactDetails.addressLine2}
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-brand-600 border-brand-100 flex size-9 shrink-0 items-center justify-center rounded-xl border bg-white">
                                    <Clock className="size-4" />
                                </span>
                                {contactDetails.hours}
                            </li>
                        </ul>
                        <SocialLinks tone="light" />
                    </div>

                    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-5">
                        {footerColumns.map((column) => (
                            <div
                                key={column.title}
                                className="flex flex-col gap-5"
                            >
                                <p className="font-display text-navy-900 text-sm font-semibold tracking-wider uppercase">
                                    {column.title}
                                </p>
                                <ul className="flex flex-col gap-3">
                                    {column.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="group hover:text-brand-600 inline-flex items-center gap-1 text-sm text-slate-600 transition-colors"
                                            >
                                                {link.label}
                                                <ArrowUpRight className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-3">
                        <div className="ring-brand-100 flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-[0_20px_50px_-24px_rgb(10_35_66/0.25)] ring-1">
                            <p className="font-display text-lg font-bold">
                                Billing insights, monthly
                            </p>
                            <p className="text-sm text-slate-600">
                                Payer updates, coding changes and RCM tips. Join
                                4,000+ practice leaders.
                            </p>
                            <Form
                                action={contact().url}
                                method="get"
                                className="flex flex-col gap-2"
                            >
                                <label
                                    htmlFor="newsletter-email"
                                    className="sr-only"
                                >
                                    Email address
                                </label>
                                <input
                                    id="newsletter-email"
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="you@practice.com"
                                    className="text-navy-900 focus:border-brand-400 focus:ring-brand-100 h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm placeholder:text-slate-400 focus:ring-4 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="btn-shine bg-brand-600 hover:bg-brand-700 flex h-12 items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white transition"
                                >
                                    Subscribe
                                    <Send className="size-4" />
                                </button>
                            </Form>
                            <p className="text-xs text-slate-400">
                                No spam. Unsubscribe anytime.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-brand-100 flex flex-wrap items-center justify-center gap-3 border-t py-8 lg:justify-between">
                    {complianceBadges.map((badge) => (
                        <span
                            key={badge.label}
                            className="border-brand-100 flex items-center gap-2.5 rounded-full border bg-white px-4 py-2 text-sm text-slate-600"
                        >
                            <badge.icon className="text-brand-600 size-4" />
                            {badge.label}
                        </span>
                    ))}
                </div>
            </div>

            <div
                aria-hidden="true"
                className="font-display pointer-events-none mx-auto -mb-[0.2em] max-w-[88rem] px-4 text-center text-[17vw] leading-none font-extrabold tracking-[-0.05em] select-none sm:px-8 2xl:text-[15rem]"
            >
                <span className="from-brand-200/80 to-brand-100/0 bg-gradient-to-b bg-clip-text text-transparent">
                    AbMalinex
                </span>
            </div>

            <div className="border-brand-100 relative border-t bg-white/70 backdrop-blur">
                <div className="mx-auto flex max-w-[88rem] flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-slate-500 sm:px-8 md:flex-row">
                    <p>
                        © {new Date().getFullYear()} AbMalinex Health & IT
                        Services. All rights reserved.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <a
                            href="#"
                            className="hover:text-brand-600 transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-brand-600 transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="hover:text-brand-600 transition-colors"
                        >
                            HIPAA Notice
                        </a>
                        <button
                            type="button"
                            onClick={() =>
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }
                            aria-label="Back to top"
                            className="hover:border-brand-300 hover:text-brand-600 text-navy-900 flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:-translate-y-0.5"
                        >
                            <ArrowUp className="size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
