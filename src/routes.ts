import { createBrowserRouter } from 'react-router';
import Index from './pages/Index';

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
]);
