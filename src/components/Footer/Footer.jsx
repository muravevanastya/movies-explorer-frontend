import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <p className='footer__copyright'>&#169; 2023. Анастасия Муравьева</p>
        <nav className='footer__nav'>
          <ul className='footer__nav-list'>
            <li className='footer__nav-list-item'>
              <a className='footer__nav-list-item-link' href="#">Яндекс.Практикум</a>
            </li>
            <li className='footer__nav-list-item'>
              <a className='footer__nav-list-item-link' href="#">Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;