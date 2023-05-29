import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className='error'>
      <h2 className='error__number'>404</h2>
      <p className='error__name'>Страница не найдена</p>
      <Link className='error__back' to='/'>Назад</Link>
    </section>
  )
}

export default NotFound;