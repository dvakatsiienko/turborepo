'use client';

/* Core */
import { useState, useEffect } from 'react';

export const useIsMounted = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return [mounted, setMounted] as const;
};
