import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({movies}) {
  const [preloader, setPreloader] = React.useState(false);

  return (
    <main className='movies'>
      <SearchForm />
      <section className='movies-cards'>
        <MoviesCardList 
          movies={movies} 
          setPreloader={setPreloader}
          preloader={preloader}
        />
      </section>
    </main>
  )
}

export default Movies;