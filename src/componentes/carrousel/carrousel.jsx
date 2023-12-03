
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import temp1 from '../../assets/img/temp1.jpeg';
import temp10 from '../../assets/img/temp10.jpg';
import temp30 from '../../assets/img/temp30.jpg';
import './carrousel.css';


function CarouselF() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="carousel-image" src={temp1} alt="los simpsons temporada 1" />
        <Carousel.Caption>
          <h3>Los primeros Simpsons</h3>
          <p>Temporada 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src={temp10} alt="los simpsons temporada 10" />
        <Carousel.Caption>
          <p>Así eran en la temporada 10</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src={temp30} alt="los simpsons temporada 30" />
        <Carousel.Caption>
          <h3>Ultima temporada</h3>
          <p>¡Así estamos en la 30!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselF