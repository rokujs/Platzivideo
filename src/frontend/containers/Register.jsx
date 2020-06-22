import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions';
import '../assets/styles/components/Login.scss';
import Header from '../components/Header';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    id: '',
    name: '',
    password: '',
  });

  const updateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form, '/login');
  };

  return (
    <>
      <Header />
      <section className='login'>
        <div className='login__container'>
          <h2>Regístrate</h2>

          <form className='login__container--form' onSubmit={handleSubmit}>
            <input
              name='name'
              type='text'
              placeholder='Nombre'
              className='form--input'
              onChange={updateInput}
            />
            <input
              name='email'
              type='text'
              placeholder='Correo'
              className='form--input'
              onChange={updateInput}
            />
            <input
              name='password'
              type='password'
              placeholder='Contraseña'
              className='form--input'
              onChange={updateInput}
            />
            <button className='form--button letters' type='submit'>Registrarme</button>
          </form>

          <span className='letters'>
            <Link to='/login' className='login__container--login letters'>
              Inisiar sesión.
            </Link>
          </span>
        </div>
      </section>
    </>
  );
};

const mapdispatchToProps = {
  registerUser,
};

Register.propTypes = {
  registerUser: PropTypes.func,
};
export default connect(null, mapdispatchToProps)(Register);
