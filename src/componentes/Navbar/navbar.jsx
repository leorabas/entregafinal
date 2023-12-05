// BarraNavegacion.jsx
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';
import banner from "../../assets/img/banner.jpg";
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';

function BarraNavegacion() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');

  const NavLink = ({ to, label }) => (
    <Nav.Link
      as={RouterNavLink}
      to={to}
      className={`nav-link ${location.pathname === to ? 'fw-bold' : ''}`}
      onClick={() => setActiveLink(to)}
    >
      {label}
    </Nav.Link>
  );

  return (
    <Container fluid className="navBar d-flex align-items-center justify-content-start" style={{ backgroundImage: `url(${banner})`, height: '10vh', width: '100vw' }}>
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

export default BarraNavegacion;
