import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como funciona o atendimento personalizado?",
      answer: "Começamos com uma conversa detalhada para entender seus gostos, necessidades e expectativas. A partir disso, criamos um roteiro completamente personalizado, desde a escolha do destino até cada detalhe da viagem."
    },
    {
      question: "Qual o diferencial em relação a outras agências?",
      answer: "Minha experiência de 18 anos, conhecimento pessoal dos destinos que indico, e atendimento humanizado que vai do primeiro contato ao retorno. Clientes retornam há mais de 10 anos justamente pela confiança e qualidade do serviço."
    },
    {
      question: "Vocês trabalham com que tipo de viagem?",
      answer: "Especializo-me em viagens internacionais, destinos de neve (Club Med), hotéis boutique e de luxo. Atendo viajantes que buscam experiências únicas e alto padrão de qualidade."
    },
    {
      question: "Como é feito o acompanhamento durante a viagem?",
      answer: "Mantenho contato durante toda a viagem para garantir que tudo está correndo conforme planejado. Estou disponível para resolver qualquer imprevisto e assegurar que sua experiência seja perfeita."
    },
    {
      question: "Qual o investimento para uma viagem personalizada?",
      answer: "O investimento varia conforme o destino, período, tipo de acomodação e experiências desejadas. Após nossa conversa inicial, elaboro um orçamento detalhado e transparente para sua aprovação."
    },
    {
      question: "Como posso começar a planejar minha viagem?",
      answer: "É muito simples! Entre em contato através do formulário ou WhatsApp para agendarmos uma conversa. Nela, entenderemos seus sonhos de viagem e começaremos a transformá-los em realidade."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6">
            Perguntas frequentes
          </h2>
          <p className="text-xl text-ink-600 max-w-2xl mx-auto">
            Tudo que você precisa saber sobre nossos serviços
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-surface-100 rounded-2xl overflow-hidden shadow-soft"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-brand-600/5 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-brand-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 text-brand-600 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-ink-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;