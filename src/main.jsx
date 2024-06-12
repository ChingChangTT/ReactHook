import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductCard from './component/ProductCard.jsx';
import { Buttondisplay } from './component/Buttondisplay.jsx';
import AboutUs from './component/AboutUs.jsx';
import Layout from './component/layout/Layout.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/APP",
        element: <App />,
      },
      {
        path: "/products",
        element: <ProductCard />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
