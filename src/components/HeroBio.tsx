import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import katiaPortrait from '@/assets/katia-portrait.jpg';
const HeroBio = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      
      {/* Animated floating orbs background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-brand-900/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-brand-600/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-brand-900/6 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 text-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-brand-900 leading-tight">
                Transformo viagens em
                <span className="block text-brand-600">experiências únicas</span>
              </h1>
              
              <p className="text-xl text-ink-600 leading-relaxed max-w-lg mx-auto">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={scrollToContact} className="btn-hero">
                Quero minha viagem sob medida
              </Button>
              
              
            </div>

            {/* Authority markers */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-brand-200 justify-center">
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
          <div className="relative max-w-md mx-auto">
            <div className="relative">
              {/* Organic shape background */}
              <div className="absolute inset-0 bg-gradient-hero rounded-[3rem] transform rotate-3 scale-105 opacity-20"></div>
              
              {/* Portrait */}
              <div className="relative bg-white rounded-[2.5rem] p-4 shadow-elegant">
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroBio;