import React, { useState } from 'react';
import { Globe, Search, DraftingCompass, Calendar } from 'lucide-react';

// 1. Dati per le fette con percorsi SVG corretti e posizioni per le icone
const slicesData = [
  {
    id: 'vetrina',
    title: 'Fetta Vetrina',
    subtitle: 'La tua presenza online, impeccabile.',
    description: 'Realizziamo il tuo sito web vetrina: moderno, veloce e perfetto su ogni dispositivo. Il modo migliore per presentare la tua attività e farti trovare da nuovi clienti.',
    icon: Globe,
    color: '#DD857B', // red-500
    path: 'M 100,100 L 100,0 A 100,100 0 0,1 200,100 Z', // Spicchio in alto a destra
    iconPosition: { top: '25%', left: '75%' },
  },
  {
    id: 'seo',
    title: 'Fetta Visibilità',
    subtitle: 'Scala le classifiche di Google.',
    description: 'Ottimizziamo il tuo sito e la tua presenza locale per farti apparire tra i primi risultati quando i clienti cercano i tuoi prodotti o servizi. Se non ti trovano, scelgono un altro.',
    icon: Search,
    color: '#DD857B', // yellow-500
    path: 'M 100,100 L 0,100 A 100,100 0 0,1 100,0 Z', // Spicchio in alto a sinistra
    iconPosition: { top: '25%', left: '25%' },
  },
  {
    id: 'gestionale',
    title: 'Fetta Gestionale',
    subtitle: 'Semplifica il tuo lavoro quotidiano.',
    description: 'Hai un ristorante, un salone o un B&B? Creiamo soluzioni su misura per gestire prenotazioni, appuntamenti e ordini, facendoti risparmiare tempo e riducendo lo stress.',
    icon: Calendar,
    color: '#DD857B', // blue-500
    path: 'M 100,100 L 100,200 A 100,100 0 0,1 0,100 Z', // Spicchio in basso a sinistra
    iconPosition: { top: '75%', left: '25%' },
  },
  {
    id: 'custom',
    title: 'Fetta Custom',
    subtitle: 'Soluzioni su misura per te.',
    description: "Hai un'idea specifica o un problema unico? Sviluppiamo software e applicazioni personalizzate che si adattano perfettamente alle tue esigenze e al tuo modo di lavorare.",
    icon: DraftingCompass,
    color: '#DD857B', // green-500
    path: 'M 100,100 L 200,100 A 100,100 0 0,1 100,200 Z', // Spicchio in basso a destra
    iconPosition: { top: '75%', left: '75%' },
  },
];

const Slices = () => {
  const [activeSliceId, setActiveSliceId] = useState(null);
  const [hoveredSliceId, setHoveredSliceId] = useState(null);

  const activeSlice = slicesData.find(s => s.id === activeSliceId);

  const handleSliceClick = (id) => {
    // If already active, deactivate it
    if (id === activeSliceId) {
      setActiveSliceId(null);
      return;
    }
    
    setActiveSliceId(id);
  };
  
  const handleSliceHover = (id) => {
    setHoveredSliceId(id);
  };

  return (
    <section className="min-h-screen flex flex-col bg-light text-dark font-sans py-16 md:py-20 px-6 md:px-8">
      <div className="container mx-auto">
        {/* Intestazione */}
        <div className=" mb-12">
          <p className="font-mono text-primary mb-2 text-sm md:text-base">Il Nostro Menù</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
            Il Digitale, una Fetta alla Volta
          </h1>
          <p className="text-dark/70 mt-6 mx-auto">
            Seleziona una fetta per scoprire i nostri servizi digitali
          </p>
        </div>

        {/* Layout a due colonne */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Colonna Sinistra: Pizza SVG Interattiva */}
          <div className="relative w-full max-w-[320px] md:max-w-[400px] mx-auto">
            <div className="w-full aspect-square">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Pizza base */}
                <circle cx="100" cy="100" r="98" fill="#FFF" stroke="#DDD" strokeWidth="1" />
                
                {/* Pizza slices */}
                <g>
                  {slicesData.map((slice) => {
                    const isActive = activeSliceId === slice.id;
                    const isHovered = hoveredSliceId === slice.id;
                    
                    return (
                      <path
                        key={slice.id}
                        d={slice.path}
                        fill={isActive || isHovered ? slice.color + '33' : 'var(--color-surface-2)'}
                        stroke={isActive ? slice.color : '#DDD'}
                        strokeWidth={isActive ? "0" : "1"}
                        className="cursor-pointer transition-colors duration-200"
                        onClick={() => handleSliceClick(slice.id)}
                        onMouseEnter={() => handleSliceHover(slice.id)}
                        onMouseLeave={() => handleSliceHover(null)}
                      />
                    );
                  })}
                </g>

                {/* Icons */}
                {slicesData.map((slice) => {
                  const Icon = slice.icon;
                  const isActive = activeSliceId === slice.id;
                  
                  return (
                    <g
                      key={`icon-${slice.id}`}
                      className="cursor-pointer"
                      onClick={() => handleSliceClick(slice.id)}
                    >
                      <circle
                        cx={slice.iconPosition.left.replace('%', '') * 2}
                        cy={slice.iconPosition.top.replace('%', '') * 2}
                        r="12"
                        fill="#fff"
                        stroke={isActive ? slice.color : '#ddd'}
                        strokeWidth="1"
                      />
                      <foreignObject
                        x={slice.iconPosition.left.replace('%', '') * 2 - 8}
                        y={slice.iconPosition.top.replace('%', '') * 2 - 8}
                        width="16"
                        height="16"
                      >
                        <Icon 
                          size={16} 
                          color={isActive ? slice.color : '#666'} 
                          strokeWidth={2}
                        />
                      </foreignObject>
                    </g>
                  );
                })}
                
                {/* Hint centrale */}
                <circle
                  cx="100"
                  cy="100"
                  r="25"
                  fill={activeSliceId ? "transparent" : "#fff"}
                  stroke={activeSliceId ? "transparent" : "#eee"}
                  strokeWidth="1"
                  className="transition-opacity duration-300"
                  style={{ opacity: activeSliceId ? 0 : 1 }}
                />
                {!activeSliceId && (
                  <text
                    x="100"
                    y="103"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#666"
                    fontFamily="sans-serif"
                  >
                    Servizi
                  </text>
                )}
              </svg>
            </div>
          </div>
          
          {/* Colonna Destra: Dettagli */}
          <div className="min-h-[200px] flex items-center">
            {activeSlice ? (
              <div 
                className="p-6 border-l-2 w-full text-left"
                style={{ borderColor: activeSlice.color }}
              >
                <h2 
                  className="text-2xl md:text-3xl font-bold mb-3"
                  style={{ color: activeSlice.color }}
                >
                  {activeSlice.title}
                </h2>
                <h3 className="text-lg font-medium text-dark/90 mb-3">
                  {activeSlice.subtitle}
                </h3>
                <p className="text-dark/80 mb-6 max-w-lg">
                  {activeSlice.description}
                </p>
                {/* <div className="flex gap-4">
                  <button 
                    className="px-5 py-2 rounded-md text-white font-medium transition-colors duration-200" 
                    style={{ backgroundColor: activeSlice.color }}
                  >
                    Scopri di più
                  </button>
                  <button 
                    className="px-5 py-2 rounded-md text-dark/70 font-medium hover:text-dark transition-colors duration-200"
                    onClick={() => handleSliceClick(activeSlice.id)}
                  >
                    Chiudi
                  </button>
                </div> */}
              </div>
            ) : (
              <div className="w-full">
                <div className="text-center max-w-md mx-auto">
                  <h2 className="text-xl font-semibold text-dark/80 mb-2">I nostri servizi</h2>
                  <p className="text-dark/60 mb-4">
                    Seleziona una fetta per scoprire cosa possiamo fare per te
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {slicesData.map(slice => (
                      <button
                        key={`btn-${slice.id}`}
                        className="px-3 py-1 text-sm rounded-md transition-colors duration-200 hover:bg-gray-100"
                        style={{ color: slice.color }}
                        onClick={() => handleSliceClick(slice.id)}
                      >
                        {slice.title.replace('Fetta ', '')}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slices;