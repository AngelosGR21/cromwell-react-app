import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';

import Register from './pages/Register/Register';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Landing from './pages/Landing/Landing';

import SnackbarLayout from './layouts/SnackbarLayout';
import NavbarLayout from './layouts/NavbarLayout';

import "./index.css"

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route element={<SnackbarLayout/>}>
            <Route element={<NavbarLayout/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/landing" element={<Landing/>}/>
            </Route>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login />}/>
        </Route>
      </Routes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
