import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 overflow-visible transition-colors duration-300
        ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'}`}
    >
      {/* altura fixa do header (não muda) */}
      <div className="container-custom h-16 md:h-20">
        <nav className="h-full flex items-center justify-between gap-6">
          {/* Logo (cresce visualmente sem aumentar o header) */}
          <div className="flex items-center justify-center w-full">
            <img
              src="/src/assets/katia-lins-logo.png"
              alt="Katia Lins"
              className="h-28 w-auto transform-gpu scale-[2] shrink-0 select-none pointer-events-none"
            />
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
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

        </nav>
      </div>
    </header>
  );
};

export default Header;
