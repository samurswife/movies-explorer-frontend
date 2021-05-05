import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const SavedMovies = (props) => {

    const loggedIn = true;

    const handleSearchFormSubmit = (e) => {
        e.preventDefault();
        console.log('Search saved movies form submitted!');
    }

    const handleMoreButtonClick = () => {
        console.log('More saved movies button clicked!');
    }

    return (
        <div className='saved-movies'>
            <Header loggedIn={loggedIn} handleHamburgerClick={props.handleNavigation} />
            <SearchForm onSearchFormSubmit={handleSearchFormSubmit}/>
            <MoviesCardList movies={props.movies} fromSavedMovies={props.fromSavedMovies} onMoreButtonClick={handleMoreButtonClick}/>
            <Footer />
        </div>
    )
}

export default SavedMovies;