import { Button } from '@/components/ui/button';
import { Star, Shield, Heart } from 'lucide-react';

const FinalCTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-brand-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-600 rounded-full opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-brand-600 rounded-full opacity-5"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Pronta para transformar seus sonhos em
            <span className="block text-brand-200">experiências inesquecíveis?</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-brand-200 mb-12 leading-relaxed">
            Com 18 anos de experiência e clientes que retornam há mais de 10 anos, 
            ofereço a curadoria e confiança que sua viagem merece.
          </p>

          {/* Benefits highlight */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Curadoria Exclusiva</h3>
              <p className="text-brand-200">Experiências únicas selecionadas especialmente para você</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Segurança Total</h3>
              <p className="text-brand-200">Suporte completo durante toda a sua jornada</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Atendimento Humanizado</h3>
              <p className="text-brand-200">Escuta ativa e cuidado em cada detalhe</p>
            </div>
          </div>

          <div className="space-y-6">
          <div className="flex justify-center pr-4">
            <Button 
              onClick={scrollToContact}
              className="bg-white text-brand-900 hover:bg-brand-200 px-8 py-3 rounded-2xl font-semibold text-lg shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              Quero minha viagem sob medida
            </Button>
          </div>
            
            <p className="text-brand-200">
              Sem compromisso • Consulta gratuita • Resposta em até 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;