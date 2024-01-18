import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Landing from '../pages/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);

export default router;
