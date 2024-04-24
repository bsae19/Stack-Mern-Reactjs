import React, {useState} from 'react';
import ReactDOM from 'react-dom/client'
import Home from './Home/Home.jsx'
import Login from './Login/Login.jsx'
import Error from "./Error/Error.jsx";
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Subscribe from "./Subscribe/Subscribe.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/subscribe",
        element: <Subscribe />,
        errorElement: <Error />
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
    )

