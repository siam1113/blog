import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages/home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'remixicon/fonts/remixicon.css';
import PocketBase from 'pocketbase';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Auth } from './components/auth';

const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '/login', element: <Auth /> },
]);

const queryClient = new QueryClient();
export const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);
