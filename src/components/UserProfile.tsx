import React, { useState } from 'react';
import type { UserProfileProps } from "../types/UserProfile";
import useOutsideClick from '../hooks/useOutsideClick';
import { Link } from 'react-router';
// Assuming you created this hook

const UserProfile = ({ name, email, avatarSrc }: UserProfileProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    const wrapperRef = useOutsideClick(closeMenu);

    return (
        
        <div ref={wrapperRef} className='relative flex gap-2 items-center'>

            <div className='flex gap-2 items-center'>
                <img
                    src={avatarSrc}
                    alt={`${name}'s avatar`}
                    className='rounded-full w-10 h-10 object-cover'
                />
                <div className='flex flex-col'>
                    <div className='flex gap-1 items-center'>
                        <h5 className='font-semibold'>{name}</h5>
                        <button
                            onClick={() => setIsMenuOpen(prev => !prev)}
                            aria-label="Open user menu"
                            aria-expanded={isMenuOpen}
                            className='text-gray-600 cursor-pointer hover:text-gray-800 transition'
                        >
                            <i className={`fa-solid fa-angle-down transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}></i>
                        </button>
                    </div>
                    <small className='text-gray-500'>{email}</small>
                </div>
            </div>

            {isMenuOpen && (
                <div
                    className='absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10'
                    role="menu" 
                    aria-orientation="vertical"
                >
                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        My Profile
                    </Link>
                    <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Settings
                    </Link>
                    <hr className="my-1 border-gray-200" />
                    <Link to="/logout" className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50" role="menuitem">
                        Log Out
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserProfile;