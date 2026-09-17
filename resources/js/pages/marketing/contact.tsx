import { Form, Head, usePage } from '@inertiajs/react';
import {
    CheckCircle2,
    ChevronDown,
    Clock,
    Mail,
    MapPin,
    Phone,
    Send,
    ShieldCheck,
} from 'lucide-react';
import type { ReactNode } from 'react';
import AuditRequestController from '@/actions/App/Http/Controllers/Marketing/AuditRequestController';
import InputError from '@/components/input-error';
import { brandButtonClasses } from '@/components/marketing/brand-button';
import PageHero from '@/components/marketing/page-hero';
import Reveal from '@/components/marketing/reveal';
import SocialLinks from '@/components/marketing/social-links';
import { Spinner } from '@/components/ui/spinner';
import { contactDetails, specialtyList } from '@/lib/marketing-content';
import { cn } from '@/lib/utils';

const fieldClasses =
    'peer h-12 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 text-sm text-navy-900 transition placeholder:text-slate-400 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100 focus:outline-none aria-invalid:border-red-400';

function ContactItem({
    icon,
    title,
    children,
}: {
    icon: ReactNode;
    title: string;
    children: ReactNode;
}) {
    return (
        <li className="flex gap-4">
            <span className="bg-navy-800 shadow-navy-900/20 flex size-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg">
                {icon}
            </span>
            <div className="flex flex-col text-sm">
                <span className="text-navy-900 font-semibold">{title}</span>
                <span className="text-slate-600">{children}</span>
            </div>
        </li>
    );
}

export default function Contact() {
    const { url } = usePage();
    const prefilledEmail =
        new URLSearchParams(url.split('?')[1] ?? '').get('email') ?? '';

    return (
        <>
            <Head title="Contact Us" />

            <PageHero
                eyebrow="Contact"
                title="Let's Connect"
                description="We're here to help your practice thrive. Reach out today and get a free, no-obligation billing audit."
            />

            <section className="px-4 pb-24 sm:px-6">
                <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.35fr]">
                    <Reveal className="flex flex-col gap-8 rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_20px_60px_-30px_rgb(10_35_66/0.3)]">
                        <div>
                            <h2 className="font-display text-navy-900 text-2xl font-bold">
                                Get in touch
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Talk to a billing specialist, not a sales bot.
                            </p>
                        </div>
                        <ul className="flex flex-col gap-6">
                            <ContactItem
                                icon={<Phone className="size-5" />}
                                title="Phone"
                            >
                                <a
                                    href={`tel:${contactDetails.phone}`}
                                    className="hover:text-brand-600"
                                >
                                    {contactDetails.phone}
                                </a>
                            </ContactItem>
                            <ContactItem
                                icon={<Mail className="size-5" />}
                                title="Email"
                            >
                                <a
                                    href={`mailto:${contactDetails.email}`}
                                    className="hover:text-brand-600"
                                >
                                    {contactDetails.email}
                                </a>
                            </ContactItem>
                            <ContactItem
                                icon={<MapPin className="size-5" />}
                                title="Address"
                            >
                                {contactDetails.addressLine1}
                                <br />
                                {contactDetails.addressLine2}
                            </ContactItem>
                            <ContactItem
                                icon={<Clock className="size-5" />}
                                title="Hours"
                            >
                                {contactDetails.hours}
                                <br />
                                {contactDetails.hoursWeekend}
                            </ContactItem>
                        </ul>
                        <SocialLinks tone="light" />
                        <div className="mt-auto overflow-hidden rounded-2xl">
                            <img
                                src="/images/marketing/reception.jpg"
                                alt="AbMalinex office reception"
                                loading="lazy"
                                className="aspect-[16/9] w-full object-cover"
                            />
                        </div>
                    </Reveal>

                    <Reveal
                        delay={120}
                        className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_30px_80px_-40px_rgb(10_35_66/0.4)] sm:p-10"
                    >
                        <div className="bg-cyan-glow/15 pointer-events-none absolute -top-20 -right-20 size-60 rounded-full blur-3xl" />
                        <div className="relative">
                            <h2 className="font-display text-navy-900 text-center text-2xl font-bold">
                                Request Free Audit
                            </h2>
                            <p className="mt-1 text-center text-sm text-slate-500">
                                Takes under a minute. We reply within one
                                business day.
                            </p>

                            <Form
                                {...AuditRequestController.store.form()}
                                options={{ preserveScroll: true }}
                                resetOnSuccess
                                className="mt-8 grid gap-4 sm:grid-cols-2"
                            >
                                {({ errors, processing, wasSuccessful }) => (
                                    <>
                                        <div className="grid gap-1.5 sm:col-span-2">
                                            <label
                                                htmlFor="full_name"
                                                className="sr-only"
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                id="full_name"
                                                name="full_name"
                                                required
                                                autoComplete="name"
                                                placeholder="Full Name"
                                                aria-invalid={Boolean(
                                                    errors.full_name,
                                                )}
                                                className={fieldClasses}
                                            />
                                            <InputError
                                                message={errors.full_name}
                                            />
                                        </div>
                                        <div className="grid gap-1.5">
                                            <label
                                                htmlFor="email"
                                                className="sr-only"
                                            >
                                                Email Address
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                autoComplete="email"
                                                defaultValue={prefilledEmail}
                                                placeholder="Email Address"
                                                aria-invalid={Boolean(
                                                    errors.email,
                                                )}
                                                className={fieldClasses}
                                            />
                                            <InputError
                                                message={errors.email}
                                            />
                                        </div>
                                        <div className="grid gap-1.5">
                                            <label
                                                htmlFor="phone"
                                                className="sr-only"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                autoComplete="tel"
                                                placeholder="Phone Number"
                                                aria-invalid={Boolean(
                                                    errors.phone,
                                                )}
                                                className={fieldClasses}
                                            />
                                            <InputError
                                                message={errors.phone}
                                            />
                                        </div>
                                        <div className="grid gap-1.5">
                                            <label
                                                htmlFor="practice_name"
                                                className="sr-only"
                                            >
                                                Practice Name
                                            </label>
                                            <input
                                                id="practice_name"
                                                name="practice_name"
                                                autoComplete="organization"
                                                placeholder="Practice Name"
                                                aria-invalid={Boolean(
                                                    errors.practice_name,
                                                )}
                                                className={fieldClasses}
                                            />
                                            <InputError
                                                message={errors.practice_name}
                                            />
                                        </div>
                                        <div className="grid gap-1.5">
                                            <label
                                                htmlFor="specialty"
                                                className="sr-only"
                                            >
                                                Specialty
                                            </label>
                                            <div className="relative">
                                                <select
                                                    id="specialty"
                                                    name="specialty"
                                                    defaultValue=""
                                                    aria-invalid={Boolean(
                                                        errors.specialty,
                                                    )}
                                                    className={cn(
                                                        fieldClasses,
                                                        'appearance-none pr-10',
                                                    )}
                                                >
                                                    <option value="">
                                                        Specialty
                                                    </option>
                                                    {specialtyList.map(
                                                        (specialty) => (
                                                            <option
                                                                key={
                                                                    specialty.name
                                                                }
                                                                value={
                                                                    specialty.name
                                                                }
                                                            >
                                                                {specialty.name}
                                                            </option>
                                                        ),
                                                    )}
                                                    <option value="Other">
                                                        Other
                                                    </option>
                                                </select>
                                                <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-slate-400" />
                                            </div>
                                            <InputError
                                                message={errors.specialty}
                                            />
                                        </div>
                                        <div className="grid gap-1.5 sm:col-span-2">
                                            <label
                                                htmlFor="message"
                                                className="sr-only"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                placeholder="Message"
                                                aria-invalid={Boolean(
                                                    errors.message,
                                                )}
                                                className={cn(
                                                    fieldClasses,
                                                    'h-auto resize-none py-3',
                                                )}
                                            />
                                            <InputError
                                                message={errors.message}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className={cn(
                                                brandButtonClasses(
                                                    'primary',
                                                    'lg',
                                                ),
                                                'sm:col-span-2',
                                            )}
                                        >
                                            {processing ? (
                                                <Spinner />
                                            ) : (
                                                <Send className="size-4" />
                                            )}
                                            Get Free Audit
                                        </button>

                                        {wasSuccessful && (
                                            <p className="animate-in fade-in flex items-center justify-center gap-2 rounded-xl bg-emerald-50 p-3 text-sm font-medium text-emerald-700 sm:col-span-2">
                                                <CheckCircle2 className="size-4" />
                                                Request received! We'll be in
                                                touch shortly.
                                            </p>
                                        )}

                                        <p className="flex items-center justify-center gap-2 text-xs text-slate-500 sm:col-span-2">
                                            <ShieldCheck className="text-brand-500 size-4" />
                                            Your information is encrypted and
                                            never shared.
                                        </p>
                                    </>
                                )}
                            </Form>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
