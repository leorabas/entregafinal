import React from 'react';
import Navbar from '../Navbar/Navbar';
import CarouselF from '../carrousel/carrousel';
import './inicio.css';
import Banner from '../banner/Banner'; 

function Inicio() {
  return (
    <div className="inicio-container">
      <Navbar />
      <h1 className='titulo'>Bienvenidxs a mi fanPage de los Simpsons</h1>
      <CarouselF className="carousel" />
      <Banner /> 
    </div>
  );
}

export default Inicio;
