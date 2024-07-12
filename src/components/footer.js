import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import {  Row, Col } from 'react-bootstrap';
import logo from '../assets/images/coops.png';
import frango from '../assets/logos/municipio.png';
import cta from '../assets/logos/cta.png';
import mpesa from '../assets/logos/mpesa.png';
import anje from '../assets/logos/anje.png';
import apex from '../assets/logos/apiex.png';
import linkar from '../assets/logos/linkar.png';
//import gabi from '../assets/logos/gabi.png';
import 'bootstrap/dist/css/bootstrap.min.css';


function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="bg-white text-black py-5 ">
      <Container>
        <Row>
          <center className="subtitle">  <h3>Parceiros </h3></center>
          <Col md={3} className="temp">
            <img src={logo} alt="Logo" className="navbar-logos" />
          </Col>
          <Col md={2} className="temp">
          
            <img src={frango} alt="Logo" className="navbar-logos-cooperativa" />
        
         </Col>
          
          <Col md={2} className="temp">
          <img src={mpesa} alt="Logo" className="navbar-logos-cooperativa" />
          <br></br> <br></br>
          <img src={anje} alt="Logo" className="navbar-logos-cooperativa" />
    </Col>
          <Col md={2} className="temp">
          <img src={apex} alt="Logo" className="navbar-logos-cooperativa" />
          <br></br> <br></br>
          <img src={linkar} alt="Logo" className="navbar-logos-cooperativa" />
          </Col>
          <Col md={3} className="subtitle">
          <img src={cta} alt="Logo" className="navbar-logos-cooperativa" />

          </Col>
        </Row>
        <div class="container">
     <center>
      <br></br>
       &copy; Copyright <strong>Connection Mozambique 2024</strong>. Todos os direitos reservados </center>  
      </div>
        {
  showTopBtn && (
    <div className="go-top" onClick={goTop}></div>
  )
}
      </Container>
    </footer>
    
  )
  
}

export default AppFooter;