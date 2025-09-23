import { Crown, Globe, Heart, Shield, Sparkles, Users } from 'lucide-react';

const Audience = () => {
  const audiences = [
    {
      icon: Crown,
      title: "Curadoria sob medida",
      description: "Para quem busca experiências personalizadas e alto padrão de qualidade"
    },
    {
      icon: Sparkles,
      title: "Hotéis boutique e luxo",
      description: "Acomodações exclusivas cuidadosamente selecionadas"
    },
    {
      icon: Globe,
      title: "Destinos internacionais",
      description: "Especialização em neve (Club Med) e experiências únicas pelo mundo"
    },
    {
      icon: Heart,
      title: "Atendimento humanizado",
      description: "Suporte completo do primeiro contato ao retorno para casa"
    },
    {
      icon: Sparkles,
      title: "Experiências únicas",
      description: "Vivências que criam conexões verdadeiras e memórias duradouras"
    },
    {
      icon: Users,
      title: "Relacionamento de confiança",
      description: "Clientes que retornam e recomendam nosso trabalho"
    }
  ];

  return (
    <section id="para-quem" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6">
            Para quem é
          </h2>
          <p className="text-xl text-ink-600 max-w-2xl mx-auto">
            Viajantes que valorizam experiências autênticas e atendimento excepcional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((item, index) => (
            <div 
              key={index}
              className="reveal p-8 bg-surface-100 rounded-2xl card-hover group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-brand-900 mb-4">
                {item.title}
              </h3>
              
              <p className="text-ink-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;