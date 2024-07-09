import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contacte-nos
          </h2>
          <div className="subtitle">Conecte-se Conosco </div>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Escreva seu nome completo" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Digite o seu endereço de email" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Digite o seu Contacto" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Digite sua mensagem de contato" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type="submit">Enviar
            </Button>
          </div>
        </Form>
      </Container>
      <div className='google-map'>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7775.460208481148!2d40.53382237466004!3d-12.989106677492659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU5JzE3LjQiUyA0MMKwMzInMjAuNSJF!5e0!3m2!1spt-BR!2smz!4v1720510665709!5m2!1spt-BR!2smz" ></iframe>

      </div>
      <Container fluid>
 
      </Container>
    </section>
  );
}

export default AppContact;