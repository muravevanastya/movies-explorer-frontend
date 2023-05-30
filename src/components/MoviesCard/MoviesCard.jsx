import './MoviesCard.css';
import moviePhoto from '../../images/movie-photo.jpg';

function MoviesCard(props) {
  return (
    <div className='movie'>
      <div className='movie__description'>
        <div className='movie__info'>
          <p className='movie__name'>{props.movie.name}</p>
          <p className='movie__duration'>1ч 42м</p>
        </div>
        <button className='movie__save'></button>
      </div>
      <img className='movie__photo' src={moviePhoto} alt="Картинка фильма" />
    </div>
  )
}

export default MoviesCard;