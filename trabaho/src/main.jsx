import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Authentification from './pages/Authentification';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AuthentificationMobile from './pages/AuthentificationMobile';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Router>
         <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/authentification'} element={<Authentification />} />
            <Route path={'/authentificationMobile'} element={<AuthentificationMobile />} />
         </Routes>
      </Router>
   </React.StrictMode>
);
