import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, defer } from 'react-router-dom';
import App from './App';
import { HomePage } from './core/HomePage';
import { ErrorPage } from './core/ErrorPage';

// declare routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

// Routes component
// router is the prop of RouterProvider component
// all the routes can access to React Query.
export function Routes() {
  return <RouterProvider router={router} />;
}
