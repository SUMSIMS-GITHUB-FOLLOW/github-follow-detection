import { Home, Followers } from '@pages/index';
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
]);

export default router;
