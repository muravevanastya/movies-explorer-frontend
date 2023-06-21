import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/useFormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ handleSignOut, onEdit, editErrorMessage, editSuccessMessage, isEditProfileSuccessful, setIsEditProfileSuccessful }) {
  const { values, errors, isValid, handleChange, setValues } = useFormWithValidation();
  const currentUser = React.useContext(CurrentUserContext);
  const [isDataChanged, setIsDataChanged] = React.useState(false);

  React.useEffect(() => {
    values.email === currentUser.email && values.name === currentUser.name ?
    setIsDataChanged(false) : setIsDataChanged(true)
  }, [values, currentUser])

  function handleSubmit(evt) {
    evt.preventDefault();

    const { email, name } = values;

    if (isValid) {
      onEdit({ email, name });
    }
  }

  React.useEffect(() => {
    setValues(
      currentUser.name,
      currentUser.email,
    );
  }, [setValues, currentUser.name, currentUser.email]);

  React.useEffect(() => {
    setIsEditProfileSuccessful(false);
  }, [setIsEditProfileSuccessful]);

  return (
    <main className='profile'>
      <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
      <form className='profile__form'>
        <fieldset className='profile__fieldset'>
          <div className='profile__items'>
            <label className='profile__items-label' htmlFor='name'>Имя</label>
            <p className='profile__items-label'>{currentUser.name}</p>
          </div>
          <input 
            className={errors.name ? 'profile__items-input profile__items-input-error' : 'profile__items-input'}
            type='text'
            id='name'
            name='name'
            minLength='2'
            maxLength='64'
            onChange={handleChange}
            value={values.name || ''}
            required
          />
          <span className='profile__input-error'>{errors.name}</span>
          <div className='profile__items'>
            <label className='profile__items-label' htmlFor='email'>E-mail</label>
            <p className='profile__items-label'>{currentUser.email}</p>
          </div>
          <input 
            className={errors.email ? 'profile__items-input profile__items-input-error' : 'profile__items-input'}
            type='email' 
            id='email'
            name='email'
            minLength='2'
            maxLength='64'
            onChange={handleChange}
            value={values.email || ''}
            pattern='[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'
            required
          />
          <span className='profile__input-error'>{errors.email}</span>
        </fieldset>
        <span className={`profile__error-message ${isEditProfileSuccessful ? 'profile__success-message-active' : 'profile__error-message-active'}`}>{isEditProfileSuccessful ? editSuccessMessage : editErrorMessage}</span>
        <div className='profile__settings'>
          <button className={`profile__settings-update ${(!isValid || !isDataChanged) && 'profile__settings-update-disabled'}`} disabled={!isValid || !isDataChanged} type='submit' onClick={handleSubmit}>Редактировать</button>
          <Link to='/signin' className='profile__settings-signout' onClick={handleSignOut}>Выйти из аккаунта</Link>
        </div>
      </form>
    </main>
  )
}

export default Profile;