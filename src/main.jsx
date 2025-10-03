import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>
  },
  {
    path:'/about',
    element:<div>Wlecome react router</div>
  },
  {
    path:'/home',
    element:<div>My Home page</div>
  },
  {
    path:'/app',
    Component:App
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
