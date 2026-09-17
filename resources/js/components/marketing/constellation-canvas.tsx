import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type Particle = {
    x: number;
    y: number;
    velocityX: number;
    velocityY: number;
    radius: number;
};

const linkDistance = 140;
const pointerDistance = 190;

/**
 * An animated network of data nodes that connect to each other and reach
 * toward the visitor's cursor. Pauses when off-screen and renders a single
 * still frame for visitors who prefer reduced motion.
 */
export default function ConstellationCanvas({
    className,
}: {
    className?: string;
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        if (!canvas || !context) {
            return;
        }

        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;
        const pointer = { x: -9999, y: -9999 };
        let particles: Particle[] = [];
        let width = 0;
        let height = 0;
        let animationFrame = 0;
        let isVisible = true;

        const resize = () => {
            const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = width * pixelRatio;
            canvas.height = height * pixelRatio;
            context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

            const particleCount = Math.min(
                110,
                Math.round((width * height) / 14000),
            );

            particles = Array.from({ length: particleCount }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                velocityX: (Math.random() - 0.5) * 0.35,
                velocityY: (Math.random() - 0.5) * 0.35,
                radius: Math.random() * 1.6 + 0.6,
            }));
        };

        const draw = () => {
            context.clearRect(0, 0, width, height);

            for (const particle of particles) {
                particle.x += particle.velocityX;
                particle.y += particle.velocityY;

                if (particle.x < 0 || particle.x > width) {
                    particle.velocityX *= -1;
                }

                if (particle.y < 0 || particle.y > height) {
                    particle.velocityY *= -1;
                }
            }

            for (let first = 0; first < particles.length; first++) {
                const a = particles[first];

                for (
                    let second = first + 1;
                    second < particles.length;
                    second++
                ) {
                    const b = particles[second];
                    const distance = Math.hypot(a.x - b.x, a.y - b.y);

                    if (distance < linkDistance) {
                        context.strokeStyle = `rgba(94, 231, 245, ${(1 - distance / linkDistance) * 0.22})`;
                        context.lineWidth = 0.8;
                        context.beginPath();
                        context.moveTo(a.x, a.y);
                        context.lineTo(b.x, b.y);
                        context.stroke();
                    }
                }

                const pointerGap = Math.hypot(a.x - pointer.x, a.y - pointer.y);

                if (pointerGap < pointerDistance) {
                    const strength = 1 - pointerGap / pointerDistance;

                    context.strokeStyle = `rgba(52, 211, 180, ${strength * 0.55})`;
                    context.lineWidth = 1;
                    context.beginPath();
                    context.moveTo(a.x, a.y);
                    context.lineTo(pointer.x, pointer.y);
                    context.stroke();

                    a.x += (pointer.x - a.x) * 0.004;
                    a.y += (pointer.y - a.y) * 0.004;
                }

                context.fillStyle = 'rgba(165, 243, 252, 0.85)';
                context.beginPath();
                context.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
                context.fill();
            }
        };

        const loop = () => {
            draw();

            if (isVisible) {
                animationFrame = requestAnimationFrame(loop);
            }
        };

        const handlePointerMove = (event: PointerEvent) => {
            const bounds = canvas.getBoundingClientRect();
            pointer.x = event.clientX - bounds.left;
            pointer.y = event.clientY - bounds.top;
        };

        const handlePointerLeave = () => {
            pointer.x = -9999;
            pointer.y = -9999;
        };

        const visibilityObserver = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;

            if (isVisible && !prefersReducedMotion) {
                cancelAnimationFrame(animationFrame);
                animationFrame = requestAnimationFrame(loop);
            }
        });

        resize();

        if (prefersReducedMotion) {
            draw();
        } else {
            visibilityObserver.observe(canvas);
            window.addEventListener('pointermove', handlePointerMove, {
                passive: true,
            });
            document.addEventListener('pointerleave', handlePointerLeave);
        }

        window.addEventListener('resize', resize);

        return () => {
            cancelAnimationFrame(animationFrame);
            visibilityObserver.disconnect();
            window.removeEventListener('resize', resize);
            window.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerleave', handlePointerLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className={cn('pointer-events-none size-full', className)}
        />
    );
}
