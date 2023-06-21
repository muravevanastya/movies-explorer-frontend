import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({ movies, savedMovies, onSaveClick, isMovieAdded }) {
  const [moviesToShow, setMoviesToShow] = React.useState([]);
  const [filterIsOn, setFilterIsOn] = React.useState(false);

  React.useEffect(() => {
    setMoviesToShow(movies)
  }, [movies])

  function searchFilter(data, searchQuery) {
    if (searchQuery) {
      return data.filter((item) => item.nameRU.toLowerCase().includes(searchQuery.toLowerCase()))
    }
  }

  function searchSavedMoviesHandler(searchQuery) {
    setMoviesToShow(searchFilter(movies, searchQuery))
  }

  function filterShortMovies(moviesToFilter) {
    return moviesToFilter.filter((item) => item.duration <= 40);
  }

  function onFilterClick() {
    setFilterIsOn(!filterIsOn);
  };

  return (
    <main className='saved-movies'>
      <SearchForm
        onSearch={searchSavedMoviesHandler}
        onFilterClick={onFilterClick}
        filterIsOn={filterIsOn}
      />
      <MoviesCardList 
        savedMovies={savedMovies}
        movies={filterIsOn ? filterShortMovies(moviesToShow) : moviesToShow}
        onSaveClick={onSaveClick}
        isMovieAdded={isMovieAdded}
      />
    </main>
  )
}

export default SavedMovies;