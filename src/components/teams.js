import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const teamsData = [
  {
    id: 1,
    image: require('../assets/images/Perfil.jpg') ,
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Lasquinho Armando',
    designation: 'Tecnologia e Informação',
    description: 'Presidente do Pelouro de Tecnologia e Informação'
  },
  {
    id: 2,
    image: require('../assets/images/Perfil.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Esménia Afonso',
    designation: 'INTERNACIONAIS',
    description: 'Presidente do pelouto de relacoes Internacionais'
  },
  {
    id: 3,
    image: require('../assets/images/Perfil.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Félix Sumunitato',
    designation: 'Sustentabilidade Ambiental ',
    description: 'Presidente do Pelouro de Sustentabilidade Ambiental.'
  },
  {
    id: 4,
    image: require('../assets/images/Perfil.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Bonázia Regione',
    designation: 'Qualidade, Moda e Inovação',
    description: 'Estilista e palestrante motivacional '
  }
  
  ,
  {
    id: 5,
    image: require('../assets/images/Perfil.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: ' MARIZA',
    designation: 'Mulher e a Juventude',
    description: 'Presidente do Pelouro do Empoderamento da Mulher e a Juventude'
  },
  {
    id: 6,
    image: require('../assets/images/Perfil.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'CACHIMO',
    designation: 'Infraestruturas',
    description: 'Presidente do Pelouro do Capital Humano'
  },
  {
    id: 7,
    image: require('../assets/images/Perfil.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: ' BIRGITE ',
    designation: 'Capital Humano',
    description: 'Presidente do Pelouro do Capital Humano '
  },
  {
    id: 8,
    image: require('../assets/images/Perfil.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'RAQUEL',
    designation: 'Administração e Finanças',
    description: 'Presidente do Pelouro da Administração e Finanças'
  },
  {
    id: 9,
    image: require('../assets/images/Perfil.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'TOAYBA',
    designation: 'Marketing e Comunicação',
    description: 'Presidente do Pelouro de Marketing e Comunicação'

  },
  {
    id: 10,
    image: require('../assets/images/Perfil.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'HIGOR',
    designation: 'Gestão de Qualidade',
    description: 'Presidente do Pelouro dos sistemas de Gestão de Qualidade'

  },
  {
    id: 11,
    image: require('../assets/images/Perfil.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'CRIMILDA',
    designation: 'Diretor do Projetos e Operações',
    description: 'Presidente do Pelouro de Projetos e Operações'

  },
  {
    id: 12,
    image: require('../assets/images/Perfil.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'BELITO',
    designation: 'Indústria e Comércio',
    description: 'Presidente do Pelouro de Indústria e Comércio'

  },
  {
    id: 13,
    image: require('../assets/images/Perfil.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'JOSÉ',
    designation: 'Relações com os Cooperados',
    description: 'Presidente do Pelouro das relações com os Cooperados'

  },
  {
    id: 14,
    image: require('../assets/images/Perfil.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: ' EDNA',
    designation: 'Recursos Humanos',
    description: 'Presidente do Pelouro dos Recursos Humanos'

  }
  
  
  
  
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
                    <Image src={teams.image} class="img-thumbnail" />
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