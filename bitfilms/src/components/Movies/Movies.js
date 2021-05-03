import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const Movies = (props) => {

    const loggedIn = true;

    const handleSearchFormSubmit = (e) => {
        e.preventDefault();
        console.log('Search movies form submitted!');
    }

    const handleMoreButtonClick = () => {
        console.log('More movies button clicked!');
    }

    return (
        <div className='movies'>
            <Header loggedIn={loggedIn} handleHamburgerClick={props.handleNavigation} />
            <SearchForm onSearchFormSubmit={handleSearchFormSubmit} />
            <MoviesCardList movies={props.movies} onMoreButtonClick={handleMoreButtonClick} />
            <Footer />
        </div>
    )
}

export default Movies;