import './Profile.css';
import { Link } from 'react-router-dom';

function Profile({ handleSignOut }) {
  return (
    <main className='profile'>
      <h2 className='profile__title'>Привет, Анастасия!</h2>
      <form className='profile__form'>
        <fieldset className='profile__fieldset'>
          <div className='profile__items'>
            <label className='profile__items-label' htmlFor='name'>Имя</label>
            <p className='profile__items-label'>Анастасия</p>
          </div>
          <input className='profile__items-input' type='text' id='name' />
          <div className='profile__items'>
            <label className='profile__items-label' htmlFor='email'>E-mail</label>
            <p className='profile__items-label'>pochta@yandex.ru</p>
          </div>
          <input className='profile__items-input' type='email' id='email' />
        </fieldset>
        <div className='profile__settings'>
          <button className='profile__settings-update'>Редактировать</button>
          <Link to='/signin' className='profile__settings-signout' onClick={handleSignOut}>Выйти из аккаунта</Link>
        </div>
      </form>
    </main>
  )
}

export default Profile;