import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Homepage from './Homepage';
import Contact from './Contact';
import About from './About'
import Layout from './Layout';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Homepage />} ></Route>
      <Route path='about' element={<About />} ></Route>
      <Route path='contact' element={<Contact />} ></Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);