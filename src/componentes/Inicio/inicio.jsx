import React from 'react';
import Navbar from '../Navbar/Navbar';
import CarouselF from '../carrousel/carrousel';
import './inicio.css';

function Inicio() {
  return (
    <div className="inicio-container">
      <Navbar />
      <h1 className='titulo'>Bienvenidxs a mi fanPage de los Simpsons</h1>
      <div className="carousel-container">
        <CarouselF className="carousel" />
      </div>
      </div>
  );
}
export default Inicio;
