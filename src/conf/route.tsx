import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Landing from '../pages/Landing';
import Navbar from '../components/Navbar';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/home',
    element: <Navbar />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
