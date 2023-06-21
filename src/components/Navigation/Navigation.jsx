import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';
import accountIcon from '../../images/account-icon.svg';
import accountIconWhite from '../../images/account-icon-white.svg';

function Navigation({ isLoggedIn }) {
  const location = useLocation();

  return (
    <nav className='navigation'>
      {!isLoggedIn ? (
        <ul className='navigation__list'>
          <li className='navigation__list-item'>
            <NavLink to='/signup' className='navigation__list-item-signup'>Регистрация</NavLink>
          </li>
          <li className='navigation__list-item'>
            <NavLink to='/signin' className='navigation__list-item-signin'>Войти</NavLink>
          </li>
        </ul>
      ) : (
        <ul className='navigation__list navigation__list-hidden'>
          <li className='navigation__list-item'>
            <NavLink to='/movies' className={`navigation__list-item-films ${location.pathname === '/' ? 'navigation__list-item-films-white' : 'navigation__list-item-films-black'}`}>Фильмы</NavLink>
          </li>
          <li className='navigation__list-item'>
            <NavLink to='/saved-movies' className={`navigation__list-item-films ${location.pathname === '/' ? 'navigation__list-item-films-white' : 'navigation__list-item-films-black'}`}>Сохранённые фильмы</NavLink>
          </li>
          <li className='navigation__list-item-account'>
            <img className='navigation__list-item-account-img' src={location.pathname === '/' ? accountIconWhite : accountIcon} alt='Иконка человека' />
            <NavLink to='/profile' className={`navigation__list-item-account-text ${location.pathname === '/' ? 'navigation__list-item-account-text-white' : 'navigation__list-item-account-text-black'}`}>Аккаунт</NavLink>
          </li>
        </ul>
        )
      }
    </nav>
  )
}

export default Navigation;