import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-brand-200">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <h3 className="text-2xl font-bold text-brand-900">Katia Lins</h3>
              <span className="text-brand-600 font-medium">Viagens & Turismo</span>
            </div>
            <p className="text-ink-600 leading-relaxed mb-6 max-w-md">
              Transformando viagens em experiências únicas há 18 anos. 
              Especialista em destinos internacionais, neve e hotéis de luxo.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/katialins_viagens/?hl=pt-br" 
                className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center text-white hover:bg-brand-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center text-white hover:bg-brand-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-brand-900 mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-600" />
                <span className="text-ink-600">contato@katialins.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-600" />
                <span className="text-ink-600">(11) 98274-7233</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-600" />
                <span className="text-ink-600">São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-brand-900 mb-6">Links úteis</h4>
            <div className="space-y-3">
              <a href="#biografia" className="block text-ink-600 hover:text-brand-600 transition-colors">
                Biografia
              </a>
              <a href="#beneficios" className="block text-ink-600 hover:text-brand-600 transition-colors">
                Benefícios
              </a>
              <a href="#destinos" className="block text-ink-600 hover:text-brand-600 transition-colors">
                Destinos
              </a>
              <a href="#contato" className="block text-ink-600 hover:text-brand-600 transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-ink-600 text-sm">
              © 2024 Katia Lins Viagens & Turismo. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-ink-600 hover:text-brand-600 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-ink-600 hover:text-brand-600 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;