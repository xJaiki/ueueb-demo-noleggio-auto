import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, User, ExternalLink, Globe, Menu, X, Mail, GalleryVerticalEnd, LogIn, Pizza } from 'lucide-react';
import logo from '../../assets/logo.svg';
import AnimatedLogo from '../ui/AnimatedLogo';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveRoute = (path) => location.pathname === path;

  // Briefly disable transitions on route change (no scroll jump)
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('route-swap');
    const t = setTimeout(() => {
      root.classList.remove('route-swap');
    }, 100);
    return () => clearTimeout(t);
  }, [location.pathname]);

  // Update active section based on viewport when on root (robust to late-mounted sections)
  useEffect(() => {
    if (location.pathname !== '/') return;
    let detach = () => {};
    let stopped = false;

    const setup = () => {
      const sections = Array.from(document.querySelectorAll('section[id]'));
      if (!sections.length) {
        if (!stopped) requestAnimationFrame(setup);
        return;
      }
      const onScroll = () => {
        const mid = window.scrollY + window.innerHeight / 2;
        let current = 'home';
        for (const s of sections) {
          const rect = s.getBoundingClientRect();
          const top = window.scrollY + rect.top;
          const bottom = top + rect.height;
          if (mid >= top && mid < bottom) {
            current = s.id;
            break;
          }
        }
        setActiveSection(current);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      detach = () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      };
    };

    setup();
    return () => { stopped = true; detach(); };
  }, [location.pathname]);

  // Scroll to hash on initial load and on route/hash change (after content mounts)
  useEffect(() => {
    if (location.pathname !== '/') return;
    const id = location.hash?.replace('#', '');
    if (!id) return;
    let raf1, raf2;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          const headerOffset = window.innerWidth < 768 ? 56 : 0;
          const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      });
    });
    return () => { cancelAnimationFrame(raf1); cancelAnimationFrame(raf2); };
  }, [location.pathname, location.hash]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = window.innerWidth < 768 ? 56 : 0; // mobile header h-14
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  };

  const handleNavClick = (id) => {
    if (isMenuOpen) setIsMenuOpen(false);
    console.log('handleNavClick', { id, pathname: location.pathname });
    if (location.pathname === '/' && id !== 'login') {
      scrollToSection(id);
    } else if (id == 'login') {
      console.log('navigating to /login');
      navigate('/login');
    } else {
      navigate(`/#${id}`);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'Le nostre fette', id: 'slices', icon: Pizza },
    { name: 'Portfolio', id: 'portfolio', icon: GalleryVerticalEnd },
    { name: 'Chi siamo', id: 'about', icon: User },
    { name: 'Contattaci', id: 'contact', icon: Mail },
  ];

  const RailLink = ({ item }) => {
    const Icon = item.icon;
    const active = location.pathname === '/' ? activeSection === item.id : false;
    const handleClick = (e) => {
      if (location.pathname === '/') {
        e.preventDefault();
        scrollToSection(item.id);
        // sync URL hash without reloading
        window.history.pushState({}, '', `/#${item.id}`);
        if (isMenuOpen) setIsMenuOpen(false);
      } else if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    return (
      <Link
        to={`/#${item.id}`}
        onClick={handleClick}
        className={`rail-item ${active ? 'active' : ''}`}
        aria-current={active ? 'page' : undefined}
      >
        <span className={`indicator ${active ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-50'}`} />
        <Icon className="h-5 w-5" />
        <span className="nav-tooltip">{item.name}</span>
      </Link>
    );
  };

  return (
    <div className="min-h-screen text-foreground">
      {/* Left side rail (desktop) */}
      <aside className="hidden md:flex fixed bg-bg-soft backdrop-blur-lg left-0 top-0 h-screen w-16 md:w-20 side-rail z-40">
        <div className="flex flex-col items-center justify-between h-full w-full py-4">
          {/* Brand */}
          <Link to="/" className="rail-item pressable" aria-label="Home">
            <AnimatedLogo width="1.1" height="1.1" />
            <span className="nav-tooltip">Home</span>
          </Link>

          {/* Nav */}
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <RailLink key={item.name} item={item} />
            ))}
          </nav>

          {/* CTA scroll to contact */}
          <button onClick={() => handleNavClick('login')} className="rail-item pressable" aria-label="Area riservata">
            <LogIn className="h-5 w-5" />
            <span className="nav-tooltip">Area riservata</span>
          </button>
        </div>
      </aside>

      {/* Mobile top bar (fixed, stays on scroll) */}
      <header
        className="md:hidden fixed top-0 left-0 right-0 h-14 flex items-center justify-between px-4 z-50 backdrop-blur-lg bg-bg-soft/80 supports-[backdrop-filter]:bg-bg-soft/60 border-b border-border"
      >
        <Link to="/" className="inline-flex items-center gap-2" aria-label="Home">
          <img src={logo} alt="Logo" className="h-6 w-6" />
        </Link>
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="inline-flex items-center justify-center rounded-md p-1 text-foreground/80 hover:text-foreground hover:bg-foreground/5 pressable border-2 border-border"
          aria-label="Apri menu"
        >
          <Menu className="h-6 w-6 " />
        </button>
      </header>

      {/* Command menu (mobile & desktop) */}
      {isMenuOpen && (
        <nav className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-3 menu-container-appear">
          <button
            aria-label="Chiudi menu"
            onClick={() => setIsMenuOpen(false)}
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgb(var(--color-foreground-rgb) / 0.5) 0%, rgb(var(--color-foreground-rgb) / 0.35) 100%)', backdropFilter: 'blur(10px)' }}
          />
          <div className="menu-appear relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden" style={{ boxShadow: '0 30px 60px -20px rgba(0,0,0,0.35)' }}>
            <div className="flex items-center justify-between px-4 py-3 bg-surface">
              <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="h-5 w-5" />
                <span className="text-sm font-medium">Studio</span>
              </div>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-full p-2 text-foreground/80 hover:text-foreground hover:bg-foreground/5 pressable"
                aria-label="Chiudi"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="bg-surface/90 backdrop-blur-sm">
              <div className="grid gap-1 p-2">
                {[...navItems, { name: 'Area riservata', id: 'login', icon: LogIn }].map((item, idx) => {
                  const Icon = item.icon;
                  const active = location.pathname === '/' ? activeSection === item.id : false;
                  const delay = 30 + idx * 40;
                  const content = (
                    <div className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-foreground/90 hover:bg-foreground/5 pressable ${active ? 'bg-foreground/5' : ''}`}>
                      <Icon className="h-5 w-5" />
                      <span className="flex-1 text-sm">{item.name}</span>
                      {active && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-surface text-foreground">
                          Sei qui!
                        </span>
                      )}
                    </div>
                  );

                  const handleClick = (e) => {
                    if (location.pathname === '/') {
                      e.preventDefault();
                      scrollToSection(item.id);
                      window.history.pushState({}, '', `/#${item.id}`);
                    }
                    setIsMenuOpen(false);
                  };

                  return (
                    <Link
                      key={item.name}
                      to={`/#${item.id}`}
                      style={{ animationDelay: `${delay}ms` }}
                      className="menu-item"
                      onClick={handleClick}
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Main content area with rail offset */}
      <main className="w-full md:pl-20 pt-14 md:pt-0">
        {children}
      </main>
    </div>
  );
};

export default Layout;