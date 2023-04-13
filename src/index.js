import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'antd/dist/antd.css';
import router from './router';

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
