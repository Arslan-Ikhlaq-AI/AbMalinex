import { Form, Link } from '@inertiajs/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import AbMalinexLogo from '@/components/marketing/abmalinex-logo';
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
            { label: 'View All Services', href: services().url },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About Us', href: about().url },
            { label: 'Our Team', href: about().url },
            { label: 'Specialties', href: specialties().url },
            { label: 'Why AbMalinex', href: demo().url },
            { label: 'Contact Us', href: contact().url },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'Blog', href: resources().url },
            { label: 'Case Studies', href: caseStudies().url },
            { label: 'Client Portal Demo', href: demo().url },
            { label: 'Guides', href: resources().url },
            { label: 'Compliance', href: resources().url },
        ],
    },
];

export default function SiteFooter() {
    return (
        <footer className="px-3 pb-3 sm:px-5 sm:pb-5">
            <div className="bg-navy-900 relative mx-auto max-w-7xl overflow-hidden rounded-3xl text-white">
                <div className="bg-brand-500/25 pointer-events-none absolute -top-32 -right-24 size-96 rounded-full blur-3xl" />
                <div className="bg-cyan-glow/10 pointer-events-none absolute -bottom-40 -left-24 size-96 rounded-full blur-3xl" />

                <div className="relative flex flex-col gap-6 border-b border-white/10 px-6 py-8 sm:px-10 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="font-display text-xl font-bold">
                            Get billing insights in your inbox
                        </p>
                        <p className="text-brand-100/70 text-sm">
                            Monthly RCM tips, payer updates and coding changes.
                            No spam.
                        </p>
                    </div>
                    <Form
                        action={contact().url}
                        method="get"
                        className="flex w-full max-w-md gap-2 rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur"
                    >
                        <label htmlFor="newsletter-email" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="newsletter-email"
                            type="email"
                            name="email"
                            required
                            placeholder="you@practice.com"
                            className="placeholder:text-brand-100/50 min-w-0 flex-1 bg-transparent px-3 text-sm text-white focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-cyan-glow text-navy-950 flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:brightness-110"
                        >
                            Subscribe
                            <Send className="size-4" />
                        </button>
                    </Form>
                </div>

                <div className="relative grid gap-10 px-6 py-12 sm:px-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr]">
                    <div className="flex flex-col gap-5">
                        <AbMalinexLogo inverted />
                        <p className="text-brand-100/70 max-w-xs text-sm leading-relaxed">
                            We help healthcare providers maximize revenue and
                            improve cash flow through expert medical billing and
                            RCM services.
                        </p>
                        <SocialLinks />
                    </div>

                    {footerColumns.map((column) => (
                        <div key={column.title} className="flex flex-col gap-4">
                            <p className="font-display font-semibold">
                                {column.title}
                            </p>
                            <ul className="flex flex-col gap-2.5">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-brand-100/70 hover:text-cyan-glow text-sm transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="flex flex-col gap-4">
                        <p className="font-display font-semibold">Contact Us</p>
                        <ul className="text-brand-100/70 flex flex-col gap-3 text-sm">
                            <li>
                                <a
                                    href={`tel:${contactDetails.phone}`}
                                    className="hover:text-cyan-glow flex items-center gap-3 transition-colors"
                                >
                                    <Phone className="text-cyan-glow size-4 shrink-0" />
                                    {contactDetails.phone}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${contactDetails.email}`}
                                    className="hover:text-cyan-glow flex items-center gap-3 transition-colors"
                                >
                                    <Mail className="text-cyan-glow size-4 shrink-0" />
                                    {contactDetails.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="text-cyan-glow mt-0.5 size-4 shrink-0" />
                                <span>
                                    {contactDetails.addressLine1}
                                    <br />
                                    {contactDetails.addressLine2}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-brand-100/60 relative flex flex-col gap-3 border-t border-white/10 px-6 py-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-10">
                    <p>
                        © {new Date().getFullYear()} AbMalinex Health & IT
                        Services. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-white">
                            HIPAA Notice
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
