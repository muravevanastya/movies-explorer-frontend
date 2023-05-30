import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
  <main className='login'>
    <div className='login__container'>
      <Link to='/'>
        <img className="login__logo" src={logo} alt="Логотип" />
      </Link>
      <h2 className='login__title'>Рады видеть!</h2>
      <form className='login__form'>
        <fieldset className='login__fieldset'>
          <div className='login__input'>
            <p className='login__input-name'>E-mail</p>
            <input className='login__input-item' type='email' />
          </div>
          <div className='login__input'>
            <p className='login__input-name'>Пароль</p>
            <input className='login__input-item' type='password' />
          </div>
        </fieldset>
        <button className='login__button'>Войти</button>
      </form>
      <p className='login__signup'>Ещё не зарегистрированы? <Link className='login__signup-link' to='/signup'>Регистрация</Link></p>
    </div>
  </main>
  )
}

export default Login;