import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Index from "./routes/Index";
import Login from "./routes/Login";
import Register from "./routes/Register";

import "./styles/globals.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);