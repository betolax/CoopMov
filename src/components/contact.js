import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
//import React, { Component }  from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function AppContact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [number, setNumber] = useState('')
  const nome = 'CoopMov'

  function sendEmail(e){
    e.preventDefault();
  
    const templateParms = {
      from_name: name,
      to_name: nome,
      message : message,
      email: email,
      number: number

    }

    emailjs.send('service_hbkxnc7','template_l5v2g0v',templateParms ,'WAOPdXpAuOqLJdZ7s')
      .then(
        (response) => {
          console.log('SUCCESS!',response.status);
          setName('')
          setEmail('')
          setMessage('')
          setNumber('')
         alert.message(' O sue email foi enviado com sucesso')

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  

    
  }

  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contacte-nos
          </h2>
          <div className="subtitle">Conecte-se Conosco </div>
        </div>

        <Form className='contact-form'  onSubmit={sendEmail} >
        <div className="container">
      <h1 className="title">Contato</h1>
  
      <Row>
      <Col sm={4}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        </Col>
        <Col sm={4}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
         </Col>
         <Col sm={4}>
        {/* Campo de numero de contacto no form*/}
         <input 
          className="input"
          type="text"
          placeholder="Digite seu o seu numero"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          required
        />
        </Col>
        </Row>
        <Row>
            <Col sm={12}>
        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        />
        </Col>
        </Row>

        <div className='btn-holder'>
            <Button type="submit" value="Enviar">Enviar
            </Button>
          </div>

        <input className="button" type="submit" value="Enviar" />
    
    </div>
          
          {/*
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Escreva seu nome completo" required />
                
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Digite o seu endereço de email" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Digite o seu Contacto"  required />
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

          */}
        </Form>
      </Container>
      

      <div className='google-map'>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7775.460208481148!2d40.53382237466004!3d-12.989106677492659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU5JzE3LjQiUyA0MMKwMzInMjAuNSJF!5e0!3m2!1spt-BR!2smz!4v1720510665709!5m2!1spt-BR!2smz" ></iframe>

      </div>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              Email: Geral@coopmov.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              Celular: +258 870940008 & +258 840105370
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Pemba, Moçambique
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;