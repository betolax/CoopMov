import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import logo from '../assets/images/logos.png';
//import frango from '../assets/logos/municipios.png';
//import cta from '../assets/logos/cta.png';
//import inage from '../assets/logos/inages.png';
import cnn from '../assets/logos/Frente 2-1.png';
//import mpesa from '../assets/logos/mpesa.png';
//import anje from '../assets/logos/anje.png';
//import apex from '../assets/logos/apiex.png';
//import linkar from '../assets/logos/linkar.png';
import log from '../assets/images/parc.png';
//import inss from '../assets/logos/inss.png';
//import coop from '../assets/images/coops.png';
//import { faFacebook, faWhatsapp, faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SocialMediaIcons.css';


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
          
          <Col md={4} className="temp">
            <img src={logo} alt="Logo" className="navb" />
          </Col>
          
          <Col md={8} className="temp">
        <img src={log} alt="Logo" className="navb" />
         </Col>
      </Row>
       
    
          <Container>
            {/*
            <center>
              <div className="singleCol social-media-icons-white d-flex justify-content-envely">

                <a href="https://www.facebook.com/profile.php?id=61557583830395&mibextid=LQQJ4d
"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://chat.whatsapp.com/EHG2mrObh6x0rEcDfEHvQu"><FontAwesomeIcon icon={faWhatsapp} /></a>
                <a href="https://www.instagram.com/cooperativa_em_movimento_?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="www.facebook.com"><FontAwesomeIcon icon={faXTwitter} /></a>
                <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BeuRPo6vrTAekDdvazpg9Ww%3D%3D"><FontAwesomeIcon icon={faLinkedin} /></a>

              </div>
            </center>
            */}
          </Container>

          <center>

            <br></br>

            &copy; Copyright <strong><a href="https://www.connectionmozambique.com">Connection Mozambique 2024</a></strong>. Todos os direitos reservados </center>
          <div>
            <center>
            <a href="https://www.connectionmozambique.com"><img src={cnn} alt="Logo" className="navbar-lo" /></a>

            </center>
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