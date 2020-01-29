import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => (
  <section className='search'>
    <h2 className='search__title'>¿Qué quieres ver hoy?</h2>
    <input aria-label='Que quieres buscar' className='input' type='text' placeholder='Buscar...' />
  </section>
);

export default Search;
