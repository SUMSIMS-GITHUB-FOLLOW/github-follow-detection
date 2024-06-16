import { Home, Followers } from '@pages/index';
import Login from '@pages/login';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/followers',
    element: <Followers />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
