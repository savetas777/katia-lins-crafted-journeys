import { MapPin, Plane } from 'lucide-react';
import travelDestinations from '@/assets/travel-destinations.jpg';

const DestinationsGrid = () => {
  const internationalDestinations = [
    "Orlando",
    "Aruba", 
    "Turquia",
    "Punta Cana"
  ];

  const nationalDestinations = [
    "Salvador",
    "Praia do Forte",
    "Maceió",
    "Maragogi",
    "Porto de Galinhas",
    "Natal",
    "Porto Seguro",
    "Curitiba",
    "Foz do Iguaçu"
  ];

  return (
    <section id="destinos" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-900 mb-6">
            Destinos que conheci
          </h2>
          <p className="text-xl text-ink-600 max-w-2xl mx-auto">
            Experiências vividas que garantem curadoria autêntica para sua viagem
          </p>
        </div>

        {/* Hero image */}
        <div className="mb-16 relative">
          <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-elegant">
            <img
              src={travelDestinations}
              alt="Destinos de viagem - experiências únicas pelo mundo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Experiências pelo mundo</h3>
              <p className="text-lg opacity-90">Conhecimento que se transforma em curadoria única</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* International */}
          <div className="bg-white p-8 rounded-2xl shadow-soft">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-900">Internacionais</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {internationalDestinations.map((destination, index) => (
                <div 
                  key={index}
                  className="reveal p-4 bg-surface-100 rounded-xl hover:bg-brand-600 hover:text-white transition-all duration-300 cursor-pointer group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-600 group-hover:text-white" />
                    <span className="font-medium">{destination}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* National */}
          <div className="bg-white p-8 rounded-2xl shadow-soft">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-900">Nacionais</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {nationalDestinations.map((destination, index) => (
                <div 
                  key={index}
                  className="reveal p-4 bg-surface-100 rounded-xl hover:bg-brand-600 hover:text-white transition-all duration-300 cursor-pointer group"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-600 group-hover:text-white" />
                    <span className="font-medium">{destination}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsGrid;