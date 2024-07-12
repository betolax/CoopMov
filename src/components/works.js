import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';
import Carousel from 'react-bootstrap/Carousel';
import React, { Component }  from 'react';

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



const CeremonyData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 1.png'),
    title: 'Consultoria em planeamento estratégico ',
    subtitle: 'Consultoria'
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 2.png'),
    title: 'Consultoria em planeamento estratégico',
    subtitle: 'Consultoria'
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 3.png'),
    title: 'Consultoria em planeamento estratégico',
    subtitle: 'Consultoria'
  },
  {
    id: 4,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 4.png'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  },
  {
    id: 5,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 5.png'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  },
  {
    id: 6,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 6.png'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  },
  {
    id: 7,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 7.png'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  },
  {
    id: 8,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 8.png'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação'
  },
  {
    id: 9,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 9.png'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  },
  {
    id:10,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 10.png'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  },
  {
    id: 11,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 11.png'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  }
  ,
  {
    id: 12,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 12.png'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  },
  {
    id: 13,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 13.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 14,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 14.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 15,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 15.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 16,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 16.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 17,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 17.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 18,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 18.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 19,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 19.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 20,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 20.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 21,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 21.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 22,
    link: 'https://www.google.com',
    image: require('../assets/images/Coperado 22.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 23,
    link: 'https://www.google.com',
    image: require('../assets/images/Perfil-1.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  }
]


let descricao = "Os nossos trabalhos que tem sido nas mas divesrsas areas"
let descricao2 = "Cerimonia de Tomada de Posse dos Preidentes dos prelouros"

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
        <Pagination> <h3>{descricao}</h3></Pagination>


      {/*Tomada de posse dos presintes em formato de slide show */}
        <Carousel>
          {
            CeremonyData.map(works => {
              return (
              
                <Carousel.Item key={works.id} >
                 
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
        <Pagination> <h3>{descricao2}</h3></Pagination>
      </Container>  
      
      
    </section>
  );
}

/*

    
        </Row>
       <Pagination>{items}</Pagination>
      </Container>  
    </section>
  );
}


  FORMATO DE SLIDE SHOW
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

        fotos FORMATO DE GRADE DE MENU DETRO DO <Row className='portfoliolist'>

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