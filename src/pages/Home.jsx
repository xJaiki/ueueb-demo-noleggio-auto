import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Clock, Smartphone, Zap, Heart } from 'lucide-react';
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
    <div className="bg-light text-dark font-sans">
      {/* Hero Section - Full Screen */}
      <div 
        className="min-h-screen flex items-center relative"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Typographic content */}
            <div className="relative py-12">
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
                  onClick={() => scrollToSection('process')}
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
            </div>

            {/* Right column left empty for breathable layout on desktop */}
            <div className="hidden md:block" />
          </div>
          
          {/* Scroll indicator at bottom */}
          <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2">
            <button 
              onClick={() => scrollToSection('process')} 
              className="flex flex-col items-center text-dark/70 hover:text-primary transition-colors focus:outline-none"
              aria-label="Scorri verso il basso"
            >
              <span className="text-xs mb-2">Scopri di più</span>
              <ChevronDown className="w-5 h-5 animate-bounce" aria-hidden />
            </button>
          </div>
        </div>
      </div>
      
      {/* Sezione Processo/Cosa Facciamo */}
      <section id="process" className="py-20 px-6">
        <div className="container mx-auto">
          <div className=" mx-auto mb-12">
            <p className="font-mono text-primary mb-2 text-sm md:text-base">Il nostro approccio</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
              Soluzioni semplici per problemi complessi
            </h2>
            <p className="text-dark/70 mt-4  mx-auto">
              Trasformiamo le tue idee in soluzioni digitali concrete che fanno crescere la tua attività, 
              con un processo semplice e trasparente.
            </p>
          </div>
          
          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-mono font-bold text-primary text-xl">
                1
              </div>
              <div className="glass-surface rounded-2xl p-6 pt-8 h-full border border-dark/5 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Ascoltiamo</h3>
                <p className="text-dark/70">
                  Partiamo sempre da un'analisi approfondita delle tue esigenze. 
                  Vogliamo capire cosa ti serve davvero, non venderti ciò che non ti serve.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-mono font-bold text-primary text-xl">
                2
              </div>
              <div className="glass-surface rounded-2xl p-6 pt-8 h-full border border-dark/5 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Progettiamo</h3>
                <p className="text-dark/70">
                  Definiamo insieme una strategia chiara e realizziamo prototipi che ti permettono 
                  di visualizzare la soluzione prima ancora di svilupparla.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-mono font-bold text-primary text-xl">
                3
              </div>
              <div className="glass-surface rounded-2xl p-6 pt-8 h-full border border-dark/5 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Realizziamo</h3>
                <p className="text-dark/70">
                  Sviluppiamo soluzioni su misura con tecnologie moderne, garantendo prodotti veloci, 
                  sicuri e facili da usare per te e i tuoi clienti.
                </p>
              </div>
            </div>
          </div>
          
          {/* Values/Benefits */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold">Tempi Rapidi</h4>
                <p className="text-dark/70 text-sm">Consegne puntuali</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-3">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold">Responsive</h4>
                <p className="text-dark/70 text-sm">Perfetto su ogni dispositivo</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold">Performanti</h4>
                <p className="text-dark/70 text-sm">Siti ultra-veloci</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-3">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold">Supporto</h4>
                <p className="text-dark/70 text-sm">Sempre al tuo fianco</p>
              </div>
            </div>
          </div>
          
          {/* CTA button */}
          <div className="text-center mt-12">
            <Link 
              to="/slices"
              className="group inline-flex items-center px-6 py-3 bg-white text-dark font-bold rounded-full text-base shadow-sm border border-dark/10 hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Scopri i nostri servizi
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;