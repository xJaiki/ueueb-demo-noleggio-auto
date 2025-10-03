import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// heroimg from src/assets/hero.jpg
import heroImg from '../assets/hero.jpg';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex flex-col justify-center items-center text-center text-white p-6 relative"
        style={{ 
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImg}) center/cover no-repeat`,
        }}
      >
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-shadow-lg">
            The Heritage Collection: Emozioni d'Altri Tempi
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 font-sans max-w-2xl mx-auto text-shadow-md">
            Noleggia un'auto d'epoca per il tuo evento speciale e trasforma un giorno importante in un ricordo indimenticabile.
          </p>
          <div className="mt-8">
            <a 
              href="/#flotta"
              className="group inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full text-lg transition-transform transform hover:scale-105 shadow-xl"
            >
              Scopri la Nostra Flotta
              <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
