import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import accountIcon from '../../images/account-icon.svg'

function Navigation() {
  const location = useLocation();

  return (
    <nav className='navigation'>
      {location.pathname === '/' ? (
        <ul className='navigation__list'>
          <li className='navigation__list-item'>
            <Link to='/signup' className='navigation__list-item-signup'>Регистрация</Link>
          </li>
          <li className='navigation__list-item'>
            <Link to='/signin' className='navigation__list-item-signin'>Войти</Link>
          </li>
        </ul>
      ) : (
        <ul className='navigation__list'>
          <li className='navigation__list-item'>
            <Link to='/movies' className='navigation__list-item-films'>Фильмы</Link>
          </li>
          <li className='navigation__list-item'>
            <Link to='/saved-movies' className='navigation__list-item-saved-films'>Сохранённые фильмы</Link>
          </li>
          <li className='navigation__list-item-account'>
            <img className='navigation__list-item-account-img' src={accountIcon} alt='Иконка человека' />
            <Link to='/profile' className='navigation__list-item-account-text'>Аккаунт</Link>
          </li>
        </ul>
        )}
    </nav>
  )
}

export default Navigation;