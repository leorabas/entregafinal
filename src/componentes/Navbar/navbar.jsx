// Navbar.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

import banner from "../../assets/img/banner.jpg";
import { Link } from 'react-router-dom';

function BarraNavegacion() {
  return (
    <Container fluid className="navBar d-flex align-items-center justify-content-start" style={{ backgroundImage: `url(${banner})`, height: '10vh' }}>
      <Nav>
        <NavLink to="/" label="Inicio" />
        <NavLink to="/Historia" label="Historia" />
        <NavLink to="/Personajes" label="Personajes" />
        <NavLink to="/Temporadas" label="Temporadas" />
        <NavLink to="/Contacto" label="Contacto" />
      </Nav>
    </Container>
  );
}

function NavLink({ to, label }) {
  return (
    <Nav.Link as={Link} to={to} className="fw-bold" aria-current="page">
      {label}
    </Nav.Link>
  );
}


export default BarraNavegacion;
