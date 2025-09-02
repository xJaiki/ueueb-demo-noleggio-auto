import React from 'react';
import ProjectCard from '../components/portfolio/ProjectCard';
import ProjectModal from '../components/portfolio/ProjectModal';
import { projects } from '../data/projects';
import SectionDivider from '../components/ui/SectionDivider';

const Portfolio = () => {
  const [open, setOpen] = React.useState(false);
  const [current, setCurrent] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const filtered = projects;

  // Detect mobile breakpoint (Tailwind sm: 640px)
  React.useEffect(() => {
    const mql = window.matchMedia('(max-width: 639px)');
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  const onOpen = (p) => { setCurrent(p); setOpen(true); };
  const onClose = () => { setOpen(false); setCurrent(null); };

  const limit = isMobile ? 4 : 8;
  const visible = expanded ? filtered : filtered.slice(0, limit);
  const canToggle = filtered.length > limit;

  return (
    <section className="relative flex flex-col justify-start md:justify-center bg-light text-dark font-sans">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow-before w-full h-[38vh]" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="pt-16 md:pt-10 pb-6">
          <p className="font-mono mb-2 text-sm md:text-base text-primary">I nostri lavori</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
            <span className="block ">Portfolio</span>
          </h1>
          <p className="text-dark/70 max-w-xl mt-4">Selezione curata dei nostri progetti. Focus su performance, UX e integrazioni su misura.</p>
        </div>

        {/* Grid (fixed spans per breakpoint: 1/2/3/4 colonne) */}
        <div className="grid grid-cols-12 items-stretch content-start justify-items-stretch gap-8">
          {visible.map((p) => (
            <div key={p.id} className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 h-full">
              <ProjectCard project={p} onOpen={onOpen} />
            </div>
          ))}
        </div>

        {/* Toggle */}
        {canToggle && (
          <div className="flex items-center justify-center pt-8 pb-2">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="pressable inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white/70 px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-white"
            >
              {expanded ? 'Mostra meno' : 'Mostra tutto'}
            </button>
          </div>
        )}

        {/* Divider (narrow) */}
        <SectionDivider fullBleed={false} maxWidthClass="max-w-xl" />
      </div>

      <ProjectModal open={open} project={current} onClose={onClose} />
    </section>
  );
};

export default Portfolio;