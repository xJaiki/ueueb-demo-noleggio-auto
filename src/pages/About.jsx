import React from 'react';
import { GraduationCap, Star, Rocket, Lightbulb, Code, Heart, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-light text-dark font-sans py-16 md:py-20 px-6 md:px-8">
      <div className="container mx-auto">

        {/* Intestazione */}
        <div className=" mb-12">
          <p className="font-mono text-primary mb-2 text-sm md:text-base">Chi Siamo</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
            Due menti, un solo obiettivo.
          </h1>
          <p className="text-dark/70 mt-6  mx-auto">
            In Digital Slices, la strategia incontra la tecnica. Crediamo che le grandi idee abbiano bisogno di un'esecuzione impeccabile per brillare.
          </p>
        </div>

        {/* Layout a due card per i profili */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto mb-16">
          
          {/* Card 1: Lo Stratega */}
          <div className="group relative overflow-hidden rounded-3xl glass-surface border border-dark/5 transition-shadow text-left shadow-sm hover:shadow-lg flex flex-col h-auto">
            {/* Header con immagine */}
            <div className="relative w-full aspect-[3/2] overflow-hidden shrink-0 bg-amber-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <Lightbulb className="w-20 h-20 text-amber-600/30" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.05] via-transparent to-transparent opacity-90" />
              <div className="absolute left-4 bottom-4">
                <span className="text-xs px-2 py-0.5 rounded-full border border-amber-600/30 bg-amber-50/70 text-amber-800/80 shadow-sm">
                  Strategia
                </span>
              </div>
            </div>
            
            {/* Contenuto */}
            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-heading">[Nome del Partner]</h2>
              <p className="font-mono text-primary text-xs mt-1 mb-3">Strategia & Comunicazione</p>
              <p className="text-dark/80 text-sm">
                È la mente strategica. Trasforma i tuoi obiettivi in un messaggio chiaro e un'immagine vincente, assicurando che ogni progetto non solo funzioni, ma parli direttamente al cuore dei tuoi clienti.
              </p>
              <div className="mt-auto pt-4">
                <p className="text-sm text-dark/60 italic">
                  "La strategia senza esecuzione è solo una bella idea."
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Il Tecnico */}
          <div className="group relative overflow-hidden rounded-3xl glass-surface border border-dark/5 transition-shadow text-left shadow-sm hover:shadow-lg flex flex-col h-auto">
            {/* Header con immagine */}
            <div className="relative w-full aspect-[3/2] overflow-hidden shrink-0 bg-sky-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <Code className="w-20 h-20 text-sky-600/30" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.05] via-transparent to-transparent opacity-90" />
              <div className="absolute left-4 bottom-4">
                <span className="text-xs px-2 py-0.5 rounded-full border border-sky-600/30 bg-sky-50/70 text-sky-800/80 shadow-sm">
                  Sviluppo
                </span>
              </div>
            </div>
            
            {/* Contenuto */}
            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-heading">Mario</h2>
              <p className="font-mono text-primary text-xs mt-1 mb-3">Sviluppo & Design</p>
              <p className="text-dark/80 text-sm">
                È l'artigiano digitale. Costruisce soluzioni rapide, efficienti e intuitive, con un'attenzione maniacale al design e all'esperienza utente. La sua missione è creare strumenti semplici che portano a risultati concreti.
              </p>
              <div className="mt-auto pt-4">
                <p className="text-sm text-dark/60 italic">
                  "Il codice pulito non è solo elegante, è rispetto per chi verrà dopo di te."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione Valori */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">I nostri valori</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Valore 1 */}
            <div className="group relative overflow-hidden rounded-2xl glass-surface border border-dark/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-16 h-16 -m-8 bg-primary/5 rounded-full"></div>
              <div className="p-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Efficienza</h3>
                <p className="text-dark/70 text-sm">Soluzioni rapide che non sacrificano la qualità. Il tempo è prezioso, specialmente per le piccole imprese.</p>
              </div>
            </div>
            
            {/* Valore 2 */}
            <div className="group relative overflow-hidden rounded-2xl glass-surface border border-dark/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-16 h-16 -m-8 bg-amber-50 rounded-full"></div>
              <div className="p-5">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <Lightbulb className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-xl mb-2">Chiarezza</h3>
                <p className="text-dark/70 text-sm">Niente gergo tecnico o soluzioni complicate. Parliamo la tua lingua e creiamo strumenti che semplificano.</p>
              </div>
            </div>
            
            {/* Valore 3 */}
            <div className="group relative overflow-hidden rounded-2xl glass-surface border border-dark/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-16 h-16 -m-8 bg-sky-50 rounded-full"></div>
              <div className="p-5">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-4 group-hover:bg-sky-200 transition-colors">
                  <Code className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="font-bold text-xl mb-2">Qualità</h3>
                <p className="text-dark/70 text-sm">Costruiamo con attenzione ai dettagli. Ogni pixel, ogni riga di codice, ogni parola è pensata con cura.</p>
              </div>
            </div>
            
            {/* Valore 4 */}
            <div className="group relative overflow-hidden rounded-2xl glass-surface border border-dark/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-16 h-16 -m-8 bg-rose-50 rounded-full"></div>
              <div className="p-5">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4 group-hover:bg-rose-200 transition-colors">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="font-bold text-xl mb-2">Passione</h3>
                <p className="text-dark/70 text-sm">Amiamo quello che facciamo e ci teniamo al tuo successo. Non siamo semplici fornitori, siamo partner.</p>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </section>
  );
};

export default About;