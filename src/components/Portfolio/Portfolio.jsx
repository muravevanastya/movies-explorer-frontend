import './Portfolio.css'
import arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a className='portfolio__list-item-link' href='#'>
            <p className='portfolio__list-item-link-text'>Статичный сайт</p>
            <img className='portfolio__list-item-link-img' src={arrow} alt='Стрелка' />
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__list-item-link' href='#'>
            <p className='portfolio__list-item-link-text'>Адаптивный сайт</p>
            <img className='portfolio__list-item-link-img' src={arrow} alt='Стрелка' />
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__list-item-link' href='#'>
            <p className='portfolio__list-item-link-text'>Одностраничное приложение</p>
            <img className='portfolio__list-item-link-img' src={arrow} alt='Стрелка' />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;