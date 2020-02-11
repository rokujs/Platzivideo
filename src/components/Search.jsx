import React from 'react';
import { connect } from 'react-redux';
import { getVideoName } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const handleInput = (event) => {
    props.getVideoName(event.target.value);
  };

  return (
    <section className='search'>
      <h2 className='search__title'>¿Qué quieres ver hoy?</h2>
      <input
        name='search'
        aria-label='Que quieres buscar'
        className='input'
        type='text'
        placeholder='Buscar...'
        onChange={handleInput}
      />
    </section>
  );
};

const mapDispatchToProps = {
  getVideoName,
};

export default connect(null, mapDispatchToProps)(Search);

