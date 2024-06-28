import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Meu Site</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#servicos">Serviços</Nav.Link>
          <Nav.Link href="#contactos">Contactos</Nav.Link>
          <Nav.Link href="#equipa">Equipa</Nav.Link>
          <Nav.Link href="#sobre-nos">Sobre Nós</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
