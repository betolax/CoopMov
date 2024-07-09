import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';
import Carousel from 'react-bootstrap/Carousel';


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
    id: 7,
    link: 'https://www.google.com',
    image: require('../assets/images/img4.jpg'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  },
  {
    id: 8,
    link: 'https://www.google.com',
    image: require('../assets/images/img5.jpg'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação'
  },
  {
    id: 9,
    link: 'https://www.google.com',
    image: require('../assets/images/img9.jpg'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  },
  {
    id:10,
    link: 'https://www.google.com',
    image: require('../assets/images/img10.jpg'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  },
  {
    id: 11,
    link: 'https://www.google.com',
    image: require('../assets/images/img11.jpg'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  }
  ,
  {
    id: 12,
    link: 'https://www.google.com',
    image: require('../assets/images/img12.jpg'),
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
  },
  {
    id: 16,
    link: 'https://www.google.com',
    image: require('../assets/images/img19.jpg'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  }

]

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Nossos Trabalhos</h2>
          <div className="subtitle">nossos incríveis trabalhoss</div>
        </div>
        <Row className='portfoliolist'>
        
                
          <Carousel>
          {
            worksData.map(works => {
              return (
              
                <Carousel.Item key={works.id}>
                 
                  <img
                   className="work-image"
                  //  className="d-block w-100"
                    src={works.image}
                   alt={"slide " + works.id}
                   
                  />     
                </Carousel.Item>
                
                );
              })
            }
        </Carousel>

                
           
        </Row>
        <Pagination>{items}</Pagination>
      </Container>  
    </section>
  );
}

/*

<Carousel>
          {
            worksData.map(works => {
              return (
                <Carousel.Item key={works.id}>
                  <img
                    className="d-block w-100"
                    src={works.image}
                    alt={"slide " + works.id}
                  />     
                </Carousel.Item>
                
                );
              })
            }
        </Carousel>

        fotos

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
                


function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Nossos Trabalhos</h2>
          <div className="subtitle">nossos incríveis trabalhos</div>
        </div>
     { /*<Row className='portfoliolist'> * /}
      <Row >
        {
    
    
            <div className="temp" >
      <Col sm={6}>
    <center><h2>Benefícios para os membros</h2></center>
   
            <h3>  Econômicos: </h3>
<p>Acesso a oportunidades de capacitação e desenvolvimento profissional.
Apoio financeiro e microcréditos para empreendedores. <br></br> <br></br> </p>

<h3>Sociais:</h3>

<p> Desenvolvimento de habilidades pessoais e profissionais.
Participação ativa nas decisões e projetos da cooperativa.
Construção de uma rede de suporte e colaboração.<br></br> <br></br> </p>

<h3>Outros:</h3>
<p>Benefícios exclusivos em serviços e produtos parceiros.
Acesso a eventos e workshops exclusivos para membros.</p>


  </Col>
  </div>
          

}
</Row>

</Container>  
</section>

  );
}
*/
export default AppWorks;