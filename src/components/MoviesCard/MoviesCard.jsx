import './MoviesCard.css';

function MoviesCard({ movie, savedMovies, isMovieAdded, onSaveClick }) {

  function getMoviesDuration() {
    const hour = Math.floor((movie.duration / 60)) + 'ч';
    
    if(movie.duration % 60 === 0) {
      return hour;
    } else if(movie.duration > 60) {
      return hour + ' ' + (movie.duration % 60 + 'м');
    } else {
      return movie.duration + 'м';
    }
  }

  const isAdded = isMovieAdded(movie);

  function handleSaveClick(evt) {
    evt.preventDefault();

    onSaveClick(movie, !isAdded)
  }

  
  return (
    <div className='movie'>
      <div className='movie__description'>
        <div className='movie__info'>
          <p className='movie__name'>{movie.nameRU}</p>
          <p className='movie__duration'>{getMoviesDuration()}</p>
        </div>
        <button className={`movie__save ${isAdded ? 'movie__save_active' : ''}`} onClick={handleSaveClick} ></button>
      </div>
      <a className='movie__link' href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
        <img className='movie__photo' src={'https://api.nomoreparties.co/' + movie.image.url} alt={`Картинка фильма ${movie.nameRU}`} />
      </a>
    </div>
  )
}

export default MoviesCard;