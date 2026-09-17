import { Link } from '@inertiajs/react';
import { ArrowRight, ChevronDown, Menu, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import AbMalinexLogo from '@/components/marketing/abmalinex-logo';
import BrandButton from '@/components/marketing/brand-button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { useCurrentUrl } from '@/hooks/use-current-url';
import {
    contactDetails,
    coreServices,
    navigationLinks,
} from '@/lib/marketing-content';
import { cn } from '@/lib/utils';
import { contact, home, services } from '@/routes';

export default function SiteHeader() {
    const { isCurrentUrl } = useCurrentUrl();
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setHasScrolled(window.scrollY > 12);

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
            <div
                className={cn(
                    'mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 rounded-2xl px-4 transition-all duration-500 sm:px-6',
                    hasScrolled
                        ? 'border border-white/60 bg-white/75 shadow-[0_10px_40px_-12px_rgb(10_35_66/0.25)] backdrop-blur-xl'
                        : 'border border-transparent bg-transparent',
                )}
            >
                <Link href={home()} aria-label="AbMalinex home" prefetch>
                    <AbMalinexLogo />
                </Link>

                <nav className="hidden items-center gap-1 lg:flex">
                    {navigationLinks.map((link) =>
                        link.label === 'Services' ? (
                            <div key={link.href} className="group relative">
                                <Link
                                    href={link.href}
                                    prefetch
                                    className={cn(
                                        'hover:text-brand-600 flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                                        isCurrentUrl(link.href)
                                            ? 'text-brand-600'
                                            : 'text-navy-900/80',
                                    )}
                                >
                                    {link.label}
                                    <ChevronDown className="size-3.5 transition-transform duration-300 group-hover:rotate-180" />
                                </Link>
                                <div className="invisible absolute top-full left-1/2 w-[640px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                    <div className="shadow-navy-900/15 grid grid-cols-2 gap-1 rounded-2xl border border-slate-200/70 bg-white/95 p-3 shadow-2xl backdrop-blur-xl">
                                        {coreServices.map((service) => (
                                            <Link
                                                key={service.slug}
                                                href={`${services().url}#${service.slug}`}
                                                className="hover:bg-brand-50 flex items-start gap-3 rounded-xl p-3 transition-colors"
                                            >
                                                <span className="bg-brand-50 text-brand-600 flex size-9 shrink-0 items-center justify-center rounded-lg">
                                                    <service.icon className="size-4.5" />
                                                </span>
                                                <span className="flex flex-col">
                                                    <span className="text-navy-900 text-sm font-semibold">
                                                        {service.title}
                                                    </span>
                                                    <span className="text-xs text-slate-500">
                                                        {service.summary}
                                                    </span>
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href}
                                prefetch
                                className={cn(
                                    'hover:text-brand-600 relative rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                                    isCurrentUrl(link.href)
                                        ? 'text-brand-600 after:bg-brand-500 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full'
                                        : 'text-navy-900/80',
                                )}
                            >
                                {link.label}
                            </Link>
                        ),
                    )}
                </nav>

                <div className="flex items-center gap-2">
                    <BrandButton
                        href={contact()}
                        size="sm"
                        className="hidden sm:inline-flex"
                    >
                        Get Free Audit
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </BrandButton>

                    <Sheet
                        open={isMobileMenuOpen}
                        onOpenChange={setIsMobileMenuOpen}
                    >
                        <SheetTrigger
                            className="text-navy-900 flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 lg:hidden"
                            aria-label="Open menu"
                        >
                            <Menu className="size-5" />
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="w-full border-none bg-white p-6 sm:max-w-sm"
                        >
                            <SheetTitle className="sr-only">
                                Navigation
                            </SheetTitle>
                            <SheetDescription className="sr-only">
                                Site navigation links
                            </SheetDescription>
                            <AbMalinexLogo />
                            <nav className="mt-6 flex flex-col gap-1">
                                {navigationLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                        className={cn(
                                            'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                                            isCurrentUrl(link.href)
                                                ? 'bg-brand-50 text-brand-700'
                                                : 'text-navy-900 hover:bg-slate-50',
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                            <div className="mt-auto flex flex-col gap-3">
                                <a
                                    href={`tel:${contactDetails.phone}`}
                                    className="flex items-center gap-2 text-sm text-slate-600"
                                >
                                    <Phone className="text-brand-600 size-4" />
                                    {contactDetails.phone}
                                </a>
                                <BrandButton
                                    href={contact()}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Get Free Audit
                                </BrandButton>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
