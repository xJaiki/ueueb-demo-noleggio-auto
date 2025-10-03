import React from 'react';
import SectionDivider from '../components/ui/SectionDivider';

const ChiSiamo = () => {
  return (
    <div className="bg-background text-foreground font-sans py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">La Nostra Passione</h1>
        <div className="text-lg leading-relaxed space-y-6">
          <p>
            The Heritage Collection non è semplicemente un noleggio di auto. È il frutto di una passione profonda per i motori che hanno fatto la storia, per il design che non conosce tempo e per le emozioni che solo un'auto d'epoca sa regalare.
          </p>
          <p>
            Siamo nati dal desiderio di condividere questi gioielli meccanici con chi, come noi, crede che un'auto non sia solo un mezzo di trasporto, ma un pezzo di storia, un'opera d'arte in movimento. Ogni veicolo della nostra collezione è stato scelto e restaurato con amore e attenzione maniacale per i dettagli, per garantire non solo bellezza, ma anche affidabilità e sicurezza.
          </p>
          <p>
            Il nostro obiettivo è rendere il vostro evento – che sia un matrimonio, un tour panoramico o uno shooting fotografico – un'esperienza unica, aggiungendo quel tocco di classe e nostalgia che solo il fascino del vintage sa dare.
          </p>
        </div>
        <SectionDivider />
        <div className="mt-12">
          <p className="font-script text-4xl text-accent">
            Il team di The Heritage Collection
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChiSiamo;
