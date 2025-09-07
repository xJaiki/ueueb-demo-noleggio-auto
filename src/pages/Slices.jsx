import React from 'react';
import { ArrowRight, CheckCircle2, Gauge, Workflow, Handshake, Rocket, TrendingUp } from 'lucide-react';
import SectionDivider from '../components/ui/SectionDivider';

const Slices = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  };

  return (
    <section className=" flex flex-col justify-start md:justify-center bg-light text-dark font-sans">
      <div className="container mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Left: manifesto */}
          <div className="md:col-span-6 pt-16 md:pt-12 pb-10">
            <p className="font-mono text-primary mb-3 ml-4 md:ml-0 text-sm md:text-base">Chi siamo</p>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] ml-4 md:ml-0">
              <span
                className="block"
              >
                Esperienze che crescono
              </span>
            </h1>

            <p className="text-lg md:text-xl text-dark/80 max-w-xl my-6 ml-4 md:ml-0 font-medium">
              Siamo uno studio boutique: progettiamo siti, web app e gestionali performanti, con SEO tecnico e attenzione ai dettagli.
            </p>

            {/* Principles */}
            <ul className="ml-4 md:ml-0 grid gap-3">
              {[
                { icon: CheckCircle2, text: 'Design che funziona (non solo bello)' },
                { icon: Gauge, text: 'Performance first e Core Web Vitals' },
                { icon: Workflow, text: 'Processi su misura e integrazioni' },
                { icon: Handshake, text: 'Partnership, non solo fornitori' },
              ].map((p) => (
                <li key={p.text} className="flex items-start gap-3">
                  <p.icon className="w-5 h-5 mt-0.5 text-primary" />
                  <span className="text-sm md:text-base text-dark/80">{p.text}</span>
                </li>
              ))}
            </ul>

          </div>

          {/* Right: stats + stack + quote */}
          <div className="md:col-span-6">
            {/* Stats card */}
            <div className="glass-surface rounded-3xl border border-dark/5 p-5 md:p-6 shadow-sm">
              <div className="grid grid-cols-3 divide-x divide-dark/10">
                {[
                  { icon: Rocket, label: 'Progetti', value: '30+' },
                  { icon: TrendingUp, label: 'CWV pass', value: '95%' },
                  { icon: Handshake, label: 'Clienti', value: '20+' },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center px-2 py-2">
                    <s.icon className="w-4 h-4 text-primary mb-1" />
                    <span className="text-xl font-extrabold tracking-tight">{s.value}</span>
                    <span className="text-[11px] text-dark/60">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {['React', 'Vite', 'Tailwind', 'Node', 'Postgres', 'Cloudflare'].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1 rounded-full border border-dark/10 bg-white/70 px-2.5 py-1 text-[11px] text-dark/70">
                    <span className="block w-1.5 h-1.5 rounded-full bg-primary/70" /> {t}
                  </span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-5 rounded-2xl bg-white/60 border border-dark/10 p-4 text-sm text-dark/70 italic">
                “Ogni fetta ben fatta è il risultato di ingredienti giusti e tempi perfetti. Facciamo lo stesso con il software.”
              </blockquote>
            </div>
          </div>
        </div>

        {/* Divider (narrow) */}
        <SectionDivider fullBleed={false} maxWidthClass="max-w-xl" />
      </div>
    </section>
  );
};

export default Slices;