import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'

const router = createBrowserRouter([
  {
    path : '/', //meaning top level element
    element : <Layout />,
    children: [{
      path:"",
      element: <Home />
    },
  {
   path: "about",
   element: <About /> 
  }]
  }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={router}/>
  </React.StrictMode>,
)
