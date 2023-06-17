import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
// import { movies } from "../utils/test-database";
import './MoviesCardList.css'

function MoviesCardList({ movies }) {
  const [moviesToShow, setMoviesToShow] = React.useState([]);

  React.useEffect(() => {
    setMoviesToShow(movies);
  }, [movies]);  

  return (
    <div className="movies-cards__container">
      {
        moviesToShow && moviesToShow.map((movie) => {
          return (
            <MoviesCard key={movie.id} movie={movie} />
          )
        })
      }
      <button className='movies-cards__more-button'>Ещё</button>
    </div>
  )
}

export default MoviesCardList;