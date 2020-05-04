import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <section className='main'>
    <h1 className='main__content'>
      404
    </h1>
    <p className='main__parafo letters'>
      <FontAwesomeIcon icon='radiation' spin />
      <span> Página no encontrada </span>
      <FontAwesomeIcon icon='radiation' spin />
    </p>
  </section>
);

export default NotFound;
