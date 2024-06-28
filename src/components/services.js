import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-screwdriver-wrench',
    title: 'Consultoria em Planejamento Estratégico',
    description: 
    <ul class="list-unstyled">
  <li><i class="fas fa-arrow-right-long"></i> Auxílio na elaboração de planos de negócios e estratégias de crescimento;</li>
      </ul>    
  },
  {
    id: 2,
    icon: 'fas fa-laptop-code',
    title: 'Gestão Financeira',
    description:  <ul class="list-unstyled">
  <li><i class="fas fa-arrow-right-long"></i> Orientação em controle financeiro, análise de custos e otimização de recursos;</li>
      </ul>
  },
  {
    id: 3,
    icon: 'fas fa-network-wired',
    title: 'Capacitação e Desenvolvimento',
    description: <ul class="list-unstyled">
<li><i class="fas fa-arrow-right-long"></i> Cursos e workshops em habilidades técnicas e pessoais, incluindo liderança, marketing e gestão de projetos;</li>
      </ul>
  },
  {
    id: 4,
    icon: 'fas fa-eye',
    title: 'Empreendedorismo',
    description: <ul class="list-unstyled">
<li><i class="fas fa-arrow-right-long"></i> Suporte na criação e desenvolvimento de novos negócios, com foco em jovens e mulheres;</li>
      </ul>
  },
  {
    id: 5,
    icon: 'fas fa-eye',
    title: 'Networking e Mentoria',
    description: <ul class="list-unstyled">
<li><i class="fas fa-arrow-right-long"></i> Programas de mentoria e oportunidades de networking 
para troca de experiências e conhecimentos;</li>
      </ul>
  },
  {
    id: 6,
    icon: 'fas fa-eye',
    title: 'Inovações e Diferenciais',
    description: <ul class="list-unstyled">
<li><i class="fas fa-arrow-right-long"></i> Abordagem personalizada e adaptada às necessidades 
de jovens e mulheres;</li>
<li><i class="fas fa-arrow-right-long"></i> Utilização de metodologias modernas e tecnologias inovadoras;</li>
<li><i class="fas fa-arrow-right-long"></i> Equipe multidisciplinar com experiência prática em diversos setores.</li>

      </ul>
  }
]

function AppServices() {
//const descricao = this.services.description.map((description) => <li>{description}</li>);

  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Nossos servicos</h2>
          <div className="subtitle">servicos que fornecemos</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={6} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                 
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;