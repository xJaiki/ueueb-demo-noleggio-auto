import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/cars';
import NotFound from './NotFound';
import { ArrowLeft } from 'lucide-react';

const DettaglioAuto = () => {
  const { carId } = useParams();
  const car = cars.find(c => c.id === carId);

  if (!car) {
    return <NotFound />; 
  }

  return (
    <div className="bg-background font-sans min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft size={18} />
          Torna alla Flotta
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="col-span-1">
            <img src={car.coverImage} alt={car.name} className="w-full h-auto object-cover rounded-lg shadow-lg"/>
          </div>

          <div className="col-span-1">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary">{car.name}</h1>
            <p className="text-xl text-foreground/70 mb-6">{car.year}</p>
            
            <div className="prose prose-lg max-w-none text-foreground/90 font-sans">
              <p>{car.shortDescription}</p>
              <div dangerouslySetInnerHTML={{ __html: car.content.replace(/\n/g, '<br/>') }} />
            </div>

            <div className="mt-8 border-t border-foreground/10 pt-6">
              <h4 className="font-bold text-xl mb-4">Dettagli Tecnici</h4>
              <ul className="space-y-2 font-sans">
                <li><strong>Motore:</strong> {car.specs.engine}</li>
                <li><strong>Potenza:</strong> {car.specs.power}</li>
                <li><strong>Posti:</strong> {car.specs.seats}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DettaglioAuto;
