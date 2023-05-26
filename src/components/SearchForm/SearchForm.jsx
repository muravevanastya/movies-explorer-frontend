import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className='movies__search-form'>
      <div className='search-form__container'>
        <div className='search-form__input-container'>
          <div className='search-form__icon'></div>
          <input type='text' className='search-form__input' placeholder='Фильм'/>
        </div>
        <button className='search-form__button'>Найти</button>
      </div>
      <FilterCheckbox />
    </form>
  )
}

export default SearchForm;