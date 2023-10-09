import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Authentification from './pages/Authentification';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Router>
         <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/authentification'} element={<Authentification />} />
         </Routes>
      </Router>
   </React.StrictMode>
);
