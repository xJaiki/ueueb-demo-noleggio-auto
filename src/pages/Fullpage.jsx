import React from 'react';
import Home from './Home';
import Flotta from './Flotta';
import Servizi from './Servizi';
import ChiSiamo from './ChiSiamo';
import Contact from './Contact';
import Footer from '../components/layout/Footer';

const Fullpage = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="flotta">
        <Flotta />
      </section>
      <section id="servizi">
        <Servizi />
      </section>
      <section id="chi-siamo">
        <ChiSiamo />
      </section>
      <section id="contatti">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Fullpage;
