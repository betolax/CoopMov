import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Component }  from 'react';

function AppAbout() {


  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Sobre Nós</h2>
          <div className="subtitle">Leia Mas Sobre Nós</div>
        </div>

        <Row >
          <Col sm={4}>
            <div className="temp" >
              <center><h1>Missão</h1></center>
              <p >Proporcionar consultoria de alta qualidade em negócios e gestão, 
                empoderando jovens e mulheres para que alcancem seu pleno potencial.</p>
            </div>
          </Col>

          <Col sm={4}>
            <div className="temp" >
              <center><h1>Visão</h1></center>
              <p>Ser a principal referência em consultoria cooperativa para jovens, 
                mulheres e pessoas com deficiência, 
                promovendo igualdade de oportunidades e desenvolvimento sustentável. </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="temp" >
              <center><h1>Valores</h1></center>
              <p>✔  Igualdade; <br></br> 
                 ✔ Cooperação; <br></br>
                 ✔  Inovação; <br></br>
                 ✔ Integridade; <br></br>
                 ✔  Responsabilidade social;<br></br> 
                 ✔  Desenvolver e valorizar as pessoas;<br></br> 
                 ✔ Respeitar o ambiente e a comunidade; </p>                 

            </div>

          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default AppAbout;