import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png';
import React, { Component }  from 'react';



function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        
        <Navbar.Brand href="#home"><img src={logo} alt="Logo" className="navbar-logo" /></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
          <h6>  <Nav.Link href="#home">Menu</Nav.Link> </h6>
          <h6>  <Nav.Link href="#about">Sobre</Nav.Link> </h6>
          <h6>   <Nav.Link href="#services">Serviços</Nav.Link></h6>
          <h6>   <Nav.Link href="#works">Trabalhos</Nav.Link> </h6>
          <h6>  <Nav.Link href="#contact">Contactos</Nav.Link> </h6>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;