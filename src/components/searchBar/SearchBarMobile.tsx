import { useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';

const SearchBarMobile = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const closeSearch = () => setIsSearchOpen(false);
    const wrapperRef = useOutsideClick(closeSearch);

    return (
        <div ref={wrapperRef} className='relative md:hidden'>
            <button
                onClick={() => setIsSearchOpen(prev => !prev)}
                aria-label="Toggle search dropdown"
                aria-expanded={isSearchOpen}
                className="p-2 text-white hover:text-black text-xl transition"
            >
                <i className='fa-solid fa-magnifying-glass' aria-hidden="true"></i>
            </button>

            {isSearchOpen && (
                <div
                    className="absolute top-full right-0 mt-2 rounded-md bg-white shadow-xl z-10 p-4"
                    role="search"
                >
                        <div className="relative grow">
                            <i className="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 text-xl left-3 text-gray-500"></i>

                            <input
                                type="text"
                                className=" p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Search for tasks..."
                                aria-label="Search input field"
                                autoFocus
                            />
                        </div>
                </div>
            )}
        </div>
    );
}

export default SearchBarMobile;