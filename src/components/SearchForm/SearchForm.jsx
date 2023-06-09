import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useLocation } from 'react-router-dom';

function SearchForm({ onSearch, onFilterClick, filterIsOn, savedMovies }) {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [error, setError] = React.useState('');

  function handleChange(evt) {
    setSearchQuery(evt.target.value);
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    if (!searchQuery) {
      setError('Нужно ввести ключевое слово');
      setTimeout(() => {
        setError('');
      }, 5000);
    } else {
      onSearch(searchQuery);

      if(location.pathname !== '/saved-movies') {
        localStorage.setItem('searchQuery', searchQuery);
      }
    }
  };

  React.useEffect(() => {
    if(location.pathname !== '/saved-movies') {
      const storedSearchQuery = localStorage.getItem('searchQuery');
      if (storedSearchQuery !== null) {
        setSearchQuery(storedSearchQuery);
      }
    }
  }, []);

  return (
    <form className='movies__search-form'>
      <div className='search-form__container'>
        <div className='search-form__input-container'>
          <div className='search-form__icon'></div>
          <input 
            type='text' 
            className='search-form__input' 
            placeholder='Фильм'
            value={searchQuery || ''}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="search-form__error">{error}</p>}
        <button className='search-form__button' onClick={handleSubmit}>Найти</button>
      </div>
      <FilterCheckbox onFilterClick={onFilterClick} filterIsOn={filterIsOn} />
    </form>
  )
}

export default SearchForm;