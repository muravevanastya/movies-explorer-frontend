import React from 'react';
import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login({ onAuth }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmailChange(evt) {
    setEmail(evt.target.value)
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAuth({ password, email })
  }

  return (
  <main className='login'>
    <div className='login__container'>
      <Link to='/'>
        <img className="login__logo" src={logo} alt="Логотип" />
      </Link>
      <h2 className='login__title'>Рады видеть!</h2>
      <form className='login__form' onSubmit={handleSubmit}>
        <fieldset className='login__fieldset'>
          <div className='login__input'>
            <p className='login__input-name'>E-mail</p>
            <input 
              className='login__input-item' 
              type='email'
              name='email'
              minLength='6'
              maxLength='64'
              onChange={handleEmailChange}
              value={email || ''}
              required
            />
          </div>
          <div className='login__input'>
            <p className='login__input-name'>Пароль</p>
            <input 
              className='login__input-item' 
              type='password' 
              name='password'
              minLength='8'
              onChange={handlePasswordChange}
              value={password || ''}
              required
            />
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