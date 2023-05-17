import logo from '../../images/logo.svg';
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className='header__container'>
        <img className="header__logo" src={logo} alt="Логотип" />
        <div className='header__nav'>
          <p className='header__registration'>Регистрация</p>
          <div className='header__login'>
            <p className='header__login-text'>Войти</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;