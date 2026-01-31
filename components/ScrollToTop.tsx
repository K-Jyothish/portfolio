'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
    useEffect(() => {
        // Disable scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Always scroll to top on mount/refresh
        window.scrollTo(0, 0);

        // Also handle page show event (for back/forward navigation)
        const handlePageShow = (event: PageTransitionEvent) => {
            if (event.persisted) {
                window.scrollTo(0, 0);
            }
        };

        window.addEventListener('pageshow', handlePageShow);

        return () => {
            window.removeEventListener('pageshow', handlePageShow);
        };
    }, []);

    return null;
}
