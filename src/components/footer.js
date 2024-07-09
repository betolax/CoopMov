import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import {  Row, Col } from 'react-bootstrap';





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
    <Container fluid>

<footer className="bg-white text-black py-5">
      <Container>
        <Row>
          <Col md={3} className="temp">
            <h5>QUEM SOMOS</h5>
            <p>
            Fundada em 2024, a Cooperativa em Movimentos COOPMOV foi 
            criada por um grupo de profissionais experientes em negócios e 
            gestão com o objetivo de empoderar jovens e mulheres através de 
            consultoria especializada, promovendo o desenvolvimento pessoal e 
            rofissional.
            </p>
          </Col>
          <Col md={3} className="temp">
            <h5>Estrutura Organizacional </h5>
            <p>
            A cooperativa é gerida por um conselho de administração formado por mulheres e jovens profissionais,
             nas áreas de empreendedorismo, desenvolvimento pessoal, profissional e empresarial, Marketing e advocacia, 
            além de uma equipe executiva responsável pela implementação dos serviços e programas.
            </p>
           
          </Col>
          
          <Col md={3} className="temp">
            <h5 className="text-bold">O que Fazemos</h5>
            <p>
            Proporcionamos resposta e intervenções de qualidade e a medida
             das necessidades dos nossos parceiros.
            </p>
           
          </Col>
          <Col md={3} className="subtitle">
            <h5>Contacte Nos</h5>
            <p>Cabo Delgado</p>
            <p>Pemba</p>
            <p>Av.Marginal</p>
            <p>Celular: +258 870940008 &  +258840105370</p>
            <p>Email: Geral@coopmov.com</p>
           
          </Col>
        </Row>
      </Container>
    </footer>


      {
        showTopBtn && (
          <div className="go-top" onClick={goTop}></div>
        )
      }
    </Container>
  )
}

export default AppFooter;