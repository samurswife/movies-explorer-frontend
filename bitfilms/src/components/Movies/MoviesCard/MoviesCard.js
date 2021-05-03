import React from 'react';
import './MoviesCard.css';

const MoviesCard = (props) => {

    const [savedMovie, setSavedMovie] = React.useState(false);

    const handleSaveMovieButtonClick = () => {
        console.log('Save button clicked!');
        setSavedMovie(true);
    }

    const handleDeleteMovieButtonClick = () => {
        console.log('Delete button clicked!');
    }

    const handlSavedMovieIconClick = () => {
        console.log('Like icon clicked!');
        setSavedMovie(false);
    }

    return (
        <div className='movies-card'>
            <button
                className={`movies-card__save-button ${savedMovie || props.fromSavedMovies ? 'movies-card__save-button_hidden' : ''}`}
                onClick={handleSaveMovieButtonClick}
                type='button'>Сохранить</button>
            <div
                className={`movies-card__saved-icon ${savedMovie ? 'movies-card__saved-icon_ative' : ''}`}
                onClick={handlSavedMovieIconClick}
                alt='Save icon'>
            </div>
            <div
                className={`movies-card__delete-button ${props.fromSavedMovies ? 'movies-card__delete-button_active' : ''}`}
                onClick={handleDeleteMovieButtonClick}
                alt='Delete icon'>
            </div>
            <div className='movies-card__image' alt={props.movie.nameRU} style={{ backgroundImage: `url(${props.movie.image})` }}></div>
            <div className='movies-card__info'>
                <p className='movies-card__name'>{props.movie.nameRU}</p>
                <p className='movies-card__duration'>{Math.floor(props.movie.duration / 60)}ч {Math.floor(props.movie.duration % 60)}м</p>
            </div>
        </div>
    )
}

export default MoviesCard;