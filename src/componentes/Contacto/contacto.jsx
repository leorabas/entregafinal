import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Contacto.css';
import BarraNavegacion from '../Navbar/Navbar';

function Contacto() {
  
  const [email, setEmail] = useState('');
  const [consulta, setConsulta] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    
    alert(`Email: ${email}\nConsulta: ${consulta}`);

   
    setEmail('');
    setConsulta('');
  };

  return (
    <div>
      <BarraNavegacion />
      <Form className='Form' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Escribí tu email</Form.Label>
          <Form.Control
            type="email"
            placeholder="nombre@dominio.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Deja tu consultirijilla</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={consulta}
            placeholder="Hola! Queria me gustaría . . ."
            onChange={(e) => setConsulta(e.target.value)}
          />
        </Form.Group>
        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
}

export default Contacto;
