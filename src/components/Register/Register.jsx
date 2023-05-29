import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <main className='register'>
      <div className='register__container'>
        <img className='register__logo' src={logo} alt='Логотип' />
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form'>
          <fieldset className='register__fieldset'>
            <div className='register__input'>
              <p className='register__input-name'>Имя</p>
              <input className='register__input-item' type='text' />
            </div>
            <div className='register__input'>
              <p className='register__input-name'>E-mail</p>
              <input className='register__input-item' type='email' />
            </div>
            <div className='register__input'>
              <p className='register__input-name'>Пароль</p>
              <input className='register__input-item' type='password' />
            </div>
          </fieldset>
          <button className='register__button'>Зарегистрироваться</button>
        </form>
        <p className='register__signin'>Уже зарегистрированы? <Link className='register__signin-link' to='/signin'>Войти</Link></p>
      </div>
    </main>
  )
}

export default Register;