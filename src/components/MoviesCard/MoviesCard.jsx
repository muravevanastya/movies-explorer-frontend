import './MoviesCard.css';

function MoviesCard({movie}) {
  
  return (
    <div className='movie'>
      <div className='movie__description'>
        <div className='movie__info'>
          <p className='movie__name'>{movie.nameRU}</p>
          <p className='movie__duration'>1ч 42м</p>
        </div>
        <button className='movie__save'></button>
      </div>
      <img className='movie__photo' src={'https://api.nomoreparties.co/' + movie.image.url} alt={`Картинка фильма ${movie.nameRU}`} />
    </div>
  )
}

export default MoviesCard;