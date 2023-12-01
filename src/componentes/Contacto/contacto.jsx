import React from 'react';
import Form from 'react-bootstrap/Form';
import './Contacto.css';
import BarraNavegacion from '../Navbar/Navbar';


function Contacto() {
  return (
    <div>
      <BarraNavegacion />
      <Form className='Form'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Escribí tu mail</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Deja tu consultirijilla</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Contacto;
