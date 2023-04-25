import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './screens/home'
import HowToRun from './screens/how-to-run'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
  
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />
    <RouterProvider router={router} />
  </React.StrictMode>
);