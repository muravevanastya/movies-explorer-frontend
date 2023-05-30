import './AboutProject.css';

function AboutProject() {
  return (
    <section id='about-project' className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__description'>
        <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
        <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
        <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className='about-project__description-in-weeks'>
        <p className='about-project__backend-weeks'>1 неделя</p>
        <p className='about-project__frontend-weeks'>4 недели</p>
        <p className='about-project__description-in-weeks-text'>Back-end</p>
        <p className='about-project__description-in-weeks-text'>Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;