import React from 'react';
import '../assets/styles/components/header.scss';
import logo from '../assets/static/logo.png';

const Header = () => (
  <header className='header'>
    <img tabIndex='0' className='header__img' src={logo} alt='logo' />
    <div tabIndex='0' className='header__menu'>
      <div className='header__menu--profile'>
        <i className='fas fa-user-circle'> </i>
        <span>Perfil</span>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/#'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
