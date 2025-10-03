import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
  return (
    <Link 
      to={`/flotta/${car.id}`}
      className="group block w-full bg-white p-4 border-8 border-white shadow-lg rounded-md transition-transform duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:rotate-2 text-left"
    >
      <div className="aspect-w-4 aspect-h-3 mb-4 overflow-hidden rounded-sm">
        <img 
          src={car.coverImage}
          alt={`Immagine di ${car.name}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="text-center">
        <h3 className="font-script text-2xl text-foreground">{car.name}</h3>
        <p className="font-sans text-sm text-foreground/70 mt-1">{car.year}</p>
      </div>
    </Link>
  );
};

export default CarCard;