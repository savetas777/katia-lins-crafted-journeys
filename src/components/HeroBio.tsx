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
  return <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Sophisticated gradient background with animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-surface-50 to-brand-100"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-custom relative z-10">
        <div className="flex justify-center">
          {/* Content with animations */}
          <div className="space-y-10 text-center max-w-5xl animate-fade-in">
            
            {/* Main headline with gradient text */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-scale-in">
                <span className="block text-brand-900">Transformo viagens em</span>
                <span className="block bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 bg-clip-text text-transparent mt-2">
                  experiências únicas
                </span>
              </h1>
            </div>

            {/* Bio content with enhanced styling */}
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border border-brand-100/50 hover:shadow-xl transition-all duration-500 hover-scale">
                <p className="text-xl md:text-2xl text-ink-700 leading-relaxed font-medium">
                  Sou Katia Lins, turismóloga (2007) com 18 anos de atuação.
                </p>
                
                <div className="h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent my-6"></div>
                
                <p className="text-lg md:text-xl text-ink-600 leading-relaxed">
                  Curadoria personalizada, especialista em destinos internacionais, 
                  nacionais e destinos de neve (Club Med)
                </p>
              </div>

              <div className="bg-gradient-to-r from-brand-500/5 via-brand-400/10 to-brand-500/5 backdrop-blur-sm rounded-2xl p-6 border border-brand-200/30">
                <p className="text-lg md:text-xl text-brand-700 font-medium leading-relaxed">
                  Atendimento humanizado do primeiro contato ao retorno — com escuta ativa, 
                  proximidade e confiança.
                </p>
              </div>
            </div>

            {/* CTA Button with enhanced styling */}
            <div className="pt-4">
              <Button 
                onClick={scrollToContact} 
                className="btn-hero text-lg px-10 py-6 shadow-elegant hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Quero minha viagem sob medida
              </Button>
            </div>

            {/* Authority markers with cards */}
            <div className="flex flex-wrap gap-6 pt-12 justify-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover-scale border border-brand-100/50 min-w-[140px]">
                <div className="text-4xl font-bold bg-gradient-to-br from-brand-600 to-brand-800 bg-clip-text text-transparent">18</div>
                <div className="text-sm text-ink-600 mt-2 font-medium">anos de experiência</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover-scale border border-brand-100/50 min-w-[140px]">
                <div className="text-4xl font-bold bg-gradient-to-br from-brand-600 to-brand-800 bg-clip-text text-transparent">2007</div>
                <div className="text-sm text-ink-600 mt-2 font-medium">formação em turismo</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover-scale border border-brand-100/50 min-w-[140px]">
                <div className="text-4xl font-bold bg-gradient-to-br from-brand-600 to-brand-800 bg-clip-text text-transparent">+10</div>
                <div className="text-sm text-ink-600 mt-2 font-medium">anos com clientes fiéis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroBio;