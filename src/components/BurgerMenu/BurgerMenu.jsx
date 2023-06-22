import React, { useState } from "react";
import './BurgerMenu.css';
import { NavLink, useLocation } from 'react-router-dom';
import accountIcon from '../../images/account-icon.svg';
import closeButton from '../../images/close-btn.svg';

function BurgerMenu() {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='burger-menu'>
      <button className={`burger-menu__button ${location.pathname === '/' ? 'burger-menu__button-white' : 'burger-menu__button-black'}`} onClick={handleMenuOpen}></button>
      <div className={`burger-menu__content ${isMenuOpen ? 'burger-menu__content-active' : ''}`} >
        <img className='burger-menu__close-button' src={closeButton} alt='Закрыть меню' onClick={handleMenuClose}/>
        <nav className='burger-menu__navigation'>
          <ul className='burger-menu__list'>
            <li className='burger-menu__list-item'>
              <NavLink to='/' className='burger-menu__list-item-text' onClick={handleMenuClose}>Главная</NavLink>
            </li>
              <li className='burger-menu__list-item'>
                <NavLink to='/movies' className='burger-menu__list-item-text' onClick={handleMenuClose}>Фильмы</NavLink>
              </li>
              <li className='burger-menu__list-item'>
                <NavLink to='/saved-movies' className='burger-menu__list-item-text' onClick={handleMenuClose}>Сохранённые фильмы</NavLink>
              </li>
              <li className='burger-menu__list-item-account'>
                <img className='burger-menu__list-item-account-img' src={accountIcon} alt='Иконка человека' />
                <NavLink to='/profile' className='burger-menu__list-item-account-text' onClick={handleMenuClose}>Аккаунт</NavLink>
              </li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default BurgerMenu;