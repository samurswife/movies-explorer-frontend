import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = (props) => {

    return (
        <div className='movies-card-list center'>
            <div className='movies-card-list__container'>
            {
                props.movies.map((movie, i) => (
                    <MoviesCard movie={movie} key={i} fromSavedMovies={props.fromSavedMovies}/>
                ))
            } 
            </div>
            <button className={`movies-card-list__more-movies-button ${props.fromSavedMovies ? 'movies-card-list__more-movies-button_hidden' : ''}`} onClick={props.onMoreButtonClick}>Ещё</button>
        </div>
    )
}

export default MoviesCardList;