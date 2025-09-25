import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Katia Lins - Viagens & Turismo" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('biografia')}
              className="text-brand-900 hover:text-brand-600 transition-colors font-medium"
            >
              Biografia
            </button>
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-brand-900 hover:text-brand-600 transition-colors font-medium"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('destinos')}
              className="text-brand-900 hover:text-brand-600 transition-colors font-medium"
            >
              Destinos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-brand-900 hover:text-brand-600 transition-colors font-medium"
            >
              Contato
            </button>
          </div>

          {/* CTA */}
          <Button 
            onClick={() => scrollToSection('contato')}
            className="btn-hero text-sm px-6 py-3"
          >
            Quero minha viagem sob medida
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;