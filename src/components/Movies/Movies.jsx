import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({ movies, onSubmitSearch, preloader, setPreloader, isMovieAdded, savedMovies, onSaveClick }) {
  // const [preloader, setPreloader] = React.useState(false);
  const [filterIsOn, setFilterIsOn] = React.useState(false);
  const [filteredShortMovies, setFilteredShortMovies] = React.useState([]);

  function filterShortMovies(moviesToFilter) {
    return moviesToFilter.filter((item) => item.duration <= 40 );
  }

  function onFilterClick() {
    const newFilterIsOn = !filterIsOn;
    setFilterIsOn(newFilterIsOn);
    localStorage.setItem('filterIsOn', JSON.stringify(newFilterIsOn));

    if (newFilterIsOn) {
      const filtered = filterShortMovies(movies);
      setFilteredShortMovies(filtered);
      localStorage.setItem('filteredShortMovies', JSON.stringify(filtered));
    }
  }

  React.useEffect(() => {
    const storedFilterIsOn = JSON.parse(localStorage.getItem('filterIsOn'));
    if (storedFilterIsOn !== null) {
    setFilterIsOn(storedFilterIsOn);
    }
    }, []);

  return (
    <main className='movies'>
      <SearchForm onSearch={onSubmitSearch} onFilterClick={onFilterClick} filterIsOn={filterIsOn} />
      <section className='movies-cards'>
        {/* {preloader ? <Preloader/> : ( */}
          <MoviesCardList 
          movies={filterIsOn ? filterShortMovies(movies) : movies} 
          setPreloader={setPreloader}
          preloader={preloader}
          isMovieAdded={isMovieAdded}
          savedMovies={savedMovies}
          onSaveClick={onSaveClick}
          />
        {/* )} */}
      </section>
    </main>
  )
}

export default Movies;