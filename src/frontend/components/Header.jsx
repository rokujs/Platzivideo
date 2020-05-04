import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';

import '../assets/styles/components/header.scss';
import logo from '../assets/static/logo.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    props.logoutRequest({});
  };
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='logo' />
      </Link>
      {hasUser ? (
        <div className='header__menu'>
          <div className='header__menu--profile'>
            <img src={gravatar(user.email)} alt={user.email} />
            <span>Perfil</span>
          </div>
          <ul>
            <li><a href='/'>{user.name}</a></li>
            <li><a href='#logout' onClick={handleLogout}>Cerrar sesión</a></li>
          </ul>
        </div>
      ) : (
        <div className='header__login'>
          <ul>
            <li>
              <Link to='/login'>
                Inisiar sesión
              </Link>
            </li>
            <li>
              <Link to='/register'>
                Registrate
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
