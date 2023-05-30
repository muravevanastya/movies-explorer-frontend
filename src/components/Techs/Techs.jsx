import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <h3 className='techs__subtitle'>7 технологий</h3>
      <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className='techs__stack'>
        <div className='techs__stack-item'>
          <p className='techs__stack-text'>HTML</p>
        </div>
        <div className='techs__stack-item'>
          <p className='techs__stack-text'>CSS</p>
        </div>
        <div className='techs__stack-item'>
          <p className='techs__stack-text'>JS</p>
        </div>
        <div className='techs__stack-item'>
          <p className='techs__stack-text'>React</p>
        </div>
        <div className='techs__stack-item'>
          <p className='techs__stack-text'>Git</p>
        </div>
        <div className='techs__stack-item'>
          <p className='techs__stack-text'>Express.js</p>
        </div>
        <div className='techs__stack-item'>
          <p className='techs__stack-text'>mongoDB</p>
        </div>
      </div>
    </section>
  )
}

export default Techs;