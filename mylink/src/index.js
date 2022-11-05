import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
          
          <Routes>
          <Route exact path="/" element={<App />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        
      </Router>
  </React.StrictMode>
);

