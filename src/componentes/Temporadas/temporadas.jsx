import React from 'react';
import './Temporadas.css';

import BarraNavegacion from '../Navbar/Navbar';

const Temporadas = () => {
  return (
    <>
      <BarraNavegacion />
      <div className='temporada'>
        <h2 className='seccionTemporada'>
          Bueno, son 32 casi como los mineros de Chile
        </h2>
      </div>
    </>
  );
};

export default Temporadas;
