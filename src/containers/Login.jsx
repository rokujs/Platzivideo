/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';

import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };
  return (
    <section className='login'>
      <div className='login__container'>
        <h2>Inicio de sesión</h2>

        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            aria-label='Correo'
            type='text'
            placeholder='Correo'
            className='form--input'
            onChange={handleInput}
          />
          <input
            name='password'
            aria-label='Contraseña'
            type='password'
            placeholder='Contraseña'
            className='form--input'
            onChange={handleInput}
          />
          <button className='form--button letters'>Inicio de sesión</button>
          <div className='form--remember letters'>
            <label>
              <input type='checkbox' id='boxRemember' value='boxRem' /> Recuérdame
            </label>
            <a href='/'>¿Olvidé mi contraseña?</a>
          </div>
        </form>

        <div className='login__container--social-media letters'>
          <div>
            <i className='fab fa-google'> </i>Inicia sesión con Google
          </div>
          <div>
            <i className='fab fa-twitter'> </i>Inicia sesión con Twitter
          </div>
        </div>

        <p className='login__container--register letters'>
          No tienes ninguna cuenta {' '}
          <Link to='/register'>
            Regístrate.
          </Link>
        </p>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
