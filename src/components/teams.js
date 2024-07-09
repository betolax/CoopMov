import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const teamsData = [
  {
    id: 1,
    image: require('../assets/images/Perfil-1.jpg') ,
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Noémia Moises',
    designation: 'CEO da CoopMov',
    description: 'Presidente do Pelouro da Cooperativa'
  },
  {
    id: 2,
    image: require('../assets/images/Perfil-2.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Esménia Afonso',
    designation: 'Cooperação Internacional e Relações Internacionais',
    description: 'Presidente do Pelouro de Cooperação Internacional e Relações Internacionais'
  },
  {
    id: 3,
    image: require('../assets/images/Perfil-3.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Félix Fernando Sumunitato',
    designation: 'Sustentabilidade Ambiental ',
    description: 'Presidente do Pelouro de Sustentabilidade Ambiental.'
  },
  {
    id: 4,
    image: require('../assets/images/Perfil-4.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Bonázia Regione',
    designation: 'Qualidade, Moda e Inovação',
    description: 'Presidente do Pelouro de Qualidade, Moda e Inovação'
  }
  
  ,
  {
    id: 5,
    image: require('../assets/images/Perfil-5.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Miguel Chomar Seleman',
    designation: 'Relações Nacionais e os Cooperados',
    description: 'Presidente do Pelouro das Relações Nacionais e os Cooperados'
  },
  {
    id: 6,
    image: require('../assets/images/Perfil.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Oryza Alice V. da Graça',
    designation: 'Transporte e Logística',
    description: 'Presidente do Pelouro de Transporte e Logística'
  },
  {
    id: 7,
    image: require('../assets/images/Perfil.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Raquel Coimbra',
    designation: 'Administração e Finanças',
    description: 'Presidente do Pelouro de Administração e Finanças'
  },
  {
    id: 8,
    image: require('../assets/images/Perfil-8.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Toayba Rossana',
    designation: 'Marketing e Comunicação',
    description: 'Presidente do Pelouro de Comunicação e Marketing'

  },
  {
    id: 9,
    image: require('../assets/images/Perfil-9.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'António Higor Agige',
    designation: 'Gestão de Qualidade',
    description: 'Presidente do Pelouro de Sistemas de Gestão de Qualidade'

  },
  {
    id: 10,
    image: require('../assets/images/Perfil-10.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Crimilda Cuambe',
    designation: 'Projetos e Operações',
    description: 'Presidente do Pelouro de Projetos e Operações'

  },
  {
    id: 11,
    image: require('../assets/images/Perfil-11.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Belito Fernando',
    designation: 'Indústria e Comércio',
    description: 'Presidente do Pelouro de Indústria e Comércio'

  },
  {
    id: 12,
    image: require('../assets/images/Perfil-12.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Birgite John',
    designation: 'Capital Humano',
    description: 'Presidente do Pelouro do Capital Humano'

  },
  {
    id: 13,
    image: require('../assets/images/Perfil-13.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Edna Mami Nuro',
    designation: 'Recursos Humanos',
    description: 'Presidente do Pelouro dos Recursos Humanos'

  },
  {
    id: 14,
    image: require('../assets/images/Perfil.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: ' Mariza António Cumbi',
    designation: 'Empoderamento da Mulher e a Juventude',
    description: 'Presidente do Pelouro do Empoderamento da Mulher e a Juventude'

  },
  {
    id: 15,
    image: require('../assets/images/Perfil-15.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Dercio Januário',
    designation: 'Conteúdo Local',
    description: ' Presidente do Pelouro do Conteúdo Local'

  },
  {
    id: 16,
    image: require('../assets/images/Perfil-16.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Cachimo Francisco Cachimo',
    designation: 'Infraestruturas',
    description: 'Presidente do Pelouro das Infraestruturas'

  },
  {
    id: 17,
    image: require('../assets/images/Perfil-17.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Lasquinho Armando',
    designation: 'Tecnologia e Informação',
    description: 'Presidente do Pelouro de Tecnologia e Informação'

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