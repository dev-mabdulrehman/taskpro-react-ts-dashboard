import type { INavLink } from '../types/navigation';

export const MAIN_NAV_LINKS: INavLink[] = [
	{ name: 'Dashboard', icon: 'fa-solid fa-chart-column', path: '/dashboard' },
	{ name: 'Tasks', icon: 'fa-regular fa-circle-check', path: '/tasks' },
	{ name: 'Goals', icon: 'fa-regular fa-star', path: '/goals' },
	{ name: 'Time', icon: 'fa-regular fa-alarm-clock', path: '/time' },
	{
		name: 'Calendar',
		icon: 'fa-regular fa-calendar-days',
		path: '/calendar',
	},
];

export const UTILITY_NAV_LINKS: INavLink[] = [
	{ name: 'Settings', icon: 'fa-solid fa-gear', path: '/settings' },
	{
		name: 'Log Out',
		icon: 'fa-solid fa-arrow-right-from-bracket',
		path: '/logout',
	},
];
