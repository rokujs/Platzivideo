import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
  <section className='carusel'>
    <div className='carusel__container'>
      {children}
    </div>
  </section>
);

export default Carousel;
