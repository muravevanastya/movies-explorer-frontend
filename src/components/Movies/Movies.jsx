import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <main className='movies'>
      <SearchForm />
      <section className='movies-cards'>
        <MoviesCardList />
      </section>
    </main>
  )
}

export default Movies;