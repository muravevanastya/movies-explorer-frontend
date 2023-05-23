import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='filter'>
      <label className='filter__switcher'>
        <input type="checkbox" className='filter__checkbox' />
        <span className='filter__checkbox-slider'></span>
      </label>
      <p className='filter__switcher-text'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;