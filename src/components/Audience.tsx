import { Crown, Globe, Heart, Shield, Sparkles, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Audience = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.findIndex(ref => ref === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [isMobile]);

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
              ref={el => cardRefs.current[index] = el}
              className={`p-8 bg-surface-100 rounded-2xl card-hover group transition-all duration-700 ${
                isMobile 
                  ? visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95'
                  : 'reveal'
              }`}
              style={{ 
                animationDelay: isMobile ? '0ms' : `${index * 100}ms`,
                transitionDelay: isMobile && visibleCards.includes(index) ? `${index * 150}ms` : '0ms'
              }}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center transition-all duration-700 ${
                  isMobile && visibleCards.includes(index) 
                    ? 'scale-110 rotate-6' 
                    : 'group-hover:scale-110'
                }`}
                style={{
                  transitionDelay: isMobile && visibleCards.includes(index) ? `${index * 150}ms` : '0ms'
                }}
                onTransitionEnd={(e) => {
                  if (isMobile && visibleCards.includes(index) && e.propertyName === 'transform') {
                    e.currentTarget.style.transform = 'scale(1.1) rotate(0deg)';
                  }
                }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className={`text-xl font-bold text-brand-900 mb-4 transition-all duration-500 ${
                isMobile && visibleCards.includes(index) ? 'text-brand-600' : ''
              }`}>
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