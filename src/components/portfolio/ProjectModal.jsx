import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const ProjectModal = ({ open, project, onClose }) => {
  const dialogRef = useRef(null);
  const [idx, setIdx] = React.useState(0);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    // lock body scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => { setIdx(0); }, [project?.id]);

  if (!open || !project) return null;

  const images = [project.cover, ...(project.gallery || [])];

  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" role="dialog" aria-modal>
      {/* Overlay più soft */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.28)', backdropFilter: 'blur(6px)' }} onClick={onClose} />

      {/* Glow soffuso dietro la modale */}
      <div className="pointer-events-none absolute w-[70vmin] h-[70vmin] rounded-full opacity-40" style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(221,133,123,0.20), rgba(239,174,162,0.10), transparent 70%)' }} />

      <div
        ref={dialogRef}
        className="relative w-full max-w-4xl mx-auto glass-surface rounded-3xl overflow-hidden shadow-xl border border-dark/10 modal-zoom-in"
      >
        {/* Header più leggero */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-dark/10">
          <div>
            <h3 className="text-lg md:text-xl font-extrabold leading-tight text-heading">{project.title}</h3>
            <p className="text-xs md:text-sm text-muted-foreground">{project.subtitle}</p>
          </div>
          <button onClick={onClose} className="pressable rounded-full p-2 hover:bg-foreground/5" aria-label="Chiudi">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media con angoli dolci */}
        {!!images.length && (
          <div className="relative">
            <div className="aspect-[16/9] w-full overflow-hidden bg-surface">
              <img src={images[idx]} alt="slide" className="w-full h-full object-cover" />
            </div>
            {images.length > 1 && (
              <>
                <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground rounded-full p-2 shadow-sm border border-dark/10">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground rounded-full p-2 shadow-sm border border-dark/10">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
            {/* Dots più discrete */}
            {images.length > 1 && (
              <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5">
                {images.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === idx ? 'bg-primary' : 'bg-foreground/25'}`} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Content morbido */}
        <div className="p-5 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 text-sm leading-relaxed text-foreground/90 space-y-3">
            <ReactMarkdown>{project.content || ''}</ReactMarkdown>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-xs md:text-sm font-semibold mb-2 text-heading">Tecnologie</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full border border-dark/15 bg-white/60 text-foreground/70">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .modal-zoom-in { animation: modalIn 340ms cubic-bezier(.2,.8,.2,1) both; }
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(8px) scale(.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;
