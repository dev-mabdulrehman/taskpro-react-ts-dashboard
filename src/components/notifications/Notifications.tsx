import { useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import type { Notification } from '../../types/Notifications';
import { Link } from 'react-router';

const Notifications = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const [notifications] = useState<Notification[]>([
        { id: 1, message: "New user signed up.", read: false, timestamp: "5m ago" },
        { id: 2, message: "Your report is ready.", read: true, timestamp: "1h ago" },
    ]);

    const unreadCount = notifications.filter(n => !n.read).length;

    const closePanel = () => setIsPanelOpen(false);
    const wrapperRef = useOutsideClick(closePanel);

    return (
        <div ref={wrapperRef} className='relative'>

            <button
                onClick={() => setIsPanelOpen(prev => !prev)}
                aria-label="Toggle notifications menu"
                aria-expanded={isPanelOpen}
                className='p-2 text-xl text-white hover:text-black relative'
            >
                <i className="fa-solid fa-bell"></i>

                {unreadCount > 0 && (
                    <span
                        className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {unreadCount}
                    </span>
                )}
            </button>

            {isPanelOpen && (
                <div
                    className='absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-2xl z-20'
                    role="menu"
                    aria-orientation="vertical"
                >
                    <div className="p-3 font-semibold border-b border-gray-100">
                        Notifications ({unreadCount} unread)
                    </div>

                    <div className="max-h-80 overflow-y-auto">
                        {notifications.map(n => (
                            <Link
                                key={n.id}
                                to="#"
                                className={`block p-3 hover:bg-gray-50 transition ${n.read ? 'text-gray-500' : 'text-gray-900 font-medium bg-blue-50'}`}
                                role="menuitem"
                            >
                                <p className="text-sm">{n.message}</p>
                                <small className="text-xs">{n.timestamp}</small>
                            </Link>
                        ))}
                    </div>

                    <div className="p-3 border-t border-gray-100 text-center">
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                            View All
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Notifications;