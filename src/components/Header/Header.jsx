import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className={`header ${location.pathname !== '/' ? 'header__loggedin' : ''}`}>
      <div className='header__container'>
        <Link to='/'>
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        <Navigation />
      </div>
    </header>
  )
}

export default Header;