import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
//import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const teamsData = [
  {
    id: 1,
    image: require('../assets/perfil/Perfil-1.png') ,
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Noémia da Conceição Moises',
    description: 'Presidente do Conselho de Administração'
  },
  
  {
    id: 2,
    image: require('../assets/perfil/Perfil-21.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Apsínio Duarte Canga',
    description: 'Presidente do Pelouro do Conteúdo Local'

  },
  {
    id: 3,
    image: require('../assets/perfil/Perfil-18.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Augusto Armando Massariamba',
    description: 'Presidente do Conselho de Direção'

  },
  {
    id: 4,
    image: require('../assets/perfil/PERFIL (5).jpeg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: ' Mauro António Cossa',
    description: 'Vice-Presidente',

  },
  
  {
    id: 5,
    image: require('../assets/perfil/Perfil-19.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Elina Eduardo Chabana',
    description: 'Presidente do Conselho Fiscal',

  },
  {
    id: 6,
    image: require('../assets/perfil/PERFIL (7).jpeg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: ' Natércia Agostinho Gimo',
    description: 'Vice-presidente'

  },
  {
    id: 20,
    image: require('../assets/perfil/Perfil-20.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Saídia Mussa Sumail',
    description: 'Embaixadora da Sustentabildade e Responsabilidade',

  },
  {
    id: 14,
    image: require('../assets/perfil/PERFIL (4).jpeg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: ' Mariza António Cumbi',
    description: 'Presidente do Pelouro do Empoderamento da Mulher e a Juventude'

  },
  {
    id: 21,
    image: require('../assets/perfil/Perfil-2.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Esménia Afonso',
    description: 'Presidente do Pelouro de Cooperação Internacional e Relações Internacionais',
  },
  {
    id: 13,
    image: require('../assets/perfil/Perfil-13.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Edna Mami Nuro',
    description: 'Presidente do Pelouro dos Recursos Humanos'

  },
/*
    id: 15,
    image: require('../assets/perfil/Perfil-15.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Dércio Januário',
    description: ' Presidente do Pelouro do Conteúdo Local' */

  ,
  {
    id: 16,
    image: require('../assets/perfil/Perfil-16.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Cachimo Francisco Cachimo',
    description: 'Presidente do Pelouro das Infraestruturas'

  },
  {
    id: 23,
    image: require('../assets/perfil/Perfil-4.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Bonázia Regione',
    description: 'Presidente do Pelouro de Qualidade, Moda e Inovação'
  }
  ,
  {
    id: 17,
    image: require('../assets/perfil/Perfil-17.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Lasquinho Armando',
    description: 'Presidente do Pelouro de Tecnologia e Informação'

  },
  {
    id: 19,
    image: require('../assets/perfil/Perfil-5.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Miguel da Conceição Chomar Selemane',
    description: 'Presidente do Pelouro de Comunicação e Relações Nacionais'
  },
  {
    id: 22,
    image: require('../assets/perfil/PERFIL (1).jpeg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'João Dinis',
    description: 'Presidente do Pelouro de Transpotes'
  },
  {
    id: 7,
    image: require('../assets/perfil/PERFIL (6).jpeg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Raquel Filipa Conde Coimbra',
    description: 'Presidente do Pelouro de Administração e Finanças'
  },
  {
    id: 10,
    image: require('../assets/perfil/Perfil-10.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Crimilda Amosse Cuambe',
    description: 'Presidente do Pelouro de Projetos e Operações'

  },
  {
    id: 12,
    image: require('../assets/perfil/Perfil-12.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Birgite Armando  John',
    description: 'Presidente do Pelouro do Capital Humano'

  },
  {
    id: 8,
    image: require('../assets/perfil/Perfil-8.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Toayba Rossana Ibraimo Assumane',
    description: 'Presidente do Pelouro de Logística e Procurement'

  },
  {
    id: 18,
    image: require('../assets/perfil/Perfil-3.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Félix Fernando Sumunitato',
    description: 'Presidente do Pelouro de Sustentabilidade Ambiental.'
  },
  {
    id: 11,
    image: require('../assets/perfil/Perfil-11.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Belito Fernando',
    description: 'Presidente do Pelouro de Indústria e Comércio'

  },
  {
    id: 9,
    image: require('../assets/perfil/Perfil-9.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'António Higor Agige',
    description: 'Presidente do Pelouro de Sistemas de Gestão de Qualidade'

  },
  {
    id: 25,
    image: require('../assets/perfil/PERFIL (2).jpeg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Seragy Abudo Pastela',
    description: 'Coordenador dos programas culturais e educativos'

  },

  {
    id: 25,
    image: require('../assets/perfil/2 (17).png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Vinícius Salvador',
    description: 'Gestor da Marketing e Fotógrafo'

  },

  ,
  

  
  
]



function AppTeams() {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Nosso teams</h2>
          <div className="subtitle">Alguns dos nossos especialistas</div>
        </div>
        <Row>
          {
            teamsData.map(teams => {
              return (
                <Col sm={3} key={teams.id}>
                  <div className='image'>
                    <Image src={teams.image} className = "rounded-circle shadow-4-strong" />
                    <div className='overlay'>
                      <div className='socials'>
                        <ul>
                          <li><a href={teams.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href={teams.twitterLink}><i className="fab fa-twitter"></i></a></li>
                          <li><a href={teams.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='content'>
                    <h3>{teams.name}</h3>
                    <span className='designation'>{teams.designation}</span>
                    <p>{teams.description}</p>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}


export default AppTeams;