import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  return (
    <>
    <Header/>
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
          <button className='profile__settings-button'>Редактировать</button>
          <button className='profile__settings-button'>Выйти из аккаунта</button>
        </div>
      </form>
    </main>
    </>
  )
}

export default Profile;