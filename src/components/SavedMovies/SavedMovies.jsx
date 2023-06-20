import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({ movies, savedMovies, onSaveClick, isMovieAdded }) {
  const [moviesToShow, setMoviesToShow] = React.useState([]);

  React.useEffect(() => {
    setMoviesToShow(movies)
    // localStorage.setItem('savedMovies', JSON.stringify(movies)); 
  }, [movies])

  return (
    <main className='saved-movies'>
      <SearchForm

      />
      <MoviesCardList 
        savedMovies={savedMovies}
        movies={moviesToShow}
        onSaveClick={onSaveClick}
        isMovieAdded={isMovieAdded}
      />
    </main>
  )
}

export default SavedMovies;