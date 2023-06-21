import React from 'react';
import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Register({ onRegister, registrationError, registrationErrorMessage, setRegistrationErrorMessage }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();

    const { password, email, name } = values;
    onRegister({ password, email, name });
  }

  React.useEffect(() => {
    setRegistrationErrorMessage('');
  }, [setRegistrationErrorMessage]);

  return (
    <main className='register'>
      <div className='register__container'>
        <Link to='/'>
          <img className="register__logo" src={logo} alt="Логотип" />
        </Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form'>
          <fieldset className='register__fieldset'>
            <div className='register__input'>
              <p className='register__input-name'>Имя</p>
              <input 
                className={errors.name ? 'register__input-item register__input-item-error' : 'register__input-item'}
                type='text'
                name='name'
                id='name'
                minLength='2'
                maxLength='64'
                onChange={handleChange}
                value={values.name || ''}
                required
              />
              <span className='register__input-error'>{errors.name}</span>
            </div>
            <div className='register__input'>
              <p className='register__input-name'>E-mail</p>
              <input 
                className={errors.email ? 'register__input-item register__input-item-error' : 'register__input-item'}
                type='email' 
                name='email'
                id='email'
                minLength='2'
                maxLength='64'
                onChange={handleChange}
                value={values.email || ''}
                pattern='[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'
                required
              />
              <span className='register__input-error'>{errors.email}</span>
            </div>
            <div className='register__input'>
              <p className='register__input-name'>Пароль</p>
              <input className={errors.password ? 'register__input-item register__input-item-error' : 'register__input-item'}
                type='password'
                name='password'
                id='password'
                minLength='8'
                onChange={handleChange}
                value={values.password || ''}
                required
              />
              <span className='register__input-error'>{errors.password}</span>
            </div>
          </fieldset>
          <span className={`register__error-message ${registrationError ? 'register__error-message-active' : null}`}>{registrationErrorMessage}</span>
          <button className={`register__button ${!isValid && 'register__button-disabled'}`} disabled={!isValid} type='submit' onClick={handleSubmit}>Зарегистрироваться</button>
        </form>
        <p className='register__signin'>Уже зарегистрированы? <Link className='register__signin-link' to='/signin'>Войти</Link></p>
      </div>
    </main>
  )
}

export default Register;