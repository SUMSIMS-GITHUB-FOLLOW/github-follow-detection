import { Followers } from '@pages/index';
import Login from '@pages/login';
import { Navigate, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
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
