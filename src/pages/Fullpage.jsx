import React from 'react';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';

const Fullpage = () => {
  return (
    <div>
      <section id="home" className=" scroll-mt-16 md:scroll-mt-0">
        <Home />
      </section>
      <section id="about" className=" scroll-mt-16 md:scroll-mt-0">
        <About />
      </section>
      <section id="portfolio" className=" scroll-mt-16 md:scroll-mt-0">
        <Portfolio />
      </section>
      <section id="contact" className=" scroll-mt-16 md:scroll-mt-0">
        <Contact />
      </section>
    </div>
  );
};

export default Fullpage;
