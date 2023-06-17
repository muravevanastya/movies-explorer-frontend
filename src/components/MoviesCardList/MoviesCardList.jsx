import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
// import { movies } from "../utils/test-database";
import './MoviesCardList.css'

function MoviesCardList({ movies }) {
  const [moviesToShow, setMoviesToShow] = React.useState([]);
  const [numberOfMovies, setNumberOfMovies] = React.useState(0);
  const [width, setWidth] = React.useState(window.innerWidth);

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
    setTimeout(() => {
      width > 540 ? setNumberOfMovies(numberOfMovies + 7) : setNumberOfMovies(numberOfMovies + 5);
    }, 1000)
  }

  return (
    <div className="movies-cards__container">
      {
        moviesToShow && moviesToShow?.slice(0, numberOfMovies).map((movie) => {
          return (
            <MoviesCard key={movie.id} movie={movie} />
          )
        })
      }
      <button className='movies-cards__more-button' type='button' onClick={showMoreMovies}>Ещё</button>
    </div>
  )
}

export default MoviesCardList;