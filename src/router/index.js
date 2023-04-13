import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Wrapper from '../pages/Wrapper';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Wrapper />,
    },
    {
        path: '/login',
        element: <Login />,
    },
]);

export default router;
