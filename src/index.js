import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Personaje from './pages/Personaje';
import Capitulo from './pages/Capitulo'
import Generador from './pages/Generador';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "Personaje",
    element: <Personaje />,
  },
  {
    path: "Capitulo",
    element: <Capitulo />,
  },
  {
    path: "Generador",
    element: <Generador />,
  },
  {
    path: "github",
    element: "https://github.com/JDCarmona496",
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

