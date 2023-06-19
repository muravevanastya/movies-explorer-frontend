import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ movies, onSubmitSearch }) {
  const [preloader, setPreloader] = React.useState(false);
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
    } else {
      localStorage.setItem('filteredMovies', JSON.stringify(movies));
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
        <MoviesCardList 
          movies={filterIsOn ? filterShortMovies(movies) : movies} 
          setPreloader={setPreloader}
          preloader={preloader}
        />
      </section>
    </main>
  )
}

export default Movies;