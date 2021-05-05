import React from 'react';
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

const SearchForm = (props) => {
    
    return (
        <div className='search center'>
            <form className='search__form' onSubmit={props.onSearchFormSubmit}>
                <div className='search__bar'>
                    <input name='movie' className='search__form-input' type='text' minLength='1' placeholder='Фильм' required />
                    <button className='search__form-button' type='submit'>Найти</button>
                </div>
                <FilterCheckbox />
                <div className='search__form-line'></div>
            </form>
        </div>
    )
}

export default SearchForm;