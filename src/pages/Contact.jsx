import React from 'react';
import { Send } from 'lucide-react';
import SectionDivider from '../components/ui/SectionDivider';

const Contact = () => {
  const [form, setForm] = React.useState({ name: '', email: '', eventType: '', message: '' });
  const [status, setStatus] = React.useState({ type: 'idle', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || !form.eventType) {
      setStatus({ type: 'error', message: 'Per favore, compila tutti i campi.' });
      return;
    }
    setStatus({ type: 'success', message: 'Grazie per la tua richiesta! Ti risponderemo al più presto.' });
    console.log('Form data submitted:', form);
  };

  return (
    <div className="bg-background text-foreground font-sans py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Richiedi un Preventivo</h1>
          <p className="text-lg leading-relaxed">
            Hai un'idea in mente? Raccontaci di cosa hai bisogno. Saremo felici di aiutarti a trovare l'auto perfetta per il tuo evento e a fornirti un preventivo su misura.
          </p>
        </div>

        <SectionDivider />

        <form onSubmit={handleSubmit} className="space-y-6 bg-white/50 p-8 rounded-lg shadow-lg border border-black/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2">Nome Completo</label>
              <input type="text" id="name" name="name" onChange={handleInputChange} className="w-full p-3 rounded-md bg-background/80 border border-gray-300 focus:ring-2 focus:ring-accent outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2">Indirizzo Email</label>
              <input type="email" id="email" name="email" onChange={handleInputChange} className="w-full p-3 rounded-md bg-background/80 border border-gray-300 focus:ring-2 focus:ring-accent outline-none" />
            </div>
          </div>

          <div>
            <label htmlFor="eventType" className="block text-sm font-bold mb-2">Tipo di Evento</label>
            <select id="eventType" name="eventType" onChange={handleInputChange} className="w-full p-3 rounded-md bg-background/80 border border-gray-300 focus:ring-2 focus:ring-accent outline-none">
              <option value="">Seleziona un'opzione...</option>
              <option value="matrimonio">Matrimonio</option>
              <option value="tour">Tour Panoramico</option>
              <option value="shooting">Shooting Fotografico/Video</option>
              <option value="evento-aziendale">Evento Aziendale</option>
              <option value="altro">Altro</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold mb-2">Il Tuo Messaggio</label>
            <textarea id="message" name="message" rows="6" onChange={handleInputChange} className="w-full p-3 rounded-md bg-background/80 border border-gray-300 focus:ring-2 focus:ring-accent outline-none" placeholder="Descrivi la tua richiesta, includendo date, luoghi e ogni altro dettaglio utile..."></textarea>
          </div>

          {status.type !== 'idle' && (
            <div className={`p-3 rounded-md text-center ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {status.message}
            </div>
          )}

          <div className="text-center">
            <button type="submit" className="group inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg">
              <Send className="w-5 h-5 mr-3" />
              Invia la Richiesta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
