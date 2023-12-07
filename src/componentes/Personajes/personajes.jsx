import React, { useState } from 'react';
import BarraNavegacion from '../Navbar/Navbar';
import './personajes.css';  // Importa el archivo CSS

function Personajes() {
  const [personaje, setPersonaje] = useState({
    mascota: '',
    profesion: '',
    comida: '',
    edad: '',
  });

  const handleChange = (campo, valor) => {
    setPersonaje((prevPersonaje) => ({
      ...prevPersonaje,
      [campo]: valor,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mostrarTitulo();
  };

  const mostrarTitulo = () => {
    const { mascota, profesion, comida, edad } = personaje;
    const contenedorInfo = document.getElementById('personaje-info');
    const parrafo = document.createElement('p');

    // Construir la cadena de palabras con la información adicional
    const palabras = [
      mascota,
      `trabaja de ${profesion}`,
      `tiene ${edad} años de edad`,
      `y su comida favorita es ${comida}`
    ].filter(Boolean);

    const palabrasString = palabras.join(', ');
    parrafo.textContent = `Nuevo personaje: ${palabrasString}`;
    parrafo.className = 'PersonajeInfo';
    contenedorInfo.innerHTML = ''; // Limpiar el contenedor antes de agregar un nuevo párrafo
    contenedorInfo.appendChild(parrafo);
  };

  return (
    <div>
      <BarraNavegacion />
      <div className="Form">
        <h2>Armá tu personaje de los Simpsons</h2>
        <form id="mi-formulario" onSubmit={handleSubmit}>
          <label htmlFor="mascota">Nombre de la mascota de tu infancia:</label>
          <input type="text" id="mascota" onChange={(e) => handleChange('mascota', e.target.value)} />

          <label htmlFor="profesion">La profesión de tu abuelo materno:</label>
          <input type="text" id="profesion" onChange={(e) => handleChange('profesion', e.target.value)} />

          <label htmlFor="comida">La comida que menos te gusta:</label>
          <input type="text" id="comida" onChange={(e) => handleChange('comida', e.target.value)} />

          <label htmlFor="edad">La edad que tendrías en 5 años:</label>
          <input type="text" id="edad" onChange={(e) => handleChange('edad', e.target.value)} />

          <button type="submit">Crear personaje</button>
        </form>
      </div>
      <div id="personaje-info"></div>
    </div>
  );
}

export default Personajes;
