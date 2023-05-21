import './AboutMe.css';
import studentPhoto from '../../images/photo-student.jpg'

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__container'>
        <div className='about-me__description'>
          <h3 className='about-me__name'>Анастасия</h3>
          <p className='about-me__job'>Фронтенд-разработчик, 20 лет</p>
          <p className='about-me__text'>Я родилась в Калининграде, жила в Санкт-Петербурге, училась в Нидерландах, а полгода назад переехала на Кипр.
          Променяла карьеру экономиста на путь программиста. Год назад начала проходить курсы по веб-разработке от Яндекс Практикума и с тех пор развиваюсь
          в этой сфере.</p>
          <p className='about-me__github'>Github</p>
        </div>
        <img className='about-me__photo' src={studentPhoto} alt="Фото Анастасии" />
      </div>
    </section>
  )
}

export default AboutMe;