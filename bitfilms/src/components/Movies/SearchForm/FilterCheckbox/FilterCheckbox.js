import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = (props) => {

    const [checked, setChecked] = React.useState(false);

    const handleCheckboxInputChange = (e) => {
        if (checked) {
            setChecked(false);
            e.target.removeAttribute('checked');
        } else {
            setChecked(true);
            e.target.setAttribute('checked', true);
        }
    }

    React.useEffect(() => {
        props.onCheckboxClick(checked);
    }, [checked]);

    return (
        <div className='filter-checkbox'>
            <label htmlFor='filter-checkbox-input' className='filter-checkbox__label'>
                <input onChange={handleCheckboxInputChange}
                    checked={checked}
                    id='filter-checkbox-input'
                    name='filter-checkbox-input'
                    className='filter-checkbox__input'
                    value='40'
                    type='checkbox' />
                <span className={`filter-checkbox__toggle ${checked ? 'filter-checkbox__toggle_active' : ''}`} >
                    <span className={`filter-checkbox__toggle-switch ${checked ? 'filter-checkbox__toggle-switch_active' : ''}`}></span>
                </span>
            </label>
            <p className='filter-checkbox__text'>Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;