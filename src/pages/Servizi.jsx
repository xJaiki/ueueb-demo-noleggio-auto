import React from 'react';
import { Heart, Camera, Briefcase, Map } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Matrimoni da Sogno',
    description: 'Arriva all\'altare con un tocco di classe senza tempo. La nostra auto d\'epoca sarà la cornice perfetta per il tuo giorno più bello, creando ricordi e fotografie indimenticabili.'
  },
  {
    icon: Map,
    title: 'Tour Panoramici',
    description: 'Scopri paesaggi mozzafiato al volante di un\'icona di stile. Organizziamo tour su misura per farti vivere un\'esperienza di guida unica, tra colline, laghi e borghi storici.'
  },
  {
    icon: Camera,
    title: 'Shooting Fotografici & Video',
    description: 'Che sia per moda, pubblicità o un progetto personale, un\'auto d\'epoca aggiunge un carattere inconfondibile al tuo set. Le nostre auto sono disponibili per servizi fotografici e produzioni video.'
  },
  {
    icon: Briefcase,
    title: 'Eventi Aziendali & Cerimonie',
    description: 'Distinguiti con un dettaglio di stile. Utilizza le nostre auto per inaugurazioni, eventi promozionali o per accogliere un ospite speciale. L\'eleganza è un ottimo biglietto da visita.'
  }
];

const Servizi = () => {
  return (
    <div className="bg-primary/5 text-foreground font-sans py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Per il Tuo Evento</h1>
          <p className="text-lg leading-relaxed">
            Offriamo molto più di un semplice noleggio. Offriamo un'esperienza su misura, pensata per rendere ogni occasione davvero speciale. Scopri come possiamo aiutarti.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-background p-8 rounded-lg shadow-lg border border-black/5">
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-serif font-bold">{service.title}</h2>
                </div>
                <p className="text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Servizi;