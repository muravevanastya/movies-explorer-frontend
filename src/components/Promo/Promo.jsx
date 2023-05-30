import './Promo.css'
import planet from '../../images/planet-web.svg';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__description'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
          <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <button className='promo__more-button'>
            <a href='#about-project' className='promo__more-button-text'>Узнать больше</a>
          </button>
        </div>
        <img className='promo__picture' src={planet} alt='Планета' />
      </div>
    </section>
  )
}

export default Promo;