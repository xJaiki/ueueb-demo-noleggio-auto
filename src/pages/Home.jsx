import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import SectionDivider from '../components/ui/SectionDivider';

const Home = () => {
  const handleLocationClick = (e) => {
    const target = e.currentTarget;
    if (target) {
      import('canvas-confetti').then((module) => {
        const confetti = module.default;
        const rect = target.getBoundingClientRect();
        const x = (rect.left + rect.right) / 2 / window.innerWidth;
        const y = (rect.top + rect.bottom) / 2 / window.innerHeight;
        confetti({
          particleCount: 10,
          spread: 300,
          startVelocity: 20,
          origin: { x, y },
          colors: ['#0085bd'],
          shapes: ['circle', 'square'],
        });
      });
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = window.innerWidth < 768 ? 56 : 0; // mobile header h-14
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-[100svh] md:min-h-screen flex flex-col justify-start md:justify-center bg-light text-dark font-sans"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Typographic content */}
          <div className="relative pt-4 md:pt-12 pb-12">
            <p className="font-mono mb-2 ml-4 md:ml-0 text-sm md:text-base text-primary">Web & Software Agency</p>

            {/* Meta chips (all breakpoints) */}
            <div className="ml-4 md:ml-0 mb-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-dark/20 bg-white/70 backdrop-blur px-3 py-1 text-[11px] text-dark/70 shadow-sm">
                Dal <span className="text-primary">2023</span>
              </span>
              <span className="rounded-full border border-dark/20 bg-white/70 backdrop-blur px-3 py-1 text-[11px] text-dark/70 shadow-sm">
                <span className="text-primary">Creative</span> Digital Solutions
              </span>
              <button
                type="button"
                onClick={handleLocationClick}
                className="rounded-full border border-dark/20 bg-white/70 backdrop-blur px-3 py-1 text-[11px] text-dark/70 shadow-sm"
              >
                Based in <span className="text-primary">Napoli</span>
              </button>
            </div>

            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              <span className="block text-primary">Digital</span>
              <span className="block">Slice</span>
            </h1>
            <p className="text-lg md:text-xl text-dark/80 max-w-md my-8 font-medium">
              Sviluppiamo soluzioni digitali con la stessa cura di un'ottima pizza.
            </p>
            <div className="flex flex-col items-start gap-4">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="cursor-pointer group inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-full text-base md:text-lg transition-transform transform hover:scale-105 shadow-lg"
              >
                I nostri progetti
                <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1.5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="relative group inline-flex items-center text-dark font-medium text-lg cursor-pointer transition-transform transform hover:scale-105"
              >
                Contattaci 
                <span className="border-b-2 border-primary border-dashed absolute left-0 bottom-0 w-full scale-x-100 " />
                
              </button>
            </div>

            {/* Scroll cue center bottom */}
          </div>

          {/* Right column left empty for breathable layout on desktop */}
          <div className="hidden md:block" />
        </div>

            <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2">
              <ChevronDown className="w-5 h-5 animate-bounce" aria-hidden />
            </div>

        {/* Divider (narrow) */}
        <SectionDivider fullBleed={false} maxWidthClass="max-w-xl" />
      </div>
    </div>
  );
};

export default Home;