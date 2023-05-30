import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='search-form__filter'>
      <div className='search-form__filter-items'>
        <label className='filter__switcher'>
          <input type="checkbox" className='filter__checkbox' />
          <span className='filter__checkbox-slider'></span>
        </label>
        <p className='filter__switcher-text'>Короткометражки</p>
      </div>
    </div>
  )
}

export default FilterCheckbox;