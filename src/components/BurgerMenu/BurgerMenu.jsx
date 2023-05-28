import React, { useState } from "react";
import './BurgerMenu.css';
import { Link, useLocation } from 'react-router-dom';
import accountIcon from '../../images/account-icon.svg';
import closeButton from '../../images/close-btn.svg';

function BurgerMenu() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`${location.pathname === '/' ? 'burger-menu-hidden' : 'burger-menu'}`}>
      <button className='burger-menu__button' onClick={handleMenuOpen}></button>
      <div className={`burger-menu__content ${isMenuOpen ? 'burger-menu__content-active' : ''}`} >
        <img className='burger-menu__close-button' src={closeButton} alt='Закрыть меню' onClick={handleMenuClose}/>
        <nav className='burger-menu__navigation'>
          <ul className='burger-menu__list'>
            <li className='burger-menu__list-item'>
              <Link to='/' className='burger-menu__list-item-text'>Главная</Link>
            </li>
              <li className='burger-menu__list-item'>
                <Link to='/movies' className='burger-menu__list-item-text'>Фильмы</Link>
              </li>
              <li className='burger-menu__list-item'>
                <Link to='/saved-movies' className='burger-menu__list-item-text'>Сохранённые фильмы</Link>
              </li>
              <li className='burger-menu__list-item-account'>
                <img className='burger-menu__list-item-account-img' src={accountIcon} alt='Иконка человека' />
                <Link to='/profile' className='burger-menu__list-item-account-text'>Аккаунт</Link>
              </li>
            </ul>
        </nav>
      </div>
    </div>

  )
}

export default BurgerMenu;