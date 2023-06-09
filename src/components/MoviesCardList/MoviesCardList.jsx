import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css'
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ movies, preloader, savedMovies, isMovieAdded, onSaveClick, loadingError }) {
  const [moviesToShow, setMoviesToShow] = React.useState([]);
  const [numberOfMovies, setNumberOfMovies] = React.useState(0);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [showMorePreloader, setShowMorePreloader] = React.useState(false);

  React.useEffect(() => {
    setMoviesToShow(movies);
  }, [movies]);  

  React.useEffect(() => {
    window.onresize = () => {
      setTimeout(() => {
        setWidth(window.innerWidth);
      }, 500)
    }

    if (width > 540) {
      setNumberOfMovies(7)
    } else {
      setNumberOfMovies(5)
    }
  }, [width])

  function showMoreMovies() {
    setShowMorePreloader(true);

    setTimeout(() => {
      width > 540 ? setNumberOfMovies(numberOfMovies + 7) : setNumberOfMovies(numberOfMovies + 5);
      setShowMorePreloader(false)
    }, 1000)
  }

  return (
    <div className='movies-cards__container'>
      {loadingError ? (
        <p className='movies-cards__not-found'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
      ) : (
        <>
          {preloader ? <Preloader/> :
          moviesToShow?.length > 0 ? (
            moviesToShow?.slice(0, savedMovies ? Infinity : numberOfMovies).map((movie) => {
              return (
                <MoviesCard 
                  key={movie.id} 
                  movie={movie}
                  savedMovies={savedMovies}
                  isMovieAdded={isMovieAdded}
                  onSaveClick={onSaveClick}
                />
              )
            })
            ) : (
              <p className='movies-cards__not-found'>Ничего не найдено</p>
            )
          }
          {showMorePreloader && <Preloader />}
          {savedMovies ? '' : moviesToShow?.length > numberOfMovies && (
            <button className={`movies-cards__more-button ${(preloader || showMorePreloader) ? 'movies-cards__more-button-hidden' : ''}`} type='button' onClick={showMoreMovies}>Ещё</button>
          )}
        </>
      )}
    </div>
  )
}

export default MoviesCardList;