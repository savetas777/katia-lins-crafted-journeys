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
  return <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex justify-center">
          {/* Content */}
          <div className="space-y-8 text-center max-w-4xl">
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
        </div>
      </div>
    </section>;
};
export default HeroBio;