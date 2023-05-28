import Movies from "../Movies/Movies";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies() {
  return (
    <>
    <Header/>
    <main className='saved-movies'>
      <Movies />
    </main>
    <Footer/>
    </>
  )
}

export default SavedMovies;