import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import temp1 from '../../assets/img/temp1.jpeg';
import temp10 from '../../assets/img/temp10.jpg';
import temp30 from '../../assets/img/temp30.jpg';
import './carrousel.css';

function CarouselF() {
  return (
    <Carousel fade className="carousel">
      <Carousel.Item>
        <img className="d-block w-80 mx-auto img-fluid" src={temp1} alt="los simpsons temporada 1" />
        <Carousel.Caption className="text-center">
          <h3 className="fw-bold text-dark">Los primeros Simpsons</h3>
          <p className="fw-bold text-dark">Temporada 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-80 mx-auto img-fluid" src={temp10} alt="los simpsons temporada 10" />
        <Carousel.Caption className="text-center">
          <p className="fw-bold text-dark">Así eran en la temporada 10</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-80 mx-auto img-fluid" src={temp30} alt="los simpsons temporada 30" />
        <Carousel.Caption className="text-center">
          <h3 className="fw-bold text-dark">Ultima temporada</h3>
          <p className="fw-bold text-dark">¡Así estamos en la 30!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselF;
