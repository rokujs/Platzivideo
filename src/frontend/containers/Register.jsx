/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
import '../assets/styles/components/Login.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <div className='login__container'>
        <h2>Regístrate</h2>

        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            type='text'
            placeholder='Nombre'
            className='form--input'
            onChange={handleInput}
          />
          <input
            name='email'
            type='text'
            placeholder='Correo'
            className='form--input'
            onChange={handleInput}
          />
          <input
            name='password'
            type='password'
            placeholder='Contraseña'
            className='form--input'
            onChange={handleInput}
          />
          <button className='form--button letters'>Registrarme</button>
        </form>

        <span className='letters'>
          <Link to='/login' className='login__container--login letters'>
            Inisiar sesión.
          </Link>
        </span>
      </div>
    </section>
  );
};

const mapdispatchToProps = {
  registerRequest,
};

export default connect(null, mapdispatchToProps)(Register);
