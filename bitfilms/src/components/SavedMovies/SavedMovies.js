import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import { SHORT_FILM } from '../../utils/constants';

const SavedMovies = (props) => {

    const [movies, setMovies] = React.useState([]);
    const [filteredMovies, setFilteredMovies] = React.useState([]);
    const [searchResultMessage, setSearchResultMessage] = React.useState('');
    const [isSavedMoviesCardListVisible, setIsSavedMoviesCardListVisible] = React.useState(false);

    const moviesList = movies.map((movie) => (
        <MoviesCard movie={movie}
            key={movie._id}
            id={movie.movieId}
            nameRU={movie.nameRU}
            image={`url(${movie.image})`}
            trailerLink={movie.trailer}
            duration={movie.duration}
            fromSavedMovies={true}
            onDeleteButtonClick={props.onDeleteButtonClick} />
    ));

    const handleSearchFormSubmit = (keyword) => {
        if (!keyword) {
            props.onError('Нужно ввести ключевое слово');
        } else {
            const newMovies = props.handleSearchQuery(movies, keyword);
            if (newMovies.length === 0) {
                setSearchResultMessage('Ничего не найдено');
                setIsSavedMoviesCardListVisible(false);
                return;
            }
            setSearchResultMessage('');
            setIsSavedMoviesCardListVisible(true);
            setMovies(newMovies);
            setFilteredMovies(newMovies);
        }
    }

    React.useEffect(() => {
        props.getSavedMovies();
        setIsSavedMoviesCardListVisible(true);
    }, []);

    React.useEffect(() => {
        setMovies(props.movies);
        setFilteredMovies(props.movies);
    }, [props.movies]);

    React.useEffect(() => {
        if (props.isCheckBoxChecked) {
            const shortFilms = movies.filter((movie) => (movie.duration !== null) && (Number.parseInt(movie.duration) <= SHORT_FILM));
            setMovies(shortFilms);
        } else {
            setMovies(filteredMovies);
        }
    }, [props.isCheckBoxChecked]);

    const moreMoviesButtonClickClassName = `movies-card-list__more-movies-button`;

    return (
        <div className='saved-movies'>
            <Header loggedIn={props.loggedIn} handleHamburgerClick={props.handleNavigation} />
            <SearchForm onSearchFormSubmit={handleSearchFormSubmit} onCheckboxClick={props.onCkeckboxClick} />
            <MoviesCardList
                moviesList={moviesList}
                moreMoviesButtonClickClassName={moreMoviesButtonClickClassName}
                fromSavedMovies={true}
                searchResultMessage={searchResultMessage}
                isMoviesCardListVisible={isSavedMoviesCardListVisible}
            />
            <Footer />
        </div>
    )
}

export default SavedMovies;