import { MapPin, Plane } from 'lucide-react';

// Galeria com label + URL (pode editar à vontade)
const gallery: { label: string; url: string }[] = [
  { label: "Orlando", url: "https://i.postimg.cc/HnpLj4nC/pexels-thatguycraig000-3411135.jpg" },
  { label: "Aruba", url: "https://i.postimg.cc/vZ1Z1mYD/pexels-talita-kriunas-2147861135-29798710.jpg" },
  { label: "Turquia", url: "https://i.postimg.cc/bJRyXDTV/pexels-smuldur-2048865.jpg" },
  { label: "Punta Cana", url: "https://i.postimg.cc/x8x9CwBK/pexels-leorossatti-2646066.jpg" },
  { label: "Salvador", url: "https://i.postimg.cc/QxCXPMWS/pexels-gabriella-ally-3664539-13733832.jpg" },
  { label: "Maceió", url: "https://i.postimg.cc/W3sV7pvG/pexels-leon-azevedo-59599161-19074550.jpg" },
  { label: "Maragogi", url: "https://i.postimg.cc/BZY3xGwF/pexels-ninosouza-18149722.jpg" },
  { label: "Porto de Galinhas", url: "https://i.postimg.cc/wBpY6x3C/pexels-marceloverfe-30016379.jpg" },
];

const DestinationsGrid = () => {
  const internationalDestinations = [
    "Orlando",
    "Aruba",
    "Turquia",
    "Punta Cana",
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
    "Foz do Iguaçu",
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

        {/* Galeria de destinos (múltiplas imagens via URL) */}
        <div className="mb-16">
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-brand-900">Experiências pelo mundo</h3>
              <p className="text-ink-600">Conhecimento que se transforma em curadoria única</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((item, i) => (
              <figure
                key={i}
                className="group relative overflow-hidden rounded-2xl shadow-elegant aspect-[4/3]"
              >
                <img
                  src={item.url}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/fallback.jpg'; }}
                />
                <figcaption className="pointer-events-none absolute inset-0 flex items-end p-3 bg-gradient-to-t from-black/50 via-black/10 to-transparent">
                  <span className="text-white text-sm font-medium drop-shadow">{item.label}</span>
                </figcaption>
              </figure>
            ))}
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
