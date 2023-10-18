import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Products from './components/Products/Products.jsx'
import Home from './components/Home/Home'
import VistaDetalle from './components/VistaDetalle/VistaDetalle';



const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h2>Lo siento no encontre la ruta</h2>,
    children: [
      {
        path: "/home",
        element: <h1>Esto es el Home, da click en Celulares</h1>
      },
      {
        path: "/celulares",
        element: <Products/> //falta continuar con las rutas y crear la vista de detalle
      },
      {
        path: "/detalle/:title",
        element: <VistaDetalle/>
      }
    ],
  },
  {
    path: "/about",
    element: <h1>About us en construccion</h1> 
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
