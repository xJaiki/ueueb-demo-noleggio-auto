import React from 'react';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Slices from './Slices';

const Fullpage = () => {
  return (
    <div>
      <section id="home" className=" scroll-mt-16 md:scroll-mt-0">
        <Home />
      </section>
      <section id="slices" className=" scroll-mt-16 md:scroll-mt-0">
        <Slices />
      </section>
      <section id="portfolio" className=" scroll-mt-16 md:scroll-mt-0">
        <Portfolio />
      </section>
      <section id="about" className=" scroll-mt-16 md:scroll-mt-0">
        <About />
      </section>
      <section id="contact" className=" scroll-mt-16 md:scroll-mt-0">
        <Contact />
      </section>
    </div>
  );
};

export default Fullpage;
