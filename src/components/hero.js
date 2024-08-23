

import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/img-hero1.jpg'),
    title: 'QUEM SOMOS',
    description: 'Fundada em 2024, a Cooperativa em Movimentos COOPMOV foi criada por um grupo de profissionais experientes em negócios e gestão com o objetivo de empoderar jovens e mulheres através de consultoria especializada, promovendo o desenvolvimento pessoal e profissional',

    link: 'https://www.instagram.com/cooperativa_em_movimento_?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'
  },
  {
    id: 2,
    image: require('../assets/images/img-hero2.jpg'),
    title: 'O QUE FAZEMOS',
    description: 'Proporcionamos   resposta   e intervenções de qualidade e a medida  das  necessidades  dos nossos parceiros.',
    link: 'https://www.facebook.com/profile.php?id=61557583830395&mibextid=LQQJ4d'
  },
  {
    id: 3,
    image: require('../assets/images/img-hero3.png'),
    title: 'ESTRUTURA ORGANIZACIONAL',
    description: 'A cooperativa é gerida por um conselho de administração formado por mulheres e jovens profissionais, nas áreas de empreendedorismo, desenvolvimento pessoal, profissional e empresarial, Marketing e advocacia, além de uma equipe executiva responsável pela implementação dos serviços e programas',
    link: 'https://chat.whatsapp.com/EHG2mrObh6x0rEcDfEHvQu'
  }
]

const CeremonyData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 1.png'),
    title: 'Consultoria em planeamento estratégico ',
    subtitle: 'Consultoria'
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 2.png'),
    title: 'Consultoria em planeamento estratégico',
    subtitle: 'Consultoria'
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 3.png'),
    title: 'Consultoria em planeamento estratégico',
    subtitle: 'Consultoria'
  },
  {
    id: 4,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 4.png'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  },
  {
    id: 5,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 5.png'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  },
  {
    id: 6,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 6.png'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  },
  {
    id: 7,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 7.png'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  },
  {
    id: 8,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 8.png'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação'
  },
  {
    id: 9,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 9.png'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  },
  {
    id: 11,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 11.png'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  }
  ,
  {
    id: 12,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 12.png'),
    title: 'Capacitação e Desenvolvimento ',
    subtitle: 'Formação '
  },
  {
    id: 13,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 13.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 14,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 14.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 15,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 15.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 16,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 16.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 17,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 17.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 18,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 18.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 19,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 19.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 20,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 20.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 21,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 21.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 22,
    link: 'https://www.google.com',
    image: require('../assets/Coperado/Coperado 22.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  },
  {
    id: 23,
    link: 'https://www.google.com',
    image: require('../assets/perfil/Perfil-1.png'),
    title: 'Network e Materiais ',
    subtitle: 'Network '
  }
]




function AppHero() {
  return (
    <section >
      <section id="home" className="hero-block">
        <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    // className="d-block h-50px w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <h5>{hero.description}</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })
          }


        </Carousel>


      </section>

      <section>

        {/*Tomada de posse dos presintes em formato de slide show */}

        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <center>
          <Carousel className='work-image'>
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
        </center>
      </section>
      <section>

{/*Tomada de posse dos presintes em formato de slide show */}

<br>
</br>
<br>
</br>
<br>
</br>
<center>
  {/* <Carousel className='work-image'>
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
  </Carousel> */}
</center>
</section>
    </section>





  );

}

export default AppHero;
