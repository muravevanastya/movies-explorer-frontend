import './FilterCheckbox.css';

function FilterCheckbox({ onFilterClick, filterIsOn }) {
  return (
    <div className='search-form__filter'>
      <div className='search-form__filter-items'>
        <label className='filter__switcher'>
        <input type="checkbox" className='filter__checkbox' checked={filterIsOn} onChange={onFilterClick} />
        <span className='filter__checkbox-slider'></span>
        </label>
        <p className='filter__switcher-text'>Короткометражки</p>
      </div>
    </div>
  )
}

export default FilterCheckbox;