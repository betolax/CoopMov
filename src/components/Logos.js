import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import frango from '../assets/logos/frango.png';
import apiex from '../assets/logos/apiex.png';
import gabi from '../assets/logos/gabi.png';
import inifite from '../assets/logos/inifite.png';
import ped from '../assets/logos/ped.png';
import pixmoz from '../assets/logos/pixmoz.png';
import cnn from '../assets/logos/Connection.png';
import sus from '../assets/logos/sustentavel.png';
import juridica from '../assets/logos/juridica.png';
import elite from '../assets/logos/elite.png';
import ink from '../assets/logos/inkhawi.png';
import nossa from '../assets/logos/nossaarte.png';
import elina from '../assets/logos/elina.png';
import certo from '../assets/logos/certo.png';
import enge from '../assets/logos/enge.png';
import tena from '../assets/logos/tena.png';
import agrolix from '../assets/logos/agrolix.png';
import eng from '../assets/logos/englesh.png';
import alem from '../assets/logos/alem.png';
import mentoria from '../assets/logos/mentoria.png';
import cpro from '../assets/logos/cpro.png';
import ifcam from '../assets/logos/ifcam.png';
import mgl from '../assets/logos/mgl.png';
import ross from '../assets/logos/ross.png';
import wid from '../assets/logos/wid.png';
import avi from '../assets/logos/aviario.png';
import up from '../assets/logos/upumo.png';
import bar from '../assets/logos/bar.png';
import after from '../assets/logos/after.png';
import auto from '../assets/logos/auto.png';




import 'bootstrap/dist/css/bootstrap.min.css';


function Logos() {
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

    <div className="bg-white text-black py-5 ">

      <Container>

        <br></br>
        <br></br>
        <center><h2>Nossos parceiros Locais</h2></center>
        <br></br>
        <Row>
          <Col md={2} className="temp">
            <img src={frango} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={cnn} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={nossa} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={tena} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={mgl} alt="Logo" className="navbar-logos-cooperativa" />
            




          </Col>
          <Col md={2} className="temp">
            <img src={gabi} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={elina} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={eng} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={ross} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={after} alt="Logo" className="navbar-logos-cooperativa" />

            <br></br>
            <br></br>
            <br></br>

          </Col>
          <Col md={2} className="temp">
          <img src={avi} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={juridica} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={bar} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={sus} alt="Logo" className="navbar-logos-cooperativa" />

            <img src={alem} alt="Logo" className="navbar-logos-cooperativa" />


          </Col>

          <Col md={2} className="temp">
            <img src={inifite} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={ink} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={certo} alt="Logo" className="navbar-logos-cooperativa" />
            <br></br>
            <br></br>
            <img src={agrolix} alt="Logo" className="navbar-logos-cooperativa" />

            <img src={auto} alt="Logo" className="navbar-logos-cooperativa" />


          </Col>
          <Col md={2} className="temp">
            <img src={ped} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={wid} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={mentoria} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={cpro} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={elite} alt="Logo" className="navbar-logos-cooperativa" />

          </Col>

          <Col md={2} className="temp">
            <img src={ifcam} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={enge} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={up} alt="Logo" className="navbar-logos-cooperativa" />
            <img src={pixmoz} alt="Logo" className="navbar-logos-cooperativa" />



          </Col>


        </Row>
        <div class="container">
          <br></br>
        </div>
        {
          showTopBtn && (
            <div className="go-top" onClick={goTop}></div>
          )
        }
      </Container>
    </div>

  )

}

export default Logos;