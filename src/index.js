import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/BasicStyle.css'
import Accueil from './pages/Accueil';
import Header from './components/Header/Header';
import Exercices from './pages/Exercices';

ReactDOM.render(
  <React.StrictMode>
      <Router>
            <Header />
          <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/exercices" element={<Exercices />} />
          </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);