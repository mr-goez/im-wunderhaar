import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';
import { Contact } from './pages/Contact/Contact.tsx';
import { Home } from './pages/Home/Home.tsx';
import { Layout } from './pages/Layout/Layout.tsx';
import { PriceList } from './pages/PriceList/PriceList.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'pricelist',
        element: <PriceList />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        lazy: () => import('./pages/NoPage.tsx'),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme='light'>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
);
