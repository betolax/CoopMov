import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/img.png';
import { faFacebook, faWhatsapp, faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SocialMediaIcons.css';
import { Link } from 'react-router-dom';



function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>

        <Navbar.Brand><img src={logo} alt='logo' className="navbar-logo" /></Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="header-left">
            <h6>  <Link to="/">Menu</Link> </h6>
            <h6>  <Link to="/about">Sobre</Link> </h6>
            <h6>   <Link to="/services">Serviços</Link></h6>
            <h6>   <Link to="/works">Trabalhos</Link> </h6>
            <h6>  <Link to="/contact">Contactos</Link> </h6>
            <h6>  <Link to="/Logos">Parceros</Link> </h6>
            <h6>  <Link to="/teams">Equipe</Link> </h6>

            
                <a href="https://www.facebook.com/profile.php?id=61557583830395&mibextid=LQQJ4d
"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://chat.whatsapp.com/EHG2mrObh6x0rEcDfEHvQu"><FontAwesomeIcon icon={faWhatsapp} /></a>
                <a href="https://www.instagram.com/cooperativa_em_movimento_?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="www.facebook.com"><FontAwesomeIcon icon={faXTwitter} /></a>
                <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BeuRPo6vrTAekDdvazpg9Ww%3D%3D"><FontAwesomeIcon icon={faLinkedin} /></a>

          </Nav>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;