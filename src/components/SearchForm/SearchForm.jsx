import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className='search-form'>
      <div className='search-form__container'>
        <div className='search-form__input-container'>
          <img className='search-form__icon' src={searchIcon} alt='Лупа' />
          <input type='text' className='search-form__input' placeholder='Фильм'/>
        </div>
        <button className='search-form__button'>Найти</button>
        <FilterCheckbox />
      </div>
    </form>
  )
}

export default SearchForm;