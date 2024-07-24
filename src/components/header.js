import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png';
//import React, { Component }  from 'react';
import {Link} from 'react-router-dom';



function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        
        <Navbar.Brand href="/"><img src={logo} alt="Logo" className="navbar-logo" /></Navbar.Brand>

        <Navbar.Toggle  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
          <h6>  <Link to="/">Menu</Link> </h6>
          <h6>  <Link to="/about">Sobre</Link> </h6>
      {/*<a href="./sobre.html">Página Sobre</a>
          <a href="./about.js">Página Sobre</a> */} 
          <h6>   <Link to="/services">Serviços</Link></h6>
          <h6>   <Link to="/works">Trabalhos</Link> </h6>
          <h6>  <Link to="/contact">Contactos</Link> </h6>
          <h6>  <Link to="/Logos">Parceros</Link> </h6>
          <h6>  <Link to="/teams">Equipe</Link> </h6>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;