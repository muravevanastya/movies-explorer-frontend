import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearch }) {
  const [searchQuery, setSearchQuery] = React.useState('');

  function handleChange(evt) {
    setSearchQuery(evt.target.value);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearch(searchQuery);
    localStorage.setItem('searchQuery', searchQuery);
  };

  React.useEffect(() => {
    const storedSearchQuery = localStorage.getItem('searchQuery');
    if (storedSearchQuery) {
      setSearchQuery(storedSearchQuery);
    }
  }, []);
  

  return (
    <form className='movies__search-form' onSubmit={handleSubmit}>
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
        <button className='search-form__button'>Найти</button>
      </div>
      <FilterCheckbox />
    </form>
  )
}

export default SearchForm;