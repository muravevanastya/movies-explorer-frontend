import React from 'react';
import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register({ onRegister }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleNameChange(evt) {
    setName(evt.target.value)
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value)
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister({ password, email, name })
  }

  return (
    <main className='register'>
      <div className='register__container'>
        <Link to='/'>
          <img className="register__logo" src={logo} alt="Логотип" />
        </Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form' onSubmit={handleSubmit}>
          <fieldset className='register__fieldset'>
            <div className='register__input'>
              <p className='register__input-name'>Имя</p>
              <input 
                className='register__input-item' 
                type='text'
                name='name'
                id='name'
                minLength='2'
                maxLength='64'
                onChange={handleNameChange}
                value={name || ''}
                required
              />
            </div>
            <div className='register__input'>
              <p className='register__input-name'>E-mail</p>
              <input 
                className='register__input-item' 
                type='email' 
                name='email'
                id='email'
                minLength='2'
                maxLength='64'
                onChange={handleEmailChange}
                value={email || ''}
                required
              />
            </div>
            <div className='register__input'>
              <p className='register__input-name'>Пароль</p>
              <input className='register__input-item' 
                type='password'
                name='password'
                id='password'
                minLength='8'
                onChange={handlePasswordChange}
                value={password || ''}
                required
              />
            </div>
          </fieldset>
          <button className='register__button' type='submit'>Зарегистрироваться</button>
        </form>
        <p className='register__signin'>Уже зарегистрированы? <Link className='register__signin-link' to='/signin'>Войти</Link></p>
      </div>
    </main>
  )
}

export default Register;