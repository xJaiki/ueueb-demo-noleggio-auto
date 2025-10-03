import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car, Sparkles, Users, Mail, ConciergeBellIcon } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const onHomepage = location.pathname === '/';

  const navItems = [
    { name: 'Home', id: 'home', icon: Sparkles },
    { name: 'La Nostra Flotta', id: 'flotta', icon: Car },
    { name: 'Servizi', id: 'servizi', icon: ConciergeBellIcon },
    { name: 'Chi Siamo', id: 'chi-siamo', icon: Users },
    { name: 'Contatti', id: 'contatti', icon: Mail },
  ];

  // Smooth scroll for homepage
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  // Scroll-spy effect only on homepage
  useEffect(() => {
    if (!onHomepage) return;

    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onHomepage, navItems]);

  // Component for a single navigation item
  const NavItem = ({ item, onClick }) => {
    const Icon = item.icon;
    const isActive = onHomepage && activeSection === item.id;

    // If we are on the homepage, use smooth-scrolling links
    if (onHomepage) {
      return (
        <a
          href={`#${item.id}`}
          onClick={(e) => {
            e.preventDefault();
            onClick(item.id);
          }}
          className={`flex items-center w-full p-4 rounded-lg text-lg transition-colors duration-200 
            ${isActive ? 'bg-primary/10 text-primary font-bold' : 'text-foreground/70 hover:bg-primary/5'}`}
        >
          <Icon className="h-6 w-6 mr-4" />
          <span>{item.name}</span>
        </a>
      );
    }

    // If we are on another page, use React Router Links to go back to the homepage sections
    return (
      <Link
        to={`/#${item.id}`}
        onClick={onClick}
        className="flex items-center w-full p-4 rounded-lg text-lg text-foreground/70 hover:bg-primary/5 transition-colors duration-200"
      >
        <Icon className="h-6 w-6 mr-4" />
        <span>{item.name}</span>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-background/80 backdrop-blur-lg border-r border-foreground/10 z-40 p-4">
        <div className="flex items-center justify-center mb-10">
          <Link to="/" onClick={() => onHomepage && scrollToSection('home')} className="font-script text-4xl text-foreground">
The Heritage Collection
          </Link>
        </div>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavItem key={item.id} item={item} onClick={onHomepage ? scrollToSection : () => setIsMenuOpen(false)} />
          ))}
        </nav>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 z-50 bg-background/80 backdrop-blur-lg border-b border-foreground/10">
        <Link to="/" onClick={() => onHomepage && scrollToSection('home')} className="font-script text-3xl text-foreground">
The Heritage Collection
        </Link>
        <button type="button" onClick={() => setIsMenuOpen(true)} className="p-2 text-foreground" aria-label="Apri menu">
          <Menu className="h-7 w-7" />
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="fixed inset-0 z-50 flex md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="relative w-4/5 max-w-sm h-full bg-background shadow-2xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <span className="font-script text-3xl text-foreground">The Heritage Collection</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2"><X className="h-7 w-7 text-foreground"/></button>
            </div>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavItem key={item.id} item={item} onClick={onHomepage ? scrollToSection : () => setIsMenuOpen(false)} />
              ))}
            </div>
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className="w-full md:pl-64">
        {children}
      </main>
    </div>
  );
};

export default Layout;
