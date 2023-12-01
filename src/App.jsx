import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio/Inicio.jsx';
import Historia from './componentes/Historia/Historia';
import Contacto from './componentes/Contacto/Contacto';
import Temporadas from './componentes/Temporadas/Temporadas';
import Personajes from './componentes/Personajes/Personajes';
import Banner from './componentes/banner/banner';


function App() {
  return (
    <div className="navbar-container">
          <Routes>
        <Route path="/" element={<Inicio />} index />
        <Route path="/Historia" element={<Historia />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Temporadas" element={<Temporadas />} />
        <Route path="/Personajes" element={<Personajes />} />
      </Routes>
      <Banner />
    </div>
  );
}




export default App;
