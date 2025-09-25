import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import katiaPortrait from '@/assets/katia-portrait.jpg';

const HeroBio = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-brand-900 leading-tight">
                Transformo viagens em
                <span className="block text-brand-600">experiências únicas</span>
              </h1>
              
              <p className="text-xl text-ink-600 leading-relaxed max-w-lg">
                Sou Katia Lins, turismóloga (2007) com 18 anos de atuação. Curadoria 
                personalizada para perfis exigentes, especialista em destinos internacionais, 
                neve (Club Med) e hotéis boutique/luxo.
              </p>
              
              <p className="text-lg text-brand-600 font-medium">
                Atendimento humanizado do primeiro contato ao retorno — com escuta ativa, 
                proximidade e confiança.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="btn-hero"
              >
                Quero minha viagem sob medida
              </Button>
              
              <Button 
                variant="outline"
                className="btn-secondary flex items-center gap-2"
                
              >
                <MessageCircle size={20} />
                Chamar no WhatsApp
              </Button>
            </div>

            {/* Authority markers */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-brand-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-900">18</div>
                <div className="text-sm text-brand-600">anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-900">2007</div>
                <div className="text-sm text-brand-600">formação em turismo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-900">+10</div>
                <div className="text-sm text-brand-600">anos com clientes fiéis</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative">
              {/* Organic shape background */}
              <div className="absolute inset-0 bg-gradient-hero rounded-[3rem] transform rotate-3 scale-105 opacity-20"></div>
              
              {/* Portrait */}
              <div className="relative bg-white rounded-[2.5rem] p-4 shadow-elegant">
                <img
                  src="https://i.postimg.cc/jqN6fsjg/ABC-6809.jpg"
                  alt="Katia Lins - Especialista em Viagens e Turismo"
                  className="w-full h-auto rounded-[2rem] object-cover"
                />
              </div>
              
              {/* Floating accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-600 rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-900 rounded-full opacity-5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBio;