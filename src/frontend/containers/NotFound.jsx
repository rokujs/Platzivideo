import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <section className='main'>
    <h1 className='main__content letters'>
        404
    </h1>
    <p className='main__parafo letters'>
      <i className='fas fa-radiation fa-spin'> </i>   Página no encontrada   <i className='fas fa-radiation fa-spin'> </i>
    </p>
  </section>
);

export default NotFound;
