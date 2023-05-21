import logo from '../../images/logo.svg';
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className='header__container'>
        <a href='/'>
          <img className="header__logo" src={logo} alt="Логотип" />
        </a>
        <div className='header__nav'>
          <a href='/' className='header__registration'>Регистрация</a>
          <div className='header__login'>
            <a href='/' className='header__login-text'>Войти</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;