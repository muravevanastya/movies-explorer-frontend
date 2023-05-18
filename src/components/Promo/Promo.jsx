import planet from '../../images/planet-web.svg';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <img className='promo__picture' src={planet} alt="Планета" />
      <div className='promo__more'>
        <button className='promo__more-button'>Узнать больше</button>
      </div>
    </section>
  )
}

export default Promo;