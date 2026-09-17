import type { ReactNode } from 'react';
import SiteFooter from '@/components/marketing/site-footer';
import SiteHeader from '@/components/marketing/site-header';

export default function MarketingLayout({ children }: { children: ReactNode }) {
    return (
        <div className="font-display text-navy-900 selection:bg-brand-200 selection:text-navy-900 min-h-screen scroll-smooth bg-white antialiased">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
        </div>
    );
}
