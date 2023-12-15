import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { MyOrder } from './pages/OrderPage';
import { OrderDetails } from './pages/OrderPage/OrderDetails';

import { CartPage } from './pages/CartPage';
import { ShippingPage } from './pages/ShippingPage';

import React from 'react';
import { App } from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/menupage',
        element: <MenuPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contactus',
        element: <ContactPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/cartpage',
        element: <CartPage />,
      },
      {
        path: '/shipping',
        element: <ShippingPage />,
      },
      {
        path: '/myorders',
        element: <MyOrder />,
      },
      {
        path: '/orderdetails',
        element: <OrderDetails />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
