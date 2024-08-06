import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const app = createBrowserRouter([
    {
    path: "/",
    element: <App />,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={app} />
  </React.StrictMode>
);
