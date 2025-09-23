import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, Send } from 'lucide-react';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="contato" className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-12 rounded-3xl shadow-elegant">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-brand-900 mb-4">
                Mensagem enviada com sucesso!
              </h2>
              <p className="text-lg text-ink-600 mb-8">
                Obrigada pelo seu interesse! Entrarei em contato em breve para 
                conversarmos sobre sua viagem dos sonhos.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="btn-secondary"
              >
                Enviar nova mensagem
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6">
            Vamos planejar sua viagem?
          </h2>
          <p className="text-xl text-ink-600 max-w-2xl mx-auto">
            Conte-me sobre seus sonhos de viagem e criaremos juntos uma experiência única
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-brand-900 mb-2">
                    Nome completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 border-brand-200 focus:border-brand-600 rounded-xl"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brand-900 mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 border-brand-200 focus:border-brand-600 rounded-xl"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-brand-900 mb-2">
                    WhatsApp *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 border-brand-200 focus:border-brand-600 rounded-xl"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="destination" className="block text-sm font-semibold text-brand-900 mb-2">
                    Destino de interesse
                  </label>
                  <Input
                    id="destination"
                    name="destination"
                    type="text"
                    value={formData.destination}
                    onChange={handleChange}
                    className="h-12 border-brand-200 focus:border-brand-600 rounded-xl"
                    placeholder="Ex: Europa, Caribe, Neve..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-brand-900 mb-2">
                  Orçamento aproximado
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full h-12 border border-brand-200 focus:border-brand-600 rounded-xl px-4 bg-white text-ink-900"
                >
                  <option value="">Selecione uma faixa</option>
                  <option value="até-10k">Até R$ 10.000</option>
                  <option value="10k-25k">R$ 10.000 - R$ 25.000</option>
                  <option value="25k-50k">R$ 25.000 - R$ 50.000</option>
                  <option value="acima-50k">Acima de R$ 50.000</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-brand-900 mb-2">
                  Conte-me sobre sua viagem ideal *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="border-brand-200 focus:border-brand-600 rounded-xl resize-none"
                  placeholder="Descreva o que você imagina para sua viagem: período, tipo de experiência que busca, número de pessoas, preferências especiais..."
                />
              </div>

              <div className="text-center pt-4">
                <Button 
                  type="submit"
                  className="btn-hero flex items-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Quero minha viagem sob medida
                </Button>
                
                <p className="text-sm text-ink-600 mt-4">
                  * Campos obrigatórios. Suas informações estão seguras conosco.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;