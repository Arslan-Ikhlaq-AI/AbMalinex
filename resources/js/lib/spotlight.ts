import type { MouseEvent } from 'react';

/**
 * Moves a `.spotlight-card` gradient so it follows the cursor.
 */
export function trackSpotlight(event: MouseEvent<HTMLElement>): void {
    const bounds = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
        '--spot-x',
        `${event.clientX - bounds.left}px`,
    );
    event.currentTarget.style.setProperty(
        '--spot-y',
        `${event.clientY - bounds.top}px`,
    );
}
