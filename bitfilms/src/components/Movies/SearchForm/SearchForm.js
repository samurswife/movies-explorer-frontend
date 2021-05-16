import React from 'react';
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

const SearchForm = (props) => {
    const [keyword, setKeyword] = React.useState('');

    const handleKeywordInputChange = (e) => {
        setKeyword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSearchFormSubmit(keyword);
        setKeyword('');
    }

    return (
        <div className='search center'>
            <form className='search__form' onSubmit={handleSubmit} noValidate>
                <div className='search__bar'>
                    <input value={keyword} onChange={handleKeywordInputChange} name='movie' className='search__form-input' type='text' minLength='1' placeholder='Фильм' required />
                    <button className='search__form-button' type='submit'>Найти</button>
                </div>
                <FilterCheckbox onCheckboxClick={props.onCheckboxClick}/>
                <div className='search__form-line'></div>
            </form>
        </div>
    )
}

export default SearchForm;