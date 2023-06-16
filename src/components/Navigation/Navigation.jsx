import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import accountIcon from '../../images/account-icon.svg'

function Navigation({ isLoggedIn }) {
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
          <NavLink to='/movies' className='navigation__list-item-films'>Фильмы</NavLink>
        </li>
        <li className='navigation__list-item'>
          <NavLink to='/saved-movies' className='navigation__list-item-films'>Сохранённые фильмы</NavLink>
        </li>
        <li className='navigation__list-item-account'>
          <img className='navigation__list-item-account-img' src={accountIcon} alt='Иконка человека' />
          <NavLink to='/profile' className='navigation__list-item-account-text'>Аккаунт</NavLink>
        </li>
      </ul>
      )}
    </nav>
  )
}

export default Navigation;