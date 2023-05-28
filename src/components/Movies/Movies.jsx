import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <>
    <Header/>
    <main className='movies'>
      <SearchForm />
      <section className='movies-cards'>
        <MoviesCardList />
      </section>
    </main>
    <Footer/>
    </>
  )
}

export default Movies;