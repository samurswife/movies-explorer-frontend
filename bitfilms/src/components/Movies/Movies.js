import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoviesCard from './MoviesCard/MoviesCard';
import { BASE_MOVIES_URL } from '../../utils/constants';

import Footer from '../Footer/Footer';

const Movies = (props) => {

    const [itemsToShow, setItemsToshow] = React.useState(0);
    const [itemsIncrement, setItemsIncrement] = React.useState(0);

    const moreMoviesButtonClickClassName = `movies-card-list__more-movies-button 
    ${(props.movies.length > 12 && itemsToShow < props.movies.length) ? 'movies-card-list__more-movies-button_active' : ''}`;

    const moviesList = props.movies.slice(0, itemsToShow).map((movie) => (
        <MoviesCard movie={movie}
            key={movie.id}
            id={movie.id}
            nameRU={movie.nameRU}
            image={movie.image !== null ? `url(${BASE_MOVIES_URL + movie.image.url})` : `url(https://avrorasochi.ru/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg)`}
            trailerLink={movie.trailerLink}
            duration={movie.duration}
            savedMovies={props.savedMovies}
            fromSavedMovies={props.fromSavedMovies}
            onSaveMovieButtonClick={props.onSaveMovieButtonClick}
            onSavedMovieIconClick={props.onSavedMovieIconClick} />
    ));

    const onMoreMoviesButtonClick = () => {
        setItemsToshow((itemsToShow) => itemsToShow + itemsIncrement);
    }

    React.useEffect(() => {
        if (props.screenSize >= 1280) {
            setItemsToshow(12);
            setItemsIncrement(3);
        } else if (props.screenSize >= 768 && props.screenSize < 1280) {
            setItemsToshow(8);
            setItemsIncrement(2);
        } else if (props.screenSize >= 320 && props.screenSize < 480) {
            setItemsToshow(5);
            setItemsIncrement(2);
        }
    }, [props.screenSize]);

    return (
        <div className='movies'>
            <Header loggedIn={props.loggedIn} handleHamburgerClick={props.handleNavigation} />
            <SearchForm onSearchFormSubmit={props.handleSearchFormSubmit} onCheckboxClick={props.onCkeckboxClick} />
            <MoviesCardList
                moviesList={moviesList}
                itemsToShow={itemsToShow}
                moreMoviesButtonClickClassName={moreMoviesButtonClickClassName}
                onMoreMoviesButtonClick={onMoreMoviesButtonClick}
                isPreloaderVisible={props.isPreloaderVisible}
                isMoviesCardListVisible={props.isMoviesCardListVisible}
                searchResultMessage={props.searchResultMessage}
                screenSize={props.screenSize} />
            <Footer />
        </div>
    )
}

export default Movies;