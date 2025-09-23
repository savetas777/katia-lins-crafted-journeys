import { Ear, MapPin, Star, Headphones, BookOpen, UserCheck } from 'lucide-react';

const BenefitsGrid = () => {
  const benefits = [
    {
      icon: Ear,
      title: "Escuta ativa",
      description: "Entendemos o propósito da sua jornada para criar experiências significativas",
      featured: true
    },
    {
      icon: MapPin,
      title: "Roteiros personalizados",
      description: "Cada detalhe planejado no seu ritmo e estilo de viagem"
    },
    {
      icon: Star,
      title: "Curadoria autoral",
      description: "Seleção criteriosa de hotéis, experiências e destinos únicos"
    },
    {
      icon: Headphones,
      title: "Acompanhamento completo",
      description: "Suporte integral do planejamento ao retorno para casa",
      featured: true
    },
    {
      icon: BookOpen,
      title: "Atualização constante",
      description: "Participação em feiras, treinamentos e vivências pelo mundo"
    },
    {
      icon: UserCheck,
      title: "Confiança & recorrência",
      description: "Clientes que retornam e indicam nosso trabalho há mais de 10 anos"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beneficios" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6">
            Por que escolher a Katia Lins
          </h2>
          <p className="text-xl text-ink-600 max-w-2xl mx-auto">
            Diferenciais que transformam viagens em experiências inesquecíveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`reveal p-8 bg-white rounded-2xl card-hover group ${
                benefit.featured ? 'lg:col-span-1 md:row-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-brand-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-ink-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="text-center">
          <button 
            onClick={scrollToContact}
            className="btn-hero inline-flex"
          >
            Quero minha viagem sob medida
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;