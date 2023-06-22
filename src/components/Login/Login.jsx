import React from 'react';
import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Login({ onAuth, loginError, loginErrorMessage, setLoginErrorMessage }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();

    const { password, email } = values;
    onAuth({ password, email })
  }

  React.useEffect(() => {
    setLoginErrorMessage('');
  }, [setLoginErrorMessage]);

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
            <input 
              className={errors.email ? 'login__input-item login__input-item-error' : 'login__input-item'}
              type='email'
              name='email'
              minLength='6'
              maxLength='64'
              onChange={handleChange}
              value={values.email || ''}
              pattern='[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'
              required
            />
            <span className='login__input-error'>{errors.email}</span>
          </div>
          <div className='login__input'>
            <p className='login__input-name'>Пароль</p>
            <input 
              className={errors.password ? 'login__input-item login__input-item-error' : 'login__input-item'}
              type='password' 
              name='password'
              minLength='8'
              onChange={handleChange}
              value={values.password || ''}
              required
            />
            <span className='login__input-error'>{errors.password}</span>
          </div>
        </fieldset>
        <span className={`login__error-message ${loginError ? 'login__error-message-active' : null}`}>{loginErrorMessage}</span>
        <button className={`login__button ${!isValid && 'login__button-disabled'}`} disabled={!isValid} type='submit' onClick={handleSubmit} >Войти</button>
      </form>
      <p className='login__signup'>Ещё не зарегистрированы? <Link className='login__signup-link' to='/signup'>Регистрация</Link></p>
    </div>
  </main>
  )
}

export default Login;