import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if the current viewport width is below a given breakpoint.
 * @param {number} breakpoint - The width (in pixels) defining the mobile/desktop split.
 * @returns {boolean} True if the screen is considered mobile.
 */
const useIsMobile = (breakpoint: number = 767.98): boolean => {
    const [isMobile, setIsMobile] = useState(() => window.innerWidth <= breakpoint);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= breakpoint);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [breakpoint]);

    return isMobile;
};

export default useIsMobile;