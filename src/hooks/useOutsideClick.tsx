// src/hooks/useOutsideClick.ts
import { useEffect, useRef } from 'react';

const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            // If the click is outside the ref's element
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback(); // Run the close function
            }
        };

        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [callback]);

    return ref;
};

export default useOutsideClick;