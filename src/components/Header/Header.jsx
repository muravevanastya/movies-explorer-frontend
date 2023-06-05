import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Link, useLocation } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header({ isLoggedIn }) {
  const location = useLocation();
  const [width, setWidth] = React.useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  const isMobile = width <= 768;

  return (
    <header className={`header ${location.pathname !== '/' ? 'header__loggedin' : ''}`}>
      <div className='header__container'>
        <Link to='/'>
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        {isLoggedIn && isMobile && <BurgerMenu/>}
        {isLoggedIn && !isMobile && <Navigation isLoggedIn={isLoggedIn}/>}
        {!isLoggedIn && <Navigation/>}
      </div>
    </header>
  )
}

export default Header;