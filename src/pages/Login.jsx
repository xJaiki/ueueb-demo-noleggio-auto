import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, AlertCircle, PartyPopper, Keyboard, Github, Pizza } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPwd, setShowPwd] = React.useState(false);
  const [capsOn, setCapsOn] = React.useState(false);
  const [msg, setMsg] = React.useState({ type: 'idle', text: '' });

  // Konami code: up up down down left right left right b a
  const konami = React.useRef([]);
  React.useEffect(() => {
    const target = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    const onKey = (e) => {
      konami.current.push(e.key);
      if (konami.current.length > target.length) konami.current.shift();
      if (target.every((k, i) => konami.current[i] === k)) {
        setMsg({ type: 'success', text: 'Segreto sbloccato: niente login, solo pizza! 🍕' });
        import('canvas-confetti').then((m) => m.default({ particleCount: 50, spread: 80, origin: { y: 0.2 } }));
        konami.current = [];
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    // Fun easter egg for specific combo
    if (email.toLowerCase().includes('admin') || password === 'sliceoflife') {
      import('canvas-confetti').then((m) => m.default({ particleCount: 40, spread: 70 }));
      setMsg({ type: 'error', text: 'Troppo gustoso per essere vero: accesso negato. 😅' });
      return;
    }
    setMsg({ type: 'error', text: 'Credenziali non valide. (Pagina fake 😉)' });
  };

  const onPwdKey = (e) => {
    setCapsOn(e.getModifierState && e.getModifierState('CapsLock'));
  };

  const fakeGithub = () => {
    setMsg({ type: 'error', text: 'Login GitHub non disponibile. Forse un gatto sul cavo. 🐱' });
  };

  const magicLink = (e) => {
    e.preventDefault();
    setMsg({ type: 'info', text: 'Magic link inviato! (Scherzo, controlla la pizza-box 📦)' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-light text-dark font-sans">
      <div className="container max-w-lg mx-auto px-6">
        <div className="glass-surface rounded-3xl border border-dark/10 overflow-hidden shadow-sm">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Area riservata</h1>
                <p className="text-sm text-foreground/70">Solo per veri pizzaioli. Spoiler: non entrerai mai.</p>
              </div>
            </div>

            <form onSubmit={submit} className="space-y-4">
              <div className="relative">
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50"><Mail className="w-4 h-4" /></div>
                <input
                  id="email"
                  type="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full border border-white/60 bg-white/80 pl-10 pr-3 py-3 outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="email@pizza.dev"
                />
              </div>

              <div className="relative">
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50"><Lock className="w-4 h-4" /></div>
                <input
                  id="password"
                  type={showPwd ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyUp={onPwdKey}
                  className="w-full rounded-full border border-white/60 bg-white/80 pl-10 pr-10 py-3 outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder={showPwd ? '•••••••• (finto)' : '••••••••'}
                />
                <button type="button" onClick={() => setShowPwd((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground">
                  {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
                {capsOn && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> Bloc Maiusc attivo</p>
                )}
              </div>

              {/* Messages */}
              {msg.type !== 'idle' && (
                <div className={`rounded-2xl px-3 py-2 text-sm ${
                  msg.type === 'error' ? 'bg-rose-100 text-rose-700' : msg.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {msg.text}
                </div>
              )}

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-foreground/70">
                  <Keyboard className="w-4 h-4" />
                  <span className="hidden sm:inline">Suggerimento: prova la Konami Code</span>
                  <span className="sm:hidden">Konami Code 😉</span>
                </div>
                <a href="#magic" onClick={magicLink} className="text-primary hover:underline">Link magico</a>
              </div>

              <button
                type="submit"
                className="pressable inline-flex w-full items-center justify-center gap-2 rounded-full border border-dark/5 text-white px-5 py-3 text-sm font-semibold"
                style={{ background: 'var(--gradient-brand)' }}
              >
                <Pizza className="w-4 h-4" /> Entra (forse)
              </button>

              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-dark/10" />
                <span className="text-xs text-foreground/60">oppure</span>
                <div className="h-px flex-1 bg-dark/10" />
              </div>

              <button type="button" onClick={fakeGithub} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-dark/10 bg-white/70 px-5 py-3 text-sm font-medium hover:bg-white">
                <Github className="w-4 h-4" /> Continua con GitHub
              </button>

              <p className="text-xs text-muted-foreground text-center">Hai fame? Noi sì. Torna alla <Link to="/" className="text-primary hover:underline">Home</Link>.</p>
            </form>
          </div>

          {/* Footer fun stripe */}
          <div className="px-6 py-3 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 text-center text-[11px] text-foreground/70">
            <PartyPopper className="inline w-3.5 h-3.5 mr-1" /> Questa pagina è finta, ma l\'odore di pizza è reale.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;