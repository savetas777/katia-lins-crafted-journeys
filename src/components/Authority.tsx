import katiaPortrait from '@/assets/katia-portrait.jpg';

const Authority = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto lg:mx-0 relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-full opacity-20"></div>
              <img
                src={katiaPortrait}
                alt="Katia Lins - Turismóloga especialista"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-elegant"
              />
              
              {/* Achievement badges */}
              <div className="absolute -top-4 -right-4 bg-brand-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-soft">
                18 anos
              </div>
              <div className="absolute -bottom-4 -left-4 bg-brand-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-soft">
                2007
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-900">
                Minha trajetória
              </h2>
              
              <p className="text-lg text-ink-600 leading-relaxed">
                Minha trajetória reflete superação e entrega. Venho de origem simples, 
                fui a primeira da família a me formar e evoluí em grandes empresas do setor. 
                Hoje, ver clientes que retornam e indicam meu trabalho é minha maior realização.
              </p>
              
              <p className="text-lg text-brand-600 leading-relaxed">
                Minha agência nasceu de um momento marcante: o convite de uma cliente, 
                feito enquanto eu realizava um sonho na Capadócia. Percebi que o que 
                realmente importa é o cuidado com cada jornada.
              </p>
              
              <p className="text-lg text-ink-600 leading-relaxed">
                Há mais de 10 anos, clientes acompanham e confiam no meu trabalho — 
                hoje, quando pensam em viajar, pensam em mim.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-brand-200">
              <div className="text-center p-6 bg-surface-100 rounded-2xl">
                <div className="text-3xl font-bold text-brand-900 mb-2">18</div>
                <div className="text-brand-600 font-medium">Anos de atuação</div>
              </div>
              <div className="text-center p-6 bg-surface-100 rounded-2xl">
                <div className="text-3xl font-bold text-brand-900 mb-2">2007</div>
                <div className="text-brand-600 font-medium">Formação em turismo</div>
              </div>
              <div className="text-center p-6 bg-surface-100 rounded-2xl">
                <div className="text-3xl font-bold text-brand-900 mb-2">+10</div>
                <div className="text-brand-600 font-medium">Anos com clientes fiéis</div>
              </div>
              <div className="text-center p-6 bg-surface-100 rounded-2xl">
                <div className="text-3xl font-bold text-brand-900 mb-2">100%</div>
                <div className="text-brand-600 font-medium">Clientes satisfeitos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;