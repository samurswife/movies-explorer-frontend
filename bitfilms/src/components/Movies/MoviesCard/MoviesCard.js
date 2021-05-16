import React from 'react';
import SavedMovies from '../../SavedMovies/SavedMovies';
import './MoviesCard.css';

const MoviesCard = (props) => {

    const [isMovieSaved, setIsMovieSaved] = React.useState(false);

    const handleSaveMovieButtonClick = () => {
        props.onSaveMovieButtonClick(props.movie);
        setIsMovieSaved(true);
    }

    const handleDeleteMovieButtonClick = () => {
        props.onDeleteButtonClick(props.movie);
    }

    const handleSavedMovieIconClick = () => {
        props.onSavedMovieIconClick(props.movie);
        setIsMovieSaved(false);
    }

    React.useEffect(() => {
        if (props.savedMovies) {
            props.savedMovies.forEach((savedMovie) => {
                if (savedMovie.movieId === props.id) {
                    setIsMovieSaved(true);
                }
            })
        }
    },[props.savedMovies]);

    return (
        <div className='movies-card'>

            <button
                className={`movies-card__save-button ${isMovieSaved || props.fromSavedMovies ? 'movies-card__save-button_hidden' : ''}`}
                onClick={handleSaveMovieButtonClick}
                type='button'>Сохранить</button>
            <div
                className={`movies-card__saved-icon ${isMovieSaved ? 'movies-card__saved-icon_visible' : ''}`}
                onClick={handleSavedMovieIconClick}
                alt='Save icon'>
            </div>
            <div
                className={`movies-card__delete-button ${props.fromSavedMovies ? 'movies-card__delete-button_active' : ''}`}
                onClick={handleDeleteMovieButtonClick}
                alt='Delete icon'>
            </div>
            <a href={props.trailerLink} target="_blank" rel="noopener noreferrer" className='movie-card__trailer-link'>
                <div className='movies-card__image' alt={props.nameRU} style={{ backgroundImage: props.image }}></div>
                <div className='movies-card__info'>
                    <p className='movies-card__name'>{props.nameRU}</p>
                    <p className='movies-card__duration'>{Math.floor(props.duration / 60)}ч {Math.floor(props.duration % 60)}м</p>
                </div>
            </a>
        </div>
    )
}

export default MoviesCard;