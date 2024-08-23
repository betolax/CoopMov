import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const worksData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: require('../assets/images/img1.jpg'),
    title: 'Consultoria em planeamento estratégico ',
    subtitle: 'Consultoria'
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: require('../assets/images/img2.jpg'),
    title: 'Consultoria em planeamento estratégico',
    subtitle: 'Consultoria'
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: require('../assets/images/img3.jpg'),
    title: 'Consultoria em planeamento estratégico',
    subtitle: 'Consultoria'
  },
  {
    id: 4,
    link: 'https://www.google.com',
    image: require('../assets/images/img7.jpg'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  },
  {
    id: 5,
    link: 'https://www.google.com',
    image: require('../assets/images/img8.jpg'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  },
  {
    id: 6,
    link: 'https://www.google.com',
    image: require('../assets/images/img6.jpg'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  },
  {
    id: 13,
    link: 'https://www.google.com',
    image: require('../assets/images/img13.jpg'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 14,
    link: 'https://www.google.com',
    image: require('../assets/images/img18.jpg'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 15,
    link: 'https://www.google.com',
    image: require('../assets/images/img19.jpg'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  }

]



function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Nossos Trabalhos</h2>
          <div className="subtitle">nossos incríveis trabalhos</div>
        </div>
        <Row className='portfoliolist'>
        
       
          {
            worksData.map(works => {
              return (
                <Col sm={4} key={works.id}>
                  <div className='portfolio-wrapper'>
                    <a href={works.link}>
                      <Image src={works.image} />
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
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


export default AppWorks;