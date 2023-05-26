import './MoviesCard.css';
import heart from '../../images/heart.svg';
import moviePhoto from '../../images/movie-photo.jpg';

function MoviesCard(props) {
  return (
    <div className='movie'>
      <div className='movie__description'>
        <div className='movie__info'>
          <p className='movie__name'>{props.movie.name}</p>
          <p className='movie__duration'>1ч 42м</p>
        </div>
        <img className='movie__save' src={heart} alt="Добавить в избранное" />
      </div>
      <img className='movie__photo' src={moviePhoto} alt="Картинка фильма" />
    </div>
  )
}

export default MoviesCard;