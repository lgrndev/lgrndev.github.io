import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/BasicStyle.css'
import Accueil from './pages/Accueil';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path="/" element={<Accueil />} />
          </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);