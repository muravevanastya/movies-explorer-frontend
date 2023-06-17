import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({movies}) {
  return (
    <main className='movies'>
      <SearchForm />
      <section className='movies-cards'>
        <MoviesCardList movies={movies} />
      </section>
    </main>
  )
}

export default Movies;