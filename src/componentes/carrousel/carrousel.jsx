import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage'; // Ajusta la ruta según la ubicación de tu componente

function CarrouselFotos() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" imagePath="./assets/img/temp1.jpeg" />
        <Carousel.Caption>
          <h3>Temporada 1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" imagePath="./assets/img/temp10.jpg" />
        <Carousel.Caption>
          <h3>Temporada 10</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" imagePath="./assets/img/temp30.jpg" />
        <Carousel.Caption>
          <h3>temporada 30</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrouselFotos;
