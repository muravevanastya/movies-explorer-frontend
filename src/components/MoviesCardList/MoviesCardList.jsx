import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { movies } from "../utils/test-database";
import './MoviesCardList.css'

function MoviesCardList() {
  return (
    <div className="movies-cards__container">
      {
        movies.map((movie) => {
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