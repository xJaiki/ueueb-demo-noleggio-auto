import React from 'react';
import { cars } from '../data/cars';
import CarCard from '../components/portfolio/CarCard';

const Flotta = () => {
  return (
    <section className="bg-background font-sans py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground">La Nostra Flotta</h1>
          <p className="text-lg leading-relaxed text-foreground/80">
            Ogni auto ha una storia da raccontare. Scegli quella che accompagnerà la tua. La nostra collezione è a tua completa disposizione per essere scoperta.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 max-w-7xl mx-auto">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flotta;
