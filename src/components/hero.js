import Carousel from 'react-bootstrap/Carousel';
import React, { Component }  from 'react';

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

function AppHero() {
  return (
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
  );
}

export default AppHero;