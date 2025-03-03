import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/BasicStyle.css'
import Accueil from './pages/Accueil';
import Header from './components/Header/Header';
import Exercices from './pages/CoursExos';
import Footer from './components/Footer';
import APropos from './pages/APropos';

import Cpp from './pages/Exercices/Cpp';
import CppCours from './pages/Cours/Cpp';

import Thermo from './pages/Exercices/Thermo/index.jsx';
import ThermoCours from './pages/Cours/Thermo/index.jsx';

import Dynamique from './pages/Exercices/Dynamique';
import DynamiqueCours from './pages/Cours/Dynamique';

import Electrocin from './pages/Exercices/Electrocin';
import ElectrocinCours from './pages/Cours/Electrocin';

import Electromag from './pages/Exercices/Electromag';
import ElectromagCours from './pages/Cours/Electromag';

import Maths from './pages/Exercices/Maths';
import MathsCours from './pages/Cours/Maths';

import Optiquegeo from './pages/Exercices/Optiquegeo';
import OptiquegeoCours from './pages/Cours/Optiquegeo';

import Python from './pages/Exercices/Python';
import PythonCours from './pages/Cours/Python';









import grille from './assets/grille.jpg';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: rgb(24, 24, 27);
        position: relative;
        z-index: 0;
        align-items: center;
    }
    
    body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 300px; /* Hauteur de l'image de fond */
        background-image: url(${grille});
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        background-color: rgb(24, 24, 27); /* Couleur de fond en bas */
        mask-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); /* Dégradé pour fondre l'image */
        -webkit-mask-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); /* Compatibilité avec WebKit */
        z-index: -1; /* Pour s'assurer que le pseudo-élément est derrière le contenu */
    }
`;

ReactDOM.render(
  <React.StrictMode>
      <Router>
      <GlobalStyle />
            <Header />
          <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/cours" element={<Exercices />} />

                <Route path="/exercices/cpp" element={<Cpp />} />
                <Route path="/cours/cpp" element={<CppCours />} />

                <Route path="/exercices/thermo" element={<Thermo />} />
                <Route path="/cours/thermo" element={<ThermoCours />} />

                <Route path="/exercices/dynamique" element={<Dynamique />} />
                <Route path="/cours/dynamique" element={<DynamiqueCours />} />


                <Route path="/exercices/electrocin" element={<Electrocin />} />
                <Route path="/cours/electrocin" element={<ElectrocinCours />} />

                <Route path="/exercices/electromag" element={<Electromag />} />
                <Route path="/cours/electromag" element={<ElectromagCours />} />

                <Route path="/exercices/maths" element={<Maths />} />
                <Route path="/cours/maths" element={<MathsCours />} />

                <Route path="/exercices/optiquegeo" element={<Optiquegeo />} />
                <Route path="/cours/optiquegeo" element={<OptiquegeoCours />} />

                <Route path="/exercices/python" element={<Python />} />
                <Route path="/cours/python" element={<PythonCours />} />

                <Route path="/apropos" element={<APropos />} />
          </Routes>
          <Footer />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);