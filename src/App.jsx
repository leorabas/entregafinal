import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio/Inicio.jsx';
import Historia from './componentes/Historia/Historia';
import Contacto from './componentes/Contacto/Contacto';
import Temporadas from './componentes/Temporadas/Temporadas';
import Personajes from './componentes/Personajes/Personajes';
import Banner from './componentes/Banner/Banner';


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="navbar-container">
          <Routes>
            <Route path="/" element={<Inicio />} index />
            <Route path="/Historia" element={<Historia />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Temporadas" element={<Temporadas />} />
            <Route path="/Personajes" element={<Personajes />} />
          </Routes>
        </div>
        <Banner />
      </div>
    </BrowserRouter>
  );
}

export default App;

