import { createBrowserRouter } from 'react-router';
import Index from './pages/Index';
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';
import UnderConstruction from './components/UnderConstruction';

export default createBrowserRouter([
	{
		path: '/',
		children: [
			{
				index: true,
				Component: Index,
			},
		],
	},
	{
		Component: DashboardLayout,
		children: [
			{
				path: 'dashboard',
				Component: UnderConstruction,
			},
			{
				path: 'tasks',
				Component: UnderConstruction,
			},
			{
				path: 'goals',
				Component: UnderConstruction,
			},
			{
				path: 'time',
				Component: UnderConstruction,
			},
			{
				path: 'calendar',
				Component: UnderConstruction,
			},
			{
				path: 'settings',
				Component: UnderConstruction,
			},
			{
				path: 'logout',
				Component: UnderConstruction,
			},
		],
	},
]);
