import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroBio from '@/components/HeroBio';
import Audience from '@/components/Audience';
import BenefitsGrid from '@/components/BenefitsGrid';
import Authority from '@/components/Authority';
import DestinationsGrid from '@/components/DestinationsGrid';
import FAQAccordion from '@/components/FAQAccordion';
import ContactForm from '@/components/ContactForm';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Index = () => {
  useScrollReveal();

  useEffect(() => {
    // Set document title and meta description for SEO
    document.title = "Katia Lins - Viagens & Turismo | Curadoria Personalizada para Experiências Únicas";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Turismóloga com 18 anos de experiência especializada em destinos internacionais, neve e hotéis de luxo. Atendimento humanizado e roteiros personalizados para viajantes exigentes.'
      );
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <HeroBio />
      <Authority />
      <Audience />
      <BenefitsGrid />
      <DestinationsGrid />
      <FAQAccordion />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
