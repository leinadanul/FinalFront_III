import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import { ContextProvider } from "./Components/utils/global.context";
import './index.css';
import Contact from './Routes/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/medico/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Route>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);



