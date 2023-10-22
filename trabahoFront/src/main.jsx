import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Authentification from './pages/Authentification';
import AdminAuthentification from './pages/AdminAuthentification'; 
import AdminDashboard from './pages/AdminDashboard';


ReactDOM.createRoot(document.getElementById('root')).render(

   <React.StrictMode>
      <Router>
         <Routes>
            <Route path={`/profil/`} element={<Home />} />
            <Route path={'/'} element={<Authentification />} />          
            <Route path={'/Authentification'} element={<Authentification />} /> 
            <Route path={'/admin'} element={<AdminAuthentification />} />         
            <Route path={'/adminDashboard'} element={<AdminDashboard />} />
         </Routes>
      </Router>
   </React.StrictMode>
);
