// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio/Inicio';
import Historia from './componentes/Historia/Historia';
import Contacto from './componentes/Contacto/Contacto';
import Temporadas from './componentes/Temporadas/Temporadas';
import Personajes from './componentes/Personajes/Personajes';
import Banner from './componentes/Banner/Banner';

function App() {
  return (
    <Router basename="/entregafinal">
      <div className="app-container">
        <div className="navbar-container">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Historia" element={<Historia />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Temporadas" element={<Temporadas />} />
            <Route path="/Personajes" element={<Personajes />} />
          </Routes>
        </div>
        <Banner />
      </div>
    </Router>
  );
}

export default App;
