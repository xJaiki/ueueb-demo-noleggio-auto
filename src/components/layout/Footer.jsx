import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'La Nostra Flotta', id: 'flotta' },
    { name: 'Servizi', id: 'servizi' },
    { name: 'Chi Siamo', id: 'chi-siamo' },
    { name: 'Contatti', id: 'contatti' },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-primary/5 text-foreground font-sans">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-script text-3xl mb-2">The Heritage Collection</h3>
            <p className="text-sm text-foreground/60">
              Noleggio auto d'epoca per eventi indimenticabili.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h4 className="font-bold tracking-wider uppercase mb-4">Menu</h4>
            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-1">
            <h4 className="font-bold tracking-wider uppercase mb-4">Seguici</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" aria-label="Instagram" className="text-foreground/80 hover:text-primary transition-colors"><Instagram /></a>
              <a href="#" aria-label="Facebook" className="text-foreground/80 hover:text-primary transition-colors"><Facebook /></a>
              <a href="#" aria-label="Twitter" className="text-foreground/80 hover:text-primary transition-colors"><Twitter /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-foreground/10 pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} The Heritage Collection. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
