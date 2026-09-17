import { cn } from '@/lib/utils';

const socialNetworks = [
    {
        label: 'Facebook',
        path: 'M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v9h4v-9h3l1-4h-4V9c0-.6.4-1 1-1Z',
    },
    {
        label: 'LinkedIn',
        path: 'M6.5 8.5h-3V20h3V8.5ZM5 3.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM20.5 13.4c0-3-1.6-5.1-4.4-5.1-1.4 0-2.4.8-2.8 1.5V8.5h-3V20h3v-6.1c0-1.5.7-2.6 2-2.6s1.9 1 1.9 2.6V20h3.3v-6.6Z',
    },
    {
        label: 'X',
        path: 'M17.8 3h3.1l-6.8 7.8 8 10.2h-6.3l-4.9-6.4L5.3 21H2.2l7.3-8.3L1.9 3h6.4l4.4 5.9L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z',
    },
    {
        label: 'Instagram',
        path: 'M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm4.8-8.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2ZM12 3c-2.4 0-2.7 0-3.7.1C5.6 3.2 3.2 5.6 3.1 8.3 3 9.3 3 9.6 3 12s0 2.7.1 3.7c.1 2.7 2.5 5.1 5.2 5.2 1 .1 1.3.1 3.7.1s2.7 0 3.7-.1c2.7-.1 5.1-2.5 5.2-5.2.1-1 .1-1.3.1-3.7s0-2.7-.1-3.7c-.1-2.7-2.5-5.1-5.2-5.2C14.7 3 14.4 3 12 3Zm0 1.6c2.4 0 2.6 0 3.6.1 1.9.1 3.6 1.8 3.7 3.7.1 1 .1 1.2.1 3.6s0 2.6-.1 3.6c-.1 1.9-1.8 3.6-3.7 3.7-1 .1-1.2.1-3.6.1s-2.6 0-3.6-.1c-1.9-.1-3.6-1.8-3.7-3.7-.1-1-.1-1.2-.1-3.6s0-2.6.1-3.6c.1-1.9 1.8-3.6 3.7-3.7 1-.1 1.2-.1 3.6-.1Z',
    },
];

export default function SocialLinks({
    tone = 'dark',
}: {
    tone?: 'dark' | 'light';
}) {
    return (
        <div className="flex items-center gap-2.5">
            {socialNetworks.map((network) => (
                <a
                    key={network.label}
                    href="#"
                    aria-label={network.label}
                    className={cn(
                        'flex size-9 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5',
                        tone === 'dark'
                            ? 'hover:bg-cyan-glow hover:text-navy-950 bg-white/10 text-white'
                            : 'bg-navy-800 hover:bg-brand-500 text-white',
                    )}
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="size-4"
                        fill="currentColor"
                    >
                        <path d={network.path} />
                    </svg>
                </a>
            ))}
        </div>
    );
}
