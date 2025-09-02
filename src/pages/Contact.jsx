import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Clock, Send, Instagram, Linkedin, Dribbble } from 'lucide-react';
import SectionDivider from '../components/ui/SectionDivider';

const CONTACT = {
  email: 'hello@yourdomain.com',
  phone: '+39 320 123 4567',
  phone2: '+39 02 1234 5678',
  socials: {
    instagram: 'https://instagram.com/yourstudio',
    dribbble: 'https://dribbble.com/yourstudio',
    linkedin: 'https://www.linkedin.com/company/yourstudio',
  },
};

const Contact = () => {
  const { t } = useTranslation();

  const [form, setForm] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = React.useState(false);
  const [status, setStatus] = React.useState({ type: 'idle', message: '' });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Compila i campi obbligatori.' });
      return;
    }

    setStatus({ type: 'idle', message: '' });
    setSending(true);

    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
          }),
        });
        if (!res.ok) throw new Error('Invio non riuscito');
        setStatus({ type: 'success', message: 'Messaggio inviato! Ti rispondiamo entro 24 ore.' });
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        const subject = encodeURIComponent(form.subject || `Nuovo contatto da ${form.name}`);
        const body = encodeURIComponent(`Nome: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
        window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
        setStatus({ type: 'success', message: 'Sto aprendo il client di posta…' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Si è verificato un errore. Riprova più tardi.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-light text-dark font-sans">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow-before w-full h-[32vh]" />
      </div>

      <div className="container mx-auto px-6 py-16 md:py-20 flex-1">
        {/* Hero */}
        <div className="max-w-3xl mb-10">
          <p className="font-mono mb-2 text-sm md:text-base text-primary">Scrivici senza formalità</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
            <span className="block">Parliamo del tuo progetto</span>
          </h1>
          <p className="text-dark/70 mt-4">Due righe bastano. Se preferisci la chiamata, trovi i numeri qui a destra.</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Form */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="glass-surface rounded-3xl border border-dark/5 overflow-hidden">
              <form onSubmit={handleSubmit} noValidate className="p-5 md:p-6 lg:p-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="sr-only" htmlFor="name">Nome</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={onChange}
                      className="w-full rounded-full border border-white/60 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={onChange}
                      className="w-full rounded-full border border-white/60 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40"
                      placeholder="La tua email"
                    />
                  </div>
                </div>
                {/* Subject hidden field (kept for flexibility) */}
                <input type="hidden" name="subject" value={form.subject} readOnly />
                <div>
                  <label className="sr-only" htmlFor="message">Messaggio</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={onChange}
                    className="w-full rounded-3xl border border-white/60 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40 resize-y"
                    placeholder="Raccontaci in breve cosa hai in mente…"
                  />
                </div>

                {status.type !== 'idle' && (
                  <div
                    className={`rounded-2xl px-3 py-2 text-sm ${
                      status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-rose-100 text-rose-700'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="pressable inline-flex items-center gap-2 rounded-full border border-dark/5 text-white px-5 py-3 text-sm font-medium disabled:opacity-60"
                    style={{ background: 'var(--gradient-brand)' }}
                  >
                    <Send className="w-4 h-4" />
                    {sending ? 'Invio…' : 'Invia messaggio'}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground pt-2">Rispondiamo entro 24h. Nessuno spam, promesso.</p>
              </form>
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="grid grid-cols-1 gap-4">
              <a href={`mailto:${CONTACT.email}`} className="group glass-surface rounded-3xl border border-dark/5 p-5 flex items-start gap-4 hover:shadow-md hover:-translate-y-0.5 transition">
                <div className="shrink-0 rounded-2xl bg-primary/10 p-3 text-primary"><Mail className="w-5 h-5" /></div>
                <div>
                  <p className="text-xs tracking-wide text-muted-foreground">Email</p>
                  <p className="text-base font-semibold text-heading group-hover:underline">{CONTACT.email}</p>
                </div>
              </a>
              <a href={`tel:${CONTACT.phone.replace(/\s/g,'')}`} className="group glass-surface rounded-3xl border border-dark/5 p-5 flex items-start gap-4 hover:shadow-md hover:-translate-y-0.5 transition">
                <div className="shrink-0 rounded-2xl bg-primary/10 p-3 text-primary"><Phone className="w-5 h-5" /></div>
                <div>
                  <p className="text-xs tracking-wide text-muted-foreground">Telefono</p>
                  <p className="text-base font-semibold text-heading">{CONTACT.phone}</p>
                  <p className="text-sm text-foreground/70">{CONTACT.phone2}</p>
                </div>
              </a>

              {/* Socials */}
              <div className="glass-surface rounded-3xl border border-dark/5 p-5">
                <p className="text-xs tracking-wide text-muted-foreground mb-3">Social</p>
                <div className="flex flex-wrap gap-2">
                  <a href={CONTACT.socials.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white/70 px-3 py-2 text-sm hover:bg-white">
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <SectionDivider />
      </div>
    </section>
  );
};

export default Contact;